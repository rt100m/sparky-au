// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// Live editor backend: pages stay static (prerendered), only the /keystatic
// admin + /api/keystatic routes run on-demand via Cloudflare Pages Functions.
export default defineConfig({
  site: 'https://sparky-au.pages.dev',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  }
});
