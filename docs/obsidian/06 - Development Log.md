# Development log

Related: [[05 - Implementation Roadmap]], [[08 - Learning Notes]]

## 2026-10-25 — rebuild

Created the application in the empty main Portfolio folder. Preserved Oliver/Portfolio reference notes. Added package/config files for Next.js, TypeScript, ESLint and Tailwind. Created server-rendered content, global styles and a single client interaction module. Added social image, robots and sitemap routes. Downloaded original images and résumé from the existing portfolio. Wrote nine linked notes, README and AGENTS.md.

The web reader could not access the three sites; direct HTTP retrieval succeeded. Repository inspection verified Harmoniq’s stack. Nova’s linked repository package file returned 404. The repository itself also returned HTTP 404; its broken source action was removed.

Taste Skill was available initially and was also installed using the user’s requested command. Ponytail marketplace and plugin were installed; full-mode guidance was read and applied directly during this session. Automatic lifecycle hooks may require trust in /hooks and a new chat; installation does not prove those hooks have run.

Validation results will be appended after the final checks.

Detected the actual open Obsidian vault from local configuration and mirrored the nine notes into Oliver/Portfolio/Kali.Dev. Existing reference notes were preserved. Added a Node-native smoke check covering route availability, actual media, contact and the removed broken repository link.

## 2026-10-26 — final verification

- ESLint: passed.
- TypeScript no-emit validation: passed.
- Next.js production build: passed; home, social image, robots and sitemap are prerendered.
- Native Node smoke checks: passed for home, section anchors, actual contact email, removal of broken Nova source link, all original assets, résumé and SEO routes.
- Taste Skill production inspection: zero failures at 1440, 768 and 390px. All seven screenshot sheets opened and reviewed. A final tablet-only spacing correction keeps the two action labels on one line and removes the small preview at that width.
- Manual browser checks: light theme changes rendered colors and persists after reload; mobile menu opens, closes after choosing a link, closes with Escape and returns focus; work lens changes its pressed state, explanation and destination.
- Reduced-motion check: inspection found no hidden text. All animation is disabled under reduced-motion preference.
- Dependency audit during lockfile synchronization: zero reported vulnerabilities.

Remaining design warnings: more than five computed font sizes, retained for the display name, contact and footer proportions; no footage because no relevant original video was supplied. A slow project-image movement provides restrained visual motion. No stock assets, invented case studies or sample proof are used.

The installed host Node is 22.2; checks passed here, but deployment documentation requires Node 22.13+ or Node 24 LTS to satisfy all dependency engines. This project has a new local Git repository; no remote, push, or deployment was performed. The production sitemap intentionally has no URL until NEXT_PUBLIC_SITE_URL is configured.

## Visual critique

ROUND 3
Seen in one second: Oliver’s name, confidently split across the page.
Idea (one sentence): Oliver Bartolata’s name becomes the architecture between an introduction and his finished interfaces.
Live thing: the build/care selector changes the explanation and leads to the appropriate evidence.
Layout words by section: hero=monument / projects=offset media / about=portrait split / experience=full-field rows / skills=typographic list / contact=display invitation / footer=name reprise.
Scores: design 7.8 · usability 8.0 · creativity 6.8 · content 8.0 → overall 7.7.
Caps applied: creativity below 7 because the monument device is a known approach; no failure caps remain.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Tablet-fold action labels wrapped into narrow columns. Fixed by hiding the small thumbnail at tablet width and reserving an unbroken action group.
2. Portrait is a casual original photo (desktop-page-02 and mobile-page-01). Preserved honestly; a new portrait would improve it, but cannot be fabricated as Oliver.
3. Project details are brief (desktop-page-01). Accurate summaries and source evidence are retained; richer case studies need the owner’s verified project decisions and outcomes.

Final tablet-only production recheck: zero failures, one type-scale warning; both new tablet screenshot sheets opened. The corrected action labels stay on one line. Final desktop/mobile sheets remain valid because the final change is restricted to widths 701–900px.

## 2026-10-26 — hero and footer spacing revision

Requested: remove the large Oliver word from the footer and close the gap between first name and surname.

Updated app/page.tsx to render the full hero name as one text line and remove the decorative footer paragraph. Updated app/globals.css to remove the split-name alignment, obsolete footer-name rules and forced hero minimum heights. The footer now has normal bottom padding; the hero follows its content with responsive gaps.

Checks: lint passed, TypeScript no-emit passed, production build passed. Production browser inspection at 1440, 768 and 390px reported zero failures. All seven screenshot sheets in .taste-skill/spacing-fix were opened; the name fits one line at every target width and the footer ends after the compact navigation. Existing type-count/no-video warnings remain outside this requested change. No new tests or dependencies were needed for these presentation changes. The separate test server used port 3001 because an existing preview occupied port 3000; that existing preview was left running.

Revision review: the full name reads as one focal point, the footer is compact, and desktop/tablet/mobile have no observed overlap or clipping. Design 7.8 · usability 8.1 · creativity 6.8 · content 8.0 → overall 7.7. This revision follows the owner’s preference over the original split-name/footer reprise direction. No new assets, placeholder content or redraws were added.

## 2026-10-26 — GitHub and Vercel publication preparation

Authenticated GitHub as Mathhiass. Verified repository portfolio-project and its main branch against the existing live Vercel deployment. Retrieved the existing history and preserved .gitattributes and the original favicon. The new commit replaces the old JavaScript App Router pages, components, form endpoint and framework configuration with the verified TypeScript redesign. No force push is needed.

Confirmed the Vercel workspace remains on Hobby. Production configuration will use Node 24.x and the existing kalisnt-portfolio.vercel.app address. Configured the public site origin for the local production build; the ignored environment file contains only that public origin. Cloud publication status is recorded after verification.

## 2026-10-27 — refresh NovaTop Up project screenshot

Captured the current public NovaTop Up homepage at https://novatopupph.vercel.app/ using the browser. Replaced the old dark storefront screenshot with public/images/nova-storefront.jpg, showing the new light design, blue accents and game catalog. The screenshot preserves the actual design-preview banner.

Updated app/page.tsx to import the new screenshot as a static Next.js image and describe it accurately. Static importing produces a content-hashed URL so visitors receive the new capture rather than a cached copy of the original. Removed the obsolete nova.png and updated the existing smoke check to verify the new JPEG. No page layout, project summary or features changed.

Validation before publication: lint, TypeScript and production build passed. The final capture uses the portfolio’s desktop image proportions so the navigation and hero remain framed correctly. Live image and responsive checks follow the Vercel deployment.
