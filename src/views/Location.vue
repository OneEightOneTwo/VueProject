<template>
  <div id="location">
    <CommonTitle
      title="选择收获地址"
      :isShowLeft="true"
      showIconClass="fanhui"
    />
    <div class="content">
      <div class="choice">
        <p>
          <span class="city" v-text="currentRegion.city"></span>
          <i class="icondown"></i>
          <i class="search"></i>
          <span class="tip" @click="routerTo">请输入要收货的小区/写字楼</span>
        </p>
      </div>
      <p class="notice">因各地区商品和配送服务不同，请您选择准确收货地址</p>
      <div class="location-bar">
        <i></i>
        <span class="city" v-text="currentRegion.address"></span>
        <span class="tip" v-text="tipInfo"></span>
        <span class="refresh" @click="refreshLocation"></span>
      </div>
      <div id="container"></div>
    </div>
  </div>
</template>
<script>
import CommonTitle from "../components/CommonTitle";
import obstate from "../observable.js";
export default {
  data() {
    return {
      tipInfo: "正在定位",
      map: null,
      geolocation: null,
      getDataStatus: true
    };
  },
  components: {
    CommonTitle
  },
  computed: {
    currentRegion() {
      return obstate.currentRegion;
    }
  },
  methods: {
    onComplete(data) {
      console.log(data);
      this.getDataStatus = true;
      this.tipInfo = "当前位置";
      obstate.currentRegion.adcode = data.addressComponent.adcode;
      obstate.currentRegion.building = data.addressComponent.building;
      obstate.currentRegion.city = data.addressComponent.city;
      obstate.currentRegion.address = data.formattedAddress.split("市")[1];
      obstate.currentRegion.lat = data.position.lat;
      obstate.currentRegion.lng = data.position.lng;
    },
    onError(data) {
      this.getDataStatus = true;
      this.tipInfo = "定位失败";
      obstate.locationInfo = data;
    },
    refreshLocation() {
      let _this = this;

      if (this.getDataStatus) {
        this.getDataStatus = false;
        this.geolocation.getCurrentPosition(function(status, result) {
          if (status == "complete") {
            _this.onComplete(result);
          } else {
            _this.onError(result);
          }
        });
      }
    },
    routerTo(){
        this.$router.push({name:'searchlocation'})
    }
  },

  created() {},
  mounted() {
    let _this = this;
    this.map = new AMap.Map("container", {
      resizeEnable: true
    });

    AMap.plugin("AMap.Geolocation", function() {
      _this.geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: "RB", //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
      });

      _this.map.addControl(_this.geolocation);
      _this.geolocation.getCurrentPosition(function(status, result) {
        if (status == "complete") {
          _this.onComplete(result);
        } else {
          _this.onError(result);
        }
      });
    });

    // //解析定位结果
    // function onComplete(data) {
    //   console.log(data);
    //   _this.tipInfo = "当前位置";
    //   obstate.currentRegion.city = data.addressComponent.city;
    //   obstate.currentRegion.address = data.formattedAddress.split("市")[1];
    //   obstate.locationInfo = data;
    // }
    // //解析定位错误信息
    // function onError(data) {
    //   console.log(data);
    //   _this.tipInfo = "定位失败";
    //   obstate.locationInfo = data;
    // }
  }
};
</script>
<style lang="scss">
#location {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
    .choice {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      > p {
        box-sizing: border-box;
        padding-left: 10px;
        width: 90%;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        border-radius: 4px;
        background-color: #f5f5f5;
        .icondown {
          display: inline-block;
          height: 10px;
          width: 10px;
          background: url("../assets/images/arrowdown-2.png");
          background-size: contain;
          margin: 0 5px;
          vertical-align: middle;
        }
        .search {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin: 0 4px;
          background: url("../assets/images/search.png");
          background-size: contain;
          vertical-align: middle;
        }
      }
    }
    .notice {
      width: 100%;
      color: #f4a22d;
      font-size: 12px;
      height: 36px;
      line-height: 36px;
      padding-left: 10px;
      background-color: #f5f5f5;
    }
    .location-bar {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      line-height: 40px;
      background-color: #fff;
      > i {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url("../assets/images/location.png");
        background-size: contain;
        vertical-align: middle;
      }
      .city {
        margin-left: 5px;
        font-size: 14px;
      }
      .tip {
        margin-left: 10px;
        font-size: 14px;
        color: #969696;
      }
      .refresh {
        float: right;
        margin-top: 10px;
        margin-right: 15px;
        width: 22px;
        height: 22px;
        background: url("../assets/images/refresh.png");
        background-size: contain;
        vertical-align: middle;
      }
    }
  }
  #container {
    width: 100%;
    flex: 1px;
  }
}
</style>
