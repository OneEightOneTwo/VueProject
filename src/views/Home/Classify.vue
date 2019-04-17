<template>
  <div>
    <!-- 分类页 -->
    <div class="classify-header">
      <SearchBar/>
    </div>
    <div class="classify-cons">
      <div class="classify-cons-left">
        <ul>
          <li>会员精选</li>
          <li>水果</li>
          <li>精品肉蛋</li>
          <li>海鲜水产</li>
          <li>大牌乳品</li>
          <li>网红零食</li>
          <li>酒水饮品</li>
          <li>烘培蛋糕</li>
          <li>方便速食</li>
          <li>风味熟食</li>
          <li>粮油调味</li>
          <li>美妆美颜</li>
        </ul>
      </div>
      <div class="classify-cons-right">
        <div class="classify-cons-rightBar">
          <ClassifyBar/>
          <div class="classify-cons-btn">
            <img src="../../assets/arrows_down.png" alt>
          </div>
        </div>
        <ClassifyChart/>
        <ClassifyChart/>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from "../../components/SearchBar";
import ClassifyChart from "../../components/ClassifyChart";
import ClassifyBar from "../../components/ClassifyBar";
export default {
  components: {
    SearchBar,
    ClassifyChart,
    ClassifyBar
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
  display: flex;
  .classify-cons-left {
    width: 25%;
    text-align: center;
    background: rgb(206, 204, 204);
    ul li {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .classify-cons-right {
    width: 75%;
    height: 36px;
    .classify-cons-rightBar {
      width: 90%;
      height: 36px;
      padding-left: 10px;
      box-sizing: border-box;
      position: relative;
      .classify-cons-btn {
        position: absolute;
        top: 3px;
        right: -22px;
        img {
          display: inline-block;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>

