const express = require('express');
const router = express.Router();

// Ruta de Inicio
router.get('/', (req, res) => {
  res.send('Página de Inicio');
});

// Ruta de descargas
router.get('/download', (req, res) => {
  res.send('Página de descargas');
});

module.exports = router;