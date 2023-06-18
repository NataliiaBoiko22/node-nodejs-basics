//node src/streams/read

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(destination);
  readStream.pipe(process.stdout);
};

await read();
