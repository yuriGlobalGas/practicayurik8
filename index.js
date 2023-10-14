const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello new World 2');
})

module.exports = app;
