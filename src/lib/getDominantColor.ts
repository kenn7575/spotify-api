export function getDominantColorFromImage(image: HTMLImageElement): string | null {
	const canvas = document.createElement('canvas');
	canvas.width = image.width;
	canvas.height = image.height;
	const context = canvas.getContext('2d');

	if (context) {
		context.drawImage(image, 0, 0, image.width, image.height);
		const imageData = context.getImageData(0, 0, image.width, image.height).data;

		const colorCounts: { [color: string]: number } = {};
		let maxColor = '';
		let maxCount = 0;

		for (let i = 0; i < imageData.length; i += 4) {
			const rgba = `rgb(${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]})`;

			if (colorCounts[rgba]) {
				colorCounts[rgba]++;
			} else {
				colorCounts[rgba] = 1;
			}

			if (colorCounts[rgba] > maxCount) {
				maxColor = rgba;
				maxCount = colorCounts[rgba];
			}
		}

		return maxColor;
	}

	return null;
}
