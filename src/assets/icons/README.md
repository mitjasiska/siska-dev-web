# Social brand marks

Local SVGs for the homepage's GitHub, LinkedIn, and X links. These are external
brand marks, separate from the siska.dev identity. No icon package is required.

Sources retrieved on 2026-09-28:

- `github.svg`: `GitHub Logos/SVG/GitHub_Invertocat_Black.svg` from the
  [official GitHub brand toolkit](https://brand.github.com/foundations/logo)
  ([download](https://brand.github.com/GitHub_Logos.zip)).
- `linkedin.svg`: the `inbug-blue-21` SVG symbol published in the
  [official LinkedIn brand downloads page](https://brand.linkedin.com/downloads).
  The downloadable standalone [in] bundle contains PNGs, so this uses LinkedIn's
  own web SVG. Its original path is wrapped in a 21 × 21 SVG viewBox.
- `x.svg`: `logo.svg` from the
  [official X brand toolkit](https://about.x.com/en/who-we-are/brand-toolkit)
  ([download](https://about.x.com/content/dam/about-twitter/x/brand-toolkit/x-logo.zip)).

Path geometry is unchanged. Brand fills are normalized to `currentColor` for
the monochrome links. GitHub's clip-path ID is namespaced; LinkedIn's global
style class is replaced with a fill attribute. Dimensions and accessibility
attributes are supplied by `SiteHeader.astro`.

The marks remain trademarks of their respective owners. Refer to their source
pages for brand usage guidance. All three homepage URLs intentionally remain
`/` until the real profile URLs are supplied.
