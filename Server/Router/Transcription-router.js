const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Environment variables expected in Server process:
// APPWRITE_ENDPOINT, APPWRITE_BUCKET_ID, APPWRITE_KEY,
// ASR_FUNCTION_URL, ASR_FUNCTION_KEY
const {
  APPWRITE_ENDPOINT,
  APPWRITE_BUCKET_ID,
  APPWRITE_KEY,
  ASR_FUNCTION_URL,
  ASR_FUNCTION_KEY,
} = process.env;

router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No audio file provided in "audio" field.' });

    // 1) Upload the received file buffer to Appwrite Storage
    const form = new FormData();
    // Appwrite expects the file under field name 'file'
    form.append('file', req.file.buffer, { filename: req.file.originalname, contentType: req.file.mimetype });

    if (!APPWRITE_ENDPOINT || !APPWRITE_BUCKET_ID || !APPWRITE_KEY) {
      return res.status(500).json({ message: 'Appwrite configuration missing on server.' });
    }

    const uploadUrl = `${APPWRITE_ENDPOINT.replace(/\/$/, '')}/v1/storage/buckets/${APPWRITE_BUCKET_ID}/files`;

    const uploadResp = await axios.post(uploadUrl, form, {
      headers: {
        ...form.getHeaders(),
        'x-appwrite-key': APPWRITE_KEY,
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      timeout: 120000,
    });

    const fileId = uploadResp.data?.$id || uploadResp.data?.id;
    if (!fileId) return res.status(500).json({ message: 'Failed to upload file to Appwrite storage.' });

    // 2) Call ASR function with the Appwrite fileId
    if (!ASR_FUNCTION_URL) return res.status(500).json({ message: 'ASR function URL not configured.' });

    const asrResp = await axios.post(
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

    // 3) Return the function response to the client
    return res.status(asrResp.status === 204 ? 200 : asrResp.status).json(asrResp.data);
  } catch (err) {
    console.error('ASR route error:', err?.response?.data || err.message || err);
    const status = err?.response?.status || 500;
    const message = err?.response?.data?.message || err.message || 'ASR processing failed';
    return res.status(status).json({ message });
  }
});

module.exports = router;
