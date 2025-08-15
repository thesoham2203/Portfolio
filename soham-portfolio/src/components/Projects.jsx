import React from 'react'
import data from '../data/content.json'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Selected work showcasing expertise in AI, privacy engineering, computer vision, and fintech security. 
          Each project demonstrates production-ready implementations with real-world applications and measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
      
      {/* Projects Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">5</div>
          <div className="text-sm text-slate-400 mt-2">Production Projects</div>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="text-center card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-3xl font-bold text-violet-400 group-hover:scale-110 transition-transform">3</div>
          <div className="text-sm text-slate-400 mt-2">AI/ML Systems</div>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="text-center card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">2</div>
          <div className="text-sm text-slate-400 mt-2">Privacy Tools</div>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="text-center card-glass p-6 rounded-xl hover:bg-slate-800/20 transition-all duration-300 group">
          <div className="text-3xl font-bold text-pink-400 group-hover:scale-110 transition-transform">1</div>
          <div className="text-sm text-slate-400 mt-2">Fintech Solution</div>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
