"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[4120],{4852:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(9231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||p;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<p;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=a(5675),r=(a(9231),a(4852));const p={title:"\u517c\u5bb9 Rax",order:129},i=void 0,o={unversionedId:"guide/advanced/rax-compat",id:"guide/advanced/rax-compat",title:"\u517c\u5bb9 Rax",description:"\u6846\u67b6\u63d0\u4f9b\u4e86 rax-compat \u4ee5\u652f\u6301 rax.js \u5230 react \u7684\u517c\u5bb9\u3002",source:"@site/docs/guide/advanced/rax-compat.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/rax-compat",permalink:"/docs/guide/advanced/rax-compat",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/rax-compat.md",tags:[],version:"current",frontMatter:{title:"\u517c\u5bb9 Rax",order:129},sidebar:"docs",previous:{title:"\u56fd\u9645\u5316",permalink:"/docs/guide/advanced/i18n"},next:{title:"\u72b6\u6001\u7ba1\u7406",permalink:"/docs/guide/advanced/store"}},l={},c=[{value:"\u63d2\u4ef6\u5b89\u88c5\u4e0e\u4f7f\u7528",id:"\u63d2\u4ef6\u5b89\u88c5\u4e0e\u4f7f\u7528",level:2},{value:"<code>rax-compat</code> \u517c\u5bb9\u6027",id:"rax-compat-\u517c\u5bb9\u6027",level:2},{value:"Rax \u6838\u5fc3 API",id:"rax-\u6838\u5fc3-api",level:3},{value:"Appear \u548c Disappear \u4e8b\u4ef6\u7684\u5904\u7406",id:"appear-\u548c-disappear-\u4e8b\u4ef6\u7684\u5904\u7406",level:3},{value:"\u6837\u5f0f\u7684\u5904\u7406",id:"\u6837\u5f0f\u7684\u5904\u7406",level:3},{value:"DOM \u5c5e\u6027\u5dee\u5f02",id:"dom-\u5c5e\u6027\u5dee\u5f02",level:3},{value:"\u4e8b\u4ef6\u5dee\u5f02",id:"\u4e8b\u4ef6\u5dee\u5f02",level:3}],m={toc:c},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/packages/rax-compat"},"rax-compat")," \u4ee5\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/rax"},"rax.js")," \u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react"},"react")," \u7684\u517c\u5bb9\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u901a\u8fc7\u5bf9 react API \u7684\u5c01\u88c5\uff0c\u5728\u5185\u90e8\u62b9\u5e73\u4e86 rax.js \u4e0e react \u4f7f\u7528\u4e0a\u7684\u5927\u90e8\u5206\u5dee\u5f02\uff0c\u540c\u65f6\u5bfc\u51fa\u4e86\u4e0e rax.js \u4e00\u81f4\u7684 API \u80fd\u529b\uff0c\u901a\u8fc7\u5c06\u6e90\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"rax")," \u5f15\u5165\u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"rax-compat"),"\uff0c\u53ef\u4ee5\u6865\u63a5\u4e0a\u7edd\u5927\u90e8\u5206 react \u8fd0\u884c\u65f6\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5b89\u88c5\u4e0e\u4f7f\u7528"},"\u63d2\u4ef6\u5b89\u88c5\u4e0e\u4f7f\u7528"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5f15\u5165\u63d2\u4ef6 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ice/plugin-rax-compat"},"@ice/plugin-rax-compat")," \u6765\u5b8c\u6210\u5728 ice.js \u4e2d\u8fd0\u884c Rax \u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-rax-compat --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"+ import compatRax from '@ice/plugin-rax-compat';\n\nexport default defineConfig(() => ({\n  plugins: [\n+    compatRax({ inlineStyle: true }), // \u662f\u5426\u5f00\u542f\u5185\u8054\u6837\u5f0f\uff0c\u8fd9\u91cc\u662f\u5f00\u542f\n  ],\n}));\n")),(0,r.kt)("h2",{id:"rax-compat-\u517c\u5bb9\u6027"},(0,r.kt)("inlineCode",{parentName:"h2"},"rax-compat")," \u517c\u5bb9\u6027"),(0,r.kt)("h3",{id:"rax-\u6838\u5fc3-api"},"Rax \u6838\u5fc3 API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u5b9e\u73b0\u4e86\u6240\u6709\u7684 Rax \u6838\u5fc3 API\uff0c\u5177\u4f53\u5217\u8868\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://rax.js.org/docs/api/DOM"},"Rax \u5b98\u7f51"),"\u3002"),(0,r.kt)("h3",{id:"appear-\u548c-disappear-\u4e8b\u4ef6\u7684\u5904\u7406"},"Appear \u548c Disappear \u4e8b\u4ef6\u7684\u5904\u7406"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"onAppear")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"onDisapper")," \u4e8b\u4ef6\u53ef\u4ee5\u76d1\u542c\u5143\u7d20\u7684\u53ef\u89c1\u6027\u53d8\u5316\uff0cRax DSL \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"appear-polyfill")," \u6765\u5b9e\u73b0\u8fd9\u90e8\u5206\u80fd\u529b\uff0c\u4f46\u662f React Runtime \u5e76\u6ca1\u6709\u8fd9\u90e8\u5206\u80fd\u529b\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u4f1a\u5728 React Runtime \u4e2d\u505a\u517c\u5bb9\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u4f60\u4f9d\u65e7\u53ef\u4ee5\u50cf\u4e4b\u524d\u4e00\u6837\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"onAppear")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"onDisapper")," \u56de\u8c03\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createElement } from 'rax';\n\nfunction App {\n  return (<div\n    onAppear={() => {\n      alert('appear')\n    }}\n    onDisappear={() => {\n      alert('disappear')\n    }}\n  >\n    RaxApp\n  </div>)\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528 Rax \u517c\u5bb9\u6a21\u5f0f\u65e0\u9700\u505a\u4efb\u4f55\u6539\u9020\uff0c\u4e5f\u65e0\u9700\u624b\u52a8\u5f15\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/appear-polyfill"},"appear-polyfill"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"rax-compat")," \u5df2\u7ecf\u5e2e\u4f60\u5904\u7406\u6389\u4e86\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7eaf React \u7ec4\u4ef6\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<VisibilityChange />"),"\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/basic/appear"},"\u5143\u7d20\u53ef\u89c1"),"\u3002"),(0,r.kt)("h3",{id:"\u6837\u5f0f\u7684\u5904\u7406"},"\u6837\u5f0f\u7684\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inlineStyle"),"\uff1a\n\u5f53\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"@ice/plugin-rax-compat")," \u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"inlineStyle")," \u53c2\u6570\u65f6\uff0c\u9664\u4e86\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},".module.css")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u4f1a\u4f7f\u7528 CSS Modules \u6a21\u5f0f\u5916\uff0c\u5176\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},".css")," \u6587\u4ef6\u90fd\u4f1a\u88ab\u8f6c\u6362\u6210 JavaScript \u5bf9\u8c61\u3002")),(0,r.kt)("p",null,"eg\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/pages/home.css"',title:'"src/pages/home.css"'},".foo {\n  color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/home.tsx"',title:'"src/pages/home.tsx"'},"import { createElement } from 'rax';\nimport styles from './home.css';\n\nconsole.log(styles); // { foo: { color: 'red' } }\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," \u7b49\u5c5e\u6027\u6ca1\u6709\u5355\u4f4d\u65f6\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"width: 300"),"\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"inlineStyle")," \u6a21\u5f0f\u4e0b\u4f1a\u81ea\u52a8\u8865\u9f50 ",(0,r.kt)("inlineCode",{parentName:"p"},"rpx")," \u5355\u4f4d\u5e76\u6700\u7ec8\u8f6c\u5316\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"vw"),"\uff0c\u540c\u7406\uff0c\u5199\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"rpx")," \u5355\u4f4d\u7684\u503c\u4e5f\u4e00\u6837\u4f1a\u88ab\u8f6c\u5316\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"vw"),"\u3002"),(0,r.kt)("h3",{id:"dom-\u5c5e\u6027\u5dee\u5f02"},"DOM \u5c5e\u6027\u5dee\u5f02"),(0,r.kt)("p",null,"\u5728 React \u4e2d\uff0c\u539f\u751f\u6807\u7b7e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u662f\u5b58\u5728\u767d\u540d\u5355\u7684\uff0c\u800c rax.js \u4e2d\u6ca1\u6709\u3002\u8fd9\u5bfc\u81f4\u4f7f\u7528\u975e dataset \u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u5728 React \u4e2d\u4f1a\u88ab\u5ffd\u7565\uff08Dev \u9636\u6bb5\u6709\u8b66\u544a\uff09\uff0c\u4ece\u800c\u65e0\u6cd5\u4ece\u771f\u5b9e\u8282\u70b9\u7684 DOM \u5bf9\u8c61\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"getAttribute()")," \u65b9\u6cd5\u83b7\u53d6\u3002\u5982\u679c\u7528\u4e86\u8fd9\u4e9b\u975e\u6807\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u63a8\u8350\u4f7f\u7528 dataset(",(0,r.kt)("inlineCode",{parentName:"p"},"data-*"),") \u6765\u6807\u8bc6\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u5dee\u5f02"},"\u4e8b\u4ef6\u5dee\u5f02"),(0,r.kt)("p",null,"React \u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/events.html"},"\u5408\u6210\u4e8b\u4ef6"),"\u673a\u5236\u5bf9\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u7684\u4e8b\u4ef6\u8fdb\u884c\u4ee3\u7406\uff0c\u800c rax.js \u5219\u662f\u901a\u8fc7\u8282\u70b9(EventTarget)\u539f\u751f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," \u65b9\u6cd5\u5c06\u4e8b\u4ef6\u4e0e\u5904\u7406\u51fd\u6570\u7ed1\u5b9a\u5728\u4e00\u8d77\u3002\u5728\u4f60\u6e05\u695a\u5730\u4e86\u89e3 Rax \u4e0e React \u7684\u4e8b\u4ef6\u5b9e\u73b0\u5dee\u5f02\u4e4b\u524d\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528 ref \u8bbf\u95ee\u771f\u5b9e DOM \u8282\u70b9\u6765\u5904\u7406\u539f\u751f\u4e8b\u4ef6\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u672a\u9884\u6599\u7684\u884c\u4e3a\u3002"))}d.isMDXComponent=!0}}]);