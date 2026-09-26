import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // تجاهل أخطاء TypeScript أثناء الـ Build على Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // تجاهل أخطاء ESLint أثناء الـ Build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;