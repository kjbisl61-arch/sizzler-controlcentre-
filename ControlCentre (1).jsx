import { useState } from "react";

const BG = "#0A0E1A";
const CARD = "#111827";
const CYAN = "#00D4FF";
const CORAL = "#FF6B6B";
const GREEN = "#00FF88";
const TEXT = "#E8F4FD";
const BORDER = "#1E3A5F";
const MUTED = "#8899AA";

function Tag({ color, children }) {
  const map = {
    cyan: { bg: "#0A2A3A", color: CYAN },
    coral: { bg: "#2A0A0A", color: CORAL },
    green: { bg: "#0A2A1A", color: GREEN },
    gold: { bg: "#2A2000", color: "#FFD700" },
  };
  const s = map[color] || map.cyan;
  return (
    <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:20, fontSize:"0.7rem", fontWeight:700, marginRight:4, background:s.bg, color:s.color, border:`1px solid ${s.color}33` }}>
      {children}
    </span>
  );
}

function Card({ children, accent }) {
  const accents = { cyan:CYAN, coral:CORAL, green:GREEN, gold:"#FFD700" };
  return (
    <div style={{ background:CARD, borderRadius:8, padding:"14px 16px", marginBottom:12, borderLeft:`3px solid ${accents[accent]||CYAN}`, border:`1px solid ${BORDER}`, borderLeftWidth:3, borderLeftColor:accents[accent]||CYAN }}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return <div style={{ fontSize:"0.72rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.4px", color:MUTED, marginBottom:10 }}>{children}</div>;
}

function Prog({ pct }) {
  return (
    <div style={{ height:5, background:BORDER, borderRadius:3, overflow:"hidden", margin:"8px 0" }}>
      <div style={{ height:"100%", borderRadius:3, background:CYAN, width:`${pct}%`, boxShadow:`0 0 8px ${CYAN}` }} />
    </div>
  );
}

function StatBox({ value, label, color }) {
  const colors = { cyan:CYAN, coral:CORAL, green:GREEN, gold:"#FFD700" };
  const c = colors[color] || CYAN;
  return (
    <div style={{ flex:1, minWidth:100, background:CARD, borderRadius:8, padding:12, textAlign:"center", border:`1px solid ${BORDER}`, borderTop:`2px solid ${c}` }}>
      <div style={{ fontSize:"1.5rem", fontWeight:700, color:c, textShadow:`0 0 10px ${c}55` }}>{value}</div>
      <div style={{ fontSize:"0.68rem", color:MUTED, textTransform:"uppercase", letterSpacing:"0.3px", marginTop:2 }}>{label}</div>
    </div>
  );
}

export default function App() {
  const [sessionFocus, setSessionFocus] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);

  const tools = [
    { name:"Jarvis V3", url:"https://sizzler-jarvis-v3.vercel.app/", status:"live" },
    { name:"Builder's Log", url:"https://sizzler-builderslog.vercel.app/", status:"live" },
    { name:"Control Centre", url:"https://sizzler-controlcentre.vercel.app/", status:"live" },
  ];

  const agents = [
    { n:"Jarvis", r:"Command centre", s:"active" },
    { n:"Ellis", r:"Editor / gatekeeper", s:"active" },
    { n:"Maya", r:"Writer", s:"ready" },
    { n:"Ray", r:"Audio", s:"ready" },
    { n:"Finn", r:"Video", s:"ready" },
    { n:"Cleo", r:"Media", s:"ready" },
    { n:"Marco", r:"Products & services", s:"ready" },
    { n:"Ada", r:"Document control", s:"ready" },
    { n:"Rex", r:"Database", s:"pending" },
    { n:"Leo", r:"Contracts", s:"ready" },
    { n:"Max", r:"Accounting / budget", s:"dev" },
    { n:"Vera", r:"Legal", s:"dev" },
    { n:"Scout", r:"Web intelligence", s:"dev" },
  ];

  const buildQueue = [
    { n:1, task:"Dark cockpit colour scheme — all tools", status:"done" },
    { n:2, task:"Daily Operating Guide deployed", status:"next" },
    { n:3, task:"Jarvis Definition Document", status:"pending" },
    { n:4, task:"Ideas capture file (Ideas.txt)", status:"done" },
    { n:5, task:"Ideas database upgrade in Jarvis V3", status:"pending" },
    { n:6, task:"Rex database connected", status:"pending" },
    { n:7, task:"Search tab — Ada's Library", status:"pending" },
    { n:8, task:"Agents activated — Maya & Ada first", status:"pending" },
    { n:9, task:"Cleo photo/video caption analysis", status:"pending" },
    { n:10, task:"Voice interaction for Jarvis", status:"pending" },
    { n:11, task:"Agent brain/link structure", status:"pending" },
    { n:12, task:"Scout web intelligence", status:"pending" },
    { n:13, task:"Jarvis as business generator", status:"pending" },
    { n:14, task:"NZ Bodysurfing Guide", status:"pending" },
    { n:15, task:"Patreon setup", status:"pending" },
    { n:16, task:"Hardware review August 2026", status:"pending" },
  ];

  const agentTag = (s) => {
    if (s === "active") return <Tag color="green">Active</Tag>;
    if (s === "ready") return <Tag color="cyan">Ready</Tag>;
    if (s === "pending") return <Tag color="gold">Pending</Tag>;
    return <Tag color="coral">In dev</Tag>;
  };

  const queueTag = (s) => {
    if (s === "done") return <Tag color="green">Done</Tag>;
    if (s === "next") return <Tag color="coral">Next</Tag>;
    return <Tag color="gold">Pending</Tag>;
  };

  const done = buildQueue.filter(t => t.status === "done").length;
  const pct = Math.round((done / buildQueue.length) * 100);
  const activeCount = agents.filter(a => a.s === "active").length;
  const readyCount = agents.filter(a => a.s === "ready").length;

  return (
    <div style={{ fontFamily:"sans-serif", color:TEXT, background:BG, minHeight:"100vh", padding:"0 0 40px" }}>
      <div style={{ maxWidth:860, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ background:`linear-gradient(135deg, #0A2A4A, #0A0E1A)`, padding:"18px 20px 14px", borderBottom:`1px solid ${BORDER}` }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8 }}>
            <div>
              <h1 style={{ fontSize:"1.4rem", fontWeight:700, color:CYAN, margin:0, textShadow:`0 0 20px ${CYAN}55` }}>Sizzler Control Centre</h1>
              <p style={{ fontSize:"0.85rem", color:MUTED, fontStyle:"italic", margin:"4px 0 0" }}>Wave, Road & Everything Between</p>
            </div>
            <div style={{ background:CARD, border:`1px solid ${GREEN}`, borderRadius:8, padding:"8px 14px", textAlign:"center" }}>
              <div style={{ fontSize:"0.68rem", color:MUTED, textTransform:"uppercase", letterSpacing:"0.3px" }}>System</div>
              <div style={{ fontSize:"0.9rem", fontWeight:700, color:GREEN, marginTop:2 }}>● All live</div>
            </div>
          </div>
        </div>

        <div style={{ padding:20 }}>

          {/* Check me in */}
          <Card accent="cyan">
            <CardTitle>Check me in — session start</CardTitle>
            {checkedIn ? (
              <div>
                <div style={{ fontSize:"1rem", fontWeight:700, color:CYAN, marginBottom:6 }}>⚡ {sessionFocus}</div>
                <p style={{ fontSize:"0.85rem", color:MUTED, margin:0 }}>Checked in. Single lane locked. Build it. 🤙</p>
                <button onClick={() => { setCheckedIn(false); setSessionFocus(""); }} style={{ marginTop:10, padding:"5px 12px", borderRadius:6, border:`1px solid ${BORDER}`, background:"transparent", cursor:"pointer", fontSize:"0.72rem", fontWeight:700, color:MUTED }}>Reset</button>
              </div>
            ) : (
              <>
                <input
                  value={sessionFocus}
                  onChange={e => setSessionFocus(e.target.value)}
                  placeholder="What's the single lane for this session?"
                  style={{ width:"100%", padding:"9px 12px", border:`1px solid ${BORDER}`, borderRadius:6, fontSize:"0.88rem", marginBottom:8, outline:"none", boxSizing:"border-box", background:"#0A0E1A", color:TEXT, fontFamily:"inherit" }}
                />
                <button
                  onClick={() => sessionFocus.trim() && setCheckedIn(true)}
                  style={{ padding:"8px 20px", borderRadius:6, background:CYAN, color:"#0A0E1A", border:"none", cursor:"pointer", fontSize:"0.82rem", fontWeight:700 }}
                >
                  Check Me In
                </button>
              </>
            )}
          </Card>

          {/* Stats */}
          <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
            <StatBox value="3" label="Live tools" color="green" />
            <StatBox value={activeCount} label="Active agents" color="cyan" />
            <StatBox value={readyCount} label="Ready agents" color="coral" />
            <StatBox value={`${pct}%`} label="Build progress" color="gold" />
          </div>

          {/* Live tools */}
          <Card accent="green">
            <CardTitle>Live tools</CardTitle>
            {tools.map(t => (
              <div key={t.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:`1px solid ${BORDER}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:8, height:8, borderRadius:"50%", background:GREEN, boxShadow:`0 0 6px ${GREEN}` }} />
                  <span style={{ fontSize:"0.88rem", fontWeight:700, color:TEXT }}>{t.name}</span>
                </div>
                <a href={t.url} target="_blank" rel="noreferrer" style={{ fontSize:"0.75rem", color:CYAN, textDecoration:"none", fontWeight:700, border:`1px solid ${CYAN}55`, padding:"3px 10px", borderRadius:5 }}>Open →</a>
              </div>
            ))}
          </Card>

          {/* Build queue */}
          <Card accent="cyan">
            <CardTitle>Build queue — {done}/{buildQueue.length} complete</CardTitle>
            <Prog pct={pct} />
            {buildQueue.map(item => (
              <div key={item.n} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", borderBottom:`1px solid ${BORDER}` }}>
                <span style={{ width:22, height:22, borderRadius:"50%", background:item.status==="done"?GREEN:item.status==="next"?CORAL:BORDER, color:item.status==="done"||item.status==="next"?"#0A0E1A":MUTED, fontSize:"0.68rem", fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{item.n}</span>
                <span style={{ fontSize:"0.85rem", flex:1, color:item.status==="done"?MUTED:TEXT, textDecoration:item.status==="done"?"line-through":"none" }}>{item.task}</span>
                {queueTag(item.status)}
              </div>
            ))}
          </Card>

          {/* Agent roster */}
          <Card accent="coral">
            <CardTitle>Agent roster ({agents.length})</CardTitle>
            {agents.map(a => (
              <div key={a.n} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 0", borderBottom:`1px solid ${BORDER}` }}>
                <div>
                  <span style={{ fontSize:"0.85rem", fontWeight:700, color:TEXT }}>{a.n}</span>
                  <span style={{ fontSize:"0.78rem", color:MUTED, marginLeft:8 }}>{a.r}</span>
                </div>
                {agentTag(a.s)}
              </div>
            ))}
          </Card>

          {/* Growth phase */}
          <Card accent="gold">
            <CardTitle>Growth phase</CardTitle>
            {[
              { label:"Phase 1 — Content before monetisation", status:"active", note:"Now → 6 months" },
              { label:"Phase 2 — Product gifting & brand relationships", status:"pending", note:"6–12 months" },
              { label:"Phase 3 — Affiliate, Patreon, guide, speaking", status:"pending", note:"12+ months" },
            ].map(p => (
              <div key={p.label} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:`1px solid ${BORDER}` }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:p.status==="active"?GREEN:BORDER, boxShadow:p.status==="active"?`0 0 6px ${GREEN}`:"none", flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"0.85rem", fontWeight:700, color:TEXT }}>{p.label}</div>
                  <div style={{ fontSize:"0.72rem", color:MUTED, marginTop:1 }}>{p.note}</div>
                </div>
                <span style={{ fontSize:"0.68rem", fontWeight:700, color:p.status==="active"?GREEN:MUTED }}>{p.status==="active"?"NOW":"UPCOMING"}</span>
              </div>
            ))}
          </Card>

        </div>
      </div>
    </div>
  );
}
