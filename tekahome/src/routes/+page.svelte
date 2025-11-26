<script lang="ts">
   import HomeTopSection from '$lib/components/home_sections/home_topSection.svelte';
   import HomeIntroSection from '$lib/components/home_sections/home_introSection.svelte';
	import ProductFeaturesList from '$lib/components/home_sections/home_productFeaturesList.svelte';
   import WhyChoose from '$lib/components/home_sections/home_whyChoose.svelte';
   import HomeServices from '$lib/components/home_sections/home_services.svelte';
   import HomePricing from '$lib/components/home_sections/home_pricing.svelte';
   import SvelteSeo from 'svelte-seo';

   const pageUrl = "/";
	const pageTitle = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản";
	const pageDescription = "TekaReal - Phần Mềm Giải Pháp Bất Động Sản"
   /** @type {import('./$types').PageData} */
   export let data;
   const { top_section, intro_section,intro_features, why_choose, home_services, home_pricing 
         } = data;

</script>

<svelte:head>
  <SvelteSeo 
    title={pageTitle}
    description={pageDescription}
    openGraph={{
      title: pageTitle,
      url: pageUrl,
      type: 'webpage',
      images: [{ url: `${pageUrl}/default-share-image.jpg` }]
    }}
    twitter={{
      card: 'summary_large_image',
      site: '@YourHandle',
      title: pageTitle,
    }}
  />
</svelte:head>

<section id="topSection" class="top-section flex flex-col justify-between">
   <HomeTopSection items={ top_section } />
</section>

<!-- section 2 -->
<section class="second-section flex flex-col justify-between">
   <HomeIntroSection items={ intro_section } />
</section>

<!-- section 3 -->
<section class="third-section flex flex-col justify-between">
   <ProductFeaturesList items = { intro_features } />
</section>

<!-- section 4 -->
<section class="fourth-section flex flex-col justify-between"> 
   <WhyChoose items = { why_choose } />
</section>

<!-- section 5 -->
<section class="fifth-section flex flex-col justify-between"> 
   <HomeServices items={ home_services } />
</section>

<!-- section 6 -->
<section class="sixth-section flex flex-col justify-between"> 
   <HomePricing items = { home_pricing } />
</section>
