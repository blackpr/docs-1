"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[38591,94273],{71812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=i(74848),r=i(28453),o=i(78754);const t={},c="Configuration",l={id:"composer/configuration",title:"Configuration",description:"Platformatic Composer can be configured with a configuration file in the different file formats below. The Composer also supports use of environment variables as setting values with environment variable placeholders.",source:"@site/versioned_docs/version-1.41.1/composer/configuration.md",sourceDirName:"composer",slug:"/composer/configuration",permalink:"/docs/1.41.1/composer/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/composer/configuration.md",tags:[],version:"1.41.1",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/1.41.1/composer/overview"},next:{title:"Programmatic API",permalink:"/docs/1.41.1/composer/programmatic"}},d={},h=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Supported File Formats",id:"supported-file-formats",level:2},{value:"Configuration Settings",id:"configuration-settings",level:2},{value:"Composer",id:"composer",level:3},{value:"OpenAPI",id:"openapi",level:3},{value:"OpenAPI Configuration",id:"openapi-configuration",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Configuration References",id:"configuration-references",level:2},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>clients</code>",id:"clients",level:3},{value:"Setting and Using ENV placeholders",id:"setting-and-using-env-placeholders",level:2},{value:"PLT_ROOT",id:"plt_root",level:3},...o.toc];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Platformatic Composer can be configured with a ",(0,s.jsx)(n.a,{href:"#configuration-files",children:"configuration file"})," in the different file formats below. The Composer also supports use of environment variables as setting values with ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/composer/configuration#setting-and-using-env-placeholders",children:"environment variable placeholders"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,s.jsxs)(n.p,{children:["Platformatic will automatically detect and load configuration files found in the current working directory with the file names listed ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/file-formats#configuration-files",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To specify a configuration file manually, use the ",(0,s.jsxs)(n.a,{href:"/docs/1.41.1/cli#composer",children:[(0,s.jsx)(n.code,{children:"--config"})," option"]})," with any ",(0,s.jsx)(n.code,{children:"platformatic composer"})," CLI command."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-file-formats",children:"Supported File Formats"}),"\n",(0,s.jsxs)(n.p,{children:["For detailed information on supported file formats and extensions, visit our ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/file-formats#supported-file-formats",children:"Supported File Formats and Extensions"})," page"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-settings",children:"Configuration Settings"}),"\n",(0,s.jsx)(n.p,{children:"Configuration file settings are grouped as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"server"})})," ",(0,s.jsx)(n.strong,{children:"(required)"}),": Configures the ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#server",children:"server settings"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"composer"})}),": Specific settings for Platformatic Composer, such as service management and API composition."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"metrics"})}),": Monitors and records performance ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#metrics",children:"metrics"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"plugins"})}),": Manages additional functionality through ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#plugins",children:"plugins"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"telemetry"})}),": Handles ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#telemetry",children:"telemetry data reporting"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"watch"})}),": Observes file changes for ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#watch",children:"dynamic updates"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"clients"})}),": Configures ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#clients",children:"client-specific"})," settings."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sensitive data within these settings should use ",(0,s.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"})," to ensure security."]}),"\n",(0,s.jsx)(n.h3,{id:"composer",children:"Composer"}),"\n",(0,s.jsxs)(n.p,{children:["Configure ",(0,s.jsx)(n.code,{children:"@platformatic/composer"})," specific settings such as ",(0,s.jsx)(n.code,{children:"services"})," or ",(0,s.jsx)(n.code,{children:"refreshTimeout"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"services"})})," (",(0,s.jsx)(n.code,{children:"array"}),", default: ",(0,s.jsx)(n.code,{children:"[]"}),") \u2014 is an array of objects that defines\nthe services managed by the composer. Each service object supports the following settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"id"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),") - A unique identifier for the service. Use a Platformatic Runtime service id if the service is executing inside of ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/runtime/overview#platformatic-runtime-context",children:"Platformatic Runtime context"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"origin"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - A service origin. Skip this option if the service is executing inside of ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/runtime/overview#platformatic-runtime-context",children:"Platformatic Runtime context"}),". In this case, service ",(0,s.jsx)(n.code,{children:"id"})," will be used instead of origin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"openapi"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - The configuration file used to compose ",(0,s.jsx)(n.a,{href:"#openapi",children:"OpenAPI"})," specification."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"graphql"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - The configuration for the ",(0,s.jsx)(n.a,{href:"#graphql",children:"GraphQL"})," service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"proxy"})})," (",(0,s.jsx)(n.code,{children:"object"})," or ",(0,s.jsx)(n.code,{children:"false"}),") - Service proxy configuration. If ",(0,s.jsx)(n.code,{children:"false"}),", the service proxy is disabled.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prefix"})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),") - Service proxy prefix. All service routes will be prefixed with this value."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"openapi"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - See the Platformatic Service ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#service",children:"openapi"})," option for more details."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"graphql"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - Has the Platformatic Service ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#service",children:"graphql"})," options, plus"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"addEntitiesResolvers"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") - Automatically add related entities on GraphQL types, following the services entities configuration. See ",(0,s.jsx)(n.a,{href:"https://github.com/platformatic/graphql-composer#composer-entities",children:"graphql-composer entities"})," for details."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"defaultArgsAdapter"})})," (",(0,s.jsx)(n.code,{children:"function"})," or ",(0,s.jsx)(n.code,{children:"string"}),") - The default ",(0,s.jsx)(n.code,{children:"argsAdapter"})," function for the entities, for example for the platformatic db mapped entities queries."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"graphql: {\n  defaultArgsAdapter: (partialResults) => ({ where: { id: { in: partialResults.map(r => r.id) } } })\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["or with the ",(0,s.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," syntax, especially in the case of using the ",(0,s.jsx)(n.a,{href:"/docs/reference/cli.md#start",children:"json configuration"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"defaultArgsAdapter": "where.id.in.$>#id"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"onSubgraphError"})})," (",(0,s.jsx)(n.code,{children:"function"}),") - Hook called when an error occurs getting schema from a subgraph. The arguments are:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"})," (",(0,s.jsx)(n.code,{children:"error"}),") - The error message"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subgraphName"})," (",(0,s.jsx)(n.code,{children:"string"}),") - The erroring subgraph"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Its important to note GraphQL subscriptions are not supported in the composer yet."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"refreshTimeout"})})," (",(0,s.jsx)(n.code,{children:"number"}),") - The number of milliseconds to wait for check for changes in the services. If not specified, the default value is ",(0,s.jsx)(n.code,{children:"1000"}),"; set to ",(0,s.jsx)(n.code,{children:"0"})," to disable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"addEmptySchema"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") - If true, the composer will add an empty response schema to the composed OpenAPI specification. Default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"openapi",children:"OpenAPI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"url"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - A path of the route that exposes the OpenAPI specification. If a service is a Platformatic Service or Platformatic DB, use ",(0,s.jsx)(n.code,{children:"/documentation/json"})," as a value. Use this or ",(0,s.jsx)(n.code,{children:"file"})," option to specify the OpenAPI specification."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"file"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - A path to the OpenAPI specification file. Use this or ",(0,s.jsx)(n.code,{children:"url"})," option to specify the OpenAPI specification."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"prefix"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - A prefix for the OpenAPI specification. All service routes will be prefixed with this value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"config"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - A path to the OpenAPI configuration file. This file is used to customize the ",(0,s.jsx)(n.a,{href:"#openapi-configuration",children:"OpenAPI"}),"specification."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"openapi-configuration",children:"OpenAPI Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The OpenAPI configuration file is a JSON file that is used to customize the OpenAPI specification. It supports the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ignore"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") - If ",(0,s.jsx)(n.code,{children:"true"}),", the route will be ignored by the composer.\nIf you want to ignore a specific method, use the ",(0,s.jsx)(n.code,{children:"ignore"})," option in the nested method object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "paths": {\n    "/users": {\n      "ignore": true\n    },\n    "/users/{id}": {\n      "get": { "ignore": true },\n      "put": { "ignore": true }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"alias"})," (",(0,s.jsx)(n.code,{children:"string"}),") - Use it create an alias for the route path. Original route path will be ignored."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "paths": {\n    "/users": {\n      "alias": "/customers"\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"rename"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - Use it to rename composed route response fields.\nUse json schema format to describe the response structure, this only for  ",(0,s.jsx)(n.code,{children:"200"})," response."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "paths": {\n    "/users": {\n      "responses": {\n          "200": {\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "id": { "rename": "user_id" },\n                "name": { "rename": "first_name" }\n              }\n            }\n          }\n        }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Composition of two remote services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "origin": "https://auth-service.com",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "origin": "https://payment-service.com",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Composition of two local services inside of Platformatic Runtime:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"host"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - service host; if not specified, the ",(0,s.jsx)(n.code,{children:"service.origin"})," is used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - name to identify the service. If not specified, the ",(0,s.jsx)(n.code,{children:"service.origin"})," is used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"graphqlEndpoint"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The graphql endpoint path, the default value is the common ",(0,s.jsx)(n.code,{children:"'/graphql'"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"composeEndpoint"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The endpoint to retrieve the introspection query from, default is ",(0,s.jsx)(n.code,{children:"'/.well-known/graphql-composition'"}),". In case the endpoint is not available, a second call with introspection query will be sent to the ",(0,s.jsx)(n.code,{children:"graphqlEndpoint"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"entities"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - Configuration object for working with entities in this subgraph, the values are objects with the following schema:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"resolver"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - The resolver to retrieve a list of objects - should return a list - and should accept as a arguments a list of primary keys or foreign keys.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The name of the resolver."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"argsAdapter (partialResults)"})})," (",(0,s.jsx)(n.code,{children:"function"})," or ",(0,s.jsx)(n.code,{children:"string"}),") - The function invoked with a subset of the result of the initial query, where ",(0,s.jsx)(n.code,{children:"partialResults"})," is an array of the parent node. It should return an object to be used as argument for ",(0,s.jsx)(n.code,{children:"resolver"})," query. Can be a function or a ",(0,s.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," string.\n",(0,s.jsx)(n.strong,{children:"Default:"})," if missing, the ",(0,s.jsx)(n.code,{children:"defaultArgsAdapter"})," function will be used; if that is missing too, a ",(0,s.jsx)(n.a,{href:"lib/utils.js#L3",children:"generic one"})," will be used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"partialResults"})})," (",(0,s.jsx)(n.code,{children:"function"})," or ",(0,s.jsx)(n.code,{children:"string"}),") - The function to adapt the subset of the result to be passed to ",(0,s.jsx)(n.code,{children:"argsAdapter"})," - usually is needed only on resolvers of ",(0,s.jsx)(n.code,{children:"fkeys"})," and ",(0,s.jsx)(n.code,{children:"many"}),". Can be a function or a ",(0,s.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," string."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pkey"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The primary key field to identify the entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fkeys"})})," (",(0,s.jsx)(n.code,{children:"array of objects"}),") an array to describe the foreign keys of the entities, for example ",(0,s.jsx)(n.code,{children:"fkeys: [{ type: 'Author', field: 'authorId' }]"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The entity type the foreign key is referred to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"field"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The foreign key field."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"as"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - When using ",(0,s.jsx)(n.code,{children:"addEntitiesResolvers"}),", it defines the name of the foreign entity as a field of the current one, as a single type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pkey"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The primary key of the foreign entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"subgraph"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The subgraph name of the foreign entity, where the resolver is located; if missing is intended the self."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"resolver"})})," (object) - The resolver definition to query the foreign entity, same structure as ",(0,s.jsx)(n.code,{children:"entity.resolver"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"many"})})," (",(0,s.jsx)(n.code,{children:"array of objects"}),") - Describe a 1-to-many relation - the reverse of the foreign key.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The entity type where the entity is a foreign key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fkey"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The foreign key field in the referred entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"as"})})," (",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - When using ",(0,s.jsx)(n.code,{children:"addEntitiesResolvers"}),", it defines the name of the relation as a field of the current one, as a list."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pkey"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The primary key of the referred entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"subgraph"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The subgraph name of the referred entity, where the resolver is located; if missing is intended the self."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"resolver"})})," (",(0,s.jsx)(n.code,{children:"object"}),", ",(0,s.jsx)(n.strong,{children:"required"}),") - The resolver definition to query the referred entity, same structure as ",(0,s.jsx)(n.code,{children:"entity.resolver"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-references",children:"Configuration References"}),"\n",(0,s.jsx)(n.h3,{id:"telemetry",children:(0,s.jsx)(n.code,{children:"telemetry"})}),"\n",(0,s.jsxs)(n.p,{children:["Telemetry involves the collection and analysis of data generated by the operations of services. See our ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#telemetry",children:"telemetry documentation"})," for details on configuring telemetry for Platformatic Service."]}),"\n",(0,s.jsx)(n.h3,{id:"watch",children:(0,s.jsx)(n.code,{children:"watch"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"watch"})," functionality helps in monitoring file changes and dynamically updating services. Learn more at Platformatic Service ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#watch",children:"watch"})]}),"\n",(0,s.jsx)(n.h3,{id:"clients",children:(0,s.jsx)(n.code,{children:"clients"})}),"\n",(0,s.jsxs)(n.p,{children:["Client-specific settings allow for customizing client interactions with the service. Detailed information can be found at Platformatic Service ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#clients",children:(0,s.jsx)(n.code,{children:"clients"})})," configuration."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-and-using-env-placeholders",children:"Setting and Using ENV placeholders"}),"\n",(0,s.jsxs)(n.p,{children:["Environment variable placeholders are used to securely inject runtime configurations. Learn how to ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#setting-environment-variables",children:"set"})," and ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#environment-variable-placeholders",children:"use"})," environment variable placeholders ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"plt_root",children:"PLT_ROOT"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#plt_root",children:"PLT_ROOT"})," variable is used to configure relative path and is set to the directory containing the Service configuration file."]}),"\n",(0,s.jsx)(o.default,{})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},78754:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=i(74848),r=i(28453);const o={},t=void 0,c={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.41.1/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/1.41.1/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/getting-started/issues.md",tags:[],version:"1.41.1",frontMatter:{}},l={},d=[{value:"Issues",id:"issues",level:2}];function h(e){const n={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,s.jsxs)(n.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,s.jsx)(n.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,s.jsx)(n.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);