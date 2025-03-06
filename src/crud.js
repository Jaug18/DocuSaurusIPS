const express = require('express');
const router = express.Router();

let temas = [];

// Crear un nuevo tema
router.post('/temas', (req, res) => {
  const tema = req.body;
  temas.push(tema);
  res.status(201).send(tema);
});

// Leer todos los temas
router.get('/temas', (req, res) => {
  res.status(200).send(temas);
});

// Leer un tema por ID
router.get('/temas/:id', (req, res) => {
  const tema = temas.find(t => t.id === parseInt(req.params.id));
  if (!tema) return res.status(404).send('Tema no encontrado');
  res.status(200).send(tema);
});

// Actualizar un tema por ID
router.put('/temas/:id', (req, res) => {
  const tema = temas.find(t => t.id === parseInt(req.params.id));
  if (!tema) return res.status(404).send('Tema no encontrado');

  Object.assign(tema, req.body);
  res.status(200).send(tema);
});

// Eliminar un tema por ID
router.delete('/temas/:id', (req, res) => {
  const index = temas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Tema no encontrado');

  temas.splice(index, 1);
  res.status(204).send();
});

module.exports = router;