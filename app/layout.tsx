import { Geist } from "next/font/google";

import "./styles/globals.css";
import { Icons } from "./styles/material-icons/icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Inter",
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
      <body className={`${geistSans.className} dark antialiased`}>
        ssssaOlá{children}
      </body>
    </html>
  );
}
