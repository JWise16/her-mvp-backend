const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const corsOptions = {
  origin: [
    'https://main.d31d6rj592ty6e.amplifyapp.com', // Amplify app
    'https://ask-allie.com',
    'https://www.ask-allie.com',
    'https://api.ask-allie.com',                  // Your API domain
    'http://localhost:5173'                       // Local dev
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`her-mvp-backend listening on port ${PORT}`);
});
