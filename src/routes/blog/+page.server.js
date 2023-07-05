// @ts-ignore
export async function load({ fetch }) {
	const response = await fetch('https://crisapi.vercel.app/api/v3/wear2/query/categories/category/6489005341b831ac5555eea3');

	return await response.json()
}

