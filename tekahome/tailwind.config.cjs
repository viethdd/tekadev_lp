/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Scans all Svelte, HTML, JS, and TS files in 'src'
  content: [
    './src/**/*.{html,svelte,js,ts}',
    './src/routes/**/*.{html,svelte,js,ts}',
    './src/libs/**/*.{html,svelte,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}