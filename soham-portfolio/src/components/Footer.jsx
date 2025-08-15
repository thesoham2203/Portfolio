import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 mt-16 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-900 font-bold">
                SP
              </div>
              <span className="font-semibold text-slate-200">Soham Penshanwar</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building secure, privacy-first AI systems for the next generation of fintech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-400 hover:text-cyan-300 transition-colors text-sm">About</a>
              <a href="#projects" className="block text-slate-400 hover:text-cyan-300 transition-colors text-sm">Projects</a>
              <a href="#experience" className="block text-slate-400 hover:text-cyan-300 transition-colors text-sm">Experience</a>
              <a href="#contact" className="block text-slate-400 hover:text-cyan-300 transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Tech Focus</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">AI/ML</span>
              <span className="text-xs px-2 py-1 rounded bg-violet-400/20 text-violet-300 border border-violet-400/30">Cyber Security</span>
              <span className="text-xs px-2 py-1 rounded bg-pink-400/20 text-pink-300 border border-pink-400/30">Innovation</span>
              <span className="text-xs px-2 py-1 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">Privacy</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/30">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Soham Penshanwar. Designed & built with privacy-first thinking.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/thesoham2203" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/soham-penshanwar/" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
