const express = require('express');
const bodyParser = require('body-parser');
const crudRoutes = require('./crud');

const app = express();
app.use(bodyParser.json());
app.use('/api', crudRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de documentación');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});