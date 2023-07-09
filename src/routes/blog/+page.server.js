// @ts-ignore
// export async function load({ fetch }) {
// 	const response = await fetch('https://crisapi.vercel.app/api/v3/wear2/query/categories/category/6489005341b831ac5555eea3');

// 	return await response.json()
// }

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const response = await fetch('https://crisapi.vercel.app/api/v3/portfolio3/query/articles/article/siteId?id=6489005341b831ac5555eea3').then(data => data.json());
	
	console.log('response', response)
	// return await response.json()
	return [
			{ slug: 'hello-world' },
			{ slug: 'another-blog-post' }
	];
}

export const prerender = true;

// export const prerender = 'auto';
