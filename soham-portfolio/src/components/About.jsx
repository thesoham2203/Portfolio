import React from 'react'
import data from '../data/content.json'

const SKILL_GROUPS = {
  'Privacy Engineering': {
    skills: ['spaCy NLP', 'OpenCV', 'AES-256', 'GDPR Compliance', 'Zero-Trust'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    color: 'from-cyan-400 to-blue-500'
  },
  'Computer Vision': {
    skills: ['PyTorch', 'OpenCV', 'EasyOCR', 'MediaPipe', 'Real-time Processing'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M20.188 10.934c.388.472.601 1.068.601 1.66 0 .592-.213 1.188-.601 1.66C18.77 15.98 15.636 18 12 18c-3.636 0-6.77-2.02-8.188-3.746-.388-.472-.601-1.068-.601-1.66 0-.592.213-1.188.601-1.66C5.23 8.02 8.364 6 12 6c3.636 0 6.77 2.02 8.188 3.746z"/>
      </svg>
    ),
    color: 'from-violet-500 to-purple-600'
  },
  'Security': {
    skills: ['FF3-1 Encryption', 'PPI Extraction', 'Tokenization', 'Audit Trails', 'Log Handling'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M7 15h0M2 10h20"/>
        <circle cx="17" cy="15" r="1"/>
      </svg>
    ),
    color: 'from-emerald-400 to-teal-500'
  },
  'Backend & Infrastructure': {
    skills: ['FastAPI', 'SupaBase', 'Redis', 'Docker', 'Kubernetes'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    color: 'from-pink-400 to-rose-500'
  }
}

export default function About(){
  const { bio, skills, achievements } = data
  
  return (
    <section id="about" className="py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          {bio}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Background & Experience */}
        <div className="card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-100">Background & Focus</h3>
          </div>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 text-lg">🤖</span>
              <p>AI & Cybersecurity Innovator — Final-year BTech (Hons. Cyber Security) in AI & Data Science at K.K. Wagh Institute. Specializing in privacy-preserving ML, secure backend architectures, and real-time data processing.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 text-lg">⚡</span>
              <p>Hackathon-Hardened, Industry-Focused — Delivering scalable, secure, and intelligent systems under extreme time constraints, from national hackathons to real-world deployments.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-violet-400 text-lg">🔐</span>
              <p>Security Researcher — Hands-on experience with E2EE, zero-knowledge proofs, privacy-preserving authentication, and secure tokenization aligned with RBI DPDP Act 2023 compliance.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-lg">🛠️</span>
              <p>Full-Stack Project Builder — Creator of ArchiveMind, REDACT, BioMesh, ISL Translation App, and ANPR-based Toll System — leveraging Python, FastAPI, ElectronJS, OpenCV, and machine learning pipelines.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-lg">👥</span>
              <p>Leadership & Finance Management — Treasurer of CSI KKWIEER (₹5L+ budget), Head of Finance at Innov-ERA 2025, and Marketing & Outreach Lead for FOSS KKWIEER.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 text-lg">🏦</span>
              <p>Fintech security consultant focusing on RBI DPDP Act 2023 compliance and secure tokenization systems</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400 text-lg">🌐</span>
              <p>Open Source & Tech Outreach — Active GitHub contributor with a focus on AI pipelines, document redaction tools, and fintech data security; conducted cybersecurity workshops for 200+ students.</p>
            </div>
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

      {/* Achievements Section */}
      {achievements && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-100 mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 text-center group">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h4 className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors mb-2">
                  {achievement.title}
                </h4>
                <p className="text-xs text-slate-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-2xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">5+</div>
          <div className="text-sm text-slate-400">Production Projects</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-2xl font-bold text-violet-400 group-hover:scale-110 transition-transform">95%+</div>
          <div className="text-sm text-slate-400">ML Accuracy</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">₹5L+</div>
          <div className="text-sm text-slate-400">Budget Managed</div>
        </div>
        <div className="text-center card-glass p-4 rounded-lg hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-2xl font-bold text-pink-400 group-hover:scale-110 transition-transform">200+</div>
          <div className="text-sm text-slate-400">Students Mentored</div>
        </div>
      </div>
    </section>
  )
}
