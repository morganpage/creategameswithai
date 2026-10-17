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
        <select value={i} onChange={(e) => setI(Number(e.target.value))} style={{ background: "#0B0620", color: "#F5F1FF", border: "2px solid #29E7FF", borderRadius: 0, padding: "12px 14px", fontFamily: "'Barlow', sans-serif", fontSize: "18px", fontWeight: 600, maxWidth: "360px", cursor: "pointer" }}>
          {GAMES.map((g, n) => <option key={g.name} value={n}>{g.name}</option>)}
        </select>
      </label>
      <CopyPrompt key={game.name} text={game.prompt} name={game.name} />
    </div>
  );
}
