
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
- `/` – Home (intro, short bio, links)
- `/projects` – Projects (thumbnail + description + GitHub link)
- `/experience` – Professional experience
- `/contact` – Contact info + links to LinkedIn / GitHub

### Additional Elements:
- Downloadable CV (PDF stored in `/public/cv/`)
- Bilingual support (PL / EN)
- Light & dark mode

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
 │   ├── index.astro
 │   ├── projects.astro
 │   ├── experience.astro
 │   ├── contact.astro
 │   └── [lang]/...          # language versions
 ├── components/
 │   ├── Header.astro
 │   ├── Footer.astro
 │   ├── ProjectCard.astro
 ├── styles/
 │   ├── global.css
 │   ├── themes.css
 ├── data/
 │   ├── projects.json
 │   ├── experience.json
/public
 ├── images/
 ├── cv/
 │   └── cv.pdf
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
- **Accent (links, hover):** `#FF0000` (or blue `#0047FF`)
- **Borders:** `#000000` (1px solid)

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

## ✅ Roadmap (Summary)
1. Create Astro project skeleton  
2. Implement brutalist CSS layout and base components  
3. Add bilingual content  
4. Implement light/dark mode  
5. Deploy to GitHub Pages  

---

## 💡 Future Enhancements
- Add blog section (Astro content collections)  
- Integrate GitHub API to fetch projects dynamically  
- Optionally add small text animations (if aesthetically appropriate)
