# Hexagonal Political Compass

A static quiz that scores you on **three** dimensions of power—**political** (liberty vs authority), **economic** (meritocracy vs equality), and **social** (hierarchy vs anarchy)—then places you on a **hexagonal** map and matches a written **archetype**. The home page includes a short explanation of why this differs from a single left–right line or a classic two-axis compass.

## What’s in the repo

| File | Role |
|------|------|
| `index.html` | Intro (theory + axis cards), quiz UI, results, canvas, archetype explorer |
| `styles.css` | Layout, light/dark theming, component styles |
| `app.js` | Questions, Likert scoring, normalization, archetype boxes, hex drawing, explorer overlay |
| `hexstar_political_compass_v2.html` | Older single-file version kept for reference (not used by the live site) |

## Behaviour (high level)

- **21 questions** (seven per axis), mapped to scores roughly in **−10…10** per dimension.
- The **hex map** projects those three scores into the plane; the **positive** poles (liberty, meritocracy, hierarchy) are spaced **120°** apart so the layout matches the model.
- **Matching** uses axis-aligned **ranges** for each archetype; if no box contains your point, the nearest archetype wins.
- **Display** uses a mild visual stretch on scores so regions read more evenly on the hex; numeric results and matching still use the raw scores.
- **Centrist** results are clamped to the **inner** hex on the map; other archetypes use the outer hex. The dropdown can shade each archetype’s region for exploration.

## Run locally

Open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

The repo includes `.github/workflows/pages.yml` for automatic deployment.

### One-time setup

1. Push this project to a GitHub repository.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure the workflow branch (default `master`) matches your default branch, or edit the workflow trigger.

### Deploy flow

- Pushes to the configured branch run the workflow and publish the site as static files (no build step).
- After a successful run, the site is available at `https://<username>.github.io/<repo>/`.

## Other hosting

- **Netlify** — deploy the project folder as a static site.
- **Vercel** — import as a static site.

No backend is required.
