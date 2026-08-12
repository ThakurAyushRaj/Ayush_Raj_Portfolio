import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  PhoneCall, 
  Database, 
  Code2, 
  Bot,
  Sparkles
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { SplineScene } from './ui/splite'

export const Hero: React.FC = () => {
  const [viewMode, setViewMode] = useState<'robot' | 'terminal'>('robot')
  const [activeCodeTab, setActiveCodeTab] = useState<'overview' | 'api' | 'voice'>('overview')

  const codeSnippets = {
    overview: `// Ayush Raj — Production Engineering Stack
const developer = {
  name: "Ayush Raj",
  role: "Full Stack Developer",
  location: "Greater Noida, Uttar Pradesh, India",
  currentCompany: "aNquest Media",
  focusAreas: ["CRM Systems", "EMR Platforms", "REST APIs", "Voice & WhatsApp Automation"],
  techStack: {
    frontend: ["React.js", "React Native", "Flutter", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    cloud: ["AWS", "Git"]
  }
};`,
    api: `// CRM & EMR Production API Service
import express from 'express';
import { LeadSchema } from '../models';

export const leadWorkflowRouter = express.Router();

leadWorkflowRouter.post('/api/v1/leads/assign', async (req, res) => {
  const { leadId, agentId, priority } = req.body;
  const updatedLead = await LeadSchema.findByIdAndUpdate(
    leadId,
    { assignedAgent: agentId, status: 'IN_PROGRESS', priority },
    { new: true }
  );
  return res.status(200).json({ success: true, data: updatedLead });
});`,
    voice: `// Vobiz Voice API — Number Masked Bridge Calling
import { VobizVoiceClient } from 'vobiz-voice-sdk';

export async function initiateBridgeCall(agentNumber, leadNumber) {
  // Initiates two-way phone bridge hiding real numbers
  const session = await VobizVoiceClient.createBridge({
    agentPhone: agentNumber,
    leadPhone: leadNumber,
    maskCallerId: true,
    callbackUrl: 'https://api.anquest.com/vobiz/webhook'
  });
  return session.callId;
}`
  }

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Headline & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            {/* Online Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Software Development Engineer at aNquest Media</span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-2xl sm:text-3xl font-medium mb-1">
                  Hi, I'm
                </span>
                <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 dark:from-white dark:via-zinc-100 dark:to-zinc-400 light:from-zinc-900 light:to-zinc-600 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.title}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-zinc-800 text-cyan-300 border border-zinc-700">
                  Greater Noida, UP, India
                </span>
              </div>
            </div>

            {/* Core Summary Bullet */}
            <p className="text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.heroSummary}
            </p>

            {/* Secondary Technical Focus Text */}
            <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-500 leading-relaxed max-w-2xl border-l-2 border-cyan-500/60 pl-4 py-0.5">
              {PERSONAL_INFO.heroSecondary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#professional-work"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="uiverse-social-card">
                <span>Socials</span>
                <a
                  href="#contact"
                  className="social-link"
                  aria-label="Contact Me"
                  title="Contact Me"
                >
                  <Mail />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800/50">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>MERN & MEAN Stack</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>React Native & Flutter</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>AWS & System Design</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3D Robot & Developer Interactive Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/95 dark:bg-zinc-950/95 light:bg-zinc-900 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Header Bar with View Switcher */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    {viewMode === 'robot' ? (
                      <>
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        <span>3D Interactive Robot</span>
                      </>
                    ) : (
                      <>
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>ayush-raj@anquest:~</span>
                      </>
                    )}
                  </span>
                </div>

                {/* View Switcher Toggle Pills */}
                <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
                  <button
                    onClick={() => setViewMode('robot')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                      viewMode === 'robot'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>3D Robot</span>
                  </button>
                  <button
                    onClick={() => setViewMode('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                      viewMode === 'terminal'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Terminal</span>
                  </button>
                </div>
              </div>

              {/* View 1: 3D Robot Interactive Canvas */}
              {viewMode === 'robot' ? (
                <div className="relative w-full h-[420px] bg-black/90 flex items-center justify-center overflow-hidden">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800/80 backdrop-blur-md">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      <span>Interactive 3D Robot Model</span>
                    </span>
                    <span className="text-zinc-500">Drag to Orbit</span>
                  </div>
                </div>
              ) : (
                /* View 2: Live Code Terminal */
                <div>
                  {/* Code Snippet Tabs */}
                  <div className="flex border-b border-zinc-800/60 bg-zinc-950/50 px-2 text-xs font-mono">
                    <button
                      onClick={() => setActiveCodeTab('overview')}
                      className={`px-3 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                        activeCodeTab === 'overview'
                          ? 'border-cyan-400 text-cyan-400 font-semibold bg-zinc-900/60'
                          : 'border-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('api')}
                      className={`px-3 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                        activeCodeTab === 'api'
                          ? 'border-cyan-400 text-cyan-400 font-semibold bg-zinc-900/60'
                          : 'border-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Database className="w-3.5 h-3.5" />
                      crm-api.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('voice')}
                      className={`px-3 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                        activeCodeTab === 'voice'
                          ? 'border-cyan-400 text-cyan-400 font-semibold bg-zinc-900/60'
                          : 'border-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      vobiz-bridge.ts
                    </button>
                  </div>

                  {/* Code Display Area */}
                  <div className="p-4 sm:p-5 font-mono text-xs text-zinc-300 bg-zinc-950 overflow-x-auto h-[370px]">
                    <pre className="leading-relaxed">
                      <code>{codeSnippets[activeCodeTab]}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Card Footer Status Bar */}
              <div className="px-4 py-2.5 bg-zinc-900/90 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>3D Engine / WebGL: Online</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <span>Spline 3D</span>
                  <span className="text-cyan-400">WebGL 2.0</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
