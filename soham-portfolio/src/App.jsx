import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

export default function App(){
  return (
    <div className="min-h-screen font-sans bg-soham-navy dark:bg-soham-navy">
      <BackgroundAnimation />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
