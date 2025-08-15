import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-6 sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800/50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-900 font-bold group-hover:scale-105 transition-transform">
              SP
            </div>
            <span className="hidden sm:inline text-slate-100 group-hover:text-cyan-300 transition-colors">
              Soham Penshanwar
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="terminal-hover px-3 py-2 rounded-lg hover:text-cyan-300 transition-colors">
              About
            </a>
            <a href="#projects" className="terminal-hover px-3 py-2 rounded-lg hover:text-cyan-300 transition-colors">
              Projects
            </a>
            <a href="#experience" className="terminal-hover px-3 py-2 rounded-lg hover:text-cyan-300 transition-colors">
              Experience
            </a>
            <a href="#contact" className="terminal-hover px-3 py-2 rounded-lg hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg card-glass"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6">
          <div className="card-glass rounded-lg p-4 space-y-3">
            <a 
              href="#about" 
              className="block px-3 py-2 text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
