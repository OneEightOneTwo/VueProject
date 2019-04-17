<template>
  <div>
    <div class="buybox">
      <div class="buybox-context">
        <div class="buybox-checkbox">
          <img class="s-" src="../assets/checkbox.png" alt>
        </div>
        <div class="buybox-main">
          <div class="buybox-img">
            <img src="../assets/products001.png" alt>
          </div>
          <div class="buybox-cons">
            <div class="buybox-title">供港烟台苹果4个760g起</div>
            <div class="buybox-coupon">满69减10</div>
            <div class="buybox-oldprice">
              <span>￥79</span>
              <span>会员8.9折</span>
            </div>
            <div class="buybox-count">
              <div class="buybox-saleprice">￥89</div>
              <div class="buybox-nums">
                <span class="cutnum">-</span>
                <input class="nownum" type="text" value="1" style="width:30px">
                <span class="addnum">+</span>
              </div>
            </div>
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
.buybox {
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(245, 243, 243);
  .buybox-context {
    width: 100%;
    height: 74px;
    display: flex;
    flex-direction: row;
    .buybox-checkbox {
      width: 12%;
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: inline-block;
        width: 26px;
        height: 26px;
      }
    }
    .buybox-main {
      width: 88%;
      height: 74px;
      display: flex;

      .buybox-img {
        width: 16%;
        height: 70px;
        img {
          display: inline-block;
          width: 70px;
          height: 70px;
        }
      }
      .buybox-cons {
        width: 84%;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        box-sizing: border-box;
        .buybox-title {
          width: 100%;
          height: 20px;
          font-size: 14px;
          color: black;
        }
        .buybox-coupon {
          width: 55px;
          height: 16px;
          font-size: 12px;
          color: rgb(218, 183, 183);
          border: 1px solid rgb(218, 183, 183);
        }
        .buybox-oldprice {
          box-sizing: border-box;
          padding-top: 10px;
          span:nth-child(1) {
            display: inline-block;
            width: 30px;
            height: 12px;
            font-size: 10px;
            color: rgb(77, 76, 76);
          }
          span:nth-child(2) {
            display: inline-block;
            width: 64px;
            height: 14px;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: rgb(235, 85, 85);
            border: 1px solid rgb(235, 85, 85);
            border-radius: 2px;
          }
        }
        .buybox-count {
          display: flex;
          flex-direction: row;
          .buybox-saleprice {
            width: 66%;
            font-size: 16px;
            color: crimson;
          }
          .buybox-nums {
            width: 34%;
            height: 22px;
            .cutnum {
              display: inline-block;
              width: 18px;
              height: 18px;
              text-align: center;
              line-height: 18px;
              border: 1px solid gray;
              border-radius: 50%;
            }
            .addnum {
              display: inline-block;
              width: 18px;
              height: 18px;
              text-align: center;
              line-height: 18px;
              border: 1px solid gray;
              border-radius: 50%;
            }
            input {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>


