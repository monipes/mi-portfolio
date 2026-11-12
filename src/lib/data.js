import sizes from './imgsizes.json';
const load = (m) => Object.entries(m).map(([p, v]) => ({ slug: p.split('/').pop().replace('.md',''), ...v.frontmatter }));
export const works = () => load(import.meta.glob('../content/obras/*.md', { eager: true })).filter(w => w.published !== false).sort((a,b) => (a.order ?? 99) - (b.order ?? 99));
export const expos = () => load(import.meta.glob('../content/exposiciones/*.md', { eager: true })).sort((a,b) => String(b.start).localeCompare(String(a.start)));
export const L = (o, k, lang) => o[`${k}_${lang}`] || o[`${k}_es`] || '';
export const embed = (w) => w.youtube ? `https://www.youtube-nocookie.com/embed/${w.youtube}` : w.vimeo ? `https://player.vimeo.com/video/${w.vimeo}` : null;
const base = (s) => String(s || '').split('/').pop().replace(/\.[^.]+$/, '');
// versiones livianas generadas en el build (scripts/thumbs.mjs): 'thumb' para la grilla, 'large' para ver la obra
export const img = (src, v = 'large') => (!src || !src.startsWith('/uploads/') || /\.(svg|gif)$/i.test(src)) ? src : `/uploads/${v}/${base(src)}.webp`;
export const dim = (src) => { const s = sizes[base(src)]; return s ? { width: s[0], height: s[1] } : {}; };
