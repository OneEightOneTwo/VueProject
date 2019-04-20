<template>
  <div class="classifySlide">
    <!-- vantUI框架 -->
    <van-tabs v-model="active" :ellipsis="ellipsis" title-active-color="#ff4891" color="#ff4891">
      <van-tab
        v-for="(classify,index) in classifySlides"
        :key="index"
        :title="classify.name"
        :class="{ 'van-tab__pane': classify.category_id == activeCategory2 }"
      >
        <p>{{classify.name}}</p>
        <!-- 内容 {{ index }} -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 引入vant 里面的分类选择TreeSelect
      active: 0,
      ellipsis: false
    };
  },
  props: ["classifySlides", "activeCategory2"],
  methods: {
    switchCategory(index) {
      // console.log(index);
      this.$emit("switchCategory", index);
    }
  },
  watch: {
    active() {
      this.$emit("switchCategory", this.active);
    }
  }
};
</script>
<style lang="scss">
/* 修改vant样式 */
.classifySlide {
  .van-tab {
    line-height: 36px;
    font-size: 14px;
  }
  //   修改底部滑动条样式
  .van-tab--active {
    border-bottom-color: #ff4891;
    color: #ff4891;
  }
  p {
    width: 100%;
    height: 18px;
    font-size: 12px;
    font-weight: normal;
    padding-left: 10px;
    box-sizing: border-box;
  }
}
</style>

