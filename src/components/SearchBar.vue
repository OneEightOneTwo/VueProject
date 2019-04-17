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
  padding: 0 10px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
<<<<<<< HEAD
  margin-bottom: 10px;
=======
  justify-content: space-between;
  align-items: center;
>>>>>>> a6959cfd8fce764ed27b209deeac57c913f4304b
}
.left {
  width: 44%;
  height: 21px;
<<<<<<< HEAD
  margin-left: 15px;
  margin-top: 10px;
  flex: 2;
  display: flex;
}
img {
  margin-top: 3px;
=======
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  margin: 0 5px;
>>>>>>> a6959cfd8fce764ed27b209deeac57c913f4304b
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
  font-size: 16px;
  width: 78px;
<<<<<<< HEAD
  height: 19px;
  flex:4;
=======
>>>>>>> a6959cfd8fce764ed27b209deeac57c913f4304b
}
.buildingName {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-top: -5px;
  margin-left: 2px;
  background: url(../assets/jiantou.png) no-repeat bottom center;
  background-size: 10px;
  flex:1;
}
.right {
  width: 44%;
  flex: 1;
  height: 30px;
  margin-left: 15px;
}
.search-nav{
    float: right;
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

