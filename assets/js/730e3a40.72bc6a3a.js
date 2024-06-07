"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[92412],{40829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=a(74848),i=a(28453);const n={title:"Overview",label:"Entities"},o="Introduction to Entities",r={id:"packages/sql-mapper/entities/overview",title:"Overview",description:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database.",source:"@site/versioned_docs/version-1.42.0/packages/sql-mapper/entities/overview.md",sourceDirName:"packages/sql-mapper/entities",slug:"/packages/sql-mapper/entities/overview",permalink:"/docs/1.42.0/packages/sql-mapper/entities/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.42.0/packages/sql-mapper/entities/overview.md",tags:[],version:"1.42.0",frontMatter:{title:"Overview",label:"Entities"},sidebar:"docs",previous:{title:"sql-mapper Fastify Plugin",permalink:"/docs/1.42.0/packages/sql-mapper/fastify-plugin"},next:{title:"Fields",permalink:"/docs/1.42.0/packages/sql-mapper/entities/fields"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction-to-entities",children:"Introduction to Entities"}),"\n",(0,s.jsx)(t.p,{children:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database."}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB includes a ",(0,s.jsx)(t.em,{children:"mapper"})," that reads the schemas of database tables and then generates an ",(0,s.jsx)(t.em,{children:"entity"})," object for each table."]}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB is a ",(0,s.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," application. The Fastify instance object is decorated with the ",(0,s.jsx)(t.code,{children:"platformatic"})," property, which exposes several APIs that handle the manipulation of data in the database."]}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB populates the ",(0,s.jsx)(t.code,{children:"app.platformatic.entities"})," object with data found in database tables."]}),"\n",(0,s.jsxs)(t.p,{children:["The keys on the ",(0,s.jsx)(t.code,{children:"entities"})," object are ",(0,s.jsx)(t.em,{children:"singularized"})," versions of the table names \u2014 for example ",(0,s.jsx)(t.code,{children:"users"})," becomes ",(0,s.jsx)(t.code,{children:"user"}),", ",(0,s.jsx)(t.code,{children:"categories"})," becomes ",(0,s.jsx)(t.code,{children:"category"})," \u2014 and the values are a set of associated metadata and functions."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var s=a(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);