import React, { useState, useEffect } from 'react'
import data from '../../data/content.json'

export default function ExperiencePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#080a16] pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-lg text-indigo-100/70 max-w-3xl leading-relaxed font-medium">
            Leadership roles, technical contributions, and professional experience.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-rose-500/20 hidden md:block"></div>

          <div className="space-y-16">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <div className="card-glass p-8">
                      
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                          <p className="text-indigo-400 font-semibold text-base">{exp.company}</p>
                        </div>
                        <span className="px-3.5 py-1.5 bg-indigo-500/10 rounded-lg text-indigo-300 text-xs font-bold border border-indigo-500/15 shrink-0 self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs font-medium text-indigo-200/75 flex items-start gap-3 leading-relaxed">
                            <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 animate-pulse-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            className="px-2.5 py-1.5 bg-indigo-950/20 rounded-lg text-xs font-semibold text-indigo-200 border border-indigo-950/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 border-4 border-[#080a16] relative z-10">
                      <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-30"></div>
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
        <div className={`mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold text-slate-100 mb-10 text-center font-display">Technical Skills Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/15 transition-all">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-base font-bold text-slate-100 mb-4 uppercase tracking-wider text-xs font-bold text-indigo-300">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.languages.map((lang) => (
                  <span key={lang} className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-950/60 text-indigo-200/80 rounded-lg text-xs font-semibold">{lang}</span>
                ))}
              </div>
            </div>

            <div className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/15 transition-all">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-base font-bold text-slate-100 mb-4 uppercase tracking-wider text-xs font-bold text-indigo-300">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.frameworks.slice(0, 5).map((fw) => (
                  <span key={fw} className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-950/60 text-indigo-200/80 rounded-lg text-xs font-semibold">{fw}</span>
                ))}
              </div>
            </div>

            <div className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/15 transition-all">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-base font-bold text-slate-100 mb-4 uppercase tracking-wider text-xs font-bold text-indigo-300">Security</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.security.slice(0, 5).map((sec) => (
                  <span key={sec} className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-950/60 text-indigo-200/80 rounded-lg text-xs font-semibold">{sec}</span>
                ))}
              </div>
            </div>

            <div className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/15 transition-all">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-base font-bold text-slate-100 mb-4 uppercase tracking-wider text-xs font-bold text-indigo-300">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.cloud.slice(0, 5).map((cloud) => (
                  <span key={cloud} className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-950/60 text-indigo-200/80 rounded-lg text-xs font-semibold">{cloud}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
