import { useState } from "react";

const OCEAN_BLUE = "#0077B6";
const CORAL = "#FF6B6B";
const SKY = "#48CAE4";
const SAND = "#FFF3E0";
const DARK = "#2D3436";

function Tag({ color, children }) {
  const map = {
    blue: { bg: "#e3f4fd", color: OCEAN_BLUE },
    coral: { bg: "#ffe8e8", color: CORAL },
    green: { bg: "#e3f9e5", color: "#2d7a3a" },
    gold: { bg: "#fff3cd", color: "#856404" },
    sky: { bg: "#e0f7fa", color: "#00838f" },
  };
  const s = map[color] || map.blue;
  return (
    <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:20, fontSize:"0.7rem", fontWeight:700, marginRight:4, background:s.bg, color:s.color }}>
      {children}
    </span>
  );
}

function Card({ children, accent }) {
  const borders = { blue:OCEAN_BLUE, coral:CORAL, gold:"#F4A261", sky:SKY, green:"#2d7a3a" };
  return (
    <div style={{ background:"white", borderRadius:8, padding:"14px 16px", marginBottom:12, borderLeft:`4px solid ${borders[accent]||SKY}`, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return <div style={{ fontSize:"0.72rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.4px", color:"#888", marginBottom:10 }}>{children}</div>;
}

function Prog({ pct, color }) {
  const colors = { blue:OCEAN_BLUE, coral:CORAL, green:"#2d7a3a", gold:"#F4A261" };
  return (
    <div style={{ height:6, background:"#eee", borderRadius:3, overflow:"hidden", margin:"6px 0" }}>
      <div style={{ height:"100%", borderRadius:3, background:colors[color]||OCEAN_BLUE, width:`${pct}%` }} />
    </div>
  );
}

function StatBox({ value, label, color }) {
  const colors = { blue:OCEAN_BLUE, coral:CORAL, green:"#2d7a3a", gold:"#F4A261" };
  return (
    <div style={{ flex:1, minWidth:100, background:"white", borderRadius:8, padding:12, textAlign:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.06)", borderTop:`3px solid ${colors[color]||OCEAN_BLUE}` }}>
      <div style={{ fontSize:"1.5rem", fontWeight:700, color:colors[color]||OCEAN_BLUE }}>{value}</div>
      <div style={{ fontSize:"0.68rem", color:"#888", textTransform:"uppercase", letterSpacing:"0.3px", marginTop:2 }}>{label}</div>
    </div>
  );
}

export default function App() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [sessionFocus, setSessionFocus] = useState("");
  const [focusLocked, setFocusLocked] = useState(false);

  const tools = [
    { name:"Jarvis V3", url:"https://sizzler-jarvis-v3.vercel.app/", status:"live", color:"green" },
    { name:"Builder's Log", url:"https://sizzler-builderslog.vercel.app/", status:"live", color:"green" },
    { name:"Control Centre", url:"#", status:"live", color:"green" },
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
    { n:1, task:"Builder's Log standalone tool", status:"done" },
    { n:2, task:"Control Centre standalone tool", status:"done" },
    { n:3, task:"Ideas database upgrade in Jarvis V3", status:"next" },
    { n:4, task:"Rex database connected", status:"pending" },
    { n:5, task:"Agents activated — Maya & Ada first", status:"pending" },
    { n:6, task:"Cleo photo/video caption analysis", status:"pending" },
    { n:7, task:"Voice interaction for Jarvis", status:"pending" },
    { n:8, task:"Claude Projects setup", status:"pending" },
    { n:9, task:"Agent brain/link structure", status:"pending" },
    { n:10, task:"Scout web intelligence", status:"pending" },
    { n:11, task:"Jarvis as business generator", status:"pending" },
    { n:12, task:"NZ Bodysurfing Guide", status:"pending" },
    { n:13, task:"Patreon setup", status:"pending" },
    { n:14, task:"Hardware review August 2026", status:"pending" },
  ];

  const agentStatusTag = (s) => {
    if (s === "active") return <Tag color="green">Active</Tag>;
    if (s === "ready") return <Tag color="blue">Ready</Tag>;
    if (s === "pending") return <Tag color="gold">Pending</Tag>;
    return <Tag color="coral">In dev</Tag>;
  };

  const queueTag = (s) => {
    if (s === "done") return <Tag color="green">Done</Tag>;
    if (s === "next") return <Tag color="coral">Next</Tag>;
    return <Tag color="gold">Pending</Tag>;
  };

  const doneTasks = buildQueue.filter(t => t.status === "done").length;
  const queuePct = Math.round((doneTasks / buildQueue.length) * 100);

  const activeAgents = agents.filter(a => a.s === "active").length;
  const readyAgents = agents.filter(a => a.s === "ready").length;

  return (
    <div style={{ fontFamily:"sans-serif", color:DARK, maxWidth:860, margin:"0 auto" }}>

      {/* Header */}
      <div style={{ background:OCEAN_BLUE, padding:"16px 20px 12px", borderRadius:"10px 10px 0 0" }}>
        <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
          <div>
            <h1 style={{ fontSize:"1.4rem", fontWeight:700, color:"white", margin:0 }}>Sizzler Control Centre</h1>
            <p style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.75)", fontStyle:"italic", margin:"4px 0 0" }}>Wave, Road & Everything Between</p>
          </div>
          <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:8, padding:"8px 14px", textAlign:"center" }}>
            <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.8)", textTransform:"uppercase", letterSpacing:"0.3px" }}>System status</div>
            <div style={{ fontSize:"0.9rem", fontWeight:700, color:"white", marginTop:2 }}>🟢 All systems live</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ background:SAND, padding:20, borderRadius:"0 0 10px 10px", border:"1px solid #ddd", borderTop:"none", minHeight:500 }}>

        {/* Check me in */}
        <Card accent="blue">
          <CardTitle>Check me in — session start</CardTitle>
          {checkedIn && focusLocked ? (
            <div>
              <div style={{ fontSize:"1rem", fontWeight:700, color:OCEAN_BLUE, marginBottom:6 }}>🎯 {sessionFocus}</div>
              <p style={{ fontSize:"0.85rem", lineHeight:1.6, color:"#555", margin:0 }}>Checked in. Single lane locked. Build it. 🤙</p>
              <button onClick={() => { setCheckedIn(false); setFocusLocked(false); setSessionFocus(""); }} style={{ marginTop:10, padding:"5px 12px", borderRadius:6, border:"1.5px solid #ddd", background:"transparent", cursor:"pointer", fontSize:"0.72rem", fontWeight:700 }}>Reset</button>
            </div>
          ) : (
            <>
              <input
                value={sessionFocus}
                onChange={e => setSessionFocus(e.target.value)}
                placeholder="What's the single lane for this session?"
                style={{ width:"100%", padding:"8px 10px", border:"1.5px solid #ddd", borderRadius:6, fontSize:"0.88rem", marginBottom:8, outline:"none", boxSizing:"border-box" }}
              />
              <button
                onClick={() => { if (sessionFocus.trim()) { setCheckedIn(true); setFocusLocked(true); } }}
                style={{ padding:"8px 18px", borderRadius:6, background:OCEAN_BLUE, color:"white", border:"none", cursor:"pointer", fontSize:"0.82rem", fontWeight:700 }}
              >
                Check Me In
              </button>
            </>
          )}
        </Card>

        {/* Stats */}
        <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
          <StatBox value="3" label="Live tools" color="green" />
          <StatBox value={activeAgents} label="Active agents" color="blue" />
          <StatBox value={readyAgents} label="Ready agents" color="sky" />
          <StatBox value={`${queuePct}%`} label="Build progress" color="coral" />
        </div>

        {/* Live tools */}
        <Card accent="green">
          <CardTitle>Live tools</CardTitle>
          {tools.map(t => (
            <div key={t.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid #f0f0f0" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:"#2d7a3a", flexShrink:0 }} />
                <span style={{ fontSize:"0.88rem", fontWeight:700 }}>{t.name}</span>
              </div>
              {t.url !== "#" && (
                <a href={t.url} target="_blank" rel="noreferrer" style={{ fontSize:"0.75rem", color:OCEAN_BLUE, textDecoration:"none", fontWeight:700, border:`1px solid ${OCEAN_BLUE}`, padding:"3px 8px", borderRadius:5 }}>Open</a>
              )}
            </div>
          ))}
        </Card>

        {/* Build queue */}
        <Card accent="blue">
          <CardTitle>Build queue — {doneTasks}/{buildQueue.length} complete</CardTitle>
          <Prog pct={queuePct} color="blue" />
          {buildQueue.map(item => (
            <div key={item.n} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", borderBottom:"1px solid #f0f0f0" }}>
              <span style={{ width:22, height:22, borderRadius:"50%", background:item.status==="done"?"#2d7a3a":item.status==="next"?CORAL:"#ddd", color:"white", fontSize:"0.72rem", fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{item.n}</span>
              <span style={{ fontSize:"0.85rem", flex:1, textDecoration:item.status==="done"?"line-through":"none", opacity:item.status==="done"?0.5:1 }}>{item.task}</span>
              {queueTag(item.status)}
            </div>
          ))}
        </Card>

        {/* Agent roster */}
        <Card>
          <CardTitle>Agent roster ({agents.length})</CardTitle>
          {agents.map(a => (
            <div key={a.n} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 0", borderBottom:"1px solid #f0f0f0" }}>
              <div>
                <span style={{ fontSize:"0.85rem", fontWeight:700 }}>{a.n}</span>
                <span style={{ fontSize:"0.78rem", color:"#888", marginLeft:8 }}>{a.r}</span>
              </div>
              {agentStatusTag(a.s)}
            </div>
          ))}
        </Card>

        {/* Phase overview */}
        <Card accent="coral">
          <CardTitle>Growth phase</CardTitle>
          {[
            { label:"Phase 1 — Content before monetisation", status:"active", note:"Now → 6 months" },
            { label:"Phase 2 — Product gifting & brand relationships", status:"pending", note:"6–12 months" },
            { label:"Phase 3 — Affiliate, Patreon, guide, speaking", status:"pending", note:"12+ months" },
          ].map(p => (
            <div key={p.label} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f0f0f0" }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:p.status==="active"?CORAL:"#ddd", flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:"0.85rem", fontWeight:700 }}>{p.label}</div>
                <div style={{ fontSize:"0.72rem", color:"#888", marginTop:1 }}>{p.note}</div>
              </div>
              <span style={{ fontSize:"0.68rem", fontWeight:700, color:p.status==="active"?CORAL:"#aaa" }}>{p.status==="active"?"NOW":"UPCOMING"}</span>
            </div>
          ))}
        </Card>

      </div>
    </div>
  );
}
