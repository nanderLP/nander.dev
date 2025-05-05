import { RedisLive } from "$lib/redis";
import { Spotify, SpotifyLive } from "$lib/spotify";
import { error, json } from "@sveltejs/kit";
import { Effect, Layer, pipe } from "effect";
import type { RequestHandler } from "./$types";

const appLayer = Layer.merge(SpotifyLive, RedisLive);

const getHandler = pipe(
	Spotify,
	Effect.flatMap((spotify) => spotify.getPlaybackState()),
	Effect.flatMap((playbackState) => Effect.succeed(json(playbackState))),
	Effect.catchAll((e) =>
		Effect.succeed(
			error(500, e instanceof Error ? e.message : new Error("Unknown error")),
		),
	),
);

export const GET: RequestHandler = (req) =>
	Effect.runPromise(Effect.provide(getHandler, appLayer));

// copy paste this in your terminal if you want to get the access token
// make sure to replace the client id and redirect uri with your own
const getSpotifyAuthorizationUrl = () => {
	const clientId = "XYZXYZ";
	const redirectUri = "XYZXYZ";
	const scope = "user-read-currently-playing";
	const baseUrl = new URL("https://accounts.spotify.com/authorize");
	baseUrl.searchParams.set("client_id", clientId);
	baseUrl.searchParams.set("redirect_uri", redirectUri);
	baseUrl.searchParams.set("scope", scope);
	baseUrl.searchParams.set("response_type", "code");
	return baseUrl.toString();
};
