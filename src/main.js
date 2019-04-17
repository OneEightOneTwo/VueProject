import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/svgiconfont.js";
import "./assets/css/reset-phone.css";
import mockdata from "../mock/mockjs.JS";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
