"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[16938,94273],{17154:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(74848),i=s(28453),r=s(78754);const a={},o="Programmatic API",c={id:"db/programmatic",title:"Programmatic API",description:"Platformatic DB allows starting and managing database instances programmatically using JavaScript, offering a flexible way to integrate database operations into your applications or scripts.",source:"@site/versioned_docs/version-1.41.1/db/programmatic.md",sourceDirName:"db",slug:"/db/programmatic",permalink:"/docs/1.41.1/db/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/db/programmatic.md",tags:[],version:"1.41.1",frontMatter:{},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/1.41.1/db/logging"},next:{title:"Schema support",permalink:"/docs/1.41.1/db/schema-support"}},l={},d=[{value:"Customizing Configuration",id:"customizing-configuration",level:2},{value:"API",id:"api",level:2},{value:"buildServer(config)",id:"buildserverconfig",level:3},{value:"RestartableApp",id:"restartableapp",level:3},...r.toc];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,n.jsx)(t.p,{children:"Platformatic DB allows starting and managing database instances programmatically using JavaScript, offering a flexible way to integrate database operations into your applications or scripts."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer('/path/to/platformatic.db.json')\n\nawait app.start() // This starts the server.\nconsole.log('Server URL:', app.url)\n\nconst res = await fetch(app.url)\nconsole.log('Server response:', await res.json())\n\n// Additional operations can be performed here.\n\nawait app.close() // This stops the server.\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customizing-configuration",children:"Customizing Configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can customize the server configuration to meet specific requirements, such as setting a custom hostname or database connection string:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  db: {\n    connectionString: 'sqlite://test.sqlite'\n  },\n})\n\nawait app.start() // this will start our server\n\nconsole.log('URL', app.url)\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more details on how this is implemented, read ",(0,n.jsx)(t.a,{href:"/docs/1.41.1/service/programmatic",children:"Platformatic Service Programmatic API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"buildserverconfig",children:"buildServer(config)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["parameters: ",(0,n.jsx)(t.code,{children:"config"})," (Object) - configuration settings for the server and database."]}),"\n",(0,n.jsxs)(t.li,{children:["Returns: An instance of ",(0,n.jsx)(t.a,{href:"#restartableapp",children:"restartable application"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"restartableapp",children:"RestartableApp"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".start()"}),": Initializes and listens to the hostname/port defined in the config."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".restart()"}),": Restarts the Fastify application, useful for applying configuration changes or recovering from state issues."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:".close()"}),": Stops the application."]}),"\n"]}),"\n",(0,n.jsx)(r.default,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},78754:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(74848),i=s(28453);const r={},a=void 0,o={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.41.1/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/1.41.1/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/getting-started/issues.md",tags:[],version:"1.41.1",frontMatter:{}},c={},l=[{value:"Issues",id:"issues",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,n.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,n.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,n.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);