import fs from "fs/promises";

const list = async () => {
  const folderPath = "./files";

  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    console.log("File List:");
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
