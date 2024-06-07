"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[75390],{1974:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=i(74848),s=i(28453);const t={},o="Configuration",c={id:"runtime/configuration",title:"Configuration",description:"Platformatic Runtime is configured with a configuration file. It supports the",source:"@site/versioned_docs/version-1.41.1/runtime/configuration.md",sourceDirName:"runtime",slug:"/runtime/configuration",permalink:"/docs/1.41.1/runtime/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/runtime/configuration.md",tags:[],version:"1.41.1",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/1.41.1/runtime/overview"},next:{title:"Programmatic API",permalink:"/docs/1.41.1/runtime/programmatic"}},d={},l=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Supported File Formats",id:"supported-file-formats",level:2},{value:"Settings",id:"settings",level:2},{value:"<code>autoload</code>",id:"autoload",level:3},{value:"<code>services</code>",id:"services",level:3},{value:"<code>entrypoint</code>",id:"entrypoint",level:3},{value:"<code>hotReload</code>",id:"hotreload",level:3},{value:"<code>allowCycles</code>",id:"allowcycles",level:3},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"<code>server</code>",id:"server",level:3},{value:"<code>undici</code>",id:"undici",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>managementApi</code>",id:"managementapi",level:3},{value:"Setting and Using ENV placeholders",id:"setting-and-using-env-placeholders",level:2},{value:"PLT_ROOT",id:"plt_root",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Platformatic Runtime is configured with a configuration file. It supports the\nuse of environment variables as setting values with ",(0,r.jsx)(n.a,{href:"#environment-variable-placeholders",children:"environment variable placeholders"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,r.jsxs)(n.p,{children:["The Platformatic CLI will automatically detect and load configuration files found in the current working directory with the file names listed ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/file-formats#configuration-files",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, a ",(0,r.jsxs)(n.a,{href:"/docs/1.41.1/cli#db",children:[(0,r.jsx)(n.code,{children:"--config"})," option"]})," specify a configuration file path for most ",(0,r.jsx)(n.code,{children:"platformatic runtime"})," CLI commands. The configuration examples in this reference use the JSON format."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-file-formats",children:"Supported File Formats"}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information on supported file formats and extensions, please visit our ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/file-formats#supported-file-formats",children:"Supported File Formats and Extensions"})," page."]}),"\n",(0,r.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration settings containing sensitive data should be set using\n",(0,r.jsx)(n.a,{href:"#environment-variable-placeholders",children:"environment variable placeholders"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"autoload"})," and ",(0,r.jsx)(n.code,{children:"services"})," settings can be used together, but at least one\nof them must be provided. When the configuration file is parsed, ",(0,r.jsx)(n.code,{children:"autoload"}),"\nconfiguration is translated into ",(0,r.jsx)(n.code,{children:"services"})," configuration."]})}),"\n",(0,r.jsx)(n.h3,{id:"autoload",children:(0,r.jsx)(n.code,{children:"autoload"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"autoload"})," configuration is intended to be used with monorepo applications.\n",(0,r.jsx)(n.code,{children:"autoload"})," is an object with the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"path"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - The path to a directory containing the\nmicroservices to load. In a traditional monorepo application, this directory is\ntypically named ",(0,r.jsx)(n.code,{children:"packages"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"exclude"})})," (",(0,r.jsx)(n.code,{children:"array"})," of ",(0,r.jsx)(n.code,{children:"string"}),"s) - Child directories inside of ",(0,r.jsx)(n.code,{children:"path"})," that\nshould not be processed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"mappings"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - Each microservice is given an ID and is expected\nto have a Platformatic configuration file. By default the ID is the\nmicroservice's directory name, and the configuration file is expected to be a\nwell-known Platformatic configuration file. ",(0,r.jsx)(n.code,{children:"mappings"})," can be used to override\nthese default values.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"id"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - The overridden ID. This becomes the new\nmicroservice ID."]}),"\n",(0,r.jsxs)(n.li,{children:["**",(0,r.jsx)(n.code,{children:"config"})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - The overridden configuration file\nname. This is the file that will be used when starting the microservice."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useHttp"})})," (",(0,r.jsx)(n.code,{children:"boolean"}),") - The service will be started on a random HTTP port\non ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),", and exposed to the other services via that port and on default, it is set to ",(0,r.jsx)(n.code,{children:"false"}),". Set it to ",(0,r.jsx)(n.code,{children:"true"})," if you are using ",(0,r.jsx)(n.a,{href:"https://github.com/fastify/fastify-express",children:"@fastify/express"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"services",children:(0,r.jsx)(n.code,{children:"services"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"services"})," is an array of objects that defines the microservices managed by the\nruntime. Each service object supports the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"id"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - A unique identifier for the microservice.\nWhen working with the Platformatic Composer, this value corresponds to the ",(0,r.jsx)(n.code,{children:"id"}),"\nproperty of each object in the ",(0,r.jsx)(n.code,{children:"services"})," section of the config file. When\nworking with client objects, this corresponds to the optional ",(0,r.jsx)(n.code,{children:"serviceId"}),"\nproperty or the ",(0,r.jsx)(n.code,{children:"name"})," field in the client's ",(0,r.jsx)(n.code,{children:"package.json"})," file if a\n",(0,r.jsx)(n.code,{children:"serviceId"})," is not explicitly provided."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"path"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - The path to the directory containing\nthe microservice."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"config"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - The configuration file used to start\nthe microservice."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useHttp"})})," (",(0,r.jsx)(n.code,{children:"boolean"}),") - The service will be started on a random HTTP port\non ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),", and exposed to the other services via that port, on default it is set to ",(0,r.jsx)(n.code,{children:"false"}),". Set it to ",(0,r.jsx)(n.code,{children:"true"})," if you are using ",(0,r.jsx)(n.a,{href:"https://github.com/fastify/fastify-express",children:"@fastify/express"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"entrypoint",children:(0,r.jsx)(n.code,{children:"entrypoint"})}),"\n",(0,r.jsxs)(n.p,{children:["The Platformatic Runtime's entrypoint is a microservice that is exposed\npublicly. This value must be the ",(0,r.jsx)(n.code,{children:"ID"})," of a service defined via the ",(0,r.jsx)(n.code,{children:"autoload"})," or\n",(0,r.jsx)(n.code,{children:"services"})," configuration."]}),"\n",(0,r.jsx)(n.h3,{id:"hotreload",children:(0,r.jsx)(n.code,{children:"hotReload"})}),"\n",(0,r.jsxs)(n.p,{children:["An optional boolean, set to default ",(0,r.jsx)(n.code,{children:"false"}),", indicating if hot reloading should\nbe enabled for the runtime. If this value is set to ",(0,r.jsx)(n.code,{children:"false"}),", it will disable\nhot reloading for any microservices managed by the runtime. If this value is\n",(0,r.jsx)(n.code,{children:"true"}),". Hot reloading for individual microservices is managed by the\nconfiguration of that microservice."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"watch"})," should be enabled for each individual service in the runtime."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"While hot reloading is useful for development, it is not recommended for use in production."})}),"\n",(0,r.jsx)(n.h3,{id:"allowcycles",children:(0,r.jsx)(n.code,{children:"allowCycles"})}),"\n",(0,r.jsxs)(n.p,{children:["An optional boolean, defaulting to ",(0,r.jsx)(n.code,{children:"false"}),", indicating if dependency cycles\nare allowed between microservices managed by the runtime. When the Platformatic\nRuntime parses the provided configuration, it examines the clients of each\nmicroservice, as well as the services of Platformatic Composer applications to\nbuild a dependency graph. A topological sort is performed on this dependency\ngraph so that each service is started after all of its dependencies have been\nstarted. If there are cycles, the topological sort fails and the Runtime does\nnot start any applications."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"allowCycles"})," is ",(0,r.jsx)(n.code,{children:"true"}),", the topological sort is skipped, and the\nmicroservices are started in the order specified in the configuration file."]}),"\n",(0,r.jsx)(n.h3,{id:"telemetry",children:(0,r.jsx)(n.code,{children:"telemetry"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://opentelemetry.io/",children:"Open Telemetry"})," is optionally supported with these settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"serviceName"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") \u2014 Name of the service as will be reported in open telemetry. In the ",(0,r.jsx)(n.code,{children:"runtime"})," case, the name of the services as reported in traces is ",(0,r.jsx)(n.code,{children:"${serviceName}-${serviceId}"}),", where ",(0,r.jsx)(n.code,{children:"serviceId"})," is the id of the service in the runtime."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"version"})})," (",(0,r.jsx)(n.code,{children:"string"}),") \u2014 Optional version (free form)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"skip"})})," (",(0,r.jsx)(n.code,{children:"array"}),"). Optional list of operations to skip when exporting telemetry defined ",(0,r.jsx)(n.code,{children:"object"})," with properties:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"method"}),": GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),". e.g.: ",(0,r.jsx)(n.code,{children:"/documentation/json"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"exporter"})})," (",(0,r.jsx)(n.code,{children:"object"})," or ",(0,r.jsx)(n.code,{children:"array"}),") \u2014 Exporter configuration. If not defined, the exporter defaults to ",(0,r.jsx)(n.code,{children:"console"}),". If an array of objects is configured, every object must be a valid exporter object. The exporter object has the following properties:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"type"})})," (",(0,r.jsx)(n.code,{children:"string"}),") \u2014 Exporter type. Supported values are ",(0,r.jsx)(n.code,{children:"console"}),", ",(0,r.jsx)(n.code,{children:"otlp"}),", ",(0,r.jsx)(n.code,{children:"zipkin"})," and ",(0,r.jsx)(n.code,{children:"memory"})," (default: ",(0,r.jsx)(n.code,{children:"console"}),"). ",(0,r.jsx)(n.code,{children:"memory"})," is only supported for testing purposes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"options"})})," (",(0,r.jsx)(n.code,{children:"object"}),") \u2014 These options are supported:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"url"})})," (",(0,r.jsx)(n.code,{children:"string"}),") \u2014 The URL to send the telemetry to. Required for ",(0,r.jsx)(n.code,{children:"otlp"})," exporter. This has no effect on ",(0,r.jsx)(n.code,{children:"console"})," and ",(0,r.jsx)(n.code,{children:"memory"})," exporters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"headers"})})," (",(0,r.jsx)(n.code,{children:"object"}),") \u2014 Optional headers to send with the telemetry. This has no effect on ",(0,r.jsx)(n.code,{children:"console"})," and ",(0,r.jsx)(n.code,{children:"memory"})," exporters."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["OTLP traces can be consumed by different solutions, like ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),". ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/ecosystem/vendors/",children:"Here"})," the full list."]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "telemetry": {\n      "serviceName": "test-service",\n      "exporter": {\n          "type": "otlp",\n          "options": {\n              "url": "http://localhost:4318/v1/traces"\n          }\n      }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"server",children:(0,r.jsx)(n.code,{children:"server"})}),"\n",(0,r.jsxs)(n.p,{children:["This configures the Platformatic Runtime entrypoint ",(0,r.jsx)(n.code,{children:"server"}),". If the entrypoint has also a ",(0,r.jsx)(n.code,{children:"server"})," configured, when the runtime is started, this configuration is used."]}),"\n",(0,r.jsxs)(n.p,{children:["See the Platformatic ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#server",children:"Service server documentation"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"undici",children:(0,r.jsx)(n.code,{children:"undici"})}),"\n",(0,r.jsxs)(n.p,{children:["This configures the ",(0,r.jsx)(n.a,{href:"https://undici.nodejs.org",children:(0,r.jsx)(n.code,{children:"undici"})})," global\n",(0,r.jsx)(n.a,{href:"https://undici.nodejs.org/#/docs/api/Dispatcher",children:"Dispatcher"}),".\nAllowing to configure the options in the agent as well as ",(0,r.jsx)(n.a,{href:"https://undici.nodejs.org/#/docs/api/Dispatcher?id=dispatchercomposeinterceptors-interceptor",children:"interceptors"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "undici": {\n      "keepAliveTimeout": 1000,\n      "keepAliveMaxTimeout": 1000,\n      "interceptors": [{\n          "module": "undici-oidc-interceptor",\n          "options": {\n              "clientId": "{PLT_CLIENT_ID}",\n              "clientSecret": "{PLT_CLIENT_SECRET}",\n              "idpTokenUrl": "{PLT_IDP_TOKEN_URL}",\n              "origins": ["{PLT_EXTERNAL_SERVICE}"]\n          }\n      }]\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["It's important to note that ",(0,r.jsx)(n.code,{children:"IDP"})," stands for Identity Provider, and its token ",(0,r.jsx)(n.code,{children:"url"})," is the URL that will be called to generate a new token."]}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:(0,r.jsx)(n.code,{children:"metrics"})}),"\n",(0,r.jsx)(n.p,{children:"This configures the Platformatic Runtime Prometheus server. The Prometheus server exposes aggregated metrics from the Platformatic Runtime services."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"hostname"})})," (",(0,r.jsx)(n.code,{children:"string"}),"). The hostname where the Prometheus server will be listening. Default: ",(0,r.jsx)(n.code,{children:"0.0.0.0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"port"})})," (",(0,r.jsx)(n.code,{children:"number"}),"). The port where the Prometheus server will be listening. Default: ",(0,r.jsx)(n.code,{children:"9090"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"endpoint"})})," (",(0,r.jsx)(n.code,{children:"string"}),"). The endpoint where the Prometheus server will be listening. Default: ",(0,r.jsx)(n.code,{children:"/metrics"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"auth"})})," (",(0,r.jsx)(n.code,{children:"object"}),"). Optional configuration for the Prometheus server authentication.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"username"})})," (",(0,r.jsx)(n.code,{children:"string"}),"). The username for the Prometheus server authentication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"password"})})," (",(0,r.jsx)(n.code,{children:"string"}),"). The password for the Prometheus server authentication."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"managementapi",children:(0,r.jsx)(n.code,{children:"managementApi"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning:"})," Experimental. The feature is not subject to semantic versioning rules. Non-backward compatible changes or removal may occur in any future release. Use of the feature is not recommended in production environments."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["An optional object that configures the Platformatic Management Api. If this object\nis not provided, the Platformatic Management Api will not be started. If enabled,\nit will listen to UNIX Socket/Windows named pipe located at ",(0,r.jsx)(n.code,{children:"platformatic/pids/<PID>"}),"\ninside the OS temporary folder."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"logs"})})," (",(0,r.jsx)(n.code,{children:"object"}),"). Optional configuration for the runtime logs.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"maxSize"})})," (",(0,r.jsx)(n.code,{children:"number"}),"). Maximum size of the logs that will be stored in the file system in MB. Default: ",(0,r.jsx)(n.code,{children:"200"}),". Minimum: ",(0,r.jsx)(n.code,{children:"5"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-and-using-env-placeholders",children:"Setting and Using ENV placeholders"}),"\n",(0,r.jsxs)(n.p,{children:["The value for any configuration setting can be replaced with an environment\nvariable by adding a placeholder in the configuration file, for example\n",(0,r.jsx)(n.code,{children:"{PLT_ENTRYPOINT}"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If an ",(0,r.jsx)(n.code,{children:".env"})," file exists it will automatically be loaded by Platformatic using\n",(0,r.jsx)(n.a,{href:"https://github.com/motdotla/dotenv",children:(0,r.jsx)(n.code,{children:"dotenv"})}),". For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",metastring:'title=".env"',children:"PLT_ENTRYPOINT=service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".env"})," file must be located in the same folder as the Platformatic\nconfiguration file or in the current working directory."]}),"\n",(0,r.jsx)(n.p,{children:"Environment variables can also be set directly on the command line, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"PLT_ENTRYPOINT=service npx platformatic runtime\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Learn how to ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#setting-environment-variables",children:"set"})," and ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#environment-variable-placeholders",children:"use"})," environment variable placeholders ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/service/configuration",children:"documentation"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"plt_root",children:"PLT_ROOT"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"{PLT_ROOT}"})," placeholder is automatically set to the directory containing the configuration file, so it can be used to configure relative paths. See our ",(0,r.jsx)(n.a,{href:"/docs/1.41.1/service/configuration#plt_root",children:"documentation"})," to learn more on PLT_ROOT placeholders."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);