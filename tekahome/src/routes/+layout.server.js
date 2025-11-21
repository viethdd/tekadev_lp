/**
 * @type {import('./$types').LayoutServerLoad}
 */
import globalContent from '../../src/data/global_content.json';
import { slugify } from '$lib/utils/slugify';

export async function load(params) {
   const selectedTopLinks = globalContent.sitemap.filter(item => item.topNav == "yes")
   const topLinks = selectedTopLinks.map(
      link => ({
         label: link.title,
         href: slugify(link.title)
      })
   )

   const subLinks = [
      {label: 'Blog', href: '/blog'},
      {label: 'Thư viện', href: '/library'},
      {label: 'Chính sách Bảo mật', href: '/tos'},
      {label: 'Chính sách Sử dụng', href: '/tou'},
   ]
   const contactLinks = [
      {label: 'Liên hệ', href: '#contact'},
      {label: 'Email', href: 'mailto:tekadev@gmail.com'},
   ]
   return {
      nav_links: {
         top: topLinks,
         footer: subLinks,
         contact: contactLinks
      },
      footer_content: {
         contact: globalContent.contact,
         sitemap: globalContent.sitemap,
         branding: globalContent.branding
      }
   }
}