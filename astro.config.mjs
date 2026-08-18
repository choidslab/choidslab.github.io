import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://choidslab.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Astro Dev Toolbar (dev-mode only overlay) — hidden per preference.
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
