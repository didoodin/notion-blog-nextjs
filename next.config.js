/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 경고: 타입 에러가 있어도 프로덕션 빌드를 허용
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
