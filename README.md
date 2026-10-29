# البراء ياسر العسيري · Albaraa Yasir Alassiri

A bilingual portfolio for a second-year Cybersecurity student at King Khalid University. Arabic is the default. Built with Vite, React, TypeScript, Tailwind CSS and GSAP for **static GitHub Pages hosting**. No backend, SSR, API key or paid hosting is required.

## التشغيل محليًا / Local development

Install Node.js 22 or newer, then from this folder:

```sh
npm ci
npm run dev
```

To verify the actual production files:

```sh
npm run build
npm run preview -- --port 4173
```

Open `http://127.0.0.1:4173/`. The build output is `dist/`. Do not open `dist/index.html` directly with `file://`.

## النشر على GitHub Pages

No account, repository, production hostname, email or social profile has been assumed. The site is not deployed yet.

1. Create your GitHub account and a **public** repository. For the simplest setup, name it `YOUR_ACTUAL_USERNAME.github.io`, replacing the placeholder with your real account name. Alternatively, choose any repository name for a project site.
2. Upload/commit the **project source**, including `package.json`, `package-lock.json`, `src/`, `public/`, `scripts/`, `index.html`, `vite.config.ts`, `tsconfig.json` and `.github/workflows/deploy.yml`, to the `main` branch. Upload the contents of this folder, not a folder wrapping them. Keep `node_modules`, `.env` and `dist` out of Git.
3. Open repository **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to `main`, or open **Actions → Deploy portfolio to GitHub Pages → Run workflow** for the first deployment after enabling Pages.
5. Wait for both `build` and `deploy` jobs to succeed. GitHub shows the actual published URL in **Settings → Pages** and on the deployment environment. Only that successful deployment establishes that the site is live.

The workflow uses official `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`. Build has read-only repository access; the deploy job has `pages: write` and `id-token: write`. It builds automatically on every push to `main`. **No manually copying build files, gh-pages branch or deployment token is needed.**

### User site vs repository path

`configure-pages` supplies the real site base URL and base path. For a user site the path is `/`; for a project repository it is `/REPOSITORY/`. The workflow passes the path into Vite, so scripts, styles, custom fonts, club logos and all certificate images get the right URLs.

For optional overrides go to **Settings → Secrets and variables → Actions → Variables**. These are public configuration values, not secrets:

| Variable | Meaning |
|---|---|
| `VITE_BASE_PATH` | `/` for a user site/custom domain, or `/REPOSITORY/` for a project site. Must start and end with `/`. Usually automatic. |
| `VITE_SITE_URL` | Actual absolute HTTPS homepage URL, with a trailing `/`. Usually automatic from Pages. |
| `VITE_CUSTOM_DOMAIN` | Optional verified hostname only, without protocol/path. Leave empty for github.io. |

The account and repository are also supplied to `profile.deployment` by GitHub Actions. They **do not automatically expose a social profile**: add your intended GitHub profile explicitly in `profile.ts` when ready.

### Custom domain

1. Configure your real domain in **Settings → Pages → Custom domain**, and follow GitHub's displayed DNS instructions. Enable HTTPS once available.
2. Set `VITE_BASE_PATH=/`, `VITE_SITE_URL` to your real HTTPS domain root, and `VITE_CUSTOM_DOMAIN` to the same hostname.
3. Push or rerun the workflow. The build emits `CNAME`. The hostname must match `VITE_SITE_URL`.

To return to a repository URL, clear those overrides and the Pages custom-domain setting. The workflow will derive the GitHub URL again.

### Local deployment settings

Copy `.env.example` to `.env` and edit it for local builds only. `.env` is ignored by Git. Repository Actions variables are used for hosted builds, not your local `.env`.

Without a known `VITE_SITE_URL`, canonical, `og:url`, absolute share-image URL and sitemap are intentionally omitted. No guessed production domain is published. Once it is known, the build emits canonical, Open Graph/Twitter image URLs, language alternates, `sitemap.xml` and a matching robots sitemap directive. The brand share image is already available at `public/brand/og.png` (1200 × 630).

## الروابط ومعلومات التواصل

Edit **`src/config/profile.ts`**:

```ts
email: '',
linkedin: '',
github: '',
```

Replace empty strings with real, verified values. Email must be an address; LinkedIn/GitHub must be HTTPS URLs on their respective domains. Unavailable or invalid values stay hidden, with a truthful closing message and no disabled or broken contact buttons. Commit and push to publish the update. No component redesign is required.

## Languages and navigation

