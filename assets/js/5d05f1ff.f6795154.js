"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[3219],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(5675),a=(n(9231),n(4852));const i={title:"\u9759\u6001\u8d44\u6e90",order:7},l=void 0,o={unversionedId:"guide/basic/assets",id:"guide/basic/assets",title:"\u9759\u6001\u8d44\u6e90",description:"\u6846\u67b6\u9ed8\u8ba4\u5185\u7f6e\u4e86\u5904\u7406\u9759\u6001\u8d44\u6e90\u7684\u901a\u7528\u89c4\u5219\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5f00\u53d1\u8005\u65e0\u9700\u8bbe\u7f6e\u8d44\u6e90\u7684\u5904\u7406\u65b9\u5f0f\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u7684\u5904\u7406\u89c4\u5219\uff0c\u6846\u67b6\u7ed9\u51fa\u4e86\u4fbf\u6377\u65b9\u5f0f\u65b9\u4fbf\u5f00\u53d1\u8005\u5f15\u5165\u8d44\u6e90\u3002",source:"@site/docs/guide/basic/assets.md",sourceDirName:"guide/basic",slug:"/guide/basic/assets",permalink:"/docs/guide/basic/assets",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/assets.md",tags:[],version:"current",frontMatter:{title:"\u9759\u6001\u8d44\u6e90",order:7},sidebar:"docs",previous:{title:"\u6570\u636e\u52a0\u8f7d",permalink:"/docs/guide/basic/data-loader"},next:{title:"\u6570\u636e\u6a21\u62df Mock",permalink:"/docs/guide/basic/mock"}},p={},c=[{value:"\u57fa\u7840\u89c4\u5219",id:"\u57fa\u7840\u89c4\u5219",level:2},{value:"\u5728 JSX \u6587\u4ef6\u4e2d\u5f15\u5165",id:"\u5728-jsx-\u6587\u4ef6\u4e2d\u5f15\u5165",level:3},{value:"\u5728 CSS \u6587\u4ef6\u4e2d\u5f15\u5165",id:"\u5728-css-\u6587\u4ef6\u4e2d\u5f15\u5165",level:3},{value:"\u6307\u5b9a\u5904\u7406\u89c4\u5219",id:"\u6307\u5b9a\u5904\u7406\u89c4\u5219",level:2},{value:"URL \u5f15\u5165",id:"url-\u5f15\u5165",level:3},{value:"\u6587\u4ef6\u5185\u5bb9\u5f15\u5165",id:"\u6587\u4ef6\u5185\u5bb9\u5f15\u5165",level:3},{value:"public \u76ee\u5f55",id:"public-\u76ee\u5f55",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6846\u67b6\u9ed8\u8ba4\u5185\u7f6e\u4e86\u5904\u7406\u9759\u6001\u8d44\u6e90\u7684\u901a\u7528\u89c4\u5219\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5f00\u53d1\u8005\u65e0\u9700\u8bbe\u7f6e\u8d44\u6e90\u7684\u5904\u7406\u65b9\u5f0f\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u7684\u5904\u7406\u89c4\u5219\uff0c\u6846\u67b6\u7ed9\u51fa\u4e86\u4fbf\u6377\u65b9\u5f0f\u65b9\u4fbf\u5f00\u53d1\u8005\u5f15\u5165\u8d44\u6e90\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u89c4\u5219"},"\u57fa\u7840\u89c4\u5219"),(0,a.kt)("p",null,"\u6846\u67b6\u5185\u7f6e\u4e86\u9488\u5bf9\u4ee5\u4e0b\u8d44\u6e90\u7684\u5904\u7406\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56fe\u7247\u8d44\u6e90\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},".png"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".jpg"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".webp"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".jpeg"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".gif")),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u4f53\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},".woff"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".woff2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".ttf"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".eot")),(0,a.kt)("li",{parentName:"ul"},"svg \u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},".svg"))),(0,a.kt)("p",null,"\u4e0a\u8ff0\u8d44\u6e90\u6587\u4ef6\u540d\u9ed8\u8ba4\u4f1a\u7ecf\u8fc7 hash \u5904\u7406\uff0c\u5e76\u901a\u8fc7\u8d44\u6e90\u5730\u5740\u7684\u65b9\u5f0f\u52a0\u8f7d\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"./assets/background.png")," \u7ecf\u8fc7\u6784\u5efa\u5904\u7406\u540e\u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/background.ef5b6544.png"),"\uff09\u3002"),(0,a.kt)("p",null,"\u63a8\u8350\u5c06\u8fd9\u4e9b\u8d44\u6e90\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/assets/")," \u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"src\n\u251c\u2500\u2500 assets/\n\u2502 \u251c\u2500\u2500 logo.png\n\u2502 \u2514\u2500\u2500 background.png\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u6e90\u7801\u4e2d\u5f15\u5165\u8d44\u6e90\u4e86\u3002"),(0,a.kt)("h3",{id:"\u5728-jsx-\u6587\u4ef6\u4e2d\u5f15\u5165"},"\u5728 JSX \u6587\u4ef6\u4e2d\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import background from '@/assets/background.png';\n\nexport default function () {\n  return (\n    <img src={background} />\n  );\n}\n")),(0,a.kt)("h3",{id:"\u5728-css-\u6587\u4ef6\u4e2d\u5f15\u5165"},"\u5728 CSS \u6587\u4ef6\u4e2d\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  background-image: url('@/assets/background.png');\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8d44\u6e90\u5c3a\u5bf8\u5c0f\u4e8e 8kb\uff0c\u5219\u8fdb\u884c base64 \u8f6c\u7801\u5e76\u5185\u8054\u5230\u811a\u672c\u6216\u6837\u5f0f\u6587\u4ef6\u4e2d\u3002")),(0,a.kt)("h2",{id:"\u6307\u5b9a\u5904\u7406\u89c4\u5219"},"\u6307\u5b9a\u5904\u7406\u89c4\u5219"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5185\u7f6e\u89c4\u5219\u4e0d\u6ee1\u8db3\u7279\u5b9a\u573a\u666f\u7684\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u65b9\u5f0f\u5bf9\u8d44\u6e90\u8fdb\u884c\u5904\u7406"),(0,a.kt)("h3",{id:"url-\u5f15\u5165"},"URL \u5f15\u5165"),(0,a.kt)("p",null,"\u9664\u57fa\u7840\u89c4\u5219\u4e2d\u6307\u5b9a\u8d44\u6e90\u5916\uff0c\u5982\u679c\u8fd8\u5e0c\u671b\u901a\u8fc7\u8d44\u6e90\u5730\u5740\u7684\u65b9\u5f0f\u8fdb\u884c\u8d44\u6e90\u5904\u7406\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u6307\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import workletURL from 'extra-scalloped-border/worklet.js?url'\nCSS.paintWorklet.addModule(workletURL);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"?url")," \u7b49\u540c\u4e8e\u4e3a\u6307\u5b9a\u8d44\u6e90\u6307\u5b9a url-loader"),(0,a.kt)("h3",{id:"\u6587\u4ef6\u5185\u5bb9\u5f15\u5165"},"\u6587\u4ef6\u5185\u5bb9\u5f15\u5165"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"?raw")," \u540e\u7f00\u58f0\u660e\u5c06\u8d44\u6e90\u4f5c\u4e3a\u5b57\u7b26\u4e32\u5f15\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import txtContent from './text.txt?raw';\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"?raw")," \u7b49\u540c\u4e8e\u4e3a\u6307\u5b9a\u8d44\u6e90\u6307\u5b9a raw-loader"),(0,a.kt)("h2",{id:"public-\u76ee\u5f55"},"public \u76ee\u5f55"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u4f5c\u4e3a\u6846\u67b6\u9ed8\u8ba4\u7684\u9759\u6001\u8d44\u6e90\u76ee\u5f55\uff0c\u4e0d\u88ab\u6784\u5efa\u5de5\u5177\u8fdb\u884c\u7f16\u8bd1\u7684\u8d44\u6e90\u90fd\u53ef\u4ee5\u653e\u5728\u8be5\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon.ico")," \u6587\u4ef6\uff0c\u6211\u4eec\u5e76\u4e0d\u5e0c\u671b\u8be5\u6587\u4ef6\u540d\u7f16\u8bd1\uff08\u9ed8\u8ba4\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u540d\u5728\u7f16\u8bd1\u540e\u4f1a\u751f\u6210\u72ec\u7acb hash\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon.ico")," \u5e0c\u671b\u4fdd\u6301\u539f\u6709\u6587\u4ef6\u540d\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u8be5\u6587\u4ef6\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u4e0b\uff0c\u4f7f\u7528\u65f6\u5728 Document \u7ec4\u4ef6\u4e2d\u5f15\u7528\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'export default function Document() {\n  return (\n    <html>\n      <head>\n+       <link rel="icon" href="/favicon.ico" />\n      </head>\n      <body>\n        ...\n      </body>\n    </html>\n  );\n}\n')),(0,a.kt)("p",null,"\u53e6\u5916\u50cf\u4e0d\u88ab\u6e90\u7801\u5f15\u5165\u7684\u8d44\u6e90\u4e5f\u5b58\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u4e0b\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"robots.txt"),"\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public")," \u76ee\u5f55\u4e2d\u7684\u8d44\u6e90\u4f1a\u5728\u6784\u5efa\u9636\u6bb5\u5b8c\u6574\u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"outputDir")," \u6839\u76ee\u5f55\uff0c\u5e76\u4e14\u6587\u4ef6\u540d\u4e0d\u53d8\uff0c\u5728\u90e8\u7f72\u65f6\u5fc5\u987b\u628a\u8d44\u6e90\u6587\u4ef6\u653e\u5728\u670d\u52a1\u5668\u8d44\u6e90\u6839\u76ee\u5f55\u4e0b\u3002\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"public/icon.svg")," \u6587\u4ef6\u5e94\u8be5\u5728\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"http:example.com/icon.svg")," \u8fdb\u884c\u8bbf\u95ee\uff09"))))}d.isMDXComponent=!0}}]);