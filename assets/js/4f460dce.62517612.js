"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[29307],{27893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(74848),a=t(28453);const r={},o="Raw SQL queries",i={id:"guides/add-custom-functionality/raw-sql",title:"Raw SQL queries",description:"To run raw SQL queries using plugins, use app.platformatic.db.query method and passe to it a sql query using the app.platformatic.sql method.",source:"@site/versioned_docs/version-1.45.0/guides/add-custom-functionality/raw-sql.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/raw-sql",permalink:"/docs/guides/add-custom-functionality/raw-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.45.0/guides/add-custom-functionality/raw-sql.md",tags:[],version:"1.45.0",frontMatter:{}},c={},u=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"raw-sql-queries",children:"Raw SQL queries"}),"\n",(0,s.jsxs)(n.p,{children:["To run raw SQL queries using plugins, use ",(0,s.jsx)(n.code,{children:"app.platformatic.db.query"})," method and passe to it a sql query using the ",(0,s.jsx)(n.code,{children:"app.platformatic.sql"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\nmodule.exports = async(app, opts) => {\n  app.graphql.extendSchema(`\n    type YearlySales {\n      year: Int\n      sales: Int\n    }\n\n    extend type Query {\n      yearlySales: [YearlySales]\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      yearlySales: async(_, { title }) => {\n        const { db, sql } = app.platformatic;\n        const res = await db.query(sql(`\n          SELECT\n            YEAR(created_at) AS year,\n            SUM(amount) AS sales\n          FROM\n            orders\n          GROUP BY\n            YEAR(created_at)\n        `))\n        return res\n      }\n    }\n  })\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);