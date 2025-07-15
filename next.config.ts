import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for static HTML export
  // basePath: '/Personal-Website',
  // assetPrefix: '/Personal-Website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

export default nextConfig;
