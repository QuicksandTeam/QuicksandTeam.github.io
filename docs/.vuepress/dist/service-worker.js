if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.11ac4666.css",revision:"6eb26f98999e15c21486cbe0517473fa"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/46.bc9b76d5.js",revision:"07f362fb577feda3ea7991db99a3b3b5"},{url:"assets/js/47.f3e3885c.js",revision:"98c1f3c689946b238814a108bbcf3a4c"},{url:"assets/js/48.ac05280a.js",revision:"211da61797509c2624142a5ac1fe5399"},{url:"assets/js/49.9b93a088.js",revision:"1b0a35035fb6f5fbf9c6bccb01a8239e"},{url:"assets/js/50.5c79161e.js",revision:"99dd5e84dc0c5df5bdda74f0a3dd6683"},{url:"assets/js/51.ba3978ca.js",revision:"0d76428ff93fc83f710b5fe85a3943cf"},{url:"assets/js/app.8908511e.js",revision:"a7cd157491a3b57b48473ef5a87b7ac6"},{url:"assets/js/layout-Blog.400f45ef.js",revision:"78988953bc2d09bf9325058957e6305b"},{url:"assets/js/layout-Layout.60f5be12.js",revision:"e52e8629ac678533a5adf79f80fa6479"},{url:"assets/js/layout-NotFound.0498ea67.js",revision:"b0a32d438a78af459beed2d64ce94f76"},{url:"assets/js/layout-Slide.9267ce81.js",revision:"421c4145d8cf8d68f645c2ef772c1d0e"},{url:"assets/js/page-01-【久远讲算法】什么是时间复杂度？.77394ef2.js",revision:"f19de70286d9f36a25e72a007c9521b0"},{url:"assets/js/page-01-Markdown标题.46c70a5d.js",revision:"d44a0eea2652c7a976f30c543ace7ead"},{url:"assets/js/page-01-Week1：Python基础数据类型和链表.3ea6e9e3.js",revision:"3dfb74fbc72e30124f834d4429fe4acd"},{url:"assets/js/page-01-本网站文章编写格式.80aef4f4.js",revision:"d4e00a40706897b5f09b269490417a48"},{url:"assets/js/page-02-【久远讲算法】什么是空间复杂度？.a49c25b4.js",revision:"3b2ddf4165a2139a5f559e5f4f18430f"},{url:"assets/js/page-02-Markdown段落.6c789581.js",revision:"c5db318fd08c99b89844df373bfa9b91"},{url:"assets/js/page-02-代码演示.3d51ce81.js",revision:"341b93f4baa2871c7b21e764c364a8ac"},{url:"assets/js/page-03-【久远讲算法】数组——最简单的数据结构.806cb49d.js",revision:"fc07a14b60b4af9f79bb3ea7173f51d5"},{url:"assets/js/page-03-Markdown列表.4d6b24d6.js",revision:"19ac09f16181ace1c0bc91bb624e7f05"},{url:"assets/js/page-03-本网站使用视频和音频格式.3e5a9301.js",revision:"c0e2f61d7d8fb8b74ee4f00f3b98d886"},{url:"assets/js/page-04-【久远讲算法】链表——实现无序列表.e180417c.js",revision:"a944401273d001426263a86fd62aead9"},{url:"assets/js/page-04-Markdown区块.08203aa2.js",revision:"856fdc27f7306e0571fa8b86eb7e0deb"},{url:"assets/js/page-05-Markdown代码.b7b34d2e.js",revision:"056e47ad7054c01b022b01463859841e"},{url:"assets/js/page-06-Markdown链接.8d7e062b.js",revision:"24210d666840b4284e83389db7e799ea"},{url:"assets/js/page-07-Markdown图片.c1997ef3.js",revision:"770335a2744a71f81556b958cbfe7a5a"},{url:"assets/js/page-08-Markdown表格.a2cce2d0.js",revision:"918e076436fe2eefc171ee6b2a5189c0"},{url:"assets/js/page-09-Markdown高级技巧.0cdae23f.js",revision:"e89e143d2d6bb42541682a37ba972677"},{url:"assets/js/page-10-补充.63ac8f82.js",revision:"893ef3113ff1862d1727274d3a172f51"},{url:"assets/js/page-11-Markdown数学公式语法.ec2c8bad.js",revision:"49a4fc94d5ce6aae64df9c4829ce42bc"},{url:"assets/js/page-AI悦创·算法.d21d505a.js",revision:"eebbd89c96840f44854b4f362619c4ff"},{url:"assets/js/page-BlogHome.b6d59a23.js",revision:"eb18a5af0b8b5e8b2655746406cc0bfc"},{url:"assets/js/page-Markdown.bf05aa7f.js",revision:"d170220460c8430b28a6ce93bdcfe122"},{url:"assets/js/page-Projecthome.eceee4fa.js",revision:"918fc203026167e2e5813cb796d90bba"},{url:"assets/js/page-Python办公自动化.2c7c8ba4.js",revision:"fdd4ab67cec0e9f0b5620480c0332ed5"},{url:"assets/js/page-专栏目录.d946ce7d.js",revision:"3e25151fe73aa5d1ade3bc50a7beb947"},{url:"assets/js/page-久远讲算法.2bbfabb2.js",revision:"1f54c1f08cbed76f15eb2e41f277f1e2"},{url:"assets/js/page-关于团队.91ee163d.js",revision:"7dbfdfe9882c27c7fc70cbc00cf4dc4b"},{url:"assets/js/page-博客主页.fc4cbcaa.js",revision:"7f491d5360807565574d4e3592fe71d7"},{url:"assets/js/page-幻灯片页.972ac5ba.js",revision:"31bedbac44e64155e0e7204401796029"},{url:"assets/js/page-流沙团队.651f4f9b.js",revision:"0e27b46beb80fa9924c2581d3d2538f5"},{url:"assets/js/page-第1关天才老师防作弊.95f9f411.js",revision:"bcefad493a244568b168c8392d7402f4"},{url:"assets/js/page-网站信息.1f568e4d.js",revision:"28c088138039346c92879d87c87dc148"},{url:"assets/js/vendors~flowchart.ea353053.js",revision:"6d93cde21aa894e785bb8b3c657e2d21"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1c671fee.js",revision:"021ee025cbef03d45d8567f929c0642c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4b1359e2.js",revision:"0ce1c6578caeffffac28fef04cf21f71"},{url:"assets/js/vendors~layout-Layout.622b51a1.js",revision:"161c9e90328b00c76864da274d16dbda"},{url:"assets/js/vendors~mermaid.1c02a851.js",revision:"48d6ecaf38f6dd5fae90334de24fb088"},{url:"assets/js/vendors~photo-swipe.659ee85f.js",revision:"848963dfb7736a9b74500353eaade521"},{url:"assets/js/vendors~reveal.f2de912a.js",revision:"79e0d40148becd254dae5cf152d9d687"},{url:"assets/js/vendors~waline.059b0b95.js",revision:"e4a7bc1be745329f87b736a8960dab6c"},{url:"ColumnImages/MarkdownBase/01-markdown-mark-white.svg",revision:"714357ca188c8d02e724381b5050e55e"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.3e94a45c.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/fonts/KaTeX_AMS-Regular.7bc59ee9.woff",revision:"7bc59ee9f9ad43040a2ff34a912bec13"},{url:"assets/fonts/KaTeX_AMS-Regular.92297720.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4c370560.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.096ac2cc.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/fonts/KaTeX_Fraktur-Bold.06e6c3f3.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/fonts/KaTeX_Fraktur-Bold.5ec2d705.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/fonts/KaTeX_Fraktur-Bold.8518f4fe.woff",revision:"8518f4fec3f73b37b3693f3625bc146b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.56d671ca.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/fonts/KaTeX_Fraktur-Regular.c5953fef.woff",revision:"c5953fefe37f48064e17b75ff607fc0d"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e78f1f02.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/fonts/KaTeX_Main-Bold.36af3e91.woff",revision:"36af3e91a84645afe0e40be8046fba86"},{url:"assets/fonts/KaTeX_Main-Bold.5c603567.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/fonts/KaTeX_Main-Bold.d94e53ed.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/fonts/KaTeX_Main-BoldItalic.addf8657.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ceb7b930.woff",revision:"ceb7b93007c7e338f635833a4259a14b"},{url:"assets/fonts/KaTeX_Main-BoldItalic.dde48012.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/fonts/KaTeX_Main-Italic.2bc9206b.woff",revision:"2bc9206b7e2d0c75941d4930b1990e49"},{url:"assets/fonts/KaTeX_Main-Italic.890a6b3f.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/fonts/KaTeX_Main-Italic.c24bf2da.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/fonts/KaTeX_Main-Regular.16df5fa9.woff",revision:"16df5fa99e77eff4b91a4f3423b761d4"},{url:"assets/fonts/KaTeX_Main-Regular.46b1ffa6.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/fonts/KaTeX_Main-Regular.d866ab9b.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/fonts/KaTeX_Math-BoldItalic.a562e8c1.woff",revision:"a562e8c1abe0de60ffc1f77ed9412327"},{url:"assets/fonts/KaTeX_Math-BoldItalic.bb40192b.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.cbf87238.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/fonts/KaTeX_Math-Italic.92281c86.woff",revision:"92281c86717a2642f166728a8973f3f9"},{url:"assets/fonts/KaTeX_Math-Italic.96c61839.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/fonts/KaTeX_Math-Italic.c359b8d5.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.26f259e4.woff",revision:"26f259e4e6c41f013a51f790e3a7dd0c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.95392fb8.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.cb7f745a.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/fonts/KaTeX_SansSerif-Italic.7de8e4ae.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9c330d9e.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/fonts/KaTeX_SansSerif-Italic.a8f101e8.woff",revision:"a8f101e81769f08428b1e01d4b04c033"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3ad86448.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/fonts/KaTeX_SansSerif-Regular.63e176e6.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/fonts/KaTeX_SansSerif-Regular.df1117b1.woff",revision:"df1117b1c61ba086c7c286b4132350d3"},{url:"assets/fonts/KaTeX_Script-Regular.1e0cfc32.woff",revision:"1e0cfc3296ecafedbd818c2dd8e42d44"},{url:"assets/fonts/KaTeX_Script-Regular.52316064.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/fonts/KaTeX_Size1-Regular.f8369ce8.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/fonts/KaTeX_Size2-Regular.90b50b45.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/fonts/KaTeX_Size4-Regular.70d01e49.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.099e00d5.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f005719.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f78c7d7.woff",revision:"2f78c7d76fe78153d0ca675b3923507d"},{url:"404.html",revision:"2887c420884735a7259c3d3f0182ed22"},{url:"AboutTeam/index.html",revision:"1bbff691c8f589725fb10cc9e40a4a5b"},{url:"article/index.html",revision:"fede0171c03d4d392d5a46212c7456dd"},{url:"category/AI悦创·算法/index.html",revision:"6ef4e223f8ff70f901c61ea2ef86d975"},{url:"category/index.html",revision:"081b9332d853fa2fb9728e14bc974f67"},{url:"category/Markdown 基础/index.html",revision:"709dc35d04564e0388d430a3a0849d71"},{url:"category/Markdown 基础/page/2/index.html",revision:"07804e35ba59cf8907d69ec82b049fbf"},{url:"category/久远讲算法/index.html",revision:"2432de26495826ec1be99b88202d9cfa"},{url:"en/home/index.html",revision:"0bb38ce47230481df30e6e0a8f98d37f"},{url:"en/index.html",revision:"4757cd9dbc68868a3f960eb114e993ca"},{url:"encrypt/index.html",revision:"68b23908fee879d3186e943dadd4272e"},{url:"googlee61d535d303e3911.html",revision:"dc1825a8f6d0bb5853cb87d312417ce1"},{url:"index.html",revision:"3c8d73efd7d19da0c9a971748b4c0f51"},{url:"slide/index.html",revision:"cd44240316015844fd31e435a097fa75"},{url:"star/index.html",revision:"cb65d1e6eefea4516d46fa6ac79a655f"},{url:"tag/AI悦创·算法/index.html",revision:"38a96901927ae7fba0e3273da5f58764"},{url:"tag/index.html",revision:"b8ac70eff1e04dc8433895e347237791"},{url:"tag/Markdown/index.html",revision:"22167c3dc6fca8d35c5476f1f2dd63e2"},{url:"tag/Markdown/page/2/index.html",revision:"5cb6af28d787dff808aa657b139b15da"},{url:"tag/久远讲算法/index.html",revision:"326578a87058570dafe41d1ef579843c"},{url:"timeline/index.html",revision:"fff23117f911679c6d7b0684a0826096"},{url:"WebSiteData/index.html",revision:"ba37ab8b324409247bf160d785c0df27"},{url:"zh/column/aiycsf/index.html",revision:"31fc2f25178a8b4f82e9860e1ed34361"},{url:"zh/column/aiycsf/Week1/index.html",revision:"915d4c6797eb34136503398afbf1e562"},{url:"zh/column/jysf/0neWhatistimecomplexity/index.html",revision:"f9cdb6a9ba38f831f18a44df6c3e01ba"},{url:"zh/column/jysf/Arraythesimplestdatastructure/index.html",revision:"f2a0216f97671f977c3ca8ff4bcb4bc9"},{url:"zh/column/jysf/index.html",revision:"b83d816458444ac26945ad620b492660"},{url:"zh/column/jysf/Linkedlisttoimplementanunorderedlist/index.html",revision:"03ab4c0e17de3293f7a90564c6345fa2"},{url:"zh/column/jysf/TwoWhatisspatialcomplexity/index.html",revision:"c2b7ce2a2fbbfa03179fc0c12c3cd552"},{url:"zh/column/md/EightMarkdownform/index.html",revision:"c352696cf106ec7558cb3e5c0a7b3f98"},{url:"zh/column/md/FiveMarkdowncode/index.html",revision:"55a0ce6821beac6922670afbbc4a084c"},{url:"zh/column/md/fourmarkdownblock/index.html",revision:"a4c1e7f86e2d6fba5a3add1454342a1d"},{url:"zh/column/md/index.html",revision:"ace97ddb48b1f9e74b83300f058e186b"},{url:"zh/column/md/Markdownmathematicalformulasyntax/index.html",revision:"c8745cd140c88b69fd60134632fa8e04"},{url:"zh/column/md/moveandmuisc/index.html",revision:"ff973f4111a6e3de831927d1c7c7ff8b"},{url:"zh/column/md/nineMarkdownskills/index.html",revision:"6786ce005612cb306fa07de4162098e2"},{url:"zh/column/md/Oneformatforwritingarticlesonthiswebsite/index.html",revision:"68d29a9158031a17725c4041ce0eca48"},{url:"zh/column/md/oneMarkdowntitle/index.html",revision:"ffcf48aa8fb85fa4f06e4c37e773b533"},{url:"zh/column/md/SevenMarkdownpictures/index.html",revision:"8ef147548ac916caf6ab276d3854f9da"},{url:"zh/column/md/SixMarkdownlink/index.html",revision:"e9502e2e7d2d31e38929dc76297e4d4a"},{url:"zh/column/md/Tensupplement/index.html",revision:"71f3c8d3002617854e2cfcdd7ac8ac20"},{url:"zh/column/md/threeMarkdown_list/index.html",revision:"0108bfd426f30cc6238a3a5ce49cca4d"},{url:"zh/column/md/twoCodedemo/index.html",revision:"8518644f24c1083ef94a94812e9cc01c"},{url:"zh/column/md/twoMarkdown_paragraph/index.html",revision:"59861aef772dcc554e6deef74a1fdccc"},{url:"zh/column/python/Officeautomation/index.html",revision:"822d061c20aa94a45a251304977edf66"},{url:"zh/column/python/Officeautomation/Thefirstlevelgeniusteachertopreventcheating/index.html",revision:"0324d1dc5ed6a0ac65f125d8abc126ec"},{url:"zh/guide/index.html",revision:"83376f21ee0341472c84deb421d9abba"},{url:"zh/home/index.html",revision:"619dee142ec820c74eaae666f42c5fe7"},{url:"zh/slides/index.html",revision:"0e7ca38b3d7f5cefd2483d82b062c909"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"ColumnImages/aiycsf/xuesuanfala.png",revision:"541a8991a0ea1b72ecbfc797ed007723"},{url:"ColumnImages/jysfimg/data-structure.png",revision:"8c5e14eabf3b4b8b220554d3d2a92298"},{url:"ColumnImages/MarkdownBase/01-markdown-mark-white.png",revision:"750d7c332e5a077ee8ee36cfd1318617"},{url:"ColumnImages/MarkdownBase/01/image-20211022133509452.png",revision:"7f375b8fd9dea9685916d8c0862b10eb"},{url:"ColumnImages/MarkdownBase/01/image-20211022145145089.png",revision:"e493d25a2540da75dddda2fd1a3b52b3"},{url:"ColumnImages/MarkdownBase/01/image-20211022150038645.png",revision:"4c56d44bad739da50b04d3b3d02378b7"},{url:"ColumnImages/Officeautomation/lena2.jpg",revision:"eef831b340161b029f938bf309469a52"},{url:"ColumnImages/Officeautomation/Officeautomation.png",revision:"d0f59e66835a91aee5cb2e7ed567d29b"},{url:"images/favicon.png",revision:"346e09471362f2907510a31812129cd2"},{url:"images/hero.png",revision:"d1fed5cb9d0a4c4269c3bcc4d74d9e64"},{url:"images/logo_min.png",revision:"368183ab41bd0d821045e89b4fe45710"},{url:"images/logo.png",revision:"080262e7c33826236e43d5fe214341d5"},{url:"images/公众号/gzh.jpg",revision:"2974d8b1e9ceb0879a5a0c3e2e4370f6"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
