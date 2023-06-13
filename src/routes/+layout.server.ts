import { getSession } from '$lib/auth.js';

export async function load({ cookies }) {
	const session = (await getSession(cookies)) as any;

	return {
		session: session
			? {
					name: session.name,
					picture: session.picture,
					roles: session.roles
			  }
			: undefined
	};
}
