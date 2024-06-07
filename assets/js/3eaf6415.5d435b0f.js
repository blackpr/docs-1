"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77274],{65339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={title:"Overview",label:"Welcome to Platformatic"},a="Add Custom Functionality",r={id:"guides/add-custom-functionality/overview",title:"Overview",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-1.45.0/guides/add-custom-functionality/overview.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/overview",permalink:"/docs/guides/add-custom-functionality/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/guides/add-custom-functionality/overview.md",tags:[],version:"1.45.0",frontMatter:{title:"Overview",label:"Welcome to Platformatic"},sidebar:"Learn",previous:{title:"Seed a Database",permalink:"/docs/guides/seed-a-database"},next:{title:"Prerequisites",permalink:"/docs/guides/add-custom-functionality/prerequisites"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"add-custom-functionality",children:"Add Custom Functionality"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,i.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,i.jsx)(t.p,{children:"The config file will specify where the plugin file is located as the example below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The path is relative to the config file path."}),"\n",(0,i.jsxs)(t.p,{children:["Since it uses ",(0,i.jsx)(t.a,{href:"https://github.com/mcollina/fastify-isolate",children:"fastify-isolate"})," under the hood, all other options of that package may be specified under the ",(0,i.jsx)(t.code,{children:"plugin"})," property."]}),"\n",(0,i.jsx)(t.p,{children:"Once the config file is set up, you can write your plugin"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"module.exports = async function (app) {\n  app.log.info('plugin loaded')\n  // Extend GraphQL Schema with resolvers\n  app.graphql.extendSchema(`\n    extend type Query {\n      add(x: Int, y: Int): Int\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      add: async (_, { x, y }) => x + y\n    }\n  })\n\n  // Create a new route, see https://www.fastify.io/docs/latest/Reference/Routes/ for more info\n  app.post('/sum', (req, reply) => {\n    const {x, y} = req.body\n    return { result: x + y }\n  })\n\n  // access platformatic entities data\n  app.get('/all-entities', (req, reply) => {\n    const entities = Object.keys(app.platformatic.entities)\n    return { entities }\n  })\n}\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);