import type { NextConfig } from "next";
// https://ecommerce.routemisr.com/api/v1/products

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-products/**',
       
      },
    ],
  },
};

export default nextConfig;
