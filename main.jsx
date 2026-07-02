import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import mermaid from 'mermaid'
import { Download, Linkedin, Mail, MapPin, Users, ShieldCheck, Rocket, TrendingUp, Activity, Brain, GitBranch, Star, Heart, Utensils, PenLine, Dumbbell, Plane, Database, Funnel, Zap, Code2 } from 'lucide-react'
import './index.css'

const linkedinUrl = 'https://www.linkedin.com/in/gaurav-prakash-53163119'
const email = 'gauravprakash.hit@gmail.com'

function MermaidFlow() {
  const ref = useRef(null)
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      themeVariables: {
        background: '#020817', primaryColor: '#07172a', primaryTextColor: '#e5f2ff', primaryBorderColor: '#22d3ee',
        lineColor: '#38bdf8', secondaryColor: '#111827', tertiaryColor: '#0f172a', fontFamily: 'Inter, sans-serif'
      },
      flowchart: { curve: 'basis', htmlLabels: true, nodeSpacing: 46, rankSpacing: 55 }
    })
    mermaid.run({ nodes: [ref.current] })
  }, [])
  return <div ref={ref} className="mermaid text-center text-sm">
{`flowchart LR
  A[Amazon Bedrock<br/><small>Foundation models & LLM intelligence</small>]:::bedrock
  B[MCP Layer<br/><small>Secure context and tool orchestration</small>]:::mcp
  C[Data Sources<br/><small>GitLab • Jira • MongoDB • Monitoring Stack</small>]:::data
  D[Sampling & Processing<br/><small>Smart sampling • normalization • enrichment</small>]:::sampling
  E[AI Analysis & Insights<br/><small>Anomaly detection • RCA • patterns</small>]:::ai
  F[Decision & Orchestration<br/><small>Risk scoring • runbook selection</small>]:::decision
  G[Action & Automation<br/><small>Tickets • change automation • self-healing</small>]:::action
  H[Driving Production Stability<br/><small>Lower MTTR • fewer incidents • reliability</small>]:::outcome
  A-->B-->C-->D-->E-->F-->G-->H
  H-. feedback loop .->B
  H-. learn signals .->D
  classDef bedrock fill:#21103d,stroke:#c084fc,color:#f5e8ff
  classDef mcp fill:#06213d,stroke:#38bdf8,color:#dff7ff
  classDef data fill:#052f36,stroke:#22d3ee,color:#e6fffb
  classDef sampling fill:#052e1b,stroke:#4ade80,color:#dcfce7
  classDef ai fill:#3b2700,stroke:#facc15,color:#fef9c3
  classDef decision fill:#03253b,stroke:#06b6d4,color:#cffafe
  classDef action fill:#241234,stroke:#d8b4fe,color:#faf5ff
  classDef outcome fill:#052e2b,stroke:#2dd4bf,color:#ccfbf1`}
  </div>
}

const statItems = [
  [Users, '15+', 'Years Experience', 'text-cyan-400'], [ShieldCheck, '30M+', 'Customers Protected', 'text-green-400'], [TrendingUp, '$90M+', 'Savings Delivered', 'text-amber-300'],
  [Rocket, '40+', 'Automation Solutions', 'text-pink-400'], [Activity, '99.9%', 'Stability Focus', 'text-purple-300'], [Users, '20+', 'Team Size Led', 'text-teal-300']
]
const projects = [
  ['Health Check with Self-Healing','AI-driven health monitoring with OpenShift and Python remediation.', Activity],
  ['Change Quality Gate','AI-powered risk scoring and quality validation for ServiceNow changes.', ShieldCheck],
  ['Incident Thematic Analysis','NLP-based incident analysis, recurring theme discovery, and problem creation.', Brain],
  ['Service Dependency Graph','Live dependency mapping across GitLab metadata and runtime signals.', GitBranch],
  ['Vendor SLA Dashboard','Availability and ART tracking with proactive SLA visibility.', TrendingUp]
]
const hobbies = [[Utensils,'Cooking Various Cuisine','Experimenting with ingredients and creating dishes from around the world.'],[PenLine,'Writing Stories','Writing stories and poems that inspire, reflect, and connect.'],[Dumbbell,'Working Out','Staying active and focused through consistent workouts.'],[Plane,'Exploring New Places','Traveling and exploring new cultures, places, and experiences.']]

