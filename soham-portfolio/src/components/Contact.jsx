import React from 'react'
import data from '../data/content.json'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Available for research collaborations, secure systems engineering roles, 
          and discussions about AI, privacy, and fintech innovations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card-glass p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a 
              href={`mailto:${data.email}`}
              className="group flex flex-col items-center p-6 rounded-xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all">
                <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                Email
              </h3>
              <p className="text-slate-400 text-sm text-center">
                Drop me a line for collaborations
              </p>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/thesoham2203"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-violet-400/25 transition-all">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-violet-300 transition-colors">
                GitHub
              </h3>
              <p className="text-slate-400 text-sm text-center">
                Check out my open source projects
              </p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/soham-penshanwar/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-pink-400/25 transition-all">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-pink-300 transition-colors">
                LinkedIn
              </h3>
              <p className="text-slate-400 text-sm text-center">
                Let's connect professionally
              </p>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
            <p className="text-slate-400 text-sm">
              🎯 Interested in: <span className="text-cyan-300">AI Research</span> • 
              <span className="text-violet-300"> Security Engineering</span> • 
              <span className="text-pink-300"> Fintech Innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
