import type { Album, ImageMetadata } from '$lib/types.js';

export async function load({ params, fetch }) {
	const respGallery = await fetch(`/v1/gallery/${params.id}`);
	const gallery = (await respGallery.json()) as Album;
	const respImages = await fetch(`/v1/image/${params.id}`);
	const images = (await respImages.json()) as ImageMetadata[];

	return {
		gallery,
		images
	};
}
