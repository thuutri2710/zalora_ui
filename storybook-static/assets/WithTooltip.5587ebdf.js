import{r as e,_ as t,s as r,t as n,R as o,u as i,v as a,w as s,x as c,y as u,z as l}from"./vendor.0cd6758e.js";var f=e.exports.createContext(),p=e.exports.createContext();function d(t){var r=t.children,n=e.exports.useState(null),o=n[0],i=n[1],a=e.exports.useRef(!1);e.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=e.exports.useCallback((function(e){a.current||i(e)}),[]);return e.exports.createElement(f.Provider,{value:o},e.exports.createElement(p.Provider,{value:s},r))}var h=function(e){return Array.isArray(e)?e[0]:e},m=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},g=function(e,t){if("function"==typeof e)return m(e,t);null!=e&&(e.current=t)},v=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},y="undefined"!=typeof window&&window.document&&window.document.createElement?e.exports.useLayoutEffect:e.exports.useEffect,b="top",w="bottom",O="right",x="left",k=[b,w,O,x],C=k.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),T=[].concat(k,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),E=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function R(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function S(e){return e instanceof P(e).Element||e instanceof Element}function j(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function H(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}var A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];j(o)&&R(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});j(n)&&R(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function M(e){return e.split("-")[0]}function L(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function B(e){var t=L(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function D(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&H(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function W(e){return P(e).getComputedStyle(e)}function U(e){return["table","td","th"].indexOf(R(e))>=0}function V(e){return((S(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){return"html"===R(e)?e:e.assignedSlot||e.parentNode||(H(e)?e.host:null)||V(e)}function N(e){return j(e)&&"fixed"!==W(e).position?e.offsetParent:null}function X(e){for(var t=P(e),r=N(e);r&&U(r)&&"static"===W(r).position;)r=N(r);return r&&("html"===R(r)||"body"===R(r)&&"static"===W(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&j(e)&&"fixed"===W(e).position)return null;for(var r=z(e);j(r)&&["html","body"].indexOf(R(r))<0;){var n=W(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var q=Math.max,F=Math.min,I=Math.round;function _(e,t,r){return q(e,F(t,r))}function $(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:I(I(t*n)/n)||0,y:I(I(r*n)/n)||0}}(i):"function"==typeof u?u(i):i,f=l.x,p=void 0===f?0:f,d=l.y,h=void 0===d?0:d,m=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),v=x,y=b,k=window;if(c){var C=X(r),T="clientHeight",E="clientWidth";C===P(r)&&"static"!==W(C=V(r)).position&&(T="scrollHeight",E="scrollWidth"),C=C,o===b&&(y=w,h-=C[T]-n.height,h*=s?1:-1),o===x&&(v=O,p-=C[E]-n.width,p*=s?1:-1)}var R,S=Object.assign({position:a},c&&J);return s?Object.assign({},S,((R={})[y]=g?"0":"",R[v]=m?"0":"",R.transform=(k.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",R)):Object.assign({},S,((t={})[y]=g?h+"px":"",t[v]=m?p+"px":"",t.transform="",t))}var Q={passive:!0};var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function ne(e){var t=P(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function oe(e){return L(V(e)).left+ne(e).scrollLeft}function ie(e){var t=W(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function ae(e){return["html","body","#document"].indexOf(R(e))>=0?e.ownerDocument.body:j(e)&&ie(e)?e:ae(z(e))}function se(e,t){var r;void 0===t&&(t=[]);var n=ae(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=P(n),a=o?[i].concat(i.visualViewport||[],ie(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(se(z(a)))}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t){return"viewport"===t?ce(function(e){var t=P(e),r=V(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+oe(e),y:s}}(e)):j(t)?function(e){var t=L(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ce(function(e){var t,r=V(e),n=ne(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+oe(e),c=-n.scrollTop;return"rtl"===W(o||r).direction&&(s+=q(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(V(e)))}function le(e,t,r){var n="clippingParents"===t?function(e){var t=se(z(e)),r=["absolute","fixed"].indexOf(W(e).position)>=0&&j(e)?X(e):e;return S(r)?t.filter((function(e){return S(e)&&D(e,r)&&"body"!==R(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ue(e,r);return t.top=q(n.top,t.top),t.right=F(n.right,t.right),t.bottom=F(n.bottom,t.bottom),t.left=q(n.left,t.left),t}),ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){return e.split("-")[1]}function pe(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?M(o):null,a=o?fe(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case b:t={x:s,y:r.y-n.height};break;case w:t={x:s,y:r.y+r.height};break;case O:t={x:r.x+r.width,y:c};break;case x:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var u=i?Y(i):null;if(null!=u){var l="y"===u?"height":"width";switch(a){case"start":t[u]=t[u]-(r[l]/2-n[l]/2);break;case"end":t[u]=t[u]+(r[l]/2-n[l]/2)}}return t}function de(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,s=r.rootBoundary,c=void 0===s?"viewport":s,u=r.elementContext,l=void 0===u?"popper":u,f=r.altBoundary,p=void 0!==f&&f,d=r.padding,h=void 0===d?0:d,m=$("number"!=typeof h?h:G(h,k)),g="popper"===l?"reference":"popper",v=e.elements.reference,y=e.rects.popper,x=e.elements[p?g:l],C=le(S(x)?x:x.contextElement||V(e.elements.popper),a,c),T=L(v),E=pe({reference:T,element:y,strategy:"absolute",placement:o}),R=ce(Object.assign({},y,E)),P="popper"===l?R:T,j={top:C.top-P.top+m.top,bottom:P.bottom-C.bottom+m.bottom,left:C.left-P.left+m.left,right:P.right-C.right+m.right},H=e.modifiersData.offset;if("popper"===l&&H){var A=H[o];Object.keys(j).forEach((function(e){var t=[O,w].indexOf(e)>=0?1:-1,r=[b,w].indexOf(e)>=0?"y":"x";j[e]+=A[r]*t}))}return j}function he(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function me(e){return[b,O,w,x].some((function(t){return e[t]>=0}))}function ge(e,t,r){void 0===r&&(r=!1);var n,o,i=V(t),a=L(e),s=j(t),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!r)&&(("body"!==R(t)||ie(i))&&(c=(n=t)!==P(n)&&j(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:ne(n)),j(t)?((u=L(t)).x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=oe(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function ve(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var ye={placement:"bottom",modifiers:[],strategy:"absolute"};function be(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function we(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?ye:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ye,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(r){f(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:S(e)?se(e):e.contextElement?se(e.contextElement):[],popper:se(t)};var o,a,u=function(e){var t=ve(e);return E.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((o=[].concat(n,s.options.modifiers),a=o.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=u.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:n}),a=function(){};c.push(i||a)}})),l.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper;if(be(t,r)){s.rects={reference:ge(t,X(r),"fixed"===s.options.strategy),popper:B(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:l})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),u=!0}};if(!be(e,t))return l;function f(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var Oe=we({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=P(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",r.update,Q)})),s&&c.addEventListener("resize",r.update,Q),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",r.update,Q)})),s&&c.removeEventListener("resize",r.update,Q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,u={placement:M(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},A,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,r){return e[r]=function(e,t,r){var n=M(e),o=[x,b].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[x,O].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,u=r.padding,l=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=M(g),y=c||(v===g||!h?[ee(g)]:function(e){if("auto"===M(e))return[];var t=ee(e);return[re(e),t,re(t)]}(g)),E=[g].concat(y).reduce((function(e,r){return e.concat("auto"===M(r)?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=void 0===c?T:c,l=fe(n),f=l?s?C:C.filter((function(e){return fe(e)===l})):k,p=f.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=de(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[M(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:l,rootBoundary:f,padding:u,flipVariations:h,allowedAutoPlacements:m}):r)}),[]),R=t.rects.reference,P=t.rects.popper,S=new Map,j=!0,H=E[0],A=0;A<E.length;A++){var L=E[A],B=M(L),D="start"===fe(L),W=[b,w].indexOf(B)>=0,U=W?"width":"height",V=de(t,{placement:L,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),z=W?D?O:x:D?w:b;R[U]>P[U]&&(z=ee(z));var N=ee(z),X=[];if(i&&X.push(V[B]<=0),s&&X.push(V[z]<=0,V[N]<=0),X.every((function(e){return e}))){H=L,j=!1;break}S.set(L,X)}if(j)for(var Y=function(e){var t=E.find((function(t){var r=S.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"},q=h?3:1;q>0;q--){if("break"===Y(q))break}t.placement!==H&&(t.modifiersData[n]._skip=!0,t.placement=H,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,u=r.rootBoundary,l=r.altBoundary,f=r.padding,p=r.tether,d=void 0===p||p,h=r.tetherOffset,m=void 0===h?0:h,g=de(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),v=M(t.placement),y=fe(t.placement),k=!y,C=Y(v),T="x"===C?"y":"x",E=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,S="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,j={x:0,y:0};if(E){if(i||s){var H="y"===C?b:x,A="y"===C?w:O,L="y"===C?"height":"width",D=E[C],W=E[C]+g[H],U=E[C]-g[A],V=d?-P[L]/2:0,z="start"===y?R[L]:P[L],N="start"===y?-P[L]:-R[L],I=t.elements.arrow,$=d&&I?B(I):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[H],K=G[A],Q=_(0,R[L],$[L]),Z=k?R[L]/2-V-Q-J-S:z-Q-J-S,ee=k?-R[L]/2+V+Q+K+S:N+Q+K+S,te=t.elements.arrow&&X(t.elements.arrow),re=te?"y"===C?te.clientTop||0:te.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][C]:0,oe=E[C]+Z-ne-re,ie=E[C]+ee-ne;if(i){var ae=_(d?F(W,oe):W,D,d?q(U,ie):U);E[C]=ae,j[C]=ae-D}if(s){var se="x"===C?b:x,ce="x"===C?w:O,ue=E[T],le=ue+g[se],pe=ue-g[ce],he=_(d?F(le,oe):le,ue,d?q(pe,ie):pe);E[T]=he,j[T]=he-ue}}t.modifiersData[n]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=M(r.placement),c=Y(s),u=[x,O].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return $("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,r),f=B(i),p="y"===c?b:x,d="y"===c?w:O,h=r.rects.reference[u]+r.rects.reference[c]-a[c]-r.rects.popper[u],m=a[c]-r.rects.reference[c],g=X(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=h/2-m/2,C=l[p],T=v-f[u]-l[d],E=v/2-f[u]/2+y,R=_(C,E,T),P=c;r.modifiersData[n]=((t={})[P]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&D(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=de(t,{elementContext:"reference"}),s=de(t,{altBoundary:!0}),c=he(a,n),u=he(s,o,i),l=me(c),f=me(u);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}),xe="undefined"!=typeof Element,ke="function"==typeof Map,Ce="function"==typeof Set,Te="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function Ee(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,o,i;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!Ee(e[n],t[n]))return!1;return!0}if(ke&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!Ee(n.value[1],t.get(n.value[0])))return!1;return!0}if(Ce&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Te&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(xe&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==o[n]&&"__v"!==o[n]&&"__o"!==o[n]||!e.$$typeof)&&!Ee(e[o[n]],t[o[n]]))return!1;return!0}return e!=e&&t!=t}var Re=function(e,t){try{return Ee(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},Pe=[],Se=function(){},je=function(){return Promise.resolve(null)},He=[];function Ae(t){var r=t.placement,n=void 0===r?"bottom":r,o=t.strategy,i=void 0===o?"absolute":o,a=t.modifiers,s=void 0===a?He:a,c=t.referenceElement,u=t.onFirstUpdate,l=t.innerRef,p=t.children,d=e.exports.useContext(f),m=e.exports.useState(null),b=m[0],w=m[1],O=e.exports.useState(null),x=O[0],k=O[1];e.exports.useEffect((function(){g(l,b)}),[l,b]);var C=e.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:u,modifiers:[].concat(s,[{name:"arrow",enabled:null!=x,options:{element:x}}])}}),[n,i,u,s,x]),T=function(t,r,n){void 0===n&&(n={});var o=e.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Pe},a=e.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],u=e.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:v(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:v(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),l=e.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return Re(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),f=e.exports.useRef();return y((function(){f.current&&f.current.setOptions(l)}),[l]),y((function(){if(null!=t&&null!=r){var e=(n.createPopper||Oe)(t,r,l);return f.current=e,function(){e.destroy(),f.current=null}}}),[t,r,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||d,b,C),E=T.state,R=T.styles,P=T.forceUpdate,S=T.update,j=e.exports.useMemo((function(){return{ref:w,style:R.popper,placement:E?E.placement:n,hasPopperEscaped:E&&E.modifiersData.hide?E.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:E&&E.modifiersData.hide?E.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:R.arrow,ref:k},forceUpdate:P||Se,update:S||je}}),[w,k,n,E,R,S,P]);return h(p)(j)}function Me(t){var r=t.children,n=t.innerRef,o=e.exports.useContext(p),i=e.exports.useCallback((function(e){g(n,e),m(o,e)}),[n,o]);return e.exports.useEffect((function(){return function(){return g(n,null)}})),e.exports.useEffect((function(){}),[o]),h(r)({ref:i})}var Le=o.createContext({}),Be=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},De=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},We=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},Ue=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,We(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),r({},e,{style:r({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),r({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Be(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Be(t.props.hideTooltip,e.onMouseLeave)},{style:r({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}t(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},i.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},i.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},i.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,n=e.tooltip;return o.createElement(Le.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},i.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},n}(e.exports.Component);Ue.contextType=Le;var Ve=function(e){function a(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var n=e.pageX,o=e.pageY;t.clearScheduled();var i={tooltipShown:!0};t.props.followCursor&&(i=r({},i,{pageX:n,pageY:o})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(i)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),r({},e,t.isTriggeredBy("click")&&{onClick:Be(t.clickToggle,e.onClick),onTouchEnd:Be(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Be(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&r({onMouseEnter:Be(t.showTooltip,e.onMouseEnter),onMouseLeave:Be(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Be(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Be(t.showTooltip,e.onFocus),onBlur:Be(t.hideTooltip,e.onBlur)})},t}t(a,e);var s=a.prototype;return s.componentWillUnmount=function(){this.clearScheduled()},s.render=function(){var e=this,t=this.props,a=t.children,s=t.tooltip,c=t.placement,u=t.trigger,l=t.getTriggerRef,f=t.modifiers,p=t.closeOnReferenceHidden,h=t.usePortal,m=t.portalContainer,g=t.followCursor,v=t.getTooltipRef,y=t.mutationObserverOptions,b=n(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),w=o.createElement(Ae,r({innerRef:v,placement:c,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(f)},b),(function(t){var n=t.ref,i=t.style,a=t.placement,c=t.arrowProps,l=t.isReferenceHidden,f=t.update;if(g&&e.popperOffset){var d=e.state,h=d.pageX,m=d.pageY,v=e.popperOffset,b=v.width,w=v.height,O=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,x=m+w>window.pageYOffset+document.body.offsetHeight?m-w:m;i.transform="translate3d("+O+"px, "+x+"px, 0"}return o.createElement(Ue,r({arrowProps:c,closeOnReferenceHidden:p,isReferenceHidden:l,placement:a,update:f,style:i,tooltip:s,trigger:u,mutationObserverOptions:y},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:n}))}));return o.createElement(d,null,o.createElement(Me,{innerRef:l},(function(t){var r=t.ref;return a({getTriggerProps:e.getTriggerProps,triggerRef:r})})),this.getState()&&(h?i.exports.createPortal(w,m):w))},s.isControlled=function(){return void 0!==this.props.tooltipShown},s.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},s.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},a}(e.exports.Component);function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}Ve.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:De()?document.body:null,trigger:"hover",usePortal:De(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Xe,Ye,qe=a(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Fe=s.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(qe("top",n,-8,"auto"),"px"),top:"".concat(qe("bottom",n,-8,"auto"),"px"),right:"".concat(qe("left",n,-8,"auto"),"px"),left:"".concat(qe("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(qe("top",n,"0",8),"px"),borderTopWidth:"".concat(qe("bottom",n,"0",8),"px"),borderRightWidth:"".concat(qe("left",n,"0",8),"px"),borderLeftWidth:"".concat(qe("right",n,"0",8),"px"),borderTopColor:qe("top",n,t.color[r]||r||"light"===t.base?c(t.background.app):u(t.background.app),"transparent"),borderBottomColor:qe("bottom",n,t.color[r]||r||"light"===t.base?c(t.background.app):u(t.background.app),"transparent"),borderLeftColor:qe("left",n,t.color[r]||r||"light"===t.base?c(t.background.app):u(t.background.app),"transparent"),borderRightColor:qe("right",n,t.color[r]||r||"light"===t.base?c(t.background.app):u(t.background.app),"transparent")}})),Ie=s.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?c(t.background.app):u(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),_e=function(e){var t=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,u=Ne(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return o.createElement(Ie,ze({hasChrome:r,placement:t,ref:a},u,{color:c}),r&&o.createElement(Fe,ze({placement:t,ref:s},i,{color:c})),n)};function $e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ke(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Qe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}_e.displayName="Tooltip",_e.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Ze=l.document,et=s.div(Xe||(Xe=Qe(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),tt=s.g(Ye||(Ye=Qe(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),rt=function(e){var t=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,u=e.tooltipShown,l=e.onVisibilityChange,f=Ke(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?tt:et;return o.createElement(Ve,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:l,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,n=e.tooltipRef,i=e.arrowRef,c=e.placement;return o.createElement(_e,Je({hasChrome:a,placement:c,tooltipRef:n,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return l(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return o.createElement(p,Je({ref:r},t(),f),c)}))};rt.displayName="WithTooltipPure",rt.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var nt=function(t){var r=t.startOpen,n=t.onVisibilityChange,i=Ke(t,["startOpen","onVisibilityChange"]),a=$e(e.exports.useState(r||!1),2),s=a[0],c=a[1],u=e.exports.useCallback((function(e){n&&!1===n(e)||c(e)}),[n]);return e.exports.useEffect((function(){var e=function(){return u(!1)};Ze.addEventListener("keydown",e,!1);var t=Array.from(Ze.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(r){}})))}catch(n){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){Ze.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),o.createElement(rt,Je({},i,{tooltipShown:s,onVisibilityChange:u}))};nt.displayName="WithToolTipState";export{nt as WithToolTipState,nt as WithTooltip,rt as WithTooltipPure};
//# sourceMappingURL=WithTooltip.5587ebdf.js.map
