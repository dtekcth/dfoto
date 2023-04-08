import type { Album } from '$lib/types';

export async function load({ fetch }) {
	const data = await fetch('v1/gallery/limit/28');
	const gallery = (await data.json()) as Album[];
	return {
		gallery
	};
}
