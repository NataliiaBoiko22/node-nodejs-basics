// node src/zip/decompress

import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = path.join(__dirname, "files", "archive.gz");
const destination = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  try {
    const inputStream = fs.createReadStream(source);
    const unzip = zlib.createGunzip();
    const outputStream = fs.createWriteStream(destination);

    await new Promise((resolve, reject) => {
      inputStream
        .pipe(unzip)
        .pipe(outputStream)
        .on("finish", resolve)
        .on("error", reject);
    });

    console.log("File decompressed successfully");
  } catch (err) {
    console.error(`Error during decompression: ${err.message}`);
  }
};

await decompress();
