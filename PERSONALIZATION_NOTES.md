# Personalization Notes

This repo was prepared for quick personalization via `src/data/profile.js`.

## Update in one place
- Open `src/data/profile.js` and fill:
  - `name`, `title`, `location`, `email`, `socials.github`, `socials.linkedin`
  - `hero` copy (optional)
  - `resumeUrl` (place your PDF at `public/resume.pdf` or adjust the path)

## Assets
- Replace `public/favicon.ico`, `public/logo192.png`, `public/logo512.png` if present.
- Add your `public/og-image.png` for link previews (and update meta in `public/index.html`).

## Projects/Experience/Skills
- Project cards pull from `src/components/Projects/Projects.js` today. You can either:
  1) Keep the structure and edit inline, or
  2) Move the array into `src/data/profile.js` and import it.
- Experience data is in `src/components/Experience/experienceData.js`.
- Skills are in `src/components/Skills/skillsData.js`.

## Contact form / Integrations
If the site uses a form or analytics, update keys in `.env` or remove as desired.

## Build/Deploy
- Dev: `npm start`
- Build: `npm run build`
- Deploy to GitHub Pages: `npm run deploy` (ensure repo is set + gh-pages installed).

