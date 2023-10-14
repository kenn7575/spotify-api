function getContrastTextColor(hexColor: string): string {
	// Remove the hash symbol if present
	hexColor = hexColor.replace(/^#/, '');

	// Convert the hex color to RGB
	const r = parseInt(hexColor.slice(0, 2), 16);
	const g = parseInt(hexColor.slice(2, 4), 16);
	const b = parseInt(hexColor.slice(4, 6), 16);

	// Calculate the relative luminance using the formula
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Determine the best text color (black or white) based on luminance
	const textColor = luminance > 0.5 ? '#000000' : '#ffffff';

	return textColor;
}

// Example usage
const hexColor = '#3498db'; // Replace this with your hex color
const textColor = getContrastTextColor(hexColor);
console.log('Text color:', textColor);
