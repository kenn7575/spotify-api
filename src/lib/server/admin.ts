import * as querystring from 'querystring';

//local
// import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
// const client_id = CLIENT_ID;
// const client_secret = CLIENT_SECRET;

//vercel
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

export async function generateToken() {
	try {
		const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

		const data = {
			grant_type: 'client_credentials'
		};

		const options: RequestInit = {
			method: 'POST',
			body: querystring.stringify(data),
			headers: {
				Authorization: `Basic ${basicAuth}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};

		const response = await fetch('https://accounts.spotify.com/api/token', options);

		if (!response.ok) {
			throw new Error(`Failed to get access token: ${response.statusText}`);
		}

		const responseData: { access_token: string } = await response.json();
		return responseData.access_token;
	} catch (error) {
		console.error('Error:', error);
		throw error; // You might want to handle or log the error differently in your application
	}
}
