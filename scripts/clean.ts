import { promises as fs, existsSync } from "fs";
import { exec } from "child_process";

const directories: string[] = [
  "dist",
  ".nuxt",
  ".output",
  "node_modules/.cache",
  "node_modules/.vite",
  // ".repositories",
];

// Clean directories
async function cleanDirectories() {
  for (const dir of directories) {
    if (existsSync(dir)) {
      await fs.rm(dir, { recursive: true });
      console.log(`Cleaning ${dir} directory...`);
    }
  }
}

cleanDirectories();

// Run npm install
exec("npm install", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
});
