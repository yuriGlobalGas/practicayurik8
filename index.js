const express = require('express');
const os=requiere('es');
const hostname =os.hostname();
console.log("El nombre de la maquina es",hostname);

const app = express();

app.get('/', (req, res) => {
  res.send("El nombre de la maquina es",hostname);
})

module.exports = app;
