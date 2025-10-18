
# 🧱 Portfolio – Brutalist Developer Site

## 🎯 Project Goal
A minimalist **brutalist-style** portfolio serving as a personal website for a developer specializing in **Computer Vision** and **Software Engineering**.  
The site should merge **professionalism and rawness** with an **alternative personality**, aesthetically inspired by early-internet web design and brutalist principles.

---

## 👤 Author
**Name:** Konstanty Szumigaj
**Roles:**
- Primary: Computer Vision Engineer
- Secondary: Software Engineer

---

## 🧩 Structure & Content
### Main Pages:
- `/` – Home (intro, short bio, featured projects)
- `/experience` – Work history, education, publications (with company/university logos)
- `/projects` – Project portfolio with descriptions, tags, and GitHub links
- `/contact` – Contact info, services offered, availability

### Additional Elements:
- Downloadable CV (available on /experience page)
- Bilingual support (PL / EN) - full translation for all content
- Light & dark mode with persistent storage
- Company/university logos (80x80px with brutalist borders)

---

## 🧠 Style & Design Philosophy
- **Brutalist minimalism** — raw layout, visible grids, no decorative elements.  
- **Exposed structure:** sharp borders, visible HTML-like sections, no gradients or shadows.  
- **Typography:** system fonts (`Arial`, `Helvetica`, `Verdana`, with `monospace` accents).  
- **Color palette:** primarily black & white with strong accent color (e.g. red or blue).  
- **No animations** or smooth transitions.  
- **Inspirations:**
  - https://utrecht.jp  
  - https://mechanisms.pl  
  - https://nostalgic-css.github.io/NES.css  

---

## ⚙️ Technology
- Framework: **Astro**
  - Lightweight static site generator
  - Built-in support for multilingual content (PL/EN)
  - Easy deployment to **GitHub Pages**
- CSS: handcrafted (no Tailwind or UI frameworks)
- Extras:
  - JSON for structured data (projects, experience)
  - Minimal JS for dark/light theme and language switch

---

## 📁 Project Structure
```
/src
 ├── pages/
 │   ├── index.astro              # Home page (EN)
 │   ├── experience.astro         # Experience, education, publications (EN)
 │   ├── projects.astro           # Projects portfolio (EN)
 │   ├── contact.astro            # Contact page (EN)
 │   └── pl/                      # Polish versions
 │       ├── index.astro
 │       ├── experience.astro
 │       ├── projects.astro
 │       └── contact.astro
 ├── components/
 │   ├── Header.astro             # Navigation + theme/lang controls
 │   ├── Footer.astro             # Footer with links
 │   └── ProjectCard.astro        # Project display card
 ├── scripts/
 │   ├── theme.ts                 # Theme toggle logic
 │   └── lang.ts                  # Language switching
 ├── styles/
 │   └── global.css               # Brutalist design system
 ├── data/
 │   ├── projects.json            # Projects (bilingual)
 │   └── experience.json          # Work experience (bilingual)
/public
 ├── images/
 │   ├── companies/               # Company logos (Samsung, Mnemosis, Smarttech)
 │   ├── education/               # University logos (PW)
 │   └── project-1.png            # Project thumbnails
 ├── cv/
 │   └── cv.pdf                   # Downloadable CV
 └── favicon.svg                  # Custom favicon (KS in red on black)
```

---

## 🌗 Modes & Interactions
- Language switch `[PL] / [EN]`
- Light/Dark theme toggle
- GitHub and LinkedIn links in the footer

---

## 🧭 Tone & Perception
The site should communicate:
- **Alternative professionalism**  
- **Authenticity and simplicity**  
- **Technical minimalism without marketing polish**

---

## 🎨 Design System (CSS)
### Colors
- **Light background:** `#FFFFFF`
- **Dark background:** `#000000`
- **Text:** `#000000` / `#FFFFFF` (inverted in dark mode)
- **Accent:** `#DC143C` (crimson red)
- **Borders:** `#000000` / `#FFFFFF` (1-2px solid)
- **Favicon:** Red `#DC143C` on black `#000000`

### Typography
- **Font:** `Arial, Helvetica, Verdana, sans-serif`
- **Headings:** uppercase, bold, large
- **Body:** 16px, line-height 1.2 (tight)
- **Code / accent:** `monospace`

### Layout / Grid
- Max width: 1000px
- Padding: 16px (top/bottom), 24px (sides)
- Section spacing: 32px
- Borders around major sections
- Layout inspired by early HTML table/grid feel

### Interactions
- Hover on links: underline + accent color
- No transitions or animations
- Theme toggle handled via `data-theme` and CSS variables

---

## 🚀 Deployment
- GitHub repository: `username.github.io`
- Static build via Astro (`npm run build`)
- Deployment using Astro GitHub adapter (`npx astro deploy`)

---

## ✅ Implementation Status
- ✅ Brutalist CSS design system with crimson red accent
- ✅ Bilingual support (EN/PL) for all pages
- ✅ Dark/Light theme with localStorage persistence
- ✅ Navigation: Home → Experience → Projects → Contact
- ✅ Theme/Language controls positioned on the right
- ✅ Work experience with company logos (80x80px)
- ✅ Education section with university logo
- ✅ Publications with full citation and PDF link
- ✅ Projects with tags, descriptions, and GitHub links
- ✅ Custom favicon (KS initials, red on black)
- ✅ Responsive design for mobile/desktop
- ✅ Legal disclaimer for company logos

## 📝 Content Notes
- Main branch: `main`
- Author: Konstanty Szumigaj
- Current employers: Samsung Electronics (2023-Present)
- Education: Warsaw University of Technology (MSc & BSc Mechatronics)
- Publication: DeepVID in Journal of Optics (2023)
- Featured project: VisionCraft (C++20 CV node editor)

---

## 💡 Future Enhancements / TODO

- Add thesis titles to education section
- Add more project images to `/public/images/`
- Consider blog section (Astro content collections)
- Optionally integrate GitHub API for dynamic project fetching
- Header should become a sidebar on mobile devices
- Allow projects without images to display no image placeholder on their card
- Update home page content
