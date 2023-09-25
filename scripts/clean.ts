import { rimraf } from "rimraf";

const directories: string[] = [
  "dist",
  ".nuxt",
  ".output",
  "node_modules/.cache",
  "node_modules/.vite",
];

rimraf(directories, {});
