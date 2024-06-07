"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[87976],{89288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={title:"Overview",label:"sql-events"},a="Platformatic DB sql-events module",r={id:"packages/sql-events/overview",title:"Overview",description:"The Platformatic DB sql-events uses mqemitter to publish events when entities are saved and deleted.",source:"@site/versioned_docs/version-1.45.0/packages/sql-events/overview.md",sourceDirName:"packages/sql-events",slug:"/packages/sql-events/overview",permalink:"/docs/packages/sql-events/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/packages/sql-events/overview.md",tags:[],version:"1.45.0",frontMatter:{title:"Overview",label:"sql-events"},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/packages/sql-mapper/entities/transactions"},next:{title:"Fastify Plugin",permalink:"/docs/packages/sql-events/fastify-plugin"}},c={},l=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"platformatic-db-sql-events-module",children:"Platformatic DB sql-events module"}),"\n",(0,s.jsxs)(n.p,{children:["The Platformatic DB sql-events uses ",(0,s.jsx)(n.a,{href:"http://npm.im/mqemitter",children:"mqemitter"})," to publish events when ",(0,s.jsx)(n.a,{href:"/reference/sql-mapper/entities/introduction.md",children:"entities"})," are saved and deleted."]}),"\n",(0,s.jsx)(n.p,{children:"These events are useful to distribute updates to clients, e.g. via WebSocket, Server-Sent Events, or GraphQL Subscritions.\nWhen subscribing and using a multi-process system with a broker like Redis, a subscribed topic will receive the data from all\nthe other processes."}),"\n",(0,s.jsxs)(n.p,{children:["They are not the right choice for executing some code whenever an entity is created, modified or deleted, in that case\nuse ",(0,s.jsx)(n.a,{href:"/reference/sql-mapper/entities/hooks.md",children:"@platformatic/sql-mapper hooks"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(n.p,{children:["You can use together with ",(0,s.jsx)(n.code,{children:"@platformatic/sql-mapper"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm i @platformatic/sql-mapper @platformatic/sql-events\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const { connect } = require('@platformatic/sql-mapper')\nconst { setupEmitter } = require('@platformatic/sql-events')\nconst { pino } = require('pino')\n\nconst log = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString = 'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  }\n})\n\nsetupEmitter({ mapper, log })\n\nconst pageEntity = mapper.entities.page\n\nconst queue = await mapper.subscribe([\n  pageEntity.getSubscriptionTopic({ action: 'save' }),\n  pageEntity.getSubscriptionTopic({ action: 'delete' })\n])\n\nconst page = await pageEntity.save({\n  input: { title: 'fourth page' }\n})\n\nconst page2 = await pageEntity.save({\n  input: {\n    id: page.id,\n    title: 'fifth page'\n  }\n})\n\nawait pageEntity.delete({\n  where: {\n    id: {\n      eq: page.id\n    }\n  },\n  fields: ['id', 'title']\n})\n\nfor await (const ev of queue) {\n  console.log(ev)\n  if (expected.length === 0) {\n    break\n  }\n}\n\nprocess.exit(0)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"setupEmitter"})," function has the following options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mq"})," - an instance of ",(0,s.jsx)(n.a,{href:"https://npm.im/mqemitter",children:(0,s.jsx)(n.code,{children:"mqemitter"})}),", optional."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"setupEmitter"})," functions adds the following properties to the ",(0,s.jsx)(n.code,{children:"mapper"})," object:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mq"})," \u2014 an instance of ",(0,s.jsx)(n.a,{href:"https://npm.im/mqemitter",children:(0,s.jsx)(n.code,{children:"mqemitter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscribe(topics)"})," \u2014 a method to create a node ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/stream.html#new-streamreadableoptions",children:(0,s.jsx)(n.code,{children:"Readable"})}),"\nthat will contain the events emitted by those topics."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each entities of ",(0,s.jsx)(n.code,{children:"app.platformatic.entities"})," will be augmented with two functions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"entity.getPublishTopic({ ctx, data, action })"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"entity.getSubscriptionTopic({ ctx, action })"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"ctx"})," is the GraphQL Context, ",(0,s.jsx)(n.code,{children:"data"})," is the object that will be emitted and ",(0,s.jsx)(n.code,{children:"action"})," is either ",(0,s.jsx)(n.code,{children:"save"})," or ",(0,s.jsx)(n.code,{children:"delete"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);