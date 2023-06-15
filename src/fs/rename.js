import fs from "fs/promises";

const rename = async () => {
  const wrongFile = "./files/wrongFilename.txt";
  const properFile = "./files/properFilename.md";

  try {
    if (
      (await fs.access(wrongFile).catch(() => true)) ||
      (await fs.access(properFile).catch(() => false))
    ) {
      throw new Error("FS operation failed");
    }
    await fs.rename(wrongFile, properFile);
    console.log("File renamed successfully.");
  } catch (error) {
    console.error(error);
  }
};
await rename();
