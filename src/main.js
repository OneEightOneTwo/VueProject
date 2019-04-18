import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/svgiconfont.js";
import "./assets/css/reset-phone.css";
import "swiper/dist/css/swiper.css";
// import mockdata from "../mock/mockjs.JS";
// import axios from "axios";
// Vue.prototype.$axios = axios;
// 引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
// 使用vant
Vue.use(Vant);
// 引入element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false;

// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");