const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'DevOps Assignment API',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime_seconds: process.uptime(),
    memory: process.memoryUsage()
  });
});

app.get('/api/data', (req, res) => {
  const items = Array.from({ length: 10 }, (_, i) => ({ id: i, value: Math.random() }));
  res.json({ items });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));