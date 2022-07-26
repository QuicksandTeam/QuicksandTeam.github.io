<template><div><p>Markdown 图片语法格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>开头一个感叹号 !</li>
<li>接着一个方括号，里面放上图片的替代文字</li>
<li>接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。</li>
</ul>
<p>使用实例：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">bornforthi 图标</span>](<span class="token url">https://book.bornforthi.com/favicon.ico</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">bornforthi 图标</span>](<span class="token url">https://book.bornforthi.com/images/logo.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://book.bornforthi.com/favicon.ico" alt="bornforthi 图标"></p>
<p><img src="https://book.bornforthi.com/images/logo.png" alt="bornforthi 图标"></p>
<p>当然，你也可以像网址那样对图片网址使用变量:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这个链接用 1 作为网址变量 [bornforthi][1].
然后在文档的结尾为变量赋值（网址）

[1]: https://book.bornforthi.com/images/logo.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<p>这个链接用 1 作为网址变量 <a href="https://book.bornforthi.com/images/logo.png" target="_blank" rel="noopener noreferrer">bornforthi<ExternalLinkIcon/></a>.
然后在文档的结尾为变量赋值（网址）</p>
<p>Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;img src="https://book.bornforthi.com/images/logo.png" width="20%">
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果如下：</p>
<img src="https://book.bornforthi.com/images/logo.png" width="20%">
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
