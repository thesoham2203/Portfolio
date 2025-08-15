import React from 'react'

export default function BackgroundAnimation(){
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient mesh */}
      <div className="absolute inset-0 bg-animate opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.08" />
              <stop offset="70%" stopColor="#f472b6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.04" />
            </linearGradient>
            <radialGradient id="spotGradient" cx="50%" cy="50%" r="30%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mainGradient)" />
          <circle cx="20%" cy="30%" r="200" fill="url(#spotGradient)" />
          <circle cx="80%" cy="70%" r="150" fill="url(#spotGradient)" />
        </svg>
      </div>

      {/* Neural network pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g stroke="#22d3ee" strokeWidth="0.5" fill="none" filter="url(#glow)">
            {/* Network nodes */}
            <circle cx="10%" cy="20%" r="2" fill="#22d3ee" opacity="0.8"/>
            <circle cx="30%" cy="15%" r="1.5" fill="#7c3aed" opacity="0.6"/>
            <circle cx="70%" cy="25%" r="2" fill="#22d3ee" opacity="0.7"/>
            <circle cx="90%" cy="30%" r="1.5" fill="#f472b6" opacity="0.5"/>
            <circle cx="15%" cy="60%" r="1.5" fill="#7c3aed" opacity="0.6"/>
            <circle cx="50%" cy="70%" r="2" fill="#22d3ee" opacity="0.8"/>
            <circle cx="85%" cy="80%" r="1.5" fill="#f472b6" opacity="0.7"/>
            
            {/* Animated connections */}
            <path className="neural-connection" d="M10,20 Q50,40 70,25" strokeDasharray="4,6" opacity="0.4"/>
            <path className="neural-connection" d="M30,15 Q60,45 90,30" strokeDasharray="3,8" opacity="0.3"/>
            <path className="neural-connection" d="M15,60 Q40,65 50,70" strokeDasharray="2,5" opacity="0.5"/>
            <path className="neural-connection" d="M50,70 Q70,75 85,80" strokeDasharray="4,7" opacity="0.4"/>
          </g>
        </svg>
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <g stroke="#22d3ee" strokeWidth="0.5" fill="none">
            <rect x="60%" y="40%" width="80" height="80" rx="8" transform="rotate(45 60 40)"/>
            <polygon points="200,100 250,180 150,180" opacity="0.6"/>
            <circle cx="80%" cy="20%" r="40" strokeDasharray="8,8"/>
          </g>
        </svg>
      </div>

      {/* Data stream effect */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-transparent to-violet-500 transform rotate-12 scale-150"></div>
      </div>
    </div>
  )
}
