import { env } from "$env/dynamic/private";


export async function getSite() {
  const response0 = await fetch(`${env.URL}/api/graphql`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetSite($type: String!, $id: String!) {
				getSite(type: $type, id: $id) {
					_id
					url
					data{
						theme{
							light
							lightAndDarkMode
						}
						info{
							name
							icon
						}
					}
					
				}
			}
      `,
			variables: {
				type: env.TYPE,
				id: env.UID
			}
		})
	});

	const {
		data: { getSite }
	} = await response0.json();

  return getSite
}
/**
 * @param {{ type: string; }} params
 */
export async function getSites(params) {
	const response = await fetch(`${env.URL}/api/graphql`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetSites($type: String!) {
        getSites(type: $type) {
          _id
          url
					data{
						info {
							name
							icon
						}
					}
        }
      }
      `,
			variables: {
				type: params.type
			}
		})
	});

	const {
		data: { getSites }
	} = await response.json();
  return getSites
}

/**
 * @param {any} input
 */
export async function addSite(input) {
	const res = await fetch(`${env.URL}/api/graphql`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
				mutation AddSite($input:SiteInput!) {
					addSite(input:$input) 
				}
			`,
			variables: {
				input: input
			}
		})
	});
	return await res.json();
}