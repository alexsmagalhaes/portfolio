import type { MetadataRoute } from "next";

const SITE_BASE = new URL(process.env.FRONTEND_URL!).toString();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    host: SITE_BASE,
    sitemap: `${SITE_BASE}/sitemap.xml`,
  };
}
