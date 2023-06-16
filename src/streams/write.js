import fs from "fs";

const write = async () => {
  const filePath = "./files/fileToWrite.txt";
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  process.stdin.on("SIGINT", () => {
    process.exit();
  });
};

(async () => {
  await write();
})();
