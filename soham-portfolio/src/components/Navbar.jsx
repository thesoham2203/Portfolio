import React, { useState, useEffect } from 'react'

export default function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [catMood, setCatMood] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const catStates = [
    { emoji: '😸', text: 'Happy Cat', sound: 'Purr~' },
    { emoji: '😺', text: 'Sleepy Cat', sound: 'Zzz...' },
    { emoji: '😹', text: 'Laughing Cat', sound: 'Hehe!' },
    { emoji: '😻', text: 'Heart Eyes Cat', sound: 'Meow!' },
    { emoji: '🙀', text: 'Surprised Cat', sound: 'Oh my!' },
    { emoji: '😿', text: 'Crying Cat', sound: 'Sob...' },
    { emoji: '😾', text: 'Grumpy Cat', sound: 'Hmph!' },
    { emoji: '🐱', text: 'Basic Cat', sound: 'Meow~' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCatClick = () => {
    setCatMood((prev) => (prev + 1) % catStates.length)
    // Add a little bounce animation
    setTimeout(() => {
      const catElement = document.querySelector('.cat-button')
      if (catElement) {
        catElement.style.transform = 'scale(1.2)'
        setTimeout(() => {
          catElement.style.transform = 'scale(1)'
        }, 150)
      }
    }, 0)
  }

  const navItems = [
    { href: '#about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { href: '#projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { href: '#experience', label: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2' },
    { href: '#contact', label: 'Contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ]

  return (
    <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-lg bg-slate-900/90 border-b border-slate-800/80 shadow-lg shadow-slate-900/20' 
        : 'backdrop-blur-md bg-slate-900/80 border-b border-slate-800/50'
    }`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Enhanced Logo with animation */}
        <div className="text-lg font-semibold tracking-wide">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 flex items-center justify-center text-slate-900 font-bold group-hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/25">
              <span className="text-sm font-extrabold">SP</span>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-slate-100 group-hover:text-cyan-300 transition-colors font-semibold">
                Soham Penshanwar
              </span>
              <span className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                Privacy Engineer
              </span>
            </div>
          </a>
        </div>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`group px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/30'
                }`}
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Interactive Cat */}
          <button 
            onClick={handleCatClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cat-button group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-400/10 to-purple-400/10 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-pink-400/20"
            title={`Click me! Current mood: ${catStates[catMood].text}`}
          >
            <span className={`text-lg transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}>
              {catStates[catMood].emoji}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                {catStates[catMood].text}
              </span>
              <span className="text-xs text-pink-400/80 group-hover:text-pink-300 transition-colors duration-300">
                {catStates[catMood].sound}
              </span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={handleCatClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cat-button group flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-400/10 to-purple-400/10 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            title={`Click me! Current mood: ${catStates[catMood].text}`}
          >
            <span className={`text-sm transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}>
              {catStates[catMood].emoji}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-xs text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                {catStates[catMood].text}
              </span>
            </div>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg card-glass hover:bg-slate-800/40 transition-all duration-300 relative overflow-hidden group"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-5 h-5 text-slate-300 relative z-10 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4">
          <div className="card-glass rounded-xl p-4 space-y-2 border border-slate-800/50">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.label}
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-3 mt-3 border-t border-slate-700/50">
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
