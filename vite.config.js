import { sveltekit } from '@sveltejs/kit/vite';
import mdPlugin from 'vite-plugin-markdown';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		mdPlugin.plugin({ mode: "html" }),
		imagetools()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
