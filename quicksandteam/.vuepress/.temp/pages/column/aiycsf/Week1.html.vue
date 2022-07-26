<template><div><p>你好，我是悦创。</p>
<p>我们先来看看今天要学习的内容：</p>
<ul>
<li>列表、集合、元组、字典</li>
<li>链表</li>
</ul>
<h2 id="_1-你真的了解这四个数据类型吗" tabindex="-1"><a class="header-anchor" href="#_1-你真的了解这四个数据类型吗" aria-hidden="true">#</a> 1. 你真的了解这四个数据类型吗？</h2>
<ul>
<li>列表/list</li>
<li>元组/tuple</li>
<li>字典/dict</li>
<li>集合/set</li>
</ul>
<h3 id="_1-1-列表-vs-元组" tabindex="-1"><a class="header-anchor" href="#_1-1-列表-vs-元组" aria-hidden="true">#</a> 1.1 列表 VS. 元组</h3>
<ol>
<li>可变与不可变</li>
<li>选择存储策略
<ol>
<li>存储经纬度用：元组</li>
<li>存储用户访问：列表</li>
</ol>
</li>
</ol>
<h3 id="_1-2-字典-vs-集合" tabindex="-1"><a class="header-anchor" href="#_1-2-字典-vs-集合" aria-hidden="true">#</a> 1.2 字典 VS. 集合</h3>
<ul>
<li>字典：键对值</li>
<li>集合：值</li>
</ul>
<h2 id="_2-任务「统计一片文章词频」" tabindex="-1"><a class="header-anchor" href="#_2-任务「统计一片文章词频」" aria-hidden="true">#</a> 2. 任务「统计一片文章词频」</h2>
<p>目标文本：<a href="https://www.yuque.com/attachments/yuque/0/2021/txt/1359959/1620740300099-66131a04-22db-4d7a-b5c5-94e8de6544df.txt?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Ftxt%2F1359959%2F1620740300099-66131a04-22db-4d7a-b5c5-94e8de6544df.txt%22%2C%22name%22%3A%22I_Have_a_Dream.txt%22%2C%22size%22%3A9186%2C%22type%22%3A%22%22%2C%22ext%22%3A%22txt%22%2C%22status%22%3A%22done%22%2C%22source%22%3A%22transfer%22%2C%22id%22%3A%22jSRfM%22%2C%22card%22%3A%22file%22%7D" target="_blank" rel="noopener noreferrer">I_Have_a_Dream.txt<ExternalLinkIcon/></a>/<a href="https://www.aiyc.top/1774.html" target="_blank" rel="noopener noreferrer">https://www.aiyc.top/1774.html<ExternalLinkIcon/></a></p>
<p>解决代码如下，不过代码主要为了解决问题，优化后的代码，也会提供。<strong>本任务主要是为了让你熟悉各个数据类型的用法。</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2021/5/11 9:42 下午</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: words_count_main.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：http://www.aiyc.top</span>
<span class="token comment"># @公众号   ：AI悦创</span>
words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">find_word_count</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
	word_count <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment"># 1.0</span>
	<span class="token comment"># for word in set(words):</span>
	<span class="token comment"># 	word_count[word] =  0</span>
	<span class="token comment"># for word in  words:</span>
	<span class="token comment"># 	word_count[word] += 1</span>
	<span class="token keyword">for</span> word <span class="token keyword">in</span> words<span class="token punctuation">:</span>
		<span class="token keyword">if</span> word <span class="token keyword">in</span> word_count<span class="token punctuation">:</span>
			word_count<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			word_count<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">return</span> word_count


