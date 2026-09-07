import type { ReactNode } from "react";

import { getHTMLTextDir } from "intlayer";
import { IntlayerClientProvider, type NextLayoutIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { Geist, JetBrains_Mono } from "next/font/google";

import { Analytics } from "@/app/_components/analytics";
import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";
import { SmoothScroll } from "@/app/_components/smooth-scroll";
import { Icons } from "@/app/styles/material-icons/icons";
import "@/app/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "system-ui",
    "sans-serif",
  ],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-nono",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "system-ui",
    "sans-serif",
  ],
});

export default async function RootLayout({
  children,
  params,
}: Parameters<NextLayoutIntlayer>[0]): Promise<ReactNode> {
  const { locale } = await params;

  return (
    <html dir={getHTMLTextDir(locale)} lang={locale}>
      <head>
        <Icons />
      </head>
      <body
        className={`${geistSans.className} ${jetBrains.variable} dark antialiased`}
      >
        <IntlayerServerProvider locale={locale}>
          <IntlayerClientProvider locale={locale}>
            <SmoothScroll>
              <Navbar />
              {children}
              <Footer />
            </SmoothScroll>
            <Analytics />
          </IntlayerClientProvider>
        </IntlayerServerProvider>
      </body>
    </html>
  );
}
