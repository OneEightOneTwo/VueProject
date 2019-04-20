<template>
  <div>
    <!-- 购物车 产品推荐 模块 -->
    <div class="shopcarRecommend">
      <ul>
        <li v-for="(item,index) in goods" :key="index">
          <div class="recommend-goods-img">
            <img :src="item.goodsPic" alt>
          </div>
          <div class="recommend-goods-title" v-text="item.title">澳洲黄尾袋鼠梅洛红葡萄酒750ml</div>
          <div class="recommend-goods-text" v-text="item.subtitle">跟袋鼠一样 是澳洲的代名词</div>
          <div class="recommend-goods-price">
            <span>￥{{item.salePrice}}</span>
            <span>
              <img :src="item.chartsPic" alt>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from "../axios/api.js";
export default {
  data() {
    return {
      goods: []
    };
  },
  async created() {
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/classify/fruits"
    );
    this.goods = res.data.data[0].articles;
  }
};
</script>
<style lang="scss">
.shopcarRecommend {
  width: 96%;
  height: 100%;
  margin: auto;
  ul {
    overflow: hidden;
    margin-bottom: 50px;
    li {
      float: left;
      width: 46%;
      height: 260px;
      margin-left: 10px;
      margin-top: 10px;
      background: white;
      border: 1px solid rgb(245, 243, 243);
      border-radius: 10px;
      .recommend-goods-img {
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          display: inline-block;
          width: 145px;
          height: 145px;
        }
      }
      .recommend-goods-title {
        width: 145px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 10px;
        box-sizing: border-box;
        font-size: 14px;
      }
      .recommend-goods-text {
        width: 100%;
        height: 20px;
        font-size: 10px;
        color: grey;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .recommend-goods-price {
        width: 100%;
        height: 50px;
        font-size: 16px;
        color: rgb(253, 75, 75);
        padding-left: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        span:nth-child(1) {
          display: inline-block;
          flex: 3;
          height: 30px;
        }
        span:nth-child(2) {
          display: inline-block;
          flex: 1;
          height: 30px;
          img {
            display: inline-block;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>


