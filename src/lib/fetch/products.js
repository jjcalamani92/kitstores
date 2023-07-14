import { env } from "$env/dynamic/private";


/**
 * @param {{ type: string; uid: string; }} params
 */
export async function getProductsByParentId (params) {
  const response = await fetch(`${env.API_URL}/api/graphql`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetProductsByParentId($type: String!, $parentId: String!) {
				getProductsByParentId(type: $type, parentId: $parentId ) {
					_id
					parentId
					slug
					data{
						name
						description
						thumbnailUrl
					}
					
				}
			}
      `,
			variables: {
				type: params.type,
				parentId: params.uid,
			}
		})
	});

	const {
		data: { getProductsByParentId }
	} = await response.json();
  return getProductsByParentId
}

export async function getProductsBySiteId () {
  const response = await fetch(`${env.URL}/api/${env.VERSION}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetProductsBySiteId($type: String!, $siteId: String!) {
				getProductsBySiteId(type: $type, siteId: $siteId ) {
					_id
					parentId
					slug
					data{
						name
						description
						thumbnailUrl
						images
						params{
							paths{
								name
								slug
							}
						}
					}
					
				}
			}
      `,
			variables: {
				type: env.TYPE,
				siteId: env.UID,
			}
		})
	});

	const {
		data: { getProductsBySiteId }
	} = await response.json();
  return getProductsBySiteId
}

/**
 * @param {any} input
 */
export async function addProduct(input) {
  const res = await fetch(`${env.API_URL}/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        mutation AddProduct($input:ProductInput!) {
          addProduct(input:$input) 
        }
      `,
      variables: {
        input: input
      }
    })
  });
  return await res.json();
  
}