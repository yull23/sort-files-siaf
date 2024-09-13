function searchFile(file, dirFiles, cuis) {
  const name = file.split(".")[0];
  const result = {
    file,
    exist: false,
    cui: "",
    name,
  };

  dirFiles.forEach((cui) => {
    if (cuis[cui].includes(name)) {
      result.exist = true;
      result.cui = cui;
      return;
    }
  });
  return result;
}

module.exports = {
  searchFile,
};
