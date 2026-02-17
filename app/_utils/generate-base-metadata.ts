import type { Metadata } from "next";

interface GenerateBaseMetadataProps {
  url: string;
  title: string;
  description: string;
}

export function generateBaseMetadata({
  url,
  title,
  description,
}: GenerateBaseMetadataProps): Metadata {
  const baseUrl = new URL(process.env.FRONTEND_URL!);
  const fullUrl = new URL(url, baseUrl);

  return {
    metadataBase: baseUrl,

    applicationName: process.env.APPLICATION_NAME!,

    title,
    description,

    alternates: {
      canonical: fullUrl.pathname,
    },

    openGraph: {
      type: "website",
      url: fullUrl,
      siteName: process.env.APPLICATION_NAME!,
      title,
      description,
      images: [
        {
          url: "/ogi.png",
          width: 1200,
          height: 630,
          alt: process.env.APPLICATION_NAME!,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogi.png"],
    },

    icons: {
      icon: "/webclip.png",
      apple: "/webclip.png",
    },
  };
}
