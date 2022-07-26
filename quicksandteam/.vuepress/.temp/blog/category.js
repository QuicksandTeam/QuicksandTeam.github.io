export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-7beb5be1","v-03842690"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-7beb5be1"]},"AI悦创·算法":{"path":"/category/ai%E6%82%A6%E5%88%9B%C2%B7%E7%AE%97%E6%B3%95/","keys":["v-33eea326"]},"久远讲算法":{"path":"/category/%E4%B9%85%E8%BF%9C%E8%AE%B2%E7%AE%97%E6%B3%95/","keys":["v-6eb581e6","v-10d1dab0","v-ae4445d0","v-5ac1edb8","v-12253ba4"]},"Markdown 基础":{"path":"/category/markdown-%E5%9F%BA%E7%A1%80/","keys":["v-308f8180","v-32445a1f","v-33f932be","v-35ae0b5d","v-3762e3fc","v-3917bc9b","v-3acc953a","v-3c816dd9","v-3e364678","v-63c0e422","v-6575bcc1","v-2a7493c8"]},"Python 基础":{"path":"/category/python-%E5%9F%BA%E7%A1%80/","keys":["v-5a1aadce","v-3c8ef0ad","v-309686cd","v-78de4dc6"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-7beb5be1","v-03842690"]},"tag B":{"path":"/tag/tag-b/","keys":["v-7beb5be1","v-03842690"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
