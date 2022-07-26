import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { 
    text: "流沙社区", 
    icon: "creative", 
    children: [
      { 
        text: "在线工具",
        icon: "discover",
        children: [
          {text: "数据结构与算法可视化", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
          {text: "Markdown Online", link: "https://www.bornforthi.com/markdown-editor/"},
          {text: "Json Online", link: "https://www.bornforthi.com/json/"},
        ]
      }
      
    ]
  },
  
]);
