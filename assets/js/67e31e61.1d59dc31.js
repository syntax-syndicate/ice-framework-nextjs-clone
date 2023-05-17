"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[7435],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(9231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(5675),l=(n(9231),n(4852));const r={title:"\u90e8\u7f72"},i=void 0,o={unversionedId:"guide/advanced/deploy",id:"guide/advanced/deploy",title:"\u90e8\u7f72",description:"\u524d\u7aef\u4ee3\u7801\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u4f1a\u6267\u884c npm build \u547d\u4ee4\u8fdb\u884c\u9879\u76ee\u6784\u5efa\u3002\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u9700\u8981\u628a js/css/html \u7b49\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230\u670d\u52a1\u5668\u6216\u8005\u53d1\u5e03\u5230 CDN \u4e0a\u3002",source:"@site/docs/guide/advanced/deploy.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/deploy",permalink:"/docs/guide/advanced/deploy",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/deploy.md",tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72"},sidebar:"docs",previous:{title:"\u4ee3\u7801\u5206\u5305",permalink:"/docs/guide/advanced/code-splitting"},next:{title:"\u56fd\u9645\u5316",permalink:"/docs/guide/advanced/i18n"}},p={},c=[{value:"\u8d44\u6e90\u53d1\u5e03",id:"\u8d44\u6e90\u53d1\u5e03",level:2},{value:"CDN \u53d1\u5e03",id:"cdn-\u53d1\u5e03",level:3},{value:"Nginx",id:"nginx",level:3},{value:"\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u670d\u52a1",id:"\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u670d\u52a1",level:2},{value:"\u5168\u5c40\u5b89\u88c5 surge",id:"\u5168\u5c40\u5b89\u88c5-surge",level:4},{value:"\u8fd0\u884c surge",id:"\u8fd0\u884c-surge",level:4},{value:"\u540e\u7aef\u5e94\u7528\u96c6\u6210",id:"\u540e\u7aef\u5e94\u7528\u96c6\u6210",level:2},{value:"Node.js \u5e94\u7528",id:"nodejs-\u5e94\u7528",level:3},{value:"\u521d\u59cb\u5316 Koa \u5e94\u7528",id:"\u521d\u59cb\u5316-koa-\u5e94\u7528",level:4},{value:"\u5b9a\u4e49\u89c6\u56fe",id:"\u5b9a\u4e49\u89c6\u56fe",level:4},{value:"\u6e32\u67d3\u89c6\u56fe",id:"\u6e32\u67d3\u89c6\u56fe",level:4},{value:"\u8fd0\u884c\u793a\u4f8b",id:"\u8fd0\u884c\u793a\u4f8b",level:4},{value:"Java \u5e94\u7528",id:"java-\u5e94\u7528",level:3},{value:"resources",id:"resources",level:4},{value:"Controller",id:"controller",level:4},{value:"\u5c0f\u7a0b\u5e8f\u53d1\u5e03",id:"\u5c0f\u7a0b\u5e8f\u53d1\u5e03",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u9759\u6001\u8d44\u6e90\u5728\u975e\u6839\u76ee\u5f55\u6216 CDN",id:"\u9759\u6001\u8d44\u6e90\u5728\u975e\u6839\u76ee\u5f55\u6216-cdn",level:3},{value:"\u90e8\u7f72\u7684 HTML \u5728\u975e\u6839\u76ee\u5f55",id:"\u90e8\u7f72\u7684-html-\u5728\u975e\u6839\u76ee\u5f55",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u524d\u7aef\u4ee3\u7801\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u4f1a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm build")," \u547d\u4ee4\u8fdb\u884c\u9879\u76ee\u6784\u5efa\u3002\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u9700\u8981\u628a js/css/html \u7b49\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u5230\u670d\u52a1\u5668\u6216\u8005\u53d1\u5e03\u5230 CDN \u4e0a\u3002"),(0,l.kt)("h2",{id:"\u8d44\u6e90\u53d1\u5e03"},"\u8d44\u6e90\u53d1\u5e03"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u535a\u5ba2\u3001\u5b98\u7f51\u7b49\u9759\u6001\u5e94\u7528\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\uff1a"),(0,l.kt)("h3",{id:"cdn-\u53d1\u5e03"},"CDN \u53d1\u5e03"),(0,l.kt)("p",null,"\u63a8\u8350\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/oss"},"\u963f\u91cc\u4e91 OSS")," \u670d\u52a1\u8fdb\u884c\u975e\u8986\u76d6\u5f0f\u53d1\u5e03\uff0c\u6bcf\u4e2a\u7248\u672c\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"x.y.z")," \u7684\u6587\u4ef6\u5939\uff0c\u7136\u540e\u5c06\u6574\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u76ee\u5f55\u590d\u5236\u8fdb\u53bb\uff0c\u63a5\u7740\u5c31\u53ef\u4ee5\u901a\u8fc7 url \u8bbf\u95ee\u8fd9\u4e9b CDN \u8d44\u6e90\u4e86\u3002"),(0,l.kt)("h3",{id:"nginx"},"Nginx"),(0,l.kt)("p",null,"\u628a\u6784\u5efa\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u8d44\u6e90\u590d\u5236\u5230\u670d\u52a1\u5668\u5bf9\u5e94\u76ee\u5f55\u4e0b\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u7684 Nginx \u914d\u7f6e\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u542f\u52a8 ",(0,l.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," \u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n  root   /www/build;\n  # \u8bbf\u95ee localhost:3000/a \u4f9d\u6b21\u67e5\u627e /www/build/a\u3001/www/build/a/index.html\u3001/www/build/404.html\n  try_files $uri $uri/ 404.html;\n}\n")),(0,l.kt)("h2",{id:"\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u670d\u52a1"},"\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u670d\u52a1"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://surge.sh/"},"surge")," \u4e3a\u4f8b\u3002"),(0,l.kt)("h4",{id:"\u5168\u5c40\u5b89\u88c5-surge"},"\u5168\u5c40\u5b89\u88c5 surge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global surge\n")),(0,l.kt)("h4",{id:"\u8fd0\u884c-surge"},"\u8fd0\u884c surge"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ice-demo")," \u9879\u76ee\u540d\uff0cice.js \u9879\u76ee\u9ed8\u8ba4\u6784\u5efa\u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ice-demo/build\n# \u542f\u52a8 surge \u670d\u52a1\n$ surge\n")),(0,l.kt)("p",null,"\u4f9d\u6b21\u786e\u8ba4\u8d26\u6237\uff0c projectPath\uff0c domain \u7b49\u4fe1\u606f\uff0c\u7b49\u5f85\u4e0a\u4f20\u751f\u6548\u5373\u53ef\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://surge.sh/"},"surge")," \u5b98\u65b9\u8bf4\u660e"),(0,l.kt)("p",null,"\u5176\u4ed6\u540c\u7c7b\u4ea7\u54c1\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.netlify.com/"},"netlify"))),(0,l.kt)("h2",{id:"\u540e\u7aef\u5e94\u7528\u96c6\u6210"},"\u540e\u7aef\u5e94\u7528\u96c6\u6210"),(0,l.kt)("h3",{id:"nodejs-\u5e94\u7528"},"Node.js \u5e94\u7528"),(0,l.kt)("h4",{id:"\u521d\u59cb\u5316-koa-\u5e94\u7528"},"\u521d\u59cb\u5316 Koa \u5e94\u7528"),(0,l.kt)("p",null,"\u65b0\u5efa\u9879\u76ee\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"ice-node-koa"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir ice-node-koa && cd ice-node-koa\n$ npm init\n$ npm i ejs koa koa-logger koa-views --save\n")),(0,l.kt)("h4",{id:"\u5b9a\u4e49\u89c6\u56fe"},"\u5b9a\u4e49\u89c6\u56fe"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"views/index.ejs"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />\n    <meta name="viewport" content="width=device-width" />\n    <title>ICE Design Lite</title>\n    <link rel="shortcut icon" href="<%= publicPath %>/favicon.png" />\n    <link href="<%= publicPath %>/css/index.css" rel="stylesheet" />\n  </head>\n\n  <body>\n    <div id="ice-container"></div>\n    <script type="text/javascript" src="<%= publicPath %>/js/index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h4",{id:"\u6e32\u67d3\u89c6\u56fe"},"\u6e32\u67d3\u89c6\u56fe"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"app.js"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const views = require('koa-views');\nconst path = require('path');\nconst Koa = require('koa');\n\nconst app = (module.exports = new Koa());\n\napp.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));\n\napp.use(async function (ctx) {\n  await ctx.render('index', { publicPath: 'http://localhost:3000/' });\n});\n\nconst port = 3000;\napp.listen(port).then(() => console.log(`Listening on http:localhost:${port}`));\n")),(0,l.kt)("p",null,"\u793a\u4f8b\u517c\u5bb9\u5355\u9875\u5e94\u7528\u7684 HashRouter \u548c BrowserRouter\uff0c\u5982\u591a\u9875\u5e94\u7528\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koajs/examples"},"https://github.com/koajs/examples")," \u4e2d blog \u793a\u4f8b\u914d\u7f6e\u8def\u7531"),(0,l.kt)("h4",{id:"\u8fd0\u884c\u793a\u4f8b"},"\u8fd0\u884c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ node app.js\nListening on http:localhost:3000\n")),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")),(0,l.kt)("h3",{id:"java-\u5e94\u7528"},"Java \u5e94\u7528"),(0,l.kt)("h4",{id:"resources"},"resources"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"/velocity/layout/index.vm"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />\n    <meta name="viewport" content="width=device-width" />\n    <title>ICE Design Lite</title>\n    <link rel="shortcut icon" href="$!publicPath/favicon.png" />\n    <link href="$!publicPath/css/index.css" rel="stylesheet" />\n  </head>\n\n  <body>\n    <div id="ice-container"></div>\n    <script type="text/javascript" src="$!publicPath/js/index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h4",{id:"controller"},"Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/")\n@VelocityLayout("/velocity/layout/index.vm")\npublic String index(Model model) {\n  model.addAttribute(publicPath, jsConfig.get(publicPath));\n  return "index";\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'\u793a\u4f8b\u5c55\u793a\u7684\u662f HashRouter \u8def\u7531\uff0c\u5982\u679c\u4e3a BrowserRouter\uff0c\u5efa\u8bae\u6539\u4e3a @GetMapping(value = { "/**" }) \u5b9e\u73b0\u524d\u7aef fallback')),(0,l.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u53d1\u5e03"},"\u5c0f\u7a0b\u5e8f\u53d1\u5e03"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," \u547d\u4ee4\u5b8c\u6210\u6784\u5efa\u540e\uff0c\u6309\u7167\u547d\u4ee4\u884c\u63d0\u793a\u4f7f\u7528\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u6253\u5f00\u4ea7\u7269\u76ee\u5f55\u3002\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u9879\u76ee\u9875\u9762\u627e\u5230\u300e\u4e0a\u4f20\u300f\u6309\u94ae\u5373\u53ef\u4e0a\u4f20\u5c0f\u7a0b\u5e8f\u3002\u7136\u540e\u8fdb\u5165\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u8fdb\u884c\u5c0f\u7a0b\u5e8f\u7684\u63d0\u4ea4\u5ba1\u6838\u53ca\u53d1\u5e03\u5373\u53ef\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u6587\u6863\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8D%8F%E5%90%8C%E5%B7%A5%E4%BD%9C"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u534f\u540c\u5de5\u4f5c\u548c\u53d1\u5e03")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opendocs.alipay.com/mini/introduce/release"},"\u963f\u91cc\u5c0f\u7a0b\u5e8f\u63d0\u5ba1\u3001\u53d1\u5e03\u4e0e\u8fd0\u8425")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u9759\u6001\u8d44\u6e90\u5728\u975e\u6839\u76ee\u5f55\u6216-cdn"},"\u9759\u6001\u8d44\u6e90\u5728\u975e\u6839\u76ee\u5f55\u6216 CDN"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 js\u3001css\u3001\u56fe\u7247\u3001\u5b57\u4f53\u7b49\u8d44\u6e90\u4e0d\u5728\uff0c\u8fd9\u65f6\u9700\u8981\u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"../basic/config#publicpath"},"publicPath")," \u7684\u503c\u4e3a\u4f60\u7684\u9759\u6001\u8d44\u6e90\u6240\u5728\u7684\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"\u90e8\u7f72\u7684-html-\u5728\u975e\u6839\u76ee\u5f55"},"\u90e8\u7f72\u7684 HTML \u5728\u975e\u6839\u76ee\u5f55"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u672c\u5730\u5f00\u53d1\u7684\u65f6\u5019\u6709\u4e00\u4e2a\u8def\u7531\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"/home"),"\uff0c\u751f\u4ea7\u73af\u5883\u4e0b\u4f60\u628a\u5e94\u7528\u90e8\u7f72\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"/abc/")," \u4e0b\uff0c\u7136\u540e\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"/abc/home"),"\uff0c\u5c31\u4f1a\u51fa\u73b0\u8def\u7531\u4e0d\u5339\u914d\uff0c\u663e\u793a\u7a7a\u767d\u9875\u9762\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u8fd9\u65f6\u4f60\u9700\u8981\u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"../basic/app#basename"},"basename")," \u89e3\u51b3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./src/app.ts"',title:'"./src/app.ts"'},"import { defineAppConfig } from 'ice';\n\nexport default defineAppConfig(() => ({\n  router: {\n    basename: '/abc',\n  },\n}));\n")))}d.isMDXComponent=!0}}]);