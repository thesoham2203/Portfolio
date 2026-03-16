import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [isDark, setIsDark] = useState(() => {
    try { return document.documentElement.classList.contains('dark') } catch { return true }
  })

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', isDark)
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light') } catch {}
  }, [isDark])

  return (
    <button onClick={()=>setIsDark(v=>!v)} aria-label="Toggle theme" className="p-2 rounded-md bg-soham-surface card-glass">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark?"#22d3ee":"#7c3aed"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
    </button>
  )
}
