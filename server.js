const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Aquí reemplazas tu fs.readFile original
    const filePath = path.join(__dirname, "D1P5/D1P5.html");
    console.log("Leyendo archivo en:", filePath);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error al cargar la página");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
