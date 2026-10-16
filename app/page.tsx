import FirstRun from "./FirstRun";

export default function Home() {
  return (
    <>

<div className="scan" style={{"backgroundColor": "#0B0620", "color": "#F5F1FF", "fontFamily": "'Barlow', system-ui, sans-serif", "minHeight": "100vh", "overflow": "hidden"}}>

<header style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "20px 24px", "display": "flex", "flexWrap": "wrap", "gap": "16px", "justifyContent": "space-between", "alignItems": "center"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "13px", "lineHeight": "1.6"}}>CREATE GAMES <span style={{"color": "#FF6A00"}}>WITH AI</span></div>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center"}}>
<span style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "11px", "color": "#FFD23F"}}>HI-SCORE 762 PLAYERS</span>
<a href="https://www.skool.com/ai-craft/about" style={{"background": "#FF6A00", "color": "#1A0A00", "padding": "14px 20px", "fontFamily": "'Press Start 2P', monospace", "fontSize": "11px", "textDecoration": "none", "boxShadow": "4px 4px 0 #FFD23F"}}>INSERT COIN</a>
</div>
</header>

<section style={{"position": "relative", "background": "linear-gradient(180deg, #0B0620 0%, #2A0B3D 55%, #FF3D8B 100%)"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "56px 24px 0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "32px", "alignItems": "end", "position": "relative"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "24px", "paddingBottom": "96px"}}>
<div style={{"alignSelf": "flex-start", "background": "#29E7FF", "color": "#002A33", "fontFamily": "'Press Start 2P', monospace", "fontSize": "11px", "padding": "8px 12px"}}>PLAYER 1 READY</div>
<h1 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(56px, 8vw, 112px)", "lineHeight": "0.88", "color": "#FFFFFF", "textShadow": "5px 5px 0 #FF6A00, 10px 10px 0 #FF3D8B"}}>Make games.<br />Ship games.<br />Earn $.</h1>
<p style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.5", "color": "#E4DBFF", "maxWidth": "36ch"}}>The community where you build your first game with AI in 5 minutes, animate your own characters, and put your game in a real arcade.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "16px", "alignItems": "center"}}>
<a href="https://www.skool.com/ai-craft/about" style={{"background": "#FFD23F", "color": "#1A1200", "padding": "20px 28px", "fontFamily": "'Press Start 2P', monospace", "fontSize": "14px", "textDecoration": "none", "boxShadow": "6px 6px 0 #FF6A00"}}>PRESS START <span className="blink">▶</span></a>
<span style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "lineHeight": "1.8", "color": "#FFE6F1"}}>7 DAYS FREE<br />THEN $3.50/MO ON ANNUAL</span>
</div>
</div>
<div style={{"position": "relative", "display": "flex", "justifyContent": "center"}}>
<div style={{"position": "absolute", "top": "24px", "left": "0", "background": "#2FF801", "color": "#0B5800", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "lineHeight": "1.7", "padding": "10px 12px", "boxShadow": "4px 4px 0 #0B0620", "zIndex": "1"}}>ACHIEVEMENT<br />UNLOCKED:<br />FIRST GAME</div>
<div style={{"position": "absolute", "top": "140px", "right": "0", "background": "#0B0620", "border": "3px solid #29E7FF", "color": "#29E7FF", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "lineHeight": "1.7", "padding": "10px 12px", "zIndex": "1"}}>LVL 1 → 99<br /><span style={{"color": "#FFD23F"}}>+500 XP</span></div>
<img src="/morgan.png" alt="Morgan smiling while playing a handheld games console" style={{"width": "100%", "maxWidth": "520px", "display": "block"}} />
</div>
</div>
<div className="grid-floor" style={{"height": "72px", "backgroundColor": "#1A0626", "borderTop": "4px solid #FFD23F"}}></div>
</section>

