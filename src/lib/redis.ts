import { KV_REST_API_TOKEN, KV_REST_API_URL } from "$env/static/private";
import { Redis as UpstashRedis } from "@upstash/redis";
import { Context, Layer } from "effect";

class Redis extends Context.Tag("Redis")<
	Redis,
	{
		readonly client: UpstashRedis;
	}
>() {}

const RedisLive = Layer.succeed(
	Redis,
	Redis.of({
		client: new UpstashRedis({
			url: KV_REST_API_URL,
			token: KV_REST_API_TOKEN,
		}),
	}),
);

export { Redis, RedisLive };
