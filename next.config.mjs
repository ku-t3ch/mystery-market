/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    swcMinify: true,
    basePath: "/mystery-market",
    env: {
        basePath: "/mystery-market",
    },
};

export default nextConfig;
