const { getFiles } = require("./00-getFiles.js");
const { cuis, filePath, rootDir, dirFiles } = require("./01-vars.js");
const { searchFile } = require("./02-searchFile.js");
const { getMissingSiaf } = require("./03-getMissingSiaf.js");

async function app() {
  // Get filenames
  const files = await getFiles(filePath);
  const filesName = files.map((file) => file.split(".")[0]);

  // Files Info Exist
  const filesInfo = files.map((file) => searchFile(file, dirFiles, cuis));

  // Files Missing
  const filesMissing = getMissingSiaf(dirFiles, filesName, cuis);
  console.log(filesMissing[0]);
}

app();
