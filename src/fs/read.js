// node src/fs/read
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await fs.readFile(source, "utf8");
    console.log(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await read();
