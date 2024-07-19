/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    swcMinify: true,
    basePath: "/mystery-market",
    env: {
        basePath: "/mystery-market",
    },
};

export default nextConfig;
