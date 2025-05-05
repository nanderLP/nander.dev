import { Context, Layer } from "effect";

class Redis extends Context.Tag("Redis")<
	Redis,
	{
		readonly client: KVNamespace;
	}
>() {}

const RedisLive = (env: Env) =>
	Layer.succeed(
		Redis,
		Redis.of({
			client: env.KV,
		}),
	);

export { Redis, RedisLive };
