import { defineEnvVars } from '@sveltejs/kit/env';

// GitHub Pages serves static files, so public configuration is set at build time.
export const variables = defineEnvVars({
	PUBLIC_CONTACT_ENDPOINT: {
		public: true,
		static: true,
		schema: (value) => value || 'https://contact.aboudrar.dev/api/contact'
	},
	PUBLIC_CF_ANALYTICS: {
		public: true,
		static: true,
		schema: (value) => value || ''
	}
});
