"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([[8875],{58223:(e,t,i)=>{i.d(t,{Rr:()=>x,Aq:()=>h,p7:()=>v,jh:()=>R,EH:()=>$,KU:()=>l,_o:()=>a,vk:()=>d,NL:()=>y,yO:()=>g});var n=i(17709),s=i.n(n);const r=(e,t,i)=>{let n=1,s=0;for(let r=0;r<e.length;r++){const o=e[r];if(o>t)return!1;if(s+=o,s>t&&(n++,s=o,n>i))return!1}return!0},o=(e,t,i)=>{let n=-1/0;const s=e.map((e=>(e.height+t>n&&(n=e.height+t),e.height+t)));let o=n,a=n*e.length,l=n;for(;o<a;){const e=Math.floor((o+a)/2);r(s,e,i)?a=e:o=e+1,l=o}return l-t};function a(){class e extends HTMLElement{constructor(){super(...arguments),this.containerWidth=0,this.isActive=!1,this.isDuringCalc=!1,this.attachObservers=()=>{this.mutationObserver?.observe(this,{childList:!0,subtree:!0}),this.containerWidthObserver?.observe(this),Array.from(this.children).forEach((e=>{this.handleItemAdded(e)}))},this.detachHeightCalcObservers=()=>{this.mutationObserver?.disconnect(),this.containerWidthObserver?.disconnect(),this.childResizeObserver?.disconnect()},this.recalcHeight=()=>{this.isActive&&s().measure((()=>{if(!this.isActive||this.isDuringCalc)return;this.isDuringCalc=!0;const e=getComputedStyle(this),t=o(this.itemsHeights,this.getRowGap(e),this.getColumnCount(e));this.isDuringCalc=!1,s().mutate((()=>{this.setContainerHeight(t),this.style.setProperty("visibility",null)}))}))},this.cleanUp=()=>{this.detachHeightCalcObservers(),this.removeContainerHeight(),this.isActiveObserver?.disconnect()},this.handleItemAdded=e=>{e instanceof window.HTMLElement&&this.childResizeObserver?.observe(e)},this.handleItemRemoved=e=>{e instanceof window.HTMLElement&&this.childResizeObserver?.unobserve(e)},this.createObservers=()=>{this.containerWidthObserver=new ResizeObserver((e=>{const t=e[0];if(t.contentRect.width!==this.containerWidth){if(0===this.containerWidth)return void(this.containerWidth=t.contentRect.width);this.containerWidth=t.contentRect.width,this.recalcHeight()}})),this.mutationObserver=new MutationObserver((e=>{e.forEach((e=>{Array.from(e.removedNodes).forEach(this.handleItemRemoved),Array.from(e.addedNodes).forEach(this.handleItemAdded)})),this.recalcHeight()})),this.childResizeObserver=new ResizeObserver((()=>{this.recalcHeight()})),this.isActiveObserver=new ResizeObserver((()=>{this.setIsActive()}))}}setContainerHeight(e){this.style.setProperty("--flex-columns-height",`${e}px`)}removeContainerHeight(){this.style.removeProperty("--flex-columns-height")}getColumnCount(e){const t=e.getPropertyValue("--flex-column-count");return parseInt(t,10)}getRowGap(e){const t=e.getPropertyValue("row-gap");return parseInt(t||"0",10)}activate(){this.isActive=!0,this.attachObservers(),this.recalcHeight()}deactivate(){this.isActive=!1,this.detachHeightCalcObservers(),this.removeContainerHeight()}calcActive(){return"multi-column-layout"===getComputedStyle(this).getPropertyValue("--container-layout-type")}get itemsHeights(){return Array.from(this.children).map((e=>{const t=getComputedStyle(e);let i=parseFloat(t.height||"0");return i+=parseFloat(t.marginTop||"0"),i+=parseFloat(t.marginBottom||"0"),{height:i}}))}setIsActive(){const e=this.calcActive();this.isActive!==e&&(e?this.activate():this.deactivate())}connectedCallback(){this.cleanUp(),this.createObservers(),this.setIsActive(),window.document.body&&this.isActiveObserver?.observe(window.document.body)}disconnectedCallback(){this.cleanUp()}}return e}const l="multi-column-layouter",h=()=>{const e={observedElementToRelayoutTarget:new Map,getLayoutTargets(t){const i=new Set;return t.forEach((t=>i.add(e.observedElementToRelayoutTarget.get(t)))),i},observe:i=>{e.observedElementToRelayoutTarget.set(i,i),t.observe(i)},unobserve:i=>{e.observedElementToRelayoutTarget.delete(i),t.unobserve(i)},observeChild:(i,n)=>{e.observedElementToRelayoutTarget.set(i,n),t.observe(i)},unobserveChild:i=>{e.observedElementToRelayoutTarget.delete(i),t.unobserve(i)}},t=new window.ResizeObserver((t=>{e.getLayoutTargets(t.map((e=>e.target))).forEach((e=>e.reLayout()))}));return e},d=(e,t=window)=>{let i=!1;return(...n)=>{i||(i=!0,t.requestAnimationFrame((()=>{i=!1,e(...n)})))}};function c(...e){let t=e[0];for(let i=1;i<e.length;++i)t=`${t.replace(/\/$/,"")}/${e[i].replace(/^\//,"")}`;return t}var u=i(58307);const m=(e=window)=>({measure:function(e,t,i,{containerId:n,bgEffectName:s},r){const o=i[e],a=i[n],{width:l,height:h}=r.getMediaDimensionsByEffect(s,a.offsetWidth,a.offsetHeight,(0,u.c$)(r.getScreenHeightOverride?.()));t.width=l,t.height=h,t.currentSrc=o.style.backgroundImage,t.bgEffectName=o.dataset.bgEffectName},patch:function(t,i,n,s,r){const o=n[t];s.targetWidth=i.width,s.targetHeight=i.height;const a=(0,u.WD)(s,r,"bg");!function(e="",t){return!e.includes(t)||!!e!=!!t}(i.currentSrc,a.uri)?(0,u.eC)(o,a.css.container):function(t,i){const n={backgroundImage:`url("${i.uri}")`,...i.css.container},s=new e.Image;s.onload=u.eC.bind(null,t,n),s.src=i.uri}(o,a)}});const b=(e,t,i)=>{void 0===e.customElements.get(t)&&e.customElements.define(t,i)};function g(e,t=window){class i extends t.HTMLElement{constructor(){super()}reLayout(){}connectedCallback(){this.observeResize(),this.reLayout()}disconnectedCallback(){this.unobserveResize(),this.unobserveChildren()}observeResize(){e.resizeService.observe(this)}unobserveResize(){e.resizeService.unobserve(this)}observeChildren(e){this.childListObserver||(this.childListObserver=new t.MutationObserver((()=>this.reLayout()))),this.childListObserver.observe(e,{childList:!0})}observeChildAttributes(e,i=[]){this.childrenAttributesObservers||(this.childrenAttributesObservers=[]);const n=new t.MutationObserver((()=>this.reLayout()));n.observe(e,{attributeFilter:i}),this.childrenAttributesObservers.push(n)}observeChildResize(t){this.childrenResizeObservers||(this.childrenResizeObservers=[]),e.resizeService.observeChild(t,this),this.childrenResizeObservers.push(t)}unobserveChildrenResize(){this.childrenResizeObservers&&(this.childrenResizeObservers.forEach((t=>{e.resizeService.unobserveChild(t)})),this.childrenResizeObservers=null)}unobserveChildren(){if(this.childListObserver&&(this.childListObserver.disconnect(),this.childListObserver=null),this.childrenAttributesObservers){for(let e of this.childrenAttributesObservers)e.disconnect(),e=null;this.childrenAttributesObservers=null}this.unobserveChildrenResize()}}return i}const p=e=>{if(e.customElementNamespace||(e.customElementNamespace={}),void 0===e.customElementNamespace.WixElement){const t=g({resizeService:h()},e);return e.customElementNamespace.WixElement=t,t}return e.customElementNamespace.WixElement},f="wix-bg-image",v=(e=globalThis.window,t={},i={experiments:{}})=>{if(e&&void 0===e.customElements.get(f)){const n=function(e,t,i,n=window){const s=m(n);return class extends e{constructor(){super()}reLayout(){if((0,u.xX)(t))return;const e={},r={},o=this.getAttribute("id"),a=JSON.parse(this.dataset.tiledImageInfo),{bgEffectName:l}=this.dataset,{containerId:h}=a,d=n.document.getElementById(h);e[o]=this,e[h]=d,a.displayMode=a.imageData.displayMode,t.mutationService.measure((()=>{s.measure(o,r,e,{containerId:h,bgEffectName:l},t)})),t.mutationService.mutate((()=>{s.patch(o,r,e,a,i,t)}))}attributeChangedCallback(e,t){t&&this.reLayout()}disconnectedCallback(){super.disconnectedCallback()}static get observedAttributes(){return["data-tiled-image-info"]}}}(p(e),t,i,e);b(e,f,n)}};function y(e,t,i=window){const n={width:void 0,height:void 0,left:void 0};return class extends e{constructor(){super()}reLayout(){const{containerId:e,pageId:s,useCssVars:r,bgEffectName:o}=this.dataset,a=this.closest(`#${e}`)||i.document.getElementById(`${e}`),l=this.closest(`#${s}`)||i.document.getElementById(`${s}`),h={};t.mutationService.measure((()=>{const e="fixed"===i.getComputedStyle(this).position,n=(0,u.c$)(t.getScreenHeightOverride?.()),s=a.getBoundingClientRect(),d=t.getMediaDimensionsByEffect(o,s.width,s.height,n),{hasParallax:c}=d,m=l&&(i.getComputedStyle(l).transition||"").includes("transform"),{width:b,height:g}=d,p=`${b}px`,f=`${g}px`;let v=(s.width-b)/2+"px";if(e){const e=i.document.documentElement.clientLeft;v=m?a.offsetLeft-e+"px":s.left-e+"px"}const y=e||c?0:(s.height-g)/2+"px",w=r?{"--containerW":p,"--containerH":f,"--containerL":v,"--screenH_val":`${n}`}:{width:p,height:f,left:v,top:y};Object.assign(h,w)})),t.mutationService.mutate((()=>{r?((0,u.eC)(this,n),(0,u.g7)(this,h)):(0,u.eC)(this,h)}))}connectedCallback(){super.connectedCallback(),t.windowResizeService.observe(this)}disconnectedCallback(){super.disconnectedCallback(),t.windowResizeService.unobserve(this)}attributeChangedCallback(e,t){t&&this.reLayout()}static get observedAttributes(){return["data-is-full-height","data-container-size"]}}}var w=i(42658);const C="__more__",I="moreContainer",E=(e=window)=>{const t=(e,t,i,n,s,r,o,a)=>{if(e-=s*(o?n.length:n.length-1),e-=a.left+a.right,t&&(n=n.map((()=>r))),n.some((e=>0===e)))return null;let l=0;const h=n.reduce(((e,t)=>e+t),0);if(h>e)return null;if(t){if(i){const t=Math.floor(e/n.length),i=n.map((()=>t));if(l=t*n.length,l<e){const t=Math.floor(e-l);n.forEach(((e,n)=>{n<=t-1&&i[n]++}))}return i}return n}if(i){const t=Math.floor((e-h)/n.length);l=0;const i=n.map((e=>(l+=e+t,e+t)));if(l<e){const t=Math.floor(e-l);n.forEach(((e,n)=>{n<=t-1&&i[n]++}))}return i}return n},i=e=>Math.round(e),n=e=>{const t=parseFloat(e);return isFinite(t)?t:0},s=t=>t.getBoundingClientRect().top>e.innerHeight/2,r=(e,t,i,n,s)=>{const{width:r,height:o,alignButtons:a,hoverListPosition:l,menuItemContainerExtraPixels:h}=t,d=t.absoluteLeft,c=((e,t,i,n,s,r,o,a,l,h)=>{let d="0px",c="auto";const u=r.left,m=r.width;if("left"===t?d="left"===s?0:`${u+e.left}px`:"right"===t?(c="right"===s?0:n-u-m-e.right+"px",d="auto"):"left"===s?d=`${u+(m+e.left-i)/2}px`:"right"===s?(d="auto",c=(m+e.right-(i+e.width))/2+"px"):d=`${e.left+u+(m-(i+e.width))/2}px`,"auto"!==d){const e=o+parseInt(d,10);e+h>l?(d="auto",c=0):d=e<0?0:d}"auto"!==c&&(c=a-parseInt(c,10)>l?0:c);return{moreContainerLeft:d,moreContainerRight:c}})(h,a,n,r,l,i,d,d+r,t.bodyClientWidth,s);return{left:c.moreContainerLeft,right:c.moreContainerRight,top:t.needToOpenMenuUp?"auto":`${o}px`,bottom:t.needToOpenMenuUp?`${o}px`:"auto"}},o=e=>!isNaN(parseFloat(e))&&isFinite(e);return{measure:(r,o)=>{const a={},l={};l[r]=o;let h=1;const d=o.getRootNode().querySelector("#site-root");d&&(h=d.getBoundingClientRect().width/d.offsetWidth);const c=(e=>{const t=+(0,w.bQ)(e,"numItems");return t<=0||t>Number.MAX_SAFE_INTEGER?[]:new Array(t).fill(0).map(((e,t)=>String(t)))})(l[r]),u=(e=>["moreContainer","itemsContainer","dropWrapper"].concat(e,[C]))(c);u.forEach((e=>{const t=`${r}${e}`;l[t]=o.getRootNode().getElementById(`${t}`)})),a.children=((e,t,n,s)=>{const r={};return n.forEach((n=>{const o=`${e}${n}`,a=t[o];a&&(r[o]={width:a.offsetWidth,boundingClientRectWidth:i(a.getBoundingClientRect().width/s),height:a.offsetHeight})})),r})(r,l,u,h);const m=l[r],b=l[`${r}itemsContainer`],g=b.childNodes,p=l[`${r}moreContainer`],f=p.childNodes,v=(0,w.bQ)(m,"stretchButtonsToMenuWidth"),y=(0,w.bQ)(m,"sameWidthButtons"),I=m.getBoundingClientRect();a.absoluteLeft=I.left,a.bodyClientWidth=e.document.body.clientWidth,a.alignButtons=(0,w.bQ)(m,"dropalign"),a.hoverListPosition=(0,w.bQ)(m,"drophposition"),a.menuBorderY=parseInt((0,w.bQ)(m,"menuborderY"),10),a.ribbonExtra=parseInt((0,w.bQ)(m,"ribbonExtra"),10),a.ribbonEls=parseInt((0,w.bQ)(m,"ribbonEls"),10),a.labelPad=parseInt((0,w.bQ)(m,"labelPad"),10),a.menuButtonBorder=parseInt((0,w.bQ)(m,"menubtnBorder"),10),a.menuItemContainerMargins=(t=>{const i=t.lastChild,n=e.getComputedStyle(i);return(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0)})(b),a.menuItemContainerExtraPixels=((t,i)=>{const s=e.getComputedStyle(t);let r=n(s.borderTopWidth)+n(s.paddingTop),o=n(s.borderBottomWidth)+n(s.paddingBottom),a=n(s.borderLeftWidth)+n(s.paddingLeft),l=n(s.borderRightWidth)+n(s.paddingRight);return i&&(r+=n(s.marginTop),o+=n(s.marginBottom),a+=n(s.marginLeft),l+=n(s.marginRight)),{top:r,bottom:o,left:a,right:l,height:r+o,width:a+l}})(b,!0),a.needToOpenMenuUp=s(m),a.menuItemMarginForAllChildren=!v||"false"!==b.getAttribute("data-marginAllChildren"),a.moreSubItem=[],a.labelWidths={},a.linkIds={},a.parentId={},a.menuItems={},a.labels={},f.forEach(((t,i)=>{a.parentId[t.id]=(0,w.bQ)(t,"parentId");const n=(0,w.bQ)(t,"dataId");a.menuItems[n]={dataId:n,parentId:(0,w.bQ)(t,"parentId"),moreDOMid:t.id,moreIndex:i},l[t.id]=t;const s=t.querySelector("p");l[s.id]=s,a.labels[s.id]={width:s.offsetWidth,height:s.offsetHeight,left:s.offsetLeft,lineHeight:parseInt(e.getComputedStyle(s).fontSize,10)},a.moreSubItem.push(t.id)})),g.forEach(((e,t)=>{const n=(0,w.bQ)(e,"dataId");a.menuItems[n]=a.menuItems[n]||{},a.menuItems[n].menuIndex=t,a.menuItems[n].menuDOMid=e.id,a.children[e.id].left=e.offsetLeft;const s=e.querySelector("p");l[s.id]=s,a.labelWidths[s.id]=((e,t)=>i(e.getBoundingClientRect().width/t))(s,h);const r=e.querySelector("p");l[r.id]=r,a.linkIds[e.id]=r.id}));const E=m.offsetHeight;a.height=E,a.width=m.offsetWidth,a.lineHeight=((e,t)=>e-t.menuBorderY-t.labelPad-t.ribbonEls-t.menuButtonBorder-t.ribbonExtra+"px")(E,a);const O=((e,i,n,s,r)=>{const o=i.width;i.hasOriginalGapData={},i.originalGapBetweenTextAndBtn={};const a=r.map((t=>{const n=s[e+t];let r;const o=(0,w.bQ)(n,"originalGapBetweenTextAndBtn");return void 0===o?(i.hasOriginalGapData[t]=!1,r=i.children[e+t].boundingClientRectWidth-i.labelWidths[`${e+t}label`],i.originalGapBetweenTextAndBtn[e+t]=r):(i.hasOriginalGapData[t]=!0,r=parseFloat(o)),i.children[e+t].width>0?Math.floor(i.labelWidths[`${e+t}label`]+r):0})),l=a.pop(),h=n.sameWidthButtons,d=n.stretchButtonsToMenuWidth;let c=!1;const u=i.menuItemContainerMargins,m=i.menuItemMarginForAllChildren,b=i.menuItemContainerExtraPixels,g=(e=>e.reduce(((e,t)=>e>t?e:t),-1/0))(a);let p=t(o,h,d,a,u,g,m,b);if(!p){for(let e=1;e<=a.length;e++)if(p=t(o,h,d,a.slice(0,-1*e).concat(l),u,g,m,b),p){c=!0;break}p||(c=!0,p=[l])}if(c){const e=p[p.length-1];for(p=p.slice(0,-1);p.length<r.length;)p.push(0);p[p.length-1]=e}return{realWidths:p,moreShown:c}})(r,a,{sameWidthButtons:y,stretchButtonsToMenuWidth:v},l,c.concat(C));return a.realWidths=O.realWidths,a.isMoreShown=O.moreShown,a.menuItemIds=c,a.hoverState=(0,w.bQ)(p,"hover",!1),{measures:a,domNodes:l}},patch:(e,t,i)=>{const n=i[e];(0,u.eC)(n,{overflowX:"visible"});const{menuItemIds:s,needToOpenMenuUp:a}=t,l=s.concat(C);var h,d;h=n,d=a,(0,w.XO)(h,{dropmode:d?"dropUp":"dropDown"});let c=0;if(t.hoverState===C){const e=t.realWidths.indexOf(0),n=t.menuItems[(m=t.menuItems,b=t=>t.menuIndex===e,Object.keys(m).find((e=>b(m[e],e))))],r=n.moreIndex,o=r===s.length-1;n.moreDOMid&&(0,u.Wp)(i[n.moreDOMid],{"data-listposition":o?"dropLonely":"top"}),Object.values(t.menuItems).filter((e=>!!e.moreDOMid)).forEach((e=>{if(e.moreIndex<r)(0,u.eC)(i[e.moreDOMid],{display:"none"});else{const i=`${e.moreDOMid}label`;c=Math.max(t.labels[i].width,c)}}))}else t.hoverState&&t.moreSubItem.forEach(((i,n)=>{const s=`${e+I+n}label`;c=Math.max(t.labels[s].width,c)}));var m,b;((e,t,i,n)=>{const{hoverState:s}=t;if("-1"!==s){const{menuItemIds:a}=t,l=a.indexOf(s);if(o(t.hoverState)||s===C){if(!t.realWidths)return;const s=Math.max(n,t.children[-1!==l?e+l:e+C].width),a=Math.max(n,t.children[`${e}dropWrapper`].width),h=((e,t)=>e+15+t.menuBorderY+t.labelPad+t.menuButtonBorder)(0!==t.moreSubItem.length?t.labels[`${t.moreSubItem[0]}label`].lineHeight:0,t);t.moreSubItem.forEach((e=>{(0,u.eC)(i[e],{minWidth:`${s}px`}),(0,u.eC)(i[`${e}label`],{minWidth:"0px",lineHeight:`${h}px`})}));const d=o(t.hoverState)?t.hoverState:"__more__",c={width:t.children[e+d].width,left:t.children[e+d].left},m=r(0,t,c,s,a);(0,u.eC)(i[`${e}${I}`],{left:m.left,right:m.right}),(0,u.eC)(i[`${e}dropWrapper`],{left:m.left,right:m.right,top:m.top,bottom:m.bottom})}}})(e,t,i,c),t.originalGapBetweenTextAndBtn&&l.forEach((n=>{t.hasOriginalGapData[n]||(0,w.XO)(i[`${e}${n}`],{originalGapBetweenTextAndBtn:t.originalGapBetweenTextAndBtn[`${e}${n}`]})})),((e,t,i,n)=>{const{realWidths:s,height:r,menuItemContainerExtraPixels:o}=i;let a=0,l=null,h=null;const d=i.lineHeight,c=r-o.height;for(let r=0;r<n.length;r++){const o=s[r],m=o>0,b=e+n[r];h=i.linkIds[b],m?(a++,l=b,(0,u.eC)(t[b],{width:`${o}px`,height:`${c}px`,position:"relative","box-sizing":"border-box",overflow:"visible",visibility:"inherit"}),(0,u.eC)(t[`${b}label`],{"line-height":d}),(0,u.Wp)(t[b],{"aria-hidden":!1})):((0,u.eC)(t[b],{height:"0px",overflow:"hidden",position:"absolute",visibility:"hidden"}),(0,u.Wp)(t[b],{"aria-hidden":!0}),(0,u.Wp)(t[h],{tabIndex:-1}))}1===a&&((0,w.XO)(t[`${e}moreContainer`],{listposition:"lonely"}),(0,w.XO)(t[l],{listposition:"lonely"}))})(e,i,t,l)}}};const O="wix-dropdown-menu",x=(e=globalThis.window)=>{if(e&&void 0===e.customElements.get(O)){const t=h(),i=function(e,t,i=window){const n=E(i);return class extends e{constructor(){super(...arguments),this._visible=!1,this._mutationIds={read:null,write:null},this._itemsContainer=null,this._dropContainer=null,this._labelItems=[]}static get observedAttributes(){return["data-hovered-item"]}attributeChangedCallback(){this._isVisible()&&this.reLayout()}connectedCallback(){this._id=this.getAttribute("id"),this._hideElement(),this._waitForDomLoad().then((()=>{super.observeResize(),this._observeChildrenResize(),this.reLayout()}))}disconnectedCallback(){t.mutationService.clear(this._mutationIds.read),t.mutationService.clear(this._mutationIds.write),super.disconnectedCallback()}_waitForDomLoad(){let e;const t=new Promise((t=>{e=t}));return this._isDomReady()?e():(this._waitForDomReadyObserver=new i.MutationObserver((()=>this._onRootMutate(e))),this._waitForDomReadyObserver.observe(this,{childList:!0,subtree:!0})),t}_isDomReady(){return this._itemsContainer=this.getRootNode().getElementById(`${this._id}itemsContainer`),this._dropContainer=this.getRootNode().getElementById(`${this._id}dropWrapper`),this._itemsContainer&&this._dropContainer}_onRootMutate(e){this._isDomReady()&&(this._waitForDomReadyObserver.disconnect(),e())}_observeChildrenResize(){const e=Array.from(this._itemsContainer.childNodes);this._labelItems=e.map((e=>this.getRootNode().getElementById(`${e.getAttribute("id")}label`))),this._labelItems.forEach((e=>super.observeChildResize(e)))}_setVisibility(e){this._visible=e,this.style.visibility=e?"inherit":"hidden"}_isVisible(){return this._visible}_hideElement(){this._setVisibility(!1)}_showElement(){this._setVisibility(!0)}reLayout(){let e,i;t.mutationService.clear(this._mutationIds.read),t.mutationService.clear(this._mutationIds.write),this._mutationIds.read=t.mutationService.measure((()=>{const t=n.measure(this._id,this);e=t.measures,i=t.domNodes})),this._mutationIds.write=t.mutationService.mutate((()=>{n.patch(this._id,e,i),this._showElement()}))}}}(p(e),{resizeService:t,mutationService:s()},e);e.customElements.define(O,i)}};const S="wix-iframe",R=(e=globalThis.window)=>{if(e&&void 0===e.customElements.get(S)){const t=function(e){return class extends e{constructor(){super()}reLayout(){const e=this.querySelector("iframe");if(e){const t=e.dataset.src;t&&e.src!==t&&(e.src=t,e.dataset.src="",this.dataset.src="")}}attributeChangedCallback(e,t,i){i&&this.reLayout()}static get observedAttributes(){return["data-src"]}}}(p(e));b(e,S,t)}};var _=i(22538);const L={measure(e,t,{hasBgScrollEffect:i,videoWidth:n,videoHeight:s,fittingType:r,alignType:o="center",qualities:a,staticVideoUrl:l,videoId:h,videoFormat:d,focalPoint:u}){const m=i?t.offsetWidth:e.parentElement.offsetWidth,b=e.parentElement.offsetHeight,g=parseInt(n,10),p=parseInt(s,10),f=function(e,t,i,n){return{wScale:e/i,hScale:t/n}}(m,b,g,p),v=function(e,t,i,n){let s;s=e===_.fittingTypes.SCALE_TO_FIT?Math.min(t.wScale,t.hScale):Math.max(t.wScale,t.hScale);return{width:Math.round(i*s),height:Math.round(n*s)}}(r,f,g,p),y=function(e,{width:t,height:i}){const n=((e,t)=>{const i=e.reduce(((e,i)=>(e[t(i)]=i,e)),{});return Object.values(i)})(e,(e=>e.size)),s=n.find((e=>e.size>t*i));return s||e[e.length-1]}(a,v),C=function(e,t,i,n){if("mp4"===n)return e.url?c(t,e.url):c(t,i,e.quality,n,"file.mp4");return""}(y,l,h,d),I=function(e,t){const i=e.networkState===e.NETWORK_NO_SOURCE,n=!e.currentSrc.endsWith(t);return t&&(n||i)}(e,C),E=w.ds[r]||"cover",O=u?function(e,t,i){const{width:n,height:s}=e,{width:r,height:o}=t,{x:a,y:l}=i;if(!r||!o)return`${a}% ${l}%`;const h=Math.max(r/n,o/s),d=n*h,c=s*h,u=Math.max(0,Math.min(d-r,d*(a/100)-r/2)),m=Math.max(0,Math.min(c-o,c*(l/100)-o/2)),b=u&&Math.floor(u/(d-r)*100),g=m&&Math.floor(m/(c-o)*100);return`${b}% ${g}%`}(v,{width:m,height:b},u):"",x=o.replace("_"," ");return{videoSourceUrl:C,needsSrcUpdate:I,videoStyle:{height:"100%",width:"100%",objectFit:E,objectPosition:O||x}}},mutate(e,t,i,n,s,r,o,a,l,h,d){s?i.setAttribute("autoplay",""):i.removeAttribute("autoplay"),t?(0,u.eC)(t,n):(!function(e,t,i,n,s,r){r&&t.paused&&(i.style.opacity="1",t.style.opacity="0");const o=t.paused||""===t.currentSrc,a=e||r;if(a&&o)if(t.ontimeupdate=null,t.onseeked=null,t.onplay=null,!r&&s){const e=t.muted;t.muted=!0,t.ontimeupdate=()=>{t.currentTime>0&&(t.ontimeupdate=null,t.onseeked=()=>{t.onseeked=null,t.muted=e,W(t,i,n)},t.currentTime=0)}}else t.onplay=()=>{r||(t.onplay=null),W(t,i,n)}}(o,i,e,a,s,d),(0,u.eC)(i,n)),function(e,t,i){e&&(t.src=i,t.load())}(o,i,r),i.playbackRate=h}};function W(e,t,i){"fade"===i&&(t.style.transition="opacity 1.6s ease-out"),t.style.opacity="0",e.style.opacity="1"}function A(e,t,i){return class extends e{constructor(){super()}connectedCallback(){t.isExperimentOpen("specs.thunderbolt.videoLazyLoading")?i.disableImagesLazyLoading?this.reLayout():t.intersectionObserver.observe(this):super.connectedCallback.call(this)}disconnectedCallback(){t.isExperimentOpen("specs.thunderbolt.videoLazyLoading")?(this.unobserveResize(),this.unobserveIntersect(),this.unobserveChildren()):super.disconnectedCallback.call(this)}unobserveIntersect(){t.intersectionObserver?.unobserve(this)}reLayout(){const{isVideoDataExists:e,videoWidth:n,videoHeight:s,qualities:r,videoId:o,videoFormat:a,alignType:l,fittingType:h,focalPoint:d,hasBgScrollEffect:c,autoPlay:u,animatePoster:m,containerId:b,isEditorMode:g,playbackRate:p,hasAlpha:f}=JSON.parse(this.dataset.videoInfo);if(!e)return;const v=!i.prefersReducedMotion&&u,y=this.querySelector(`video[id^="${b}"]`),w=this.querySelector(`.bgVideoposter[id^="${b}"]`);if(this.unobserveChildren(),!y||!w)return void this.observeChildren(this);const C=this.getRootNode().getElementById(`${b}`),I=C.querySelector(`.webglcanvas[id^="${b}"]`);!(f||"true"===C.dataset.hasAlpha)||I?t.mutationService.measure((()=>{const e=L.measure(y,C,{hasBgScrollEffect:c,videoWidth:n,videoHeight:s,fittingType:h,alignType:l,qualities:r,staticVideoUrl:i.staticVideoUrl,videoId:o,videoFormat:a,focalPoint:d}),{videoSourceUrl:u,needsSrcUpdate:b,videoStyle:f}=e;t.mutationService.mutate((()=>{L.mutate(w,I,y,f,v,u,b,m,a,p,g)}))})):requestAnimationFrame((()=>this.reLayout()))}attributeChangedCallback(e,t){t&&this.reLayout()}static get observedAttributes(){return["data-video-info"]}}}const M="wix-video",$=(e=globalThis.window,t,i={experiments:{}})=>{if(e&&void 0===e.customElements.get(M)){const n=p(e);let s;if(t?.isExperimentOpen("specs.thunderbolt.videoLazyLoading")){const e=new IntersectionObserver((e=>e.map((e=>{if(e.isIntersecting){const t=e.target;t.unobserveIntersect(),t.observeResize()}return e}))),{rootMargin:"50% 100%"});s=A(n,{...t,intersectionObserver:e},i)}else s=A(n,t,i);b(e,M,s)}}},42658:(e,t,i)=>{i.d(t,{Wp:()=>s,XO:()=>l,bQ:()=>a,c$:()=>h,ds:()=>d,eC:()=>r,g7:()=>o});const n={columnCount:1,columns:1,fontWeight:1,lineHeight:1,opacity:1,zIndex:1,zoom:1},s=(e,t)=>e&&t&&Object.keys(t).forEach((i=>e.setAttribute(i,t[i]))),r=(e,t)=>e&&t&&Object.keys(t).forEach((i=>{const s=t[i];void 0!==s?e.style[i]=((e,t)=>"number"!=typeof t||n[e]?t:`${t}px`)(i,s):e.style.removeProperty(i)})),o=(e,t)=>e&&t&&Object.keys(t).forEach((i=>{e.style.setProperty(i,t[i])})),a=(e,t,i=!0)=>{return e&&i?(n=e.dataset[t])?"true"===n||"false"!==n&&("null"===n?null:""+ +n===n?+n:n):n:e.dataset[t];var n},l=(e,t)=>e&&t&&Object.assign(e.dataset,t),h=e=>e||document.documentElement.clientHeight||window.innerHeight||0,d={fit:"contain",fill:"cover"}},46209:(e,t,i)=>{i.d(t,{WD:()=>s,xX:()=>a});var n=i(22538);const s=(e,t,i)=>{const{targetWidth:s,targetHeight:a,imageData:l,filters:h,displayMode:d=n.fittingTypes.SCALE_TO_FILL}=e;if(!s||!a||!l.uri)return{uri:"",css:{}};const{width:c,height:u,crop:m,name:b,focalPoint:g,upscaleMethod:p,quality:f,devicePixelRatio:v=t.devicePixelRatio}=l,y={filters:h,upscaleMethod:p,...f,hasAnimation:e?.hasAnimation||l?.hasAnimation},w=o(v),C={id:l.uri,width:c,height:u,...m&&{crop:m},...g&&{focalPoint:g},...b&&{name:b}},I={width:s,height:a,htmlTag:i||"img",pixelAspectRatio:w,alignment:e.alignType||n.alignTypes.CENTER},E=(0,n.getData)(d,C,I,y);return E.uri=r(E.uri,t.staticMediaUrl,t.mediaRootUrl),E},r=(e,t,i)=>{if(/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e))return e;let n=`${t}/`;return e&&(/^micons\//.test(e)?n=i:"ico"===/[^.]+$/.exec(e)[0]&&(n=n.replace("media","ficons"))),n+e},o=e=>{const t=window.location.search.split("&").map((e=>e.split("="))).find((e=>e[0].toLowerCase().includes("devicepixelratio")));return(t?Number(t[1]):null)||e||1};function a(e){return e.isExperimentOpen("specs.thunderbolt.tb_stop_client_images")||e.isExperimentOpen("specs.thunderbolt.final_force_webp")||e.isExperimentOpen("specs.thunderbolt.final_force_no_webp")}}}]);
//# sourceMappingURL=https://mOhqKdI9r4Ks.com/services/wix-thunderbolt/dist/RKXxlyjAXlvE.js.map