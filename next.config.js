/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|flv|mov)$/,
      use: {
        loader: "ignore-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
