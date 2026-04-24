import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow local images; add domains here if using external CDN
    remotePatterns: [],
  },
  // Optimize for large public asset directories (frame sequences)
  experimental: {
    optimizePackageImports: ['lenis'],
  },
};

export default nextConfig;
