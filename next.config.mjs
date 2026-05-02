/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
