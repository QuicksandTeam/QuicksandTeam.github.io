export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-7beb5be1","v-03842690","v-5e1332e8","v-65e40d4e","v-6eb581e6","v-10d1dab0","v-ae4445d0","v-5ac1edb8","v-12253ba4","v-0600e4cc","v-5051696c","v-33eea326","v-23e5dacf","v-629f7253","v-7c92d49f","v-3585a510","v-a1a63d80","v-f1d05934","v-7357cf1b","v-2af0098e","v-9c1562d4","v-f8594504","v-bf83de84","v-4ff7a01e","v-bf3f6cd6","v-0fc672f2","v-2a7493c8","v-5a1aadce","v-3c8ef0ad","v-309686cd","v-78de4dc6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-7beb5be1","v-03842690"]}}}

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
