// Importar express
const express = require('express');
const bodyParser = require('body-parser');


// Crear la aplicación Express
const app = express();
const PORT = 3000;

//Interpreta los datos de formularios HTML
app.use(bodyParser.urlencoded({ extended: true }));

//Interptesa los datos en formato JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
