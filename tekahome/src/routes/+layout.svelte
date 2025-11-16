<script lang="ts">
	import GoogleFont, { getFontStyle } from "@svelte-web-fonts/google";
	import type { GoogleFontDefinition, GoogleFontVariant } from "@svelte-web-fonts/google";
	const fonts: GoogleFontDefinition[] = [
		{
			family: "Saira",
			variants: [
					"200","300","400","600","700","800","900"
			],
		},
		{
			family: "Roboto",
			variants: [
					"100",
					"400italic"
			],
		},
	];
	
	import Navbar from '$lib/components/topNav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';

	/** @type {{ navLinks: 
	 * 				top: { href: string, label:string }[], 
	 * 				footer: {href:string, label:string}[] 
	 * }} */
   export let data;
	const { navLinks } = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" /> -->
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->
	<!-- <GoogleFont fonts="{fonts}" display="swap" /> -->
</svelte:head>

<Navbar { navLinks } />
<div class="main">
<slot />
</div>
<Footer { navLinks } />

<style>
	body, footer {
		width: 100vw;
		margin: 0 auto;
		position: relative;
		left: 0;
		padding: 0 24px;
		background: rgba(255,0,0,.2);
	}
</style>