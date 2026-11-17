import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
// Cuando conectes tu dominio propio (por ejemplo misssam.com.ar), cambiá esta dirección, public/robots.txt y public/llms.txt
const SITE = 'https://mi-portfolio-2au.pages.dev';
// imágenes de cada obra para el mapa del sitio (ayuda a Google Imágenes)
const works = {};
for (const f of fs.readdirSync('./src/content/obras')) {
  if (!f.endsWith('.md')) continue;
  const s = fs.readFileSync('./src/content/obras/' + f, 'utf8');
  const g = (k) => ((s.match(new RegExp('^' + k + ': (.*)$', 'm')) || [])[1] || '').trim().replace(/^"|"$/g, '');
  works[f.replace('.md', '')] = { image: g('image'), title: g('title_es'), alt: g('alt_es') };
}
const large = (p) => (p && p.startsWith('/uploads/') && !/\.(svg|gif)$/i.test(p)) ? '/uploads/large/' + p.split('/').pop().replace(/\.[^.]+$/, '') + '.webp' : p;
export default defineConfig({
  site: SITE, output: 'static', trailingSlash: 'always',
  integrations: [sitemap({
    i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en', pt: 'pt-BR' } },
    serialize(item) {
      const m = item.url.match(/\/(?:es|en|pt)\/obra\/([^/]+)\/$/);
      if (m && works[m[1]] && works[m[1]].image) { const w = works[m[1]]; item.img = [{ url: SITE + large(w.image), title: w.title, caption: w.alt }]; }
      return item;
    },
  })],
});
