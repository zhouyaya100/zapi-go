import{An as e,Bn as t,Bt as n,Gt as r,It as i,Rn as a,T as o,Ut as s,_ as c,g as l,ir as u,ot as d,st as f,ur as p,v as m,yn as h,zt as g}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{s as _}from"./useI18n-Bw8dRrjR.js";import{s as v}from"./index-BqSDc86C.js";var y=g([g(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),n(`spin-container`,`
 position: relative;
 `,[n(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[l()])]),n(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),n(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[s(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),n(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),n(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[s(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=a({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},o.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),m),slots:Object,setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:a}=f(t),s=o(`Spin`,`-spin`,y,v,t,n),c=e(()=>{let{size:e}=t,{common:{cubicBezierEaseInOut:n},self:a}=s.value,{opacitySpinning:o,color:c,textColor:l}=a;return{"--n-bezier":n,"--n-opacity-spinning":o,"--n-size":typeof e==`number`?i(e):a[r(`size`,e)],"--n-color":c,"--n-text-color":l}}),l=a?d(`spin`,e(()=>{let{size:e}=t;return typeof e==`number`?String(e):e[0]}),c,t):void 0,m=_(t,[`spinning`,`show`]),h=p(!1);return u(e=>{let n;if(m.value){let{delay:r}=t;if(r){n=window.setTimeout(()=>{h.value=!0},r),e(()=>{clearTimeout(n)});return}}h.value=m.value}),{mergedClsPrefix:n,active:h,mergedStrokeWidth:e(()=>{let{strokeWidth:e}=t;if(e!==void 0)return e;let{size:n}=t;return b[typeof n==`number`?`medium`:n]}),cssVars:a?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;let{$slots:n,mergedClsPrefix:r,description:i}=this,a=n.icon&&this.rotate,o=(i||n.description)&&t(`div`,{class:`${r}-spin-description`},i||n.description?.call(n)),s=n.icon?t(`div`,{class:[`${r}-spin-body`,this.themeClass]},t(`div`,{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:n.default?``:this.cssVars},n.icon()),o):t(`div`,{class:[`${r}-spin-body`,this.themeClass]},t(c,{clsPrefix:r,style:n.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),o);return(e=this.onRender)==null||e.call(this),n.default?t(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},t(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),t(h,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};