<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import type { Album } from '$lib/types';
	import AlbumText from './AlbumText.svelte';

	export let gallery: Album;
</script>

<img class="cover-img" src="/v1/gallery/{gallery._id}/thumbnail-preview" alt="" />

<div class="center m-bs-6">
	<div class="overflow-hidden break-words">
		<div class="flex flex-wrap gap-x-4 align-baseline break-words">
			<h3 class="break-words m-block-3">
				<a href="/gallery/{gallery._id}" class="text-black">
					{gallery.name}
				</a>
			</h3>
			<Tag>Latest</Tag>
		</div>
		<p class="line-clamp-3">{gallery.description}</p>
	</div>
</div>

<style>
	.cover-img {
		height: clamp(40vh, 50vw, 60vh);
		--at-apply: object-cover w-full max-w-full;
		/* object-fit: cover;
		max-width: 100%;
		width: 100%; */
	}

	.tag {
		padding-block: var(--s-3);
		padding-inline: var(--s-1);
		border-radius: 9999px;
		margin-block: auto;
	}
</style>
