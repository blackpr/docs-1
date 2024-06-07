"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[81012],{38635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=n(74848),i=n(28453);const a={},o="Configure JWT with Auth0",r={id:"guides/jwt-auth0",title:"Configure JWT with Auth0",description:"Auth0 is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through JSON Web Tokens (JWT) tokens.",source:"@site/versioned_docs/version-1.44.0/guides/jwt-auth0.md",sourceDirName:"guides",slug:"/guides/jwt-auth0",permalink:"/docs/1.44.0/guides/jwt-auth0",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.44.0/guides/jwt-auth0.md",tags:[],version:"1.44.0",frontMatter:{},sidebar:"Learn",previous:{title:"Securing Platformatic DB with Authorization",permalink:"/docs/1.44.0/guides/securing-platformatic-db"},next:{title:"Monitoring with Prometheus and Grafana",permalink:"/docs/1.44.0/guides/monitoring"}},c={},h=[{value:"Custom Claim Namespace",id:"custom-claim-namespace",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"configure-jwt-with-auth0",children:"Configure JWT with Auth0"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://auth0.com/",children:"Auth0"})," is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through ",(0,s.jsx)(t.a,{href:"https://jwt.io/",children:"JSON Web Tokens"})," (JWT) tokens.\nWhen a user is authenticated, Auth0 creates a JWT token with all necessary security informations and custom claims (like the ",(0,s.jsx)(t.code,{children:"X-PLATFORMATIC-ROLE"}),", see ",(0,s.jsx)(t.a,{href:"../reference/db/authorization/introduction#user-metadata",children:"User Metadata"}),") and signs the token."]}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB needs the correct public key to verify the JWT signature.\nThe fastest way is to leverage ",(0,s.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"JWKS"}),", since Auth0 exposes a ",(0,s.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"JWKS"})," endpoint for each tenant.\nGiven a Auth0 tenant's ",(0,s.jsx)(t.code,{children:"issuer"})," URL, the (public) keys are accessible at ",(0,s.jsx)(t.code,{children:"${issuer}/.well-known/jwks.json"}),".\nFor instance, if ",(0,s.jsx)(t.code,{children:"issuer"})," is: ",(0,s.jsx)(t.code,{children:"https://dev-xxx.us.auth0.com/"}),", the public keys are accessible at ",(0,s.jsx)(t.code,{children:"https://dev-xxx.us.auth0.com/.well-known/jwks.json"})]}),"\n",(0,s.jsxs)(t.p,{children:["To configure Platformatic DB authorization to use ",(0,s.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"JWKS"})," with Auth0, set:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'\n...\n"authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://dev-xxx.us.auth0.com/"\n        ]\n      }\n    },\n  }\n...\n\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["Note that specify ",(0,s.jsx)(t.code,{children:"allowedDomains"})," is critical to correctly restrict the JWT that MUST be issued from one of the allowed domains."]})}),"\n",(0,s.jsx)(t.h2,{id:"custom-claim-namespace",children:"Custom Claim Namespace"}),"\n",(0,s.jsxs)(t.p,{children:["In Auth0 there are ",(0,s.jsx)(t.a,{href:"https://auth0.com/docs/secure/tokens/json-web-tokens/create-custom-claims#general-restrictions",children:"restrictions"})," about the custom claim that can be set on access tokens. One of these is that the custom claims MUST be namespaced, i.e. we cannot have ",(0,s.jsx)(t.code,{children:"X-PLATFORMATIC-ROLE"})," but we must specify a namespace, e.g.: ",(0,s.jsx)(t.code,{children:"https://platformatic.dev/X-PLATFORMATIC-ROLE"})]}),"\n",(0,s.jsx)(t.p,{children:"To map these claims to user metadata removing the namespace, we can specify the namespace in the JWT options:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'...\n"authorization": {\n    "jwt": {\n      "namespace": "https://platformatic.dev/",\n      "jwks": {\n        "allowedDomains": [\n          "https://dev-xxx.us.auth0.com/"\n        ]\n      }\n    },\n  }\n...\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With this configuration, the ",(0,s.jsx)(t.code,{children:"https://platformatic.dev/X-PLATFORMATIC-ROLE"})," claim is mapped to ",(0,s.jsx)(t.code,{children:"X-PLATFORMATIC-ROLE"})," user metadata."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);