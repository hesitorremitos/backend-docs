// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
