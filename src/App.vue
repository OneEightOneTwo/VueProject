<template>
  <div id="app">
    <router-view />
    <VfooterBar />
  </div>
</template>
<script>
import VfooterBar from "./components/FooterBar";
export default {
  components: {
    VfooterBar
  }
};
</script>
<style lang="scss">
</style>
