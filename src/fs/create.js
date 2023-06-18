// node src/fs/create

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destination = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  const content = "I am fresh and young";
  try {
    if (!(await fs.access(destination).catch(() => true))) {
      throw new Error("FS operation failed");
    }

    await fs.writeFile(destination, content);
    console.log("Success");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
