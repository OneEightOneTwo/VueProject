<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">{{
      slide.name
    }}</swiper-slide>
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
        width: 300,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
      }
      //   swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  props: ["swiperSlides"]
};
</script>
<style lang="scss">
</style>
