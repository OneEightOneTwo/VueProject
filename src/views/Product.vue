<template>
  <div>
    详情页
    <SwiperCarousel :imgList="productInfo.carsourlImgList" />
  </div>
</template>
<script>
import SwiperCarousel from "../components/swiper-carousel";
import api from "../axios/api.js";

export default {
  data() {
    return {
      productInfo: {}
    };
  },
  async created() {
    let gid = this.$route.query.gid;
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/product",
      {
        gid: gid
      }
    );
    this.productInfo = res.data.product;
  },
  components: {
    SwiperCarousel
  }
};
</script>
<style lang="scss">
</style>
