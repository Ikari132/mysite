import { sveltekit } from '@sveltejs/kit/vite';
import mdPlugin from 'vite-plugin-markdown';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), mdPlugin.plugin({ mode: "html" })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
