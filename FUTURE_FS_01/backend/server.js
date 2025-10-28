require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Create MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'future_fs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// POST /api/contact - expects JSON { name, email, phone, message }
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'name, email and message are required' });
  }

  try {
    const sql = 'INSERT INTO contacts (name, email, phone, message, created_at) VALUES (?, ?, ?, ?, NOW())';
    const [result] = await pool.execute(sql, [name, email, phone || null, message]);
    return res.status(201).json({ message: 'Contact saved', id: result.insertId });
  } catch (err) {
    console.error('DB error', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
