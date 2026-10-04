#!/usr/bin/env node
// Controlla le illustrazioni in assets/ill/ rispetto a assets/ill/manifest.json
// (esistenza, formato WebP, dimensioni esatte, peso). Nessuna dipendenza.
//   node tools/check-illustrations.mjs            controlla quelle presenti, avvisa su quelle mancanti
//   node tools/check-illustrations.mjs --strict   fallisce se ne manca qualcuna
import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'assets', 'ill');
const man = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
const strict = process.argv.includes('--strict');

function webpSize(b) {
  if (b.length < 30 || b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const t = b.toString('ascii', 12, 16);
  if (t === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff, kind: 'lossy' };
  if (t === 'VP8L') { const v = b.readUInt32LE(21); return { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1, kind: 'lossless' }; }
  if (t === 'VP8X') return { w: b.readUIntLE(24, 3) + 1, h: b.readUIntLE(27, 3) + 1, kind: 'extended', alpha: !!(b[20] & 0x10) };
  return null;
}

let bad = 0, missing = 0, ok = 0;
for (const im of man.images) {
  const f = join(dir, im.name + '.webp');
  if (!existsSync(f)) { console.log(`·  ${im.name}.webp  mancante`); missing++; continue; }
  const buf = readFileSync(f), kb = Math.round(statSync(f).size / 1024), s = webpSize(buf), errs = [];
  if (!s) errs.push('non è un WebP valido');
  else {
    if (s.w !== im.w || s.h !== im.h) errs.push(`dimensioni ${s.w}×${s.h}, attese ${im.w}×${im.h}`);
    if (s.alpha) errs.push('ha trasparenza: serve uno sfondo pieno');
  }
  if (kb > man.maxKB) errs.push(`pesa ${kb} KB (massimo ${man.maxKB})`);
  if (errs.length) { console.log(`✗  ${im.name}.webp  ${errs.join('; ')}`); bad++; }
  else { console.log(`✓  ${im.name}.webp  ${s.w}×${s.h}  ${kb} KB${kb > man.targetKB ? '  (sopra i ' + man.targetKB + ' KB consigliati)' : ''}`); ok++; }
}
console.log(`\n${ok} ok, ${bad} da correggere, ${missing} mancanti su ${man.images.length}`);
process.exit(bad || (strict && missing) ? 1 : 0);
