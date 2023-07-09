import { env } from '$env/dynamic/private';
export const prerender = false;
export const config = {
    isr: {
        
        expiration: 60,

        
    }
};
export async function load() {
	const pages = await fetch(
		`${env.URL}/api/${env.V}/${env.TYPE}/query/pages/page/siteId?id=${env.UID}`
	).then((response) => response.json());
  
	return { pages }
}
