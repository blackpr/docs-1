"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[61224],{13273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),i=n(28453);const a={},r="Fastify Plugin",c={id:"packages/sql-events/fastify-plugin",title:"Fastify Plugin",description:"The @platformatic/sql-events package exports a Fastify plugin that can be used out-of the box in a server application.",source:"@site/versioned_docs/version-1.43.0/packages/sql-events/fastify-plugin.md",sourceDirName:"packages/sql-events",slug:"/packages/sql-events/fastify-plugin",permalink:"/docs/1.43.0/packages/sql-events/fastify-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.43.0/packages/sql-events/fastify-plugin.md",tags:[],version:"1.43.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/1.43.0/packages/sql-events/overview"},next:{title:"FAQs",permalink:"/docs/1.43.0/FAQs"}},o={},l=[{value:"Usage",id:"usage",level:4}];function p(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fastify-plugin",children:"Fastify Plugin"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@platformatic/sql-events"})," package exports a ",(0,s.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," plugin that can be used out-of the box in a server application.\nIt requires that ",(0,s.jsx)(t.code,{children:"@platformatic/sql-mapper"})," is registered before it."]}),"\n",(0,s.jsx)(t.p,{children:"The plugin has the following options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"mq"})," - an instance of ",(0,s.jsx)(t.a,{href:"https://npm.im/mqemitter",children:(0,s.jsx)(t.code,{children:"mqemitter"})}),", optional."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The plugin adds the following properties to the ",(0,s.jsx)(t.code,{children:"app.platformatic"})," object:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"mq"})," \u2014 an instance of ",(0,s.jsx)(t.a,{href:"https://npm.im/mqemitter",children:(0,s.jsx)(t.code,{children:"mqemitter"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"subscribe(topics)"})," \u2014 a method to create a node ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/stream.html#new-streamreadableoptions",children:(0,s.jsx)(t.code,{children:"Readable"})}),"\nthat will contain the events emitted by those topics."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Each entities of ",(0,s.jsx)(t.code,{children:"app.platformatic.entities"})," will be augmented with two functions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"entity.getPublishTopic({ ctx, data, action })"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"entity.getSubscriptionTopic({ ctx, action })"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Where ",(0,s.jsx)(t.code,{children:"ctx"})," is the GraphQL Context, ",(0,s.jsx)(t.code,{children:"data"})," is the object that will be emitted and ",(0,s.jsx)(t.code,{children:"action"})," is either ",(0,s.jsx)(t.code,{children:"save"})," or ",(0,s.jsx)(t.code,{children:"delete"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst mapper = require('@platformatic/sql-mapper')\nconst events = require('@platformatic/sql-events')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(mapper.plugin, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n\n  app.register(events)\n\n  // setup your routes\n\n\n  await app.listen({ port: 3333 })\n}\n\nmain()\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);