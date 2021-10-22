import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","首页",["/index.html","/README.md"]],
  ["v-77eb2a0d","/websiteData.html","关于站点的信息",["/websiteData","/websiteData.md"]],
  ["v-2d0a870d","/en/","Hello quicksand",["/en/index.html","/en/README.md"]],
  ["v-4cd57d8f","/zh/abouteam/about.html","关于流沙团队",["/zh/abouteam/about","/zh/abouteam/about.md"]],
  ["v-7c53b51e","/zh/column/","流沙专栏",["/zh/column/index.html","/zh/column/README.md"]],
  ["v-04a0befc","/zh/Children's_programming/","少儿编程",["/zh/Children's_programming/index.html","/zh/Children's_programming/README.md"]],
  ["v-47dece54","/zh/Programming_teaching/","编程私教",["/zh/Programming_teaching/index.html","/zh/Programming_teaching/README.md"]],
  ["v-315a5403","/zh/Technology_of_gossip/","技术杂谈",["/zh/Technology_of_gossip/index.html","/zh/Technology_of_gossip/README.md"]],
  ["v-4817b4b2","/zh/column/jiuyuan_algorithm/01.html","【久远讲算法】什么是时间复杂度",["/zh/column/jiuyuan_algorithm/01","/zh/column/jiuyuan_algorithm/01.md"]],
  ["v-74fb34b1","/zh/column/jiuyuan_algorithm/","久远讲算法",["/zh/column/jiuyuan_algorithm/index.html","/zh/column/jiuyuan_algorithm/README.md"]],
  ["v-111f9dd4","/zh/column/Go/","Go 语言入门",["/zh/column/Go/index.html","/zh/column/Go/README.md"]],
  ["v-0fb7d202","/zh/column/aiyuechuangsf/","AI悦创的算法课",["/zh/column/aiyuechuangsf/index.html","/zh/column/aiyuechuangsf/README.md"]],
  ["v-6525aaf6","/zh/Pay_for_courses/pythonbase/","Python 基础入门课|编程一对一",["/zh/Pay_for_courses/pythonbase/index.html","/zh/Pay_for_courses/pythonbase/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
