# CLAUDE.md — Soham Penshanwar Portfolio Website

> **Canonical reference document for AI agents & developers working on this codebase.**
> Last updated: 2026-05-08

---

## 1. Project Overview

**Name:** `soham-portfolio`
**Type:** Personal portfolio website for **Soham Penshanwar** — an AI Engineer, Privacy Specialist & Cybersecurity Expert.
**Live URL:** `https://thesoham2203.vercel.app`
**Repository:** `https://github.com/thesoham2203/portfolio`
**Tagline:** *"Engineering privacy-first AI systems & secure infrastructures — where machine learning meets data sovereignty."*

The site is a multi-page, dark-themed, futuristic portfolio showcasing projects in privacy engineering, computer vision, fintech security, and accessibility AI. It features animated backgrounds, glassmorphism cards, gradient text, and a loading screen.

---

## 2. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React (with JSX) | ^19.2.5 |
| **Build Tool** | Vite | ^7.0.10 |
| **Routing** | React Router DOM | ^7.14.2 |
| **Styling** | TailwindCSS | ^3.4.8 |
| **PostCSS** | PostCSS + Autoprefixer | ^8.4.24 |
| **Fonts** | Google Fonts (Inter 300/400/600/800, JetBrains Mono 400/600) | CDN |
| **Deployment** | Vercel | v2 config |
| **Formatting** | Prettier | ^2.8.8 |

**No backend** — fully static SPA. All data is stored in a single JSON file (`src/data/content.json`).

---

## 3. Commands

```bash
npm run dev      # Start Vite dev server on port 5173
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run format   # Prettier format all files
```

---

## 4. Project Structure

```
portfolio/
├── index.html                  # Root HTML (meta tags, fonts, theme init script)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite: port 5173, base './', dist output
├── tailwind.config.cjs         # Tailwind: dark mode 'class', custom colors
├── postcss.config.cjs          # PostCSS: tailwindcss + autoprefixer
├── vercel.json                 # Vercel: SPA rewrites, Vite framework
├── soham-portfolio.notes.txt   # Design notes (glassmorphism, neon, GPU-friendly)
│
├── public/
│   ├── Profesional photo.jpg   # Profile photograph (used on About page)
│   ├── Soham_CV.pdf            # Downloadable CV (linked from multiple pages)
│   ├── favicon.svg             # Animated favicon
│   ├── favicon-static.svg      # Static fallback favicon
│   ├── apple-touch-icon.svg    # Apple touch icon
│   ├── site.webmanifest        # PWA manifest
│   ├── robots.txt              # SEO robots file
│   └── _redirects              # Netlify-style redirects (fallback)
│
├── src/
│   ├── main.jsx                # React entry — renders <App /> into #root
│   ├── App.jsx                 # Router + loading screen + layout shell
│   ├── index.css               # Global CSS: Tailwind directives, animations, scrollbar
│   │
│   ├── data/
│   │   └── content.json        # ★ ALL portfolio content (see §5 below)
│   │
│   ├── assets/
│   │   ├── redact.svg          # Project icon: REDACT
│   │   ├── anpr.svg            # Project icon: ANPR
│   │   ├── policyvault.svg     # Project icon: PolicyVault
│   │   ├── crowdcounting.svg   # Project icon: Crowd Counting
│   │   ├── isl.svg             # Project icon: ISL Recognition
│   │   ├── archivemind.svg     # Project icon: ArchiveMind
│   │   └── placeholder-card.svg# Fallback project icon
│   │
│   └── components/
│       ├── index.js            # Barrel re-exports of all components
│       ├── Navigation.jsx      # ★ Active navbar (multi-page router-aware)
│       ├── Navbar.jsx          # Legacy single-page navbar (anchor-based, with cat easter egg)
│       ├── Hero.jsx            # Legacy single-page hero section
│       ├── About.jsx           # Legacy single-page about section
│       ├── Projects.jsx        # Legacy single-page projects wrapper
│       ├── ProjectCard.jsx     # Reusable project card with domain-specific SVG visuals
│       ├── Experience.jsx      # Legacy single-page experience section
│       ├── Contact.jsx         # Legacy single-page contact section
│       ├── Footer.jsx          # Global footer (multi-page aware via <Link>)
│       ├── BackgroundAnimation.jsx  # SVG neural-network background layer
│       ├── ThemeToggle.jsx     # Dark/light theme toggle (localStorage-backed)
│       ├── PageTransition.jsx  # Placeholder for page transitions
│       ├── MobileNavPlaceholder.jsx # Empty placeholder component
│       │
│       └── pages/              # ★ Active page-level components (routed)
│           ├── Home.jsx        # Landing page: hero, mouse-tracking gradient, floating particles
│           ├── AboutPage.jsx   # Profile card, skills, achievements, education
│           ├── ProjectsPage.jsx # Filterable project grid with detail modal
│           ├── ExperiencePage.jsx # Timeline layout with alternating cards
│           └── ContactPage.jsx # Contact cards, CV download, availability status
```

