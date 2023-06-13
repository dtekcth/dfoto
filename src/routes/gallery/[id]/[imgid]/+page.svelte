<script lang="ts">
	import { page } from '$app/stores';
	import Tag from '$lib/components/Tag.svelte';

	export let data;

	$: current = data.images.find((image) => image._id === $page.params.imgid);
</script>

<div class="p-6">
	<a href="./">Tillbaka till albumet</a>
	<img src="/v1/image/{$page.params.imgid}/preview" alt="" />
</div>

<div class="p-inline-6">
	{#if current}
		<span>Fotograf: {current.author}</span>
		<h4>Tags</h4>
		<div class="flex gap-2">
			{#each current.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
		<pre>{JSON.stringify(current, null, 2)}</pre>
	{/if}
</div>

<!-- Things to add:
- Pilar för att gå till nästa bild och till tidigare bild om de finns
- Fixa en textruta som man kan lägga till tags i

- Det hade varit en nice grej om man kan edita tagsen på bilderna, bra om man skriver fel eller vill ändra något.
För att detta ska fungera bra kan det behövas implementeras ett login system. Så för att lägga till en tag och ändra den så behöver
man ha ett konto och logga in.
-->

<style>
	img {
		width: 100%;
	}
</style>
