<script lang="ts">
	import Navbar from '$lib/components/topNav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';
	import {MetaTags} from 'svelte-meta-tags';
	/** @type {{ navLinks: 
	 * 				top: { href: string, label:string }[], 

	 * }} */
	
   export let data;
	const { nav_links, footer_content } = data;
	const siteTitle = "TekaDev Home"
	const siteDescription = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản"
	const siteUrl = "/"
</script>

<svelte:head>
	<MetaTags title={siteTitle} description={siteDescription} />
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<Navbar items={ nav_links } />
<div class="main">
<slot />
</div>
<Footer items={ footer_content } />

<style>
</style>