const fs = require("fs");
const path = require("path");

async function movingFiles(filesInfo, dirs, rootDir) {
  filesInfo.forEach((fileInfo) => {
    if (fileInfo.exist) {
      const { cui } = fileInfo;
      const sourcePath = fileInfo.fileName;
      const destinationPath = path.join(fileInfo.folderName, fileInfo.file);

      console.log(sourcePath);
      console.log(destinationPath);

      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          console.error(`Error al mover el archivo ${fileInfo.file}:`, err);
        } else {
          console.log(`Archivo ${fileInfo.file} movido `);
        }
      });
    }
  });
}

module.exports = {
  movingFiles,
};
