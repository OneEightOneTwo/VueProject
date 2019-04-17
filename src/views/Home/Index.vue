<template>
  <div class="indexbox">
    <SearchBar />
    <div class="category_nav">
      <div class="category_slidebar">
        <SwiperSlide
          :swiperSlides="categoryList"
          @switchCategory="switchCategory"
        />
      </div>
      <div class="showall" @click="isShowDropBox=true"></div>
      <div class="category-dropbox" v-show="isShowDropBox">
        <div class="dropbox-header">
          全部品类
          <i @click="isShowDropBox=false"></i>
        </div>
        <div class="drop-list">
          <div class="item" v-for="(item, index) in categoryList" :key="index" @click="switchCategory(index)">
            <img :src="item.icon" alt="" />
            <span v-text="item.name"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mainbox">
      <div class="recommend-title" v-if="product_list.brands">
        <div
          class="recommend-text"
          v-for="(item, index) in product_list.brands"
          :key="index"
        >
          <img :src="item.image" />
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
        <div class="card-wrap" v-if="product_list.categoryArea.tileArea">
          <img
            :src="item.image"
            alt=""
            v-for="(item, index) in product_list.categoryArea.tileArea"
            :key="index"
          />
        </div>
      </div>
      <div class="banner-img" v-if="product_list.banner">
        <img
          :src="item.path"
          alt=""
          v-for="(item, index) in product_list.banner"
          :key="item.path"
        />
      </div>
      <div class="productList" v-if="product_list.products">
        <div
          class="product-item"
          v-for="(item, index) in product_list.products"
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
import obstate from "../../observable.js";

export default {
  name: "index",
  components: {
    SwiperSlide,
    SearchBar,
    GoodListCell
  },
  data() {
    return {
      product_list: {
        categoryArea: {
          //分类导航 本周新品|邀请有礼
          lanternArea: [
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
          ],

          //新人特权，每日坚果
          tileArea: [
            {
              image: "https://j-image.missfresh.cn/img_20190115153812265.png"
            },
            {
              image: "https://j-image.missfresh.cn/img_20190115153756830.png"
            }
          ]
        },
        //招牌  严选 安心检测
        brands: [
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
        ],
        //通栏广告 新人必买
        banner: [
          {
            path:
              "https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&mryxh=142"
          }
        ],
        products: [
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
        ]
      },
      isShowDropBox: false,
      activeCategoryIndex: 0
    };
  },
  computed: {
    categoryList() {
      return obstate.categoryList;
    }
  },
  methods: {
    //切换顶部分类，改变data中的product_list,将当前数据放入localstorage
    switchCategory(index) {

      this.isShowDropBox = false;
      obstate.categoryList.forEach(item => {
        item.default = 0;
      });
      obstate.categoryList[index].default = 1;

      //这部分数据是后台返回
      this.product_list = {
        //通栏广告 新人必买
        banner: [
          {
            path:
              "https://j-image.missfresh.cn/mis_img_20190416105702514.jpg?mryxw=1124&mryxh=270"
          }
        ],
        products: [
          {
            //商品ID
            goodId: 1,
            //商品图片
            image:
              "https://image.missfresh.cn/29217a5afe6e4ae29e845655df87e865.jpg?iopcmd=thumbnail&type=4&width=200",
            //活动信息
            promotionTags: "限时秒杀",
            //销售价格
            newPrice: 3.9,
            //原价
            oldPrice: 12.9,
            //是否卖完
            sell_out: false,
            //商品信息
            subtitle: "aaaaaaaa",
            //商品名称
            name: "红颜草莓1斤aaaaaaaaaaaaaa"
          },
          {
            //商品ID
            goodId: 2,
            //商品图片
            image:
              "https://image.missfresh.cn/e933b18b9d4541fbbd721eb0ddcf705e.jpg?iopcmd=thumbnail&type=4&width=200",
            //活动信息
            promotionTags: "限时秒杀",
            //销售价格
            newPrice: 3.9,
            //原价
            oldPrice: 12.9,
            //是否卖完
            sell_out: false,
            //商品信息
            subtitle: "大颗香甜 微微一笑为红颜2bbbbb",
            //商品名称
            name: "红颜草莓1斤2"
          },
          {
            //商品ID
            goodId: 3,
            //商品图片
            image:
              "https://fms-image.missfresh.cn/b0084f8c9a2a4b15a4ae87aeb71c2abc.jpg?iopcmd=thumbnail&type=4&width=200",
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
        ]
      };
    }
  },
  created() {
    //请求接口，获取index页面数据
  }
};
</script>
<style lang="scss">
.indexbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
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