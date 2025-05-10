import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const stablekey = process.env.Stable_API_KEY; 


if (!stablekey) {
  console.error('Stable API key is missing!');
  process.exit(1); // Crash early if no API key
}

/**
 * Generate an image from text using Stability AI (returns PNG binary)
 */
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).send('Prompt is required');
    }

    // ✅ Latest Stable Diffusion XL 1.0 API
    const response = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      },
      {
        headers: {
          Authorization: `Bearer ${stablekey}`,
          Accept: 'image/png', // Forces PNG output
        },
        responseType: 'arraybuffer', // Get binary data
      }
    );

    // Set headers and send raw PNG
    res.set({
      'Content-Type': 'image/png',
      'Content-Length': response.data.length,
    });
    res.send(response.data);

  } catch (error) {
    if (error.response && error.response.data) {
      const errorData = error.response.data.toString('utf-8'); // Convert buffer to string
      console.error("Stability AI Error:", errorData);
    } else {
      console.error("Unknown Error:", error.message);
    }
  
    res.status(500).json({ error: "Failed to generate image." });
  }
  
});

export default router;