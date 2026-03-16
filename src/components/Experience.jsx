import React from 'react'
import data from '../data/content.json'

function ExperienceCard({ experience, index }) {
  const colors = [
    'from-cyan-400 to-blue-500',
    'from-violet-500 to-purple-600', 
    'from-pink-400 to-rose-500'
  ]
  
  return (
    <div className="card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
          <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
            {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
            {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
          </svg>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="font-semibold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
              {experience.role}
            </h3>
            <span className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
              {experience.period}
            </span>
          </div>
          
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience(){
  return (
    <section id="experience" className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          Experience & Leadership
        </h2>
        <p className="text-slate-300 text-lg">
          Key roles and achievements in technology leadership, research, and industry consulting.
        </p>
      </div>

      <div className="space-y-6">
        {data.experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  )
}
