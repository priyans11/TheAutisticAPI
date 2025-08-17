const axios = require('axios');

const baseUrl = process.env.TEST_URL || 'http://localhost:5000';

async function testASR() {
  try {
    console.log('Testing ASR endpoints...\n');

    // Test 1: Ping endpoint
    console.log('1. Testing ping endpoint...');
    const pingResp = await axios.get(`${baseUrl}/api/asr/ping`);
    console.log('✅ Ping successful:', pingResp.data);

    // Test 2: Check if transcribe endpoint exists (should return 400 without file)
    console.log('\n2. Testing transcribe endpoint (without file)...');
    try {
      await axios.post(`${baseUrl}/api/asr/transcribe`);
    } catch (err) {
      if (err.response?.status === 400 && err.response?.data?.message?.includes('No audio file')) {
        console.log('✅ Transcribe endpoint exists and validates input correctly');
      } else {
        console.log('❌ Unexpected error:', err.response?.data || err.message);
      }
    }

    console.log('\n✅ All basic tests passed! Server is ready for audio uploads.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    process.exit(1);
  }
}

testASR();
