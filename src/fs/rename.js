// node src/fs/rename

import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, "files", "wrongFilename.txt");
const updatedFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    if (
      (await fs.access(sourceFile).catch(() => true)) ||
      (await fs.access(updatedFile).catch(() => false))
    ) {
      throw new Error("FS operation failed");
    }
    await fs.rename(sourceFile, updatedFile);
    console.log("File renamed successfully.");
  } catch (error) {
    console.error(error);
  }
};
await rename();
