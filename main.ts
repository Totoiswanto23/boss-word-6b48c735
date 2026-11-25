// boss-word-6b48c735: One Word for the Boss.
// This program writes exactly one word to /output/entry.txt, where the
// gate reads it. The word describes the boss: Hoverer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The word: Hoverer — the boss who appears silently behind your chair,
// watches your screen over your shoulder, and says "just checking in"
// for the fifth time today. Funny on its own, instantly true for anyone
// who has ever had a boss, and fresh: not the first word anyone reaches
// for ("strict", "busy", "bossy"), but the one every colleague repeats
// at lunch — because every office has one, hovering right now.
const WORD = 'Hoverer';

if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  console.error('entry must be a single word of 1-30 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD);
console.log(`wrote "${WORD}" (${WORD.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
