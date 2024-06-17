// src/index.js

const message = 'Hello Nodejs';
console.log(message);

// ===== Створення вебсервісу ===== //

import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world and congratulations!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
