<template><div><p>你好，我是悦创。</p>
<p>Markdown 制作表格使用 <strong>|</strong> 来分隔不同的单元格，使用 <strong>-</strong> 来分隔表头和其他行。</p>
<p>语法格式如下：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">  表头   </span><span class="token punctuation">|</span><span class="token table-header important"> 表头  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span>  <span class="token punctuation">----</span>  <span class="token punctuation">|</span> <span class="token punctuation">----</span>  <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 单元格  </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 单元格  </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码显示结果如下：</p>
<table>
<thead>
<tr>
<th>表头</th>
<th>表头</th>
</tr>
</thead>
<tbody>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
</tbody>
</table>
<p>对齐方式</p>
<p><strong>我们可以设置表格的对齐方式：</strong></p>
<ul>
<li><strong>-:</strong> 设置内容和标题栏居右对齐。</li>
<li><strong>:-</strong> 设置内容和标题栏居左对齐。</li>
<li><strong>:-:</strong> 设置内容和标题栏居中对齐。</li>
</ul>
<p>实例如下：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> 左对齐 </span><span class="token punctuation">|</span><span class="token table-header important"> 右对齐 </span><span class="token punctuation">|</span><span class="token table-header important"> 居中对齐 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:-----</span><span class="token punctuation">|</span> <span class="token punctuation">----:</span> <span class="token punctuation">|</span> <span class="token punctuation">:----:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码显示结果如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">左对齐</th>
<th style="text-align:right">右对齐</th>
<th style="text-align:center">居中对齐</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
</tbody>
</table>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
