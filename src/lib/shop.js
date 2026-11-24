import settings from '../data/tienda.json';
const load = (m) => Object.entries(m).map(([p, v]) => ({ slug: p.split('/').pop().replace('.md',''), ...v.frontmatter }));
export const shopSettings = settings;
export const products = () => load(import.meta.glob('../content/productos/*.md', { eager: true }))
  .filter(p => p.published !== false)
  .sort((a,b) => (a.order ?? 999) - (b.order ?? 999));
export const shopCategories = () => load(import.meta.glob('../content/categorias-tienda/*.md', { eager: true }))
  .filter(c => c.published !== false)
  .sort((a,b) => (a.order ?? 999) - (b.order ?? 999));
