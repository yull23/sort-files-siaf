function whatCui(files, dirFiles, cuis) {
  const result = {
    id: false,
  };
  files.forEach((file) => {
    const name = file.split(".")[0];

    dirFiles.forEach((cui) => {
      if (cuis[cui].includes(name)) {
        id = true;
        return;
      }
    });
    return id;
  });
}

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
  whatCui,
  searchFile,
};
