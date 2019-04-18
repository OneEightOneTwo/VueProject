<template>
  <div id="product" :key="productInfo.goodId">
    <div class="product-header">
      <div class="goback" @click="routerBack">
        <Svgicon icon-class="fanhui" class="icon" />
      </div>
      <span>商品详情</span>
    </div>
    <div class="product-content">
      <div class="carousel">
        <Carousel :imgList="productInfo.carsourlImgList" />
      </div>
      <div class="des">
        <h2 v-text="productInfo.name"></h2>
        <p class="subtitle" v-text="productInfo.subtitle"></p>
        <p class="price">
          <span class="test">￥<em v-text="productInfo.newPrice"></em></span>
          <span class="sold">已售<em v-text="productInfo.sold"></em>份</span>
        </p>
        <p class="address">
          <span><i></i>产地越南</span>
          <span><i></i>2小时到达</span>
          <span><i></i>实付满0包邮</span>
        </p>
      </div>
      <div class="goodsimg">
        <h3>商品详情</h3>
        <p>规格:<span v-text="productInfo.specification"></span></p>
        <p>重量:<span v-text="productInfo.weight"></span></p>
        <p>包装:<span v-text="productInfo.packaging"></span></p>
        <p>保质期:<span v-text="productInfo.expiration_date"></span></p>
        <div class="imgs">
          <img
            :src="item"
            alt=""
            v-for="item in productInfo.showList"
            :key="item"
          />
        </div>
      </div>
    </div>
    <div class="shopping">
      <div class="car">
        <span class="dot">3</span>
      </div>
      <div class="add">
        加入购物车
      </div>
    </div>
  </div>
</template>
<script>
import api from "../axios/api.js";
import Carousel from "../components/swiper-carousel";
import Svgicon from "../components/SvgIcon";

export default {
  data() {
    return {
      productInfo: {}
    };
  },
  components: {
    Svgicon,
    Carousel
  },
  methods: {
    routerBack() {
      this.$router.go(-1);
    },
    update(data) {
      this.productInfo = data;
    }
  },
  async beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    let gid = to.query.gid;
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/product",
      {
        gid: gid
      }
    );
    next(vm => vm.update(res.data.product));
  }
};
</script>
<style lang="scss">
#product {
  .product-header {
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
      font-size: 22px;
    }
  }
  .product-content {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    overflow: scroll;
    .carousel {
      position: relative;
      height: 262px;
      background: #fff;
    }
    .des {
      padding-left: 15px;
      padding-top: 12px;
      padding-right: 15px;
      box-sizing: border-box;
      background: #fff;
      > h2 {
        // font-family: -apple-system-font,Helvetica Neue,sans-serif;
        display: inline-block;
        vertical-align: baseline;
        font-size: 18px;
        color: #474245;
        font-weight: 700;
      }
      .subtitle {
        padding-bottom: 12px;
        padding-top: 4px;
        font-size: 16px;
        color: #474245;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 0.5px solid #f5f5f5;
        .test {
          font-size: 12px;
          color: rgb(255, 72, 145);
        }
        .sold {
          color: #969696;
          font-size: 12px;
        }
      }
      .address {
        font-size: 12px;
        span {
          margin-right: 20px;
          line-height: 30px;
          i {
            display: inline-block;
            width: 3px;
            height: 3px;
            background-color: #474245;
            vertical-align: middle;
            margin-right: 8px;
          }
        }
      }
    }
    .goodsimg {
      background: #fff;
      margin: 10px 0 46px 0;
      padding: 16px;
      > h3 {
        padding-left: 3px;
        text-align: left;
        color: #474245;
        font-size: 20px;
        margin-bottom: 10px;
      }
      > p {
        padding-left: 3px;
        color: #969696;
        line-height: 30px;
        width: 100%;
        display: inline-block;
        font-size: 14px;
        span {
          margin: 5px;
        }
      }
    }
  }
  .shopping {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    .car {
      position: relative;
      width: 60px;
      height: 100%;
      background: url("../assets/images/shop-icon.03511f0.png") no-repeat center
        center;
      background-size: 20px;
      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        height: 20px;
        width: 20px;
        background-color: #ff4891;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        line-height: 20px;
      }
    }
    .add {
      flex: 1;
      height: 100%;
      background-color: #ff4891;
      text-align: center;
      line-height: 46px;
      color: #fff;
    }
  }
}
</style>
