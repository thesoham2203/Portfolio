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
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A showcase of my work in privacy engineering, AI/ML, computer vision, and fintech security.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                filter === domain
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
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
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all hover:scale-[1.02] h-full">
                
                {/* Project image/icon */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={getGithubOG(project.github) || project.image} 
                      alt={project.title}
                      onError={(e) => {
                        if (e.target.src !== project.image) {
                          e.target.src = project.image;
                          e.target.className = "w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500";
                        }
                      }}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500 scale-105 theme-image-adjust"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-lg text-cyan-400 text-sm font-medium border border-cyan-400/30">
                      {project.domain}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-medium text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-medium text-cyan-400 border border-slate-700">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-medium hover:scale-105 transition-all"
                    >
                      View Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-slate-800 rounded-xl text-white font-medium hover:bg-slate-700 transition-all flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="text-center mt-20">
          <p className="text-xl text-slate-400 mb-6">Interested in collaborating?</p>
          <Link 
            to="/contact"
            className="inline-flex px-10 py-5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl font-bold text-lg text-white hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="h-64 relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20">
              <img 
                src={getGithubOG(selectedProject.github) || selectedProject.image} 
                alt={selectedProject.title}
                onError={(e) => {
                  if (e.target.src !== selectedProject.image) {
                    e.target.src = selectedProject.image;
                    e.target.className = "w-32 h-32 object-contain opacity-80 mx-auto mt-16";
                  }
                }}
                className="w-full h-full object-cover opacity-90 theme-image-adjust"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 z-20 md:hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 flex items-center justify-center bg-slate-900/80 backdrop-blur-md rounded-xl hover:bg-slate-800 transition-colors border border-white/10"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 p-6 flex items-center justify-between z-10">
              <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-cyan-400/10 rounded-lg text-cyan-400 text-sm font-medium border border-cyan-400/30">
                  {selectedProject.domain}
                </span>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-800 rounded-lg text-white text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  View on GitHub
                </a>
              </div>

              <p className="text-lg text-slate-300 mb-8">{selectedProject.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Key Features & Highlights</h3>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-3">
                      <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Project Features</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg text-sm font-medium text-cyan-400 border border-cyan-400/30"
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
