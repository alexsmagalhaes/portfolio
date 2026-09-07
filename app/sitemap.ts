import type { MetadataRoute } from "next";

import { getMultilingualUrls } from "intlayer";

const SITE_BASE = new URL(process.env.FRONTEND_URL!).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const url = SITE_BASE;

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ...getMultilingualUrls(url),
          "x-default": url,
        },
      },
    },
  ];
}
