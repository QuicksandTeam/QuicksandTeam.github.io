export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"流沙团队\",\"description\":\"流沙团队,一股无形的力量,AI悦创,久远,编程一对一教学,唐婷婷,Python,爬虫,深度学习,机器学习,数据分析,网络,IT,技术,博客,算法与数据结构,新媒体,平面设计,摄影,Logo设计\",\"head\":[],\"locales\":{}}")

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
