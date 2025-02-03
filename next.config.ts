import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/nidolight',
  assetPrefix: '/nidolight',
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
