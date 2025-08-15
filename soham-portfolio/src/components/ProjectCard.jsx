import React from 'react'

function DomainBadge({domain}){
  const map = { 
    'Privacy Engineering':'bg-gradient-to-r from-cyan-400 to-violet-500', 
    'Computer Vision':'bg-gradient-to-r from-violet-500 to-pink-400', 
    'Fintech Security':'bg-gradient-to-r from-emerald-400 to-cyan-500',
    'Accessibility AI':'bg-gradient-to-r from-orange-400 to-pink-500'
  }
  return <span className={`text-xs px-2 py-1 rounded text-slate-900 font-semibold ${map[domain]||'bg-slate-600'}`}>{domain}</span>
}

function TechStackVisual({domain, stack}){
  if(domain === 'Privacy Engineering') {
    return (
      <div className="w-28 h-20 rounded-md bg-gradient-to-br from-cyan-400/10 to-violet-500/10 border border-cyan-400/20 flex items-center justify-center relative overflow-hidden">
        <svg className="w-14 h-14" viewBox="0 0 56 56">
          <defs>
            <radialGradient id="privacyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1"/>
            </radialGradient>
          </defs>
          {/* Privacy shield with lock */}
          <g stroke="#22d3ee" strokeWidth="1.5" fill="none">
            <path d="M28 8 L40 14 L40 28 C40 36 34 42 28 42 C22 42 16 36 16 28 L16 14 Z" fill="url(#privacyGlow)"/>
            <rect x="24" y="22" width="8" height="10" rx="1" stroke="#7c3aed"/>
            <path d="M26,22 L26,19 A2,2 0 0,1 30,19 L30,22" stroke="#7c3aed"/>
            <circle cx="28" cy="27" r="1" fill="#22d3ee"/>
          </g>
          {/* Data encryption lines */}
          <g stroke="#7c3aed" strokeWidth="0.5" opacity="0.6">
            <path d="M12,20 L16,22" strokeDasharray="2,2"/>
            <path d="M40,22 L44,20" strokeDasharray="2,2"/>
            <path d="M12,35 L16,33" strokeDasharray="2,2"/>
            <path d="M40,33 L44,35" strokeDasharray="2,2"/>
          </g>
        </svg>
      </div>
    )
  }
  if(domain === 'Computer Vision') {
    return (
      <div className="w-28 h-20 rounded-md bg-gradient-to-br from-violet-500/10 to-pink-400/10 border border-violet-400/20 flex items-center justify-center relative overflow-hidden">
        <svg className="w-14 h-14" viewBox="0 0 56 56">
          {/* Camera/eye with neural network */}
          <g stroke="#7c3aed" strokeWidth="1.5" fill="none">
            <circle cx="28" cy="28" r="12" stroke="#f472b6"/>
            <circle cx="28" cy="28" r="6" fill="#7c3aed" fillOpacity="0.3"/>
            <circle cx="28" cy="28" r="3" fill="#f472b6"/>
          </g>
          {/* Neural connections */}
          <g stroke="#7c3aed" strokeWidth="1" opacity="0.6">
            <circle cx="14" cy="16" r="2" fill="#7c3aed"/>
            <circle cx="42" cy="16" r="2" fill="#f472b6"/>
            <circle cx="14" cy="40" r="2" fill="#7c3aed"/>
            <circle cx="42" cy="40" r="2" fill="#f472b6"/>
            <path d="M14,16 L28,28 M42,16 L28,28 M14,40 L28,28 M42,40 L28,28" strokeDasharray="2,3" opacity="0.8"/>
          </g>
        </svg>
      </div>
    )
  }
  if(domain === 'Fintech Security') {
    return (
      <div className="w-28 h-20 rounded-md bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 border border-emerald-400/20 flex items-center justify-center relative overflow-hidden">
        <svg className="w-14 h-14" viewBox="0 0 56 56">
          {/* Bank/secure vault with encryption */}
          <g stroke="#059669" strokeWidth="1.5" fill="none">
            <rect x="12" y="20" width="32" height="24" rx="2" fill="#059669" fillOpacity="0.1"/>
            <path d="M16,20 L16,16 A4,4 0 0,1 24,16 L24,20" stroke="#22d3ee"/>
            <path d="M32,20 L32,16 A4,4 0 0,1 40,16 L40,20" stroke="#22d3ee"/>
            <circle cx="28" cy="32" r="2" fill="#059669"/>
            <path d="M28,34 L28,38" stroke="#059669" strokeWidth="2"/>
          </g>
          {/* Financial data streams */}
          <g stroke="#22d3ee" strokeWidth="0.8" opacity="0.7">
            <path d="M8,28 L12,28" strokeDasharray="3,2"/>
            <path d="M44,28 L48,28" strokeDasharray="3,2"/>
            <path d="M8,36 L12,36" strokeDasharray="3,2"/>
            <path d="M44,36 L48,36" strokeDasharray="3,2"/>
            <text x="6" y="26" fontSize="4" fill="#22d3ee">₹</text>
            <text x="46" y="26" fontSize="4" fill="#22d3ee">$</text>
          </g>
        </svg>
      </div>
    )
  }
  // Accessibility AI
  return (
    <div className="w-28 h-20 rounded-md bg-gradient-to-br from-orange-400/10 to-pink-500/10 border border-orange-400/20 flex items-center justify-center relative overflow-hidden">
      <svg className="w-14 h-14" viewBox="0 0 56 56">
        {/* Hand gesture with AI recognition */}
        <g stroke="#f97316" strokeWidth="1.5" fill="none">
          <path d="M20,35 L20,25 M24,35 L24,20 M28,35 L28,18 M32,35 L32,22 M36,35 L36,28" strokeLinecap="round"/>
          <path d="M18,25 Q16,23 18,21 Q20,19 22,21 L22,25" fill="#f97316" fillOpacity="0.3"/>
          <circle cx="28" cy="45" r="8" stroke="#ec4899" strokeDasharray="4,4" opacity="0.7"/>
        </g>
        {/* AI processing indicators */}
        <g stroke="#ec4899" strokeWidth="1" opacity="0.6">
          <circle cx="12" cy="12" r="1.5" fill="#ec4899"/>
          <circle cx="44" cy="12" r="1.5" fill="#ec4899"/>
          <path d="M12,12 Q28,8 44,12" strokeDasharray="2,2"/>
          <text x="26" y="8" fontSize="6" fill="#ec4899">AI</text>
        </g>
      </svg>
    </div>
  )
}

