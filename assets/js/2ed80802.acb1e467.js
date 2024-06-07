"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[43822],{20570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(74848),r=t(28453);const a={id:"overview",description:"overview"},o="Platformatic Client",s={id:"client/overview",title:"Platformatic Client",description:"overview",source:"@site/versioned_docs/version-1.42.0/client/overview.md",sourceDirName:"client",slug:"/client/overview",permalink:"/docs/1.42.0/client/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.42.0/client/overview.md",tags:[],version:"1.42.0",frontMatter:{id:"overview",description:"overview"},sidebar:"docs",previous:{title:"Programmatic API",permalink:"/docs/1.42.0/service/programmatic"},next:{title:"Programmatic API",permalink:"/docs/1.42.0/client/programmatic"}},c={},l=[{value:"Usage with Platformatic Service or Platformatic DB",id:"usage-with-platformatic-service-or-platformatic-db",level:2},{value:"Generating a client for a service running within Platformatic Runtime",id:"generating-a-client-for-a-service-running-within-platformatic-runtime",level:2},{value:"Example",id:"example",level:3},{value:"Types Generator",id:"types-generator",level:2},{value:"OpenAPI",id:"openapi",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Usage with standalone Fastify",id:"usage-with-standalone-fastify",level:2},{value:"How are the method names defined in OpenAPI",id:"how-are-the-method-names-defined-in-openapi",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Telemetry propagation",id:"telemetry-propagation",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"platformatic-client",children:"Platformatic Client"}),"\n",(0,i.jsx)(n.p,{children:"Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API."}),"\n",(0,i.jsx)(n.p,{children:"To create a client for a remote OpenAPI API, you can use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ platformatic client http://example.com/to/schema/file --name myclient\n"})}),"\n",(0,i.jsx)(n.p,{children:"To create a client for a remote Graphql API, you can use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ platformatic client http://example.com/grapqhl --name myclient\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the Platformatic app supports both OpenAPI and GraphQL, the OpenAPI client will be the one generated by default."}),"\n",(0,i.jsxs)(n.p,{children:["If you want to force the generation of a specific client, pass the ",(0,i.jsx)(n.code,{children:"--type <openapi | graphql>"})," parameter."]}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-platformatic-service-or-platformatic-db",children:"Usage with Platformatic Service or Platformatic DB"}),"\n",(0,i.jsxs)(n.p,{children:["If you run the generator in a Platformatic application, and it will\nautomatically extend it to load your client by editing the configuration file\nand adding a ",(0,i.jsx)(n.code,{children:"clients"})," section.\nThen, in any part of your Platformatic application you can use the client."]}),"\n",(0,i.jsx)(n.p,{children:"You can use the client in your application in Javascript, calling a GraphQL endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Use a typescript reference to set up autocompletion\n// and explore the generated APIs.\n\n/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.post('/', async (request, reply) => {\n    const res = await request.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res\n  })\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"or in Typescript, calling an OpenAPI endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { FastifyInstance } from 'fastify'\n/// <reference path=\"./myclient\" />\n\nexport default async function (app: FastifyInstance) {\n  app.get('/', async (request, reply) => {\n    return requests.myclient.get({})\n  })\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The client configuration in the ",(0,i.jsx)(n.code,{children:"platformatic.db.json"})," and ",(0,i.jsx)(n.code,{children:"platformatic.service.json"})," would look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clients": [{\n    "schema": "./myclient/myclient.openapi.json" // or ./myclient/myclient.schema.graphl\n    "name": "myclient",\n    "type": "openapi" // or graphql\n    "url": "{ PLT_MYCLIENT_URL }"\n  }]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the generator would also have updated the ",(0,i.jsx)(n.code,{children:".env"})," and ",(0,i.jsx)(n.code,{children:".env.sample"})," files if they exist."]}),"\n",(0,i.jsx)(n.h2,{id:"generating-a-client-for-a-service-running-within-platformatic-runtime",children:"Generating a client for a service running within Platformatic Runtime"}),"\n",(0,i.jsx)(n.p,{children:"Platformatic Runtime allows you to create a network of services that are not exposed.\nTo create a client to invoke one of those services from another, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ platformatic client --name <clientname> --runtime <serviceId>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"<clientname>"})," is the name of the client and ",(0,i.jsx)(n.code,{children:"<serviceId>"})," is the id of the given service\n(which correspond in the basic case with the folder name of that service).\nThe client generated is identical to the one in the previous section."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that this command looks for a ",(0,i.jsx)(n.code,{children:"platformatic.runtime.json"})," in a parent directory."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"As an example, consider a network of three microservices:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"somber-chariot"}),", an instance of Platformatic DB;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"languid-noblemen"}),", an instance of Platformatic Service;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pricey-paesant"}),", an instance of Platformatic Composer, which is also the runtime entrypoint."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["From within the ",(0,i.jsx)(n.code,{children:"languid-noblemen"})," folder, we can run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ platformatic client --name chariot --runtime somber-chariot\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The client configuration in the ",(0,i.jsx)(n.code,{children:"platformatic.db.json"})," and ",(0,i.jsx)(n.code,{children:"platformatic.service.json"})," would look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clients": [{\n    "path": "./chariot",\n    "serviceId": "somber-chariot"\n  }]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Even if the client is generated from an HTTP endpoint, it is possible to add a ",(0,i.jsx)(n.code,{children:"serviceId"})," property each client object shown above.\nThis is not required, but if using the Platformatic Runtime, the ",(0,i.jsx)(n.code,{children:"serviceId"}),"\nproperty will be used to identify the service dependency."]}),"\n",(0,i.jsx)(n.h2,{id:"types-generator",children:"Types Generator"}),"\n",(0,i.jsx)(n.p,{children:"The types for the client are automatically generated for both OpenAPI and GraphQL schemas."}),"\n",(0,i.jsxs)(n.p,{children:["You can generate only the types with the ",(0,i.jsx)(n.code,{children:"--types-only"})," flag."]}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ platformatic client http://exmaple.com/to/schema/file --name myclient --types-only\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Will create the single ",(0,i.jsx)(n.code,{children:"myclient.d.ts"})," file."]}),"\n",(0,i.jsx)(n.h3,{id:"openapi",children:"OpenAPI"}),"\n",(0,i.jsx)(n.p,{children:"We provide a fully typed experience for OpenAPI, Typing both the request and response for\neach individual OpenAPI operation."}),"\n",(0,i.jsx)(n.p,{children:"Consider this example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Omitting all the individual Request and Reponse payloads for brevity\n\ninterface Client {\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponse>>;\n  createMovie(req: CreateMovieRequest): Promise<CreateMovieResponse>;\n  updateMovies(req: UpdateMoviesRequest): Promise<Array<UpdateMoviesResponse>>;\n  getMovieById(req: GetMovieByIdRequest): Promise<GetMovieByIdResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  updateMovie(req: UpdateMovieRequest): Promise<UpdateMovieResponse>;\n  deleteMovies(req: DeleteMoviesRequest): Promise<DeleteMoviesResponse>;\n  getQuotesForMovie(req: GetQuotesForMovieRequest): Promise<Array<GetQuotesForMovieResponse>>;\n  getQuotes(req: GetQuotesRequest): Promise<Array<GetQuotesResponse>>;\n  createQuote(req: CreateQuoteRequest): Promise<CreateQuoteResponse>;\n  updateQuotes(req: UpdateQuotesRequest): Promise<Array<UpdateQuotesResponse>>;\n  getQuoteById(req: GetQuoteByIdRequest): Promise<GetQuoteByIdResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  updateQuote(req: UpdateQuoteRequest): Promise<UpdateQuoteResponse>;\n  deleteQuotes(req: DeleteQuotesRequest): Promise<DeleteQuotesResponse>;\n  getMovieForQuote(req: GetMovieForQuoteRequest): Promise<GetMovieForQuoteResponse>;\n}\n\ntype ClientPlugin = FastifyPluginAsync<NonNullable<client.ClientOptions>>\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    'client': Client;\n  }\n\n  interface FastifyRequest {\n    'client': Client;\n  }\n}\n\ndeclare namespace Client {\n  export interface ClientOptions {\n    url: string\n  }\n  export const client: ClientPlugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<ClientPlugin>): ReturnType<ClientPlugin>;\nexport = client;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,i.jsx)(n.p,{children:"We provide a partially typed experience for GraphQL, because we do not want to limit\nhow you are going to query the remote system. Take a look at this example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"declare module 'fastify' {\n  interface GraphQLQueryOptions {\n    query: string;\n    headers: Record<string, string>;\n    variables: Record<string, unknown>;\n  }\n  interface GraphQLClient {\n    graphql<T>(GraphQLQuery): PromiseLike<T>;\n  }\n  interface FastifyInstance {\n    'client'\n    : GraphQLClient;\n\n  }\n\n  interface FastifyRequest {\n    'client'<T>(GraphQLQuery): PromiseLike<T>;\n  }\n}\n\ndeclare namespace client {\n  export interface Clientoptions {\n    url: string\n  }\n  export interface Movie {\n    'id'?: string;\n\n    'title'?: string;\n\n    'realeasedDate'?: string;\n\n    'createdAt'?: string;\n\n    'preferred'?: string;\n\n    'quotes'?: Array<Quote>;\n\n  }\n  export interface Quote {\n    'id'?: string;\n\n    'quote'?: string;\n\n    'likes'?: number;\n\n    'dislikes'?: number;\n\n    'movie'?: Movie;\n\n  }\n  export interface MoviesCount {\n    'total'?: number;\n\n  }\n  export interface QuotesCount {\n    'total'?: number;\n\n  }\n  export interface MovieDeleted {\n    'id'?: string;\n\n  }\n  export interface QuoteDeleted {\n    'id'?: string;\n\n  }\n  export const client: Clientplugin;\n  export { client as default };\n}\n\ndeclare function client(...params: Parameters<Clientplugin>): ReturnType<Clientplugin>;\nexport = client;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Given only you can know what GraphQL query you are producing, you are responsible for typing\nit accordingly."}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-standalone-fastify",children:"Usage with standalone Fastify"}),"\n",(0,i.jsx)(n.p,{children:"If a platformatic configuration file is not found, a complete Fastify plugin is generated to be\nused in your Fastify application like so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const fastify = require('fastify')()\nconst client = require('./your-client-name')\n\nfastify.register(client, {\n  url: 'http://example.com'\n})\n\n// GraphQL\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.graphql({\n    query: 'mutation { saveMovie(input: { title: \"foo\" }) { id, title } }'\n  })\n  return res\n})\n\n// OpenAPI\nfastify.post('/', async (request, reply) => {\n  const res = await request.movies.createMovie({ title: 'foo' })\n  return res\n})\n\nfastify.listen({ port: 3000 })\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you would need to install ",(0,i.jsx)(n.code,{children:"@platformatic/client"})," as a dependency."]}),"\n",(0,i.jsx)(n.h2,{id:"how-are-the-method-names-defined-in-openapi",children:"How are the method names defined in OpenAPI"}),"\n",(0,i.jsxs)(n.p,{children:["The names of the operations are defined in the OpenAPI specification.\nSpecifically, we use the ",(0,i.jsx)(n.a,{href:"https://swagger.io/specification/",children:(0,i.jsx)(n.code,{children:"operationId"})}),".\nIf that's not part of the spec,\nthe name is generated by combining the parts of the path,\nlike ",(0,i.jsx)(n.code,{children:"/something/{param1}/"})," and a method ",(0,i.jsx)(n.code,{children:"GET"}),", it generates ",(0,i.jsx)(n.code,{children:"getSomethingParam1"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"It's very common that downstream services requires some form of Authentication.\nHow could we add the necessary headers? You can configure them from your plugin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/// <reference path=\"./myclient\" />\n\n/**  @type {import('fastify').FastifyPluginAsync<{} */\nmodule.exports = async function (app, opts) {\n  app.configureMyclient({\n    async getHeaders (req, reply) {\n      return {\n        'foo': 'bar'\n      }\n    }\n  })\n\n  app.post('/', async (request, reply) => {\n    const res = await request.myclient.graphql({\n      query: 'query { movies { title } }'\n    })\n    return res\n  })\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"telemetry-propagation",children:"Telemetry propagation"}),"\n",(0,i.jsx)(n.p,{children:"To correctly propagate telemetry information, be sure to get the client from the request object, e.g.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fastify.post('/', async (request, reply) => {\n  const res = await request.movies.createMovie({ title: 'foo' })\n  return res\n})\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);