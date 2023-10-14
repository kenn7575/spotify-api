<script lang="ts">
	import { onMount } from 'svelte';
	import type { Album } from '$lib/types';
	export let albumData: Album;
	let color: string = '#fff';
	$: console.log(color);
	import { getDominantColorFromImage } from '$lib/getDominantColor';

	onMount(() => {
		// Example usage
		const imageElements: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');
		if (!imageElements) {
			console.log('No image');
			return;
		}
		imageElements.forEach((img) => {
			img.onload = () => {
				console.log('image loaded', albumData.name);
				const dominantColor = getDominantColorFromImage(img);

				if (dominantColor) {
				} else {
					console.log('Unable to get dominant color.');
				}
				const parrent: HTMLDivElement | any = img.parentElement;
				if (!parrent || parrent.type != 'HTMLDivElement') {
					console.log('no image inside div');
					return;
				}
				parrent.style.background = dominantColor;
			};
		});
	});
</script>

<div class="image-container">
	<img id={albumData.name.replaceAll(' ', '_')} src={albumData.images[0].url} alt="album-cover" />
	<p>{albumData.name}</p>
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
		flex-direction: column;
	}
</style>
