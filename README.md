# Safeport

A low-cost, self-serve vulnerability disclosure inbox for small software and IoT companies selling
into the EU, with a reporting clock that helps you meet the EU Cyber Resilience Act (CRA).

**Status:** early development. There is no usable product yet.

## What it will do

- Put a disclosure page, `security.txt` and an intake inbox live in 15 minutes
- Filter out beg-bounty noise with transparent rules
- Show a visible 24h / 72h / final-report countdown for actively exploited issues
- Keep an append-only audit log that customers can see and export

## Develop

You need Node 22 and pnpm through corepack.

```sh
pnpm install
pnpm dev        # API on http://localhost:8787, web on http://localhost:5173
pnpm lint
pnpm typecheck
pnpm test
```

Architecture decisions are in [`docs/adr`](docs/adr).

## Contribute and report

- [Contributing](CONTRIBUTING.md): commits need a DCO sign-off
- [Security policy](SECURITY.md): please report vulnerabilities privately
- [Code of Conduct](CODE_OF_CONDUCT.md)

## Licence

Copyright (C) 2026 The Safeport contributors.

All code is open source under the [GNU Affero General Public License v3.0 only](LICENSE). The paid
service is hosting and support; see [ADR 0002](docs/adr/0002-agpl-with-paid-hosting.md).
