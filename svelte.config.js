import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
// import { join } from "path";

const mdLayout = "./src/routes/blog/_postLayout.svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsvex({
			extension: ".md",
			layout: mdLayout
		}),
		preprocess()
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
