# siska.dev mark

`mark.svg` is the canonical identity mark. It is a hand-authored reduction of
the `intent` (head) region in `../hero/hero-agent.svg`; the hero remains the
source of truth. The mark is not currently added to the homepage wordmark.

The reduction keeps the reflection axis, paired crown dashes, terminal elbows,
open center and stepped jaw. All corners and line endings remain square.
The violet side scans use the hero's `#7c3aed` accent; the ink is `#222226`.
There is no enclosing head outline or added facial feature.

The head was selected after browser comparisons with a head/shoulder crest
and the twin-agent torso. The shoulders made the head too small; the torso
lost the most recognizable connection to the figure.

## Sizes and usage

- Use `mark.svg` at 32px and above (64px viewBox, 4-unit strokes).
- Use `public/favicon.svg` at 16–32px. This hand-tuned specialization has
  twelve fragments on six scan levels. It drops the diagonal crown strokes,
  inner temple scans and one jaw row, and increases effective stroke weight
  by 50% to 1.5px at 16px. The split chin has a 1.5px clear gap at that size.
- The favicon adapts its ink to `#fafafa` and its violet to `#a78bfa` in dark
  browser chrome. Its geometry never changes with the color scheme.
- When using the mark inline, set the SVG's CSS `color` to change its ink.
  Its default palette is designed for the site's light background.

Both SVGs are canonical hand-authored sources for their respective sizes.
Keep their shared geometry in sync deliberately; scaling the mark alone is
not a substitute for the small-size specialization.

## ICO fallback

`public/favicon.ico` is generated from `public/favicon.svg`, with 16, 32 and
48px RGBA images in the default light palette. Regenerate it with:

```sh
npm run icons
```

The script reuses Astro's existing Sharp dependency. The document declares
only the adaptive SVG icon; the conventional `/favicon.ico` URL remains
available to clients that request it directly. No manifest or PWA is needed.

## Visual checks

The temporary Astro comparison page displayed the candidates at 128, 64, 48,
32, 24, 20 and 16px, beside the full hero, the `siska.dev` wordmark and simulated
tabs on light/dark backgrounds. The discarded candidate studies were removed
after validation; they are not alternate brand assets.

The original design is frozen at `/review/identity-r1`. Refinements are
reviewed separately at `/review/identity-r2`; `/review/identity` opens the
latest review. These local routes are excluded from the production build.
See `identity/README.md` for snapshot verification and revision provenance.
Production continues to use the assets described above until a later
revision is explicitly approved.
