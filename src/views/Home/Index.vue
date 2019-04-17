<template>
  <div>
    <SearchBar/>
    <div class="category_nav">
      <div class="category_slidebar">
        <SwiperSlide :swiperSlides="categoryList"/>
      </div>
      <div class="showall"></div>
    </div>
  </div>
</template>
<script>
import SwiperSlide from "../../components/swiper-slide";
import SearchBar from "../../components/SearchBar";
export default {
  name: "index",
  components: {
    SwiperSlide,
    SearchBar
  },
  computed: {
    categoryList() {
      return this.$store.getters.categoryList;
    }
  }
};
</script>
<style lang="scss">
.category_nav {
  width: 100%;
}
</style>