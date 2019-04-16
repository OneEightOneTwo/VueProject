import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Classify from "./views/Classify.vue";
import Discove from "./views/Discove.vue";
import ShopCar from "./views/Shopcar.vue";
import Mine from "./views/Mine.vue";

Vue.use(Router);
let router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/classify",
      name: "classify",
      component: Classify
    },
    {
      path: "/discove",
      name: "discove",
      component: Discove
    },
    {
      path: "/shopCar",
      name: "shopCar",
      component: ShopCar
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine
    }
  ]
});
export default router;
