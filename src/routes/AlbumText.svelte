<script lang="ts">
	import type { Album } from '$lib/types';

	export let gallery: Album;
</script>

<div class="overflow-hidden break-words">
	<div class="flex flex-wrap gap-x-4 align-baseline break-words">
		<h3 class="break-words">
			<a href="/gallery/{gallery._id}" class="text-black">
				{gallery.name}
			</a>
		</h3>
		<slot name="tag" />
	</div>
	<p class="line-clamp-3">{gallery.description}</p>
</div>

<style>
	a {
		color: black;
	}
</style>
