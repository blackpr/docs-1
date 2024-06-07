"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[18273,18737],{32075:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(74848),r=i(28453);const s={},o=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.45.0/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/getting-started/issues.md",tags:[],version:"1.45.0",frontMatter:{}},c={},l=[{value:"Issues",id:"issues",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,n.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,n.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,n.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},89332:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(74848),r=i(28453),s=i(32075);const o={title:"Overview",label:"Platformatic Runtime"},a="Platformatic Runtime",c={id:"runtime/overview",title:"Overview",description:"Platformatic Runtime provides a unified environment for running multiple Platformatic microservices as a single monolithic deployment unit, for streamlined development.",source:"@site/versioned_docs/version-1.45.0/runtime/overview.md",sourceDirName:"runtime",slug:"/runtime/overview",permalink:"/docs/runtime/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/runtime/overview.md",tags:[],version:"1.45.0",frontMatter:{title:"Overview",label:"Platformatic Runtime"},sidebar:"docs",previous:{title:"Schema support",permalink:"/docs/db/schema-support"},next:{title:"Configuration",permalink:"/docs/runtime/configuration"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Example configuration file",id:"example-configuration-file",level:2},{value:"TypeScript Compilation",id:"typescript-compilation",level:2},{value:"Platformatic Runtime context",id:"platformatic-runtime-context",level:2},{value:"Interservice communication",id:"interservice-communication",level:2},...s.toc];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"platformatic-runtime",children:"Platformatic Runtime"}),"\n",(0,n.jsx)(t.p,{children:"Platformatic Runtime provides a unified environment for running multiple Platformatic microservices as a single monolithic deployment unit, for streamlined development."}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Command-line interface"}),": ",(0,n.jsx)(t.a,{href:"/docs/cli#runtime",children:(0,n.jsx)(t.code,{children:"platformatic runtime"})})," provides a powerful and flexible CLI for managing your runtime environment."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Programmatic start"}),": Start Platformatic Runtime ",(0,n.jsx)(t.a,{href:"/docs/runtime/programmatic",children:"programmatically"})," in tests or other applications for enhanced integration."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Monorepo support"}),": Efficiently manage applications within a monorepo setup."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interservice communication"}),":  Enable ",(0,n.jsx)(t.a,{href:"#interservice-communication",children:"interservice communication"})," using private message passing to streamline service interactions."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"standalone-usage",children:"Standalone usage"}),"\n",(0,n.jsxs)(t.p,{children:["If you're only interested in the features available in Platformatic Runtime, you can replace ",(0,n.jsx)(t.code,{children:"platformatic"})," with ",(0,n.jsx)(t.code,{children:"@platformatic/runtime"})," in the ",(0,n.jsx)(t.code,{children:"dependencies"})," of your ",(0,n.jsx)(t.code,{children:"package.json"}),". This reduces the number of dependencies you need to import for your application."]}),"\n",(0,n.jsx)(t.h2,{id:"example-configuration-file",children:"Example configuration file"}),"\n",(0,n.jsxs)(t.p,{children:["The following configuration file can be used to start a new Platformatic Runtime project. For more details on the configuration file, see the ",(0,n.jsx)(t.a,{href:"/docs/runtime/configuration",children:"configuration documentation"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.26.0/runtime",\n  "autoload": {\n    "path": "./packages",\n    "exclude": ["docs"]\n  },\n  "entrypoint": "entrypointApp"\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"typescript-compilation",children:"TypeScript Compilation"}),"\n",(0,n.jsxs)(t.p,{children:["Platformatic Runtime streamlines the compilation of all services built on TypeScript with the command ",(0,n.jsx)(t.code,{children:"plt runtime compile"}),". This command integrates seamlessly with Platformatic features, ensuring faster builds and consistent environments. it's important to note that the TypeScript compiler (",(0,n.jsx)(t.code,{children:"tsc"}),") must be installed separately."]}),"\n",(0,n.jsx)(t.h2,{id:"platformatic-runtime-context",children:"Platformatic Runtime context"}),"\n",(0,n.jsxs)(t.p,{children:["Every Platformatic Runtime application can be run as a standalone application\nor as a Platformatic Runtime service. Runtime service enables certain compile and runtime optimizations, enhancing performance and resource management. You can see the ",(0,n.jsx)(t.a,{href:"#interservice-communication",children:"interservice communication"})," for more features."]}),"\n",(0,n.jsx)(t.h2,{id:"interservice-communication",children:"Interservice communication"}),"\n",(0,n.jsx)(t.p,{children:"Platformatic Runtime allows multiple microservice applications to run\nwithin a single process. Only the entrypoint binds to an operating system\nport and can be reached from outside of the runtime."}),"\n",(0,n.jsxs)(t.p,{children:["Within the runtime, all interservice communication happens by injecting HTTP\nrequests into the running servers, without binding them to ports. This injection\nis handled by ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/fastify-undici-dispatcher",children:(0,n.jsx)(t.code,{children:"fastify-undici-dispatcher"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Each microservice is assigned an internal domain name based on its unique ID.\nFor example, a microservice with the ID ",(0,n.jsx)(t.code,{children:"awesome"})," is given the internal domain\nof ",(0,n.jsx)(t.code,{children:"http://awesome.plt.local"}),". The ",(0,n.jsx)(t.code,{children:"fastify-undici-dispatcher"})," module maps that\ndomain to the Fastify server running the ",(0,n.jsx)(t.code,{children:"awesome"})," microservice. Any Node.js\nAPIs based on Undici, such as ",(0,n.jsx)(t.code,{children:"fetch()"}),", will then automatically route requests\naddressed to ",(0,n.jsx)(t.code,{children:"awesome.plt.local"})," to the corresponding Fastify server."]}),"\n",(0,n.jsx)(t.h1,{id:"trustproxy",children:"TrustProxy"}),"\n",(0,n.jsxs)(t.p,{children:["For each service in the runtime ",(0,n.jsx)(t.strong,{children:"except the entrypoint"}),", Platformatic will set the Fastify's ",(0,n.jsx)(t.code,{children:"trustProxy"})," option to true. This will change the ip/hostname in the request object to match the one coming from the entrypoint, rather than the internal ",(0,n.jsx)(t.code,{children:"xyz.plt.local"})," name.This is useful for services behind a proxy, ensuring the original client's IP address is preserved. Visit ",(0,n.jsx)(t.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#trustproxy",children:"fastify docs"})," for more details."]}),"\n",(0,n.jsx)(s.default,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);