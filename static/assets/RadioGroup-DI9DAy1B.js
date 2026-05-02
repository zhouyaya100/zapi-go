import{An as e,Bn as t,Bt as n,Et as r,Gt as i,Ht as a,O as o,Qn as s,Rn as c,T as l,Ut as u,Vn as d,Wt as f,at as p,gt as m,ht as h,ot as g,pr as _,st as v,ur as y,wt as b,zt as x}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{l as S}from"./Tag-ajo8I_4T.js";import{c as C}from"./useI18n-Bw8dRrjR.js";import{J as w,y as T}from"./index-BqSDc86C.js";var E=n(`radio`,`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[u(`checked`,[a(`dot`,`
 background-color: var(--n-color-active);
 `)]),a(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),n(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),a(`dot`,`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[x(`&::before`,`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[x(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),a(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),f(`disabled`,`
 cursor: pointer;
 `,[x(`&:hover`,[a(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),u(`focus`,[x(`&:not(:active)`,[a(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),u(`disabled`,`
 cursor: not-allowed;
 `,[a(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[x(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),u(`checked`,`
 opacity: 1;
 `)]),a(`label`,{color:`var(--n-text-color-disabled)`}),n(`radio-input`,`
 cursor: not-allowed;
 `)])]),D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=b(`n-radio-group`);function k(e){let t=d(O,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:i}=v(e),a=p(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:i?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=y(null),l=y(null),u=y(e.defaultChecked),f=C(_(e,`checked`),u),h=r(()=>t?t.valueRef.value===e.value:f.value),g=r(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),b=y(!1);function x(){if(t){let{doUpdateValue:n}=t,{value:r}=e;m(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=a;t&&m(t,!0),n&&m(n,!0),r(),i(),u.value=!0}}function S(){s.value||h.value||x()}function w(){S(),c.value&&(c.value.checked=h.value)}function T(){b.value=!1}function E(){b.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:c,labelRef:l,mergedName:g,mergedDisabled:s,renderSafeChecked:h,focus:b,mergedSize:o,handleRadioInputChange:w,handleRadioInputBlur:T,handleRadioInputFocus:E}}var A=c({name:`Radio`,props:Object.assign(Object.assign({},l.props),D),setup(t){let n=k(t),r=l(`Radio`,`-radio`,E,T,t,n.mergedClsPrefix),a=e(()=>{let{mergedSize:{value:e}}=n,{common:{cubicBezierEaseInOut:t},self:{boxShadow:a,boxShadowActive:o,boxShadowDisabled:s,boxShadowFocus:c,boxShadowHover:l,color:u,colorDisabled:d,colorActive:f,textColor:p,textColorDisabled:m,dotColorActive:h,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[i(`fontSize`,e)]:b,[i(`radioSize`,e)]:x}}=r.value;return{"--n-bezier":t,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":a,"--n-box-shadow-active":o,"--n-box-shadow-disabled":s,"--n-box-shadow-focus":c,"--n-box-shadow-hover":l,"--n-color":u,"--n-color-active":f,"--n-color-disabled":d,"--n-dot-color-active":h,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":p,"--n-text-color-disabled":m,"--n-label-padding":_}}),{inlineThemeDisabled:s,mergedClsPrefixRef:c,mergedRtlRef:u}=v(t),d=o(`Radio`,u,c),f=s?g(`radio`,e(()=>n.mergedSize.value[0]),a,t):void 0;return Object.assign(n,{rtlEnabled:d,cssVars:s?void 0:a,themeClass:f?.themeClass,onRender:f?.onRender})},render(){let{$slots:e,mergedClsPrefix:n,onRender:r,label:i}=this;return r?.(),t(`label`,{class:[`${n}-radio`,this.themeClass,this.rtlEnabled&&`${n}-radio--rtl`,this.mergedDisabled&&`${n}-radio--disabled`,this.renderSafeChecked&&`${n}-radio--checked`,this.focus&&`${n}-radio--focus`],style:this.cssVars},t(`div`,{class:`${n}-radio__dot-wrapper`},`\xA0`,t(`div`,{class:[`${n}-radio__dot`,this.renderSafeChecked&&`${n}-radio__dot--checked`]}),t(`input`,{ref:`inputRef`,type:`radio`,class:`${n}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),h(e.default,e=>!e&&!i?null:t(`div`,{ref:`labelRef`,class:`${n}-radio__label`},e||i)))}}),j=n(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[a(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[u(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),u(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),u(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[n(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),a(`splitor`,{height:`var(--n-height)`})]),n(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[n(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),a(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),x(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[a(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),x(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[a(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),f(`disabled`,`
 cursor: pointer;
 `,[x(`&:hover`,[a(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),f(`checked`,{color:`var(--n-button-text-color-hover)`})]),u(`focus`,[x(`&:not(:active)`,[a(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),u(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),u(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function M(e,n,r){let i=[],a=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(a=!0);let l=s.props;if(c!==`RadioButton`){i.push(s);continue}if(o===0)i.push(s);else{let e=i[i.length-1].props,a=n===e.value,o=e.disabled,c=n===l.value,u=l.disabled,d=(a?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${r}-radio-group__splitor--disabled`]:o,[`${r}-radio-group__splitor--checked`]:a},m={[`${r}-radio-group__splitor--disabled`]:u,[`${r}-radio-group__splitor--checked`]:c},h=d<f?m:p;i.push(t(`div`,{class:[`${r}-radio-group__splitor`,h]}),s)}}return{children:i,isButtonGroup:a}}var N=c({name:`RadioGroup`,props:Object.assign(Object.assign({},l.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(t){let n=y(null),{mergedSizeRef:r,mergedDisabledRef:a,nTriggerFormChange:c,nTriggerFormInput:u,nTriggerFormBlur:d,nTriggerFormFocus:f}=p(t),{mergedClsPrefixRef:h,inlineThemeDisabled:b,mergedRtlRef:x}=v(t),S=l(`Radio`,`-radio-group`,j,T,t,h),w=y(t.defaultValue),E=C(_(t,`value`),w);function D(e){let{onUpdateValue:n,"onUpdate:value":r}=t;n&&m(n,e),r&&m(r,e),w.value=e,c(),u()}function k(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||f())}function A(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||d())}s(O,{mergedClsPrefixRef:h,nameRef:_(t,`name`),valueRef:E,disabledRef:a,mergedSizeRef:r,doUpdateValue:D});let M=o(`Radio`,x,h),N=e(()=>{let{value:e}=r,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:a,buttonBorderRadius:o,buttonBoxShadow:s,buttonBoxShadowFocus:c,buttonBoxShadowHover:l,buttonColor:u,buttonColorActive:d,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[i(`buttonHeight`,e)]:g,[i(`fontSize`,e)]:_}}=S.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":a,"--n-button-border-radius":o,"--n-button-box-shadow":s,"--n-button-box-shadow-focus":c,"--n-button-box-shadow-hover":l,"--n-button-color":u,"--n-button-color-active":d,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),P=b?g(`radio-group`,e(()=>r.value[0]),N,t):void 0;return{selfElRef:n,rtlEnabled:M,mergedClsPrefix:h,mergedValue:E,handleFocusout:A,handleFocusin:k,cssVars:b?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:n,mergedClsPrefix:r,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=M(w(S(this)),n,r);return(e=this.onRender)==null||e.call(this),t(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,s&&`${r}-radio-group--button-group`],style:this.cssVars},o)}});export{A as n,N as t};