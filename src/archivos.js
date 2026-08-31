// archivos.js
const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJSON(ruta) {
  const contenido = await fs.readFile(ruta, "utf8");
  return JSON.parse(contenido);
}

async function escribirTexto(rutaCarpeta, nombreArchivo, contenido) {
  await fs.mkdir(rutaCarpeta, { recursive: true });
  const rutaCompleta = path.join(rutaCarpeta, nombreArchivo);
  await fs.writeFile(rutaCompleta, contenido, "utf8");
  return rutaCompleta;
}

module.exports = { leerJSON, escribirTexto };
