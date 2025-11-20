/**
 * @type {import('./$types').PageServerLoad}
 */
import homeData from '$data/home_01.json'
export async function load(params) {

   return {
      // object type
      product_features: { 
         quanly: homeData.quanly, 
         bando: homeData.bando,
         baomat: homeData.baomat 
      },
      why_choose: {
         quanly: homeData.whychoose
      },
      home_services: {
         service: homeData.services,
         customers: homeData.customers
      },
      home_pricing: {
         pricing: homeData.pricing
      }
   }
}