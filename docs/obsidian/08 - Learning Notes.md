# Learning notes

Related: [[04 - Component Guide]], [[03 - Site Architecture]]

A server component is rendered before the browser receives the page. Biography and projects do not need browser state, so they stay in app/page.tsx. A client component runs interactive behavior: menu open/closed, selected work lens, and theme preferences.

CSS variables act like a shared paint box. Changing the theme changes the variable values rather than duplicating every layout rule. Media queries rearrange columns for narrow screens; they do not remove content.

TypeScript catches mistakes before deployment. A production build checks that Next.js can generate all routes. Lint looks for problematic coding patterns. Browser inspection catches things those tools cannot see: wrapping, cropping, overlap, keyboard behavior and contrast.

The work lens is state: React remembers which button you chose and renders matching text. IntersectionObserver asks the browser when content enters the screen. Web Animations moves only opacity and position, avoiding expensive layout work.

A mailto link delegates email to the visitor’s installed mail app. Unlike a form with a fake success message, it makes no claim that a message has been sent.

Small readable components beat unnecessary abstraction. Ponytail full mode means removing avoidable complexity while preserving accessibility, functional behavior and verification. It does not mean compressing code into unreadable lines.
