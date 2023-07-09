/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const response = fetch('https://crisapi.vercel.app/api/v3/portfolio3/query/articles/article/siteId?id=6489005341b831ac5555eea3').then((data) => data.json());
	
	console.log('response', response)
	console.log('first')
	// return await response.json()
	return [
			{ slug: 'hello-world' },
			{ slug: 'another-blog-post' },
			{ slug: 'another-blog-posts' },
	];
}

export const prerender = true;