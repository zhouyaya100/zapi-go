import{An as e,Bn as t,Bt as n,Ht as r,In as i,Ln as a,Mn as o,Nn as s,Pn as c,Rn as l,T as u,Ut as d,Vn as f,Xn as p,Yn as m,Zn as h,_r as g,ar as _,cn as v,h as y,jn as b,lt as x,mr as S,n as C,nn as w,ot as T,pr as E,rr as D,st as O,t as k,ur as A,zt as j}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{n as M,t as N}from"./useI18n-Bw8dRrjR.js";import{i as P,n as F,r as I,t as L}from"./SkeletonLoader-BLFHI9cw.js";import{t as R}from"./DataTable-B-NzJvqE.js";import{t as z}from"./DatePicker-DG9VJ09T.js";import{t as B}from"./Statistic-D1KoclCs.js";import{m as V,n as H,t as U,ut as W}from"./index-BqSDc86C.js";function G(t,n){let r=f(x,null);return e(()=>t.hljs||r?.mergedHljsRef.value)}function K(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var q={name:`Code`,common:y,self:K},J=j([n(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[d(`show-line-numbers`,`
 display: flex;
 `),r(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),d(`word-wrap`,[j(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),j(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),j(`[class^=hljs]`,`
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
 }`]}]),Y=l({name:`Code`,props:Object.assign(Object.assign({},u.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(t,{slots:n}){let{internalNoHighlight:r}=t,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=O(),o=A(null),s=r?{value:void 0}:G(t),c=(e,t,n)=>{let{value:r}=s;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},l=e(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),d=()=>{if(n.default)return;let{value:e}=o;if(!e)return;let{language:r}=t,i=t.uri?window.decodeURIComponent(t.code):t.code;if(r){let n=c(r,i,t.trim);if(n!==null){if(t.inline)e.innerHTML=n;else{let t=e.querySelector(`.__code__`);t&&e.removeChild(t);let r=document.createElement(`pre`);r.className=`__code__`,r.innerHTML=n,e.appendChild(r)}return}}if(t.inline){e.textContent=i;return}let a=e.querySelector(`.__code__`);if(a)a.textContent=i;else{let t=document.createElement(`pre`);t.className=`__code__`,t.textContent=i,e.innerHTML=``,e.appendChild(t)}};m(d),D(E(t,`language`),d),D(E(t,`code`),d),r||D(s,d);let f=u(`Code`,`-code`,J,q,t,i),p=e(()=>{let{common:{cubicBezierEaseInOut:e,fontFamilyMono:n},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":u,"hue-4":d,"hue-5":p,"hue-5-2":m,"hue-6":h,"hue-6-2":g}}=f.value,{internalFontSize:_}=t;return{"--n-font-size":_?`${_}px`:i,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":e,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":u,"--n-hue-4":d,"--n-hue-5":p,"--n-hue-5-2":m,"--n-hue-6":h,"--n-hue-6-2":g,"--n-line-number-text-color":o}}),h=a?T(`code`,e(()=>`${t.internalFontSize||`a`}`),p,t):void 0;return{mergedClsPrefix:i,codeRef:o,mergedShowLineNumbers:l,lineNumbers:e(()=>{let e=1,n=[],r=!1;for(let i of t.code)i===`
`?(r=!0,n.push(e++)):r=!1;return r||n.push(e++),n.join(`
`)}),cssVars:a?void 0:p,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;let{mergedClsPrefix:n,wordWrap:r,mergedShowLineNumbers:i,onRender:a}=this;return a?.(),t(`code`,{class:[`${n}-code`,this.themeClass,r&&`${n}-code--word-wrap`,i&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},i?t(`pre`,{class:`${n}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}}),X={class:`operator-logs-view`},Z={class:`view-header`},Q={class:`view-title`},ee={class:`header-actions`},te={class:`filter-bar`},ne={class:`filter-row`},re={key:0,class:`stats-row`},ie={key:3,class:`load-more-wrap`},$=k(l({__name:`LogsView`,setup(t){let{t:n}=N(),r=H(),l=W(),u=A(!1),d=A([]),f=A(0),y=A(!1),x=A(!1),T=A(``),E=null,O=A({model:null,success:``,user:``,dateRange:null,minTokens:null,maxTokens:null,offset:0,limit:50}),k=A([]),j=e(()=>{let e=d.value.length,t=d.value.filter(e=>e.success).length;return{total:e,tokens:d.value.reduce((e,t)=>e+(t.input_tokens||0)+(t.output_tokens||0),0),successRate:e?(t/e*100).toFixed(1):`0`}}),G=[{title:`Model`,key:`model`,width:140},{title:`User`,key:`username`,width:100},{title:`Status`,key:`success`,width:60,render:e=>e.success?`✓`:`✗`},{title:`Input`,key:`input_tokens`,width:100},{title:`Output`,key:`output_tokens`,width:100},{title:`Latency`,key:`latency`,width:80},{title:`Time`,key:`created_at`,width:160}];function K(e){T.value=e.error_message||`Unknown error`,x.value=!0}async function q(e=!1){u.value=!e;try{let t={offset:e?d.value.length:0,limit:O.value.limit};O.value.model&&(t.model=O.value.model),O.value.success&&(t.success=O.value.success),O.value.user&&(t.username=O.value.user),O.value.minTokens&&(t.min_tokens=O.value.minTokens),O.value.maxTokens&&(t.max_tokens=O.value.maxTokens),O.value.dateRange&&(t.start_date=new Date(O.value.dateRange[0]).toISOString(),t.end_date=new Date(O.value.dateRange[1]).toISOString());let n=await w.list(t,50,t.offset||0,!0);e?d.value.push(...n.items||[]):d.value=n.items||[],f.value=n.total||d.value.length}catch(e){r.toastError(e.message)}finally{u.value=!1}}function J(){q(!0)}function $(){O.value={model:null,success:``,user:``,dateRange:null,minTokens:null,maxTokens:null,offset:0,limit:50},q()}async function ae(){try{let e=new Date,t=v.exportUrl({fmt:`xlsx`,group_by:`detail`,date_from:new Date(e.getTime()-30*864e5).toISOString().slice(0,10),date_to:e.toISOString().slice(0,10)},!0);await v.download(t),r.toastSuccess(`Export started`)}catch(e){r.toastError(e.message)}}return D(y,e=>{e?E=setInterval(()=>q(),15e3):(clearInterval(E),E=null)}),m(()=>{let e=l.query.search;if(e){let t=k.value.find(t=>t.value===e||t.label===e);t?O.value.model=t.value:O.value.user=e,r.setGlobalSearchQuery(``)}q()}),p(()=>{E&&clearInterval(E)}),(e,t)=>(h(),o(U,null,{default:_(()=>[b(`div`,X,[b(`div`,Z,[b(`h2`,Q,g(S(n)(`logs`)),1),b(`div`,ee,[a(S(F),{value:y.value,"onUpdate:value":t[0]||=e=>y.value=e,size:`small`},{checked:_(()=>[i(g(S(n)(`autoRefresh`)),1)]),unchecked:_(()=>[i(g(S(n)(`autoRefresh`)),1)]),_:1},8,[`value`])])]),b(`div`,te,[b(`div`,ne,[a(S(P),{value:O.value.model,"onUpdate:value":t[1]||=e=>O.value.model=e,options:k.value,placeholder:S(n)(`model`),clearable:``,size:`small`,style:{width:`180px`}},null,8,[`value`,`options`,`placeholder`]),a(S(P),{value:O.value.success,"onUpdate:value":t[2]||=e=>O.value.success=e,options:[{label:S(n)(`all`),value:``},{label:S(n)(`success`),value:`true`},{label:S(n)(`failed`),value:`false`}],placeholder:`Status`,clearable:``,size:`small`,style:{width:`140px`}},null,8,[`value`,`options`]),a(S(M),{value:O.value.user,"onUpdate:value":t[3]||=e=>O.value.user=e,placeholder:S(n)(`username`),size:`small`,clearable:``,style:{width:`140px`}},null,8,[`value`,`placeholder`]),a(S(z),{value:O.value.dateRange,"onUpdate:value":t[4]||=e=>O.value.dateRange=e,type:`datetimerange`,size:`small`,clearable:``,style:{width:`260px`}},null,8,[`value`]),a(S(I),{value:O.value.minTokens,"onUpdate:value":t[5]||=e=>O.value.minTokens=e,placeholder:S(n)(`minTokens`),size:`small`,clearable:``,style:{width:`120px`}},null,8,[`value`,`placeholder`]),a(S(I),{value:O.value.maxTokens,"onUpdate:value":t[6]||=e=>O.value.maxTokens=e,placeholder:S(n)(`maxTokens`),size:`small`,clearable:``,style:{width:`120px`}},null,8,[`value`,`placeholder`]),a(S(C),{type:`primary`,size:`small`,onClick:q},{default:_(()=>[i(`🔍 `+g(S(n)(`search`)),1)]),_:1}),a(S(C),{size:`small`,onClick:$},{default:_(()=>[i(g(S(n)(`resetFilter`)),1)]),_:1}),a(S(C),{type:`success`,size:`small`,onClick:ae},{default:_(()=>[i(`📥 `+g(S(n)(`exportLogs`)),1)]),_:1})])]),d.value.length?(h(),c(`div`,re,[a(S(B),{label:`Total`,value:j.value.total},null,8,[`value`]),a(S(B),{label:`Tokens`,value:j.value.tokens},null,8,[`value`]),a(S(B),{label:`Success`,value:j.value.successRate+`%`},null,8,[`value`])])):s(``,!0),u.value?(h(),o(L,{key:1,type:`table`,count:5})):(h(),o(S(R),{key:2,columns:G,data:d.value,bordered:!1,size:`small`,striped:``,"row-props":e=>({style:`cursor:pointer`,onClick:()=>e.success===!1&&K(e)})},null,8,[`data`,`row-props`])),a(S(V),{show:x.value,"onUpdate:show":t[7]||=e=>x.value=e,preset:`card`,title:`Error Detail`,style:{"max-width":`500px`}},{default:_(()=>[a(S(Y),{code:T.value,"word-wrap":``},null,8,[`code`])]),_:1},8,[`show`]),d.value.length<f.value?(h(),c(`div`,ie,[a(S(C),{onClick:J,quaternary:``,type:`primary`},{default:_(()=>[i(` ↓ `+g(S(n)(`loadMore`))+` (`+g(d.value.length)+`/`+g(f.value)+`) `,1)]),_:1})])):s(``,!0)])]),_:1}))}}),[[`__scopeId`,`data-v-a6a2afb1`]]);export{$ as default};