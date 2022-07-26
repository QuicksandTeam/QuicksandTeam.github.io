import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://book.bornforthi.com/",

  author: {
    name: "QuickSand",
    url: "https://book.bornforthi.com/",
  },

  iconAssets: "iconfont",

  logo: "/images/hero.png",

  repo: "QuicksandTeam/QuicksandTeam.github.io",

  docsDir: "quicksandteam/",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '一股无形的力量——流沙,<a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-5</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一股无形的力量",
    intro: "/AboutTeam/",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:bornforthi@bornforthi.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/QuicksandTeam",
      // Gitlab: "https://example.com",
      Gmail: "mailto:aiyuechuang@gmail.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://steamcommunity.com/id/bornforthis/",
      // Twitter: "https://example.com",
      Wechat: "/images/公众号/gzh.jpg",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
    },
  },


  encrypt: {
    config: {
      // "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    
    components: [
      "Badge",
      "PDF",
      "YouTube",
    ],

    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      // serverURL: "https://bornforthi-5tn34wj41-bornforthi.vercel.app/",
      serverURL: "https://book.comment.bornforthi.com/",
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
      copyright: false,
    },

    mdEnhance: {
      tex: true,
      // enableAll: true,
      attrs: true,
      tabs: true,
      // vpre: true,
      codetabs: true,
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      align: true, // 自定义对齐
      footnote: true,
      // this is the default option, so you can use it directly
      container: true,
      // enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
