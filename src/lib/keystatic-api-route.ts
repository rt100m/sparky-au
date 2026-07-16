// Replaces @keystatic/astro's injected /api/keystatic route — swapped in by
// the keystaticFixed() wrapper in astro.config.mjs, so it only exists in
// ADMIN builds (a prerender:false route in src/pages would break the static
// CI build: NoAdapterInstalled). Needed because the stock handler touches
// context.locals.runtime, whose getter THROWS on Astro v6+'s Cloudflare
// adapter. We hand the stock handler a context whose locals is a plain object
// carrying the env from cloudflare:workers (prod) / process.env (local dev),
// so its existing `locals.runtime?.env` lookup works again.
import type { APIRoute } from 'astro';
// eslint-disable-next-line import/no-unresolved
import keystaticConfig from 'virtual:keystatic-config';
import { makeHandler } from '@keystatic/astro/api';

export const prerender = false;

const handler = makeHandler({ config: keystaticConfig });

export const ALL: APIRoute = async (context) => {
  let env: Record<string, string | undefined> = process.env;
  try {
    env = (await import('cloudflare:workers')).env as typeof env;
  } catch {
    /* not on workerd — keep process.env */
  }
  const safeContext = new Proxy(context, {
    get(target, prop, receiver) {
      if (prop === 'locals') return { runtime: { env } };
      return Reflect.get(target, prop, receiver);
    },
  });
  return handler(safeContext as typeof context);
};
