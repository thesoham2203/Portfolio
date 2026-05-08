import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#080a16]/70 backdrop-blur-xl border-b border-indigo-500/10 py-3 shadow-lg shadow-[#080a16]/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 flex items-center justify-center text-white font-extrabold text-base group-hover:scale-105 transition-all duration-300 shadow-md shadow-indigo-500/10">
                SP
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-slate-100 font-bold text-base group-hover:text-indigo-300 transition-colors tracking-tight">
                Soham Penshanwar
              </div>
              <div className="text-xs text-indigo-200/50 group-hover:text-indigo-200/80 transition-colors">
                AI & Privacy Engineer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 text-white border border-indigo-500/20'
                    : 'text-indigo-200/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full"></div>
                )}
              </Link>
            ))}
            <div className="mx-3 w-px h-6 bg-slate-800"></div>
            <a
              href="/Soham_CV.pdf"
              download="Soham_Penshanwar_CV.pdf"
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 text-white rounded-full text-sm font-semibold hover:scale-102 transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-slate-900/50 backdrop-blur-md rounded-full text-slate-200 border border-slate-800"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-slate-800/50 bg-[#080a16]/95 backdrop-blur-xl rounded-2xl px-4 shadow-xl border border-slate-800">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-rose-500/15 text-white border border-indigo-500/25'
                      : 'text-indigo-200/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/Soham_CV.pdf"
                download="Soham_Penshanwar_CV.pdf"
                className="mt-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 text-white rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
