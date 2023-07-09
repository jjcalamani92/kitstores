// @ts-nocheck
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
export const config = {
	isr: {
			
			expiration: 60,

			
	}
};
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export async function load({ params }) {
	// console.log('params', params.slug)



	const products = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/products/product/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
  
	// const categories2 = await fetch(
	// 	`https://crisapi.vercel.app/api/v3/wear2/query/categories/2/category/siteId?id=64a56f2cfd5b4902feb027de`
	// ).then((response) => response.json());
  
	
 






	const product = products.find((page) => page._id === params.id);
	// const categories = categories0.filter((category) => category.parentId === page._id)
	
	if (!product) throw error(404, 'Not found');

	return {
		product
	};
}
