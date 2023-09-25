import { promises as fs, existsSync } from "fs";
import path from "path";
import * as dotenv from "dotenv";
import AdmZip from "adm-zip";
import { Octokit } from "octokit";

dotenv.config();

const organization = "projectM-visualizer";
const repositoryDir = "./.repositories";

// Create Octokit instance
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Get all github organization repos with docs branch and published
async function getPublishedRepos() {
  const repos = await octokit.rest.repos.listForOrg({
    org: organization,
  });

  const publishedRepos = await Promise.all(
    repos.data.map(async (repo) => {
      const branches = await octokit.rest.repos.listBranches({
        owner: organization,
        repo: repo.name,
      });

      const hasGHPagesBranch = branches.data.some(
        (branch) => branch.name === "docs",
      );

      if (!hasGHPagesBranch || repo.archived) {
        return null; // Skip if no docs branch or archived
      }

      const tree = await octokit.rest.git.getTree({
        owner: organization,
        repo: repo.name,
        tree_sha: "docs",
        recursive: "true",
      });

      const configJson = tree.data.tree.find(
        (item) => item.path === "config.json",
      );

      if (!configJson) {
        return null; // Skip if no config.json file
      }

      const configJsonContent = await octokit.rest.git.getBlob({
        owner: organization,
        repo: repo.name,
        file_sha: configJson.sha as string,
      });

      const configJsonData = JSON.parse(
        Buffer.from(configJsonContent.data.content, "base64").toString(),
      );

      const published = configJsonData.publish;

      if (!published) {
        return null; // Skip if not published
      }

      return {
        name: repo.name,
        url: repo.html_url,
      };
    }),
  );

  return publishedRepos.filter(Boolean); // Filter out null values
}

console.log("Published Repos: ", await getPublishedRepos());

// Create directory if doesnt exist.
async function createDirectory(dirPath: string) {
  if (existsSync(dirPath)) {
    await fs.rm(dirPath, { recursive: true });
  }

  await fs.mkdir(dirPath, { recursive: true });
}

// Download repos/docs to ./.repositories/{repo-name}
async function downloadRepos() {
  const repos = await getPublishedRepos();

  await Promise.all(
    repos.map(async (repo) => {
      const targetDir = path.join(repositoryDir, repo!.name);
      await createDirectory(targetDir);

      const { data } = await octokit.rest.repos.downloadZipballArchive({
        owner: organization,
        repo: repo!.name,
        ref: "docs",
        archive_format: "zipball",
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
      });

      const zipballPath = path.join(targetDir, "docs.zip");
      const bufferData = Buffer.from(data as string);
      await fs.writeFile(zipballPath, bufferData);

      // Extract zipball
      const zip = new AdmZip(zipballPath);
      zip.extractAllTo(targetDir, true);

      // Move files out of the extracted root directory
      const extractedDir = path.join(targetDir, zip.getEntries()[0].entryName);
      const files = await fs.readdir(extractedDir);

      await Promise.all(
        files.map(async (file) => {
          await fs.rename(
            path.join(extractedDir, file),
            path.join(targetDir, file),
          );
        }),
      );

      // Remove zipball and extracted directory
      await fs.rm(zipballPath);
      await fs.rm(extractedDir, { recursive: true });

      console.log(`Repository "${repo!.name}" downloaded to "${targetDir}"`);
    }),
  );
}

downloadRepos();

// Move files from ./.repositories/{repo-name}/content/* to ./content/*
// Move files from ./.repositories/{repo-name}/pages/* to ./pages/*
async function integrateRepos() {
  const repos = await getPublishedRepos();

  await Promise.all(
    repos.map(async (repo) => {
      const contentDir = path.join(repositoryDir, repo!.name, "content");
      const pagesDir = path.join(repositoryDir, repo!.name, "pages");

      const contentFiles = await fs.readdir(contentDir);
      const pagesFiles = await fs.readdir(pagesDir);

      await Promise.all(
        contentFiles.map(async (file) => {
          await fs.rename(
            path.join(contentDir, file),
            path.join("./content", file),
          );
        }),
      );

      await Promise.all(
        pagesFiles.map(async (file) => {
          await fs.rename(
            path.join(pagesDir, file),
            path.join("./pages", file),
          );
        }),
      );

      console.log(`Repository "${repo!.name}" integrated`);
    }),
  );
}

integrateRepos();
