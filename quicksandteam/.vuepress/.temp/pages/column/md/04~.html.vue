<template><div><p>你好，我是悦创。</p>
<p>Markdown 区块引用是在段落开头使用 <strong>&gt;</strong> 符号 ，然后后面紧跟一个<strong>空格</strong>符号：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> 区块引用
<span class="token blockquote punctuation">></span> 流沙教程
<span class="token blockquote punctuation">></span> 学的不仅是技术更是梦想
<span class="token blockquote punctuation">></span> 一股无形的力量！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<blockquote>
<p>区块引用
流沙教程
学的不仅是技术更是梦想
一股无形的力量！</p>
</blockquote>
<p>另外区块是可以嵌套的，一个 <strong>&gt;</strong> 符号是最外层，两个 <strong>&gt;</strong> 符号是第一层嵌套，以此类推：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> 最外层
<span class="token blockquote punctuation">> ></span> 第一层嵌套
<span class="token blockquote punctuation">> > ></span> 第二层嵌套
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<blockquote>
<p>最外层</p>
<blockquote>
<p>第一层嵌套</p>
<blockquote>
<p>第二层嵌套</p>
</blockquote>
</blockquote>
</blockquote>
<h2 id="区块中使用列表" tabindex="-1"><a class="header-anchor" href="#区块中使用列表" aria-hidden="true">#</a> 区块中使用列表</h2>
<p>区块中使用列表实例如下：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> 区块中使用列表
<span class="token blockquote punctuation">></span> <span class="token list punctuation">1.</span> 第一项
<span class="token blockquote punctuation">></span> <span class="token list punctuation">2.</span> 第二项
<span class="token blockquote punctuation">></span> <span class="token list punctuation">+</span> 第一项
<span class="token blockquote punctuation">></span> <span class="token list punctuation">+</span> 第二项
<span class="token blockquote punctuation">></span> <span class="token list punctuation">+</span> 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<blockquote>
<p>区块中使用列表</p>
<ol>
<li>第一项</li>
<li>第二项</li>
</ol>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
</blockquote>
<h2 id="列表中使用区块" tabindex="-1"><a class="header-anchor" href="#列表中使用区块" aria-hidden="true">#</a> 列表中使用区块</h2>
<p>如果要在列表项目内放进区块，那么就需要在 <strong>&gt;</strong> 前添加四个空格的缩进。</p>
<p>列表中使用区块实例如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>* 第一项
    > 流沙教程
    > 学的不仅是技术更是梦想
    > 一股无形的力量！
* 第二项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<ul>
<li>
<p>第一项</p>
<blockquote>
<p>流沙教程
学的不仅是技术更是梦想
一股无形的力量！</p>
</blockquote>
</li>
<li>
<p>第二项</p>
</li>
</ul>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
