import{An as e,Bn as t,Bt as n,E as r,In as i,Ln as a,Mn as o,Nn as s,Pn as c,Rn as l,Ut as u,Vn as d,Vt as f,Wt as p,Xn as m,Yn as h,Zn as g,_r as _,ar as v,ct as y,g as b,jn as x,ln as S,mr as C,n as w,pr as T,r as E,rn as D,rr as O,st as k,t as A,ur as j,ut as M}from"./_plugin-vue_export-helper-CctN37zK.js";import{n as N,t as P}from"./useI18n-BskqdnI6.js";import{i as F,n as I,r as L,t as R}from"./SkeletonLoader-C8Ozh2Xu.js";import{t as ee}from"./DataTable-ClFTW8sN.js";import{t as z}from"./DatePicker-Dg-G20si.js";import{t as B}from"./Statistic-DiOzg7vC.js";import{lt as V,p as H,t as U}from"./index-DeyMbItW.js";function W(t,n){let r=d(M,null);return e(()=>t.hljs||r?.mergedHljsRef.value)}function G(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var K={name:`Code`,common:b,self:G},q=n([f(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[p(`show-line-numbers`,`
 display: flex;
 `),u(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),p(`word-wrap`,[n(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),n(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),n(`[class^=hljs]`,`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{let t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),J=l({name:`Code`,props:Object.assign(Object.assign({},r.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(t,{slots:n}){let{internalNoHighlight:i}=t,{mergedClsPrefixRef:a,inlineThemeDisabled:o}=y(),s=j(null),c=i?{value:void 0}:W(t),l=(e,t,n)=>{let{value:r}=c;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},u=e(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),d=()=>{if(n.default)return;let{value:e}=s;if(!e)return;let{language:r}=t,i=t.uri?window.decodeURIComponent(t.code):t.code;if(r){let n=l(r,i,t.trim);if(n!==null){if(t.inline)e.innerHTML=n;else{let t=e.querySelector(`.__code__`);t&&e.removeChild(t);let r=document.createElement(`pre`);r.className=`__code__`,r.innerHTML=n,e.appendChild(r)}return}}if(t.inline){e.textContent=i;return}let a=e.querySelector(`.__code__`);if(a)a.textContent=i;else{let t=document.createElement(`pre`);t.className=`__code__`,t.textContent=i,e.innerHTML=``,e.appendChild(t)}};h(d),O(T(t,`language`),d),O(T(t,`code`),d),i||O(c,d);let f=r(`Code`,`-code`,q,K,t,a),p=e(()=>{let{common:{cubicBezierEaseInOut:e,fontFamilyMono:n},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":u,"hue-4":d,"hue-5":p,"hue-5-2":m,"hue-6":h,"hue-6-2":g}}=f.value,{internalFontSize:_}=t;return{"--n-font-size":_?`${_}px`:i,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":e,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":u,"--n-hue-4":d,"--n-hue-5":p,"--n-hue-5-2":m,"--n-hue-6":h,"--n-hue-6-2":g,"--n-line-number-text-color":o}}),m=o?k(`code`,e(()=>`${t.internalFontSize||`a`}`),p,t):void 0;return{mergedClsPrefix:a,codeRef:s,mergedShowLineNumbers:u,lineNumbers:e(()=>{let e=1,n=[],r=!1;for(let i of t.code)i===`
`?(r=!0,n.push(e++)):r=!1;return r||n.push(e++),n.join(`
`)}),cssVars:o?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;let{mergedClsPrefix:n,wordWrap:r,mergedShowLineNumbers:i,onRender:a}=this;return a?.(),t(`code`,{class:[`${n}-code`,this.themeClass,r&&`${n}-code--word-wrap`,i&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},i?t(`pre`,{class:`${n}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}}),Y={class:`operator-logs-view`},X={class:`view-header`},Z={class:`view-title`},Q={class:`header-actions`},te={class:`filter-bar`},ne={class:`filter-row`},re={key:0,class:`stats-row`},ie={key:3,class:`load-more-wrap`},$=A(l({__name:`LogsView`,setup(t){let{t:n}=P(),r=w(),l=V(),u=j(!1),d=j([]),f=j(0),p=j(!1),y=j(!1),b=j(``),T=null,k=j({model:null,success:``,user:``,dateRange:null,minTokens:null,maxTokens:null,offset:0,limit:50}),A=j([]),M=e(()=>{let e=d.value.length,t=d.value.filter(e=>e.success).length;return{total:e,tokens:d.value.reduce((e,t)=>e+(t.input_tokens||0)+(t.output_tokens||0),0),successRate:e?(t/e*100).toFixed(1):`0`}}),W=[{title:`Model`,key:`model`,width:140},{title:`User`,key:`username`,width:100},{title:`Status`,key:`success`,width:60,render:e=>e.success?`✓`:`✗`},{title:`Input`,key:`input_tokens`,width:100},{title:`Output`,key:`output_tokens`,width:100},{title:`Latency`,key:`latency`,width:80},{title:`Time`,key:`created_at`,width:160}];function G(e){b.value=e.error_message||`Unknown error`,y.value=!0}async function K(e=!1){u.value=!e;try{let t={offset:e?d.value.length:0,limit:k.value.limit};k.value.model&&(t.model=k.value.model),k.value.success&&(t.success=k.value.success),k.value.user&&(t.username=k.value.user),k.value.minTokens&&(t.min_tokens=k.value.minTokens),k.value.maxTokens&&(t.max_tokens=k.value.maxTokens),k.value.dateRange&&(t.start_date=new Date(k.value.dateRange[0]).toISOString(),t.end_date=new Date(k.value.dateRange[1]).toISOString());let n=await D.list(t,50,t.offset||0,!0);e?d.value.push(...n.items||[]):d.value=n.items||[],f.value=n.total||d.value.length}catch(e){r.toastError(e.message)}finally{u.value=!1}}function q(){K(!0)}function $(){k.value={model:null,success:``,user:``,dateRange:null,minTokens:null,maxTokens:null,offset:0,limit:50},K()}async function ae(){try{let e=new Date,t=S.exportUrl({fmt:`xlsx`,group_by:`detail`,date_from:new Date(e.getTime()-30*864e5).toISOString().slice(0,10),date_to:e.toISOString().slice(0,10)},!0);await S.download(t),r.toastSuccess(`Export started`)}catch(e){r.toastError(e.message)}}return O(p,e=>{e?T=setInterval(()=>K(),15e3):(clearInterval(T),T=null)}),h(()=>{let e=l.query.search;if(e){let t=A.value.find(t=>t.value===e||t.label===e);t?k.value.model=t.value:k.value.user=e,r.setGlobalSearchQuery(``)}K()}),m(()=>{T&&clearInterval(T)}),(e,t)=>(g(),o(U,null,{default:v(()=>[x(`div`,Y,[x(`div`,X,[x(`h2`,Z,_(C(n)(`logs`)),1),x(`div`,Q,[a(C(I),{value:p.value,"onUpdate:value":t[0]||=e=>p.value=e,size:`small`},{checked:v(()=>[i(_(C(n)(`autoRefresh`)),1)]),unchecked:v(()=>[i(_(C(n)(`autoRefresh`)),1)]),_:1},8,[`value`])])]),x(`div`,te,[x(`div`,ne,[a(C(F),{value:k.value.model,"onUpdate:value":t[1]||=e=>k.value.model=e,options:A.value,placeholder:C(n)(`model`),clearable:``,size:`small`,style:{width:`180px`}},null,8,[`value`,`options`,`placeholder`]),a(C(F),{value:k.value.success,"onUpdate:value":t[2]||=e=>k.value.success=e,options:[{label:C(n)(`all`),value:``},{label:C(n)(`success`),value:`true`},{label:C(n)(`failed`),value:`false`}],placeholder:`Status`,clearable:``,size:`small`,style:{width:`140px`}},null,8,[`value`,`options`]),a(C(N),{value:k.value.user,"onUpdate:value":t[3]||=e=>k.value.user=e,placeholder:C(n)(`username`),size:`small`,clearable:``,style:{width:`140px`}},null,8,[`value`,`placeholder`]),a(C(z),{value:k.value.dateRange,"onUpdate:value":t[4]||=e=>k.value.dateRange=e,type:`datetimerange`,size:`small`,clearable:``,style:{width:`260px`}},null,8,[`value`]),a(C(L),{value:k.value.minTokens,"onUpdate:value":t[5]||=e=>k.value.minTokens=e,placeholder:C(n)(`minTokens`),size:`small`,clearable:``,style:{width:`120px`}},null,8,[`value`,`placeholder`]),a(C(L),{value:k.value.maxTokens,"onUpdate:value":t[6]||=e=>k.value.maxTokens=e,placeholder:C(n)(`maxTokens`),size:`small`,clearable:``,style:{width:`120px`}},null,8,[`value`,`placeholder`]),a(C(E),{type:`primary`,size:`small`,onClick:K},{default:v(()=>[i(`🔍 `+_(C(n)(`search`)),1)]),_:1}),a(C(E),{size:`small`,onClick:$},{default:v(()=>[i(_(C(n)(`resetFilter`)),1)]),_:1}),a(C(E),{type:`success`,size:`small`,onClick:ae},{default:v(()=>[i(`📥 `+_(C(n)(`exportLogs`)),1)]),_:1})])]),d.value.length?(g(),c(`div`,re,[a(C(B),{label:`Total`,value:M.value.total},null,8,[`value`]),a(C(B),{label:`Tokens`,value:M.value.tokens},null,8,[`value`]),a(C(B),{label:`Success`,value:M.value.successRate+`%`},null,8,[`value`])])):s(``,!0),u.value?(g(),o(R,{key:1,type:`table`,count:5})):(g(),o(C(ee),{key:2,columns:W,data:d.value,bordered:!1,size:`small`,striped:``,"row-props":e=>({style:`cursor:pointer`,onClick:()=>e.success===!1&&G(e)})},null,8,[`data`,`row-props`])),a(C(H),{show:y.value,"onUpdate:show":t[7]||=e=>y.value=e,preset:`card`,title:`Error Detail`,style:{"max-width":`500px`}},{default:v(()=>[a(C(J),{code:b.value,"word-wrap":``},null,8,[`code`])]),_:1},8,[`show`]),d.value.length<f.value?(g(),c(`div`,ie,[a(C(E),{onClick:q,quaternary:``,type:`primary`},{default:v(()=>[i(` ↓ `+_(C(n)(`loadMore`))+` (`+_(d.value.length)+`/`+_(f.value)+`) `,1)]),_:1})])):s(``,!0)])]),_:1}))}}),[[`__scopeId`,`data-v-7bbb8234`]]);export{$ as default};