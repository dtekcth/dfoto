<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	const current = data.images;
</script>

<div class="box">
	<img src="/v1/image/{$page.params.imgid}/preview" alt="" />
</div>

<style>
	img {
		width: 100%;
	}
</style>
