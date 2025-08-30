import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http'
        hostname: 'jesusrafaelnavacruz.vercel.app', // Replace with your allowed hostname
        port: '', // Optional: specify if needed
        pathname: '/img/**', // Optional: restrict to specific paths
      },
      {
        protocol: 'https', // or 'http'
        hostname: 'placehold.co', // Replace with your allowed hostname
        port: '', // Optional: specify if needed
        pathname: '/**', // Optional: restrict to specific paths
      },
      // Add more patterns for other domains as needed
    ],
  },
};

export default nextConfig;
