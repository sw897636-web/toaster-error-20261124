// The Funniest Toaster Error Message — entry program (v1).
// Writes one original one-line error message (1-120 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The line: a deadpan appliance error code, then the surprise — the toaster
// has been heating the same crumb since Tuesday and calls him Greg.
// No toast pun, no burnt joke; the laugh comes from the toaster treating
// a stuck crumb as a pet.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE = "ERROR E09: I have been heating the same crumb since Tuesday. I call him Greg.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
