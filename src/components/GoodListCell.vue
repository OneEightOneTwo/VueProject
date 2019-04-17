<template>
  <div class="good-item-cell">
    <div class="item-image">
      <img :src="data.image" :alt="data.name" />
    </div>
    <div class="item-des">
      <p class="name" v-text="data.name"></p>
      <p class="subtitle" v-text="data.subtitle">蜜汁甜 再一次回味初恋</p>
      <span class="promotion" v-text="data.promotionTags"></span>
      <p class="price">
        <em>￥{{ data.newPrice }}</em>
        <del>￥{{ data.oldPrice }}</del>
      </p>
      <img src="../assets/images/car-icon.png" alt="" class="car-img" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style lang="scss">
.good-item-cell {
  height: 177px;
  box-sizing: border-box;
  padding: 22px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item-image {
    width: 120px;
    height: 120px;
  }
  .item-des {
    position: relative;
    height: 100%;
    .name {
      width: 200px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 16px;
      color: #474245;
    }
    .subtitle {
      color: #969696;
      font-size: 14px;
    }
    .promotion {
      display: inline-block;
      border: 1px solid rgb(245, 159, 193);
      color: rgb(245, 159, 193);
      font-size: 12px;
      border-radius: 3px;
      padding: 0 2px;
    }
    .price {
      margin-top: 30px;
      em {
        color: rgb(255, 72, 145);
        font-size: 16px;
        letter-spacing: -1px;
        display: inline;
        vertical-align: baseline;
        margin-left: -0.3125rem;
      }
      del {
        letter-spacing: -1px;
        display: inline;
        vertical-align: baseline;
        margin-left: 5px;
        font-size: 12px;
        color: rgb(150, 150, 150);
      }
    }
    .car-img {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 45px;
      height: 45px;
    }
  }
}
</style>
