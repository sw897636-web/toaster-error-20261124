// The Funniest Toaster Error Message — entry program (v3 final).
// Writes one original one-line error message (1-120 chars, no trailing newline)
// to entry.txt, deterministically, using only the Node standard library.
//
// The line: a deadpan appliance error code, then the surprise — the same
// crumb stuck inside since Tuesday, now named. v3 restores the article
// ("The same crumb") for display-message rhythm: it reads like a fault log
// entry, where v2's bare "Same crumb" sounded clipped.
// No toast pun, no burnt joke; the laugh comes from the toaster treating
// a stuck crumb as a pet.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE = "ERROR E09: CRUMB TRAY FULL. Do not empty. One of those crumbs is Greg.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
