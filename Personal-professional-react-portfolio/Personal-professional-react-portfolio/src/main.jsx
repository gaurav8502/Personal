import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import mermaid from 'mermaid'
import { ArrowRight, Github, Linkedin, Download, Mail, MapPin, ShieldCheck, Activity, Brain, ServerCog, ChefHat, Dumbbell, BookOpen, Plane, Sparkles } from 'lucide-react'
import './index.css'

const profile = {
  name: 'Gaurav Prakash',
  role: 'Service Manager & SRE Lead',
  headline: 'Building resilient, observable and AI-assisted production platforms.',
  location: 'Morris Plains, New Jersey',
  email: 'gauravprakash.hit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gaurav-prakash-53163119',
  github: 'https://github.com/gaurav8502',
  resume: '/Personal/resume.pdf'
}

function Card({ children, className = '' }) {
  return <div className={`glass rounded-3xl shadow-glow ${className}`}>{children}</div>
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return <div className="mb-8">
    <p className="text-cyan-300 text-sm font-semibold tracking-[.28em] uppercase">{eyebrow}</p>
    <h2 className="text-3xl md:text-5xl font-bold mt-3">{title}</h2>
    {subtitle && <p className="text-slate-300 mt-4 max-w-3xl leading-7">{subtitle}</p>}
  </div>
}

function MermaidDiagram() {
  const ref = useRef(null)
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose', themeVariables: { primaryColor: '#0f172a', primaryBorderColor: '#22d3ee', primaryTextColor: '#e2e8f0', lineColor: '#60a5fa', clusterBkg: '#111827', clusterBorder: '#475569' } })
    const code = `flowchart LR
      A[Amazon Bedrock\nLLM reasoning layer] --> B[MCP Server\nsecure tool interface]
      B --> C{Enterprise Data Sources}
      C --> D[GitLab\ncode & pipelines]
      C --> E[Jira / ServiceNow\nwork + change + incidents]
      C --> F[MongoDB / APIs\nservice metadata]
      C --> G[Monitoring Stack\nAppD • Elastic • Splunk • ITRS]
      D --> H[Context Enrichment\nownership + dependencies]
      E --> H
      F --> H
      G --> H
      H --> I[Intelligent Sampling\nnoise reduction + signal quality]
      I --> J[AI Analysis Engine\nthemes • risk • probable cause]
      J --> K[Runbook Orchestration\nAnsible • Python • OpenShift]
      K --> L[Controlled Remediation\nself-healing + approvals]
      L --> M[Production Stability\nlower MTTR • fewer repeats • better change quality]
      M -. feedback .-> H`
    mermaid.render('aiopsJourneyMermaid', code).then(({ svg }) => { if (ref.current) ref.current.innerHTML = svg })
  }, [])
  return <div ref={ref} className="mermaid-wrap overflow-x-auto rounded-2xl bg-slate-950/70 p-4" />
}

function AnimatedSvgFlow() {
  const nodes = [
    ['Bedrock', 'AI reasoning', 60, 75], ['MCP', 'Tool gateway', 250, 75], ['Data Sources', 'GitLab/Jira/Mongo/Monitoring', 460, 75],
    ['Sampling', 'Signal quality', 250, 225], ['AI Engine', 'Themes + RCA + risk', 460, 225], ['Production Stability', 'MTTR • risk • resilience', 690, 150]
  ]
  const lines = [[[170,110],[240,110]],[[360,110],[450,110]],[[570,135],[680,160]],[[530,175],[530,225]],[[450,260],[360,260]],[[250,190],[250,155]],[[570,260],[690,190]]]
  return <svg viewBox="0 0 900 340" className="w-full h-auto">
    <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="#22d3ee"/><stop offset="1" stopColor="#a78bfa"/></linearGradient></defs>
    {lines.map((l,i)=><path key={i} d={`M${l[0][0]} ${l[0][1]} L${l[1][0]} ${l[1][1]}`} stroke="url(#g)" strokeWidth="3" fill="none" className="flow-line" />)}
    {nodes.map(([title,sub,x,y],i)=><g key={title}>
      <rect x={x} y={y} rx="18" width={title==='Production Stability'?170:150} height="82" fill="rgba(15,23,42,.96)" stroke={i===5?'#34d399':'#22d3ee'} strokeWidth="1.5" />
      <circle cx={x+24} cy={y+25} r="7" fill={i===5?'#34d399':'#22d3ee'} />
      <text x={x+42} y={y+31} fill="#f8fafc" fontSize="16" fontWeight="700">{title}</text>
      <text x={x+18} y={y+58} fill="#cbd5e1" fontSize="12">{sub}</text>
    </g>)}
  </svg>
}

