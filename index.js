const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4000; // Puerto en el que se ejecutará el servidor

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html'); // Ruta al archivo HTML
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error al leer el archivo: ${err}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
}).listen(port);

console.log(`Servidor ejecutándose en http://localhost:${port}`);
