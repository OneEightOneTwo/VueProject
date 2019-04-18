<template>
  <div>
    <!-- 分类页 -->
    <div class="classify-header">
      <SearchBar/>
    </div>
    <div class="classify-cons">
      <!-- // 引入element-ui 里面的分类选择Tabs -->
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="所有分类">
          <div class="classify-cons-main">
            <div class="classify-cons-title">
              <!-- 引入vant 里面的分类选择TreeSelect -->
              <van-tabs
                v-model="active"
                :ellipsis="ellipsis"
                title-active-color="#ff4891"
                color="#ff4891"
              >
                <van-tab title="TOP榜">
                  <h5 style="font-size:12px;color:gray">热卖推荐</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="新品推荐">
                  <h5 style="font-size:12px;color:gray">新品推荐</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="蛋类">
                  <h5 style="font-size:12px;color:gray">蛋类</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="营养禽肉">
                  <h5 style="font-size:12px;color:gray">营养禽肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="牛排">
                  <h5 style="font-size:12px;color:gray">牛排</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="牛肉">
                  <h5 style="font-size:12px;color:gray">牛肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="猪肉">
                  <h5 style="font-size:12px;color:gray">猪肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="火锅调料类">
                  <!-- 引入组件  ClassifyChart -->
                  <h5 style="font-size:12px;color:gray">火锅调料类</h5>
                  <ClassifyChart/>
                </van-tab>
              </van-tabs>
            </div>
            <!-- 点击 显示或隐藏 classify-sec-cons-->
            <div class="classify-cons-btn">
              <img src="../../assets/arrows_down.png" alt>
            </div>
            <!-- 点击上面按钮 出现弹窗 -->
            <div class="classify-sec-cons">
              <div class="classify-sec-consT">
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">TOP榜</div>
                  <div class="sec-consT-topic">新品推荐</div>
                  <div class="sec-consT-topic">蛋类</div>
                  <div class="sec-consT-btn">
                    <img src="../../assets/arrows_down.png" alt>
                  </div>
                </div>
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">营养禽肉</div>
                  <div class="sec-consT-topic">牛排</div>
                  <div class="sec-consT-topic">牛肉</div>
                </div>
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">猪肉</div>
                  <div class="sec-consT-topic">火锅调料类</div>
                </div>
              </div>
              <div class="classify-sec-consB"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新鲜蔬果">新鲜蔬果</el-tab-pane>
        <el-tab-pane label="精品肉蛋">精品肉蛋</el-tab-pane>
        <el-tab-pane label="海鲜水产">海鲜水产</el-tab-pane>
        <el-tab-pane label="大牌乳品">大牌乳品</el-tab-pane>
        <el-tab-pane label="网红零食">网红零食</el-tab-pane>
        <el-tab-pane label="酒水饮品">酒水饮品</el-tab-pane>
        <el-tab-pane label="烘焙蛋糕">烘焙蛋糕</el-tab-pane>
        <el-tab-pane label="方便速食">方便速食</el-tab-pane>
        <el-tab-pane label="风味熟食">风味熟食</el-tab-pane>
        <el-tab-pane label="粮油调味">粮油调味</el-tab-pane>
        <el-tab-pane label="美妆美颜">美妆美颜</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../components/SearchBar";
import ClassifyChart from "../../components/ClassifyChart";
// import ClassifyBar from "../../components/ClassifyBar";
// 引入element-ui 里面的分类选择Tabs
import Vue from "vue";
import { Tabs } from "element-ui";
Vue.use(Tabs);
// 引入vant 里面的分类选择TreeSelect
import { TreeSelect } from "vant";
Vue.use(Tabs);
export default {
  components: {
    SearchBar,
    ClassifyChart
  },

  data() {
    return {
      // 引入element-ui 里面的分类选择Tabs
      tabPosition: "left",
      stretch: true,
      // 引入vant 里面的分类选择TreeSelect
      active: 0,
      ellipsis: false
      //
    };
  }
};
</script>
<style lang="scss">
.classify-header {
  margin-bottom: 8px;
}
.classify-cons {
  width: 100%;
  height: 100%;
  position: relative;
  // 修改element-ui样式
  .el-tabs__item:hover {
    color: #ff4891;
    cursor: pointer;
  }
  .el-tabs__item.is-active {
    color: #ff4891;
  }
  .el-tabs__active-bar {
    background-color: #ff4891;
  }
  .classify-cons-main {
    width: 100%;
    position: relative;
    .classify-cons-title {
      width: 90%;
      // height: 36px;
      font-size: 12px;
      // display:none;

      // 修改vant样式
      .van-tab {
        line-height: 36px;
        font-size: 12px;
      }
    }
    .classify-cons-btn {
      position: absolute;
      top: 11px;
      right: 3px;
      img {
        display: inline-block;
        width: 18px;
        height: 18px;
      }
    }
    .classify-sec-cons {
      width: 100%;
      height: 100%;
      position: absolute;
      background: white;
      left: 0;
      top: 0;
      z-index: 99;
      display: none;
      .classify-sec-consT {
        width: 75%;
        height: 118px;
        color: rgb(119, 118, 118);

        // display:flex;
        .sec-consT-title {
          display: flex;
          padding-top: 10px;
          box-sizing: border-box;
          .sec-consT-topic {
            width: 80px;
            height: 26px;
            border: 1px solid rgb(228, 226, 226);
            border-radius: 20px;
            display: flex;
            font-size: 12px;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
          }
          .sec-consT-btn {
            position: absolute;
            top: 10px;
            left: 84%;
            img {
              display: inline-block;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
      .classify-sec-consB {
        width: 100%;
        height: 512px;
        background: rgb(248, 248, 248);
        opacity: 0.2;
      }
    }
  }
}
</style>

