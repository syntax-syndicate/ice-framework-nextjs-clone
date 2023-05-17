"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[5343],{4852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(5675),a=(t(9231),t(4852));const o={title:"\u6570\u636e\u6a21\u62df Mock",order:7},i=void 0,p={unversionedId:"guide/basic/mock",id:"guide/basic/mock",title:"\u6570\u636e\u6a21\u62df Mock",description:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002",source:"@site/docs/guide/basic/mock.md",sourceDirName:"guide/basic",slug:"/guide/basic/mock",permalink:"/docs/guide/basic/mock",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/mock.md",tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u6a21\u62df Mock",order:7},sidebar:"docs",previous:{title:"\u9759\u6001\u8d44\u6e90",permalink:"/docs/guide/basic/assets"},next:{title:"\u6784\u5efa\u65f6\u6e32\u67d3 SSG",permalink:"/docs/guide/basic/ssg"}},s={},l=[{value:"\u76ee\u5f55\u7ea6\u5b9a",id:"\u76ee\u5f55\u7ea6\u5b9a",level:2},{value:"\u7f16\u5199 Mock \u63a5\u53e3",id:"\u7f16\u5199-mock-\u63a5\u53e3",level:2},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u5173\u95ed Mock",id:"\u5173\u95ed-mock",level:2},{value:"\u4f7f\u7528 Mock.js",id:"\u4f7f\u7528-mockjs",level:2},{value:"\u5904\u7406\u8bf7\u6c42\u6570\u636e",id:"\u5904\u7406\u8bf7\u6c42\u6570\u636e",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002")),(0,a.kt)("p",null,"\u5728\u524d\u540e\u7aef\u5206\u79bb\u7684\u5f00\u53d1\u4e2d\uff0cMock \u6570\u636e\u662f\u524d\u7aef\u5f00\u53d1\u4e2d\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u524d\u7aef\u53ef\u4ee5\u4e0d\u5fc5\u5f3a\u4f9d\u8d56\u540e\u7aef\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u7ea6\u5b9a\u597d\u5bf9\u5e94\u7684\u6570\u636e\u63a5\u53e3\uff0c\u524d\u7aef\u53ef\u4ee5\u901a\u8fc7 Mock \u6a21\u62df\u6570\u636e\u5148\u884c\u5f00\u53d1\uff0c\u5728\u540e\u7aef\u63a5\u53e3\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u53ea\u9700\u8981\u5207\u6362\u5bf9\u5e94\u7684\u63a5\u53e3\u5730\u5740\u5373\u53ef\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u9879\u76ee\u7684\u540c\u6b65\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"ice.js \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684 Mock \u65b9\u6848\uff0c\u652f\u6301 CRUD \u7b49\u64cd\u4f5c\uff0c\u5728\u542f\u52a8\u672c\u5730\u8c03\u8bd5\u65f6\u4f1a\u81ea\u52a8\u542f\u7528 Mock \u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ea6\u5b9a"},"\u76ee\u5f55\u7ea6\u5b9a"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"/mock")," \u76ee\u5f55\uff0c\u5e76\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts")," \u6587\u4ef6\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"mock")," \u670d\u52a1\u6587\u4ef6\u3002\u6bd4\u5982\u6709\u4ee5\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"\u251c\u2500\u2500 mock\n|  \u251c\u2500\u2500 index.ts\n|  \u2514\u2500\u2500 user.ts\n\u251c\u2500\u2500 src\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mock")," \u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"user.ts")," \u4f1a\u88ab\u8bc6\u522b\u4e3a Mock \u670d\u52a1\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e9b\u6587\u4ef6\u4e0d\u9700\u8981\u88ab mock \u670d\u52a1\u89e3\u6790\uff0c\u53ef\u4ee5\u901a\u8fc7\u5de5\u7a0b\u914d\u7f6e\u8fdb\u884c\u81ea\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},'import { defineConfig } from \'@ice/app\';\n\nexport default defineConfig(() => ({\n  mock: {\n    // \u5ffd\u7565 mock \u76ee\u5f55\u4e2d custom \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4ee5\u53ca api.ts \u6587\u4ef6\n    exclude: ["custom/**", "api.ts"]\n  },\n}));\n')),(0,a.kt)("h2",{id:"\u7f16\u5199-mock-\u63a5\u53e3"},"\u7f16\u5199 Mock \u63a5\u53e3"),(0,a.kt)("p",null,"\u5728 mock \u670d\u52a1\u6587\u4ef6\u4e2d\u5199\u5165\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./mock/user.ts"',title:'"./mock/user.ts"'},"export default {\n  'GET /api/users': [\n    { name: 'foo', id: 0 },\n    { name: 'bar', id: 1 },\n  ],\n}\n")),(0,a.kt)("p",null,"\u542f\u52a8\u8c03\u8bd5\u670d\u52a1\u540e\uff0c\u5047\u8bbe\u542f\u52a8\u7684\u7aef\u53e3\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"3000"),"\uff0c\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u91cc\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000/api/users"},"http://127.0.0.1:3000/api/users")," \u5373\u53ef\u770b\u5230\u63a5\u53e3\u8fd4\u56de\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u6cd5"},"\u8bf7\u6c42\u65b9\u6cd5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS")," \u8bf7\u6c42\u65b9\u6cd5\u3002\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  // \u5f53 HTTP \u8bf7\u6c42\u65b9\u6cd5\u662f GET\uff0c\u53ef\u4ee5\u7701\u7565\u8bf7\u6c42\u65b9\u6cd5\n  '/api/users': [{ name: 'foo', id: 1 }, { name: 'bar', id: 2 }],\n  // \u7b49\u540c\u4e8e\u4e0a\u9762\u7684\u5199\u6cd5\n  'GET /api/users': [{ name: 'foo', id: 1 }, { name: 'bar', id: 2 }],\n\n  'POST /api/user': { users: [1, 2] },\n\n  'DELETE /api/users/1': { name: 'foo' },\n}\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  // \u8fd4\u56de\u503c\u662f String \u7c7b\u578b\n  'GET /api/name': 'foo',\n  // \u8fd4\u56de\u503c Array \u7c7b\u578b \n 'POST /api/users': [\n    { name: 'foo', id: 0 },\n    { name: 'bar', id: 1 },\n  ],\n  // \u8fd4\u56de\u503c\u662f Object \u7c7b\u578b\n  'DELETE /api/users/1': { name: 'bar', id: 1 },\n}\n")),(0,a.kt)("p",null,"\u9664\u6b64\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u7684\u5f62\u5f0f\u6765\u8ba1\u7b97\u8fd4\u56de\u503c\uff0c\u8fd9\u5728\u9700\u8981\u52a8\u6001\u8fd4\u56de\u63a5\u53e3\u6570\u636e\u65f6\u5f88\u6709\u7528\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Request, Response } from '@ice/app';\n\nexport default {\n  'POST /api/users/:id': (request: Request, response: Response) => {\n    const { id } = request.params;\n    response.send({ id: id });\n  },\n}\n")),(0,a.kt)("h2",{id:"\u5173\u95ed-mock"},"\u5173\u95ed Mock"),(0,a.kt)("p",null,"\u5f53\u540e\u7aef\u63a5\u53e3\u5f00\u53d1\u5b8c\u6210\u4ee5\u540e\u3002\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed Mock \u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5173\u95ed Mock \u670d\u52a1\n$ npm run start -- --no-mock\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u8bf7\u6c42\u5230\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u4e86\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-mockjs"},"\u4f7f\u7528 Mock.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nuysoft/Mock"},"Mock.js")," \u662f\u4e00\u4e2a\u968f\u673a\u751f\u6210 mock \u6570\u636e\u7684\u5de5\u5177\u5e93\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u751f\u6210\u968f\u673a\u7684\u6a21\u62df\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Mock from 'mockjs';\n\nexport default {\n  'GET /api/list': (req, res) => {\n    const list = Mock.mock({\n      'list|1-10': [\n        {\n          'id|+1': 1,\n        },\n      ],\n    });\n    res.send({\n      status: 'SUCCESS',\n      data: {\n        list,\n      }\n    });\n  },\n};\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u7684\u8bed\u6cd5\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"http://mockjs.com/examples.html"},"Mock.js \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5904\u7406\u8bf7\u6c42\u6570\u636e"},"\u5904\u7406\u8bf7\u6c42\u6570\u636e"),(0,a.kt)("p",null,"\u5982\u679c\u7528\u6237\u5e0c\u671b\u4f7f\u7528\u4e00\u4e9b\u4e2d\u95f4\u4ef6\u6765\u5904\u7406\u8bf7\u6c42\u7684\u6570\u636e\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"req")," \u5bf9\u8c61\uff09\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import bodyParser from 'body-parser';\nimport type { Request, Response } from 'express';\n\nexport default {\n  'POST /api/login': (req: Request, res: Response) => {\n    bodyParser.json({ limit: '5mb', strict: false })(req, res, () => {\n      console.log(req.body);\n\n      res.send({});\n    })\n  },\n}\n")))}u.isMDXComponent=!0}}]);