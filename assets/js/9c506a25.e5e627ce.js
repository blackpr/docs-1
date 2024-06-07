"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[83492],{58978:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(74848),n=i(28453);const r={title:"Overview",label:"Platformatic DB"},a="Platformatic DB",l={id:"db/overview",title:"Overview",description:"Platformatic DB is an HTTP server that provides a flexible set of tools for",source:"@site/docs/db/overview.md",sourceDirName:"db",slug:"/db/overview",permalink:"/docs/next/db/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/db/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",label:"Platformatic DB"},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/next/composer/plugin"},next:{title:"Configuration",permalink:"/docs/next/db/configuration"}},o={},d=[{value:"Features",id:"features",level:2},{value:"Command Line Interface",id:"command-line-interface",level:3},{value:"Multiple Database Support",id:"multiple-database-support",level:3},{value:"REST/OpenAPI",id:"restopenapi",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:3},{value:"Complete flexibility",id:"complete-flexibility",level:3},{value:"Usage",id:"usage",level:3},{value:"Supported databases",id:"supported-databases",level:2},{value:"Issues",id:"issues",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"platformatic-db",children:"Platformatic DB"}),"\n",(0,s.jsx)(t.p,{children:"Platformatic DB is an HTTP server that provides a flexible set of tools for\nbuilding robust APIs with Node.js."}),"\n",(0,s.jsxs)(t.p,{children:["For a high level overview of how Platformatic DB works, please reference the\n",(0,s.jsx)(t.a,{href:"/docs/next/Overview",children:"Introduction"})," guide."]}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Easily manage your databases with the ",(0,s.jsx)(t.code,{children:"platformatic db"})," ",(0,s.jsx)(t.a,{href:"/docs/next/cli#db",children:"CLI"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"multiple-database-support",children:"Multiple Database Support"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Integration with ",(0,s.jsx)(t.a,{href:"#supported-databases",children:"multiple database systems"})]}),"\n",(0,s.jsxs)(t.li,{children:["Efficient ",(0,s.jsx)(t.a,{href:"/docs/next/db/migrations",children:"Database migrations"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"restopenapi",children:"REST/OpenAPI"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Automatically generate a ",(0,s.jsx)(t.a,{href:"/docs/next/packages/sql-openapi/overview",children:"REST API"})," from your database schema."]}),"\n",(0,s.jsxs)(t.li,{children:["Access interactive documentation via ",(0,s.jsx)(t.a,{href:"https://docs.scalar.com/swagger-editor",children:"Scalar"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Generate ",(0,s.jsx)(t.a,{href:"https://swagger.io/resources/open-api/",children:"OpenAPI 3.0"})," schema."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a ",(0,s.jsx)(t.a,{href:"/docs/next/packages/sql-graphql/overview",children:"GraphQL API"})," directly from your database schema."]}),"\n",(0,s.jsxs)(t.li,{children:["Extend your API with ",(0,s.jsx)(t.a,{href:"https://www.apollographql.com/docs/federation/",children:"Apollo Federation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Explore your API with the web-based ",(0,s.jsx)(t.a,{href:"https://github.com/graphql/graphiql",children:"GraphiQL IDE"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"authentication-and-authorization",children:"Authentication and Authorization"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Secure your APIs with advanced methods such as ",(0,s.jsx)(t.a,{href:"/docs/next/db/authorization/strategies",children:"JWT, Webhooks, and HTTP Headers"})," (for development use)."]}),"\n",(0,s.jsxs)(t.li,{children:["Implement ",(0,s.jsx)(t.a,{href:"/docs/next/db/authorization/user-roles-metadata",children:"role-based access control (RBAC)"})," authorization."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"complete-flexibility",children:"Complete flexibility"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add custom functionality in a ",(0,s.jsx)(t.a,{href:"/docs/next/db/plugin",children:"Fastify plugin"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Interact with your database via ",(0,s.jsx)(t.a,{href:"/docs/next/packages/sql-mapper/entities/overview",children:"mapped entities"})," or execute ",(0,s.jsx)(t.a,{href:"/docs/next/packages/sql-mapper/overview",children:"raw SQL queries"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Develop plugins in JavaScript or ",(0,s.jsx)(t.a,{href:"/docs/next/cli#compile",children:"TypeScript"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Automatically generate types based on SQL tables."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Integrate Platformatic DB ",(0,s.jsx)(t.a,{href:"/docs/next/db/programmatic",children:"programmatically"})," into your tests or other applications for more dynamic usage."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Ready to start? Dive into our ",(0,s.jsx)(t.a,{href:"/docs/next/getting-started/quick-start-guide",children:"Quick Start Guide"})," and get your API up and running in just 2 minutes! \u26a1"]})}),"\n",(0,s.jsx)(t.h2,{id:"supported-databases",children:"Supported databases"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.sqlite.org/",children:"SQLite"})}),(0,s.jsx)(t.td,{children:"3.x"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})}),(0,s.jsx)(t.td,{children:">= 15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.mysql.com/",children:"MySQL"})}),(0,s.jsx)(t.td,{children:">= 5.7"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://mariadb.org/",children:"MariaDB"})}),(0,s.jsx)(t.td,{children:">= 10.11"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The database driver is automatically loaded based on the value ",(0,s.jsx)(t.a,{href:"/docs/next/db/configuration#db",children:(0,s.jsx)(t.code,{children:"connectionString"})})," configuration setting."]}),"\n",(0,s.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,s.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,s.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,s.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);