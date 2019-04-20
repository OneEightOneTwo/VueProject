import Vue from "vue";

const state = Vue.observable({
  //底部导航栏
  footerBar: {
    activeItem: "index",
    itemList: [
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
    ]
  },

  categoryList: [],
  categorydata: {},
  activeCategory: "",
  currentRegion: {
    city: "广州市",
    address: "",
    building: "每日优鲜",
    lat: "", //纬度
    lng: "", //经度
    adcode: ""
  },
  // 存放分类页面商品信息
  categorydata2: {},
  activeCategory2: ""
});

export default state;
