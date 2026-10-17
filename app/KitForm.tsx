"use client";

import { useEffect, useRef } from "react";
import { fbTrackCustom } from "./MetaPixel";

const KIT_UID = "567eb74318";

declare global { interface Window { plausible?: (event: string, options?: { props?: Record<string, string> }) => void } }

// Kit's embed script renders the form next to its own <script> tag, so we
// inject the tag into this container on mount. Signups go to Meta as a
// custom EmailSignup event (never Lead, which belongs to Join Skool clicks).
export default function KitForm({ position }: { position: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.querySelector("script")) return;
    const s = document.createElement("script");
    s.async = true;
    s.dataset.uid = KIT_UID;
    s.src = `https://platoevolved.kit.com/${KIT_UID}/index.js`;
    el.appendChild(s);

    const onSubmit = (e: Event) => {
      if (!(e.target as HTMLElement)?.closest?.(".formkit-form")) return;
      try { window.plausible?.("Email Signup", { props: { position } }); } catch {}
      fbTrackCustom("EmailSignup", { content_name: position });
    };
    el.addEventListener("submit", onSubmit, true);
    return () => el.removeEventListener("submit", onSubmit, true);
  }, [position]);

  return <div ref={ref} className="kit-form" style={{ width: "100%", maxWidth: "560px" }} />;
}
