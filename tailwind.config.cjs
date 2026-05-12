module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        soham: {
          navy: '#080a16', // twilight midnight
          surface: '#111424', // soft slate
          indigo: '#6366f1', // aurora indigo
          rose: '#ec4899', // sunset rose
          emerald: '#10b981', // serene emerald
          
          // Compat mappings
          cyan: '#6366f1',
          violet: '#ec4899',
          pink: '#10b981'
        }
      },
      backgroundImage: {
        'soham-gradient': 'linear-gradient(90deg, rgba(99,102,241,0.15), rgba(236,72,153,0.12))'
      }
    }
  },
  plugins: []
}
