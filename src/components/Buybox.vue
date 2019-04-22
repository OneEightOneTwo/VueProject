<template>
  <div class="buybox">
    <div class="shopCar_wrap">
      <div class="shopCar-checkbox">
        <img class="s-" :src="bool?noSelected:selected" @clcik="selectedAll" alt>
      </div>
      <p>
        <span>次日到达</span>
        <span>删除</span>
      </p>
    </div>
    <!-- 购物车渲染 -->
    <div class="shopCar-buybox" v-for="(good,index) in goods" :key="index">
      <div class="buybox-context">
        <div class="buybox-checkbox">
          <img class="s-" :src="good.bool?noSelected:selected" @click="good.bool=!good.bool" alt>
        </div>
        <div class="buybox-main">
          <div class="buybox-img">
            <img :src="good.goodsPic" alt>
          </div>
          <div class="buybox-cons">
            <div class="buybox-title" v-text="good.title"></div>
            <div class="buybox-coupon">满69减10</div>
            <div class="buybox-oldprice">
              <span>￥{{good.salePrice}}</span>
              <span>会员8.9折</span>
            </div>
            <div class="buybox-count">
              <div class="buybox-saleprice">￥{{good.price}}</div>
              <div class="buybox-nums">
                <div class="cutnum" @click="cutNum(index)">-</div>
                <input class="nownum" type="text" :value="good.minNum" style="width:30px">
                <div class="addnum" @click="addNum(index)">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ShopcarAds 购物车结算-->
    <div class="shopcarAds">
      <ShopcarAds/>
      <!-- 购物车结算模块 -->
      <div class="shopcar-count">
        <div class="count-price">
          <div class="count-price-left">商品总价</div>
          <div class="count-price-right">￥{{sum}}</div>
        </div>
        <div class="count-coupons">
          <div class="count-coupons-left">商品券</div>
          <div class="count-coupons-right">登陆后查看商品券</div>
        </div>
        <div class="count-redbag">
          <div class="count-redbag-left">红包</div>
          <div class="count-redbag-right">登陆后查看红包></div>
        </div>
        <div class="count-pay">
          <div class="count-pay-left">商品实付</div>
          <div class="count-pay-right">￥{{sum}}</div>
        </div>
        <div class="count-shipping">
          <div class="count-shipping-left">配送费</div>
          <div class="count-shipping-right">包邮</div>
        </div>
        <div class="count-total">
          <div class="count-total-right">
            <span>合计</span>
            <span style="color:red">￥{{sum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopcarAds from "./ShopcarAds.vue";
import api from "../axios/api.js";
import { isIP } from "net";
// import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      bool: true,
      selected: require("../assets/s-checkbox.png"),
      noSelected: require("../assets/checkbox.png")
    };
  },
  components: {
    ShopcarAds
  },
  methods: {
    // 数量增加
    addNum(index) {
      this.goods[index].minNum++;

      // 设置数量最大值
      if (this.goods[index].minNum >= this.goods[index].maxNum) {
        this.goods[index].minNum = this.goods[index].maxNum;
      }
    },
    // 数量减少
    cutNum(index) {
      this.goods[index].minNum--;
      // 设置数量最小值
      if (this.goods[index].minNum <= 1) {
        this.goods[index].minNum = 1;
      }
    },

    // 全选中
    selectedAll() {}
  },
  computed: {
    // 计算总价
    sum() {
      var total = 0;
      for (var i = 0; i < this.goods.length; i++) {
        if (!this.goods[i].bool) {
          total +=
            (Number(this.goods[i].minNum) * this.goods[i].salePrice).toFixed(
              2
            ) * 100;
        }
      }
      return total / 100;
    }
  },
  // 购物车 数据请求接口
  async created() {
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/buybox"
    );

    this.goods = res.data.data[0].articles;
  }
};
</script>

<style lang="scss">
.buybox {
  height: 100%;
  width: 100%;
  /* 次日送达 */
  .shopCar_wrap {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-left: 10px;
    // box-sizing: border-box;
    p {
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
  }
  .shopCar-buybox {
    width: 100%;
    height: 114px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(245, 243, 243);
    .buybox-context {
      width: 100%;
      height: 74px;
      display: flex;
      flex-direction: row;
      .buybox-checkbox {
        width: 12%;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: inline-block;
          width: 26px;
          height: 26px;
        }
      }
      .buybox-main {
        width: 88%;
        height: 74px;
        display: flex;

        .buybox-img {
          width: 16%;
          height: 70px;
          img {
            display: inline-block;
            width: 70px;
            height: 70px;
          }
        }
        .buybox-cons {
          width: 84%;
          display: flex;
          flex-direction: column;
          padding-left: 30px;
          box-sizing: border-box;
          .buybox-title {
            width: 100%;
            height: 20px;
            font-size: 14px;
            color: black;
          }
          .buybox-coupon {
            width: 55px;
            height: 16px;
            font-size: 12px;
            color: rgb(218, 183, 183);
            border: 1px solid rgb(245, 243, 243);
          }
          .buybox-oldprice {
            box-sizing: border-box;
            padding-top: 10px;
            span:nth-child(1) {
              display: inline-block;
              width: 30px;
              height: 12px;
              font-size: 10px;
              color: rgb(77, 76, 76);
              margin-right: 10px;
            }
            span:nth-child(2) {
              display: inline-block;
              width: 64px;
              height: 14px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              color: rgb(235, 85, 85);
              border: 1px solid rgb(235, 85, 85);
              border-radius: 2px;
              margin-left: 10px;
            }
          }
          .buybox-count {
            display: flex;
            flex-direction: row;
            .buybox-saleprice {
              width: 66%;
              font-size: 16px;
              color: crimson;
            }
            .buybox-nums {
              width: 34%;
              height: 22px;
              display: flex;
              .cutnum {
                width: 20px;
                height: 20px;
                border: 1px solid gray;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .addnum {
                width: 20px;
                height: 20px;
                border: 1px solid gray;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              input {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  // 广告模块
  .shopcarAds {
    width: 100%;
    height: 100%;
    background: rgb(245, 243, 243);
    padding: 10px 0;
    box-sizing: border-box;
    // 购物车结算模块
    .shopcar-count {
      width: 94%;
      height: 100%;
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      background: white;
      border: 1px solid rgb(245, 243, 243);
      border-radius: 10px;
      padding-left: 16px;
      padding-right: 16px;
      box-sizing: border-box;
      .count-price {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        .count-price-left {
          flex: 1;
          justify-content: flex-start;
        }
        .count-price-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          color: gray;
        }
      }
      .count-coupons {
        width: 100%;
        height: 40px;
        margin: auto;
        display: flex;
        align-items: center;
        .count-coupons-left {
          flex: 1;
          justify-content: flex-start;
        }
        .count-coupons-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
      }
      .count-redbag {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .count-redbag-left {
          flex: 1;
          justify-content: flex-start;
        }
        .count-redbag-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          color: gray;
        }
      }
      .count-pay {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .count-pay-left {
          flex: 1;
          justify-content: flex-start;
        }
        .count-pay-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          color: gray;
        }
      }
      .count-shipping {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .count-shipping-left {
          flex: 1;
          justify-content: flex-start;
        }
        .count-shipping-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
      }
      .count-total {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .count-total-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>


