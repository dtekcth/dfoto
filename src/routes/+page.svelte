<script>
	import AlbumText from './AlbumText.svelte';
	export let data;

	const first = data.gallery[0];
	const rest = data.gallery.slice(1);
</script>

<!-- Annas ideer:
	filtrera på läsår
	sök funktion
-->

<section class="flow">
	<img class="cover-img" src="/v1/gallery/{first._id}/thumbnail-preview" alt="" />

	<div class="center">
		<AlbumText gallery={first}>
			<span slot="tag" class="bg-orange-300 text-orange-900 tag">Latest</span>
		</AlbumText>
	</div>
</section>

<section class="flow content">
	<div class="center">
		<h2>Alla Album</h2>
	</div>

	<div class="center">
		<div class="grid gap-y-12 gap-x-8 grid-cols-1 sm:grid-cols-2">
			{#each rest as gallery}
				<div class="album">
					<img
						class="rounded-lg"
						src="/v1/gallery/{gallery._id}/thumbnail-preview"
						alt=""
						loading="lazy"
					/>
					<AlbumText {gallery} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.tag {
		padding-block: var(--s-3);
		padding-inline: var(--s-1);
		border-radius: 9999px;
		margin-block: auto;
	}

	.album {
		--flow-space: var(--s2);
	}

	.album img {
		width: 100%;
		object-fit: cover;
	}

	.cover-img {
		height: clamp(40vh, 50vw, 60vh);
		object-fit: cover;
		max-width: 100%;
		width: 100%;
	}

	.content {
		margin-block: var(--s2);
	}
</style>
