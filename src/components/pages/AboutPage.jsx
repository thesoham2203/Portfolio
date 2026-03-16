import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/content.json'

const SKILL_CATEGORIES = {
  'Privacy & Security': {
    skills: data.skills.security.slice(0, 6),
    icon: '🔐',
    color: 'from-cyan-400 to-blue-500',
    description: 'End-to-end encryption, zero-trust architecture, and privacy-preserving systems'
  },
  'AI & Machine Learning': {
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'spaCy NLP', 'Computer Vision', 'Deep Learning'],
    icon: '🤖',
    color: 'from-violet-500 to-purple-600',
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
    color: 'from-pink-400 to-rose-500',
    description: 'Multi-paradigm programming expertise'
  }
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-4xl leading-relaxed">
            {data.bio}
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left: Profile card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-24">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800">
                
                {/* Profile image */}
                <div className="w-full aspect-square rounded-2xl mb-6 relative overflow-hidden group border border-slate-700">
                  <img 
                    src="/Profesional photo.jpg" 
                    alt="Soham Penshanwar - Professional Photo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to gradient if image doesn't load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 hidden items-center justify-center text-9xl font-black text-slate-900/20">
                    SP
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">{data.name}</h2>
                <p className="text-cyan-400 font-medium mb-6">Privacy Engineer & AI Developer</p>

                {/* Quick info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{data.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${data.email}`} className="hover:text-cyan-400 transition-colors">{data.email}</a>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-4">
                  <a 
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-center text-white font-medium transition-all hover:scale-105"
                  >
                    GitHub
                  </a>
                  <a 
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-center text-white font-medium transition-all hover:scale-105"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills & achievements */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Skills section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Technical Expertise</h3>
              <div className="space-y-6">
                {Object.entries(SKILL_CATEGORIES).map(([category, { skills, icon, color, description }], index) => (
                  <div 
                    key={category}
                    className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-4xl bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{category}</h4>
                        <p className="text-sm text-slate-400 mb-4">{description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span 
                          key={skill}
                          className={`px-4 py-2 bg-gradient-to-r ${color} bg-opacity-10 rounded-lg text-sm font-medium text-white border border-slate-700 hover:scale-105 transition-transform cursor-pointer`}
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
              <h3 className="text-3xl font-bold text-white mb-8">Achievements & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/50 transition-all hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-sm text-slate-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      </div>
                      <span className="px-4 py-2 bg-cyan-400/10 rounded-lg text-cyan-400 text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
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

        {/* CTA Section */}
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link 
              to="/projects"
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-5 bg-slate-800/50 backdrop-blur-lg rounded-2xl font-bold text-lg text-white border-2 border-slate-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
