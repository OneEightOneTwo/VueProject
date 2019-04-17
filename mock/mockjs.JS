import Mock from "mockjs";

const Random = Mock.Random;

// function getData() {
//   let datalist = [];
//   for (let i = 0; i < 100; i++) {
//     let newData = {
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     };
//     datalist.push(newData);
//   }
//   return {
//     data: datalist
//   };
// }

function getGoodList() {
  let products = [];
  let promotionTagsarr = ["新人专享", "限时秒杀"];
  for (let i = 0; i < 100; i++) {
    let price = Random.float(0, 100, 1, 1);
    let template = {
      goodId: i,
      image: Random.dataImage("200x200", "mock的图片"),
      "promotionTags|1": promotionTagsarr,
      newPrice: price,
      oldPrice: price + 20,
      sell_out: Random.boolean,
      subtitle: "商品描述" + i,
      name: "商品名称" + i
    };
    products.push(template);
  }
}
let goodList = getGoodList();
let index_init_data = {
  status: 1,
  //顶部分类
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
  ],

  //顶部 2小时达图片
  img_url: "https://j-image.missfresh.cn/img_20161108170831264.png",

  //商品相关
  product_list: {
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

    //商品列表 访问首页时默认返回10条数据
    products: goodList,
    //商品数量当前页数
    page: 1,
    //每次请求返回数量
    num: 10
  }
};

const data = Mock.mock("/index/init", index_init_data);
export default { data };
