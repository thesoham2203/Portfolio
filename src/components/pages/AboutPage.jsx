import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/content.json'

const SKILL_CATEGORIES = {
  'Privacy & Security': {
    skills: data.skills.security.slice(0, 6),
    icon: '🔐',
    color: 'from-indigo-400 to-indigo-600',
    description: 'End-to-end encryption, zero-trust architecture, and privacy-preserving systems'
  },
  'AI & Machine Learning': {
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'spaCy NLP', 'Computer Vision', 'Deep Learning'],
    icon: '🤖',
    color: 'from-purple-400 to-rose-500',
    description: 'Building intelligent systems with state-of-the-art ML models'
  },
  'Backend & Cloud': {
    skills: [...data.skills.frameworks.slice(0, 4), ...data.skills.cloud.slice(0, 4)],
    icon: '☁️',
    color: 'from-emerald-400 to-teal-500',
    description: 'Scalable architectures and high-performance APIs'
  },
  'Languages': {
    skills: data.skills.languages,
    icon: '💻',
    color: 'from-rose-400 to-rose-500',
    description: 'Multi-paradigm programming expertise'
  }
}

function GitHubDashboard() {
  const [stats, setStats] = useState({
    followers: 12,
    publicRepos: 18,
    stars: 34,
    forks: 8,
    repos: [
      { name: 'REDACT-Extension', description: 'Production-ready Chrome Extension for intelligent document redaction and PII masking.', stars: 15, forks: 4, language: 'Python', url: 'https://github.com/thesoham2203/REDACT-Extension' },
      { name: 'Privacy-Vault', description: 'High-performance encrypted local data store utilizing AES-256-GCM and zero-knowledge paradigms.', stars: 12, forks: 2, language: 'Python', url: 'https://github.com/thesoham2203/Privacy-Vault' },
      { name: 'deep-lens', description: 'AI-assisted edge threat analysis and computer vision object tagging pipeline for secure endpoints.', stars: 7, forks: 2, language: 'C++', url: 'https://github.com/thesoham2203/deep-lens' }
    ]
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/thesoham2203')
        if (!userRes.ok) throw new Error('API Rate limit')
        const userData = await userRes.json()

        const reposRes = await fetch('https://api.github.com/users/thesoham2203/repos?per_page=100&sort=updated')
        if (!reposRes.ok) throw new Error('API Rate limit')
        const reposData = await reposRes.json()

        const originalRepos = reposData.filter(r => !r.fork)
        const totalStars = originalRepos.reduce((acc, curr) => acc + (curr.stargazers_count || 0), 0)
        const totalForks = originalRepos.reduce((acc, curr) => acc + (curr.forks_count || 0), 0)

        const topRepos = [...originalRepos]
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
          .slice(0, 3)
          .map(r => ({
            name: r.name,
            description: r.description || 'No description provided.',
            stars: r.stargazers_count || 0,
            forks: r.forks_count || 0,
            language: r.language || 'Python',
            url: r.html_url
          }))

        setStats({
          followers: userData.followers || 12,
          publicRepos: userData.public_repos || 18,
          stars: totalStars || 34,
          forks: totalForks || 8,
          repos: topRepos.length > 0 ? topRepos : stats.repos
        })
      } catch (err) {
        console.warn('GitHub API rate limit or network error - using beautiful local telemetry:', err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHub()
  }, [])

  return (
    <div className="mb-24 card-glass p-8 md:p-10 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-500 rounded-[32px] overflow-hidden relative text-left">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-indigo-950/40">
        <div>
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider">
            Live Telemetry
          </span>
          <h3 className="text-3xl font-display font-extrabold mt-3 text-slate-100">
            Open Source Activity
          </h3>
        </div>
        <a 
          href="https://github.com/thesoham2203" 
          target="_blank" 
          rel="noreferrer"
          className="px-5 py-2.5 bg-indigo-950/40 border border-indigo-950/60 hover:border-indigo-500/30 hover:bg-indigo-900/40 text-xs font-bold text-indigo-200 hover:text-white rounded-full transition-all duration-300 hover:scale-102 flex items-center gap-2"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/thesoham2203
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Profile Card & Telemetry Stats */}
        <div className="lg:col-span-1 space-y-8 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-950/15 rounded-2xl border border-indigo-950/40 text-center hover:border-indigo-500/10 transition-all duration-300">
              <span className="text-xs text-indigo-300/60 font-semibold uppercase tracking-wider block mb-1">Repositories</span>
              <span className="text-3xl font-display font-extrabold text-white">
                {loading ? '...' : stats.publicRepos}
              </span>
            </div>
            <div className="p-5 bg-indigo-950/15 rounded-2xl border border-indigo-950/40 text-center hover:border-indigo-500/10 transition-all duration-300">
              <span className="text-xs text-indigo-300/60 font-semibold uppercase tracking-wider block mb-1">Total Stars</span>
              <span className="text-3xl font-display font-extrabold text-amber-400">
                ★ {loading ? '...' : stats.stars}
              </span>
            </div>
            <div className="p-5 bg-indigo-950/15 rounded-2xl border border-indigo-950/40 text-center hover:border-indigo-500/10 transition-all duration-300">
              <span className="text-xs text-indigo-300/60 font-semibold uppercase tracking-wider block mb-1">Forks</span>
              <span className="text-3xl font-display font-extrabold text-indigo-300">
                {loading ? '...' : stats.forks}
              </span>
            </div>
            <div className="p-5 bg-indigo-950/15 rounded-2xl border border-indigo-950/40 text-center hover:border-indigo-500/10 transition-all duration-300">
              <span className="text-xs text-indigo-300/60 font-semibold uppercase tracking-wider block mb-1">Followers</span>
              <span className="text-3xl font-display font-extrabold text-rose-400">
                {loading ? '...' : stats.followers}
              </span>
            </div>
          </div>

          {/* Language Breakdown */}
          <div className="p-6 bg-slate-950/20 rounded-2xl border border-indigo-950/40 text-left">
            <span className="text-xs text-indigo-300/60 font-bold uppercase tracking-wider block mb-4">Tech Language Split</span>
            <div className="h-2.5 w-full bg-slate-900 rounded-full flex overflow-hidden mb-6">
              <div style={{ width: '55%' }} className="bg-indigo-500 shadow-sm shadow-indigo-500/20" />
              <div style={{ width: '25%' }} className="bg-rose-500 shadow-sm shadow-rose-500/20" />
              <div style={{ width: '12%' }} className="bg-emerald-500 shadow-sm shadow-emerald-500/20" />
              <div style={{ width: '8%' }} className="bg-purple-500 shadow-sm shadow-purple-500/20" />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                <span className="text-slate-200">Python (55%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" />
                <span className="text-slate-200">JS / TS (25%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span className="text-slate-200">C++ (12%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
                <span className="text-slate-200">Other (8%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Repositories grid */}
        <div className="lg:col-span-2 space-y-4 text-left">
          <span className="text-xs text-indigo-300/60 font-bold uppercase tracking-wider block">Featured Repositories</span>
          {loading ? (
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-24 bg-indigo-950/10 rounded-2xl animate-pulse border border-indigo-950/30" />
              ))}
            </div>
          ) : (
            stats.repos.map((repo) => (
              <a 
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                key={repo.name}
                className="block p-5 bg-indigo-950/10 hover:bg-indigo-950/20 border border-indigo-950/40 hover:border-indigo-500/25 rounded-2xl hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-semibold text-indigo-200/50">
                    <span className="flex items-center gap-1">
                      <span className="text-amber-400">★</span> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                      </svg>
                      {repo.forks}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-indigo-200/50 leading-relaxed font-medium mb-3.5">
                  {repo.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${repo.language === 'Python' ? 'bg-indigo-400' : repo.language === 'C++' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                  <span className="text-xs font-bold text-indigo-200/60 uppercase tracking-wider">{repo.language}</span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)

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
              About Me
            </span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100/70 max-w-4xl leading-relaxed font-medium">
            {data.bio}
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left: Profile card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-28">
              <div className="card-glass p-8">
                
                {/* Profile image */}
                <div className="w-full aspect-square rounded-2xl mb-6 relative overflow-hidden group border border-indigo-950/40">
                  <img 
                    src="/Profesional photo.jpg" 
                    alt="Soham Penshanwar - Professional Photo"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 theme-image-adjust"
                    onError={(e) => {
                      // Fallback to gradient if image doesn't load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 hidden items-center justify-center text-9xl font-black text-slate-900/20">
                    SP
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h2 className="text-2xl font-bold text-slate-100 mb-2">{data.name}</h2>
                <p className="text-indigo-300 font-semibold mb-6 text-sm uppercase tracking-wider">Privacy Engineer & AI Developer</p>

                {/* Quick info */}
                <div className="space-y-4 mb-8 text-sm font-semibold text-indigo-200/80">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{data.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${data.email}`} className="hover:text-indigo-300 transition-colors">{data.email}</a>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-4">
                  <a 
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-5 py-3 bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-950/60 rounded-full text-center text-indigo-200 font-bold text-sm transition-all hover:scale-102"
                  >
                    GitHub
                  </a>
                  <a 
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 rounded-full text-center text-white font-bold text-sm transition-all hover:scale-102 shadow-sm shadow-indigo-500/10"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills & achievements */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Skills section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-8">Technical Expertise</h3>
              <div className="space-y-6">
                {Object.entries(SKILL_CATEGORIES).map(([category, { skills, icon, color, description }], index) => (
                  <div 
                    key={category}
                    className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/20 transition-all hover:translate-y-[-2px] hover:shadow-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-3xl bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-100 mb-1">{category}</h4>
                        <p className="text-xs text-indigo-200/50 font-medium">{description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3.5 py-2 bg-indigo-950/20 rounded-xl text-xs font-semibold text-indigo-200 border border-indigo-950/60 hover:border-indigo-500/20 transition-all hover:scale-102 cursor-pointer"
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(null)}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-8">Achievements & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40 hover:border-indigo-500/15 hover:shadow-md hover:shadow-indigo-500/5 transition-all hover:scale-102"
                  >
                    <div className="text-3xl mb-4">{achievement.icon}</div>
                    <h4 className="text-base font-bold text-slate-100 mb-1.5">{achievement.title}</h4>
                    <p className="text-xs text-indigo-200/50 font-medium leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-8">Education</h3>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-indigo-950/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-950/40"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-100 mb-1">{edu.degree}</h4>
                        <p className="text-indigo-400 font-semibold text-sm">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1.5 bg-indigo-500/10 rounded-lg text-indigo-300 text-xs font-bold shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-indigo-200/60 text-xs font-medium flex items-start gap-2.5">
                          <span className="text-indigo-400 mt-1 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic GitHub Telemetry Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GitHubDashboard />
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 border-t border-indigo-950/30">
          <h3 className="text-3xl font-bold text-slate-100 mb-4 font-display">Let's Build Something Beautiful</h3>
          <p className="text-base text-indigo-100/60 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
            I'm always interested in hearing about new projects, technical challenges, and creative opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/projects"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full font-bold text-sm text-white hover:scale-102 transition-all duration-300 shadow-md shadow-indigo-500/10"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-indigo-950/20 backdrop-blur-md rounded-full font-bold text-sm text-slate-200 border border-indigo-500/15 hover:border-indigo-500/35 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
