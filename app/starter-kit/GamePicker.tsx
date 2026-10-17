"use client";

import { useState } from "react";
import CopyPrompt from "./CopyPrompt";
import { GAMES } from "./prompts";

export default function GamePicker() {
  const [i, setI] = useState(0);
  const game = GAMES[i];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "'Press Start 2P', monospace", fontSize: "10px", color: "#FFD23F" }}>
        PICK A GAME
        <span style={{ position: "relative", maxWidth: "360px" }}>
          <select value={i} onChange={(e) => setI(Number(e.target.value))} style={{ appearance: "none", WebkitAppearance: "none", width: "100%", background: "#0B0620", color: "#F5F1FF", border: "2px solid #29E7FF", borderRadius: 0, padding: "12px 56px 12px 14px", fontFamily: "'Barlow', sans-serif", fontSize: "18px", fontWeight: 600, cursor: "pointer" }}>
            {GAMES.map((g, n) => <option key={g.name} value={n}>{g.name}</option>)}
          </select>
          <span aria-hidden style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "46px", display: "flex", alignItems: "center", justifyContent: "center", background: "#29E7FF", color: "#0B0620", fontSize: "16px", pointerEvents: "none" }}>▼</span>
        </span>
      </label>
      <CopyPrompt key={game.name} text={game.prompt} name={game.name} />
    </div>
  );
}
