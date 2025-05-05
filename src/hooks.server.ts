import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => {
			switch (type) {
				case "font":
				case "css":
				case "js":
				case "asset":
					return true;
			}
		},
	});
	return response;
};
