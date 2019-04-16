import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Home/Index.vue";
import Classify from "./views/Home/Classify.vue";
import Discove from "./views/Home/Discove.vue";
import ShopCar from "./views/Home/Shopcar.vue";
import Mine from "./views/Home/Mine.vue";
import Search from "./views/Search.vue";
import Home from "./views/Home.vue";

Vue.use(Router);
let router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      redirect: "/home/index",
      component: Home,
      children: [
        {
          path: "index",
          name: "index",
          component: Index
        },
        {
          path: "classify",
          name: "classify",
          component: Classify
        },
        {
          path: "discove",
          name: "discove",
          component: Discove
        },
        {
          path: "shopcar",
          name: "shopcar",
          component: ShopCar
        },
        {
          path: "mine",
          name: "mine",
          component: Mine
        }
      ]
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
});
export default router;
