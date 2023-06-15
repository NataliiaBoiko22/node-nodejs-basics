import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const sourcePath = "./files";
  const copyPath = "./files_copy";

  try {
    if (
      (await fs.access(sourcePath).catch(() => true)) ||
      (await fs.access(copyPath).catch(() => false))
    ) {
      throw new Error("FS operation failed");
    }

    await fs.mkdir(copyPath);

    const files = await fs.readdir(sourcePath);

    for (const file of files) {
      const sourceFile = path.join(sourcePath, file);
      const destinationFile = path.join(copyPath, file);

      const fileContent = await fs.readFile(sourceFile);

      await fs.writeFile(destinationFile, fileContent);
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
