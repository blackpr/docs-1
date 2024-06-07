"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[16212],{2590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),r=t(28453);const o={},i="Frontend client",a={id:"client/frontend",title:"Frontend client",description:"Create implementation and type files that exposes a client for a remote OpenAPI server, that uses fetch and can run in any browser.",source:"@site/versioned_docs/version-1.43.0/client/frontend.md",sourceDirName:"client",slug:"/client/frontend",permalink:"/docs/1.43.0/client/frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.43.0/client/frontend.md",tags:[],version:"1.43.0",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/1.43.0/client/programmatic"},next:{title:"Overview",permalink:"/docs/1.43.0/packages/sql-openapi/overview"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Named operations",id:"named-operations",level:3},{value:"Factory",id:"factory",level:3},{value:"Generated Code",id:"generated-code",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"frontend-client",children:"Frontend client"}),"\n",(0,s.jsxs)(n.p,{children:["Create implementation and type files that exposes a client for a remote OpenAPI server, that uses ",(0,s.jsx)(n.code,{children:"fetch"})," and can run in any browser."]}),"\n",(0,s.jsx)(n.p,{children:"To create a client for a remote OpenAPI API, you can use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ platformatic client http://example.com/to/schema/file --frontend --language <language> --name <clientname>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"<language>"})," can be either ",(0,s.jsx)(n.code,{children:"js"})," or ",(0,s.jsx)(n.code,{children:"ts"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This will create two files ",(0,s.jsx)(n.code,{children:"clientname.js"})," (or ",(0,s.jsx)(n.code,{children:"clientname.ts"}),") and ",(0,s.jsx)(n.code,{children:"clientname-types.d.ts"})," for types."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clientname"})," by default is ",(0,s.jsx)(n.code,{children:"api"})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"The implementation generated by the tool exports all the named operation found and a factory object."}),"\n",(0,s.jsx)(n.h3,{id:"named-operations",children:"Named operations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { setBaseUrl, getMovies } from './api.js'\n\nsetBaseUrl('http://my-server-url.com') // modifies the global `baseUrl` variable\n\nconst movies = await getMovies({})\nconsole.log(movies)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"factory",children:"Factory"}),"\n",(0,s.jsxs)(n.p,{children:["The factory object is called ",(0,s.jsx)(n.code,{children:"build"})," and can be used like this"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import build from './api.js'\n\nconst client = build('http://my-server-url.com')\n\nconst movies = await client.getMovies({})\nconsole.log(movies)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use both named operations and the factory in the same file. They can work on different hosts, so the factory does ",(0,s.jsx)(n.em,{children:"not"})," use the global ",(0,s.jsx)(n.code,{children:"setBaseUrl"})," function."]}),"\n",(0,s.jsx)(n.h2,{id:"generated-code",children:"Generated Code"}),"\n",(0,s.jsx)(n.p,{children:"The type file will look like this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface GetMoviesRequest {\n  'limit'?: number;\n  'offset'?: number;\n  // ... all other options\n}\n\ninterface GetMoviesResponseOK {\n  'id': number;\n  'title': string;\n}\nexport interface Api {\n  setBaseUrl(newUrl: string) : void;\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponseOK>>;\n  // ... all operations listed here\n}\n\ntype PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>\nexport default function build(url: string): PlatformaticFrontendClient\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"javascript"})," implementation will look like this"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let baseUrl = ''\n/**  @type {import('./api-types.d.ts').Api['setBaseUrl']} */\nexport const setBaseUrl = (newUrl) => { baseUrl = newUrl }\n\n/**  @type {import('./api-types.d.ts').Api['getMovies']} */\nexport const getMovies = async (request) => {\n  return await _getMovies(baseUrl, request)\n}\nasync function _createMovie (url, request) {\n  const response = await fetch(`${url}/movies/`, {\n    method:'post',\n    body: JSON.stringify(request),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n\n  if (!response.ok) {\n    throw new Error(await response.text())\n  }\n\n  return await response.json()\n}\n\n/**  @type {import('./api-types.d.ts').Api['createMovie']} */\nexport const createMovie = async (request) => {\n  return await _createMovie(baseUrl, request)\n}\n// ...\n\nexport default function build (url) {\n  return {\n    getMovies: _getMovies.bind(url, ...arguments),\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"typescript"})," implementation will look like this"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { Api } from './api-types'\nimport type * as Types from './api-types'\n\nlet baseUrl = ''\nexport const setBaseUrl = (newUrl: string) : void => { baseUrl = newUrl }\n\nconst _getMovies = async (url: string, request: Types.GetMoviesRequest) => {\n  const response = await fetch(`${url}/movies/?${new URLSearchParams(Object.entries(request || {})).toString()}`)\n\n  if (!response.ok) {\n    throw new Error(await response.text())\n  }\n\n  return await response.json()\n}\n\nexport const getMovies: Api['getMovies'] = async (request: Types.GetMoviesRequest) => {\n  return await _getMovies(baseUrl, request)\n}\n// ...\nexport default function build (url) {\n  return {\n    getMovies: _getMovies.bind(url, ...arguments),\n    // ...\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);