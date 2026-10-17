import type { Metadata } from "next";
import CopyPrompt from "./CopyPrompt";

// Delivery page for the Kit starter-kit form (Kit redirects here after a
// subscriber confirms). Kept out of search and the sitemap.
export const metadata: Metadata = {
  title: "Your First Game Starter Kit | Create Games with AI",
  robots: { index: false, follow: false },
  alternates: { canonical: "/starter-kit" },
};

const PROMPT = "Create a complete, playable Flappy Bird style game in one HTML file. Use plain JavaScript and a canvas, with no external files or libraries. Include a start screen, a score, a game over screen, and click or tap to restart.";

const SWAPS = [
  ["Endless runner", "a Chrome Dino style endless runner"],
  ["Brick breaker", "a Breakout style brick breaker"],
  ["Snake", "a classic Snake game"],
  ["Space shooter", "a Space Invaders style shooter"],
  ["Memory match", "a card memory match game with emoji cards"],
];

const label = { fontFamily: "'Press Start 2P', monospace", fontSize: "11px" } as const;
const h2 = { margin: 0, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: "uppercase", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1 } as const;
const card = { background: "#170D33", border: "4px solid #29E7FF", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" } as const;
const p = { margin: 0, color: "#E4DBFF", fontSize: "18px", lineHeight: 1.6 } as const;

export default function StarterKit() {
  return (
    <div className="scan" style={{ backgroundColor: "#0B0620", color: "#F5F1FF", fontFamily: "'Barlow', system-ui, sans-serif", minHeight: "100vh" }}>
      <main style={{ maxWidth: "820px", margin: "0 auto", padding: "56px 20px 96px", display: "flex", flexDirection: "column", gap: "36px" }}>
        <a href="/" style={{ ...label, color: "#F5F1FF", textDecoration: "none" }}>CREATE GAMES <span style={{ color: "#FF6A00" }}>WITH AI</span></a>

        <header style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ ...label, alignSelf: "flex-start", background: "#2FF801", color: "#0B5800", padding: "10px 14px" }}>KIT UNLOCKED</div>
          <h1 style={{ ...h2, fontSize: "clamp(44px, 7vw, 80px)", lineHeight: 0.95 }}>Your first game starter kit</h1>
          <p style={p}>One prompt, three steps, about five minutes. You don&apos;t need to code and you don&apos;t need to install anything.</p>
        </header>

        <section style={card}>
          <div style={{ ...label, color: "#29E7FF" }}>STEP 1</div>
          <h2 style={h2}>Open a free AI chat</h2>
          <p style={p}><a href="https://claude.ai" target="_blank" rel="noopener" className="plausible-event-name=AI+Chat+Click plausible-event-chat=claude">Claude</a> is the easiest because it runs the game right in the chat. <a href="https://chatgpt.com" target="_blank" rel="noopener" className="plausible-event-name=AI+Chat+Click plausible-event-chat=chatgpt">ChatGPT</a> and <a href="https://gemini.google.com" target="_blank" rel="noopener" className="plausible-event-name=AI+Chat+Click plausible-event-chat=gemini">Gemini</a> work too.</p>
        </section>

        <section style={card}>
          <div style={{ ...label, color: "#29E7FF" }}>STEP 2</div>
          <h2 style={h2}>Paste this prompt</h2>
          <CopyPrompt text={PROMPT} name="first-game" />
        </section>

        <section style={card}>
          <div style={{ ...label, color: "#29E7FF" }}>STEP 3</div>
          <h2 style={h2}>Play it</h2>
          <p style={p}>In Claude the game appears next to the chat, just click and play. Anywhere else, copy the code into a file called <code>game.html</code> and double-click it to open it in your browser.</p>
        </section>

        <section style={{ ...card, borderColor: "#FFD23F" }}>
          <div style={{ ...label, color: "#FFD23F" }}>SWAP THE GAME</div>
          <h2 style={h2}>Five more to try</h2>
          <p style={p}>Replace &quot;a Flappy Bird style game&quot; in the prompt with any of these:</p>
          <ul style={{ ...p, paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {SWAPS.map(([name, text]) => <li key={name}><strong>{name}:</strong> &quot;{text}&quot;</li>)}
          </ul>
        </section>

        <section style={{ ...card, borderColor: "#FF3D8B" }}>
          <div style={{ ...label, color: "#FF3D8B" }}>IF SOMETHING BREAKS</div>
          <h2 style={h2}>Just tell it</h2>
          <CopyPrompt text="The game has a bug: [say what happens]. Fix it and give me the full file again." name="fix-bug" />
          <p style={p}>Then make it yours:</p>
          <CopyPrompt text="Change the player to a [cat], add [coins to collect], and make it get faster over time. Give me the full file again." name="make-it-yours" />
        </section>

        <section style={{ background: "#FF6A00", color: "#1A0A00", padding: "36px 28px", display: "flex", flexDirection: "column", gap: "18px", alignItems: "flex-start", boxShadow: "8px 8px 0 #FFD23F" }}>
          <div style={label}>LEVEL 2</div>
          <h2 style={h2}>Made one? Show it off</h2>
          <p style={{ ...p, color: "#1A0A00" }}>In the Create Games with AI community you share your game, get feedback, and move on to the next quest: validating your own idea, a one-page design doc, then shipping it. There are weekly competitions too, with real games as prizes.</p>
          <a href="https://www.skool.com/ai-craft/about" className="plausible-event-name=Join+Skool plausible-event-position=starter-kit-page" style={{ background: "#0B0620", color: "#FFD23F", padding: "18px 24px", ...label, fontSize: "12px", textDecoration: "none", boxShadow: "5px 5px 0 #FFD23F" }}>START 7-DAY FREE TRIAL ▶</a>
        </section>
      </main>
    </div>
  );
}
