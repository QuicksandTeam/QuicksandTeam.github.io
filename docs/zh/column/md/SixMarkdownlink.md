---
title: 06-Markdown 链接
time: 2021-10-24 16:10:52
author: AI悦创
original: true
category: Markdown 基础
tags:
    - Markdown
sticky: false
password: false
article: true
timeline: true
navbar: true
sidebar: true
comment: true
---

你好，我是悦创。

链接使用方法如下：

```markdown
[链接名称](链接地址)

或者

<链接地址>
```

例如：

```markdown
这是一个链接 [流沙团队](https://book.bornforthi.com/)
```

显示结果如下：

这是一个链接 [流沙团队](https://book.bornforthi.com/)

直接使用链接地址：

```markdown
<https://book.bornforthi.com/>
```

显示结果如下：

<https://book.bornforthi.com/>

### 高级链接

我们可以通过变量来设置一个链接，变量赋值在文档末尾进行：

```markdown
这个链接用 1 作为网址变量 [Google][1]
这个链接用 bornforthi 作为网址变量 [bornforthi][bornforthi]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [bornforthi]: https://book.bornforthi.com/
```

显示结果如下：

这个链接用 1 作为网址变量 [Google][1]
这个链接用 bornforthi 作为网址变量 [bornforthi][bornforthi]
然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[bornforthi]: https://book.bornforthi.com/

> 流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh