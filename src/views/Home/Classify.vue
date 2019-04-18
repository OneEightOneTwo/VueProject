<template>
  <div>
    <!-- 分类页 -->
    <div class="classify-header">
      <SearchBar/>
    </div>
    <div class="classify-cons">
      <!-- // 引入element-ui 里面的分类选择Tabs -->
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane :label="item.name" v-for="(item,index) in categoryList" :key="index">
         
          <div class="classify-cons-right">
            <div class="cons-right-title">
               <!-- vantUI框架 -->
              <van-tabs v-model="active" :ellipsis="ellipsis" title-active-color="#ff4891"
                color="#ff4891">
                <van-tab v-for="(item,index) in categoryList" :key="index" :title="item.name">
                    <div v-for="(item,index) in product_list">
                        <!-- 内容 {{ index }} -->
                      <ClassifyChart  :data="item"/>
                    </div>
                </van-tab>
                <!-- 点击右上角按钮显示的模块 -->
                <!-- <ClassifySecondCons/> -->
            </van-tabs>
            </div>
            <!-- 点击 显示或隐藏 classify-sec-cons-->
            <div class="classify-cons-btn">
              <img src="../../assets/arrows_down.png" alt>
            </div>
          </div>
        </el-tab-pane>
        
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../components/SearchBar";
import ClassifyChart from "../../components/ClassifyChart";
// import ClassifySecondCons from "../../components/ClassifySecondCons";

// observable引入 首页数据 复用
import obstate from "../../observable.js";
export default {
  components: {
    SearchBar,
    ClassifyChart,
  },

  data() {
    return {
      // 引入element-ui 里面的分类选择Tabs
      tabPosition: "left",
      stretch: true,
      // 引入vant 里面的分类选择TreeSelect
      active: 0,
      ellipsis: false,
      //
       activeCategory: "hotsale",
    };
  },
  computed:{
      categoryList() {
      return obstate.categoryList || {};
    },
    product_list() {
      return obstate.categorydata[this.activeCategory] || {};
    }
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
  // position: relative;
  // 修改element-ui样式
  .el-tabs__item:hover {
    color: #ff4891;
    cursor: pointer;
  }
  .el-tabs__item.is-active {
    color: #ff4891;
  }
  .el-tabs__item{
    font-size:16px;
    text-align:center;
  }
  .el-tabs__active-bar {
    background-color: #ff4891;
  }
  .classify-cons-right{
    width:100%;
    position:relative;
    .cons-right-title{
      width:90%;
      font-size: 14px;
      // display:none;
     // 修改vant样式
      .van-tab {
      line-height: 36px;
      font-size: 14px;
      }
      .van-ellipsis{
        text-overflow: none;
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

  }
}
</style>

