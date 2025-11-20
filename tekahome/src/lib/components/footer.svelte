<script>
   import favicon from '$lib/assets/favicon.svg';
   import Icon from '$lib/components/icons.svelte';
   export let items;
   // let { footer_content } = $props();
</script>

<footer class="seventh-section footer flex flex-col justify-between"> 
<div class="contact-wrapper xl-col-left">
   {#each items.contact as item }
      <div class="contact-item">
         <h2>{item.title}</h2>
         <h4>{item.content}</h4>
      </div>
   {/each}
</div>
<div class="sitemap-wrapper xl-col-center">
   {#each items.sitemap as item }
      <div class="contact-item">
         <a href={item.href} >{item.content}</a>
      </div>
   {/each}
</div>
<div class="branding-wrapper xl-col-right">
   {#each items.branding as item }
      <figure class="contact-item">
         <h4>{item.title}</h4>
         <img src={item.imagePath} alt={item.alt}>
         <p>{item.content_1}</p>
         <figcaption>{item.content_2}</figcaption>
      </figure>
   {/each}
</div>
</footer>

