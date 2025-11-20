/**
 * @type {import('./$types').PageServerLoad}
 */
import homeFeatures from '$data/home_01.json'
import WhyChoose from '$lib/components/why_choose.svelte'
export async function load(params) {
   
   return {
      // object type
      product_features: { 
         quanly: homeFeatures.quanly, 
         bando: homeFeatures.bando,
         baomat: homeFeatures.baomat 
      },
      why_choose: {
         why: homeFeatures.whychoose
      }
   }
}