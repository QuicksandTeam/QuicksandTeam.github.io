import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "流沙官网", icon: "home", link: "https://www.bornforthi.com"},
  { text: "专栏", icon: "stack", link: "/column"},
  { 
    text: "流沙社区", 
    icon: "creative", 
    children: [
      { 
        text: "在线工具",
        icon: "discover",
        children: [
          {text: "数据结构与算法可视化", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
          {text: "Markdown Online", icon: "markdown", link: "https://www.bornforthi.com/markdown-editor/"},
          {text: "Json Online", icon: "json", link: "https://www.bornforthi.com/json/"},
          { text: "Python在线编程", icon: "python", link: "https://py.bornforthis.cn/#/"},
        ]
      }
    ]
  },
  { text: "流沙课堂", icon: "study", link: "https://study.163.com/provider/480000002277025/course.htm?share=2&shareId=480000002277025"}
  
]);
