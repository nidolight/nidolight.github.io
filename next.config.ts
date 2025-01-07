import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export', // 정적 HTML로 내보내기
  basePath: '/nidolight',
  assetPrefix: '/nidolight',
};

export default nextConfig;
