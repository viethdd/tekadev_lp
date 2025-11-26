import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
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
      '$data': path.resolve(process.cwd(), 'src/data'),
      '$lib': path.resolve('./src/lib'),
      '$img': path.resolve('./static/assets/img'),
   	}
  	},
	css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '$lib/styles/layout/header';
        @use '$lib/styles/layout/footer';`,
        // 🔑 Add the logger block to filter out the depreciation warning
        logger: {
          warn(message, options) {
            // Check if the message contains the deprecation notice
            if (message.includes('Dart Sass 3.0.0')) return; 
            
            // Check if the message includes the deprecated keyword
            if (options.deprecation) return; 

            // Pass through all other warnings (which are important!)
            console.warn(message, options);
          },
        },
        }
    },
    postcss: {
      plugins: [
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
        '.',
        './src',
        './static',
        './src/lib/assets'
      ],
    },
  },
  build: {
    rollupOptions: {
      external: [] // Make sure no assets are treated as external
    }
  }
});

