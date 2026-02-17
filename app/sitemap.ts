import type { MetadataRoute } from "next";

const SITE_BASE = new URL(process.env.FRONTEND_URL!).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
