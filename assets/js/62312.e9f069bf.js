"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[62312,3283],{3283:(e,t,n)=>{n.r(t),n.d(t,{formatElapsedTime:()=>i,getDocumentIndexId:()=>a,getDocumentProperties:()=>r.JN,getInnerType:()=>d,getVectorSize:()=>m,isArrayType:()=>p,isGeoPointType:()=>f,isVectorType:()=>l,validateSchema:()=>s});var o=n(27025),r=n(33465);async function i(e){return{raw:Number(e),formatted:await(0,r.j7)(e)}}async function a(e){if(e.id){if("string"!=typeof e.id)throw(0,o.$)("DOCUMENT_ID_MUST_BE_STRING",typeof e.id);return e.id}return await(0,r.NF)()}async function s(e,t){for(const[n,r]of Object.entries(t)){const t=e[n];if(void 0!==t&&(("geopoint"!==r||"object"!=typeof t||"number"!=typeof t.lon||"number"!=typeof t.lat)&&("enum"!==r||"string"!=typeof t&&"number"!=typeof t)))if("enum[]"===r&&Array.isArray(t)){const e=t.length;for(let o=0;o<e;o++)if("string"!=typeof t[o]&&"number"!=typeof t[o])return n+"."+o}else if(l(r)){const e=m(r);if(!Array.isArray(t)||t.length!==e)throw(0,o.$)("INVALID_INPUT_VECTOR",n,e,t.length)}else if(p(r)){if(!Array.isArray(t))return n;const e=d(r),o=t.length;for(let r=0;r<o;r++)if(typeof t[r]!==e)return n+"."+r}else if("object"!=typeof r){if(typeof t!==r)return n}else{if(!t||"object"!=typeof t)return n;const e=await s(t,r);if(e)return n+"."+e}}}const c={string:!1,number:!1,boolean:!1,enum:!1,geopoint:!1,"string[]":!0,"number[]":!0,"boolean[]":!0,"enum[]":!0},u={"string[]":"string","number[]":"number","boolean[]":"boolean","enum[]":"enum"};function f(e){return"geopoint"===e}function l(e){return"string"==typeof e&&/^vector\[\d+\]$/.test(e)}function p(e){return"string"==typeof e&&c[e]}function d(e){return u[e]}function m(e){const t=Number(e.slice(7,-1));switch(!0){case isNaN(t):throw(0,o.$)("INVALID_VECTOR_VALUE",e);case t<=0:throw(0,o.$)("INVALID_VECTOR_SIZE",e);default:return t}}},57561:(e,t,n)=>{n.d(t,{v:()=>s,e:()=>c});const o=Symbol("orama.insertions"),r=Symbol("orama.removals");var i;const a=(null===(i=globalThis.process)||void 0===i?void 0:i.emitWarning)??function(e,t){console.warn(`[WARNING] [${t.code}] ${e}`)};function s(e){"number"!=typeof e[o]&&(queueMicrotask((()=>{e[o]=void 0})),e[o]=0),e[o]>1e3?(a("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.",{code:"ORAMA0001"}),e[o]=-1):e[o]>=0&&e[o]++}function c(e){"number"!=typeof e[r]&&(queueMicrotask((()=>{e[r]=void 0})),e[r]=0),e[r]>1e3?(a("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.",{code:"ORAMA0002"}),e[r]=-1):e[r]>=0&&e[r]++}},62312:(e,t,n)=>{n.r(t),n.d(t,{innerInsertMultiple:()=>l,insert:()=>s,insertMultiple:()=>f});var o=n(3283),r=n(5341),i=n(57561),a=n(27025);async function s(e,t,n,s){const f=await e.validateSchema(t,e.schema);if(f)throw(0,a.$)("SCHEMA_VALIDATION_FAILURE",f);return async function(e,t,n,s){const{index:f,docs:l}=e.data,p=await e.getDocumentIndexId(t);if("string"!=typeof p)throw(0,a.$)("DOCUMENT_ID_MUST_BE_STRING",typeof p);if(!await e.documentsStore.store(l,p,t))throw(0,a.$)("DOCUMENT_ALREADY_EXISTS",p);const d=await e.documentsStore.count(l);s||await(0,r.VK)(e.beforeInsert,e,p,t);const m=await e.index.getSearchableProperties(f),y=await e.index.getSearchablePropertiesWithTypes(f),b=await e.getDocumentProperties(t,m);for(const[r,i]of Object.entries(b)){if(void 0===i)continue;const e=typeof i,t=y[r];if((!(0,o.isGeoPointType)(t)||"object"!=typeof i||"number"!=typeof i.lon||"number"!=typeof i.lat)&&!((0,o.isVectorType)(t)&&Array.isArray(i)||(0,o.isArrayType)(t)&&Array.isArray(i)||c.has(t)&&u.has(e)||e===t))throw(0,a.$)("INVALID_DOCUMENT_PROPERTY",r,t,e)}for(const o of m){var w,g,h,I;const t=b[o];if(void 0===t)continue;const r=y[o];await(null===(g=(w=e.index).beforeInsert)||void 0===g?void 0:g.call(w,e.data.index,o,p,t,r,n,e.tokenizer,d)),await e.index.insert(e.index,e.data.index,o,p,t,r,n,e.tokenizer,d),await(null===(I=(h=e.index).afterInsert)||void 0===I?void 0:I.call(h,e.data.index,o,p,t,r,n,e.tokenizer,d))}const A=await e.sorter.getSortableProperties(e.data.sorting),v=await e.sorter.getSortablePropertiesWithTypes(e.data.sorting),T=await e.getDocumentProperties(t,A);for(const o of A){const t=T[o];if(void 0===t)continue;const r=v[o];await e.sorter.insert(e.data.sorting,o,p,t,r,n)}s||await(0,r.VK)(e.afterInsert,e,p,t);return(0,i.v)(e),p}(e,t,n,s)}const c=new Set(["enum","enum[]"]),u=new Set(["string","number"]);async function f(e,t,n,o,i,s){i||await(0,r.F_)(e.beforeInsertMultiple,e,t);const c=t.length,u=e.schema;for(let r=0;r<c;r++){const n=await e.validateSchema(t[r],u);if(n)throw(0,a.$)("SCHEMA_VALIDATION_FAILURE",n)}return l(e,t,n,o,i,s)}async function l(e,t,n,o,i,a){n||(n=1e3),a??=0;const c=[];return await new Promise(((r,u)=>{let f=0;setTimeout((async function l(){const p=t.slice(f*n,++f*n);if(!p.length)return r();for(const t of p)try{const n=await s(e,t,o,i);c.push(n)}catch(d){u(d)}setTimeout(l,a)}),a)})),i||await(0,r.F_)(e.afterInsertMultiple,e,t),c}}}]);