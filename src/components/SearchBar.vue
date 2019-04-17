<template>
  <div class="search-header">
    <div class="left">
      <img src="../assets/logo.png" />
      <div class="locationNav">元岗村小学</div>
      <span class="buildingName"></span>
    </div>
    <div class="right">
      <div data-v-b9a7550c class="search-nav">
        <div class="search-nav-box">
          <img src="../assets/search.png" class="search-nav-img" />
          <div class="search-nav-text">搜索</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.search-header {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    box-sizing: border-box;
    width: 50%;
    height: 40px;
    padding-left: 16px; 
    text-align: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 55px;
      height: 14px;
      vertical-align: middle;
      flex: 2.5;
    }
    .locationNav {
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      font-size: 16px;
      width: 78px;
    }
    .buildingName {
      display: inline-block;
      width: 16px;
      height: 16px;
      line-height: 16px;
      margin-top: -5px;
      margin-left: -2px;
      background: url(../assets/jiantou.png) no-repeat bottom center;
      background-size: 10px;
      flex: 1;
    }
  }

  .right {
    width: 50%;
    height: 40px;
    .search-nav {
      margin-top: 5px;
      margin-right: 10px;
      float: right;
      width: 154px;
      height: 30px;
      line-height: 30px;
      background: #f5f5f5;
      border-radius: 4rem;
      img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
      display: inline-block;
      vertical-align: middle;
    }
    }
    
    .search-nav-text {
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
      color: #c6c6c6;
      margin-left: 10px;
    }
  }
}
</style>

