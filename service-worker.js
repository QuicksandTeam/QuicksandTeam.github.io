if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const c=e=>s(e,d),b={module:{uri:d},exports:r,require:c};a[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"流沙团队"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.5af0cbc0.js",revision:"2b04ad57db8ae969b7e89903ac74306e"},{url:"assets/404.html.6f4a70c9.js",revision:"40a9e02ac94789ba69fb11f8000daaf2"},{url:"assets/404.html.6fc8fa40.js",revision:"7f84435dfc3aca3657405a41164a654b"},{url:"assets/AboutTeam.html.1024e3bf.js",revision:"2247a90814101d2afd89f6c75b93aa14"},{url:"assets/AboutTeam.html.e282d626.js",revision:"d9eddf0bcbe9a0736a9b763b16224b28"},{url:"assets/app.9cba5f51.js",revision:"59dc562c751c27ef44991810fe4a7f05"},{url:"assets/article1.html.4af10a9a.js",revision:"5030cc0fd8c6ca802df8f9bdaa3bfe31"},{url:"assets/article1.html.834a4650.js",revision:"11a6d54e3d08f42152a6810d13f6af8f"},{url:"assets/article9.html.b6cf78bd.js",revision:"63234cc84dc1f9c29e4a7fdede632106"},{url:"assets/article9.html.f73f1702.js",revision:"0a91321b08bd7a6f1d237f5f5d73ef23"},{url:"assets/Blog.23bbb335.js",revision:"f56622a2262e9c9320087b9b6d31c92f"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/home.html.b6d06db7.js",revision:"0b5bc110bf76274b6a65cbe6b6922f4e"},{url:"assets/home.html.db58b6f5.js",revision:"f9e033ffd94c1799824a1f9f40dd1403"},{url:"assets/index.html.162edb25.js",revision:"6cc62f69f8e86783858cb35222aad952"},{url:"assets/index.html.1c0c6410.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.37794058.js",revision:"3a3f32c04dc8f0f21357a35bb4c28299"},{url:"assets/index.html.3ea12c4d.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.4492cf84.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.4d475b9a.js",revision:"dbb38db206540481ebf662fff00e3554"},{url:"assets/index.html.56773c4d.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.5839fda4.js",revision:"67372335a688607889e85e50958c14d6"},{url:"assets/index.html.58eb3e5f.js",revision:"12cd5c7f25da5e24c256478fa937bf24"},{url:"assets/index.html.69f42dc1.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.740e8cf4.js",revision:"c81314689098ac96db3430b4f82cdbd1"},{url:"assets/index.html.7449449f.js",revision:"04bbbc40392f2ac8cc543690a1869dfd"},{url:"assets/index.html.7d46ffcb.js",revision:"0ba050f1ccc4554c0f5c74b6cc2db6d9"},{url:"assets/index.html.830f6f35.js",revision:"a3d444586794559d88d5239163236b0a"},{url:"assets/index.html.8eca30e1.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.ae1a27b7.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.afc5158a.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.b5ba2449.js",revision:"97ff2ff413b2a8506a7a09b09b3bcbe2"},{url:"assets/index.html.b94fa78e.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.ba0a202a.js",revision:"ac584fb6a611063a69961d8f94ef5cfb"},{url:"assets/index.html.c17cfe80.js",revision:"767f7e0a5ca5570dae2d683200a351bc"},{url:"assets/index.html.d36c453e.js",revision:"e436b1d9bbd93567fc4c3c105359ad0d"},{url:"assets/index.html.db3d5e15.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.e6727f75.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.f193d398.js",revision:"d35b3de5de05724ffeef497cfe62ca4b"},{url:"assets/index.html.f203dd92.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.f8676671.js",revision:"747d42f13d71b64affa4a73b056bda7f"},{url:"assets/index.html.fbc64f50.js",revision:"a5a06ab7c733e21c2c59d3744ef27e15"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/Layout.2274234e.js",revision:"998feb99872205acd629e37534f9ef17"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/photoswipe.esm.218074cd.js",revision:"46b7df7a8cdd49d4b0b5ca9b2abb218b"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"835fe5d11b24b0dc2193b11c893d234c"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.c134a7d2.js",revision:"21f27859065c3a9a6c553959ad4c13d9"},{url:"assets/Slide.89320436.js",revision:"031385e7792dd12c11f6c818368c8428"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.2e0ea530.css",revision:"36b3d750749748bc0f2e9add5b0d3e08"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/baidu.js",revision:"295f29796007c58b9186801ebd659b94"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"9960b5ff47405cfe97cea131cc1bbab9"},{url:"404.html",revision:"89dceb5cd26a7622597629cd511c3cef"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
