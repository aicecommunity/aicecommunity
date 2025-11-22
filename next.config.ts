import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Prevent Next.js from trying to bundle pdf.js on the server
    if (isServer) {
      config.externals = [...(config.externals || []), "pdfjs-dist/build/pdf.js"];
    }

    // Prevent Webpack from trying to resolve Node-only modules
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
      fs: false,
      path: false,
    };

    return config;
  },
};

export default nextConfig;
