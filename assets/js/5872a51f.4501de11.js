"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[66352],{45244:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(74848),s=i(28453);const o={title:"Overview",label:"Introduction to @platformatic/sql-mapper"},a="Introduction to @platformatic/sql-mapper",c={id:"packages/sql-mapper/overview",title:"Overview",description:"@platformatic/sql-mapper is the underlining utility that Platformatic DB uses to create useful utilities to",source:"@site/versioned_docs/version-1.45.0/packages/sql-mapper/overview.md",sourceDirName:"packages/sql-mapper",slug:"/packages/sql-mapper/overview",permalink:"/docs/packages/sql-mapper/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/packages/sql-mapper/overview.md",tags:[],version:"1.45.0",frontMatter:{title:"Overview",label:"Introduction to @platformatic/sql-mapper"},sidebar:"docs",previous:{title:"Ignoring types and fields",permalink:"/docs/packages/sql-graphql/ignore"},next:{title:"sql-mapper Fastify Plugin",permalink:"/docs/packages/sql-mapper/fastify-plugin"}},r={},l=[{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"<code>connect(opts) : Promise</code>",id:"connectopts--promise",level:3},{value:"<code>createConnectionPool(opts) : Promise</code>",id:"createconnectionpoolopts--promise",level:3},{value:"Code samples",id:"code-samples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"introduction-to-platformaticsql-mapper",children:["Introduction to ",(0,t.jsx)(n.code,{children:"@platformatic/sql-mapper"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@platformatic/sql-mapper"})," is the underlining utility that Platformatic DB uses to create useful utilities to\nmanipulate your SQL database using JavaScript."]}),"\n",(0,t.jsxs)(n.p,{children:["This module is bundled with ",(0,t.jsx)(n.a,{href:"/reference/db/introduction.md",children:"Platformatic DB"})," via ",(0,t.jsx)(n.a,{href:"/docs/packages/sql-mapper/fastify-plugin",children:"a fastify plugin"}),"\nThe rest of this guide shows how to use this module directly."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm i @platformatic/sql-mapper\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"connectopts--promise",children:(0,t.jsx)(n.code,{children:"connect(opts) : Promise"})}),"\n",(0,t.jsx)(n.p,{children:"It will inspect a database schema and return an object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"db"})," \u2014 A database abstraction layer from ",(0,t.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,t.jsx)(n.code,{children:"@databases"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sql"})," \u2014 The SQL builder from ",(0,t.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,t.jsx)(n.code,{children:"@databases"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entities"})," \u2014 An object containing a key for each table found in the schema, with basic CRUD operations. See ",(0,t.jsx)(n.a,{href:"./entities/introduction.md",children:"Entity Reference"})," for details."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The valid options are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connectionString"})," \u2014 The Database connection string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"poolSize"})," - Maximum number of connections in the connection pool. The default ",(0,t.jsx)(n.code,{children:"poolSize"})," is ",(0,t.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"log"})," \u2014 A logger object (like ",(0,t.jsx)(n.a,{href:"https://getpino.io",children:"Pino"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDatabaseLoad"})," \u2014 An async function that is called after the connection is established. It will receive ",(0,t.jsx)(n.code,{children:"db"})," and ",(0,t.jsx)(n.code,{children:"sql"})," as parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ignore"})," \u2014 An object used to ignore specified tables from building entities (i.e. ",(0,t.jsx)(n.code,{children:"{ 'versions': true }"})," will ignore the ",(0,t.jsx)(n.code,{children:"versions"})," table)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"include"})," \u2014 An object used to explicitly identify tables for which you would like entities built (i.e. ",(0,t.jsx)(n.code,{children:"{ 'versions': true }"})," will build a ",(0,t.jsx)(n.code,{children:"versions"})," entity from the ",(0,t.jsx)(n.code,{children:"versions"})," table and ignore all other tables)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autoTimestamp"})," \u2014 Flag to enable automatic generation of a timestamp when inserting or updating records."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hooks"})," \u2014 An object to customize entity API functions for each entity. Your custom function will receive the original function as the first parameter and all other parameters passed to it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache"})," \u2014 Flag to enable cache and dedupe features (default is ",(0,t.jsx)(n.code,{children:"false"}),", i.e. disabled). This is currently only supported during schema enumeration."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"createconnectionpoolopts--promise",children:(0,t.jsx)(n.code,{children:"createConnectionPool(opts) : Promise"})}),"\n",(0,t.jsx)(n.p,{children:"It will inspect a database schema and return an object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"db"})," \u2014 A database abstraction layer from ",(0,t.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,t.jsx)(n.code,{children:"@databases"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sql"})," \u2014 The SQL builder from ",(0,t.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,t.jsx)(n.code,{children:"@databases"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The valid options are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connectionString"})," \u2014 The Database connection string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"poolSize"})," - Maximum number of connections in the connection pool (default ",(0,t.jsx)(n.code,{children:"poolSize"})," is ",(0,t.jsx)(n.code,{children:"10"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"log"})," \u2014 A logger object (like ",(0,t.jsx)(n.a,{href:"https://getpino.io",children:"Pino"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This utility is useful if you just need to connect to the db without generating any entity."}),"\n",(0,t.jsx)(n.h2,{id:"code-samples",children:"Code samples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\n\nconst logger = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString =\n  'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log: logger,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  },\n  cache: true\n})\nconst pageEntity = mapper.entities.page\n\nawait mapper.db.query(mapper.sql`SELECT * FROM pages`)\nawait mapper.db.find('option1', 'option2')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);