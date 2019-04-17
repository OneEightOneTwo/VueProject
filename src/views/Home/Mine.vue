<template>
<div>
  <div class="use-nologin">
    <span>用户登录</span>
  </div>
  <div class="user_items">
    <ul>
      <li><span><i>0</i></span><span>余额<i><img src="../../assets/youli.gif"></i></span></li>
      <li><span><i>0</i></span><span>红包</span></li>
      <li><span><i>0</i></span><span>商品券</span></li>
      <li><span><i></i></span><span>积分兑换</span></li>
    </ul>
  </div>
  <div class="user-plus">
      <div class="plus-text">
        <p class="nav">
            <span class="left">会员权益</span> 
            <span class="right">开通会员       &gt;</span> 
        </p> 
        <p class="plus-money">成为优享会员，预计1年将为你
        <span class="pink">节省1121.30元 </span>
        </p>
      </div>
    </div>
    <div class="plus-items">
        <ul>
            <li><a href="javascript:void(0)">
                <span><img src="../../assets/m1.png"></span> 
                <span>会员专享价</span></a>
            </li>
            <li><a href="javascript:void(0)">
                <span><img src="../../assets/m2.png"></span> 
                <span>1小时送达</span></a>
            </li>
            <li><a href="javascript:void(0)">
                <span><img src="../../assets/m3.png"></span> 
                <span>专属客服</span></a>
            </li>
            <li><a href="javascript:void(0)">
                <span><img src="../../assets/m4.png"></span> 
                <span>敬请期待</span></a>
            </li>
        </ul>
    </div>
    <div class="activities-wrap">
        <div class="activities-list flex">
            <div class="activities-item"><img src="../../assets/egg.jpg" class="activities-img"></div>
            <div class="activities-item"><img src="../../assets/strawberry.png" class="activities-img"></div>
            <div class="activities-item"><img src="../../assets/hongbao.png" class="activities-img"></div>
        </div>
    </div>
    <div class="list-item rela">我的订单
        <span class="turn-right">&gt;</span>
    </div>
    <div class="list-item rela">我的地址
        <span class="turn-right">&gt;</span>
    </div>
    <div class="list-item rela">账户与安全
        <span class="turn-right">&gt;</span>
    </div>
    <div class="list-item rela">客户与帮助
        <span class="turn-right">&gt;</span>
    </div>
    <div class="list-item rela">意见反馈
        <span class="turn-right">&gt;</span>
    </div>
    <div class="list-item rela">关于我们
        <span class="turn-right">&gt;</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.use-nologin {
  width: 100%;
  height: 162px;
  background: url(../../assets/my-bg.png) no-repeat 100%;
  text-align: center;
  padding-top: 65px;
}
.use-nologin span {
  display: block;
  height: 38px;
  width: 85px;
  margin: 0 auto;
  line-height: 38px;
  font-size: 14px;
  color: #ff4891;
  text-align: center;
  border: 1px solid #ff4891;
  border-radius: 5px;
}
.user_items {
    width: 100%;
    height: 94px;
    padding: 10px 0;
}
.user_items ul {
    overflow: auto;
    display: flex;
}
.user_items li{
    flex: 1;
    text-align: center;
    color: #4d4d4d;
    font-size: 14px;
    line-height: 25px;
    padding-left: 30px;
}
.user_items li:nth-child(4){
    flex:1.5;
}
.user_items li span {
    display: block;
    position: relative;
}
.user_items li span i img {
    height: 12px;
    width: 24px;
    position: absolute;
    right: -12px;
    top: -5px;
}
.user-plus {
    padding: 0 15px;
}
.plus-text {
    width: 100%;
}
.plus-text p.nav {
    width: 100%;
    line-height: 24px;
}
.plus-money {
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #969696;
    font-size: 12px;
    overflow: auto;
}
.plus-text span.left {
    line-height: 30px;
    font-size: 20px;
    color: #474245;
    float: left;
}
.plus-text span.right {
    float: right;
    text-align: right;
    color: #969696;
    font-size:13px;
    padding-right: 15px;
}
.pink {
    color: #ff4891;
}
.plus-items {
    height:85px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
}
.plus-items li {
    width: 24%;
    display: inline-block;
}
.plus-items li a {
    color: #474245;
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 12px;
    width: 83px;
    height: 54px;
}
.plus-items li a span:nth-child(1){
    width: 83px;
    height: 34px;
    display: block;
    padding: 0 30px;
}
.plus-items li a span:nth-child(2){
    width: 83px;
    height: 24px;
    display: block;
}
.plus-items li a img {
    height: 28px;
    width: 28px;
}
.activities-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px 10px 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.activities-list {
     display:flex;
    flex-wrap: nowrap;
}
.activities-item {
    font-size: 0;
    line-height: 0;
    padding-right: 10px;
}
.activities-img {
   width: 157px;
   height: 90px;
}
.list-item {
    margin: 0 15px;
    height: 61px;
    line-height: 61px;
    border-bottom: 1px solid #f0f0f0;
    color: #262626;
    font-size: 16px;
    position: relative;
}
.turn-right {
    display: block;
    text-align: right;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    color: #ccc;
    font-size: 24px;
    font-weight: 100;
}
</style>