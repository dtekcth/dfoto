<script lang="ts">
	import type { Album } from '$lib/types';

	export let gallery: Album;
</script>

<div>
	<img
		class="rounded-lg w-full"
		src="/v1/gallery/{gallery._id}/thumbnail-preview"
		alt=""
		loading="lazy"
	/>
	<a href="/gallery/{gallery._id}" class="text-black">
		<h4 class="m-block-2">{gallery.name}</h4>
	</a>
</div>
