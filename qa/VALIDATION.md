# Validation record — 29 October 2026

## Delivered state

Vite/React/TypeScript/Tailwind static portfolio; Arabic/English; five real certificate documents; university and club marks; MaDar Cybersecurity Department membership, bootcamp participation and two linked collaborative investigation experiences. User-provided external links are live public references; both case pages identify CASE 7712. No sole website authorship is claimed.

## Executed checks

- `npm run build`: TypeScript and production Vite build passed. Final runtime is static files only.
- Production root preview at `http://127.0.0.1:4173/`: 15 Playwright tests passed, zero unexpected/flaky/skipped results. Evidence: `test-results.json`.
- Real Vite build with base `/portfolio-check/`, served by a strict static server on port 4174 without SPA rewrites: the same 15 tests passed. Evidence: `test-results-subpath.json`.
- Both languages tested at 375, 390, 768, 1024, 1440 and 1920px. No horizontal overflow after fixes; all site image requests and font loads succeeded; no page exceptions or HTTP asset errors in the suite.
- Category filtering, five certificate documents, zoom/reset, next/previous, original image link, keyboard focus containment/restoration and Escape verified.
- Mobile disclosure navigation and anchor navigation passed. Language updates `lang`, `dir`, title, query string and persistent browser choice. Explicit query language wins over storage.
- MaDar membership copy and organization URL, and both case URLs asserted in the English-switch test. Screenshots of the linked public case interfaces are bundled as project previews with links back to their sources.
- Contact fields remain empty and produce no fake links. The no-contact state is asserted.
- Reduced-motion preference tested. GSAP scope cleanup, matchMedia guards and React Bits live preference handling reviewed. Browser-default scroll remains intact.
- Three isolated build-output tests passed: unknown hostname (no guessed metadata), repository-subpath canonical/share/sitemap URLs, and custom-domain CNAME behavior. Test domains are reserved fixtures, not production settings.
- Official GitHub Pages workflow source reviewed: main push trigger, manual dispatch, Node 22/npm ci, configure-pages, artifact upload, deploy-pages, proper permissions and environment. Confirmed configure-pages v5 emits base_path/base_url without trailing slash, matching the workflow's trailing-slash normalization.
- Impeccable source detector executed; returned `[]`. Its separate context launcher exited 127 without diagnostic output; local product/design files and skill references were read directly. No claim is made that the unavailable launcher ran.
- Design Extract ran against the built site and generated `design-extraction/`. It measured readable foreground/background pairs with no failing sampled contrast pairs. This is not a complete WCAG conformance certification.
- Taste Skill final browser inspection: zero failures and five style warnings; 1440/768/390px rendered and inspected. Taste Skill source lint: zero failures. Its remaining phrase warning refers to the actual supplied seminar title; dash warnings concern explanatory content, not invented claims.
- PNG outputs checked from file headers: avatars 1024 × 1024 and 512 × 512, both themes; banner 1584 × 396; OG image 1200 × 630. They were rendered from vectors and loaded fonts, not screenshots.

## Visual review and refinement

Screenshots were opened and inspected, rather than relying on source alone.

1. First review found inherited light weight inside Arabic headline spans and a Latin export font fallback. Corrected the Arabic font cascade to honor ExtraBold; loaded a proper Manrope TTF into the vector exporter. The brand export now uses the same Latin/Arabic voices as the website.
2. Responsive/keyboard review found rotated orbit overflow at 768/1024px and native-dialog Tab cycling briefly reaching browser chrome/body. Confined orbit geometry and added explicit focus wrapping. Reworked certificate zoom so the complete document fits the viewport at the initial scale and larger scales scroll naturally.
3. Final composition review removed tiny decorative English labels, raised secondary labels to readable sizes, tightened desktop section rhythm and gave the ending a clear surface. Integrated MaDar as its own full-width membership row and the casework as large source-linked visual exhibits. Screenshot captures wait for motion completion to avoid mistaking animation frames for final layouts.

Hero, gallery, document viewer, community and practical casework screenshots are included in this folder. Full-page Arabic/English captures at 390 and 1440px are also included. `taste-final/` holds the automated browser measurement report and viewport sheets.

## Honest limits before publishing

- No GitHub account/repository or production domain was supplied. **The site has not been deployed.** A real Actions/Pages run and public URL cannot be verified until those exist. The README documents the exact steps.
- The supplied Arabic fonts have an all-rights-reserved notice and no supplied web embedding/redistribution grant. Confirm permission before public publishing. The existing local implementation uses the supplied fonts as requested.
- The robotics certificate date is not transcribed precisely because the photographed digits are not confidently readable. The entire original and conservative preview remain available. No duration is invented.
- Both external case sites currently name CASE 7712; the portfolio presents two related investigation experiences, not independently verified distinct incidents.
- Source checker preferences about no video, fine decorative orbit outlines, multiple responsive type sizes, and RTL edge geometry are not accessibility failures. No unrelated stock footage was added to simulate professional experience. The Arabic role and student description are plainly present under the name even when English-oriented title heuristics do not recognize them.
- External sites can change independently; their content remains the responsibility of the linked sites. No server dependency or external API is needed for this portfolio itself.
