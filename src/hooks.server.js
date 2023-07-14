
import { getSite } from '$lib/fetch/sites';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const site = await getSite()
  return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%theme%', site.data.theme.light),
  });
}