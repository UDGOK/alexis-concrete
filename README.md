# Alexis Concrete Website

A modern, responsive website for Alexis Concrete built with Next.js 14, TailwindCSS, and Framer Motion.

## Current State (as of December 22, 2024)

### Tech Stack
- Next.js 14.0.4
- TailwindCSS
- Framer Motion
- TypeScript

### Key Features
1. **Modern Design**
   - Responsive layout
   - Clean, professional aesthetic
   - Optimized images and performance

2. **Navigation**
   - Full-screen overlay menu (inspired by wearemotto.com)
   - Smooth animations
   - Mobile-responsive hamburger menu
   - Contact information panel

3. **Sections**
   - Hero section with call-to-action
   - Services showcase
   - Project portfolio
   - About section
   - Contact form

### Deployment
- Deployed on Vercel
- Production URL: https://alexis-concrete-ms7obsf55-hyasir786s-projects.vercel.app

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure
```
alexis-concrete/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── Navigation.tsx
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.ts
└── package.json
