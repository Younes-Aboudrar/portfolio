import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const CF_TOKEN = process.env.PUBLIC_CF_ANALYTICS;
const head = CF_TOKEN
	? [
			{
				tag: 'script',
				attrs: {
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': JSON.stringify({ token: CF_TOKEN })
				}
			}
		]
	: [];

export default defineConfig({
	site: 'https://abwiki.aboudrar.dev',
	integrations: [
		starlight({
			title: 'abwiki',
			defaultLocale: 'fr',
			locales: {
				fr: { label: 'Français', lang: 'fr' },
				en: { label: 'English', lang: 'en' }
			},
			favicon: '/favicon.svg',
			description:
				"Le wiki personnel de Younes Aboudrar — mon second cerveau en ligne.",
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/Younes-Aboudrar/aboudrar.dev/edit/main/'
			},
			head,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Younes-Aboudrar' },
				{ icon: 'x.com', label: 'Blog', href: 'https://blog.aboudrar.dev' }
			],
			components: {
				Footer: './src/components/Footer.astro'
			}
		})
	],
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			noExternal: ['cookie']
		}
	}
});