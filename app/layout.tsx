import { Geist, JetBrains_Mono } from "next/font/google";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { SmoothScroll } from "./_components/smooth-scroll";
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
          <div className="h-250"></div>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
