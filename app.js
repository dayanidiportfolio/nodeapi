const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Src Hello, World!');
});

app.get('/api', (req, res) => {
    res.send('Src Api process is done');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
