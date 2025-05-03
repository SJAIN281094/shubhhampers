/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "firebasestorage.googleapis.com",
      "the-little-basket.s3.us-east-1.amazonaws.com",
      "maps.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
