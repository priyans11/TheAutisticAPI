import torch
import librosa
import soundfile as sf
from transformers import Wav2Vec2Processor, Wav2Vec2ForSequenceClassification
import os
import requests

MODEL_PATH = "models/wav2vec_EmoDB_30.pth"
MODEL_URL = "https://github.com/Raghav-56/TheAutisticAPI/releases/download/v1.0/wav2vec_EmoDB_30.pth"

if not os.path.exists(MODEL_PATH):
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    print(f"Downloading model from {MODEL_URL}...")
    with requests.get(MODEL_URL, stream=True) as r:
        r.raise_for_status()
        with open(MODEL_PATH, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    print("Download complete.")

model = Wav2Vec2ForSequenceClassification.from_pretrained(MODEL_PATH)
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
