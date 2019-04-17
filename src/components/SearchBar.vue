<template>
  <header>
    <div class="left">
      <img src="../assets/logo.png">
      <div class="locationNav">元岗村小学</div>
      <span class="buildingName"></span>
    </div>
    <div class="right">
      <div data-v-b9a7550c class="search-nav">
        <div class="search-nav-box">
          <img src="../assets/search.png" class="search-nav-img">
          <div class="search-nav-text">搜索</div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  width: 100%;
  height: 32px;
  display: flex;
  margin-bottom: 10px;
}
.left {
  width: 185px;
  height: 21px;
  margin-left: 15px;
  margin-top: 10px;
  flex: 2;
  display: flex;
}
img {
  margin-top: 3px;
  width: 55px;
  height: 14px;
  vertical-align: middle;
  flex:2.5;
}
.locationNav {
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  width: 78px;
  height: 19px;
  flex:4;
}
.buildingName {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-left: 2px;
  background: url(../assets/jiantou.png) no-repeat bottom center;
  background-size: 10px;
  flex:1;
}
.right {
  flex: 1;
  height: 30px;
  margin-left: 15px;
}
.search-nav{
    margin-top: 5px;
    width: 154px;
    height: 30px;
    line-height: 30px;
    background: #F5F5F5;
    border-radius: 4rem;
}
.right img{
    width: 18px;
    height: 18px;
    margin-left: 5px;
    display: inline-block;
    vertical-align: middle;
}
.search-nav-text{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #C6C6C6;
    margin-left: 10px;
}
</style>

