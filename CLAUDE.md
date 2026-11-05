# Safeport: conventions for every Claude Code session

Safeport is a low-cost, self-serve vulnerability disclosure inbox with an EU Cyber Resilience Act
(CRA) reporting clock. Claude designs, codes, tests and documents. The founder approves specs,
reviews PRs, merges and deploys.

## Commands

```sh
pnpm install     # Node 22 and pnpm through corepack
pnpm dev         # API on :8787, web on :5173
pnpm lint        # Biome; `pnpm format` applies fixes
pnpm typecheck
pnpm test
pnpm build
```

## Layout

| Path              | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `apps/web`        | React dashboard, served as Workers static assets               |
| `apps/api`        | Hono API Worker                                                |
| `apps/email`      | Email intake Worker (stub until Phase 2)                       |
| `apps/site`       | Astro marketing site, docs and free tools (stub until Phase 1) |
| `packages/shared` | Zod schemas and types                                          |
| `packages/db`     | Drizzle schema and migrations (stub)                           |
| `packages/ui`     | Design tokens and components (stub)                            |
| `packages/cra`    | CRA deadline rules as pure, fully tested functions (stub)      |
| `packages/noise`  | Beg-bounty scoring rules (stub)                                |
| `docs/adr`        | Architecture decision records                                  |

## Working loop

GitHub issue (spec) → feature branch → PR → CI → founder reviews on the preview deploy →
squash-merge → deploy.

- One feature per PR, about 400 changed lines at most. Generated files, lockfiles and licence text
  don't count.
- PR descriptions cover what, why and how to test, with screenshots for UI changes.
- Use Conventional Commits. Changesets arrive in a later PR.
- Record each big decision as an ADR in `docs/adr/`.

## Commits

- Every commit needs a DCO sign-off: `git commit -s`. Use the configured Git identity, and never
  type a name by hand. See `CONTRIBUTING.md` for the basis on which Claude adds the sign-off.
- Check `git config user.name` and `user.email` before the first commit of a session.

## Rules

- **The repo is public.** Never commit secrets, pricing, payout details or anything else private.
  Secrets live in Cloudflare and GitHub secret stores. Hosted-only config stays out of the repo.
- **Never commit `docs/HANDOFF.md`.** It is excluded locally through `.git/info/exclude`.
- **All code is open under AGPL-3.0**, including billing. See ADR 0002.
- **Never hard-code hostnames.** Read them from config: `ALLOWED_ORIGINS`, `VITE_API_URL` and the
  GitHub repository variables used by CI.
- **Keep previews away from live resources.** PRs only upload to the `preview` Wrangler environment.
  See ADR 0001.
- **Never use `pull_request_target`.** Pin GitHub Actions to full commit SHAs, and give secrets only
  to the steps that need them.
- **Design for low D1 row reads.** Free-tier limits are hard caps.

## Product wording

- Say Safeport "helps you meet" the CRA. Never say it "makes you compliant".
- CRA Article 14 reporting obligations have applied since 11 Sep 2026. Say they apply now, not that
  they are coming.
- Link every CRA screen to the official text.
