<script lang="ts">
	import Navbar from '$lib/components/topNav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';
	import ProductFeaturesList from '$lib/components/home_productFeaturesList.svelte';

	/** @type {{ navLinks: 
	 * 				top: { href: string, label:string }[], 
	 * 				footer: {href:string, label:string}[]
	 * }} */
   export let data;
	const { navLinks} = data;
</script>


<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

</svelte:head>

<Navbar { navLinks } />
<div class="main">
<slot />
</div>
<Footer { navLinks } />

<style>
</style>