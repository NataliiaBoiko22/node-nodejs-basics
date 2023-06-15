import fs from "fs/promises";

const create = async () => {
  const path = "./files/fresh.txt";
  const content = "I am fresh and young";
  try {
    if (!(await fs.access(path).catch(() => true))) {
      throw new Error("FS operation failed");
    }

    await fs.writeFile(path, content);
    console.log("Success");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
