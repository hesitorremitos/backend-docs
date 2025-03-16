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
			plugins: [starlightLinksValidatorPlugin()],
			title: 'Backend',
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
					label: 'Solucionario',
					autogenerate: { directory: 'solutions' },
				},
			],
		}),
	],
});
