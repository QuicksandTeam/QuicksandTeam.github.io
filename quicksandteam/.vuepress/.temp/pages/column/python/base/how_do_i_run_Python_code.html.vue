<template><div><p>你好，我是悦创。</p>
<p>上节课我带着大家来让 Python 在我们的电脑上安家落户。既然安装成功了，那么使用起来也不是问题。运行 Python 代码有两种方式。一种是直接在 Python 解释器中的输入代码，然后就地执行它（也就是交互模式）。另一种是把 Python 代码保存到文件中，之后去执行这个文件。</p>
<h2 id="_1-交互模式执行-python-代码" tabindex="-1"><a class="header-anchor" href="#_1-交互模式执行-python-代码" aria-hidden="true">#</a> 1. 交互模式执行 Python 代码</h2>
<p>先来看下如何在交互模式下执行 Python 代码。首先进入 Python 解释器交互模式，进入方法是：</p>
<ul>
<li>使用 Linux 和 MacOS 的读者在命令行（虚拟终端）中执行命令 python3</li>
<li>使用 Windows 的读者在命令行（CMD）中执行命令 python</li>
</ul>
<p>之后你会看一些版本和帮助信息：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 Python <span class="token number">3.7</span><span class="token number">.3</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Mar <span class="token number">27</span> <span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">09</span><span class="token punctuation">:</span><span class="token number">23</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>Clang <span class="token number">10.0</span><span class="token number">.1</span> <span class="token punctuation">(</span>clang<span class="token operator">-</span><span class="token number">1001.0</span><span class="token number">.46</span><span class="token number">.3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin
Type “<span class="token builtin">help</span>”<span class="token punctuation">,</span> “copyright”<span class="token punctuation">,</span> “credits” <span class="token keyword">or</span> “license” <span class="token keyword">for</span> more information<span class="token punctuation">.</span>
<span class="token operator">>></span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这便是 Python 解释器交互模式，上例中左下角的 &gt;&gt;&gt; 表示这里是输入代码的地方，此时正在等待你的输入。试着输入一些内容，然后按回车键去执行它：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">12345</span> <span class="token operator">+</span> <span class="token number">54321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token number">12345</span> <span class="token operator">+</span> <span class="token number">54321</span>
<span class="token number">66666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token string">'apple'</span> <span class="token operator">+</span> <span class="token string">'pen'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token string">'apple'</span> <span class="token operator">+</span> <span class="token string">'pen'</span>
<span class="token string">'applepen'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，按下回车键后解释器会立即执行刚才输入的代码，并直接将执行结果输出出来。</p>
<h2 id="_2-执行-python-文件" tabindex="-1"><a class="header-anchor" href="#_2-执行-python-文件" aria-hidden="true">#</a> 2. 执行 Python 文件</h2>
<p>再来看下如何执行 Python 文件。所谓 Python 文件，其实就是保存 Python 代码的文件，通常将其文件后缀名约定为 <code v-pre>.py</code>。</p>
<details class="custom-container details"><summary>扩展</summary>
<blockquote>
<p>其实用别的后缀名甚至不用后缀名都是可以的，但是既然是约定，那么大家就该遵守。<code v-pre>.py</code> 后缀能很清晰的表明这是 Python 文件。</p>
</blockquote>
</details>
<p>我们来创建一个文件，如 <code v-pre>today.py</code>，然后把以下代码拷贝进去：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime

