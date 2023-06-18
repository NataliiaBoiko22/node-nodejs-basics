// node src/wt/main
import os from "os";
import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const numCPUs = os.cpus().length;

  if (isMainThread) {
    const results = [];
    let num = 10;

    for (let i = 0; i < numCPUs; i++) {
      const worker = new Worker(workerPath);

      worker.on("message", (result) => {
        results.push(result);
        if (results.length === numCPUs) {
          console.log(results);
        }
      });

      worker.on("error", (err) => {
        results.push({ status: "error", data: null });
        if (results.length === numCPUs) {
          console.log(results);
        }
      });

      worker.postMessage(num);
      num++;
    }
  }
};

await performCalculations();
