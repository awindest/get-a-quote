import { json } from '@sveltejs/kit';
// this runs only on the server as a proxy because the owner of the api.quotable.io/random
// doesn't have a valid ssl certificate so we can't fetch from the browser so we
// fetch the data from the server which works with http: (not https:) and then the browser
// requests the data from the server.
// export const prerender = true
export async function GET({ fetch }) {
  const externalApiResponse = await fetch('http://api.quotable.io/random');
  
  if (externalApiResponse.ok) {
    const data = await externalApiResponse.json();
    // Return the data as a JSON response for the client
    return json(data);
  }

  // Handle errors appropriately
  return new Response(JSON.stringify({ message: 'Failed to fetch external data from api.quotable.io/random' }), {
    status: externalApiResponse.status,
    headers: { 'Content-Type': 'application/json' }
  });
}
