# Tech stack

Related: [[03 - Site Architecture]], [[08 - Learning Notes]]

Next.js App Router renders the page on the server. TypeScript checks props and supported values. React handles the small interactive areas. Tailwind v4 is loaded through PostCSS; most visual rules use named CSS classes so the layout remains easy to read. Lucide provides a few recognizable controls.

next/font downloads and self-hosts Imbue and Albert Sans during build. next/image optimizes original project screenshots and the portrait. Native IntersectionObserver and Web Animations provide progressive entrance motion; no animation dependency is needed.

Use Node 22.13 or newer (Node 24 LTS recommended), npm, and the committed lockfile. Install with `npm ci`; run with `npm run dev`. Validate with `npm run lint`, `npm run typecheck`, and `npm run build`.

No database, API key, authentication, or email delivery service is required. Contact uses a real mailto link.
