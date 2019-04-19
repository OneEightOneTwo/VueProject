<template>
  <div class="common-header">
    <div class="goback" @click="routerBack" v-if="isShowLeft">
      <Svgicon :icon-class="showIconClass" class="icon" />
    </div>
    <span>{{title}}</span>
  </div>
</template>
<script>
import Svgicon from "./SvgIcon.vue";
export default {
  props: {
    title: String,
    isShowLeft: Boolean,
    showIconClass: String
  },
  components:{
      Svgicon
  },
  methods:{
      routerBack(){
          this.$router.go(-1)
      }
  }
};
</script>
<style lang="scss">
.common-header {
  position: fixed;
  width: 100%;
  height: 44px;
  z-index: 2;
  background-color: #fff;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  .goback {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon {
    font-size: 18px;
  }
}
</style>
