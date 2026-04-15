# Hexagonal Political Compass Web App

This project is now organized as a simple static web app:

- `index.html` - app structure and markup
- `styles.css` - all styles and theme variables
- `app.js` - quiz logic, scoring, archetype matching, and chart rendering
- `hexstar_political_compass_v2.html` - original source file kept for reference

## Run locally

You can open `index.html` directly in a browser, or serve it from a local static server:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/pages.yml`, which deploys the site to GitHub Pages automatically.

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. In GitHub, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or update the workflow branch trigger if needed).

### Deploy flow

- Every push to `main` triggers the Pages workflow.
- The workflow publishes this folder as a static site (no build step required).
- After the workflow finishes, your site is available at:
  - `https://<your-username>.github.io/<your-repo>/`

## Other static hosting options

- Netlify (drag-and-drop the folder)
- Vercel (import as static site)

No backend is required.
