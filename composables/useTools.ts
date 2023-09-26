export const getUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://projectm-visualizer.github.io/projectm/"
    : "http://localhost:3000/projectm/";
};
