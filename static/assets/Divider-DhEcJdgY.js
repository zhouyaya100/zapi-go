import{An as e,Bn as t,E as n,En as r,Gt as i,Rn as a,Ut as o,Vt as s,Wt as c,ct as l,st as u}from"./_plugin-vue_export-helper-CctN37zK.js";import{d}from"./index-DeyMbItW.js";var f=s(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[i(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[i(`no-title`,`
 display: flex;
 align-items: center;
 `)]),o(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c(`title-position-left`,[o(`line`,[c(`left`,{width:`28px`})])]),c(`title-position-right`,[o(`line`,[c(`right`,{width:`28px`})])]),c(`dashed`,[o(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),o(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),i(`dashed`,[o(`line`,{backgroundColor:`var(--n-color)`})]),c(`dashed`,[o(`line`,{borderColor:`var(--n-color)`})]),c(`vertical`,{backgroundColor:`var(--n-color)`})]),p=a({name:`Divider`,props:Object.assign(Object.assign({},n.props),{titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean}),setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i}=l(t),a=n(`Divider`,`-divider`,f,d,t,r),o=e(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=a.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}}),s=i?u(`divider`,void 0,o,t):void 0;return{mergedClsPrefix:r,cssVars:i?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;let{$slots:n,titlePlacement:i,vertical:a,dashed:o,cssVars:s,mergedClsPrefix:c}=this;return(e=this.onRender)==null||e.call(this),t(`div`,{role:`separator`,class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:a,[`${c}-divider--no-title`]:!n.default,[`${c}-divider--dashed`]:o,[`${c}-divider--title-position-${i}`]:n.default&&i}],style:s},a?null:t(`div`,{class:`${c}-divider__line ${c}-divider__line--left`}),!a&&n.default?t(r,null,t(`div`,{class:`${c}-divider__title`},this.$slots),t(`div`,{class:`${c}-divider__line ${c}-divider__line--right`})):null)}});export{p as t};