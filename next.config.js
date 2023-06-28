/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "theboysapi.s3.us-west-2.amazonaws.com",
      },
      {
        hostname: "www.theboysapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
