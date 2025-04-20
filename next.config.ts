import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // 경고: 타입 에러가 있어도 프로덕션 빌드를 허용
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
