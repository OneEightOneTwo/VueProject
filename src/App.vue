<template>
  <div id="app">
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
//头部组件
export default {
  name: "app",
  components: {}
};
</script>

