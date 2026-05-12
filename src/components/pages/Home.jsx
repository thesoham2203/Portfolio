import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/content.json'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const roles = [
    'Privacy Engineer',
    'AI Developer',
    'Security Architect',
    'Compliance Analyst',
    'Fintech Specialist',
    'Researcher'
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080a16] font-sans">
      {/* Ambient Drifting background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse interactive glowing spot - soft & ambient */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-500/8 via-purple-500/4 to-rose-500/8 blur-[120px]"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: 'all 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)'
          }}
        ></div>
        
        {/* Stationary soft background blooms */}
        <div className="absolute top-24 left-[15%] w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-24 right-[15%] w-[450px] h-[450px] bg-rose-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      {/* Floating friendly particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translateY(0)',
              animation: 'float-aurora 20s ease-in-out infinite',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${12 + Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className={`max-w-5xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="text-center space-y-10">


            {/* Title / Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-display font-extrabold tracking-tight leading-none text-slate-100">
                Hi, I'm <span className="text-gradient-animated bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">{data.name}</span>
              </h1>
            </div>

            {/* Rotating role sub-header */}
            <div className="h-16 flex items-center justify-center overflow-hidden relative">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className={`absolute h-16 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    index === textIndex 
                      ? 'opacity-100 transform translate-y-0' 
                      : index < textIndex 
                        ? 'opacity-0 transform -translate-y-full'
                        : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <span className="text-2xl md:text-3xl font-bold text-indigo-200/90 tracking-wide">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* Tagline / Pitch */}
            <p className="text-lg md:text-xl text-indigo-100/70 max-w-2xl mx-auto leading-relaxed font-medium">
              {data.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              
              <Link 
                to="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full font-bold text-sm text-white overflow-hidden hover:scale-102 transition-all duration-300 shadow-md shadow-indigo-500/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link 
                to="/about"
                className="group px-8 py-4 bg-indigo-950/20 backdrop-blur-md rounded-full font-bold text-sm text-slate-200 border border-indigo-500/15 hover:border-indigo-500/35 hover:text-white transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  About Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </Link>

              <a 
                href="/Soham_CV.pdf"
                download="Soham_Penshanwar_CV.pdf"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 rounded-full font-bold text-sm text-white hover:scale-102 transition-all duration-300 shadow-sm shadow-emerald-500/10"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Resume
                </span>
              </a>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
