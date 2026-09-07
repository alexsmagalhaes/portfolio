import type { __DictionaryRegistry } from "intlayer";
import type { Metadata } from "next";
import type { LocalPromiseParams } from "next-intlayer";

import { getIntlayer, getMultilingualUrls } from "intlayer";

type PageMetadataDictionary = {
  title: string;
  description: string;
};

interface GenerateBaseMetadataProps {
  params: LocalPromiseParams["params"];
  dictionaryKey: keyof __DictionaryRegistry;
  path: string;
}

export async function generateBaseMetadata({
  params,
  dictionaryKey,
  path,
}: GenerateBaseMetadataProps): Promise<Metadata> {
  const { locale } = await params;

  const metadata = getIntlayer(dictionaryKey, locale) as PageMetadataDictionary;

  const baseUrl = new URL(process.env.FRONTEND_URL!);
  const fullUrl = new URL(path, baseUrl);

  const multilingualUrls = getMultilingualUrls(path);
  const localizedUrl =
    multilingualUrls[locale as keyof typeof multilingualUrls];

  return {
    metadataBase: baseUrl,

    applicationName: process.env.APPLICATION_NAME!,

    title: metadata.title,
    description: metadata.description,

    alternates: {
      canonical: localizedUrl,
      languages: {
        ...multilingualUrls,
        "x-default": fullUrl.pathname,
      },
    },

    openGraph: {
      type: "website",
      url: localizedUrl,
      siteName: process.env.APPLICATION_NAME!,
      title: metadata.title,
      description: metadata.description,
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
      title: metadata.title,
      description: metadata.description,
      images: ["/ogi.png"],
    },

    icons: {
      icon: "/webclip.png",
      apple: "/webclip.png",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
