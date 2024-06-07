"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[89754],{31951:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const r={},a="Rules",o={id:"db/authorization/rules",title:"Rules",description:"Introduction",source:"@site/versioned_docs/version-1.41.1/db/authorization/rules.md",sourceDirName:"db/authorization",slug:"/db/authorization/rules",permalink:"/docs/1.41.1/db/authorization/rules",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/db/authorization/rules.md",tags:[],version:"1.41.1",frontMatter:{},sidebar:"docs",previous:{title:"User Roles & Metadata",permalink:"/docs/1.41.1/db/authorization/user-roles-metadata"},next:{title:"Plugin",permalink:"/docs/1.41.1/db/plugin"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Defining Rules",id:"defining-rules",level:2},{value:"Basic Rule Structure",id:"basic-rule-structure",level:3},{value:"Supported Operations",id:"supported-operations",level:3},{value:"Advanced Authorization Controls",id:"advanced-authorization-controls",level:2},{value:"Operation Checks",id:"operation-checks",level:3},{value:"GraphQL events and subscriptions",id:"graphql-events-and-subscriptions",level:3},{value:"Restrict Access to Entity Fields",id:"restrict-access-to-entity-fields",level:2},{value:"Set Entity Fields from User Metadata",id:"set-entity-fields-from-user-metadata",level:2},{value:"Programmatic Rules",id:"programmatic-rules",level:2},{value:"Access validation on <code>entity mapper</code> for plugins",id:"access-validation-on-entity-mapper-for-plugins",level:2},{value:"Skip authorization rules",id:"skip-authorization-rules",level:2},{value:"Avoid repetition of the same rule multiple times",id:"avoid-repetition-of-the-same-rule-multiple-times",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rules",children:"Rules"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Authorization rules in Platformatic DB define what operations users can perform on the REST or GraphQL APIs."}),"\n",(0,t.jsx)(n.h2,{id:"defining-rules",children:"Defining Rules"}),"\n",(0,t.jsx)(n.h3,{id:"basic-rule-structure",children:"Basic Rule Structure"}),"\n",(0,t.jsx)(n.p,{children:"Every authorization rule must include the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"})," (required) \u2014 Specifies the user role name as a string, which must align with roles set by an external authentication service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entity"})," or ",(0,t.jsx)(n.code,{children:"entities"})," (optional) \u2014 Defines one or more Platformatic DB entities the rule applies to. At least one of ",(0,t.jsx)(n.code,{children:"entity"})," or ",(0,t.jsx)(n.code,{children:"entities"})," must be specified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaults"})," (optional) \u2014 Sets default values for entity fields from ",(0,t.jsx)(n.a,{href:"#set-entity-fields-from-user-metadata",children:"user metadata"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,t.jsxs)(n.p,{children:["Each rule can specify permissions for CRUD operations (",(0,t.jsx)(n.code,{children:"find"}),", ",(0,t.jsx)(n.code,{children:"save"}),", ",(0,t.jsx)(n.code,{children:"delete"}),"). Here's an example illustrating how these permissions are structured:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "role": "user",\n  "entity": "page",\n  "find": true,\n  "save": false,\n  "delete": {\n    "checks": {\n      "userId": "X-PLATFORMATIC-USER-ID"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This configuration allows users with the ",(0,t.jsx)(n.code,{children:"user"})," role to ",(0,t.jsx)(n.code,{children:"find"})," and ",(0,t.jsx)(n.code,{children:"delete"})," pages where the ",(0,t.jsx)(n.code,{children:"userId"})," matches their user ",(0,t.jsx)(n.code,{children:"ID"}),", but they cannot save changes to pages."]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-authorization-controls",children:"Advanced Authorization Controls"}),"\n",(0,t.jsx)(n.h3,{id:"operation-checks",children:"Operation Checks"}),"\n",(0,t.jsxs)(n.p,{children:["For more fine-grained control, use the ",(0,t.jsx)(n.code,{children:"checks"})," field to define conditions under which operations can be executed. Every entity operation \u2014 such as ",(0,t.jsx)(n.code,{children:"find"}),", ",(0,t.jsx)(n.code,{children:"insert"}),", ",(0,t.jsx)(n.code,{children:"save"})," or ",(0,t.jsx)(n.code,{children:"delete"})," \u2014 can have authorization ",(0,t.jsx)(n.code,{children:"checks"})," specified for them. This value can be ",(0,t.jsx)(n.code,{children:"false"})," (operation disabled) or ",(0,t.jsx)(n.code,{children:"true"})," (operation enabled with no checks)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "role": "user",\n  "entity": "page",\n  "find": {\n    "checks": {\n      "userId": "X-PLATFORMATIC-USER-ID"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here a user with a ",(0,t.jsx)(n.code,{children:"user"})," role executes a ",(0,t.jsx)(n.code,{children:"findPage"})," operation and can access all the data for ",(0,t.jsx)(n.code,{children:"userId"})," metadata with the value key ",(0,t.jsx)(n.code,{children:"X-PLATFORMATIC-USER-ID"}),". It's possible to specify more complex rules using all the supported ",(0,t.jsx)(n.a,{href:"/docs/1.41.1/packages/sql-mapper/entities/api#where-clause",children:"where clause operators"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"userId"})," MUST exist as a field in the database table to use this feature."]})}),"\n",(0,t.jsx)(n.h3,{id:"graphql-events-and-subscriptions",children:"GraphQL events and subscriptions"}),"\n",(0,t.jsxs)(n.p,{children:["Platformatic DB supports GraphQL subscriptions, which require specific authorization checks based on ",(0,t.jsx)(n.code,{children:"find"})," permissions. The only permissions that are supported are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: false"}),", the subscription for that role is disabled"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: { checks: { [prop]: 'X-PLATFORMATIC-PROP' } }"})," validates that the given prop is equal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: { checks: { [prop]: { eq: 'X-PLATFORMATIC-PROP' } } }"})," validates that the given prop is equal"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Conflicting rules across roles for different equality checks will not be supported."})]}),"\n",(0,t.jsx)(n.h2,{id:"restrict-access-to-entity-fields",children:"Restrict Access to Entity Fields"}),"\n",(0,t.jsxs)(n.p,{children:["Platformatic DB allows the specification of ",(0,t.jsx)(n.code,{children:"fields"})," arrays in authorization rules to limit the columns a user can interact with during database operations."]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"save"})," operations, it's important to include all not-nullable fields in the configuration to prevent runtime errors due to missing data. Platformatic performs these checks at startup to ensure configurations are correct."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "rule": {\n    "entity": "page",\n    "role": "user",\n    "find": {\n      "checks": {\n        "userId": "X-PLATFORMATIC-USER-ID"\n      },\n      "fields": ["id", "title"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this configuration, a user with the ",(0,t.jsx)(n.code,{children:"user"})," role can only access the ",(0,t.jsx)(n.code,{children:"id"})," and ",(0,t.jsx)(n.code,{children:"title"})," fields of the ",(0,t.jsx)(n.code,{children:"page"})," entity."]}),"\n",(0,t.jsx)(n.h2,{id:"set-entity-fields-from-user-metadata",children:"Set Entity Fields from User Metadata"}),"\n",(0,t.jsx)(n.p,{children:"Defaults are used in database insert and are default fields added automatically populated from user metadata"}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example JSON object"',children:'{\n  "defaults": {\n    "userId": "X-PLATFORMATIC-USER-ID"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When a new entity is created, the ",(0,t.jsx)(n.code,{children:"userId"})," field is automatically populated with the value from the user's metadata."]}),"\n",(0,t.jsx)(n.h2,{id:"programmatic-rules",children:"Programmatic Rules"}),"\n",(0,t.jsx)(n.p,{children:"For advanced use cases involving authorization, Platformatic DB allows rules to be defined programmatically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\n  app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      async find ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      defaults: {\n        userId: async function ({ user, ctx, input }) {\n          match(user, {\n            'X-PLATFORMATIC-USER-ID': generated.shift(),\n            'X-PLATFORMATIC-ROLE': 'user'\n          })\n          return user['X-PLATFORMATIC-USER-ID']\n        }\n\n      },\n      async save ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      }\n    }]\n  })\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"user"})," role can delete all the posts edited before yesterday:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:" app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      find: true,\n      save: true,\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          editedAt: {\n            lt: yesterday\n          }\n        }\n      },\n      defaults: {\n        userId: 'X-PLATFORMATIC-USER-ID'\n      }\n    }]\n  })\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"access-validation-on-entity-mapper-for-plugins",children:["Access validation on ",(0,t.jsx)(n.code,{children:"entity mapper"})," for plugins"]}),"\n",(0,t.jsxs)(n.p,{children:["To assert that a specific user with it's ",(0,t.jsx)(n.code,{children:"role(s)"})," has the correct access rights to use entities on a ",(0,t.jsx)(n.code,{children:"platformatic plugin"})," the context should be passed to the ",(0,t.jsx)(n.code,{children:"entity mapper"})," in order to verify it's permissions like this:"]}),"\n",(0,t.jsxs)(n.p,{children:["To ensure that a specific user has the correct access rights to use entities within a Platformatic plugin, the user's context should be passed to the ",(0,t.jsx)(n.code,{children:"entity mapper"}),". This integration allows the mapper to verify permissions based on the defined rules."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//plugin.js\n\napp.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n  \n  await app.platformatic.entities.movie.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"skip-authorization-rules",children:"Skip authorization rules"}),"\n",(0,t.jsxs)(n.p,{children:["In custom plugins, you can skip authorization rules on entities programmatically by setting the ",(0,t.jsx)(n.code,{children:"skipAuth"})," flag to ",(0,t.jsx)(n.code,{children:"true"})," or not passing a ",(0,t.jsx)(n.code,{children:"ctx"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// this works even if the user's role doesn't have the `find` permission.\nconst result = await app.platformatic.entities.page.find({skipAuth: true, ...})\n"})}),"\n",(0,t.jsx)(n.p,{children:"This has the same effect:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// this works even if the user's role doesn't have the `find` permission\nconst result = await app.platformatic.entities.page.find() // no `ctx`\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is useful for custom plugins for which the authentication is not necessary, so there is no user role set when invoked."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Skip authorization is only applicable in custom plugins and cannot be used in automatically generated REST and GraphQL APIs."})}),"\n",(0,t.jsx)(n.h2,{id:"avoid-repetition-of-the-same-rule-multiple-times",children:"Avoid repetition of the same rule multiple times"}),"\n",(0,t.jsx)(n.p,{children:"To prevent redundancy and repetition of rules, you can condense similar rules for multiple entities into a single rule entry."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:" app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'anonymous',\n      entities: ['category', 'page'],\n      find: true,\n      delete: false,\n      save: false\n    }]\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);