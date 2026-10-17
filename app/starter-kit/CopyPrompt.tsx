"use client";

import { useState } from "react";

declare global { interface Window { plausible?: (event: string, options?: { props?: Record<string, string> }) => void } }

export default function CopyPrompt({ text, name }: { text: string; name: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch {
      const t = document.createElement("textarea");
      t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch {}
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    try { window.plausible?.("Copy Prompt", { props: { prompt: name } }); } catch {}
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <pre style={{ margin: 0, background: "#0B0620", border: "2px dashed #FFD23F", padding: "18px", maxHeight: "280px", overflowY: "auto", whiteSpace: "pre-wrap", fontFamily: "ui-monospace, Menlo, monospace", fontSize: "16px", lineHeight: 1.6, color: "#FFF6D6" }}>{text}</pre>
      <button type="button" onClick={copy} style={{ alignSelf: "flex-start", cursor: "pointer", border: 0, background: copied ? "#2FF801" : "#FFD23F", color: copied ? "#0B5800" : "#1A1200", padding: "14px 20px", fontFamily: "'Press Start 2P', monospace", fontSize: "11px", boxShadow: "4px 4px 0 #FF6A00" }}>
        {copied ? "COPIED ✓" : "COPY PROMPT"}
      </button>
    </div>
  );
}
