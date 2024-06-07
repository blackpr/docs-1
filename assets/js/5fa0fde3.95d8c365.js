"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[55743,43629],{66626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),i=t(28453),r=t(11470),o=t(19365);const s={},l=void 0,c={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:",source:"@site/docs/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/next/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/getting-started/new-api-project-instructions.md",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:"}),"\n",(0,a.jsxs)(r.A,{groupId:"package-manager-create",children:[(0,a.jsx)(o.A,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This interactive command-line tool will guide you through setting up a new Platformatic project. For this guide, please choose the following options:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"- What kind of project do you want to create?   => Application\n- Where would you like to create your project?  => quick-start\n- Which kind of project do you want to create?  => @platformatic/db\n- What is the name of the service?              => (generated-randomly), e.g. legal-soup\n- What is the connection string?                => sqlite://./db.sqlite\n- Do you want to create default migrations?     => Yes\n- Do you want to create another service?        => No\n- Do you want to use TypeScript?                => No\n- What port do you want to use?                 => 3042\n- Do you want to init the git repository?       => No\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After completing the wizard, your Platformatic application will be ready in the ",(0,a.jsx)(n.code,{children:"quick-start"})," folder. This includes example migration files, plugin scripts, routes, and tests within your service directory."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If the wizard does not handle dependency installation, ensure to run ",(0,a.jsx)(n.code,{children:"npm/yarn/pnpm"})," install command manually:"]})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},54535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(74848),i=t(28453),r=t(66626),o=t(11470),s=t(19365);const l={},c="Movie Quotes App Tutorial",d={id:"guides/movie-quotes-app-tutorial",title:"Movie Quotes App Tutorial",description:"This tutorial will help you learn how to build a full stack application on top",source:"@site/docs/guides/movie-quotes-app-tutorial.md",sourceDirName:"guides",slug:"/guides/movie-quotes-app-tutorial",permalink:"/docs/next/guides/movie-quotes-app-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/guides/movie-quotes-app-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"Learn",previous:{title:"Build a Todo API",permalink:"/docs/next/learn/beginner/crud-application"},next:{title:"Deploy to Fly.io with SQLite",permalink:"/docs/next/guides/deployment/deploy-to-fly-io-with-sqlite"}},u={},h=[{value:"What we&#39;re going to cover",id:"what-were-going-to-cover",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the backend",id:"build-the-backend",level:2},{value:"Create a Platformatic API",id:"create-a-platformatic-api",level:3},...r.toc,{value:"Define the database schema",id:"define-the-database-schema",level:3},{value:"Create an entity relationship",id:"create-an-entity-relationship",level:3},{value:"Populate the database",id:"populate-the-database",level:3},{value:"Build a &quot;like&quot; quote feature",id:"build-a-like-quote-feature",level:2},{value:"Create an API migration",id:"create-an-api-migration",level:3},{value:"Create an API plugin",id:"create-an-api-plugin",level:3},{value:"Add a REST API route",id:"add-a-rest-api-route",level:2},{value:"Add a GraphQL API mutation",id:"add-a-graphql-api-mutation",level:3},{value:"Enable CORS on the API",id:"enable-cors-on-the-api",level:3},{value:"Wrapping up",id:"wrapping-up",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"movie-quotes-app-tutorial",children:"Movie Quotes App Tutorial"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial will help you learn how to build a full stack application on top\nof Platformatic DB. We're going to build an application that allows us to\nsave our favourite movie quotes. We'll also be building in custom API functionality\nthat allows for some neat user interaction on our frontend."}),"\n",(0,a.jsxs)(n.p,{children:["You can find the complete code for the application that we're going to build\n",(0,a.jsx)(n.a,{href:"https://github.com/platformatic/tutorial-movie-quotes-app",children:"on GitHub"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["We'll be building the frontend of our application with the ",(0,a.jsx)(n.a,{href:"https://astro.build/",children:"Astro"}),"\nframework, but the GraphQL API integration steps that we're going to cover can\nbe applied with most frontend frameworks."]})}),"\n",(0,a.jsx)(n.h2,{id:"what-were-going-to-cover",children:"What we're going to cover"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial we'll learn how to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a Platformatic API"}),"\n",(0,a.jsx)(n.li,{children:"Apply database migrations"}),"\n",(0,a.jsx)(n.li,{children:"Create relationships between our API entities"}),"\n",(0,a.jsx)(n.li,{children:"Populate our database tables"}),"\n",(0,a.jsx)(n.li,{children:"Build a frontend application that integrates with our GraphQL API"}),"\n",(0,a.jsx)(n.li,{children:"Extend our API with custom functionality"}),"\n",(0,a.jsx)(n.li,{children:"Enable CORS on our Platformatic API"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"To follow along with this tutorial you'll need to have these things installed:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," >= v18.8.0 or >= v20.6.0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.npmjs.com/cli/",children:"npm"})," v7 or later"]}),"\n",(0,a.jsxs)(n.li,{children:["A code editor, for example ",(0,a.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You'll also need to have some experience with JavaScript, and be comfortable with\nrunning commands in a terminal."}),"\n",(0,a.jsx)(n.h2,{id:"build-the-backend",children:"Build the backend"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-platformatic-api",children:"Create a Platformatic API"}),"\n",(0,a.jsx)(n.p,{children:"First, let's create our project directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir -p tutorial-movie-quotes-app/apps/movie-quotes-api/\n\ncd tutorial-movie-quotes-app/apps/movie-quotes-api/\n"})}),"\n",(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(n.h3,{id:"define-the-database-schema",children:"Define the database schema"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a new directory to store our migration files:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir migrations\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then we'll create a migration file named ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"001.do.sql"})})," in the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"migrations"})}),"\ndirectory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE quotes (\n  id INTEGER PRIMARY KEY,\n  quote TEXT NOT NULL,\n  said_by VARCHAR(255) NOT NULL,\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's setup ",(0,a.jsx)(n.code,{children:"migrations"})," in our Platformatic configuration\nfile, ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"platformatic.db.json"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.23.2/db",\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    }\n  },\n  "db": {\n    "connectionString": "{DATABASE_URL}",\n    "graphql": true,\n    "openapi": true\n  },\n  "plugins": {\n    "paths": [\n      "plugin.js"\n    ]\n  },\n  "types": {\n    "autogenerate": true\n  },\n  "migrations": {\n    "dir": "migrations",\n    "autoApply": true\n  }\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Take a look at the ",(0,a.jsx)(n.a,{href:"/docs/next/db/configuration",children:"Configuration reference"}),"\nto see all the supported configuration settings."]})}),"\n",(0,a.jsx)(n.p,{children:"Now we can start the Platformatic DB server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our Platformatic DB server should start, and we'll see messages like these:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[11:26:48.772] INFO (15235): running 001.do.sql\n[11:26:48.864] INFO (15235): server listening\n    url: "http://127.0.0.1:3042"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Let's open a new terminal and make a request to our server's REST API that\ncreates a new quote:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl --request POST --header "Content-Type: application/json" \\\n  -d "{ \\"quote\\": \\"Toto, I\'ve got a feeling we\'re not in Kansas anymore.\\", \\"saidBy\\": \\"Dorothy Gale\\" }" \\\n  http://localhost:3042/quotes\n'})}),"\n",(0,a.jsx)(n.p,{children:"We should receive a response like this from the API:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"id":1,"quote":"Toto, I\'ve got a feeling we\'re not in Kansas anymore.","saidBy":"Dorothy Gale","createdAt":"1684167422600"}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-an-entity-relationship",children:"Create an entity relationship"}),"\n",(0,a.jsxs)(n.p,{children:["Now let's create a migration file named ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"002.do.sql"})})," in the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"migrations"})}),"\ndirectory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE movies (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL UNIQUE\n);\n\nALTER TABLE quotes ADD COLUMN movie_id INTEGER REFERENCES movies(id);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This SQL will create a new ",(0,a.jsx)(n.code,{children:"movies"})," database table and also add a ",(0,a.jsx)(n.code,{children:"movie_id"}),"\ncolumn to the ",(0,a.jsx)(n.code,{children:"quotes"})," table. This will allow us to store movie data in the\n",(0,a.jsx)(n.code,{children:"movies"})," table and then reference them by ID in our ",(0,a.jsx)(n.code,{children:"quotes"})," table."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's stop the Platformatic DB server with ",(0,a.jsx)(n.code,{children:"Ctrl + C"}),", and then start it again:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The new migration should be automatically applied and we'll see the log message\n",(0,a.jsx)(n.code,{children:"running 002.do.sql"}),"."]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsxs)(s.A,{value:"graphql",label:"GraphQL",children:[(0,a.jsx)(n.p,{children:"Our Platformatic DB server also provides a GraphQL API. Let's open up the GraphiQL\napplication in our web browser:"}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://localhost:3042/graphiql",children:"http://localhost:3042/graphiql"})}),"\n"]}),(0,a.jsx)(n.p,{children:"Now let's run this query with GraphiQL to add the movie for the quote that we\nadded earlier:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  saveMovie(input: { name: "The Wizard of Oz" }) {\n    id\n  }\n}\n'})}),(0,a.jsx)(n.p,{children:"We should receive a response like this from the API:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "saveMovie": {\n      "id": "1"\n    }\n  }\n}\n'})}),(0,a.jsx)(n.p,{children:"Now we can update our quote to reference the movie:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  saveQuote(input: { id: 1, movieId: 1 }) {\n    id\n    quote\n    saidBy\n    createdAt\n    movie {\n      id\n      name\n    }\n  }\n}\n"})}),(0,a.jsx)(n.p,{children:"We should receive a response like this from the API:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "saveQuote": {\n      "id": "1",\n      "quote": "Toto, I\'ve got a feeling we\'re not in Kansas anymore.",\n      "saidBy": "Dorothy Gale",\n      "movie": {\n        "id": "1",\n        "name": "The Wizard of Oz"\n      }\n    }\n  }\n}\n'})}),(0,a.jsxs)(n.p,{children:["Our Platformatic DB server has automatically identified the relationship\nbetween our ",(0,a.jsx)(n.code,{children:"quotes"})," and ",(0,a.jsx)(n.code,{children:"movies"})," database tables. This allows us to make\nGraphQL queries that retrieve quotes and their associated movies at the same\ntime. For example, to retrieve all quotes from our database we can run:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query {\n  quotes {\n    id\n    quote\n    saidBy\n    createdAt\n    movie {\n      id\n      name\n    }\n  }\n}\n"})}),(0,a.jsx)(n.p,{children:"To view the GraphQL schema that's generated for our API by Platformatic DB,\nwe can run this command in our terminal:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db schema graphql\n"})}),(0,a.jsx)(n.p,{children:"The GraphQL schema shows all of the queries and mutations that we can run\nagainst our GraphQL API, as well as the types of data that it expects as input."})]}),(0,a.jsx)(s.A,{value:"rest",label:"Rest API",children:(0,a.jsx)(n.p,{children:"This is for Open APi Platformatic Rest API with Open API."})})]}),"\n",(0,a.jsx)(n.h3,{id:"populate-the-database",children:"Populate the database"}),"\n",(0,a.jsx)(n.p,{children:'Our movie quotes database is looking a little empty! We\'re going to create a\n"seed" script to populate it with some data.'}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a new file named ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"seed.js"})})," and copy and paste in this code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"'use strict'\n\nconst quotes = [\n  {\n    quote: \"Toto, I've got a feeling we're not in Kansas anymore.\",\n    saidBy: 'Dorothy Gale',\n    movie: 'The Wizard of Oz'\n  },\n  {\n    quote: \"You're gonna need a bigger boat.\",\n    saidBy: 'Martin Brody',\n    movie: 'Jaws'\n  },\n  {\n    quote: 'May the Force be with you.',\n    saidBy: 'Han Solo',\n    movie: 'Star Wars'\n  },\n  {\n    quote: 'I have always depended on the kindness of strangers.',\n    saidBy: 'Blanche DuBois',\n    movie: 'A Streetcar Named Desire'\n  }\n]\n\nmodule.exports = async function ({ entities, db, sql }) {\n  for (const values of quotes) {\n    const movie = await entities.movie.save({ input: { name: values.movie } })\n\n    console.log('Created movie:', movie)\n\n    const quote = {\n      quote: values.quote,\n      saidBy: values.saidBy,\n      movieId: movie.id\n    }\n\n    await entities.quote.save({ input: quote })\n\n    console.log('Created quote:', quote)\n  }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Take a look at the ",(0,a.jsx)(n.a,{href:"/docs/next/guides/seed-a-database",children:"Seed a Database"})," guide to learn more\nabout how database seeding works with Platformatic DB."]})}),"\n",(0,a.jsx)(n.p,{children:"Let's stop our Platformatic DB server running and remove our SQLite database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm db.sqlite\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now let's create a fresh SQLite database by running our migrations:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db migrations apply\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And then let's populate the ",(0,a.jsx)(n.code,{children:"quotes"})," and ",(0,a.jsx)(n.code,{children:"movies"})," tables with data using our\nseed script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db seed seed.js\n"})}),"\n",(0,a.jsx)(n.p,{children:"Our database is full of data, but we don't have anywhere to display it. It's\ntime to start building our frontend!"}),"\n",(0,a.jsx)(n.h2,{id:"build-a-like-quote-feature",children:'Build a "like" quote feature'}),"\n",(0,a.jsx)(n.p,{children:"We've built all the basic CRUD (Create, Retrieve, Update & Delete) features\ninto our application. Now let's build a feature so that users can interact\nand \"like\" their favourite movie quotes."}),"\n",(0,a.jsx)(n.p,{children:"To build this feature we're going to add custom functionality to our API\nand then add a new component, along with some client side JavaScript, to\nour frontend."}),"\n",(0,a.jsx)(n.h3,{id:"create-an-api-migration",children:"Create an API migration"}),"\n",(0,a.jsxs)(n.p,{children:["We're now going to work on the code for API, under the ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"apps/movie-quotes-api"})}),"\ndirectory."]}),"\n",(0,a.jsxs)(n.p,{children:["First let's create a migration that adds a ",(0,a.jsx)(n.code,{children:"likes"})," column to our ",(0,a.jsx)(n.code,{children:"quotes"}),"\ndatabase table. We'll create a new migration file, ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"migrations/003.do.sql"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE quotes ADD COLUMN likes INTEGER default 0;\n"})}),"\n",(0,a.jsx)(n.p,{children:"This migration will automatically be applied when we next start our Platformatic\nAPI."}),"\n",(0,a.jsx)(n.h3,{id:"create-an-api-plugin",children:"Create an API plugin"}),"\n",(0,a.jsxs)(n.p,{children:["To add custom functionality to our Platformatic API, we need to create a\n",(0,a.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",children:"Fastify plugin"})," and\nupdate our API configuration to use it."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a new file, ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"plugin.js"})}),", and inside it we'll add the skeleton\nstructure for our plugin:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// plugin.js\n\n'use strict'\n\nmodule.exports = async function plugin (app) {\n  app.log.info('plugin loaded')\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's register our plugin in our API configuration file, ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"platformatic.db.json"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "migrations": {\n    "dir": "./migrations"\n// highlight-start\n  },\n  "plugins": {\n    "paths": ["./plugin.js"]\n  }\n// highlight-end\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"And then we'll start up our Platformatic API:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"We should see log messages that tell us that our new migration has been\napplied and our plugin has been loaded:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[10:09:20.052] INFO (146270): running 003.do.sql\n[10:09:20.129] INFO (146270): plugin loaded\n[10:09:20.209] INFO (146270): server listening\n    url: "http://127.0.0.1:3042"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now it's time to start adding some custom functionality inside our plugin."}),"\n",(0,a.jsx)(n.h2,{id:"add-a-rest-api-route",children:"Add a REST API route"}),"\n",(0,a.jsxs)(n.p,{children:["We're going to add a REST route to our API that increments the count of\nlikes for a specific quote: ",(0,a.jsx)(n.code,{children:"/quotes/:id/like"})]}),"\n",(0,a.jsxs)(n.p,{children:["First let's add ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/fluent-json-schema",children:"fluent-json-schema"})," as a dependency for our API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install fluent-json-schema\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We'll use ",(0,a.jsx)(n.code,{children:"fluent-json-schema"})," to help us generate a JSON Schema. We can then\nuse this schema to validate the request path parameters for our route (",(0,a.jsx)(n.code,{children:"id"}),")."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://github.com/fastify/fastify-type-provider-typebox",children:"fastify-type-provider-typebox"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/sinclairzx81/typebox",children:"typebox"})," if you want to convert your JSON Schema into a Typescript type. See ",(0,a.jsx)(n.a,{href:"https://github.com/fastify/fluent-json-schema/issues/78#issuecomment-669059113",children:"this GitHub thread"})," to have a better overview about it. Look at the example below to have a better overview."]})}),"\n",(0,a.jsxs)(n.p,{children:["Here you can see in practice of to leverage ",(0,a.jsx)(n.code,{children:"typebox"})," combined with ",(0,a.jsx)(n.code,{children:"fastify-type-provider-typebox"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { FastifyInstance } from "fastify";\nimport { Static, Type } from "@sinclair/typebox";\nimport { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";\n\n/**\n * Creation of the JSON schema needed to validate the params passed to the route\n */\nconst schemaParams = Type.Object({\n  num1: Type.Number(),\n  num2: Type.Number(),\n});\n\n/**\n * We convert the JSON schema to the TypeScript type, in this case:\n * {\n    num1: number;\n    num2: number;\n  }\n */\ntype Params = Static<typeof schemaParams>;\n\n/**\n * Here we can pass the type previously created to our syncronous unit function\n */\nconst multiplication = ({ num1, num2 }: Params) => num1 * num2;\n\nexport default async function (app: FastifyInstance) {\n  app.withTypeProvider<TypeBoxTypeProvider>().get(\n    "/multiplication/:num1/:num2",\n    { schema: { params: schemaParams } },\n    /**\n     * Since we leverage `withTypeProvider<TypeBoxTypeProvider>()`,\n     * we no longer need to explicitly define the `params`.\n     * The will be automatically inferred as:\n     *  {\n          num1: number;\n          num2: number;\n        }\n     */\n    ({ params }) => multiplication(params)\n  );\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now let's add our REST API route in ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"plugin.js"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"'use strict'\n\n// highlight-next-line\nconst S = require('fluent-json-schema')\n\nmodule.exports = async function plugin (app) {\n  app.log.info('plugin loaded')\n\n  // This JSON Schema will validate the request path parameters.\n  // It reuses part of the schema that Platormatic DB has\n  // automatically generated for our Quote entity.\n// highlight-start\n  const schema = {\n    params: S.object().prop('id', app.getSchema('Quote').properties.id)\n  }\n\n  app.post('/quotes/:id/like', { schema }, async function (request, response) {\n    return {}\n  })\n// highlight-end\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We can now make a ",(0,a.jsx)(n.code,{children:"POST"})," request to our new API route:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --request POST http://localhost:3042/quotes/1/like\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Learn more about how validation works in the\n",(0,a.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/",children:"Fastify validation documentation"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Our API route is currently returning an empty object (",(0,a.jsx)(n.code,{children:"{}"}),"). Let's wire things\nup so that it increments the number of likes for the quote with the specified ID.\nTo do this we'll add a new function inside of our plugin:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"module.exports = async function plugin (app) {\n  app.log.info('plugin loaded')\n\n// highlight-start\n  async function incrementQuoteLikes (id) {\n    const { db, sql } = app.platformatic\n\n    const result = await db.query(sql`\n      UPDATE quotes SET likes = likes + 1 WHERE id=${id} RETURNING likes\n    `)\n\n    return result[0]?.likes\n  }\n// highlight-end\n\n  // ...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"And then we'll call that function in our route handler function:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"app.post('/quotes/:id/like', { schema }, async function (request, response) {\n// highlight-next-line\n  return { likes: await incrementQuoteLikes(request.params.id) }\n})\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now when we make a ",(0,a.jsx)(n.code,{children:"POST"})," request to our API route:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --request POST http://localhost:3042/quotes/1/like\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We should see that the ",(0,a.jsx)(n.code,{children:"likes"})," value for the quote is incremented every time\nwe make a request to the route."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"likes":1}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"add-a-graphql-api-mutation",children:"Add a GraphQL API mutation"}),"\n",(0,a.jsxs)(n.p,{children:["We can add a ",(0,a.jsx)(n.code,{children:"likeQuote"})," mutation to our GraphQL API by reusing the\n",(0,a.jsx)(n.code,{children:"incrementQuoteLikes"})," function that we just created."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's add this code at the end of our plugin, inside ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"plugin.js"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"module.exports = async function plugin (app) {\n  // ...\n\n// highlight-start\n  app.graphql.extendSchema(`\n    extend type Mutation {\n      likeQuote(id: ID!): Int\n    }\n  `)\n\n  app.graphql.defineResolvers({\n    Mutation: {\n      likeQuote: async (_, { id }) => await incrementQuoteLikes(id)\n    }\n  })\n// highlight-end\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The code we've just added extends our API's GraphQL schema and defines\na corresponding resolver for the ",(0,a.jsx)(n.code,{children:"likeQuote"})," mutation."]}),"\n",(0,a.jsxs)(n.p,{children:["We can now load up GraphiQL in our web browser and try out our new ",(0,a.jsx)(n.code,{children:"likeQuote"}),"\nmutation with this GraphQL query:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  likeQuote(id: 1)\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Learn more about how to extend the GraphQL schema and define resolvers in the\n",(0,a.jsx)(n.a,{href:"https://mercurius.dev/#/docs/api/options",children:"Mercurius API documentation"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"enable-cors-on-the-api",children:"Enable CORS on the API"}),"\n",(0,a.jsx)(n.p,{children:'When we build "like" functionality into our frontend, we\'ll be making a client\nside HTTP request to our GraphQL API. Our backend API and our frontend are running\non different origins, so we need to configure our API to allow requests from\nthe frontend. This is known as Cross-Origin Resource Sharing (CORS).'}),"\n",(0,a.jsxs)(n.p,{children:["To enable CORS on our API, let's open up our API's ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:".env"})})," file and add in\na new setting:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"PLT_SERVER_CORS_ORIGIN=http://localhost:3000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The value of ",(0,a.jsx)(n.code,{children:"PLT_SERVER_CORS_ORIGIN"})," is our frontend application's origin."]}),"\n",(0,a.jsxs)(n.p,{children:["Now we can add a ",(0,a.jsx)(n.code,{children:"cors"})," configuration object in our API's configuration file,\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"platformatic.db.json"})}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n// highlight-start\n    "cors": {\n      "origin": "{PLT_SERVER_CORS_ORIGIN}"\n    }\n// highlight-end\n  },\n  ...\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The HTTP responses from all endpoints on our API will now include the header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"access-control-allow-origin: http://localhost:3000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will allow JavaScript running on web pages under the ",(0,a.jsx)(n.code,{children:"http://localhost:3000"}),"\norigin to make requests to our API."]}),"\n",(0,a.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,a.jsx)(n.p,{children:"And we're done \u2014 you now have the knowledge you need to build a complete application on top of Platformatic DB."}),"\n",(0,a.jsx)(n.p,{children:"We can't wait to see what you'll build next!"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),i=t(18215),r=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:i}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==a&&(c(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,j.default)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);