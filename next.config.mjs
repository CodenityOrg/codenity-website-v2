/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars0.githubusercontent.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
