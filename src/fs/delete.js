import fs from "fs/promises";

const remove = async () => {
  const fileToRemove = "./files/fileToRemove.txt";

  try {
    if (await fs.access(fileToRemove).catch(() => true)) {
      throw new Error("FS operation failed");
    }
    await fs.unlink(fileToRemove);
    console.log("File deleted successfully.");
  } catch (error) {
    console.error(error);
  }
};

await remove();
