import { useState, useEffect } from 'react'
import { InteractiveBg } from './components/ui/interactive-bg'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { ProfessionalWork } from './components/ProfessionalWork'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Timeline } from './components/Timeline'
import { Education } from './components/Education'
import { WhatIBuild } from './components/WhatIBuild'
import { EngineeringFocus } from './components/EngineeringFocus'
import { DeveloperPresence } from './components/DeveloperPresence'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ResumeModal } from './components/ResumeModal'
import { ProjectItem } from './data/portfolioData'

export function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden ${
      darkMode 
        ? 'bg-zinc-950 text-zinc-100 dark' 
        : 'bg-zinc-50 text-zinc-900 light'
    }`}>
      {/* Background Interactive Mesh Canvas */}
      <InteractiveBg />

      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProfessionalWork onSelectProject={(p) => setSelectedProject(p)} />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Timeline />
        <Education />
        <WhatIBuild />
        <EngineeringFocus />
        <DeveloperPresence />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  )
}

export default App
