import fs from 'node:fs';
import path from 'node:path';

const directory = path.resolve('src/content/vision-alternativa');
const now = Date.now();
let published = 0;

function argentinaTimestamp(value) {
  const raw = String(value || '').trim().replace(/^['"]|['"]$/g, '');
  if (!raw) return null;
  const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(raw);
  const timestamp = Date.parse(hasTimezone ? raw : `${raw}-03:00`);
  return Number.isFinite(timestamp) ? timestamp : null;
}

function getFrontmatter(source) {
  const normalized = source.replace(/^\uFEFF/, '');
  const opening = normalized.match(/^---\r?\n/);
  if (!opening) return null;
  const bodyStart = opening[0].length;
  const rest = normalized.slice(bodyStart);
  const closing = rest.search(/\r?\n---(?:\r?\n|$)/);
  // Algunos artículos históricos no tienen delimitador YAML de cierre.
  return closing >= 0 ? rest.slice(0, closing) : rest;
}

if (!fs.existsSync(directory)) {
  console.error(`No existe el directorio de artículos: ${directory}`);
  process.exit(1);
}

for (const filename of fs.readdirSync(directory).filter((name) => name.endsWith('.md'))) {
  const fullPath = path.join(directory, filename);
  const source = fs.readFileSync(fullPath, 'utf8');
  const frontmatter = getFrontmatter(source);
  if (frontmatter === null) {
    console.log(`Omitido (sin encabezado YAML): ${filename}`);
    continue;
  }

  const publishedMatch = frontmatter.match(/^published:\s*(true|false|yes|no|1|0)\s*$/im);
  const isPublished = publishedMatch && /^(true|yes|1)$/i.test(publishedMatch[1]);
  const scheduledMatch = frontmatter.match(/^publish_at:\s*(.*?)\s*$/m);
  if (!isPublished || !scheduledMatch) continue;

  const scheduled = argentinaTimestamp(scheduledMatch[1]);
  if (scheduled === null) {
    console.log(`Fecha de programación no válida: ${filename}`);
    continue;
  }
  if (scheduled > now) continue;

  // Vaciar publish_at genera un cambio real en Git y dispara el despliegue estático.
  const updated = source.replace(/^publish_at:\s*.*$/m, 'publish_at: ""');
  if (updated !== source) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    published += 1;
    console.log(`Fecha alcanzada; activando despliegue: ${filename}`);
  }
}

console.log(`Artículos listos para publicación: ${published}`);
