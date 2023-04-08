export type Album = {
	created_at: string;
	description: string;
	name: string;
	published: boolean;
	shootDate: string;
	_id: string;
};

export type ImageMetadata = {
	author: string;
	authorCid: string;
	created_at: string;
	exifData: unknown;
	filename: string;
	fullSize: string;
	galleryId: string;
	isGalleryThumbnail: boolean;
	preview: string;
	shotAt: string;
	tags: string[];
	thumbnail: string;
	_id: string;
};
