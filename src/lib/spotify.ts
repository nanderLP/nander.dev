import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "$env/static/private";
import { Console, Context, Effect, Layer, Schema, pipe } from "effect";
import { Redis, RedisLive } from "./redis";

export const SpotifyPlaybackState = Schema.Struct({
	item: Schema.Struct({
		artists: Schema.Array(
			Schema.Struct({
				name: Schema.String,
				external_urls: Schema.Struct({
					spotify: Schema.String,
				}),
			}),
		),
		duration_ms: Schema.Number,
		explicit: Schema.Boolean,
		external_urls: Schema.Struct({
			spotify: Schema.String,
		}),
		name: Schema.String,
		popularity: Schema.Number,
		album: Schema.Struct({
			images: Schema.Array(
				Schema.Struct({
					url: Schema.String,
					height: Schema.Number,
					width: Schema.Number,
				}),
			),
		}),
	}),
	progress_ms: Schema.Number,
	is_playing: Schema.Boolean,
});

const SpotifyRefreshResponse = Schema.Struct({
	access_token: Schema.String,
	expires_in: Schema.Number,
	refresh_token: Schema.optional(Schema.String),
});

class Spotify extends Context.Tag("Spotify")<
	Spotify,
	{
		readonly getPlaybackState: () => Effect.Effect<
			Schema.Schema.Type<typeof SpotifyPlaybackState> | null,
			Error,
			never
		>;
	}
>() {}

const refreshAccessToken = Effect.gen(function* () {
	const { client } = yield* Redis;
	const refreshToken = yield* Effect.tryPromise({
		try: () =>
			client.get<string>("spotify:refresh_token").then((token) => {
				if (!token) {
					throw new Error("No refresh token found");
				}
				return token;
			}),
		catch: (e) => e,
	});
	const requestBody = new URLSearchParams({
		grant_type: "refresh_token",
		refresh_token: refreshToken,
	});
	const url = new URL("https://accounts.spotify.com/api/token");
	const spotifyRes = yield* Effect.tryPromise({
		try: () =>
			fetch(url, {
				method: "POST",
				body: requestBody,
				headers: {
					Authorization: `Basic ${Buffer.from(
						`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
					).toString("base64")}`,
				},
			}).then((res) => {
				if (!res.ok) {
					throw new Error("Failed to refresh access token");
				}
				return res.json() as Promise<unknown>;
			}),
		catch: (e) => e,
	});
	const parsedRes = yield* Schema.decodeUnknown(SpotifyRefreshResponse)(
		spotifyRes,
	);
	if (parsedRes.refresh_token && parsedRes.refresh_token !== refreshToken) {
		yield* Effect.tryPromise({
			// biome-ignore lint/style/noNonNullAssertion:
			try: () => client.put("spotify:refresh_token", parsedRes.refresh_token!),
			catch: (e) => e,
		});
	}
	yield* Effect.tryPromise({
		try: () =>
			client.put("spotify:access_token", parsedRes.access_token, {
				expirationTtl: parsedRes.expires_in,
			}),
		catch: (e) => e,
	});
	return parsedRes.access_token;
});

// Helper: Get access token, refresh if needed
const getAccessToken = Effect.gen(function* () {
	const { client } = yield* Redis;
	const accessToken = yield* Effect.tryPromise({
		try: () => client.get<string>("spotify:access_token"),
		catch: (e) => e,
	});
	if (!accessToken) {
		const newAccessToken = yield* refreshAccessToken;
		return newAccessToken;
	}
	return accessToken;
});

// Main: Get playback state
const getPlaybackState: Effect.Effect<
	Schema.Schema.Type<typeof SpotifyPlaybackState> | null,
	Error,
	Redis
> = pipe(
	getAccessToken,
	Effect.flatMap((accessToken) =>
		Effect.tryPromise({
			try: () =>
				fetch("https://api.spotify.com/v1/me/player/currently-playing", {
					method: "GET",
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}),
			catch: (e) => e,
		}),
	),
	Effect.flatMap((playbackState) => {
		switch (playbackState.status) {
			case 200:
				return pipe(
					Effect.tryPromise({
						try: () => playbackState.json() as Promise<unknown>,
						catch: () => new Error("Failed to parse JSON"),
					}),
					Effect.flatMap((data) =>
						Schema.decodeUnknown(SpotifyPlaybackState)(data),
					),
				);
			case 204:
				return Effect.succeed(null);
			case 401:
				return pipe(
					refreshAccessToken,
					Effect.flatMap(() => getPlaybackState),
				);
			case 403:
				return Effect.die(
					new Error("403 while getting playback state. This should not happen"),
				);
			case 429: {
				const retryAfter = playbackState.headers.get("Retry-After");
				return pipe(
					Console.log("Rate limit exceeded. Waiting for retry..."),
					Effect.flatMap(() =>
						retryAfter
							? Effect.sleep(Number.parseInt(retryAfter) * 1000)
							: Effect.sleep(1000),
					),
					Effect.flatMap(() => getPlaybackState),
				);
			}
			default:
				return Effect.die(
					new Error(
						`Unexpected status code ${playbackState.status} while getting playback state`,
					),
				);
		}
	}),
	Effect.mapError((e) => (e instanceof Error ? e : new Error(String(e)))),
);

const SpotifyLive = (env: Env) =>
	Layer.succeed(
		Spotify,
		Spotify.of({
			getPlaybackState: () => Effect.provide(getPlaybackState, RedisLive(env)),
		}),
	);

export { Spotify, SpotifyLive };
