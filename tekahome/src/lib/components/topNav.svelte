<script>
   import globalContent from '../../data/global_content.json';
   import Icon from '$lib/components/icons.svelte';
   const brandingContent = globalContent.branding
   const tekadev_item = brandingContent.find(item => item.title=="tekadev")
	const tekadev_logo_path = tekadev_item?.imagePath
   const iconContent = globalContent.menu;
   export let items;
</script>

<div class="top-nav-container">
   <a href="/" class="text-center logo">
      <img class="w-12" src={tekadev_logo_path} alt="" width={tekadev_item?.topSize} height="auto">
   </a>
   <nav class="top-nav-links">
      <ul>
         {#each items as link (link.href)}
            <li>
               <a href={link.href}>{link.label}</a>
            </li>
         {/each}
      </ul>
   </nav>
   <button role="menu"> {iconContent.content}
      <Icon name={iconContent.iconName} />
   </button>
</div>