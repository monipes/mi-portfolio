// Datos generales: editá acá tu nombre, mail y redes
export const site = {
  name: 'Miss Sam',
  email: 'hola@tudominio.com',
  city: 'Buenos Aires, Argentina',
  social: [['Instagram','https://www.instagram.com/misssam.art/'],['Facebook','https://www.facebook.com/misssamfanpage']],
};
export const langs = ['es','en','pt'];
export const paths = langs.map(lang => ({ params: { lang } }));
export const t = {
  es:{portfolio:'Portfolio',digital:'Collage digital',animated:'Collage animado',exhibitions:'Exposiciones',shop:'Tienda',contact:'Contacto',search:'Buscar',other:'Otro idioma',theme:'Modo claro/oscuro',
    tagline:'Collage, animación e ilustración.',intro:'Fragmentos de tiempo que nunca viviste, pero que de algún modo recordás. Arte hecho en Buenos Aires.',featured:'Obras destacadas',motion:'Collage animado',all:'Ver todo',
    year:'Año',technique:'Técnica',size:'Medidas',buy:'Comprar',inquire:'Consultar por esta obra',soon:'La tienda está en construcción. Mientras tanto, escribime por cada obra.',empty:'Todavía no hay contenido acá.',newsletter:'Novedades',rights:'Todos los derechos reservados. Las imágenes no pueden copiarse ni reutilizarse.',tr:'Traducir'},
  en:{portfolio:'Portfolio',digital:'Digital collage',animated:'Motion collage',exhibitions:'Exhibitions',shop:'Shop',contact:'Contact',search:'Search',other:'Other language',theme:'Light/dark mode',
    tagline:'Collage, animation and illustration.',intro:'Fragments of time you never lived, but somehow remember. Art made in Buenos Aires.',featured:'Featured works',motion:'Motion collage',all:'View all',
    year:'Year',technique:'Technique',size:'Size',buy:'Buy',inquire:'Inquire about this work',soon:'The shop is under construction. Meanwhile, write to me about any piece.',empty:'Nothing here yet.',newsletter:'News',rights:'All rights reserved. Images may not be copied or reused.',tr:'Translate'},
  pt:{portfolio:'Portfólio',digital:'Colagem digital',animated:'Colagem animada',exhibitions:'Exposições',shop:'Loja',contact:'Contato',search:'Buscar',other:'Outro idioma',theme:'Modo claro/escuro',
    tagline:'Colagem, animação e ilustração.',intro:'Fragmentos de tempo que você nunca viveu, mas de algum jeito lembra. Arte feita em Buenos Aires.',featured:'Obras em destaque',motion:'Colagem animada',all:'Ver tudo',
    year:'Ano',technique:'Técnica',size:'Medidas',buy:'Comprar',inquire:'Perguntar sobre esta obra',soon:'A loja está em construção. Enquanto isso, escreva-me sobre cada obra.',empty:'Ainda não há conteúdo aqui.',newsletter:'Novidades',rights:'Todos os direitos reservados. As imagens não podem ser copiadas nem reutilizadas.',tr:'Traduzir'},
};

Object.assign(t.es,{menu:'Menú',lang:'Idioma',shopLink:'Ver en la tienda',years:'Años',names:'Español'});
Object.assign(t.en,{menu:'Menu',lang:'Language',shopLink:'View in the shop',years:'Years'});
Object.assign(t.pt,{menu:'Menu',lang:'Idioma',shopLink:'Ver na loja',years:'Anos'});
export const langNames = { es:'Español', en:'English', pt:'Português (BR)' };
