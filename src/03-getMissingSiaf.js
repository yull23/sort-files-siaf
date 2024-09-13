function getMissingSiaf(dirFiles, filesName, cuis) {
  let cont = 0;
  const data = dirFiles.map((cui) => {
    const files = cuis[cui];
    const filesMissing = files.filter((file) => !filesName.includes(file));
    console.log(filesMissing);
    cont += filesMissing.length;
    return {
      cui,
      filesMissing,
    };
  });
  data.unshift(cont);
  return data;
}

module.exports = {
  getMissingSiaf,
};
