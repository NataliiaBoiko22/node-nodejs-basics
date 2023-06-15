import fs from "fs/promises";

const read = async () => {
  const filePath = "./files/fileToRead.txt";

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
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
