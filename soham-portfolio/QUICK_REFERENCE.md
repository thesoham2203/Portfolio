# Quick Reference Guide

## 🚀 Getting Started

### Run Development Server

```bash
cd d:\Portfolio\Portfolio\soham-portfolio
npm run dev
```

Open: http://localhost:5173

### Build for Production

```bash
npm run build
npm run preview
```

## 📝 Common Updates

### Update Personal Information

**File**: `src/data/content.json`

- Name, email, tagline, bio
- Contact details (LinkedIn, GitHub, location)

### Add/Edit Projects

**File**: `src/data/content.json` → `projects` array

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "domain": "Privacy Engineering",
  "description": "Short description",
  "stack": ["Tech1", "Tech2"],
  "image": "/src/assets/image.svg",
  "github": "https://github.com/...",
  "highlights": ["Feature 1", "Feature 2"],
  "features": ["Tag1", "Tag2"]
}
```

### Add/Edit Experience

**File**: `src/data/content.json` → `experience` array

```json
{
  "role": "Job Title",
  "company": "Company Name",
  "period": "2024-Present",
  "highlights": ["Achievement 1", "Achievement 2"],
  "skills": ["Skill1", "Skill2"]
}
```

### Update Skills

**File**: `src/data/content.json` → `skills` object

```json
{
  "languages": ["Python", "JavaScript"],
  "frameworks": ["React", "FastAPI"],
  "security": ["AES-256", "OAuth2"],
  "cloud": ["Docker", "AWS"]
}
```

### Replace CV

**Location**: `public/Soham_CV.pdf`

- Replace this file with your updated CV
- Keep the filename or update links in components

## 🎨 Customization

### Change Colors

**File**: `src/index.css`

```css
:root {
  --accent-cyan: #22d3ee; /* Primary tech color */
  --accent-violet: #7c3aed; /* Secondary creative */
  --accent-pink: #f472b6; /* Accent energy */
}
```

### Modify Animations

**File**: `src/index.css`

- Look for `@keyframes` sections
- Adjust duration, easing, transforms

### Update Page Content

**Files**: `src/components/pages/*.jsx`

- Home.jsx - Landing page
- AboutPage.jsx - About section
- ProjectsPage.jsx - Projects gallery
- ExperiencePage.jsx - Experience timeline
- ContactPage.jsx - Contact form

## 🔧 Troubleshooting

### Server Won't Start

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Changes Not Showing

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check console for errors

### Build Errors

```bash
# Check for errors
npm run build

# Common fixes:
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
```

### Routing Not Working

- Make sure you're using `<Link to="/path">` not `<a href="/path">`
- Check that Router wraps the entire app in App.jsx

## 📱 Testing

### Check Responsiveness

1. Open DevTools (F12)
2. Click device toolbar icon
3. Test on:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### Test All Pages

- Home: http://localhost:5173/
- About: http://localhost:5173/about
- Projects: http://localhost:5173/projects
- Experience: http://localhost:5173/experience
- Contact: http://localhost:5173/contact

### Test Interactions

- ✅ Navigation links work
- ✅ Mobile menu opens/closes
- ✅ Project modals open/close
- ✅ Project filters work
- ✅ CV downloads correctly
- ✅ Contact form opens email client
- ✅ Hover effects work
- ✅ Animations play smoothly

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repository
4. Deploy (automatic)

### Netlify

1. Push code to GitHub
2. Go to netlify.com
3. New site from Git
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Upload dist/ folder contents
```

## 📚 File Structure

```
soham-portfolio/
├── public/
│   └── Soham_CV.pdf          # Your CV file
├── src/
│   ├── assets/               # Project images (SVG)
│   ├── components/
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── ExperiencePage.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── Navigation.jsx   # Nav bar
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── content.json     # ALL CONTENT HERE
│   ├── App.jsx              # Router setup
│   ├── index.css            # Styles + animations
│   └── main.jsx             # Entry point
├── package.json
└── vite.config.js
```

## 💡 Tips

### Best Practices

- ✅ Update content.json first (easiest)
- ✅ Test on mobile before deploying
- ✅ Keep CV file updated
- ✅ Use descriptive commit messages
- ✅ Test all links before sharing

### Performance

- ✅ Optimize images (use SVG when possible)
- ✅ Keep animations subtle
- ✅ Test loading speed
- ✅ Check Lighthouse score

### Maintenance

- 🔄 Update projects regularly
- 🔄 Keep technologies current
- 🔄 Refresh CV every 3-6 months
- 🔄 Check for broken links
- 🔄 Update experience section

## 🆘 Need Help?

### Common Issues

**Issue**: Page is blank
**Fix**: Check browser console for errors

**Issue**: Styling looks wrong
**Fix**: Make sure Tailwind is configured correctly

**Issue**: Routing doesn't work in production
**Fix**: Configure your host for SPA routing

**Issue**: CV won't download
**Fix**: Check file exists in public/Soham_CV.pdf

## 📞 Support

- Check browser console for errors (F12)
- Review component files for typos
- Ensure all imports are correct
- Verify content.json is valid JSON

## 🎉 You're All Set!

Your portfolio is now:

- ✅ Modern and creative
- ✅ Multi-page with routing
- ✅ Mobile responsive
- ✅ Easy to update
- ✅ Production ready
- ✅ Impressive to recruiters

**Go show it off! 🚀**
