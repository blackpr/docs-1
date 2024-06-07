"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[17064,18737],{30350:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(74848),i=t(28453),r=t(32075);const o={},a="Schema support",c={id:"db/schema-support",title:"Schema support",description:"You can specify the database schemas to organize tables and other database objects, Platformatic DB will create entities using these schemas.",source:"@site/versioned_docs/version-1.45.0/db/schema-support.md",sourceDirName:"db",slug:"/db/schema-support",permalink:"/docs/db/schema-support",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/db/schema-support.md",tags:[],version:"1.45.0",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/db/programmatic"},next:{title:"Overview",permalink:"/docs/runtime/overview"}},d={},l=[{value:"Example Configuration",id:"example-configuration",level:2},{value:"Configuring Schemas",id:"configuring-schemas",level:3},{value:"Entity Naming",id:"entity-naming",level:2},...r.toc];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"schema-support",children:"Schema support"}),"\n",(0,n.jsx)(s.p,{children:"You can specify the database schemas to organize tables and other database objects, Platformatic DB will create entities using these schemas."}),"\n",(0,n.jsx)(s.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,n.jsx)(s.p,{children:"Consider a database setup with two schemas, each containing a different set of tables:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'CREATE SCHEMA IF NOT EXISTS "test1";\nCREATE TABLE IF NOT EXISTS test1.movies (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n\nCREATE SCHEMA IF NOT EXISTS "test2";\nCREATE TABLE IF NOT EXISTS test2.users (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n'})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Note that if we use schemas and migrations, we must specify the schema in the migrations table as well\n(with postgresql, we assume we use the default ",(0,n.jsx)(s.code,{children:"public"})," schema)."]})}),"\n",(0,n.jsx)(s.h3,{id:"configuring-schemas",children:"Configuring Schemas"}),"\n",(0,n.jsxs)(s.p,{children:["To utilize multiple schemas, you must specify them in the ",(0,n.jsx)(s.code,{children:"schema"})," section of the configuration file as follows:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'  ...\n  "db": {\n    "connectionString": "(...)",\n    "schema": [\n      "test1", "test2"\n    ],\n    "ignore": {\n      "versions": true\n    }\n  },\n  "migrations": {\n    "dir": "migrations",\n    "table": "test1.versions"\n  },\n\n  ...\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"schema"}),": An array specifying which schemas Platformatic DB should inspect to create entities."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ignore"}),': Here, "',(0,n.jsx)(s.code,{children:"versions"}),'": ',(0,n.jsx)(s.code,{children:"true"})," specifies to ignore version tracking tables from entity generation."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"entity-naming",children:"Entity Naming"}),"\n",(0,n.jsxs)(s.p,{children:["The entity names are then generated in the form ",(0,n.jsx)(s.code,{children:"schemaName + entityName"}),", PascalCase (this is necessary to avoid name collisions in case there are tables with same name in different schemas).\nSo for instance for the example above we generate the ",(0,n.jsx)(s.code,{children:"Test1Movie"})," and ",(0,n.jsx)(s.code,{children:"Test2User"})," entities."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Entity Names and Authorization"}),": When using schemas, it's important to refer to entities by their full generated names (e.g., ",(0,n.jsx)(s.code,{children:"Test1Movies"}),") when setting up authorization rules."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["When using schemas, it's important to refer to entities by their full generated names (e.g., ",(0,n.jsx)(s.code,{children:"Test1Movies"}),") when setting up authorization rules."]})})}),"\n",(0,n.jsx)(r.default,{})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},32075:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(74848),i=t(28453);const r={},o=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.45.0/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/getting-started/issues.md",tags:[],version:"1.45.0",frontMatter:{}},c={},d=[{value:"Issues",id:"issues",level:2}];function l(e){const s={a:"a",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,n.jsxs)(s.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,n.jsx)(s.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,n.jsx)(s.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var n=t(96540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);