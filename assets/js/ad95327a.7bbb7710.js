"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[98245,18737],{32075:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var i=t(74848),r=t(28453);const n={},o=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.45.0/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/getting-started/issues.md",tags:[],version:"1.45.0",frontMatter:{}},c={},l=[{value:"Issues",id:"issues",level:2}];function d(e){const s={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(s.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,i.jsx)(s.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,i.jsx)(s.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},33537:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),r=t(28453),n=t(32075);const o={title:"Overview",label:"Platformatic Service"},a="Platformatic Service",c={id:"service/overview",title:"Overview",description:"Platformatic Service is an HTTP server that provides a developer tools for",source:"@site/versioned_docs/version-1.45.0/service/overview.md",sourceDirName:"service",slug:"/service/overview",permalink:"/docs/service/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/service/overview.md",tags:[],version:"1.45.0",frontMatter:{title:"Overview",label:"Platformatic Service"},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/runtime/programmatic"},next:{title:"Configuration",permalink:"/docs/service/configuration"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Issues",id:"issues",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"TypeScript",id:"typescript",level:2},...n.toc];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"platformatic-service",children:"Platformatic Service"}),"\n",(0,i.jsx)(s.p,{children:"Platformatic Service is an HTTP server that provides a developer tools for\nbuilding robust APIs with Node.js."}),"\n",(0,i.jsxs)(s.p,{children:["For a high level overview of how Platformatic Service works, please reference the\n",(0,i.jsx)(s.a,{href:"/docs/Overview",children:"Overview"})," guide."]}),"\n",(0,i.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Command-line interface: ",(0,i.jsx)(s.a,{href:"/docs/cli",children:(0,i.jsx)(s.code,{children:"platformatic service"})})]}),"\n",(0,i.jsxs)(s.li,{children:["Add custom functionality in a ",(0,i.jsx)(s.a,{href:"/docs/service/plugin",children:"Fastify plugin"})]}),"\n",(0,i.jsxs)(s.li,{children:["Write plugins in JavaScript or ",(0,i.jsx)(s.a,{href:"/docs/cli#compile",children:"TypeScript"})]}),"\n",(0,i.jsxs)(s.li,{children:["Start Platformatic Service ",(0,i.jsx)(s.a,{href:"/docs/service/programmatic",children:"programmatically"})," in tests or other applications"]}),"\n",(0,i.jsx)(s.li,{children:"Fully typed"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(s.p,{children:["If you run into a bug or have a suggestion for improvement, please\n",(0,i.jsx)(s.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"raise an issue on GitHub"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"standalone-usage",children:"Standalone usage"}),"\n",(0,i.jsxs)(s.p,{children:["If you're only interested in the features available in Platformatic Service, you can simply switch ",(0,i.jsx)(s.code,{children:"platformatic"})," with ",(0,i.jsx)(s.code,{children:"@platformatic/service"})," in the ",(0,i.jsx)(s.code,{children:"dependencies"})," of your ",(0,i.jsx)(s.code,{children:"package.json"}),", so that you'll only import fewer deps."]}),"\n",(0,i.jsxs)(s.p,{children:["You can use the ",(0,i.jsx)(s.code,{children:"plt-service"})," command, it's the equivalent of ",(0,i.jsx)(s.code,{children:"plt service"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,i.jsxs)(s.p,{children:["To generate the types for the application, run ",(0,i.jsx)(s.code,{children:"platformatic db types"}),"."]}),"\n",(0,i.jsx)(n.default,{})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var i=t(96540);const r={},n=i.createContext(r);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);