import React from 'react'
import data from '../data/content.json'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="text-slate-300 mt-2">Selected work focused on AI, privacy, and fintech security.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