### Legacy vs Active Components
The project was refactored from a **single-page scroll layout** (anchor-based, using `Navbar.jsx`, `Hero.jsx`, `About.jsx` etc.) to a **multi-page router layout** (using `Navigation.jsx` + `pages/` directory). Both sets coexist in the codebase:

- **Active (in use):** `App.jsx` → `Navigation.jsx` + `pages/*.jsx` + `Footer.jsx`
- **Legacy (unused but present):** `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Experience.jsx`, `Contact.jsx`, `App-old.jsx`

---

## 5. Data Model — `content.json`

All portfolio content is centralized in `src/data/content.json`. Components import this directly.

```
{
  name: string,           // "Soham Penshanwar"
  tagline: string,        // One-liner bio
  email: string,          // "sohampilot0@gmail.com"
  bio: string,            // Extended biography paragraph
  
  skills: {
    languages: string[],       // ["Python", "JavaScript", "TypeScript", "Go", "C++"]
    frameworks: string[],      // ["FastAPI", "ElectronJS", "React", "Tauri", ...]
    security: string[],        // ["AES-256-GCM", "FF3-1 FPE", "RSA", "SHA-256", ...]
    cloud: string[],           // ["Docker", "Kubernetes", "AWS", "Vercel", ...]
    specializations: string[]  // ["E2E Encryption", "CV", "NLP", ...]
  },
  
  projects: [{
    id: string,            // e.g. "redact", "anpr", "policyvault"
    title: string,
    domain: string,        // "Privacy Engineering" | "Computer Vision" | "Fintech Security" | "Accessibility AI" | "IoT & Agriculture"
    description: string,
    stack: string[],
    image: string,         // Path to SVG icon in /src/assets/
    github: string,        // GitHub repo URL
    highlights: string[],  // 6 bullet-point highlights
    features: string[]     // 4 feature tags
  }],
  
  experience: [{
    role: string,
    company: string,
    period: string,
    highlights: string[],
    skills: string[]
  }],
  
  education: [{
    degree: string,
    institution: string,
    period: string,
    achievements: string[]
  }],
  
  achievements: [{
    title: string,
    description: string,
    icon: string           // Emoji
  }],
  
  contact: {
    email: string,
    linkedin: string,      // "https://www.linkedin.com/in/thesoham2203/"
    github: string,        // "https://github.com/thesoham2203"
    location: string       // "Nashik, Maharashtra"
  }
}
```

**6 Projects currently listed:**
1. **REDACT — Privacy Shield** (Privacy Engineering) — Chrome Extension MV3 for AI document redaction
2. **ANPR Toll Collection System** (Computer Vision) — Real-time number plate recognition
3. **PolicyVault Nexus** (Fintech Security) — RBI-compliant FF3-1 encryption platform
4. **Crowd Counting using CSRNet** (Computer Vision) — Deep learning density estimation
5. **Indian Sign Language Recognition** (Accessibility AI) — MediaPipe + CNN gesture recognition
6. **AI-Based Smart Irrigation** (IoT & Agriculture) — ML-powered farm management

**5 Experience entries:**
1. Intern @ INSNAPSYS Technologies (Jan 2026–Present)
2. Backend Developer @ Prime Academy (Mar–Aug 2025)
3. Treasurer, CSI @ K.K. Wagh Institute (2024–25)
4. Marketing & Outreach Head @ FOSS KKWIEER (2024–Present)
5. Intern @ Calibers Infotech (Jul–Sep 2022)

---

## 6. Routing

Uses `react-router-dom` `BrowserRouter` with these routes:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Full-viewport hero with mouse-tracking gradient, role rotator, CTA buttons |
| `/about` | `AboutPage` | Two-column: sticky profile card + skills/achievements/education |
| `/projects` | `ProjectsPage` | Filterable grid with domain tabs + detail modal overlay |
| `/experience` | `ExperiencePage` | Alternating timeline with skill tags |
| `/contact` | `ContactPage` | Contact methods, CV download, availability status |

**Global layout:** `Navigation` (top) + `Footer` (bottom) wrap all routes.
**Scroll behavior:** `ScrollToTop` component resets scroll on route change.
**SPA rewrite:** Vercel config rewrites all paths to `/index.html`.

---

## 7. Design System & Visual Identity

### Color Palette (CSS Variables + Tailwind Custom)
```
--accent-cyan:   #22d3ee   (soham-cyan)
--accent-violet: #7c3aed   (soham-violet)
--accent-pink:   #f472b6   (soham-pink)
soham-navy:      #0f1724
soham-surface:   #111827
```

