"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[43985],{51407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(74848),i=t(28453);const r={},a="Programmatic API",s={id:"client/programmatic",title:"Programmatic API",description:"It is possible to use the Platformatic client without the generator.",source:"@site/versioned_docs/version-1.42.0/client/programmatic.md",sourceDirName:"client",slug:"/client/programmatic",permalink:"/docs/1.42.0/client/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.42.0/client/programmatic.md",tags:[],version:"1.42.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Client",permalink:"/docs/1.42.0/client/overview"},next:{title:"Frontend client",permalink:"/docs/1.42.0/client/frontend"}},l={},c=[{value:"OpenAPI Client",id:"openapi-client",level:2},{value:"GraphQL Client",id:"graphql-client",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to use the Platformatic client without the generator."}),"\n",(0,o.jsx)(n.h2,{id:"openapi-client",children:"OpenAPI Client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: `https://yourapi.com/documentation/json`, \n  // path: 'path/to/openapi.json',\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.yourOperationName({ foo: 'bar' })\n\nconsole.log(res)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you have a ",(0,o.jsx)(n.code,{children:"client"})," generated from ",(0,o.jsx)(n.code,{children:"buildOpenAPIClient"}),", you can access a mapping between operation IDs and method/path by leveraging the ",(0,o.jsx)(n.code,{children:"Symbol.for('plt.operationIdMap')"})," property."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const client = await buildOpenAPIClient({\n  // ... your client settings\n})\n\nconst mapping = client[Symbol.for('plt.operationIdMap')]\n\nconsole.log(mapping)\n\n/**\n * \n * You should see something like:\n * {\n *  getOperationFoo: { path: '/operation-foo/', method: 'get' },\n *  postOperationBar: { path: '/operation-bar/', method: 'post' },\n * }\n * \n */\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You're also able to pass an asynchronous function that modifies the headers for each request with the ",(0,o.jsx)(n.code,{children:"getHeaders"})," option. This function will be executed before each request, just like the plugin ",(0,o.jsx)(n.code,{children:"getHeaders"})," options. Note that ",(0,o.jsx)(n.code,{children:"headers"})," and ",(0,o.jsx)(n.code,{children:"getHeaders"})," are not mutually exclusive, and can work together:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: `https://yourapi.com/documentation/json`, \n  headers: {\n    'foo': 'bar'\n  },\n  getHeaders(options) {\n    const { url, method, body, headers, telemetryHeaders } = options\n\n    // generate your dynamic headers\n\n    return {\n      myDynamicHeader: 'my-value',\n    }\n  }\n})\n\nconst res = await client.yourOperationName({ foo: 'bar' })\n\nconsole.log(res)\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you use Typescript you can take advantage of the generated types file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { buildOpenAPIClient } from '@platformatic/client'\nimport Client from './client'\n//\n// interface Client {\n//   getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponse>>;\n//   createMovie(req: CreateMovieRequest): Promise<CreateMovieResponse>;\n//   ...\n// }\n//\n\nconst client: Client = await buildOpenAPIClient<Client>({\n  url: `https://yourapi.com/documentation/json`, \n  // path: 'path/to/openapi.json',\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.getMovies()\nconsole.log(res)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"graphql-client",children:"GraphQL Client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { buildGraphQLClient } from '@platformatic/client'\n\nconst client = await buildGraphQLClient({\n  url: `https://yourapi.com/graphql`,\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.graphql({\n  query: `\n    mutation createMovie($title: String!) {\n      saveMovie(input: {title: $title}) {\n        id\n        title\n      }\n    }\n  `,\n  variables: {\n    title: 'The Matrix'\n  }\n})\n\nconsole.log(res)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);