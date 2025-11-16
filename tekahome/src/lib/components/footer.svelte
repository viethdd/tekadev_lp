<script>
   import favicon from '$lib/assets/favicon.svg';
   let { navLinks } = $props();
</script>

<footer class="flex flex-row justify-center lg:justify-between lg:w-10/12 flex-items">
   <div class="footer-top-container footer-section">
      <div class="logo flex justify-center flex-col text-center flex-item">
         <a href="" class="text-center flex justify-center"><img class="w-18" src={favicon} alt=""></a>
         <p>Phần Mềm BĐS</p>
      </div>
      <ul class="primary flex-item">
         <h3 class="label"> Phần Mềm</h3>
         {#each navLinks.top as link (link.href) }
            <li>
               <a href={link.href}>{link.label}</a>
            </li>
         {/each}
      </ul>
      <ul class="sublinks flex-item">
         <h3 class="label">SEO</h3>
         {#each navLinks.footer as link (link.href) }
            <li>
               <a href={link.href}>{link.label}</a>
            </li>
         {/each}
      </ul>
      <ul class="contact flex-item">
         <h3 class="label">Liên Hệ</h3>
         <p>090.391.1999</p>
         {#each navLinks.contact as link (link.href) }
            <li>
               <a href={link.href}>{link.label}</a>
            </li>
         {/each}
      </ul>
   </div>
   <div class="footer-bottom-container flex flex-items footer-section">
         <span>TekaDev® 2025</span>
         <span>Powered By TekaGroup™</span>
         <span>some placeholder</span>
   </div>
</footer>

<style>
   footer {
      width: 90vw;
      text-align: left;
      margin: 0 auto;
      margin-top: 24px;
      padding: 24px 0 0 0;
      /* background: rgba(255,0,0,.2); */
      align-items: baseline;
      flex-direction: column;
   }
   footer .footer-section{
      display: flex;
      flex-direction: row;
      margin-bottom: 24px;
   }
   footer .footer-section:first-child {
      position: relative;
      margin-top: 40px;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 40px;
      border-bottom: 1px solid #eee;
   }
   footer .footer-section:nth-child(2) {
      padding: 0 16px;
      width: 100%;
      justify-content: space-between;
      display: flex;
      font-size: 0.75rem;
      letter-spacing: .1vw;
   }
   /* footer .footer-section:nth-child(2) {
      width: 100%;
   } */
   footer .footer-section:first-child .logo {
      margin: 0 24px 0 0;
      width: 28vw;
   }
   footer .footer-section:first-child ul {
      margin-left: 40px;
   }
   footer.flex-items {
      justify-content: space-evenly;
   }
   footer.flex-items .flex-item {
      margin: 0 16px;
      position: relative;
   }
   footer.flex-items .flex-item h3 {
      margin-bottom: 8px;
   }
   footer.flex-items .flex-item li {
      margin-bottom: 8px;
   }
   h3 {
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
   }
</style>