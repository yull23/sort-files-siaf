const fs = require("fs");

async function createDir(dirs) {
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
          console.error(`Error al crear el directorio ${dir}:`, err);
        } else {
          console.log(`Directorio creado: ${dir}`);
        }
      });
    } else {
      console.log(`El directorio ya existe: ${dir}`);
    }
  });
}

module.exports = {
  createDir,
};
