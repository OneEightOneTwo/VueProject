<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <VfooterBar :barList="barList" :activetab="activetab" />
  </div>
</template>
<script>
import VfooterBar from "../components/FooterBar";
export default {
  components: {
    VfooterBar
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
</style>