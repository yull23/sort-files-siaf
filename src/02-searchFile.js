const path = require("path");

function searchFile(file, dirFiles, cuis, rootDir) {
  const name = file.split(".")[0];
  const result = {
    file,
    exist: false,
    cui: "",
    name,
    fileName: "",
  };

  dirFiles.forEach((cui) => {
    if (cuis[cui].includes(name)) {
      result.exist = true;
      result.cui = cui;
      result.folderName = path.join(rootDir, "..", "public", cui);
      result.fileName = path.join(rootDir, "..", "public", file);
      return;
    }
  });
  return result;
}

module.exports = {
  searchFile,
};
