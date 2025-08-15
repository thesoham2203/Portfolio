import React from 'react'

function DomainBadge({domain}){
  const map = { 
    'AI/ML':'bg-gradient-to-r from-cyan-400 to-violet-500', 
    'Fintech/Security':'bg-gradient-to-r from-violet-500 to-pink-400', 
    'Privacy/Tools':'bg-gradient-to-r from-cyan-400 to-pink-400' 
  }
  return <span className={`text-xs px-2 py-1 rounded text-slate-900 font-semibold ${map[domain]||'bg-slate-600'}`}>{domain}</span>
}

function TechStackVisual({domain, stack}){
  if(domain === 'AI/ML') {
    return (
      <div className="w-24 h-16 rounded-md bg-gradient-to-br from-cyan-400/10 to-violet-500/10 border border-cyan-400/20 flex items-center justify-center relative overflow-hidden">
        <svg className="w-12 h-12" viewBox="0 0 48 48">
          <g stroke="#22d3ee" strokeWidth="1" fill="none">
            <circle cx="12" cy="12" r="2" fill="#22d3ee"/>
            <circle cx="36" cy="12" r="2" fill="#7c3aed"/>
            <circle cx="24" cy="36" r="2" fill="#22d3ee"/>
            <path d="M12,12 L24,36 L36,12" strokeDasharray="2,2"/>
          </g>
        </svg>
      </div>
    )
  }
  if(domain === 'Fintech/Security') {
    return (
      <div className="w-24 h-16 rounded-md bg-gradient-to-br from-violet-500/10 to-pink-400/10 border border-violet-400/20 flex items-center justify-center">
        <svg className="w-12 h-12" viewBox="0 0 48 48">
          <g stroke="#7c3aed" strokeWidth="1.5" fill="none">
            <rect x="18" y="20" width="12" height="16" rx="2"/>
            <path d="M21,20 L21,16 A3,3 0 0,1 27,16 L27,20"/>
            <circle cx="24" cy="28" r="1" fill="#7c3aed"/>
          </g>
        </svg>
      </div>
    )
  }
  // Privacy/Tools
  return (
    <div className="w-24 h-16 rounded-md bg-gradient-to-br from-cyan-400/10 to-pink-400/10 border border-pink-400/20 flex items-center justify-center">
      <svg className="w-12 h-12" viewBox="0 0 48 48">
        <g stroke="#f472b6" strokeWidth="1.5" fill="none">
          <circle cx="24" cy="24" r="8"/>
          <path d="M16,16 L32,32"/>
          <path d="M32,16 L16,32"/>
        </g>
      </svg>
    </div>
  )
}

export default function ProjectCard({project}){
  return (
    <article className="card-glass p-4 rounded-xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10 group">
      <div className="flex gap-4 items-start">
        <TechStackVisual domain={project.domain} stack={project.stack} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg group-hover:text-cyan-300 transition-colors">{project.title}</h3>
            <DomainBadge domain={project.domain} />
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.stack.map(s=> (
              <span key={s} className="text-xs px-2 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-cyan-400/30 transition-colors">
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs px-3 py-1.5 rounded bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              GitHub
            </a>
            <a href="#" className="text-xs px-3 py-1.5 rounded border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors">
              Docs
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
