const fs = require("fs/promises");
const path = require("path");

const rootDir = path.resolve(__dirname);
const filePath = path.resolve(rootDir, "..", "public");

async function miFuncion() {
  try {
    const files = await fs.readdir(filePath);
    console.log(files);
  } catch (err) {
    console.error("Error al leer la carpeta:", err);
  }
}
miFuncion();

// Exportar las variables y funciones
module.exports = {
  miFuncion,
};
