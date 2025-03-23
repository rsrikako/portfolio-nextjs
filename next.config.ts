import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if using images
  },
};

export default nextConfig;
