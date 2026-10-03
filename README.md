# Harsh Jha portfolio (React + Vite)
`npm install` then `npm run dev`. Build: `npm run build`.
- Portrait: src/assets/images/profile/portrait.jpg (currently cropped from the design mockup; replace with your original photo, 4:5)
- Project images: src/assets/images/projects/<project-id>.jpg (overrides generated visuals)
- CV: public/cv.pdf | Contact form: set VITE_FORM_ENDPOINT in .env (e.g. a Formspree URL); without it the form opens your email app
- Content: src/data/*.js (site, projects, certificates, services). Set GitHub URL in site.js
- SEO: replace [ADD-DOMAIN] in index.html, public/robots.txt, public/sitemap.xml
