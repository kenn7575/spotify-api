<script lang="ts">
	import { onMount } from 'svelte';
	import type { Album } from './index';
	export let albumData: Album;
	import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';
	let color: string;
	onMount(() => {
		const colorThief = new ColorThief();

		const img: HTMLImageElement | null = document.getElementById(
			albumData.name.replaceAll(' ', '_')
		);

		if (!img) return;
		// Make sure image is finished loading
		if (img.complete) {
			color = colorThief.getColor(img);
		} else {
			img.addEventListener('load', function () {
				color = colorThief.getColor(img);
			});
		}
	});
</script>

<div style="background: {color};">
	<img id={albumData.name.replaceAll(' ', '_')} src={albumData.images[0].url} alt="album-cover" />
</div>

<style>
	img {
		height: 600px;
		widows: 600px;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
