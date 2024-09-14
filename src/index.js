const { createTracing } = require("trace_events");
const { getFiles } = require("./00-getFiles.js");
const { cuis, filePath, rootDir, dirFiles } = require("./01-vars.js");
const { searchFile } = require("./02-searchFile.js");
const { getMissingSiaf } = require("./03-getMissingSiaf.js");
const { createDir } = require("./04-CreatingDir.js");

async function app() {
  // Get filenames
  const files = await getFiles(filePath);
  const filesName = files.map((file) => file.split(".")[0]);

  // Files Info Exist
  const filesInfo = files.map((file) => searchFile(file, dirFiles, cuis));

  console.log(filesInfo);

  // Files Missing
  const filesMissing = getMissingSiaf(dirFiles, filesName, cuis);

  // Creating dir
  await createDir(dirFiles, rootDir);

  const appObject = {
    files,
    filesName,
    filesInfo,
    filesMissing,
    rootDir,
  };
}

app();
