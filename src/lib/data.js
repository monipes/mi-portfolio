const load = (m) => Object.entries(m).map(([p, v]) => ({ slug: p.split('/').pop().replace('.md',''), ...v.frontmatter }));
export const works = () => load(import.meta.glob('../content/works/*.md', { eager: true })).filter(w => w.published !== false).sort((a,b) => (a.order ?? 99) - (b.order ?? 99));
export const expos = () => load(import.meta.glob('../content/expos/*.md', { eager: true })).sort((a,b) => String(b.start).localeCompare(String(a.start)));
export const L = (o, k, lang) => o[`${k}_${lang}`] || o[`${k}_es`] || '';
export const embed = (w) => w.youtube ? `https://www.youtube-nocookie.com/embed/${w.youtube}` : w.vimeo ? `https://player.vimeo.com/video/${w.vimeo}` : null;
