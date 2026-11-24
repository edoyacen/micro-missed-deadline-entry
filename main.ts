// This entry writes the answer for Two Days of Excuses to the output directory:
// it resolves the make.fun output directory, ensures it exists, and drops the
// answer text into entry.txt so the harness can pick it up.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'My confidence submitted the work on time. The actual work is still in a retry loop with no exit condition.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
