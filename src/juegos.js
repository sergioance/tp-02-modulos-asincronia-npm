// juegos.js
function generarInforme(juegos) {
  const encabezado = `Catálogo de Juegos de Mesa\nTotal: ${juegos.length}\n`;

  const cuerpo = juegos
    .map((juego, i) => {
      const estado = juego.disponible ? "Disponible" : "No disponible";
      return `${i + 1}. ${juego.titulo} (${juego.editorial}, ${juego.anio})
   Jugadores: ${juego.jugadoresMin}-${juego.jugadoresMax}
   Categorías: ${juego.categorias.join(", ")}
   Estado: ${estado}`;
    })
    .join("\n\n");

  return `${encabezado}\n${cuerpo}`;
}

module.exports = { generarInforme };
