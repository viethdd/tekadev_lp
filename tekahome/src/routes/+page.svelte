<script lang='ts'>
	import ProductFeaturesList from '$lib/components/home_productFeaturesList.svelte';
   import WhyChoose from '$lib/components/home_whyChoose.svelte';
   import HomeServices from '$lib/components/home_services.svelte';
   import HomePricing from '$lib/components/home_pricing.svelte';

   import {
   Map, 
   DollarSign, 
   Phone, 
   ChevronDown,
   ArrowRight,
   MoveDown,
   MouseIcon,
   Table, Table2, MapIcon, ShieldCheck

   } from 'lucide-svelte';
   /** @type {import('./$types').PageData} */
   export let data;
   const { product_features, 
   why_choose, 
   home_services,
   home_pricing } = data;
</script>

<section class="top-section flex flex-col justify-between">
   <div class="headline-wrapper flex flex-col justify-center sm:text-center align-middle">
      <div class="xl-col-left portion-top">
         <div class="product-logo-container">
            <img src="" alt="" class="prod-tekareal-logo">
            <p>Phần mềm quản lý bất động sản</p>
         </div>
         
         <div class="product-tags-container">
            <span class="product-tag">#thông tin</span>
            <span class="product-tag">#chi tiết</span>
            <span class="product-tag">#tìm kiếm</span>
            <span class="product-tag">#bản đồ quy hoạch</span>
            <span class="product-tag">#nhân sự</span>
            <span class="product-tag">#công ty</span>
            <span class="product-tag">#cá nhân</span>
            <span class="product-tag">#bảng giá</span>
         </div>
      </div>

      <div class="headline-photo xl-col-right">
         <img src="" alt="">
      </div>

      <div class="headline-wrapper portion-bottom">
         <h1 class="headline-bold antialiased font-extrabold sm:text-3xl sm:text-center">TỰ TIN CHỐT DEAL</h1>
         <p class="headline-caption">Quản lý từng chi tiết dữ liệu bất động sản sẽ mang đến sự tiện lợi và tự tin khi tư vấn cho khách hàng</p>
         <!-- <p class="headline-caption">Nâng tầm Chuyên nghiệp cho Môi giới và Doanh nghiệp</p> -->
         <div class="call-to-actions">
            <!-- <button class="secondary" name="Liên hệ">Liên Hệ</button> -->
            <button class="primary" name="Xem Tính Năng"><MoveDown class="w-6 h-6 text-black-900" />Khám Phá</button>
         </div>
      </div>
      
   </div>
   
</section>

<!-- section 2 -->
<section class="second-section flex flex-col justify-between">
   <div class="section-title-wrapper">
      <div class="eyebrown-title">
         <h3>Giới thiệu tính năng</h3>
      </div>
   </div>

   <div class="section-main">
      <div class="xl-col-left">
         <div class="section-detail-wrapper">
            <div class="tagline">
               <h3>
                  Công cụ hỗ trợ dành cho môi giới chuyên nghiệp
               </h3>
            </div>
            <ul class="details">
               <li>Thao tác nhập thông tin và quản lý kho dữ liệu thông tin bất động sản nhanh chóng.</li>
               <li>Tìm kiếm đa năng với bộ lọc linh hoạt.</li>
               <li>Bản đồ quy hoạch Tp.HCM (+Bình Dương, Vũng Tàu)</li>
               <li>Tối ưu hoá giao diện trên tất cả màn hình thiết bị.</li>
            </ul>
         </div>
      </div>
      <div class="xl-col-right features-wrapper">
         <div class="feature-col">
            <Table class="w-6 h-6"></Table>
            <span>Tính năng quản lý </span>
            <ChevronDown class="w-6 h-6 text-orange-600" />
            <div class="overlay-bottom"></div>
         </div>
         <div class="feature-col">
            <MapIcon class="w-6 h-6"></MapIcon>
            <span>Bản đồ quy hoạch</span>
            <ChevronDown class="w-6 h-6 text-orange-600" />
            <div class="overlay-bottom"></div>
         </div>
         <div class="feature-col">
            <ShieldCheck class="w-6 h-6"></ShieldCheck>
            <span>Tính năng bảo mật</span>
            <ChevronDown class="w-6 h-6 text-orange-600" />
            <div class="overlay-bottom"></div>
         </div>
      </div>
   </div>
</section>

<!-- section 3 -->
<section class="third-section flex flex-col justify-between">
   <div class="section-title-wrapper">
      <div class="eyebrown-title">
         <h4>Giới thiệu tính năng</h4>
      </div>
   </div>
   <div class="section-main">
      <div class="xs-row-top xl-col-left">
         <div class="tab-feature"></div>
         <div class="tab-feature highlight">
            <ProductFeaturesList { product_features } />
         </div>
      </div>
      <div class="xs-row-bot xl-col-right">
         <img src="" alt="">
      </div>
   </div>
</section>

<!-- section 4 -->
<section class="fourth-section flex flex-col justify-between"> 
   <div class="section-title-wrapper">
      <div class="eyebrown-title">
         <h4>Giới thiệu tính năng</h4>
      </div>
   </div>
   <div class="section-main">
      <div class="tag-line">
         <h3>Dễ dàng mở rộng</h3>
         <h3>năng suất & tiềm năng</h3>
      </div>
      <div class="xs-row-top xl-col-left">
            <WhyChoose items = { why_choose } />
         <div class="tab-feature"></div>
      </div>
      <div class="xs-row-bot xl-col-right">
         <img src="" alt="">
      </div>
   </div>
</section>

<!-- section 5 -->
<section class="fifth-section flex flex-col justify-between"> 
   <div class="section-title-wrapper">
      <div class="eyebrown-title">
         <h3>Vì sao đối tác chọn TekaReal</h3>
      </div>
   </div>
   <div class="section-main">
      <div class="tagline">
         <h3>
            dịch vụ chăm sóc khách hàng
         </h3>
      </div>
      <div class="details">
         <HomeServices items={ home_services } />
      </div>
      </div>

      <div class="xs-row-bot xl-col-right">
         <img src="" alt="">
      </div>
</section>

<!-- section 6 -->
<section class="sixth-section flex flex-col justify-between"> 
   <div class="section-title-wrapper">
      <div class="eyebrown-title">
         <h3>Các gói sản phẩm</h3>
      </div>
      <div class="sidebar xl-col-right">
         <span class="btn-secondary">
            <a href="#">Tải bản báo giá (PDF)</a>
         </span>
         <span class="btn-secondary">
            <a href="#">Liên hệ đặt server riêng</a>
         </span>
         <span class="btn-secondary">
            <a href="#">Gói siêu doanh nghiệp</a>
         </span>
      </div>
   </div>

   <div class="section-main">
      <div class="tagline">
      </div>
      <div class="details">
         <HomePricing items={ home_pricing } />
      </div>
   </div>

   <div class="xs-row-bot xl-col-right">
      <img src="" alt="">
   </div>
</section>

<style>
   section.top-section {
      height: auto;
      background-color: oklch(90,12,1);
      margin: 0 auto;
      vertical-align: middle;
      position: relative;
      .headline-wrapper {
         font-family: Arial, Helvetica, sans-serif;
         margin: auto;
         vertical-align: middle;
         text-align: left;
         position: relative;
         h1 {
            text-transform: capitalize;
            font-weight: bold;
            font-family: "Saira", sans-serif;
         }
         p {
         }
         button{
            cursor: pointer;
         }
      }
   }
</style>