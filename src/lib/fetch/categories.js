import { env } from "$env/dynamic/private";


/**
 * @param {string} i
 */
export async function getCategoriesBySiteId(i) {
  const response = await fetch(`${env.URL}/api/${env.VERSION}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetCategoriesBySiteId($type: String!, $siteId: String!, $i: String!) {
				getCategoriesBySiteId(type: $type, siteId: $siteId, i: $i) {
					_id
          parentId
					slug
					data{
						name
						description
						thumbnailUrl
						type
            params{
              path
            }
					}
					
				}
			}
      `,
			variables: {
				type: env.TYPE,
				siteId: env.UID,
				i: i
			}
		})
	});

	const {
		data: { getCategoriesBySiteId }
	} = await response.json();

  return getCategoriesBySiteId
}