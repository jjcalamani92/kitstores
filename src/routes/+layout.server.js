export const prerender = false;
export const config = {
    isr: {
        
        expiration: 60,

        
    }
};
export async function load() {
	const pages = await fetch(
		`https://crisapi.vercel.app/api/v3/wear2/query/pages/page/siteId?id=64a56f2cfd5b4902feb027de`
	).then((response) => response.json());
  
	return { pages }
}