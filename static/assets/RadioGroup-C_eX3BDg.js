import{An as e,Bn as t,Bt as n,Dt as r,E as i,Gt as a,Kt as o,Qn as s,Rn as c,Tt as l,Ut as u,Vn as d,Vt as f,Wt as p,_t as m,ct as h,gt as g,k as _,ot as v,pr as y,st as b,ur as x}from"./_plugin-vue_export-helper-CctN37zK.js";import{l as S}from"./Tag-CuowKQ2w.js";import{c as C}from"./useI18n-BskqdnI6.js";import{q as w,v as T}from"./index-DeyMbItW.js";var E=f(`radio`,`
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
`,[p(`checked`,[u(`dot`,`
 background-color: var(--n-color-active);
 `)]),u(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),f(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),u(`dot`,`
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
 `,[n(`&::before`,`
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
 `),p(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[n(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),u(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),a(`disabled`,`
 cursor: pointer;
 `,[n(`&:hover`,[u(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),p(`focus`,[n(`&:not(:active)`,[u(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),p(`disabled`,`
 cursor: not-allowed;
 `,[u(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[n(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),p(`checked`,`
 opacity: 1;
 `)]),u(`label`,{color:`var(--n-text-color-disabled)`}),f(`radio-input`,`
 cursor: not-allowed;
 `)])]),D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=l(`n-radio-group`);function k(e){let t=d(O,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:i}=h(e),a=v(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:i?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=x(null),l=x(null),u=x(e.defaultChecked),f=C(y(e,`checked`),u),p=r(()=>t?t.valueRef.value===e.value:f.value),g=r(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),_=x(!1);function b(){if(t){let{doUpdateValue:n}=t,{value:r}=e;m(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=a;t&&m(t,!0),n&&m(n,!0),r(),i(),u.value=!0}}function S(){s.value||p.value||b()}function w(){S(),c.value&&(c.value.checked=p.value)}function T(){_.value=!1}function E(){_.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:c,labelRef:l,mergedName:g,mergedDisabled:s,renderSafeChecked:p,focus:_,mergedSize:o,handleRadioInputChange:w,handleRadioInputBlur:T,handleRadioInputFocus:E}}var A=c({name:`Radio`,props:Object.assign(Object.assign({},i.props),D),setup(t){let n=k(t),r=i(`Radio`,`-radio`,E,T,t,n.mergedClsPrefix),a=e(()=>{let{mergedSize:{value:e}}=n,{common:{cubicBezierEaseInOut:t},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:s,boxShadowFocus:c,boxShadowHover:l,color:u,colorDisabled:d,colorActive:f,textColor:p,textColorDisabled:m,dotColorActive:h,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[o(`fontSize`,e)]:b,[o(`radioSize`,e)]:x}}=r.value;return{"--n-bezier":t,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":s,"--n-box-shadow-focus":c,"--n-box-shadow-hover":l,"--n-color":u,"--n-color-active":f,"--n-color-disabled":d,"--n-dot-color-active":h,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":p,"--n-text-color-disabled":m,"--n-label-padding":_}}),{inlineThemeDisabled:s,mergedClsPrefixRef:c,mergedRtlRef:l}=h(t),u=_(`Radio`,l,c),d=s?b(`radio`,e(()=>n.mergedSize.value[0]),a,t):void 0;return Object.assign(n,{rtlEnabled:u,cssVars:s?void 0:a,themeClass:d?.themeClass,onRender:d?.onRender})},render(){let{$slots:e,mergedClsPrefix:n,onRender:r,label:i}=this;return r?.(),t(`label`,{class:[`${n}-radio`,this.themeClass,this.rtlEnabled&&`${n}-radio--rtl`,this.mergedDisabled&&`${n}-radio--disabled`,this.renderSafeChecked&&`${n}-radio--checked`,this.focus&&`${n}-radio--focus`],style:this.cssVars},t(`div`,{class:`${n}-radio__dot-wrapper`},`\xA0`,t(`div`,{class:[`${n}-radio__dot`,this.renderSafeChecked&&`${n}-radio__dot--checked`]}),t(`input`,{ref:`inputRef`,type:`radio`,class:`${n}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),g(e.default,e=>!e&&!i?null:t(`div`,{ref:`labelRef`,class:`${n}-radio__label`},e||i)))}}),j=f(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[u(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[p(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),p(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),p(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[f(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),u(`splitor`,{height:`var(--n-height)`})]),f(`radio-button`,`
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
 `,[f(`radio-input`,`
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
 `),u(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),n(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[u(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),n(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[u(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),a(`disabled`,`
 cursor: pointer;
 `,[n(`&:hover`,[u(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),a(`checked`,{color:`var(--n-button-text-color-hover)`})]),p(`focus`,[n(`&:not(:active)`,[u(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),p(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),p(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function M(e,n,r){let i=[],a=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(a=!0);let l=s.props;if(c!==`RadioButton`){i.push(s);continue}if(o===0)i.push(s);else{let e=i[i.length-1].props,a=n===e.value,o=e.disabled,c=n===l.value,u=l.disabled,d=(a?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${r}-radio-group__splitor--disabled`]:o,[`${r}-radio-group__splitor--checked`]:a},m={[`${r}-radio-group__splitor--disabled`]:u,[`${r}-radio-group__splitor--checked`]:c},h=d<f?m:p;i.push(t(`div`,{class:[`${r}-radio-group__splitor`,h]}),s)}}return{children:i,isButtonGroup:a}}var N=c({name:`RadioGroup`,props:Object.assign(Object.assign({},i.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(t){let n=x(null),{mergedSizeRef:r,mergedDisabledRef:a,nTriggerFormChange:c,nTriggerFormInput:l,nTriggerFormBlur:u,nTriggerFormFocus:d}=v(t),{mergedClsPrefixRef:f,inlineThemeDisabled:p,mergedRtlRef:g}=h(t),S=i(`Radio`,`-radio-group`,j,T,t,f),w=x(t.defaultValue),E=C(y(t,`value`),w);function D(e){let{onUpdateValue:n,"onUpdate:value":r}=t;n&&m(n,e),r&&m(r,e),w.value=e,c(),l()}function k(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||d())}function A(e){let{value:t}=n;t&&(t.contains(e.relatedTarget)||u())}s(O,{mergedClsPrefixRef:f,nameRef:y(t,`name`),valueRef:E,disabledRef:a,mergedSizeRef:r,doUpdateValue:D});let M=_(`Radio`,g,f),N=e(()=>{let{value:e}=r,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:i,buttonBorderRadius:a,buttonBoxShadow:s,buttonBoxShadowFocus:c,buttonBoxShadowHover:l,buttonColor:u,buttonColorActive:d,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[o(`buttonHeight`,e)]:g,[o(`fontSize`,e)]:_}}=S.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":i,"--n-button-border-radius":a,"--n-button-box-shadow":s,"--n-button-box-shadow-focus":c,"--n-button-box-shadow-hover":l,"--n-button-color":u,"--n-button-color-active":d,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),P=p?b(`radio-group`,e(()=>r.value[0]),N,t):void 0;return{selfElRef:n,rtlEnabled:M,mergedClsPrefix:f,mergedValue:E,handleFocusout:A,handleFocusin:k,cssVars:p?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:n,mergedClsPrefix:r,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=M(w(S(this)),n,r);return(e=this.onRender)==null||e.call(this),t(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,s&&`${r}-radio-group--button-group`],style:this.cssVars},o)}});export{A as n,N as t};