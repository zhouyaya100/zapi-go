import{$n as e,An as t,Bn as n,Bt as r,C as i,En as a,Gt as o,In as s,Ln as c,Mn as l,Nn as u,Pn as d,Rn as f,T as p,Ut as m,Yn as h,Yt as g,Zn as _,_r as v,an as y,ar as b,cr as x,fn as S,jn as C,mr as w,n as T,ot as E,st as D,t as O,un as ee,ur as k,yn as te,zt as A}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{d as j,t as M}from"./Tag-ajo8I_4T.js";import{n as N,t as ne}from"./useI18n-Bw8dRrjR.js";import{i as P,t as F}from"./FormItem-AXnvp0SL.js";import{l as re,n as ie,r as ae,t as oe}from"./SkeletonLoader-BLFHI9cw.js";import{t as se}from"./Pagination-DvQtr6ew.js";import{t as ce}from"./DatePicker-DG9VJ09T.js";import{t as le}from"./Form-DY6BhqFD.js";import{B as I,D as L,H as R,V as z,c as B,lt as ue,n as de,t as fe,ut as pe,z as V}from"./index-BqSDc86C.js";import{a as me,i as he,r as ge}from"./common-CICgjkcl.js";var H={success:n(I,null),error:n(R,null),warning:n(V,null),info:n(z,null)},U=f({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){let a=t(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${g(JSON.stringify(n))}`:t});function o(t,n,r,i){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:i===`rail`?r:typeof e.fillColor==`object`?`url(#${a.value})`:r,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:n?`center`:void 0,transform:n?`rotate(${n}deg)`:void 0}}}let s=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&n(`defs`,null,n(`linearGradient`,{id:a.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},n(`stop`,{offset:`0%`,"stop-color":r}),n(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:t,railColor:a,strokeWidth:c,offsetDegree:l,status:u,percentage:d,showIndicator:f,indicatorTextColor:p,unit:m,gapOffsetDegree:h,clsPrefix:g}=e,{pathString:_,pathStyle:v}=o(100,0,a,`rail`),{pathString:y,pathStyle:b}=o(d,l,t,`fill`),x=100+c;return n(`div`,{class:`${g}-progress-content`,role:`none`},n(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},n(`div`,{class:`${g}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},n(`svg`,{viewBox:`0 0 ${x} ${x}`},s(),n(`g`,null,n(`path`,{class:`${g}-progress-graph-circle-rail`,d:_,"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:v})),n(`g`,null,n(`path`,{class:[`${g}-progress-graph-circle-fill`,d===0&&`${g}-progress-graph-circle-fill--empty`],d:y,"stroke-width":c,"stroke-linecap":`round`,fill:`none`,style:b}))))),f?n(`div`,null,r.default?n(`div`,{class:`${g}-progress-custom-content`,role:`none`},r.default()):u===`default`?n(`div`,{class:`${g}-progress-text`,style:{color:p},role:`none`},n(`span`,{class:`${g}-progress-text__percentage`},d),n(`span`,{class:`${g}-progress-text__unit`},m)):n(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},n(i,{clsPrefix:g},{default:()=>H[u]}))):null)}}}),W={success:n(I,null),error:n(R,null),warning:n(V,null),info:n(z,null)},G=f({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){let a=t(()=>j(e.height)),o=t(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),s=t(()=>e.railBorderRadius===void 0?e.height===void 0?``:j(e.height,{c:.5}):j(e.railBorderRadius)),c=t(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:j(e.height,{c:.5}):j(e.railBorderRadius):j(e.fillBorderRadius));return()=>{let{indicatorPlacement:t,railColor:l,railStyle:u,percentage:d,unit:f,indicatorTextColor:p,status:m,showIndicator:h,processing:g,clsPrefix:_}=e;return n(`div`,{class:`${_}-progress-content`,role:`none`},n(`div`,{class:`${_}-progress-graph`,"aria-hidden":!0},n(`div`,{class:[`${_}-progress-graph-line`,{[`${_}-progress-graph-line--indicator-${t}`]:!0}]},n(`div`,{class:`${_}-progress-graph-line-rail`,style:[{backgroundColor:l,height:a.value,borderRadius:s.value},u]},n(`div`,{class:[`${_}-progress-graph-line-fill`,g&&`${_}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:o.value,height:a.value,lineHeight:a.value,borderRadius:c.value}},t===`inside`?n(`div`,{class:`${_}-progress-graph-line-indicator`,style:{color:p}},r.default?r.default():`${d}${f}`):null)))),h&&t===`outside`?n(`div`,null,r.default?n(`div`,{class:`${_}-progress-custom-content`,style:{color:p},role:`none`},r.default()):m===`default`?n(`div`,{role:`none`,class:`${_}-progress-icon ${_}-progress-icon--as-text`,style:{color:p}},d,f):n(`div`,{class:`${_}-progress-icon`,"aria-hidden":!0},n(i,{clsPrefix:_},{default:()=>W[m]}))):null)}}});function K(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var q=f({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){let i=t(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),a=(t,r)=>{let i=e.fillColor[r],a=typeof i==`object`?i.stops[0]:``,o=typeof i==`object`?i.stops[1]:``;return typeof e.fillColor[r]==`object`&&n(`linearGradient`,{id:`gradient-${r}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},n(`stop`,{offset:`0%`,"stop-color":a}),n(`stop`,{offset:`100%`,"stop-color":o}))};return()=>{let{viewBoxWidth:t,strokeWidth:o,circleGap:s,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return n(`div`,{class:`${p}-progress-content`,role:`none`},n(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},n(`div`,{class:`${p}-progress-graph-circle`},n(`svg`,{viewBox:`0 0 ${t} ${t}`},n(`defs`,null,f.map((e,t)=>a(e,t))),f.map((e,r)=>n(`g`,{key:r},n(`path`,{class:`${p}-progress-graph-circle-rail`,d:K(t/2-o/2*(1+2*r)-s*r,o,t),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[r]},d[r]]}),n(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:K(t/2-o/2*(1+2*r)-s*r,o,t),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:i.value[r],strokeDashoffset:0,stroke:typeof l[r]==`object`?`url(#gradient-${r})`:l[r]}})))))),c&&r.default?n(`div`,null,n(`div`,{class:`${p}-progress-text`},r.default())):null)}}}),J=A([r(`progress`,{display:`inline-block`},[r(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),m(`line`,`
 width: 100%;
 display: block;
 `,[r(`progress-content`,`
 display: flex;
 align-items: center;
 `,[r(`progress-graph`,{flex:1})]),r(`progress-custom-content`,{marginLeft:`14px`}),r(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[m(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),m(`circle, dashboard`,{width:`120px`},[r(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),r(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),r(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),m(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[r(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),r(`progress-content`,{position:`relative`}),r(`progress-graph`,{position:`relative`},[r(`progress-graph-circle`,[A(`svg`,{verticalAlign:`bottom`}),r(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[m(`empty`,{opacity:0})]),r(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),r(`progress-graph-line`,[m(`indicator-inside`,[r(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[r(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),r(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),m(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[r(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),r(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),r(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[r(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[m(`processing`,[A(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),A(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),_e=f({name:`Progress`,props:Object.assign(Object.assign({},p.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let n=t(()=>e.indicatorPlacement||e.indicatorPosition),r=t(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=D(e),s=p(`Progress`,`-progress`,J,B,e,i),c=t(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:a,railHeight:c,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[o(`iconColor`,t)]:g,[o(`fillColor`,t)]:_}}=s.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":a,"--n-rail-height":c,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),l=a?E(`progress`,t(()=>e.status[0]),c,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:n,gapDeg:r,cssVars:a?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:r,showIndicator:i,status:a,railColor:o,railStyle:s,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:x,themeClass:S,$slots:C,onRender:w}=this;return w?.(),n(`div`,{class:[S,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${a}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?n(U,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:r,railColor:o,fillColor:c,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:b===void 0?e===`dashboard`?75:0:b,gapOffsetDegree:x,unit:p},C):e===`line`?n(G,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:r,railColor:o,fillColor:c,railStyle:s,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},C):e===`multiple-circle`?n(q,{clsPrefix:y,strokeWidth:d,railColor:o,fillColor:c,railStyle:s,viewBoxWidth:u,percentage:l,showIndicator:i,circleGap:v},C):null)}}),ve={class:`my-tokens-view`},ye={class:`view-header`},be={class:`view-title`},xe={class:`summary-bar`},Se={class:`summary-item`},Ce={class:`summary-label`},we={class:`summary-value`},Te={class:`summary-item`},Ee={class:`summary-label`},De={class:`summary-value`},Oe={class:`summary-item`},ke={class:`summary-label`},Ae={class:`summary-value`},je={class:`new-token-body`},Me={class:`new-token-label`},Ne={class:`new-token-key-row`},Pe={class:`new-token-key`},Fe={class:`new-token-hint`},Ie={key:0,class:`token-list`},Le={class:`token-card__body`},Re={class:`token-card__info`},ze={class:`token-card__name`},Be={class:`token-name`},Ve={class:`token-card__key-row`},He={class:`token-key`},Ue={class:`token-card__models-row`},We={class:`meta-label`},Ge={key:0,class:`models-edit-inline`},Ke={key:1,class:`models-display`},qe={class:`token-card__quota-row`},Je={class:`meta-label`},Ye={class:`quota-text`},Xe={key:1,class:`quota-remaining`},Ze={key:0,class:`token-card__meta`},Qe={class:`meta-item`},$e={class:`token-card__actions`},et={key:2,class:`pagination-wrap`},Y=O(f({__name:`MyTokensView`,setup(n){let{t:r}=ne(),i=de(),o=ue(),f=pe(),p=k(``);function m(e,t){let n=e==null?`0`:String(e),r=t==null?`0`:String(t);try{return(BigInt(n)-BigInt(r)).toString()}catch{let e=Number(n)||0,t=Number(r)||0;return String(e-t)}}let g=k(!0),E=k(!1),D=k([]),O=k(new Set),A=k([]),j=t(()=>{let e=o.currentUser;return e?e.role===`admin`||e.role===`operator`?!0:e.can_create_token!==!1:!1}),I=k(!1),R=k(null),z=x({name:``,quota_limit:-1,models:``,expires_at:null}),B={name:{required:!0,message:`Token name is required`,trigger:`blur`}},V=k(``),H=k(!1),U=k(1),W=k(10),G=k(!1),K=k(null),q=k(!1),J=k(null),Y=k(null),X=k(``),tt=t(()=>{if(!p.value)return D.value;let e=p.value.toLowerCase();return D.value.filter(t=>{let n=t.name?.toLowerCase().includes(e),r=t.key?.toLowerCase().includes(e);return n||r})}),nt=t(()=>Math.max(1,Math.ceil(tt.value.length/W.value))),rt=t(()=>{let e=(U.value-1)*W.value;return tt.value.slice(e,e+W.value)}),it=t(()=>{let e=BigInt(0);for(let t of D.value){let n=t.quota_used!==void 0&&t.quota_used!==null?String(t.quota_used):`0`;try{e+=BigInt(n)}catch{e+=BigInt(0)}}return Q(e.toString())}),at=t(()=>{let e=!1,t=BigInt(0);for(let n of D.value)if(n.quota_limit===-1)e=!0;else try{t+=BigInt(String(n.quota_limit))}catch{}return e?`∞`:Q(t.toString())}),Z=t(()=>{let e=new Set;for(let t of D.value)if(t.models&&t.models.trim()!==``)for(let n of t.models.split(`,`)){let t=n.trim();t&&e.add(t)}return Array.from(e).sort()});function ot(e){return e?e.length<=8?`****`:`****`+e.slice(-4):``}function Q(e){if(e==null)return`0`;let t=String(e),n=Number(t);return isNaN(n)?t:n>=1e9?(n/1e9).toFixed(2)+`B`:n>=1e6?(n/1e6).toFixed(2)+`M`:n>=1e3?(n/1e3).toFixed(1)+`K`:n.toLocaleString()}function st(e){try{return new Date(e).toLocaleDateString()}catch{return e}}function ct(e){if(e.quota_limit===-1)return 0;let t=Number(e.quota_used)||0,n=Number(e.quota_limit)||1;return n<=0?0:Math.min(100,Math.round(t/n*100))}function lt(e){let t=ct(e);return t>=90?`error`:t>=70?`warning`:`success`}function ut(e){return e.quota_limit===-1?`∞`:Q(m(e.quota_limit,e.quota_used))}function dt(e){if(O.value.has(e.id)){let t=new Set(O.value);t.delete(e.id),O.value=t}else O.value=new Set([...O.value,e.id])}async function ft(e){try{await navigator.clipboard.writeText(e.key),i.toastSuccess(r(`copied`))}catch{i.toastError(r(`copyFailed`))}}async function pt(){try{await navigator.clipboard.writeText(V.value),i.toastSuccess(r(`copied`))}catch{i.toastError(r(`copyFailed`))}}function mt(e){Y.value=e.id,X.value=e.models||``}function ht(){Y.value=null,X.value=``}async function gt(e){try{let t=await y.update(e.id,{models:X.value});t?.success?(i.toastSuccess(r(`saved`)),Y.value=null,X.value=``,await $()):i.toastError(t?.detail||`Update failed`)}catch{i.toastError(`Update failed`)}}function _t(){I.value=!I.value,I.value||(z.name=``,z.quota_limit=-1,z.models=``,z.expires_at=null)}async function $(){g.value=!0;try{D.value=await y.list()||[]}catch{i.toastError(`Failed to load tokens`)}finally{g.value=!1}}async function vt(){try{let e=await ee.public();e?.all_models&&(A.value=e.all_models)}catch{}}async function yt(){try{await R.value?.validate()}catch{return}E.value=!0;try{let e={name:z.name,models:z.models,quota_limit:z.quota_limit};z.expires_at&&(e.expires_at=new Date(z.expires_at).toISOString());let t=await y.create(e);t?.success&&t.key?(i.toastSuccess(r(`tokenCreated`)),V.value=t.key,H.value=!0,I.value=!1,z.name=``,z.quota_limit=-1,z.models=``,z.expires_at=null,await $()):i.toastError(t?.detail||`Create failed`)}catch{i.toastError(`Create failed`)}finally{E.value=!1}}async function bt(e){try{let t=await y.update(e.id,{enabled:!e.enabled});t?.success?(i.toastSuccess(e.enabled?r(`disabled`):r(`enabled`)),await $()):i.toastError(t?.detail||`Toggle failed`)}catch{i.toastError(`Toggle failed`)}}function xt(e){K.value=e,G.value=!0}async function St(e){if(K.value){try{let t=await S.recharge(K.value.id,e);t?.success?(i.toastSuccess(r(`rechargeSuccess`)),await $()):i.toastError(t?.detail||`Recharge failed`)}catch{i.toastError(`Recharge failed`)}G.value=!1}}function Ct(e){J.value=e,q.value=!0}async function wt(){if(J.value)try{let e=await y.delete(J.value.id);e?.success?(i.toastSuccess(r(`deleted`)),await $()):i.toastError(e?.detail||`Delete failed`)}catch{i.toastError(`Delete failed`)}finally{J.value=null}}function Tt(e){W.value=e,U.value=1}return h(async()=>{await Promise.all([$(),vt()]);let e=f.query.search;e&&(p.value=e,i.setGlobalSearchQuery(``))}),(t,n)=>(_(),l(w(fe),null,{default:b(()=>[C(`div`,ve,[g.value?(_(),l(w(oe),{key:0,type:`table`,count:4})):(_(),d(a,{key:1},[C(`div`,ye,[C(`h2`,be,v(w(r)(`myTokens`)),1),c(w(P),{size:12,align:`center`},{default:b(()=>[c(w(N),{value:p.value,"onUpdate:value":n[0]||=e=>p.value=e,placeholder:w(r)(`searchPlaceholder`),clearable:``,size:`small`,style:{width:`240px`}},null,8,[`value`,`placeholder`]),j.value?(_(),l(w(T),{key:0,type:`primary`,onClick:_t},{default:b(()=>[s(v(I.value?w(r)(`cancel`):`+ ${w(r)(`createToken`)}`),1)]),_:1})):u(``,!0)]),_:1})]),C(`div`,xe,[C(`div`,Se,[C(`span`,Ce,v(w(r)(`tkName`)),1),C(`span`,we,v(D.value.length),1)]),C(`div`,Te,[C(`span`,Ee,v(w(r)(`tokenUsageQuota`)),1),C(`span`,De,v(it.value)+` / `+v(at.value),1)]),C(`div`,Oe,[C(`span`,ke,v(w(r)(`allowedModels`)),1),C(`span`,Ae,[Z.value.length===0?(_(),l(w(M),{key:0,size:`small`,type:`info`,round:``},{default:b(()=>[s(v(w(r)(`allModels`)),1)]),_:1})):(_(),d(a,{key:1},[(_(!0),d(a,null,e(Z.value.slice(0,5),e=>(_(),l(w(M),{key:e,size:`small`,type:`info`,round:``,class:`summary-model-tag`},{default:b(()=>[s(v(e),1)]),_:2},1024))),128)),Z.value.length>5?(_(),l(w(M),{key:0,size:`small`,round:``},{default:b(()=>[s(`+`+v(Z.value.length-5),1)]),_:1})):u(``,!0)],64))])])]),c(te,{name:`slide-down`},{default:b(()=>[I.value&&j.value?(_(),l(w(L),{key:0,class:`form-card`,size:`medium`},{default:b(()=>[c(w(le),{ref_key:`createFormRef`,ref:R,model:z,rules:B,"label-placement":`left`,"label-width":`120`},{default:b(()=>[c(w(F),{label:w(r)(`tokenName`),path:`name`},{default:b(()=>[c(w(N),{value:z.name,"onUpdate:value":n[1]||=e=>z.name=e,placeholder:w(r)(`tokenNamePh`),maxlength:64},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`allowedModels`),path:`models`},{default:b(()=>[c(w(ge),{"model-value":z.models,"onUpdate:modelValue":n[2]||=e=>z.models=e,"all-models":A.value},null,8,[`model-value`,`all-models`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`quota`),path:`quota_limit`},{default:b(()=>[c(w(ae),{value:z.quota_limit,"onUpdate:value":n[3]||=e=>z.quota_limit=e,min:-1,placeholder:w(r)(`quotaPh`),style:{width:`200px`}},{suffix:b(()=>[...n[12]||=[C(`span`,{style:{color:`var(--n-text-color-3)`}},`(-1 = ∞)`,-1)]]),_:1},8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`expireAt`),path:`expires_at`},{default:b(()=>[c(w(ce),{value:z.expires_at,"onUpdate:value":n[4]||=e=>z.expires_at=e,type:`datetime`,clearable:``,placeholder:w(r)(`expireAtPh`),style:{width:`300px`}},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),null,{default:b(()=>[c(w(P),null,{default:b(()=>[c(w(T),{type:`primary`,loading:E.value,onClick:yt},{default:b(()=>[s(v(w(r)(`createToken`)),1)]),_:1},8,[`loading`]),c(w(T),{onClick:n[5]||=e=>I.value=!1},{default:b(()=>[s(v(w(r)(`cancel`)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`model`])]),_:1})):u(``,!0)]),_:1}),c(te,{name:`slide-down`},{default:b(()=>[V.value?(_(),l(w(L),{key:0,class:`new-token-card`,size:`small`},{default:b(()=>[C(`div`,je,[C(`span`,Me,v(w(r)(`tokenCreated`)),1),C(`div`,Ne,[C(`code`,Pe,v(H.value?V.value:ot(V.value)),1),c(w(T),{size:`tiny`,quaternary:``,onClick:n[6]||=e=>H.value=!H.value},{default:b(()=>[s(v(H.value?`🙈`:`👁`),1)]),_:1}),c(w(T),{size:`tiny`,type:`primary`,quaternary:``,onClick:pt},{default:b(()=>[s(` 📋 `+v(w(r)(`copy`)),1)]),_:1})]),C(`p`,Fe,v(w(r)(`tokenKeyHint`)),1)])]),_:1})):u(``,!0)]),_:1}),rt.value.length>0?(_(),d(`div`,Ie,[(_(!0),d(a,null,e(rt.value,t=>(_(),l(w(L),{key:t.id,class:`token-card`,size:`small`},{default:b(()=>[C(`div`,Le,[C(`div`,Re,[C(`div`,ze,[C(`span`,Be,v(t.name),1),c(w(M),{type:t.enabled?`success`:`error`,size:`small`,round:``},{default:b(()=>[s(v(t.enabled?w(r)(`enabled`):w(r)(`disabled`)),1)]),_:2},1032,[`type`]),!t.models||t.models.trim()===``?(_(),l(w(M),{key:0,size:`small`,type:`info`,round:``},{default:b(()=>[s(v(w(r)(`allModels`)),1)]),_:1})):u(``,!0)]),C(`div`,Ve,[n[14]||=C(`span`,{class:`token-key-label`},`Key:`,-1),C(`code`,He,v(O.value.has(t.id)?t.key:ot(t.key)),1),c(w(T),{size:`tiny`,quaternary:``,onClick:e=>dt(t)},{default:b(()=>[s(v(O.value.has(t.id)?`🙈`:`👁`),1)]),_:2},1032,[`onClick`]),c(w(T),{size:`tiny`,quaternary:``,onClick:e=>ft(t)},{default:b(()=>[...n[13]||=[s(` 📋 `,-1)]]),_:1},8,[`onClick`])]),C(`div`,Ue,[C(`span`,We,v(w(r)(`allowedModels`))+`:`,1),Y.value===t.id?(_(),d(`div`,Ge,[c(w(ge),{"model-value":X.value,"onUpdate:modelValue":n[7]||=e=>X.value=e,"all-models":A.value},null,8,[`model-value`,`all-models`]),c(w(P),{style:{"margin-top":`8px`}},{default:b(()=>[c(w(T),{size:`small`,type:`primary`,onClick:e=>gt(t)},{default:b(()=>[s(v(w(r)(`save`)),1)]),_:1},8,[`onClick`]),c(w(T),{size:`small`,onClick:ht},{default:b(()=>[s(v(w(r)(`cancel`)),1)]),_:1})]),_:2},1024)])):(_(),d(`div`,Ke,[!t.models||t.models.trim()===``?(_(),l(w(M),{key:0,size:`small`,type:`info`,round:``},{default:b(()=>[s(v(w(r)(`allModels`)),1)]),_:1})):(_(),d(a,{key:1},[(_(!0),d(a,null,e(t.models.split(`,`).map(e=>e.trim()).filter(Boolean).slice(0,5),e=>(_(),l(w(M),{key:e,size:`small`,round:``,class:`model-tag-inline`},{default:b(()=>[s(v(e),1)]),_:2},1024))),128)),t.models.split(`,`).filter(e=>e.trim()).length>5?(_(),l(w(M),{key:0,size:`small`,round:``},{default:b(()=>[s(` +`+v(t.models.split(`,`).filter(e=>e.trim()).length-5),1)]),_:2},1024)):u(``,!0)],64)),c(w(T),{size:`tiny`,quaternary:``,onClick:e=>mt(t)},{default:b(()=>[...n[15]||=[s(` ✏️ `,-1)]]),_:1},8,[`onClick`])]))]),C(`div`,qe,[C(`span`,Je,v(w(r)(`quota`))+`:`,1),C(`span`,Ye,v(Q(t.quota_used))+` / `+v(t.quota_limit===-1?`∞`:Q(t.quota_limit)),1),t.quota_limit===-1?u(``,!0):(_(),l(w(_e),{key:0,percentage:ct(t),height:6,"border-radius":3,"indicator-placement":`none`,status:lt(t),style:{width:`120px`,"margin-left":`8px`}},null,8,[`percentage`,`status`])),t.quota_limit===-1?u(``,!0):(_(),d(`span`,Xe,v(w(r)(`quotaRemaining`))+`: `+v(ut(t)),1))]),t.created_at?(_(),d(`div`,Ze,[C(`span`,Qe,v(w(r)(`createdAt`))+`: `+v(st(t.created_at)),1)])):u(``,!0)]),C(`div`,$e,[c(w(ie),{value:t.enabled,size:`small`,"onUpdate:value":()=>bt(t)},{checked:b(()=>[s(v(w(r)(`enable`)),1)]),unchecked:b(()=>[s(v(w(r)(`disable`)),1)]),_:1},8,[`value`,`onUpdate:value`]),c(w(T),{size:`small`,type:`primary`,ghost:``,onClick:e=>xt(t)},{default:b(()=>[s(` + `+v(w(r)(`recharge`)),1)]),_:1},8,[`onClick`]),c(w(T),{size:`small`,type:`error`,ghost:``,onClick:e=>Ct(t)},{default:b(()=>[s(` 🗑 `+v(w(r)(`delete`)),1)]),_:1},8,[`onClick`])])])]),_:2},1024))),128))])):(_(),l(w(re),{key:1,description:w(r)(`noTokens`),style:{"margin-top":`40px`}},null,8,[`description`])),nt.value>1?(_(),d(`div`,et,[c(w(se),{page:U.value,"onUpdate:page":n[8]||=e=>U.value=e,"page-count":nt.value,"page-size":W.value,"show-size-picker":``,"page-sizes":[10,20,50],"onUpdate:pageSize":Tt},null,8,[`page`,`page-count`,`page-size`])])):u(``,!0)],64)),c(w(he),{show:G.value,"onUpdate:show":n[9]||=e=>G.value=e,title:w(r)(`rechargeTk`),min:1,onConfirm:St,onCancel:n[10]||=e=>G.value=!1},null,8,[`show`,`title`]),c(w(me),{show:q.value,"onUpdate:show":n[11]||=e=>q.value=e,title:w(r)(`deleteConfirmTitle`),content:w(r)(`deleteConfirmMsg`),danger:!0,"confirm-text":w(r)(`confirm`),"cancel-text":w(r)(`cancel`),onConfirm:wt},null,8,[`show`,`title`,`content`,`confirm-text`,`cancel-text`])])]),_:1}))}}),[[`__scopeId`,`data-v-6da30e9e`]]);export{Y as default};