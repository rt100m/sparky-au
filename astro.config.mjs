// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// Two build targets from one config:
//  • Public site (default `npm run build`): pure static, NO Keystatic routes →
//    this is what the Cloudflare Pages project builds from the repo.
//  • Admin (`ADMIN=1`): adds the React + Keystatic /keystatic editor routes.
//  • Admin deploy (`CF_DEPLOY=1`): also attaches the Cloudflare Worker adapter.
// Dev editor runs with ADMIN=1 and NO adapter (the CF workerd dev runtime throws
// `process is not defined` inside Keystatic's Node-based GitHub setup).
const forDeploy = process.env.CF_DEPLOY === '1';
const withAdmin = forDeploy || process.env.ADMIN === '1';
export default defineConfig({
  site: 'https://sparky-au.pages.dev',
  output: 'static',
  ...(forDeploy ? { adapter: cloudflare() } : {}),
  integrations: [sitemap(), ...(withAdmin ? [react(), keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()]
  }
});
