"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[84195,18737],{90272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453),o=n(32075);const a={title:"Strategies",label:"Authorization"},r="Authorization Strategies",c={id:"db/authorization/strategies",title:"Strategies",description:"Platformatic DB implements flexible, role-based authorization strategies that integrate seamlessly with external authentication services. This section outlines the available strategies and how to configure them.",source:"@site/versioned_docs/version-1.45.0/db/authorization/strategies.md",sourceDirName:"db/authorization",slug:"/db/authorization/strategies",permalink:"/docs/db/authorization/strategies",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/db/authorization/strategies.md",tags:[],version:"1.45.0",frontMatter:{title:"Strategies",label:"Authorization"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/db/authorization/overview"},next:{title:"User Roles & Metadata",permalink:"/docs/db/authorization/user-roles-metadata"}},l={},d=[{value:"Supported Authorization Strategies",id:"supported-authorization-strategies",level:2},{value:"JSON Web Token (JWT)",id:"json-web-token-jwt",level:2},{value:"Configuration",id:"configuration",level:3},{value:"JSON Web Key Sets (JWKS)",id:"json-web-key-sets-jwks",level:3},{value:"JWT Custom Claim Namespace",id:"jwt-custom-claim-namespace",level:3},{value:"Webhook",id:"webhook",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"HTTP headers (development only)",id:"http-headers-development-only",level:2},{value:"Custom authorization strategies",id:"custom-authorization-strategies",level:2},...o.toc];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"authorization-strategies",children:"Authorization Strategies"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB implements flexible, role-based authorization strategies that integrate seamlessly with external authentication services. This section outlines the available strategies and how to configure them."}),"\n",(0,i.jsx)(t.h2,{id:"supported-authorization-strategies",children:"Supported Authorization Strategies"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB supports multiple authorization strategies to accommodate various security requirements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#json-web-token-jwt",children:"JSON Web Token (JWT)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#webhook",children:"Webhook"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#http-headers-development-only",children:"HTTP headers (development only)"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"json-web-token-jwt",children:"JSON Web Token (JWT)"}),"\n",(0,i.jsxs)(t.p,{children:["The JWT strategy is built on top of the ",(0,i.jsx)(t.a,{href:"https://github.com/fastify/fastify-jwt",children:(0,i.jsx)(t.code,{children:"@fastify/jwt"})})," plugin. By default ",(0,i.jsx)(t.code,{children:"@fastify/jwt"})," looks for JWTs primarily in the ",(0,i.jsx)(t.code,{children:"Authorization"})," header of HTTP requests."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic DB JWT integration",src:n(84131).A+"",width:"513",height:"274"})}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["HTTP requests to the Platformatic DB API should include a header like this ",(0,i.jsx)(t.code,{children:"Authorization: Bearer <token>"})]})}),"\n",(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Set up JWT by specifying a shared ",(0,i.jsx)(t.code,{children:"secret"})," in the Platformatic DB configuration file as shown below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  "authorization": {\n    "jwt": {\n      "secret": "<shared-secret>"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsxs)(t.a,{href:"https://github.com/fastify/fastify-jwt#options",children:[(0,i.jsx)(t.code,{children:"@fastify/jwt"})," documentation"]}),"\nfor all of the available configuration options."]}),"\n",(0,i.jsx)(t.h3,{id:"json-web-key-sets-jwks",children:"JSON Web Key Sets (JWKS)"}),"\n",(0,i.jsxs)(t.p,{children:["The JWT authorization strategy includes support for ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"JSON Web Key"})," Sets. For enhanced security, configure JWT to use JWKS for dynamic public key fetching:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  "authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://ISSUER_DOMAIN"]\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When a JSON Web Token is included in a request to Platformatic DB, it retrieves the\ncorrect public key from ",(0,i.jsx)(t.code,{children:"https:/ISSUER_DOMAIN/.well-known/jwks.json"})," and uses it to\nverify the JWT signature. The token carries all the informations, like the ",(0,i.jsx)(t.code,{children:"kid"}),",\nwhich is the key id used to sign the token itself, so no other configuration is required."]}),"\n",(0,i.jsx)(t.p,{children:"JWKS can be enabled without any options:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "authorization": {\n    "jwt": {\n      "jwks": true\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When configured like this, the JWK URL is calculated from the ",(0,i.jsx)(t.code,{children:"iss"})," (issuer) field of JWT, so\nevery JWT token from an issuer that exposes a valid JWKS token will pass the validation.\n",(0,i.jsx)(t.strong,{children:"This configuration should only be used in development"}),", while\nin every other case the ",(0,i.jsx)(t.code,{children:"allowedDomains"})," option should be specified."]}),"\n",(0,i.jsxs)(t.p,{children:["Any option supported by the ",(0,i.jsx)(t.a,{href:"https://github.com/nearform/get-jwks#options",children:(0,i.jsx)(t.code,{children:"get-jwks"})}),"\nlibrary can be specified in the ",(0,i.jsx)(t.code,{children:"authorization.jwt.jwks"})," object."]}),"\n",(0,i.jsx)(t.h3,{id:"jwt-custom-claim-namespace",children:"JWT Custom Claim Namespace"}),"\n",(0,i.jsxs)(t.p,{children:["JWT claims can be namespaced to avoid name conflicts. If so, we will receive tokens\nwith custom claims such as: ",(0,i.jsx)(t.code,{children:"https://platformatic.dev/X-PLATFORMATIC-ROLE"}),"\n(where ",(0,i.jsx)(t.code,{children:"https://platformatic.dev/"})," is the namespace).\nIf we want to map these claims to user metadata removing our namespace, we can\nspecify the namespace in the JWT options:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "authorization": {\n    "jwt": {\n      "namespace": "https://platformatic.dev/"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["With this configuration, the ",(0,i.jsx)(t.code,{children:"https://platformatic.dev/X-PLATFORMATIC-ROLE"})," claim\nis mapped to ",(0,i.jsx)(t.code,{children:"X-PLATFORMATIC-ROLE"})," user metadata."]}),"\n",(0,i.jsx)(t.h2,{id:"webhook",children:"Webhook"}),"\n",(0,i.jsx)(t.p,{children:"Authenticate API requests by configuring a webhook that Platformatic DB will call with each request."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic DB Webhook integration",src:n(51591).A+"",width:"606",height:"324"})}),"\n",(0,i.jsx)(t.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Define the webhook URL in the authorization settings:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  "authorization": {\n    "webhook": {\n      "url": "<webhook url>"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When a request is received, Platformatic sends a ",(0,i.jsx)(t.code,{children:"POST"})," to the webhook, replicating\nthe same body and headers, except for:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"host"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"connection"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In the Webhook case, the HTTP response contains the roles/user information as HTTP headers."}),"\n",(0,i.jsx)(t.h2,{id:"http-headers-development-only",children:"HTTP headers (development only)"}),"\n",(0,i.jsxs)(t.p,{children:["If a request has ",(0,i.jsx)(t.code,{children:"X-PLATFORMATIC-ADMIN-SECRET"})," HTTP header set with a valid ",(0,i.jsx)(t.code,{children:"adminSecret"}),"\n(see ",(0,i.jsx)(t.a,{href:"/docs/db/configuration#authorization",children:"configuration reference"}),") the\nrole is set automatically as ",(0,i.jsx)(t.code,{children:"platformatic-admin"}),", unless a different role is set for\nuser impersonation (which is disabled if JWT or Webhook are set, see ",(0,i.jsx)(t.a,{href:"#user-impersonation",children:"user-impersonation"}),")."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic DB HTTP Headers",src:n(1074).A+"",width:"472",height:"310"})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"Passing an admin API key via HTTP headers is highly insecure and should only be used\nduring development or within protected networks."})}),"\n",(0,i.jsxs)(t.p,{children:["The following rule is automatically added to every entity, to allow users with ",(0,i.jsx)(t.code,{children:"adminSecret"})," to perform all operations on any entity:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "role": "platformatic-admin",\n  "find": false,\n  "delete": false,\n  "save": false\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"custom-authorization-strategies",children:"Custom authorization strategies"}),"\n",(0,i.jsxs)(t.p,{children:["You can create your own authorization strategy using a ",(0,i.jsx)(t.code,{children:"addAuthStrategy"})," function. ",(0,i.jsx)(t.code,{children:"addAuthStrategy"})," accepts a strategy ",(0,i.jsx)(t.code,{children:"name"})," and a ",(0,i.jsx)(t.code,{children:"createSession"})," function as a params. ",(0,i.jsx)(t.code,{children:"createSession"})," function should set ",(0,i.jsx)(t.code,{children:"request.user"})," object. All custom strategies will be executed after ",(0,i.jsx)(t.code,{children:"jwt"})," and ",(0,i.jsx)(t.code,{children:"webhook"})," default strategies."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Example"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"app.addAuthStrategy({\n  name: 'custom-auth-strategy',\n  createSession: async (req, reply) => {\n    req.user = { id: 42, role: 'admin' }\n  }\n})\n"})}),"\n",(0,i.jsx)(o.default,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},32075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={},a=void 0,r={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.45.0/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/getting-started/issues.md",tags:[],version:"1.45.0",frontMatter:{}},c={},l=[{value:"Issues",id:"issues",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,i.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1074:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/http-16e850f4929a4d5c21a629cbe609b67e.png"},84131:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/jwt-f72781533567349fb71fc37b9768e847.png"},51591:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/webhook-35d01c3e23ac75c26c9d519daa16cf1b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);