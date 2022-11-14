/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  //add domains
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
