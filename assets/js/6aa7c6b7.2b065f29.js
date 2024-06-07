"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[25350],{34689:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(74848),i=t(28453);const o={},r="Subscription",c={id:"packages/sql-graphql/subscriptions",title:"Subscription",description:"When the GraphQL plugin is loaded, some subscriptions are automatically adding to",source:"@site/versioned_docs/version-1.45.0/packages/sql-graphql/subscriptions.md",sourceDirName:"packages/sql-graphql",slug:"/packages/sql-graphql/subscriptions",permalink:"/docs/packages/sql-graphql/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/packages/sql-graphql/subscriptions.md",tags:[],version:"1.45.0",frontMatter:{}},a={},d=[{value:"<code>[ENTITY]Saved</code>",id:"entitysaved",level:2},{value:"<code>[ENTITY]Deleted</code>",id:"entitydeleted",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"subscription",children:"Subscription"}),"\n",(0,n.jsxs)(s.p,{children:["When the GraphQL plugin is loaded, some subscriptions are automatically adding to\nthe GraphQL schema if the ",(0,n.jsx)(s.code,{children:"@platformatic/sql-events"})," plugin has been previously registered."]}),"\n",(0,n.jsxs)(s.p,{children:["It's possible to avoid creating the subscriptions for a given entity by adding the ",(0,n.jsx)(s.code,{children:"subscriptionIgnore"})," config,\nlike so: ",(0,n.jsx)(s.code,{children:"subscriptionIgnore: ['page']"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"entitysaved",children:(0,n.jsx)(s.code,{children:"[ENTITY]Saved"})}),"\n",(0,n.jsxs)(s.p,{children:["Published whenever an entity is saved, e.g. when the mutation ",(0,n.jsx)(s.code,{children:"insert[ENTITY]"})," or ",(0,n.jsx)(s.code,{children:"save[ENTITY]"})," are called."]}),"\n",(0,n.jsx)(s.h2,{id:"entitydeleted",children:(0,n.jsx)(s.code,{children:"[ENTITY]Deleted"})}),"\n",(0,n.jsxs)(s.p,{children:["Published whenever an entity is deleted, e.g. when the mutation ",(0,n.jsx)(s.code,{children:"delete[ENTITY]"})," is called.."]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);