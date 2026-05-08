import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative py-16 mt-24 bg-gradient-to-b from-[#080a16] to-[#04050b] border-t border-indigo-950/40 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-500/5 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/3 rounded-full blur-[60px] animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-500/10">
                  SP
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/20 to-rose-400/20 blur-sm animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">Soham Penshanwar</h3>
                <p className="text-xs text-indigo-300 font-semibold tracking-wide">AI & Privacy Engineer</p>
              </div>
            </div>
            <p className="text-indigo-200/60 leading-relaxed mb-6 max-w-md text-sm font-medium">
              Crafting privacy-first AI systems and secure infrastructures where machine learning meets data sovereignty. Building the future of fintech with trust and innovation.
            </p>
            
            {/* Quick contact */}
            <div className="space-y-3">
              <a 
                href="mailto:sohampilot0@gmail.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-950/40 flex items-center justify-center group-hover:bg-indigo-500/20 border border-indigo-950/60 transition-colors">
                  <svg className="w-4 h-4 text-indigo-300/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-indigo-200/75 group-hover:text-indigo-200">sohampilot0@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/40 flex items-center justify-center border border-indigo-950/60">
                  <svg className="w-4 h-4 text-indigo-300/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-indigo-200/75">Nashik, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-slate-200 mb-6 flex items-center gap-2 text-sm tracking-wide">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore
            </h4>
            <div className="space-y-3.5 text-sm font-semibold">
              <Link to="/about" className="block text-indigo-200/60 hover:text-indigo-300 transition-all hover:translate-x-1 group">
                <span className="flex items-center gap-2">
                  <span>About Me</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link to="/projects" className="block text-indigo-200/60 hover:text-indigo-300 transition-all hover:translate-x-1 group">
                <span className="flex items-center gap-2">
                  <span>Projects</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link to="/experience" className="block text-indigo-200/60 hover:text-indigo-300 transition-all hover:translate-x-1 group">
                <span className="flex items-center gap-2">
                  <span>Experience</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link to="/contact" className="block text-indigo-200/60 hover:text-indigo-300 transition-all hover:translate-x-1 group">
                <span className="flex items-center gap-2">
                  <span>Contact</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Tech & Resources */}
          <div>
            <h4 className="font-bold text-slate-200 mb-6 flex items-center gap-2 text-sm tracking-wide">
              <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Focus Areas
            </h4>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-300 border border-indigo-400/20 text-xs font-semibold">
                  AI/ML
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-400/10 text-rose-300 border border-rose-400/20 text-xs font-semibold">
                  Privacy
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 text-xs font-semibold">
                  Security
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-400/10 text-purple-300 border border-purple-400/20 text-xs font-semibold">
                  Fintech
                </span>
              </div>
            </div>
            
            {/* CV Download */}
            <div className="mt-6">
              <a 
                href="/Soham_CV.pdf"
                download="Soham_Penshanwar_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 text-white rounded-full font-bold hover:scale-102 transition-all duration-300 text-xs shadow-sm shadow-emerald-500/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-indigo-950/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-indigo-200/50 text-xs text-center md:text-left font-medium">
              <p>© {currentYear} <span className="text-slate-200 font-bold">Soham Penshanwar</span></p>
              <p className="text-xs mt-1">Designed & built with privacy-first thinking 🔐</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-indigo-200/40 text-xs font-semibold uppercase tracking-wider">Connect with me</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/thesoham2203" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-950 flex items-center justify-center text-indigo-300 hover:text-white transition-all hover:scale-115 group shadow-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/thesoham2203/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-950 flex items-center justify-center text-indigo-300 hover:text-white transition-all hover:scale-115 group shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>

                <a 
                  href="mailto:sohampilot0@gmail.com"
                  className="w-10 h-10 rounded-full bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-950 flex items-center justify-center text-indigo-300 hover:text-white transition-all hover:scale-115 group shadow-sm"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
