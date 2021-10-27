const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "",
  description: "一股无形的力量，流沙团队：AI悦创、久远,编程一对一教学,Python,爬虫,深度学习,机器学习,数据分析,网络,IT,技术,博客,算法与数据结构",
  
  // dest: "./dist",

  head: [
    ["script",{src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },],
    ["script",{src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",},],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script",{ src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },],
    ['meta', { name: "keywords", content: "流沙团队：AI悦创、久远,编程一对一教学,Python,爬虫,深度学习,机器学习,数据分析,网络,IT,技术,博客,算法与数据结构"}],
    ],

  
  locales: {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    lang: 'zh-CN',
    title: '流沙团队',
    description: '一股无形的力量——流沙',
  },
  '/en/': {
    lang: 'en-US',
    title: 'Bornforthi',
    description: 'An invisible force -- bornforthi',},
  },

  themeConfig: {
    searchPlaceholder: "Search...",
    // displayAllHeaders: true,
    logo: "/images/logo.png",
    hostname: "https://book.bornforthi.com",

    author: "Bornforthi",
    repo: "https://github.com/QuicksandTeam",

    sidebar: {
      // "/": [
      //   "",
      //   "home",
      //   "slides",
      //   "layout",
      //   {
      //     title: "Guide",
      //     icon: "creative",
      //     prefix: "guide/",
      //     children: ["", "page", "markdown", "disable", "encrypt"],
      //   },
      // ],
      "/zh/column/md/": [
        "oneMarkdowntitle", "twoMarkdown_paragraph",
      ],
    },

    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        ariaLabel: '选择语言',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: "博客主页", link: "/", icon: "home" },
          { text: "文档主页", link: "/zh/home/", icon: "home" },
          {
            text: "在线编程",
            icon: "creative",
            ariaLabel: "online programming",
            items: [
                      {text: "Python 在线编程", link: "https://www.aiycoj.cn/"},
                      {text: "数据结构与算法可视化", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
                      {text: "Markdown Online", link: "https://www.bornforthi.com/markdown-editor/ "},
                      {text: "Scratch 开发中...", link: "https://www.aiyc.top/"},
                    ],
          },
          {
            text: "专栏",
            icon: "note",
            items: [
                      {text: "基础", items: [
                        {text: "Markdown 基础", link: "/zh/column/md/"}
                      ]},
                      
                      {text: "数据结构与算法", items: [
                        {text: "久远讲算法", link: "/zh/column/jysf/"},
                        {text: "AI悦创·数据结构与算法", link: "/zh/column/aiycsf/"}
                      ]}
                    ],
          },
        ],
        // sidebar: {
        //   // "/zh/": [
        //   //   "",
        //   //   "home",
        //   //   "slides",
        //   //   "layout",
        //   //   {
        //   //     title: "如何使用",
        //   //     icon: "creative",
        //   //     prefix: "guide/",
        //   //     children: ["", "page", "markdown", "disable", "encrypt"],
        //   //   },
        //   // ],
        // },
      },
      "/en/": {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"},
                  },
           nav: [
                    { text: "Blog Home", link: "/en/", icon: "home" },
                    { text: "Project Home", link: "/en/home/", icon: "home" },
                    // { text: "Project Home", link: "/zh/01", icon: "home" },
                    // {
                    //   text: "Guide",
                    //   icon: "creative",
                    //   link: "/guide/",
                    // },
                    // {
                    //   text: "Docs",
                    //   link: "https://vuepress-theme-hope.github.io/",
                    //   icon: "note",
                    // },
                ], 
      }
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/aiyuechuang",
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
        Github: "https://github.com/QuicksandTeam",
        Gmail: "aiyuechuang@gmail.com",
        Email: "bornforthi@bornforthi.com",
        Wechat: "/images/公众号/gzh.jpg",
      },
    },

    footer: {
      display: true,
      content: "一股无形的力量——流沙",
    },

    comment: {
      type: "waline",
      serverURL: "https://bornforthi-5tn34wj41-bornforthi.vercel.app/",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    // encrypt: {
    //   global: "hjb",
    // },

    mdEnhance: {
      enableAll: true,
      footnote: true,
      mark: true,
      tasklist: true,
      tex: true,
      demo: true,
      presentation: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/images/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/images/favicon.ico",
        statusBarColor: "black",
      },
      msTile: {
        image: "/images/favicon.ico",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/images/favicon.ico",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/images/favicon.ico",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/images/favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/images/favicon.ico",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/images/favicon.ico",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },

  plugins: [
    // [
    //   "@mr-hope/comment",
    //   {
    //     // 配置选项
    //   },
    // ],
    // [
    //   "copyright",
    //   {
    //     authorName: options.author,
    //     minLength: 10,
    //     // clipboardComponent: path.resolve(__dirname, "components/Clipboard.vue"),
    //   },
    // ],
  ],
});
