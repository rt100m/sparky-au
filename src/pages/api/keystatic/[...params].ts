// Overrides @keystatic/astro's injected /api/keystatic route (project routes
// win over injected ones). Needed because the stock handler touches
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
