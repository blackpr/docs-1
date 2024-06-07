"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[71929],{55145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(74848),o=n(28453);const i={},r="Telemetry with Jaeger",a={id:"guides/telemetry",title:"Telemetry with Jaeger",description:"Introduction",source:"@site/versioned_docs/version-1.43.0/guides/telemetry.md",sourceDirName:"guides",slug:"/guides/telemetry",permalink:"/docs/1.43.0/guides/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.43.0/guides/telemetry.md",tags:[],version:"1.43.0",frontMatter:{},sidebar:"Learn",previous:{title:"Use Stackables to build Platformatic applications",permalink:"/docs/1.43.0/guides/applications-with-stackables"},next:{title:"Dockerize a Platformatic App",permalink:"/docs/1.43.0/guides/dockerize-platformatic-app"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Jaeger setup",id:"jaeger-setup",level:2},{value:"Platformatic setup",id:"platformatic-setup",level:2},{value:"Platformatic DB Service",id:"platformatic-db-service",level:3},{value:"Platformatic Service",id:"platformatic-service",level:3},{value:"Platformatic Composer",id:"platformatic-composer",level:3},{value:"Run the Test",id:"run-the-test",level:2},{value:"What if you want to use Zipkin?",id:"what-if-you-want-to-use-zipkin",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"telemetry-with-jaeger",children:"Telemetry with Jaeger"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic supports Open Telemetry integration. This allows you to send telemetry data to one of the OTLP compatible servers (",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/ecosystem/vendors/",children:"see here"}),") or to a Zipkin server. Let's show this with ",(0,s.jsx)(t.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"jaeger-setup",children:"Jaeger setup"}),"\n",(0,s.jsx)(t.p,{children:"The quickest way is to use docker:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run -d --name jaeger \\\n  -e COLLECTOR_OTLP_ENABLED=true \\\n  -p 16686:16686 \\\n  -p 4317:4317 \\\n  -p 4318:4318 \\\n  jaegertracing/all-in-one:latest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Check that the server is running by opening ",(0,s.jsx)(t.a,{href:"http://localhost:16686/",children:"http://localhost:16686/"})," in your browser."]}),"\n",(0,s.jsx)(t.h2,{id:"platformatic-setup",children:"Platformatic setup"}),"\n",(0,s.jsx)(t.p,{children:"Will test this with a Platformatic Composer that proxy requests to a Platformatic Service, which in turn invokes a Platformatic DB Service.\nIn this way we show that the telemetry is propagated from the Composer throughout the services and the collected correctly.\nLet's setup all this components:"}),"\n",(0,s.jsx)(t.h3,{id:"platformatic-db-service",children:"Platformatic DB Service"}),"\n",(0,s.jsx)(t.p,{children:"Create a folder for DB and cd into it:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir test-db\ncd test-db\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then create a ",(0,s.jsx)(t.code,{children:"db"})," in the folder using ",(0,s.jsx)(t.code,{children:"npx create-platformatic@latest"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-platformatic@latest\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To make it simple, use ",(0,s.jsx)(t.code,{children:"sqlite"})," and create/apply the default migrations. This DB Service is exposed on port ",(0,s.jsx)(t.code,{children:"5042"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'\n\u279c npx create-platformatic@latest\n\n Hello user, welcome to Platformatic 0.32.0!\n Let\'s start by creating a new project.\n? Which kind of project do you want to create? DB\n? Where would you like to create your project? .\n? What database do you want to use? SQLite\n? Do you want to use the connection string "sqlite://./db.sqlite"? Confirm\n? Do you want to create default migrations? yes\n? Do you want to create a plugin? no\n? Do you want to use TypeScript? no\n? What port do you want to use? 5042\n[15:40:46] INFO: Configuration file platformatic.db.json successfully created.\n[15:40:46] INFO: Environment file .env successfully created.\n[15:40:46] INFO: Migrations folder migrations successfully created.\n[15:40:46] INFO: Migration file 001.do.sql successfully created.\n[15:40:46] INFO: Migration file 001.undo.sql successfully created.\n[15:40:46] INFO: Plugin file created at plugin.js\n? Do you want to run npm install? no\n? Do you want to apply migrations? yes\n\u2714 ...done!\n? Do you want to generate types? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n \nAll done! Please open the project directory and check the README.\nWill test this in one example with a Platformatic Composer that proxy requests to a Platformatic Service, which in turn invokes a Platformatic DB.\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.code,{children:"platformatic.db.json"})," file and add the telementry configuration:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'  "telemetry": {\n    "serviceName": "test-db",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  }\n'})}),"\n",(0,s.jsx)(t.p,{children:"Finally, start the DB service:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx platformatic db start\n"})}),"\n",(0,s.jsx)(t.h3,{id:"platformatic-service",children:"Platformatic Service"}),"\n",(0,s.jsxs)(t.p,{children:["Create at the same level of ",(0,s.jsx)(t.code,{children:"test-db"})," another folder for Service and cd into it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir test-service\ncd test-service\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then create a ",(0,s.jsx)(t.code,{children:"service"})," on the ",(0,s.jsx)(t.code,{children:"5043"})," port in the folder using ",(0,s.jsx)(t.code,{children:"npx create-platformatic@latest"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'\u279c npx create-platformatic@latest\n\n Hello user, welcome to Platformatic 0.32.0!\n Let\'s start by creating a new project.\n? Which kind of project do you want to create? Service\n? Where would you like to create your project? .\n? Do you want to run npm install? no\n? Do you want to use TypeScript? no\n? What port do you want to use? 5043\n[15:55:35] INFO: Configuration file platformatic.service.json successfully created.\n[15:55:35] INFO: Environment file .env successfully created.\n[15:55:35] INFO: Plugins folder "plugins" successfully created.\n[15:55:35] INFO: Routes folder "routes" successfully created.\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.code,{children:"platformatic.service.json"})," file and add the following telemetry configuration (it's exactly the same as ",(0,s.jsx)(t.code,{children:"DB"}),", but with a different ",(0,s.jsx)(t.code,{children:"serviceName"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'  "telemetry": {\n    "serviceName": "test-service",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We want this service to invoke the DB service, so we need to add a client for ",(0,s.jsx)(t.code,{children:"test-db"})," to it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx platformatic client http://127.0.0.1:5042 js --name movies\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Check ",(0,s.jsx)(t.code,{children:"platformatic.service.json"})," to see that the client has been added (",(0,s.jsx)(t.code,{children:"PLT_MOVIES_URL"})," is defined in ",(0,s.jsx)(t.code,{children:".env"}),"):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'    "clients": [\n    {\n      "schema": "movies/movies.openapi.json",\n      "name": "movies",\n      "type": "openapi",\n      "url": "{PLT_MOVIES_URL}"\n    }\n  ]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now open ",(0,s.jsx)(t.code,{children:"routes/root.js"})," and add the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"  fastify.get('/movies-length', async (request, reply) => {\n    const movies = await request.movies.getMovies()\n    return { length: movies.length }\n  })\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This code calls ",(0,s.jsx)(t.code,{children:"movies"})," to get all the movies and returns the length of the array."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, start the service:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx platformatic service start\n"})}),"\n",(0,s.jsx)(t.h3,{id:"platformatic-composer",children:"Platformatic Composer"}),"\n",(0,s.jsxs)(t.p,{children:["Create at the same level of ",(0,s.jsx)(t.code,{children:"test-db"})," and ",(0,s.jsx)(t.code,{children:"test-service"})," another folder for Composer and cd into it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir test-composer\ncd test-composer\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then create a ",(0,s.jsx)(t.code,{children:"composer"})," on the ",(0,s.jsx)(t.code,{children:"5044"})," port in the folder using ",(0,s.jsx)(t.code,{children:"npx create-platformatic@latest"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\u279c npx create-platformatic@latest\n\n Hello marcopiraccini, welcome to Platformatic 0.32.0!\n Let's start by creating a new project.\n? Which kind of project do you want to create? Composer\n? Where would you like to create your project? .\n? What port do you want to use? 5044\n? Do you want to run npm install? no\n[16:05:28] INFO: Configuration file platformatic.composer.json successfully created.\n[16:05:28] INFO: Environment file .env successfully created.\n? Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? no\n? Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? no\n \nAll done! Please open the project directory and check the README.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.code,{children:"platformatic.composer.js"})," and change it to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.32.0/composer",\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    }\n  },\n  "composer": {\n    "services": [\n      {\n        "id": "example",\n        "origin": "http://127.0.0.1:5043",\n        "openapi": {\n          "url": "/documentation/json"\n        }\n      }\n    ],\n    "refreshTimeout": 3000\n  },\n  "telemetry": {\n    "serviceName": "test-composer",\n    "exporter": {\n      "type": "otlp",\n      "options": {\n        "url": "http://localhost:4318/v1/traces"\n      }\n    }\n  },\n  "watch": true\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note that we just added ",(0,s.jsx)(t.code,{children:"test-service"})," as ",(0,s.jsx)(t.code,{children:"origin"})," of the proxied service and added the usual ",(0,s.jsx)(t.code,{children:"telemetry"})," configuration, with a different ",(0,s.jsx)(t.code,{children:"serviceName"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, start the composer:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx platformatic composer start\n"})}),"\n",(0,s.jsx)(t.h2,{id:"run-the-test",children:"Run the Test"}),"\n",(0,s.jsxs)(t.p,{children:["Check that the composer is exposing ",(0,s.jsx)(t.code,{children:"movies-length"})," opening: ",(0,s.jsx)(t.a,{href:"http://127.0.0.1:5044/documentation/",children:"http://127.0.0.1:5044/documentation/"})]}),"\n",(0,s.jsxs)(t.p,{children:["You should see:\n",(0,s.jsx)(t.img,{alt:"image",src:n(7398).A+"",width:"1093",height:"342"})]}),"\n",(0,s.jsxs)(t.p,{children:["To add some data, we can POST directly to the DB service (port ",(0,s.jsx)(t.code,{children:"5042"}),"):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" -d \'{"title":"The Matrix"}\' http://127.0.0.1:5042/movies \ncurl -X POST -H "Content-Type: application/json" -d \'{"title":"The Matrix Reloaded"}\'  http://127.0.0.1:5042/movies \n'})}),"\n",(0,s.jsx)(t.p,{children:"Now, let's check that the composer (port 5044) is working:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl http://127.0.0.1:5044/movies-length\n"})}),"\n",(0,s.jsx)(t.p,{children:"If the composer is working correctly, you should see:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{"length":2}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["However, the main interest of this example is to show how to use the Platformatic Telemetry, so let's check it.\nOpen the Jaeger UI at ",(0,s.jsx)(t.a,{href:"http://localhost:16686/",children:"http://localhost:16686/"})," and you should see something like this:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(93373).A+"",width:"1073",height:"698"})}),"\n",(0,s.jsxs)(t.p,{children:["Select on the left the ",(0,s.jsx)(t.code,{children:"test-composer"})," service and the ",(0,s.jsx)(t.code,{children:"GET /movies-length"}),' operation, click on "Find traces" and you should see something like this:']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(52134).A+"",width:"1640",height:"606"})}),"\n",(0,s.jsx)(t.p,{children:"You can then click on the trace and see the details:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(91151).A+"",width:"1353",height:"404"})}),"\n",(0,s.jsx)(t.p,{children:"Note that every time a request is received or client call is done, a new span is started. So we have:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["One span for the request received by the ",(0,s.jsx)(t.code,{children:"test-composer"})]}),"\n",(0,s.jsxs)(t.li,{children:["One span for the client call to ",(0,s.jsx)(t.code,{children:"test-service"})]}),"\n",(0,s.jsxs)(t.li,{children:["One span for the request received by ",(0,s.jsx)(t.code,{children:"test-service"})]}),"\n",(0,s.jsxs)(t.li,{children:["One span for the client call to ",(0,s.jsx)(t.code,{children:"test-db"})]}),"\n",(0,s.jsxs)(t.li,{children:["One span for the request received by ",(0,s.jsx)(t.code,{children:"test-db"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"All these spans are linked together, so you can see the whole trace."}),"\n",(0,s.jsx)(t.h2,{id:"what-if-you-want-to-use-zipkin",children:"What if you want to use Zipkin?"}),"\n",(0,s.jsx)(t.p,{children:"Starting from this example, it's also possible to run the same test using Zipkin. To do so, you need to start the Zipkin server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run -d -p 9411:9411 openzipkin/zipkin\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, you need to change the ",(0,s.jsx)(t.code,{children:"telemetry"})," configuration in all the  ",(0,s.jsx)(t.code,{children:"platformatic.*.json"})," to the following (only the ",(0,s.jsx)(t.code,{children:"exporter"})," object is different`)"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'  "telemetry": {\n    (...)\n    "exporter": {\n      "type": "zipkin",\n      "options": {\n        "url": "http://127.0.0.1:9411/api/v2/spans"\n      }\n    }\n  }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The zipkin ui is available at ",(0,s.jsx)(t.a,{href:"http://localhost:9411/",children:"http://localhost:9411/"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7398:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/compose-openapi-336d2ae348d9fc45815c099b25e9b7ed.png"},93373:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/jaeger-1-24aa07f749ff6a07f71cf97b0fee13c2.png"},52134:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/jaeger-2-4dc771655ab5c0ded1490676a9fc3fd9.png"},91151:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/jaeger-3-ca388386c93e10b0833acbb652d9f4ff.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);