today <span class="token operator">=</span> datetime<span class="token punctuation">.</span>date<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">'%Y{}%m{}%d{}'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token string">'年月日'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'今天是：'</span> <span class="token operator">+</span> today<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过 Python 命令来执行这个 <code v-pre>today.py</code> 文件：</p>
<ul>
<li>Windows 下执行：</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python today<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>C<span class="token punctuation">:</span><span class="token operator">></span> python today<span class="token punctuation">.</span>py
今天是：<span class="token number">2021</span>年<span class="token number">11</span>月<span class="token number">03</span>日
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Linux 和 MacOS 下执行：</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python3 today<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 today<span class="token punctuation">.</span>py
今天是：<span class="token number">2021</span>年<span class="token number">11</span>月<span class="token number">03</span>日
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>上述文件使用的是省略了路径前缀的相对路径形式，执行命令前须先进入到 Python 文件所在目录（即确保工作目录和文件所在目录一致），否则解释器会找不到该文件。也可以直接使用绝对路径的形式，如 <code v-pre>python C:\Users\aiyuechuang\today.py</code>，此时无需考虑工作目录。</p>
</div>
<h2 id="_3-交互模式执行和-python-文件执行的差别" tabindex="-1"><a class="header-anchor" href="#_3-交互模式执行和-python-文件执行的差别" aria-hidden="true">#</a> 3. 交互模式执行和 Python 文件执行的差别</h2>
<p>显而易见，Python 代码的交互模式执行和文件执行在使用形式上是不同的。除此之外，在输出结果的方式上这两种方法也存在一些不同。</p>
<p>比如代码：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">12345</span> <span class="token operator">+</span> <span class="token number">54321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在交互模式下执行时，计算结果会被直接输出出来：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token number">12345</span> <span class="token operator">+</span> <span class="token number">54321</span>
<span class="token number">66666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里我们没有使用任何输出操作，代码执行时计算出结果并自动输出。</p>
<p>而如果把这行代码写到文件里（如 <code v-pre>add.py</code>），然后使用文件执行的方式来执行它，这时命令行中没有任何内容被输出显示。如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 add<span class="token punctuation">.</span>py
➜ <span class="token operator">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为文件执行时，每个语句的执行结果并不会被自动输出，<strong>除非代码中有明确的输出操作</strong>。</p>
<p>**这输出操作具体是什么呢？**比如 Python 里有个叫 <code v-pre>print()</code> 函数的东西，它可以把结果输出显示到命令行中。使用时只需将想要输出的内容放在 <code v-pre>print()</code> 的括号中，像这样：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">12345</span> <span class="token operator">+</span> <span class="token number">54321</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好了，我们修改下文件中的代码，用 <code v-pre>print(12345 + 54321)</code> 完整替换原来的 <code v-pre>12345 + 54321</code>，再次执行下看看：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 add<span class="token punctuation">.</span>py
<span class="token number">66666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样结果就显示出来了。交互模式下当然也可以使用 <code v-pre>print()</code>，效果也是一样的。</p>
<blockquote>
<p>注意：代码中的所有符号，包括括号<code v-pre>「()」</code>、逗号<code v-pre>「,」</code>、分号<code v-pre>「;」</code>等必须使用英文半角符号，否则程序会出错。</p>
</blockquote>
<blockquote>
<p>扩展：<code v-pre>print()</code> 是 Python 的内置函数（函数概念后续会提到），无需从包（程序库）中导入。准确来讲，它的行为是将内容写到标准输出中。</p>
</blockquote>
<h2 id="_4-交互模式-or-python-文件" tabindex="-1"><a class="header-anchor" href="#_4-交互模式-or-python-文件" aria-hidden="true">#</a> 4. 交互模式 or Python 文件？</h2>
<p>在做 Python 开发时，大多数时候都是用执行 Python 文件的方式来运行代码。交互模式往往只是在试验小段代码，或者用 Python 做一些简单事情的时候才会去使用。原因是：</p>
<ul>
<li>大多数场景下，我们的程序需要以自动化的方式来运行，而交互模式顾名思义是需要人的参与的，不便于自动化；</li>
<li>把代码写到文件里方便反复执行；</li>
<li>交互模式下的输入体验不佳，编写大段代码时不够便利；</li>
</ul>
<h2 id="_5-趁手的代码编辑器" tabindex="-1"><a class="header-anchor" href="#_5-趁手的代码编辑器" aria-hidden="true">#</a> 5. 趁手的代码编辑器</h2>
<p>执行 Python 文件是运行 Python 代码的主要方式，正因为如此，我们需要一个好用的编辑器来编写 Python 文件，毕竟系统自带的文本编辑器太简陋了。</p>
<p>用来写代码的编辑器实在很多，比如老牌的 VIM、Emacs，之后的 Atom、Sublime，以及新秀 VS code。除此之外，还可以用重量级的 IDE（Integrated Development Environment——集成开发环境）。</p>
<blockquote>
<p>扩展：编辑器通常有代码编辑、高亮显示、基于历史记录的代码补全等功能。IDE 在编辑器的基础上还支持基于静态分析的代码补全，引用查看，代码跳转，重构，代码格式化，编辑时错误提示，风格提示等强大且常用的功能。</p>
</blockquote>
<blockquote>
<p>编辑器能通过插件来扩展得到这些功能，但需要经历一番折腾。想省些力气的读者可以直接用 IDE 来做开发。</p>
</blockquote>
<p>这里分别推荐一款代码编辑和一款 IDE：</p>
<ul>
<li>VS code，微软开源的优秀代码编辑器。 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">官方下载页面<ExternalLinkIcon/></a></li>
</ul>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202111031142547.png" alt="image.png"></p>
<ul>
<li>PyCharm。它是 Python 领域口碑和人气双高的 IDE。有付费的个人版本和免费的社区版本，我们使用社区版本就足够了。<a href="https://www.jetbrains.com/pycharm/download/" target="_blank" rel="noopener noreferrer">官方下载页面<ExternalLinkIcon/></a></li>
</ul>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202111031142875.png" alt="image.png"></p>
<h1 id="_6-本专栏代码演示说明" tabindex="-1"><a class="header-anchor" href="#_6-本专栏代码演示说明" aria-hidden="true">#</a> 6. 本专栏代码演示说明</h1>
<p>值得说明的是，后续文章中的代码执行演示以交互模式为主。交互模式的典型标记是 &gt;&gt;&gt; 提示符，如下示例就是在解释器交互模式下进行的：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token number">33</span><span class="token operator">+</span><span class="token number">725</span>
<span class="token number">758</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外在代码较长时，本专栏也会使用执行 Python 文件的方式来作代码执行演示。此时的典型标记是 <code v-pre>➜ ~</code>，表明这是在命令行（即 Windows CMD 或 Llinux / MacOS 虚拟终端）中执行命令。如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 hello<span class="token punctuation">.</span>py
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：上述使用的是 Linux / MacOS 下的 python3 命令，使用 Windows 的读者请自行替换为 python。</p>
<p>当然！我有时候更喜欢使用 IPython 来开发。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">"Hello QuickSand"</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">'Hello QuickSand'</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是本专栏的代码演示形式。读者自己试验代码时，是选择交互模式还是 Python 文件的方式完全由个人喜好而定。如果使用 Python 文件的方式，请不要忘记想要输出执行结果需要在代码里使用 <code v-pre>print()</code>。</p>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
