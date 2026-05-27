# BeamMe Promo Source

This studio lane owns the source for the repo's public-facing promo reel.

It is intentionally separate from `docs/`:

- source stays in a repo-owned production lane
- rendered public assets land under `docs/assets/media/`
- public docs only point at the resulting poster/video/page, not the source tree

## Local preview

```bash
cd studio/BeamMe-promo
pnpm install
pnpm studio
```

## Render outputs

```bash
../../scripts/render_public_promo.sh
```

That script renders:

- `docs/assets/media/BeamMe-promo.mp4`
- `docs/assets/media/BeamMe-promo-poster.png`
