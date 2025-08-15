import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

export default function App(){
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Phase 1: Initial loading
    const phase1Timer = setTimeout(() => {
      setAnimationPhase(1)
    }, 500)

    // Phase 2: Logo reveal
    const phase2Timer = setTimeout(() => {
      setAnimationPhase(2)
    }, 1500)

    // Phase 3: Text reveal
    const phase3Timer = setTimeout(() => {
      setAnimationPhase(3)
    }, 2500)

    // Phase 4: Transition to main content
    const phase4Timer = setTimeout(() => {
      setAnimationPhase(4)
      setShowContent(true)
    }, 3500)

    // Phase 5: Hide loading screen
    const finishTimer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(phase1Timer)
      clearTimeout(phase2Timer)
      clearTimeout(phase3Timer)
      clearTimeout(phase4Timer)
      clearTimeout(finishTimer)
    }
  }, [])

  return (
    <div className="min-h-screen font-sans bg-soham-navy dark:bg-soham-navy relative">
      {/* Loading Screen with Animation */}
      {isLoading && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-1000 ${
          animationPhase >= 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo */}
            <div className={`mb-8 transition-all duration-1000 ${
              animationPhase >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8'
            }`}>
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-xl bg-slate-900 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
                    SP
                  </span>
                </div>
                {/* Orbit rings */}
                <div className="absolute -inset-4 border border-cyan-400/30 rounded-full animate-ping"></div>
                <div className="absolute -inset-8 border border-violet-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            {/* Animated Text */}
            <div className={`transition-all duration-1000 delay-500 ${
              animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Soham Penshanwar
                </span>
              </h1>
              <div className={`transition-all duration-1000 delay-700 ${
                animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-slate-300 text-lg mb-8">Secure by Design, Intelligent by Nature</p>
                
                {/* Loading progress bar */}
                <div className="w-64 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full transition-all duration-2000 ${
                    animationPhase >= 1 ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  {animationPhase === 1 && "Initializing..."}
                  {animationPhase === 2 && "Loading portfolio..."}
                  {animationPhase === 3 && "Almost ready..."}
                  {animationPhase >= 4 && "Welcome!"}
                </p>
              </div>
            </div>

            {/* Floating code snippets */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              animationPhase >= 2 ? 'opacity-30' : 'opacity-0'
            }`}>
              <div className="absolute top-1/4 left-1/4 text-cyan-400/40 text-xs font-mono animate-float">
                const privacy = true;
              </div>
              <div className="absolute top-3/4 right-1/4 text-violet-400/40 text-xs font-mono animate-float-delayed">
                ML.accuracy = 95%+
              </div>
              <div className="absolute bottom-1/4 left-1/3 text-emerald-400/40 text-xs font-mono animate-float-slow">
                encryption: "AES-256"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Stagger Animation */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <BackgroundAnimation />
        
        <div className={`transition-all duration-800 delay-200 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Navbar />
        </div>
        
        <main className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-800 delay-400 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Hero />
          </div>
          <div className={`transition-all duration-800 delay-600 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <About />
          </div>
          <div className={`transition-all duration-800 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Projects />
          </div>
          <div className={`transition-all duration-800 delay-800 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Experience />
          </div>
          <div className={`transition-all duration-800 delay-900 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Contact />
          </div>
          <div className={`transition-all duration-800 delay-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
