export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "href": "images/favicon.png"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "流沙团队：AI悦创、久远,编程一对一教学,Python,爬虫,深度学习,机器学习,数据分析,网络,IT,技术,博客,算法与数据结构"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "流沙团队",
      "description": "一股无形的力量——流沙"
    },
    "/en/": {
      "lang": "en-US",
      "title": "QuickSandTeam",
      "description": "An invisible force -- quicksand"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
