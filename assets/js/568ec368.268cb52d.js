"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[65643],{48282:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),s=t(28453);const a={},r="Migrating a Fastify app to Platformatic Service",o={id:"guides/migrating-fastify-app-to-platformatic-service",title:"Migrating a Fastify app to Platformatic Service",description:"Introduction",source:"@site/versioned_docs/version-1.43.0/guides/migrating-fastify-app-to-platformatic-service.md",sourceDirName:"guides",slug:"/guides/migrating-fastify-app-to-platformatic-service",permalink:"/docs/1.43.0/guides/migrating-fastify-app-to-platformatic-service",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.43.0/guides/migrating-fastify-app-to-platformatic-service.md",tags:[],version:"1.43.0",frontMatter:{},sidebar:"Learn",previous:{title:"Generate Front-end Code to Consume Platformatic REST API",permalink:"/docs/1.43.0/guides/generate-frontend-code-to-consume-platformatic-rest-api"},next:{title:"Migrating an Express app to Platformatic Service",permalink:"/docs/1.43.0/guides/migrating-express-app-to-platformatic-service"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Example Fastify application",id:"example-fastify-application",level:2},{value:"Creating a new Platformatic Service app",id:"creating-a-new-platformatic-service-app",level:2},{value:"App configuration",id:"app-configuration",level:3},{value:"Using ES modules",id:"using-es-modules",level:3},{value:"Refactoring Fastify server factories",id:"refactoring-fastify-server-factories",level:3},{value:"Migrating plugins",id:"migrating-plugins",level:2},{value:"Disabling plugin encapsulation",id:"disabling-plugin-encapsulation",level:3},{value:"Migrating routes",id:"migrating-routes",level:2},{value:"Explicit route paths",id:"explicit-route-paths",level:3},{value:"Route prefixing with file-system based routing",id:"route-prefixing-with-file-system-based-routing",level:3},{value:"Adapting existing usage of @fastify/autoload",id:"adapting-existing-usage-of-fastifyautoload",level:3},{value:"Migrating tests",id:"migrating-tests",level:2},{value:"Replacing your Fastify server factory function",id:"replacing-your-fastify-server-factory-function",level:3},{value:"Disabling server logging in your tests",id:"disabling-server-logging-in-your-tests",level:3},{value:"Building apps with Platformatic Service",id:"building-apps-with-platformatic-service",level:2},{value:"Application features",id:"application-features",level:3},{value:"Development features",id:"development-features",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Watch: Understand the parts of a Platformatic app",id:"watch-understand-the-parts-of-a-platformatic-app",level:3}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"migrating-a-fastify-app-to-platformatic-service",children:"Migrating a Fastify app to Platformatic Service"}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Building production ready Node.js application with Fastify can require a certain amount of boilerplate code. This is a side effect of some of Fastify's technical principles:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"If it can be a plugin, it should be a plugin"})," \u2014 ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",children:"Plugins"})," help with the separation of concerns, they improve testability, and also provide a way to logically organise and structure your applications."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Developer choice = developer freedom"})," \u2014 Fastify only applies a few strong opinions, in key areas such as logging and validation. The framework features have been designed to give you the freedom to build your applications however you want."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"You know your needs best"})," \u2014 Fastify doesn't make assumptions about what plugins you'll need in your application. As the Fastify ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/ecosystem/",children:"plugin ecosystem"})," and the community has grown, a clear group of popular plugin choices has emerged."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/docs/1.43.0/service/overview",children:"Platformatic Service"})," is the natural evolution of the build-it-from-scratch Fastify development experience. It provides a solid foundation for building Node.js applications on top of Fastify, with best practices baked in."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"#building-apps-with-platformatic-service",children:"Building apps with Platformatic Service"})," section of this guide to learn more about the built-in features."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The good news is that the path to migrate a Fastify application to use Platformatic Service is fairly straightforward. This guide covers some of the things you'll need to know when migrating an application, as well as tips on different migration approaches."}),"\n",(0,n.jsxs)(i.p,{children:["This guide assumes that you have some experience building applications with the ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/",children:"Fastify"})," framework. If you'd like to learn more about about building web applications with Fastify, we recommend taking a look at:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Guides/Getting-Started/",children:"Fastify Getting Started guide"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.a,{href:"https://www.youtube.com/watch?v=e1jkA-ee_aY",children:"Building a modular monolith with Fastify"})," talk by Fastify co-creator and Platformatic co-founder, ",(0,n.jsx)(i.a,{href:"https://twitter.com/matteocollina",children:"Matteo Collina"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["The new ",(0,n.jsx)(i.a,{href:"https://packt.link/DvIDB",children:"Accelerating Server-Side Development with Fastify"})," book."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"example-fastify-application",children:"Example Fastify application"}),"\n",(0,n.jsx)(i.p,{children:"For the purpose of this guide, we have a basic example Fastify application. Although this app has a specific structure, the migration steps covered in this guide can generally be applied to any Fastify application."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["The code for the example Fastify and migrated Platformatic Service applications is available ",(0,n.jsx)(i.a,{href:"https://github.com/platformatic/examples/blob/main/applications/migrate-fastify-app-to-platformatic-service/",children:"on GitHub"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Here's the structure of the example Fastify application:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u2514\u2500\u2500 data-source.js\n\u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u251c\u2500\u2500 movies.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 quotes.js\n\u251c\u2500\u2500 server.js\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 routes.test.js\n"})}),"\n",(0,n.jsx)(i.p,{children:"It has the following dependencies:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'// package.json\n\n"dependencies": {\n  "fastify": "^4.17.0",\n  "fastify-plugin": "^4.5.0"\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"The application has a plugin that decorates the Fastify server instance, as well as two Fastify plugins which define API routes. Here's the code for them:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// plugins/data-source.js\n\nimport fastifyPlugin from 'fastify-plugin'\n\n/** @param {import('fastify').FastifyInstance} app */\nasync function dataSource (app) {\n  app.decorate('movies', [\n    'Jaws',\n    'Star Wars',\n    'The Wizard of Oz'\n  ])\n\n  app.decorate('quotes', [\n    'You\\'re gonna need a bigger boat.',\n    'May the Force be with you.',\n    'Toto, I\\'ve got a feeling we\\'re not in Kansas anymore.'\n  ])\n}\n\nexport default fastifyPlugin(dataSource)\n"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/fastify-plugin",children:(0,n.jsx)(i.code,{children:"fastify-plugin"})})," is used to to prevent Fastify from creating a new encapsulation context for the plugin. This makes the decorators that are registered in the ",(0,n.jsx)(i.code,{children:"dataSource"})," plugin available in the route plugins. You can learn about this fundamental Fastify concept in the Fastify ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Encapsulation/",children:"Encapsulation"})," documentation."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// routes/movies.js\n\n/** @param {import('fastify').FastifyInstance} app */\nexport default async function movieRoutes (app) {\n  app.get('/', async (request, reply) => {\n    return app.movies\n  })\n}\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// routes/quotes.js\n\n/** @param {import('fastify').FastifyInstance} app */\nexport default async function quotesRoutes (app) {\n  app.get('/', async (request, reply) => {\n    return app.quotes\n  })\n}\n"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["The route plugins aren't registering anything that needs to be available in other plugins. They have their own encapsulation context and don't need to be wrapped with ",(0,n.jsx)(i.code,{children:"fastify-plugin"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["There's also a ",(0,n.jsx)(i.code,{children:"buildApp()"})," factory function in ",(0,n.jsx)(i.code,{children:"app.js"}),", which takes care of creating a new Fastify server instance and registering the plugins and routes:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// app.js\n\nimport fastify from 'fastify'\n\nexport async function buildApp (options = {}) {\n  const app = fastify(options)\n\n  app.register(import('./plugins/data-source.js'))\n\n  app.register(import('./routes/movies.js'), { prefix: '/movies' })\n  app.register(import('./routes/quotes.js'), { prefix: '/quotes' })\n\n  return app\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["And ",(0,n.jsx)(i.code,{children:"server.js"}),", which calls the ",(0,n.jsx)(i.code,{children:"buildApp"})," function to create a new Fastify server, and then starts it listening:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// server.js\n\nimport { buildApp } from './app.js'\n\nconst port = process.env.PORT || 3042\nconst host = process.env.HOST || '127.0.0.1'\n\nconst options = {\n  logger: {\n    level: 'info'\n  }\n}\n\nconst app = await buildApp(options)\n\nawait app.listen({ port, host })\n"})}),"\n",(0,n.jsx)(i.p,{children:"As well as a couple of tests for the API routes:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// test/routes.test.js\n\nimport { test } from 'node:test'\nimport assert from 'node:assert/strict'\n\nimport { buildApp } from '../app.js'\n\ntest('Basic API', async (t) => {\n  const app = await buildApp()\n\n  t.after(async () => {\n    await app.close()\n  })\n\n  await t.test('GET request to /movies route', async () => {\n    const response = await app.inject({\n      method: 'GET',\n      url: '/movies'\n    })\n\n    assert.equal(response.statusCode, 200)\n    assert.deepEqual(response.json(), [\n      'Jaws',\n      'Star Wars',\n      'The Wizard of Oz'\n    ])\n  })\n\n  await t.test('GET request to /quotes route', async () => {\n    const response = await app.inject({\n      method: 'GET',\n      url: '/quotes'\n    })\n\n    assert.equal(response.statusCode, 200)\n    assert.deepEqual(response.json(), [\n      'You\\'re gonna need a bigger boat.',\n      'May the Force be with you.',\n      'Toto, I\\'ve got a feeling we\\'re not in Kansas anymore.'\n    ])\n  })\n})\n"})}),"\n",(0,n.jsxs)(i.p,{children:["These tests are using the built in Node.js test runner, ",(0,n.jsxs)(i.a,{href:"https://nodejs.org/api/test.html",children:["node",":test"]}),". They can be run with the command: ",(0,n.jsx)(i.code,{children:"node --test --test-reporter=spec test/*.test.js"}),"."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"@param"})," lines in this application code are ",(0,n.jsx)(i.a,{href:"https://jsdoc.app/",children:"JSDoc"})," blocks that import the ",(0,n.jsx)(i.code,{children:"FastifyInstance"})," type. This allows many code editors to provide auto-suggest, type hinting and type checking for your code."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"creating-a-new-platformatic-service-app",children:"Creating a new Platformatic Service app"}),"\n",(0,n.jsx)(i.p,{children:"To migrate your Fastify app to Platformatic Service, create a new Platformatic Service app with:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"npm create platformatic@latest\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Be sure to select ",(0,n.jsx)(i.code,{children:"Service"})," as the project type. Once the project has been created, you can delete the example ",(0,n.jsx)(i.code,{children:"plugins"})," and ",(0,n.jsx)(i.code,{children:"routes"})," directories."]}),"\n",(0,n.jsx)(i.h3,{id:"app-configuration",children:"App configuration"}),"\n",(0,n.jsxs)(i.p,{children:["The configuration for the Platformatic Service app is stored in ",(0,n.jsx)(i.code,{children:"platformatic.service.json"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The generated configuration is set up to load plugins from the ",(0,n.jsx)(i.code,{children:"plugins"})," and ",(0,n.jsx)(i.code,{children:"routes"})," directories:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'// platformatic.service.json\n\n"plugins": {\n  "paths": [\n    "./plugins",\n    "./routes"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["The value for any configuration setting in ",(0,n.jsx)(i.code,{children:"platformatic.service.json"})," can be replaced with an environment variable by adding a placeholder, for example ",(0,n.jsx)(i.code,{children:"{PLT_SERVER_LOGGER_LEVEL}"}),". In development, environment variables are automatically loaded by your Platformatic Service app from a ",(0,n.jsx)(i.code,{children:".env"})," file in the root directory of your app. In production, you'll typically set these environment variables using a feature provided by your hosting provider."]}),"\n",(0,n.jsxs)(i.p,{children:["See the Platformatic Service documentation for ",(0,n.jsx)(i.a,{href:"/docs/1.43.0/service/configuration#environment-variable-placeholders",children:"Environment variable placeholders"})," to learn more about how this works."]}),"\n",(0,n.jsx)(i.h3,{id:"using-es-modules",children:"Using ES modules"}),"\n",(0,n.jsxs)(i.p,{children:["If you're using ES modules in the Fastify application code that you'll be migrating, ensure that there's a ",(0,n.jsx)(i.code,{children:"type"})," field in ",(0,n.jsx)(i.code,{children:"package.json"})," set to ",(0,n.jsx)(i.code,{children:"module"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"npm pkg set type=module\n"})}),"\n",(0,n.jsx)(i.h3,{id:"refactoring-fastify-server-factories",children:"Refactoring Fastify server factories"}),"\n",(0,n.jsx)(i.p,{children:"If your Fastify application has a script with a factory function to create and build up a Fastify server instance, you can refactor it into a Fastify plugin and use it in your Platformatic Service app."}),"\n",(0,n.jsx)(i.p,{children:"Here are a few things to consider while refactoring it:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Move the options you're passing to Fastify when creating a new server instance to the ",(0,n.jsx)(i.code,{children:"server"})," block in ",(0,n.jsx)(i.code,{children:"platformatic.service.json"}),". These options will be passed through directly by Platformatic Service when it creates a Fastify server instance."]}),"\n",(0,n.jsxs)(i.li,{children:["You can create a root plugin to be loaded by your Platformatic Service app, for example: ",(0,n.jsx)(i.code,{children:"export default async function rootPlugin (app, options) { ... }"})]}),"\n",(0,n.jsx)(i.li,{children:"When you copy the code from your factory function into your root plugin, remove the code which is creating the Fastify server instance."}),"\n",(0,n.jsxs)(i.li,{children:["You can configure your Platformatic Service to load the root plugin, for example:","\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'"plugins": {\n  "paths": ["./root-plugin.js"]\n}\n'})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["If you need to pass options to your root plugin, you can do it like this:","\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'"plugins": {\n  "paths": [\n    {\n      "path": "./root-plugin.js",\n      "options": {\n        "someOption": true\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"migrating-plugins",children:"Migrating plugins"}),"\n",(0,n.jsxs)(i.p,{children:["Copy over the ",(0,n.jsx)(i.code,{children:"plugins"})," directory from your Fastify app. You shouldn't need to make any modifications for them to work with Platformatic Service."]}),"\n",(0,n.jsx)(i.h3,{id:"disabling-plugin-encapsulation",children:"Disabling plugin encapsulation"}),"\n",(0,n.jsxs)(i.p,{children:["Platformatic Service provides a configuration setting which enables you to disable encapsulation for a plugin, or all the plugins within a directory. This will make any decorators or hooks that you set in those plugins available to all other plugins. This removes the need for you to wrap your plugins with ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/fastify-plugin",children:(0,n.jsx)(i.code,{children:"fastify-plugin"})}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["To disable encapsulation for all plugins within the ",(0,n.jsx)(i.code,{children:"plugins"})," directory, you would set your ",(0,n.jsx)(i.code,{children:"plugins"})," configuration like this in ",(0,n.jsx)(i.code,{children:"platformatic.service.json"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'// platformatic.service.json\n\n"plugins": {\n  "paths": [\n    {\n        "path": "./plugins",\n        "encapsulate": false\n    },\n    "./routes"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["You can learn more about plugin encapsulation in the ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Guides/Plugins-Guide/",children:"Fastify Plugins Guide"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"migrating-routes",children:"Migrating routes"}),"\n",(0,n.jsxs)(i.p,{children:["Copy over the ",(0,n.jsx)(i.code,{children:"routes"})," directory from your Fastify app."]}),"\n",(0,n.jsx)(i.h3,{id:"explicit-route-paths",children:"Explicit route paths"}),"\n",(0,n.jsxs)(i.p,{children:["If you're registering routes in your Fastify application with full paths, for example ",(0,n.jsx)(i.code,{children:"/movies"}),", you won't need to make any changes to your route plugins."]}),"\n",(0,n.jsx)(i.h3,{id:"route-prefixing-with-file-system-based-routing",children:"Route prefixing with file-system based routing"}),"\n",(0,n.jsxs)(i.p,{children:["If you're using the ",(0,n.jsx)(i.code,{children:"prefix"})," option when registering route plugins in your Fastify application, for example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"app.register(import('./routes/movies.js'), { prefix: '/movies' })\n"})}),"\n",(0,n.jsx)(i.p,{children:"You can achieve the same result with Platformatic Service by using file-system based routing. With the following directory and file structure:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"routes/\n\u251c\u2500\u2500 movies\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 quotes\n    \u2514\u2500\u2500 index.js\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Assuming that both of the route files register a ",(0,n.jsx)(i.code,{children:"/"})," route, these are the route paths that will be registered in your Platformatic Service app:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"/movies\n/quotes\n"})}),"\n",(0,n.jsx)(i.p,{children:"With the example Fastify application, this would mean copying the route files over to these places in the Platformatic Service app:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"routes/movies.js -> routes/movies/index.js\nroutes/quotes.js -> routes/quotes/index.js\n"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"How does this work?"})," Plugins are loaded with the ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/@fastify/autoload",children:(0,n.jsx)(i.code,{children:"@fastify/autoload"})})," Fastify plugin. The ",(0,n.jsx)(i.code,{children:"dirNameRoutePrefix"})," ",(0,n.jsx)(i.a,{href:"https://github.com/fastify/fastify-autoload#global-configuration",children:"plugin option"})," for ",(0,n.jsx)(i.code,{children:"@fastify/autoload"}),' is enabled by default. This means that "routes will be automatically prefixed with the subdirectory name in an autoloaded directory".']}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["If you'd prefer not to use file-system based routing with Platformatic Service, you can add prefixes to the paths for the routes themselves (see ",(0,n.jsx)(i.a,{href:"#explicit-route-paths",children:"Explicit route paths"}),")."]}),"\n",(0,n.jsx)(i.h3,{id:"adapting-existing-usage-of-fastifyautoload",children:"Adapting existing usage of @fastify/autoload"}),"\n",(0,n.jsxs)(i.p,{children:["If you're using ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/@fastify/autoload",children:(0,n.jsx)(i.code,{children:"@fastify/autoload"})})," in your Fastify application, there are a couple of approaches you can take when migrating the app to Platformatic Service:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Configure ",(0,n.jsx)(i.code,{children:"plugins"})," in your Platformatic Service app's ",(0,n.jsx)(i.code,{children:"platformatic.service.json"}),". It will then take care of loading your routes and plugins for you with ",(0,n.jsx)(i.code,{children:"@fastify/autoload"})," (",(0,n.jsx)(i.a,{href:"/docs/reference/service/configuration#plugins",children:"configuration documentation"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:["You can continue to use ",(0,n.jsx)(i.code,{children:"@fastify/autoload"})," directly with a little refactoring. See the tips in the ",(0,n.jsx)(i.a,{href:"#refactoring-fastify-server-factories",children:"Refactoring Fastify server factories"})," section."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"migrating-tests",children:"Migrating tests"}),"\n",(0,n.jsxs)(i.p,{children:["You'll generally use the Platformatic CLI to start your Platformatic Service app (",(0,n.jsx)(i.code,{children:"npx platformatic start"}),"). However for testing, you can use the ",(0,n.jsx)(i.a,{href:"/docs/1.43.0/service/programmatic",children:"programmatic API"})," provided by Platformatic Service. This allows you to load your app in your test scripts and then run tests against it."]}),"\n",(0,n.jsx)(i.p,{children:"If you copy over the tests from your existing Fastify app, they will typically only require a small amount of refactoring to work with Platformatic Service."}),"\n",(0,n.jsx)(i.h3,{id:"replacing-your-fastify-server-factory-function",children:"Replacing your Fastify server factory function"}),"\n",(0,n.jsxs)(i.p,{children:["The example Fastify app has a ",(0,n.jsx)(i.code,{children:"buildApp()"})," factory function which creates a Fastify server instance. The ",(0,n.jsx)(i.code,{children:"import"})," line for that function can be removed from ",(0,n.jsx)(i.code,{children:"test/routes.test.js"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// test/routes.test.js\n\nimport { buildApp } from '../app.js'\n"})}),"\n",(0,n.jsxs)(i.p,{children:["And replaced with an ",(0,n.jsx)(i.code,{children:"import"})," of the ",(0,n.jsx)(i.code,{children:"buildServer()"})," function from ",(0,n.jsx)(i.code,{children:"@platformatic/service"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// test/routes.test.js\n\nimport { buildServer } from '@platformatic/service'\n"})}),"\n",(0,n.jsx)(i.p,{children:"You can then load your Platformatic Service app like this:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"\nconst app = await buildServer('./platformatic.service.json')\n"})}),"\n",(0,n.jsx)(i.h3,{id:"disabling-server-logging-in-your-tests",children:"Disabling server logging in your tests"}),"\n",(0,n.jsx)(i.p,{children:"If you have logged enabled for your Platformatic Service app, you'll probably want to disable the logging in your tests to remove noise from the output that you receive when you run your tests."}),"\n",(0,n.jsxs)(i.p,{children:["Instead of passing the path to your app's configuration to ",(0,n.jsx)(i.code,{children:"buildServer()"}),", you can import the app configuration and disable logging:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// test/routes.test.js\n\nimport serviceConfig from '../platformatic.service.json' assert { type: 'json' }\n\nserviceConfig.server.logger = false\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Then pass that ",(0,n.jsx)(i.code,{children:"serviceConfig"})," configuration object to the ",(0,n.jsx)(i.code,{children:"buildServer()"})," function:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"// test/routes.test.js\n\nconst app = await buildServer(serviceConfig)\n"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Import assertions \u2014 the ",(0,n.jsx)(i.code,{children:"assert { type: 'json' }"})," syntax \u2014 are not a stable feature of the JavaScript language, so you'll receive warning messages from Node.js when running your tests. You can disable these warnings by passing the ",(0,n.jsx)(i.code,{children:"--no-warnings"})," flag to ",(0,n.jsx)(i.code,{children:"node"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"building-apps-with-platformatic-service",children:"Building apps with Platformatic Service"}),"\n",(0,n.jsx)(i.p,{children:"Because Platformatic Service is built on top of the Fastify framework, you're able to use the full functionality of the Fastify framework in your Platformatic Service app. This includes:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Fast, ",(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Logging/",children:"structured logging"}),", provided by ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/pino",children:"Pino"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation-and-serialization",children:"Request validation"})," with JSON Schema and Ajv (other validation libraries are supported too)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Hooks/",children:"Hooks"}),", which allow fine grained control over when code is run during the request/response lifecycle."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Decorators/",children:"Decorators"}),", which allow you to customize core Fastify objects and write more modular code."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Platformatic Service also provides many other features that are built on top of Fastify."}),"\n",(0,n.jsx)(i.h3,{id:"application-features",children:"Application features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Metrics with ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/fastify-metrics",children:(0,n.jsx)(i.code,{children:"fastify-metrics"})})]}),"\n",(0,n.jsxs)(i.li,{children:["Healthcheck endpoint with ",(0,n.jsx)(i.a,{href:"https://github.com/fastify/under-pressure",children:(0,n.jsx)(i.code,{children:"@fastify/under-pressure"})})]}),"\n",(0,n.jsxs)(i.li,{children:["OpenAPI specification and Scalar with ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/@fastify/swagger",children:(0,n.jsx)(i.code,{children:"@fastify/swagger"})})," and ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/@scalar/fastify-api-reference",children:(0,n.jsx)(i.code,{children:"@scalar/fastify-api-reference"})})]}),"\n",(0,n.jsxs)(i.li,{children:["GraphQL API support with ",(0,n.jsx)(i.a,{href:"https://www.npmjs.com/package/mercurius",children:(0,n.jsx)(i.code,{children:"mercurius"})})]}),"\n",(0,n.jsxs)(i.li,{children:["CORS support with ",(0,n.jsx)(i.a,{href:"https://github.com/fastify/fastify-cors",children:(0,n.jsx)(i.code,{children:"@fastify/cors"})})]}),"\n",(0,n.jsx)(i.li,{children:"Configuration with environment variable validation"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["All Platformatic Service features are fully configurable via ",(0,n.jsx)(i.code,{children:"platformatic.service.json"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"development-features",children:"Development features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Hot reloading \u2014 Your server will automatically reload in development as you develop features."}),"\n",(0,n.jsx)(i.li,{children:"Write your plugins in JavaScript or TypeScript \u2014 TypeScript support is provided out-of-the-box and supports hot reloading."}),"\n",(0,n.jsx)(i.li,{children:"Pretty printed logs \u2014 Making it easier to understand and debug your application during development."}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"/docs/1.43.0/service/configuration",children:"Platformatic Service Configuration"})," documentation for all of the features which can be configured."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(i.p,{children:["The documentation for ",(0,n.jsx)(i.a,{href:"/docs/1.43.0/service/overview",children:"Platformatic Service"})," is a helpful reference when building a Platformatic Service app."]}),"\n",(0,n.jsx)(i.h3,{id:"watch-understand-the-parts-of-a-platformatic-app",children:"Watch: Understand the parts of a Platformatic app"}),"\n",(0,n.jsx)("iframe",{class:"aspect-ratio-16-9 margin-bottom--md",src:"//www.youtube.com/embed/b6G3xZlzJNk",frameborder:"0",allowfullscreen:""}),"\n",(0,n.jsx)(i.p,{children:"You want to be confident that you understand how your applications work. In this video you'll learn about the parts that make up a Platformatic application, what each part does, and how they fit together."}),"\n",(0,n.jsxs)(i.p,{children:["Our series of ",(0,n.jsx)(i.a,{href:"https://www.youtube.com/playlist?list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7",children:"Platformatic How-to videos"})," can help get you up and running building apps with Platformatic open-source tools."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Got questions or need help migrating your Fastify app to use Platformatic Service? Drop by our ",(0,n.jsx)(i.a,{href:"https://discord.gg/platformatic",children:"Discord server"})," and we'll be happy to help you."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);