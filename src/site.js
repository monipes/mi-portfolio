// Datos generales: editá acá tu nombre, mail y redes
export const site = {
  name: 'Miss Sam',
  email: 'hola@tudominio.com',
  city: 'Argentina',
  social: [['Instagram','https://www.instagram.com/misssam.art/'],['Facebook','https://www.facebook.com/misssamfanpage']],
};
export const langs = ['es','en','pt'];
export const paths = langs.map(lang => ({ params: { lang } }));
export const t = {
  es:{portfolio:'Portfolio',digital:'Collage digital',animated:'Collage animado',exhibitions:'Exposiciones',shop:'Tienda',contact:'Contacto',search:'Buscar',other:'Otro idioma',theme:'Modo claro/oscuro',
    tagline:'Collage surrealista · Animación · Ilustración',intro:'Un universo visual donde la imaginación no tiene límites.',featured:'Obras destacadas',motion:'Collage animado',all:'Ver todo',
    year:'Año',technique:'Técnica',size:'Medidas',buy:'Comprar',inquire:'Consultar por esta obra',soon:'La tienda está en construcción. Mientras tanto, escribime por cada obra.',empty:'Todavía no hay contenido acá.',newsletter:'Novedades',rights:'Todos los derechos reservados. Las imágenes no pueden copiarse ni reutilizarse.',tr:'Traducir'},
  en:{portfolio:'Portfolio',digital:'Digital collage',animated:'Motion collage',exhibitions:'Exhibitions',shop:'Shop',contact:'Contact',search:'Search',other:'Other language',theme:'Light/dark mode',
    tagline:'Surreal collage · Animation · Illustration',intro:'A visual universe where imagination knows no limits.',featured:'Featured works',motion:'Motion collage',all:'View all',
    year:'Year',technique:'Technique',size:'Size',buy:'Buy',inquire:'Inquire about this work',soon:'The shop is under construction. Meanwhile, write to me about any piece.',empty:'Nothing here yet.',newsletter:'News',rights:'All rights reserved. Images may not be copied or reused.',tr:'Translate'},
  pt:{portfolio:'Portfólio',digital:'Colagem digital',animated:'Colagem animada',exhibitions:'Exposições',shop:'Loja',contact:'Contato',search:'Buscar',other:'Outro idioma',theme:'Modo claro/escuro',
    tagline:'Colagem surrealista · Animação · Ilustração',intro:'Um universo visual onde a imaginação não tem limites.',featured:'Obras em destaque',motion:'Colagem animada',all:'Ver tudo',
    year:'Ano',technique:'Técnica',size:'Medidas',buy:'Comprar',inquire:'Perguntar sobre esta obra',soon:'A loja está em construção. Enquanto isso, escreva-me sobre cada obra.',empty:'Ainda não há conteúdo aqui.',newsletter:'Novidades',rights:'Todos os direitos reservados. As imagens não podem ser copiadas nem reutilizadas.',tr:'Traduzir'},
};

Object.assign(t.es,{menu:'Menú',lang:'Idioma',shopLink:'Ver en la tienda',years:'Años',names:'Español'});
Object.assign(t.en,{menu:'Menu',lang:'Language',shopLink:'View in the shop',years:'Years'});
Object.assign(t.pt,{menu:'Menu',lang:'Idioma',shopLink:'Ver na loja',years:'Anos'});
export const langNames = { es:'Español', en:'English', pt:'Português (BR)' };

Object.assign(t.es,{about:'Acerca de',viewExpo:'Ver exposiciones',viewWorks:'Ver trabajos',top:'Subir',home:'Inicio',prev:'Anterior',next:'Siguiente',more:'Seguir viendo',crumbs:'Ruta de navegación'});
Object.assign(t.en,{about:'About',viewExpo:'See exhibitions',viewWorks:'See works',top:'Back to top',home:'Home',prev:'Previous',next:'Next',more:'Keep browsing',crumbs:'Breadcrumb'});
Object.assign(t.pt,{about:'Sobre',viewExpo:'Ver exposições',viewWorks:'Ver trabalhos',top:'Voltar ao topo',home:'Início',prev:'Anterior',next:'Próxima',more:'Continuar vendo',crumbs:'Caminho de navegação'});

Object.assign(t.es,{close:'Cerrar',pause:'Pausar las obras que cambian',play:'Reanudar las obras que cambian'});
Object.assign(t.en,{close:'Close',pause:'Pause the changing artworks',play:'Resume the changing artworks'});
Object.assign(t.pt,{close:'Fechar',pause:'Pausar as obras que mudam',play:'Retomar as obras que mudam'});

Object.assign(t.es,{viewWork:'Ver la obra',moreInfo:'Más información'});
Object.assign(t.en,{viewWork:'View the work',moreInfo:'More information'});
Object.assign(t.pt,{viewWork:'Ver a obra',moreInfo:'Mais informações'});

Object.assign(t.es,{expoVideos:'Videos de esta exposición'});
Object.assign(t.en,{expoVideos:'Videos from this exhibition'});
Object.assign(t.pt,{expoVideos:'Vídeos desta exposição'});

Object.assign(t.es,{title:'Realidades imaginadas',homeTitle:'Miss Sam · Collage surrealista, animación e ilustración',homeDesc:'Miss Sam, artista visual peruana radicada en Argentina. Collage surrealista, collage animado e ilustración: un universo visual donde la imaginación no tiene límites.'});
Object.assign(t.en,{title:'Imagined realities',homeTitle:'Miss Sam · Surreal collage, animation and illustration',homeDesc:'Miss Sam, Peruvian visual artist based in Argentina. Surreal collage, animated collage and illustration: a visual universe where imagination knows no limits.'});
Object.assign(t.pt,{title:'Realidades imaginadas',homeTitle:'Miss Sam · Colagem surrealista, animação e ilustração',homeDesc:'Miss Sam, artista visual peruana radicada na Argentina. Colagem surrealista, colagem animada e ilustração: um universo visual onde a imaginação não tem limites.'});

Object.assign(t.es,{contactDesc:'Escribile a Miss Sam: consultas sobre obras, exposiciones y colaboraciones. Artista visual peruana radicada en Argentina.'});
Object.assign(t.en,{contactDesc:'Write to Miss Sam: inquiries about artworks, exhibitions and collaborations. Peruvian visual artist based in Argentina.'});
Object.assign(t.pt,{contactDesc:'Escreva para a Miss Sam: consultas sobre obras, exposições e colaborações. Artista visual peruana radicada na Argentina.'});


// Sección AI Motion
Object.assign(t.es,{aiMotion:'AI Motion',comingSoon:'Muy pronto. Esta sección está en preparación.'});
Object.assign(t.en,{aiMotion:'AI Motion',comingSoon:'Coming soon. This section is in preparation.'});
Object.assign(t.pt,{aiMotion:'AI Motion',comingSoon:'Em breve. Esta seção está em preparação.'});
