// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const OpenAI = require('openai');
require('dotenv').config();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // For local cert fix

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Delay to avoid rate limiting (429 error)
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second wait

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'OpenAI API connection failed.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
