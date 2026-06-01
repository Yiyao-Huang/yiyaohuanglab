# Yiyao Huang Lab Website

Official lab website: https://yiyao-huang.github.io/yiyaohuang_lab_website/

This repository contains the source code for the Yiyao Huang Lab website.

## Local preview

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Add or replace photos

Put photo files in `public/images/` using these filenames:

- `pi.jpg`
- `zhiyuan-shi.jpg`
- `ningyu-hu.jpg`

Then commit the changes and redeploy.

## Deploy to GitHub Pages

### Option A: Deploy with GitHub Pages from GitHub Actions

1. Create a GitHub repository, for example `yiyao-huang-lab`.
2. Upload all files in this folder.
3. In GitHub, go to **Settings → Pages**.
4. Choose **GitHub Actions** as the source.
5. Add the workflow file below as `.github/workflows/deploy.yml`, or use the one included if present.
6. Push to the `main` branch. GitHub will build and publish the site.

### Option B: Deploy with gh-pages

```bash
npm install
npm run build
npm run deploy
```

Before using `npm run deploy`, set the homepage/base path if your site is hosted under a repository subpath.

## Static site limitation

This is a static website. It cannot upload photos from the public webpage itself. To update photos, upload image files to the GitHub repository and redeploy.