function App() {
  const initiatives = [
    ['Health Check with Self-Healing', 'OpenShift + AppDynamics based health intelligence with controlled restart/remediation patterns.', Activity],
    ['Change Quality Gate', 'Risk scoring for emergency, failed, manual and partially automated changes.', ShieldCheck],
    ['Incident Thematic Analysis', 'Pattern detection across L1/L2 queues to link incidents with problem records.', Brain],
    ['Service Dependency Graph', 'GitLab and runtime signals to map upstream/downstream service dependencies.', ServerCog]
  ]
  const hobbies = [[ChefHat,'Cooking various cuisines'],[BookOpen,'Writing stories'],[Dumbbell,'Working out'],[Plane,'Exploring new places']]
  return <main className="min-h-screen bg-grid">
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"><span className="font-bold">GP<span className="text-cyan-300">.</span></span><div className="hidden md:flex gap-6 text-sm text-slate-300"><a href="#aiops">AIOps</a><a href="#work">Work</a><a href="#hobbies">Beyond work</a><a href="#contact">Contact</a></div></div>
    </nav>
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1.15fr_.85fr] gap-10 items-center">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-cyan-100 mb-7"><Sparkles size={16}/> SRE • Observability • AIOps • Automation</div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight">{profile.name}<br/><span className="gradient-text">{profile.role}</span></h1>
        <p className="mt-6 text-xl text-slate-300 max-w-2xl leading-8">{profile.headline} Focused on turning production complexity into measurable stability through observability, automation, and AI-assisted operations.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a className="rounded-full bg-cyan-400 text-slate-950 font-bold px-6 py-3 inline-flex gap-2" href={profile.resume} download><Download/>Download Resume</a><a className="rounded-full glass px-6 py-3 inline-flex gap-2" href={profile.linkedin} target="_blank"><Linkedin/>LinkedIn</a><a className="rounded-full glass px-6 py-3 inline-flex gap-2" href={profile.github} target="_blank"><Github/>GitHub</a></div>
        <div className="mt-8 flex gap-2 text-slate-400"><MapPin size={18}/>{profile.location}</div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}} className="flex justify-center">
        <Card className="p-6 w-full max-w-sm"><img src="/Personal/profile.jpeg" className="w-56 h-56 mx-auto rounded-full object-cover border-4 border-cyan-300/30 shadow-glow"/><div className="mt-6 grid grid-cols-3 gap-3 text-center"><div><b className="text-2xl">15+</b><p className="text-xs text-slate-400">Years</p></div><div><b className="text-2xl">30M</b><p className="text-xs text-slate-400">Customers</p></div><div><b className="text-2xl">AI</b><p className="text-xs text-slate-400">Ops Focus</p></div></div></Card>
      </motion.div>
    </section>
    <section id="aiops" className="max-w-7xl mx-auto px-6 py-16"><SectionTitle eyebrow="Live architecture" title="AIOps Journey" subtitle="A practical flow for connecting Bedrock, MCP and enterprise operational data into a production stability engine."/><Card className="p-4 md:p-8"><AnimatedSvgFlow/><div className="mt-6"><MermaidDiagram/></div></Card></section>
    <section id="work" className="max-w-7xl mx-auto px-6 py-16"><SectionTitle eyebrow="Featured initiatives" title="Production stability portfolio"/><div className="grid md:grid-cols-2 gap-5">{initiatives.map(([t,d,Icon])=><motion.div whileHover={{y:-6}} key={t}><Card className="p-6 h-full"><Icon className="text-cyan-300 mb-5" size={32}/><h3 className="text-xl font-bold">{t}</h3><p className="text-slate-300 mt-3 leading-7">{d}</p></Card></motion.div>)}</div></section>
    <section className="max-w-7xl mx-auto px-6 py-16"><SectionTitle eyebrow="Career path" title="Enterprise engineering leadership"/><Card className="p-8"><div className="grid md:grid-cols-3 gap-5"><div><h3 className="text-cyan-300 font-bold">TCS</h3><p className="text-slate-300">System engineering, monitoring automation and production operations foundation.</p></div><div><h3 className="text-blue-300 font-bold">Citi</h3><p className="text-slate-300">Cloud architecture, APIs, GemFire, AppDynamics/Splunk dashboards and DevOps pipelines.</p></div><div><h3 className="text-purple-300 font-bold">Barclays</h3><p className="text-slate-300">SRE leadership, fraud RTB, OpenShift modernization, automation and AI operations.</p></div></div></Card></section>
    <section id="hobbies" className="max-w-7xl mx-auto px-6 py-16"><SectionTitle eyebrow="Beyond work" title="Personal interests"/><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{hobbies.map(([Icon,t])=><Card key={t} className="p-6 text-center"><Icon className="mx-auto text-cyan-300" size={34}/><h3 className="font-bold mt-4">{t}</h3></Card>)}</div></section>
    <footer id="contact" className="border-t border-white/10 mt-16"><div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-5 justify-between text-slate-300"><p>© {new Date().getFullYear()} Gaurav Prakash. Built with React, Vite, Tailwind, Framer Motion and Mermaid.</p><div className="flex gap-5"><a href={`mailto:${profile.email}`}><Mail/></a><a href={profile.linkedin}><Linkedin/></a><a href={profile.github}><Github/></a></div></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
