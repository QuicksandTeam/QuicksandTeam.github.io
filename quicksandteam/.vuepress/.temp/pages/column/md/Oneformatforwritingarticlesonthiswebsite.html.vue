<template><div><p>你好，我是悦创。</p>
<p>页面的 frontmatter 新增如下配置选项:</p>
<h2 id="页面信息配置" tabindex="-1"><a class="header-anchor" href="#页面信息配置" aria-hidden="true">#</a> 页面信息配置</h2>
<h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面图标的 FontClass (建议填写)</p>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面内容描述。</p>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3>
<ul>
<li>类型: <code v-pre>string | boolean</code></li>
<li>必填: 否</li>
</ul>
<p>显示当前页面的作者，如果不填，则会回退到默认作者。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当全局默认作者启用时，可以设置 <code v-pre>false</code> 取消作者显示</p>
</div>
<h3 id="original" tabindex="-1"><a class="header-anchor" href="#original" aria-hidden="true">#</a> original</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>false</code></li>
</ul>
<p>当前文章是否为原创。</p>
<h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3>
<ul>
<li>类型: <code v-pre>timeString | string</code></li>
<li>必填: 否</li>
<li>格式: <code v-pre>YYYY-MM-DD</code> 或 <code v-pre>YYYY/MM/DD hh:mm:ss</code></li>
</ul>
<p>设置当前页面的写作时间。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>尽管本主题及 Mister-Hope 的其他插件会正确解析你输入的时间，如 <code v-pre>YYYY/MM/DD hh:mm</code> <code v-pre>YYYY-MM-DD hh:mm</code> <code v-pre>YYYY/MM/DD</code> 等，但是其他插件可能不能正确的读取他们。使用非标准格式的值可能会导致其他插件报错，</p>
</div>
<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面的分类</p>
<h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h3>
<ul>
<li>类型: <code v-pre>string | string[]</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面的标签</p>
<h3 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h3>
<ul>
<li>类型: <code v-pre>boolean | number</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>设置当前文章是否在列表中置顶。当填入数字时，数字越大，排名越靠前。</p>
<h3 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h3>
<ul>
<li>类型: <code v-pre>boolean | number</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。</p>
<h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>true</code></li>
</ul>
<p>是否将该文章添加至文章列表中。</p>
<h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>true</code></li>
</ul>
<p>是否将该文章添加至时间线中。</p>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> password</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前文章的密码。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请注意，由于密码会进行二次混淆加密，请确保密码是字符串格式。<code v-pre>'1234'</code> 和 <code v-pre>1234</code> 混淆后产生的结果是不同的。</p>
</div>
<h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置当前页面的预览图(分享图)，请填入绝对路径。</p>
<h3 id="copyright-minlength" tabindex="-1"><a class="header-anchor" href="#copyright-minlength" aria-hidden="true">#</a> copyright.minLength</h3>
<ul>
<li>类型: <code v-pre>number</code></li>
<li>默认值: <code v-pre>100</code></li>
</ul>
<p>触发版权信息或禁止复制动作的最少字符数。</p>
<h3 id="copyright-nocopy" tabindex="-1"><a class="header-anchor" href="#copyright-nocopy" aria-hidden="true">#</a> copyright.noCopy</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>是否禁止复制</p>
<h3 id="copyright-noselect" tabindex="-1"><a class="header-anchor" href="#copyright-noselect" aria-hidden="true">#</a> copyright.noSelect</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>是否禁止选中文字</p>
<h2 id="页面显示配置" tabindex="-1"><a class="header-anchor" href="#页面显示配置" aria-hidden="true">#</a> 页面显示配置</h2>
<h3 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h3>
<ul>
<li>类型: <code v-pre>PageInfo[] | false</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>['author', 'visitor', 'time', 'category', 'tag', 'reading-time']</code>)</li>
</ul>
<p><code v-pre>PageInfo</code> 可选的值和对应内容如下:</p>
<table>
<thead>
<tr>
<th>条目</th>
<th>对应内容</th>
<th>页面 frontmatter 值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>'author'</code></td>
<td>作者</td>
<td>author</td>
</tr>
<tr>
<td><code v-pre>'time'</code></td>
<td>写作日期</td>
<td>time</td>
</tr>
<tr>
<td><code v-pre>'category'</code></td>
<td>分类</td>
<td>category</td>
</tr>
<tr>
<td><code v-pre>'tag'</code></td>
<td>标签</td>
<td>tags</td>
</tr>
<tr>
<td><code v-pre>'reading-time'</code></td>
<td>预计阅读时间</td>
<td>N/A(自动生成)</td>
</tr>
<tr>
<td><code v-pre>'word'</code></td>
<td>字数</td>
<td>N/A(自动生成)</td>
</tr>
<tr>
<td><code v-pre>'visitor'</code></td>
<td>访问量</td>
<td>visitor(仅 Valine 可用)</td>
</tr>
</tbody>
</table>
<p>设置当前页面的文章信息内容</p>
<h3 id="visitor" tabindex="-1"><a class="header-anchor" href="#visitor" aria-hidden="true">#</a> visitor</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (配置全局的 <code v-pre>comment</code> 为 <code v-pre>'valine'</code> 后默认为 <code v-pre>true</code>)</li>
</ul>
<p>当前页面是否显示浏览量</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>显示浏览量功能需要你正确配置了 Valine 类型的评论配置。</p>
</div>
<h3 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>true</code>)</li>
</ul>
<p>当前页面是否开启路径导航</p>
<h3 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>true</code>)</li>
</ul>
<p>当前页面是否开启路径导航图标</p>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
</ul>
<p>页面的导航栏配置，填入 <code v-pre>false</code> 会禁用导航栏</p>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3>
<ul>
<li>类型: <code v-pre>false | 'auto'</code></li>
</ul>
<p>页面的侧边栏配置选项。支持 <code v-pre>false</code> 或 <code v-pre>auto</code>。</p>
<h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth" aria-hidden="true">#</a> sidebarDepth</h3>
<ul>
<li>类型: <code v-pre>number</code></li>
<li>默认值: <code v-pre>2</code></li>
</ul>
<p>该页面的侧边栏渲染深度</p>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (配置全局的 <code v-pre>comment</code> 后默认为 <code v-pre>true</code>)</li>
</ul>
<p>当前页面是否开启评论功能</p>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值</li>
</ul>
<p>是否显示编辑链接</p>
<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3>
<ul>
<li>类型: <code v-pre>string | false</code></li>
</ul>
<p>上一篇文章链接</p>
<h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3>
<ul>
<li>类型: <code v-pre>string | false</code></li>
</ul>
<p>下一篇文章链接</p>
<h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3>
<ul>
<li>类型: <code v-pre>boolean | string | HTMLString</code></li>
</ul>
<p>设置当前页面的页脚内容，如果你想要禁用页脚，请设置为 <code v-pre>false</code>，如果你想要移除默认的页脚内容，请设置为 <code v-pre>''</code>，如果你想使用默认页脚，请设置为 <code v-pre>true</code>。</p>
<p>更多详情请看 <RouterLink to="/column/guide/layout/page.html#%E9%A1%B5%E8%84%9A%E6%94%AF%E6%8C%81">页面 → 页脚支持</RouterLink></p>
<h3 id="copyrighttext" tabindex="-1"><a class="header-anchor" href="#copyrighttext" aria-hidden="true">#</a> copyrightText</h3>
<ul>
<li>类型: <code v-pre>string | false</code></li>
<li>默认值: 全局中配置的值</li>
</ul>
<p>设置当前页面的版权信息，更多详情请看 <RouterLink to="/column/guide/layout/page.html#%E9%A1%B5%E8%84%9A%E6%94%AF%E6%8C%81">页面 → 页脚支持</RouterLink></p>
<h3 id="medialink" tabindex="-1"><a class="header-anchor" href="#medialink" aria-hidden="true">#</a> mediaLink</h3>
<ul>
<li>类型: <code v-pre>Record&lt;MediaType, string&gt; | false</code></li>
<li>默认值: 主题中 <code v-pre>themeConfig.blog.links</code> 的值</li>
</ul>
<p>设置当前页面的页脚社交链接。</p>
<div class="custom-container tip"><p class="custom-container-title">可用的社交媒体:</p>
<p><code v-pre>MediaType</code> 的可选值如下:</p>
<ul>
<li><code v-pre>'Baidu'</code>: 百度</li>
<li><code v-pre>'Bitbucket'</code>: Bitbucket</li>
<li><code v-pre>'Dingding'</code>: 钉钉</li>
<li><code v-pre>'Discord'</code>: Discord</li>
<li><code v-pre>'Dribbble'</code>: Dribble</li>
<li><code v-pre>'Email'</code>: Email</li>
<li><code v-pre>'Evernote'</code>: 印象笔记</li>
<li><code v-pre>'Facebook'</code>: 脸书</li>
<li><code v-pre>'Flipboard'</code>: 红板报</li>
<li><code v-pre>'Gitee'</code>: Gitee</li>
<li><code v-pre>'Github'</code>: GitHub</li>
<li><code v-pre>'Gitlab'</code>: Gitlab</li>
<li><code v-pre>'Gmail'</code>: 谷歌邮箱(当然你也可以填入你自己的其他邮箱)</li>
<li><code v-pre>'Instagram'</code>: Instagram</li>
<li><code v-pre>'Line'</code>: Line</li>
<li><code v-pre>'Linkedin'</code>: 领英</li>
<li><code v-pre>'Pinterest'</code>: 拼趣</li>
<li><code v-pre>'Pocket'</code>: Pocket</li>
<li><code v-pre>'QQ'</code>: QQ</li>
<li><code v-pre>'Qzone'</code>: QQ 空间</li>
<li><code v-pre>'Reddit'</code>: Reddit</li>
<li><code v-pre>'Rss'</code>: RSS 地址</li>
<li><code v-pre>'Steam'</code>: Steam</li>
<li><code v-pre>'Twitter'</code>: Twitter</li>
<li><code v-pre>'Wechat'</code>: 微信</li>
<li><code v-pre>'Weibo'</code>: 微博</li>
<li><code v-pre>'Whatsapp'</code>: Whatsapp</li>
<li><code v-pre>'Youtube'</code>: YouTube</li>
<li><code v-pre>'Zhihu'</code>: 知乎</li>
</ul>
</div>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>true</code>)</li>
</ul>
<p>当前页面是否显示搜索框。</p>
<h3 id="backtotop" tabindex="-1"><a class="header-anchor" href="#backtotop" aria-hidden="true">#</a> backToTop</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>true</code>)</li>
</ul>
<p>设置当前页面是否显示返回顶部按钮</p>
<h3 id="anchordisplay" tabindex="-1"><a class="header-anchor" href="#anchordisplay" aria-hidden="true">#</a> anchorDisplay</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: 全局中配置的值 (全局默认为 <code v-pre>true</code>)</li>
</ul>
<p>设置当前页面在桌面模式下是否在右侧显示标题列表</p>
<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
</ul>
<p>页面的自定义布局名称</p>
<blockquote>
<p>流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</blockquote>
</div></template>
