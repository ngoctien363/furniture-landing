import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All imagery is served locally from /public/images. To use remote
    // images later, add a `remotePatterns` entry for that host.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
