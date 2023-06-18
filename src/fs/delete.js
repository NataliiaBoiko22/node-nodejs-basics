// node src/fs/delete

import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    if (await fs.access(destination).catch(() => true)) {
      throw new Error("FS operation failed");
    }
    await fs.unlink(destination);
    console.log("File deleted successfully.");
  } catch (error) {
    console.error(error);
  }
};

await remove();
