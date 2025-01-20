// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you're deploying a static export (like for GitHub Pages)
  output: "export",

  // If you previously configured basePath/assetPrefix for GitHub Pages, comment or remove them for Vercel:
  // basePath: '/loontune',
  // assetPrefix: '/loontune/',
};

export default nextConfig;
