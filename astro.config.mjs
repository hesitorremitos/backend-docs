// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			svgoOptions: {

			}
		}),
		starlight({
			expressiveCode:{
				themes: ['dracula'],
			},
			lastUpdated:  true,
			editLink: {
				baseUrl: "https://github.com/hesitorremitos/backend-docs/edit/master/",

			},
			plugins: [starlightLinksValidatorPlugin()],
			title: 'Backend',
			social: {
				github: 'https://github.com/hesitorremitos/backend-docs',
			},
			pagination: true,
			tagline: 'A simple documentation theme for Astro',
			titleDelimiter: ' | ',
			locales:{
				root:{
					label: 'Español',
					lang: 'es',
				}
			},
			sidebar: [
				{
					label: 'Fundamentos del diseño web',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Solucionario',
					autogenerate: { directory: 'solutions' },
				},
				{
					label: 'Programacion del lado del servidor',
					autogenerate: { directory: 'server-programming' },
				}
			],
		}),
	],
});
