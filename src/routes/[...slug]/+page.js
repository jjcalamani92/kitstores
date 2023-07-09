// @ts-nocheck
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = 'auto';

export async function load({ params }) {
	const pages = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/pages/page/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
	const categories0 = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/categories/0/category/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
  
	const page = pages.find((page) => page.slug === params.slug);
	const categories = categories0.filter((category) => category.parentId === page._id)
	
	if (!page) throw error(404, 'Not found');

	return {
		page, categories
	};
}
