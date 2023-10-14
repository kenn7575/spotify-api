import type { PageServerLoad } from './$types';
import { generateToken } from '$lib/server/admin';
import type { Album, SpotifyData, Artist } from '$lib/index';
const token = generateToken();

export const load = (async () => {
	async function fetchArtistAlbums() {
		try {
			const token = await generateToken();
			const artistId = '51Po8X0zmHbcrifV4NUy0I'; // Replace with the actual artist's ID
			const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.statusText}`);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			throw new Error(`Error 500 :(`);
		}
	}

	const albums: SpotifyData = await fetchArtistAlbums();
	return albums;
}) satisfies PageServerLoad;
