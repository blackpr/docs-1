"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[95846,19048],{98620:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(74848),r=n(28453),o=n(25221);const i={},a="User Roles & Metadata",d={id:"db/authorization/user-roles-metadata",title:"User Roles & Metadata",description:"Introduction",source:"@site/docs/db/authorization/user-roles-metadata.md",sourceDirName:"db/authorization",slug:"/db/authorization/user-roles-metadata",permalink:"/docs/next/db/authorization/user-roles-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/db/authorization/user-roles-metadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Strategies",permalink:"/docs/next/db/authorization/strategies"},next:{title:"Rules",permalink:"/docs/next/db/authorization/rules"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Roles",id:"roles",level:2},{value:"Understanding User Roles",id:"understanding-user-roles",level:3},{value:"Reserved roles",id:"reserved-roles",level:3},{value:"Anonymous Role",id:"anonymous-role",level:3},{value:"Role Impersonation",id:"role-impersonation",level:3},{value:"Role impersonation",id:"role-impersonation-1",level:3},{value:"Role configuration",id:"role-configuration",level:3},{value:"User metadata",id:"user-metadata",level:2},...o.toc];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"user-roles--metadata",children:"User Roles & Metadata"}),"\n","\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:["Roles and user information are passed to Platformatic DB from an external\nauthentication service as a string (JWT claims or HTTP headers). We refer to\nthis data as ",(0,t.jsx)(s.a,{href:"#user-metadata",children:"user metadata"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"roles",children:"Roles"}),"\n",(0,t.jsx)(s.h3,{id:"understanding-user-roles",children:"Understanding User Roles"}),"\n",(0,t.jsxs)(s.p,{children:["User roles in Platformatic DB are represented as strings and are passed via the ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ROLE"})," HTTP header. These roles are specified as a list of comma-separated names. The key used to pass roles is configurable, allowing integration with various authentication systems."]}),"\n",(0,t.jsxs)(s.p,{children:["For detailed configuration options, refer to our ",(0,t.jsx)(s.a,{href:"#role-configuration",children:"configuration documentation"})]}),"\n",(0,t.jsx)(s.h3,{id:"reserved-roles",children:"Reserved roles"}),"\n",(0,t.jsx)(s.p,{children:"Platformatic DB reserves certain role names for internal use:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"platformatic-admin"}),": Identifies a user with admin powers."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"anonymous"}),": Automatically assigned when no other roles are specified."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"anonymous-role",children:"Anonymous Role"}),"\n",(0,t.jsxs)(s.p,{children:["By default, if a user does not have an assigned role, the ",(0,t.jsx)(s.code,{children:"anonymous"})," role is applied. You can define specific rules for users with this role as shown below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "role": "anonymous",\n  "entity": "page",\n  "find": false,\n  "delete": false,\n  "save": false\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This configuration ensures that users with the ",(0,t.jsx)(s.code,{children:"anonymous"})," role cannot perform ",(0,t.jsx)(s.code,{children:"find"}),", ",(0,t.jsx)(s.code,{children:"delete"}),", or ",(0,t.jsx)(s.code,{children:"save"})," operations on the page entity."]}),"\n",(0,t.jsx)(s.h3,{id:"role-impersonation",children:"Role Impersonation"}),"\n",(0,t.jsxs)(s.p,{children:["Role impersonation allows an admin to perform actions on behalf of another user by specifying roles to impersonate in the ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ROLE"})," HTTP header. This feature requires a valid ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ADMIN-SECRET"})," header."]}),"\n",(0,t.jsx)(s.h3,{id:"role-impersonation-1",children:"Role impersonation"}),"\n",(0,t.jsxs)(s.p,{children:["If a request includes a valid ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ADMIN-SECRET"})," HTTP header it is\npossible to impersonate a user roles. The roles to impersonate can be specified\nby sending a ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ROLE"})," HTTP header containing a comma separated list\nof roles."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plaintext",children:"X-PLATFORMATIC-ADMIN-SECRET: <shared-admin-secret>\nX-PLATFORMATIC-ROLE: editor,admin\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsx)(s.p,{children:"Role impersonation is disabled when JWT or Webhook authentication methods are set. In such cases, the role is automatically set to platformatic-admin if the X-PLATFORMATIC-ADMIN-SECRET HTTP header is specified."})}),"\n",(0,t.jsx)(s.h3,{id:"role-configuration",children:"Role configuration"}),"\n",(0,t.jsxs)(s.p,{children:["The roles key in user metadata defaults to ",(0,t.jsx)(s.code,{children:"X-PLATFORMATIC-ROLE"}),". It's possible to change it using the ",(0,t.jsx)(s.code,{children:"roleKey"})," field in configuration. Same for the ",(0,t.jsx)(s.code,{children:"anonymous"})," role, which value can be changed using ",(0,t.jsx)(s.code,{children:"anonymousRole"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:' "authorization": {\n    "roleKey": "X-MYCUSTOM-ROLE_KEY",\n    "anonymousRole": "anonym",\n    "rules": [\n    ...\n    ]\n  }\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Another option is to use the ",(0,t.jsx)(s.code,{children:"rolePath"})," field to specify a path to the role in the user metadata. This is useful when the role is nested in the user data extracted from the JWT claims, e.g. if we have a JWT token with:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "user": {\n    "roles": ["admin", "editor"]\n  }\n}\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["We can specify the ",(0,t.jsx)(s.code,{children:"rolePath"})," as ",(0,t.jsx)(s.code,{children:"user.roles"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:' "authorization": {\n    "rolePath": "user.roles",\n    ...\n  }\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Note that the ",(0,t.jsx)(s.code,{children:"rolePath"})," has the precedence on ",(0,t.jsx)(s.code,{children:"roleKey"}),". If both are set, the ",(0,t.jsx)(s.code,{children:"rolePath"})," will be used and the ",(0,t.jsx)(s.code,{children:"roleKey"})," will be ignored."]}),"\n",(0,t.jsx)(s.h2,{id:"user-metadata",children:"User metadata"}),"\n",(0,t.jsxs)(s.p,{children:["User roles and other user data, such as ",(0,t.jsx)(s.code,{children:"userId"}),", are referred to by Platformatic\nDB as user metadata."]}),"\n",(0,t.jsxs)(s.p,{children:["User metadata is parsed from an HTTP request and stored in a ",(0,t.jsx)(s.code,{children:"user"})," object on the\nFastify request object. This object is populated on-demand, but it's possible\nto populate it explicity with ",(0,t.jsx)(s.code,{children:"await request.setupDBAuthorizationUser()"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"await request.setupDBAuthorizationUser();\nconst userRoles = request.user.roles;\n"})}),"\n",(0,t.jsx)(o.default,{})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},25221:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),r=n(28453);const o={},i=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/docs/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/next/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/getting-started/issues.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Issues",id:"issues",level:2}];function c(e){const s={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,t.jsxs)(s.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,t.jsx)(s.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,t.jsx)(s.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);