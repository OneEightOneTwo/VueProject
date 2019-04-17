<template>
  <div class="indexbox">
    <SearchBar />
    <div class="category_nav">
      <div class="category_slidebar">
        <SwiperSlide
          :swiperSlides="categoryList"
          @changeCategory="changeCategory"
        />
      </div>
      <div class="showall"></div>
    </div>
    <div class="mainbox">
      <div class="recommend-title">
        <div
          class="recommend-text"
          v-for="(item, index) in getBrands"
          :key="index"
        >
          <img :src="item.image" />
          <em>{{ item.name }}</em>
        </div>
      </div>
      <div class="category-border"><div></div></div>
      <div class="lantern-wrap">
        <div
          class="lantern-item"
          v-for="(item, index) in getLanternList"
          :key="index"
        >
          <div class="lantern-item-img">
            <img
              data-v-f6a0fd68=""
              :src="item.image"
              class="image-view"
              style=""
            />
          </div>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="card-wrap">
        <img
          :src="item.image"
          alt=""
          v-for="(item, index) in getcardList"
          :key="index"
        />
      </div>
      <div class="banner-img">
        <img :src="getBannerImg" alt="" />
      </div>
      <div class="productList">
        <div
          class="product-item"
          v-for="(item, index) in goodlist"
          :key="index"
        >
          <GoodListCell :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperSlide from "../../components/swiper-slide";
import SearchBar from "../../components/SearchBar";
import GoodListCell from "../../components/GoodListCell";
export default {
  name: "index",
  components: {
    SwiperSlide,
    SearchBar,
    GoodListCell
  },
  computed: {
    goodlist() {
      let arr = [
        {
          //商品ID
          goodId: 1,
          //商品图片
          image:
            "https://image.missfresh.cn/18ef85f85c8343a79444a4b34da400e9.jpg",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜",
          //商品名称
          name: "红颜草莓1斤"
        },
        {
          //商品ID
          goodId: 2,
          //商品图片
          image:
            "https://image.missfresh.cn/27a1e06821bc49598a57e9883d2b4228.jpeg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜2",
          //商品名称
          name: "红颜草莓1斤2"
        },
        {
          //商品ID
          goodId: 3,
          //商品图片
          image:
            "https://image.missfresh.cn/c3a1dc740cf84da7a14fd3387de50063.jpg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜3",
          //商品名称
          name: "红颜草莓1斤3"
        }
      ];
      return arr;
    },
    categoryList() {
      return this.$store.getters.categoryList;
    },
    getBrands() {
      let arr = [
        {
          image: "https://j-image.missfresh.cn/img_20170627185311186.png",
          name: "优鲜严选",
          link: "https://as-vip.missfresh.cn/v1/h5model/strict-selection"
        },
        {
          image: "https://j-image.missfresh.cn/img_20170627184654084.png",
          name: "安心检测",
          link: "https://as-vip.missfresh.cn/v1/h5model/safeguard"
        },
        {
          image: "https://j-image.missfresh.cn/img_20170718194948016.png",
          name: "赔付保障",
          link:
            "https://p-h5.missfresh.cn/h5_file/467AA9256CCD5AB8F364815C073C00FD/index.html"
        }
      ];
      return arr;
    },
    getLanternList() {
      let arr = [
        {
          image: "https://j-image.missfresh.cn/img_20181127211810194.png",
          name: "本周新品"
        },
        {
          image: "https://j-image.missfresh.cn/img_20181127212305318.png",
          name: "邀请有礼"
        },
        {
          image: "https://j-image.missfresh.cn/img_20181127212018922.png",
          name: "每日签到"
        },
        {
          image: "https://j-image.missfresh.cn/img_20181127212340988.png",
          name: "凑单专区"
        },
        {
          image: "https://j-image.missfresh.cn/img_20181127212459157.png",
          name: "开通会员"
        }
      ];
      return arr;
    },
    getcardList() {
      let arr = [
        {
          image: "https://j-image.missfresh.cn/img_20190115153812265.png"
        },
        {
          image: "https://j-image.missfresh.cn/img_20190115153756830.png"
        }
      ];
      return arr;
    },
    getBannerImg() {
      return "https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&mryxh=142";
    }
  },
  methods: {
    changeCategory(index) {
      this.$store.commit("changeCategory", index);
    }
  }
};
</script>
<style lang="scss">
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
    background: url("../../assets/images/arrowdown.png") no-repeat center center;
  }
}
.indexbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
  display: flex;
  flex-direction: column;
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 170px;
        height: 100px;
      }
    }
    .banner-img {
      margin-top: 10px;
    }
  }
  .productList {
  }
}
</style>