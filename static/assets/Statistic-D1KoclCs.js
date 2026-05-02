import{An as e,Bn as t,Bt as n,Ht as r,O as i,Rn as a,T as o,ht as s,ot as c,st as l}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{o as u}from"./index-BqSDc86C.js";var d=n(`statistic`,[r(`label`,`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),n(`statistic-value`,`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[r(`prefix`,`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[n(`icon`,{verticalAlign:`-0.125em`})]),r(`content`,`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),r(`suffix`,`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[n(`icon`,{verticalAlign:`-0.125em`})])])]),f=a({name:`Statistic`,props:Object.assign(Object.assign({},o.props),{tabularNums:Boolean,label:String,value:[String,Number]}),slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:a}=l(t),s=o(`Statistic`,`-statistic`,d,u,t,n),f=i(`Statistic`,a,n),p=e(()=>{let{self:{labelFontWeight:e,valueFontSize:t,valueFontWeight:n,valuePrefixTextColor:r,labelTextColor:i,valueSuffixTextColor:a,valueTextColor:o,labelFontSize:c},common:{cubicBezierEaseInOut:l}}=s.value;return{"--n-bezier":l,"--n-label-font-size":c,"--n-label-font-weight":e,"--n-label-text-color":i,"--n-value-font-weight":n,"--n-value-font-size":t,"--n-value-prefix-text-color":r,"--n-value-suffix-text-color":a,"--n-value-text-color":o}}),m=r?c(`statistic`,void 0,p,t):void 0;return{rtlEnabled:f,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;let{mergedClsPrefix:n,$slots:{default:r,label:i,prefix:a,suffix:o}}=this;return(e=this.onRender)==null||e.call(this),t(`div`,{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},s(i,e=>t(`div`,{class:`${n}-statistic__label`},this.label||e)),t(`div`,{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?`tabular-nums`:``}},s(a,e=>e&&t(`span`,{class:`${n}-statistic-value__prefix`},e)),this.value===void 0?s(r,e=>e&&t(`span`,{class:`${n}-statistic-value__content`},e)):t(`span`,{class:`${n}-statistic-value__content`},this.value),s(o,e=>e&&t(`span`,{class:`${n}-statistic-value__suffix`},e))))}});export{f as t};