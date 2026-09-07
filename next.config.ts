import type { NextConfig } from "next";

import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    qualities: [90],
  },
};

const nextConfigWithIntl = withIntlayer(nextConfig);

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

export default withBundleAnalyzer(nextConfigWithIntl);
