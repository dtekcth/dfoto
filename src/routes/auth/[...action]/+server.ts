import type { AuthAction } from '@auth/core/types';
import type { RequestHandler } from './$types';
import { Auth, type AuthConfig } from '@auth/core';
import { error } from '@sveltejs/kit';
import Zitadel from '@auth/core/providers/zitadel';
import { ZITADEL_CLIENT_ID, ZITADEL_ISSUER, AUTH_SECRET } from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import type { JWT } from '@auth/core/jwt';

import { routeHandler } from '@malmz/sk-oidc';
import { authConfig } from '$lib/auth';

async function refreshToken(token: JWT) {
	return token;
}

const config: AuthConfig = {
	providers: [
		Zitadel({
			issuer: ZITADEL_ISSUER,
			clientId: ZITADEL_CLIENT_ID,
			clientSecret: undefined as any,
			authorization: {
				params: {
					scope: 'openid email profile offline_access'
				}
			},
			client: {
				token_endpoint_auth_method: 'none'
			}
			/* profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					firstName: profile.given_name,
					lastName: profile.family_name,
					email: profile.email,
					loginName: profile.preferred_username,
					image: profile.picture
				};
			} */
		})
	] as Provider[],
	callbacks: {
		jwt({ token, account, profile, user }) {
			console.log('jwt', { token, account, profile, user });

			token.access_token ??= account?.access_token;
			token.refresh_token ??= account?.refresh_token;
			token.roles ??= (profile as any)?.['urn:zitadel:iam:org:project:roles'];
			token.expires_at ??= Math.floor(Date.now() / 1000 + (account?.expires_in ?? 0));

			if (Date.now() < (token.expires_at as number) * 1000) {
				return token;
			}

			return refreshToken(token);
		}
	},
	trustHost: true,
	secret: AUTH_SECRET
};

const actions: string[] = [
	'providers',
	'session',
	'csrf',
	'signin',
	'signout',
	'callback',
	'verify-request',
	'error'
] satisfies AuthAction[];

const handle: RequestHandler = async ({ request, params }) => {
	if (!actions.includes(params.action.split('/')[0])) {
		throw error(404, 'Not Found');
	}
	return Auth(request, config);
};

export const GET = routeHandler(authConfig);
//export const POST = handle;
