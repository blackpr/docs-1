"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[96485],{8378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var i=a(74848),s=a(28453);const r={title:"Introduction",label:"Welcome to Platformatic"},o="Welcome to Platformatic",n={id:"Overview",title:"Introduction",description:"Welcome to the Platformatic documentation. Platformatic is an open-source platform that simplifies backend development by providing tools to quickly build and deploy APIs with GraphQL, REST, and SQL capabilities.",source:"@site/versioned_docs/version-1.42.0/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/docs/1.42.0/Overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.42.0/Overview.md",tags:[],version:"1.42.0",frontMatter:{title:"Introduction",label:"Welcome to Platformatic"},sidebar:"docs",next:{title:"Quick Start Guide",permalink:"/docs/1.42.0/getting-started/quick-start-guide"}},c={},l=[{value:"Why Choose Platformatic?",id:"why-choose-platformatic",level:2},{value:"Platformatic Service",id:"platformatic-service",level:2},{value:"Platformatic DB",id:"platformatic-db",level:2},{value:"Platformatic Composer",id:"platformatic-composer",level:2},{value:"Platformatic Runtime",id:"platformatic-runtime",level:2},{value:"Platformatic Stackables",id:"platformatic-stackables",level:2},{value:"Other Resources",id:"other-resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"welcome-to-platformatic",children:"Welcome to Platformatic"}),"\n",(0,i.jsx)(t.p,{children:"Welcome to the Platformatic documentation. Platformatic is an open-source platform that simplifies backend development by providing tools to quickly build and deploy APIs with GraphQL, REST, and SQL capabilities."}),"\n",(0,i.jsx)(t.p,{children:"It enhances productivity through features like auto-generated schemas, a built-in authorization system, and easy integration with existing databases and frontend frameworks"}),"\n",(0,i.jsx)(t.h2,{id:"why-choose-platformatic",children:"Why Choose Platformatic?"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic enables developers to efficiently develop and run APIs at scale. Historically, API developers have had to repetitively build infrastructure to satisfy foundational requirements, like authentication, authorization, caching, and connection to databases, and have had to manage microservices with technologies such as service mesh or centralized registries."}),"\n",(0,i.jsx)(t.p,{children:"This is time consuming, and painstakingly complex. With growing demands of SaaS applications, the amount of API permutations has grown exponentially and has become a development bottleneck. This has led large organizations to create dedicated platform API engineering teams to help teams deliver on business demands."}),"\n",(0,i.jsx)(t.p,{children:"At Platformatic, Our goal is to make API development simple: we aim to remove friction from the day-to-day of backend developers."}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-service",children:"Platformatic Service"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Service",src:a(35156).A+"",width:"1321",height:"631"})}),"\n",(0,i.jsxs)(t.p,{children:["A Platformatic Service is an HTTP server based on ",(0,i.jsx)(t.a,{href:"https://www.fastify.io/",children:"Fastify"})," that allows developers to build robust APIs with Node.js."]}),"\n",(0,i.jsx)(t.p,{children:"With Platformatic Service you can:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add custom functionality in a ",(0,i.jsx)(t.a,{href:"https://fastify.dev/docs/latest/Reference/Plugins",children:"Fastify plugin"})]}),"\n",(0,i.jsxs)(t.li,{children:["Write plugins in JavaScript or ",(0,i.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})]}),"\n",(0,i.jsx)(t.li,{children:"Optionally use TypeScript to write your application code"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-db",children:"Platformatic DB"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic DB Architecture",src:a(49057).A+"",width:"1321",height:"631"})}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB can expose an SQL database by dynamically mapping it to REST/OpenAPI\nand GraphQL endpoints. It supports a limited subset of the SQL query language, but\nalso allows developers to add their own custom routes and resolvers."}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB is composed of a few key libraries:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-mapper"})," - follows the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern",children:"Data Mapper pattern"})," to build an API on top of a SQL database.\nInternally it uses the ",(0,i.jsxs)(t.a,{href:"https://www.atdatabases.org/",children:[(0,i.jsx)(t.code,{children:"@database"})," project"]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-openapi"})," - uses ",(0,i.jsx)(t.code,{children:"sql-mapper"})," to create a series of REST routes and matching OpenAPI definitions.\nInternally it uses ",(0,i.jsx)(t.a,{href:"https://github.com/fastify/fastify-swagger",children:(0,i.jsx)(t.code,{children:"@fastify/swagger"})}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-graphql"})," - uses ",(0,i.jsx)(t.code,{children:"sql-mapper"})," to create a GraphQL endpoint and schema. ",(0,i.jsx)(t.code,{children:"sql-graphql"})," also support Federation.\nInternally it uses ",(0,i.jsx)(t.a,{href:"https://github.com/mercurius-js/mercurius",children:(0,i.jsx)(t.code,{children:"mercurius"})}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["SQL database migrations - uses ",(0,i.jsx)(t.code,{children:"sql-mapper"})," to perform schema migrations. Internally it uses ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/postgrator",children:(0,i.jsx)(t.code,{children:"postgrator"})})," library."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Platformatic DB allows you to load a ",(0,i.jsx)(t.a,{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",children:"Fastify plugin"})," during server startup that contains your own application-specific code.\nThe plugin can add more routes or resolvers \u2014 these will automatically be shown in the OpenAPI and GraphQL schemas."]}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-composer",children:"Platformatic Composer"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Composer Architecture",src:a(67849).A+"",width:"1321",height:"631"})}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Composer is an HTTP server that automatically aggregates multiple services APIs into a single API.\nThe composer acts as a proxy for the underlying services, and automatically generates an OpenAPI definition that combines all the services' routes, acting as reverse proxy for the composed services."}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-runtime",children:"Platformatic Runtime"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Runtime Architecture",src:a(5395).A+"",width:"1321",height:"631"})}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Runtime is an environment for running multiple Platformatic microservices as a single monolithic deployment unit."}),"\n",(0,i.jsx)(t.p,{children:'In a Platformatic Runtime, each service is a separate process that communicates with Interservice communication using private message passing.\nThe Runtime exposes an "entrypoint" API for the whole runtime. Only the entrypoint binds to an operating system port and can be reached from outside of the runtime.'}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-stackables",children:"Platformatic Stackables"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Stackables Architecture",src:a(9778).A+"",width:"1321",height:"631"})}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Stackables are reusable components that can be used to build Platformatic Services. Services can extends these modules and add custom functionalities."}),"\n",(0,i.jsx)(t.p,{children:"This is useful to publish the application on the public npm registry (or a private one!), including building your own CLI, or to create a specialized template for your organization to allow for centralized bugfixes and updates."}),"\n",(0,i.jsx)(t.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Check out our ",(0,i.jsx)(t.a,{href:"https://blog.platformatic.dev/",children:"Blog"})," and watch tutorials on ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/channel/UCLuqTMhiF1BHGPTLYO4M3Gw",children:"YouTube"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Join our Community on ",(0,i.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord"})," for updates and share your thoughts."]}),"\n",(0,i.jsxs)(t.li,{children:["Follow us on ",(0,i.jsx)(t.a,{href:"https://twitter.com/platformatic",children:"Twitter"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},67849:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/Platformatic_Composer_Diagram_(Light_Mode)-6db2ec06271a23f102f91a2a3725de12.png"},49057:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/Platformatic_DB_Diagram_(Light_Mode)-68b5e52c11e970cd1395fe2ef0a2ac76.png"},5395:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/Platformatic_Runtime_Diagram_(Light_Mode)-cd7cb3dd7b29788c3778b674c9730489.png"},35156:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/Platformatic_Service_Diagram_(Light_Mode)-f59dda916070b28ece57817bc67ebe84.png"},9778:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/Platformatic_Stackables_Diagram_(Light_Mode)-1488b025268bd3181a364afba41a2a8a.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>n});var i=a(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);