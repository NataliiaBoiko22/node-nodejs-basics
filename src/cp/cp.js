// node src/cp/cp
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [source, ...args], {
    stdio: ["pipe", "pipe", process.stderr, "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["argument1", "argument2", "argument3"]);
