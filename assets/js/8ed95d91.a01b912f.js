"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[38102,19048],{25221:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(74848),a=n(28453);const r={},o=void 0,s={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/docs/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/next/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/getting-started/issues.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Issues",id:"issues",level:2}];function l(t){const e={a:"a",h2:"h2",p:"p",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(e.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,i.jsx)(e.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,i.jsx)(e.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function m(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},49015:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(74848),a=n(28453),r=n(25221);const o={},s="Programmatic API",c={id:"runtime/programmatic",title:"Programmatic API",description:"Using the @platformatic/runtime API, you can start Platformatic applications programmatically, bypassing the command line. This API facilitates interaction with various application types such as service, db, composer, and runtime, simplifying operations across different services.",source:"@site/docs/runtime/programmatic.md",sourceDirName:"runtime",slug:"/runtime/programmatic",permalink:"/docs/next/runtime/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/runtime/programmatic.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/next/runtime/configuration"},next:{title:"Overview",permalink:"/docs/next/service/overview"}},d={},l=[{value:"<code>buildServer()</code>",id:"buildserver",level:2},{value:"Custom Configuration",id:"custom-configuration",level:2},{value:"<code>loadConfig()</code>",id:"loadconfig",level:2},{value:"<code>start()</code>",id:"start",level:2},{value:"<code>startCommand()</code>",id:"startcommand",level:2},...r.toc];function m(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,i.jsxs)(e.p,{children:["Using the ",(0,i.jsx)(e.code,{children:"@platformatic/runtime"})," API, you can start Platformatic applications programmatically, bypassing the command line. This API facilitates interaction with various application types such as ",(0,i.jsx)(e.code,{children:"service"}),", ",(0,i.jsx)(e.code,{children:"db"}),", ",(0,i.jsx)(e.code,{children:"composer"}),", and ",(0,i.jsx)(e.code,{children:"runtime"}),", simplifying operations across different services."]}),"\n",(0,i.jsx)(e.h2,{id:"buildserver",children:(0,i.jsx)(e.code,{children:"buildServer()"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"buildServer"})," function initializes a server based on a configuration object or file. It supports configurations for Platformatic Service, Platformatic DB, Platformatic Composer, and any other applications developed on top of ",(0,i.jsx)(e.a,{href:"/docs/next/service/programmatic",children:"Platformatic Service"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { buildServer } from '@platformatic/runtime'\n\n// Initialize the server using a configuration file\nconst app = await buildServer('path/to/platformatic.runtime.json')\nconst entrypointUrl = await app.start()\n\n// Sample request to the server's entrypoint\nconst res = await fetch(entrypointUrl)\nconsole.log(await res.json())\n\n// Perform other operations\n\nawait app.close()\n"})}),"\n",(0,i.jsx)(e.h2,{id:"custom-configuration",children:"Custom Configuration"}),"\n",(0,i.jsx)(e.p,{children:"You can customize your server setup directly within your code by specifying the configuration details:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { buildServer } from '@platformatic/runtime'\n\nconst config = {\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/runtime',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/service',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/db',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/composer'\n  ...\n}\nconst app = await buildServer(config)\n\nawait app.start()\n"})}),"\n",(0,i.jsx)(e.h2,{id:"loadconfig",children:(0,i.jsx)(e.code,{children:"loadConfig()"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"loadConfig"})," function reads and parses a configuration file for any Platformatic application. It can automatically detect the type of application or accept explicit instructions."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { loadConfig } from '@platformatic/runtime'\n\n// Read the configuration and automatically detect the application type.\nconst config = await loadConfig({}, ['-c', '/path/to/platformatic.config.json'])\n\n// Read the config based on command line arguments and provide default configuration if needed\nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json']\n)\n\n// Specify a default config \nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json'],\n  { key: 'value' }\n)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"start",children:(0,i.jsx)(e.code,{children:"start()"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"start"})," function loads a configuration, builds and starts a server but does not return the server instance. This function is best suited for scenarios where no further interaction with the server is necessary after launch."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { start } from '@platformatic/runtime'\n\nawait start(['-c', '/path/to/platformatic.config.json])\n"})}),"\n",(0,i.jsx)(e.h2,{id:"startcommand",children:(0,i.jsx)(e.code,{children:"startCommand()"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"startCommand"})," function is similar to ",(0,i.jsx)(e.code,{children:"start"}),". However, if an exception\noccurs, ",(0,i.jsx)(e.code,{children:"startCommand"})," logs the error and exits the process. This is different\nfrom ",(0,i.jsx)(e.code,{children:"start"}),", which throws the exception."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { startCommand } from '@platformatic/runtime'\n\nawait startCommand(['-c', '/path/to/platformatic.config.json])\n"})}),"\n",(0,i.jsx)(r.default,{})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(m,{...t})}):m(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function o(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);