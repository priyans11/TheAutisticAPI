const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Environment variables expected in Server process:
// APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID (optional), APPWRITE_BUCKET_ID, APPWRITE_KEY,
// ASR_FUNCTION_URL, ASR_FUNCTION_KEY (optional)
const {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  APPWRITE_BUCKET_ID,
  APPWRITE_KEY,
  ASR_FUNCTION_URL,
  ASR_FUNCTION_KEY,
} = process.env;

// Health endpoint
router.get('/ping', (req, res) => {
  res.json({ ok: true, route: '/api/asr/ping' });
});

// POST /api/asr/transcribe
router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    console.log('[ASR] /transcribe called');

    if (!req.file) {
      console.warn('[ASR] No file in request');
      return res.status(400).json({ message: 'No audio file provided in "audio" field.' });
    }

    // Validate required envs early
    if (!APPWRITE_ENDPOINT || !APPWRITE_BUCKET_ID || !APPWRITE_KEY) {
      console.error('[ASR] Missing Appwrite configuration', { APPWRITE_ENDPOINT, APPWRITE_BUCKET_ID, hasKey: !!APPWRITE_KEY });
      return res.status(500).json({ message: 'Server missing Appwrite configuration (APPWRITE_ENDPOINT, APPWRITE_BUCKET_ID, APPWRITE_KEY).' });
    }
    if (!ASR_FUNCTION_URL) {
      console.error('[ASR] Missing ASR_FUNCTION_URL');
      return res.status(500).json({ message: 'Server missing ASR_FUNCTION_URL.' });
    }

    console.log('[ASR] Preparing upload to Appwrite', { filename: req.file.originalname, size: req.file.size });

    const form = new FormData();
    form.append('file', req.file.buffer, { filename: req.file.originalname, contentType: req.file.mimetype });

    const uploadUrl = `${APPWRITE_ENDPOINT.replace(/\/$/, '')}/v1/storage/buckets/${APPWRITE_BUCKET_ID}/files`;

    let uploadResp;
    try {
      uploadResp = await axios.post(uploadUrl, form, {
        headers: {
          ...form.getHeaders(),
          'x-appwrite-key': APPWRITE_KEY,
          ...(APPWRITE_PROJECT_ID ? { 'x-appwrite-project': APPWRITE_PROJECT_ID } : {}),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        timeout: 120000,
      });
    } catch (uploadErr) {
      console.error('[ASR] Appwrite upload failed', uploadErr?.response?.data || uploadErr.message || uploadErr);
      const status = uploadErr?.response?.status || 502;
      const detail = uploadErr?.response?.data || uploadErr.message;
      return res.status(status).json({ message: 'Failed to upload file to Appwrite storage.', detail });
    }

    console.log('[ASR] Appwrite upload response', uploadResp.status);

    const fileId = uploadResp.data?.$id || uploadResp.data?.id;
    if (!fileId) {
      console.error('[ASR] No fileId returned from Appwrite upload', uploadResp.data);
      return res.status(500).json({ message: 'Appwrite upload succeeded but did not return fileId.', detail: uploadResp.data });
    }

    // Call ASR function with the fileId
    console.log('[ASR] Calling ASR function', { url: ASR_FUNCTION_URL, fileId });

    let asrResp;
    try {
      asrResp = await axios.post(
        ASR_FUNCTION_URL,
        { fileId },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-appwrite-key': ASR_FUNCTION_KEY || APPWRITE_KEY,
          },
          timeout: 300000,
        }
      );
    } catch (funcErr) {
      console.error('[ASR] ASR function call failed', funcErr?.response?.data || funcErr.message || funcErr);
      const status = funcErr?.response?.status || 502;
      const detail = funcErr?.response?.data || funcErr.message;
      return res.status(status).json({ message: 'ASR function call failed.', detail });
    }

    console.log('[ASR] ASR function response', asrResp.status);
    // Normalize 204 -> 200 and forward body
    const statusToReturn = asrResp.status === 204 ? 200 : asrResp.status;
    return res.status(statusToReturn).json(asrResp.data);
  } catch (err) {
    console.error('[ASR] Unexpected error', err?.stack || err?.message || err);
    return res.status(500).json({ message: 'Internal server error processing ASR request.', detail: err?.message });
  }
});

module.exports = router;
