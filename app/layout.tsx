import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Games with AI",
  description: "Make your first game with AI in 5 minutes, animate your own characters with Animaitor and publish on gud arcade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Barlow:wght@400;600;700&family=Barlow+Condensed:wght@700;800&family=Archivo+Black&family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
