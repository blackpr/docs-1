"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[5468],{11170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const a={},r="sql-mapper Fastify Plugin",o={id:"packages/sql-mapper/fastify-plugin",title:"sql-mapper Fastify Plugin",description:"The @platformatic/sql-mapper package exports a Fastify plugin that can be used out-of the box in a server application.",source:"@site/versioned_docs/version-1.44.0/packages/sql-mapper/fastify-plugin.md",sourceDirName:"packages/sql-mapper",slug:"/packages/sql-mapper/fastify-plugin",permalink:"/docs/1.44.0/packages/sql-mapper/fastify-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.44.0/packages/sql-mapper/fastify-plugin.md",tags:[],version:"1.44.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/1.44.0/packages/sql-mapper/overview"},next:{title:"Overview",permalink:"/docs/1.44.0/packages/sql-mapper/entities/overview"}},p={},l=[{value:"Usage",id:"usage",level:4},{value:"TypeScript support",id:"typescript-support",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sql-mapper-fastify-plugin",children:"sql-mapper Fastify Plugin"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@platformatic/sql-mapper"})," package exports a ",(0,s.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," plugin that can be used out-of the box in a server application."]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"connectionString"})," option must be passed to connect to your database."]}),"\n",(0,s.jsxs)(t.p,{children:["The plugin decorates the server with a ",(0,s.jsx)(t.code,{children:"platformatic"})," object that has the following properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"db"})," \u2014 the DB wrapper object provided by ",(0,s.jsx)(t.a,{href:"https://www.atdatabases.org/",children:(0,s.jsx)(t.code,{children:"@databases"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sql"})," \u2014 the SQL query mapper object provided by ",(0,s.jsx)(t.a,{href:"https://www.atdatabases.org/",children:(0,s.jsx)(t.code,{children:"@databases"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"entities"})," \u2014 all entity objects with their ",(0,s.jsx)(t.a,{href:"./entities/api",children:"API methods"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"addEntityHooks"})," \u2014 a function to add a ",(0,s.jsx)(t.a,{href:"./entities/hooks",children:"hook"})," to an entity API method"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The plugin also decorates the Fastify ",(0,s.jsx)(t.code,{children:"Request"})," object with the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"platformaticContext"}),": an object with the following two properties:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"app"}),", the Fastify application of the given route"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reply"}),", the Fastify ",(0,s.jsx)(t.code,{children:"Reply"}),"  instance matching that request"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst mapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(mapper.plugin, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n\n  app.get('/all-pages', async (req, reply) => {\n    // Optionally get the platformatic context.\n    // Passing this to all sql-mapper functions allow to apply\n    // authorization rules to the database queries (amongst other things).\n    const ctx = req.platformaticContext\n\n    // Will return all rows from 'pages' table\n    const res = await app.platformatic.entities.page.find({ ctx })\n    return res\n  })\n\n  await app.listen({ port: 3333 })\n}\n\nmain()\n"})}),"\n",(0,s.jsx)(t.h4,{id:"typescript-support",children:"TypeScript support"}),"\n",(0,s.jsx)(t.p,{children:"In order for this module to work on a TypeScript setup (outside of a Platformatic application),\nyou have to add the following to your types:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { Entities, Entity } from '@platformatic/sql-mapper'\n\ntype Movie {\n  id: number,\n  title: string\n}\n\ninterface AppEntities extends Entities {\n  movie: Entity<Movie>\n}\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    platformatic: SQLMapperPluginInterface<AppEntities>\n  }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);