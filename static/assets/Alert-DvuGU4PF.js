import{An as e,At as t,Bn as n,Bt as r,E as i,Hn as a,It as o,Kt as s,Rn as c,Ut as l,Vt as u,Wt as d,b as f,ct as p,g as m,gt as h,jt as g,k as _,mt as v,st as y,ur as b,w as x}from"./_plugin-vue_export-helper-CctN37zK.js";import{A as S,B as C,L as w,R as T,V as E,k as D,z as O}from"./index-Bsv4VV4v.js";function k(e){let{lineHeight:n,borderRadius:r,fontWeightStrong:i,baseColor:a,dividerColor:o,actionColor:s,textColor1:c,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,infoColor:h,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},S),{fontSize:b,lineHeight:n,titleFontWeight:i,borderRadius:r,border:`1px solid ${o}`,color:s,titleTextColor:c,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,borderInfo:`1px solid ${g(a,t(h,{alpha:.25}))}`,colorInfo:g(a,t(h,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:h,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${g(a,t(_,{alpha:.25}))}`,colorSuccess:g(a,t(_,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:_,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${g(a,t(v,{alpha:.33}))}`,colorWarning:g(a,t(v,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:v,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:m,borderError:`1px solid ${g(a,t(y,{alpha:.25}))}`,colorError:g(a,t(y,{alpha:.08})),titleTextColorError:c,iconColorError:y,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:m})}var A={name:`Alert`,common:m,self:k},j=u(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[l(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),d(`closable`,[u(`alert-body`,[l(`title`,`
 padding-right: 24px;
 `)])]),l(`icon`,{color:`var(--n-icon-color)`}),u(`alert-body`,{padding:`var(--n-padding)`},[l(`title`,{color:`var(--n-title-text-color)`}),l(`content`,{color:`var(--n-content-text-color)`})]),D({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),l(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),l(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),d(`show-icon`,[u(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),d(`right-adjust`,[u(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),u(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[l(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[r(`& +`,[l(`content`,{marginTop:`9px`})])]),l(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),l(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=c({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(t){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:a,mergedRtlRef:c}=p(t),l=i(`Alert`,`-alert`,j,A,t,n),u=_(`Alert`,c,n),d=e(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=l.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:c,iconSize:u,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=t,{left:b,right:x}=o(d);return{"--n-bezier":e,"--n-color":n[s(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":n[s(`closeColorHover`,y)],"--n-close-color-pressed":n[s(`closeColorPressed`,y)],"--n-close-icon-color":n[s(`closeIconColor`,y)],"--n-close-icon-color-hover":n[s(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[s(`closeIconColorPressed`,y)],"--n-icon-color":n[s(`iconColor`,y)],"--n-border":n[s(`border`,y)],"--n-title-text-color":n[s(`titleTextColor`,y)],"--n-content-text-color":n[s(`contentTextColor`,y)],"--n-line-height":c,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":u,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),f=a?y(`alert`,e(()=>t.type[0]),d,t):void 0,m=b(!0),h=()=>{let{onAfterLeave:e,onAfterHide:n}=t;e&&e(),n&&n()};return{rtlEnabled:u,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{Promise.resolve(t.onClose?.call(t)).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:l,cssVars:a?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(f,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?n(`div`,Object.assign({},a(this.$attrs,r)),this.closable&&n(w,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&n(`div`,{class:`${e}-alert__border`}),this.showIcon&&n(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},v(t.icon,()=>[n(x,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return n(O,null);case`info`:return n(C,null);case`warning`:return n(T,null);case`error`:return n(E,null);default:return null}}})])),n(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},h(t.header,t=>{let r=t||this.title;return r?n(`div`,{class:`${e}-alert-body__title`},r):null}),t.default&&n(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};