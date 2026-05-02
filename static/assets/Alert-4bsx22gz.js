import{An as e,At as t,Bn as n,Bt as r,C as i,Ft as a,Gt as o,Hn as s,Ht as c,O as l,Rn as u,T as d,Ut as f,h as p,ht as m,kt as h,ot as g,pt as _,st as v,ur as y,y as b,zt as x}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{A as S,B as C,H as w,R as T,V as E,j as D,z as O}from"./index-BqSDc86C.js";function k(e){let{lineHeight:n,borderRadius:r,fontWeightStrong:i,baseColor:a,dividerColor:o,actionColor:s,textColor1:c,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=e;return Object.assign(Object.assign({},D),{fontSize:b,lineHeight:n,titleFontWeight:i,borderRadius:r,border:`1px solid ${o}`,color:s,titleTextColor:c,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:m,borderInfo:`1px solid ${t(a,h(g,{alpha:.25}))}`,colorInfo:t(a,h(g,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:g,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${t(a,h(_,{alpha:.25}))}`,colorSuccess:t(a,h(_,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:_,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${t(a,h(v,{alpha:.33}))}`,colorWarning:t(a,h(v,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:v,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:m,borderError:`1px solid ${t(a,h(y,{alpha:.25}))}`,colorError:t(a,h(y,{alpha:.08})),titleTextColorError:c,iconColorError:y,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:m})}var A={name:`Alert`,common:p,self:k},j=r(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[c(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),f(`closable`,[r(`alert-body`,[c(`title`,`
 padding-right: 24px;
 `)])]),c(`icon`,{color:`var(--n-icon-color)`}),r(`alert-body`,{padding:`var(--n-padding)`},[c(`title`,{color:`var(--n-title-text-color)`}),c(`content`,{color:`var(--n-content-text-color)`})]),S({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),c(`icon`,`
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
 `),c(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),f(`show-icon`,[r(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),f(`right-adjust`,[r(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),r(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[c(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[x(`& +`,[c(`content`,{marginTop:`9px`})])]),c(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),c(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=u({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},d.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(t){let{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:i,mergedRtlRef:s}=v(t),c=d(`Alert`,`-alert`,j,A,t,n),u=l(`Alert`,s,n),f=e(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=c.value,{fontSize:r,borderRadius:i,titleFontWeight:s,lineHeight:l,iconSize:u,iconMargin:d,iconMarginRtl:f,closeIconSize:p,closeBorderRadius:m,closeSize:h,closeMargin:g,closeMarginRtl:_,padding:v}=n,{type:y}=t,{left:b,right:x}=a(d);return{"--n-bezier":e,"--n-color":n[o(`color`,y)],"--n-close-icon-size":p,"--n-close-border-radius":m,"--n-close-color-hover":n[o(`closeColorHover`,y)],"--n-close-color-pressed":n[o(`closeColorPressed`,y)],"--n-close-icon-color":n[o(`closeIconColor`,y)],"--n-close-icon-color-hover":n[o(`closeIconColorHover`,y)],"--n-close-icon-color-pressed":n[o(`closeIconColorPressed`,y)],"--n-icon-color":n[o(`iconColor`,y)],"--n-border":n[o(`border`,y)],"--n-title-text-color":n[o(`titleTextColor`,y)],"--n-content-text-color":n[o(`contentTextColor`,y)],"--n-line-height":l,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":s,"--n-icon-size":u,"--n-icon-margin":d,"--n-icon-margin-rtl":f,"--n-close-size":h,"--n-close-margin":g,"--n-close-margin-rtl":_,"--n-padding":v,"--n-icon-margin-left":b,"--n-icon-margin-right":x}}),p=i?g(`alert`,e(()=>t.type[0]),f,t):void 0,m=y(!0),h=()=>{let{onAfterLeave:e,onAfterHide:n}=t;e&&e(),n&&n()};return{rtlEnabled:u,mergedClsPrefix:n,mergedBordered:r,visible:m,handleCloseClick:()=>{Promise.resolve(t.onClose?.call(t)).then(e=>{e!==!1&&(m.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:c,cssVars:i?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),n(b,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?n(`div`,Object.assign({},s(this.$attrs,r)),this.closable&&n(T,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&n(`div`,{class:`${e}-alert__border`}),this.showIcon&&n(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},_(t.icon,()=>[n(i,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return n(C,null);case`info`:return n(E,null);case`warning`:return n(O,null);case`error`:return n(w,null);default:return null}}})])),n(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},m(t.header,t=>{let r=t||this.title;return r?n(`div`,{class:`${e}-alert-body__title`},r):null}),t.default&&n(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};