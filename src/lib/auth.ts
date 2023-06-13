import type { Cookies } from '@sveltejs/kit';
import { getSession as session, type AuthConfig } from '@malmz/sk-oidc';
import { AUTH_SECRET, ZITADEL_CLIENT_ID, ZITADEL_ISSUER } from '$env/static/private';

export const authConfig: AuthConfig = {
	issuer: ZITADEL_ISSUER,
	client_id: ZITADEL_CLIENT_ID,
	cookie_secret: AUTH_SECRET,
	token_endpoint_auth_method: 'none'
};

export async function getSession(cookies: Cookies): Promise<unknown | null> {
	const data = await session(cookies, authConfig);

	console.log('session', data);

	return data;
}
