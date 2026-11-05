# ADR 0003: TypeScript monorepo

- **Status:** Accepted
- **Date:** 2026-11-05

## Context

Safeport has several deployable apps that share schemas, a design system and domain rules. One
founder reviews every change in limited weekly hours, so boundaries must be clear and mismatches
between browser and server should be impossible by construction.

## Decision

- Use strict TypeScript everywhere, in one repo with pnpm workspaces and Turborepo.
- Put deployables in `apps/` and shared code in `packages/`.
- Define data shapes once as Zod schemas in `packages/shared`.
- Internal packages export TypeScript source directly, with no build step of their own.
- Use Biome for lint and format, and Vitest for tests.

## Consequences

- One schema change is checked across every app in the same PR.
- Bundlers compile internal packages, so they stay simple, but they can't be published as they are.
- Packages that aren't built yet exist as stubs, so the layout is settled from the start.