function HighlightsList({highlights}){
  return (
    <div className="mt-3 space-y-1">
      {highlights.slice(0, 3).map((highlight, idx) => (
        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
          <div className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
          <span>{highlight}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectFeatures({features}){
  const featureIcons = {
    'Chrome Extension MV3': '🔌',
    'FastAPI Backend': '⚡',
    'AI/ML Processing': '🧠',
    'Privacy Compliance': '🛡️',
    'Computer Vision': '👁️',
    'Real-time Processing': '⚡',
    'Hardware Integration': '🔧',
    'Payment System': '💳',
    'Fintech Compliance': '🏦',
    'Data Encryption': '🔐',
    'Zero-Trust Security': '🛡️',
    'High Performance': '⚡',
    'Deep Learning': '🧠',
    'Density Estimation': '📊',
    'Accessibility': '♿',
    'Text-to-Speech': '🔊',
    'Inclusive Design': '💡'
  }
  
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {features.map(feature => (
        <span 
          key={feature} 
          className="text-xs px-2 py-1 rounded bg-slate-800/40 text-slate-300 border border-slate-700/30 hover:border-cyan-400/30 transition-colors flex items-center gap-1"
          title={feature}
        >
          <span className="text-xs">{featureIcons[feature] || '⚙️'}</span>
          <span className="hidden sm:inline">{feature}</span>
        </span>
      ))}
    </div>
  )
}

export default function ProjectCard({project}){
  return (
    <article className="card-glass p-5 rounded-xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10 group">
      <div className="flex gap-4 items-start">
        <TechStackVisual domain={project.domain} stack={project.stack} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg group-hover:text-cyan-300 transition-colors truncate pr-2">{project.title}</h3>
            <DomainBadge domain={project.domain} />
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-3">{project.description}</p>
          
          {project.highlights && <HighlightsList highlights={project.highlights} />}
          
          <div className="flex flex-wrap gap-1 mb-3 mt-4">
            {project.stack.slice(0, 6).map(s=> (
              <span key={s} className="text-xs px-2 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-cyan-400/30 transition-colors">
                {s}
              </span>
            ))}
            {project.stack.length > 6 && (
              <span className="text-xs px-2 py-1 rounded bg-slate-700/60 text-slate-400 border border-slate-600/50">
                +{project.stack.length - 6} more
              </span>
            )}
          </div>
          
          {project.features && <ProjectFeatures features={project.features} />}
          
          <div className="flex gap-2 mt-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs px-3 py-1.5 rounded bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              Explore Code
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              README
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
