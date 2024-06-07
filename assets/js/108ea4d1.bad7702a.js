"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[57391],{44423:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const i={},r="Transactions",o={id:"packages/sql-mapper/entities/transactions",title:"Transactions",description:"Platformatic DB entities support transaction through the tx optional parameter.",source:"@site/versioned_docs/version-1.42.0/packages/sql-mapper/entities/transactions.md",sourceDirName:"packages/sql-mapper/entities",slug:"/packages/sql-mapper/entities/transactions",permalink:"/docs/1.42.0/packages/sql-mapper/entities/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.42.0/packages/sql-mapper/entities/transactions.md",tags:[],version:"1.42.0",frontMatter:{},sidebar:"docs",previous:{title:"Relations",permalink:"/docs/1.42.0/packages/sql-mapper/entities/relations"},next:{title:"Overview",permalink:"/docs/1.42.0/packages/sql-events/overview"}},c={},l=[];function p(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsxs)(e.p,{children:["Platformatic DB entities support transaction through the ",(0,s.jsx)(e.code,{children:"tx"})," optional parameter.\nIf the ",(0,s.jsx)(e.code,{children:"tx"})," parameter is provided, the entity will join the transaction, e.g.:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"\nconst { connect } = require('@platformatic/sql-mapper')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const { db, entities} = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n\n  const result = await db.tx(async tx => {\n    // these two operations will be executed in the same transaction\n   const authorResult = await entities.author.save({\n      fields: ['id', 'name'],\n      input: { name: 'test'},\n      tx\n    })\n    const res = await entities.page.save({\n      fields: ['title', 'authorId'],\n      input: { title: 'page title', authorId: authorResult.id },\n      tx\n    })\n    return res\n  })\n\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Throwing an Error triggers a transaction rollback:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"    try {\n      await db.tx(async tx => {\n        await entities.page.save({\n          input: { title: 'new page' },\n          fields: ['title'],\n          tx\n        })\n\n        // here we have `new page` \n        const findResult = await entities.page.find({ fields: ['title'], tx })\n        \n        // (...)\n\n        // We force the rollback\n        throw new Error('rollback')\n      })\n    } catch (e) {\n      // rollback\n    }\n    \n    // no 'new page' here...\n    const afterRollback = await entities.page.find({ fields: ['title'] })\n\n"})})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);