export const themeData = {
  "logo": "images/logo.png",
  "repo": "QuicksandTeam/Bornforthi_VuePress",
  "docsDir": "docs",
  "sidebar": {
    "/zh/column/jiuyuan_algorithm/": [
      {
        "text": "章节一",
        "children": [
          "/zh/column/jiuyuan_algorithm/README.md",
          "/zh/column/jiuyuan_algorithm/01.md"
        ]
      }
    ],
    "/reference/": [
      {
        "text": "Reference",
        "children": [
          "/reference/cli.md",
          "/reference/config.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageText": "选择语言",
      "selectLanguageName": "简体中文",
      "selectLanguageAriaLabel": "选择语言",
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "contributorsText": "贡献者",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接",
        "想要帮助？微信：Jiabcdefh"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏",
      "navbar": [
        {
          "text": "专栏",
          "children": [
            {
              "text": "基础",
              "children": [
                "Markdown 基础"
              ]
            },
            {
              "text": "语言入门",
              "children": [
                "/zh/column/Go/README.md",
                "Java 入门",
                "Python 入门",
                "JavaScript 入门"
              ]
            },
            {
              "text": "数据结构与算法",
              "children": [
                "/zh/column/jiuyuan_algorithm/README.md",
                "/zh/column/aiyuechuangsf/README.md"
              ]
            }
          ]
        },
        {
          "text": "技术杂谈",
          "link": "/zh/Technology_of_gossip/README.md"
        },
        {
          "text": "少儿编程",
          "link": "/zh/Children's_programming/README.md"
        },
        {
          "text": "付费课程",
          "children": [
            {
              "text": "编程私教",
              "link": "/zh/Programming_teaching/README.md"
            },
            {
              "text": "Python 入门课程",
              "link": "/zh/Pay_for_courses/pythonbase/README.md"
            }
          ]
        },
        {
          "text": "在线编程",
          "children": [
            {
              "text": "Python 在线编程",
              "link": "https://www.aiycoj.cn/"
            },
            {
              "text": "数据结构与算法可视化",
              "link": "https://huangjiabaoaiyc.gitee.io/visualgo/"
            }
          ]
        },
        "/zh/abouteam/about.md"
      ]
    },
    "/en/": {
      "selectLanguageText": "Languages",
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
