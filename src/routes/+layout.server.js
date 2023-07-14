
import { getPagesByParentId } from '$lib/fetch/pages';
import { getSite } from '$lib/fetch/sites';
export const prerender = false;
export const config = {
    isr: {
        
        expiration: 60,

        
    }
};
export async function load() {
	const pages = await getPagesByParentId()
	// const pages = await fetch(
	// 	`${env.API_URL}/api/${env.API_V}/${env.API_TYPE}/query/pages/page/siteId?id=${env.API_UID}`
	// ).then((response) => response.json());
	const site = await getSite()
	// const site = await fetch(
	// 	`${env.API_URL}/api/${env.API_V}/${env.API_TYPE}/query/sites/${env.API_UID}`
	// ).then((response) => response.json());
  
	return { pages, site }
}
