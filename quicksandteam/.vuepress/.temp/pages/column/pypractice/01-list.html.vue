<template><div><h1 id="_1-列表基础考察" tabindex="-1"><a class="header-anchor" href="#_1-列表基础考察" aria-hidden="true">#</a> 1. 列表基础考察</h1>
<p>已知一个列表：lst = [1,2,3,4,5]</p>
<ol>
<li>求列表的长度</li>
<li>判断 6 是否在列表中</li>
<li>lst + [6, 7, 8] 的结果是什么？</li>
<li>lst*2 的结果是什么</li>
<li>列表里元素的最大值是多少？</li>
<li>列表里元素的最小值是多少？</li>
<li>列表里所有元素的和是多少？</li>
<li>在索引 1 的位置新增一个的元素 10；</li>
<li>在列表的末尾新增一个元素 20；</li>
</ol>
<p>答案：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token number">6</span> <span class="token keyword">in</span> lst
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token builtin">max</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token builtin">min</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token builtin">sum</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>以上都是对列表基础操作，所用到的每一个函数，列表的每一个方法，都是需要你熟记于心的</p>
</blockquote>
<h1 id="_2-修改列表" tabindex="-1"><a class="header-anchor" href="#_2-修改列表" aria-hidden="true">#</a> 2. 修改列表</h1>
<p>lst = [1, [4, 6], True]
请将列表里所有数字修改成原来的两倍。</p>
<p>答案如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span>
lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你以为存在一个函数，其功能便是将列表里所有的数据都变成原来的两倍，这样才显得变成语言是一个非常神奇的东西，但是很遗憾的告诉你，那些神奇的东西都是程序员自己实现的。
​</p>
<p>想要修改列表里的数据，必须通过索引对其重新赋值，上面的方法很 low，你也可以写一个函数来实现这个功能，我们假设要处理的列表里只 int,float,bool, 和 list 数据，不管嵌套几层 list，这个函数都应该能正确处理，下面是一段示例代码：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">double_list</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            lst<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token number">2</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            double_list<span class="token punctuation">(</span>item<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span>
    double_list<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们还没有学习到函数，更没有学习到递归函数，这个练习题，你只掌握直接通过索引修改列表即可，等到学习函数后，可以再回到这里做这个练习题。
​</p>
<h1 id="_3-合并列表" tabindex="-1"><a class="header-anchor" href="#_3-合并列表" aria-hidden="true">#</a> 3. 合并列表</h1>
<p>lst = [1,2,3]
lst2 = [4,5,6]
不使用 + 号运算符，将 lst2 合并到 lst 的末尾，并思考，这个过程中，是否产生了新的列表
答案：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>lst2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个过程中不会产生新的列表，最直观的检验方式就是 <code v-pre>print(id(lst))</code>,合并前后，lst 的内存地址都没有发生变化，只是列表里的内容发生了变化</p>
<h1 id="_4-统计练习" tabindex="-1"><a class="header-anchor" href="#_4-统计练习" aria-hidden="true">#</a> 4. 统计练习</h1>
<p>列表 lst 内容如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请写程序完成下列题目：</p>
<ol>
<li>找出列表里的最大值</li>
<li>找出列表里的最小值</li>
<li>找出列表里最大值的个数</li>
<li>计算列表里所有元素的和</li>
<li>计算列表里元素的平均值</li>
<li>计算列表的长度</li>
<li>找出元素 6 在列表中的索引</li>
</ol>
<p>答案：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token builtin">max</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token builtin">min</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">sum</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token builtin">sum</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token operator">/</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题考察的是你对内置函数的理解和运用</p>
<p>下面的题目不允许写代码，仅凭思考来回答</p>
<ol>
<li>lst[2:4] 的值是什么</li>
<li>lst[1: -3]的值是什么</li>
<li>lst[-5]的值是什么</li>
<li>lst[:-4] 的值是什么</li>
<li>lst[-4:] 的值是什么</li>
</ol>
<p>这个题目主要考察你对列表切片操作的理解：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token number">8</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表的切片操作，最关键的一点在于左闭右开，结束位置的数据不会列入结果中。</p>
<h1 id="_5-列表操作练习" tabindex="-1"><a class="header-anchor" href="#_5-列表操作练习" aria-hidden="true">#</a> 5. 列表操作练习</h1>
<p>列表 lst 内容如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请写程序完成下列操作</p>
<ol>
<li>在列表的末尾增加元素 15</li>
<li>在列表的中间位置插入元素 20</li>
<li>将列表 [2, 5, 6] 合并到 lst 中</li>
<li>移除列表中索引为 3 的元素</li>
<li>翻转列表里的所有元素</li>
<li>对列表里的元素进行排序，从小到大一次，从大到小一次</li>
</ol>
<p>答案：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
lst <span class="token operator">=</span> lst<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
lst<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>   lst<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-复杂列表练习" tabindex="-1"><a class="header-anchor" href="#_6-复杂列表练习" aria-hidden="true">#</a> 6. 复杂列表练习</h1>
<p>列表 lst 内容如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不写任何代码，仅凭思考推理来回答下列问题</p>
<ol>
<li>列表 ls t的长度是多少</li>
<li>列表 lst 中有几个元素？</li>
<li>检测元素数量的函数是什么？</li>
<li>lst[1] 的数据类型是什么？</li>
<li>lst[3] 的数据类型是什么？</li>
<li>lst[3][4] 的值是什么？</li>
<li>如何才能访问到 9 这个值？</li>
<li>执行 <code v-pre>lst[3][4].append([5, 6])</code>后，列表 lst 的内容是什么，手写出来。</li>
<li><code v-pre>lst[-1][-1][-2]</code>的值是什么？</li>
<li><code v-pre>lst[-2]</code> 的值是什么？</li>
<li>len(lst[-1]) 的值是什么？</li>
<li>len(lst[-1][-1]) 的值是什么？</li>
<li>lst[-1][1:3] 的值是什么？</li>
<li>lst[-1][-1][1:-2] 的值是什么？</li>
</ol>
<p>第1题和第2题其实是一个意思，原本统计列表里数据个数不是什么难事，可一旦出现了嵌套列表的情况，有人就分不清了，列表里的数据是以逗号分隔的，lst[3] 是一个列表，其余都是 int 类型数据，因此 lst 的长度是4。
第3题，lst[1] = 4,是int类型数据
第4题，lst[3] 的数据类型是列表
第5题，lst[3] 的值是 [1, 3, 5, 6, [8, 9, 10, 12]]，仍然是一个列表，其索引为 4 的数据是 [8, 9, 10, 12]，是列表
第6题，lst[3][4][1]
第7题，[1, 4, 5, [1, 3, 5, 6, [8, 9, 10, 12, [5, 6]]]], 参考 5，6 两个题目的解答
第8题，lst[-1]的值是[1, 3, 5, 6, [8, 9, 10, 12]]， 再次取索引为-1的数据为[8, 9, 10, 12]，取索引为-2的数据为10
第9题，5
第10题，5
第11题，4
第12题， [3, 5]， lst[-1] 的值是 [1, 3, 5, 6, [8, 9, 10, 12]]
第13题，[9]， lst[-1][-1]的值是 [8, 9, 10, 12]，切片起始位置索引是1，值为9，结束位置是-2，值为10，由于左闭右开，最终结果是 [9]</p>
<blockquote>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。QQ、微信在线，随时响应！V：Jiabcdefh</p>
</blockquote>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202201252012856.png" alt="image.png"></p>
</div></template>
