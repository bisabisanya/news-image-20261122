// news-image-20261122 entry (Node 22, standard library only).
//
// The entry is a newspaper-style graphic that sums up the world's news of
// Sunday 22 November 2026 (COP31 collapses, Iran strikes US bases in
// Bahrain, the Trump-Xi-Putin summit, 'El Chapo Isidro' captured, a Russian
// missile on Kryvyi Rih, and a global stock sell-off). The image is drawn
// with PIL, so every word is real, readable text. This program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied. No
// network, fully deterministic: every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
