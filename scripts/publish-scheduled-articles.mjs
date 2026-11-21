import fs from 'node:fs';
import path from 'node:path';

const directory = path.resolve('src/content/vision-alternativa');
const now = Date.now();
let published = 0;

const parseArgentinaDateTime = (value) => {
  const raw = String(value || '').trim().replace(/^['"]|['"]$/g, '');
  if (!raw) return null;
  // The CMS picker is configured for the editor's local time. Its timezone-free
  // value is interpreted as Argentina time (UTC-3); explicit offsets are preserved.
  const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(raw);
  const timestamp = Date.parse(hasTimezone ? raw : `${raw}-03:00`);
  return Number.isFinite(timestamp) ? timestamp : null;
};

for (const filename of fs.readdirSync(directory).filter((name) => name.endsWith('.md'))) {
  const fullPath = path.join(directory, filename);
  const source = fs.readFileSync(fullPath, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) continue;

  const frontmatter = match[1];
  const isPublished = /^published:\s*(?:true|yes|1)\s*$/im.test(frontmatter);
  const scheduledMatch = frontmatter.match(/^publish_at:\s*(.*?)\s*$/m);
  if (!isPublished || !scheduledMatch) continue;

  const scheduled = parseArgentinaDateTime(scheduledMatch[1]);
  if (scheduled === null || scheduled > now) continue;

  const updated = source.replace(/^publish_at:\s*.*$/m, 'publish_at: ""');
  if (updated !== source) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    published += 1;
    console.log(`Publicación habilitada: ${filename}`);
  }
}

console.log(`Artículos programados habilitados: ${published}`);
