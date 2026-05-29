const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get('/health', (req, res) => res.json({ status: 'UP' }));

app.get('/api/requerimentos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM requerimentos');
    res.json(result.rows);
  } catch (err) {
    console.error("Erro no banco:", err.message);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;