### Tailwind Custom Config
- `darkMode: 'class'` — toggled via `ThemeToggle.jsx` + `localStorage`
- Custom `backgroundImage`: `soham-gradient` — subtle cyan→violet at 90°

### Typography
- **Primary:** Inter (300 Light, 400 Regular, 600 Semi-Bold, 800 Extra-Bold)
- **Monospace:** JetBrains Mono (400, 600) — used for code-typing animation

### Design Principles (from `soham-portfolio.notes.txt`)
1. Futuristic glassmorphism + neon gradients
2. Network/path motifs in SVGs
3. Generous whitespace
4. GPU-friendly animations (translate/opacity only)

### Card Style — `.card-glass`
```css
background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
backdrop-filter: blur(12px) saturate(120%);
border: 1px solid rgba(34,211,238,0.1);
/* + ::before pseudo-element for gradient border glow */
```

### Gradient Patterns Used Across Components
- **Name/Headings:** `bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent`
- **Primary CTA:** `bg-gradient-to-r from-cyan-500 to-blue-500` (text-white)
- **CV Download CTA:** `bg-gradient-to-r from-emerald-500 to-teal-500`
- **Secondary CTA:** `bg-gradient-to-r from-violet-500 to-purple-600`
- **Project domain badges:** Domain-specific gradient backgrounds

---

## 8. Animations & Effects

### CSS Keyframe Animations (defined in `index.css`)
| Name | Duration | Purpose |
|------|----------|---------|
| `float-mesh` | 20s | Background SVG floating motion |
| `typing` + `blink` | 4s / 1s | Code-typing cursor effect |
| `pulse-glow` | 2s | Status indicator glow |
| `gradient-shift` | 6s | Animated gradient text |
| `neural-pulse` | 3s | SVG neural connection dash animation |
| `spin-slow` | 3s | Loading screen logo spin |
| `float` / `float-delayed` / `float-slow` | 4s–6s | Floating particle effects |
| `glow-pulse` | 2s | Box-shadow glow pulse |
| `gradient` | 3s | Background gradient animation |
| `fadeIn` | 0.3s | Modal/element entry |

### JS-Driven Animations
- **Loading screen:** 4-phase animation (0→3.5s) with scaling logo, text reveal, progress bar
- **Role rotator:** 3s interval cycling through expertise roles (translateY transition)
- **Mouse-tracking gradient:** `mousemove` event tracks cursor for ambient light on Home page
- **Floating particles:** 20 absolutely-positioned circles with randomized positions/delays
- **Scroll-to-reveal:** Components use `useState(isVisible)` + `useEffect` for entry animations
- **Stagger delays:** CSS transition delays (300ms, 500ms, 700ms) for sequential element reveals

### Accessibility
- `prefers-reduced-motion` media query reduces all animations to 0.01ms
- Hero component explicitly checks `matchMedia('(prefers-reduced-motion: reduce)')` in JS
- `aria-live="polite"` on role rotator for screen reader announcements

---

## 9. Key Component Details

### `App.jsx` — Root Component
- Wraps `AppContent` in `<BrowserRouter>`
- **Loading screen:** Shown for 3.5s on first load with phased animation (SP logo → name → tagline → progress bar)
- After loading: renders `Navigation` + `Routes` + `Footer`
- `ScrollToTop` utility scrolls to top on route change

### `Navigation.jsx` — Active Navbar
- Fixed position, backdrop-blur glass effect
- Scroll detection → enhanced blur/border on scroll
- 5 nav items: Home, About, Projects, Experience, Contact
- Active route highlighted with gradient background + dot indicator
- "Download CV" button in desktop nav
- Mobile hamburger menu with slide-down panel

### `ProjectsPage.jsx` — Projects with Filter & Modal
- Domain-based filter tabs (All, Privacy Engineering, Computer Vision, etc.)
- Each project card shows: GitHub OG image fallback → local SVG icon, domain badge, description, tech stack, highlights, action buttons
- **Detail modal:** Full project overlay with sticky header, all highlights, features, and tech stack
- Uses `getGithubOG()` helper to generate GitHub OpenGraph image URLs

### `ProjectCard.jsx` — Reusable Card (Legacy)
- `DomainBadge` — color-coded gradient badges per domain
- `TechStackVisual` — domain-specific SVG illustrations (shield/lock for Privacy, eye/neural for CV, vault for Fintech, hand for Accessibility)
- `HighlightsList` — shows first 3 highlights with dot markers
- `ProjectFeatures` — emoji-tagged feature badges

### `Footer.jsx` — Global Footer
- 4-column layout: Brand info, Explore links, Focus areas, CV download
- Social links: GitHub, LinkedIn, Email
- Bottom bar: Copyright + "Designed with privacy-first thinking"