function App(){
  return <main className="min-h-screen overflow-hidden">
    <nav className="sticky top-0 z-50 border-b border-cyan-300/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#home" className="text-2xl font-black text-cyan-300">&lt;GP /&gt;</a>
        <div className="hidden gap-7 text-sm text-slate-300 md:flex"><a href="#about">About</a><a href="#journey">AIOps Journey</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <a href="/Personal/resume.pdf" className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"><Download className="mr-2 inline h-4 w-4"/>Resume</a>
      </div>
    </nav>

    <section id="home" className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_.95fr]">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="flex gap-7">
        <img src="/Personal/profile.jpeg" alt="Gaurav Prakash" className="profile-img h-44 w-44 shrink-0 rounded-full border-2 border-cyan-300 object-cover shadow-2xl shadow-cyan-500/20" />
        <div>
          <div className="mb-4 inline-flex rounded-full border border-teal-300/35 px-4 py-1 text-sm text-teal-100">SRE Leader <span className="mx-3 text-teal-300">•</span> Builder <span className="mx-3 text-teal-300">•</span> Automator</div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">Gaurav <span className="text-gradient">Prakash</span></h1>
          <h2 className="mt-2 text-2xl font-bold text-cyan-300 md:text-3xl">Service Manager & SRE Lead</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">Building resilient, observable and self-healing production platforms with AI-powered operations that prevent issues before they impact customers.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300"><span><MapPin className="mr-1 inline h-4 w-4"/>Morris Plains, NJ</span><a href={linkedinUrl}><Linkedin className="mr-1 inline h-4 w-4 text-blue-400"/>LinkedIn</a><a href={`mailto:${email}`}><Mail className="mr-1 inline h-4 w-4"/>{email}</a></div>
          <div className="mt-7 flex gap-4"><a href="/Personal/resume.pdf" className="rounded-xl bg-gradient-to-r from-teal-300 to-blue-600 px-6 py-3 font-bold text-white"><Download className="mr-2 inline h-4 w-4"/>Download Resume</a><a href={linkedinUrl} className="rounded-xl border border-cyan-300/35 px-6 py-3 font-bold text-white">LinkedIn Profile</a></div>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:.7}} className="glass grid grid-cols-2 gap-0 rounded-3xl p-7 md:grid-cols-3">
        {statItems.map(([Icon,num,label,color],i)=><div key={label} className="border border-slate-700/45 p-5"><Icon className={`mb-3 h-8 w-8 ${color}`}/><div className={`text-3xl font-black ${color}`}>{num}</div><div className="text-sm text-slate-300">{label}</div></div>)}
      </motion.div>
    </section>

    <section id="about" className="mx-auto max-w-7xl px-5"><div className="glass rounded-3xl p-7"><h2 className="mb-3 flex items-center text-2xl font-bold"><Users className="mr-3 text-cyan-400"/>About Me</h2><p className="max-w-3xl leading-relaxed text-slate-200">SRE leader with 15+ years of experience driving production excellence for global financial platforms. I specialize in observability, automation, incident leadership, cloud platforms and AI-powered operational intelligence that prevents issues before they impact customers.</p><div className="mt-5 flex flex-wrap gap-3">{['SRE','Observability','AIOps','Automation','Incident Management','Cloud Platforms','DevOps','Production Operations','System Reliability','ITIL'].map(x=><span className="rounded-full border border-slate-600/60 bg-slate-800/60 px-5 py-2 text-sm" key={x}>{x}</span>)}</div></div></section>

    <section id="journey" className="mx-auto max-w-7xl px-5 py-8"><div className="glass rounded-3xl p-7"><h2 className="flex items-center text-2xl font-bold"><Brain className="mr-3 text-cyan-400"/>AIOps Journey: Live Flow</h2><p className="mb-6 text-slate-300">From intelligent data to proactive actions that drive production stability.</p><MermaidFlow/><div className="mt-7 grid gap-4 md:grid-cols-4">{[[Database,'Data sources','GitLab, Jira, MongoDB, AppDynamics, Splunk, ITRS, Elastic'],[Funnel,'Sampling','Smart sampling, normalization, enrichment and noise reduction'],[Brain,'AI insights','Anomaly detection, pattern recognition, RCA and forecasting'],[Zap,'Automation','Auto tickets, runbooks, change automation and self-healing']].map(([Icon,t,d])=><div className="flow-card rounded-2xl border border-cyan-300/20 bg-slate-900/50 p-5"><Icon className="mb-3 text-cyan-300"/><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></div>)}</div></div></section>

    <section id="experience" className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3"><Card title="Barclays" subtitle="Mar 2022 – Present" body="Service Manager & SRE Lead driving automation, resilience, observability and RTB stability." accent="border-amber-400/55"/><Card title="CITI (TCS)" subtitle="Aug 2015 – Feb 2022" body="Cloud Architect building cloud platforms, monitoring solutions, DevOps pipelines and API infrastructure." accent="border-blue-400/55"/><Card title="TCS" subtitle="Mar 2010 – Aug 2015" body="Performance Engineer and Production Operations Lead across large-scale banking systems." accent="border-green-400/55"/></section>

    <section id="projects" className="mx-auto max-w-7xl px-5 py-8"><div className="glass rounded-3xl p-7"><h2 className="mb-5 flex items-center text-2xl font-bold"><Star className="mr-3 text-yellow-300"/>Featured Initiatives</h2><div className="grid gap-4 md:grid-cols-5">{projects.map(([t,d,Icon])=><div className="flow-card rounded-2xl border border-slate-700 bg-slate-950/60 p-5"><Icon className="mb-4 h-8 w-8 text-cyan-300"/><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5"><div className="glass rounded-3xl p-7"><h2 className="mb-5 flex items-center text-2xl font-bold"><Heart className="mr-3 text-pink-400"/>Beyond Work</h2><div className="grid gap-4 md:grid-cols-4">{hobbies.map(([Icon,t,d])=><div className="flow-card rounded-2xl border border-slate-700 bg-slate-900/60 p-5"><Icon className="mb-4 h-8 w-8 text-cyan-300"/><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></div>)}</div></div></section>

    <footer id="contact" className="mx-auto max-w-7xl px-5 py-8"><div className="glass flex flex-wrap items-center justify-between gap-5 rounded-3xl p-6"><div><h2 className="text-2xl font-bold">Let's Build <span className="text-cyan-300">Reliable Systems</span> Together</h2><p className="text-slate-300">Open to exciting opportunities in SRE Leadership, AIOps and Platform Reliability.</p></div><div className="text-sm text-slate-300"><p><Mail className="mr-2 inline h-4 w-4"/>{email}</p><p><Linkedin className="mr-2 inline h-4 w-4"/>{linkedinUrl.replace('https://www.','')}</p></div><Code2 className="h-9 w-9 text-cyan-300"/></div></footer>
  </main>
}
function Card({title,subtitle,body,accent}){return <div className={`glass rounded-3xl border p-6 ${accent}`}><p className="text-sm text-amber-200">{subtitle}</p><h3 className="mt-2 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p></div>}
createRoot(document.getElementById('root')).render(<App />)
