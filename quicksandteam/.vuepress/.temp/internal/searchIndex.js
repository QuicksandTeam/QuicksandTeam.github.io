export const searchIndex = [
  {
    "title": "关于流沙团队",
    "headers": [
      {
        "level": 2,
        "title": "1. LOGO 设计理念",
        "slug": "_1-logo-设计理念",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 团队理念",
        "slug": "_2-团队理念",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 教育理念",
        "slug": "_3-教育理念",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 团队愿景",
        "slug": "_4-团队愿景",
        "children": []
      }
    ],
    "path": "/AboutTeam.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "主页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "项目主页",
    "headers": [],
    "path": "/column.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "主要功能与配置演示",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 9",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/posts/article9.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章 1",
    "headers": [
      {
        "level": 2,
        "title": "标题 2",
        "slug": "标题-2",
        "children": [
          {
            "level": 3,
            "title": "标题 3",
            "slug": "标题-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/posts/article/article1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "加密",
    "headers": [],
    "path": "/encrypted/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "幻灯片",
    "headers": [],
    "path": "/slide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用指南 分类",
    "headers": [],
    "path": "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag A 标签",
    "headers": [],
    "path": "/tag/tag-a/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryA 分类",
    "headers": [],
    "path": "/category/categorya/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag B 标签",
    "headers": [],
    "path": "/tag/tag-b/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryB 分类",
    "headers": [],
    "path": "/category/categoryb/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
