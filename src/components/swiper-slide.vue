<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="(slide, index) in swiperSlides"
      :key="index"
      style="width:auto"
      ><span
        class="swiper-text"
        :class="{ 'swiper-text-active': slide.default }"
        >{{ slide.name }}</span
      ></swiper-slide
    >
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true
      }
      //   swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  props: ["swiperSlides"]
};
</script>
<style lang="scss">
.swiper-text {
  line-height: 42px;
  font-size: 14px;
  margin: 0 15px;
  display: inline-block;
  border-bottom: 2px solid #fff;
  box-sizing: border-box;
}
.swiper-text-active {
  border-bottom-color: #ff4891;
  color: #ff4891;
}
</style>
