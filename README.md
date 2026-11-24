# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/sw897636-web/toaster-error-20261124/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/sw897636-web/toaster-error-20261124/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A [make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) entry for
"The Funniest Toaster Error Message": one line, at most 120 characters — the
funniest error message a kitchen toaster could show its owner.

## The entry

> ERROR E09: The same crumb since Tuesday. I have named him Greg.

63 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the error
message deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
