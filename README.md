# Brutalist Portfolio

A minimalist brutalist-style portfolio website for a Computer Vision Engineer and Software Developer.

## Features

- **Brutalist Design** - Raw, minimal aesthetic with visible structure
- **Bilingual Support** - English and Polish versions
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Responsive Layout** - Works on mobile and desktop
- **Static Generation** - Built with Astro for fast loading

## Project Structure

```
/
├── public/
│   ├── cv/
│   │   └── cv.pdf              # Your CV (replace placeholder)
│   └── images/                 # Project images
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation header with theme/lang toggle
│   │   ├── Footer.astro        # Footer with links
│   │   └── ProjectCard.astro   # Project display component
│   ├── data/
│   │   ├── projects.json       # Projects data (bilingual)
│   │   └── experience.json     # Work experience (bilingual)
│   ├── pages/
│   │   ├── index.astro         # Home page (EN)
│   │   ├── projects.astro      # Projects page (EN)
│   │   ├── experience.astro    # Experience page (EN)
│   │   ├── contact.astro       # Contact page (EN)
│   │   └── pl/                 # Polish versions
│   │       ├── index.astro
│   │       ├── projects.astro
│   │       ├── experience.astro
│   │       └── contact.astro
│   ├── scripts/
│   │   ├── theme.ts            # Theme toggle functionality
│   │   └── lang.ts             # Language switching
│   └── styles/
│       └── global.css          # Brutalist design system
└── package.json
```

## Setup & Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:4321
```

### Customization

1. **Personal Information**

   - Edit `src/data/projects.json` - Add your projects
   - Edit `src/data/experience.json` - Add your work history
   - Update contact links in `src/components/Footer.astro`
   - Update contact info in `src/pages/contact.astro` and `src/pages/pl/contact.astro`

2. **Replace Placeholders**

   - Change "YOUR NAME" in all page files
   - Replace `yourusername` with your GitHub/LinkedIn username
   - Replace `your.email@example.com` with your email
   - Add your CV PDF to `public/cv/cv.pdf`
   - Add project images to `public/images/`

3. **Color Scheme**

   - Edit CSS variables in `src/styles/global.css`
   - Default accent color: `#FF0000` (red)
   - Alternative: `#0047FF` (blue)

4. **Content**
   - English pages: `src/pages/*.astro`
   - Polish pages: `src/pages/pl/*.astro`

## Building for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

Output will be in `dist/` directory.

## Deployment

### GitHub Pages

1. Update `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://yourusername.github.io",
  base: "/brutalist-portfolio",
});
```

2. Build and deploy:

```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Netlify / Vercel

Simply connect your repository and these platforms will auto-detect Astro.

## Design Philosophy

This portfolio follows brutalist web design principles:

- **Raw & Minimal** - No unnecessary decorations
- **Exposed Structure** - Visible borders and sections
- **System Fonts** - Arial, Helvetica, Verdana
- **High Contrast** - Black & white with accent color
- **No Animations** - Instant interactions
- **Authentic** - Professional without marketing polish

## Technologies

- **Astro** - Static site generator
- **TypeScript** - Type-safe scripts
- **CSS** - Handcrafted styles (no frameworks)
- **JSON** - Structured content data

## License

MIT

## Credits

Built with Astro and brutalist design principles.

Inspired by:

- https://utrecht.jp
- https://mechanisms.pl
- https://nostalgic-css.github.io/NES.css
