const fs = require("fs/promises");
const path = require("path");

async function getFiles(filePath) {
  try {
    const files = await fs.readdir(filePath);
    return files;
  } catch (err) {
    console.error("Error al leer la carpeta:", err);
  }
}

// Exportar las variables y funciones
module.exports = {
  getFiles,
};
