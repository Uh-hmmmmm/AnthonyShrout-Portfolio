# Fonts

Drop your local font files here. Anything in `public/` is served from the site root, so `public/fonts/foo.ttf` is available at `/fonts/foo.ttf`.

## Fonts the site currently references

Declared in `client/global.css`:

| Suggested filename | `@font-face` family |
| --- | --- |
| `evolve-early.ttf` | `Evolve Early Local` (falls back to a system `Evolve Early` if installed locally) |
| `old-english-text-mt.ttf` | `Old English Local` (falls back to system `Old English Text MT`) |

Also loaded from Google Fonts (no local files needed unless you want to self-host):
- Arimo (400, 500, 700, 900 + 400 italic)
- Anton (400)
- UnifrakturMaguntia (400)

If you'd like to self-host the Google fonts too, drop `.woff2` files here and I can rewire `global.css` to use them instead of the Google CDN.
