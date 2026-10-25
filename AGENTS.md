# Kali.Dev conventions

Keep changes inside this project. Preserve verified content; never invent dates, availability, technologies, metrics or testimonials. Do not modify the separate Oliver/Portfolio notes without a direct request.

Use the design-taste-frontend skill for visual work. Retain the name-as-monument direction, responsive compositions, two themes, accessible controls, and reduced-motion support. Apply Ponytail full guidance: native features first, no gratuitous dependencies or abstraction, readable formatting, preserve validation and accessibility. The plugin’s automatic hooks require separate user trust; read its skill if hooks are unavailable.

Default to server components; isolate state in components/interactions.tsx. Project content belongs in app/page.tsx. Visual tokens belong in app/globals.css. Use next/image, next/font, semantic HTML and actual links.

Run lint, typecheck and build. For visual changes inspect production at 1440, 768 and 390px and check keyboard, menu, theme and work lens. Do not claim unrun checks.

Update docs/obsidian/06 - Development Log.md for material changes and link related notes with Obsidian wikilinks. Source code stays in the application, not the notes. Before deployment set NEXT_PUBLIC_SITE_URL and verify public contact/resume details.
