import { env } from "$env/dynamic/private";


export async function getPagesByParentId() {
	const response = await fetch(`${env.URL}/api/${env.VERSION}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
      query GetPagesByParentId($type: String!, $parentId: String!) {
				getPagesByParentId(type: $type, parentId: $parentId) {
					_id
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
				parentId: env.UID
			}
		})
	});

	const {
		data: { getPagesByParentId }
	} = await response.json();
	return getPagesByParentId;
}
