// @ts-check
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.microcms-assets.io"],
  },
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // 開発ビルド時のみバンドルアナライザを有効にする
    if (dev && process.env.ANALYZE === 'true') {
      config.plugins.push(new BundleAnalyzerPlugin())
    }

    return config;
  },
  env:{
    BASE_URL:"http://localhost:3000",
    MONGODB_URL:"mongodb+srv://reiji:rsvdpalseUtTLB7F@cluster0.2gryf3a.mongodb.net/nextjs_ec_chrono?retryWrites=true&w=majority"
  }
};

module.exports = nextConfig;
