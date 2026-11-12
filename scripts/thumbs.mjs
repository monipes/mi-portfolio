// Genera versiones livianas de cada imagen de public/uploads (no toca los originales)
import fs from 'node:fs'; import path from 'node:path';
let sharp; try { sharp = (await import('sharp')).default; } catch { console.log('[thumbs] sharp no disponible: se omite'); process.exit(0); }
const dir = 'public/uploads', V = { thumb: 900, large: 2000 }, sizes = {};
for (const v of Object.keys(V)) fs.mkdirSync(path.join(dir, v), { recursive: true });
for (const f of fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f))) {
  const base = f.replace(/\.[^.]+$/, '');
  try {
    for (const [v, w] of Object.entries(V)) {
      const out = path.join(dir, v, base + '.webp');
      if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(path.join(dir, f)).mtimeMs)
        await sharp(path.join(dir, f)).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: v === 'thumb' ? 78 : 84 }).toFile(out);
    }
    const m = await sharp(path.join(dir, 'large', base + '.webp')).metadata(); sizes[base] = [m.width, m.height];
  } catch (e) { console.log('[thumbs] error con', f, e.message); }
}
fs.writeFileSync('src/lib/imgsizes.json', JSON.stringify(sizes));
console.log('[thumbs] listo:', Object.keys(sizes).length, 'imágenes');
