import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			// Ignore missing /images/* files during prerender — placeholder art
			// is shown via `onerror` handlers until real photos are added.
			handleHttpError: ({ path, status }) => {
				if (status === 404 && path.startsWith('/images/')) {
					return;
				}
				return new Response(null, { status });
			}
		}
	}
};

export default config;
