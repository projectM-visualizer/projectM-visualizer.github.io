export const getUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://projectm-visualizer.github.io/"
    : "http://localhost:3000/";
};

export const getProjectsUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://projectm-visualizer.github.io/projects/"
    : "http://localhost:3000/projects/";
};

export const getProjectMUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://projectm-visualizer.github.io/projects/projectm/"
    : "http://localhost:3000/projects/projectm/";
};
