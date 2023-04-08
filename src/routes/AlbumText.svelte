<script lang="ts">
	import type { Album } from '$lib/types';

	export let gallery: Album;
</script>

<div class="wrapper flow">
	<div class="flex flex-wrap gap-x-4 align-baseline break-words">
		<h3 class="break-words">
			<a href="/gallery/{gallery._id}">
				{gallery.name}
			</a>
		</h3>
		<slot name="tag" />
	</div>
	<p class="line-clamp-3">{gallery.description}</p>
</div>

<style>
	.wrapper {
		overflow: hidden;
		overflow-wrap: break-word;
		--flow-space: var(--s0);
	}

	a {
		color: black;
	}
</style>
