import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const snapshot = new URL('../src/assets/brand/identity/r1/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('snapshot.json', snapshot), 'utf8'));

for (const { file, sha256 } of manifest.files) {
  const bytes = await readFile(new URL(file, snapshot));
  const actual = createHash('sha256').update(bytes).digest('hex').toUpperCase();
  assert.equal(actual, sha256, `Frozen R1 asset changed: ${file}. Restore it; refine R2 instead.`);
}

console.log(`Verified ${manifest.files.length} exact Revision 1 snapshots.`);
