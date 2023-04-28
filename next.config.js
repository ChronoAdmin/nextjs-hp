// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.microcms-assets.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env:{
    BASE_URL:"http://localhost:3000",
    MONGODB_URL:"mongodb+srv://reiji:rsvdpalseUtTLB7F@cluster0.2gryf3a.mongodb.net/nextjs_ec_chrono?retryWrites=true&w=majority"
  }
};

module.exports = nextConfig;