- Complete UI copy: `src/content/copy.ts`.
- Certificate data: `src/content/certificates.ts`.
- Arabic uses `lang="ar" dir="rtl"`; English uses `lang="en" dir="ltr"`.
- The language control updates all copy and metadata, persists the choice in browser storage, and sets `?lang=ar` or `?lang=en`. An explicit query overrides the stored preference.
- Section navigation uses anchors (`#about`, `#learning`, `#community`, `#contact`). There are no history routes requiring server rewrites.
- `404.html` contains the same static app shell with base-aware assets. Unexpected paths return GitHub's normal 404 response while showing the portfolio; this is not an HTTP-status rewrite. All intended links point to the homepage and anchors.
- JavaScript is required for React interactions; a truthful bilingual `noscript` summary remains available. Animation is progressive: content is visible by default, and reduced motion disables movement.

## الشهادات والهوية

- The five authentic images are in `public/certificates/originals/`.
- `previews/` contains conservative perspective/crop corrections, and `thumbs/` contains optimized WebP thumbnails. Printed content, signatures, QR/barcodes and stamps are preserved. The original is linked from every lightbox.
- The robotics date is not transcribed as a precise claim because the photo does not allow a confident exact reading. No course duration is invented.
- Course completion, language attendance and seminar attendance are labeled separately. No IELTS/TOEFL score, advanced professional certification, leadership role or technical proficiency percentage is claimed.
- Official supplied university and club logos retain their proportions. The community section also includes the user-confirmed MaDar Technology Organization membership, supplied logo and real organization website; its URL is maintained in profile.community.madarUrl.
- `brand-assets/linkedin-avatar/`: PNG 1024 × 1024 and 512 × 512 in dark/light variants, plus vector SVG.
- `brand-assets/linkedin-banner/`: PNG exactly 1584 × 396 and outlined SVG.
- `brand-assets/monogram.svg`: reusable personal BA mark.
- `brand-assets/brand-guidelines/`: palette, typography, usage and font-rights notes.

Regenerate branding with `npm run brand`. This renders vector artwork directly to PNG; banner assets are not screenshots. Font paths are inside the project, never runtime paths to Downloads.

**Font rights before public publishing:** the supplied Arabic fonts identify HadiType Foundry and contain an “All rights reserved” notice, without a supplied license granting web embedding or public redistribution. Confirm the rights with the owner or supply licensed replacements before publishing. Font metadata is recorded in `brand-assets/brand-guidelines/FONT-LICENSE.md`. Manrope is licensed under the SIL Open Font License; its notice is included in `public/fonts/Manrope-OFL.txt`.

## Practical casework

The user confirmed membership in MaDar�s Cybersecurity Department, work on cybersecurity bootcamps, and team participation in solving the linked investigation cases. Both public sites identify Case 7712, so the portfolio presents them as two related investigation experiences, with their original titles and links. Preview screenshots show the linked public interfaces; they do not imply sole authorship of those websites.

## Validation

With the production preview running:

```sh
npm test
```

Tests use installed Microsoft Edge via Playwright. On a device without Edge, install it or change `channel` in `playwright.config.ts` to an installed Chrome/Chromium. For Playwright's own Chromium, run `npx playwright install chromium` and remove the channel setting.

The suite tests both languages, URL/storage persistence, all five images, category filtering, document zoom, previous/next, originals, keyboard focus and Escape, all image/font requests, no horizontal overflow, mobile menus, navigation, unavailable contacts, static fallback assets and reduced motion at **375, 390, 768, 1024, 1440 and 1920px**.

Repository-subpath verification uses a real prefixed build and a strict static server without SPA rewrites:

```sh
node scripts/build-subpath.mjs
node scripts/static-server.mjs
```

In a second terminal on PowerShell:

```powershell
$env:TEST_BASE_URL='http://127.0.0.1:4174/portfolio-check/'
$env:TEST_REPORT='qa/test-results-subpath.json'
npm test
```

The script writes the prefixed build to `dist-subpath/` and preserves the root build in `dist/`. Repeating it replaces only this generated prefixed output. `/portfolio-check/` is a local test fixture, not an invented repository name. Stop local servers with Ctrl+C.

Screenshots and test evidence are in `qa/`. `qa/VALIDATION.md` records the actual checks, refinements and limits. A local test cannot verify an uncreated GitHub account or a real Pages deployment.

## Source acknowledgements

- React Bits `Magnet` adapted from the supplied local upstream source; see `THIRD-PARTY.md`.
- GSAP / `@gsap/react` handle the scoped hero entrance and monogram drawing, with cleanup and reduced-motion support.
- Transitions.dev supplies the modal's opening/closing timing and scale system.
- Taste Skill and Impeccable informed composition and refinement; Design Extract inspected the built site's actual tokens.
- Lucide provides the consistent interface icons.

No stock portrait, invented biography, unknown social link or external tracking has been added.
