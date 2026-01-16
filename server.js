const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const validKeys = new Set(
  (process.env.VALID_KEYS || '').split(',')
);

app.get('/api/validate', (req, res) => {
  const key = req.query.key;
  if (!key || typeof key !== 'string') {
    return res.status(400).json({ error: 'Missing key' });
  }
  const isValid = validKeys.has(key.trim());
  res.json({ valid: isValid });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
