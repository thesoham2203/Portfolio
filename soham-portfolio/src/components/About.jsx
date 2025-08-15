import React from 'react'
import data from '../data/content.json'

const SKILL_GROUPS = {
  'AI/ML': {
    skills: ['PyTorch', 'TensorFlow', 'NLP', 'ML Ops'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    color: 'from-cyan-400 to-blue-500'
  },
  Backend: {
    skills: ['Go', 'Python', 'gRPC', 'Kubernetes'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    color: 'from-violet-500 to-purple-600'
  },
  Security: {
    skills: ['E2EE', 'Tokenization', 'Threat Modelling'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <circle cx="12" cy="16" r="1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    color: 'from-emerald-400 to-teal-500'
  },
  Tools: {
    skills: ['Docker', 'Postgres', 'Git', 'Linux'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    color: 'from-pink-400 to-rose-500'
  }
}

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Final-year BTech in AI & Data Science with a passion for building secure, privacy-preserving systems. 
          I specialize in developing ML tools for regulated industries and implementing robust security frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Background & Experience */}
        <div className="card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-100">Background & Roles</h3>
          </div>
          <div className="space-y-3 text-slate-300">
            <p>🏛️ Ex-Treasurer CSI (2024–25) - Led financial planning for 12+ technical events</p>
            <p>🔬 Active research in E2EE and privacy frameworks for secure messaging systems</p>
            <p>🏦 Multiple fintech security projects with compliance focus (RBI, banking regulations)</p>
            <p>🎯 Specialized in AI-driven tools for legacy data processing in government & banking sectors</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Technical Expertise</h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(SKILL_GROUPS).map(([group, data])=> (
              <div key={group} className="card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${data.color} flex items-center justify-center text-slate-900`}>
                    {data.icon}
                  </div>
                  <h4 className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {group}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map(skill=> (
                    <span 
                      key={skill} 
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center card-glass p-4 rounded-lg">
          <div className="text-2xl font-bold text-cyan-400">3+</div>
          <div className="text-sm text-slate-400">Major Projects</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg">
          <div className="text-2xl font-bold text-violet-400">2+</div>
          <div className="text-sm text-slate-400">Years Research</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg">
          <div className="text-2xl font-bold text-pink-400">12+</div>
          <div className="text-sm text-slate-400">Events Led</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg">
          <div className="text-2xl font-bold text-emerald-400">∞</div>
          <div className="text-sm text-slate-400">Learning</div>
        </div>
      </div>
    </section>
  )
}
