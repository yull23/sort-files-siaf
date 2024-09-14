function getMissingSiaf(dirFiles, filesName, cuis) {
  const data = dirFiles.map((cui) => {
    const files = cuis[cui];
    const filesMissing = files.filter((file) => !filesName.includes(file));
    console.log(filesMissing);
    return {
      cui,
      filesMissing,
    };
  });
  return data;
}

module.exports = {
  getMissingSiaf,
};
