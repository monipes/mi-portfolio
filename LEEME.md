# Portfolio de artista (gratis): Astro + Decap + Cloudflare Pages

## Probar en tu compu
npm install
npm run dev        (ver el sitio en http://localhost:4321)
npm run build      (genera /dist y el buscador)

## Lo que tenés que editar
- src/site.js: tu nombre, mail, ciudad, redes, y los textos de cada idioma.
- astro.config.mjs y public/robots.txt: cambiar TU-PROYECTO.pages.dev por tu dominio.
- public/admin/config.yml: cambiar TU-USUARIO-GITHUB/TU-REPO.
- src/pages/[lang]/contacto.astro: pegar tu formulario HTML.
- Borrar las obras de ejemplo (src/content/works/obra-*.md y public/uploads/obra-*.svg) cuando subas las tuyas.
