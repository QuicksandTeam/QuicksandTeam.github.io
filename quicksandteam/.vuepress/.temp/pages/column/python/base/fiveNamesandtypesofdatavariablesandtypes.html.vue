<template><div><p>你好，我是悦创。</p>
<h2 id="_1-初探数据种类" tabindex="-1"><a class="header-anchor" href="#_1-初探数据种类" aria-hidden="true">#</a> 1. 初探数据种类</h2>
<p>在正式开始学习这个小节之前你要明白，现在我们是在学习写程序。那么在写程序之前你要知道程序的作用是什么？</p>
<p>程序的主要作用是处理数据。</p>
<p>数据的种类有很多，我们在手机和电脑上看到的那些文字、数字、图片、视频、页面样式等等都是数据。这些数据都是由程序来处理并显示到屏幕上的。</p>
<p>虽然数据的种类形形色色，并且有些看起来比较复杂，但是在编程时它们实际上都是由一些非常基本的数据形式（或经过组合）来表示。</p>
<p>这些基本数据形式有哪些呢？比如有常用到的数字和字符，以及其它的诸如数组、字节序列等形式。</p>
<p>以数字和字符为例，为大家介绍下在代码中它们是怎么表示的。</p>
<p>对于数字，数字在代码中的表示形式和平时的电脑输入一样，直接书写即可：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">3.14159</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于字符，和平时的书写稍有不同，Python 代码中表示字符时一定要给字符括上单引号或双引号亦或者是三引号：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">'How are you?'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">'嗨！'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">"""换衣来到流沙团队学习 Python，学习系统持续开发中"""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这些不同的数据表示（书写）形式，对应着不同的数据种类，而不同的数据种类又具有不同的功能或者作用。</p>
<p>我们将代码中的数据种类称为：<strong>数据类型</strong>，也就是数据的类型。</p>
<h2 id="_2-数据类型" tabindex="-1"><a class="header-anchor" href="#_2-数据类型" aria-hidden="true">#</a> 2. 数据类型</h2>
<p><strong>代码中的所有数据都是有类型的。</strong></p>
<p>数字所对应的数据类型有整数型以及浮点型。整数型表示整数数字，比如：0，-59，100。浮点型表示小数数字，如 -3.5，0.25，0.0。</p>
<p>字符所对应的数据类型叫字符串，所谓字符串就是一串字符。它里面可以是任意语言的字符，比如 <code v-pre>'哼哼哈嘿'</code>，<code v-pre>'Good Good Study'</code>。当然字符串里也可以只有一个字符，比如 <code v-pre>'a'</code>。</p>
<p>有一种表示「是」或「否」的类型，叫做布尔型。它的值叫布尔值，只有 True 和 False 两种取值。这就好比考试时的判断题，结果只能二选一，要么「是」要么「否」。</p>
<p>另外还有一种很特别的类型：None 型，表示什么都没有，它就一个取值 None。</p>
<blockquote>
<p>说明：为了不增加大家的记忆负担，这里只介绍这五种基本数据类型，后续的我们慢慢掌握。</p>
</blockquote>
<p>考大家一个问题，在代码中 1000 和 <code v-pre>'1000'</code> 是相同的东西吗？答案是不同，一个是数字，一个是字符串，数据类型不同。</p>
<h2 id="_3-数值运算" tabindex="-1"><a class="header-anchor" href="#_3-数值运算" aria-hidden="true">#</a> 3. 数值运算</h2>
<p>对于整数型和浮点型，因为它们都被用来表示数值，理所应当这二者可以做数值运算，也就是加减乘除等操作。</p>
<p>我们进入 Python 解释器交互模式中，输入代码试验一下这些数值运算：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># 加法</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token number">33</span> <span class="token operator">+</span> <span class="token number">725</span>
<span class="token number">758</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># 减法</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token number">12</span> <span class="token operator">-</span> <span class="token number">24</span>
<span class="token operator">-</span><span class="token number">12</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># 乘法</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">12.5</span>
<span class="token number">100.0</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># 除法</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span>
<span class="token number">0.3333333333333333</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># 除余</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span>
<span class="token number">1</span>
<span class="token operator">>></span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>写到这里，我是真写不下去了，我接下来不使用 Python 解释器的交互模式，我直接用 IPython，IPython 安装方便，CMD：pip install ipython</p>
</blockquote>
<p>可以看到，数值的加（+）、减（-）、乘（<code v-pre>*</code>）、除（/）、除余（%）都可以被计算。这些操作也是多种程序语言所通用的，除此之外 Python 还内置了次方运算（<code v-pre>**</code>）和整除（//）：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token comment"># 次方</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">8</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">9</span> <span class="token operator">//</span> <span class="token number">2</span> <span class="token comment"># 整除</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这恐怕是 Python 的最简单的用法了——当作计算器！</p>
<blockquote>
<p>说明：通常我们为了美观，会在上面的运算符号的左右各加上一个空格，如 12 - 24，2 ** 3。
之后的代码示例中我们会添加空格。</p>
</blockquote>
<h2 id="_4-比较运算" tabindex="-1"><a class="header-anchor" href="#_4-比较运算" aria-hidden="true">#</a> 4. 比较运算</h2>
<p>整数型和浮点型除了数值运算外，还可以做比较运算，也就是比较两个数值的大小。比较的结果是布尔值。如：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">></span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span>

