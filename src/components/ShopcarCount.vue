<template>
  <div>
    <!-- 购物车结算模块 -->
    <div class="shopcar-count">
      <div class="count-price">
        <div class="count-price-left">商品总价</div>
        <div class="count-price-right">￥156.2</div>
      </div>
      <div class="count-coupons">
        <div class="count-coupons-left">商品券</div>
        <div class="count-coupons-right">登陆后查看商品券</div>
      </div>
      <div class="count-redbag">
        <div class="count-redbag-left">红包</div>
        <div class="count-redbag-right">登陆后查看红包></div>
      </div>
      <div class="count-pay">
        <div class="count-pay-left">商品实付</div>
        <div class="count-pay-right">￥156.2</div>
      </div>
      <div class="count-shipping">
        <div class="count-shipping-left">配送费</div>
        <div class="count-shipping-right">包邮</div>
      </div>
      <div class="count-total">
        <div class="count-total-right">
          <span>合计</span>
          <span style="color:red">￥156.2</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.shopcar-count {
  width: 94%;
  height: 100%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid rgb(245, 243, 243);
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  .count-price {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    .count-price-left {
      flex: 1;
      justify-content: flex-start;
    }
    .count-price-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      color: gray;
    }
  }
  .count-coupons {
    width: 100%;
    height: 40px;
    margin: auto;
    display: flex;
    align-items: center;
    .count-coupons-left {
      flex: 1;
      justify-content: flex-start;
    }
    .count-coupons-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .count-redbag {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .count-redbag-left {
      flex: 1;
      justify-content: flex-start;
    }
    .count-redbag-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      color: gray;
    }
  }
  .count-pay {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .count-pay-left {
      flex: 1;
      justify-content: flex-start;
    }
    .count-pay-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      color: gray;
    }
  }
  .count-shipping {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .count-shipping-left {
      flex: 1;
      justify-content: flex-start;
    }
    .count-shipping-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .count-total {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .count-total-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>


