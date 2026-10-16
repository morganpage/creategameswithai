"use client";

import Script from "next/script";
import { useEffect } from "react";

export const PIXEL_ID = "1257485894793364";

type Fbq = (...args: unknown[]) => void;
declare global { interface Window { fbq?: Fbq } }

export function fbTrackCustom(event: string, params?: Record<string, string>) {
  try { window.fbq?.("trackCustom", event, params); } catch {}
}

// Join Skool clicks go to Meta as Lead, never a purchase-type event, so the
// Skool Purchase optimisation on this same pixel stays clean.
export default function MetaPixel() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || !a.href.startsWith("https://www.skool.com/ai-craft")) return;
      const position = a.className.match(/plausible-event-position=([\w-]+)/)?.[1] ?? "unknown";
      try { window.fbq?.("track", "Lead", { content_name: position }); } catch {}
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
