import fs from "fs";

const create = async () => {
  const path = "./files/fresh.txt";
  const content = "I am fresh and young";

  fs.writeFile(path, content, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    console.log("Success");
  });
};

await create();
