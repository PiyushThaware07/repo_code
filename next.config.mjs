/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // This will skip ESLint checks during production builds
    },
};

export default nextConfig;
