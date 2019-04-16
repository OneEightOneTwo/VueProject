import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footer_bar: [
      {
        text: "首页",
        iconClass: "shouye",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "home"
      },
      {
        text: "分类",
        iconClass: "fenlei",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "classify"
      },
      {
        text: "发现",
        iconClass: "faxian",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "discove"
      },
      {
        text: "购物车",
        iconClass: "gouwucheman",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "shopcar"
      },
      {
        text: "我的",
        iconClass: "wode",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "mine"
      }
    ],
    activetab: "home"
  },
  getters: {
    footerBar(state) {
      return state["footer_bar"];
    },
    activetab(state) {
      return state.activetab;
    }
  },
  mutations: {
    changeActive(state, str) {
      state.activetab = str;
    }
  },
});