### `BackgroundAnimation.jsx` — SVG Background
- Fixed position, z-index: -10, `aria-hidden`
- Three layers: gradient mesh, neural network nodes/connections, geometric shapes, data stream
- GPU-optimized with `will-change: transform` and `translateZ(0)`

---

## 10. SEO & Meta

The `index.html` includes comprehensive meta tags:
- **Title:** "Soham Penshanwar — AI · Privacy · Innovation"
- **Description:** AI Engineer & Privacy Specialist description
- **Keywords:** AI, cybersecurity, privacy engineering, fintech, etc.
- **Open Graph:** Title, description, type (website), URL
- **Twitter Card:** summary_large_image with title & description
- **Favicon:** SVG favicon + apple-touch-icon + web manifest
- **Robots.txt:** Present in public/

### Theme Initialization
Dark mode is the default. A `<script>` in `<head>` checks `localStorage.getItem('theme')` before React hydrates to prevent FOUC.

---

## 11. Deployment

- **Platform:** Vercel
- **Config:** `vercel.json` with SPA rewrite (`/(.*)` → `/index.html`)
- **Build:** `npm run build` → `dist/`
- **Base path:** `./` (relative, works on any subdirectory)
- **Sourcemaps:** Disabled in production

---

## 12. Important Conventions & Patterns

1. **Data-driven:** All content comes from `content.json`. To add a project/experience, edit the JSON — components auto-render it.
2. **No state management library:** Uses React `useState`/`useEffect` only. No Redux, Zustand, etc.
3. **No API calls:** Fully static. No backend, no forms, no database.
4. **Inline SVG icons:** All icons are inline SVG, no icon library dependency.
5. **Tailwind-first styling:** All layout and styling via Tailwind utility classes. Custom CSS in `index.css` is limited to animations, scrollbar, and the `.card-glass` component.
6. **Component naming:** PascalCase for components, camelCase for functions/variables.
7. **Image fallback pattern:** `onError` handlers on `<img>` elements swap to gradient placeholders or local SVG icons.
8. **GitHub OG images:** `ProjectsPage` generates `opengraph.githubassets.com` URLs for project card images.

---

## 13. Known Issues & Technical Debt

1. **Legacy components not cleaned up:** `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Experience.jsx`, `Contact.jsx`, `App-old.jsx` are unused but still in the repo.
2. **MobileNavPlaceholder.jsx** and **PageTransition.jsx** are empty/placeholder files.
3. **No tests:** No unit tests, integration tests, or E2E tests.
4. **No form handling:** Contact page only links to email/socials — no contact form.
5. **ThemeToggle not wired into active navigation:** The `ThemeToggle` component exists but isn't rendered in `Navigation.jsx`.
6. **Profile image path has space:** `public/Profesional photo.jpg` — filename has a space and a typo ("Profesional" → "Professional").
7. **Duplicate SVG filter IDs:** `privacyGlow` and `glow` filter IDs appear in both `Hero.jsx` and `ProjectCard.jsx` — could cause SVG rendering conflicts.
8. **WhatsApp link in Contact.jsx** (`https://wa.link/nzmuft`) is a legacy component; not present in the active `ContactPage.jsx`.

---

## 14. Quick Reference for Common Tasks

### Add a New Project
Edit `src/data/content.json` → `projects` array. Required fields:
```json
{
  "id": "unique-slug",
  "title": "Project Title",
  "domain": "One of: Privacy Engineering | Computer Vision | Fintech Security | Accessibility AI | IoT & Agriculture",
  "description": "Detailed description...",
  "stack": ["Tech1", "Tech2"],
  "image": "/src/assets/icon.svg",
  "github": "https://github.com/...",
  "highlights": ["6 bullet points"],
  "features": ["4 feature tags"]
}
```
If domain is new, also add it to the `domains` array in `ProjectsPage.jsx` (line 31).

### Add a New Experience Entry
Edit `content.json` → `experience` array. Fields: `role`, `company`, `period`, `highlights[]`, `skills[]`.

### Change Color Theme
1. CSS variables in `src/index.css` (:root block)
2. Tailwind custom colors in `tailwind.config.cjs` → `theme.extend.colors.soham`
3. `index.html` → `meta name="theme-color"` value

### Add a New Route/Page
1. Create component in `src/components/pages/NewPage.jsx`
2. Add `<Route>` in `App.jsx` → `<Routes>`
3. Add nav item in `Navigation.jsx` → `navItems` array
4. Add footer link in `Footer.jsx`

---

## 15. Contact & Links

| Resource | URL |
|----------|-----|
| Live Site | https://thesoham2203.vercel.app |
| GitHub | https://github.com/thesoham2203 |
| LinkedIn | https://www.linkedin.com/in/thesoham2203/ |
| Email | sohampilot0@gmail.com |
| Location | Nashik, Maharashtra, India |
