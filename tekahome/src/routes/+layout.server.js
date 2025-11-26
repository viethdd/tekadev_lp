/**
 * @type {import('./$types').LayoutServerLoad}
 */
import globalContent from '../../src/data/global_content.json';
import { slugify } from '$lib/utils/slugify';

export async function load(params) {
   const selectedTopLinks = globalContent.sitemap.filter(item => item.topNav == "yes");
   const sortedTopLinks = selectedTopLinks.sort(
      (a,b) => {
         const orderA = a.topNavOrder || 9999;
         const orderB = b.topNavOrder || 9999;
         return orderA - orderB
      });
   const topLinks = sortedTopLinks.map(
      link => ({
         label: link.title,
         href: slugify(link.title),
         order: link.topNavOrder
   }));

   const selectedFooterLinks = globalContent.sitemap.filter(item => item.footerNav == "yes");
   const sortedFooterLinks = selectedFooterLinks.sort(
      (a,b) => {
         const orderA = a.footerNavOrder || 9999;
         const orderB = b.footerNavOrder || 9999;
         return orderA - orderB
      });
   const footerLinks = sortedFooterLinks.map(
      link => ({
         label: link.title,
         href: slugify(link.title),
         order: link.footerNavOrder
   }));

   const footerTitle = globalContent.footer.title;

   return {
      topLinks: topLinks,
      footer: {
         links: footerLinks,
         title: footerTitle,
         content: {
            contact: globalContent.contact,
            sitemap: globalContent.sitemap,
            branding: globalContent.branding
         }
      }
   }
}