export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "Hello quicksand",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": 1634534315000,
    "contributors": [
      {
        "name": "aiyc",
        "email": "1432803776@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
