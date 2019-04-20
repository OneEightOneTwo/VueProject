<template>
  <div class="indexbox">
    <SearchBar/>
    <div class="category_nav">
      <div class="category_slidebar">
        <SwiperSlide
          :swiperSlides="categoryList"
          @switchCategory="switchCategory"
          :activeCategory="activeCategory"
        />
      </div>
      <div class="showall" @click="isShowDropBox = true"></div>
      <div class="category-dropbox" v-show="isShowDropBox">
        <div class="dropbox-header">
          全部品类
          <i @click="isShowDropBox = false"></i>
        </div>
        <div class="drop-list">
          <div
            class="item"
            v-for="(item, index) in categoryList"
            :key="index"
            @click="switchCategory(item.category_id)"
          >
            <img :src="item.icon" alt>
            <span v-text="item.name"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mainbox">
      <div class="recommend-title" v-if="product_list.brands">
        <div class="recommend-text" v-for="(item, index) in product_list.brands" :key="index">
          <img :src="item.image">
          <em>{{ item.name }}</em>
        </div>
      </div>
      <div class="categoryArea" v-if="product_list.categoryArea">
        <div class="category-border">
          <div></div>
        </div>
        <div class="lantern-wrap" v-if="product_list.categoryArea.lanternArea">
          <div
            class="lantern-item"
            v-for="(item, index) in product_list.categoryArea.lanternArea"
            :key="index"
          >
            <div class="lantern-item-img">
              <img data-v-f6a0fd68 :src="item.image" class="image-view" style>
            </div>
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="card-wrap" v-if="product_list.categoryArea.tileArea">
          <img
            :src="item.image"
            alt
            v-for="(item, index) in product_list.categoryArea.tileArea"
            :key="index"
          >
        </div>
      </div>
      <div class="banner-img" v-if="product_list.banner">
        <img :src="item.path" alt v-for="item in product_list.banner" :key="item.path">
      </div>
      <!-- 调用不同的数据入口 -->
      <div class="productList" v-if="product_list.products">
        <div class="product-item" v-for="(item, index) in product_list.products" :key="index">
          <GoodListCell :data="item"/>
        </div>
      </div>
      <div class="showall"></div>
    </div>
  </div>
</template>
<script>
import SwiperSlide from "../../components/swiper-slide";
import SearchBar from "../../components/SearchBar";
import GoodListCell from "../../components/GoodListCell";
import obstate from "../../observable.js";
import api from "../../axios/api.js";
export default {
  name: "index",
  components: {
    SwiperSlide,
    SearchBar,
    GoodListCell
  },
  data() {
    return {
      isShowDropBox: false
    };
  },
  computed: {
    categoryList() {
      return obstate.categoryList || {};
    },
    product_list() {
      return obstate.categorydata[this.activeCategory] || {};
    },
    activeCategory() {
      return obstate.activeCategory || "";
    }
  },
  methods: {
    //切换顶部分类，改变data中的product_list
    async switchCategory(id) {
      this.isShowDropBox = false;
      if (id != this.activeCategory) {
        if (!obstate.categorydata[id]) {
          let res = await api.get(
            "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/category",
            {
              category_id: id,
              page: 1,
              num: 10
            }
          );

          if (res.status >= 300 && res.statue < 400) {
            obstate.activeCategory = id;
          } else if (res.status == 200) {
            obstate.categorydata[id] = res.data.product_list;
            obstate.activeCategory = id;
          }
        } else {
          obstate.activeCategory = id;
        }
      }
    }
  }
};
</script>
<style lang="scss">
.indexbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  .category_nav {
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    border-bottom: 1px solid #e6e6e6;
    width: 100%;
    .category_slidebar {
      width: 88%;
    }
    .showall {
      width: 12%;
      height: 44px;
      background: url("../../assets/images/arrowdown.png") no-repeat center
        center;
    }
    .category-dropbox {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      bottom: -50px;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.7);
      .dropbox-header {
        position: relative;
        z-index: 1;
        height: 45px;
        background-color: #fff;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
        border-bottom: 1px solid #e6e6e6;
        i {
          position: absolute;
          width: 40px;
          height: 44px;
          right: 0;
          top: 0;
          background: url("../../assets/images/x.png") no-repeat center center;
          background-size: 50%;
        }
      }
      .drop-list {
        padding-top: 5px;
        height: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        .item {
          width: 33.33%;
          height: 76px;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 36px;
            height: 36px;
            margin-bottom: 5px;
          }
          span {
            color: #4d4d4d;
            font-size: 12px;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .mainbox {
    flex: 1;
    overflow: auto;
    .recommend-title {
      height: 49px;
      display: flex;
      justify-content: center;
      align-items: center;
      .recommend-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 49px;
        font-size: 12px;
        color: #4d4d4d;
        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
    }
    .category-border {
      width: 94%;
      height: 1px;
      margin: 0 auto;
      background-color: #f5f5f5;
    }
    .lantern-wrap {
      height: 109px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .lantern-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lantern-item-img {
          width: 40px;
          height: 40px;
          margin-bottom: 5px;
        }
        p {
          font-size: 12px;
          color: #474245;
        }
      }
    }
    .card-wrap {
      padding: 0 15px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 170px;
        height: 100px;
      }
    }
    .banner-img {
      height: 90px;
    }
  }
  .productList {
    padding: 0 10px;
  }
}
</style>