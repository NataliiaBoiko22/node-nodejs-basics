// node src/fs/copy

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files");
const destination = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    const sourcePathExists = await fs
      .access(source)
      .then(() => true)
      .catch(() => false);
    const copyPathExists = await fs
      .access(destination)
      .then(() => true)
      .catch(() => false);

    if (!sourcePathExists || copyPathExists) {
      throw new Error("FS operation failed");
    }

    await fs.mkdir(destination);

    const files = await fs.readdir(source);

    for (const file of files) {
      const sourceFile = path.join(source, file);
      const destinationFile = path.join(destination, file);

      const fileContent = await fs.readFile(sourceFile);

      await fs.writeFile(destinationFile, fileContent);
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
