const express = require('express');
const app = express();
const path = require('path');

// Define la carpeta de archivos estáticos (como HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor en el puerto 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Utiliza path.join para construir la ruta completa al archivo HTML
  res.sendFile(path.join(__dirname, 'public', 'metronomo.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
