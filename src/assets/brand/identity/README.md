# Historical identity experiments

The current approved production sources are `../mark.svg`,
`public/favicon.svg`, and `public/favicon.ico`. The living visual reference is
`/design/identity` in the dev server; it is excluded from production builds.
The old `/review/identity` development URL redirects there.

`r1/mark.svg` and `r1/favicon.svg` preserve the original production mark and
favicon. `r2/` retains the three hand-authored study pairs (A, B, C). R2-A
and R2-B remain experiments. R2-C was selected and copied, without geometry
changes, to the canonical production paths above. The historical files are
provenance; new implementation should use the canonical paths.

The former `/review/identity-r1` and `/review/identity-r2` routes are no longer
live. The fuller committed R1 snapshot, original comparison pages, and their
verifier remain recoverable in Git history at checkpoint `f66bdd4`.
