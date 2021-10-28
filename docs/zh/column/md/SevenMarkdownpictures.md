---
title: 07-Markdown 图片
time: 2021-10-24 17:10:52
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

Markdown 图片语法格式如下：

```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

- 开头一个感叹号 !
- 接着一个方括号，里面放上图片的替代文字
- 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。

使用实例：

```markdown
![bornforthi 图标](https://book.bornforthi.com/favicon.ico)

![bornforthi 图标](https://book.bornforthi.com/images/logo.png)
```

![bornforthi 图标](https://book.bornforthi.com/favicon.ico)

![bornforthi 图标](https://book.bornforthi.com/images/logo.png)

当然，你也可以像网址那样对图片网址使用变量:

```
这个链接用 1 作为网址变量 [bornforthi][1].
然后在文档的结尾为变量赋值（网址）

[1]: https://book.bornforthi.com/images/logo.png
```

显示结果如下：

这个链接用 1 作为网址变量 [bornforthi][1].
然后在文档的结尾为变量赋值（网址）

[1]: https://book.bornforthi.com/images/logo.png

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。

```
<img src="https://book.bornforthi.com/images/logo.png" width="20%">
```

显示结果如下：

<img src="https://book.bornforthi.com/images/logo.png" width="20%">

> 流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh