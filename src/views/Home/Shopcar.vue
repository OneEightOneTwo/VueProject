<template>
  <div class="shopCar">
    <div class="shopCar_header">
      <div class="shopCar_header_img">
        <img src="../../assets/position.png" alt>
        <a href="javascript:;">合你意水果店</a>
        <img src="../../assets/arrows_down.png" alt>
      </div>
    </div>
    <div class="shopCar_members">
      <div class="members-img">
        <img src="../../assets/members.png" alt>
      </div>
      <div class="members-text">开通优选会员，本单立省10元</div>
    </div>
    <div class="shopCar-others"></div>
    <!-- buybox 模块-->
    <Buybox/>
    <!-- 推荐 recommend -->
    <div class="shopcar-recommend">
      <h2>推荐商品</h2>
      <!-- 购物车 产品推荐 模块 -->
      <ShopcarRecommend/>
    </div>
    <div class="shopCar-payment">
      <div class="shopCar-payment-left">
        <div class="payment-left-img">
          <img class="s-" src="../../assets/checkbox.png" alt>
        </div>
        <div class="payment-selectedAll">全选</div>
        <div class="payment-total">
          <p>
            <span>合计</span>
            <span style="color:deeppink;">￥49.99</span>
          </p>
          <p style="font-size:12px; color:#ccc;">
            <span>配送费</span>
            <span>￥10</span>
          </p>
        </div>
      </div>
      <div class="shopCar-payment-btn">去结算</div>
    </div>
  </div>
</template>
<script>
import Buybox from "../../components/Buybox";
import ShopcarAds from "../../components/ShopcarAds";
// import ShopcarCount from "../../components/ShopcarCount";
import ShopcarRecommend from "../../components/ShopcarRecommend";
export default {
  components: {
    Buybox,
    ShopcarAds,
    ShopcarRecommend
  }
};
</script>
<style lang="scss">
.shopCar {
  .shopCar_header {
    height: 48px;
    .shopCar_header_img {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      background: white;
      a {
        display: inline-block;
        font-size: 16px;
        color: black;
        padding-left: 10px;
        padding-right: 10px;
      }
      img {
        display: inline-block;
        width: 16px;
        height: 16px;
      }
    }
  }

  .shopCar_members {
    width: 100%;
    height: 38px;
    padding-left: 10px;
    // padding-top: 10px;
    box-sizing: border-box;
    background: rgb(247, 234, 217);
    display: flex;
    align-items: center;
    .members-img {
      width: 25%;
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
      width: 75%;
      height: 38px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
  .shopCar-others {
    width: 100%;
    height: 20px;
    background: rgb(245, 242, 242);
  }
  //
  .shopCar-checkbox {
    width: 12%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: inline-block;
      width: 26px;
      height: 26px;
      // display: flex;
      // align-items: center;
    }
  }
  // 商品推荐
  .shopcar-recommend {
    width: 100%;
    height: 100%;
    background: rgb(245, 243, 243);
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
  .shopCar-payment {
    width: 100%;
    height: 48px;
    background: rgb(250, 247, 247);
    position: fixed;
    left: 0;
    bottom: 42px;
    display: flex;
    .shopCar-payment-left {
      flex: 66%;
      display: flex;
      justify-content: center;
      align-items: center;
      .payment-left-img {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          display: inline-block;
          width: 26px;
          height: 26px;
        }
      }
      .payment-selectedAll {
        flex: 2;
      }
      .payment-total {
        flex: 6;
      }
    }
    .shopCar-payment-btn {
      flex: 34%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: beige;
      background: deeppink;
    }
    .shopCar-payment-btn::after {
      content: " ";
      display: inline-block;
      margin-left: 0.1875rem;
      border-color: transparent transparent transparent #fff;
      border-width: 0.25rem 0 0.25rem 0.4375rem;
      border-style: solid;
      width: 0;
      height: 0;
    }
  }
}
</style>