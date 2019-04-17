<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <VfooterBar />
  </div>
</template>
<script>
import VfooterBar from "../components/FooterBar";
import obstate from "../observable.js";
export default {
  components: {
    VfooterBar
  }
};
</script>
<style lang="scss">
</style>