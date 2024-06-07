"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[70849],{83328:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var n=s(74848),i=s(28453);const a={},o="Timestamps",d={id:"packages/sql-mapper/entities/timestamps",title:"Timestamps",description:"Timestamps can be used to automatically set the createdat and updatedat fields on your entities.",source:"@site/versioned_docs/version-1.43.0/packages/sql-mapper/entities/timestamps.md",sourceDirName:"packages/sql-mapper/entities",slug:"/packages/sql-mapper/entities/timestamps",permalink:"/docs/1.43.0/packages/sql-mapper/entities/timestamps",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.43.0/packages/sql-mapper/entities/timestamps.md",tags:[],version:"1.43.0",frontMatter:{}},c={},r=[{value:"Configuration",id:"configuration",level:2},{value:"Customizing the field names",id:"customizing-the-field-names",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"timestamps",children:"Timestamps"}),"\n",(0,n.jsxs)(t.p,{children:["Timestamps can be used to automatically set the ",(0,n.jsx)(t.code,{children:"created_at"})," and ",(0,n.jsx)(t.code,{children:"updated_at"})," fields on your entities."]}),"\n",(0,n.jsx)(t.p,{children:"Timestamps are enabled by default"}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To disable timestamps, you need to set the ",(0,n.jsx)(t.code,{children:"autoTimestamp"})," field to ",(0,n.jsx)(t.code,{children:"false"})," in configuration file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": false\n  }\n...\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"customizing-the-field-names",children:"Customizing the field names"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"created_at"})," and ",(0,n.jsx)(t.code,{children:"updated_at"})," fields are used. You can customize the field names by setting the ",(0,n.jsx)(t.code,{children:"createdAt"})," and ",(0,n.jsx)(t.code,{children:"updatedAt"})," options in ",(0,n.jsx)(t.code,{children:"autoTimestamp"})," field in configuration file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": {\n      "createdAt": "inserted_at",\n      "updatedAt": "updated_at"\n    }\n...\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);