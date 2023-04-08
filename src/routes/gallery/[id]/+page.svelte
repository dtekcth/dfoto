<script lang="ts">
	export let data;
</script>

<img class="cover-img" src="/v1/gallery/{data.gallery._id}/thumbnail-preview" alt="" />

<section class="center">
	<h2>{data.gallery.name}</h2>
	<p>{data.gallery.description}</p>
</section>

<section class="content box">
	<div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
		{#each data.images as image}
			<a href="./{data.gallery._id}/{image._id}">
				<img
					class="w-full rounded-lg"
					src="/v1/image/{image._id}/thumbnail"
					alt=""
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
</section>

<style>
	.content {
		margin-block: var(--s2);
	}

	.cover-img {
		height: clamp(40vh, 50vw, 60vh);
		object-fit: cover;
		max-width: 100%;
		width: 100%;
	}
</style>
