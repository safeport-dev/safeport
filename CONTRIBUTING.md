# Contributing

Thanks for helping. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) first, and report security
issues through [SECURITY.md](SECURITY.md), not public issues.

## Sign off your commits (DCO)

We use the [Developer Certificate of Origin](https://developercertificate.org/) (DCO), not a
Contributor License Agreement. By signing off, you certify that you have the right to submit your
work under the project's licence, AGPL-3.0-only.

```sh
git commit -s
```

This adds a line to the commit message, using your Git name and email:

```text
Signed-off-by: Your Name <you@example.com>
```

The sign-off must match the commit author. CI checks every commit in a PR. To fix a missing sign-off,
run `git commit --amend -s` or `git rebase --signoff main`, then force-push your branch.

Because there is no CLA, you keep the copyright in your contribution. Relicensing the project later
would need contributors' agreement. See [ADR 0002](docs/adr/0002-agpl-with-paid-hosting.md).

### Commits prepared by Claude Code

Much of this project's code is written with Claude Code, and those commits carry a `Co-Authored-By`
line. The maintainer has authorised Claude Code to add the maintainer's sign-off, using their
configured Git name and email, on the basis that the maintainer reviews each commit before merging.
An AI tool can't make the DCO certification itself, so the certification is the maintainer's.

Other contributors who use AI tools remain responsible for what they sign off.

## Pull requests

1. Open or find an issue that describes the change.
2. Work on a feature branch.
3. Keep to one feature per PR and about 400 changed lines. Generated files, lockfiles and licence
   text don't count.
4. Use [Conventional Commits](https://www.conventionalcommits.org/).
5. Explain what changed, why and how to test it, with screenshots for UI changes.
6. Run `pnpm lint`, `pnpm typecheck` and `pnpm test` before you push.

PRs are squash-merged, and the sign-offs are kept in the squash commit message. PRs from forks get
checks but no preview deploy, because previews need secrets that forks can't access.
