// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://romequinco.github.io',
  trailingSlash: 'always',
  // one less request before first paint: the CSS goes inside each page
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // the CV is not linked from the site for now
      filter: (page) => !/\/cv\/$/.test(page),
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
    }),
  ],
});
