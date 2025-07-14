import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for static HTML export
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

export default nextConfig;
