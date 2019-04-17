<template>
  <div>
    <div class="shopCar_header">
      <img src="../../assets/position.png" alt>
      <a href="javascript:;">合你意水果店</a>
      <img src="../../assets/arrows_down.png" alt>
    </div>
    <div class="shopCar_members">
      <img src="../../assets/members.png" alt>
      <span>开通优选会员，本单立省10元</span>
    </div>
    <div class="shopCar_wrap">
      <div class="shopCar-checkbox">
        <img class="s-" src="../../assets/checkbox.png" alt>
      </div>
      <p>次日达</p>
      <span>包邮</span>
    </div>
    <Buybox/>
    <Buybox/>
  </div>
</template>
<script>
import Buybox from "../../components/Buybox";
export default {
  components: {
    Buybox
  }
};
</script>
<style lang="scss">
.shopCar_header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: white;
}
.shopCar_header a {
  display: inline-block;
  font-size: 16px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
}
.shopCar_header img {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.shopCar_members {
  height: 38px;
  background: rgb(247, 234, 217);
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.shopCar_members img {
  display: inline-block;
  width: 60px;
  height: 18px;
}
/* 次日送达 */
.shopCar_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shopCar-checkbox {
  width: 40px;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.shopCar-checkbox img {
  display: inline-block;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
}
.shopCar_wrap p {
  flex: 3;
}
.shopCar_wrap span {
  flex: 1;
}
</style>