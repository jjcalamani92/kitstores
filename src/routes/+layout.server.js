export const prerender = 'auto';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const pages = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/pages/page/siteId?id=64861a8a63e401e6fc713ee9`
	).then((response) => response.json());
  
	return { pages }
}