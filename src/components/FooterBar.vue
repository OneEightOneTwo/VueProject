<template>
  <div class="footer-bar">
    <a
      v-for="(item, index) in barList"
      :key="index"
      href="javascript:;"
      class="weui-tabbar__item"
      :class="{
        'weui-bar__item_on': activetab === item.path,
        'footer-active': activetab === item.path
      }"
      @click="routerTo(item.path)"
    >
      <span style="display: inline-block;position: relative;">
        <Svgicon
          :icon-class="item.iconClass"
          :className="
            activetab === item.path
              ? 'footer-icon footer-icon-active'
              : 'footer-icon'
          "
        />
        <span
          v-if="item.isbadge"
          v-text="item.bagde"
          class="weui-badge"
          :class="{ 'weui-badge_dot': item.isdot }"
          :style="{
            position: 'absolute',
            top: '0px',
            right: '-6px'
          }"
        ></span>
      </span>
      <p class="weui-tabbar__label" v-text="item.text"></p>
    </a>
  </div>
</template>
<script>
import Svgicon from "./SvgIcon";
export default {
  data() {
    return {};
  },
  methods: {
    routerTo(str) {
      this.$store.commit("changeActive", str);
      this.$router.push(str);
    }
  },
  components: {
    Svgicon
  },
  computed: {
    barList() {
      return this.$store.getters.footerBar;
    },
    activetab() {
      return this.$store.getters.activetab;
    }
  }
};
</script>
<style lang="scss">
.footer-icon {
  font-size: 18px;
}
.footer-icon-active {
  color: #ff4891;
  p {
    color: #ff4891;
  }
}
a.footer-active {
  p {
    color: #ff4891 !important;
  }
}
.footer-bar {
  background-color: rgba(247, 247, 250, 0.95);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > a {
    color: #999;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      color: #262626;
    }
  }
}
</style>

