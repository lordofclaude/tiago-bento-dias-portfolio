// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://lordofclaude.github.io",
  base: "/tiago-bento-dias-portfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});