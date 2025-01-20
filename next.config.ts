// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the base path to the repository name (adjust if necessary)
  basePath: "/loontune",
  // Optional: If your site uses asset prefixes, set them accordingly:
  assetPrefix: "/loontune/",
  // Make sure output is static
  output: "export",
};

export default nextConfig;
