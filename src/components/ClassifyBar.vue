<template>
  <div>
    <!-- 分类 里面的右上角 导航条 -->
    <div class="classify-bar">
      <div class="classify-bar-title">
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
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.classify-bar {
  width: 100%;
  height: 36px;
  .classify-bar-title {
    width: 100%;
    height: 36px;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    ul li {
      display: inline-block;
      height: 36px;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }
}
</style>


