export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-7beb5be1","v-03842690"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-7beb5be1"]},"Markdown 基础":{"path":"/category/markdown-%E5%9F%BA%E7%A1%80/","keys":["v-308f8180","v-3c816dd9","v-3e364678","v-63c0e422","v-6575bcc1"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-7beb5be1","v-03842690"]},"tag B":{"path":"/tag/tag-b/","keys":["v-7beb5be1","v-03842690"]},"Markdown":{"path":"/tag/markdown/","keys":["v-308f8180"]}}}}}

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
