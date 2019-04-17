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
  categoryList: [
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
  ],
  categorydata: {
    hotsale: {
      categoryArea: {
        //分类导航 本周新品|邀请有礼
        lanternArea: [
          {
            image: "https://j-image.missfresh.cn/img_20181127211810194.png",
            name: "本周新品"
          },
          {
            image: "https://j-image.missfresh.cn/img_20181127212305318.png",
            name: "邀请有礼"
          },
          {
            image: "https://j-image.missfresh.cn/img_20181127212018922.png",
            name: "每日签到"
          },
          {
            image: "https://j-image.missfresh.cn/img_20181127212340988.png",
            name: "凑单专区"
          },
          {
            image: "https://j-image.missfresh.cn/img_20181127212459157.png",
            name: "开通会员"
          }
        ],

        //新人特权，每日坚果
        tileArea: [
          {
            image: "https://j-image.missfresh.cn/img_20190115153812265.png"
          },
          {
            image: "https://j-image.missfresh.cn/img_20190115153756830.png"
          }
        ]
      },
      //招牌  严选 安心检测
      brands: [
        {
          image: "https://j-image.missfresh.cn/img_20170627185311186.png",
          name: "优鲜严选",
          link: "https://as-vip.missfresh.cn/v1/h5model/strict-selection"
        },
        {
          image: "https://j-image.missfresh.cn/img_20170627184654084.png",
          name: "安心检测",
          link: "https://as-vip.missfresh.cn/v1/h5model/safeguard"
        },
        {
          image: "https://j-image.missfresh.cn/img_20170718194948016.png",
          name: "赔付保障",
          link:
            "https://p-h5.missfresh.cn/h5_file/467AA9256CCD5AB8F364815C073C00FD/index.html"
        }
      ],
      //通栏广告 新人必买
      banner: [
        {
          path:
            "https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&mryxh=142"
        }
      ],
      products: [
        {
          //商品ID
          goodId: 1,
          //商品图片
          image:
            "https://image.missfresh.cn/18ef85f85c8343a79444a4b34da400e9.jpg",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜",
          //商品名称
          name: "红颜草莓1斤"
        },
        {
          //商品ID
          goodId: 2,
          //商品图片
          image:
            "https://image.missfresh.cn/27a1e06821bc49598a57e9883d2b4228.jpeg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜2",
          //商品名称
          name: "红颜草莓1斤2"
        },
        {
          //商品ID
          goodId: 3,
          //商品图片
          image:
            "https://image.missfresh.cn/c3a1dc740cf84da7a14fd3387de50063.jpg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜3",
          //商品名称
          name: "红颜草莓1斤3"
        }
      ],
      page: 1,
      num: 10
    },

    fruit: {
      //通栏广告 新人必买
      banner: [
        {
          path:
            "https://j-image.missfresh.cn/mis_img_20190416105702514.jpg?mryxw=1124&mryxh=270"
        }
      ],
      products: [
        {
          //商品ID
          goodId: 1,
          //商品图片
          image:
            "https://image.missfresh.cn/29217a5afe6e4ae29e845655df87e865.jpg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "aaaaaaaa",
          //商品名称
          name: "红颜草莓1斤aaaaaaaaaaaaaa"
        },
        {
          //商品ID
          goodId: 2,
          //商品图片
          image:
            "https://image.missfresh.cn/e933b18b9d4541fbbd721eb0ddcf705e.jpg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜2bbbbb",
          //商品名称
          name: "红颜草莓1斤2"
        },
        {
          //商品ID
          goodId: 3,
          //商品图片
          image:
            "https://fms-image.missfresh.cn/b0084f8c9a2a4b15a4ae87aeb71c2abc.jpg?iopcmd=thumbnail&type=4&width=200",
          //活动信息
          promotionTags: "限时秒杀",
          //销售价格
          newPrice: 3.9,
          //原价
          oldPrice: 12.9,
          //是否卖完
          sell_out: false,
          //商品信息
          subtitle: "大颗香甜 微微一笑为红颜3",
          //商品名称
          name: "红颜草莓1斤3"
        }
      ],
      page: 1,
      num: 10
    }
  }
});

export default state;
