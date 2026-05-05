# Turns Green Agriculture Website

Public company website for Turns Green Agriculture Sdn Bhd (Reg. 1173251-A).

- **Planned URL:** https://turnsgreen.com.my (registered in Task 18)
- **Netlify staging:** https://thriving-longma-02e505.netlify.app
- **Hosting:** Netlify
- **Languages:** Bahasa Malaysia + English (toggle in header)
- **Tech:** Static HTML/CSS/vanilla JS — no build step

## Editing pages

Pages are plain HTML. Edit directly. Every text element has `data-en` and `data-bm` attributes; both must be updated when changing copy.

## Editing header/footer

Update `_partials/header.html` or `_partials/footer.html` first (the source of truth), then copy the new markup into every page between the `<!-- HEADER START -->` / `<!-- HEADER END -->` (or FOOTER) comment markers.

## Adding a milestone

Edit `milestones.html` — add a new `<article class="timeline-entry timeline">` block at the top of the relevant year section. Include both `data-en` and `data-bm` text.

## Local preview

    cd turnsgreen-website
    python3 -m http.server 8000
    # Open http://localhost:8000
