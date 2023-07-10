import { env } from '$env/dynamic/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const site = await fetch(
		`${env.API_URL}/api/${env.API_V}/${env.API_TYPE}/query/sites/${env.API_UID}`
	).then((response) => response.json());
  return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%theme%', site.data.theme.light)
  });
}