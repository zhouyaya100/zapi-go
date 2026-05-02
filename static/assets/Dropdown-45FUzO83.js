import{An as e,Bn as t,Bt as n,En as r,Et as i,Gt as a,Hn as o,Ht as s,Qn as c,Rn as l,T as u,Ut as d,Vn as f,Wt as p,f as m,gt as h,ot as g,pr as _,rr as v,st as y,ur as b,vt as x,wt as S,yn as C,zt as w}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{S as T,_ as E,a as D,d as O,g as k,i as A,o as j,p as M,r as N}from"./Tag-ajo8I_4T.js";import{c as P}from"./useI18n-Bw8dRrjR.js";import{t as F}from"./use-keyboard-CNeLnAiu.js";import{t as I}from"./create-ref-setter-BZkUGfTm.js";import{F as L,K as R,S as ee,U as z,_ as B,it as V,nt as H,rt as U,x as te}from"./index-BqSDc86C.js";function ne(e,t,n){if(!t)return e;let r=b(e.value),i=null;return v(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}var W=l({name:`ChevronRight`,render(){return t(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},t(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),re=l({name:`Tooltip`,props:Object.assign(Object.assign({},A),u.props),slots:Object,__popover__:!0,setup(t){let{mergedClsPrefixRef:n}=y(t),r=u(`Tooltip`,`-tooltip`,void 0,te,t,n),i=b(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(e){i.value.setShow(e)}}),{popoverRef:i,mergedTheme:r,popoverThemeOverrides:e(()=>r.value.self)})},render(){let{mergedTheme:e,internalExtraClass:n}=this;return t(N,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),G=S(`n-dropdown-menu`),K=S(`n-dropdown`),q=S(`n-dropdown-option`),J=l({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return t(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),ie=l({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=f(G),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=f(K);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:n,showIcon:r,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=t(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),t(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},t(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,r&&`${e}-dropdown-option-body__prefix--show-icon`]},z(s.icon)),t(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):z(s.title??s[this.labelField])),t(`div`,{class:[`${e}-dropdown-option-body__suffix`,n&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}}),ae=n(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[d(`color-transition`,{transition:`color .3s var(--n-bezier)`}),d(`depth`,{color:`var(--n-color)`},[w(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),w(`svg`,{height:`1em`,width:`1em`})]),Y=l({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},u.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=y(t),i=u(`Icon`,`-icon`,ae,B,t,n),a=e(()=>{let{depth:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=i.value;if(e!==void 0){let{color:t,[`opacity${e}Depth`]:i}=r;return{"--n-bezier":n,"--n-color":t,"--n-opacity":i}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=r?g(`icon`,e(()=>`${t.depth||`d`}`),a,t):void 0;return{mergedClsPrefix:n,mergedStyle:e(()=>{let{size:e,color:n}=t;return{fontSize:O(e),color:n}}),cssVars:r?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:n,mergedClsPrefix:r,component:i,onRender:a,themeClass:s}=this;return e?.$options?._n_icon__&&x(`icon`,"don't wrap `n-icon` inside `n-icon`"),a?.(),t(`i`,o(this.$attrs,{role:`img`,class:[`${r}-icon`,s,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?t(i):this.$slots)}});function X(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function oe(e){return e.type===`group`}function Z(e){return e.type===`divider`}function se(e){return e.type===`render`}var Q=l({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(t){let n=f(K),{hoverKeyRef:r,keyboardKeyRef:a,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:s,activeKeyPathRef:l,animatedRef:u,mergedShowRef:d,renderLabelRef:p,renderIconRef:m,labelFieldRef:h,childrenFieldRef:g,renderOptionRef:_,nodePropsRef:v,menuPropsRef:y}=n,x=f(q,null),S=f(G),C=f(H),w=e(()=>t.tmNode.rawNode),E=e(()=>{let{value:e}=g;return X(t.tmNode.rawNode,e)}),D=e(()=>{let{disabled:e}=t.tmNode;return e}),O=ne(e(()=>{if(!E.value)return!1;let{key:e,disabled:n}=t.tmNode;if(n)return!1;let{value:i}=r,{value:c}=a,{value:l}=o,{value:u}=s;return i===null?c===null?l===null?!1:u.includes(e):u.includes(e)&&u[u.length-1]!==e:u.includes(e)}),300,e(()=>a.value===null&&!u.value)),k=e(()=>!!x?.enteringSubmenuRef.value),A=b(!1);c(q,{enteringSubmenuRef:A});function j(){A.value=!0}function M(){A.value=!1}function N(){let{parentKey:e,tmNode:n}=t;n.disabled||d.value&&(o.value=e,a.value=null,r.value=n.key)}function P(){let{tmNode:e}=t;e.disabled||d.value&&r.value!==e.key&&N()}function F(e){if(t.tmNode.disabled||!d.value)return;let{relatedTarget:n}=e;n&&!T({target:n},`dropdownOption`)&&!T({target:n},`scrollbarRail`)&&(r.value=null)}function I(){let{value:e}=E,{tmNode:r}=t;d.value&&!e&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:p,renderIcon:m,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:y,popoverBody:C,animated:u,mergedShowSubmenu:e(()=>O.value&&!k.value),rawNode:w,hasSubmenu:E,pending:i(()=>{let{value:e}=s,{key:n}=t.tmNode;return e.includes(n)}),childActive:i(()=>{let{value:e}=l,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r<e.length-1}),active:i(()=>{let{value:e}=l,{key:n}=t.tmNode,r=e.findIndex(e=>n===e);return r===-1?!1:r===e.length-1}),mergedDisabled:D,renderOption:_,nodeProps:v,handleClick:I,handleMouseMove:P,handleMouseEnter:N,handleMouseLeave:F,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:M}},render(){let{animated:e,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:p}=this,m=null;if(r){let e=this.menuProps?.call(this,n,n.children);m=t($,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(n),_=t(`div`,Object.assign({class:[`${i}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),t(`div`,o(h,f),[t(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[l?l(n):z(n.icon)]),t(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},c?c(n):z(n[this.labelField]??n.title)),t(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?t(Y,null,{default:()=>t(W,null)}):null)]),this.hasSubmenu?t(E,null,{default:()=>[t(k,null,{default:()=>t(`div`,{class:`${i}-dropdown-offset-container`},t(M,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>t(`div`,{class:`${i}-dropdown-menu-wrapper`},e?t(C,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:_,option:n}):_}}),ce=l({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:a}=e;return t(r,null,t(ie,{clsPrefix:i,tmNode:e,key:e.key}),a?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Z(r)?t(J,{clsPrefix:i,key:e.key}):e.isGroup?(x(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):t(Q,{clsPrefix:i,tmNode:e,parentKey:n,key:e.key})}))}}),le=l({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:n}}=this.tmNode;return t(`div`,n,[e?.()])}}),$=l({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(t){let{renderIconRef:n,childrenFieldRef:r}=f(K);c(G,{showIconRef:e(()=>{let e=n.value;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>e?e(t):t.icon);let{rawNode:n}=t;return e?e(n):n.icon})}),hasSubmenuRef:e(()=>{let{value:e}=r;return t.tmNodes.some(t=>{if(t.isGroup)return t.children?.some(({rawNode:t})=>X(t,e));let{rawNode:n}=t;return X(n,e)})})});let i=b(null);return c(U,null),c(V,null),c(H,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:n,scrollable:r}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:se(a)?t(le,{tmNode:i,key:i.key}):Z(a)?t(J,{clsPrefix:n,key:i.key}):oe(a)?t(ce,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):t(Q,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:r})});return t(`div`,{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:`bodyRef`},r?t(m,{contentClass:`${n}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?D({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ue=n(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[L(),n(`dropdown-option`,`
 position: relative;
 `,[w(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[w(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),n(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[w(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),p(`disabled`,[d(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),w(`&::before`,`background-color: var(--n-option-color-hover);`)]),d(`active`,`
 color: var(--n-option-text-color-active);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),w(`&::before`,`background-color: var(--n-option-color-active);`)]),d(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[s(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),d(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),d(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[s(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[d(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),s(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[d(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),n(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),s(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),s(`suffix`,`
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
 `,[d(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),n(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),n(`dropdown-menu`,`pointer-events: all;`)]),n(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),n(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),n(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),w(`>`,[n(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),p(`scrollable`,`
 padding: var(--n-padding);
 `),d(`scrollable`,[s(`content`,`
 padding: var(--n-padding);
 `)])]),de={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},fe=Object.keys(A),pe=l({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},A),de),u.props),setup(t){let n=b(!1),r=P(_(t,`show`),n),o=e(()=>{let{keyField:e,childrenField:n}=t;return j(t.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),s=e(()=>o.value.treeNodes),l=b(null),d=b(null),f=b(null),p=e(()=>l.value??d.value??f.value??null),m=e(()=>o.value.getPath(p.value).keyPath),x=e(()=>o.value.getPath(t.value).keyPath),S=i(()=>t.keyboard&&r.value);F({keydown:{ArrowUp:{prevent:!0,handler:L},ArrowRight:{prevent:!0,handler:I},ArrowDown:{prevent:!0,handler:R},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:z},Escape:M}},S);let{mergedClsPrefixRef:C,inlineThemeDisabled:w,mergedComponentPropsRef:T}=y(t),E=e(()=>t.size||T?.value?.Dropdown?.size||`medium`),D=u(`Dropdown`,`-dropdown`,ue,ee,t,C);c(K,{labelFieldRef:_(t,`labelField`),childrenFieldRef:_(t,`childrenField`),renderLabelRef:_(t,`renderLabel`),renderIconRef:_(t,`renderIcon`),hoverKeyRef:l,keyboardKeyRef:d,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:m,activeKeyPathRef:x,animatedRef:_(t,`animated`),mergedShowRef:r,nodePropsRef:_(t,`nodeProps`),renderOptionRef:_(t,`renderOption`),menuPropsRef:_(t,`menuProps`),doSelect:O,doUpdateShow:k}),v(r,e=>{!t.animated&&!e&&A()});function O(e,n){let{onSelect:r}=t;r&&h(r,e,n)}function k(e){let{"onUpdate:show":r,onUpdateShow:i}=t;r&&h(r,e),i&&h(i,e),n.value=e}function A(){l.value=null,d.value=null,f.value=null}function M(){k(!1)}function N(){V(`left`)}function I(){V(`right`)}function L(){V(`up`)}function R(){V(`down`)}function z(){let e=B();e?.isLeaf&&r.value&&(O(e.key,e.rawNode),k(!1))}function B(){let{value:e}=o,{value:t}=p;return!e||t===null?null:e.getNode(t)??null}function V(e){let{value:t}=p,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=B();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(l.value=null,d.value=r)}let H=e(()=>{let{inverted:e}=t,n=E.value,{common:{cubicBezierEaseInOut:r},self:i}=D.value,{padding:o,dividerColor:s,borderRadius:c,optionOpacityDisabled:l,[a(`optionIconSuffixWidth`,n)]:u,[a(`optionSuffixWidth`,n)]:d,[a(`optionIconPrefixWidth`,n)]:f,[a(`optionPrefixWidth`,n)]:p,[a(`fontSize`,n)]:m,[a(`optionHeight`,n)]:h,[a(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":o,"--n-border-radius":c,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":f,"--n-option-suffix-width":d,"--n-option-icon-suffix-width":u,"--n-option-icon-size":g,"--n-divider-color":s,"--n-option-opacity-disabled":l};return e?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),U=w?g(`dropdown`,e(()=>`${E.value[0]}${t.inverted?`i`:``}`),H,t):void 0;return{mergedClsPrefix:C,mergedTheme:D,mergedSize:E,tmNodes:s,mergedShow:r,handleAfterLeave:()=>{t.animated&&A()},doUpdateShow:k,cssVars:w?void 0:H,themeClass:U?.themeClass,onRender:U?.onRender}},render(){let e=(e,n,r,i,a)=>{var s;let{mergedClsPrefix:c,menuProps:l}=this;(s=this.onRender)==null||s.call(this);let u=l?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:I(n),class:[e,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return t($,o(this.$attrs,d,u))},{mergedTheme:n}=this,r={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return t(N,Object.assign({},R(this.$props,fe),r),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{W as i,Y as n,re as r,pe as t};