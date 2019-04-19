<template>
  <div class="dahezi">
    <van-tabs v-model="active" title-active-color="#ff4891" color="#ff4891">
      <div class="bear" slot="nav-left">
        <img src="../../assets/bear.png" />
      </div>
      <van-tab class="page" title="精选">
        <div class="author">
          <img src="../../assets/xiaoyusichu.jpg" />
          <span>小羽私厨</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun1.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun2.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun3.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun4.webp"
          /></van-swipe-item>
        </van-swipe>
        <h3 class="biaot">【做美食】不是问题，菜菜来教你，跟着学你也能做</h3>
        <div class="article__controls">
          <div class="control-item article__reading">浏览 18333</div>
          <div class="control-btn-area">
            <div
              class="control-item article__collection"
              style="display: none;"
            ></div>
            <div class="control-item article__btn-share">
              <i class="fenxiang"></i>分享
            </div>
          </div>
        </div>
        <div class="big-wrap" v-for="(item, index) in goods" :key="index">
          <div
            class="imgload fl"
           :style="{'background':'url('+ item.titlePic +')','background-size':'cover'}"
          >
            <img src="../../assets/player.png" />
          </div>
          <div class="imgdetail fr">
            <div class="follow-user">
              <img :src="item.authorPhoto" />
              <span v-text="item.nickname"></span>
            </div>
            <p class="article" v-text="item.title"></p>
            <div class="follownum">
              <span class="fl">浏览{{ item.fontReadNo }}</span>
              <i class="fr"></i>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab class="page" title="快手食谱">
        <div class="author">
          <img src="../../assets/xiaoyusichu.jpg" />
          <span>小羽私厨</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun1.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun2.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun3.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun4.webp"
          /></van-swipe-item>
        </van-swipe>
        <h3 class="biaot">【做美食】不是问题，菜菜来教你，跟着学你也能做</h3>
        <div class="article__controls">
          <div class="control-item article__reading">浏览 18333</div>
          <div class="control-btn-area">
            <div
              class="control-item article__collection"
              style="display: none;"
            ></div>
            <div class="control-item article__btn-share">
              <i class="fenxiang"></i>分享
            </div>
          </div>
        </div>
         <div class="big-wrap" v-for="(item, index) in goods" :key="index">
          <div
            class="imgload fl"
           :style="{'background':'url('+ item.titlePic +')','background-size':'cover'}"
          >
            <img src="../../assets/player.png" />
          </div>
          <div class="imgdetail fr">
            <div class="follow-user">
              <img :src="item.authorPhoto" />
              <span v-text="item.nickname"></span>
            </div>
            <p class="article" v-text="item.title"></p>
            <div class="follownum">
              <span class="fl">浏览{{ item.fontReadNo }}</span>
              <i class="fr"></i>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab class="page" title="甜点饮品">
        <div class="author">
          <img src="../../assets/xiaoyusichu.jpg" />
          <span>小羽私厨</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun1.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun2.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun3.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun4.webp"
          /></van-swipe-item>
        </van-swipe>
        <h3 class="biaot">【做美食】不是问题，菜菜来教你，跟着学你也能做</h3>
        <div class="article__controls">
          <div class="control-item article__reading">浏览 18333</div>
          <div class="control-btn-area">
            <div
              class="control-item article__collection"
              style="display: none;"
            ></div>
            <div class="control-item article__btn-share">
              <i class="fenxiang"></i>分享
            </div>
          </div>
        </div>
         <div class="big-wrap" v-for="(item, index) in goods" :key="index">
          <div
            class="imgload fl"
           :style="{'background':'url('+ item.titlePic +')','background-size':'cover'}"
          >
            <img src="../../assets/player.png" />
          </div>
          <div class="imgdetail fr">
            <div class="follow-user">
              <img :src="item.authorPhoto" />
              <span v-text="item.nickname"></span>
            </div>
            <p class="article" v-text="item.title"></p>
            <div class="follownum">
              <span class="fl">浏览{{ item.fontReadNo }}</span>
              <i class="fr"></i>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab class="page" title="生活百科">
        <div class="author">
          <img src="../../assets/xiaoyusichu.jpg" />
          <span>小羽私厨</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun1.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun2.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun3.webp"
          /></van-swipe-item>
          <van-swipe-item class="lunimg"
            ><img src="../../assets/lun4.webp"
          /></van-swipe-item>
        </van-swipe>
        <h3 class="biaot">【做美食】不是问题，菜菜来教你，跟着学你也能做</h3>
        <div class="article__controls">
          <div class="control-item article__reading">浏览 18333</div>
          <div class="control-btn-area">
            <div
              class="control-item article__collection"
              style="display: none;"
            ></div>
            <div class="control-item article__btn-share">
              <i class="fenxiang"></i>分享
            </div>
          </div>
        </div>
         <div class="big-wrap" v-for="(item, index) in goods" :key="index">
          <div
            class="imgload fl"
           :style="{'background':'url('+ item.titlePic +')','background-size':'cover'}"
          >
            <img src="../../assets/player.png" />
          </div>
          <div class="imgdetail fr">
            <div class="follow-user">
              <img :src="item.authorPhoto" />
              <span v-text="item.nickname"></span>
            </div>
            <p class="article" v-text="item.title"></p>
            <div class="follownum">
              <span class="fl">浏览{{ item.fontReadNo }}</span>
              <i class="fr"></i>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import api from "../../axios/api.js";
