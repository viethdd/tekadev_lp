<script>
   import globalContent from '../../data/global_content.json';
   const brandingContent = globalContent.branding
   const tekadev_item = brandingContent.find(item => item.title=="tekadev")
	const tekadev_logo_path = tekadev_item?.imagePath
   import Icon from '$lib/components/icons.svelte';
   export let items;
   export let links;
   export let title;

</script>

<footer class="seventh-section footer flex flex-col justify-between"> 
   <div class="contact-wrapper xl-col-left">
      {#each items.contact as item }
         <div class="contact-item">
            <h2>{item.title}</h2>
            <a href={`${item.href}:${item.content}`}><h4>{item.content}</h4></a>
         </div>
      {/each}
   </div>
   <div class="sitemap-wrapper xl-col-center">
      {#each links as item }
         <div class="sitemap-item">
            <a href={item.href} >{item.label}</a>
         </div>
      {/each}
   </div>
   <div class="branding-wrapper xl-col-right">
      {#each items.branding as item }
         <figure class="branding-item">
            <p>{item.content_1}</p>
            <img src={item.imagePath} alt={item.alt} width={item.footerSize} height={item.footerSize}>
            <figcaption>{item.content_2}</figcaption>
         </figure>
      {/each}
   </div>
</footer>

