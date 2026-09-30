# Production typography

The site self-hosts the official `geist@1.7.2` WOFF2 files from
[Vercel's Geist release](https://github.com/vercel/geist-font/releases/tag/v1.7.2)
([package tarball](https://registry.npmjs.org/geist/-/geist-1.7.2.tgz)).
They are unchanged copies of the upstream files; no runtime font service or
font package is needed.

| File | Upstream path | Embedded version | Bytes | SHA-256 |
| --- | --- | --- | ---: | --- |
| `geist-sans-variable.woff2` | `dist/fonts/geist-sans/Geist-Variable.woff2` | 1.800 | 69,652 | `a369fcf5628ea2aa4e1b9e2ec6a5b3624e365bda588e1f0f2f12b564f728fbb8` |
| `geist-mono-variable.woff2` | `dist/fonts/geist-mono/GeistMono-Variable.woff2` | 1.700 | 71,368 | `fba8f577f38a2bbcbe818efa6348dd58f36303a10b8737c42fefad275be563ab` |

Total WOFF2 payload: **141,020 bytes** (137.7 KiB). The files support a variable
weight axis from 100 to 900; current production CSS registers Sans 400–600 and
Mono 400. Both files include Slovenian `č š ž Č Š Ž`. The original copyright notice
and full SIL Open Font License 1.1 are in [LICENSE-Geist.txt](./LICENSE-Geist.txt).
