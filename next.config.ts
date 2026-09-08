import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Pins the build root to this project, so Next.js doesn't get confused by an
  // unrelated package-lock.json elsewhere on the machine (e.g. in the home directory).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
