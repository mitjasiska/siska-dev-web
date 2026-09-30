# Publishing writings

Each writing lives in `writings/<slug>/README.md`. This is the canonical source
on GitHub and on the website. This guide is not published as a writing.

To publish, create a folder with a stable lowercase, hyphen-separated name
(for example, `my-paper`), then add a `README.md` with these three required
YAML frontmatter fields:

```markdown
---
title: "Your writing's title"
description: "A short description of the writing."
published: 2026-09-29
---

Opening paragraph.

## First section

Write ordinary Markdown here.
```

Use a publication date in `YYYY-MM-DD` format. The website supplies the page
title and description from frontmatter, so start the body with an opening
paragraph and use `##` for its main sections. GitHub displays the frontmatter
above the Markdown body.

Astro discovers these files automatically and builds `/writings/<slug>/`.
The `/writings/` index lists them newest first. No registry or per-writing
Astro page is needed. Every matching README is published, regardless of date;
there is no draft or scheduling workflow. Keep the folder name unchanged to
preserve its URL.

Use normal Markdown for links, lists, code, blockquotes, and tables. Put images
alongside the README and reference them relatively, such as
`![Descriptive alt text](./diagram.png)`, so they work both on GitHub and through
Astro's image pipeline. Use absolute HTTPS links for external destinations
and other writings, and `#section-heading` links for sections within a writing;
relative links to other Markdown files are not rewritten to website routes.

Run `npm run build` to validate metadata and rendering, then commit the README
and any images. Corrections are ordinary Git edits; no version or revision
metadata is needed. With no writing folders, the index shows an empty state.
