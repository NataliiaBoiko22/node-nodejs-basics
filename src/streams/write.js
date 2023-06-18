// node src/streams/write
// write smth in terminal, "Enter" and check file fileToWrite.txt

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(destination);

  process.stdin.pipe(writeStream);

  process.stdin.on("SIGINT", () => {
    process.exit();
  });
};

(async () => {
  await write();
})();
