# ADR 0002: AGPL-3.0 with paid hosting

- **Status:** Accepted
- **Date:** 2026-11-05

## Context

The original plan was an open-source core plus a paid hosted version, with billing and hosted-only
configuration kept out of the public repo.

Contributions are accepted under the Developer Certificate of Origin (DCO), with no Contributor
License Agreement (CLA). Contributors therefore keep their copyright and license their work only
under the project's licence.

## Decision

**All code is open under AGPL-3.0, including billing.** Customers pay for hosting and support. There
is no proprietary code, and this is not an open-core model. Only secrets and hosted configuration
stay private.

This is a deliberate change from the original plan, confirmed by the founder on 5 Nov 2026. The
reason is that, with DCO and no CLA, private billing code combined with contributors' AGPL code could
be a problem. Keeping all code open removes that question.

The licence identifier is `AGPL-3.0-only`.

## Consequences

- Self-hosters get every feature for free. We accept this trade-off.
- Relicensing later needs the agreement of contributors. We accept this trade-off too.
- Billing code must be written to be safe in public, with all credentials held as secrets.
- Customers and researchers can audit everything we run, which suits a security product.
