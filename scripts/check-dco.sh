#!/usr/bin/env bash
# Fails unless every non-merge commit in BASE..HEAD is signed off by its author.
set -euo pipefail

base="$1"
head="$2"
failed=0

for commit in $(git rev-list --no-merges "$base..$head"); do
  expected="Signed-off-by: $(git show -s --format='%an <%ae>' "$commit")"
  if ! git show -s --format='%B' "$commit" | grep -qxF "$expected"; then
    echo "::error::$commit has no matching sign-off. Expected: $expected"
    failed=1
  fi
done

if [ "$failed" -ne 0 ]; then
  echo "Fix with: git rebase --signoff $base, then force-push. See CONTRIBUTING.md."
  exit 1
fi

echo "All commits are signed off."
