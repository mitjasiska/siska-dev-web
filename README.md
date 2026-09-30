# siska.dev

Personal website and portfolio for Mitja Šiška.

Focused on software engineering, agentic development, developer tooling, and software systems.

Website: [https://siska.dev](https://siska.dev)

## Stack

Astro, HTML, CSS, and SVG.

## Visual identity

The visual identity reference is built at [`/design/identity`](https://siska.dev/design/identity). It documents the current hero artwork, identity mark, favicon, colors, typography, and related visual references.

## Development

```sh
npm install
npx astro dev --background
npm run build
npm run preview
```

Manage the background development server with `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop`.

## Writings

Publish by adding `writings/<slug>/README.md` with `title`, `description`, and
`published` frontmatter. Astro automatically includes it at `/writings/<slug>/`
and on the `/writings/` index. See [the publishing convention](writings/README.md)
for the exact format and image/link guidance.

## Licensing

Unless otherwise stated, source code and configuration files are MIT licensed. Original content and identity or brand assets—including logos, artwork, and graphics—are Copyright © 2026 Mitja Šiška, all rights reserved. See [LICENSE.md](LICENSE.md) for the full terms and third-party exceptions.

## Repository guidance

See [AGENTS.md](AGENTS.md) for repository-specific development guidance.
