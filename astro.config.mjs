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

// Keystatic ≤5.2.0's API route reads Astro.locals.runtime.env, whose getter
// THROWS on Astro v6+'s Cloudflare adapter (500 on every /api/keystatic call).
// Wrap the integration and swap that one injected route for our fixed copy
// (src/lib/keystatic-api-route.ts). Delete this wrapper when Keystatic fixes it.
function keystaticFixed() {
  const k = keystatic();
  const setup = k.hooks['astro:config:setup'];
  k.hooks['astro:config:setup'] = (opts) =>
    setup({
      ...opts,
      injectRoute: (route) =>
        opts.injectRoute(
          route.pattern === '/api/keystatic/[...params]'
            ? { ...route, entrypoint: './src/lib/keystatic-api-route.ts', entryPoint: './src/lib/keystatic-api-route.ts' }
            : route
        ),
    });
  return k;
}

export default defineConfig({
  site: 'https://sparky-au.pages.dev',
  output: 'static',
  ...(forDeploy ? { adapter: cloudflare() } : {}),
  integrations: [sitemap(), ...(withAdmin ? [react(), keystaticFixed()] : [])],
  vite: {
    plugins: [tailwindcss()]
  }
});
