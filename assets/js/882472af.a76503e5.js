"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[27975,18737],{48272:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453),r=i(32075);const o={},a="Plugin",l={id:"composer/plugin",title:"Plugin",description:"To extend the functionality of a service in Platformatic, you can register a plugin. These plugins are standard Fastify plugins.",source:"@site/versioned_docs/version-1.45.0/composer/plugin.md",sourceDirName:"composer",slug:"/composer/plugin",permalink:"/docs/composer/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/composer/plugin.md",tags:[],version:"1.45.0",frontMatter:{},sidebar:"docs",previous:{title:"API modification",permalink:"/docs/composer/api-modification"},next:{title:"Overview",permalink:"/docs/db/overview"}},c={},d=[{value:"Plugin Configuration",id:"plugin-configuration",level:2},{value:"Creating a Plugin",id:"creating-a-plugin",level:3},{value:"Example Plugin",id:"example-plugin",level:4},{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Example Directory Structure",id:"example-directory-structure",level:3},{value:"Loading Multiple Plugins",id:"loading-multiple-plugins",level:2},...r.toc];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"plugin",children:"Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["To extend the functionality of a service in Platformatic, you can register a ",(0,t.jsx)(n.a,{href:"https://fastify.dev/docs/latest/Reference/Plugins/",children:"plugin"}),". These plugins are standard ",(0,t.jsx)(n.a,{href:"https://fastify.io",children:"Fastify"})," plugins."]}),"\n",(0,t.jsx)(n.h2,{id:"plugin-configuration",children:"Plugin Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Specify the location of your plugin files in the configuration file, as shown in the example below. This path is relative to the config file path."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-plugin",children:"Creating a Plugin"}),"\n",(0,t.jsx)(n.p,{children:"Your plugin should export an asynchronous function that receives the parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app"})," (",(0,t.jsx)(n.code,{children:"FastifyInstance"}),"): this is the main fastify ",(0,t.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"opts"}),": contains all the options specified in the config file after ",(0,t.jsx)(n.code,{children:"path"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-plugin",children:"Example Plugin"}),"\n",(0,t.jsx)(n.p,{children:"Here's a simple example of a Fastify plugin:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = async function (app, opts) {\n  app.get('/hello', async (request, reply) => {\n    return 'Hello from Platformatic!';\n  });\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,t.jsxs)(n.p,{children:["The plugin file is monitored by the ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,t.jsx)(n.code,{children:"fs.watch"})})," function. There's no need to manually reload the Platformatic Composer server while developing your plugin. Changes are detected automatically, triggering a server restart to load your updated code."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Currently, on Linux, file watching in subdirectories is not supported due to a Node.js limitation, as documented ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins can also be directories, which are loaded using ",(0,t.jsx)(n.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,t.jsx)(n.code,{children:"@fastify/autoload"})}),". This approach automatically configures routes matching the folder structure."]}),"\n",(0,t.jsx)(n.h3,{id:"example-directory-structure",children:"Example Directory Structure"}),"\n",(0,t.jsx)(n.p,{children:"Consider the following directory structure for organizing multiple plugins:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, each folder will be added as a prefix to the routes defined within them. Refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/fastify/fastify-autoload",children:"@fastify/autoload"})," documentation for customization options."]}),"\n",(0,t.jsx)(n.h2,{id:"loading-multiple-plugins",children:"Loading Multiple Plugins"}),"\n",(0,t.jsx)(n.p,{children:"To load multiple plugins in parallel, specify an array of paths in the configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})}),"\n",(0,t.jsx)(r.default,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},32075:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(74848),s=i(28453);const r={},o=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.45.0/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/getting-started/issues.md",tags:[],version:"1.45.0",frontMatter:{}},l={},c=[{value:"Issues",id:"issues",level:2}];function d(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,t.jsxs)(n.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,t.jsx)(n.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,t.jsx)(n.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);