module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        soham: {
          navy: '#0f1724',
          surface: '#111827',
          cyan: '#22d3ee',
          violet: '#7c3aed',
          pink: '#f472b6'
        }
      },
      backgroundImage: {
        'soham-gradient': 'linear-gradient(90deg, rgba(34,211,238,0.12), rgba(124,58,237,0.08))'
      }
    }
  },
  plugins: []
}
