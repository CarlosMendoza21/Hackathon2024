const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'main.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'main.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
