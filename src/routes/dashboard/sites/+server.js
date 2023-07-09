import { json } from '@sveltejs/kit';
// import * as database from '$lib/server/database.js';

export async function POST() {

	// const userid = cookies.get('userid');
	// const { id } = await database.createTodo({ userid, description });

	return json({ id: 'POST' }, { status: 201 });
}
export async function GET() {

	// const userid = cookies.get('userid');
	// const { id } = await database.createTodo({ userid, description });

	return json({ id: 'GET' }, { status: 201 });
}
