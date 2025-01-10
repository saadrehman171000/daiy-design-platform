import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      }
    ],
  },
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  // Disable auth features for static export
  auth: {
    enabled: false
  }
};

export default nextConfig;
