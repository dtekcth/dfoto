<script>
	import Album from './Album.svelte';
	import AlbumText from './AlbumText.svelte';
	import CoverAlbum from './CoverAlbum.svelte';
	export let data;

	const first = data.gallery[0];
	const rest = data.gallery.slice(1);
</script>

<!-- Annas ideer:
	filtrera på läsår
	sök funktion
-->

<section>
	<CoverAlbum gallery={first} />
</section>

<section class="m-be-8">
	<div class="center m-be-8">
		<h2>Alla Album</h2>
	</div>

	<div
		class="grid gap-y-12 gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-inline-6 container m-inline-auto"
	>
		{#each rest as gallery}
			<Album {gallery} />
		{/each}
	</div>
</section>
