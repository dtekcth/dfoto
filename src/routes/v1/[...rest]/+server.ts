export async function GET({ params, fetch }) {
	return fetch(`https://dfoto.se/v1/${params.rest}`);
}
