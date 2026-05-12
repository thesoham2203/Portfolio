import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ExperiencePage from './components/pages/ExperiencePage'
import ContactPage from './components/pages/ContactPage'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080a16]">
        {/* Deep, calm organic aurora blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-rose-500/20 rounded-full blur-[80px] animate-aurora-bloom"></div>
          <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[60px]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-rose-500/10 rounded-full blur-[60px]" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6">
          {/* Soft logo sphere */}
          <div className={`mb-10 transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 opacity-20 blur-md"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#080a16] flex items-center justify-center">
                  <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">SP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fading text content */}
          <div className={`transition-all duration-1000 ${animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Soham Penshanwar
            </h1>
            <p className="text-indigo-200/60 text-base md:text-lg mb-8 font-medium tracking-wide">Thoughtful AI & Privacy Engineering</p>
            <div className="w-48 h-[2px] bg-indigo-950 rounded-full mx-auto overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-indigo-400 to-rose-400 transition-all duration-3000 ease-out ${animationPhase >= 1 ? 'w-full' : 'w-0'}`}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080a16] text-[#e1e1f3] selection:bg-indigo-500/20 selection:text-indigo-200 relative">
      <BackgroundAnimation />
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
