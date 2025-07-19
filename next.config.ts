import type { NextConfig } from "next"
// import withBundleAnalyzer from "@next/bundle-analyzer"

// const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const nextConfig: NextConfig = {
  experimental: { viewTransition: true },
  allowedDevOrigins: ["localhost:3000"],

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

// export default withAnalyzer(nextConfig)

export default nextConfig
