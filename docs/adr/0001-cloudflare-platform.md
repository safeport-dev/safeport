# ADR 0001: Build on Cloudflare, using Workers rather than Pages

- **Status:** Accepted
- **Date:** 2026-11-05

## Context

Safeport must be free to run while it earns nothing, always on, usable commercially and EU-friendly.
Vercel Hobby and GitHub Pages don't allow commercial use, and an always-on server has no reliable
free host.

The original plan put the dashboard and marketing site on Cloudflare Pages. Cloudflare now says: ["If
you are starting a new project, use Workers instead of Pages."](https://developers.cloudflare.com/workers/best-practices/workers-best-practices/)

## Decision

- Run everything on Cloudflare's developer platform, starting on `*.workers.dev`.
- Serve `apps/web`, and later `apps/site`, as [Workers static assets](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) instead of Pages.
- Read every hostname from config, so a custom domain needs no code change.
- Deploy to live on merge to `main` for now. Add a staging environment and promotion by release tag
  before Phase 2, when real data arrives.
- Give PR previews their own Workers (`safeport-api-preview`, `safeport-web-preview`) through a
  `preview` Wrangler environment. Turn version URLs off on the live Workers.

## Consequences

- **Preview isolation.** [Version URLs](https://developers.cloudflare.com/workers/configuration/previews/) run against a Worker's existing resources and
  are public. Separate preview Workers stop a PR reaching live data once D1 and R2 exist. Preview
  Workers must never be bound to production resources.
- **Durable Objects.** Version URLs aren't generated for a Worker that implements a Durable Object.
  We plan to put CRA clock Durable Objects in a separate Worker, so `apps/api` keeps its previews.
  Confirm this with a spike before the first Durable Object lands.
- **Forks.** PRs from forks get checks but no preview, because they have no access to secrets.
- **Single-page routing.** Workers needs `not_found_handling` set explicitly. Pages inferred it.

## Follow-up: custom domains (before Phase 2)

Workers [doesn't support domains whose nameservers aren't managed by Cloudflare](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/). Our own domain
can use Cloudflare's nameservers, but customers' disclosure pages on their own domains are in the
MVP, and customers won't move their nameservers for us.

Evaluate the options, including Cloudflare for SaaS, and record the result in a new ADR before
Phase 2 starts. Tracked in issue #1.
