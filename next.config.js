/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["d5ibtax54de3q.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
    ],
  },

  trailingSlash: true,
};
