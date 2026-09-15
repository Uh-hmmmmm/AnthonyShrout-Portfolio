# Local Image Assets

Drop your image files into the subfolders below. Once files are added, we will replace the remote `builder.io` URLs in the code with local paths like `/images/hero/portrait.jpg`.

Anything in `public/` is served from the site root at runtime, so `public/images/foo.jpg` becomes `/images/foo.jpg` in JSX/CSS.

## Folder layout

- `backgrounds/` — grain textures + full-bleed section backgrounds
- `hero/` — homepage hero (nameplate, portrait, star)
- `about/` — about section accent + About page photos
- `services/` — Services page hero + accents
- `reels/` — reel thumbnails + side accents
- `logos/` — client logo strip
- `prefooter/` — pre-footer decorative shapes
- `broadcasting/` — Broadcasting Credits section

See each folder's README for the specific assets it should contain and the exact filenames the code will look for.
