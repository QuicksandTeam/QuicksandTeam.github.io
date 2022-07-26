export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-7beb5be1","v-03842690","v-5e1332e8","v-65e40d4e","v-5051696c","v-33eea326","v-6eb581e6","v-10d1dab0","v-ae4445d0","v-5ac1edb8","v-12253ba4","v-308f8180","v-32445a1f","v-33f932be","v-35ae0b5d","v-3762e3fc","v-3917bc9b","v-3acc953a","v-3c816dd9","v-3e364678","v-63c0e422","v-6575bcc1","v-0600e4cc","v-2a7493c8","v-5a1aadce","v-3c8ef0ad","v-309686cd","v-78de4dc6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-7beb5be1","v-03842690"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
