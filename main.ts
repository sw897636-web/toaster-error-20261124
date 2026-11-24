// The Funniest Toaster Error Message — entry program (v2).
// Writes one original one-line error message (1-120 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The line: a deadpan appliance error code, then the surprise — the same
// crumb stuck inside since Tuesday, now named. Cut the v1 filler ("I have
// been heating", "I call him"): "I have named him" is the funnier, more
// committed verb, and the fault report is tighter without it.
// No toast pun, no burnt joke; the laugh comes from the toaster treating
// a stuck crumb as a pet.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE = "ERROR E09: Same crumb since Tuesday. I have named him Greg.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
