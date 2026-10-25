# Component guide

Related: [[03 - Site Architecture]], [[01 - Design System]]

## Navigation

Uses ordinary anchor links, visible focus rings, an active section marker, a mobile disclosure button with aria-expanded, and Escape to close. Theme preference is saved in localStorage. Storage failures do not block the page. A tiny head script restores the theme before the page paints.

## Project showcase

The page maps a small project array into semantic articles. Each has original media, short factual copy, category tags, and links. Update the array instead of duplicating markup. Do not add unverified technology tags.

## WorkLens

Two native buttons expose aria-pressed states. A polite live region announces the changed explanation. The adjacent link points to projects or experience depending on the selection.

## RevealMotion

An observer runs a short opacity/translation animation once when each marked element enters view. Content is visible by default. Reduced-motion users skip the observer entirely. Project screenshots also have restrained hover scaling.

## Contact

A mailto link opens the visitor’s mail application. No data is collected and no fake success state exists. Social links and the résumé come from verified source content.
