<template>
  <div id="search-location">
    <div class="input-bar">
      <div class="goback" @click="routerTo">
        <Svgicon icon-class="fanhui" class="icon" />
      </div>
      <div class="searchbox">
        <i></i>
        <input type="text" v-model="inputText" ref="ipt" />
        <span class="x" v-show="showx" @click="clear"></span>
      </div>
    </div>
    <div class="dropbox">
      <div class="item" v-for="(item, index) in candidate" :key="index" @click="picAddress(item)">
        <p class="name" v-text="item.name"></p>
        <p class="detail" v-text="item.district + item.address"></p>
      </div>
    </div>
  </div>
</template>
<script>
import Svgicon from "../components/SvgIcon.vue";
import obstate from "../observable.js";
export default {
  data() {
    return {
      inputText: "",
      candidate: ""
    };
  },
  computed: {
    showx() {
      return this.inputText.trim() == "" ? false : true;
    }
  },
  components: {
    Svgicon
  },
  methods: {
    routerTo() {
      console.log("aa");
      this.$router.go(-1);
    },
    clear() {
      this.inputText = "";
    },
    picAddress(item){
      console.log('触发');
      obstate.currentRegion.address = item.name
      this.$router.push({name:'home'})
    }
  },
 
  watch: {
    inputText(val, oval) {
      let _this = this;
      let params = {
        key: "70fe29c55282cdfd0535c4507a5367db",
        keywords: val,
        city: obstate.currentRegion.adcode,
        location: obstate.currentRegion.lng + "," + obstate.currentRegion.lat,
        adcode: obstate.currentRegion.adcode
      };
      this.$axios
        .get("https://restapi.amap.com/v3/assistant/inputtips", {
          params: params
        })
        .then(data => {
          console.log(data);
          _this.candidate = data.data.tips;
        })
        .catch(err => {});
    }
  },
  activated() {
    console.log('触发');
    this.$refs.ipt.focus();
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
    width: 100%;
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
      position: relative;
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
      .x {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        right: 10px;
        margin-top: -10px;
        background: url("../assets/images/x-2.png");
        background-size: contain;
      }
    }
  }
  .dropbox {
    width: 100%;
    overflow: auto;
    padding: 0 10px;
    background-color: #fff;
    .item {
      color: #4c4440;
      padding: 5px 0;
      border-bottom: 1px solid #f5f5f5;
      .name {
        font-size: 14px;
        font-weight: 700;
      }
      .detail {
        padding-top: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>
