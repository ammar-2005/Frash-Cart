import type { NextConfig } from "next";
// https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg
const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
      
        pathname: '/*/**',
        
      },
      
    ],
  },
};
export default nextConfig;