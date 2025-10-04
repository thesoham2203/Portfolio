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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 text-center">
          <div className={`mb-8 transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-xl bg-slate-900 flex items-center justify-center">
                <span className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">SP</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${animationPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Soham Penshanwar
            </h1>
            <p className="text-slate-300 text-lg mb-8">Secure by Design, Intelligent by Nature</p>
            <div className="w-64 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-2000 ${animationPhase >= 1 ? 'w-full' : 'w-0'}`}></div>
            </div>
          </div>
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
