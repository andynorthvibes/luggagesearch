import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // No remotePatterns: every image is now served from public/ (see
  // scripts/download-guide-images.mjs) -- previously an unrestricted
  // `hostname: "**"` was needed for hotlinked Unsplash photos.
  // Pins the build root to this project, so Next.js doesn't get confused by an
  // unrelated package-lock.json elsewhere on the machine (e.g. in the home directory).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
