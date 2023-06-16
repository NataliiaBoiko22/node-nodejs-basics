import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const filePath = "./files/fileToCalculateHashFor.txt";
  const hash = crypto.createHash("sha256");
  const input = fs.createReadStream(filePath);
  return new Promise((resolve, reject) => {
    input.on("readable", () => {
      const data = input.read();
      if (data) {
        hash.update(data);
      } else {
        const fileHash = hash.digest("hex");
        resolve(fileHash);
      }
    });

    input.on("error", (error) => {
      reject(error);
    });
  });
};

const fileToCalculateHashFor = "fileToCalculateHashFor.txt";

calculateHash(fileToCalculateHashFor)
  .then((fileHash) => {
    console.log("SHA256 Hash:", fileHash);
  })
  .catch((error) => {
    console.error("Error calculating hash:", error);
  });

await calculateHash();
