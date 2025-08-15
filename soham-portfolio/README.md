# Soham Penshanwar — Portfolio

A futuristic, minimalist portfolio website built with React, Tailwind CSS, and modern web technologies. Designed to showcase AI, security, and fintech expertise with unique visual elements and smooth animations.

## ✨ Features

### 🎨 **Futuristic Design**

- **Glassmorphism effects** with backdrop blur and gradient borders
- **Neural network animations** and tech-inspired SVG visuals
- **Gradient text animations** and subtle micro-interactions
- **Domain-specific project cards** with AI/ML, Security, and Fintech themes
- **Responsive design** optimized for mobile and desktop

### 🚀 **Performance & UX**

- **GPU-optimized animations** using transform and opacity
- **Smooth scroll behavior** and section transitions
- **Mobile-first responsive** design with collapsible navigation
- **Dark/light theme toggle** with localStorage persistence
- **SEO optimized** with proper meta tags and semantic HTML

### 🛠 **Technical Features**

- **JSON-driven content** for easy updates without code changes
- **Component-based architecture** with reusable UI elements
- **TypeScript-ready** structure for future enhancement
- **Vite build system** for fast development and optimized production builds
- **Tailwind CSS** with custom design tokens and animations

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation & Development

```powershell
# Clone and navigate to project
cd "D:\Portfolio\soham-portfolio"

# Install dependencies
npm install

# Start development server
npm run dev
# Opens http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
soham-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Navigation with mobile menu
│   │   ├── Hero.jsx        # Landing section with animated card
│   │   ├── About.jsx       # Bio, skills, and stats
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── ProjectCard.jsx # Individual project cards
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Contact.jsx     # Contact information
│   │   ├── Footer.jsx      # Footer with links
│   │   ├── ThemeToggle.jsx # Dark/light mode switch
│   │   └── BackgroundAnimation.jsx # Animated SVG background
│   ├── data/
│   │   └── content.json    # Site content and configuration
│   ├── assets/             # SVG icons and images
│   └── index.css          # Global styles and animations
├── public/                 # Static assets
└── dist/                  # Production build output
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--cyan: #22d3ee      /* Primary accent, CTAs */
--violet: #7c3aed    /* Secondary accent, hover states */
--pink: #f472b6      /* Tertiary accent, highlights */

/* Backgrounds */
--navy: #0f1724      /* Deep navy base */
--surface: #111827   /* Card backgrounds */
--slate-900: #0f172a /* Main background */
```

### Typography

- **Primary**: Inter (clean, modern UI font)
- **Monospace**: JetBrains Mono (code snippets, terminal effects)
- **Responsive sizing** with Tailwind scale

### Animations

- **Neural network connections** with SVG path animations
- **Floating background mesh** with transform animations
- **Glassmorphism cards** with hover effects
- **Gradient text shifts** for dynamic headings
- **Pulse effects** for status indicators

## 📝 Content Management

### Updating Content

Edit `src/data/content.json` to update:

- Personal information (name, email, tagline)
- Project details (title, description, tech stack, GitHub links)
- Work experience (roles, dates, achievements)

### Adding New Projects

```json
{
  "id": "project-id",
  "title": "Project Name",
  "domain": "AI/ML|Fintech/Security|Privacy/Tools",
  "description": "Brief project description",
  "stack": ["Tech1", "Tech2", "Tech3"],
  "image": "/src/assets/project-icon.svg",
  "github": "https://github.com/username/repo"
}
```

### Tech Stack Visual Themes

- **AI/ML**: Neural network icons, cyan-violet gradients
- **Fintech/Security**: Lock icons, violet-pink gradients
- **Privacy/Tools**: Shield icons, cyan-pink gradients

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy automatically on push to main branch

### GitHub Pages

1. Build the project: `npm run build`
2. Install gh-pages: `npm install -g gh-pages`
3. Deploy: `gh-pages -d dist`

Or use GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Custom Domain (Optional)

Add `public/CNAME` file with your domain name for custom domain support.

## 🔧 Customization

### Adding Blog Support

1. Install markdown processor:

```powershell
npm install vite-plugin-mdx @mdx-js/rollup
```

2. Add to `vite.config.js`:

```javascript
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [react(), mdx()],
});
```

3. Create blog posts in `src/posts/*.mdx`

### Performance Optimization

- **Image optimization**: Use `vite-plugin-imagemin` for SVG compression
- **Bundle analysis**: Use `rollup-plugin-analyzer` to analyze build size
- **PWA support**: Add `vite-plugin-pwa` for offline functionality

### Additional Features

- **Analytics**: Add Google Analytics or Plausible
- **Contact forms**: Integrate with Netlify Forms or Formspree
- **CMS integration**: Connect with Sanity, Strapi, or Contentful

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Cannot resolve module"**

```powershell
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Fonts not loading**

- Ensure Google Fonts links are in `index.html`
- Check network connectivity during development

**Animations not smooth**

- Disable hardware acceleration in CSS if needed
- Reduce animation complexity for older devices

**Mobile responsiveness issues**

- Test with browser dev tools device emulation
- Adjust breakpoints in Tailwind config if needed

## 📱 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES6+

## 🤝 Contributing

This is a personal portfolio, but suggestions for improvements are welcome! Open an issue or submit a pull request.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

---

**Built with** ⚡ Vite • ⚛️ React • 🎨 Tailwind CSS • 💙 Modern Web Standards

_Designed & developed by Soham Penshanwar_