In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较运算的运算符可以是大于（<code v-pre>&gt;</code>），小于（<code v-pre>&lt;</code>），大于等于（<code v-pre>&gt;=</code>），小于等于（<code v-pre>&lt;=</code>），等于（<code v-pre>==</code>），不等于（<code v-pre>!=</code>）。</p>
<p>其写法与数学中的比较运算很相似，但不同的是「等于」和「不等于」，尤其注意「等于」是用两个等号 <code v-pre>==</code> 表示。</p>
<h2 id="_5-变量和赋值" tabindex="-1"><a class="header-anchor" href="#_5-变量和赋值" aria-hidden="true">#</a> 5. 变量和赋值</h2>
<p>刚才我们学习了数值运算，那我们现在来算算一周有多少秒，一年有多少秒。</p>
<p>首先我们不难得出一天有 <code v-pre>60 * 60 * 24</code> 秒。我们可以暂时把这个结果用某种方式记录下来，以便后续使用。用什么方式记录呢？我们可以使用变量。</p>
<p><strong>变量其实就是编程者给代码中的某个数据所取的名字，之后的编程过程中使用这个名字就相当于使用它背后的数据。<strong>简单地来理解的话，我们可以把变量看作是代码中用于保存数据的</strong>临时容器</strong>。</p>
<p>创建变量的动作我们称之为定义变量。如下是定义变量的方法：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里我们起了个名字 <code v-pre>seconds_per_day</code>，并且通过符号 <code v-pre>=</code> （赋值符号）把 <code v-pre>60 * 60 * 24</code> 的计算结果给了它。</p>
<p><code v-pre>seconds_per_day</code> 这个名字就是我们所定义的<strong>变量</strong>，它的值（也就是其背后的数据）是 <code v-pre>60 * 60 * 24</code> 的实际运算结果。也就是说我们将一天的秒数 <code v-pre>60 * 60 * 24</code> 保存在了变量 <code v-pre>seconds_per_day</code> 中。</p>
<p>“等号”（=） 在代码中是<strong>赋值</strong>的意思，<strong>表示将 <strong><code v-pre>**=**</code></strong> 右边的值赋予 <strong><code v-pre>**=**</code></strong> 左边的变量</strong>。<strong>注意赋值用等号 = 表示，而「等于」用 == （连续两个等号）表示。</strong></p>
<p>执行刚才的代码后，紧接着输入 <code v-pre>seconds_per_day</code> 可以看到这个变量的值：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span>

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">86400</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到「一周有多少秒」的问题上去。我们有了表示一天的秒数的 <code v-pre>seconds_per_day</code> 变量，那我们的程序就可以这样写下去：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">*</span> <span class="token number">7</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">604800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一天的秒数乘以七（天），最终结果是 604800，没有任何问题。</p>
<p>刚才的完整连贯代码是：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span>

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">86400</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">*</span> <span class="token number">7</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">604800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-变量的好处" tabindex="-1"><a class="header-anchor" href="#_6-变量的好处" aria-hidden="true">#</a> 6. 变量的好处</h2>
<p><strong>你可能会说「一周的秒数，直接计算 60 * 60 * 24 * 7 不就好了，也用不着使用变量」？</strong></p>
<p><strong>是的，有时确实可以不使用变量。但使用变量有一个好处，那就是可以暂存一个中间结果，方便之后去重复利用它。</strong></p>
<p>比如我们现在还想要再算一下「一年有多少秒」，因为前面已经算好了一天的秒数 <code v-pre>seconds_per_day</code>，所以可以直接拿来利用：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> seconds_per_day <span class="token operator">*</span> <span class="token number">365</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">31536000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**除此之外变量的好处还有，你可以通过妥当的变量名字来改善程序的可读性（阅读的容易程度）。**比如我们在代码里写下 <code v-pre>60 * 60 * 24</code>，别人（包括未来的你自己）在阅读时很难一下子理解这串运算表示什么。但是如果这样写呢： <code v-pre>seconds_per_day = 60 * 60 * 24</code>。噢，原来是指一天的秒数。</p>
<h2 id="_7-用赋值更新变量" tabindex="-1"><a class="header-anchor" href="#_7-用赋值更新变量" aria-hidden="true">#</a> 7. 用赋值更新变量</h2>
<p>前面内容中的变量是在定义的时候被赋值的，其实变量被定义后也可以反复给这个变量赋予新的值，这样变量中的数据就被更新了。如：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day <span class="token operator">=</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day <span class="token operator">=</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day <span class="token operator">=</span> <span class="token number">3</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> day
Out<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-变量和数据类型的关系" tabindex="-1"><a class="header-anchor" href="#_8-变量和数据类型的关系" aria-hidden="true">#</a> 8. 变量和数据类型的关系</h2>
<p><strong>变量用来保存数据，而数据类型用来指明数据的种类。</strong></p>
<p>刚才我们使用了 <code v-pre>seconds_per_day = 60 * 60 * 24</code> 语句来定义变量 <code v-pre>seconds_per_day</code>，并将它赋值为 <code v-pre>60 * 60 * 24</code>。因为变量 <code v-pre>seconds_per_day</code> 中保存的是个整数型的值，所以我们说 <code v-pre>seconds_per_day</code> 是个整数型（的）变量。</p>
<h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结" aria-hidden="true">#</a> 9. 总结</h2>
<h3 id="_9-1-数据类型" tabindex="-1"><a class="header-anchor" href="#_9-1-数据类型" aria-hidden="true">#</a> 9.1 数据类型</h3>
<p>这个章节中我们提到的 Python 基础数据类型有：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>表示</th>
<th>取值示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>整数型</td>
<td>整数</td>
<td><code v-pre>-59</code>，<code v-pre>100</code></td>
</tr>
<tr>
<td>浮点型</td>
<td>小数</td>
<td><code v-pre>-3.5</code>，<code v-pre>0.01</code></td>
</tr>
<tr>
<td>字符串</td>
<td>文本</td>
<td><code v-pre>'哼哼哈嘿'</code>，<code v-pre>'Good Good Study'</code></td>
</tr>
<tr>
<td>布尔型</td>
<td>是与非</td>
<td><code v-pre>True</code>，<code v-pre>False</code></td>
</tr>
<tr>
<td>None 型</td>
<td>什么都没有</td>
<td><code v-pre>None</code></td>
</tr>
</tbody>
</table>
<p>Python 中的数据类型不止这些，之后会渐渐涉及，表格中的这些类型也会在之后被应用到。</p>
<h3 id="_9-2-数值运算" tabindex="-1"><a class="header-anchor" href="#_9-2-数值运算" aria-hidden="true">#</a> 9.2 数值运算</h3>
<p>数值运算的符号有：</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>+</code></td>
<td>加法</td>
<td><code v-pre>1 + 1</code></td>
</tr>
<tr>
<td><code v-pre>-</code></td>
<td>减法</td>
<td><code v-pre>2 - 3</code></td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>乘法</td>
<td><code v-pre>4 * 5</code></td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td>除法</td>
<td><code v-pre>6 / 7</code></td>
</tr>
<tr>
<td><code v-pre>%</code></td>
<td>取余</td>
<td><code v-pre>8 % 9</code></td>
</tr>
<tr>
<td><code v-pre>**</code></td>
<td>次方</td>
<td><code v-pre>2 ** 3</code>（2 的 3 次方）</td>
</tr>
<tr>
<td><code v-pre>//</code></td>
<td>整除</td>
<td><code v-pre>5 // 4</code></td>
</tr>
</tbody>
</table>
<h3 id="_9-3-数值比较" tabindex="-1"><a class="header-anchor" href="#_9-3-数值比较" aria-hidden="true">#</a> 9.3 数值比较</h3>
<p>数值比较的符号有：</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&gt;</code></td>
<td>大于</td>
</tr>
<tr>
<td><code v-pre>&lt;</code></td>
<td>小于</td>
</tr>
<tr>
<td><code v-pre>&gt;=</code></td>
<td>大于等于</td>
</tr>
<tr>
<td><code v-pre>&lt;=</code></td>
<td>小于等于</td>
</tr>
<tr>
<td><code v-pre>==</code></td>
<td>等于</td>
</tr>
<tr>
<td><code v-pre>!=</code></td>
<td>不等于</td>
</tr>
</tbody>
</table>
<p>上面的内容看起来罗列了很多，但其实不会带来记忆负担。数值运算和数值比较与数学上的概念和符号大致相同，略有区别而已。</p>
<h3 id="_9-4-变量和赋值" tabindex="-1"><a class="header-anchor" href="#_9-4-变量和赋值" aria-hidden="true">#</a> 9.4 变量和赋值</h3>
<p>我们通过以下形式来定义变量和赋值：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>变量名 <span class="token operator">=</span> 数据值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-5-多语言比较" tabindex="-1"><a class="header-anchor" href="#_9-5-多语言比较" aria-hidden="true">#</a> 9.5 多语言比较：</h3>
<p>「多语言比较」这部分内容，是为让大家了解本章节所介绍的语言基本特性在其它语言中是如何表达的。大家可以了解体会它们之间的相识之处。</p>
<p>不同于动态类型的 Python，在静态类型的语言中数据类型还有长度一说，也就是类型所能容纳的数据大小。</p>
<p>并且变量在定义时还需先声明它的类型。以整数型为例。</p>
<p>Java 中的整数型根据长度的不同分为：</p>
<ul>
<li>byte（1 字节）</li>
<li>short（2 字节）</li>
<li>int（4 字节）</li>
<li>long（8 字节）</li>
<li>浮点型分为 float（4 字节）</li>
<li>double（8 字节）</li>
</ul>
<p>其它语言也有一些类似。C/C++ 中的整数型有「有无符号」之分（如 unsigned int 表示无符号的 int 型，也就是说这只能表示 0 和正数，不能表示负数）。</p>
<p><strong>Java 定义变量并初始化：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> yearDays <span class="token operator">=</span> <span class="token number">365</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>C/C++ 定义变量并初始化：</strong></p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> yearDays <span class="token operator">=</span> <span class="token number">365</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 C 和 C++ 合并称为 C/C++，是因为 C++ 基本上是 C 的强大很多的超集，虽然 C++ 严格来说不是 100% 兼容 C，但几乎是兼容的。</p>
<p><strong>Go 语言定义变量并初始化：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> yearDays <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">365</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Go 语言中的变量定义需要加上关键字 var，且数据类型（这里是 int）放在变量名后面。或者采用另一种写法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>yearDays <span class="token operator">:=</span> <span class="token number">365</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种写法不但可以省略关键字 var 还可以省略数据类型，数据类型可直接由编译器推导出来。</p>
<p>以上语言在变量定义后，都可通过下述语句再次赋值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>yearDays <span class="token operator">=</span> <span class="token number">366</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
<p><strong>答疑请加入知识星球，关于专栏的问题，有问必答！</strong></p>
<p><img src="fiveNamesandtypesofdatavariablesandtypes.assets/202111062133969-16362056132692.png" alt="知识星球"></p>
</div></template>
