import React, { useState, useEffect } from 'react'
import data from '../../data/content.json'

export default function ExperiencePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Leadership roles, technical contributions, and professional experience.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-16">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content card */}
                  <div className="flex-1">
                    <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-violet-400/50 transition-all hover:scale-[1.02]">
                      
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <p className="text-violet-400 font-medium text-lg">{exp.company}</p>
                        </div>
                        <span className="px-4 py-2 bg-violet-400/10 rounded-lg text-violet-400 text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-3">
                            <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-medium text-slate-300 border border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 border-4 border-slate-950 relative">
                      <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills summary */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technical Skills Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/50 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold text-white mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.languages.map((lang) => (
                  <span key={lang} className="text-sm text-slate-400">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-violet-400/50 transition-all">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.frameworks.slice(0, 5).map((fw) => (
                  <span key={fw} className="text-sm text-slate-400">{fw}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-pink-400/50 transition-all">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.security.slice(0, 5).map((sec) => (
                  <span key={sec} className="text-sm text-slate-400">{sec}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-emerald-400/50 transition-all">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.cloud.slice(0, 5).map((cloud) => (
                  <span key={cloud} className="text-sm text-slate-400">{cloud}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
