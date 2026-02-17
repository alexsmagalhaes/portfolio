import { Geist, JetBrains_Mono } from "next/font/google";

import { Analytics } from "./_components/analytics";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { SmoothScroll } from "./_components/smooth-scroll";
import { generateBaseMetadata } from "./_utils/generate-base-metadata";
import "./styles/globals.css";
import { Icons } from "./styles/material-icons/icons";

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

export function generateMetadata() {
  return generateBaseMetadata({
    url: "/",
    title: "Alex Magalhães - Dev",
    description:
      "Pare de reinventar a roda. Enquanto outros desenvolvedores ainda configuram login, você já estará coletando feedback.",
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Icons />
      </head>
      <body
        className={`${geistSans.className} ${jetBrains.variable} dark antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
