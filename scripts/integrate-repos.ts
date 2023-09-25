import { promises as fs, existsSync, readdirSync, statSync } from "fs";
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
async function createDirectory(dirPath: string, rm: boolean = false) {
  if (existsSync(dirPath) && rm) {
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
      await createDirectory(targetDir, true);

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

// Move directory recursively
async function moveDirectory(source: string, target: string) {
  await createDirectory(target);

  const items = readdirSync(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);
    const stats = statSync(sourcePath);

    if (stats.isDirectory()) {
      await moveDirectory(sourcePath, targetPath);
      // await fs.rm(sourcePath, { recursive: true });
    } else {
      await fs.rename(sourcePath, targetPath);
    }
  }
}

// Integrate repos/docs into content and pages directories
async function integrateRepos() {
  const sourceDir = path.join(".", ".repositories");

  try {
    // Get a list of repositories
    const repos = await fs.readdir(sourceDir);

    // Iterate through each repository
    for (const repo of repos) {
      const targetContentDir = path.join(".", "content", repo);
      const targetPagesDir = path.join(".", "pages", repo);

      await createDirectory(targetContentDir, true);
      await createDirectory(targetPagesDir, true);

      const contentSource = path.join(sourceDir, repo, "content");
      const pagesSource = path.join(sourceDir, repo, "pages");

      // Move content directory
      if (await existsSync(contentSource)) {
        await moveDirectory(contentSource, targetContentDir);
      }

      // Move pages directory
      if (await existsSync(pagesSource)) {
        await moveDirectory(pagesSource, targetPagesDir);
      }

      // Create .gitignore file in content directory, and write the repo name to it
      const contentGitignorePath = path.join(".", "content", ".gitignore");
      await fs.writeFile(contentGitignorePath, repo);

      const pagesGitignorePath = path.join(".", "pages", ".gitignore");
      await fs.writeFile(pagesGitignorePath, repo);
    }
  } catch (error) {
    console.error(`Error integrating repositories: ${error}`);
  }
}

integrateRepos();
