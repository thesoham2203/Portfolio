import React from 'react'
import data from '../data/content.json'

export default function Hero(){
  const { name, tagline } = data
  return (
    <section className="pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow"></div>
            <p className="text-cyan-300 text-sm uppercase tracking-widest font-medium">
              Hi, I'm
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gradient-animated">{name}</span>
          </h1>
          
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/thesoham2203" 
              target="_blank" 
              rel="noreferrer" 
              className="group px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/soham-penshanwar/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 border border-slate-700 rounded-lg text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-700 rounded-lg text-slate-200 hover:border-violet-400/50 hover:text-violet-300 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          <div className="pt-4">
            <span className="code-typing text-cyan-400">
              const focus = ['AI', 'security', 'fintech'];
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="card-glass p-6 rounded-xl shadow-xl relative overflow-hidden">
            {/* Neural network background pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1"/>
                  </radialGradient>
                </defs>
                <g stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.6">
                  <circle cx="80" cy="60" r="3" fill="#22d3ee"/>
                  <circle cx="320" cy="140" r="3" fill="#7c3aed"/>
                  <circle cx="200" cy="100" r="4" fill="#22d3ee"/>
                  <path d="M80,60 L200,100 L320,140" strokeDasharray="4,4"/>
                  <path d="M80,60 L320,140" strokeDasharray="2,6" opacity="0.3"/>
                </g>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                <p className="text-sm text-slate-300">Featured Project</p>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                ArchiveMind
              </h3>
              <p className="text-slate-400 mt-2">AI-driven legacy data extraction</p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">PyTorch</span>
                <span className="text-xs px-2 py-1 rounded bg-violet-400/20 text-violet-300 border border-violet-400/30">NLP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
