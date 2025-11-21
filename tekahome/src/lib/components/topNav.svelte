<script>
   import globalContent from '../../data/global_content.json';
   const brandingContent = globalContent.branding
   const tekadev_item = brandingContent.find(item => item.title=="tekadev")
	const tekadev_logo_path = tekadev_item?.imagePath
   export let items;
</script>

<div class="top-nav-container">
   <div class="logo flex justify-center">
   <a href="#" class="text-center">
      <img class="w-12" src={tekadev_logo_path} alt="" width={tekadev_item?.topSize} height="auto">
   </a>
</div>
<nav class="top-nav">
   <ul>
      {#each items.top as link (link.href)}
         <li>
            <a href={link.href}>{link.label}</a>
         </li>
      {/each}
   </ul>
</nav>
</div>

<style>
   .top-nav-container {
      margin-top: 24px;
   }
   nav.top-nav {
      margin: 0 auto;
      position: relative;
      width: fit-content;
      display: flex;
      align-items: center;
      ul {
         position: relative;
         margin-top: 16px;
         display: inline-block;
         li {
            position: relative;
            display: inline-block;
            margin: 4px 8px;
            a {
               text-transform: capitalize;
               font-family: Arial, Helvetica, sans-serif;
               text-decoration: none;
            }
         }
      }
      
   }
</style>