import{$n as e,An as t,Bn as n,Bt as r,E as i,En as a,In as o,Kt as s,Ln as c,Mn as l,Nn as u,Pn as d,Rn as f,Vt as p,Wt as m,Xt as h,Yn as g,Zn as _,_r as v,ar as y,cr as b,ct as x,dn as S,jn as C,mr as w,n as ee,on as T,pn as te,r as E,st as D,t as O,ur as k,w as A,yn as j}from"./_plugin-vue_export-helper-CctN37zK.js";import{d as M,t as N}from"./Tag-CuowKQ2w.js";import{n as ne,t as re}from"./useI18n-BskqdnI6.js";import{i as P,t as F}from"./FormItem-BVbNQsWN.js";import{l as ie,n as ae,r as oe,t as se}from"./SkeletonLoader-C8Ozh2Xu.js";import{t as ce}from"./Pagination-BbHEDIzQ.js";import{t as le}from"./DatePicker-Dg-G20si.js";import{t as ue}from"./Form-CxP9wYff.js";import{B as I,E as L,R,V as z,ct as de,lt as fe,s as pe,t as me,z as B}from"./index-DeyMbItW.js";import{a as he,i as ge,r as V}from"./common-CiKmQuFg.js";var H={success:n(B,null),error:n(z,null),warning:n(R,null),info:n(I,null)},U=f({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){let i=t(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${h(JSON.stringify(n))}`:t});function a(t,n,r,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?r:typeof e.fillColor==`object`?`url(#${i.value})`:r,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:n?`center`:void 0,transform:n?`rotate(${n}deg)`:void 0}}}let o=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,a=t?e.fillColor.stops[1]:``;return t&&n(`defs`,null,n(`linearGradient`,{id:i.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},n(`stop`,{offset:`0%`,"stop-color":r}),n(`stop`,{offset:`100%`,"stop-color":a})))};return()=>{let{fillColor:t,railColor:i,strokeWidth:s,offsetDegree:c,status:l,percentage:u,showIndicator:d,indicatorTextColor:f,unit:p,gapOffsetDegree:m,clsPrefix:h}=e,{pathString:g,pathStyle:_}=a(100,0,i,`rail`),{pathString:v,pathStyle:y}=a(u,c,t,`fill`),b=100+s;return n(`div`,{class:`${h}-progress-content`,role:`none`},n(`div`,{class:`${h}-progress-graph`,"aria-hidden":!0},n(`div`,{class:`${h}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},n(`svg`,{viewBox:`0 0 ${b} ${b}`},o(),n(`g`,null,n(`path`,{class:`${h}-progress-graph-circle-rail`,d:g,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:_})),n(`g`,null,n(`path`,{class:[`${h}-progress-graph-circle-fill`,u===0&&`${h}-progress-graph-circle-fill--empty`],d:v,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:y}))))),d?n(`div`,null,r.default?n(`div`,{class:`${h}-progress-custom-content`,role:`none`},r.default()):l===`default`?n(`div`,{class:`${h}-progress-text`,style:{color:f},role:`none`},n(`span`,{class:`${h}-progress-text__percentage`},u),n(`span`,{class:`${h}-progress-text__unit`},p)):n(`div`,{class:`${h}-progress-icon`,"aria-hidden":!0},n(A,{clsPrefix:h},{default:()=>H[l]}))):null)}}}),W={success:n(B,null),error:n(z,null),warning:n(R,null),info:n(I,null)},G=f({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){let i=t(()=>M(e.height)),a=t(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),o=t(()=>e.railBorderRadius===void 0?e.height===void 0?``:M(e.height,{c:.5}):M(e.railBorderRadius)),s=t(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:M(e.height,{c:.5}):M(e.railBorderRadius):M(e.fillBorderRadius));return()=>{let{indicatorPlacement:t,railColor:c,railStyle:l,percentage:u,unit:d,indicatorTextColor:f,status:p,showIndicator:m,processing:h,clsPrefix:g}=e;return n(`div`,{class:`${g}-progress-content`,role:`none`},n(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},n(`div`,{class:[`${g}-progress-graph-line`,{[`${g}-progress-graph-line--indicator-${t}`]:!0}]},n(`div`,{class:`${g}-progress-graph-line-rail`,style:[{backgroundColor:c,height:i.value,borderRadius:o.value},l]},n(`div`,{class:[`${g}-progress-graph-line-fill`,h&&`${g}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:a.value,height:i.value,lineHeight:i.value,borderRadius:s.value}},t===`inside`?n(`div`,{class:`${g}-progress-graph-line-indicator`,style:{color:f}},r.default?r.default():`${u}${d}`):null)))),m&&t===`outside`?n(`div`,null,r.default?n(`div`,{class:`${g}-progress-custom-content`,style:{color:f},role:`none`},r.default()):p===`default`?n(`div`,{role:`none`,class:`${g}-progress-icon ${g}-progress-icon--as-text`,style:{color:f}},u,d):n(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},n(A,{clsPrefix:g},{default:()=>W[p]}))):null)}}});function K(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var q=f({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){let i=t(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),a=(t,r)=>{let i=e.fillColor[r],a=typeof i==`object`?i.stops[0]:``,o=typeof i==`object`?i.stops[1]:``;return typeof e.fillColor[r]==`object`&&n(`linearGradient`,{id:`gradient-${r}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},n(`stop`,{offset:`0%`,"stop-color":a}),n(`stop`,{offset:`100%`,"stop-color":o}))};return()=>{let{viewBoxWidth:t,strokeWidth:o,circleGap:s,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return n(`div`,{class:`${p}-progress-content`,role:`none`},n(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},n(`div`,{class:`${p}-progress-graph-circle`},n(`svg`,{viewBox:`0 0 ${t} ${t}`},n(`defs`,null,f.map((e,t)=>a(e,t))),f.map((e,r)=>n(`g`,{key:r},n(`path`,{class:`${p}-progress-graph-circle-rail`,d:K(t/2-o/2*(1+2*r)-s*r,o,t),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[r]},d[r]]}),n(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:K(t/2-o/2*(1+2*r)-s*r,o,t),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:i.value[r],strokeDashoffset:0,stroke:typeof l[r]==`object`?`url(#gradient-${r})`:l[r]}})))))),c&&r.default?n(`div`,null,n(`div`,{class:`${p}-progress-text`},r.default())):null)}}}),J=r([p(`progress`,{display:`inline-block`},[p(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),m(`line`,`
 width: 100%;
 display: block;
 `,[p(`progress-content`,`
 display: flex;
 align-items: center;
 `,[p(`progress-graph`,{flex:1})]),p(`progress-custom-content`,{marginLeft:`14px`}),p(`progress-icon`,`
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
 `)])]),m(`circle, dashboard`,{width:`120px`},[p(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p(`progress-text`,`
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
 `),p(`progress-icon`,`
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
 `,[p(`progress-text`,`
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
 `)]),p(`progress-content`,{position:`relative`}),p(`progress-graph`,{position:`relative`},[p(`progress-graph-circle`,[r(`svg`,{verticalAlign:`bottom`}),p(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[m(`empty`,{opacity:0})]),p(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),p(`progress-graph-line`,[m(`indicator-inside`,[p(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[p(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),p(`progress-graph-line-indicator`,`
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
 `,[p(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),p(`progress-graph-line-indicator`,`
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
 `)]),p(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[p(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[m(`processing`,[r(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),r(`@keyframes progress-processing-animation`,`
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
 `)]),_e=f({name:`Progress`,props:Object.assign(Object.assign({},i.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let n=t(()=>e.indicatorPlacement||e.indicatorPosition),r=t(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=x(e),c=i(`Progress`,`-progress`,J,pe,e,a),l=t(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:a,railHeight:o,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[s(`iconColor`,t)]:g,[s(`fillColor`,t)]:_}}=c.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":a,"--n-rail-height":o,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),u=o?D(`progress`,t(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:a,mergedIndicatorPlacement:n,gapDeg:r,cssVars:o?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:r,showIndicator:i,status:a,railColor:o,railStyle:s,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:x,themeClass:S,$slots:C,onRender:w}=this;return w?.(),n(`div`,{class:[S,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${a}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?n(U,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:r,railColor:o,fillColor:c,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:b===void 0?e===`dashboard`?75:0:b,gapOffsetDegree:x,unit:p},C):e===`line`?n(G,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:r,railColor:o,fillColor:c,railStyle:s,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},C):e===`multiple-circle`?n(q,{clsPrefix:y,strokeWidth:d,railColor:o,fillColor:c,railStyle:s,viewBoxWidth:u,percentage:l,showIndicator:i,circleGap:v},C):null)}}),ve={class:`my-tokens-view`},ye={class:`view-header`},be={class:`view-title`},xe={class:`summary-bar`},Se={class:`summary-item`},Ce={class:`summary-label`},we={class:`summary-value`},Te={class:`summary-item`},Ee={class:`summary-label`},De={class:`summary-value`},Oe={class:`summary-item`},ke={class:`summary-label`},Ae={class:`summary-value`},je={class:`new-token-body`},Me={class:`new-token-label`},Ne={class:`new-token-key-row`},Pe={class:`new-token-key`},Fe={key:0,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},Ie={key:1,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},Le={class:`new-token-hint`},Re={key:0,class:`token-list`},ze={class:`token-card__body`},Be={class:`token-card__info`},Ve={class:`token-card__name`},He={class:`token-name`},Ue={class:`token-card__key-row`},We={class:`token-key`},Ge={key:0,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},Ke={key:1,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},qe={class:`token-card__models-row`},Je={class:`meta-label`},Ye={key:0,class:`models-edit-inline`},Xe={key:1,class:`models-display`},Ze={class:`token-card__quota-row`},Qe={class:`meta-label`},$e={class:`quota-text`},et={key:1,class:`quota-remaining`},tt={key:0,class:`token-card__meta`},nt={class:`meta-item`},rt={class:`token-card__actions`},it={key:2,class:`pagination-wrap`},Y=O(f({__name:`MyTokensView`,setup(n){let{t:r}=re(),i=ee(),s=de(),f=fe(),p=k(``);function m(e,t){let n=e==null?`0`:String(e),r=t==null?`0`:String(t);try{return(BigInt(n)-BigInt(r)).toString()}catch{let e=Number(n)||0,t=Number(r)||0;return String(e-t)}}let h=k(!0),x=k(!1),D=k([]),O=k(new Set),A=k([]),M=t(()=>{let e=s.currentUser;return e?e.role===`admin`||e.role===`operator`?!0:e.can_create_token!==!1:!1}),I=k(!1),R=k(null),z=b({name:``,quota_limit:-1,models:``,expires_at:null}),pe={name:{required:!0,message:`Token name is required`,trigger:`blur`}},B=k(``),H=k(!1),U=k(1),W=k(10),G=k(!1),K=k(null),q=k(!1),J=k(null),Y=k(null),X=k(``),at=t(()=>{if(!p.value)return D.value;let e=p.value.toLowerCase();return D.value.filter(t=>{let n=t.name?.toLowerCase().includes(e),r=t.key?.toLowerCase().includes(e);return n||r})}),ot=t(()=>Math.max(1,Math.ceil(at.value.length/W.value))),st=t(()=>{let e=(U.value-1)*W.value;return at.value.slice(e,e+W.value)}),ct=t(()=>{let e=BigInt(0);for(let t of D.value){let n=t.quota_used!==void 0&&t.quota_used!==null?String(t.quota_used):`0`;try{e+=BigInt(n)}catch{e+=BigInt(0)}}return Q(e.toString())}),lt=t(()=>{let e=!1,t=BigInt(0);for(let n of D.value)if(n.quota_limit===-1)e=!0;else try{t+=BigInt(String(n.quota_limit))}catch{}return e?`∞`:Q(t.toString())}),Z=t(()=>{let e=new Set;for(let t of D.value)if(t.models&&t.models.trim()!==``)for(let n of t.models.split(`,`)){let t=n.trim();t&&e.add(t)}return Array.from(e).sort()});function ut(e){return e?e.length<=8?`****`:`****`+e.slice(-4):``}function Q(e){if(e==null)return`0`;let t=String(e),n=Number(t);return isNaN(n)?t:n>=1e9?(n/1e9).toFixed(2)+`B`:n>=1e6?(n/1e6).toFixed(2)+`M`:n>=1e3?(n/1e3).toFixed(1)+`K`:n.toLocaleString()}function dt(e){try{return new Date(e).toLocaleDateString()}catch{return e}}function ft(e){if(e.quota_limit===-1)return 0;let t=Number(e.quota_used)||0,n=Number(e.quota_limit)||1;return n<=0?0:Math.min(100,Math.round(t/n*100))}function pt(e){let t=ft(e);return t>=90?`error`:t>=70?`warning`:`success`}function mt(e){return e.quota_limit===-1?`∞`:Q(m(e.quota_limit,e.quota_used))}function ht(e){if(O.value.has(e.id)){let t=new Set(O.value);t.delete(e.id),O.value=t}else O.value=new Set([...O.value,e.id])}async function gt(e){try{await navigator.clipboard.writeText(e.key),i.toastSuccess(r(`copied`))}catch{try{let t=document.createElement(`textarea`);t.value=e.key,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),i.toastSuccess(r(`copied`))}catch{i.toastError(r(`copyFailed`))}}}async function _t(){try{await navigator.clipboard.writeText(B.value),i.toastSuccess(r(`copied`))}catch{try{let e=document.createElement(`textarea`);e.value=B.value,e.style.position=`fixed`,e.style.opacity=`0`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),i.toastSuccess(r(`copied`))}catch{i.toastError(r(`copyFailed`))}}}function vt(e){Y.value=e.id,X.value=e.models||``}function yt(){Y.value=null,X.value=``}async function bt(e){try{let t=await T.update(e.id,{models:X.value});t?.success?(i.toastSuccess(r(`saved`)),Y.value=null,X.value=``,await $()):i.toastError(t?.detail||`Update failed`)}catch{i.toastError(`Update failed`)}}function xt(){I.value=!I.value,I.value||(z.name=``,z.quota_limit=-1,z.models=``,z.expires_at=null)}async function $(){h.value=!0;try{D.value=await T.list()||[]}catch{i.toastError(`Failed to load tokens`)}finally{h.value=!1}}async function St(){try{let e=await S.public();e?.all_models&&(A.value=e.all_models)}catch{}}async function Ct(){try{await R.value?.validate()}catch{return}x.value=!0;try{let e={name:z.name,models:z.models,quota_limit:z.quota_limit};z.expires_at&&(e.expires_at=new Date(z.expires_at).toISOString());let t=await T.create(e);t?.success&&t.key?(i.toastSuccess(r(`tokenCreated`)),B.value=t.key,H.value=!0,I.value=!1,z.name=``,z.quota_limit=-1,z.models=``,z.expires_at=null,await $()):i.toastError(t?.detail||`Create failed`)}catch{i.toastError(`Create failed`)}finally{x.value=!1}}async function wt(e){try{let t=await T.update(e.id,{enabled:!e.enabled});t?.success?(i.toastSuccess(e.enabled?r(`disabled`):r(`enabled`)),await $()):i.toastError(t?.detail||`Toggle failed`)}catch{i.toastError(`Toggle failed`)}}function Tt(e){K.value=e,G.value=!0}async function Et(e){if(K.value){try{let t=await te.recharge(K.value.id,e);t?.success?(i.toastSuccess(r(`rechargeSuccess`)),await $()):i.toastError(t?.detail||`Recharge failed`)}catch{i.toastError(`Recharge failed`)}G.value=!1}}function Dt(e){J.value=e,q.value=!0}async function Ot(){if(J.value)try{let e=await T.delete(J.value.id);e?.success?(i.toastSuccess(r(`deleted`)),await $()):i.toastError(e?.detail||`Delete failed`)}catch{i.toastError(`Delete failed`)}finally{J.value=null}}function kt(e){W.value=e,U.value=1}return g(async()=>{await Promise.all([$(),St()]);let e=f.query.search;e&&(p.value=e,i.setGlobalSearchQuery(``))}),(t,n)=>(_(),l(w(me),null,{default:y(()=>[C(`div`,ve,[h.value?(_(),l(w(se),{key:0,type:`table`,count:4})):(_(),d(a,{key:1},[C(`div`,ye,[C(`h2`,be,v(w(r)(`myTokens`)),1),c(w(P),{size:12,align:`center`},{default:y(()=>[c(w(ne),{value:p.value,"onUpdate:value":n[0]||=e=>p.value=e,placeholder:w(r)(`searchPlaceholder`),clearable:``,size:`small`,style:{width:`240px`}},null,8,[`value`,`placeholder`]),M.value?(_(),l(w(E),{key:0,type:`primary`,onClick:xt},{default:y(()=>[o(v(I.value?w(r)(`cancel`):`+ ${w(r)(`createToken`)}`),1)]),_:1})):u(``,!0)]),_:1})]),C(`div`,xe,[C(`div`,Se,[C(`span`,Ce,v(w(r)(`tkName`)),1),C(`span`,we,v(D.value.length),1)]),C(`div`,Te,[C(`span`,Ee,v(w(r)(`tokenUsageQuota`)),1),C(`span`,De,v(ct.value)+` / `+v(lt.value),1)]),C(`div`,Oe,[C(`span`,ke,v(w(r)(`allowedModels`)),1),C(`span`,Ae,[Z.value.length===0?(_(),l(w(N),{key:0,size:`small`,type:`info`,round:``},{default:y(()=>[o(v(w(r)(`allModels`)),1)]),_:1})):(_(),d(a,{key:1},[(_(!0),d(a,null,e(Z.value.slice(0,5),e=>(_(),l(w(N),{key:e,size:`small`,type:`info`,round:``,class:`summary-model-tag`},{default:y(()=>[o(v(e),1)]),_:2},1024))),128)),Z.value.length>5?(_(),l(w(N),{key:0,size:`small`,round:``},{default:y(()=>[o(`+`+v(Z.value.length-5),1)]),_:1})):u(``,!0)],64))])])]),c(j,{name:`slide-down`},{default:y(()=>[I.value&&M.value?(_(),l(w(L),{key:0,class:`form-card`,size:`medium`},{default:y(()=>[c(w(ue),{ref_key:`createFormRef`,ref:R,model:z,rules:pe,"label-placement":`left`,"label-width":`120`},{default:y(()=>[c(w(F),{label:w(r)(`tokenName`),path:`name`},{default:y(()=>[c(w(ne),{value:z.name,"onUpdate:value":n[1]||=e=>z.name=e,placeholder:w(r)(`tokenNamePh`),maxlength:64},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`allowedModels`),path:`models`},{default:y(()=>[c(w(V),{"model-value":z.models,"onUpdate:modelValue":n[2]||=e=>z.models=e,"all-models":A.value},null,8,[`model-value`,`all-models`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`quota`),path:`quota_limit`},{default:y(()=>[c(w(oe),{value:z.quota_limit,"onUpdate:value":n[3]||=e=>z.quota_limit=e,min:-1,placeholder:w(r)(`quotaPh`),style:{width:`200px`}},{suffix:y(()=>[...n[12]||=[C(`span`,{style:{color:`var(--n-text-color-3)`}},`(-1 = ∞)`,-1)]]),_:1},8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),{label:w(r)(`expireAt`),path:`expires_at`},{default:y(()=>[c(w(le),{value:z.expires_at,"onUpdate:value":n[4]||=e=>z.expires_at=e,type:`datetime`,clearable:``,placeholder:w(r)(`expireAtPh`),style:{width:`300px`}},null,8,[`value`,`placeholder`])]),_:1},8,[`label`]),c(w(F),null,{default:y(()=>[c(w(P),null,{default:y(()=>[c(w(E),{type:`primary`,loading:x.value,onClick:Ct},{default:y(()=>[o(v(w(r)(`createToken`)),1)]),_:1},8,[`loading`]),c(w(E),{onClick:n[5]||=e=>I.value=!1},{default:y(()=>[o(v(w(r)(`cancel`)),1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`model`])]),_:1})):u(``,!0)]),_:1}),c(j,{name:`slide-down`},{default:y(()=>[B.value?(_(),l(w(L),{key:0,class:`new-token-card`,size:`small`},{default:y(()=>[C(`div`,je,[C(`span`,Me,v(w(r)(`tokenCreated`)),1),C(`div`,Ne,[C(`code`,Pe,v(H.value?B.value:ut(B.value)),1),c(w(E),{size:`small`,quaternary:``,circle:``,onClick:n[6]||=e=>H.value=!H.value},{icon:y(()=>[H.value?(_(),d(`svg`,Fe,[...n[13]||=[C(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94`},null,-1),C(`path`,{d:`M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19`},null,-1),C(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`},null,-1)]])):(_(),d(`svg`,Ie,[...n[14]||=[C(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},null,-1),C(`circle`,{cx:`12`,cy:`12`,r:`3`},null,-1)]]))]),_:1}),c(w(E),{size:`small`,type:`primary`,secondary:``,onClick:_t},{icon:y(()=>[...n[15]||=[C(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[C(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),C(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})],-1)]]),default:y(()=>[o(` `+v(w(r)(`copy`)),1)]),_:1})]),C(`p`,Le,v(w(r)(`tokenKeyHint`)),1)])]),_:1})):u(``,!0)]),_:1}),st.value.length>0?(_(),d(`div`,Re,[(_(!0),d(a,null,e(st.value,t=>(_(),l(w(L),{key:t.id,class:`token-card`,size:`small`},{default:y(()=>[C(`div`,ze,[C(`div`,Be,[C(`div`,Ve,[C(`span`,He,v(t.name),1),c(w(N),{type:t.enabled?`success`:`error`,size:`small`,round:``},{default:y(()=>[o(v(t.enabled?w(r)(`enabled`):w(r)(`disabled`)),1)]),_:2},1032,[`type`]),!t.models||t.models.trim()===``?(_(),l(w(N),{key:0,size:`small`,type:`info`,round:``},{default:y(()=>[o(v(w(r)(`allModels`)),1)]),_:1})):u(``,!0)]),C(`div`,Ue,[n[19]||=C(`span`,{class:`token-key-label`},`Key:`,-1),C(`code`,We,v(O.value.has(t.id)?t.key:ut(t.key)),1),c(w(E),{size:`small`,quaternary:``,circle:``,onClick:e=>ht(t)},{icon:y(()=>[O.value.has(t.id)?(_(),d(`svg`,Ge,[...n[16]||=[C(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94`},null,-1),C(`path`,{d:`M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19`},null,-1),C(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`},null,-1)]])):(_(),d(`svg`,Ke,[...n[17]||=[C(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},null,-1),C(`circle`,{cx:`12`,cy:`12`,r:`3`},null,-1)]]))]),_:2},1032,[`onClick`]),c(w(E),{size:`small`,quaternary:``,circle:``,onClick:e=>gt(t)},{icon:y(()=>[...n[18]||=[C(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[C(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),C(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})],-1)]]),_:1},8,[`onClick`])]),C(`div`,qe,[C(`span`,Je,v(w(r)(`allowedModels`))+`:`,1),Y.value===t.id?(_(),d(`div`,Ye,[c(w(V),{"model-value":X.value,"onUpdate:modelValue":n[7]||=e=>X.value=e,"all-models":A.value},null,8,[`model-value`,`all-models`]),c(w(P),{style:{"margin-top":`8px`}},{default:y(()=>[c(w(E),{size:`small`,type:`primary`,onClick:e=>bt(t)},{default:y(()=>[o(v(w(r)(`save`)),1)]),_:1},8,[`onClick`]),c(w(E),{size:`small`,onClick:yt},{default:y(()=>[o(v(w(r)(`cancel`)),1)]),_:1})]),_:2},1024)])):(_(),d(`div`,Xe,[!t.models||t.models.trim()===``?(_(),l(w(N),{key:0,size:`small`,type:`info`,round:``},{default:y(()=>[o(v(w(r)(`allModels`)),1)]),_:1})):(_(),d(a,{key:1},[(_(!0),d(a,null,e(t.models.split(`,`).map(e=>e.trim()).filter(Boolean).slice(0,5),e=>(_(),l(w(N),{key:e,size:`small`,round:``,class:`model-tag-inline`},{default:y(()=>[o(v(e),1)]),_:2},1024))),128)),t.models.split(`,`).filter(e=>e.trim()).length>5?(_(),l(w(N),{key:0,size:`small`,round:``},{default:y(()=>[o(` +`+v(t.models.split(`,`).filter(e=>e.trim()).length-5),1)]),_:2},1024)):u(``,!0)],64)),c(w(E),{size:`tiny`,quaternary:``,onClick:e=>vt(t)},{default:y(()=>[...n[20]||=[o(` ✏️ `,-1)]]),_:1},8,[`onClick`])]))]),C(`div`,Ze,[C(`span`,Qe,v(w(r)(`quota`))+`:`,1),C(`span`,$e,v(Q(t.quota_used))+` / `+v(t.quota_limit===-1?`∞`:Q(t.quota_limit)),1),t.quota_limit===-1?u(``,!0):(_(),l(w(_e),{key:0,percentage:ft(t),height:6,"border-radius":3,"indicator-placement":`none`,status:pt(t),style:{width:`120px`,"margin-left":`8px`}},null,8,[`percentage`,`status`])),t.quota_limit===-1?u(``,!0):(_(),d(`span`,et,v(w(r)(`quotaRemaining`))+`: `+v(mt(t)),1))]),t.created_at?(_(),d(`div`,tt,[C(`span`,nt,v(w(r)(`createdAt`))+`: `+v(dt(t.created_at)),1)])):u(``,!0)]),C(`div`,rt,[c(w(ae),{value:t.enabled,size:`small`,"onUpdate:value":()=>wt(t)},{checked:y(()=>[o(v(w(r)(`enable`)),1)]),unchecked:y(()=>[o(v(w(r)(`disable`)),1)]),_:1},8,[`value`,`onUpdate:value`]),c(w(E),{size:`small`,type:`primary`,ghost:``,onClick:e=>Tt(t)},{default:y(()=>[o(` + `+v(w(r)(`recharge`)),1)]),_:1},8,[`onClick`]),c(w(E),{size:`small`,type:`error`,ghost:``,onClick:e=>Dt(t)},{default:y(()=>[o(` 🗑 `+v(w(r)(`delete`)),1)]),_:1},8,[`onClick`])])])]),_:2},1024))),128))])):(_(),l(w(ie),{key:1,description:w(r)(`noTokens`),style:{"margin-top":`40px`}},null,8,[`description`])),ot.value>1?(_(),d(`div`,it,[c(w(ce),{page:U.value,"onUpdate:page":n[8]||=e=>U.value=e,"page-count":ot.value,"page-size":W.value,"show-size-picker":``,"page-sizes":[10,20,50],"onUpdate:pageSize":kt},null,8,[`page`,`page-count`,`page-size`])])):u(``,!0)],64)),c(w(ge),{show:G.value,"onUpdate:show":n[9]||=e=>G.value=e,title:w(r)(`rechargeTk`),min:1,onConfirm:Et,onCancel:n[10]||=e=>G.value=!1},null,8,[`show`,`title`]),c(w(he),{show:q.value,"onUpdate:show":n[11]||=e=>q.value=e,title:w(r)(`deleteConfirmTitle`),content:w(r)(`deleteConfirmMsg`),danger:!0,"confirm-text":w(r)(`confirm`),"cancel-text":w(r)(`cancel`),onConfirm:Ot},null,8,[`show`,`title`,`content`,`confirm-text`,`cancel-text`])])]),_:1}))}}),[[`__scopeId`,`data-v-b6ae3372`]]);export{Y as default};