<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'I_Have_a_Dream.txt'</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">'r'</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	<span class="token triple-quoted-string string">"""
	f.read() -> type: &lt;class 'str'>
	f.readline() -> type: &lt;class 'str'> -> Read a line
	f.readlines() -> type: &lt;class 'list'> -> Read all
	"""</span>
	lines <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">':'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'!'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'"'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'”'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'“'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> word <span class="token keyword">in</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token keyword">if</span> word<span class="token punctuation">:</span> words<span class="token punctuation">.</span>append<span class="token punctuation">(</span>word<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	r <span class="token operator">=</span> find_word_count<span class="token punctuation">(</span>words<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**补充：**不推荐使用如下方式访问文件：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"text.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-链表" tabindex="-1"><a class="header-anchor" href="#_3-链表" aria-hidden="true">#</a> 3. 链表</h2>
<p>在我们接触的 Python 中的列表，其实就是可以做成链表的形式使用的。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
L<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何自己实现一个类似的结构呢？<strong>可以</strong>查询元素、添加元素、插入元素、删除元素</strong></p>
<p>那我们先来简单的、系统的了解一下链表的定义。与数组相似，<strong>链表</strong>也是一种线性数据结构。这里有一个例子：</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655350.png" alt="image.png"></p>
<p>正如你所看到的，<strong>链表中的每个元素实际上是一个单独的对象，而所有对象都通过每个元素中的引用字段链接在一起。</strong></p>
<p>链表有两种类型：<strong>单链表</strong>和<strong>双链表</strong>。上面给出的例子是一个单链表，这里有一个双链表的例子：</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655147.png" alt="image.png"></p>
<p>不过，我这里主要讲解当链表结构。链表是一种线性数据结构，它通过引用字段将所有分离的元素链接在一起。</p>
<p><strong>其实，不就类似我们的铁链。</strong></p>
<h3 id="_3-1-定义一个最简单的链表" tabindex="-1"><a class="header-anchor" href="#_3-1-定义一个最简单的链表" aria-hidden="true">#</a> 3.1 定义一个最简单的链表</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token triple-quoted-string string">"""
		first:存自己本身的数据
		rest:存下一个节点，也就下一个节点是谁
		"""</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token boolean">None</span>
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655932.png" alt="image.png">
<img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655607.png" alt="image.png"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l1 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l1<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">5</span>

l2 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l2<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">10</span>

l3 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l3<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291657818.png" alt="image.png"></p>
<p><strong>上面代码其实就可以理解为，创建了每一节车厢，那我们该如何吧车厢链接起来呢？</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l1<span class="token punctuation">.</span>rest <span class="token operator">=</span> l2
l2<span class="token punctuation">.</span>rest <span class="token operator">=</span> l3
<span class="token comment"># 正好使用两行代码连在一起了，也就是火车的两个铁链</span>
<span class="token comment"># PS: 如果你这么写的话：l1.rest = l2.first > 注意：这将不是链接一个车厢，而是连接一个 Value。</span>
<span class="token comment"># 所以：l1.rest = l2 才是连接车厢</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291657853.png" alt="image.png"></p>
<p>但是，要是像下面代码这样写是不行的。<strong>这就好像，我们的火车一节连着一节，连的是一整个车厢不是就一部分。其中，lx.first 是一个值。</strong></p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291658571.png" alt="image.png"></p>
<blockquote>
<p>可以使用：<a href="http://pythontutor.com/" target="_blank" rel="noopener noreferrer">http://pythontutor.com/<ExternalLinkIcon/></a> 来讲解</p>
</blockquote>
<p><strong>那我们如何输出数据呢？</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"第一节车厢：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>first<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"第二节车厢：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"第三节车厢：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-「改进」如何只用一个-l-来操作呢" tabindex="-1"><a class="header-anchor" href="#_3-2-「改进」如何只用一个-l-来操作呢" aria-hidden="true">#</a> 3.2 「改进」如何只用一个 l 来操作呢？</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token boolean">None</span>
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">5</span>
l<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">10</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token boolean">None</span>
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">5</span>
l<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">10</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291658575.png" alt="image.png"></p>
<h3 id="_3-3-问题" tabindex="-1"><a class="header-anchor" href="#_3-3-问题" aria-hidden="true">#</a> 3.3 问题</h3>
<p>不知道，大家有没有发现，如果这么写的话。我们要写10节车厢或者以上的话不得写死了。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token boolean">None</span>
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">5</span>
l<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">10</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>

l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">15</span>

l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">20</span>

l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659246.png" alt="image.png"></p>
<p>所以，我们虽然实现了链表的结构，但是不完美。我们可以再进一步的去改进一下。</p>
<p><strong>首先，我们肯定不希望之后还是要写一堆 rest 这样肯定是超级麻烦的。</strong></p>
<h3 id="_3-4-改进代码" tabindex="-1"><a class="header-anchor" href="#_3-4-改进代码" aria-hidden="true">#</a> 3.4 改进代码</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> first<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> first
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> rest

l1 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
l2 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> l1<span class="token punctuation">)</span>
l3 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659707.png" alt="image.png"></p>
<p>当然，我们也可以就用一个 l：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> first<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> first
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> rest

l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span>
l <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659920.png" alt="image.png"></p>
<p>这样写，肯定比之前的书写要简洁。但是又出现问题了，就是我们每一个衔接的数据是显示出来了，但这个问题我们后面解决。接下来，我们先来添加个 size 函数。</p>
<h3 id="_3-5-添加一个-size-方法-方便用户查询链表的大小" tabindex="-1"><a class="header-anchor" href="#_3-5-添加一个-size-方法-方便用户查询链表的大小" aria-hidden="true">#</a> 3.5 添加一个 size() 方法，方便用户查询链表的大小</h3>
<p>这个地方，需要递归作为前置知识：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>rest <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token number">1</span>
	<span class="token keyword">else</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-第一次-self-rest" tabindex="-1"><a class="header-anchor" href="#_1-第一次-self-rest" aria-hidden="true">#</a> 1. 第一次： self.rest()</h4>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659448.png" alt="image.png"></p>
<h4 id="_2-第二次-self-rest-size-—-self-rest-rest-is-none" tabindex="-1"><a class="header-anchor" href="#_2-第二次-self-rest-size-—-self-rest-rest-is-none" aria-hidden="true">#</a> 2. 第二次：self.rest.size() —&gt; self.rest.rest is None</h4>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708020.png" alt="image.png"></p>
<h4 id="_3-self-rest-rest-size-—-self-rest-rest-rest-is-none" tabindex="-1"><a class="header-anchor" href="#_3-self-rest-rest-size-—-self-rest-rest-rest-is-none" aria-hidden="true">#</a> 3. self.rest.rest.size() —&gt; self.rest.rest.rest is None</h4>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708521.png" alt="image.png"></p>
<p>接下来，上 GIF：</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708202.gif" alt="动画.gif"></p>
<h3 id="_3-6-不使用递归如何实现" tabindex="-1"><a class="header-anchor" href="#_3-6-不使用递归如何实现" aria-hidden="true">#</a> 3.6 不使用递归如何实现？</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_length</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> linked<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token triple-quoted-string string">"""方法二"""</span>
	length <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">while</span> linked<span class="token punctuation">:</span>
		length <span class="token operator">+=</span> <span class="token number">1</span>
		linked <span class="token operator">=</span> linked<span class="token punctuation">.</span>rest
	<span class="token keyword">return</span> length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过上面写的虽然实现了，但是总体来说有点奇怪，在调用的时候：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>get_length<span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 这样调用有点奇怪</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，进行改进：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">iterative_size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># l == self 抽象理解</span>
		p <span class="token operator">=</span> self
		total_size <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			total_size <span class="token operator">+=</span> <span class="token number">1</span>
			p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
		<span class="token keyword">return</span> total_size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样调用就很自然了：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>iterative_size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-改进" tabindex="-1"><a class="header-anchor" href="#_3-7-改进" aria-hidden="true">#</a> 3.7 改进</h3>
<p>添加一个 **get() **方法，方便用户查询某个元素：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>first
	<span class="token keyword">else</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>get<span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_index</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
	    <span class="token triple-quoted-string string">'''第二种查询方法'''</span>
	    <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span>：
	        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	    node <span class="token operator">=</span> self<span class="token punctuation">.</span>first
	    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	        node <span class="token operator">=</span> node<span class="token punctuation">.</span>rest
	   <span class="token keyword">return</span> node<span class="token punctuation">.</span>first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-question" tabindex="-1"><a class="header-anchor" href="#_3-8-question" aria-hidden="true">#</a> 3.8 Question</h3>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708792.jpeg" alt=""></p>
<p><strong>现在的链表更像是一个“没穿衣服的”数据结构。</strong></p>
<p>内部数据也是直接爆露出来的，有些地方也是看起来很奇怪。</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709206.png" alt="image.png"></p>
<p>None 和 l 应该是内部的数据，不应该让外部的人看见的。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntNode</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>item <span class="token operator">=</span> item
		self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>

<span class="token keyword">class</span> <span class="token class-name">SLList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以对比一下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># l = IntList(5, None) 比之前的好</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是目前不能添加多个车厢（链表），添加多个链表的数据都会被覆盖：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709795.gif" alt="动画.gif"></p>
<p>所以，我们需要添加一个函数来添加数据。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add_first</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
	self<span class="token punctuation">.</span>first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>first<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们添加数据就是：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709860.png" alt="image.png"></p>
<p>SLList 新增加一个方法叫 <code v-pre>get_first()</code> ，用来让用户获取当前链表第一个元素：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_first</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> self<span class="token punctuation">.</span>first<span class="token punctuation">.</span>item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-比较一下" tabindex="-1"><a class="header-anchor" href="#_3-9-比较一下" aria-hidden="true">#</a> 3.9 比较一下</h3>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709717.png" alt="image.png"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># filename: compare.py</span>
<span class="token keyword">class</span> <span class="token class-name">IntList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> f<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token triple-quoted-string string">"""
		first:存自己本身的数据
		rest:存下一个节点，也就下一个节点是谁
		"""</span>
		self<span class="token punctuation">.</span>first <span class="token operator">=</span> f
		self<span class="token punctuation">.</span>rest <span class="token operator">=</span> r

	<span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token triple-quoted-string string">"""方法一"""</span>
		<span class="token comment"># l == self 抽象理解</span>
		<span class="token keyword">if</span> self<span class="token punctuation">.</span>rest <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span>
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">get_length</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> linked<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token triple-quoted-string string">"""方法二"""</span>
		length <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">while</span> linked<span class="token punctuation">:</span>
			length <span class="token operator">+=</span> <span class="token number">1</span>
			linked <span class="token operator">=</span> linked<span class="token punctuation">.</span>rest
		<span class="token keyword">return</span> length

	<span class="token keyword">def</span> <span class="token function">iterative_size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># l == self 抽象理解</span>
		p <span class="token operator">=</span> self
		total_size <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			total_size <span class="token operator">+=</span> <span class="token number">1</span>
			p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
		<span class="token keyword">return</span> total_size

	<span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> self<span class="token punctuation">.</span>first
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>get<span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>


l1 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
l2 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> l1<span class="token punctuation">)</span>
l3 <span class="token operator">=</span> IntList<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> l2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>first<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l2<span class="token punctuation">.</span>first<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l3<span class="token punctuation">.</span>first<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709200.png" alt="image.png">
<img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710484.png" alt="image.png"></p>
<h3 id="_4-0-然而还是有点问题" tabindex="-1"><a class="header-anchor" href="#_4-0-然而还是有点问题" aria-hidden="true">#</a> 4.0 然而还是有点问题</h3>
<p>如果，我破解出了 SLList 里面的变量的名称，一样可以修改，比如：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l<span class="token punctuation">.</span>first<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-1-改进" tabindex="-1"><a class="header-anchor" href="#_4-1-改进" aria-hidden="true">#</a> 4.1 改进</h3>
<p>将 first 变量改为私有变量。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">IntNode</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>item <span class="token operator">=</span> item
		self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>

<span class="token keyword">class</span> <span class="token class-name">SLList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>

	<span class="token keyword">def</span> <span class="token function">add_first</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__first<span class="token punctuation">)</span>
        
l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
<span class="token comment"># print(l.get_first())</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class 里的私有变量只能再 class 的内部访问：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>__first<span class="token punctuation">)</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">'SLList'</span> <span class="token builtin">object</span> has no attribute <span class="token string">'__first'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-为什么要设计私有变量" tabindex="-1"><a class="header-anchor" href="#_4-2-为什么要设计私有变量" aria-hidden="true">#</a> 4.2 为什么要设计私有变量？</h3>
<p><strong>将类的内部细节隐藏起来</strong></p>
<ul>
<li>用户不需要了解太多类的细节</li>
<li>设计者可以拥有更为安全的对于程序的控制全</li>
</ul>
<p><strong>以汽车来类比</strong></p>
<ul>
<li>公共的方法或变量：油门、方向盘</li>
<li>私有的方法或变量：燃油管道、旋转阀</li>
</ul>
<h3 id="_4-3-改进" tabindex="-1"><a class="header-anchor" href="#_4-3-改进" aria-hidden="true">#</a> 4.3 改进</h3>
<p>SLList 新增加一个方法叫 <code v-pre>add_last()</code> ，用来让用户向链表末尾添加一个元素。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add_last</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
	p <span class="token operator">=</span> self<span class="token punctuation">.</span>__first
	<span class="token keyword">while</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
		p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token builtin">next</span>
	p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>l<span class="token punctuation">.</span>add_last<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710279.png" alt="image.png"></p>
<h3 id="_4-4-改进" tabindex="-1"><a class="header-anchor" href="#_4-4-改进" aria-hidden="true">#</a> 4.4 改进</h3>
<p>SLList 新增加一个方法叫 <code v-pre>size()</code> ：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__size</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token number">1</span>
	<span class="token keyword">else</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>__size<span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
    
<span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> self<span class="token punctuation">.</span>__size<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__first<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次查询 <code v-pre>size()</code> 都要把整个链表遍历一遍，是不是低效了？</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710626.png" alt="image.png"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: AI悦创</span>
<span class="token comment"># @Date:   2021-10-15 14:50:07</span>
<span class="token comment"># @Last Modified by:   aiyc</span>
<span class="token comment"># @Last Modified time: 2021-10-18 15:49:59</span>
<span class="token keyword">class</span> <span class="token class-name">IntNode</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>item <span class="token operator">=</span> item
		self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>

<span class="token keyword">class</span> <span class="token class-name">SLList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>__size <span class="token operator">=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">add_first</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__first<span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>__size <span class="token operator">+=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">get_first</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>first<span class="token punctuation">.</span>item

	<span class="token keyword">def</span> <span class="token function">add_last</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		p <span class="token operator">=</span> self<span class="token punctuation">.</span>__first
		<span class="token keyword">while</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token builtin">next</span>
		p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>__size <span class="token operator">+=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">__size</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span>
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>__size<span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>

	<span class="token comment"># def size(self):</span>
	<span class="token comment"># 	return self.__size(self.__first)</span>

	<span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>__size

l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_last<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># print(l.__first)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-改进" tabindex="-1"><a class="header-anchor" href="#_4-5-改进" aria-hidden="true">#</a> 4.5 改进</h3>
<p>如果，我希望创建一个空链表呢？</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: AI悦创</span>
<span class="token comment"># @Date:   2021-10-18 15:53:48</span>
<span class="token comment"># @Last Modified by:   aiyc</span>
<span class="token comment"># @Last Modified time: 2021-10-18 15:58:12</span>
<span class="token keyword">class</span> <span class="token class-name">IntNode</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>item <span class="token operator">=</span> item
		self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>

<span class="token keyword">class</span> <span class="token class-name">SLList</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>__size <span class="token operator">=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">add_first</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> self<span class="token punctuation">.</span>__first<span class="token punctuation">.</span>item <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			self<span class="token punctuation">.</span>__first<span class="token punctuation">.</span>item <span class="token operator">=</span> x
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			self<span class="token punctuation">.</span>__first <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__first<span class="token punctuation">)</span>
			self<span class="token punctuation">.</span>__size <span class="token operator">+=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">get_first</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>first<span class="token punctuation">.</span>item

	<span class="token keyword">def</span> <span class="token function">add_last</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
		p <span class="token operator">=</span> self<span class="token punctuation">.</span>__first
		<span class="token keyword">while</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			p <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token builtin">next</span>
		p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> IntNode<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
		self<span class="token punctuation">.</span>__size <span class="token operator">+=</span> <span class="token number">1</span>

	<span class="token keyword">def</span> <span class="token function">__size</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> p<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span>
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>__size<span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>

	<span class="token comment"># def size(self):</span>
	<span class="token comment"># 	return self.__size(self.__first)</span>

	<span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> self<span class="token punctuation">.</span>__size

l <span class="token operator">=</span> SLList<span class="token punctuation">(</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_first<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span>add_last<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># print(l.__first)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
