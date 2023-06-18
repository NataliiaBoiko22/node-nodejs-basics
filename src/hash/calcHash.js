// node src/hash/calcHash

import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destination = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const input = fs.createReadStream(destination);
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
