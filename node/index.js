const express = require('express');
const app = express();
const port = 80; // Docker exposes port 80

app.get('/', (req, res) => {
  res.send('Hello from inside a Docker container!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
