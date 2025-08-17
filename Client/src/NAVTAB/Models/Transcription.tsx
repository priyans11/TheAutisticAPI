import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { cn } from '../../lib/utils';
import { GlowingEffect } from '../../components/ui/glowing-effect';

const Transcription: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!baseURL) return;
    fetch(`${baseURL}/`).catch(() => {});
  }, [baseURL]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0] || null);
    setTranscript(null);
    setError(null);
  };

  const submitAudio = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    setTranscript(null);
    setError(null);

    try {
      const form = new FormData();
      form.append('audio', selectedFile);

      const resp = await axios.post(`${baseURL}/api/asr/transcribe`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000,
      });

      const data = resp.data || {};
      const text = data.transcript || data.text || data.result || JSON.stringify(data);
      setTranscript(typeof text === 'string' ? text : JSON.stringify(text));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Transcription failed. Try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light mb-4 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Speech Transcription
          </h1>
          <p className="text-gray-400">Upload an audio file (wav, mp3, m4a, flac, ogg) to transcribe.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border border-white/10 rounded-xl p-1 mb-6">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={70} inactiveZone={0.01} borderWidth={1.5} />
            <div className="relative rounded-lg bg-black/50 p-6">
              <div className="text-center">
                <label className="cursor-pointer relative block">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6">
                    <p className="text-lg text-gray-300 mb-2">
                      {selectedFile ? selectedFile.name : 'Click to choose audio or drop here'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • ${selectedFile.type}` : 'wav, flac, mp3, m4a, ogg'}
                    </p>
                  </div>
                  {/* make the input cover the label so clicking anywhere opens file picker */}
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                <div className="mt-6">
                  <button
                    onClick={submitAudio}
                    disabled={!selectedFile || isLoading}
                    className={cn(
                      'px-6 py-3 rounded-lg font-medium',
                      selectedFile && !isLoading ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    )}
                  >
                    {isLoading ? 'Transcribing...' : 'Transcribe Audio'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4 text-red-300">{error}</div>}

          {transcript && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-lg text-green-300 mb-2">Transcription</h3>
              <pre className="whitespace-pre-wrap text-sm text-white/90">{transcript}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transcription;
