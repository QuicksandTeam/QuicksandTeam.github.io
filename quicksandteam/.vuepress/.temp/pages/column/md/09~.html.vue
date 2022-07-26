<template><div><p>你好，我是悦创。</p>
<h3 id="支持的-html-元素" tabindex="-1"><a class="header-anchor" href="#支持的-html-元素" aria-hidden="true">#</a> 支持的 HTML 元素</h3>
<p>不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。</p>
<p>目前支持的 HTML 元素有：<code v-pre>&lt;kbd&gt; &lt;b&gt; &lt;i&gt; &lt;em&gt; &lt;sup&gt; &lt;sub&gt; &lt;br&gt;</code>等 ，如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>使用 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kbd</span><span class="token punctuation">></span></span>Ctrl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kbd</span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kbd</span><span class="token punctuation">></span></span>Alt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kbd</span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kbd</span><span class="token punctuation">></span></span>Del<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kbd</span><span class="token punctuation">></span></span> 重启电脑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果为：</p>
<p>使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑</p>
<h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h3>
<p>Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">文本加粗</span><span class="token punctuation">**</span></span> 
\*\* 正常显示星号 \*\*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p>
<p><strong>文本加粗</strong></p>
<p>** 正常显示星号 **</p>
<p>Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>\   反斜线
`   反引号
<span class="token list punctuation">*</span>   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
<span class="token title important"><span class="token punctuation">#</span>   井字号</span>
<span class="token list punctuation">+</span>   加号
<span class="token list punctuation">-</span>   减号
.   英文句点
!   感叹号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公式" tabindex="-1"><a class="header-anchor" href="#公式" aria-hidden="true">#</a> 公式</h3>
<p>当你需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。提交后，问答和文章页会根据需要加载 Mathjax 对数学公式进行渲染。如：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
\frac{\partial X}{\partial u} &amp;  \frac{\partial Y}{\partial u} &amp; 0 \\
\frac{\partial X}{\partial v} &amp;  \frac{\partial Y}{\partial v} &amp; 0 \\
\end{vmatrix}
${$tep1}{\style{visibility:hidden}{(x+1)(x+1)}}
$$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p class='katex-block katex-error' title='ParseError: KaTeX parse error: Can&#039;t use function &#039;$&#039; in math mode at position 248: …
\end{vmatrix}
$̲{$tep1}{\style{…'>\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
\frac{\partial X}{\partial u} &amp;  \frac{\partial Y}{\partial u} &amp; 0 \\
\frac{\partial X}{\partial v} &amp;  \frac{\partial Y}{\partial v} &amp; 0 \\
\end{vmatrix}
${$tep1}{\style{visibility:hidden}{(x+1)(x+1)}}
</p>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
