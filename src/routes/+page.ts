import { handleSpotifyEndpointResponse } from "$lib/api";
import type { Schema } from "effect";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const spotifyRes = await handleSpotifyEndpointResponse(fetch("api/spotify"));

	return {
		spotify: spotifyRes,
	};
};
