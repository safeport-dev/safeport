# Security policy

Safeport is a security product, and we run our own disclosure programme from day one.

## Report a vulnerability

Please [report it privately through GitHub](https://github.com/safeport-dev/safeport/security/advisories/new).
Don't open a public issue. Include the affected component, steps to reproduce and the impact you
observed.

Our target is to acknowledge reports within 5 business days. This is a target, not a guarantee. We
will keep you updated as we investigate. Safeport is an early-stage project and doesn't currently
pay bounties.

## Scope

- The code in this repository
- Workers deployed from this repository

Third-party services are out of scope. Please report issues in them to their owners.

## Good-faith research

We won't pursue action against research that:

- stays within the scope above
- avoids privacy violations, data destruction and service disruption
- only uses accounts you own or have permission to test
- gives us reasonable time to fix the issue before you publish it

Please don't run denial-of-service attacks, social engineering or automated scanning that degrades
the service.

## security.txt

We will publish an [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116) `security.txt` at
`/.well-known/security.txt` on our own domain once it is live. It will point to this policy and to a
dedicated security contact address, and we will keep its `Expires` date current.
