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


	function concatenarElementos(arrOrStr) {
		
	
		let resultado = arrOrStr.join("/");
	
		return resultado;
	}
	// console.log('concatenarElementos', concatenarElementos(['ropa', 'mujer']));

	const pages = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/pages/page/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
	const categories0 = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/categories/0/category/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
	const categories1 = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/categories/1/category/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
	const categories2 = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/categories/2/category/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
  
	const products = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/products/product/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
  
	// const categories2 = await fetch(
	// 	`https://crisapi.vercel.app/api/v3/wear2/query/categories/2/category/siteId?id=64a56f2cfd5b4902feb027de`
	// ).then((response) => response.json());
  
	const paths = [...pages, ...categories0, ...categories1, ...categories2,]

  function getCategories (id) {
		return paths.filter(
			(category) => category.parentId === id
		);
	}
  function getProducts (id) {
		return products.filter(
			(category) => category.parentId === id
		);
	}





	const page = paths.find((page) => concatenarElementos(page.data.params.path) === params.slug);
	// const categories = categories0.filter((category) => category.parentId === page._id)
	
	if (!page) throw error(404, 'Not found');

	return {
		page, categories: getCategories(page._id), products: getProducts(page._id)
	};
}
