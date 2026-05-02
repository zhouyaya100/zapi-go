import{An as e,Bn as t,Bt as n,D as r,E as i,Gt as a,Ht as o,O as s,Rn as c,T as l,Un as u,Ut as d,Yn as f,bn as p,ft as m,h,l as g,ot as _,pr as v,pt as y,rr as b,st as x,u as S,ur as C,y as w,yn as T,yt as E,zt as D}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{u as O}from"./Tag-ajo8I_4T.js";import{F as k}from"./index-BqSDc86C.js";var A=c({name:`SlotMachineNumber`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(n){let r=C(null),i=C(n.value),a=C(n.value),o=C(`up`),s=C(!1),c=e(()=>s.value?`${n.clsPrefix}-base-slot-machine-current-number--${o.value}-scroll`:null),l=e(()=>s.value?`${n.clsPrefix}-base-slot-machine-old-number--${o.value}-scroll`:null);b(v(n,`value`),(e,t)=>{i.value=t,a.value=e,u(d)});function d(){let e=n.newOriginalNumber,t=n.oldOriginalNumber;t===void 0||e===void 0||(e>t?f(`up`):t>e&&f(`down`))}function f(e){o.value=e,s.value=!1,u(()=>{var e;(e=r.value)==null||e.offsetWidth,s.value=!0})}return()=>{let{clsPrefix:e}=n;return t(`span`,{ref:r,class:`${e}-base-slot-machine-number`},i.value===null?null:t(`span`,{class:[`${e}-base-slot-machine-old-number ${e}-base-slot-machine-old-number--top`,l.value]},i.value),t(`span`,{class:[`${e}-base-slot-machine-current-number`,c.value]},t(`span`,{ref:`numberWrapper`,class:[`${e}-base-slot-machine-current-number__inner`,typeof n.value!=`number`&&`${e}-base-slot-machine-current-number__inner--not-number`]},a.value)),i.value===null?null:t(`span`,{class:[`${e}-base-slot-machine-old-number ${e}-base-slot-machine-old-number--bottom`,l.value]},i.value))}}}),{cubicBezierEaseOut:j}=r;function M({duration:e=`.2s`}={}){return[D(`&.fade-up-width-expand-transition-leave-active`,{transition:`
 opacity ${e} ${j},
 max-width ${e} ${j},
 transform ${e} ${j}
 `}),D(`&.fade-up-width-expand-transition-enter-active`,{transition:`
 opacity ${e} ${j},
 max-width ${e} ${j},
 transform ${e} ${j}
 `}),D(`&.fade-up-width-expand-transition-enter-to`,{opacity:1,transform:`translateX(0) translateY(0)`}),D(`&.fade-up-width-expand-transition-enter-from`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`}),D(`&.fade-up-width-expand-transition-leave-from`,{opacity:1,transform:`translateY(0)`}),D(`&.fade-up-width-expand-transition-leave-to`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`})]}var N=D([D(`@keyframes n-base-slot-machine-fade-up-in`,`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),D(`@keyframes n-base-slot-machine-fade-down-in`,`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),D(`@keyframes n-base-slot-machine-fade-up-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),D(`@keyframes n-base-slot-machine-fade-down-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),n(`base-slot-machine`,`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[n(`base-slot-machine-number`,`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[M({duration:`.2s`}),S({duration:`.2s`,delay:`0s`}),n(`base-slot-machine-old-number`,`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[d(`top`,{transform:`translateY(-100%)`}),d(`bottom`,{transform:`translateY(100%)`}),d(`down-scroll`,{animation:`n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),d(`up-scroll`,{animation:`n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1})]),n(`base-slot-machine-current-number`,`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[d(`down-scroll`,{animation:`n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),d(`up-scroll`,{animation:`n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),o(`inner`,`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[d(`not-number`,`
 right: unset;
 left: 0;
 `)])])])])]),P=c({name:`BaseSlotMachine`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(n){i(`-base-slot-machine`,N,v(n,`clsPrefix`));let r=C(),a=C(),o=e(()=>{if(typeof n.value==`string`)return[];if(n.value<1)return[0];let e=[],t=n.value;for(n.max!==void 0&&(t=Math.min(n.max,t));t>=1;)e.push(t%10),t/=10,t=Math.floor(t);return e.reverse(),e});return b(v(n,`value`),(e,t)=>{typeof e==`string`?(a.value=void 0,r.value=void 0):typeof t==`string`?(a.value=e,r.value=void 0):(a.value=e,r.value=t)}),()=>{let{value:e,clsPrefix:i}=n;return typeof e==`number`?t(`span`,{class:`${i}-base-slot-machine`},t(p,{name:`fade-up-width-expand-transition`,tag:`span`},{default:()=>o.value.map((e,n)=>t(A,{clsPrefix:i,key:o.value.length-n-1,oldOriginalNumber:r.value,newOriginalNumber:a.value,value:e}))}),t(w,{key:`+`,width:!0},{default:()=>n.max!==void 0&&n.max<e?t(A,{clsPrefix:i,value:`+`}):null})):t(`span`,{class:`${i}-base-slot-machine`},e)}}});function F(e){let{errorColor:t,infoColor:n,successColor:r,warningColor:i,fontFamily:a}=e;return{color:t,colorInfo:n,colorSuccess:r,colorError:t,colorWarning:i,fontSize:`12px`,fontFamily:a}}var I={name:`Badge`,common:h,self:F},L=D([D(`@keyframes badge-wave-spread`,{from:{boxShadow:`0 0 0.5px 0px var(--n-ripple-color)`,opacity:.6},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`,opacity:0}}),n(`badge`,`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[d(`as-is`,[n(`badge-sup`,{position:`static`,transform:`translateX(0)`},[k({transformOrigin:`left bottom`,originalTransform:`translateX(0)`})])]),d(`dot`,[n(`badge-sup`,`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[D(`::before`,`border-radius: 4px;`)])]),n(`badge-sup`,`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[k({transformOrigin:`left bottom`,originalTransform:`translateX(-50%)`}),n(`base-wave`,{zIndex:1,animationDuration:`2s`,animationIterationCount:`infinite`,animationDelay:`1s`,animationTimingFunction:`var(--n-ripple-bezier)`,animationName:`badge-wave-spread`}),D(`&::before`,`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),R=c({name:`Badge`,props:Object.assign(Object.assign({},l.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:`default`},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o}=x(t),c=l(`Badge`,`-badge`,L,I,t,r),u=C(!1),d=()=>{u.value=!0},p=()=>{u.value=!1},h=e(()=>t.show&&(t.dot||t.value!==void 0&&!(!t.showZero&&Number(t.value)<=0)||!m(n.value)));f(()=>{h.value&&(u.value=!0)});let g=s(`Badge`,o,r),v=e(()=>{let{type:e,color:n}=t,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:i},self:{[a(`color`,e)]:o,fontFamily:s,fontSize:l}}=c.value;return{"--n-font-size":l,"--n-font-family":s,"--n-color":n||o,"--n-ripple-color":n||o,"--n-bezier":r,"--n-ripple-bezier":i}}),y=i?_(`badge`,e(()=>{let e=``,{type:n,color:r}=t;return n&&(e+=n[0]),r&&(e+=E(r)),e}),v,t):void 0,b=e(()=>{let{offset:e}=t;if(!e)return;let[n,r]=e,i=typeof n==`number`?`${n}px`:n,a=typeof r==`number`?`${r}px`:r;return{transform:`translate(calc(${g?.value?`50%`:`-50%`} + ${i}), ${a})`}});return{rtlEnabled:g,mergedClsPrefix:r,appeared:u,showBadge:h,handleAfterEnter:d,handleAfterLeave:p,cssVars:i?void 0:v,themeClass:y?.themeClass,onRender:y?.onRender,offsetStyle:b}},render(){let{mergedClsPrefix:e,onRender:n,themeClass:r,$slots:i}=this;n?.();let a=i.default?.call(i);return t(`div`,{class:[`${e}-badge`,this.rtlEnabled&&`${e}-badge--rtl`,r,{[`${e}-badge--dot`]:this.dot,[`${e}-badge--as-is`]:!a}],style:this.cssVars},a,t(T,{name:`fade-in-scale-up-transition`,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?t(`sup`,{class:`${e}-badge-sup`,title:O(this.value),style:this.offsetStyle},y(i.value,()=>[this.dot?null:t(P,{clsPrefix:e,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?t(g,{clsPrefix:e}):null):null}))}});export{R as t};