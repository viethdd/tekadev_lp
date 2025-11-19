<script>
// import { 
//    Icon, 
//    ArrowUp,
//    ArrowDown,
// } from "svelte-hero-icons";

import {
  Map, 
  DollarSign, 
  Phone, 
  ChevronDown,
  ArrowRight,
  MouseIcon
} from 'lucide-svelte';

/** @type {import('./$types').PageData} */
export let data;
</script>

<section class="top-section flex flex-col justify-between">
   <div class="headline-wrapper flex flex-col justify-center sm:text-center align-middle">
      <h1 class="headline-bold antialiased font-extrabold sm:text-3xl sm:text-center">GIẢI PHÁP PHẦN MỀM BẤT ĐỘNG SẢN</h1>
      <p class="headline-caption">Trợ thủ đắc lực cho Quản lý Thông tin giỏ hàng</p>
      <p class="headline-caption">Nâng tầm Chuyên nghiệp cho Môi giới và Doanh nghiệp</p>
      <div class="call-to-actions">
         <button class="secondary" name="Liên hệ">Liên Hệ</button>
         <button class="primary" name="Xem Tính Năng">Xem Tính Năng</button>
      </div>
   </div>
   <div class="explore text-center">
      <a href="#">
         <p>Khám Phá Tính Năng</p>
         <MouseIcon class="w-6 h-6 text-black-900" />
      </a>
   </div>
</section>

<style>
   section.top-section {
      height: 90vh;
      background-color: oklch(90,12,1);
      margin: 0 auto;
      vertical-align: middle;
      position: relative;
      .headline-wrapper {
         font-family: Arial, Helvetica, sans-serif;
         margin: auto;
         vertical-align: middle;
         /* text-align: center; */
         position: relative;
         h1 {
            text-transform: capitalize;
            font-family: "Saira", sans-serif;
         }
         p {
         }
         button{
            cursor: pointer;
         }
      }
      .explore {
         position: relative;
         bottom: 1vh;
         text-align: center;
         margin:  0 auto;
      }
      .explore a {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
      }
   }
</style>