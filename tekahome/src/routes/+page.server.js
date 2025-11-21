/**
 * @type {import('./$types').PageServerLoad}
 */
import homeSectionsData from '$data/home_sections.json'
export async function load(params) {

   return {
      // object type
      top_section: homeSectionsData.topSection,
      intro_section: homeSectionsData.introSection,
      intro_features: homeSectionsData.introEachFeatures,
      why_choose: homeSectionsData.whynewchoose,
      home_services: homeSectionsData.whycustomerchoose,
      home_pricing: homeSectionsData.pricing 
   }
}