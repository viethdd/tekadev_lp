/**
 * @type {import('./$types').LayoutServerLoad}
 */
import globalContent from '../../src/data/global_content.json';
export async function load(params) {
   const topLinks = [
      // {label:'Home', href: '/'},
      {label:'Tính Năng', href: '/features/'},
      {label:'Bản Đồ Quy Hoạch', href: '/map/'},
      {label:'Bảng Giá', href: '/pricing/'},
      // {label:'Liên Hệ', href: '/contact/'},
   ]

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