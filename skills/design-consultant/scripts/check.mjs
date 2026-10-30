#!/usr/bin/env node
// The browser check for design-consultant: runs inspect.mjs with the taste skill's
// taste-only rules switched off, so findings cover conventions and the floor only.
//   node check.mjs <url | path/to/index.html> --out DIR [--app] [--widths 1440,768,390] [--allow rule,rule]
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TASTE_ONLY = [
  'eyebrow', 'micro-label', 'mono', 'numbering', 'outlined-box', 'hairline', 'dashed', 'heavy-borders',
  'icon-cards', 'icon-chips', 'icon-tiles', 'card-rows', 'gradient', 'gradient-text', 'shadow', 'heavy-shadow',
  'text-shadow', 'glass', 'pill-nav', 'button-fx', 'radius-mix', 'emoji', 'blend-text', 'default-link',
  'palette-claude', 'palette-purple', 'palette-terracotta', 'palette-cream', 'colour-sprawl',
  'font-count', 'font-not-dealt', 'mixed-font-headline', 'size-count', 'focal-point', 'hero-words', 'hero-void',
  'no-hero', 'one-sided-bleed', 'still-page', 'few-pictures', 'no-real-pictures', 'no-footage', 'no-poster',
  'scene-not-started', 'scene-not-live', 'many-scenes', 'scene-heavy', 'long-pin', 'pinned-over-picture',
];

const args = process.argv.slice(2);
const i = args.indexOf('--allow');
if (i >= 0) args[i + 1] = [...TASTE_ONLY, ...String(args[i + 1] || '').split(',')].filter(Boolean).join(',');
else args.push('--allow', TASTE_ONLY.join(','));
const r = spawnSync(process.execPath, [join(dirname(fileURLToPath(import.meta.url)), 'inspect.mjs'), ...args], { stdio: 'inherit' });
process.exit(r.status ?? 1);
