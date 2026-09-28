## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Visual identity

The visual identity reference is published at `https://siska.dev/design/identity`. Before significant UI, layout, or visual work, inspect it in this order:

1. With browser-capable tools, start or reuse the local Astro dev server and inspect `/design/identity`. Prefer the local rendered page because it reflects the working tree, including uncommitted changes.
2. If local rendered inspection is unavailable, inspect the published reference when browser/web access is available.
3. If rendered inspection is unavailable entirely, inspect the identity page source, production CSS/design tokens, Geist font configuration, SVG identity assets, and hero artwork/components.

Only claim visual/browser validation when the rendered page was actually inspected. Treat the reference and assets labeled `CURRENT / APPROVED` as the current `siska.dev` baseline; extend this visual language rather than inventing a separate one. Historical `/review/...` pages are not current design sources.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
