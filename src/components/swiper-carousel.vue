<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="item in imgList"
      :key="item"
      style="width:auto"
      >
      <img ：src="item" alt="">
      </swiper-slide
    >
  </swiper>
</template>
<script>

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
    };
  },
  props: ["imgList"],
  methods: {}
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
