const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR')
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('API ONLINE 🚀');
});