"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[73506],{9073:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(74848),r=i(28453);const a={},o="Deployment",l={id:"guides/deployment/deployment",title:"Deployment",description:"Applications built with Platformatic DB can be deployed to a hosting service",source:"@site/docs/guides/deployment/deployment.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/",permalink:"/docs/next/guides/deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/guides/deployment/deployment.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Running a Platformatic DB application",id:"running-a-platformatic-db-application",level:2},{value:"Make the Platformatic CLI available",id:"make-the-platformatic-cli-available",level:3},{value:"Define an npm run script",id:"define-an-npm-run-script",level:3},{value:"Server configuration",id:"server-configuration",level:2},{value:"Configuration with environment variables",id:"configuration-with-environment-variables",level:3},{value:"Configure the server port",id:"configure-the-server-port",level:3},{value:"Listen on all network interfaces",id:"listen-on-all-network-interfaces",level:3},{value:"Security considerations",id:"security-considerations",level:3},{value:"Removing the welcome page",id:"removing-the-welcome-page",level:3},{value:"Databases",id:"databases",level:2},{value:"Applying migrations",id:"applying-migrations",level:3},{value:"SQLite",id:"sqlite",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Applications built with Platformatic DB can be deployed to a hosting service\nin the same way as any other Node.js application. This guide covers a few\nthings that will help smooth the path from development to production."}),"\n",(0,t.jsx)(n.h2,{id:"running-a-platformatic-db-application",children:"Running a Platformatic DB application"}),"\n",(0,t.jsx)(n.h3,{id:"make-the-platformatic-cli-available",children:"Make the Platformatic CLI available"}),"\n",(0,t.jsxs)(n.p,{children:["To run a Platformatic DB application, the Platformatic CLI must be available\nin the production environment. The most straightforward way of achieving this\nis to ",(0,t.jsx)(n.a,{href:"/reference/cli.md#installation-and-usage",children:"install it as a project dependency"}),".\nThis means that when ",(0,t.jsx)(n.code,{children:"npm install"})," (or ",(0,t.jsx)(n.code,{children:"npm ci"}),") is run as part of your\nbuild/deployment process, the Platformatic CLI will be installed."]}),"\n",(0,t.jsx)(n.h3,{id:"define-an-npm-run-script",children:"Define an npm run script"}),"\n",(0,t.jsxs)(n.p,{children:["A number of hosting services will automatically detect if your project's\n",(0,t.jsx)(n.code,{children:"package.json"})," has a ",(0,t.jsx)(n.code,{children:"start"})," npm run script. They will then execute the command\n",(0,t.jsx)(n.code,{children:"npm start"})," to run your application in production."]}),"\n",(0,t.jsxs)(n.p,{children:["You can add ",(0,t.jsx)(n.code,{children:"platformatic db start"})," as the command for your project's ",(0,t.jsx)(n.code,{children:"start"}),"\nnpm run script, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   ...\n  "scripts": {\n    "start": "platformatic db start",\n  },\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"server-configuration",children:"Server configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/reference/db/configuration.md",children:"Configuration"})," reference for all\nconfiguration settings."]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-with-environment-variables",children:"Configuration with environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend that you use ",(0,t.jsx)(n.a,{href:"/reference/db/configuration.md#environment-variable-placeholders",children:"environment variable placeholders"}),"\nin your Platformatic DB configuration. This will allow you to configure\ndifferent settings in your development and production environments."]}),"\n",(0,t.jsxs)(n.p,{children:["In development you can set the  environment variables via a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:".env"})})," file\nthat will be automatically loaded by Platformatic DB. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PORT=3042\nPLT_SERVER_HOSTNAME=127.0.0.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"In production your hosting provider will typically provide their own mechanism\nfor setting environment variables."}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-server-port",children:"Configure the server port"}),"\n",(0,t.jsx)(n.p,{children:"Configure the port that the server will listen on by setting an environment\nvariable placeholder in your Platformatic DB configuration file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "server": {\n    ...\n    "port": "{PORT}"\n  },\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"listen-on-all-network-interfaces",children:"Listen on all network interfaces"}),"\n",(0,t.jsxs)(n.p,{children:["Most hosting providers require that you configure your server to bind to all\navailable network interfaces. To do this you must set the server hostname to\n",(0,t.jsx)(n.code,{children:"0.0.0.0"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This can be handled with an environment variable placeholder in your Platformatic\nDB configuration file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "server": {\n    ...\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n  },\n  ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The environment variable ",(0,t.jsx)(n.code,{children:"PLT_SERVER_HOSTNAME"})," should then be set to ",(0,t.jsx)(n.code,{children:"0.0.0.0"}),"\nin your hosting environment."]}),"\n",(0,t.jsx)(n.h3,{id:"security-considerations",children:"Security considerations"}),"\n",(0,t.jsx)(n.p,{children:"We recommend disabling the GraphiQL web UI in production. It can be disabled\nwith the following configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "db": {\n    ...\n    "graphql": {\n      "graphiql": false\n    }\n  },\n  ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use this feature in development, replace the configuration\nvalues with ",(0,t.jsx)(n.a,{href:"/reference/db/configuration.md#environment-variable-placeholders",children:"environment variable placeholders"}),"\nso you can set it to ",(0,t.jsx)(n.code,{children:"true"})," in development and ",(0,t.jsx)(n.code,{children:"false"})," in production."]}),"\n",(0,t.jsx)(n.h3,{id:"removing-the-welcome-page",children:"Removing the welcome page"}),"\n",(0,t.jsx)(n.p,{children:"If you want to remove the welcome page, you should register an index route."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = async function (app) {\n  // removing the welcome page\n  app.get('/', (req, reply) => {\n    return { hello: 'world' }\n  })\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"databases",children:"Databases"}),"\n",(0,t.jsx)(n.h3,{id:"applying-migrations",children:"Applying migrations"}),"\n",(0,t.jsx)(n.p,{children:"If you're running a single instance of your application in production, it's\nbest to allow Platformatic DB to automatically run migrations when the server\nstarts is. This reduces the chance of a currently running instance using a\ndatabase structure it doesn't understand while the new version is still being\ndeployed."}),"\n",(0,t.jsx)(n.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,t.jsxs)(n.p,{children:["When using an SQLite database, you can ensure you don\u2019t commit it to your Git\nrepository by adding the SQLite database filename to your ",(0,t.jsx)(n.code,{children:".gitignore"})," file.\nThe SQLite database file will be automatically generated by Platformatic DB\nwhen your application migrations are run in production."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);