<template>
  <div>
    <SearchBar />
    这是首页
    <SwiperSlide :swiperSlides="categoryList"/>
  </div>
</template>
<script>
import SwiperSlide from '../../components/swiper-slide';
import SearchBar from "../../components/SearchBar";
export default {
  name: "index",
  components: {
    SwiperSlide,
    SearchBar
  },
  computed:{
    categoryList(){
      return this.$store.getters.categoryList
    }
  }
};
</script>
