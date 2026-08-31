// index.js
const path = require("node:path");
const pc = require("picocolors");
const { leerJSON, escribirTexto } = require("./archivos");
const { generarInforme } = require("./juegos");

async function main() {
  try {
    const rutaEntrada = path.join(__dirname, "..", "datos", "juegos.json");
    const rutaSalida = path.join(__dirname, "..", "salida");

    const juegos = await leerJSON(rutaEntrada);
    const informe = generarInforme(juegos);

    console.log(informe);

    const rutaArchivo = await escribirTexto(rutaSalida, "catalogo-juegos.txt", informe);

    console.log(pc.green(`Informe generado correctamente en: ${rutaArchivo}`));
  } catch (error) {
    console.error(pc.red("Error al ejecutar la aplicación:"), error.message);
    process.exitCode = 1;
  }
}

main();
