import { NextConfig } from "next"

const nextConfig : NextConfig = {
    images: {
        qualities: [10, 75, 100],
        minimumCacheTTL: 7776000
    }
}

export default nextConfig
