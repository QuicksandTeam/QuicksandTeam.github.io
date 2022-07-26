<template><div><p>你好，我是悦创。首先，欢迎上车！</p>
<p>从这一章节开始，我们正式学习 Python 相关的内容。学习 Python 不仅仅是认识和记忆它的用法，还要实际动手去操作试验，只有不断地实践才能真正掌握一门语言。所以现在的第一件事是——将 Python 安装到你电脑上，边学习边实践。</p>
<h2 id="_1-安装-python-究竟安装的是什么" tabindex="-1"><a class="header-anchor" href="#_1-安装-python-究竟安装的是什么" aria-hidden="true">#</a> 1. 安装 Python 究竟安装的是什么</h2>
<p><strong>我们说「安装 Python」，可是 Python 明明只是种程序语言，为什么有安装不安装之说？</strong></p>
<p>其实这只是种笼统的说法，「安装 Python」主要指的是安装 Python 解释器。Python 的代码被编写出来后，要想执行它，就需要用到 Python 解析器，Python 解释器可以直接执行 Python 代码。</p>
<p>::: detail 扩展</p>
<blockquote>
<p>与解释器概念有点相似的是<strong>编译器</strong>，如 C、Java、Go 的代码想要被执行，需要先经过编译器的编译（以及链接器的链接），之后生成二进制文件或字节码文件，然后才能被执行。Python 与它们不同，Python 代码可以直接被解释器<strong>解释执行</strong>，也就是说不需要显式的编译过程。</p>
</blockquote>
<p>:::</p>
<h2 id="_2-安装-python" tabindex="-1"><a class="header-anchor" href="#_2-安装-python" aria-hidden="true">#</a> 2. 安装 Python</h2>
<p>由于大家的操作系统不同，故本小节对内容作了划分，请你根据自己的操作系统类型来阅读相应的内容。</p>
<h3 id="_2-1-windows-上的安装" tabindex="-1"><a class="header-anchor" href="#_2-1-windows-上的安装" aria-hidden="true">#</a> 2.1 Windows 上的安装</h3>
<ol>
<li>在 Windows 上安装 Python，首先需要去 <a href="https://www.python.org/downloads/windows/" target="_blank" rel="noopener noreferrer">Python 官网<ExternalLinkIcon/></a> 下载安装程序，方便起见，这里直接给出官网的下载链接：
<ol>
<li>Windows 64 位：<a href="https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe" target="_blank" rel="noopener noreferrer">https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe<ExternalLinkIcon/></a></li>
<li>Windows 32 位：<a href="https://www.python.org/ftp/python/3.9.7/python-3.9.7.exe" target="_blank" rel="noopener noreferrer">https://www.python.org/ftp/python/3.9.7/python-3.9.7.exe<ExternalLinkIcon/></a></li>
</ol>
</li>
<li>下载完成后打开安装程序，界面上勾选「Install launcher for all users」和「Add Python 3.7 to Path」（<strong>重要</strong>）。</li>
</ol>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202111021153477.png" alt="image.png"></p>
<p>之后点击「Install Now」完成后续的安装。</p>
<p><img src="https://gitee.com/huangjiabaoaiyc/image/raw/master/202111021154090.png" alt="image.png"></p>
<ol start="3">
<li>我们可以通过如下方式来验证安装是否成功，打开命令行（CMD）输入：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># python --version</span>
Python <span class="token number">3.9</span><span class="token number">.7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若命令行中显示「Python 3.9.7」则表明 Python 安装成功，若不是请在讨论区留言大家一起排查问题。</p>
<h3 id="_2-2-linux-上的安装" tabindex="-1"><a class="header-anchor" href="#_2-2-linux-上的安装" aria-hidden="true">#</a> 2.2 Linux 上的安装</h3>
<p>在个人电脑上使用 Linux 的同学，多数都是在使用它的 Ubuntu 发行版。所以这里以 Linux 的 ubuntu 发行版为例来介绍 Python 的安装过程。</p>
<ol>
<li>首先，有些版本的 Ubuntu 中可能自带有 Python 3，我们先来确认下。在命令行（虚拟终端）中执行下述命令：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python3 <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>如：

<span class="token operator">></span> ➜ <span class="token operator">~</span> python3 <span class="token operator">-</span><span class="token operator">-</span>version  Python <span class="token number">3.7</span><span class="token number">.3</span>

若命令行中输出「Python <span class="token number">3</span><span class="token punctuation">.</span>x<span class="token punctuation">.</span>x」，表明你的系统中已有 Pyhton <span class="token number">3</span>，可直接跳过安装过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若上一步中命令行输出「bash: python3: command not found」或类似信息，则表明系统中没有 Python3，那么执行如下命令安装：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sudo apt update <span class="token operator">-</span>y  
sudo apt install python3 <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>验证安装是否成功的方法和步骤 1. 一样。</li>
</ol>
<h3 id="_2-3-macos-上的安装" tabindex="-1"><a class="header-anchor" href="#_2-3-macos-上的安装" aria-hidden="true">#</a> 2.3 MacOS 上的安装</h3>
<p>MacOS 上安装 Python，可以去官网下载对应的安装包，但是这里推荐用 Homebrew 来安装。</p>
<ol>
<li><a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew<ExternalLinkIcon/></a> 是 MacOS 上的包管理工具，可以非常便利地通过命令安装各种软件。既然用了 MacOS，就不能错过 Homebrew。如果你的 MacOS 中没有 Homebrew，可以在命令行（虚拟终端）中执行如下命令来安装：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">/</span>usr<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>ruby <span class="token operator">-</span>e <span class="token string">"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">></span> ➜ <span class="token operator">~</span> `<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>ruby <span class="token operator">-</span>e <span class="token string">"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</span>`
<span class="token operator">></span> 
<span class="token operator">></span> <span class="token operator">==</span><span class="token operator">></span> This script will install<span class="token punctuation">:</span>  
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>brew  
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
Press RETURN to <span class="token keyword">continue</span> <span class="token keyword">or</span> <span class="token builtin">any</span> other key to abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现提示「Press RETURN to continue or any other key to abort」后敲击回车键继续安装。安 装成功后将输出如下信息：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">==</span><span class="token operator">></span> Installation successful! …
<span class="token operator">==</span><span class="token operator">></span> Next steps<span class="token punctuation">:</span>
<span class="token operator">-</span> Run brew <span class="token builtin">help</span> to get started
<span class="token operator">-</span> Further documentation<span class="token punctuation">:</span> https<span class="token punctuation">:</span><span class="token operator">//</span>docs<span class="token punctuation">.</span>brew<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>之后我们再通过 Homebrew 安装 Python，执行命令：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>brew update  
brew install Python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>要验证安装是否成功，可以执行命令：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python3 <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>➜ <span class="token operator">~</span> python3 <span class="token operator">-</span><span class="token operator">-</span>version Python <span class="token number">3.7</span><span class="token number">.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若命令行输出「Python 3.x.x」则表明 Python 安装成功，若不是请在讨论区留言大家一起排查问题。</p>
<h2 id="_3-小结" tabindex="-1"><a class="header-anchor" href="#_3-小结" aria-hidden="true">#</a> 3. 小结</h2>
<p>到这里 Python 就安装好了，是不是有点迫不及待想去用啦，下一节《如何运行 Python 代码》将会为大家介绍该如何使用刚刚安装好的 Python 解释器，以及怎么用它执行代码。</p>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
