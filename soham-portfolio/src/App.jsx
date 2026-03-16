import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ExperiencePage from './components/pages/ExperiencePage'
import ContactPage from './components/pages/ContactPage'
import Footer from './components/Footer'

function ScrollToTop() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  return null
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const phase1Timer = setTimeout(() => setAnimationPhase(1), 500)
    const phase2Timer = setTimeout(() => setAnimationPhase(2), 1500)
    const phase3Timer = setTimeout(() => setAnimationPhase(3), 2500)
    const finishTimer = setTimeout(() => setIsLoading(false), 3500)

    return () => {
      clearTimeout(phase1Timer)
      clearTimeout(phase2Timer)
      clearTimeout(phase3Timer)
      clearTimeout(finishTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden font-mono">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 animate-scan shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950"></div>
        </div>

        {/* Central Core Visual */}
        <div className="relative z-10 scale-75 md:scale-100">
          <div className="relative w-48 h-48">
            {/* Rotating Hex Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-violet-500/40 animate-[spin_6s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border-4 border-double border-pink-500/20 animate-[spin_15s_linear_infinite]"></div>
            
            {/* Inner Core */}
            <div className={`absolute inset-12 rounded-2xl bg-slate-900 border border-cyan-400/50 flex items-center justify-center transition-all duration-700 ${animationPhase >= 1 ? 'shadow-[0_0_30px_rgba(34,211,238,0.4)] scale-110' : 'scale-90'}`}>
              <span className={`text-4xl font-black transition-all duration-1000 ${animationPhase >= 1 ? 'text-cyan-400' : 'text-slate-800'}`}>
                SP
              </span>
            </div>
          </div>
        </div>

        {/* Technical Status Text */}
        <div className="mt-12 w-80 relative z-10 text-center">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] text-cyan-500/80 uppercase tracking-widest font-bold">System Status</span>
              <span className="text-[10px] text-violet-400/80 uppercase tracking-widest">
                {animationPhase === 0 && "[ INITIALIZING ]"}
                {animationPhase === 1 && "[ KERNEL LOADED ]"}
                {animationPhase === 2 && "[ NEURAL LINK ESTABLISHED ]"}
                {animationPhase === 3 && "[ SECURE TUNNEL ACTIVE ]"}
              </span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="h-1 bg-slate-800/50 rounded-full overflow-hidden border border-slate-800/80 relative">
              <div 
                className={`h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 transition-all duration-[2000ms] ease-out ${
                  animationPhase === 0 ? 'w-[15%]' : 
                  animationPhase === 1 ? 'w-[45%]' : 
                  animationPhase === 2 ? 'w-[75%]' : 'w-full'
                }`}
              ></div>
              {/* Scan flash on bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20 animate-slide-right"></div>
            </div>

            {/* Data Stream Mimic */}
            <div className="mt-4 h-16 overflow-hidden text-[9px] text-slate-500 font-mono leading-tight opacity-60">
              <div className="animate-float-slow">
                {`> BOOTING_SEQUENCES...
> LOAD_ML_CORE_V4.2
> ENCRYPT_RSA_4096_ACTIVE
> BYPASS_LEGACY_FILTER
> PING_REMOTE_NODES: OK
> INITIALIZE_PRIVACY_SHIELD
> ESTABLISHING_TRUST...`}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Percentage */}
        <div className="absolute bottom-12 text-[10px] text-slate-600 tracking-[0.5em] uppercase">
          {animationPhase * 25 + 25}% Sync Completed
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
