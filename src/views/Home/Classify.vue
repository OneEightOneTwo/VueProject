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
            <div class="cons-right-title">
              <!-- 引入组件ClassifySlide  -->
              <ClassifySlide
                :classifySlides="categoryList"
                @switchCategory="switchCategory"
                :activeCategory="activeCategory2"
              />
            </div>
            <!-- 右边调用 不同的数据入口 -->
            <!-- van-tabs__wrap -->
            <div class="cons-right-cons" v-if="product_list.products">
              <!-- <h6></h6> -->
              <div class="product-item" v-for="(item, index) in product_list.products" :key="index">
                <ClassifyChart :data="item"/>
              </div>
            </div>
            <!-- 点击 显示或隐藏 classify-sec-cons-->
            <!-- <div class="classify-cons-btn" @click="isShowSecond">
              <img src="../../assets/arrows_down.png" alt>
            </div>
            <ClassifySecondCons v-show="bool" class="second-cons"/>-->
          </div>
        </el-tab-pane>
        <el-tab-pane label="会员精选">配置管理</el-tab-pane>
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
import ClassifySlide from "../../components/classify-slide";

// observable引入 首页数据 复用
import obstate from "../../observable.js";
import api from "../../axios/api.js";
export default {
  components: {
    SearchBar,
    ClassifyChart,
    // ClassifySecondCons,
    ClassifySlide
  },

  data() {
    return {
      // 引入element-ui 里面的分类选择Tabs
      tabPosition: "left",
      stretch: true,
      // 控制右上角点击按钮
      bool: false
    };
  },
  computed: {
    categoryList() {
      return obstate.categoryList || {};
    },
    product_list() {
      return obstate.categorydata2[this.activeCategory2] || {};
    },
    activeCategory2() {
      return obstate.activeCategory2 || "";
    }
  },
  methods: {
    //切换顶部分类，改变data中的product_list
    async switchCategory(id) {
      console.log(id);
      if (id != this.activeCategory2) {
        if (!obstate.categorydata2[id]) {
          let res = await api.get(
            "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/classify",
            {
              category_id: id,
              page: 1,
              num: 10
            }
          );
          console.log(res);
        }
      }
    },
    // async switchCategory(id) {
    //   // this.isShowDropBox = false;
    //   if (id != this.activeCategory2) {
    //     if (!obstate.categorydata2[id]) {
    //       let res = await api.get(
    //         "https://www.fastmock.site/mock/b01715d2047cd2decb86ff0799e9d85a/vue/classify",
    //         {
    //           category_id: id,
    //           page: 1,
    //           num: 10
    //         }
    //       );

    //       if (res.status >= 300 && res.statue < 400) {
    //         obstate.activeCategory2 = id;
    //       } else if (res.status == 200) {
    //         obstate.categorydata2[id] = res.data.product_list;
    //         obstate.activeCategory2 = id;
    //       }
    //     } else {
    //       obstate.activeCategory2 = id;
    //     }
    //   }
    // },
    // 点击显示或隐藏
    isShowSecond() {
      this.bool = !this.bool;
    }
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
      }
      .van-tabs__wrap {
        top: 44px;
        left: 28%;
        right: 2%;
        z-index: 2;
        overflow: hidden;
        position: fixed;
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

