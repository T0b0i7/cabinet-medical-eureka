/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "cabinet-medical-eureka";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
  // Export statique pour GitHub Pages (aucun serveur Node en production).
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
