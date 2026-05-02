import{An as e,Bn as t,Bt as n,C as r,Dt as i,E as a,En as o,Et as s,Gt as c,Hn as l,Ht as u,It as d,Kn as f,Kt as p,Nt as m,O as h,Ot as g,Qn as _,Rn as v,S as y,T as b,Ut as x,Vn as S,Wt as C,Xn as w,_ as T,b as E,bt as D,ct as O,d as k,gt as A,ir as j,k as M,lt as N,n as P,ot as F,pr as I,pt as L,qn as R,qt as z,rr as B,st as V,ur as H,vt as ee,wt as U,yn as W,zt as G}from"./_plugin-vue_export-helper-CBCb2oTf.js";import{C as K,S as te,c as q,d as J,o as ne,r as re}from"./Tag-ajo8I_4T.js";import{a as ie,c as Y,i as ae}from"./useI18n-Bw8dRrjR.js";import{i as oe,r as se,t as ce}from"./Dropdown-45FUzO83.js";import{a as X,l as Z,o as le,p as ue}from"./SkeletonLoader-BLFHI9cw.js";import{n as de,t as fe}from"./Pagination-DvQtr6ew.js";import{n as pe,t as me}from"./RadioGroup-DI9DAy1B.js";import{F as he,b as ge,ct as _e,st as ve,v as ye}from"./index-BqSDc86C.js";function be(e,t){if(!e)return;let n=document.createElement(`a`);n.href=e,t!==void 0&&(n.download=t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}var xe=v({name:`ArrowDown`,render(){return t(`svg`,{viewBox:`0 0 28 28`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},t(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},t(`g`,{"fill-rule":`nonzero`},t(`path`,{d:`M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z`}))))}}),Se=v({name:`Filter`,render(){return t(`svg`,{viewBox:`0 0 28 28`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},t(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},t(`g`,{"fill-rule":`nonzero`},t(`path`,{d:`M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z`}))))}}),Ce=Object.assign(Object.assign({},b.props),{onUnstableColumnResize:Function,pagination:{type:[Object,Boolean],default:!1},paginateSinglePage:{type:Boolean,default:!0},minHeight:[Number,String],maxHeight:[Number,String],columns:{type:Array,default:()=>[]},rowClassName:[String,Function],rowProps:Function,rowKey:Function,summary:[Function],data:{type:Array,default:()=>[]},loading:Boolean,bordered:{type:Boolean,default:void 0},bottomBordered:{type:Boolean,default:void 0},striped:Boolean,scrollX:[Number,String],defaultCheckedRowKeys:{type:Array,default:()=>[]},checkedRowKeys:Array,singleLine:{type:Boolean,default:!0},singleColumn:Boolean,size:String,remote:Boolean,defaultExpandedRowKeys:{type:Array,default:[]},defaultExpandAll:Boolean,expandedRowKeys:Array,stickyExpandedRows:Boolean,virtualScroll:Boolean,virtualScrollX:Boolean,virtualScrollHeader:Boolean,headerHeight:{type:Number,default:28},heightForRow:Function,minRowHeight:{type:Number,default:28},tableLayout:{type:String,default:`auto`},allowCheckingNotLoaded:Boolean,cascade:{type:Boolean,default:!0},childrenKey:{type:String,default:`children`},indent:{type:Number,default:16},flexHeight:Boolean,summaryPlacement:{type:String,default:`bottom`},paginationBehaviorOnFilter:{type:String,default:`current`},filterIconPopoverProps:Object,scrollbarProps:Object,renderCell:Function,renderExpandIcon:Function,spinProps:Object,getCsvCell:Function,getCsvHeader:Function,onLoad:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],"onUpdate:sorter":[Function,Array],onUpdateSorter:[Function,Array],"onUpdate:filters":[Function,Array],onUpdateFilters:[Function,Array],"onUpdate:checkedRowKeys":[Function,Array],onUpdateCheckedRowKeys:[Function,Array],"onUpdate:expandedRowKeys":[Function,Array],onUpdateExpandedRowKeys:[Function,Array],onScroll:Function,onPageChange:[Function,Array],onPageSizeChange:[Function,Array],onSorterChange:[Function,Array],onFiltersChange:[Function,Array],onCheckedRowKeysChange:[Function,Array]}),Q=U(`n-data-table`);function we(e){if(e.type===`selection`||e.type===`expand`)return e.width===void 0?40:m(e.width);if(!(`children`in e))return typeof e.width==`string`?m(e.width):e.width}function Te(e){if(e.type===`selection`||e.type===`expand`)return J(e.width??40);if(!(`children`in e))return J(e.width)}function $(e){return e.type===`selection`?`__n_selection__`:e.type===`expand`?`__n_expand__`:e.key}function Ee(e){return e&&(typeof e==`object`?Object.assign({},e):e)}function De(e){return e===`ascend`?1:e===`descend`?-1:0}function Oe(e,t,n){return n!==void 0&&(e=Math.min(e,typeof n==`number`?n:Number.parseFloat(n))),t!==void 0&&(e=Math.max(e,typeof t==`number`?t:Number.parseFloat(t))),e}function ke(e,t){if(t!==void 0)return{width:t,minWidth:t,maxWidth:t};let n=Te(e),{minWidth:r,maxWidth:i}=e;return{width:n,minWidth:J(r)||n,maxWidth:J(i)}}function Ae(e,t,n){return typeof n==`function`?n(e,t):n||``}function je(e){return e.filterOptionValues!==void 0||e.filterOptionValue===void 0&&e.defaultFilterOptionValues!==void 0}function Me(e){return`children`in e?!1:!!e.sorter}function Ne(e){return`children`in e&&e.children.length?!1:!!e.resizable}function Pe(e){return`children`in e?!1:!!e.filter&&(!!e.filterOptions||!!e.renderFilterMenu)}function Fe(e){return e?e===`descend`?`ascend`:!1:`descend`}function Ie(e,t){if(e.sorter===void 0)return null;let{customNextSortOrder:n}=e;return t===null||t.columnKey!==e.key?{columnKey:e.key,sorter:e.sorter,order:Fe(!1)}:Object.assign(Object.assign({},t),{order:(n||Fe)(t.order)})}function Le(e,t){return t.find(t=>t.columnKey===e.key&&t.order)!==void 0}function Re(e){return typeof e==`string`?e.replace(/,/g,`\\,`):e==null?``:`${e}`.replace(/,/g,`\\,`)}function ze(e,t,n,r){let i=e.filter(e=>e.type!==`expand`&&e.type!==`selection`&&e.allowExport!==!1);return[i.map(e=>r?r(e):e.title).join(`,`),...t.map(e=>i.map(t=>n?n(e[t.key],e,t):Re(e[t.key])).join(`,`))].join(`
`)}var Be=v({name:`DataTableBodyCheckbox`,props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(e){let{mergedCheckedRowKeySetRef:n,mergedInderminateRowKeySetRef:r}=S(Q);return()=>{let{rowKey:i}=e;return t(X,{privateInsideTable:!0,disabled:e.disabled,indeterminate:r.value.has(i),checked:n.value.has(i),onUpdateChecked:e.onUpdateChecked})}}}),Ve=v({name:`DataTableBodyRadio`,props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(e){let{mergedCheckedRowKeySetRef:n,componentId:r}=S(Q);return()=>{let{rowKey:i}=e;return t(pe,{name:r,disabled:e.disabled,checked:n.value.has(i),onUpdateChecked:e.onUpdateChecked})}}}),He=n(`ellipsis`,{overflow:`hidden`},[C(`line-clamp`,`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),x(`line-clamp`,`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),x(`cursor-pointer`,`
 cursor: pointer;
 `)]);function Ue(e){return`${e}-ellipsis--line-clamp`}function We(e,t){return`${e}-ellipsis--cursor-${t}`}var Ge=Object.assign(Object.assign({},b.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Ke=v({name:`Ellipsis`,inheritAttrs:!1,props:Ge,slots:Object,setup(n,{slots:r,attrs:i}){let a=O(),o=b(`Ellipsis`,`-ellipsis`,He,ge,n,a),s=H(null),c=H(null),u=H(null),d=H(!1),f=e(()=>{let{lineClamp:e}=n,{value:t}=d;return e===void 0?{textOverflow:t?``:`ellipsis`,"-webkit-line-clamp":``}:{textOverflow:``,"-webkit-line-clamp":t?``:e}});function p(){let e=!1,{value:t}=d;if(t)return!0;let{value:r}=s;if(r){let{lineClamp:t}=n;if(g(r),t!==void 0)e=r.scrollHeight<=r.offsetHeight;else{let{value:t}=c;t&&(e=t.getBoundingClientRect().width<=r.getBoundingClientRect().width)}_(r,e)}return e}let m=e(()=>n.expandTrigger===`click`?()=>{var e;let{value:t}=d;t&&((e=u.value)==null||e.setShow(!1)),d.value=!t}:void 0);R(()=>{var e;n.tooltip&&((e=u.value)==null||e.setShow(!1))});let h=()=>t(`span`,Object.assign({},l(i,{class:[`${a.value}-ellipsis`,n.lineClamp===void 0?void 0:Ue(a.value),n.expandTrigger===`click`?We(a.value,`pointer`):void 0],style:f.value}),{ref:`triggerRef`,onClick:m.value,onMouseenter:n.expandTrigger===`click`?p:void 0}),n.lineClamp?r:t(`span`,{ref:`triggerInnerRef`},r));function g(e){if(!e)return;let t=f.value,r=Ue(a.value);n.lineClamp===void 0?v(e,r,`remove`):v(e,r,`add`);for(let n in t)e.style[n]!==t[n]&&(e.style[n]=t[n])}function _(e,t){let r=We(a.value,`pointer`);n.expandTrigger===`click`&&!t?v(e,r,`add`):v(e,r,`remove`)}function v(e,t,n){n===`add`?e.classList.contains(t)||e.classList.add(t):e.classList.contains(t)&&e.classList.remove(t)}return{mergedTheme:o,triggerRef:s,triggerInnerRef:c,tooltipRef:u,handleClick:m,renderTrigger:h,getTooltipDisabled:p}},render(){let{tooltip:e,renderTrigger:n,$slots:r}=this;if(e){let{mergedTheme:i}=this;return t(se,Object.assign({ref:`tooltipRef`,placement:`top`},e,{getDisabled:this.getTooltipDisabled,theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip}),{trigger:n,default:r.tooltip??r.default})}else return n()}}),qe=v({name:`PerformantEllipsis`,props:Ge,inheritAttrs:!1,setup(e,{attrs:n,slots:r}){let i=H(!1),o=O();return a(`-ellipsis`,He,o),{mouseEntered:i,renderTrigger:()=>{let{lineClamp:a}=e,s=o.value;return t(`span`,Object.assign({},l(n,{class:[`${s}-ellipsis`,a===void 0?void 0:Ue(s),e.expandTrigger===`click`?We(s,`pointer`):void 0],style:a===void 0?{textOverflow:`ellipsis`}:{"-webkit-line-clamp":a}}),{onMouseenter:()=>{i.value=!0}}),a?r:t(`span`,null,r))}}},render(){return this.mouseEntered?t(Ke,l({},this.$attrs,this.$props),this.$slots):this.renderTrigger()}}),Je=v({name:`DataTableCell`,props:{clsPrefix:{type:String,required:!0},row:{type:Object,required:!0},index:{type:Number,required:!0},column:{type:Object,required:!0},isSummary:Boolean,mergedTheme:{type:Object,required:!0},renderCell:Function},render(){let{isSummary:e,column:n,row:r,renderCell:i}=this,a,{render:o,key:s,ellipsis:c}=n;if(a=o&&!e?o(r,this.index):e?r[s]?.value:i?i(q(r,s),r,n):q(r,s),c)if(typeof c==`object`){let{mergedTheme:e}=this;return n.ellipsisComponent===`performant-ellipsis`?t(qe,Object.assign({},c,{theme:e.peers.Ellipsis,themeOverrides:e.peerOverrides.Ellipsis}),{default:()=>a}):t(Ke,Object.assign({},c,{theme:e.peers.Ellipsis,themeOverrides:e.peerOverrides.Ellipsis}),{default:()=>a})}else return t(`span`,{class:`${this.clsPrefix}-data-table-td__ellipsis`},a);return a}}),Ye=v({name:`DataTableExpandTrigger`,props:{clsPrefix:{type:String,required:!0},expanded:Boolean,loading:Boolean,onClick:{type:Function,required:!0},renderExpandIcon:{type:Function},rowData:{type:Object,required:!0}},render(){let{clsPrefix:e}=this;return t(`div`,{class:[`${e}-data-table-expand-trigger`,this.expanded&&`${e}-data-table-expand-trigger--expanded`],onClick:this.onClick,onMousedown:e=>{e.preventDefault()}},t(y,null,{default:()=>this.loading?t(T,{key:`loading`,clsPrefix:this.clsPrefix,radius:85,strokeWidth:15,scale:.88}):this.renderExpandIcon?this.renderExpandIcon({expanded:this.expanded,rowData:this.rowData}):t(r,{clsPrefix:e,key:`base-icon`},{default:()=>t(oe,null)})}))}}),Xe=v({name:`DataTableFilterMenu`,props:{column:{type:Object,required:!0},radioGroupName:{type:String,required:!0},multiple:{type:Boolean,required:!0},value:{type:[Array,String,Number],default:null},options:{type:Array,required:!0},onConfirm:{type:Function,required:!0},onClear:{type:Function,required:!0},onChange:{type:Function,required:!0}},setup(t){let{mergedClsPrefixRef:n,mergedRtlRef:r}=V(t),i=h(`DataTable`,r,n),{mergedClsPrefixRef:a,mergedThemeRef:o,localeRef:s}=S(Q),c=H(t.value),l=e(()=>{let{value:e}=c;return Array.isArray(e)?e:null}),u=e(()=>{let{value:e}=c;return je(t.column)?Array.isArray(e)&&e.length&&e[0]||null:Array.isArray(e)?null:e});function d(e){t.onChange(e)}function f(e){t.multiple&&Array.isArray(e)?c.value=e:je(t.column)&&!Array.isArray(e)?c.value=[e]:c.value=e}function p(){d(c.value),t.onConfirm()}function m(){t.multiple||je(t.column)?d([]):d(null),t.onClear()}return{mergedClsPrefix:a,rtlEnabled:i,mergedTheme:o,locale:s,checkboxGroupValue:l,radioGroupValue:u,handleChange:f,handleConfirmClick:p,handleClearClick:m}},render(){let{mergedTheme:e,locale:n,mergedClsPrefix:r}=this;return t(`div`,{class:[`${r}-data-table-filter-menu`,this.rtlEnabled&&`${r}-data-table-filter-menu--rtl`]},t(k,null,{default:()=>{let{checkboxGroupValue:n,handleChange:i}=this;return this.multiple?t(le,{value:n,class:`${r}-data-table-filter-menu__group`,onUpdateValue:i},{default:()=>this.options.map(n=>t(X,{key:n.value,theme:e.peers.Checkbox,themeOverrides:e.peerOverrides.Checkbox,value:n.value},{default:()=>n.label}))}):t(me,{name:this.radioGroupName,class:`${r}-data-table-filter-menu__group`,value:this.radioGroupValue,onUpdateValue:this.handleChange},{default:()=>this.options.map(n=>t(pe,{key:n.value,value:n.value,theme:e.peers.Radio,themeOverrides:e.peerOverrides.Radio},{default:()=>n.label}))})}}),t(`div`,{class:`${r}-data-table-filter-menu__action`},t(P,{size:`tiny`,theme:e.peers.Button,themeOverrides:e.peerOverrides.Button,onClick:this.handleClearClick},{default:()=>n.clear}),t(P,{theme:e.peers.Button,themeOverrides:e.peerOverrides.Button,type:`primary`,size:`tiny`,onClick:this.handleConfirmClick},{default:()=>n.confirm})))}}),Ze=v({name:`DataTableRenderFilter`,props:{render:{type:Function,required:!0},active:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},render(){let{render:e,active:t,show:n}=this;return e({active:t,show:n})}});function Qe(e,t,n){let r=Object.assign({},e);return r[t]=n,r}var $e=v({name:`DataTableFilterButton`,props:{column:{type:Object,required:!0},options:{type:Array,default:()=>[]}},setup(t){let{mergedComponentPropsRef:n}=V(),{mergedThemeRef:r,mergedClsPrefixRef:i,mergedFilterStateRef:a,filterMenuCssVarsRef:o,paginationBehaviorOnFilterRef:s,doUpdatePage:c,doUpdateFilters:l,filterIconPopoverPropsRef:u}=S(Q),d=H(!1),f=a,p=e(()=>t.column.filterMultiple!==!1),m=e(()=>{let e=f.value[t.column.key];if(e===void 0){let{value:e}=p;return e?[]:null}return e}),h=e(()=>{let{value:e}=m;return Array.isArray(e)?e.length>0:e!==null}),g=e(()=>n?.value?.DataTable?.renderFilter||t.column.renderFilter);function _(e){l(Qe(f.value,t.column.key,e),t.column),s.value===`first`&&c(1)}function v(){d.value=!1}function y(){d.value=!1}return{mergedTheme:r,mergedClsPrefix:i,active:h,showPopover:d,mergedRenderFilter:g,filterIconPopoverProps:u,filterMultiple:p,mergedFilterValue:m,filterMenuCssVars:o,handleFilterChange:_,handleFilterMenuConfirm:y,handleFilterMenuCancel:v}},render(){let{mergedTheme:e,mergedClsPrefix:n,handleFilterMenuCancel:i,filterIconPopoverProps:a}=this;return t(re,Object.assign({show:this.showPopover,onUpdateShow:e=>this.showPopover=e,trigger:`click`,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,placement:`bottom`},a,{style:{padding:0}}),{trigger:()=>{let{mergedRenderFilter:e}=this;if(e)return t(Ze,{"data-data-table-filter":!0,render:e,active:this.active,show:this.showPopover});let{renderFilterIcon:i}=this.column;return t(`div`,{"data-data-table-filter":!0,class:[`${n}-data-table-filter`,{[`${n}-data-table-filter--active`]:this.active,[`${n}-data-table-filter--show`]:this.showPopover}]},i?i({active:this.active,show:this.showPopover}):t(r,{clsPrefix:n},{default:()=>t(Se,null)}))},default:()=>{let{renderFilterMenu:e}=this.column;return e?e({hide:i}):t(Xe,{style:this.filterMenuCssVars,radioGroupName:String(this.column.key),multiple:this.filterMultiple,value:this.mergedFilterValue,options:this.options,column:this.column,onChange:this.handleFilterChange,onClear:this.handleFilterMenuCancel,onConfirm:this.handleFilterMenuConfirm})}})}}),et=v({name:`ColumnResizeButton`,props:{onResizeStart:Function,onResize:Function,onResizeEnd:Function},setup(e){let{mergedClsPrefixRef:t}=S(Q),n=H(!1),r=0;function a(e){return e.clientX}function o(t){var i;t.preventDefault();let o=n.value;r=a(t),n.value=!0,o||(g(`mousemove`,window,s),g(`mouseup`,window,c),(i=e.onResizeStart)==null||i.call(e))}function s(t){var n;(n=e.onResize)==null||n.call(e,a(t)-r)}function c(){var t;n.value=!1,(t=e.onResizeEnd)==null||t.call(e),i(`mousemove`,window,s),i(`mouseup`,window,c)}return f(()=>{i(`mousemove`,window,s),i(`mouseup`,window,c)}),{mergedClsPrefix:t,active:n,handleMousedown:o}},render(){let{mergedClsPrefix:e}=this;return t(`span`,{"data-data-table-resizable":!0,class:[`${e}-data-table-resize-button`,this.active&&`${e}-data-table-resize-button--active`],onMousedown:this.handleMousedown})}}),tt=v({name:`DataTableRenderSorter`,props:{render:{type:Function,required:!0},order:{type:[String,Boolean],default:!1}},render(){let{render:e,order:t}=this;return e({order:t})}}),nt=v({name:`SortIcon`,props:{column:{type:Object,required:!0}},setup(t){let{mergedComponentPropsRef:n}=V(),{mergedSortStateRef:r,mergedClsPrefixRef:i}=S(Q),a=e(()=>r.value.find(e=>e.columnKey===t.column.key)),o=e(()=>a.value!==void 0);return{mergedClsPrefix:i,active:o,mergedSortOrder:e(()=>{let{value:e}=a;return e&&o.value?e.order:!1}),mergedRenderSorter:e(()=>n?.value?.DataTable?.renderSorter||t.column.renderSorter)}},render(){let{mergedRenderSorter:e,mergedSortOrder:n,mergedClsPrefix:i}=this,{renderSorterIcon:a}=this.column;return e?t(tt,{render:e,order:n}):t(`span`,{class:[`${i}-data-table-sorter`,n===`ascend`&&`${i}-data-table-sorter--asc`,n===`descend`&&`${i}-data-table-sorter--desc`]},a?a({order:n}):t(r,{clsPrefix:i},{default:()=>t(xe,null)}))}}),rt=`_n_all__`,it=`_n_none__`;function at(e,t,n,r){return e?i=>{for(let a of e)switch(i){case rt:n(!0);return;case it:r(!0);return;default:if(typeof a==`object`&&a.key===i){a.onSelect(t.value);return}}}:()=>{}}function ot(e,t){return e?e.map(e=>{switch(e){case`all`:return{label:t.checkTableAll,key:rt};case`none`:return{label:t.uncheckTableAll,key:it};default:return e}}):[]}var st=v({name:`DataTableSelectionMenu`,props:{clsPrefix:{type:String,required:!0}},setup(n){let{props:i,localeRef:a,checkOptionsRef:o,rawPaginatedDataRef:s,doCheckAll:c,doUncheckAll:l}=S(Q),u=e(()=>at(o.value,s,c,l)),d=e(()=>ot(o.value,a.value));return()=>{let{clsPrefix:e}=n;return t(ce,{theme:i.theme?.peers?.Dropdown,themeOverrides:i.themeOverrides?.peers?.Dropdown,options:d.value,onSelect:u.value},{default:()=>t(r,{clsPrefix:e,class:`${e}-data-table-check-extra`},{default:()=>t(ae,null)})})}}});function ct(e){return typeof e.title==`function`?e.title(e):e.title}var lt=v({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},width:String},render(){let{clsPrefix:e,id:n,cols:r,width:i}=this;return t(`table`,{style:{tableLayout:`fixed`,width:i},class:`${e}-data-table-table`},t(`colgroup`,null,r.map(e=>t(`col`,{key:e.key,style:e.style}))),t(`thead`,{"data-n-id":n,class:`${e}-data-table-thead`},this.$slots))}}),ut=v({name:`DataTableHeader`,props:{discrete:{type:Boolean,default:!0}},setup(){let{mergedClsPrefixRef:e,scrollXRef:t,fixedColumnLeftMapRef:n,fixedColumnRightMapRef:r,mergedCurrentPageRef:i,allRowsCheckedRef:a,someRowsCheckedRef:o,rowsRef:s,colsRef:c,mergedThemeRef:l,checkOptionsRef:u,mergedSortStateRef:d,componentId:f,mergedTableLayoutRef:p,headerCheckboxDisabledRef:m,virtualScrollHeaderRef:h,headerHeightRef:g,onUnstableColumnResize:_,doUpdateResizableWidth:v,handleTableHeaderScroll:y,deriveNextSorter:b,doUncheckAll:x,doCheckAll:C}=S(Q),w=H(),T=H({});function E(e){return T.value[e]?.getBoundingClientRect().width}function D(){a.value?x():C()}function O(e,t){te(e,`dataTableFilter`)||te(e,`dataTableResizable`)||Me(t)&&b(Ie(t,d.value.find(e=>e.columnKey===t.key)||null))}let k=new Map;function A(e){k.set(e.key,E(e.key))}function j(e,t){let n=k.get(e.key);if(n===void 0)return;let r=n+t,i=Oe(r,e.minWidth,e.maxWidth);_(r,i,e,E),v(e,i)}return{cellElsRef:T,componentId:f,mergedSortState:d,mergedClsPrefix:e,scrollX:t,fixedColumnLeftMap:n,fixedColumnRightMap:r,currentPage:i,allRowsChecked:a,someRowsChecked:o,rows:s,cols:c,mergedTheme:l,checkOptions:u,mergedTableLayout:p,headerCheckboxDisabled:m,headerHeight:g,virtualScrollHeader:h,virtualListRef:w,handleCheckboxUpdateChecked:D,handleColHeaderClick:O,handleTableHeaderScroll:y,handleColumnResizeStart:A,handleColumnResize:j}},render(){let{cellElsRef:e,mergedClsPrefix:n,fixedColumnLeftMap:r,fixedColumnRightMap:i,currentPage:a,allRowsChecked:s,someRowsChecked:c,rows:l,cols:u,mergedTheme:f,checkOptions:p,componentId:m,discrete:h,mergedTableLayout:g,headerCheckboxDisabled:_,mergedSortState:v,virtualScrollHeader:y,handleColHeaderClick:b,handleCheckboxUpdateChecked:x,handleColumnResizeStart:S,handleColumnResize:C}=this,w=!1,T=(l,u,m)=>l.map(({column:l,colIndex:h,colSpan:g,rowSpan:y,isLast:T})=>{let E=$(l),{ellipsis:D}=l;!w&&D&&(w=!0);let O=()=>l.type===`selection`?l.multiple===!1?null:t(o,null,t(X,{key:a,privateInsideTable:!0,checked:s,indeterminate:c,disabled:_,onUpdateChecked:x}),p?t(st,{clsPrefix:n}):null):t(o,null,t(`div`,{class:`${n}-data-table-th__title-wrapper`},t(`div`,{class:`${n}-data-table-th__title`},D===!0||D&&!D.tooltip?t(`div`,{class:`${n}-data-table-th__ellipsis`},ct(l)):D&&typeof D==`object`?t(Ke,Object.assign({},D,{theme:f.peers.Ellipsis,themeOverrides:f.peerOverrides.Ellipsis}),{default:()=>ct(l)}):ct(l)),Me(l)?t(nt,{column:l}):null),Pe(l)?t($e,{column:l,options:l.filterOptions}):null,Ne(l)?t(et,{onResizeStart:()=>{S(l)},onResize:e=>{C(l,e)}}):null),k=E in r,A=E in i;return t(u&&!l.fixed?`div`:`th`,{ref:t=>e[E]=t,key:E,style:[u&&!l.fixed?{position:`absolute`,left:d(u(h)),top:0,bottom:0}:{left:d(r[E]?.start),right:d(i[E]?.start)},{width:d(l.width),textAlign:l.titleAlign||l.align,height:m}],colspan:g,rowspan:y,"data-col-key":E,class:[`${n}-data-table-th`,(k||A)&&`${n}-data-table-th--fixed-${k?`left`:`right`}`,{[`${n}-data-table-th--sorting`]:Le(l,v),[`${n}-data-table-th--filterable`]:Pe(l),[`${n}-data-table-th--sortable`]:Me(l),[`${n}-data-table-th--selection`]:l.type===`selection`,[`${n}-data-table-th--last`]:T},l.className],onClick:l.type!==`selection`&&l.type!==`expand`&&!(`children`in l)?e=>{b(e,l)}:void 0},O())});if(y){let{headerHeight:e}=this,r=0,i=0;return u.forEach(e=>{e.column.fixed===`left`?r++:e.column.fixed===`right`&&i++}),t(ue,{ref:`virtualListRef`,class:`${n}-data-table-base-table-header`,style:{height:d(e)},onScroll:this.handleTableHeaderScroll,columns:u,itemSize:e,showScrollbar:!1,items:[{}],itemResizable:!1,visibleItemsTag:lt,visibleItemsProps:{clsPrefix:n,id:m,cols:u,width:J(this.scrollX)},renderItemWithCols:({startColIndex:n,endColIndex:a,getLeft:o})=>{let s=T(u.map((e,t)=>({column:e.column,isLast:t===u.length-1,colIndex:e.index,colSpan:1,rowSpan:1})).filter(({column:e},t)=>!!(n<=t&&t<=a||e.fixed)),o,d(e));return s.splice(r,0,t(`th`,{colspan:u.length-r-i,style:{pointerEvents:`none`,visibility:`hidden`,height:0}})),t(`tr`,{style:{position:`relative`}},s)}},{default:({renderedItemWithCols:e})=>e})}let E=t(`thead`,{class:`${n}-data-table-thead`,"data-n-id":m},l.map(e=>t(`tr`,{class:`${n}-data-table-tr`},T(e,null,void 0))));if(!h)return E;let{handleTableHeaderScroll:D,scrollX:O}=this;return t(`div`,{class:`${n}-data-table-base-table-header`,onScroll:D},t(`table`,{class:`${n}-data-table-table`,style:{minWidth:J(O),tableLayout:g}},t(`colgroup`,null,u.map(e=>t(`col`,{key:e.key,style:e.style}))),E))}});function dt(e,t){let n=[];function r(e,i){e.forEach(e=>{e.children&&t.has(e.key)?(n.push({tmNode:e,striped:!1,key:e.key,index:i}),r(e.children,i)):n.push({key:e.key,tmNode:e,striped:!1,index:i})})}return e.forEach(e=>{n.push(e);let{children:i}=e.tmNode;i&&t.has(e.key)&&r(i,e.index)}),n}var ft=v({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},onMouseenter:Function,onMouseleave:Function},render(){let{clsPrefix:e,id:n,cols:r,onMouseenter:i,onMouseleave:a}=this;return t(`table`,{style:{tableLayout:`fixed`},class:`${e}-data-table-table`,onMouseenter:i,onMouseleave:a},t(`colgroup`,null,r.map(e=>t(`col`,{key:e.key,style:e.style}))),t(`tbody`,{"data-n-id":n,class:`${e}-data-table-tbody`},this.$slots))}}),pt=v({name:`DataTableBody`,props:{onResize:Function,showHeader:Boolean,flexHeight:Boolean,bodyStyle:Object},setup(t){let{slots:n,bodyWidthRef:r,mergedExpandedRowKeysRef:i,mergedClsPrefixRef:a,mergedThemeRef:o,scrollXRef:c,colsRef:l,paginatedDataRef:u,rawPaginatedDataRef:d,fixedColumnLeftMapRef:f,fixedColumnRightMapRef:p,mergedCurrentPageRef:m,rowClassNameRef:h,leftActiveFixedColKeyRef:g,leftActiveFixedChildrenColKeysRef:_,rightActiveFixedColKeyRef:v,rightActiveFixedChildrenColKeysRef:y,renderExpandRef:b,hoverKeyRef:x,summaryRef:C,mergedSortStateRef:T,virtualScrollRef:E,virtualScrollXRef:D,heightForRowRef:O,minRowHeightRef:k,componentId:A,mergedTableLayoutRef:P,childTriggerColIndexRef:F,indentRef:I,rowPropsRef:L,stripedRef:R,loadingRef:z,onLoadRef:B,loadingKeySetRef:V,expandableRef:U,stickyExpandedRowsRef:W,renderExpandIconRef:K,summaryPlacementRef:te,treeMateRef:q,scrollbarPropsRef:J,setHeaderScrollLeft:ne,doUpdateExpandedRowKeys:re,handleTableBodyScroll:ie,doCheck:Y,doUncheck:ae,renderCell:oe,xScrollableRef:se,explicitlyScrollableRef:ce}=S(Q),X=S(N),Z=H(null),le=H(null),ue=H(null),de=e(()=>X?.mergedComponentPropsRef.value?.DataTable?.renderEmpty),fe=s(()=>u.value.length===0),pe=s(()=>E.value&&!fe.value),me=``,he=e(()=>new Set(i.value));function ge(e){return q.value.getNode(e)?.rawNode}function _e(e,t,n){let r=ge(e.key);if(!r){ee(`data-table`,`fail to get row data with key ${e.key}`);return}if(n){let n=u.value.findIndex(e=>e.key===me);if(n!==-1){let i=u.value.findIndex(t=>t.key===e.key),a=Math.min(n,i),o=Math.max(n,i),s=[];u.value.slice(a,o+1).forEach(e=>{e.disabled||s.push(e.key)}),t?Y(s,!1,r):ae(s,r),me=e.key;return}}t?Y(e.key,!1,r):ae(e.key,r),me=e.key}function ve(e){let t=ge(e.key);if(!t){ee(`data-table`,`fail to get row data with key ${e.key}`);return}Y(e.key,!0,t)}function ye(){if(pe.value)return Se();let{value:e}=Z;return e?e.containerRef:null}function be(e,t){var n;if(V.value.has(e))return;let{value:r}=i,a=r.indexOf(e),o=Array.from(r);~a?(o.splice(a,1),re(o)):t&&!t.isLeaf&&!t.shallowLoaded?(V.value.add(e),(n=B.value)==null||n.call(B,t.rawNode).then(()=>{let{value:t}=i,n=Array.from(t);~n.indexOf(e)||n.push(e),re(n)}).finally(()=>{V.value.delete(e)})):(o.push(e),re(o))}function xe(){x.value=null}function Se(){let{value:e}=le;return e?.listElRef||null}function Ce(){let{value:e}=le;return e?.itemsElRef||null}function we(e){var t;ie(e),(t=Z.value)==null||t.sync()}function Te(e){var n;let{onResize:r}=t;r&&r(e),(n=Z.value)==null||n.sync()}let $={getScrollContainer:ye,scrollTo(e,t){var n,r;E.value?(n=le.value)==null||n.scrollTo(e,t):(r=Z.value)==null||r.scrollTo(e,t)}},Ee=G([({props:e})=>{let t=t=>t===null?null:G(`[data-n-id="${e.componentId}"] [data-col-key="${t}"]::after`,{boxShadow:`var(--n-box-shadow-after)`}),n=t=>t===null?null:G(`[data-n-id="${e.componentId}"] [data-col-key="${t}"]::before`,{boxShadow:`var(--n-box-shadow-before)`});return G([t(e.leftActiveFixedColKey),n(e.rightActiveFixedColKey),e.leftActiveFixedChildrenColKeys.map(e=>t(e)),e.rightActiveFixedChildrenColKeys.map(e=>n(e))])}]),De=!1;return j(()=>{let{value:e}=g,{value:t}=_,{value:n}=v,{value:r}=y;if(!De&&e===null&&n===null)return;let i={leftActiveFixedColKey:e,leftActiveFixedChildrenColKeys:t,rightActiveFixedColKey:n,rightActiveFixedChildrenColKeys:r,componentId:A};Ee.mount({id:`n-${A}`,force:!0,props:i,anchorMetaName:M,parent:X?.styleMountTarget}),De=!0}),w(()=>{Ee.unmount({id:`n-${A}`,parent:X?.styleMountTarget})}),Object.assign({bodyWidth:r,summaryPlacement:te,dataTableSlots:n,componentId:A,scrollbarInstRef:Z,virtualListRef:le,emptyElRef:ue,summary:C,mergedClsPrefix:a,mergedTheme:o,mergedRenderEmpty:de,scrollX:c,cols:l,loading:z,shouldDisplayVirtualList:pe,empty:fe,paginatedDataAndInfo:e(()=>{let{value:e}=R,t=!1;return{data:u.value.map(e?(e,n)=>(e.isLeaf||(t=!0),{tmNode:e,key:e.key,striped:n%2==1,index:n}):(e,n)=>(e.isLeaf||(t=!0),{tmNode:e,key:e.key,striped:!1,index:n})),hasChildren:t}}),rawPaginatedData:d,fixedColumnLeftMap:f,fixedColumnRightMap:p,currentPage:m,rowClassName:h,renderExpand:b,mergedExpandedRowKeySet:he,hoverKey:x,mergedSortState:T,virtualScroll:E,virtualScrollX:D,heightForRow:O,minRowHeight:k,mergedTableLayout:P,childTriggerColIndex:F,indent:I,rowProps:L,loadingKeySet:V,expandable:U,stickyExpandedRows:W,renderExpandIcon:K,scrollbarProps:J,setHeaderScrollLeft:ne,handleVirtualListScroll:we,handleVirtualListResize:Te,handleMouseleaveTable:xe,virtualListContainer:Se,virtualListContent:Ce,handleTableBodyScroll:ie,handleCheckboxUpdateChecked:_e,handleRadioUpdateChecked:ve,handleUpdateExpanded:be,renderCell:oe,explicitlyScrollable:ce,xScrollable:se},$)},render(){let{mergedTheme:e,scrollX:n,mergedClsPrefix:r,explicitlyScrollable:i,xScrollable:a,loadingKeySet:s,onResize:c,setHeaderScrollLeft:l,empty:u,shouldDisplayVirtualList:f}=this,p={minWidth:J(n)||`100%`};n&&(p.width=`100%`);let m=()=>t(`div`,{class:[`${r}-data-table-empty`,this.loading&&`${r}-data-table-empty--hide`],style:[this.bodyStyle,a?`position: sticky; left: 0; width: var(--n-scrollbar-current-width);`:void 0],ref:`emptyElRef`},L(this.dataTableSlots.empty,()=>[this.mergedRenderEmpty?.call(this)||t(Z,{theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})])),h=t(k,Object.assign({},this.scrollbarProps,{ref:`scrollbarInstRef`,scrollable:i||a,class:`${r}-data-table-base-table-body`,style:u?`height: initial;`:this.bodyStyle,theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,contentStyle:p,container:f?this.virtualListContainer:void 0,content:f?this.virtualListContent:void 0,horizontalRailStyle:{zIndex:3},verticalRailStyle:{zIndex:3},internalExposeWidthCssVar:a&&u,xScrollable:a,onScroll:f?void 0:this.handleTableBodyScroll,internalOnUpdateScrollLeft:l,onResize:c}),{default:()=>{if(this.empty&&!this.showHeader&&(this.explicitlyScrollable||this.xScrollable))return m();let e={},n={},{cols:i,paginatedDataAndInfo:a,mergedTheme:c,fixedColumnLeftMap:l,fixedColumnRightMap:u,currentPage:f,rowClassName:h,mergedSortState:g,mergedExpandedRowKeySet:_,stickyExpandedRows:v,componentId:y,childTriggerColIndex:b,expandable:x,rowProps:S,handleMouseleaveTable:C,renderExpand:w,summary:T,handleCheckboxUpdateChecked:E,handleRadioUpdateChecked:D,handleUpdateExpanded:O,heightForRow:k,minRowHeight:A,virtualScrollX:j}=this,{length:M}=i,N,{data:P,hasChildren:F}=a,I=F?dt(P,_):P;if(T){let e=T(this.rawPaginatedData);if(Array.isArray(e)){let t=e.map((e,t)=>({isSummaryRow:!0,key:`__n_summary__${t}`,tmNode:{rawNode:e,disabled:!0},index:-1}));N=this.summaryPlacement===`top`?[...t,...I]:[...I,...t]}else{let t={isSummaryRow:!0,key:`__n_summary__`,tmNode:{rawNode:e,disabled:!0},index:-1};N=this.summaryPlacement===`top`?[t,...I]:[...I,t]}}else N=I;let L=F?{width:d(this.indent)}:void 0,R=[];N.forEach(e=>{w&&_.has(e.key)&&(!x||x(e.tmNode.rawNode))?R.push(e,{isExpandedRow:!0,key:`${e.key}-expand`,tmNode:e.tmNode,index:e.index}):R.push(e)});let{length:z}=R,B={};P.forEach(({tmNode:e},t)=>{B[t]=e.key});let V=v?this.bodyWidth:null,H=V===null?void 0:`${V}px`,ee=this.virtualScrollX?`div`:`td`,U=0,W=0;j&&i.forEach(e=>{e.column.fixed===`left`?U++:e.column.fixed===`right`&&W++});let G=({rowInfo:a,displayedRowIndex:o,isVirtual:p,isVirtualX:m,startColIndex:y,endColIndex:x,getLeft:C})=>{let{index:T}=a;if(`isExpandedRow`in a){let{tmNode:{key:e,rawNode:n}}=a;return t(`tr`,{class:`${r}-data-table-tr ${r}-data-table-tr--expanded`,key:`${e}__expand`},t(`td`,{class:[`${r}-data-table-td`,`${r}-data-table-td--last-col`,o+1===z&&`${r}-data-table-td--last-row`],colspan:M},v?t(`div`,{class:`${r}-data-table-expand`,style:{width:H}},w(n,T)):w(n,T)))}let j=`isSummaryRow`in a,N=!j&&a.striped,{tmNode:P,key:I}=a,{rawNode:R}=P,V=_.has(I),G=S?S(R,T):void 0,K=typeof h==`string`?h:Ae(R,T,h),te=m?i.filter((e,t)=>!!(y<=t&&t<=x||e.column.fixed)):i,q=m?d(k?.(R,T)||A):void 0,J=te.map(i=>{let h=i.index;if(o in e){let t=e[o],n=t.indexOf(h);if(~n)return t.splice(n,1),null}let{column:_}=i,v=$(i),{rowSpan:y,colSpan:x}=_,S=j?a.tmNode.rawNode[v]?.colSpan||1:x?x(R,T):1,w=j?a.tmNode.rawNode[v]?.rowSpan||1:y?y(R,T):1,k=h+S===M,A=o+w===z,N=w>1;if(N&&(n[o]={[h]:[]}),S>1||N)for(let t=o;t<o+w;++t){N&&n[o][h].push(B[t]);for(let n=h;n<h+S;++n)t===o&&n===h||(t in e?e[t].push(n):e[t]=[n])}let P=N?this.hoverKey:null,{cellProps:H}=_,U=H?.(R,T),W={"--indent-offset":``};return t(_.fixed?`td`:ee,Object.assign({},U,{key:v,style:[{textAlign:_.align||void 0,width:d(_.width)},m&&{height:q},m&&!_.fixed?{position:`absolute`,left:d(C(h)),top:0,bottom:0}:{left:d(l[v]?.start),right:d(u[v]?.start)},W,U?.style||``],colspan:S,rowspan:p?void 0:w,"data-col-key":v,class:[`${r}-data-table-td`,_.className,U?.class,j&&`${r}-data-table-td--summary`,P!==null&&n[o][h].includes(P)&&`${r}-data-table-td--hover`,Le(_,g)&&`${r}-data-table-td--sorting`,_.fixed&&`${r}-data-table-td--fixed-${_.fixed}`,_.align&&`${r}-data-table-td--${_.align}-align`,_.type===`selection`&&`${r}-data-table-td--selection`,_.type===`expand`&&`${r}-data-table-td--expand`,k&&`${r}-data-table-td--last-col`,A&&`${r}-data-table-td--last-row`]}),F&&h===b?[_e(W[`--indent-offset`]=j?0:a.tmNode.level,t(`div`,{class:`${r}-data-table-indent`,style:L})),j||a.tmNode.isLeaf?t(`div`,{class:`${r}-data-table-expand-placeholder`}):t(Ye,{class:`${r}-data-table-expand-trigger`,clsPrefix:r,expanded:V,rowData:R,renderExpandIcon:this.renderExpandIcon,loading:s.has(a.key),onClick:()=>{O(I,a.tmNode)}})]:null,_.type===`selection`?j?null:_.multiple===!1?t(Ve,{key:f,rowKey:I,disabled:a.tmNode.disabled,onUpdateChecked:()=>{D(a.tmNode)}}):t(Be,{key:f,rowKey:I,disabled:a.tmNode.disabled,onUpdateChecked:(e,t)=>{E(a.tmNode,e,t.shiftKey)}}):_.type===`expand`?j?null:!_.expandable||_.expandable?.call(_,R)?t(Ye,{clsPrefix:r,rowData:R,expanded:V,renderExpandIcon:this.renderExpandIcon,onClick:()=>{O(I,null)}}):null:t(Je,{clsPrefix:r,index:T,row:R,column:_,isSummary:j,mergedTheme:c,renderCell:this.renderCell}))});return m&&U&&W&&J.splice(U,0,t(`td`,{colspan:i.length-U-W,style:{pointerEvents:`none`,visibility:`hidden`,height:0}})),t(`tr`,Object.assign({},G,{onMouseenter:e=>{var t;this.hoverKey=I,(t=G?.onMouseenter)==null||t.call(G,e)},key:I,class:[`${r}-data-table-tr`,j&&`${r}-data-table-tr--summary`,N&&`${r}-data-table-tr--striped`,V&&`${r}-data-table-tr--expanded`,K,G?.class],style:[G?.style,m&&{height:q}]}),J)};return this.shouldDisplayVirtualList?t(ue,{ref:`virtualListRef`,items:R,itemSize:this.minRowHeight,visibleItemsTag:ft,visibleItemsProps:{clsPrefix:r,id:y,cols:i,onMouseleave:C},showScrollbar:!1,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemsStyle:p,itemResizable:!j,columns:i,renderItemWithCols:j?({itemIndex:e,item:t,startColIndex:n,endColIndex:r,getLeft:i})=>G({displayedRowIndex:e,isVirtual:!0,isVirtualX:!0,rowInfo:t,startColIndex:n,endColIndex:r,getLeft:i}):void 0},{default:({item:e,index:t,renderedItemWithCols:n})=>n||G({rowInfo:e,displayedRowIndex:t,isVirtual:!0,isVirtualX:!1,startColIndex:0,endColIndex:0,getLeft(e){return 0}})}):t(o,null,t(`table`,{class:`${r}-data-table-table`,onMouseleave:C,style:{tableLayout:this.mergedTableLayout}},t(`colgroup`,null,i.map(e=>t(`col`,{key:e.key,style:e.style}))),this.showHeader?t(ut,{discrete:!1}):null,this.empty?null:t(`tbody`,{"data-n-id":y,class:`${r}-data-table-tbody`},R.map((e,t)=>G({rowInfo:e,displayedRowIndex:t,isVirtual:!1,isVirtualX:!1,startColIndex:-1,endColIndex:-1,getLeft(e){return-1}})))),this.empty&&this.xScrollable?m():null)}});return this.empty?this.explicitlyScrollable||this.xScrollable?h:t(D,{onResize:this.onResize},{default:m}):h}}),mt=v({name:`MainTable`,setup(){let{mergedClsPrefixRef:t,rightFixedColumnsRef:n,leftFixedColumnsRef:r,bodyWidthRef:i,maxHeightRef:a,minHeightRef:o,flexHeightRef:s,virtualScrollHeaderRef:c,syncScrollState:l,scrollXRef:u}=S(Q),d=H(null),f=H(null),p=H(null),m=H(!(r.value.length||n.value.length)),h=e(()=>({maxHeight:J(a.value),minHeight:J(o.value)}));function g(e){i.value=e.contentRect.width,l(),m.value||=!0}function _(){let{value:e}=d;return e?c.value?e.virtualListRef?.listElRef||null:e.$el:null}function v(){let{value:e}=f;return e?e.getScrollContainer():null}let y={getBodyElement:v,getHeaderElement:_,scrollTo(e,t){var n;(n=f.value)==null||n.scrollTo(e,t)}};return j(()=>{let{value:e}=p;if(!e)return;let n=`${t.value}-data-table-base-table--transition-disabled`;m.value?setTimeout(()=>{e.classList.remove(n)},0):e.classList.add(n)}),Object.assign({maxHeight:a,mergedClsPrefix:t,selfElRef:p,headerInstRef:d,bodyInstRef:f,bodyStyle:h,flexHeight:s,handleBodyResize:g,scrollX:u},y)},render(){let{mergedClsPrefix:e,maxHeight:n,flexHeight:r}=this,i=n===void 0&&!r;return t(`div`,{class:`${e}-data-table-base-table`,ref:`selfElRef`},i?null:t(ut,{ref:`headerInstRef`}),t(pt,{ref:`bodyInstRef`,bodyStyle:this.bodyStyle,showHeader:i,flexHeight:r,onResize:this.handleBodyResize}))}}),ht=_t(),gt=G([n(`data-table`,`
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-hover: var(--n-th-color-hover);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `,[n(`data-table-wrapper`,`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `),x(`flex-height`,[G(`>`,[n(`data-table-wrapper`,[G(`>`,[n(`data-table-base-table`,`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `,[G(`>`,[n(`data-table-base-table-body`,`flex-basis: 0;`,[G(`&:last-child`,`flex-grow: 1;`)])])])])])])]),G(`>`,[n(`data-table-loading-wrapper`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[he({originalTransform:`translateX(-50%) translateY(-50%)`})])]),n(`data-table-expand-placeholder`,`
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `),n(`data-table-indent`,`
 display: inline-block;
 height: 1px;
 `),n(`data-table-expand-trigger`,`
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `,[x(`expanded`,[n(`icon`,`transform: rotate(90deg);`,[E({originalTransform:`rotate(90deg)`})]),n(`base-icon`,`transform: rotate(90deg);`,[E({originalTransform:`rotate(90deg)`})])]),n(`base-loading`,`
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[E()]),n(`icon`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[E()]),n(`base-icon`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[E()])]),n(`data-table-thead`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `),n(`data-table-tr`,`
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `,[n(`data-table-expand`,`
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `),x(`striped`,`background-color: var(--n-merged-td-color-striped);`,[n(`data-table-td`,`background-color: var(--n-merged-td-color-striped);`)]),C(`summary`,[G(`&:hover`,`background-color: var(--n-merged-td-color-hover);`,[G(`>`,[n(`data-table-td`,`background-color: var(--n-merged-td-color-hover);`)])])])]),n(`data-table-th`,`
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `,[x(`filterable`,`
 padding-right: 36px;
 `,[x(`sortable`,`
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]),ht,x(`selection`,`
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `),u(`title-wrapper`,`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `,[u(`title`,`
 flex: 1;
 min-width: 0;
 `)]),u(`ellipsis`,`
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `),x(`hover`,`
 background-color: var(--n-merged-th-color-hover);
 `),x(`sorting`,`
 background-color: var(--n-merged-th-color-sorting);
 `),x(`sortable`,`
 cursor: pointer;
 `,[u(`ellipsis`,`
 max-width: calc(100% - 18px);
 `),G(`&:hover`,`
 background-color: var(--n-merged-th-color-hover);
 `)]),n(`data-table-sorter`,`
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `,[n(`base-icon`,`transition: transform .3s var(--n-bezier)`),x(`desc`,[n(`base-icon`,`
 transform: rotate(0deg);
 `)]),x(`asc`,[n(`base-icon`,`
 transform: rotate(-180deg);
 `)]),x(`asc, desc`,`
 color: var(--n-th-icon-color-active);
 `)]),n(`data-table-resize-button`,`
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `,[G(`&::after`,`
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `),x(`active`,[G(`&::after`,` 
 background-color: var(--n-th-icon-color-active);
 `)]),G(`&:hover::after`,`
 background-color: var(--n-th-icon-color-active);
 `)]),n(`data-table-filter`,`
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `,[G(`&:hover`,`
 background-color: var(--n-th-button-color-hover);
 `),x(`show`,`
 background-color: var(--n-th-button-color-hover);
 `),x(`active`,`
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]),n(`data-table-td`,`
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[x(`expand`,[n(`data-table-expand-trigger`,`
 margin-right: 0;
 `)]),x(`last-row`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[G(`&::after`,`
 bottom: 0 !important;
 `),G(`&::before`,`
 bottom: 0 !important;
 `)]),x(`summary`,`
 background-color: var(--n-merged-th-color);
 `),x(`hover`,`
 background-color: var(--n-merged-td-color-hover);
 `),x(`sorting`,`
 background-color: var(--n-merged-td-color-sorting);
 `),u(`ellipsis`,`
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `),x(`selection, expand`,`
 text-align: center;
 padding: 0;
 line-height: 0;
 `),ht]),n(`data-table-empty`,`
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `,[x(`hide`,`
 opacity: 0;
 `)]),u(`pagination`,`
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `),n(`data-table-wrapper`,`
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `),x(`loading`,[n(`data-table-wrapper`,`
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]),x(`single-column`,[n(`data-table-td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[G(`&::after, &::before`,`
 bottom: 0 !important;
 `)])]),C(`single-line`,[n(`data-table-th`,`
 border-right: 1px solid var(--n-merged-border-color);
 `,[x(`last`,`
 border-right: 0 solid var(--n-merged-border-color);
 `)]),n(`data-table-td`,`
 border-right: 1px solid var(--n-merged-border-color);
 `,[x(`last-col`,`
 border-right: 0 solid var(--n-merged-border-color);
 `)])]),x(`bordered`,[n(`data-table-wrapper`,`
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]),n(`data-table-base-table`,[x(`transition-disabled`,[n(`data-table-th`,[G(`&::after, &::before`,`transition: none;`)]),n(`data-table-td`,[G(`&::after, &::before`,`transition: none;`)])])]),x(`bottom-bordered`,[n(`data-table-td`,[x(`last-row`,`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),n(`data-table-table`,`
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `),n(`data-table-base-table-header`,`
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `,[G(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 display: none;
 width: 0;
 height: 0;
 `)]),n(`data-table-check-extra`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]),n(`data-table-filter-menu`,[n(`scrollbar`,`
 max-height: 240px;
 `),u(`group`,`
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `,[n(`checkbox`,`
 margin-bottom: 12px;
 margin-right: 0;
 `),n(`radio`,`
 margin-bottom: 12px;
 margin-right: 0;
 `)]),u(`action`,`
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `,[n(`button`,[G(`&:not(:last-child)`,`
 margin: var(--n-action-button-margin);
 `),G(`&:last-child`,`
 margin-right: 0;
 `)])]),n(`divider`,`
 margin: 0 !important;
 `)]),p(n(`data-table`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)),z(n(`data-table`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);function _t(){return[x(`fixed-left`,`
 left: 0;
 position: sticky;
 z-index: 2;
 `,[G(`&::after`,`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]),x(`fixed-right`,`
 right: 0;
 position: sticky;
 z-index: 1;
 `,[G(`&::before`,`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])]}function vt(t,n){let{paginatedDataRef:r,treeMateRef:i,selectionColumnRef:a}=n,o=H(t.defaultCheckedRowKeys),s=e(()=>{let{checkedRowKeys:e}=t,n=e===void 0?o.value:e;return a.value?.multiple===!1?{checkedKeys:n.slice(0,1),indeterminateKeys:[]}:i.value.getCheckedKeys(n,{cascade:t.cascade,allowNotLoaded:t.allowCheckingNotLoaded})}),c=e(()=>s.value.checkedKeys),l=e(()=>s.value.indeterminateKeys),u=e(()=>new Set(c.value)),d=e(()=>new Set(l.value)),f=e(()=>{let{value:e}=u;return r.value.reduce((t,n)=>{let{key:r,disabled:i}=n;return t+(!i&&e.has(r)?1:0)},0)}),p=e(()=>r.value.filter(e=>e.disabled).length),m=e(()=>{let{length:e}=r.value,{value:t}=d;return f.value>0&&f.value<e-p.value||r.value.some(e=>t.has(e.key))}),h=e(()=>{let{length:e}=r.value;return f.value!==0&&f.value===e-p.value}),g=e(()=>r.value.length===0);function _(e,n,r){let{"onUpdate:checkedRowKeys":a,onUpdateCheckedRowKeys:s,onCheckedRowKeysChange:c}=t,l=[],{value:{getNode:u}}=i;e.forEach(e=>{let t=u(e)?.rawNode;l.push(t)}),a&&A(a,e,l,{row:n,action:r}),s&&A(s,e,l,{row:n,action:r}),c&&A(c,e,l,{row:n,action:r}),o.value=e}function v(e,n=!1,r){if(!t.loading){if(n){_(Array.isArray(e)?e.slice(0,1):[e],r,`check`);return}_(i.value.check(e,c.value,{cascade:t.cascade,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys,r,`check`)}}function y(e,n){t.loading||_(i.value.uncheck(e,c.value,{cascade:t.cascade,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys,n,`uncheck`)}function b(e=!1){let{value:n}=a;if(!n||t.loading)return;let o=[];(e?i.value.treeNodes:r.value).forEach(e=>{e.disabled||o.push(e.key)}),_(i.value.check(o,c.value,{cascade:!0,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys,void 0,`checkAll`)}function x(e=!1){let{value:n}=a;if(!n||t.loading)return;let o=[];(e?i.value.treeNodes:r.value).forEach(e=>{e.disabled||o.push(e.key)}),_(i.value.uncheck(o,c.value,{cascade:!0,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys,void 0,`uncheckAll`)}return{mergedCheckedRowKeySetRef:u,mergedCheckedRowKeysRef:c,mergedInderminateRowKeySetRef:d,someRowsCheckedRef:m,allRowsCheckedRef:h,headerCheckboxDisabledRef:g,doUpdateCheckedRowKeys:_,doCheckAll:b,doUncheckAll:x,doCheck:v,doUncheck:y}}function yt(e,t){let n=s(()=>{for(let t of e.columns)if(t.type===`expand`)return t.renderExpand}),r=s(()=>{let t;for(let n of e.columns)if(n.type===`expand`){t=n.expandable;break}return t}),i=H(e.defaultExpandAll?n?.value?(()=>{let e=[];return t.value.treeNodes.forEach(t=>{r.value?.call(r,t.rawNode)&&e.push(t.key)}),e})():t.value.getNonLeafKeys():e.defaultExpandedRowKeys),a=I(e,`expandedRowKeys`),o=I(e,`stickyExpandedRows`),c=Y(a,i);function l(t){let{onUpdateExpandedRowKeys:n,"onUpdate:expandedRowKeys":r}=e;n&&A(n,t),r&&A(r,t),i.value=t}return{stickyExpandedRowsRef:o,mergedExpandedRowKeysRef:c,renderExpandRef:n,expandableRef:r,doUpdateExpandedRowKeys:l}}function bt(e,t){let n=[],r=[],i=[],a=new WeakMap,o=-1,s=0,c=!1,l=0;function u(e,a){a>o&&(n[a]=[],o=a),e.forEach(e=>{if(`children`in e)u(e.children,a+1);else{let n=`key`in e?e.key:void 0;r.push({key:$(e),style:ke(e,n===void 0?void 0:J(t(n))),column:e,index:l++,width:e.width===void 0?128:Number(e.width)}),s+=1,c||=!!e.ellipsis,i.push(e)}})}u(e,0),l=0;function d(e,t){let r=0;e.forEach(e=>{if(`children`in e){let r=l,i={column:e,colIndex:l,colSpan:0,rowSpan:1,isLast:!1};d(e.children,t+1),e.children.forEach(e=>{i.colSpan+=a.get(e)?.colSpan??0}),r+i.colSpan===s&&(i.isLast=!0),a.set(e,i),n[t].push(i)}else{if(l<r){l+=1;return}let i=1;`titleColSpan`in e&&(i=e.titleColSpan??1),i>1&&(r=l+i);let c=l+i===s,u={column:e,colSpan:i,colIndex:l,rowSpan:o-t+1,isLast:c};a.set(e,u),n[t].push(u),l+=1}})}return d(e,0),{hasEllipsis:c,rows:n,cols:r,dataRelatedCols:i}}function xt(t,n){let r=e(()=>bt(t.columns,n));return{rowsRef:e(()=>r.value.rows),colsRef:e(()=>r.value.cols),hasEllipsisRef:e(()=>r.value.hasEllipsis),dataRelatedColsRef:e(()=>r.value.dataRelatedCols)}}function St(){let e=H({});function t(t){return e.value[t]}function n(t,n){Ne(t)&&`key`in t&&(e.value[t.key]=n)}function r(){e.value={}}return{getResizableWidth:t,doUpdateResizableWidth:n,clearResizableWidth:r}}function Ct(t,{mainTableInstRef:n,mergedCurrentPageRef:r,bodyWidthRef:i,maxHeightRef:a,mergedTableLayoutRef:o}){let s=e(()=>t.scrollX!==void 0||a.value!==void 0||t.flexHeight),c=e(()=>{let e=!s.value&&o.value===`auto`;return t.scrollX!==void 0||e}),l=0,u=H(),d=H(null),f=H([]),p=H(null),m=H([]),h=e(()=>J(t.scrollX)),g=e(()=>t.columns.filter(e=>e.fixed===`left`)),_=e(()=>t.columns.filter(e=>e.fixed===`right`)),v=e(()=>{let e={},t=0;function n(r){r.forEach(r=>{let i={start:t,end:0};e[$(r)]=i,`children`in r?(n(r.children),i.end=t):(t+=we(r)||0,i.end=t)})}return n(g.value),e}),y=e(()=>{let e={},t=0;function n(r){for(let i=r.length-1;i>=0;--i){let a=r[i],o={start:t,end:0};e[$(a)]=o,`children`in a?(n(a.children),o.end=t):(t+=we(a)||0,o.end=t)}}return n(_.value),e});function b(){let{value:e}=g,t=0,{value:n}=v,r=null;for(let i=0;i<e.length;++i){let a=$(e[i]);if(l>(n[a]?.start||0)-t)r=a,t=n[a]?.end||0;else break}d.value=r}function x(){f.value=[];let e=t.columns.find(e=>$(e)===d.value);for(;e&&`children`in e;){let t=e.children.length;if(t===0)break;let n=e.children[t-1];f.value.push($(n)),e=n}}function S(){let{value:e}=_,n=Number(t.scrollX),{value:r}=i;if(r===null)return;let a=0,o=null,{value:s}=y;for(let t=e.length-1;t>=0;--t){let i=$(e[t]);if(Math.round(l+(s[i]?.start||0)+r-a)<n)o=i,a=s[i]?.end||0;else break}p.value=o}function C(){m.value=[];let e=t.columns.find(e=>$(e)===p.value);for(;e&&`children`in e&&e.children.length;){let t=e.children[0];m.value.push($(t)),e=t}}function w(){return{header:n.value?n.value.getHeaderElement():null,body:n.value?n.value.getBodyElement():null}}function T(){let{body:e}=w();e&&(e.scrollTop=0)}function E(){u.value===`body`?u.value=void 0:K(O)}function D(e){var n;(n=t.onScroll)==null||n.call(t,e),u.value===`head`?u.value=void 0:K(O)}function O(){let{header:e,body:t}=w();if(!t)return;let{value:n}=i;n!==null&&(e?(u.value=l-e.scrollLeft===0?`body`:`head`,u.value===`head`?(l=e.scrollLeft,t.scrollLeft=l):(l=t.scrollLeft,e.scrollLeft=l)):l=t.scrollLeft,b(),x(),S(),C())}function k(e){let{header:t}=w();t&&(t.scrollLeft=e,O())}return B(r,()=>{T()}),{styleScrollXRef:h,fixedColumnLeftMapRef:v,fixedColumnRightMapRef:y,leftFixedColumnsRef:g,rightFixedColumnsRef:_,leftActiveFixedColKeyRef:d,leftActiveFixedChildrenColKeysRef:f,rightActiveFixedColKeyRef:p,rightActiveFixedChildrenColKeysRef:m,syncScrollState:O,handleTableBodyScroll:D,handleTableHeaderScroll:E,setHeaderScrollLeft:k,explicitlyScrollableRef:s,xScrollableRef:c}}function wt(e){return typeof e==`object`&&typeof e.multiple==`number`?e.multiple:!1}function Tt(e,t){return t&&(e===void 0||e===`default`||typeof e==`object`&&e.compare===`default`)?Et(t):typeof e==`function`?e:e&&typeof e==`object`&&e.compare&&e.compare!==`default`?e.compare:!1}function Et(e){return(t,n)=>{let r=t[e],i=n[e];return r==null?i==null?0:-1:i==null?1:typeof r==`number`&&typeof i==`number`?r-i:typeof r==`string`&&typeof i==`string`?r.localeCompare(i):0}}function Dt(t,{dataRelatedColsRef:n,filteredDataRef:r}){let i=[];n.value.forEach(e=>{e.sorter!==void 0&&p(i,{columnKey:e.key,sorter:e.sorter,order:e.defaultSortOrder??!1})});let a=H(i),o=e(()=>{let e=n.value.filter(e=>e.type!==`selection`&&e.sorter!==void 0&&(e.sortOrder===`ascend`||e.sortOrder===`descend`||e.sortOrder===!1)),t=e.filter(e=>e.sortOrder!==!1);if(t.length)return t.map(e=>({columnKey:e.key,order:e.sortOrder,sorter:e.sorter}));if(e.length)return[];let{value:r}=a;return Array.isArray(r)?r:r?[r]:[]}),s=e(()=>{let e=o.value.slice().sort((e,t)=>{let n=wt(e.sorter)||0;return(wt(t.sorter)||0)-n});return e.length?r.value.slice().sort((t,n)=>{let r=0;return e.some(e=>{let{columnKey:i,sorter:a,order:o}=e,s=Tt(a,i);return s&&o&&(r=s(t.rawNode,n.rawNode),r!==0)?(r*=De(o),!0):!1}),r}):r.value});function c(e){let t=o.value.slice();return e&&wt(e.sorter)!==!1?(t=t.filter(e=>wt(e.sorter)!==!1),p(t,e),t):e||null}function l(e){u(c(e))}function u(e){let{"onUpdate:sorter":n,onUpdateSorter:r,onSorterChange:i}=t;n&&A(n,e),r&&A(r,e),i&&A(i,e),a.value=e}function d(e,t=`ascend`){if(!e)f();else{let r=n.value.find(t=>t.type!==`selection`&&t.type!==`expand`&&t.key===e);if(!r?.sorter)return;let i=r.sorter;l({columnKey:e,sorter:i,order:t})}}function f(){u(null)}function p(e,t){let n=e.findIndex(e=>t?.columnKey&&e.columnKey===t.columnKey);n!==void 0&&n>=0?e[n]=t:e.push(t)}return{clearSorter:f,sort:d,sortedDataRef:s,mergedSortStateRef:o,deriveNextSorter:l}}function Ot(t,{dataRelatedColsRef:n}){let r=e(()=>{let e=t=>{for(let n=0;n<t.length;++n){let r=t[n];if(`children`in r)return e(r.children);if(r.type===`selection`)return r}return null};return e(t.columns)}),i=e(()=>{let{childrenKey:e}=t;return ne(t.data,{ignoreEmptyChildren:!0,getKey:t.rowKey,getChildren:t=>t[e],getDisabled:e=>{var t;return!!((t=r.value)?.disabled)?.call(t,e)}})}),a=s(()=>{let{columns:e}=t,{length:n}=e,r=null;for(let t=0;t<n;++t){let n=e[t];if(!n.type&&r===null&&(r=t),`tree`in n&&n.tree)return t}return r||0}),o=H({}),{pagination:c}=t,l=H(c&&c.defaultPage||1),u=H(de(c)),d=e(()=>{let e=n.value.filter(e=>e.filterOptionValues!==void 0||e.filterOptionValue!==void 0),t={};return e.forEach(e=>{e.type===`selection`||e.type===`expand`||(e.filterOptionValues===void 0?t[e.key]=e.filterOptionValue??null:t[e.key]=e.filterOptionValues)}),Object.assign(Ee(o.value),t)}),f=e(()=>{let e=d.value,{columns:n}=t;function r(e){return(t,n)=>!!~String(n[e]).indexOf(String(t))}let{value:{treeNodes:a}}=i,o=[];return n.forEach(e=>{e.type===`selection`||e.type===`expand`||`children`in e||o.push([e.key,e])}),a?a.filter(t=>{let{rawNode:n}=t;for(let[t,i]of o){let a=e[t];if(a==null||(Array.isArray(a)||(a=[a]),!a.length))continue;let o=i.filter===`default`?r(t):i.filter;if(i&&typeof o==`function`)if(i.filterMode===`and`){if(a.some(e=>!o(e,n)))return!1}else if(a.some(e=>o(e,n)))continue;else return!1}return!0}):[]}),{sortedDataRef:p,deriveNextSorter:m,mergedSortStateRef:h,sort:g,clearSorter:_}=Dt(t,{dataRelatedColsRef:n,filteredDataRef:f});n.value.forEach(e=>{if(e.filter){let t=e.defaultFilterOptionValues;e.filterMultiple?o.value[e.key]=t||[]:t===void 0?o.value[e.key]=e.defaultFilterOptionValue??null:o.value[e.key]=t===null?[]:t}});let v=e(()=>{let{pagination:e}=t;if(e!==!1)return e.page}),y=e(()=>{let{pagination:e}=t;if(e!==!1)return e.pageSize}),b=Y(v,l),x=Y(y,u),S=s(()=>{let e=b.value;return t.remote?e:Math.max(1,Math.min(Math.ceil(f.value.length/x.value),e))}),C=e(()=>{let{pagination:e}=t;if(e){let{pageCount:t}=e;if(t!==void 0)return t}}),w=e(()=>{if(t.remote)return i.value.treeNodes;if(!t.pagination)return p.value;let e=x.value,n=(S.value-1)*e;return p.value.slice(n,n+e)}),T=e(()=>w.value.map(e=>e.rawNode));function E(e){let{pagination:n}=t;if(n){let{onChange:t,"onUpdate:page":r,onUpdatePage:i}=n;t&&A(t,e),i&&A(i,e),r&&A(r,e),j(e)}}function D(e){let{pagination:n}=t;if(n){let{onPageSizeChange:t,"onUpdate:pageSize":r,onUpdatePageSize:i}=n;t&&A(t,e),i&&A(i,e),r&&A(r,e),M(e)}}let O=e(()=>{if(t.remote){let{pagination:e}=t;if(e){let{itemCount:t}=e;if(t!==void 0)return t}return}return f.value.length}),k=e(()=>Object.assign(Object.assign({},t.pagination),{onChange:void 0,onUpdatePage:void 0,onUpdatePageSize:void 0,onPageSizeChange:void 0,"onUpdate:page":E,"onUpdate:pageSize":D,page:S.value,pageSize:x.value,pageCount:O.value===void 0?C.value:void 0,itemCount:O.value}));function j(e){let{"onUpdate:page":n,onPageChange:r,onUpdatePage:i}=t;i&&A(i,e),n&&A(n,e),r&&A(r,e),l.value=e}function M(e){let{"onUpdate:pageSize":n,onPageSizeChange:r,onUpdatePageSize:i}=t;r&&A(r,e),i&&A(i,e),n&&A(n,e),u.value=e}function N(e,n){let{onUpdateFilters:r,"onUpdate:filters":i,onFiltersChange:a}=t;r&&A(r,e,n),i&&A(i,e,n),a&&A(a,e,n),o.value=e}function P(e,n,r,i){var a;(a=t.onUnstableColumnResize)==null||a.call(t,e,n,r,i)}function F(e){j(e)}function I(){L()}function L(){R({})}function R(e){z(e)}function z(e){e?e&&(o.value=Ee(e)):o.value={}}return{treeMateRef:i,mergedCurrentPageRef:S,mergedPaginationRef:k,paginatedDataRef:w,rawPaginatedDataRef:T,mergedFilterStateRef:d,mergedSortStateRef:h,hoverKeyRef:H(null),selectionColumnRef:r,childTriggerColIndexRef:a,doUpdateFilters:N,deriveNextSorter:m,doUpdatePageSize:M,doUpdatePage:j,onUnstableColumnResize:P,filter:z,filters:R,clearFilter:I,clearFilters:L,clearSorter:_,page:F,sort:g}}var kt=v({name:`DataTable`,alias:[`AdvancedTable`],props:Ce,slots:Object,setup(t,{slots:n}){let{mergedBorderedRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedRtlRef:o,mergedComponentPropsRef:s}=V(t),l=h(`DataTable`,o,i),u=e(()=>t.size||s?.value?.DataTable?.size||`medium`),d=e(()=>{let{bottomBordered:e}=t;return r.value?!1:e===void 0?!0:e}),f=b(`DataTable`,`-data-table`,gt,ye,t,i),p=H(null),m=H(null),{getResizableWidth:g,clearResizableWidth:v,doUpdateResizableWidth:y}=St(),{rowsRef:x,colsRef:S,dataRelatedColsRef:C,hasEllipsisRef:w}=xt(t,g),{treeMateRef:T,mergedCurrentPageRef:E,paginatedDataRef:D,rawPaginatedDataRef:O,selectionColumnRef:k,hoverKeyRef:A,mergedPaginationRef:j,mergedFilterStateRef:M,mergedSortStateRef:N,childTriggerColIndexRef:P,doUpdatePage:L,doUpdateFilters:R,onUnstableColumnResize:z,deriveNextSorter:B,filter:ee,filters:U,clearFilter:W,clearFilters:G,clearSorter:K,page:te,sort:q}=Ot(t,{dataRelatedColsRef:C}),J=e=>{let{fileName:n=`data.csv`,keepOriginalData:r=!1}=e||{},i=r?t.data:O.value,a=ze(t.columns,i,t.getCsvCell,t.getCsvHeader),o=new Blob([a],{type:`text/csv;charset=utf-8`}),s=URL.createObjectURL(o);be(s,n.endsWith(`.csv`)?n:`${n}.csv`),URL.revokeObjectURL(s)},{doCheckAll:ne,doUncheckAll:re,doCheck:Y,doUncheck:ae,headerCheckboxDisabledRef:oe,someRowsCheckedRef:se,allRowsCheckedRef:ce,mergedCheckedRowKeySetRef:X,mergedInderminateRowKeySetRef:Z}=vt(t,{selectionColumnRef:k,treeMateRef:T,paginatedDataRef:D}),{stickyExpandedRowsRef:le,mergedExpandedRowKeysRef:ue,renderExpandRef:de,expandableRef:fe,doUpdateExpandedRowKeys:pe}=yt(t,T),me=I(t,`maxHeight`),he=e(()=>t.virtualScroll||t.flexHeight||t.maxHeight!==void 0||w.value?`fixed`:t.tableLayout),{handleTableBodyScroll:ge,handleTableHeaderScroll:_e,syncScrollState:xe,setHeaderScrollLeft:Se,leftActiveFixedColKeyRef:Ce,leftActiveFixedChildrenColKeysRef:we,rightActiveFixedColKeyRef:Te,rightActiveFixedChildrenColKeysRef:$,leftFixedColumnsRef:Ee,rightFixedColumnsRef:De,fixedColumnLeftMapRef:Oe,fixedColumnRightMapRef:ke,xScrollableRef:Ae,explicitlyScrollableRef:je}=Ct(t,{bodyWidthRef:p,mainTableInstRef:m,mergedCurrentPageRef:E,maxHeightRef:me,mergedTableLayoutRef:he}),{localeRef:Me}=ie(`DataTable`);_(Q,{xScrollableRef:Ae,explicitlyScrollableRef:je,props:t,treeMateRef:T,renderExpandIconRef:I(t,`renderExpandIcon`),loadingKeySetRef:H(new Set),slots:n,indentRef:I(t,`indent`),childTriggerColIndexRef:P,bodyWidthRef:p,componentId:ve(),hoverKeyRef:A,mergedClsPrefixRef:i,mergedThemeRef:f,scrollXRef:e(()=>t.scrollX),rowsRef:x,colsRef:S,paginatedDataRef:D,leftActiveFixedColKeyRef:Ce,leftActiveFixedChildrenColKeysRef:we,rightActiveFixedColKeyRef:Te,rightActiveFixedChildrenColKeysRef:$,leftFixedColumnsRef:Ee,rightFixedColumnsRef:De,fixedColumnLeftMapRef:Oe,fixedColumnRightMapRef:ke,mergedCurrentPageRef:E,someRowsCheckedRef:se,allRowsCheckedRef:ce,mergedSortStateRef:N,mergedFilterStateRef:M,loadingRef:I(t,`loading`),rowClassNameRef:I(t,`rowClassName`),mergedCheckedRowKeySetRef:X,mergedExpandedRowKeysRef:ue,mergedInderminateRowKeySetRef:Z,localeRef:Me,expandableRef:fe,stickyExpandedRowsRef:le,rowKeyRef:I(t,`rowKey`),renderExpandRef:de,summaryRef:I(t,`summary`),virtualScrollRef:I(t,`virtualScroll`),virtualScrollXRef:I(t,`virtualScrollX`),heightForRowRef:I(t,`heightForRow`),minRowHeightRef:I(t,`minRowHeight`),virtualScrollHeaderRef:I(t,`virtualScrollHeader`),headerHeightRef:I(t,`headerHeight`),rowPropsRef:I(t,`rowProps`),stripedRef:I(t,`striped`),checkOptionsRef:e(()=>{let{value:e}=k;return e?.options}),rawPaginatedDataRef:O,filterMenuCssVarsRef:e(()=>{let{self:{actionDividerColor:e,actionPadding:t,actionButtonMargin:n}}=f.value;return{"--n-action-padding":t,"--n-action-button-margin":n,"--n-action-divider-color":e}}),onLoadRef:I(t,`onLoad`),mergedTableLayoutRef:he,maxHeightRef:me,minHeightRef:I(t,`minHeight`),flexHeightRef:I(t,`flexHeight`),headerCheckboxDisabledRef:oe,paginationBehaviorOnFilterRef:I(t,`paginationBehaviorOnFilter`),summaryPlacementRef:I(t,`summaryPlacement`),filterIconPopoverPropsRef:I(t,`filterIconPopoverProps`),scrollbarPropsRef:I(t,`scrollbarProps`),syncScrollState:xe,doUpdatePage:L,doUpdateFilters:R,getResizableWidth:g,onUnstableColumnResize:z,clearResizableWidth:v,doUpdateResizableWidth:y,deriveNextSorter:B,doCheck:Y,doUncheck:ae,doCheckAll:ne,doUncheckAll:re,doUpdateExpandedRowKeys:pe,handleTableHeaderScroll:_e,handleTableBodyScroll:ge,setHeaderScrollLeft:Se,renderCell:I(t,`renderCell`)});let Ne={filter:ee,filters:U,clearFilters:G,clearSorter:K,page:te,sort:q,clearFilter:W,downloadCsv:J,scrollTo:(e,t)=>{var n;(n=m.value)==null||n.scrollTo(e,t)}},Pe=e(()=>{let e=u.value,{common:{cubicBezierEaseInOut:t},self:{borderColor:n,tdColorHover:r,tdColorSorting:i,tdColorSortingModal:a,tdColorSortingPopover:o,thColorSorting:s,thColorSortingModal:l,thColorSortingPopover:d,thColor:p,thColorHover:m,tdColor:h,tdTextColor:g,thTextColor:_,thFontWeight:v,thButtonColorHover:y,thIconColor:b,thIconColorActive:x,filterSize:S,borderRadius:C,lineHeight:w,tdColorModal:T,thColorModal:E,borderColorModal:D,thColorHoverModal:O,tdColorHoverModal:k,borderColorPopover:A,thColorPopover:j,tdColorPopover:M,tdColorHoverPopover:N,thColorHoverPopover:P,paginationMargin:F,emptyPadding:I,boxShadowAfter:L,boxShadowBefore:R,sorterSize:z,resizableContainerSize:B,resizableSize:V,loadingColor:H,loadingSize:ee,opacityLoading:U,tdColorStriped:W,tdColorStripedModal:G,tdColorStripedPopover:K,[c(`fontSize`,e)]:te,[c(`thPadding`,e)]:q,[c(`tdPadding`,e)]:J}}=f.value;return{"--n-font-size":te,"--n-th-padding":q,"--n-td-padding":J,"--n-bezier":t,"--n-border-radius":C,"--n-line-height":w,"--n-border-color":n,"--n-border-color-modal":D,"--n-border-color-popover":A,"--n-th-color":p,"--n-th-color-hover":m,"--n-th-color-modal":E,"--n-th-color-hover-modal":O,"--n-th-color-popover":j,"--n-th-color-hover-popover":P,"--n-td-color":h,"--n-td-color-hover":r,"--n-td-color-modal":T,"--n-td-color-hover-modal":k,"--n-td-color-popover":M,"--n-td-color-hover-popover":N,"--n-th-text-color":_,"--n-td-text-color":g,"--n-th-font-weight":v,"--n-th-button-color-hover":y,"--n-th-icon-color":b,"--n-th-icon-color-active":x,"--n-filter-size":S,"--n-pagination-margin":F,"--n-empty-padding":I,"--n-box-shadow-before":R,"--n-box-shadow-after":L,"--n-sorter-size":z,"--n-resizable-container-size":B,"--n-resizable-size":V,"--n-loading-size":ee,"--n-loading-color":H,"--n-opacity-loading":U,"--n-td-color-striped":W,"--n-td-color-striped-modal":G,"--n-td-color-striped-popover":K,"--n-td-color-sorting":i,"--n-td-color-sorting-modal":a,"--n-td-color-sorting-popover":o,"--n-th-color-sorting":s,"--n-th-color-sorting-modal":l,"--n-th-color-sorting-popover":d}}),Fe=a?F(`data-table`,e(()=>u.value[0]),Pe,t):void 0,Ie=e(()=>{if(!t.pagination)return!1;if(t.paginateSinglePage)return!0;let e=j.value,{pageCount:n}=e;return n===void 0?e.itemCount&&e.pageSize&&e.itemCount>e.pageSize:n>1});return Object.assign({mainTableInstRef:m,mergedClsPrefix:i,rtlEnabled:l,mergedTheme:f,paginatedData:D,mergedBordered:r,mergedBottomBordered:d,mergedPagination:j,mergedShowPagination:Ie,cssVars:a?void 0:Pe,themeClass:Fe?.themeClass,onRender:Fe?.onRender},Ne)},render(){let{mergedClsPrefix:e,themeClass:n,onRender:r,$slots:i,spinProps:a}=this;return r?.(),t(`div`,{class:[`${e}-data-table`,this.rtlEnabled&&`${e}-data-table--rtl`,n,{[`${e}-data-table--bordered`]:this.mergedBordered,[`${e}-data-table--bottom-bordered`]:this.mergedBottomBordered,[`${e}-data-table--single-line`]:this.singleLine,[`${e}-data-table--single-column`]:this.singleColumn,[`${e}-data-table--loading`]:this.loading,[`${e}-data-table--flex-height`]:this.flexHeight}],style:this.cssVars},t(`div`,{class:`${e}-data-table-wrapper`},t(mt,{ref:`mainTableInstRef`})),this.mergedShowPagination?t(`div`,{class:`${e}-data-table__pagination`},t(fe,Object.assign({theme:this.mergedTheme.peers.Pagination,themeOverrides:this.mergedTheme.peerOverrides.Pagination,disabled:this.loading},this.mergedPagination))):null,t(W,{name:`fade-in-scale-up-transition`},{default:()=>this.loading?t(`div`,{class:`${e}-data-table-loading-wrapper`},L(i.loading,()=>[t(T,Object.assign({clsPrefix:e,strokeWidth:20},a))])):null}))}});export{kt as t};