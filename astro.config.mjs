// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import starlightHeadingBadgesPlugin from 'starlight-heading-badges';
import icon from 'astro-icon';
import astroD2 from 'astro-d2';
// https://astro.build/config
export default defineConfig({
	devToolbar:{ enabled: false },
	integrations: [
		astroD2({pad: 30, skipGeneration: true}),
		icon({
			svgoOptions: {

			}
		}),
		starlight({
			customCss:[
				"./src/styles/main.css",
			],
			expressiveCode:{
				themes: ['dracula'],
			},
			lastUpdated:  true,
			editLink: {
				baseUrl: "https://github.com/hesitorremitos/backend-docs/edit/master/",

			},
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
					collapsed: true,
				},
				{
					label: 'Programacion del lado del servidor',
					autogenerate: { directory: 'server-programming' },
				},
				{label: 'Laravel', autogenerate: { directory: 'laravel' }},
				{
					label: 'Solucionario',
					autogenerate: { directory: 'solutions' },
					collapsed: true,
				},
				{
					label: 'Practicas',
					autogenerate: { directory: 'practicas' },
				}
				
				
			],
			plugins: [
				starlightLinksValidatorPlugin({errorOnInvalidHashes: false}),
				starlightHeadingBadgesPlugin(),
			],
		}),
	],
});
