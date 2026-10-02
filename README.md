# M. Vishnusankar | BIM Automation Engineer Portfolio

React + TypeScript + Vite + Tailwind CSS + Three.js (plain `three`, used inside a React component).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # type-check + bundle into dist/
npm run preview    # serve dist/ locally
```

## Where to edit
- All text content: `src/data/content.ts` (resume-based; placeholders are in [BRACKETS])
- Replace `[ADD GITHUB LINK]` and `[ADD LINKEDIN LINK]` in `profile` (and turn them into links in `src/sections/Contact.tsx`)
- Resume PDF: `public/resume/Vishnusankar_Resume.pdf` (your uploaded resume was copied there; replace the file to update it). It also contains your home address, so remove it from the PDF if you don't want it public.
- 3D hero scene: `src/components/HeroScene.tsx` (conceptual building + MEP run + data pulse; static when reduced motion is on)
- Colors/fonts: `tailwind.config.js`

## Deploy
- **Netlify / Vercel**: connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: `npm run build`, publish `dist/` (e.g. with the `gh-pages` branch or a GitHub Actions Pages workflow). `base` is `"./"` in `vite.config.ts`, so it works from a sub-path.

## Content rules
Only information from the resume is used. Diagrams are labeled conceptual. No metrics were added.