export default {
  data() {
    return {
      active: 0,
      goods: []
    };
  },
  async created() {
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/discove"
    );
    this.goods = res.data.data[0].articles;
    // console.log(this.goods);
  }
};
</script>
<style lang="scss" scoped>
.dahezi {
  overflow: hidden;
  margin: 0 15px;
  .van-tabs__nav--line {
    position: fixed;
    top: 0;
    left: 0;
    .bear {
    width: 24px;
    height: 24px;
    margin: 15px 10px;
    img {
      border-radius: 100%;
    }
  }

  }
  
  .page {
    width: 100%;
    margin-bottom: 50px;
    .author {
      margin-top: 10px;
      display: flex;
      flex-wrap: nowrap;
      img {
        width: 24px;
        height: 24px;
        border: 1px solid #e6e6e6;
        border-radius: 50%;
      }
      span {
        font-size: 14px;
        line-height: 24px;
        color: #474245;
        padding: 0 7px;
      }
    }
    .lunbo {
      margin-top: 10px;
      img {
        width: 345px;
        height: 194px;
        border-radius: 25px;
      }
    }
    .biaot {
      width: 345px;
      height: 50px;
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
      color: #474245;
      overflow: hidden;
      margin-top: 10px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .article__controls {
      display: flex;
      height: 18px;
      margin-top: 13px;
      justify-content: space-between;
      align-items: center;
      .control-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #969696;
        .fenxiang {
          display: block;
          width: 24px;
          height: 24px;
          background: url(../../assets/fenxiang.png) no-repeat center center;
        }
      }
    }
    .big-wrap {
      width: 345px;
      height: 125px;
      margin-top: 10px;
      margin-bottom: 10px;
      .imgload {
        width: 150px;
        height: 103px;
        background-size: cover;
        border-radius: 10px;
        position: relative;
        img {
          width: 44px;
          height: 44px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      
     
      }
      
      }
      .imgdetail {
        width: 195px;
        height: 101px;
        padding-left: 10px;
        .follow-user {
          width: 180px;
          height: 18px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          img {
            width: 18px;
            height: 18px;
          }
          span {
            font-size: 12px;
            line-height: 18px;
          }
        }
        .article {
          margin: 10px 0 8px;
          font-size: 16px;
          color: #474346;
          line-height: 20px;
        }
        .follownum {
          width: 180px;
          height: 20px;
          margin-top: 10px;
          span {
            font-size: 12px;
            color: #969696;
          }
          i {
            display: block;
            width: 20px;
            height: 20px;
            background: url(../../assets/fenxiang.png) no-repeat center center;
          }
        }
      }
    }
  

</style>