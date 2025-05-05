import type { Schema } from "effect";
import type { SpotifyPlaybackState } from "./spotify";

const handleSpotifyEndpointResponse = (res: Promise<Response>) =>
	res
		.then((res) => {
			if (!res.ok) throw new Error();
			return res.json() as Promise<Schema.Schema.Type<
				typeof SpotifyPlaybackState
			> | null>;
		})
		.catch(() => null);

export { handleSpotifyEndpointResponse };
