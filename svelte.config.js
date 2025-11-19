import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.argv.includes('dev') ? '' : ''
		}
	}
};

export default config;