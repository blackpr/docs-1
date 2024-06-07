"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[49507],{41237:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(74848),s=n(28453);const o={},r="Plugin",l={id:"service/plugin",title:"Plugin",description:"To add more features to a Platformatic service, you will need to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-1.45.0/service/plugin.md",sourceDirName:"service",slug:"/service/plugin",permalink:"/docs/service/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/service/plugin.md",tags:[],version:"1.45.0",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/service/configuration"},next:{title:"Programmatic API",permalink:"/docs/service/programmatic"}},a={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple Plugins",id:"multiple-plugins",level:2},{value:"TypeScript and Autocompletion",id:"typescript-and-autocompletion",level:2},{value:"Plugin definition with TypeScript",id:"plugin-definition-with-typescript",level:3},{value:"Loading compiled files",id:"loading-compiled-files",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"plugin",children:"Plugin"}),"\n",(0,t.jsxs)(i.p,{children:["To add more features to a Platformatic service, you will need to register a plugin, which will be in the form of a standard ",(0,t.jsx)(i.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.p,{children:"The config file specifies where the plugin file is located. The path is relative to the config file path."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["You should export an async ",(0,t.jsx)(i.code,{children:"function"})," which receives the following parameters:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app"})," (",(0,t.jsx)(i.code,{children:"FastifyInstance"}),") the main fastify ",(0,t.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"opts"})," all the options specified in the config file after ",(0,t.jsx)(i.code,{children:"path"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,t.jsxs)(i.p,{children:["The plugin file is watched by the ",(0,t.jsx)(i.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,t.jsx)(i.code,{children:"fs.watch"})})," function."]}),"\n",(0,t.jsx)(i.p,{children:"You don't need to reload the Platformatic Service server while working on your plugin. Every time you save, the watcher will trigger a reload event, and the server will auto-restart and load your updated code."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["On Linux, file watch in subdirectories is not supported due to a Node.js limitation (",(0,t.jsx)(i.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"documented here"}),")."]})}),"\n",(0,t.jsx)(i.h2,{id:"directories",children:"Directories"}),"\n",(0,t.jsxs)(i.p,{children:["The path can also be a directory. In that case, the directory will be loaded with ",(0,t.jsx)(i.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,t.jsx)(i.code,{children:"@fastify/autoload"})}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Example Directory Structure"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n"})}),"\n",(0,t.jsxs)(i.p,{children:["By default the folder will be added as a prefix to all the routes defined within them.\nSee the ",(0,t.jsx)(i.a,{href:"/docs/runtime/configuration#autoload",children:"autoload"})," documentation for all the options to customize this behavior."]}),"\n",(0,t.jsx)(i.h2,{id:"multiple-plugins",children:"Multiple Plugins"}),"\n",(0,t.jsx)(i.p,{children:"Multiple plugins can be loaded in parallel by specifying an array:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"typescript-and-autocompletion",children:"TypeScript and Autocompletion"}),"\n",(0,t.jsx)(i.p,{children:"To provide the correct typings of the features added by Platformatic Service to your Fastify instance, add the following at the top of your files:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'/// <references types="@platformatic/service" />\n'})}),"\n",(0,t.jsx)(i.h3,{id:"plugin-definition-with-typescript",children:"Plugin definition with TypeScript"}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of writing a plugin in TypeScript:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"/// <reference types=\"@platformatic/service\" />\nimport { FastifyInstance, FastifyPluginOptions } from 'fastify'\n\nexport default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Note that you need to add the ",(0,t.jsx)(i.code,{children:'"typescript": true'})," configuration to your ",(0,t.jsx)(i.code,{children:"platformatic.service.json"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"loading-compiled-files",children:"Loading compiled files"}),"\n",(0,t.jsxs)(i.p,{children:["Setting ",(0,t.jsx)(i.code,{children:'"typescript": false'})," but including a ",(0,t.jsx)(i.code,{children:"tsconfig.json"})," with an ",(0,t.jsx)(i.a,{href:"https://www.typescriptlang.org/tsconfig#outDir",children:(0,t.jsx)(i.code,{children:"outDir"})}),"\noption, will instruct Platformatic Service to try loading your plugins from that folder instead.\nThis setup supports pre-compiled sources to reduce cold start time during deployment."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",metastring:'title="Example Configuration"',children:'{\n  "typescript": false,\n  "plugins": {\n    "paths": [\n      { "path": "./dist/plugin.js" }\n    ]\n  }\n}\n'})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);