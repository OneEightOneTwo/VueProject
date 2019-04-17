import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //底部tab切换
    footer_bar: [
      {
        text: "首页",
        iconClass: "shouye",
        isbadge: false,
        bagde: 0,
        isdot: false,
        path: "index"
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
    //默认激活footertabbar
    activetab: "index",
    //分类汇总
    category_list: [
      {
        //默认是否激活选中，根据前台携带参数设置
        default: 1,
        //点击分类发送ajax返回后台的参数
        category_id: "hotsale",
        //分类名称
        name: "热卖",
        //分类icon图片
        icon:
          "https://j-image.missfresh.cn/mis_img_20181212225039946.png?mryxw=120&mryxh=120",
        //分类属性，是special(专题，首页独有)还是base(品种),base的可分类页复用
        classifying: "special"
      },
      {
        default: 0,
        category_id: "fruit",
        name: "新鲜水果",
        icon:
          "https://j-image.missfresh.cn/mis_img_20190415010710117.png?mryxw=96&mryxh=96",
        classifying: "base"
      },
      {
        default: 0,
        category_id: "garden",
        name: "时令蔬菜",
        icon:
          "https://j-image.missfresh.cn/mis_img_20190411215607573.png?mryxw=96&mryxh=96",
        classifying: "base"
      },
      {
        default: 0,
        category_id: "meategg",
        name: "精品肉蛋",
        icon:
          "https://j-image.missfresh.cn/mis_img_20190411233944397.png?mryxw=96&mryxh=96",
        classifying: "base"
      },
      {
        default: 0,
        category_id: "seafood",
        name: "海鲜水产",
        icon:
          "https://j-image.missfresh.cn/mis_img_20190411215703249.png?mryxw=96&mryxh=96",
        classifying: "base"
      },
      {
        default: 0,
        category_id: "milk",
        name: "大牌乳品",
        icon:
          "https://j-image.missfresh.cn/mis_img_20190411215729751.png?mryxw=96&mryxh=96",
        classifying: "base"
      },
      {
        default: 0,
        category_id: "snack",
        name: "网红零食",
        icon:
          "https://j-image.missfresh.cn/mis_img_20181212225358505.png?mryxw=140&mryxh=140",
        classifying: "base"
      }
    ]
  },
  getters: {
    footerBar(state) {
      return state["footer_bar"];
    },
    activetab(state) {
      return state.activetab;
    },
    categoryList(state) {
      return state["category_list"];
    }
  },
  mutations: {
    changeActive(state, str) {
      state.activetab = str;
    },
    changeCategory(state, index) {
      state.category_list.forEach(item => {
        item.default = 0;
      });
      state.category_list[index].default = 1;
    }
  }
});
