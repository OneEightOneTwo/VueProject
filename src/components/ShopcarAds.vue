<template>
  <!-- 购物车广告模块 -->
  <div>
    <div class="shopcar-ads">
      <div class="shopcar-ads-img">
        <img src="../assets/members.png" alt>
      </div>
      <div class="shopcar-ads-text">
        <span>开通优选会员，本单立减</span>
        <span style="color:red">10元</span>
        <span style="color:red;margin-left:30px;">6/月</span>
        <span>立即开通</span>
        <span class="shopcar-ads-btn">
          <img src="../assets/checkbox.png" alt>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.shopcar-ads {
  width: 92%;
  height: 70px;
  margin: auto;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  .shopcar-ads-img {
    width: 80%;
    height: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid gainsboro;
    img {
      display: inline-block;
      width: 70px;
      height: 18px;
    }
  }
  .shopcar-ads-text {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: black;

    .shopcar-ads-btn img {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-left: 10px;
    }
  }
}
</style>


