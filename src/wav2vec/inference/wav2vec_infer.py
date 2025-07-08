import torch
import librosa
import soundfile as sf
from transformers import Wav2Vec2Processor, Wav2Vec2ForSequenceClassification

model = Wav2Vec2ForSequenceClassification.from_pretrained("models/wav2vec_EmoDB_30.pth")
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")


def load_audio(file_path):
    audio, _ = librosa.load(file_path, sr=16000)
    return audio


def predict_emotion(audio):
    inputs = processor(audio, sampling_rate=16000, return_tensors="pt", padding=True)
    with torch.no_grad():
        logits = model(inputs.input_values).logits
    predicted_class = logits.argmax().item()
    return predicted_class


if __name__ == "__main__":
    audio_file = "path/to/your/audio.wav"  # Replace with your audio file path
    audio = load_audio(audio_file)
    emotion = predict_emotion(audio)
    print(f"Predicted Emotion: {emotion}")
