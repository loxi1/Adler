import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

const website = 'https://anibalcayetano.com/'

// https://astro.build/config
export default defineConfig({
	site: website,
	integrations: [
		tailwind(), 
		prefetch(), 
		sitemap({ lasdmod: new Date()})
	]
});
