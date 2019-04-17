<template>
  <div>
    <div class="shopCar_header">
      <img src="../../assets/position.png" alt>
      <a href="javascript:;">合你意水果店</a>
      <img src="../../assets/arrows_down.png" alt>
    </div>
    <div class="shopCar_members">
      <div class="members-img">
        <img src="../../assets/members.png" alt>
      </div>
      <div class="members-text">开通优选会员，本单立省10元</div>
    </div>
    <div class="shopCar-others"></div>
    <div class="shopCar_wrap">
      <div class="shopCar-checkbox">
        <img class="s-" src="../../assets/checkbox.png" alt>
      </div>
      <p>
        <span>次日到达</span>
        <span>包邮</span>
      </p>
    </div>
    <!-- buybox -->
    <Buybox/>
    <Buybox/>
    <!-- ShopcarAds -->
    <div class="shopcarAds">
      <ShopcarAds/>
      <ShopcarCount/>
    </div>
    <!-- 推荐 recommend -->
    <div class="shopcar-recommend">
      <h2>推荐商品</h2>
      <ShopcarRecommend/>
    </div>
  </div>
</template>
<script>
import Buybox from "../../components/Buybox";
import ShopcarAds from "../../components/ShopcarAds";
import ShopcarCount from "../../components/ShopcarCount";
import ShopcarRecommend from "../../components/ShopcarRecommend";
export default {
  components: {
    Buybox,
    ShopcarAds,
    ShopcarCount,
    ShopcarRecommend
  }
};
</script>
<style lang="scss">
.shopCar_header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: white;
}
.shopCar_header a {
  display: inline-block;
  font-size: 16px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
}
.shopCar_header img {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.shopCar_members {
  width: 100%;
  height: 38px;
  background: rgb(247, 234, 217);
  display: flex;
  align-items: center;
  .members-img {
    width: 12%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 80px;
      height: 18px;
    }
  }
  .members-text {
    width: 88%;
    height: 38px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
}
.shopCar-others {
  width: 100%;
  height: 20px;
  background: rgb(228, 227, 227);
}
/* 次日送达 */
.shopCar_wrap {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-left: 10px;
  // box-sizing: border-box;
}
.shopCar-checkbox {
  width: 12%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shopCar-checkbox img {
  display: inline-block;
  width: 26px;
  height: 26px;
  // display: flex;
  // align-items: center;
}
.shopCar_wrap p {
  width: 88%;
  height: 44px;
  display: flex;
  span:nth-child(1) {
    display: inline-block;
    width: 80%;
    height: 44px;
    display: flex;
    align-items: center;
  }
  span:nth-child(2) {
    display: inline-block;
    width: 20%;
    height: 44px;
    display: flex;
    align-items: center;
  }
}
// 广告模块
.shopcarAds {
  width: 100%;
  height: 100%;
  background: rgb(207, 206, 206);
  padding: 10px 0;
  box-sizing: border-box;
}

// 商品推荐
.shopcar-recommend {
  width: 100%;
  height: 100%;
  background: rgb(207, 206, 206);
  padding: 10px 0;
  box-sizing: border-box;
  h2 {
    width: 90%;
    height: 30px;
    margin: auto;
    box-sizing: border-box;
    font-size: 16px;
    color: rgb(68, 68, 68);
  }
}
</style>