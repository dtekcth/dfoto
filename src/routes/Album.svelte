<script lang="ts">
	import type { Album } from '$lib/types';

	export let gallery: Album;
</script>

<div>
	<a href="/gallery/{gallery._id}" class="text-black">
		<img
			class="rounded-lg w-full"
			src="/v1/gallery/{gallery._id}/thumbnail-preview"
			alt=""
			loading="lazy"
		/>
		<h4 class="m-block-2">{gallery.name}</h4>
	</a>
</div>
