<template>
  <div class="classify-cons-main">
            <div class="classify-cons-title">
              <!-- 引入vant 里面的分类选择TreeSelect -->
              <van-tabs
                v-model="active"
                :ellipsis="ellipsis"
                title-active-color="#ff4891"
                color="#ff4891"
              >
                <van-tab title="TOP榜">
                  <h5 style="font-size:12px;color:gray">热卖推荐</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="新品推荐">
                  <h5 style="font-size:12px;color:gray">新品推荐</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="蛋类">
                  <h5 style="font-size:12px;color:gray">蛋类</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="营养禽肉">
                  <h5 style="font-size:12px;color:gray">营养禽肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="牛排">
                  <h5 style="font-size:12px;color:gray">牛排</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="牛肉">
                  <h5 style="font-size:12px;color:gray">牛肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="猪肉">
                  <h5 style="font-size:12px;color:gray">猪肉</h5>
                  <!-- 引入组件  ClassifyChart -->
                  <ClassifyChart/>
                </van-tab>
                <van-tab title="火锅调料类">
                  <!-- 引入组件  ClassifyChart -->
                  <h5 style="font-size:12px;color:gray">火锅调料类</h5>
                  <ClassifyChart/>
                </van-tab>
              </van-tabs>
            </div>
            <!-- 点击 显示或隐藏 classify-sec-cons-->
            <div class="classify-cons-btn">
              <img src="../../assets/arrows_down.png" alt>
            </div>
            <!-- 点击上面按钮 出现弹窗 -->
            <div class="classify-sec-cons">
              <div class="classify-sec-consT">
                <div class="sec-consT-title">
                  <div class="sec-consT-topic">TOP榜</div>
                  <div class="sec-consT-topic">新品推荐</div>
                  <div class="sec-consT-topic">蛋类</div>
                  <div class="sec-consT-btn">
                    <img src="../../assets/arrows_down.png" alt>
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
</template>
<style>
// .classify-cons-main {
  //   width: 100%;
  //   position: relative;
  //   .classify-cons-title {
  //     width: 90%;
  //     // height: 36px;
  //     font-size: 12px;
  //     // display:none;

  //     // 修改vant样式
  //     .van-tab {
  //       line-height: 36px;
  //       font-size: 12px;
  //     }
  //   }
  //   .classify-cons-btn {
  //     position: absolute;
  //     top: 11px;
  //     right: 3px;
  //     img {
  //       display: inline-block;
  //       width: 18px;
  //       height: 18px;
  //     }
  //   }
  //   .classify-sec-cons {
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     background: white;
  //     left: 0;
  //     top: 0;
  //     z-index: 99;
  //     display: none;
  //     .classify-sec-consT {
  //       width: 75%;
  //       height: 118px;
  //       color: rgb(119, 118, 118);

  //       // display:flex;
  //       .sec-consT-title {
  //         display: flex;
  //         padding-top: 10px;
  //         box-sizing: border-box;
  //         .sec-consT-topic {
  //           width: 80px;
  //           height: 26px;
  //           border: 1px solid rgb(228, 226, 226);
  //           border-radius: 20px;
  //           display: flex;
  //           font-size: 12px;
  //           justify-content: center;
  //           align-items: center;
  //           margin-left: 10px;
  //         }
  //         .sec-consT-btn {
  //           position: absolute;
  //           top: 10px;
  //           left: 84%;
  //           img {
  //             display: inline-block;
  //             width: 18px;
  //             height: 18px;
  //           }
  //         }
  //       }
  //     }
  //     .classify-sec-consB {
  //       width: 100%;
  //       height: 512px;
  //       background: rgb(248, 248, 248);
  //       opacity: 0.2;
  //     }
  //   }
  // }
</style>
