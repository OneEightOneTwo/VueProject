<template>
<div class="classifySecond">
     <!-- 点击分类右上角按钮 出现的弹窗 -->
    <div class="classify-sec-cons">
      <div class="classify-sec-consT">
       <div class="sec-consT-title">
          <div class="sec-consT-topic">TOP榜</div>
            <div class="sec-consT-topic">新品推荐</div>
                  <div class="sec-consT-topic">蛋类</div>
                  <div class="sec-consT-btn">
                    <img src="../assets/arrows_down.png" alt>
                  </div>
                </div>
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">营养禽肉</div>
                  <div class="sec-consT-topic">牛排</div>
                  <div class="sec-consT-topic">牛肉</div>
                </div>
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">猪肉</div>
                  <div class="sec-consT-topic">火锅调料类</div>
                </div>
              </div>
              <div class="classify-sec-consB"></div>
            </div>                               
     </div>
</div>
</template>
<script>
export default {
 
};
</script>
<style lang="scss">
.classifySecond{
    position:relative;
   .classify-sec-cons {
      width: 100%;
      height: 100%;
      position: absolute;
      background: white;
      left: 0;
      top: 0;
      z-index: 99;
    //   display: none;
      .classify-sec-consT {
        width: 75%;
        height: 118px;
        color: rgb(119, 118, 118);

        // display:flex;
        .sec-consT-title {
          display: flex;
          padding-top: 10px;
          box-sizing: border-box;
          .sec-consT-topic {
            width: 80px;
            height: 26px;
            border: 1px solid rgb(228, 226, 226);
            border-radius: 20px;
            display: flex;
            font-size: 12px;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
          }
          .sec-consT-btn {
            position: absolute;
            top: 10px;
            left: 84%;
            img {
              display: inline-block;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
      .classify-sec-consB {
        width: 100%;
        height: 512px;
        background: rgb(248, 248, 248);
        opacity: 0.2;
      }
    }
    
}
</style>