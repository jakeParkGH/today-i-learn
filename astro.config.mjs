import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath } from 'url';

const { PUBLIC_SITE_URL } = loadEnv(process.env.PUBLIC_SITE_URL, process.cwd(), '');
const { PUBLIC_SITE_BASE } = loadEnv(process.env.PUBLIC_SITE_BASE, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  base: PUBLIC_SITE_BASE,
  integrations: [mdx(), sitemap(), react()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
