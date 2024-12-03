import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "eincode.com",
      "thrangra.sirv.com",
    ],
  },
};

export default nextConfig;
