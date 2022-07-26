<template><div><p>你好，我是悦创。</p>
<p>链接使用方法如下：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">链接名称</span>](<span class="token url">链接地址</span>)</span>

或者

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>链接地址</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>这是一个链接 <span class="token url">[<span class="token content">流沙团队</span>](<span class="token url">https://book.bornforthi.com/</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果如下：</p>
<p>这是一个链接 <a href="https://book.bornforthi.com/" target="_blank" rel="noopener noreferrer">流沙团队<ExternalLinkIcon/></a></p>
<p>直接使用链接地址：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>&lt;https://book.bornforthi.com/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果如下：</p>
<p><a href="https://book.bornforthi.com/" target="_blank" rel="noopener noreferrer">https://book.bornforthi.com/<ExternalLinkIcon/></a></p>
<h3 id="高级链接" tabindex="-1"><a class="header-anchor" href="#高级链接" aria-hidden="true">#</a> 高级链接</h3>
<p>我们可以通过变量来设置一个链接，变量赋值在文档末尾进行：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>这个链接用 1 作为网址变量 <span class="token url">[<span class="token content">Google</span>][<span class="token variable">1</span>]</span>
这个链接用 bornforthi 作为网址变量 <span class="token url">[<span class="token content">bornforthi</span>][<span class="token variable">bornforthi</span>]</span>
然后在文档的结尾为变量赋值（网址）

  <span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://www.google.com/</span>
  <span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">bornforthi</span><span class="token punctuation">]</span><span class="token punctuation">:</span> https://book.bornforthi.com/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示结果如下：</p>
<p>这个链接用 1 作为网址变量 <a href="http://www.google.com/" target="_blank" rel="noopener noreferrer">Google<ExternalLinkIcon/></a>
这个链接用 bornforthi 作为网址变量 <a href="https://book.bornforthi.com/" target="_blank" rel="noopener noreferrer">bornforthi<ExternalLinkIcon/></a>
然后在文档的结尾为变量赋值（网址）</p>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
