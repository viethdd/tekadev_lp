import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
// import tailwindcss from '@tailwindcss/vite';
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	ssr: {
   	noExternal: ["svelte-hero-icons"],
	},
	resolve: {
    	alias: {
      // YOUR CUSTOM ALIAS HERE
      // Note: __dirname is the directory of the current file (project root in this case)
      '$data': path.resolve(process.cwd(), 'src/data') 
   	}
  	},
	css: {
    postcss: {
      plugins: [
        // 🔑 Use the imported function
        tailwindPostcss(), 
        autoprefixer()
      ],
    },
  },
  server: {
    fs: {
      // 🔑 Add the absolute path to the directory containing 'assets'
      allow: [
        path.resolve(__dirname, '..', 'static/assets/img'),
      ],
    },
  },
});

