import{An as e,Bn as t,Bt as n,En as r,Ht as i,Rn as a,T as o,Ut as s,Wt as c,ot as l,st as u}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{f as d}from"./index-BqSDc86C.js";var f=n(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c(`no-title`,`
 display: flex;
 align-items: center;
 `)]),i(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s(`title-position-left`,[i(`line`,[s(`left`,{width:`28px`})])]),s(`title-position-right`,[i(`line`,[s(`right`,{width:`28px`})])]),s(`dashed`,[i(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),i(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c(`dashed`,[i(`line`,{backgroundColor:`var(--n-color)`})]),s(`dashed`,[i(`line`,{borderColor:`var(--n-color)`})]),s(`vertical`,{backgroundColor:`var(--n-color)`})]),p=a({name:`Divider`,props:Object.assign(Object.assign({},o.props),{titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean}),setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=u(t),i=o(`Divider`,`-divider`,f,d,t,n),a=e(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=i.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}}),s=r?l(`divider`,void 0,a,t):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;let{$slots:n,titlePlacement:i,vertical:a,dashed:o,cssVars:s,mergedClsPrefix:c}=this;return(e=this.onRender)==null||e.call(this),t(`div`,{role:`separator`,class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:a,[`${c}-divider--no-title`]:!n.default,[`${c}-divider--dashed`]:o,[`${c}-divider--title-position-${i}`]:n.default&&i}],style:s},a?null:t(`div`,{class:`${c}-divider__line ${c}-divider__line--left`}),!a&&n.default?t(r,null,t(`div`,{class:`${c}-divider__title`},this.$slots),t(`div`,{class:`${c}-divider__line ${c}-divider__line--right`})):null)}});export{p as t};