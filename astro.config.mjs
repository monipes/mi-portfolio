import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// CAMBIAR por tu dominio real cuando lo tengas
export default defineConfig({ site: 'https://TU-PROYECTO.pages.dev', output: 'static', trailingSlash: 'always', integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en', pt: 'pt-BR' } } })] });
