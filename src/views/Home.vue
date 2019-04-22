<template>
  <div>
    <!-- <keep-alive>
      <router-view />
    </keep-alive>-->
    <!-- 动态组件 -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <VfooterBar/>
  </div>
</template>
<script>
import VfooterBar from "../components/FooterBar";
import obstate from "../observable.js";
import api from "../axios/api.js";
import Index from "./Home/Index.vue";
import Classify from "./Home/Classify.vue";
import Discove from "./Home/Discove.vue";
import Shopcar from "./Home/Shopcar.vue";
import Mine from "./Home/Mine.vue";

export default {
  data() {
    return {};
  },
  computed: {
    componentName() {
      return obstate.footerBar.activeItem;
    }
  },
  components: {
    VfooterBar,
    Index,
    Classify,
    Discove,
    Shopcar,
    Mine
  },
  async created() {
    //发送定位信息
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/index/init",
      {
        lat: "",
        lng: ""
      }
    );
    // console.log(res);
    obstate.categoryList = res.data.category_list;
    // 请求接口，获取index页面数据
    for (let i = 0; i < obstate.categoryList.length; i++) {
      if (obstate.categoryList[i].default === 1) {
        obstate.categorydata[obstate.categoryList[i].category_id] =
          res.data.product_list;
        obstate.activeCategory = obstate.categoryList[i].category_id;
        break;
      }
    }
  }
};
</script>
<style lang="scss">
</style>