import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/content.json'

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const getGithubOG = (githubUrl) => {
    if (!githubUrl || !githubUrl.includes('github.com')) return null
    try {
      const parts = githubUrl.split('github.com/')[1]?.split('/')
      if (parts && parts.length >= 2) {
        // Handle owner/repo with potential trailing slashes or subpaths
        const owner = parts[0]
        const repo = parts[1]
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`
      }
    } catch (e) {
      return null
    }
    return null
  }

  const domains = ['all', 'Privacy Engineering', 'Computer Vision', 'Fintech Security', 'Accessibility AI', 'IoT & Agriculture']

  const filteredProjects = filter === 'all' 
    ? data.projects 
    : data.projects.filter(p => p.domain === filter)

  return (
    <div className="min-h-screen bg-[#080a16] pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-indigo-100/70 max-w-3xl leading-relaxed font-medium">
            A showcase of my work in privacy engineering, AI/ML, computer vision, and fintech security.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-2.5 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-102 ${
                filter === domain
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white shadow-sm shadow-indigo-500/15'
                  : 'bg-indigo-950/20 text-indigo-200/70 border border-indigo-500/10 hover:bg-indigo-950/30 hover:border-indigo-500/20'
              }`}
            >
              {domain === 'all' ? 'All Projects' : domain}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="card-glass overflow-hidden h-full flex flex-col">
                
                {/* Project image/icon */}
                <div className="relative h-64 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/10 overflow-hidden shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={getGithubOG(project.github) || project.image} 
                      alt={project.title}
                      onError={(e) => {
                        if (e.target.src !== project.image) {
                          e.target.src = project.image;
                          e.target.className = "w-32 h-32 object-contain opacity-80 group-hover:scale-105 transition-transform duration-500";
                        }
                      }}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500 scale-101 theme-image-adjust"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3.5 py-1.5 bg-[#080a16]/80 backdrop-blur-md rounded-lg text-indigo-300 text-xs font-bold border border-indigo-500/15 uppercase tracking-wide">
                      {project.domain}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-indigo-200/60 mb-6 font-medium leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6 shrink-0">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-indigo-950/20 rounded-lg text-xs font-semibold text-indigo-200 border border-indigo-950/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1.5 bg-indigo-950/20 rounded-lg text-xs font-bold text-rose-400 border border-indigo-950/60">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key features */}
                  <div className="mb-8 flex-1">
                    <h4 className="text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs font-medium text-indigo-200/60 flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 shrink-0 mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full text-white font-bold text-xs hover:scale-102 transition-all shadow-sm shadow-indigo-500/10"
                    >
                      View Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3.5 bg-indigo-950/40 border border-indigo-950/60 rounded-full text-white font-bold text-xs hover:bg-indigo-900/40 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5 text-indigo-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 border-t border-indigo-950/30 pt-16">
          <p className="text-base text-indigo-100/60 mb-6 font-medium">Interested in collaborating on a beautiful solution?</p>
          <Link 
            to="/contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full font-bold text-sm text-white hover:scale-102 transition-all duration-300 shadow-md shadow-indigo-500/10"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-[#080a16]/85 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0e1227] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-indigo-950/50 shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="h-60 relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/10">
              <img 
                src={getGithubOG(selectedProject.github) || selectedProject.image} 
                alt={selectedProject.title}
                onError={(e) => {
                  if (e.target.src !== selectedProject.image) {
                    e.target.src = selectedProject.image;
                    e.target.className = "w-32 h-32 object-contain opacity-80 mx-auto mt-12";
                  }
                }}
                className="w-full h-full object-cover opacity-90 theme-image-adjust"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1227] via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 z-20 md:hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 flex items-center justify-center bg-indigo-950/80 backdrop-blur-md rounded-full hover:bg-indigo-900/80 transition-colors border border-indigo-500/15"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="sticky top-0 bg-[#0e1227]/95 backdrop-blur-lg border-b border-indigo-950/40 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 flex items-center justify-center bg-indigo-950/60 rounded-full hover:bg-indigo-900/60 transition-colors border border-indigo-500/15"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 bg-indigo-500/10 rounded-lg text-indigo-300 text-xs font-bold border border-indigo-500/15 uppercase tracking-wide">
                  {selectedProject.domain}
                </span>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-indigo-950/40 border border-indigo-950/60 rounded-lg text-indigo-200 text-xs font-bold hover:bg-indigo-900/40 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  View on GitHub
                </a>
              </div>

              <p className="text-base text-indigo-100/75 leading-relaxed font-medium">{selectedProject.description}</p>

              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-3 uppercase tracking-wider">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3.5 py-1.5 bg-indigo-950/20 rounded-lg text-xs font-semibold text-indigo-200 border border-indigo-950/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-3 uppercase tracking-wider">Key Features & Highlights</h3>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs font-medium text-indigo-200/70 flex items-start gap-3">
                      <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-3 uppercase tracking-wider">Project Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 rounded-lg text-xs font-bold text-indigo-300 border border-indigo-500/15"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
