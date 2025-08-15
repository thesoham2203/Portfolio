import React, { useState, useEffect } from 'react'
import data from '../data/content.json'

export default function Hero(){
  const { name, tagline, bio } = data
  const [currentExpertise, setCurrentExpertise] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const expertiseAreas = [
    'Privacy Engineer & AI Developer',
    'Fintech Security Specialist', 
    'Computer Vision Engineer',
    'Chrome Extension Developer',
    'Full-Stack Privacy Architect'
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentExpertise(prev => (prev + 1) % expertiseAreas.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="pt-20 pb-24 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Dynamic expertise indicator */}
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="relative h-6 overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out" 
                   style={{transform: `translateY(-${currentExpertise * 100}%)`}}>
                {expertiseAreas.map((area, index) => (
                  <p key={index} className="text-cyan-300 text-sm uppercase tracking-widest font-medium h-6 flex items-center">
                    {area}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced name with typing effect */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gradient-animated relative">
              {name}
              <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full transition-all duration-1000"
                   style={{width: isVisible ? '100%' : '0%'}}></div>
            </span>
          </h1>
          
          {/* Enhanced tagline with stagger animation */}
          <div className="space-y-4">
            <p className={`text-slate-300 text-xl leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {tagline}
            </p>

            <p className={`text-slate-400 text-base leading-relaxed max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {bio}
            </p>
          </div>

          {/* Enhanced action buttons with hover effects */}
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href="https://github.com/thesoham2203" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              <span className="relative z-10">Explore GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/soham-penshanwar/" 
              target="_blank" 
              rel="noreferrer" 
              className="group px-8 py-4 border-2 border-slate-700 rounded-xl text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-sm bg-slate-800/20"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
              </svg>
              Connect
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </a>
          </div>

          {/* Quick stats row */}
          <div className={`flex items-center gap-8 pt-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">5+</div>
              <div className="text-xs text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-400">95%+</div>
              <div className="text-xs text-slate-400">ML Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">₹5L+</div>
              <div className="text-xs text-slate-400">Budget Led</div>
            </div>
          </div>
        </div>

        {/* Enhanced featured project card */}
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="card-glass p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <radialGradient id="privacyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.1"/>
                  </radialGradient>
                  <pattern id="hexPattern" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                    <polygon points="20,5 35,15 35,25 20,35 5,25 5,15" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#hexPattern)"/>
                
                <g transform="translate(180, 120)" filter="url(#glow)">
                  <path d="M20 0 L35 10 L35 25 C35 35 27.5 40 20 40 C12.5 40 5 35 5 25 L5 10 Z" 
                        fill="none" stroke="#22d3ee" strokeWidth="2.5" opacity="0.8"/>
                  <path d="M15 15 L18 18 L25 12" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="1"/>
                  <circle cx="20" cy="25" r="2" fill="#22d3ee" opacity="0.6" className="animate-pulse"/>
                </g>
                
                <g stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.5">
                  <circle cx="80" cy="80" r="4" fill="#22d3ee" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <circle cx="320" cy="220" r="4" fill="#7c3aed" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  <circle cx="120" cy="180" r="3" fill="#059669" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                  <circle cx="280" cy="100" r="3" fill="#22d3ee" className="animate-pulse" style={{animationDelay: '2s'}}/>
                  <path d="M80,80 Q150,130 200,150 Q250,160 320,220" strokeDasharray="4,4" className="animate-pulse"/>
                  <path d="M120,180 Q160,140 200,150 Q240,160 280,100" strokeDasharray="3,5" className="animate-pulse"/>
                </g>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <p className="text-sm text-slate-300 font-medium">Featured Project</p>
                <div className="ml-auto px-2 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30">
                  <span className="text-xs text-emerald-300 font-medium">Production</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-3">
                REDACT — Privacy Shield
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Enterprise-grade AI-powered document redaction system with GDPR compliance, 
                featuring real-time PII detection and secure tokenization.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                  <div className="text-cyan-400 font-bold text-2xl">95%+</div>
                  <div className="text-xs text-slate-400">PII Detection Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-violet-400/10 border border-violet-400/20">
                  <div className="text-violet-400 font-bold text-2xl">MV3</div>
                  <div className="text-xs text-slate-400">Chrome Extension</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-medium">FastAPI</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-violet-400/20 text-violet-300 border border-violet-400/30 font-medium">spaCy NLP</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 font-medium">GDPR</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-pink-400/20 text-pink-300 border border-pink-400/30 font-medium">Chrome MV3</span>
              </div>

              <a 
                href="https://github.com/thesoham2203?tab=repositories" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group"
              >
                View All Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
