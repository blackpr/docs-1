"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[75595],{82145:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(74848),a=s(28453);const i={},r="Queries",l={id:"packages/sql-graphql/queries",title:"Queries",description:"A GraphQL query is automatically added to the GraphQL schema for each database",source:"@site/docs/packages/sql-graphql/queries.md",sourceDirName:"packages/sql-graphql",slug:"/packages/sql-graphql/queries",permalink:"/docs/next/packages/sql-graphql/queries",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/packages/sql-graphql/queries.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/packages/sql-graphql/overview"},next:{title:"Mutations",permalink:"/docs/next/packages/sql-graphql/mutations"}},c={},o=[{value:"Example",id:"example",level:2},{value:"Advanced Queries",id:"advanced-queries",level:2},{value:"<code>get[ENTITY]by[PRIMARY_KEY]</code>",id:"getentitybyprimary_key",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>count[ENTITIES]</code>",id:"countentities",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Limit",id:"limit",level:3},{value:"Offset",id:"offset",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"queries",children:"Queries"}),"\n",(0,t.jsx)(n.p,{children:"A GraphQL query is automatically added to the GraphQL schema for each database\ntable, along with a complete mapping for all table fields."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        query{\n          pages{\n            id,\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data)\n  await app.close()\n}\nmain()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-queries",children:"Advanced Queries"}),"\n",(0,t.jsx)(n.p,{children:"The following additional queries are added to the GraphQL schema for each entity:"}),"\n",(0,t.jsx)(n.h3,{id:"getentitybyprimary_key",children:(0,t.jsx)(n.code,{children:"get[ENTITY]by[PRIMARY_KEY]"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have a table ",(0,t.jsx)(n.code,{children:"pages"})," with the field ",(0,t.jsx)(n.code,{children:"id"})," as the primary key, you can run\na query called ",(0,t.jsx)(n.code,{children:"getPageById"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"...\nconst res = await app.inject({\n  method: 'POST',\n  url: '/graphql',\n  body: {\n    query: `\n      query{\n        getPageById(id: 3) {\n          id,\n          title\n        }\n      }\n    `\n  }\n})\nconst result = await res.json()\nconsole.log(result.data) // { getPageById: { id: '3', title: 'A fiction' } }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"countentities",children:(0,t.jsx)(n.code,{children:"count[ENTITIES]"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"...\nconst res = await app.inject({\n  method: 'POST',\n  url: '/graphql',\n  body: {\n    query: `\n      query {\n        countPages {\n          total\n        }\n      }\n    `\n  }\n})\nconst result = await res.json()\nconsole.log(result.data) // { countMovies : { total: { 17 } }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["The Platformatic DB supports for result's pagination through input parameters: ",(0,t.jsx)(n.code,{children:"limit"})," and ",(0,t.jsx)(n.code,{children:"offset"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  users(limit:5, offset: 10) {\n    name\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"It returns 5 users starting from position 10."}),"\n",(0,t.jsx)(n.h3,{id:"limit",children:"Limit"}),"\n",(0,t.jsxs)(n.p,{children:["By default a ",(0,t.jsx)(n.em,{children:"limit"})," value (",(0,t.jsx)(n.code,{children:"10"}),") is applied to each request."]}),"\n",(0,t.jsxs)(n.p,{children:["Clients can override this behavior by passing a value.\nIn this case the server validates the input and an error is return if exceeds the ",(0,t.jsx)(n.code,{children:"max"})," accepted value (",(0,t.jsx)(n.code,{children:"100"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Limit's values can be customized through configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "db": {\n    ...\n    "limit": {\n      "default": 50,\n      "max": 1000\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Limit"})," only accepts values ",(0,t.jsx)(n.code,{children:">= 0"}),". Otherwise an error is return."]}),"\n",(0,t.jsx)(n.h3,{id:"offset",children:"Offset"}),"\n",(0,t.jsxs)(n.p,{children:["By default ",(0,t.jsx)(n.em,{children:"offset"})," is not applied to the request.\nClients can override this behavior by passing a value."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Offset"})," only accepts values ",(0,t.jsx)(n.code,{children:">= 0"}),". Otherwise an error is return."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);