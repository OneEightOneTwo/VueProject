<template>
  <div>
    <!-- 分类里面的 右边购物车组件 -->
    <div class="classify-chart">
      <div class="classify-chart-img">
        <div class="chart-img">
          <img src="../assets/recommendgoods.jpg" alt>
          <div class="chart-text">满39减5</div>
        </div>
      </div>
      <div class="classify-chart-right">
        <div class="classify-chart-title">澳洲黄尾红葡萄酒750ml</div>
        <div class="classify-chart-text">跟袋鼠一样 是澳洲的代名词</div>
        <div class="classify-chart-others">
          <div class="classify-chart-price">
            <p>￥199</p>
            <p>￥699</p>
          </div>
          <div class="classify-chart-chart">
            <img src="../assets/shopcart.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
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
</style>


