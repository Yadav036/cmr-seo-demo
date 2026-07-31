import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ['gleap'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
