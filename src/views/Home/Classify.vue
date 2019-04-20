<template>
  <div class="classify">
    <!-- 分类页 -->
    <div class="classify-header">
      <SearchBar class="search-header"/>
    </div>
    <!-- 内容区域 -->
    <div class="classify-cons">
      <!-- // 引入element-ui 里面的分类选择Tabs -->
      <el-tabs :tab-position="tabPosition" fixed>
        <el-tab-pane label="热卖">
          <div class="classify-cons-right">
            <!-- vantUI框架 -->
            <van-tabs
              v-model="active"
              :ellipsis="ellipsis"
              title-active-color="#ff4891"
              color="#ff4891"
            >
              <!-- 热卖-->
              <van-tab title="热卖">
                <p>热卖</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <!-- 新鲜蔬果 -->
              <van-tab title="新鲜蔬果">
                <p>新鲜蔬果</p>
                <div class="classify-chart" v-for="(fruit,index) in fruits" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="fruit.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="fruit.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="fruit.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{fruit.price}}</p>
                        <p>￥{{fruit.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img src="../../assets/shopcart.png" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="时令蔬菜">
                <p>时令蔬菜</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="精品肉蛋">
                <p>精品肉蛋</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="海鲜水产">
                <p>海鲜水产</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="牛排">
                <p>牛排</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="牛肉">
                <p>牛肉</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="美食">
                <p>美食</p>
                <div class="classify-chart" v-for="(hot,index) in hotGoods" :key="index">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img :src="hot.goodsPic" alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title" v-text="hot.title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text" v-text="hot.subtitle">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥{{hot.price}}</p>
                        <p>￥{{hot.salePrice}}</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img :src="hot.chartsPic" alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
            <!-- 点击 显示或隐藏 classify-sec-cons-->
            <!-- <div class="classify-cons-btn" @click="isShowSecond">
              <img src="../../assets/arrows_down.png" alt>
            </div>
            <ClassifySecondCons v-show="bool" class="second-cons"/>-->
          </div>
        </el-tab-pane>
        <!-- 会员精选 -->
        <el-tab-pane label="会员精选">
          <div class="classify-cons-right">
            <!-- vant 框架 -->
            <van-tabs
              v-model="active"
              :ellipsis="ellipsis"
              title-active-color="#ff4891"
              color="#ff4891"
            >
              <!-- 热卖-->
              <van-tab title="热卖">
                <p>热卖</p>
                <div class="classify-chart">
                  <div class="classify-chart-img">
                    <div class="chart-img">
                      <!-- recommendgoods.jpg -->
                      <img src alt>
                      <div class="chart-text">满39减5</div>
                    </div>
                  </div>
                  <div class="classify-chart-right">
                    <div class="classify-chart-title">澳洲黄尾红葡萄酒750ml</div>
                    <div class="classify-chart-text">跟袋鼠一样 是澳洲的代名词</div>
                    <div class="classify-chart-others">
                      <div class="classify-chart-price">
                        <p>￥29</p>
                        <p>￥39</p>
                      </div>
                      <div class="classify-chart-chart">
                        <img src alt>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane label="水果">角色管理</el-tab-pane>
        <el-tab-pane label="精品肉蛋">定时任务补偿</el-tab-pane>
        <el-tab-pane label="海鲜水产">定时任务补偿</el-tab-pane>
        <el-tab-pane label="大牌乳品">定时任务补偿</el-tab-pane>
        <el-tab-pane label="网红零食">定时任务补偿</el-tab-pane>
        <el-tab-pane label="酒水饮品">定时任务补偿</el-tab-pane>
        <el-tab-pane label="烘焙蛋糕">定时任务补偿</el-tab-pane>
        <el-tab-pane label="方便速食">定时任务补偿</el-tab-pane>
        <el-tab-pane label="风味熟食">定时任务补偿</el-tab-pane>
        <el-tab-pane label="粮油调味">定时任务补偿</el-tab-pane>
        <el-tab-pane label="美妆日百">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../components/SearchBar";
import ClassifyChart from "../../components/ClassifyChart";
// import ClassifySecondCons from "../../components/ClassifySecondCons";
// import ClassifySlide from "../../components/classify-slide";

// observable引入 首页数据 复用
import obstate from "../../observable.js";
import api from "../../axios/api.js";
export default {
  components: {
    SearchBar,
    ClassifyChart
    // ClassifySecondCons,
    // ClassifySlide
  },

  data() {
    return {
      // 引入element-ui 里面的分类选择Tabs
      tabPosition: "left",
      stretch: true,
      // 引入vant 里面的分类选择TreeSelect
      active: 0,
      ellipsis: false,

      // 控制右上角点击按钮
      bool: false,
      //热卖 数据
      hotGoods: [],
      // 新鲜蔬果 数据
      fruits: []
      // 会员精选
      // members: []
    };
  },
  methods: {
    // 点击显示或隐藏
    isShowSecond() {
      this.bool = !this.bool;
    }
  },
  async created() {
    // 热卖 数据
    let res = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/classify/hotsale"
    );
    this.hotGoods = res.data.data[0].articles;
    // console.log(this.hotGoods);
    // 新鲜蔬果 数据
    let res1 = await api.get(
      "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/classify/fruits"
    );
    this.fruits = res1.data.data[0].articles;
    // console.log(this.fruits);
  }
};
</script>
<style lang="scss">
.classify {
  .classify-header {
    height: 40px;
    width: 100%;
    margin-bottom: 8px;
    position: relative;
    .search-header {
      height: 40px;
      position: fixed;
      top: 0;
      left: 0;
      background: white;
      z-index: 2;
    }
  }
  .classify-cons {
    width: 100%;
    height: 100%;
    // position: relative;
    // 修改element-ui样式
    .el-tabs__item:hover {
      color: #ff4891;
      cursor: pointer;
    }
    // 改变active状态下的样式
    .el-tabs__item.is-active {
      color: #ff4891;
      border-left: 1px solid #ff4891;
    }
    .el-tabs__item {
      font-size: 16px;
      text-align: center;
    }
    //   修改左侧滑动条样式
    .el-tabs__active-bar {
      background-color: #f3f1f2;
    }
    // 固定左侧内容 超出显示滚动条
    .el-tabs__content {
      width: 72%;
      position: fixed;
      left: 28%;
      top: 50px;

      .classify-cons-right {
        width: 100%;
        height: 1000px;
        overflow: auto;
        .van-tab {
          line-height: 36px;
          font-size: 14px;
        }
        //   修改底部滑动条样式
        .van-tab--active {
          border-bottom-color: #ff4891;
          color: #ff4891;
        }
        p {
          width: 100%;
          height: 18px;
          font-size: 12px;
          font-weight: normal;
          padding-left: 10px;
          box-sizing: border-box;
        }
        // 修改vant header
        .van-tabs__wrap {
          top: 44px;
          left: 28%;
          right: 4%;
          z-index: 2;
          overflow: hidden;
          position: fixed;
        }
        // 购物车组件样式
        .classify-chart {
          display: flex;
          // flex-direction: row;
          padding: 10px 0;
          box-sizing: border-box;
          border-top: 1px solid rgb(240, 240, 240);
          .classify-chart-img {
            flex: 1;
            .chart-img {
              position: relative;
              img {
                display: inline-block;
                width: 75px;
                height: 75px;
              }
              .chart-text {
                width: 60px;
                font-size: 10px;
                color: white;
                background: red;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 10px;
              }
            }
          }
          .classify-chart-right {
            flex: 3;
            .classify-chart-title {
              height: 20px;
              padding-left: 10px;
              box-sizing: border-box;
              font-size: 14px;
            }
            .classify-chart-text {
              width: 100%;
              height: 20px;
              font-size: 10px;
              color: grey;
              padding-left: 10px;
              box-sizing: border-box;
            }
            .classify-chart-others {
              width: 100%;
              height: 30px;
              padding-left: 10px;
              padding-top: 10px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              .classify-chart-price {
                height: 30px;
                flex: 3;
                p:nth-child(1) {
                  font-size: 10px;
                  color: rgb(253, 75, 75);
                }
                p:nth-child(2) {
                  font-size: 12px;

                  color: rgb(32, 32, 32);
                }
              }
              .classify-chart-chart {
                height: 30px;
                flex: 1;
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
    }

    // .classify-cons-right {
    //   width: 100%;
    //   position: relative;
    //   .cons-right-title {
    //     width: 100%;
    //     font-size: 14px;
    //   }

    //   .classify-cons-btn {
    //     position: absolute;
    //     top: 11px;
    //     right: 3px;
    //     img {
    //       display: inline-block;
    //       width: 18px;
    //       height: 18px;
    //     }
    //   }
    //   .second-cons {
    //     width: 100%;
    //     height: 1000px;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //   }
    // }
  }
}
</style>

