module.exports = {
    title: 'jie的笔记',
    description: '鸡鸡鸡',
    theme: 'reco',
    base: '/',
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    themeConfig: {
      author: '博客',
      lastUpdated: '更新时间',
      subSidebar: "auto",
      logo: "/11.png",
      authorAvatar: "/11.png",
      type: "blog",
      nav: [
        { text: "首页", link: "/" },
        {
          text: "jie的博客",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/4161014434105000" },
            { text: "Github", link: "https://github.com/jie0181" }
          ]
        }
      ],
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "文章分类", // 默认文案 “分类”
        },
        tag: {
          location: 4, // 在导航栏菜单中所占的位置，默认4
          text: "标签", // 默认文案 “标签”
        },
      },
    },
    plugins: [
        //樱花效果
        [
          "sakura",
          {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            },
          },
        ],
        // 鼠标点击效果0
        [
            "cursor-effects",
            {
              size: 4, // size of the particle, default: 2
              shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
              zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ]
     ],
  }