<section style={{"background": "#FFD23F", "color": "#1A1200", "overflow": "hidden"}}>
<div style={{"padding": "18px 24px", "display": "flex", "gap": "48px", "justifyContent": "center", "flexWrap": "wrap", "fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "lineHeight": "1.6"}}>
<span>★ NO CODING NEEDED</span><span>★ FIRST GAME IN 5 MINUTES</span><span>★ WEEKLY COMPS</span><span>★ REAL PLAYERS</span>
</div>
</section>


<FirstRun />
<section style={{"background": "#170D33", "borderTop": "4px solid #FF3D8B", "borderBottom": "4px solid #FF3D8B"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "96px 24px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "56px", "alignItems": "center"}}>
<div style={{"background": "#0B0620", "border": "4px solid #FF3D8B", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#FF3D8B"}}><span>ANIMAITOR.EXE</span><span>● REC</span></div>
<div style={{"height": "320px", "background": "#1F1240", "display": "flex", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "padding": "16px", "color": "#8F80C0", "fontFamily": "'Press Start 2P', monospace", "fontSize": "11px", "lineHeight": "1.8"}}>[SPRITE WALK CYCLE<br />FROM ONE PROMPT]</div>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "lineHeight": "1.8", "color": "#CFC4F0"}}>&gt; a grumpy knight cat with a tiny sword<span className="blink">_</span></div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px", "alignItems": "center"}}><div style={{"background": "#FFD23F", "color": "#1A1200", "fontFamily": "'Press Start 2P', monospace", "fontSize": "14px", "padding": "12px 16px", "border": "3px solid #0B0620", "boxShadow": "5px 5px 0 #FF3D8B"}}>★ PREMIUM ONLY</div><div style={{"background": "#FF3D8B", "color": "#2A0012", "fontFamily": "'Press Start 2P', monospace", "fontSize": "11px", "padding": "8px 12px"}}>NEW POWER-UP</div></div>
<h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(44px, 6vw, 76px)", "lineHeight": "0.95"}}>Animaitor</h2>
<p style={{"margin": "0", "fontSize": "20px", "lineHeight": "1.55", "color": "#E4DBFF"}}>Type a sentence, get a character. Animaitor turns your idea into game-ready sprites and animations so your game looks like yours.</p>
<p style={{"margin": "0", "fontSize": "17px", "color": "#FFD23F", "fontWeight": "700"}}>Included with Premium. $12/mo on annual.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px"}}>
<span style={{"border": "3px solid #FFD23F", "color": "#FFD23F", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "padding": "10px 12px"}}>WALK</span>
<span style={{"border": "3px solid #FFD23F", "color": "#FFD23F", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "padding": "10px 12px"}}>JUMP</span>
<span style={{"border": "3px solid #FFD23F", "color": "#FFD23F", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "padding": "10px 12px"}}>IDLE</span>
</div>
</div>
</div>
</section>

<section style={{"background": "#0E0E0E", "fontFamily": "Inter, system-ui, sans-serif"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "96px 24px", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontFamily": "'Archivo Black', sans-serif", "fontSize": "28px"}}><span style={{"background": "#2FF801", "color": "#0B5800", "padding": "2px 10px", "borderRadius": "7px"}}>gud</span><span style={{"color": "#FFFFFF"}}>arcade</span></div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "40px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "alignItems": "center"}}><span style={{"background": "#FF6B9B", "color": "#47001F", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontSize": "18px", "fontWeight": "800", "padding": "10px 20px", "borderRadius": "999px", "boxShadow": "0 0 24px rgba(255,107,155,0.6)"}}>★ PREMIUM MEMBERS ONLY</span><span style={{"background": "#29E7FF", "color": "#002A33", "fontSize": "12px", "fontWeight": "700", "padding": "4px 12px", "borderRadius": "999px"}}>PUBLISH AND EARN</span></div>
<h2 style={{"margin": "0", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontSize": "clamp(36px, 5vw, 56px)", "fontWeight": "800", "letterSpacing": "-1px", "lineHeight": "1.05", "color": "#FFFFFF"}}>Your game, in a real arcade.</h2>
<p style={{"margin": "0", "fontSize": "18px", "lineHeight": "1.6", "color": "#ADAAAA"}}>gud arcade is our web and Telegram arcade. Players play, earn tickets and come back. Premium members get the Publish and Earn course that walks them through getting their game listed.</p>
<p style={{"margin": "0", "fontSize": "17px", "color": "#FF6B9B", "fontWeight": "700"}}>Publishing is a Premium perk. $12/mo on annual.</p>
<a href="https://www.skool.com/ai-craft/about" style={{"alignSelf": "flex-start", "background": "#2FF801", "color": "#0B5800", "padding": "16px 28px", "borderRadius": "999px", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "700", "fontSize": "17px", "textDecoration": "none"}}>Join and go Premium</a>
</div>
<div style={{"background": "#161616", "border": "1px solid #2A2A2A", "borderRadius": "20px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"background": "#242424", "borderRadius": "14px", "padding": "24px", "minHeight": "180px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "10px"}}>
<div style={{"display": "flex", "gap": "8px"}}><span style={{"background": "#FF6B9B", "color": "#47001F", "fontSize": "11px", "fontWeight": "700", "padding": "3px 10px", "borderRadius": "999px"}}>Featured</span><span style={{"background": "#29E7FF", "color": "#002A33", "fontSize": "11px", "fontWeight": "700", "padding": "3px 10px", "borderRadius": "999px"}}>PLAYABLE DEMO</span></div>
<div style={{"fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "800", "fontSize": "26px", "color": "#FFFFFF"}}>Last Stand: Samurai</div>
<div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}><span style={{"background": "#2FF801", "color": "#0B5800", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "700", "padding": "10px 20px", "borderRadius": "999px", "fontSize": "14px"}}>Play demo</span><span style={{"border": "1px solid #3A3A3A", "color": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "700", "padding": "10px 20px", "borderRadius": "999px", "fontSize": "14px"}}>Wishlist</span></div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "12px"}}>
<div style={{"background": "#1A1A1A", "border": "1px solid #2A2A2A", "borderRadius": "16px", "overflow": "hidden"}}><div style={{"height": "100px", "background": "#242424", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#6B6868", "fontSize": "12px"}}>[ART]</div><div style={{"padding": "12px", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "800", "fontSize": "15px"}}>Grimbleholt</div></div>
<div style={{"background": "#1A1A1A", "border": "1px solid #2A2A2A", "borderRadius": "16px", "overflow": "hidden"}}><div style={{"height": "100px", "background": "#242424", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#6B6868", "fontSize": "12px"}}>[ART]</div><div style={{"padding": "12px", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "800", "fontSize": "15px"}}>Mokudoku</div></div>
<div style={{"background": "#1A1A1A", "border": "1px solid #2A2A2A", "borderRadius": "16px", "overflow": "hidden"}}><div style={{"height": "100px", "background": "#242424", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#6B6868", "fontSize": "12px"}}>[ART]</div><div style={{"padding": "12px", "fontFamily": "'Plus Jakarta Sans', sans-serif", "fontWeight": "800", "fontSize": "15px"}}>Wild Wheels</div></div>
</div>
</div>
</div>
</div>
</section>

<section style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "96px 24px", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "color": "#FFD23F"}}>INVENTORY</div>
<h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(40px, 5vw, 64px)", "lineHeight": "1"}}>Loot inside</h2>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(240px, 1fr))", "gap": "16px"}}>
<div style={{"background": "#170D33", "border": "3px solid #3A2A6B", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#2FF801"}}>RARE</div><h3 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "28px", "textTransform": "uppercase"}}>Mini Quests</h3><p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.55"}}>First Game in 5 Minutes, One-Page GDD, Pimp My Game, Ship It!</p></div>
<div style={{"background": "#170D33", "border": "3px solid #3A2A6B", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#FF3D8B"}}>EPIC</div><h3 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "28px", "textTransform": "uppercase"}}>Weekly comps</h3><p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.55"}}>Every quest entry counts. Winners pick a game from the prize list.</p></div>
<div style={{"background": "#170D33", "border": "3px solid #3A2A6B", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#29E7FF"}}>RARE</div><h3 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "28px", "textTransform": "uppercase"}}>Prompt library</h3><p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.55"}}>Tested prompts for mechanics, art and polish.</p></div>
<div style={{"background": "#170D33", "border": "3px solid #3A2A6B", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#FFD23F"}}>COMMON</div><h3 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "28px", "textTransform": "uppercase"}}>Classroom</h3><p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.55"}}>Step-by-step courses from first prompt to finished game.</p></div>
</div>
</section>

<section style={{"background": "linear-gradient(180deg, #0B0620 0%, #2A0B3D 100%)", "borderTop": "4px solid #FFD23F"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "96px 24px", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center", "textAlign": "center"}}>
<div style={{"background": "#FFD23F", "color": "#1A1200", "fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "padding": "10px 14px"}}>PAY YEARLY = 50% OFF</div>
<h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(44px, 6vw, 80px)", "lineHeight": "0.95"}}>Choose your class</h2>
<p style={{"margin": "0", "color": "#E4DBFF", "fontSize": "18px"}}>Pick Annual on the Skool join screen. Same membership, half the cost.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))", "gap": "28px"}}>
<div style={{"background": "#170D33", "border": "4px solid #29E7FF", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px", "boxShadow": "10px 10px 0 #29E7FF"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "color": "#29E7FF"}}>CLASS: BUILDER</div>
<div style={{"display": "flex", "alignItems": "baseline", "gap": "12px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "80px", "lineHeight": "1"}}>$3.50</span><span style={{"color": "#A99BD6", "fontSize": "18px"}}>/mo</span><span style={{"color": "#A99BD6", "fontSize": "22px", "textDecoration": "line-through"}}>$7</span></div>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#FFD23F"}}>$42 BILLED ANNUALLY</div>
<p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.6"}}>7-day free trial. Quests, comps, classroom, community. Or $7 billed monthly.</p>
</div>
<div style={{"background": "#170D33", "border": "4px solid #FF6A00", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "14px", "boxShadow": "10px 10px 0 #FF6A00", "position": "relative"}}>
<div style={{"position": "absolute", "top": "-18px", "right": "20px", "background": "#FF3D8B", "color": "#2A0012", "fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "padding": "8px 10px"}}>LEGENDARY</div>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "12px", "color": "#FF6A00"}}>CLASS: PUBLISHER</div>
<div style={{"display": "flex", "alignItems": "baseline", "gap": "12px", "flexWrap": "wrap"}}><span style={{"fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "fontSize": "80px", "lineHeight": "1"}}>$12</span><span style={{"color": "#A99BD6", "fontSize": "18px"}}>/mo</span><span style={{"color": "#A99BD6", "fontSize": "22px", "textDecoration": "line-through"}}>$24</span></div>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#FFD23F"}}>$144 BILLED ANNUALLY</div>
<p style={{"margin": "0", "color": "#CFC4F0", "lineHeight": "1.6"}}>Everything in Builder, plus Animaitor and Publish and Earn on gud arcade. Or $24 billed monthly.</p>
</div>
</div>
<a href="https://www.skool.com/ai-craft/about" style={{"alignSelf": "center", "background": "#FFD23F", "color": "#1A1200", "padding": "20px 28px", "fontFamily": "'Press Start 2P', monospace", "fontSize": "13px", "textDecoration": "none", "boxShadow": "6px 6px 0 #FF6A00"}}>SELECT ANNUAL ▶</a>
</div>
</section>

<section style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "96px 24px", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}><div style={{"display": "flex", "alignItems": "center", "gap": "16px", "flexWrap": "wrap"}}><span style={{"color": "#FFD23F", "fontSize": "44px", "letterSpacing": "4px", "lineHeight": "1", "fontFamily": "system-ui, sans-serif"}} aria-label="5 stars">★★★★★</span><span style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "18px", "color": "#FFD23F"}}>5.0 ON SKOOL</span></div><h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(40px, 5vw, 64px)", "lineHeight": "1"}}>Player reviews</h2></div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))", "gap": "24px"}}>
<figure style={{"margin": "0", "background": "#170D33", "border": "4px solid #2FF801", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "16px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#2FF801"}}>P1 · JUNE MG</div><blockquote style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.5"}}>"Morgan has really helped me enter the gaming industry with confidence. In 7 days I had a game completed and live on a gaming website! I can't wait to create more games!"</blockquote><figcaption style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "9px", "lineHeight": "1.8", "color": "#FFD23F"}}>STILL A PAYING MEMBER AFTER 3 MONTHS</figcaption></figure>
<figure style={{"margin": "0", "background": "#170D33", "border": "4px solid #29E7FF", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "16px"}}><div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px", "color": "#29E7FF"}}>P2 · BO LARSEN</div><blockquote style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.5"}}>"Very cozy, friendly, and helpful community. The admins are very active and helpful"</blockquote><figcaption style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "9px", "lineHeight": "1.8", "color": "#FFD23F"}}>STILL A PAYING MEMBER AFTER 1 MONTH</figcaption></figure>
</div>
</section>

<section style={{"background": "#FF6A00", "color": "#1A0A00", "borderTop": "6px solid #FFD23F"}}>
<div style={{"maxWidth": "900px", "margin": "0 auto", "padding": "112px 24px", "display": "flex", "flexDirection": "column", "gap": "28px", "alignItems": "center", "textAlign": "center"}}>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "14px"}}>CONTINUE?</div>
<h2 style={{"margin": "0", "fontFamily": "'Barlow Condensed', sans-serif", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(48px, 7vw, 96px)", "lineHeight": "0.9"}}>Not many people get to say they made a game.</h2>
<a href="https://www.skool.com/ai-craft/about" style={{"background": "#0B0620", "color": "#FFD23F", "padding": "22px 32px", "fontFamily": "'Press Start 2P', monospace", "fontSize": "14px", "textDecoration": "none", "boxShadow": "6px 6px 0 #FFD23F"}}>YES ▶ JOIN FREE</a>
<div style={{"fontFamily": "'Press Start 2P', monospace", "fontSize": "10px"}}>7-DAY FREE TRIAL</div>
</div>
</section>

<footer style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "28px 24px", "color": "#A99BD6", "fontFamily": "'Press Start 2P', monospace", "fontSize": "9px", "lineHeight": "1.8"}}>© CREATE GAMES WITH AI · MORGAN PAGE · GAME OVER? NEVER.</footer>
</div>

    </>
  );
}
