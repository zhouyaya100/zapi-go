import{An as e,Bn as t,Bt as n,E as r,Kt as i,Lt as a,Rn as o,Vt as s,Wt as c,_ as l,ct as u,ir as d,st as f,ur as p,v as m,y as h,yn as g}from"./_plugin-vue_export-helper-CctN37zK.js";import{s as _}from"./useI18n-BskqdnI6.js";import{o as v}from"./index-DeyMbItW.js";var y=n([n(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),s(`spin-container`,`
 position: relative;
 `,[s(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[l()])]),s(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),s(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[c(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),s(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),s(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[c(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=o({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},r.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),h),slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:o}=u(t),s=r(`Spin`,`-spin`,y,v,t,n),c=e(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=s.value,{opacitySpinning:o,color:c,textColor:l}=r;return{"--n-bezier":n,"--n-opacity-spinning":o,"--n-size":typeof e==`number`?a(e):r[i(`size`,e)],"--n-color":c,"--n-text-color":l}}),l=o?f(`spin`,e(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),c,t):void 0,m=_(t,[`spinning`,`show`]),h=p(!1);return d(e=>{let n;if(m.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:n,active:h,mergedStrokeWidth:e(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return b[typeof n==`number`?`medium`:n]}),cssVars:o?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;let{$slots:n,mergedClsPrefix:r,description:i}=this,a=n.icon&&this.rotate,o=(i||n.description)&&t(`div`,{class:`${r}-spin-description`},i||n.description?.call(n)),s=n.icon?t(`div`,{class:[`${r}-spin-body`,this.themeClass]},t(`div`,{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:n.default?``:this.cssVars},n.icon()),o):t(`div`,{class:[`${r}-spin-body`,this.themeClass]},t(m,{clsPrefix:r,style:n.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),o);return(e=this.onRender)==null||e.call(this),n.default?t(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},t(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),t(g,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};