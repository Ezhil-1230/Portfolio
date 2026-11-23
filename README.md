# Ezhil Mamnose P — Senior Developer Portfolio

> **Production-ready, highly interactive personal portfolio website for EZHIL MAMNOSE P — Full Stack Developer & Software Engineer.**

Built with **React.js, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons**. Features an elite dark modern aesthetic (`#080B14`, `#111827`, Electric Cyan `#00F0FF`, and Purple `#A855F7`), animated background particles, dynamic typing introduction, interactive project cards with architecture modals, animated achievement counters, vertical experience & education timelines, working contact form dispatch, and instant resume download.

---

## ⚡ Quick Start (Local Development)

### 1. Run Development Server
```powershell
cd D:\Portfolio
npm run dev
```
Open **`http://localhost:3000`** in your browser to experience hot-module reloading and real-time development.

### 2. Build for Production
```powershell
npm run build
```
Generates an optimized, minified production build in `dist/`.

### 3. Preview Production Build
```powershell
npm run preview
```

---

## 🌐 Public Deployment (Permanent Free HTTPS URL)

This repository includes pre-configured deployment setups for **Vercel**, **Netlify**, and **GitHub Pages**:

### Option 1: Deploy with Vercel (Recommended & Easiest)
1. Install Vercel CLI (or connect via GitHub):
   ```powershell
   npm install -g vercel
   vercel
   ```
2. Or go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and select your `D:\Portfolio` repository.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**. Your permanent public URL (e.g. `https://ezhil-mamnose-portfolio.vercel.app`) is generated in seconds with free SSL.

### Option 2: Deploy with Netlify Drop (Zero-CLI 30-Second Launch)
1. Run `npm run build` to generate `D:\Portfolio\dist`.
2. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the **`dist`** folder into the browser window.
4. Your website is instantly live!

### Option 3: Deploy via GitHub Pages
1. Push this folder to a GitHub repository:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Ezhil Mamnose P Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to your GitHub repository &rarr; **Settings** &rarr; **Pages** &rarr; **Build and deployment Source**: Select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your portfolio at `https://<your-username>.github.io/portfolio/`.

---

## 📂 Architecture & File Structure

```
D:\Portfolio\
├── dist\                       # Production optimized distribution bundle
├── public\
│   ├── favicon.svg             # Custom geometric EM developer favicon
│   └── assets\
│       ├── images\
│       │   └── profile.jpg     # Professional profile photograph
│       └── docs\
│           └── Ezhil_Mamnose_Resume.pdf  # Verified official resume PDF
├── src\
│   ├── components\
│   │   ├── Navbar.tsx          # Sticky blur header with active link highlighting & resume CTA
│   │   ├── Hero.tsx            # Left typography + dynamic typewriter & Right glowing photo card
│   │   ├── About.tsx           # Bio + 4 animated achievement counters (9.0 CGPA, 2 Internships, etc.)
│   │   ├── Skills.tsx          # Categorized skills matrix with filter pills & icons (no fake %)
│   │   ├── Experience.tsx      # Vertical timeline for Pentagon Innovations & MCC MRF Innovation Park
│   │   ├── Projects.tsx        # Project showcase grid with category filters & deep-dive modal triggers
│   │   ├── ProjectModal.tsx    # Comprehensive modal dialog for system architecture & stack breakdown
│   │   ├── Education.tsx       # MCA, B.Sc. CS, 12th & 10th academic timeline
│   │   ├── Certifications.tsx  # UiPath, Rust/Leptos certificates & 2nd Prize Stress Interview trophy card
│   │   ├── Contact.tsx         # Working contact form with validation, copy buttons & mailto fallback
│   │   ├── Footer.tsx          # Clean branding, quick navigation, social links & copyright
│   │   ├── BackgroundParticles.tsx # Non-intrusive interactive 60fps constellation canvas
│   │   ├── ScrollToTop.tsx     # Floating button for smooth back-to-top scrolling
│   │   └── ConfigSocialsModal.tsx # Transparent repository access & social profile modal
│   ├── data\
│   │   ├── personal.ts         # Centralized profile information & rotating titles
│   │   ├── skills.ts           # Categorized technology stack & competencies
│   │   ├── experience.ts       # Detailed professional timeline & responsibilities
│   │   ├── projects.ts         # Full descriptions, stack, and features for all 6 projects
│   │   ├── education.ts        # Academic institution credentials & grades
│   │   └── certifications.ts   # Verified certification credentials & competition awards
│   ├── types\
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root component orchestrator
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind CSS directives, glassmorphic & glow utilities
├── index.html                  # SEO & OpenGraph metadata
├── tailwind.config.js          # Custom colors, fonts & animations configuration
├── vite.config.ts              # Vite bundler configuration
├── vercel.json                 # Vercel deployment configuration
├── netlify.toml                # Netlify deployment configuration
└── .github\workflows\
    └── deploy.yml              # GitHub Pages deployment automation
```

---

## 🎯 Verification Checklist

- [x] Verified full build with `tsc && vite build` (zero errors, pristine output in `dist/`).
- [x] Resume download button verified and connected directly to `/assets/docs/Ezhil_Mamnose_Resume.pdf`.
- [x] Profile photograph verified and properly styled with gradient border, soft glow, and floating tags.
- [x] 6 Development projects included with complete architectures, technology badges, and modal deep-dives.
- [x] Contact form with input validation, Web3Forms integration, copy buttons, and mailto fallback.
- [x] Responsive on desktop, laptop, tablet, and mobile with no horizontal scrolling or overlapping text.
- [x] Deployment configurations for Vercel, Netlify, and GitHub Pages included.

&copy; 2026 Ezhil Mamnose P. All rights reserved.
