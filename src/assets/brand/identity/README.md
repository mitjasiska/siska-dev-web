# Identity revisions

These assets are for local review. Production still uses `../mark.svg` and
`public/favicon.svg` / `public/favicon.ico`, unchanged from R1.

## Review URLs

- `/review/identity-r1` — permanent Revision 1 presentation.
- `/review/identity-r2` — three controlled refinements and direct comparisons.
- `/review/identity` — redirects to the latest review (currently R2).

The routes exist in the development server. They produce no static paths in
the production build. Keep the revision URLs and their assets when iterating.

## Frozen R1

`r1/` contains byte-for-byte snapshots of the original mark, favicon SVG,
generated ICO, hero reference and review-page source. `snapshot.json` records
their original locations and SHA-256 hashes. Its `.gitattributes` prevents
Git line-ending conversion from changing these historical bytes.

Do not edit, regenerate or optimize R1 files. `IdentityR1.astro` renders only
these frozen assets, preserving the original samples, styles and explanatory
text, with revision labeling and navigation added around them. Verify with:

```sh
node scripts/verify-identity-r1.mjs
```

## R2 experiments

Each variant has its own `mark-*.svg` and `favicon-*.svg`. The marks use a 64px
viewBox and 4-unit strokes; their favicons use a separate 32px geometry and
3-unit strokes. The favicon gaps and lower structure are tuned separately.
All three retain the R1 palettes, square caps, reflection symmetry and an
open center. The SVGs are hand-authored sources, not generated exports.

| Variant | Controlled change | Review result |
| --- | --- | --- |
| A — structured silhouette | Broaden the split crown; lengthen the hero's terminal elbows into straighter sides; articulate the jaw in separate steps. No new internal feature. | **Recommended R2.** The top and jaw remain distinct at 16–32px without adding a face. |
| B — articulated scan head | Retain the original crown slashes and inward lower elbows. Black side scans establish the contour; violet moves one step inward. The favicon drops the separate chin row to keep gaps open. | Closer to the hero's full punctuation vocabulary, but denser and more radial at small sizes. |
| C — forehead scan signal | Keep A's contour and move violet to the paired inner forehead scan at source INTENT y98, x296–305 / x335–344. The former side signal becomes ink. | The extra scan competes with the crown and adds a facial reading. Kept as a visible comparison, not recommended. |

The source correspondence is documented next to each SVG's simple paths.
No conventional eyes, visor panel, outer enclosure or lettermark was added.
The broad crown and terminal proportions in A are deliberately stronger than
the original drawing to survive the browser-tab size; that tradeoff remains
for human review. Do not promote an R2 candidate without approval.
