<template>
  <div id="search-location">
    <div class="input-bar">
      <div class="goback" @click="routerTo">
        <Svgicon icon-class="fanhui" class="icon" />
      </div>
      <div class="searchbox">
        <i></i>
        <input type="text" />
      </div>
    </div>
    
  </div>
</template>
<script>
import Svgicon from "../components/SvgIcon.vue";

export default {
  components: {
    Svgicon
  },
  methods: {
    routerTo() {
      console.log("aa");
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
#search-location {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  .input-bar {
    padding-right: 10px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .goback {
      width: 40px;
      text-align: center;
      .icon {
        font-size: 18px;
      }
    }

    .searchbox {
      height: 30px;
      flex: 1;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      > i {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../assets/images/search.png");
        background-size: contain;
      }
      > input {
        padding: 0 10px;
        background-color: #f5f5f5;
        flex: 1;
      }
    }
  }
}
</style>
