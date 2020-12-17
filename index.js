const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

app.use('/', createProxyMiddleware({ target: '', changeOrigin: true }));

app.get('/loader', (req, res) => {
  res.send('');
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});