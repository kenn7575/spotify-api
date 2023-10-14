<script lang="ts">
	import { onMount } from 'svelte';
	import type { Album } from '$lib/types';
	export let albumData: Album;
	let color: string = '#fff';
	$: console.log(color);
	import { getDominantColorFromImage } from '$lib/getDominantColor';

	onMount(() => {
		// Example usage
		const imageElement: HTMLImageElement | null = document.querySelector('img');
		if (!imageElement) return;
		imageElement.onload = () => {
			const dominantColor = getDominantColorFromImage(imageElement);
			if (dominantColor) {
				color = dominantColor;
			} else {
				console.log('Unable to get dominant color.');
			}
		};
	});
</script>

<div style="background: {color.includes('#') ? color : '#' + color}">
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
