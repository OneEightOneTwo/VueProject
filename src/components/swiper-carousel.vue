<template>
  <van-swipe @change="onChange" :autoplay="3000">
    <van-swipe-item v-for="(item, index) in imgs" :key="index"
      ><img :src="item" alt=""
    /></van-swipe-item>
    <div class="custom-indicator" slot="indicator">
      {{ current + 1 }}/{{ imgs.length }}
    </div>
  </van-swipe>
</template>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      current: 0
    };
  },
  computed: {
    imgs() {
      return this.imgList || [];
    }
  },
  methods: {
    onChange(i) {
      this.current = i;
    }
  },
  props: ["imgList"]
};
</script>
<style scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
</style>
