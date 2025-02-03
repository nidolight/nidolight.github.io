import type { NextConfig } from "next";

const debug = process.env.NODE_ENV !== "production";
const repository = "nidolight.github.io";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로

  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
