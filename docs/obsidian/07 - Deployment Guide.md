# Deployment guide

Related: [[02 - Tech Stack]], [[06 - Development Log]]

## Local

Open a terminal in the Portfolio folder. Use Node 24 LTS or Node 22.13+.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For production locally:

```bash
npm run lint
npm run typecheck
npm run build
npm start
# In a second terminal, with the production server running:
npm test
```

## Vercel

Push this project to your own Git repository, then import that repository into Vercel. Select Next.js. If the repository contains a parent folder, set Root Directory to Portfolio. Keep the normal `npm run build` command. Configure `NEXT_PUBLIC_SITE_URL` to the final https origin without a trailing slash, then redeploy so sitemap, canonical URL, and crawler metadata match production.

No secrets are needed. next/font requires internet at build time; fonts are self-hosted afterward. next/image optimization works with the standard Vercel Next.js runtime. Do not use a plain static file host without adapting image optimization and export settings.

This work does not overwrite the previous deployment. Preview all links and confirm the preserved résumé’s contact details are appropriate for public distribution before publishing. The source résumé is unchanged.

## Existing production project

GitHub repository: https://github.com/Mathhiass/portfolio-project (branch main).
Vercel project: portfolio-project-61ie in mathhiass-projects, on the Hobby plan.
Public address: https://kalisnt-portfolio.vercel.app/.

The redesigned application lives at the repository root. Use Next.js, Node 24.x, the default build command, and no custom output directory. NEXT_PUBLIC_SITE_URL must be https://kalisnt-portfolio.vercel.app for production. Updates to main can trigger production builds through the existing GitHub connection.

Keep deployment credentials and local .vercel state out of Git. The old Resend-backed contact endpoint is replaced by direct email links; no email API key is needed by the redesign.
