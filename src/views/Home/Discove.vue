<template>
  <div>
    <van-tabs v-model="active" title-active-color="#ff4891" color="#ff4891">
      <div class="bear" slot="nav-left">
        <img src="../../assets/bear.png" />
      </div>
      <van-tab class="page" title="精选">
        <div class="author">
          <img src="../../assets/xiaoyusichu.jpg" />
          <span>小羽私厨</span>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
          <van-swipe-item class="lunimg"><img src="../../assets/lun1.webp"/></van-swipe-item>
          <van-swipe-item class="lunimg"><img src="../../assets/lun2.webp"/></van-swipe-item>
          <van-swipe-item class="lunimg"><img src="../../assets/lun3.webp"/></van-swipe-item>
          <van-swipe-item class="lunimg"><img src="../../assets/lun4.webp"/></van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab class="page" title="快手食谱">快手食谱</van-tab>
      <van-tab class="page" title="甜点饮品">甜点饮品</van-tab>
      <van-tab class="page" title="生活百科">生活百科</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    };
  }
};
</script>
<style lang="scss" scoped>
.bear {
  width: 24px;
  height: 24px;
  margin: 15px 10px;
  img {
    border-radius: 100%;
  }
}
.page {
  margin: 0 20px;
  .author {
    margin-top: 10px;
    display: flex;
    flex-wrap: nowrap;
    img {
      width: 24px;
      height: 24px;
      border: 1px solid #e6e6e6;
      border-radius: 50%;
    }
    span {
      font-size: 14px;
      line-height: 24px;
      color: #474245;
      padding: 0 7px;
    }
  }
  .lunbo {
   margin-top: 10px;
    img {
         width: 345px;
         height: 194px;
         border-radius: 25px;
    }
  }
}
</style>