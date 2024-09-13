const { getFiles } = require("./00-getFiles.js");
const { cuis, filePath, rootDir, dirFiles } = require("./01-vars.js");
const { searchFile } = require("./02-searchFile.js");

async function app() {
  // Get filenames
  const files = await getFiles(filePath);

  // Files Info
  const filesInfo = files.map((file) => searchFile(file, dirFiles, cuis));
  console.log(filesInfo);
}

app();
