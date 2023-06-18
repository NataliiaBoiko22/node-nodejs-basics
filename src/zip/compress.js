// node src/zip/compress
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = path.join(__dirname, "files", "fileToCompress.txt");
const destination = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);

  output.on("finish", () => {
    console.log(`File compressed to archive.gz`);
  });

  output.on("error", (err) => {
    throw new Error(`Error occurred while compressing file: ${err.message}`);
  });
};

await compress();
