import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8876/api/:path*"
      }
    ]
  },
};

export default nextConfig;
