<template>
  <div>
    这是首页
    <SwiperSlide :swiperSlides="categoryList"/>
  </div>
</template>
<script>
import SwiperSlide from '../../components/swiper-slide'
export default {
  name: "index",
  components: {
    SwiperSlide
  },
  computed:{
    categoryList(){
      return this.$store.getters.categoryList
    }
  }
};
</script>
