# Client self-edit backend — the reusable template

What this is: a WordPress-style edit panel for a static Astro site, **no lock-in**
(everything is a git repo the client owns), near-zero running cost (Cloudflare
free tier), and the client physically cannot break the design — they edit
structured fields only.

Built once on Sparky AU; every future client site inherits it by following the
checklist below (~20 min/client once the accounts exist).

## Architecture

```
client edits at /keystatic  ──commit──▶  GitHub repo  ──push──▶  GitHub Action
(admin Worker, server-rendered)                                   builds static site
                                                                  └─▶ wrangler pages deploy
                                                                      (public site, CDN-static)
```

Two build targets, one codebase (`astro.config.mjs`):

| Target | Command | Output | Hosts |
|---|---|---|---|
| Public site | `npm run build` | pure static, **no** Keystatic/React | Cloudflare Pages (via CI) |
| Admin | `CF_DEPLOY=1 npx astro build` | site + `/keystatic` editor, Workers format | Cloudflare Worker (`wrangler deploy --config wrangler.admin.jsonc`) |

The public site stays 100% static (perf untouched); the editor lives on a
separate Worker URL you give only to the client.

Editable content lives in `src/data/*.json`, defined field-by-field in
`keystatic.config.ts`. Pages read the JSON; the schema is the guardrail —
expose business facts (name/phone/hours/prices/SEO title+meta), never layout.

## Per-client setup checklist

Prereqs (once, already done): Cloudflare account + `workers.dev` subdomain,
GitHub account/org that owns client repos, `CLOUDFLARE_API_TOKEN` with
Pages:Edit + Workers:Edit.

1. **Repo**: clone this template → new private repo `<client>` (client can be
   added as collaborator/owner later — that's the no-lock-in promise).
2. **Content**: point `keystatic.config.ts` `storage.repo` at the new repo;
   fill `src/data/business.json`; update `ui.brand.name`.
3. **GitHub App** (the editor's login): GitHub → Settings → Developer settings
   → New GitHub App: permissions Contents RW + Metadata R on the client repo
   only; callback URLs = `http://127.0.0.1:4321/api/keystatic/github/oauth/callback`
   (dev) **and** `https://<client>-admin.<subdomain>.workers.dev/api/keystatic/github/oauth/callback`.
   Put CLIENT_ID / CLIENT_SECRET / a random KEYSTATIC_SECRET (`openssl rand -hex 32`)
   + `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` in `.env` (gitignored). Keystatic's
   "Set up with GitHub" flow at `/keystatic` can create the App for you.
4. **Public site**: create the Pages project
   (`npx wrangler pages deploy dist --project-name=<client>` once), then add
   repo secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` and set the
   project name in `.github/workflows/deploy.yml`. Every commit now auto-deploys.
5. **Admin worker**: in `wrangler.admin.jsonc` set `name: <client>-admin`,
   create a KV namespace (`npx wrangler kv namespace create SESSION`) and paste
   its id, set the app slug in `vars`. Then:
   `CF_DEPLOY=1 npx astro build && npx wrangler deploy --config wrangler.admin.jsonc`
   and push the three secrets:
   `for S in KEYSTATIC_GITHUB_CLIENT_ID KEYSTATIC_GITHUB_CLIENT_SECRET KEYSTATIC_SECRET; do npx wrangler secret put $S --config wrangler.admin.jsonc; done`
6. **Verify the loop** (never skip): open `https://<client>-admin...workers.dev/keystatic`,
   log in, change a field, save → check the commit lands on GitHub → check the
   Action goes green → see the change on the live Pages URL (~90 s end to end).

## Gotchas already solved here (don't rediscover)

- **`/api/keystatic` 500 on Cloudflare**: `@keystatic/astro` (≤5.2.0) reads
  `Astro.locals.runtime.env`, whose getter *throws* on Astro v6+'s CF adapter.
  Fixed by the project route `src/pages/api/keystatic/[...params].ts`, which
  overrides the injected route and feeds env from `cloudflare:workers`. The
  build's "route defined in both" warning is that override working — leave it
  until Keystatic ships a fix, then delete the file.
- **Dev runs adapterless**: `npm run dev` with `ADMIN=1` uses Node, because
  Keystatic's GitHub setup crashes under workerd locally.
- **Worker needs `nodejs_compat`** + a `SESSION` KV binding (Astro sessions).
- **`PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`** is baked at build time — it must be in
  `.env` when you run the admin build, and in `vars` for good measure.

## What the client can edit (the pitch)

Business details, phone, licence, rating, years trading, homepage SEO
title/description — via a clean panel, from any browser, no code. Adding more
editable content (services, prices, testimonials, gallery) = adding fields in
`keystatic.config.ts` + reading the JSON in the page. Design, layout, and
performance stay locked. Their site, their repo, their content — if they ever
leave, they take all of it.
