// otroArchivo.js
const { getFiles } = require("./00-getFiles.js");
const { cuis, filePath, rootDir, dirFiles } = require("./01-vars.js");
const { whatCui, searchFile } = require("./02-getCui.js");

async function app() {
  // Get filenames
  const files = await getFiles(filePath);
  console.log(files);

  // dirFiles.forEach((e) => {
  //   console.log(cuis[e]);
  // });

  console.log(cuis);

  // console.log(cuis.cui2192627.includes("368-2015"));

  const filesInfo = files.map((file) => searchFile(file, dirFiles, cuis));
  console.log(filesInfo);
}

app();
