import type { Album, ImageMetadata } from '$lib/types';

export async function load({ fetch }) {
	const data = await fetch('v1/gallery/limit/28');
	const gallery = (await data.json()) as Album[];
	const firstData = await fetch(`v1/image/${gallery[0]._id}`);
	const first = (await firstData.json()) as ImageMetadata[];

	const thumbnail = first.find((img) => img.isGalleryThumbnail) ?? first[0];

	return {
		gallery,
		thumbnail
	};
}
