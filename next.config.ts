import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add empty turbopack config to silence the error since webpack config is minimal
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
    };
    return config;
  },
};

export default nextConfig;
