<script>
   import favicon from '$lib/assets/favicon.svg';
   export let items;
</script>

<div class="top-nav-container">
   <div class="logo flex justify-center">
   <a href="#" class="text-center">
      <img class="w-12" src={favicon} alt="">
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