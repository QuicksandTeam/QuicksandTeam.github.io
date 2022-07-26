<template><div><p>你好，我是悦创。</p>
<p>Markdown 支持有序列表和无序列表。</p>
<p>无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">*</span> 第一项
<span class="token list punctuation">*</span> 第二项
<span class="token list punctuation">*</span> 第三项

<span class="token list punctuation">+</span> 第一项
<span class="token list punctuation">+</span> 第二项
<span class="token list punctuation">+</span> 第三项


<span class="token list punctuation">-</span> 第一项
<span class="token list punctuation">-</span> 第二项
<span class="token list punctuation">-</span> 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
<p>有序列表使用数字并加上 <strong>.</strong> 号来表示，如：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">1.</span> 第一项
<span class="token list punctuation">2.</span> 第二项
<span class="token list punctuation">3.</span> 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<ol>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ol>
<h2 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套" aria-hidden="true">#</a> 列表嵌套</h2>
<p>列表嵌套只需在子列表中的选项前面添加四个空格即可：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<ol>
<li>第一项：
<ul>
<li>第一项嵌套的第一个元素</li>
<li>第一项嵌套的第二个元素</li>
</ul>
</li>
<li>第二项：
<ul>
<li>第二项嵌套的第一个元素</li>
<li>第二项嵌套的第二个元素</li>
</ul>
</li>
</ol>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
