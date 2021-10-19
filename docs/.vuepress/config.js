/*
* @Author: AI悦创
* @Date:   2021-10-12 08:46:14
* @Last Modified by:   aiyc
* @Last Modified time: 2021-10-15 19:14:37
*/

// .vuepress/config.js
// const { config } = require("create-vuepress-theme-hope@1.20.3");

module.exports = {
  // base: '/',
  // 本地资源一定要放在 public 文件夹下
  head: [
        ['link', { rel: 'icon', type: "image/png", href: 'images/favicon.png'}],
        ['meta', { name: "keywords", content: "流沙团队：AI悦创、久远,编程一对一教学,Python,爬虫,深度学习,机器学习,数据分析,网络,IT,技术,博客,算法与数据结构"}],
  ],

  themeConfig: {
  logo: 'images/logo.png',
  repo: 'QuicksandTeam/Bornforthi_VuePress',
  docsDir: 'docs',
  // 侧边栏数组
  // 所有页面会使用相同的侧边栏
  sidebar: {
    '/zh/column/jiuyuan_algorithm/': [
      {
        text: '章节一',
        children: ['/zh/column/jiuyuan_algorithm/README.md', '/zh/column/jiuyuan_algorithm/01.md'],
      },
    ],
    '/reference/': [
      {
        text: 'Reference',
        children: ['/reference/cli.md', '/reference/config.md'],
      },
    ],
  },

  locales: {
    '/': { 
          selectLanguageText: "选择语言",
          selectLanguageName: '简体中文',
          selectLanguageText: '选择语言',
          selectLanguageAriaLabel: '选择语言',

          // page meta
          editLinkText: '在 GitHub 上编辑此页',
          lastUpdatedText: '上次更新',
          contributorsText: '贡献者',

          // 404 page
          notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
            '想要帮助？微信：Jiabcdefh',
          ],
          backToHome: '返回首页',
          // a11y
          openInNewWindow: '在新窗口打开',
          toggleDarkMode: '切换夜间模式',
          toggleSidebar: '切换侧边栏',

  navbar: [
      // NavbarItem
      // {
      //   text: 'GitHub',
      //   link: 'https://github.com/QuicksandTeam',
      // },

      {
        text: '专栏',
        children: [
          {
            text: "基础",
            children: ["Markdown 基础"],
          },
          {
            text: '语言入门',
            children: ['/zh/column/Go/README.md', 'Java 入门', 'Python 入门', 'JavaScript 入门'],
          },
          {
            text: '数据结构与算法',
            children: ['/zh/column/jiuyuan_algorithm/README.md', '/zh/column/aiyuechuangsf/README.md'],
          },
        ],
      },

      {
        text: "技术杂谈",
        link: "/zh/Technology_of_gossip/README.md"
      },
      {
        text: "少儿编程",
        link: "/zh/Children's_programming/README.md"
      },
      {
        text: "付费课程",
        children: [
          {
            text: "编程私教",
            link: "/zh/Programming_teaching/README.md",
          },
          {
            text: "Python 入门课程",
            link: "/zh/Pay_for_courses/pythonbase/README.md",
          }
        ]
      },
      {
        text: '在线编程',
        children: [
          {
            text: 'Python 在线编程',
            link: "https://www.aiycoj.cn/",
          },
          {
            text: '数据结构与算法可视化',
            link: 'https://huangjiabaoaiyc.gitee.io/visualgo/',
          },
        ],
      },
      
      // 字符串 - 页面文件路径
      '/zh/abouteam/about.md',
    ],
    },
    '/en/': {
      selectLanguageText: "Languages",
      selectLanguageName: 'English',
    }
  },
  },

  // site-level locales config
  locales: {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    lang: 'zh-CN',
    title: '流沙团队',
    description: '一股无形的力量——流沙',
  },
  '/en/': {
    lang: 'en-US',
    title: 'QuickSandTeam',
    description: 'An invisible force -- quicksand',
  },
  },
}