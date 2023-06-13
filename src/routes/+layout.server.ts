import { getSession } from '$lib/auth.js';

export async function load({ cookies }) {
	const { name, picture, roles } = (await getSession(cookies)) as any;

	return {
		session: {
			name,
			picture,
			roles
		}
	};
}
