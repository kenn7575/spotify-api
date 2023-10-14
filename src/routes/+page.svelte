<script lang="ts">
	import type { SpotifyData } from '$lib/index';
	export let data: SpotifyData;
	import Album from '$lib/album.svelte';
	console.log(data);
</script>

<div id="body">
	<div class="container">
		{#each data.items as album}
			<div class="page">
				<Album albumData={album} />
			</div>
		{/each}
	</div>
</div>

<style>
	#body {
		font-family: 'Lato', sans-serif;
		background: #111;
		min-height: 100vh;
		overflow-x: hidden;
	}
	.page {
		height: 100vh;
		width: 100vw;
		scroll-snap-align: center;
		font-size: calc(var(--font-size) * 1px);
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.container {
		height: 100vh;
		overflow: auto;
		overflow-x: hidden;
		-ms-scroll-snap-type: y mandatory;
		scroll-snap-type: y mandatory;
	}
	.page {
		color: #fff;
		font-size: 3rem;
		text-align: center;
	}
</style>
