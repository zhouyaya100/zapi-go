import{An as e,Bn as t,Bt as n,Dt as r,E as i,En as a,Gt as o,Hn as s,Kt as c,Qn as l,Rn as u,Tt as d,Ut as f,Vn as p,Vt as m,Wt as h,_t as g,ct as _,p as v,pr as y,rr as b,st as x,ur as S,yn as C,yt as w}from"./_plugin-vue_export-helper-CctN37zK.js";import{S as T,_ as E,a as D,d as O,g as k,i as A,o as j,p as M,r as N}from"./Tag-D0aeegtN.js";import{c as P}from"./useI18n-CsUAjHsG.js";import{t as F}from"./use-keyboard-BGO_K7xz.js";import{t as I}from"./create-ref-setter-BZkUGfTm.js";import{G as L,H as R,P as z,b as B,g as V,nt as H,rt as U,tt as W,x as ee}from"./index-Bsv4VV4v.js";function te(e,t,n){if(!t)return e;let r=S(e.value),i=null;return b(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}var G=u({name:`ChevronRight`,render(){return t(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},t(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),ne=u({name:`Tooltip`,props:Object.assign(Object.assign({},A),i.props),slots:Object,__popover__:!0,setup(t){let{mergedClsPrefixRef:n}=_(t),r=i(`Tooltip`,`-tooltip`,void 0,B,t,n),a=S(null);return Object.assign(Object.assign({},{syncPosition(){a.value.syncPosition()},setShow(e){a.value.setShow(e)}}),{popoverRef:a,mergedTheme:r,popoverThemeOverrides:e(()=>r.value.self)})},render(){let{mergedTheme:e,internalExtraClass:n}=this;return t(N,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),K=d(`n-dropdown-menu`),q=d(`n-dropdown`),J=d(`n-dropdown-option`),Y=u({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return t(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),re=u({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=p(K),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=p(q);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:n,showIcon:r,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=t(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),t(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},t(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,r&&`${e}-dropdown-option-body__prefix--show-icon`]},R(s.icon)),t(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):R(s.title??s[this.labelField])),t(`div`,{class:[`${e}-dropdown-option-body__suffix`,n&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}}),ie=m(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[h(`color-transition`,{transition:`color .3s var(--n-bezier)`}),h(`depth`,{color:`var(--n-color)`},[n(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),n(`svg`,{height:`1em`,width:`1em`})]),X=u({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=_(t),a=i(`Icon`,`-icon`,ie,V,t,n),o=e(()=>{let{depth:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=a.value;if(e!==void 0){let{color:t,[`opacity${e}Depth`]:i}=r;return{"--n-bezier":n,"--n-color":t,"--n-opacity":i}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),s=r?x(`icon`,e(()=>`${t.depth||`d`}`),o,t):void 0;return{mergedClsPrefix:n,mergedStyle:e(()=>{let{size:e,color:n}=t;return{fontSize:O(e),color:n}}),cssVars:r?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{$parent:e,depth:n,mergedClsPrefix:r,component:i,onRender:a,themeClass:o}=this;return e?.$options?._n_icon__&&w(`icon`,"don't wrap `n-icon` inside `n-icon`"),a?.(),t(`i`,s(this.$attrs,{role:`img`,class:[`${r}-icon`,o,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?t(i):this.$slots)}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ae(e){return e.type===`group`}function Q(e){return e.type===`divider`}function oe(e){return e.type===`render`}var $=u({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(t){let n=p(q),{hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:s,activeKeyPathRef:c,animatedRef:u,mergedShowRef:d,renderLabelRef:f,renderIconRef:m,labelFieldRef:h,childrenFieldRef:g,renderOptionRef:_,nodePropsRef:v,menuPropsRef:y}=n,b=p(J,null),x=p(K),C=p(W),w=e(()=>t.tmNode.rawNode),E=e(()=>{let{value:e}=g;return Z(t.tmNode.rawNode,e)}),D=e(()=>{let{disabled:e}=t.tmNode;return e}),O=te(e(()=>{if(!E.value)return!1;let{key:e,disabled:n}=t.tmNode;if(n)return!1;let{value:r}=i,{value:c}=a,{value:l}=o,{value:u}=s;return r===null?c===null?l===null?!1:u.includes(e):u.includes(e)&&u[u.length-1]!==e:u.includes(e)}),300,e(()=>a.value===null&&!u.value)),k=e(()=>!!b?.enteringSubmenuRef.value),A=S(!1);l(J,{enteringSubmenuRef:A});function j(){A.value=!0}function M(){A.value=!1}function N(){let{parentKey:e,tmNode:n}=t;n.disabled||d.value&&(o.value=e,a.value=null,i.value=n.key)}function P(){let{tmNode:e}=t;e.disabled||d.value&&i.value!==e.key&&N()}function F(e){if(t.tmNode.disabled||!d.value)return;let{relatedTarget:n}=e;n&&!T({target:n},`dropdownOption`)&&!T({target:n},`scrollbarRail`)&&(i.value=null)}function I(){let{value:e}=E,{tmNode:r}=t;d.value&&!e&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:f,renderIcon:m,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:y,popoverBody:C,animated:u,mergedShowSubmenu:e(()=>O.value&&!k.value),rawNode:w,hasSubmenu:E,pending:r(()=>{let{value:e}=s,{key:n}=t.tmNode;return e.includes(n)}),childActive:r(()=>{let{value:e}=c,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r<e.length-1}),active:r(()=>{let{value:e}=c,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r===e.length-1}),mergedDisabled:D,renderOption:_,nodeProps:v,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:p}=this,m=null;if(r){let e=this.menuProps?.call(this,n,n.children);m=t(le,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(n),_=t(`div`,Object.assign({class:[`${i}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),t(`div`,s(h,f),[t(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[l?l(n):R(n.icon)]),t(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},c?c(n):R(n[this.labelField]??n.title)),t(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?t(X,null,{default:()=>t(G,null)}):null)]),this.hasSubmenu?t(E,null,{default:()=>[t(k,null,{default:()=>t(`div`,{class:`${i}-dropdown-offset-container`},t(M,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>t(`div`,{class:`${i}-dropdown-menu-wrapper`},e?t(C,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:_,option:n}):_}}),se=u({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return t(a,null,t(re,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:Q(i)?t(Y,{clsPrefix:r,key:e.key}):e.isGroup?(w(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):t($,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),ce=u({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:n}}=this.tmNode;return t(`div`,n,[e?.()])}}),le=u({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(t){let{renderIconRef:n,childrenFieldRef:r}=p(q);l(K,{showIconRef:e(()=>{let e=n.value;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>e?e(t):t.icon);let{rawNode:n}=t;return e?e(n):n.icon})}),hasSubmenuRef:e(()=>{let{value:e}=r;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>Z(t,e));let{rawNode:n}=t;return Z(n,e)})})});let i=S(null);return l(H,null),l(U,null),l(W,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:n,scrollable:r}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:oe(a)?t(ce,{tmNode:i,key:i.key}):Q(a)?t(Y,{clsPrefix:n,key:i.key}):ae(a)?t(se,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):t($,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:r})});return t(`div`,{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:`bodyRef`},r?t(v,{contentClass:`${n}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?D({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ue=m(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[z(),m(`dropdown-option`,`
 position: relative;
 `,[n(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[n(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[n(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),o(`disabled`,[h(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[f(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),n(`&::before`,`background-color: var(--n-option-color-hover);`)]),h(`active`,`
 color: var(--n-option-text-color-active);
 `,[f(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),n(`&::before`,`background-color: var(--n-option-color-active);`)]),h(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[f(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),h(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),h(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[f(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[h(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),f(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[h(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),m(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),f(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),f(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[h(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),m(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),m(`dropdown-menu`,`pointer-events: all;`)]),m(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),m(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),m(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),n(`>`,[m(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),o(`scrollable`,`
 padding: var(--n-padding);
 `),h(`scrollable`,[f(`content`,`
 padding: var(--n-padding);
 `)])]),de={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},fe=Object.keys(A),pe=u({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},A),de),i.props),setup(t){let n=S(!1),a=P(y(t,`show`),n),o=e(()=>{let{keyField:e,childrenField:n}=t;return j(t.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),s=e(()=>o.value.treeNodes),u=S(null),d=S(null),f=S(null),p=e(()=>u.value??d.value??f.value??null),m=e(()=>o.value.getPath(p.value).keyPath),h=e(()=>o.value.getPath(t.value).keyPath),v=r(()=>t.keyboard&&a.value);F({keydown:{ArrowUp:{prevent:!0,handler:L},ArrowRight:{prevent:!0,handler:I},ArrowDown:{prevent:!0,handler:R},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:z},Escape:M}},v);let{mergedClsPrefixRef:C,inlineThemeDisabled:w,mergedComponentPropsRef:T}=_(t),E=e(()=>t.size||T?.value?.Dropdown?.size||`medium`),D=i(`Dropdown`,`-dropdown`,ue,ee,t,C);l(q,{labelFieldRef:y(t,`labelField`),childrenFieldRef:y(t,`childrenField`),renderLabelRef:y(t,`renderLabel`),renderIconRef:y(t,`renderIcon`),hoverKeyRef:u,keyboardKeyRef:d,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:m,activeKeyPathRef:h,animatedRef:y(t,`animated`),mergedShowRef:a,nodePropsRef:y(t,`nodeProps`),renderOptionRef:y(t,`renderOption`),menuPropsRef:y(t,`menuProps`),doSelect:O,doUpdateShow:k}),b(a,e=>{!t.animated&&!e&&A()});function O(e,n){let{onSelect:r}=t;r&&g(r,e,n)}function k(e){let{"onUpdate:show":r,onUpdateShow:i}=t;r&&g(r,e),i&&g(i,e),n.value=e}function A(){u.value=null,d.value=null,f.value=null}function M(){k(!1)}function N(){V(`left`)}function I(){V(`right`)}function L(){V(`up`)}function R(){V(`down`)}function z(){let e=B();e?.isLeaf&&a.value&&(O(e.key,e.rawNode),k(!1))}function B(){let{value:e}=o,{value:t}=p;return!e||t===null?null:e.getNode(t)??null}function V(e){let{value:t}=p,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=B();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(u.value=null,d.value=r)}let H=e(()=>{let{inverted:e}=t,n=E.value,{common:{cubicBezierEaseInOut:r},self:i}=D.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:l,[c(`optionIconSuffixWidth`,n)]:u,[c(`optionSuffixWidth`,n)]:d,[c(`optionIconPrefixWidth`,n)]:f,[c(`optionPrefixWidth`,n)]:p,[c(`fontSize`,n)]:m,[c(`optionHeight`,n)]:h,[c(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":a,"--n-border-radius":s,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":o,"--n-option-opacity-disabled":l};return e?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),U=w?x(`dropdown`,e(()=>`${E.value[0]}${t.inverted?`i`:``}`),H,t):void 0;return{mergedClsPrefix:C,mergedTheme:D,mergedSize:E,tmNodes:s,mergedShow:a,handleAfterLeave:()=>{t.animated&&A()},doUpdateShow:k,cssVars:w?void 0:H,themeClass:U?.themeClass,onRender:U?.onRender}},render(){let e=(e,n,r,i,a)=>{var o;let{mergedClsPrefix:c,menuProps:l}=this;(o=this.onRender)==null||o.call(this);let u=l?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:I(n),class:[e,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return t(le,s(this.$attrs,d,u))},{mergedTheme:n}=this,r={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return t(N,Object.assign({},L(this.$props,fe),r),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{G as i,X as n,ne as r,pe as t};