import type { Metadata } from "next";
import Script from "next/script";
import MetaPixel from "./MetaPixel";
import "./globals.css";

const SITE = "https://www.creategameswithai.com";
const TITLE = "Create Games with AI: Make Your First Game with AI in 5 Minutes";
const DESCRIPTION = "Join the Create Games with AI community. Build your first playable game with AI in 5 minutes, no coding needed. Animate your own characters with Animaitor, enter weekly competitions and publish on gud arcade.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Create Games with AI",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Create Games with AI: master AI game development, publish games and earn" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE}/#org`, name: "Create Games with AI", url: SITE, logo: `${SITE}/og.jpg`, founder: { "@type": "Person", name: "Morgan Page" }, sameAs: ["https://www.skool.com/ai-craft"] },
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Create Games with AI", publisher: { "@id": `${SITE}/#org` } },
  ],
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
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <MetaPixel />
        {/* Privacy-friendly analytics by Plausible */}
        <Script src="https://plausible.io/js/pa-z23RRNWB6Crn2M0wZENpC.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
