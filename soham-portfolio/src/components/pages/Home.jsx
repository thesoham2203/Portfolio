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
    }, 3000)
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
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main hero content */}
          <div className="text-center space-y-8">
            
            {/* Animated greeting */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-lg rounded-full border border-cyan-400/30">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 text-sm font-medium tracking-wider">Available for opportunities</span>
              </div>
            </div>

            {/* Large name with animated gradient */}
            <h1 className="text-7xl md:text-9xl font-black leading-none">
              <span className="block text-gradient-animated bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {data.name.split(' ')[0]}
              </span>
              <span className="block text-white mt-2">
                {data.name.split(' ')[1]}
              </span>
            </h1>

            {/* Rotating role text */}
            <div className="h-20 flex items-center justify-center overflow-hidden relative">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className={`absolute h-20 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    index === textIndex 
                      ? 'opacity-100 transform translate-y-0' 
                      : index < textIndex 
                        ? 'opacity-0 transform -translate-y-full'
                        : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <span className="text-3xl md:text-4xl font-bold text-gradient-animated bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {data.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 mb-16">
              <Link 
                to="/projects"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-3">
                  View Projects
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link 
                to="/about"
                className="group px-10 py-5 bg-slate-800/50 backdrop-blur-lg rounded-2xl font-bold text-lg text-white border-2 border-slate-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  About Me
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </Link>

              <a 
                href="/Soham_CV.pdf"
                download="Soham_Penshanwar_CV.pdf"
                className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl font-bold text-lg text-white hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
