# romequinco.github.io

Personal website of Óscar Romero Quincoces, in English (`/`) and Spanish (`/es/`). Built with [Astro](https://astro.build) and published on GitHub Pages.

## Where things are

| What | File |
|---|---|
| Projects, images and captions, experience, education | `src/data/site.json` |
| Long text of each project page | `src/data/details.json` |
| Fixed interface text (buttons, labels) and contact details | `src/lib/i18n.ts` |
| CV page content (summary, skills) | `src/components/CvPage.astro` |
| Styles | `src/styles/global.css` |
| Images | `public/img/` |

## Commands

```bash
npm install          # once
npm run dev          # local preview at http://localhost:4321
npm run build        # build the site into dist/
```

After adding or replacing images in `public/img/`, run `python scripts/make-thumbs.py` to refresh the light copies used by the project covers.

To refresh the CV PDFs after changing the CV: build, run `npx astro preview --port 4321`, then `bash scripts/make-cv-pdf.sh`, and build again.

Every push to `main` publishes the site through `.github/workflows/deploy.yml`.
