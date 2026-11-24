import { NextConfig } from "next"

const nextConfig : NextConfig = {
    images: {
        qualities: [10, 75, 100],
        minimumCacheTTL: 7776000,
        deviceSizes: [640, 828, 1080, 1920, 3840],
        imageSizes: [32, 64, 128, 384],
    }
}

export default nextConfig
