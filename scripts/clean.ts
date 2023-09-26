import { promises as fs, existsSync } from "fs";
import { exec } from "child_process";

const directories: string[] = [
  "dist",
  ".nuxt",
  ".output",
  "node_modules/.cache",
  "node_modules/.vite",
  // ".repositories",
  "content/projects",
  "generated",
  "pages/projects/projectm",
];

const files: string[] = [
  "pages/projects/.gitignore",
  "content/projects/.gitignore",
];

// Clean directories
async function cleanDirectories() {
  for (const dir of directories) {
    if (existsSync(dir)) {
      await fs.rm(dir, { recursive: true });
      console.log(`Cleaning ${dir} directory...`);
    }
  }

  for (const file of files) {
    if (existsSync(file)) {
      await fs.rm(file);
      console.log(`Cleaning ${file} file...`);
    }
  }
}

async function main() {
  await cleanDirectories();

  // Run npm install
  exec("npm install", (err, stdout, _stderr) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stdout);
  });
}

main();
