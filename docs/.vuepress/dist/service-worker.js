if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.11ac4666.css",revision:"6eb26f98999e15c21486cbe0517473fa"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/33.59c452a7.js",revision:"9c6036005574142e5ccea4babf865067"},{url:"assets/js/34.5bcaec1c.js",revision:"b5d514d75870d0fd10e9beda4693cf89"},{url:"assets/js/35.438a6a47.js",revision:"8f7554bf71e7cc43b43ba5bf5b8d1d53"},{url:"assets/js/36.68c6a453.js",revision:"7d701cd9e5079bebf9d94183b0ee8549"},{url:"assets/js/37.5aa9fa98.js",revision:"b729d52896be6fd445deb298912670ac"},{url:"assets/js/38.14c35fd9.js",revision:"42224e77e8df0cba3b077a691563807c"},{url:"assets/js/app.01453152.js",revision:"184bf15dd97a37432784f5751f37a40f"},{url:"assets/js/layout-Blog.e67c2189.js",revision:"7c29db3f76113415b3f4fa86b8b6b8fa"},{url:"assets/js/layout-Layout.60f5be12.js",revision:"e52e8629ac678533a5adf79f80fa6479"},{url:"assets/js/layout-NotFound.015fbfd6.js",revision:"416ba7933d4d60d112e3c75b9bda838d"},{url:"assets/js/layout-Slide.856601f4.js",revision:"f486c4de4472f4bda3cb1176dcef6c42"},{url:"assets/js/page--5b2d18b4.4a44899a.js",revision:"f31daa14a32b7c0eac67f3ff57994022"},{url:"assets/js/page-01-Markdown标题.aaf7a139.js",revision:"062146b4392a233ca89b6de26cf46b33"},{url:"assets/js/page-02-Markdown段落.a1e34a87.js",revision:"03703692533602f924583c239fb6beaa"},{url:"assets/js/page-03-Markdown列表.e1e83395.js",revision:"03ea7a1c11db3145a66310d841aa34d6"},{url:"assets/js/page-04-Markdown区块.650072fd.js",revision:"302fd71ad98cfaa75973f59b8d2ee795"},{url:"assets/js/page-05-Markdown代码.653ed1c7.js",revision:"e13f9d9d976c1a4d0c16ab685cfe2c6d"},{url:"assets/js/page-06-Markdown链接.67d7c42a.js",revision:"379c27eb48d971380a2c4e6713229c2f"},{url:"assets/js/page-07-Markdown图片.41198f07.js",revision:"6bbf2c4d332147a6bd7d0b243dbcabe8"},{url:"assets/js/page-AI悦创·算法.74552d97.js",revision:"ef42bc589a40fce43421cedc43b4a395"},{url:"assets/js/page-BlogHome.ef7b6bc4.js",revision:"340120ac7930b0d6af161b7b60945bb0"},{url:"assets/js/page-Markdown.9bc32660.js",revision:"a567cb1b111e2bd9de9c7e389dc8c10a"},{url:"assets/js/page-Projecthome.4e83426c.js",revision:"22b3389e4779bdd0580dc92e961dbbee"},{url:"assets/js/page-专栏目录.6ade19c4.js",revision:"495b0f8e8b742cb6a55d7bf45358c801"},{url:"assets/js/page-久远讲算法.dfec7726.js",revision:"2c14533c5798d434e09fd17525936613"},{url:"assets/js/page-关于团队.f84afd2f.js",revision:"02a29b7d73225a54f904c4dec32cb4ed"},{url:"assets/js/page-博客主页.b34a2f8d.js",revision:"b38204f686ee93b72713a9ddec4bff52"},{url:"assets/js/page-幻灯片页.c23a1bfb.js",revision:"957f2b5dbf20ff5ecdc910d7d47164c0"},{url:"assets/js/page-流沙团队.9025c085.js",revision:"2b7de880b11d34166edd07c10a434222"},{url:"assets/js/page-网站信息.ee0531f1.js",revision:"f36ff9640ec94b3a5492afdccdcea15f"},{url:"assets/js/vendors~flowchart.34a543e2.js",revision:"fbad8493c1e871c291cc4aff662b29e9"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1c671fee.js",revision:"021ee025cbef03d45d8567f929c0642c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.4b1359e2.js",revision:"0ce1c6578caeffffac28fef04cf21f71"},{url:"assets/js/vendors~layout-Layout.2adf26bb.js",revision:"c662a619e884675266c891fd70c7655c"},{url:"assets/js/vendors~mermaid.1fc2f53d.js",revision:"ef2c6401a3af54a6f382e1af918fd6cc"},{url:"assets/js/vendors~photo-swipe.9d913986.js",revision:"e35679f6ad3edf0c5bef15d56c13905c"},{url:"assets/js/vendors~reveal.d115cb01.js",revision:"ea1333ef1e555f753cdcb744367da627"},{url:"assets/js/vendors~waline.a290378d.js",revision:"9d9677fa5548f87c4e94742c2823bc0f"},{url:"ColumnImages/MarkdownBase/01-markdown-mark-white.svg",revision:"714357ca188c8d02e724381b5050e55e"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.3e94a45c.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/fonts/KaTeX_AMS-Regular.7bc59ee9.woff",revision:"7bc59ee9f9ad43040a2ff34a912bec13"},{url:"assets/fonts/KaTeX_AMS-Regular.92297720.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4c370560.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.096ac2cc.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/fonts/KaTeX_Fraktur-Bold.06e6c3f3.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/fonts/KaTeX_Fraktur-Bold.5ec2d705.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/fonts/KaTeX_Fraktur-Bold.8518f4fe.woff",revision:"8518f4fec3f73b37b3693f3625bc146b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.56d671ca.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/fonts/KaTeX_Fraktur-Regular.c5953fef.woff",revision:"c5953fefe37f48064e17b75ff607fc0d"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e78f1f02.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/fonts/KaTeX_Main-Bold.36af3e91.woff",revision:"36af3e91a84645afe0e40be8046fba86"},{url:"assets/fonts/KaTeX_Main-Bold.5c603567.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/fonts/KaTeX_Main-Bold.d94e53ed.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/fonts/KaTeX_Main-BoldItalic.addf8657.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ceb7b930.woff",revision:"ceb7b93007c7e338f635833a4259a14b"},{url:"assets/fonts/KaTeX_Main-BoldItalic.dde48012.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/fonts/KaTeX_Main-Italic.2bc9206b.woff",revision:"2bc9206b7e2d0c75941d4930b1990e49"},{url:"assets/fonts/KaTeX_Main-Italic.890a6b3f.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/fonts/KaTeX_Main-Italic.c24bf2da.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/fonts/KaTeX_Main-Regular.16df5fa9.woff",revision:"16df5fa99e77eff4b91a4f3423b761d4"},{url:"assets/fonts/KaTeX_Main-Regular.46b1ffa6.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/fonts/KaTeX_Main-Regular.d866ab9b.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/fonts/KaTeX_Math-BoldItalic.a562e8c1.woff",revision:"a562e8c1abe0de60ffc1f77ed9412327"},{url:"assets/fonts/KaTeX_Math-BoldItalic.bb40192b.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.cbf87238.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/fonts/KaTeX_Math-Italic.92281c86.woff",revision:"92281c86717a2642f166728a8973f3f9"},{url:"assets/fonts/KaTeX_Math-Italic.96c61839.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/fonts/KaTeX_Math-Italic.c359b8d5.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.26f259e4.woff",revision:"26f259e4e6c41f013a51f790e3a7dd0c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.95392fb8.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.cb7f745a.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/fonts/KaTeX_SansSerif-Italic.7de8e4ae.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9c330d9e.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/fonts/KaTeX_SansSerif-Italic.a8f101e8.woff",revision:"a8f101e81769f08428b1e01d4b04c033"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3ad86448.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/fonts/KaTeX_SansSerif-Regular.63e176e6.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/fonts/KaTeX_SansSerif-Regular.df1117b1.woff",revision:"df1117b1c61ba086c7c286b4132350d3"},{url:"assets/fonts/KaTeX_Script-Regular.1e0cfc32.woff",revision:"1e0cfc3296ecafedbd818c2dd8e42d44"},{url:"assets/fonts/KaTeX_Script-Regular.52316064.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/fonts/KaTeX_Size1-Regular.f8369ce8.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/fonts/KaTeX_Size2-Regular.90b50b45.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/fonts/KaTeX_Size4-Regular.70d01e49.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.099e00d5.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f005719.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f78c7d7.woff",revision:"2f78c7d76fe78153d0ca675b3923507d"},{url:"404.html",revision:"f95078319e28d445b428d7c49a6d9b26"},{url:"AboutTeam/index.html",revision:"e414d06dd925ea413c3c6958f445e086"},{url:"article/index.html",revision:"31e7db01e37b9d3e6534cea4066bbe76"},{url:"category/index.html",revision:"9f1e25d51cbd77749d8a69d253f925ed"},{url:"category/Markdown 基础/index.html",revision:"cdd0dcc28ad2893aeb07bbce7df7dcdb"},{url:"en/home/index.html",revision:"8790e7873ed3113af1fe55595a50cb93"},{url:"en/index.html",revision:"c64e127d710ada166fe8ba02b2cea059"},{url:"encrypt/index.html",revision:"f211d28e18c8acb785db46d5f6883390"},{url:"index.html",revision:"70d7eb277b87de51d7e615ee08111f30"},{url:"slide/index.html",revision:"d17f7918051ee3e6042bd9fcc21b6c90"},{url:"star/index.html",revision:"f2a3c055538f7985673b89e591d0cf95"},{url:"tag/index.html",revision:"0a2779167aeb7a30d98016c84191b884"},{url:"tag/Markdown/index.html",revision:"da5231119886af97c81f76949fe2b38b"},{url:"timeline/index.html",revision:"efb23f2029889ba1d6399b64c4b9e9b4"},{url:"WebSiteData/index.html",revision:"cc119d99939adb42c55ed6b12d3c240e"},{url:"zh/column/aiycsf/index.html",revision:"b833c3b3da97624ced4501ec5568b6f3"},{url:"zh/column/jysf/index.html",revision:"aa6f6807319504741f3f9c8d782bceeb"},{url:"zh/column/md/EightMarkdownform/index.html",revision:"6210af81dd2072ae004bf0054b1e77d0"},{url:"zh/column/md/FiveMarkdowncode/index.html",revision:"8b974de5a7d16363e09dadf77a8fad46"},{url:"zh/column/md/fourmarkdownblock/index.html",revision:"21fa6320885215457bd4672595d60fee"},{url:"zh/column/md/index.html",revision:"6df317950ba064a3e4eb6fdc7093d3b1"},{url:"zh/column/md/oneMarkdowntitle/index.html",revision:"3129b369138fb2234ce1c52b99013202"},{url:"zh/column/md/SevenMarkdownpictures/index.html",revision:"e246566435ffee95c8e5f020650356a7"},{url:"zh/column/md/SixMarkdownlink/index.html",revision:"953e575454e29e59ecec39e496513ce6"},{url:"zh/column/md/threeMarkdown_list/index.html",revision:"f70305e8f2dd2b6cd04b5b94f83fefc9"},{url:"zh/column/md/twoMarkdown_paragraph/index.html",revision:"c92fecf5aab74ed45e444326c5af6714"},{url:"zh/guide/index.html",revision:"57dcc6b651a4df26c05678fc14a24bfb"},{url:"zh/home/index.html",revision:"5a2cb727be7fadf52f6b599276911700"},{url:"zh/slides/index.html",revision:"4aed22bc17e61c2276d168262a96eae1"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"ColumnImages/jysfimg/xuesuanfala.png",revision:"541a8991a0ea1b72ecbfc797ed007723"},{url:"ColumnImages/MarkdownBase/01-markdown-mark-white.png",revision:"750d7c332e5a077ee8ee36cfd1318617"},{url:"ColumnImages/MarkdownBase/01/image-20211022133509452.png",revision:"7f375b8fd9dea9685916d8c0862b10eb"},{url:"ColumnImages/MarkdownBase/01/image-20211022145145089.png",revision:"e493d25a2540da75dddda2fd1a3b52b3"},{url:"ColumnImages/MarkdownBase/01/image-20211022150038645.png",revision:"4c56d44bad739da50b04d3b3d02378b7"},{url:"images/favicon.png",revision:"346e09471362f2907510a31812129cd2"},{url:"images/hero.png",revision:"d1fed5cb9d0a4c4269c3bcc4d74d9e64"},{url:"images/logo.png",revision:"080262e7c33826236e43d5fe214341d5"},{url:"images/公众号/gzh.jpg",revision:"2974d8b1e9ceb0879a5a0c3e2e4370f6"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
