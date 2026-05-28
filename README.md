# Duke AI Summit Demo Website

A Vite + React + Tailwind starter website for Nubia Nurain Khan's Duke AI in Education Summit showcase demo.

## Local setup

1. Install Node.js from https://nodejs.org/
2. Open Terminal.
3. Go to this folder.
4. Run:

```bash
npm install
npm run dev
```

Then open the local URL printed by Terminal, usually `http://localhost:5173/`.

## Edit the website

Most text, image links, and FrameVR links are in:

```text
src/App.jsx
```

Look for the `CONTENT` section near the top.

## GitHub Pages setup

Repository name should be:

```text
duke-ai-summit-demo
```

In GitHub:

1. Open the repository.
2. Go to Settings > Pages.
3. Under Build and deployment, choose Source: GitHub Actions.
4. Push these files to the `main` branch.
5. GitHub Actions will build and publish the site.

Your final site should be:

```text
https://nubianurain.github.io/duke-ai-summit-demo/
```
