import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "the-little-basket.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/images/**"
      }
    ]
  }
};

export default nextConfig;
