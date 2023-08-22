"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[1274],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2970:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9231),r=n(9841);const o={tabItem:"tabItem_Z7jx"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},6507:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(5675),r=n(9231),o=n(9841),s=n(358),l=n(9409),i=n(8800),u=n(548),c=n(3536);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var g=n(348);const h={tabList:"tabList_YkLP",tabItem:"tabItem_dswv"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(5675),r=(n(9231),n(4852)),o=n(6507),s=n(2970);const l={title:"\u72b6\u6001\u7ba1\u7406",order:132},i=void 0,u={unversionedId:"guide/advanced/store",id:"guide/advanced/store",title:"\u72b6\u6001\u7ba1\u7406",description:"\u793a\u4f8b",source:"@site/docs/guide/advanced/store.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/store",permalink:"/docs/guide/advanced/store",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/store.md",tags:[],version:"current",frontMatter:{title:"\u72b6\u6001\u7ba1\u7406",order:132},sidebar:"docs",previous:{title:"\u517c\u5bb9 Rax",permalink:"/docs/guide/advanced/rax-compat"},next:{title:"HTTP \u8bf7\u6c42",permalink:"/docs/guide/advanced/request"}},c={},d=[{value:"\u5f00\u542f\u72b6\u6001\u7ba1\u7406",id:"\u5f00\u542f\u72b6\u6001\u7ba1\u7406",level:2},{value:"\u5168\u5c40\u72b6\u6001",id:"\u5168\u5c40\u72b6\u6001",level:2},{value:"\u5b9a\u4e49 Model",id:"\u5b9a\u4e49-model",level:3},{value:"\u521d\u59cb\u5316 Store",id:"\u521d\u59cb\u5316-store",level:3},{value:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528",level:3},{value:"\u9875\u9762\u72b6\u6001",id:"\u9875\u9762\u72b6\u6001",level:2},{value:"\u5b9a\u4e49 Model",id:"\u5b9a\u4e49-model-1",level:3},{value:"\u521d\u59cb\u5316 Store",id:"\u521d\u59cb\u5316-store-1",level:3},{value:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528-1",level:3},{value:"\u8fdb\u9636\u7528\u6cd5",id:"\u8fdb\u9636\u7528\u6cd5",level:2},{value:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001",id:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001",level:3},{value:"Model \u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e",id:"model-\u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e",level:3},{value:"state",id:"state",level:4},{value:"reducers",id:"reducers",level:4},{value:"effects",id:"effects",level:4},{value:"Model \u4e4b\u95f4\u901a\u4fe1",id:"model-\u4e4b\u95f4\u901a\u4fe1",level:3},{value:"\u4f7f\u7528\u4e0d\u53ef\u53d8\u72b6\u6001",id:"\u4f7f\u7528\u4e0d\u53ef\u53d8\u72b6\u6001",level:3},{value:"\u83b7\u53d6\u5185\u7f6e\u7684\u52a0\u8f7d\u72b6\u6001\u548c\u9519\u8bef\u72b6\u6001",id:"\u83b7\u53d6\u5185\u7f6e\u7684\u52a0\u8f7d\u72b6\u6001\u548c\u9519\u8bef\u72b6\u6001",level:3},{value:"\u9875\u9762\u5207\u6362\u540e\u91cd\u7f6e\u72b6\u6001",id:"\u9875\u9762\u5207\u6362\u540e\u91cd\u7f6e\u72b6\u6001",level:3},{value:"\u5728 Class Component \u4e2d\u4f7f\u7528",id:"\u5728-class-component-\u4e2d\u4f7f\u7528",level:3},{value:"Redux Devtools",id:"redux-devtools",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://github.com/alibaba/ice/tree/master/examples/with-store",target:"_blank",rel:"noopener noreferrer"},"with-store")))),(0,r.kt)("p",null,"ice.js \u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestore"},"icestore")," \uff0c\u63d0\u4f9b\u4e3b\u6d41\u7684\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u66f4\u597d\u7ba1\u7406\u590d\u6742\u7684\u72b6\u6001\u7ba1\u7406\u903b\u8f91\u3002"),(0,r.kt)("h2",{id:"\u5f00\u542f\u72b6\u6001\u7ba1\u7406"},"\u5f00\u542f\u72b6\u6001\u7ba1\u7406"),(0,r.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-store -D\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport store from '@ice/plugin-store';\n\nexport default defineConfig(() => ({\n  plugins: [\n    store(),\n  ],\n}));\n")),(0,r.kt)("h2",{id:"\u5168\u5c40\u72b6\u6001"},"\u5168\u5c40\u72b6\u6001"),(0,r.kt)("p",null,"\u63a8\u8350\u5728\u4e0d\u540c\u9875\u9762\u7ec4\u4ef6\u4e2d\u5171\u4eab\u7684\u72b6\u6001\u5b58\u653e\u5728\u5168\u5c40\u72b6\u6001\u4e2d\uff0c\u6bd4\u5982\u4e3b\u9898\u3001\u56fd\u9645\u5316\u8bed\u8a00\u3001\u7528\u6237\u4fe1\u606f\u7b49\u3002"),(0,r.kt)("h3",{id:"\u5b9a\u4e49-model"},"\u5b9a\u4e49 Model"),(0,r.kt)("p",null,"\u7ea6\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/models")," \u76ee\u5f55\u5b9a\u4e49\u5168\u5c40\u72b6\u6001\u3002\u4ee5\u5b9a\u4e49\u5168\u5c40\u7528\u6237\u72b6\u6001\u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/models/user.ts"',title:'"src/models/user.ts"'},"import { createModel } from 'ice';\n\ninterface User {\n  name: string;\n  id: string;\n}\n\nexport default createModel({\n  // \u5b9a\u4e49  model \u7684\u521d\u59cb state\n  state: {\n    name: '',\n    id: '',\n  } as User,\n  // \u5b9a\u4e49\u6539\u53d8\u8be5 model \u72b6\u6001\u7684\u7eaf\u51fd\u6570\n  reducers: {\n    update(state, payload) {\n      return {\n        ...state,\n        ...payload,\n      };\n    },\n  },\n  // \u5b9a\u4e49\u5904\u7406\u8be5 model \u526f\u4f5c\u7528\u7684\u51fd\u6570\n  effects: (dispatch) => ({\n    async getUserInfo() {\n      await delay(1000);\n      this.update({\n        name: 'taobao',\n        id: '123',\n      });\n    },\n  }),\n})\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-store"},"\u521d\u59cb\u5316 Store"),(0,r.kt)("p",null,"\u7ea6\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store.ts")," \u4e2d\u521d\u59cb\u5316 Store\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { createStore } from 'ice';\nimport user from './models/user';\n\nexport default createStore({ user });\n")),(0,r.kt)("h3",{id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { useEffect } from 'react';\n+ import store from '@/store';\n\nexport default function Home() {\n+ const [userState, userDispatchers] = store.useModel('user');\n\n+ useEffect(() => {\n+   // \u89e6\u53d1 dispatcher \u83b7\u53d6\u6570\u636e\u5e76\u4fee\u6539 state\n+   userDispatchers.getUserInfo()\n+ }, [])\n  return (\n    <>\n+     <span>{userState.id}</span>\n+     <span>{userState.name}</span>\n    </>\n  );\n}\n")),(0,r.kt)("h2",{id:"\u9875\u9762\u72b6\u6001"},"\u9875\u9762\u72b6\u6001"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9875\u9762\u72b6\u6001\u53ea\u80fd\u5728\u8be5\u9875\u9762\u4e0b\u7684\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u65e0\u6cd5\u8de8\u9875\u9762\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"\u5b9a\u4e49-model-1"},"\u5b9a\u4e49 Model"),(0,r.kt)("p",null,"\u7ea6\u5b9a\u5728\u5f53\u524d\u8def\u7531\u76ee\u5f55\u4e0b\u65b0\u5efa models \u76ee\u5f55\u5e76\u5b9a\u4e49 Model\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," src\n \u2514\u2500\u2500 pages\n |   \u251c\u2500\u2500 home                // /home \u9875\u9762\n+|   \u2502   \u251c\u2500\u2500 models          // \u5b9a\u4e49 model\n+|   \u2502   |   \u2514\u2500\u2500 info.ts\n |   \u2502   \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"\u5b9a\u4e49 Model \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/pages/home/models/info.ts"',title:'"src/pages/home/models/info.ts"'},"import { createModel } from 'ice';\n\nexport default createModel({\n  state: {\n    title: '',\n  },\n  reducers: {\n    update(state, payload) {\n      return {\n        ...state,\n        ...payload,\n      };\n    },\n  },\n});\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-store-1"},"\u521d\u59cb\u5316 Store"),(0,r.kt)("p",null,"\u7ea6\u5b9a\u5728\u5f53\u524d\u8def\u7531\u76ee\u5f55\u4e0b\u65b0\u5efa store \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," src\n \u2514\u2500\u2500 pages\n |   \u251c\u2500\u2500 home                // /home \u9875\u9762\n |   \u2502   \u251c\u2500\u2500 models          // \u5b9a\u4e49 model\n |   \u2502   |   \u2514\u2500\u2500 info.ts\n+|   \u2502   \u251c\u2500\u2500 store.ts       // \u521b\u5efa store\n |   \u2502   \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/pages/home/store.ts"',title:'"src/pages/home/store.ts"'},"import { createStore } from 'ice';\nimport info from './models/info';\n\nconst store = createStore({ info });\n\nexport default store;\n")),(0,r.kt)("h3",{id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528-1"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/pages/home/index.tsx"',title:'"src/pages/home/index.tsx"'},"import { useEffect } from 'react';\n+ import homeStore from './store';\n\nexport default function Home() {\n+ const [infoState, infoDispatchers] = homeStore.useModel('info');\n\n+ useEffect(() => {\n+   infoDispatchers.update({ title: 'ICE' })\n+ }, [])\n  return (\n+   <h1>{infoState.title}</h1>\n  );\n};\n")),(0,r.kt)("h2",{id:"\u8fdb\u9636\u7528\u6cd5"},"\u8fdb\u9636\u7528\u6cd5"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001"},"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u9875\u9762\u7ea7\u72b6\u6001\u76ee\u524d\u4e0d\u652f\u6301\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"initialStates"),"\u3002")),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," \u4e24\u4e2a Model\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"store",label:"src/store.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'ice';\nimport user from './models/user';\nimport counter from './models/counter';\n\nexport default createStore({ user, counter });\n"))),(0,r.kt)(s.Z,{value:"user",label:"src/models/user.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createModel } from 'ice';\n\nexport default createModel({ \n  state: {\n    name: '',\n  }\n});\n"))),(0,r.kt)(s.Z,{value:"counter",label:"src/models/counter.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createModel } from 'ice';\n\nexport default createModel({ \n  state: {\n    count: 0,\n  }\n});\n")))),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u8bbe\u7f6e\u4e24\u4e2a Model \u521d\u59cb\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { defineStoreConfig } from '@ice/plugin-store/types';\n\nexport const storeConfig = defineStoreConfig(async () => {\n  // \u6a21\u62df\u8bf7\u6c42\u540e\u7aef\u6570\u636e\n  // const data = (await fetch('your-url')).json();\n  return {\n    initialStates: {\n      // initialStates \u952e\u503c\u4e0e createStore \u7684\u7b2c\u4e00\u4e2a\u5165\u53c2\u952e\u503c\u4fdd\u6301\u4e00\u81f4\n      user: {\n        name: 'ice.js',\n      },\n      counter: {\n        count: 1\n      }\n    },\n  };\n});\n")),(0,r.kt)("h3",{id:"model-\u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e"},"Model \u5b9a\u4e49\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("p",null,"\u63d2\u4ef6\u7ea6\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/models"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/**/models")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4e3a\u9879\u76ee\u5b9a\u4e49\u7684 model \u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u9700\u8981\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,r.kt)("h4",{id:"state"},"state"),(0,r.kt)("p",null,"\u5b9a\u4e49 Model \u7684\u521d\u59cb state\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createModel } from 'ice';\n\nexport default createModel({\n state: { count: 0 },\n})\n")),(0,r.kt)("h4",{id:"reducers"},"reducers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Reducers = { \n  [k: string]: (state, payload) => any;\n};\n")),(0,r.kt)("p",null,"\u4e00\u4e2a\u6539\u53d8\u8be5\u6a21\u578b\u72b6\u6001\u7684\u51fd\u6570\u96c6\u5408\u3002\u8fd9\u4e9b\u65b9\u6cd5\u4ee5\u6a21\u578b\u7684\u4e0a\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),"\uff08\u8c03\u7528 reducer \u65f6\u4f20\u5165\u7684\u53c2\u6570\uff09\u4f5c\u4e3a\u5165\u53c2\uff0c\u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528\u53ef\u53d8\u7684\u65b9\u5f0f\u6765\u66f4\u65b0\u72b6\u6001\u3002 \u8fd9\u4e9b\u65b9\u6cd5\u5e94\u8be5\u662f\u4ec5\u4f9d\u8d56\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," \u53c2\u6570\u6765\u8ba1\u7b97\u4e0b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u7eaf\u51fd\u6570\u3002\u5bf9\u4e8e\u6709\u526f\u4f5c\u7528\u7684\u51fd\u6570\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"#effects"},(0,r.kt)("inlineCode",{parentName:"a"},"effects"))," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createModel } from 'ice';\n\nexport default ({\n  state: { count: 0, list: [] },\n\n  reducers: {\n    increment (state, payload) {\n      const newList = state.list.slice();\n      newList.push(payload);\n      const newCount = state.count + 1;\n      return { ...state, count: newCount, list: newList }\n    },\n    decrement (state) {\n      return { ...state, count: state.count - 1 }\n    }\n  }\n}\n")),(0,r.kt)("h4",{id:"effects"},"effects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Effects = (dispatch) => ({ [string]: (payload, rootState) => void })\n")),(0,r.kt)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u5904\u7406\u8be5\u6a21\u578b\u526f\u4f5c\u7528\u7684\u51fd\u6570\u96c6\u5408\u3002\u8fd9\u4e9b\u65b9\u6cd5\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"rootState"),"\uff08\u5f53\u524d\u6a21\u578b\u7684 state\uff09 \u4f5c\u4e3a\u5165\u53c2\uff0c\u9002\u7528\u4e8e\u8fdb\u884c\u5f02\u6b65\u8c03\u7528\u3001\u6a21\u578b\u8054\u52a8\u7b49\u573a\u666f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createModel } from 'ice';\n\nexport default createModel({\n  reducers: {\n    increment() {\n      // ...\n    }\n  },\n  effects: (dispatch) => ({\n    async asyncDecrement() {\n      const list = (await fetch('your-url')).json();  // \u8fdb\u884c\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n      this.increment(list);                               // \u8c03\u7528\u6a21\u578b reducers \u5185\u7684\u65b9\u6cd5\u6765\u66f4\u65b0\u72b6\u6001\n    },\n  }),\n})\n")),(0,r.kt)("h3",{id:"model-\u4e4b\u95f4\u901a\u4fe1"},"Model \u4e4b\u95f4\u901a\u4fe1"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e24\u4e2a Model \u4e0d\u5c5e\u4e8e\u540c\u4e00\u4e2a Store \u5b9e\u4f8b\uff0c\u662f\u65e0\u6cd5\u901a\u4fe1\u7684")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"user",label:"src/models/user.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/models/user.ts\nimport { createModel } from 'ice';\n\nexport default createModel({\n  state: {\n    name: '',\n    tasks: 0,\n  },\n  effects: () => ({\n    async refresh() {\n      const data = (await fetch('/user')).json();\n      // \u901a\u8fc7 this.foo \u8c03\u7528\u81ea\u8eab\u7684 reducer\n      this.setState(data);\n    },\n  }),\n});\n"))),(0,r.kt)(s.Z,{value:"task",label:"src/models/tasks.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/models/tasks.ts\nexport default {\n  state: [],\n  effects: (dispatch) => ({\n    async refresh() {\n      const data = await fetch('/tasks');\n      this.setState(data);\n    },\n    async add(task) {\n      await fetch('/tasks/add', task);\n      // \u8c03\u7528\u53e6\u4e00\u4e2a model user \u7684 effects\n      await dispatch.user.refresh();\n      // \u901a\u8fc7 this.foo \u8c03\u7528\u81ea\u8eab\u7684 effects\n      await this.refresh();\n    },\n  }),\n};\n")))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u4e0d\u53ef\u53d8\u72b6\u6001"},"\u4f7f\u7528\u4e0d\u53ef\u53d8\u72b6\u6001"),(0,r.kt)("p",null,"Redux \u9ed8\u8ba4\u7684\u51fd\u6570\u5f0f\u5199\u6cd5\u5728\u5904\u7406\u4e00\u4e9b\u590d\u6742\u5bf9\u8c61\u7684 state \u65f6\u4f1a\u975e\u5e38\u7e41\u7410\u3002\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"immer")," \u7684\u65b9\u5f0f\u6765\u64cd\u4f5c state\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { createModel } from 'ice';\n\nexport default createModel({\n  state: {\n    tasks: ['A Task', 'B Task'],\n    detail: {\n      name: 'Bob',\n      age: 3,\n    },\n  },\n  reducers: {\n    addTasks(state, payload) {\n-     return {\n-       ...state,\n-       tasks: [ ...state.tasks, payload ],\n-     },\n+     state.tasks.push(payload);\n    },\n    updateAge(state, payload) {\n-     return {\n-       ...state,\n-       detail: {\n-         ...state.detail,\n-         age: payload,\n-       },\n-     },\n+     state.detail.age = payload;\n    }\n  }\n})\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u56e0\u4e3a immer \u65e0\u6cd5\u652f\u6301\u5b57\u7b26\u4e32\u6216\u6570\u5b57\u8fd9\u6837\u7684\u7b80\u5355\u7c7b\u578b\uff0c\u56e0\u6b64\u5982\u679c state \u7b26\u5408\u8fd9\u79cd\u60c5\u51b5\uff08\u6781\u5c11\u6570\uff09\u5219\u4e0d\u652f\u6301\u901a\u8fc7 immer \u64cd\u4f5c\uff0c\u5fc5\u987b\u4f7f\u7528 Redux \u9ed8\u8ba4\u7684\u51fd\u6570\u5f0f\u5199\u6cd5\uff08\u8fd4\u56de\u4e00\u4e2a\u65b0\u503c\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { createModel } from 'ice';\n\nexport default createModel({\n  state: 0,\n  reducers: {\n    add(state) {\n-     state += 1;\n+     return state += 1;\n    },\n  },\n})\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5185\u7f6e\u7684\u52a0\u8f7d\u72b6\u6001\u548c\u9519\u8bef\u72b6\u6001"},"\u83b7\u53d6\u5185\u7f6e\u7684\u52a0\u8f7d\u72b6\u6001\u548c\u9519\u8bef\u72b6\u6001"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useModelEffectsState")," API \u5373\u53ef\u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"effects")," \u7684 \u52a0\u8f7d\u72b6\u6001\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," \uff09\u548c \u9519\u8bef\u72b6\u6001\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import store from '@/store';\n\nfunction FunctionComponent() {\n  const [state, dispatchers] = store.useModel('counter');\n+  const effectsState = store.useModelEffectsState('counter');\n\n  useEffect(() => {\n    dispatchers.asyncDecrement();\n  }, []);\n\n+  console.log(effectsState.asyncDecrement.isLoading); // true\n+  console.log(effectsState.asyncDecrement.error);  // null\n}\n")),(0,r.kt)("h3",{id:"\u9875\u9762\u5207\u6362\u540e\u91cd\u7f6e\u72b6\u6001"},"\u9875\u9762\u5207\u6362\u540e\u91cd\u7f6e\u72b6\u6001"),(0,r.kt)("p",null,"\u5728\u5355\u9875\u5e94\u7528\u4e0b\u8fdb\u884c\u9875\u9762\u5207\u6362\u65f6\uff0c\u9875\u9762\u72b6\u6001\u662f\u4f1a\u4fdd\u7559\u7684\u3002\u5982\u679c\u60f3\u5207\u6362\u9875\u9762\u540e\u518d\u6b21\u8fdb\u5165\u539f\u9875\u9762\u65f6\u91cd\u65b0\u521d\u59cb\u5316\u9875\u9762\u72b6\u6001\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport store from '@ice/plugin-store';\n\nexport default defineConfig(() => ({\n  plugins: [\n-   store(),\n+   store({ resetPageState: true }),\n  ],\n}));\n")),(0,r.kt)("h3",{id:"\u5728-class-component-\u4e2d\u4f7f\u7528"},"\u5728 Class Component \u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"withModel")," \u53ef\u4ee5\u5b9e\u73b0\u5728 Class Component \u4e2d\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import store from '@/store';\n\n@store.withModel('todos')\nexport default class TodoList extends React.Component {\n  render() {\n    const { todos } = this.props;\n    const [state, dispatchers] = todos;\n    console.log('state: ', state);\n    // ...\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"TS \u5e94\u7528\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u91cc\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'compilerOptions: { "experimentalDecorators": true }'),"\n\u624d\u53ef\u542f\u7528\u88c5\u9970\u5668\u8bed\u6cd5\u3002")),(0,r.kt)("h3",{id:"redux-devtools"},"Redux Devtools"),(0,r.kt)("p",null,"\u63d2\u4ef6\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 Redux Devtools\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u5728 Redux Devtools \u8c03\u8bd5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1wK4nqypE_u4jSZKbXXbCUVXa-1918-430.png",alt:null})),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5b9a\u4e49 Devtools \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684 options \u5165\u53c2\u4e2d\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"createStore({ user }, {\n  redux: {\n    devtoolOptions: {\n      // \u66f4\u591a\u914d\u7f6e\u53c2\u8003\uff1ahttps://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md\n    }\n  }\n})\n")))}f.isMDXComponent=!0}}]);