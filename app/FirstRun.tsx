"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { fbTrackCustom } from "./MetaPixel";

const PS: CSSProperties = { fontFamily: "'Press Start 2P', monospace" };
const BC: CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: "uppercase" };
const HW = 30;
const HH = 40;
const STEPS = [
  { label: "PROMPT", tag: "GAME", premium: false },
  { label: "QUESTS", tag: "PRIZE", premium: false },
  { label: "ANIMAITOR", tag: "HERO", premium: true },
  { label: "PUBLISH", tag: "LIVE", premium: true },
];
// All positions are level units. The stage keeps the level's aspect ratio, so
// everything scales evenly with the stage width. Phones get a taller zig-zag
// level instead of the wide staircase, which is unreadable when squashed.
type Level = { W: number; H: number; pole: number; plats: { x: number; w: number; y: number }[] };
const WIDE: Level = { W: 1000, H: 460, pole: 116, plats: [{ x: 120, w: 170, y: 80 }, { x: 350, w: 170, y: 160 }, { x: 580, w: 170, y: 240 }, { x: 810, w: 170, y: 320 }] };
const NARROW: Level = { W: 500, H: 640, pole: 140, plats: [{ x: 40, w: 180, y: 90 }, { x: 280, w: 180, y: 180 }, { x: 40, w: 180, y: 270 }, { x: 280, w: 180, y: 360 }] };
const levelFor = (width: number) => (width < 640 ? NARROW : WIDE);
const platsOf = (L: Level) => L.plats.map((p, i) => ({ ...p, ...STEPS[i] }));
const COLORS = ["#2FF801", "#29E7FF", "#FF3D8B", "#FFD23F", "#FF6A00", "#F5F1FF"];
const padBtn: CSSProperties = { minWidth: "64px", minHeight: "56px", background: "#170D33", color: "#F5F1FF", border: "3px solid #29E7FF", ...PS, fontSize: "16px", cursor: "pointer", touchAction: "none", userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none" };

function pct(L: Level, x: number, y: number, w: number, h: number): CSSProperties {
  return { position: "absolute", left: (x / L.W) * 100 + "%", bottom: (y / L.H) * 100 + "%", width: (w / L.W) * 100 + "%", height: (h / L.H) * 100 + "%", boxSizing: "border-box" };
}

function makeConfetti(): CSSProperties[] {
  return Array.from({ length: 160 }, (_, i) => {
    const size = 6 + Math.round(Math.random() * 8);
    return { left: (Math.random() * 100).toFixed(1) + "%", width: size, height: Math.round(size * 1.6), background: COLORS[i % 6], animationDuration: (1.6 + Math.random() * 2).toFixed(2) + "s", animationDelay: (Math.random() * 0.8).toFixed(2) + "s" };
  });
}

type Game = { x: number; y: number; vy: number; ground: boolean; face: number; got: boolean[]; jump: boolean; left: boolean; right: boolean };
declare global { interface Window { plausible?: (event: string, options?: { props?: Record<string, string> }) => void } }
const track = (event: string) => { try { window.plausible?.(event); } catch {} fbTrackCustom(event.replace(" ", "")); };

const fresh = (): Game => ({ x: 30, y: 24, vy: 0, ground: true, face: 1, got: [false, false, false, false], jump: false, left: false, right: false });

export default function FirstRun() {
  const g = useRef<Game>(fresh());
  const stageRef = useRef<HTMLDivElement>(null);
  const [, setFrame] = useState(0);
  const [started, setStarted] = useState(false);
  const [confetti, setConfetti] = useState<CSSProperties[]>([]);
  const [closed, setClosed] = useState(false);
  const [level, setLevel] = useState<Level>(WIDE);
  const levelRef = useRef<Level>(WIDE);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    // Measure straight away too: ResizeObserver only reports on a rendered
    // frame, which can be late on a backgrounded tab.
    const apply = (width: number) => {
      const next = levelFor(width);
      if (next !== levelRef.current) { levelRef.current = next; g.current = fresh(); setLevel(next); }
    };
    apply(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([en]) => apply(en.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let last = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const dt = Math.min(0.033, (t - last) / 1000);
      last = t;
      const h = g.current;
      const dir = (h.right ? 1 : 0) - (h.left ? 1 : 0);
      if (dir) h.face = dir;
      if (h.jump && h.ground) { h.vy = 640; h.ground = false; }
      h.jump = false;
      h.vy -= 1500 * dt;
      const prevY = h.y;
      const L = levelRef.current;
      const PL = platsOf(L);
      h.x = Math.max(0, Math.min(L.W - HW, h.x + dir * 320 * dt));
      h.y += h.vy * dt;
      h.ground = false;
      if (h.y <= 24) { h.y = 24; h.vy = 0; h.ground = true; }
      for (const p of PL) {
        const top = p.y + 18;
        if (h.vy <= 0 && prevY >= top - 0.5 && h.y <= top && h.x + HW > p.x && h.x < p.x + p.w) { h.y = top; h.vy = 0; h.ground = true; }
      }
      PL.forEach((p, i) => {
        const px = p.x + p.w / 2 - 25, py = p.y + 62;
        if (!h.got[i] && h.x + HW > px && h.x < px + 50 && h.y + HH > py && h.y < py + 30) h.got[i] = true;
      });
      setFrame((f) => f + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const hero = g.current;
  const got = hero.got;
  const tix = got.filter(Boolean).length;
  const won = tix === 4;
  const score = String(tix * 2500).padStart(6, "0");

  useEffect(() => { if (won && confetti.length === 0) { setConfetti(makeConfetti()); track("Game Won"); } }, [won, confetti.length]);

  const startedRef = useRef(false);
  const start = () => { if (!startedRef.current) { startedRef.current = true; track("Game Start"); } setStarted(true); };
  const hold = (k: "left" | "right", v: boolean) => { g.current[k] = v; if (v) start(); };
  const reset = () => { g.current = fresh(); setConfetti([]); setClosed(false); };
  const close = () => { setClosed(true); stageRef.current?.focus(); };
  useEffect(() => {
    if (!won || closed) return;
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [won, closed]);
  const setKey = (e: globalThis.KeyboardEvent, v: boolean) => {
    const m: Record<string, "left" | "right"> = { ArrowLeft: "left", a: "left", A: "left", ArrowRight: "right", d: "right", D: "right" };
    if (m[e.key]) { g.current[m[e.key]] = v; e.preventDefault(); }
    if (v && [" ", "ArrowUp", "w", "W"].includes(e.key)) { g.current.jump = true; e.preventDefault(); }
    if (v) start();
  };

  const inView = useRef(false);
  const keyRef = useRef(setKey);
  keyRef.current = setKey;
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => { inView.current = en.intersectionRatio >= 0.5; }, { threshold: [0, 0.5, 1] });
    io.observe(el);
    const down = (e: globalThis.KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      if (inView.current) keyRef.current(e, true);
    };
    const up = (e: globalThis.KeyboardEvent) => keyRef.current(e, false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { io.disconnect(); window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  const L = level;
  const PLATS = platsOf(L);
  const last = PLATS[3];

  return (
<section style={{"position": "relative", "background": "linear-gradient(180deg, #0B0620 0%, #1B0F4A 70%, #2A0B3D 100%)", "overflow": "hidden"}}>
<div style={{"background": "#000000", "borderBottom": "4px solid #FFD23F"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "16px 24px", "display": "flex", "flexWrap": "wrap", "gap": "24px", "justifyContent": "space-between", "fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "lineHeight": "1.8"}}>
<span>PLAYER 1<br /><span style={{"color": "#FFD23F"}}>YOU</span></span><span>SCORE<br /><span style={{"color": "#2FF801"}}>{score}</span></span><span>TICKETS<br /><span style={{"color": "#FF6A00"}}>x {tix}</span></span><span>WORLD<br /><span style={{"color": "#29E7FF"}}>1-1</span></span><span>TIME<br /><span style={{"color": "#FF3D8B"}}>5:00</span></span>
</div>
</div>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "80px 24px 0", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "color": "#29E7FF"}}>YOUR FIRST RUN</div>
<h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(48px, 7vw, 104px)", "lineHeight": "0.88", "textShadow": "5px 5px 0 #FF3D8B"}}>From one prompt<br />to real players</h2>
<p style={{"margin": "0", "color": "#E4DBFF", "fontSize": "19px", "maxWidth": "46ch"}}>Every jump is a thing you'll actually do inside. Clear all four and your game is live in an arcade.</p>
</div>
<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
<div style={{ ...PS, fontSize: "11px", lineHeight: 1.8, color: "#FFD23F" }}>PLAY IT: ARROWS OR A/D TO MOVE · SPACE TO JUMP · GRAB ALL 4 TICKETS</div>
<div style={{ ...PS, fontSize: "11px", color: "#2FF801" }}>{tix} / 4 COLLECTED</div>
</div>
<div ref={stageRef} className="stage" tabIndex={0} role="application" aria-label="Mini platformer game. Use arrow keys or A and D to move, space to jump." onPointerDown={() => { stageRef.current?.focus(); start(); }} style={{ position: "relative", width: "100%", aspectRatio: `${L.W} / ${L.H}`, background: "linear-gradient(180deg, #120838 0%, #2A0B3D 100%)", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FF3D8B", overflow: "hidden", cursor: "pointer", touchAction: "pan-y" }}>
{!started && <div className="blink" style={{ position: "absolute", left: 0, right: 0, top: "24px", textAlign: "center", ...PS, fontSize: "12px", color: "#F5F1FF" }}>PRESS ← → OR SPACE TO PLAY</div>}
{PLATS.map((p) => (
<div key={p.label}>
<div className="bricks" style={{ ...pct(L, p.x, p.y, p.w, 18), border: "3px solid #0B0620", boxShadow: "4px 4px 0 #0B0620" }} />
<div style={{ position: "absolute", left: (p.x / L.W) * 100 + "%", bottom: ((p.y - 22) / L.H) * 100 + "%", width: (p.w / L.W) * 100 + "%", textAlign: "center", ...PS, fontSize: "9px", color: "#A99BD6" }}>{p.label}</div>
{p.premium && <div style={{ position: "absolute", left: ((p.x + 4) / L.W) * 100 + "%", bottom: `calc(${((p.y - 22) / L.H) * 100}% - 32px)`, background: "#FF3D8B", color: "#2A0012", ...PS, fontSize: "9px", padding: "6px 8px", border: "2px solid #0B0620", boxShadow: "3px 3px 0 #FFD23F", whiteSpace: "nowrap" }}>PREMIUM ONLY</div>}
</div>
))}
{PLATS.map((p, i) => !got[i] && (
<div key={p.tag} className="bob" style={{ ...pct(L, p.x + p.w / 2 - 25, p.y + 62, 50, 30), background: "#FFD23F", color: "#1A1200", ...PS, fontSize: "8px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px dashed #C98A00", boxShadow: "0 0 16px #FFD23F" }}>{p.tag}</div>
))}
<div style={{ position: "absolute", left: ((last.x + last.w - 20) / L.W) * 100 + "%", bottom: ((last.y + 18) / L.H) * 100 + "%", height: (L.pole / L.H) * 100 + "%", width: "6px" }}>
<div style={{ width: "6px", height: "100%", background: "#F5F1FF" }} />
<div style={{ position: "absolute", top: 0, right: "6px", display: "flex", gap: "4px", fontFamily: "'Archivo Black', sans-serif", fontSize: "13px", background: "#0E0E0E", padding: "4px 6px", border: "2px solid #2FF801", whiteSpace: "nowrap" }}><span style={{ background: "#2FF801", color: "#0B5800", padding: "0 4px", borderRadius: "3px" }}>gud</span><span>arcade</span></div>
</div>
<div style={{ ...pct(L, hero.x, hero.y, HW, HH), background: "#FF6A00", border: "3px solid #0B0620", borderRadius: "4px", transform: `scaleX(${hero.face})` }}>
<div style={{ position: "absolute", left: 0, right: 0, top: 0, height: "30%", background: "#0B0620", borderRadius: "4px 4px 0 0" }} />
<div style={{ position: "absolute", left: "50%", right: "-20%", top: "22%", height: "8%", background: "#0B0620" }} />
<div style={{ position: "absolute", left: "50%", top: "40%", width: "14%", height: "12%", background: "#0B0620" }} />
<div style={{ position: "absolute", left: "78%", top: "40%", width: "14%", height: "12%", background: "#0B0620" }} />
<div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "32%", background: "#0B0620" }} />
</div>
<div className="bricks" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: (24 / L.H) * 100 + "%" }} />
</div>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
<button aria-label="Move left" onPointerDown={() => hold("left", true)} onPointerUp={() => hold("left", false)} onPointerLeave={() => hold("left", false)} style={padBtn}>◀</button>
<button aria-label="Move right" onPointerDown={() => hold("right", true)} onPointerUp={() => hold("right", false)} onPointerLeave={() => hold("right", false)} style={padBtn}>▶</button>
<button onPointerDown={() => { g.current.jump = true; start(); }} style={{ minWidth: "120px", minHeight: "56px", background: "#FF3D8B", color: "#2A0012", border: "3px solid #0B0620", ...PS, fontSize: "12px", cursor: "pointer", touchAction: "none" }}>JUMP</button>
<button onClick={reset} style={{ minHeight: "56px", padding: "0 18px", background: "transparent", color: "#A99BD6", border: "3px solid #3A2A6B", ...PS, fontSize: "10px", cursor: "pointer" }}>RESTART</button>
</div>
{won && !closed && (
<div role="dialog" aria-modal="true" aria-labelledby="unlock-title" onClick={close} style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(11,6,32,0.82)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", overflowY: "auto" }}>
{confetti.map((c, i) => <div key={i} className="conf" style={c} />)}
<div className="pop" onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "860px", width: "100%", background: "#2FF801", color: "#0B2A00", border: "6px solid #0B0620", boxShadow: "12px 12px 0 #FFD23F", padding: "48px 32px 40px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", textAlign: "center" }}>
<button onClick={close} aria-label="Close" autoFocus style={{ position: "absolute", top: "12px", right: "12px", width: "48px", height: "48px", background: "#0B0620", color: "#2FF801", border: "none", ...PS, fontSize: "14px", cursor: "pointer" }}>X</button>
<div style={{ ...PS, fontSize: "14px" }}>★ MASSIVE UNLOCK ★</div>
<h3 id="unlock-title" style={{ margin: 0, ...BC, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.9 }}>You&apos;re a natural.</h3>
<p style={{ margin: 0, fontSize: "21px", lineHeight: 1.5, maxWidth: "40ch", fontWeight: 600 }}>If you can do this, you can publish a game. Once you&apos;ve joined and finished your trial, DM Morgan this code and he&apos;ll send you a free game from the <a href="#past-prizes" onClick={close} style={{ color: "#0B2A00", fontWeight: 800 }}>competition prize list</a>.</p>
<div style={{ background: "#0B0620", color: "#FFD23F", ...PS, fontSize: "clamp(18px, 3vw, 32px)", padding: "20px 24px", border: "4px dashed #FFD23F", letterSpacing: "2px" }}>CHICKENDINNER</div>
<a href="https://www.skool.com/ai-craft/about" className="plausible-event-name=Join+Skool plausible-event-position=game-unlock" style={{ background: "#0B0620", color: "#2FF801", padding: "20px 28px", ...PS, fontSize: "13px", textDecoration: "none", boxShadow: "6px 6px 0 #FF3D8B" }}>CLAIM IT: JOIN FREE ▶</a>
<button onClick={reset} style={{ background: "transparent", color: "#0B2A00", border: "none", ...PS, fontSize: "10px", textDecoration: "underline", cursor: "pointer", minHeight: "44px" }}>PLAY AGAIN</button>
</div>
</div>
)}
</div>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "48px 24px 40px", "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center", "justifyContent": "space-between"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "lineHeight": "1.8", "color": "#FFD23F"}}>JUNE CLEARED IT IN <span style={{"color": "#2FF801"}}>7 DAYS</span></div>
<a href="https://www.skool.com/ai-craft/about" className="plausible-event-name=Join+Skool plausible-event-position=game-section" style={{"background": "#2FF801", "color": "#0B2A00", "padding": "18px 26px", "fontFamily": "'Press Start 2P', monospace", "fontSize": "13px", "textDecoration": "none", "boxShadow": "6px 6px 0 #FFD23F"}}>START WORLD 1-1 ▶</a>
</div>
<div className="bricks" style={{"height": "56px", "borderTop": "4px solid #0B0620"}}></div>
</section>


  );
}
