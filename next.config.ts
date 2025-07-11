import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    devIndicators: false,
    output: "export"
};

export default nextConfig;
