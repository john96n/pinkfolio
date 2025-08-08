(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},ri={},qs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),gc=Symbol.for("react.portal"),hc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Sc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Ua=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var eo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},to=Object.assign,no={};function on(e,t,n){this.props=e,this.context=t,this.refs=no,this.updater=n||eo}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ro(){}ro.prototype=on.prototype;function Vl(e,t,n){this.props=e,this.context=t,this.refs=no,this.updater=n||eo}var Kl=Vl.prototype=new ro;Kl.constructor=Vl;to(Kl,on.prototype);Kl.isPureReactComponent=!0;var $a=Array.isArray,io=Object.prototype.hasOwnProperty,Hl={current:null},lo={key:!0,ref:!0,__self:!0,__source:!0};function ao(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)io.call(t,r)&&!lo.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Zn,type:e,key:l,ref:a,props:i,_owner:Hl.current}}function Ec(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wa=/\/+/g;function ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function kr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case gc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ji(a,0):r,$a(i)?(n="",e!=null&&(n=e.replace(Wa,"$&/")+"/"),kr(i,t,n,"",function(d){return d})):i!=null&&(Gl(i)&&(i=Ec(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wa,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",$a(e))for(var o=0;o<e.length;o++){l=e[o];var u=r+ji(l,o);a+=kr(l,t,n,u,i)}else if(u=zc(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=r+ji(l,o++),a+=kr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ir(e,t,n){if(e==null)return e;var r=[],i=0;return kr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},jr={transition:null},Pc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Hl};function so(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=hc;L.Profiler=yc;L.PureComponent=Vl;L.StrictMode=vc;L.Suspense=jc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pc;L.act=so;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=to({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Hl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)io.call(t,u)&&!lo.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:Zn,type:e.type,key:i,ref:l,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};L.createElement=ao;L.createFactory=function(e){var t=ao.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:kc,render:e}};L.isValidElement=Gl;L.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:bc}};L.memo=function(e,t){return{$$typeof:Sc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};L.unstable_act=so;L.useCallback=function(e,t){return oe.current.useCallback(e,t)};L.useContext=function(e){return oe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};L.useEffect=function(e,t){return oe.current.useEffect(e,t)};L.useId=function(){return oe.current.useId()};L.useImperativeHandle=function(e,t,n){return oe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return oe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return oe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return oe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return oe.current.useReducer(e,t,n)};L.useRef=function(e){return oe.current.useRef(e)};L.useState=function(e){return oe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return oe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return oe.current.useTransition()};L.version="18.3.1";qs.exports=L;var fe=qs.exports;const Lc=mc(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=fe,Mc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Ic=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={key:!0,ref:!0,__self:!0,__source:!0};function oo(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Dc.call(t,r)&&!Fc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Mc,type:e,key:l,ref:a,props:i,_owner:Ic.current}}ri.Fragment=Tc;ri.jsx=oo;ri.jsxs=oo;Js.exports=ri;var s=Js.exports,Qi={},uo={exports:{}},we={},co={exports:{}},fo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,b){var P=N.length;N.push(b);e:for(;0<P;){var K=P-1>>>1,X=N[K];if(0<i(X,b))N[K]=b,N[P]=X,P=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],P=N.pop();if(P!==b){N[0]=P;e:for(var K=0,X=N.length,nr=X>>>1;K<nr;){var xt=2*(K+1)-1,ki=N[xt],wt=xt+1,rr=N[wt];if(0>i(ki,P))wt<X&&0>i(rr,ki)?(N[K]=rr,N[wt]=P,K=wt):(N[K]=ki,N[xt]=P,K=xt);else if(wt<X&&0>i(rr,P))N[K]=rr,N[wt]=P,K=wt;else break e}}return b}function i(N,b){var P=N.sortIndex-b.sortIndex;return P!==0?P:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],d=[],h=1,g=null,m=3,v=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var b=n(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=N)r(d),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(d)}}function y(N){if(k=!1,p(N),!w)if(n(u)!==null)w=!0,xi(S);else{var b=n(d);b!==null&&wi(y,b.startTime-N)}}function S(N,b){w=!1,k&&(k=!1,f(C),C=-1),v=!0;var P=m;try{for(p(b),g=n(u);g!==null&&(!(g.expirationTime>b)||N&&!be());){var K=g.callback;if(typeof K=="function"){g.callback=null,m=g.priorityLevel;var X=K(g.expirationTime<=b);b=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(u)&&r(u),p(b)}else r(u);g=n(u)}if(g!==null)var nr=!0;else{var xt=n(d);xt!==null&&wi(y,xt.startTime-b),nr=!1}return nr}finally{g=null,m=P,v=!1}}var z=!1,E=null,C=-1,V=5,_=-1;function be(){return!(e.unstable_now()-_<V)}function dn(){if(E!==null){var N=e.unstable_now();_=N;var b=!0;try{b=E(!0,N)}finally{b?fn():(z=!1,E=null)}}else z=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Ba=new MessageChannel,pc=Ba.port2;Ba.port1.onmessage=dn,fn=function(){pc.postMessage(null)}}else fn=function(){A(dn,0)};function xi(N){E=N,z||(z=!0,fn())}function wi(N,b){C=A(function(){N(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,xi(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var P=m;m=b;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return b()}finally{m=P}},e.unstable_scheduleCallback=function(N,b,P){var K=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?K+P:K):P=K,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,N={id:h++,callback:b,priorityLevel:N,startTime:P,expirationTime:X,sortIndex:-1},P>K?(N.sortIndex=P,t(d,N),n(u)===null&&N===n(d)&&(k?(f(C),C=-1):k=!0,wi(y,P-K))):(N.sortIndex=X,t(u,N),w||v||(w=!0,xi(S))),N},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(N){var b=m;return function(){var P=m;m=b;try{return N.apply(this,arguments)}finally{m=P}}}})(fo);co.exports=fo;var Rc=co.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=fe,xe=Rc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var po=new Set,Dn={};function Tt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Dn[e]=t,e=0;e<t.length;e++)po.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Va={},Ka={};function Bc(e){return Yi.call(Ka,e)?!0:Yi.call(Va,e)?!1:Oc.test(e)?Ka[e]=!0:(Va[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ql,Yl);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ql,Yl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ql,Yl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,i,r)&&(n=null),r||i===null?Bc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),mo=Symbol.for("react.provider"),go=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),ql=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),ho=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Si;function kn(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Ni=!1;function zi(e,t){if(!e||Ni)return"";Ni=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{Ni=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Wc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Ft:return"Portal";case Xi:return"Profiler";case Zl:return"StrictMode";case Zi:return"Suspense";case Ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case go:return(e.displayName||"Context")+".Consumer";case mo:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ql:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qi(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=vo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Kc(e))}function yo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ga(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xo(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function tl(e,t){xo(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(jn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function wo(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ko(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,jo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function So(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function No(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=So(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Yt=null,Xt=null;function Za(e){if(e=er(e)){if(typeof ol!="function")throw Error(x(280));var t=e.stateNode;t&&(t=oi(t),ol(e.stateNode,e.type,t))}}function zo(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function Eo(){if(Yt){var e=Yt,t=Xt;if(Xt=Yt=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Co(e,t){return e(t)}function bo(){}var Ei=!1;function Po(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return Co(e,t,n)}finally{Ei=!1,(Yt!==null||Xt!==null)&&(bo(),Eo())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ul=!1;if(Qe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ul=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ul=!1}function Qc(e,t,n,r,i,l,a,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var En=!1,Dr=null,Ir=!1,cl=null,Yc={onError:function(e){En=!0,Dr=e}};function Xc(e,t,n,r,i,l,a,o,u){En=!1,Dr=null,Qc.apply(Yc,arguments)}function Zc(e,t,n,r,i,l,a,o,u){if(Xc.apply(this,arguments),En){if(En){var d=Dr;En=!1,Dr=null}else throw Error(x(198));Ir||(Ir=!0,cl=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(Dt(e)!==e)throw Error(x(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ja(i),e;if(l===r)return Ja(i),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function _o(e){return e=Jc(e),e!==null?Mo(e):null}function Mo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mo(e);if(t!==null)return t;e=e.sibling}return null}var To=xe.unstable_scheduleCallback,qa=xe.unstable_cancelCallback,qc=xe.unstable_shouldYield,ed=xe.unstable_requestPaint,H=xe.unstable_now,td=xe.unstable_getCurrentPriorityLevel,ta=xe.unstable_ImmediatePriority,Do=xe.unstable_UserBlockingPriority,Fr=xe.unstable_NormalPriority,nd=xe.unstable_LowPriority,Io=xe.unstable_IdlePriority,ii=null,Oe=null;function rd(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ad,id=Math.log,ld=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(id(e)/ld|0)|0}var or=64,ur=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Sn(o):(l&=a,l!==0&&(r=Sn(l)))}else a=n&~i,a!==0?r=Sn(a):l!==0&&(r=Sn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),i=1<<n,r|=e[n],t&=~i;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Te(l),o=1<<a,u=i[a];u===-1?(!(o&n)||o&r)&&(i[a]=sd(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fo(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Te(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var T=0;function Ro(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ao,ra,Oo,Bo,Uo,fl=!1,cr=[],at=null,st=null,ot=null,Rn=new Map,An=new Map,nt=[],cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function gn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=er(t),t!==null&&ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dd(e,t,n,r,i){switch(t){case"focusin":return at=gn(at,e,t,n,r,i),!0;case"dragenter":return st=gn(st,e,t,n,r,i),!0;case"mouseover":return ot=gn(ot,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Rn.set(l,gn(Rn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,An.set(l,gn(An.get(l)||null,e,t,n,r,i)),!0}return!1}function $o(e){var t=St(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Lo(n),t!==null){e.blockedOn=t,Uo(e.priority,function(){Oo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=er(n),t!==null&&ra(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){Sr(e)&&n.delete(t)}function fd(){fl=!1,at!==null&&Sr(at)&&(at=null),st!==null&&Sr(st)&&(st=null),ot!==null&&Sr(ot)&&(ot=null),Rn.forEach(ts),An.forEach(ts)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,fd)))}function On(e){function t(i){return hn(i,e)}if(0<cr.length){hn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&hn(at,e),st!==null&&hn(st,e),ot!==null&&hn(ot,e),Rn.forEach(t),An.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)$o(n),n.blockedOn===null&&nt.shift()}var Zt=Je.ReactCurrentBatchConfig,Ar=!0;function pd(e,t,n,r){var i=T,l=Zt.transition;Zt.transition=null;try{T=1,ia(e,t,n,r)}finally{T=i,Zt.transition=l}}function md(e,t,n,r){var i=T,l=Zt.transition;Zt.transition=null;try{T=4,ia(e,t,n,r)}finally{T=i,Zt.transition=l}}function ia(e,t,n,r){if(Ar){var i=pl(e,t,n,r);if(i===null)Ri(e,t,r,Or,n),es(e,r);else if(dd(i,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<cd.indexOf(e)){for(;i!==null;){var l=er(i);if(l!==null&&Ao(l),l=pl(e,t,n,r),l===null&&Ri(e,t,r,Or,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ri(e,t,r,null,n)}}var Or=null;function pl(e,t,n,r){if(Or=null,e=ea(r),e=St(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Wo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case ta:return 1;case Do:return 4;case Fr:case nd:return 16;case Io:return 536870912;default:return 16}default:return 16}}var it=null,la=null,Nr=null;function Vo(){if(Nr)return Nr;var e,t=la,n=t.length,r,i="value"in it?it.value:it.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Nr=i.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function ns(){return!1}function ke(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?dr:ns,this.isPropagationStopped=ns,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=ke(un),qn=$({},un,{view:0,detail:0}),gd=ke(qn),bi,Pi,vn,li=$({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(bi=e.screenX-vn.screenX,Pi=e.screenY-vn.screenY):Pi=bi=0,vn=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),rs=ke(li),hd=$({},li,{dataTransfer:0}),vd=ke(hd),yd=$({},qn,{relatedTarget:0}),Li=ke(yd),xd=$({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=ke(xd),kd=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=ke(kd),Sd=$({},un,{data:0}),is=ke(Sd),Nd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function sa(){return Cd}var bd=$({},qn,{key:function(e){if(e.key){var t=Nd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=ke(bd),Ld=$({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=ke(Ld),_d=$({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Md=ke(_d),Td=$({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=ke(Td),Id=$({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=ke(Id),Rd=[9,13,27,32],oa=Qe&&"CompositionEvent"in window,Cn=null;Qe&&"documentMode"in document&&(Cn=document.documentMode);var Ad=Qe&&"TextEvent"in window&&!Cn,Ko=Qe&&(!oa||Cn&&8<Cn&&11>=Cn),as=" ",ss=!1;function Ho(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Go(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Od(e,t){switch(e){case"compositionend":return Go(t);case"keypress":return t.which!==32?null:(ss=!0,as);case"textInput":return e=t.data,e===as&&ss?null:e;default:return null}}function Bd(e,t){if(At)return e==="compositionend"||!oa&&Ho(e,t)?(e=Vo(),Nr=la=it=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ko&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function Qo(e,t,n,r){zo(r),t=Br(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bn=null,Bn=null;function $d(e){lu(e,0)}function ai(e){var t=Ut(e);if(yo(t))return e}function Wd(e,t){if(e==="change")return t}var Yo=!1;if(Qe){var _i;if(Qe){var Mi="oninput"in document;if(!Mi){var us=document.createElement("div");us.setAttribute("oninput","return;"),Mi=typeof us.oninput=="function"}_i=Mi}else _i=!1;Yo=_i&&(!document.documentMode||9<document.documentMode)}function cs(){bn&&(bn.detachEvent("onpropertychange",Xo),Bn=bn=null)}function Xo(e){if(e.propertyName==="value"&&ai(Bn)){var t=[];Qo(t,Bn,e,ea(e)),Po($d,t)}}function Vd(e,t,n){e==="focusin"?(cs(),bn=t,Bn=n,bn.attachEvent("onpropertychange",Xo)):e==="focusout"&&cs()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Bn)}function Hd(e,t){if(e==="click")return ai(t)}function Gd(e,t){if(e==="input"||e==="change")return ai(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Qd;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yi.call(t,i)||!Ie(e[i],t[i]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fs(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function Zo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jo(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Jo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zo(n.ownerDocument.documentElement,n)){if(r!==null&&ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=fs(n,l);var a=fs(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Qe&&"documentMode"in document&&11>=document.documentMode,Ot=null,ml=null,Pn=null,gl=!1;function ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||Ot==null||Ot!==Tr(r)||(r=Ot,"selectionStart"in r&&ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Un(Pn,r)||(Pn=r,r=Br(ml,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Ti={},qo={};Qe&&(qo=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function si(e){if(Ti[e])return Ti[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qo)return Ti[e]=t[n];return e}var eu=si("animationend"),tu=si("animationiteration"),nu=si("animationstart"),ru=si("transitionend"),iu=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){iu.set(e,t),Tt(t,[e])}for(var Di=0;Di<ms.length;Di++){var Ii=ms[Di],Zd=Ii.toLowerCase(),Jd=Ii[0].toUpperCase()+Ii.slice(1);ht(Zd,"on"+Jd)}ht(eu,"onAnimationEnd");ht(tu,"onAnimationIteration");ht(nu,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(ru,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==l&&i.isPropagationStopped())break e;gs(i,o,d),l=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,d=o.currentTarget,o=o.listener,u!==l&&i.isPropagationStopped())break e;gs(i,o,d),l=u}}}if(Ir)throw e=cl,Ir=!1,cl=null,e}function F(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(au(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),au(n,e,r,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[pr]){e[pr]=!0,po.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Fi(n,!1,e),Fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Fi("selectionchange",!1,t))}}function au(e,t,n,r){switch(Wo(t)){case 1:var i=pd;break;case 4:i=md;break;default:i=ia}n=i.bind(null,t,n,e),i=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ri(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;o!==null;){if(a=St(o),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}o=o.parentNode}}r=r.return}Po(function(){var d=l,h=ea(n),g=[];e:{var m=iu.get(e);if(m!==void 0){var v=aa,w=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":v=Pd;break;case"focusin":w="focus",v=Li;break;case"focusout":w="blur",v=Li;break;case"beforeblur":case"afterblur":v=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Md;break;case eu:case tu:case nu:v=wd;break;case ru:v=Dd;break;case"scroll":v=gd;break;case"wheel":v=Fd;break;case"copy":case"cut":case"paste":v=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ls}var k=(t&4)!==0,A=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Fn(c,f),y!=null&&k.push(Wn(c,y,p)))),A)break;c=c.return}0<k.length&&(m=new v(m,w,null,n,h),g.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==sl&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ye]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=d,w=w?St(w):null,w!==null&&(A=Dt(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=d),v!==w)){if(k=rs,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ls,y="onPointerLeave",f="onPointerEnter",c="pointer"),A=v==null?m:Ut(v),p=w==null?m:Ut(w),m=new k(y,c+"leave",v,n,h),m.target=A,m.relatedTarget=p,y=null,St(h)===d&&(k=new k(f,c+"enter",w,n,h),k.target=p,k.relatedTarget=A,y=k),A=y,v&&w)t:{for(k=v,f=w,c=0,p=k;p;p=It(p))c++;for(p=0,y=f;y;y=It(y))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;v!==null&&hs(g,m,v,k,!1),w!==null&&A!==null&&hs(g,A,w,k,!0)}}e:{if(m=d?Ut(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Wd;else if(os(m))if(Yo)S=Gd;else{S=Kd;var z=Vd}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Hd);if(S&&(S=S(e,d))){Qo(g,S,n,h);break e}z&&z(e,m,d),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&nl(m,"number",m.value)}switch(z=d?Ut(d):window,e){case"focusin":(os(z)||z.contentEditable==="true")&&(Ot=z,ml=d,Pn=null);break;case"focusout":Pn=ml=Ot=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,ps(g,n,h);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ps(g,n,h)}var E;if(oa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else At?Ho(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ko&&n.locale!=="ko"&&(At||C!=="onCompositionStart"?C==="onCompositionEnd"&&At&&(E=Vo()):(it=h,la="value"in it?it.value:it.textContent,At=!0)),z=Br(d,C),0<z.length&&(C=new is(C,e,null,n,h),g.push({event:C,listeners:z}),E?C.data=E:(E=Go(n),E!==null&&(C.data=E)))),(E=Ad?Od(e,n):Bd(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(h=new is("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=E))}lu(g,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Fn(e,n),l!=null&&r.unshift(Wn(e,l,i)),l=Fn(e,t),l!=null&&r.push(Wn(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,d=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&d!==null&&(o=d,i?(u=Fn(n,l),u!=null&&a.unshift(Wn(n,u,o))):i||(u=Fn(n,l),u!=null&&a.push(Wn(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ef=/\r\n?/g,tf=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(ef,`
`).replace(tf,"")}function mr(e,t,n){if(t=vs(t),vs(e)!==t&&n)throw Error(x(425))}function Ur(){}var hl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,ys=typeof Promise=="function"?Promise:void 0,rf=typeof queueMicrotask=="function"?queueMicrotask:typeof ys<"u"?function(e){return ys.resolve(null).then(e).catch(lf)}:xl;function lf(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);On(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+cn,Vn="__reactProps$"+cn,Ye="__reactContainer$"+cn,wl="__reactEvents$"+cn,af="__reactListeners$"+cn,sf="__reactHandles$"+cn;function St(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xs(e);e!==null;){if(n=e[Ae])return n;e=xs(e)}return t}e=n,n=e.parentNode}return null}function er(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function oi(e){return e[Vn]||null}var kl=[],$t=-1;function vt(e){return{current:e}}function R(e){0>$t||(e.current=kl[$t],kl[$t]=null,$t--)}function I(e,t){$t++,kl[$t]=e.current,e.current=t}var gt={},le=vt(gt),pe=vt(!1),bt=gt;function tn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function $r(){R(pe),R(le)}function ws(e,t,n){if(le.current!==gt)throw Error(x(168));I(le,t),I(pe,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Vc(e)||"Unknown",i));return $({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,bt=le.current,I(le,e),I(pe,pe.current),!0}function ks(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=su(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,R(pe),R(le),I(le,e)):R(pe),I(pe,n)}var Ve=null,ui=!1,Oi=!1;function ou(e){Ve===null?Ve=[e]:Ve.push(e)}function of(e){ui=!0,ou(e)}function yt(){if(!Oi&&Ve!==null){Oi=!0;var e=0,t=T;try{var n=Ve;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,ui=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),To(ta,yt),i}finally{T=t,Oi=!1}}return null}var Wt=[],Vt=0,Vr=null,Kr=0,je=[],Se=0,Pt=null,Ke=1,He="";function kt(e,t){Wt[Vt++]=Kr,Wt[Vt++]=Vr,Vr=e,Kr=t}function uu(e,t,n){je[Se++]=Ke,je[Se++]=He,je[Se++]=Pt,Pt=e;var r=Ke;e=He;var i=32-Te(r)-1;r&=~(1<<i),n+=1;var l=32-Te(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ke=1<<32-Te(t)+i|n<<i|r,He=l+e}else Ke=1<<l|n<<i|r,He=e}function ca(e){e.return!==null&&(kt(e,1),uu(e,1,0))}function da(e){for(;e===Vr;)Vr=Wt[--Vt],Wt[Vt]=null,Kr=Wt[--Vt],Wt[Vt]=null;for(;e===Pt;)Pt=je[--Se],je[Se]=null,He=je[--Se],je[Se]=null,Ke=je[--Se],je[Se]=null}var ye=null,ve=null,O=!1,Me=null;function cu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ke,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(O){var t=ve;if(t){var n=t;if(!js(e,t)){if(jl(e))throw Error(x(418));t=ut(n.nextSibling);var r=ye;t&&js(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,O=!1,ye=e)}}else{if(jl(e))throw Error(x(418));e.flags=e.flags&-4097|2,O=!1,ye=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function gr(e){if(e!==ye)return!1;if(!O)return Ss(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=ve)){if(jl(e))throw du(),Error(x(418));for(;t;)cu(e,t),t=ut(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ut(e.stateNode.nextSibling):null;return!0}function du(){for(var e=ve;e;)e=ut(e.nextSibling)}function nn(){ve=ye=null,O=!1}function fa(e){Me===null?Me=[e]:Me.push(e)}var uf=Je.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function fu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,c,p,y){return c===null||c.tag!==6?(c=Hi(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,y){var S=p.type;return S===Rt?h(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ns(S)===c.type)?(y=i(c,p.props),y.ref=yn(f,c,p),y.return=f,y):(y=Mr(p.type,p.key,p.props,null,f.mode,y),y.ref=yn(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Gi(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function h(f,c,p,y,S){return c===null||c.tag!==7?(c=Ct(p,f.mode,y,S),c.return=f,c):(c=i(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Hi(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return p=Mr(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Ft:return c=Gi(c,f.mode,p),c.return=f,c;case et:var y=c._init;return g(f,y(c._payload),p)}if(jn(c)||pn(c))return c=Ct(c,f.mode,p,null),c.return=f,c;hr(f,c)}return null}function m(f,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:o(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:return p.key===S?u(f,c,p,y):null;case Ft:return p.key===S?d(f,c,p,y):null;case et:return S=p._init,m(f,c,S(p._payload),y)}if(jn(p)||pn(p))return S!==null?null:h(f,c,p,y,null);hr(f,p)}return null}function v(f,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,o(c,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,S);case Ft:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,S);case et:var z=y._init;return v(f,c,p,z(y._payload),S)}if(jn(y)||pn(y))return f=f.get(p)||null,h(c,f,y,S,null);hr(c,y)}return null}function w(f,c,p,y){for(var S=null,z=null,E=c,C=c=0,V=null;E!==null&&C<p.length;C++){E.index>C?(V=E,E=null):V=E.sibling;var _=m(f,E,p[C],y);if(_===null){E===null&&(E=V);break}e&&E&&_.alternate===null&&t(f,E),c=l(_,c,C),z===null?S=_:z.sibling=_,z=_,E=V}if(C===p.length)return n(f,E),O&&kt(f,C),S;if(E===null){for(;C<p.length;C++)E=g(f,p[C],y),E!==null&&(c=l(E,c,C),z===null?S=E:z.sibling=E,z=E);return O&&kt(f,C),S}for(E=r(f,E);C<p.length;C++)V=v(E,f,C,p[C],y),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?C:V.key),c=l(V,c,C),z===null?S=V:z.sibling=V,z=V);return e&&E.forEach(function(be){return t(f,be)}),O&&kt(f,C),S}function k(f,c,p,y){var S=pn(p);if(typeof S!="function")throw Error(x(150));if(p=S.call(p),p==null)throw Error(x(151));for(var z=S=null,E=c,C=c=0,V=null,_=p.next();E!==null&&!_.done;C++,_=p.next()){E.index>C?(V=E,E=null):V=E.sibling;var be=m(f,E,_.value,y);if(be===null){E===null&&(E=V);break}e&&E&&be.alternate===null&&t(f,E),c=l(be,c,C),z===null?S=be:z.sibling=be,z=be,E=V}if(_.done)return n(f,E),O&&kt(f,C),S;if(E===null){for(;!_.done;C++,_=p.next())_=g(f,_.value,y),_!==null&&(c=l(_,c,C),z===null?S=_:z.sibling=_,z=_);return O&&kt(f,C),S}for(E=r(f,E);!_.done;C++,_=p.next())_=v(E,f,C,_.value,y),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?C:_.key),c=l(_,c,C),z===null?S=_:z.sibling=_,z=_);return e&&E.forEach(function(dn){return t(f,dn)}),O&&kt(f,C),S}function A(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Rt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case lr:e:{for(var S=p.key,z=c;z!==null;){if(z.key===S){if(S=p.type,S===Rt){if(z.tag===7){n(f,z.sibling),c=i(z,p.props.children),c.return=f,f=c;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ns(S)===z.type){n(f,z.sibling),c=i(z,p.props),c.ref=yn(f,z,p),c.return=f,f=c;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===Rt?(c=Ct(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Mr(p.type,p.key,p.props,null,f.mode,y),y.ref=yn(f,c,p),y.return=f,f=y)}return a(f);case Ft:e:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Gi(p,f.mode,y),c.return=f,f=c}return a(f);case et:return z=p._init,A(f,c,z(p._payload),y)}if(jn(p))return w(f,c,p,y);if(pn(p))return k(f,c,p,y);hr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Hi(p,f.mode,y),c.return=f,f=c),a(f)):n(f,c)}return A}var rn=fu(!0),pu=fu(!1),Hr=vt(null),Gr=null,Kt=null,pa=null;function ma(){pa=Kt=Gr=null}function ga(e){var t=Hr.current;R(Hr),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Gr=e,pa=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(Gr===null)throw Error(x(308));Kt=e,Gr.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Nt=null;function ha(e){Nt===null?Nt=[e]:Nt.push(e)}function mu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ha(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,ha(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var i=e.updateQueue;tt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,d=u.next;u.next=null,a===null?l=d:a.next=d,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=d:o.next=d,h.lastBaseUpdate=u))}if(l!==null){var g=i.baseState;a=0,h=d=u=null,o=l;do{var m=o.lane,v=o.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,k=o;switch(m=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){g=w.call(v,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(v,g,m):w,m==null)break e;g=$({},g,m);break e;case 2:tt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else v={eventTime:v,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(d=h=v,u=g):h=h.next=v,a|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);_t|=a,e.lanes=a,e.memoizedState=g}}function Es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var tr={},Be=vt(tr),Kn=vt(tr),Hn=vt(tr);function zt(e){if(e===tr)throw Error(x(174));return e}function ya(e,t){switch(I(Hn,t),I(Kn,e),I(Be,tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}R(Be),I(Be,t)}function ln(){R(Be),R(Kn),R(Hn)}function hu(e){zt(Hn.current);var t=zt(Be.current),n=il(t,e.type);t!==n&&(I(Kn,e),I(Be,n))}function xa(e){Kn.current===e&&(R(Be),R(Kn))}var B=vt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function wa(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var Cr=Je.ReactCurrentDispatcher,Ui=Je.ReactCurrentBatchConfig,Lt=0,U=null,Q=null,Z=null,Xr=!1,Ln=!1,Gn=0,cf=0;function ne(){throw Error(x(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function ja(e,t,n,r,i,l){if(Lt=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?mf:gf,e=n(r,i),Ln){l=0;do{if(Ln=!1,Gn=0,25<=l)throw Error(x(301));l+=1,Z=Q=null,t.updateQueue=null,Cr.current=hf,e=n(r,i)}while(Ln)}if(Cr.current=Zr,t=Q!==null&&Q.next!==null,Lt=0,Z=Q=U=null,Xr=!1,t)throw Error(x(300));return e}function Sa(){var e=Gn!==0;return Gn=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,Q=e;else{if(e===null)throw Error(x(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=Ce(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,u=null,d=l;do{var h=d.lane;if((Lt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=g,a=r):u=u.next=g,U.lanes|=h,_t|=h}d=d.next}while(d!==null&&d!==l);u===null?a=r:u.next=o,Ie(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,U.lanes|=l,_t|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=Ce(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Ie(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function vu(){}function yu(e,t){var n=U,r=Ce(),i=t(),l=!Ie(r.memoizedState,i);if(l&&(r.memoizedState=i,de=!0),r=r.queue,Na(ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Yn(9,wu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(x(349));Lt&30||xu(n,t,i)}return i}function xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Su(e)}function ku(e,t,n){return n(function(){ju(t)&&Su(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Su(e){var t=Xe(e,1);t!==null&&De(t,e,1,-1)}function Cs(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,U,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Ce().memoizedState}function br(e,t,n,r){var i=Re();U.flags|=e,i.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ci(e,t,n,r){var i=Ce();r=r===void 0?null:r;var l=void 0;if(Q!==null){var a=Q.memoizedState;if(l=a.destroy,r!==null&&ka(r,a.deps)){i.memoizedState=Yn(t,n,l,r);return}}U.flags|=e,i.memoizedState=Yn(1|t,n,l,r)}function bs(e,t){return br(8390656,8,e,t)}function Na(e,t){return ci(2048,8,e,t)}function zu(e,t){return ci(4,2,e,t)}function Eu(e,t){return ci(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,Cu.bind(null,t,e),n)}function za(){}function Pu(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lu(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _u(e,t,n){return Lt&21?(Ie(n,t)||(n=Fo(),U.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function df(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=Ui.transition;Ui.transition={};try{e(!1),t()}finally{T=n,Ui.transition=r}}function Mu(){return Ce().memoizedState}function ff(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(e))Du(t,n);else if(n=mu(e,t,n,r),n!==null){var i=se();De(n,e,r,i),Iu(n,t,r)}}function pf(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Du(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,o=l(a,n);if(i.hasEagerState=!0,i.eagerState=o,Ie(o,a)){var u=t.interleaved;u===null?(i.next=i,ha(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=mu(e,t,i,r),n!==null&&(i=se(),De(n,e,r,i),Iu(n,t,r))}}function Tu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Du(e,t){Ln=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}var Zr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},mf={readContext:Ee,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:bs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Re();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ff.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:za,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=df.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,i=Re();if(O){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),J===null)throw Error(x(349));Lt&30||xu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,bs(ku.bind(null,r,l,e),[e]),r.flags|=2048,Yn(9,wu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Re(),t=J.identifierPrefix;if(O){var n=He,r=Ke;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gf={readContext:Ee,useCallback:Pu,useContext:Ee,useEffect:Na,useImperativeHandle:bu,useInsertionEffect:zu,useLayoutEffect:Eu,useMemo:Lu,useReducer:$i,useRef:Nu,useState:function(){return $i(Qn)},useDebugValue:za,useDeferredValue:function(e){var t=Ce();return _u(t,Q.memoizedState,e)},useTransition:function(){var e=$i(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:yu,useId:Mu,unstable_isNewReconciler:!1},hf={readContext:Ee,useCallback:Pu,useContext:Ee,useEffect:Na,useImperativeHandle:bu,useInsertionEffect:zu,useLayoutEffect:Eu,useMemo:Lu,useReducer:Wi,useRef:Nu,useState:function(){return Wi(Qn)},useDebugValue:za,useDeferredValue:function(e){var t=Ce();return Q===null?t.memoizedState=e:_u(t,Q.memoizedState,e)},useTransition:function(){var e=Wi(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:yu,useId:Mu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=ft(e),l=Ge(r,i);l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(De(t,e,i,r),Er(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=ft(e),l=Ge(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(De(t,e,i,r),Er(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ft(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,r),t!==null&&(De(t,e,r,n),Er(t,e,r))}};function Ps(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(i,l):!0}function Fu(e,t,n){var r=!1,i=gt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=me(t)?bt:le.current,r=t.contextTypes,l=(r=r!=null)?tn(e,i):gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},va(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=me(t)?bt:le.current,i.context=tn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(zl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&di.enqueueReplaceState(i,i.state,null),Qr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Wc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Rl=r),Cl(e,t)},n}function Au(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ts(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var yf=Je.ReactCurrentOwner,de=!1;function ae(e,t,n,r){t.child=e===null?pu(t,null,n,r):rn(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var l=t.ref;return Jt(t,i),r=ja(e,t,n,r,l,i),n=Sa(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(O&&n&&ca(t),t.flags|=1,ae(e,t,r,i),t.child)}function Is(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ou(e,t,l,r,i)):(e=Mr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(a,r)&&e.ref===t.ref)return Ze(e,t,i)}return t.flags|=1,e=pt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Un(l,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ze(e,t,i)}return bl(e,t,n,r,i)}function Bu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Gt,he),he|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Gt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(Gt,he),he|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(Gt,he),he|=r;return ae(e,t,i,n),t.child}function Uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,n,r,i){var l=me(n)?bt:le.current;return l=tn(t,l),Jt(t,i),n=ja(e,t,n,r,l,i),r=Sa(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(O&&r&&ca(t),t.flags|=1,ae(e,t,n,i),t.child)}function Fs(e,t,n,r,i){if(me(n)){var l=!0;Wr(t)}else l=!1;if(Jt(t,i),t.stateNode===null)Pr(e,t),Fu(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=me(n)?bt:le.current,d=tn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==d)&&Ls(t,a,r,d),tt=!1;var m=t.memoizedState;a.state=m,Qr(t,r,a,i),u=t.memoizedState,o!==r||m!==u||pe.current||tt?(typeof h=="function"&&(zl(t,n,h,r),u=t.memoizedState),(o=tt||Ps(t,n,o,r,m,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gu(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Le(t.type,o),a.props=d,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=me(n)?bt:le.current,u=tn(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==g||m!==u)&&Ls(t,a,r,u),tt=!1,m=t.memoizedState,a.state=m,Qr(t,r,a,i);var w=t.memoizedState;o!==g||m!==w||pe.current||tt?(typeof v=="function"&&(zl(t,n,v,r),w=t.memoizedState),(d=tt||Ps(t,n,d,r,m,w,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,l,i)}function Pl(e,t,n,r,i,l){Uu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ks(t,n,!1),Ze(e,t,l);r=t.stateNode,yf.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rn(t,e.child,null,l),t.child=rn(t,null,o,l)):ae(e,t,o,l),t.memoizedState=r.state,i&&ks(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ws(e,t.context,!1),ya(e,t.containerInfo)}function Rs(e,t,n,r,i){return nn(),fa(i),t.flags|=256,ae(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,t,n){var r=t.pendingProps,i=B.current,l=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(B,i&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=mi(a,r,0,null),e=Ct(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=_l(n),t.memoizedState=Ll,e):Ea(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return xf(e,t,a,r,o,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,o=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=pt(o,l):(l=Ct(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?_l(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return l=e.child,e=l.sibling,r=pt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ea(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&fa(r),rn(t,e.child,null,n),e=Ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(x(422))),vr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=mi({mode:"visible",children:r.children},i,0,null),l=Ct(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rn(t,e.child,null,a),t.child.memoizedState=_l(a),t.memoizedState=Ll,l);if(!(t.mode&1))return vr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(x(419)),r=Vi(l,r,void 0),vr(e,t,a,r)}if(o=(a&e.childLanes)!==0,de||o){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),De(r,e,i,-1))}return Ma(),r=Vi(Error(x(421))),vr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ve=ut(i.nextSibling),ye=t,O=!0,Me=null,e!==null&&(je[Se++]=Ke,je[Se++]=He,je[Se++]=Pt,Ke=e.id,He=e.overflow,Pt=t),t=Ea(t,r.children),t.flags|=4096,t)}function As(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nl(e.return,t,n)}function Ki(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Vu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&As(e,n,t);else if(e.tag===19)As(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ki(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ki(t,!0,n,null,l);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:$u(t),nn();break;case 5:hu(t);break;case 1:me(t.type)&&Wr(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Hr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Wu(e,t,n):(I(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);I(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Bu(e,t,n)}return Ze(e,t,n)}var Ku,Ml,Hu,Gu;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ml=function(){};Hu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zt(Be.current);var l=null;switch(n){case"input":i=el(e,i),r=el(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=rl(e,i),r=rl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ll(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(o=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&F("scroll",e),l||o===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Gu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kf(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return me(t.type)&&$r(),re(t),null;case 3:return r=t.stateNode,ln(),R(pe),R(le),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Bl(Me),Me=null))),Ml(e,t),re(t),null;case 5:xa(t);var i=zt(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return re(t),null}if(e=zt(Be.current),gr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ae]=t,r[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Nn.length;i++)F(Nn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ga(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":Ya(r,l),F("invalid",r)}ll(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&mr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&mr(r.textContent,o,e),i=["children",""+o]):Dn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":ar(r),Qa(r,l,!0);break;case"textarea":ar(r),Xa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ur)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ko(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ae]=t,e[Vn]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(a=al(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nn.length;i++)F(Nn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Ga(e,r),i=el(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ya(e,r),i=rl(e,r),F("invalid",e);break;default:i=r}ll(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?No(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jo(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Dn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&F("scroll",e):u!=null&&Xl(e,l,u,a))}switch(n){case"input":ar(e),Qa(e,r,!1);break;case"textarea":ar(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=zt(Hn.current),zt(Be.current),gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(l=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return re(t),null;case 13:if(R(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ve!==null&&t.mode&1&&!(t.flags&128))du(),nn(),t.flags|=98560,l=!1;else if(l=gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Ae]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else Me!==null&&(Bl(Me),Me=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):Ma())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return ln(),Ml(e,t),e===null&&$n(t.stateNode.containerInfo),re(t),null;case 10:return ga(t.type._context),re(t),null;case 17:return me(t.type)&&$r(),re(t),null;case 19:if(R(B),l=t.memoizedState,l===null)return re(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)xn(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Yr(e),a!==null){for(t.flags|=128,xn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(B,B.current&1|2),t.child}e=e.sibling}l.tail!==null&&H()>sn&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!O)return re(t),null}else 2*H()-l.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=H(),t.sibling=null,n=B.current,I(B,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function jf(e,t){switch(da(t),t.tag){case 1:return me(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),R(pe),R(le),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(R(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(B),null;case 4:return ln(),null;case 10:return ga(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var yr=!1,ie=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){W(e,t,r)}}var Os=!1;function Nf(e,t){if(hl=Ar,e=Jo(),ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var v;g!==n||i!==0&&g.nodeType!==3||(o=a+i),g!==l||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++d===i&&(o=a),m===l&&++h===r&&(u=a),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Ar=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Os,Os=!1,w}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Tl(t,n,l)}i=i.next}while(i!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Vn],delete t[wl],delete t[af],delete t[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var q=null,_e=!1;function qe(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:ie||Ht(n,t);case 6:var r=q,i=_e;q=null,qe(e,t,n),q=r,_e=i,q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),On(e)):Ai(q,n.stateNode));break;case 4:r=q,i=_e,q=n.stateNode.containerInfo,_e=!0,qe(e,t,n),q=r,_e=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Tl(n,t,a),i=i.next}while(i!==r)}qe(e,t,n);break;case 1:if(!ie&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){W(n,t,o)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,qe(e,t,n),ie=r):qe(e,t,n);break;default:qe(e,t,n)}}function Us(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var i=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:q=o.stateNode,_e=!1;break e;case 3:q=o.stateNode.containerInfo,_e=!0;break e;case 4:q=o.stateNode.containerInfo,_e=!0;break e}o=o.return}if(q===null)throw Error(x(160));Xu(l,a,i),q=null,_e=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){W(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Fe(e),r&4){try{_n(3,e,e.return),fi(3,e)}catch(k){W(e,e.return,k)}try{_n(5,e,e.return)}catch(k){W(e,e.return,k)}}break;case 1:Pe(t,e),Fe(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(Pe(t,e),Fe(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(k){W(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&xo(i,l),al(o,a);var d=al(o,l);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?No(i,g):h==="dangerouslySetInnerHTML"?jo(i,g):h==="children"?In(i,g):Xl(i,h,g,d)}switch(o){case"input":tl(i,l);break;case"textarea":wo(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Qt(i,!!l.multiple,v,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qt(i,!!l.multiple,l.defaultValue,!0):Qt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vn]=l}catch(k){W(e,e.return,k)}}break;case 6:if(Pe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){W(e,e.return,k)}}break;case 3:if(Pe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(k){W(e,e.return,k)}break;case 4:Pe(t,e),Fe(e);break;case 13:Pe(t,e),Fe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Pa=H())),r&4&&Us(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||h,Pe(t,e),ie=d):Pe(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(g=j=h;j!==null;){switch(m=j,v=m.child,m.tag){case 0:case 11:case 14:case 15:_n(4,m,m.return);break;case 1:Ht(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){W(r,n,k)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){Ws(g);continue}}v!==null?(v.return=m,j=v):Ws(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=So("display",a))}catch(k){W(e,e.return,k)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){W(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Pe(t,e),Fe(e),r&4&&Us(e);break;case 21:break;default:Pe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var l=Bs(e);Fl(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Bs(e);Il(e,o,a);break;default:throw Error(x(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e,t,n){j=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||yr;if(!a){var o=i.alternate,u=o!==null&&o.memoizedState!==null||ie;o=yr;var d=ie;if(yr=a,(ie=u)&&!d)for(j=i;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Vs(i):u!==null?(u.return=a,j=u):Vs(i);for(;l!==null;)j=l,Ju(l),l=l.sibling;j=i,yr=o,ie=d}$s(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):$s(e)}}function $s(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Es(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Es(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&On(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Dl(t)}catch(m){W(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ws(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Vs(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){W(t,i,u)}}var l=t.return;try{Dl(t)}catch(u){W(t,l,u)}break;case 5:var a=t.return;try{Dl(t)}catch(u){W(t,a,u)}}}catch(u){W(t,t.return,u)}if(t===e){j=null;break}var o=t.sibling;if(o!==null){o.return=t.return,j=o;break}j=t.return}}var Ef=Math.ceil,Jr=Je.ReactCurrentDispatcher,Ca=Je.ReactCurrentOwner,ze=Je.ReactCurrentBatchConfig,M=0,J=null,G=null,ee=0,he=0,Gt=vt(0),Y=0,Xn=null,_t=0,pi=0,ba=0,Mn=null,ce=null,Pa=0,sn=1/0,We=null,qr=!1,Rl=null,dt=null,xr=!1,lt=null,ei=0,Tn=0,Al=null,Lr=-1,_r=0;function se(){return M&6?H():Lr!==-1?Lr:Lr=H()}function ft(e){return e.mode&1?M&2&&ee!==0?ee&-ee:uf.transition!==null?(_r===0&&(_r=Fo()),_r):(e=T,e!==0||(e=window.event,e=e===void 0?16:Wo(e.type)),e):1}function De(e,t,n,r){if(50<Tn)throw Tn=0,Al=null,Error(x(185));Jn(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(pi|=n),Y===4&&rt(e,ee)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(sn=H()+500,ui&&yt()))}function ge(e,t){var n=e.callbackNode;od(e,t);var r=Rr(e,e===J?ee:0);if(r===0)n!==null&&qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qa(n),t===1)e.tag===0?of(Ks.bind(null,e)):ou(Ks.bind(null,e)),rf(function(){!(M&6)&&yt()}),n=null;else{switch(Ro(r)){case 1:n=ta;break;case 4:n=Do;break;case 16:n=Fr;break;case 536870912:n=Io;break;default:n=Fr}n=ac(n,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qu(e,t){if(Lr=-1,_r=0,M&6)throw Error(x(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Rr(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ti(e,r);else{t=r;var i=M;M|=2;var l=tc();(J!==e||ee!==t)&&(We=null,sn=H()+500,Et(e,t));do try{Pf();break}catch(o){ec(e,o)}while(!0);ma(),Jr.current=l,M=i,G!==null?t=0:(J=null,ee=0,t=Y)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=Ol(e,i))),t===1)throw n=Xn,Et(e,0),rt(e,r),ge(e,H()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cf(i)&&(t=ti(e,r),t===2&&(l=dl(e),l!==0&&(r=l,t=Ol(e,l))),t===1))throw n=Xn,Et(e,0),rt(e,r),ge(e,H()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:jt(e,ce,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Pa+500-H(),10<t)){if(Rr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(jt.bind(null,e,ce,We),t);break}jt(e,ce,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Te(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=xl(jt.bind(null,e,ce,We),r);break}jt(e,ce,We);break;case 5:jt(e,ce,We);break;default:throw Error(x(329))}}}return ge(e,H()),e.callbackNode===n?qu.bind(null,e):null}function Ol(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=ti(e,t),e!==2&&(t=ce,ce=n,t!==null&&Bl(t)),e}function Bl(e){ce===null?ce=e:ce.push.apply(ce,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ie(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~ba,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ks(e){if(M&6)throw Error(x(327));qt();var t=Rr(e,0);if(!(t&1))return ge(e,H()),null;var n=ti(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Ol(e,r))}if(n===1)throw n=Xn,Et(e,0),rt(e,t),ge(e,H()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ce,We),ge(e,H()),null}function La(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(sn=H()+500,ui&&yt())}}function Mt(e){lt!==null&&lt.tag===0&&!(M&6)&&qt();var t=M;M|=1;var n=ze.transition,r=T;try{if(ze.transition=null,T=1,e)return e()}finally{T=r,ze.transition=n,M=t,!(M&6)&&yt()}}function _a(){he=Gt.current,R(Gt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:ln(),R(pe),R(le),wa();break;case 5:xa(r);break;case 4:ln();break;case 13:R(B);break;case 19:R(B);break;case 10:ga(r.type._context);break;case 22:case 23:_a()}n=n.return}if(J=e,G=e=pt(e.current,null),ee=he=t,Y=0,Xn=null,ba=pi=_t=0,ce=Mn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}Nt=null}return e}function ec(e,t){do{var n=G;try{if(ma(),Cr.current=Zr,Xr){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xr=!1}if(Lt=0,Z=Q=U=null,Ln=!1,Gn=0,Ca.current=null,n===null||n.return===null){Y=1,Xn=t,G=null;break}e:{var l=e,a=n.return,o=n,u=t;if(t=ee,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=o,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ms(a);if(v!==null){v.flags&=-257,Ts(v,a,o,l,t),v.mode&1&&_s(l,d,t),t=v,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){_s(l,d,t),Ma();break e}u=Error(x(426))}}else if(O&&o.mode&1){var A=Ms(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ts(A,a,o,l,t),fa(an(u,o));break e}}l=u=an(u,o),Y!==4&&(Y=2),Mn===null?Mn=[l]:Mn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ru(l,u,t);zs(l,f);break e;case 1:o=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Au(l,o,t);zs(l,y);break e}}l=l.return}while(l!==null)}rc(n)}catch(S){t=S,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function tc(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Ma(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(_t&268435455)&&!(pi&268435455)||rt(J,ee)}function ti(e,t){var n=M;M|=2;var r=tc();(J!==e||ee!==t)&&(We=null,Et(e,t));do try{bf();break}catch(i){ec(e,i)}while(!0);if(ma(),M=n,Jr.current=r,G!==null)throw Error(x(261));return J=null,ee=0,Y}function bf(){for(;G!==null;)nc(G)}function Pf(){for(;G!==null&&!qc();)nc(G)}function nc(e){var t=lc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?rc(e):G=t,Ca.current=null}function rc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,G=null;return}}else if(n=kf(n,t,he),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Y===0&&(Y=5)}function jt(e,t,n){var r=T,i=ze.transition;try{ze.transition=null,T=1,Lf(e,t,n,r)}finally{ze.transition=i,T=r}return null}function Lf(e,t,n,r){do qt();while(lt!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ud(e,l),e===J&&(G=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,ac(Fr,function(){return qt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var a=T;T=1;var o=M;M|=4,Ca.current=null,Nf(e,n),Zu(n,e),Yd(vl),Ar=!!hl,vl=hl=null,e.current=n,zf(n),ed(),M=o,T=a,ze.transition=l}else e.current=n;if(xr&&(xr=!1,lt=e,ei=i),l=e.pendingLanes,l===0&&(dt=null),rd(n.stateNode),ge(e,H()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qr)throw qr=!1,e=Rl,Rl=null,e;return ei&1&&e.tag!==0&&qt(),l=e.pendingLanes,l&1?e===Al?Tn++:(Tn=0,Al=e):Tn=0,yt(),null}function qt(){if(lt!==null){var e=Ro(ei),t=ze.transition,n=T;try{if(ze.transition=null,T=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ei=0,M&6)throw Error(x(331));var i=M;for(M|=4,j=e.current;j!==null;){var l=j,a=l.child;if(j.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(j=d;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:_n(8,h,l)}var g=h.child;if(g!==null)g.return=h,j=g;else for(;j!==null;){h=j;var m=h.sibling,v=h.return;if(Qu(h),h===d){j=null;break}if(m!==null){m.return=v,j=m;break}j=v}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}j=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,j=a;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_n(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,j=f;break e}j=l.return}}var c=e.current;for(j=c;j!==null;){a=j;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,j=p;else e:for(a=c;j!==null;){if(o=j,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:fi(9,o)}}catch(S){W(o,o.return,S)}if(o===a){j=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,j=y;break e}j=o.return}}if(M=i,yt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{T=n,ze.transition=t}}return!1}function Hs(e,t,n){t=an(n,t),t=Ru(e,t,1),e=ct(e,t,1),t=se(),e!==null&&(Jn(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=an(n,e),e=Au(t,e,1),t=ct(t,e,1),e=se(),t!==null&&(Jn(t,1,e),ge(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(Y===4||Y===3&&(ee&130023424)===ee&&500>H()-Pa?Et(e,0):ba|=n),ge(e,t)}function ic(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=se();e=Xe(e,t),e!==null&&(Jn(e,t,n),ge(e,n))}function Mf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ic(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),ic(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,wf(e,t,n);de=!!(e.flags&131072)}else de=!1,O&&t.flags&1048576&&uu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var i=tn(t,le.current);Jt(t,n),i=ja(null,t,r,e,i,n);var l=Sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,Wr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,va(t),i.updater=di,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=Pl(null,t,r,!0,l,n)):(t.tag=0,O&&l&&ca(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=If(r),e=Le(r,e),i){case 0:t=bl(null,t,r,e,n);break e;case 1:t=Fs(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Is(null,t,r,Le(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),bl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Fs(e,t,r,i,n);case 3:e:{if($u(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,i=l.element,gu(e,t),Qr(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=an(Error(x(423)),t),t=Rs(e,t,r,n,i);break e}else if(r!==i){i=an(Error(x(424)),t),t=Rs(e,t,r,n,i);break e}else for(ve=ut(t.stateNode.containerInfo.firstChild),ye=t,O=!0,Me=null,n=pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===i){t=Ze(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return hu(t),e===null&&Sl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,yl(r,i)?a=null:l!==null&&yl(r,l)&&(t.flags|=32),Uu(e,t),ae(e,t,a,n),t.child;case 6:return e===null&&Sl(t),null;case 13:return Wu(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ds(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,I(Hr,r._currentValue),r._currentValue=a,l!==null)if(Ie(l.value,a)){if(l.children===i.children&&!pe.current){t=Ze(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ge(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Nl(l.return,n,t),o.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(x(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jt(t,n),i=Ee(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),Is(e,t,r,i,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Pr(e,t),t.tag=1,me(r)?(e=!0,Wr(t)):e=!1,Jt(t,n),Fu(t,r,i),El(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Bu(e,t,n)}throw Error(x(156,t.tag))};function ac(e,t){return To(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Df(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===ql)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Ta(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rt:return Ct(n.children,i,l,t);case Zl:a=8,i|=8;break;case Xi:return e=Ne(12,n,t,i|2),e.elementType=Xi,e.lanes=l,e;case Zi:return e=Ne(13,n,t,i),e.elementType=Zi,e.lanes=l,e;case Ji:return e=Ne(19,n,t,i),e.elementType=Ji,e.lanes=l,e;case ho:return mi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mo:a=10;break e;case go:a=9;break e;case Jl:a=11;break e;case ql:a=14;break e;case et:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ho,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ff(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Da(e,t,n,r,i,l,a,o,u){return e=new Ff(e,t,n,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(l),e}function Rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return gt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return su(e,n,t)}return t}function oc(e,t,n,r,i,l,a,o,u){return e=Da(n,r,!0,e,i,l,a,o,u),e.context=sc(null),n=e.current,r=se(),i=ft(n),l=Ge(r,i),l.callback=t??null,ct(n,l,i),e.current.lanes=i,Jn(e,i,r),ge(e,r),e}function gi(e,t,n,r){var i=t.current,l=se(),a=ft(i);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(i,t,a),e!==null&&(De(e,i,a,l),Er(e,i,a)),a}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){Gs(e,t),(e=e.alternate)&&Gs(e,t)}function Af(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}hi.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));gi(e,t,null,null)};hi.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){gi(null,e,null,null)}),t[Ye]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&$o(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qs(){}function Of(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ni(a);l.call(d)}}var a=oc(t,r,e,0,null,!1,!1,"",Qs);return e._reactRootContainer=a,e[Ye]=a.current,$n(e.nodeType===8?e.parentNode:e),Mt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var d=ni(u);o.call(d)}}var u=Da(e,0,!1,null,null,!1,!1,"",Qs);return e._reactRootContainer=u,e[Ye]=u.current,$n(e.nodeType===8?e.parentNode:e),Mt(function(){gi(t,u,n,r)}),u}function yi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var u=ni(a);o.call(u)}}gi(t,a,e,i)}else a=Of(n,t,e,i,r);return ni(a)}Ao=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(na(t,n|1),ge(t,H()),!(M&6)&&(sn=H()+500,yt()))}break;case 13:Mt(function(){var r=Xe(e,1);if(r!==null){var i=se();De(r,e,1,i)}}),Ia(e,1)}};ra=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Ia(e,134217728)}};Oo=function(e){if(e.tag===13){var t=ft(e),n=Xe(e,t);if(n!==null){var r=se();De(n,e,t,r)}Ia(e,t)}};Bo=function(){return T};Uo=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};ol=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(x(90));yo(r),tl(r,i)}}}break;case"textarea":wo(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Co=La;bo=Mt;var Bf={usingClientEntryPoint:!1,Events:[er,Ut,oi,zo,Eo,La]},wn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_o(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{ii=wr.inject(Uf),Oe=wr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(x(200));return Rf(e,t,null,n)};we.createRoot=function(e,t){if(!Ra(e))throw Error(x(299));var n=!1,r="",i=uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Da(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,$n(e.nodeType===8?e.parentNode:e),new Fa(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=_o(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Mt(e)};we.hydrate=function(e,t,n){if(!vi(t))throw Error(x(200));return yi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=uc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,i,!1,l,a),e[Ye]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new hi(t)};we.render=function(e,t,n){if(!vi(t))throw Error(x(200));return yi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!vi(e))throw Error(x(40));return e._reactRootContainer?(Mt(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};we.unstable_batchedUpdates=La;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return yi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function cc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc)}catch(e){console.error(e)}}cc(),uo.exports=we;var $f=uo.exports,Ys=$f;Qi.createRoot=Ys.createRoot,Qi.hydrateRoot=Ys.hydrateRoot;const dc=fe.createContext(),Ue=()=>{const e=fe.useContext(dc);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Wf=({children:e})=>{const[t,n]=fe.useState("de"),i={language:t,setLanguage:n,toggleLanguage:()=>{n(l=>l==="de"?"en":"de")},isGerman:t==="de",isEnglish:t==="en"};return s.jsx(dc.Provider,{value:i,children:e})},$e={de:{nav:{about:"Über mich",strengths:"Auszeichnungen",experience:"Erfahrung",education:"Bildung",skills:"Kompetenzen",certifications:"Zertifikate",interests:"Interessen",contact:"Kontakt"},hero:{greeting:"Hallo, ich bin",title1:"Fernstudium im General Management",title2:"Abgeschlossenes Lehramtsstudium",description1:"Ich habe Grundschulpädagogik mit dem Schwerpunkt Anglistik studiert und stand die letzten Jahre als Lehrkraft vor der Klasse. Dabei ging es mir nie nur um Unterrichtsinhalte – sondern vor allem darum, Potenziale zu erkennen, Menschen zu motivieren und Entwicklung aktiv zu begleiten.",description2:"Irgendwann habe ich gemerkt: Genau das reizt mich auch über die Schule hinaus. Ich wollte verstehen, wie Lernen, Veränderung und Entwicklung in Organisationen funktionieren – und wie man diese Prozesse strategisch in einem unternehmerischen Kontext mitgestalten kann. Das hat mich zu einem MBA-Studium geführt, um meine pädagogischen Stärken mit fundiertem wirtschaftlichem Wissen zu verbinden.",contact:"Kontakt aufnehmen",stats:{experience:"Jahre Lehrerfahrung",degrees:"Hochschulabschlüsse",languages:"Sprachen"}},strengths:{title:"Was mich auszeichnet",description:"Als erfahrene Grundschullehrerin mit fundierten pädagogischen Fähigkeiten und dem Willen zur strategischen Weiterentwicklung bringe ich eine einzigartige Mischung aus Praxiserfahrung und zukunftsorientiertem Denken mit.",items:[{title:"Kognitive Flexibilität",description:"In meinen vergangenen Berufserfahrungen habe ich mich durch schnelles Reindenken als Fast Learner mit einer strukturierten Herangehensweise bewiesen.",highlights:["Fast Learning","Strukturierte Herangehensweise","Anpassungsfähigkeit"]},{title:"Kommunikativ & lösungsorientiert",description:"In Zusammenarbeit mit multiprofessionellen Teams bewege ich mich sicher in der Zusammenarbeit und den organisatorischen Anforderungen.",highlights:["Multiprofessionelle Teams","Organisationstalent","Lösungsorientierung"]},{title:"Didaktik & Unterrichten",description:"Als Grundschullehrerin gehörte es zu meinen täglichen Aufgaben Lerngruppen zu leiten und dabei gleichzeitig auf eine individuelle Lernentwicklung einzugehen.",highlights:["Gruppenleitung","Individuelle Förderung","Lernentwicklung"]},{title:"Digitale Integration",description:"Digitale Tools dienen mir als omnipräsentes Instrument zur Unterstützung individueller Lernbedürfnisse und moderner Unterrichtsgestaltung.",highlights:["Digitale Tools","E-Learning","Technologie-Integration"]},{title:"Teamführung",description:"Erfahrung in der Leitung von Lerngruppen und der Koordination mit multiprofessionellen Teams in verschiedenen Kontexten.",highlights:["Klassenleitung","Teamkoordination","Führungsverantwortung"]},{title:"Potenzialentwicklung",description:"Meine Leidenschaft liegt darin, Potenziale zu erkennen, Menschen zu motivieren und Entwicklung aktiv zu begleiten.",highlights:["Potenzialerkennung","Motivation","Entwicklungsbegleitung"]}],philosophy:{title:"Meine Arbeitsphilosophie",item1:{title:"Potentiale entdecken",description:"Menschen motivieren und ihre individuelle Entwicklung aktiv begleiten"},item2:{title:"Strategisch denken",description:"Lern- und Veränderungsprozesse in Organisationen verstehen und mitgestalten"},item3:{title:"Brücken bauen",description:"Pädagogische Stärken mit wirtschaftlichem Wissen für innovative Lösungen verbinden"}}},experience:{title:"Berufserfahrung & Praktika",description:"Meine berufliche Laufbahn zeigt eine stetige Entwicklung von der Pädagogik hin zu strategischen und wirtschaftlichen Bereichen, unterstützt durch vielseitige praktische Erfahrungen.",achievements:"Wichtigste Erfolge:",skills:"Eingesetzte Kompetenzen:",stats:{teaching:"Jahre Lehrerfahrung",industries:"Verschiedene Branchen",internship:"Marketing Praktikum",experience:"Jahre Nebentätigkeiten"},items:[{position:"Grundschullehrerin (befristet)",company:"Grundschulen in Rheinland-Pfalz",location:"Rheinland-Pfalz, Deutschland",period:"2021 - 2025",type:"Vollzeit",description:"Klassenleitung und Fachlehrerin innerhalb multiprofessioneller Teams mit Fokus auf individuelle Lernentwicklung und digitale Integration.",achievements:["Klassenleitung und Fachlehrerin innerhalb multiprofessioneller Teams","Integration digitaler Werkzeuge zur Unterstützung individueller Lernbedürfnisse","Planung und Durchführung von extracurricularen Aktivitäten","Erfolgreiche Umsetzung innovativer Unterrichtsmethoden"],skills:["Klassenleitung","Digitale Tools","Individualförderung","Teamarbeit"]},{position:"Praktikum – Social Media & Marketing",company:"JANKO.MEDIA",location:"Lahnstein, Deutschland",period:"2025",type:"Praktikum (200h)",description:"Umfassende Einblicke in die Medienproduktion und das Marketing mit praktischer Erfahrung in Content-Erstellung und Projektmanagement.",achievements:["Medien- & Content-Produktion: Planung, Aufnahme und Bearbeitung von Video- und Fotokampagnen","Marketing & Social Media: Entwicklung kreativer Inhalte für digitale Kanäle","Projektmanagement: Einblicke in die Koordination von Medienprojekten zur Markenpräsentation","Praktische Anwendung digitaler Marketing-Tools"],skills:["Content-Produktion","Social Media Marketing","Projektkoordination","Kreative Gestaltung"]},{position:"SAP-basierte Datenpflege & Finanz-Controlling",company:"Universitätsmedizin Mainz",location:"Mainz, Deutschland",period:"2017 - 2023",type:"Studentische Tätigkeit",description:"Verantwortung für systematische Datenpflege und Unterstützung im Finanz-Controlling mit SAP-Systemen.",achievements:["Zuverlässige SAP-basierte Datenpflege und -verwaltung","Unterstützung des Finanz-Controlling-Teams","Entwicklung effizienter Arbeitsabläufe","Hohe Datenqualität und Genauigkeit"],skills:["SAP","Datenmanagement","Finanz-Controlling","Systematisches Arbeiten"]},{position:"Service & Support (verschiedene Bereiche)",company:"Verschiedene Unternehmen",location:"Deutschland",period:"2017 - 2023",type:"Studentische Tätigkeiten",description:"Vielseitige Erfahrungen im Service-Bereich mit Kundenbetreuung, Buchungsmanagement und Gastronomieerfahrung.",achievements:["Gäste- und Buchungsmanagement (Ferienwohnungen)","Service-Fachkraft (Gastronomie und Einzelhandel in der Modebranche)","Kundenorientierte Betreuung und Beratung","Flexibilität und Anpassungsfähigkeit in verschiedenen Branchen"],skills:["Kundenservice","Buchungsmanagement","Gastronomieerfahrung","Flexibilität"]}]},education:{title:"Bildungsweg",description:"Meine akademische Laufbahn zeigt einen klaren Fokus auf Grundschulpädagogik und die strategische Weiterentwicklung hin zu wirtschaftlichen Kompetenzen.",highlights:"Besondere Leistungen:",modules:"Schwerpunkte:",items:[{degree:"Master of Business Administration (MBA)",field:"General Management",institution:"Fresenius",location:"Deutschland",period:"Beginn September 2025",status:"Fernstudium",grade:"laufend",description:"Strategische Weiterentwicklung mit fundiertem wirtschaftlichem Wissen zur Verbindung pädagogischer Stärken mit unternehmerischen Kompetenzen.",highlights:["Fernstudium parallel zur beruflichen Tätigkeit","Fokus auf strategisches Management und Unternehmensführung","Verbindung von Pädagogik und Wirtschaft","Vorbereitung auf Führungsaufgaben in Organisationen"],modules:["Strategisches Management","Unternehmensführung","Organisationsentwicklung","Change Management","Digitale Transformation"]},{degree:"2. Staatsexamen",field:"Grundschullehramt",institution:"Friedrich-Ebert-Schule / Studienseminar Neuwied",location:"Neuwied, Deutschland",period:"2023 - 2025",status:"Referendariat",grade:"erfolgreich abgeschlossen",description:"Praktische Ausbildung zur Grundschullehrerin mit Schwerpunkt auf modernen Unterrichtsmethoden und digitaler Integration.",highlights:["Erfolgreiches Referendariat mit praktischer Unterrichtserfahrung","Integration digitaler Werkzeuge in den Unterricht","Arbeit in multiprofessionellen Teams","Entwicklung innovativer Unterrichtskonzepte"],modules:["Unterrichtspraxis","Klassenführung","Digitale Medien","Schulrecht","Pädagogische Diagnostik"]},{degree:"Bachelor & Master of Education",field:"Grundschullehramt (Schwerpunkte: Englisch & Ev. Religionslehre)",institution:"Universität Koblenz",location:"Koblenz, Deutschland",period:"2018 - 2023",status:"Vollzeitstudium",grade:"erfolgreich abgeschlossen",description:"Grundstudium der Grundschulpädagogik mit Spezialisierung auf Anglistik und evangelische Religionslehre.",highlights:["Schwerpunkt Anglistik mit fundierter Sprachkompetenz","Evangelische Religionslehre als zweites Fach","Praktische Erfahrungen in verschiedenen Grundschulen","Wissenschaftliche Auseinandersetzung mit Grundschulpädagogik"],modules:["Grundschulpädagogik","Anglistik","Evangelische Religionslehre","Bildungswissenschaften","Fachdidaktik"]},{degree:"Allgemeine Hochschulreife",field:"Leistungskurse: Englisch, Französisch, Erdkunde",institution:"Gymnasium am Römerkastell",location:"Alzey, Deutschland",period:"bis 2018",status:"Abgeschlossen",grade:"erfolgreich abgeschlossen",description:"Gymnasiale Ausbildung mit sprachlichem Schwerpunkt und geographischen Kenntnissen.",highlights:["Leistungskurs Englisch - Grundlage für spätere Spezialisierung","Leistungskurs Französisch - internationale Sprachkompetenz","Leistungskurs Erdkunde - analytisches und vernetztes Denken","Solide Grundlage für das Lehramtsstudium"],modules:["Englisch (LK)","Französisch (LK)","Erdkunde (LK)","Deutsch","Mathematik"]}],philosophy:{title:"Bildungsphilosophie",text:"Bildung ist für mich ein lebenslanger Prozess der persönlichen und beruflichen Entwicklung. Die Verbindung von theoretischem Wissen mit praktischer Anwendung sowie die kontinuierliche Weiterentwicklung von der Pädagogik hin zur Wirtschaft stehen im Zentrum meines Lernansatzes."}},skills:{title:"Meine Kompetenzen",description:"Fundierte pädagogische Fähigkeiten kombiniert mit technischen Kompetenzen und dem Streben nach strategischer Weiterentwicklung.",toolsTitle:"Tools & Software",summary:{title:"Kompetenz-Profil",strategic:{title:"Strategische Ausrichtung",description:"Entwicklung und Umsetzung langfristiger Visionen mit messbaren Ergebnissen"},digital:{title:"Digitale Innovation",description:"Transformation traditioneller Prozesse durch moderne Technologien und Methoden"},people:{title:"Menschenorientierung",description:"Führung und Entwicklung von Teams durch empathische und zielgerichtete Kommunikation"}}},certifications:{title:"Zertifikate & Weiteres",description:"Meine Qualifikationen und Zertifikate spiegeln den kontinuierlichen Lernprozess und die strategische Weiterentwicklung von der Pädagogik hin zur Wirtschaft wider.",professional:"Professionelle Zertifizierungen",additional:"Weitere Qualifikationen",items:[{title:"Wirtschaft Basics - Deep Dive / BWL, VWL, Psychologie",issuer:"Udemy",type:"Online-Zertifikat",description:"Fundierte Grundlagen in Betriebswirtschaftslehre, Volkswirtschaftslehre und Psychologie für den strategischen Übergang in die Wirtschaft."}],additionalItems:[{title:"Führerschein Klasse B",description:"Berechtigung zum Führen von Kraftfahrzeugen",date:"vorhanden",type:"Fahrerlaubnis"},{title:"Sportbootführerschein",description:"Berechtigung zum Führen von Sportbooten",date:"vorhanden",type:"Sportlizenz"}],quote:"Lebenslanges Lernen ist der Schlüssel zu anhaltender Exzellenz. Ich investiere kontinuierlich in meine Weiterbildung, um stets auf dem neuesten Stand der Entwicklungen zu bleiben."},interests:{title:"Interessen & Persönlichkeit",description:"Meine Interessen und Sprachkenntnisse spiegeln meine Offenheit für neue Kulturen und meine Begeisterung für körperliche Aktivität wider.",hobbies:"Hobbies & Leidenschaften",languages:"Sprachkenntnisse",hobbiesItems:[{title:"Internationale Reisen",description:"Leidenschaft für das Entdecken neuer Kulturen und den kulturellen Austausch mit Menschen aus aller Welt.",details:["Kultureller Austausch","Internationale Perspektiven","Sprachpraxis vor Ort"]},{title:"Ausdauersport",description:"Aktiver Lebensstil durch vielseitige Sportarten für körperliche Fitness und mentale Balance.",details:["Fitness-Boxen","Laufen","Radsport","Krafttraining"]}],languageItems:[{language:"Deutsch",level:"Muttersprache",proficiency:100,certification:"C2-Niveau"},{language:"Englisch",level:"Sehr gut",proficiency:90,certification:"Fließend"},{language:"Französisch",level:"Sehr gut",proficiency:85,certification:"B2-Niveau"},{language:"Russisch",level:"Grundkenntnisse",proficiency:30,certification:"A1-Niveau"}],personality:{title:"Persönlichkeitsprofil",goalOriented:{title:"Zielorientiert",description:"Klare Fokussierung auf berufliche Weiterentwicklung und den Wechsel in die Wirtschaft"},worldly:{title:"Weltoffen",description:"Interesse an anderen Kulturen und Sprachen durch internationale Reisen"},balanced:{title:"Ausgeglichen",description:"Balance zwischen beruflicher Entwicklung und sportlicher Aktivität"},active:{title:"Aktiv",description:"Körperliche Fitness und Ausdauer als Grundlage für mentale Stärke"}}},contact:{title:"Kontakt aufnehmen",description:"Ich freue mich auf interessante Gespräche über neue berufliche Möglichkeiten und den Übergang in die Wirtschaft. Lassen Sie uns gerne in Kontakt treten.",info:"Kontaktinformationen",availability:"Verfügbarkeit",contactItems:[{title:"E-Mail",value:"lisapink99@gmail.com",description:"Für berufliche Anfragen und Zusammenarbeit"},{title:"Telefon",value:"+49 176 78516012",description:"Verfügbar für berufliche Gespräche"},{title:"Standort",value:"aktuell RLP",description:"flexibel, den Wohnort zu wechseln"},{title:"LinkedIn",value:"Lisa Pink",description:"Berufliches Netzwerk und Updates"}],availabilityItems:[{type:"Vollzeitstellen",status:"Verfügbar ab 2025"},{type:"MBA-Studium",status:"Beginn September 2025"},{type:"Projektarbeit",status:"Nach Absprache"}],form:{title:"Nachricht senden",name:"Name",email:"E-Mail",subject:"Betreff",message:"Nachricht",send:"Nachricht senden",success:"Nachricht erfolgreich gesendet!",successText:"Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden - in der Regel binnen 24 Stunden.",placeholderName:"Ihr vollständiger Name",placeholderEmail:"ihre.email@beispiel.de",placeholderSubject:"Worum geht es?",placeholderMessage:"Ihre Nachricht an mich..."},cta:{title:"Bereit für neue Herausforderungen",description:"Mit meiner pädagogischen Erfahrung und dem anstehenden MBA-Studium bin ich bereit für den nächsten Karriereschritt in die Wirtschaft.",direct:"Direkter Kontakt",linkedin:"LinkedIn Profil"}},footer:{rights:"Alle Rechte vorbehalten.",tagline:"Erstellt mit Leidenschaft für Exzellenz und Innovation.",imprint:"Impressum",privacy:"Datenschutz"}},en:{nav:{about:"About",strengths:"Strengths",experience:"Experience",education:"Education",skills:"Skills",certifications:"Certifications",interests:"Interests",contact:"Contact"},hero:{greeting:"Hello, I'm",title1:"Study in General Management",title2:"Completed Teaching Degree",description1:"I studied elementary education with a focus on English and have been teaching for several years. For me, it was never just about curriculum content – but above all about recognizing potential, motivating people, and actively supporting development.",description2:"At some point I realized: This is exactly what excites me beyond school. I wanted to understand how learning, change, and development work in organizations – and how to strategically shape these processes in an entrepreneurial context. This led me to an MBA program to combine my pedagogical strengths with sound business knowledge.",contact:"Get in touch",stats:{experience:"Years Teaching Experience",degrees:"University Degrees",languages:"Languages"}},strengths:{title:"What Sets Me Apart",description:"As an experienced elementary school teacher with solid pedagogical skills and the drive for strategic development, I bring a unique blend of practical experience and forward-thinking approach.",items:[{title:"Cognitive Flexibility",description:"In my past professional experiences, I have proven myself as a fast learner with a structured approach through quick thinking and adaptation.",highlights:["Fast Learning","Structured Approach","Adaptability"]},{title:"Communicative & Solution-Oriented",description:"In collaboration with multiprofessional teams, I move confidently in cooperation and organizational requirements.",highlights:["Multiprofessional Teams","Organizational Talent","Solution Orientation"]},{title:"Didactics & Teaching",description:"As an elementary school teacher, it was part of my daily tasks to lead learning groups while simultaneously addressing individual learning development.",highlights:["Group Leadership","Individual Support","Learning Development"]},{title:"Digital Integration",description:"Digital tools serve me as an omnipresent instrument to support individual learning needs and modern classroom design.",highlights:["Digital Tools","E-Learning","Technology Integration"]},{title:"Team Leadership",description:"Experience in leading learning groups and coordinating with multiprofessional teams in various contexts.",highlights:["Class Management","Team Coordination","Leadership Responsibility"]},{title:"Potential Development",description:"My passion lies in recognizing potential, motivating people, and actively supporting development.",highlights:["Potential Recognition","Motivation","Development Support"]}],philosophy:{title:"My Work Philosophy",item1:{title:"Discover Potential",description:"Motivate people and actively support their individual development"},item2:{title:"Think Strategically",description:"Understand and help shape learning and change processes in organizations"},item3:{title:"Build Bridges",description:"Combine pedagogical strengths with business knowledge for innovative solutions"}}},experience:{title:"Professional Experience & Internships",description:"My career path shows steady development from pedagogy toward strategic and business areas, supported by diverse practical experiences.",achievements:"Key Achievements:",skills:"Applied Competencies:",stats:{teaching:"Years Teaching Experience",industries:"Different Industries",internship:"Marketing Internship",experience:"Years Side Activities"},items:[{position:"Elementary School Teacher (temporary)",company:"Elementary Schools in Rhineland-Palatinate",location:"Rhineland-Palatinate, Germany",period:"2021 - 2025",type:"Full-time",description:"Class leadership and subject teacher within multiprofessional teams with focus on individual learning development and digital integration.",achievements:["Class leadership and subject teaching within multiprofessional teams","Integration of digital tools to support individual learning needs","Planning and implementation of extracurricular activities","Successful implementation of innovative teaching methods"],skills:["Class Management","Digital Tools","Individual Support","Teamwork"]},{position:"Internship – Social Media & Marketing",company:"JANKO.MEDIA",location:"Lahnstein, Germany",period:"2025",type:"Internship (200h)",description:"Comprehensive insights into media production and marketing with practical experience in content creation and project management.",achievements:["Media & Content Production: Planning, recording and editing of video and photo campaigns","Marketing & Social Media: Development of creative content for digital channels","Project Management: Insights into coordination of media projects for brand presentation","Practical application of digital marketing tools"],skills:["Content Production","Social Media Marketing","Project Coordination","Creative Design"]},{position:"SAP-based Data Management & Financial Controlling",company:"University Medical Center Mainz",location:"Mainz, Germany",period:"2017 - 2023",type:"Student Position",description:"Responsibility for systematic data management and support in financial controlling with SAP systems.",achievements:["Reliable SAP-based data management and administration","Support of the financial controlling team","Development of efficient workflows","High data quality and accuracy"],skills:["SAP","Data Management","Financial Controlling","Systematic Work"]},{position:"Service & Support (various areas)",company:"Various Companies",location:"Germany",period:"2017 - 2023",type:"Student Positions",description:"Diverse experiences in the service sector with customer support, booking management and hospitality experience.",achievements:["Guest and booking management (vacation rentals)","Service specialist (hospitality and retail in fashion industry)","Customer-oriented support and consulting","Flexibility and adaptability in various industries"],skills:["Customer Service","Booking Management","Hospitality Experience","Flexibility"]}]},education:{title:"Educational Path",description:"My academic career shows a clear focus on elementary education and strategic development toward business competencies.",highlights:"Special Achievements:",modules:"Focus Areas:",items:[{degree:"Master of Business Administration (MBA)",field:"General Management",institution:"Fresenius",location:"Germany",period:"Starting September 2025",status:"Distance Learning",grade:"ongoing",description:"Strategic development with solid business knowledge to combine pedagogical strengths with entrepreneurial competencies.",highlights:["Distance learning parallel to professional activity","Focus on strategic management and corporate leadership","Connection of pedagogy and business","Preparation for leadership positions in organizations"],modules:["Strategic Management","Corporate Leadership","Organizational Development","Change Management","Digital Transformation"]},{degree:"2nd State Examination",field:"Elementary School Teaching",institution:"Friedrich-Ebert-School / Teacher Training Seminar Neuwied",location:"Neuwied, Germany",period:"2023 - 2025",status:"Teacher Training",grade:"successfully completed",description:"Practical training as elementary school teacher with focus on modern teaching methods and digital integration.",highlights:["Successful teacher training with practical teaching experience","Integration of digital tools in teaching","Work in multiprofessional teams","Development of innovative teaching concepts"],modules:["Teaching Practice","Classroom Management","Digital Media","School Law","Educational Diagnostics"]},{degree:"Bachelor & Master of Education",field:"Elementary School Teaching (Focus: English & Protestant Religious Education)",institution:"University of Koblenz",location:"Koblenz, Germany",period:"2018 - 2023",status:"Full-time Studies",grade:"successfully completed",description:"Basic studies in elementary pedagogy with specialization in English studies and Protestant religious education.",highlights:["Focus on English studies with solid language competence","Protestant religious education as second subject","Practical experiences in various elementary schools","Scientific engagement with elementary pedagogy"],modules:["Elementary Pedagogy","English Studies","Protestant Religious Education","Educational Sciences","Subject Didactics"]},{degree:"General Higher Education Entrance Qualification",field:"Advanced Courses: English, French, Geography",institution:"Gymnasium am Römerkastell",location:"Alzey, Germany",period:"until 2018",status:"Completed",grade:"successfully completed",description:"Grammar school education with linguistic focus and geographical knowledge.",highlights:["Advanced course English - foundation for later specialization","Advanced course French - international language competence","Advanced course Geography - analytical and networked thinking","Solid foundation for teacher training studies"],modules:["English (Advanced)","French (Advanced)","Geography (Advanced)","German","Mathematics"]}],philosophy:{title:"Educational Philosophy",text:"For me, education is a lifelong process of personal and professional development. The connection of theoretical knowledge with practical application as well as continuous development from pedagogy to business are at the center of my learning approach."}},skills:{title:"My Competencies",description:"Solid pedagogical skills combined with technical competencies and the drive for strategic development.",toolsTitle:"Tools & Software",categories:[{title:"General Competencies",skills:["Organizational Development & Learning Processes","Communication & Stakeholder Work","Inclusive Methods & Team Leadership","Time & Project Management"]},{title:"Pedagogical Competencies",skills:["Teaching","Didactics","Learning Development","Conflict Management","Cognitive Flexibility","Pedagogical Leadership","Learning & Educational Consulting","Reflection"]},{title:"Technical Competencies",skills:["MS Office","Canva","monday.com","Digital Learning Tools"]}],summary:{title:"Competency Profile",strategic:{title:"Strategic Orientation",description:"Development and implementation of long-term visions with measurable results"},digital:{title:"Digital Innovation",description:"Transformation of traditional processes through modern technologies and methods"},people:{title:"People-Oriented",description:"Leadership and team development through empathetic and goal-oriented communication"}}},certifications:{title:"Certifications & More",description:"My qualifications and certifications reflect the continuous learning process and strategic development from pedagogy to business.",professional:"Professional Certifications",additional:"Additional Qualifications",items:[{title:"Business Basics - Deep Dive / BWL, VWL, Psychology",issuer:"Udemy",type:"Online Certificate",description:"Solid foundations in business administration, economics and psychology for the strategic transition to business."}],additionalItems:[{title:"Driver's License Class B",description:"Authorization to drive motor vehicles",date:"available",type:"Driving License"},{title:"Boat License",description:"Authorization to operate recreational boats",date:"available",type:"Sports License"}],quote:"Lifelong learning is the key to sustained excellence. I continuously invest in my further education to always stay up-to-date with developments."},interests:{title:"Interests & Personality",description:"My interests and language skills reflect my openness to new cultures and my enthusiasm for physical activity.",hobbies:"Hobbies & Passions",languages:"Language Skills",hobbiesItems:[{title:"International Travel",description:"Passion for discovering new cultures and cultural exchange with people from around the world.",details:["Cultural Exchange","International Perspectives","Language Practice On-Site"]},{title:"Endurance Sports",description:"Active lifestyle through diverse sports for physical fitness and mental balance.",details:["Fitness Boxing","Running","Cycling","Strength Training"]}],languageItems:[{language:"German",level:"Native Language",proficiency:100,certification:"C2 Level"},{language:"English",level:"Very Good",proficiency:90,certification:"Fluent"},{language:"French",level:"Very Good",proficiency:85,certification:"B2 Level"},{language:"Russian",level:"Basic Knowledge",proficiency:30,certification:"A1 Level"}],personality:{title:"Personality Profile",goalOriented:{title:"Goal-Oriented",description:"Clear focus on professional development and transition to business"},worldly:{title:"Open-Minded",description:"Interest in other cultures and languages through international travel"},balanced:{title:"Balanced",description:"Balance between professional development and athletic activity"},active:{title:"Active",description:"Physical fitness and endurance as foundation for mental strength"}}},contact:{title:"Get in Touch",description:"I look forward to interesting conversations about new professional opportunities and the transition to business. Let's get in touch.",info:"Contact Information",availability:"Availability",contactItems:[{title:"Email",value:"lisapink99@gmail.com",description:"For professional inquiries and cooperation"},{title:"Phone",value:"+49 176 78516012",description:"Available for professional conversations"},{title:"Location",value:"currently RLP",description:"flexible to relocate"},{title:"LinkedIn",value:"Lisa Pink",description:"Professional network and updates"}],availabilityItems:[{type:"Full-time Positions",status:"Available from 2025"},{type:"MBA Studies",status:"Starting September 2025"},{type:"Project Work",status:"By arrangement"}],form:{title:"Send Message",name:"Name",email:"Email",subject:"Subject",message:"Message",send:"Send Message",success:"Message sent successfully!",successText:"Thank you for your message. I will get back to you as soon as possible - usually within 24 hours."},cta:{title:"Ready for New Challenges",description:"With my pedagogical experience and upcoming MBA studies, I am ready for the next career step into business.",direct:"Direct Contact",linkedin:"LinkedIn Profile"}},footer:{rights:"All rights reserved.",tagline:"Created with passion for excellence and innovation.",imprint:"Imprint",privacy:"Privacy"}}};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),D=(e,t)=>{const n=fe.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:o="",children:u,...d},h)=>fe.createElement("svg",{ref:h,...Vf,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${Kf(e)}`,o].join(" "),...d},[...t.map(([g,m])=>fe.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=D("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=D("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=D("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=D("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=D("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=D("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=D("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=D("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=D("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=D("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=D("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=D("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=D("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=D("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=D("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=D("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=D("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=D("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=D("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=D("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dp=()=>{const[e,t]=fe.useState(!1),[n,r]=fe.useState(!1),{language:i,toggleLanguage:l}=Ue(),a=$e[i];fe.useEffect(()=>{const d=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const o=[{href:"#uber-mich",label:a.nav.about},{href:"#auszeichnungen",label:a.nav.strengths},{href:"#erfahrung",label:a.nav.experience},{href:"#bildung",label:a.nav.education},{href:"#kompetenzen",label:a.nav.skills},{href:"#zertifikate",label:a.nav.certifications},{href:"#interessen",label:a.nav.interests},{href:"#kontakt",label:a.nav.contact}],u=d=>{const h=document.querySelector(d);h&&(h.scrollIntoView({behavior:"smooth"}),t(!1))};return s.jsxs("nav",{className:`navbar ${n?"navbar-scrolled":""}`,children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"navbar-content",children:[s.jsxs("div",{className:"navbar-brand",children:[s.jsx("h3",{className:"brand-text",children:"Lisa Pink"}),s.jsx("span",{className:"brand-subtitle",children:"Portfolio"})]}),s.jsxs("div",{className:"navbar-menu desktop-menu",children:[o.map(d=>s.jsx("button",{onClick:()=>u(d.href),className:"nav-link",children:d.label},d.href)),s.jsxs("div",{className:"language-toggle-group",children:[s.jsx("button",{onClick:()=>i!=="de"&&l(),className:`language-btn ${i==="de"?"active":""}`,"aria-label":"Deutsch",children:"DE"}),s.jsx("button",{onClick:()=>i!=="en"&&l(),className:`language-btn ${i==="en"?"active":""}`,"aria-label":"English",children:"EN"})]})]}),s.jsx("button",{className:"mobile-menu-btn",onClick:()=>t(!e),"aria-label":"Toggle menu",children:e?s.jsx(cp,{size:24}):s.jsx(np,{size:24})})]}),s.jsxs("div",{className:`mobile-menu ${e?"mobile-menu-open":""}`,children:[o.map(d=>s.jsx("button",{onClick:()=>u(d.href),className:"mobile-nav-link",children:d.label},d.href)),s.jsxs("div",{className:"mobile-language-toggle-group",children:[s.jsx("button",{onClick:()=>i!=="de"&&l(),className:`mobile-language-btn ${i==="de"?"active":""}`,"aria-label":"Deutsch",children:"DE"}),s.jsx("button",{onClick:()=>i!=="en"&&l(),className:`mobile-language-btn ${i==="en"?"active":""}`,"aria-label":"English",children:"EN"})]})]})]}),s.jsx("style",{jsx:!0,children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245, 241, 235, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 196, 176, 0.2);
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 20px var(--shadow-light);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .brand-text {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-brown);
          margin: 0;
          line-height: 1;
        }

        .brand-subtitle {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-light);
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-medium);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: var(--warm-brown);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .language-toggle-group {
          display: flex;
          align-items: center;
          border: 1px solid var(--accent-beige);
          border-radius: 20px;
          overflow: hidden;
          background: var(--secondary-beige);
        }

        .language-btn {
          padding: 0.5rem 0.8rem;
          background: transparent;
          border: none;
          color: var(--warm-brown);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 45px;
        }

        .language-btn:hover:not(.active) {
          background: var(--accent-beige);
        }

        .language-btn.active {
          background: var(--warm-brown);
          color: white;
        }

        .language-btn:not(:last-child) {
          border-right: 1px solid var(--accent-beige);
        }

        .mobile-language-toggle-group {
          display: flex;
          align-items: center;
          border: 1px solid var(--accent-beige);
          border-radius: 20px;
          overflow: hidden;
          background: var(--secondary-beige);
          margin: 0.5rem 1rem 1rem;
        }

        .mobile-language-btn {
          padding: 1rem 1.5rem;
          background: transparent;
          border: none;
          color: var(--warm-brown);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          flex: 1;
          text-align: center;
        }

        .mobile-language-btn:hover:not(.active) {
          background: var(--accent-beige);
        }

        .mobile-language-btn.active {
          background: var(--warm-brown);
          color: white;
        }

        .mobile-language-btn:not(:last-child) {
          border-right: 1px solid var(--accent-beige);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--secondary-beige);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--white);
          border-top: 1px solid var(--secondary-beige);
          box-shadow: 0 4px 20px var(--shadow-light);
          margin-top: 1rem;
          border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
          overflow: hidden;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu-open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-medium);
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 1rem 1.5rem;
          text-align: left;
          transition: all 0.3s ease;
          border-bottom: 1px solid var(--secondary-beige);
        }

        .mobile-nav-link:hover {
          background: var(--primary-beige);
          color: var(--warm-brown);
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .brand-text {
            font-size: 1.5rem;
          }

          .brand-subtitle {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 0.8rem 0;
          }

          .brand-text {
            font-size: 1.3rem;
          }

          .mobile-nav-link {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
        }
      `})]})},fp=()=>{const{language:e}=Ue(),t=$e[e],n=()=>{const i=document.querySelector("#auszeichnungen");i&&i.scrollIntoView({behavior:"smooth"})},r=()=>{const i=document.querySelector("#kontakt");i&&i.scrollIntoView({behavior:"smooth"})};return s.jsxs("section",{id:"uber-mich",className:"hero-section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-text",children:[s.jsxs("div",{className:"hero-intro fade-in",children:[s.jsx("span",{className:"hero-greeting",children:t.hero.greeting}),s.jsx("h1",{className:"hero-name text-gradient",children:"Lisa Pink"}),s.jsxs("div",{className:"hero-titles",children:[s.jsx("div",{className:"title-row",children:s.jsxs("h2",{className:"hero-title",children:[t.hero.title1,s.jsx("span",{className:"hero-degree",children:"(MBA)"})]})}),s.jsx("div",{className:"title-row",children:s.jsxs("h2",{className:"hero-title",children:[t.hero.title2,s.jsx("span",{className:"hero-degree",children:"(M.Ed.)"})]})})]})]}),s.jsxs("div",{className:"hero-description slide-in-left",children:[s.jsx("p",{children:t.hero.description1}),s.jsx("p",{children:t.hero.description2})]}),s.jsx("div",{className:"hero-actions slide-in-right",children:s.jsxs("button",{onClick:r,className:"btn btn-primary",children:[s.jsx($l,{size:20}),t.hero.contact]})}),s.jsxs("div",{className:"hero-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"4+"}),s.jsx("span",{className:"stat-label",children:t.hero.stats.experience})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"2"}),s.jsx("span",{className:"stat-label",children:t.hero.stats.degrees})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"4"}),s.jsx("span",{className:"stat-label",children:t.hero.stats.languages})]})]})]}),s.jsx("div",{className:"hero-image slide-in-right",children:s.jsx("div",{className:"image-container",children:s.jsxs("div",{className:"image-placeholder",children:[s.jsxs("div",{className:"decorative-elements",children:[s.jsx("div",{className:"decorative-circle circle-1"}),s.jsx("div",{className:"decorative-circle circle-2"}),s.jsx("div",{className:"decorative-circle circle-3"})]}),s.jsx("img",{src:"/Bewerbungsbild.jpg",alt:"Lisa Pink",className:"profile-image"})]})})})]}),s.jsx("button",{onClick:n,className:"scroll-indicator",children:s.jsx(Xf,{size:24})})]}),s.jsx("style",{jsx:!0,children:`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          background: linear-gradient(135deg, var(--primary-beige) 0%, var(--secondary-beige) 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 196, 176, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(100px, -100px);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .hero-greeting {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          color: var(--text-medium);
          font-weight: 400;
          margin-bottom: var(--spacing-xs);
        }

        .hero-name {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          line-height: 0.9;
        }

        .hero-titles {
          margin-bottom: var(--spacing-md);
        }

        .hero-title {
          font-size: clamp(1.1rem, 2.2vw, 1.5rem);
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
        }

        .title-row {
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .hero-degree {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--warm-brown);
          font-weight: 600;
          background: var(--secondary-beige);
          padding: 0.2rem 0.4rem;
          border-radius: 10px;
          border: 1px solid var(--accent-beige);
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .hero-description {
          max-width: 500px;
        }

        .hero-description p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-medium);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--accent-beige);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--warm-brown);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .image-placeholder {
          position: relative;
          width: 350px;
          height: 450px;
          background: var(--white);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 20px 60px var(--shadow-medium);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
        }

        .decorative-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-beige), var(--warm-brown));
          opacity: 0.1;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          top: -40px;
          right: -40px;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          bottom: -60px;
          left: -60px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          top: 50%;
          right: -30px;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          color: var(--text-medium);
          cursor: pointer;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          animation: bounce 2s infinite;
        }

        .scroll-indicator:hover {
          color: var(--warm-brown);
          background: rgba(255, 255, 255, 0.8);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            gap: var(--spacing-xl);
          }
          
          .hero-name {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            text-align: center;
          }

          .hero-image {
            order: -1;
          }

          .image-placeholder {
            width: 280px;
            height: 360px;
            margin: 0 auto;
          }

          .hero-stats {
            justify-content: center;
            gap: var(--spacing-md);
            flex-wrap: wrap;
          }

          .hero-actions {
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
          }

          .hero-description {
            max-width: none;
          }
          
          .hero-text {
            gap: var(--spacing-md);
          }
          
          .title-row { display: block; }
          .hero-title { justify-content: center; }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding-top: 80px;
            min-height: auto;
            padding-bottom: var(--spacing-xl);
          }

          .image-placeholder {
            width: 240px;
            height: 320px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          
          .hero-actions .btn {
            width: 100%;
            max-width: 280px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
          
          .hero-stats {
            gap: var(--spacing-sm);
          }
          
          .stat-item {
            min-width: 80px;
          }
        }
      `})]})},pp=()=>{const{language:e}=Ue(),t=$e[e],n=[s.jsx(Gf,{size:32}),s.jsx(Wl,{size:32}),s.jsx(op,{size:32}),s.jsx(tp,{size:32}),s.jsx(Aa,{size:32}),s.jsx(up,{size:32})],r=t.strengths.items.map((i,l)=>({icon:n[l],title:i.title,description:i.description,highlights:i.highlights}));return s.jsxs("section",{id:"auszeichnungen",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.strengths.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.strengths.description})]}),s.jsx("div",{className:"strengths-grid",children:r.map((i,l)=>s.jsxs("div",{className:"strength-card card fade-in",style:{animationDelay:`${l*.1}s`},children:[s.jsx("div",{className:"strength-icon",children:i.icon}),s.jsxs("div",{className:"strength-content",children:[s.jsx("h3",{className:"strength-title",children:i.title}),s.jsx("p",{className:"strength-description",children:i.description}),s.jsx("div",{className:"strength-highlights",children:i.highlights.map((a,o)=>s.jsx("span",{className:"highlight-tag",children:a},o))})]})]},l))}),s.jsx("div",{className:"philosophy-section",children:s.jsxs("div",{className:"philosophy-content",children:[s.jsx("h3",{className:"philosophy-title",children:t.strengths.philosophy.title}),s.jsxs("div",{className:"philosophy-grid",children:[s.jsxs("div",{className:"philosophy-item",children:[s.jsx("div",{className:"philosophy-number",children:"01"}),s.jsxs("div",{children:[s.jsx("h4",{children:t.strengths.philosophy.item1.title}),s.jsx("p",{children:t.strengths.philosophy.item1.description})]})]}),s.jsxs("div",{className:"philosophy-item",children:[s.jsx("div",{className:"philosophy-number",children:"02"}),s.jsxs("div",{children:[s.jsx("h4",{children:t.strengths.philosophy.item2.title}),s.jsx("p",{children:t.strengths.philosophy.item2.description})]})]}),s.jsxs("div",{className:"philosophy-item",children:[s.jsx("div",{className:"philosophy-number",children:"03"}),s.jsxs("div",{children:[s.jsx("h4",{children:t.strengths.philosophy.item3.title}),s.jsx("p",{children:t.strengths.philosophy.item3.description})]})]})]})]})})]}),s.jsx("style",{jsx:!0,children:`
        .section-header {
          margin-bottom: var(--spacing-2xl);
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          margin-bottom: var(--spacing-md);
        }

        .section-description {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.8;
        }

        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .strength-card {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          height: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .strength-card::before {
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
        }

        .strength-icon {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          margin-bottom: var(--spacing-sm);
        }

        .strength-content {
          flex: 1;
        }

        .strength-title {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .strength-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .strength-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .highlight-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .philosophy-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .philosophy-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .philosophy-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .philosophy-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
        }

        .philosophy-number {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .philosophy-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.2rem;
        }

        .philosophy-item p {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .strengths-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .strength-card {
            flex-direction: column;
            text-align: center;
          }

          .strength-icon {
            align-self: center;
          }

          .philosophy-section {
            padding: var(--spacing-lg);
          }

          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .philosophy-item {
            flex-direction: column;
            text-align: center;
          }

          .philosophy-number {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          .strengths-grid {
            grid-template-columns: 1fr;
          }

          .strength-highlights {
            justify-content: center;
          }

          .highlight-tag {
            font-size: 0.8rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `})]})},mp=()=>{const{language:e}=Ue(),t=$e[e],n=t.experience.items;return s.jsxs("section",{id:"erfahrung",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.experience.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.experience.description})]}),s.jsx("div",{className:"timeline",children:n.map((r,i)=>s.jsxs("div",{className:"timeline-item fade-in",style:{animationDelay:`${i*.2}s`},children:[s.jsxs("div",{className:"timeline-marker",children:[s.jsx("div",{className:"timeline-dot"}),s.jsx("div",{className:"timeline-line"})]}),s.jsxs("div",{className:"experience-card card",children:[s.jsxs("div",{className:"experience-header",children:[s.jsxs("div",{className:"experience-title-section",children:[s.jsx("h3",{className:"experience-position",children:r.position}),s.jsxs("div",{className:"experience-company",children:[s.jsx(Ul,{size:18}),s.jsx("span",{children:r.company})]})]}),s.jsxs("div",{className:"experience-meta",children:[s.jsxs("div",{className:"experience-period",children:[s.jsx(fc,{size:16}),s.jsx("span",{children:r.period})]}),s.jsxs("div",{className:"experience-location",children:[s.jsx(Oa,{size:16}),s.jsx("span",{children:r.location})]}),s.jsx("div",{className:"experience-type",children:s.jsx("span",{className:"type-badge",children:r.type})})]})]}),s.jsx("p",{className:"experience-description",children:r.description}),s.jsxs("div",{className:"experience-achievements",children:[s.jsx("h4",{children:t.experience.achievements}),s.jsx("ul",{className:"achievements-list",children:r.achievements.map((l,a)=>s.jsxs("li",{className:"achievement-item",children:[s.jsx(Zf,{size:16}),s.jsx("span",{children:l})]},a))})]}),s.jsxs("div",{className:"experience-skills",children:[s.jsx("h4",{children:t.experience.skills}),s.jsx("div",{className:"skills-tags",children:r.skills.map((l,a)=>s.jsx("span",{className:"skill-tag",children:l},a))})]})]})]},i))}),s.jsx("div",{className:"experience-summary",children:s.jsxs("div",{className:"summary-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"4+"}),s.jsx("span",{className:"stat-label",children:t.experience.stats.teaching})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"4"}),s.jsx("span",{className:"stat-label",children:t.experience.stats.industries})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"200h"}),s.jsx("span",{className:"stat-label",children:t.experience.stats.internship})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"6+"}),s.jsx("span",{className:"stat-label",children:t.experience.stats.experience})]})]})})]}),s.jsx("style",{jsx:!0,children:`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          position: relative;
          display: flex;
          margin-bottom: var(--spacing-xl);
        }

        .timeline-item:last-child .timeline-line {
          display: none;
        }

        .timeline-marker {
          position: relative;
          margin-right: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: 50%;
          border: 4px solid var(--white);
          box-shadow: 0 4px 12px var(--shadow-light);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
          margin-top: var(--spacing-sm);
        }

        .experience-card {
          flex: 1;
          position: relative;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
          gap: var(--spacing-md);
        }

        .experience-position {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .experience-company {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--warm-brown);
          font-weight: 500;
          font-size: 1.1rem;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          align-items: flex-end;
          text-align: right;
        }

        .experience-period,
        .experience-location {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .type-badge {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .experience-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .experience-achievements,
        .experience-skills {
          margin-bottom: var(--spacing-md);
        }

        .experience-achievements h4,
        .experience-skills h4 {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-xs);
          color: var(--text-medium);
          line-height: 1.6;
        }

        .achievement-item svg {
          color: var(--warm-brown);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .skill-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .experience-summary {
          margin-top: var(--spacing-2xl);
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .experience-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--warm-brown);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: var(--spacing-xs);
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
          }

          .timeline-marker {
            flex-direction: row;
            margin-right: 0;
            margin-bottom: var(--spacing-md);
          }

          .timeline-line {
            width: 50px;
            height: 2px;
            margin-top: 0;
            margin-left: var(--spacing-sm);
          }

          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .experience-meta {
            align-items: flex-start;
            text-align: left;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
          }
        }

        @media (max-width: 480px) {
          .timeline-marker {
            justify-content: center;
          }

          .timeline-line {
            display: none;
          }

          .experience-position {
            font-size: 1.2rem;
          }

          .summary-stats {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `})]})},gp=()=>{const{language:e}=Ue(),t=$e[e],n=t.education.items;return s.jsxs("section",{id:"bildung",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.education.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.education.description})]}),s.jsx("div",{className:"education-timeline",children:n.map((r,i)=>s.jsx("div",{className:"education-item fade-in",style:{animationDelay:`${i*.2}s`},children:s.jsxs("div",{className:"education-card card",children:[s.jsxs("div",{className:"education-header",children:[s.jsx("div",{className:"education-icon",children:s.jsx(qf,{size:28})}),s.jsxs("div",{className:"education-main",children:[s.jsx("h3",{className:"education-degree",children:r.degree}),s.jsx("div",{className:"education-field",children:r.field}),s.jsxs("div",{className:"education-institution",children:[s.jsx(Hf,{size:16}),s.jsx("span",{children:r.institution})]})]}),s.jsxs("div",{className:"education-meta",children:[s.jsxs("div",{className:"education-grade",children:[s.jsx(Aa,{size:16}),s.jsxs("span",{children:["Status: ",r.grade]})]}),s.jsxs("div",{className:"education-period",children:[s.jsx(fc,{size:16}),s.jsx("span",{children:r.period})]}),s.jsxs("div",{className:"education-location",children:[s.jsx(Oa,{size:16}),s.jsx("span",{children:r.location})]}),s.jsx("div",{className:"education-status",children:s.jsx("span",{className:"status-badge",children:r.status})})]})]}),s.jsx("p",{className:"education-description",children:r.description}),s.jsxs("div",{className:"education-highlights",children:[s.jsx("h4",{children:t.education.highlights}),s.jsx("ul",{className:"highlights-list",children:r.highlights.map((l,a)=>s.jsxs("li",{className:"highlight-item",children:[s.jsx("span",{className:"highlight-bullet",children:"•"}),s.jsx("span",{children:l})]},a))})]}),s.jsxs("div",{className:"education-modules",children:[s.jsx("h4",{children:t.education.modules}),s.jsx("div",{className:"modules-tags",children:r.modules.map((l,a)=>s.jsx("span",{className:"module-tag",children:l},a))})]})]})},i))}),s.jsx("div",{className:"education-summary",children:s.jsxs("div",{className:"summary-content",children:[s.jsx("h3",{className:"summary-title",children:t.education.philosophy.title}),s.jsx("p",{className:"summary-text",children:t.education.philosophy.text})]})})]}),s.jsx("style",{jsx:!0,children:`
        .education-timeline {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .education-item {
          position: relative;
        }

        .education-card {
          position: relative;
          padding: var(--spacing-xl);
        }

        .education-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--spacing-lg);
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .education-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .education-main {
          min-width: 0;
        }

        .education-degree {
          font-size: 1.5rem;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .education-field {
          font-size: 1.1rem;
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .education-institution {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-weight: 500;
        }

        .education-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          text-align: right;
        }

        .education-grade,
        .education-period,
        .education-location {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
          justify-content: flex-end;
        }

        .education-grade {
          color: var(--warm-brown);
          font-weight: 600;
        }

        .status-badge {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .education-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .education-highlights,
        .education-modules {
          margin-bottom: var(--spacing-md);
        }

        .education-highlights h4,
        .education-modules h4 {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xs);
          color: var(--text-medium);
          line-height: 1.6;
        }

        .highlight-bullet {
          color: var(--warm-brown);
          font-weight: bold;
          margin-top: 2px;
        }

        .modules-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .module-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .additional-education {
          margin-top: var(--spacing-2xl);
        }

        .additional-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-2xl);
        }

        .additional-item {
          padding: var(--spacing-md);
        }

        .additional-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .additional-header svg {
          color: var(--warm-brown);
          margin-top: 2px;
        }

        .additional-item-title {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .additional-institution {
          color: var(--text-medium);
          margin: 0;
          font-size: 0.9rem;
        }

        .additional-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .additional-period {
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .additional-type {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .education-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
          margin-top: var(--spacing-2xl);
        }

        .education-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-md);
          font-size: 1.8rem;
        }

        .summary-text {
          text-align: center;
          color: var(--text-medium);
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
          font-size: 1.1rem;
        }

        .summary-stats {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
        }

        .summary-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--warm-brown);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: var(--spacing-xs);
        }

        @media (max-width: 768px) {
          .education-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--spacing-md);
          }

          .education-meta {
            text-align: center;
            align-items: center;
          }

          .education-grade,
          .education-period,
          .education-location {
            justify-content: center;
          }

          .additional-grid {
            grid-template-columns: 1fr;
          }

          .summary-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .education-card {
            padding: var(--spacing-md);
          }

          .education-degree {
            font-size: 1.3rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .additional-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-xs);
          }
        }
      `})]})},hp=()=>{const{language:e}=Ue(),t=$e[e],i=e==="de"?[{icon:s.jsx(Wl,{size:24}),title:"Allgemeine Kompetenzen",color:"var(--warm-brown)",skills:[{name:"Organisationsentwicklung & Lernprozesse"},{name:"Kommunikation & Stakeholder-Arbeit"},{name:"Inklusive Methoden & Teamführung"},{name:"Zeit- & Projektmanagement"}]},{icon:s.jsx(Ul,{size:24}),title:"Pädagogische Kompetenzen",color:"#8B5A3C",skills:[{name:"Unterrichten"},{name:"Didaktik"},{name:"Lernentwicklung"},{name:"Konfliktmanagement"},{name:"Kognitive Flexibilität"},{name:"Pädagogische Leitung"},{name:"Lern- und Bildungsberatung"},{name:"Reflexion"}]},{icon:s.jsx(Xs,{size:24}),title:"Technische Kompetenzen",color:"#A67C52",skills:[{name:"MS Office"},{name:"Canva"},{name:"monday.com"},{name:"Digitale Lernwerkzeuge"}]}]:[{icon:s.jsx(Wl,{size:24}),title:"General Competencies",color:"var(--warm-brown)",skills:[{name:"Organizational Development & Learning Processes"},{name:"Communication & Stakeholder Work"},{name:"Inclusive Methods & Team Leadership"},{name:"Time & Project Management"}]},{icon:s.jsx(Ul,{size:24}),title:"Pedagogical Competencies",color:"#8B5A3C",skills:[{name:"Teaching"},{name:"Didactics"},{name:"Learning Development"},{name:"Conflict Management"},{name:"Cognitive Flexibility"},{name:"Pedagogical Leadership"},{name:"Learning & Educational Consulting"},{name:"Reflection"}]},{icon:s.jsx(Xs,{size:24}),title:"Technical Competencies",color:"#A67C52",skills:[{name:"MS Office"},{name:"Canva"},{name:"monday.com"},{name:"Digital Learning Tools"}]}],l=["Microsoft Office Suite","Canva","monday.com","SAP","Digital Learning Tools","Zoom","Google Workspace","Teams"];return s.jsxs("section",{id:"kompetenzen",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.skills.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.skills.description})]}),s.jsx("div",{className:"skills-grid",children:i.map((a,o)=>s.jsxs("div",{className:"skill-category card fade-in",style:{animationDelay:`${o*.1}s`},children:[s.jsxs("div",{className:"category-header",children:[s.jsx("div",{className:"category-icon",style:{backgroundColor:a.color},children:a.icon}),s.jsx("h3",{className:"category-title",children:a.title})]}),s.jsx("div",{className:"skills-list",children:a.skills.map((u,d)=>s.jsx("div",{className:"skill-item",children:s.jsx("div",{className:"skill-info",children:s.jsx("span",{className:"skill-name",children:u.name})})},d))})]},o))}),s.jsx("div",{className:"additional-skills",children:s.jsxs("div",{className:"tools-section",children:[s.jsx("h3",{className:"additional-title",children:t.skills.toolsTitle}),s.jsx("div",{className:"tools-cloud",children:l.map((a,o)=>s.jsx("span",{className:"tool-tag",style:{animationDelay:`${o*.05}s`},children:a},o))})]})}),s.jsx("div",{className:"skills-summary",children:s.jsxs("div",{className:"summary-content",children:[s.jsx("h3",{className:"summary-title",children:t.skills.summary.title}),s.jsxs("div",{className:"summary-grid",children:[s.jsxs("div",{className:"summary-item",children:[s.jsx("div",{className:"summary-icon",children:"🎯"}),s.jsx("h4",{children:t.skills.summary.strategic.title}),s.jsx("p",{children:t.skills.summary.strategic.description})]}),s.jsxs("div",{className:"summary-item",children:[s.jsx("div",{className:"summary-icon",children:"🚀"}),s.jsx("h4",{children:t.skills.summary.digital.title}),s.jsx("p",{children:t.skills.summary.digital.description})]}),s.jsxs("div",{className:"summary-item",children:[s.jsx("div",{className:"summary-icon",children:"👥"}),s.jsx("h4",{children:t.skills.summary.people.title}),s.jsx("p",{children:t.skills.summary.people.description})]})]})]})})]}),s.jsx("style",{jsx:!0,children:`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .skill-category {
          padding: var(--spacing-md);
          height: 100%;
        }
        
        .skill-category .skill-item {
          border-left-color: var(--warm-brown);
        }
        
        .skill-category:nth-child(2) .skill-item {
          border-left-color: #8B5A3C;
        }
        
        .skill-category:nth-child(3) .skill-item {
          border-left-color: #A67C52;
        }
        
        .skill-category:nth-child(4) .skill-item {
          border-left-color: #D4C4B0;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .category-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .category-title {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .skill-item {
          display: flex;
          align-items: center;
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
          border-left: 4px solid;
          border-left-color: inherit;
        }

        .skill-info {
          display: flex;
          align-items: center;
        }

        .skill-name {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }



        .additional-skills {
          margin-bottom: var(--spacing-2xl);
        }
        
        .tools-section {
          margin-bottom: var(--spacing-lg);
        }

        .additional-title {
          color: var(--text-dark);
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .certifications-section,
        .tools-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 4px 20px var(--shadow-light);
          position: relative;
        }

        .certifications-section::before,
        .tools-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .certifications-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .certification-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
          font-weight: 500;
          color: var(--text-dark);
        }

        .certification-icon {
          width: 24px;
          height: 24px;
          background: var(--warm-brown);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .tools-cloud {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-xs);
          justify-items: center;
        }

        .tool-tag {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
          width: 100%;
          text-align: center;
          white-space: nowrap;
        }

        .tool-tag:hover {
          background: var(--accent-beige);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-light);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skills-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .skills-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }

        .summary-item {
          text-align: center;
          padding: var(--spacing-md);
        }

        .summary-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .summary-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-sm);
          font-size: 1.2rem;
        }

        .summary-item p {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .additional-skills {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .summary-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .tools-cloud {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .skill-category {
            padding: var(--spacing-md);
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .certifications-section,
          .tools-section {
            padding: var(--spacing-md);
          }

          .tool-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `})]})},vp=()=>{const{language:e}=Ue(),t=$e[e],n=t.certifications.items,r=t.certifications.additionalItems,i=n.map(a=>({icon:s.jsx(Aa,{size:24}),title:a.title,issuer:a.issuer,date:"",type:a.type,description:a.description,link:"",color:"var(--warm-brown)"})),l=r.map((a,o)=>({icon:o===0?s.jsx(Qf,{size:24}):s.jsx(ap,{size:24}),title:a.title,description:a.description,date:a.date,type:a.type}));return s.jsxs("section",{id:"zertifikate",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.certifications.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.certifications.description})]}),s.jsxs("div",{className:"certifications-section",children:[s.jsx("h3",{className:"subsection-title",children:t.certifications.professional}),s.jsx("div",{className:"certifications-grid",children:i.map((a,o)=>s.jsxs("div",{className:"certification-card card fade-in",style:{animationDelay:`${o*.1}s`},children:[s.jsxs("div",{className:"cert-header",children:[s.jsx("div",{className:"cert-icon",style:{backgroundColor:a.color},children:a.icon}),s.jsx("div",{className:"cert-meta",children:s.jsx("span",{className:"cert-type",children:a.type})})]}),s.jsxs("div",{className:"cert-content",children:[s.jsx("h4",{className:"cert-title",children:a.title}),s.jsx("p",{className:"cert-issuer",children:a.issuer}),s.jsx("p",{className:"cert-description",children:a.description})]})]},o))})]}),s.jsxs("div",{className:"additional-section",children:[s.jsx("h3",{className:"subsection-title",children:t.certifications.additional}),s.jsx("div",{className:"additional-grid",children:l.map((a,o)=>s.jsxs("div",{className:"additional-card card",style:{animationDelay:`${o*.1+.4}s`},children:[s.jsxs("div",{className:"additional-header",children:[s.jsx("div",{className:"additional-icon",children:a.icon}),s.jsxs("div",{className:"additional-meta",children:[s.jsx("span",{className:"additional-type",children:a.type}),s.jsx("span",{className:"additional-date",children:a.date})]})]}),s.jsx("h4",{className:"additional-title",children:a.title}),s.jsx("p",{className:"additional-description",children:a.description})]},o))})]}),s.jsxs("div",{className:"credentials-summary",children:[s.jsxs("div",{className:"summary-stats",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"stat-number",children:"1"}),s.jsx("span",{className:"stat-label",children:"Online-Zertifikat"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"stat-number",children:"2"}),s.jsx("span",{className:"stat-label",children:"Führerscheine"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"stat-number",children:"2"}),s.jsx("span",{className:"stat-label",children:"Abschlüsse"})]})]}),s.jsx("div",{className:"summary-note",children:s.jsxs("p",{children:['"',t.certifications.quote,'"']})})]})]}),s.jsx("style",{jsx:!0,children:`
        .subsection-title {
          color: var(--text-dark);
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .subsection-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 2px;
        }

        .certifications-section {
          margin-bottom: var(--spacing-2xl);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .certification-card {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .cert-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .cert-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--spacing-xs);
        }

        .cert-type {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .cert-date {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .cert-content {
          flex: 1;
          margin-bottom: var(--spacing-md);
        }

        .cert-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .cert-issuer {
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .cert-description {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }



        .additional-section {
          margin-bottom: var(--spacing-2xl);
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-2xl);
        }

        .additional-card {
          padding: var(--spacing-md);
        }

        .additional-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .additional-icon {
          color: var(--warm-brown);
        }

        .additional-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .additional-type {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .additional-date {
          color: var(--text-light);
          font-size: 0.8rem;
        }

        .additional-title {
          color: var(--text-dark);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .additional-description {
          color: var(--text-medium);
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        .awards-section {
          margin-bottom: var(--spacing-2xl);
        }

        .awards-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .award-item {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .award-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          bottom: -60px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
        }

        .award-year {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .award-content {
          flex: 1;
          background: var(--white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
          position: relative;
        }

        .award-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .award-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .award-institution {
          color: var(--warm-brown);
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }

        .award-description {
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        .credentials-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .credentials-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-stats {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
        }

        .summary-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--warm-brown);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: var(--spacing-xs);
        }

        .summary-note {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .summary-note p {
          color: var(--text-medium);
          font-style: italic;
          line-height: 1.7;
          font-size: 1.1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .additional-grid {
            grid-template-columns: 1fr;
          }

          .award-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-md);
          }

          .award-item::after {
            display: none;
          }

          .award-year {
            align-self: center;
          }

          .summary-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .certification-card,
          .additional-card {
            padding: var(--spacing-md);
          }

          .cert-header {
            flex-direction: column;
            gap: var(--spacing-sm);
          }

          .cert-meta {
            align-items: flex-start;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `})]})},yp=()=>{const{language:e}=Ue(),t=$e[e],n=[s.jsx(ip,{size:28}),s.jsx(ep,{size:28})],r=["var(--warm-brown)","#8B5A3C"],i=["🇩🇪","🇬🇧","🇫🇷","🇷🇺"],l=t.interests.hobbiesItems.map((o,u)=>({icon:n[u],title:o.title,description:o.description,details:o.details,color:r[u]})),a=t.interests.languageItems.map((o,u)=>({language:o.language,level:o.level,proficiency:o.proficiency,certification:o.certification,icon:i[u]}));return s.jsxs("section",{id:"interessen",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.interests.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.interests.description})]}),s.jsxs("div",{className:"interests-content",children:[s.jsxs("div",{className:"hobbies-section",children:[s.jsx("h3",{className:"subsection-title",children:t.interests.hobbies}),s.jsx("div",{className:"hobbies-grid",children:l.map((o,u)=>s.jsxs("div",{className:"hobby-card card fade-in",style:{animationDelay:`${u*.1}s`},children:[s.jsxs("div",{className:"hobby-header",children:[s.jsx("div",{className:"hobby-icon",style:{backgroundColor:o.color},children:o.icon}),s.jsx("h4",{className:"hobby-title",children:o.title})]}),s.jsx("p",{className:"hobby-description",children:o.description}),s.jsx("div",{className:"hobby-details",children:o.details.map((d,h)=>s.jsxs("div",{className:"hobby-detail",children:[s.jsx(sp,{size:12}),s.jsx("span",{children:d})]},h))})]},u))})]}),s.jsxs("div",{className:"languages-section",children:[s.jsx("h3",{className:"subsection-title",children:t.interests.languages}),s.jsx("div",{className:"languages-grid",children:a.map((o,u)=>s.jsxs("div",{className:"language-card card",style:{animationDelay:`${u*.15+.6}s`},children:[s.jsxs("div",{className:"language-header",children:[s.jsx("div",{className:"language-flag",children:o.icon}),s.jsxs("div",{className:"language-info",children:[s.jsx("h4",{className:"language-name",children:o.language}),s.jsx("span",{className:"language-level",children:o.level})]}),s.jsx("div",{className:"language-cert",children:s.jsx("span",{children:o.certification})})]}),s.jsxs("div",{className:"language-progress",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${o.proficiency}%`,animationDelay:`${u*.15+1}s`}})}),s.jsxs("span",{className:"progress-percentage",children:[o.proficiency,"%"]})]})]},u))})]})]}),s.jsx("div",{className:"personality-summary",children:s.jsxs("div",{className:"summary-content",children:[s.jsx("h3",{className:"summary-title",children:t.interests.personality.title}),s.jsxs("div",{className:"personality-traits",children:[s.jsxs("div",{className:"trait-item",children:[s.jsx("div",{className:"trait-icon",children:"🎯"}),s.jsx("h4",{children:t.interests.personality.goalOriented.title}),s.jsx("p",{children:t.interests.personality.goalOriented.description})]}),s.jsxs("div",{className:"trait-item",children:[s.jsx("div",{className:"trait-icon",children:"🌍"}),s.jsx("h4",{children:t.interests.personality.worldly.title}),s.jsx("p",{children:t.interests.personality.worldly.description})]}),s.jsxs("div",{className:"trait-item",children:[s.jsx("div",{className:"trait-icon",children:"⚖️"}),s.jsx("h4",{children:t.interests.personality.balanced.title}),s.jsx("p",{children:t.interests.personality.balanced.description})]}),s.jsxs("div",{className:"trait-item",children:[s.jsx("div",{className:"trait-icon",children:"💪"}),s.jsx("h4",{children:t.interests.personality.active.title}),s.jsx("p",{children:t.interests.personality.active.description})]})]})]})})]}),s.jsx("style",{jsx:!0,children:`
        .subsection-title {
          color: var(--text-dark);
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .subsection-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 2px;
        }

        .interests-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
        }

        .hobbies-section {
          margin-bottom: var(--spacing-2xl);
        }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .hobby-card {
          padding: var(--spacing-lg);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .hobby-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .hobby-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .hobby-title {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .hobby-description {
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
          flex: 1;
        }

        .hobby-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .hobby-detail {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .hobby-detail svg {
          color: var(--warm-brown);
        }

        .languages-section {
          margin-bottom: var(--spacing-2xl);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }

        .language-card {
          padding: var(--spacing-md);
        }

        .language-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .language-flag {
          font-size: 2rem;
        }

        .language-info {
          flex: 1;
        }

        .language-name {
          color: var(--text-dark);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 var(--spacing-xs) 0;
        }

        .language-level {
          color: var(--text-medium);
          font-size: 0.9rem;
        }

        .language-cert {
          background: var(--accent-beige);
          color: var(--warm-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .language-progress {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--secondary-beige);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 4px;
          animation: progressGrow 1.5s ease-out forwards;
          transform: scaleX(0);
          transform-origin: left;
        }

        @keyframes progressGrow {
          to {
            transform: scaleX(1);
          }
        }

        .progress-percentage {
          color: var(--text-medium);
          font-size: 0.9rem;
          font-weight: 600;
          min-width: 40px;
          text-align: right;
        }

        .travel-section {
          margin-bottom: var(--spacing-2xl);
        }

        .travel-timeline {
          max-width: 700px;
          margin: 0 auto;
        }

        .travel-item {
          display: flex;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .travel-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          bottom: -60px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-beige), var(--secondary-beige));
        }

        .travel-year {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .travel-content {
          flex: 1;
          background: var(--white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
        }

        .travel-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .travel-header svg {
          color: var(--warm-brown);
        }

        .travel-destination {
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .travel-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
        }

        .travel-highlight {
          background: var(--secondary-beige);
          color: var(--warm-brown);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--accent-beige);
        }

        .personality-summary {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
        }

        .personality-summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .summary-title {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: var(--spacing-xl);
          font-size: 2rem;
        }

        .personality-traits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }

        .trait-item {
          text-align: center;
          padding: var(--spacing-sm);
        }

        .trait-icon {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .trait-item h4 {
          color: var(--text-dark);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }

        .trait-item p {
          color: var(--text-medium);
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .languages-grid {
            grid-template-columns: 1fr;
          }

          .personality-traits {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .hobby-card,
          .language-card {
            padding: var(--spacing-md);
          }

          .hobby-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .language-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }


        }
      `})]})},xp=()=>{const{language:e}=Ue(),t=$e[e],[n,r]=fe.useState({name:"",email:"",subject:"",message:""}),[i,l]=fe.useState(!1),a=v=>{v.preventDefault(),console.log("Form submitted:",n),l(!0),setTimeout(()=>{l(!1),r({name:"",email:"",subject:"",message:""})},3e3)},o=v=>{r({...n,[v.target.name]:v.target.value})},u=[s.jsx($l,{size:24}),s.jsx(rp,{size:24}),s.jsx(Oa,{size:24}),s.jsx(Zs,{size:24})],d=["mailto:lisapink99@gmail.com","tel:+4917678516012",null,"https://www.linkedin.com/in/lisa-pink-b00695354/"],h=["💼","🎓","🚀"],g=t.contact.contactItems.map((v,w)=>({icon:u[w],title:v.title,value:v.value,description:v.description,action:d[w]})),m=t.contact.availabilityItems.map((v,w)=>({type:v.type,status:v.status,icon:h[w]}));return s.jsxs("section",{id:"kontakt",className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header text-center",children:[s.jsx("h2",{className:"section-title text-gradient",children:t.contact.title}),s.jsx("div",{className:"decorative-line"}),s.jsx("p",{className:"section-description",children:t.contact.description})]}),s.jsxs("div",{className:"contact-content",children:[s.jsxs("div",{className:"contact-info-section",children:[s.jsx("h3",{className:"subsection-title",children:t.contact.info}),s.jsx("div",{className:"contact-cards",children:g.map((v,w)=>s.jsxs("div",{className:"contact-card card fade-in",style:{animationDelay:`${w*.1}s`},children:[s.jsx("div",{className:"contact-icon",children:v.icon}),s.jsxs("div",{className:"contact-details",children:[s.jsx("h4",{className:"contact-title",children:v.title}),s.jsx("div",{className:"contact-value",children:v.action?s.jsx("a",{href:v.action,className:"contact-link",children:v.value}):s.jsx("span",{children:v.value})}),s.jsx("p",{className:"contact-description",children:v.description})]})]},w))}),s.jsxs("div",{className:"availability-section",children:[s.jsxs("h4",{className:"availability-title",children:[s.jsx(Jf,{size:20}),t.contact.availability]}),s.jsx("div",{className:"availability-list",children:m.map((v,w)=>s.jsxs("div",{className:"availability-item",children:[s.jsx("span",{className:"availability-icon",children:v.icon}),s.jsxs("div",{className:"availability-info",children:[s.jsx("span",{className:"availability-type",children:v.type}),s.jsx("span",{className:"availability-status",children:v.status})]})]},w))})]})]}),s.jsxs("div",{className:"contact-form-section",children:[s.jsx("h3",{className:"subsection-title",children:t.contact.form.title}),s.jsx("div",{className:"form-container card",children:i?s.jsxs("div",{className:"form-success",children:[s.jsx("div",{className:"success-icon",children:s.jsx(Yf,{size:48})}),s.jsx("h4",{children:t.contact.form.success}),s.jsx("p",{children:t.contact.form.successText})]}):s.jsxs("form",{onSubmit:a,className:"contact-form",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"name",children:[t.contact.form.name," *"]}),s.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:o,required:!0,placeholder:"Ihr vollständiger Name"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"email",children:[t.contact.form.email," *"]}),s.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:o,required:!0,placeholder:"ihre.email@example.com"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"subject",children:[t.contact.form.subject," *"]}),s.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:o,required:!0,placeholder:"Worum geht es in Ihrer Nachricht?"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{htmlFor:"message",children:[t.contact.form.message," *"]}),s.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:o,required:!0,rows:"6",placeholder:"Beschreiben Sie gerne Ihr Anliegen..."})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary form-submit",children:[s.jsx(lp,{size:20}),t.contact.form.send]})]})})]})]}),s.jsx("div",{className:"contact-cta",children:s.jsxs("div",{className:"cta-content",children:[s.jsx("h3",{className:"cta-title",children:t.contact.cta.title}),s.jsx("p",{className:"cta-description",children:t.contact.cta.description}),s.jsxs("div",{className:"cta-actions",children:[s.jsxs("a",{href:"mailto:lisapink99@gmail.com",className:"btn btn-primary",children:[s.jsx($l,{size:20}),t.contact.cta.direct]}),s.jsxs("a",{href:"https://www.linkedin.com/in/lisa-pink-b00695354/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:[s.jsx(Zs,{size:20}),t.contact.cta.linkedin]})]})]})})]}),s.jsx("style",{jsx:!0,children:`
        .subsection-title {
          color: var(--text-dark);
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .subsection-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: 2px;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
          align-items: start;
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
        }

        .contact-details {
          flex: 1;
        }

        .contact-title {
          color: var(--text-dark);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 var(--spacing-xs) 0;
        }

        .contact-value {
          margin-bottom: var(--spacing-xs);
        }

        .contact-link {
          color: var(--warm-brown);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--dark-brown);
        }

        .contact-value span {
          color: var(--warm-brown);
          font-weight: 500;
          font-size: 1.1rem;
        }

        .contact-description {
          color: var(--text-medium);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .availability-section {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          box-shadow: 0 4px 20px var(--shadow-light);
        }

        .availability-title {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--text-dark);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
        }

        .availability-title svg {
          color: var(--warm-brown);
        }

        .availability-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .availability-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          background: var(--primary-beige);
          border-radius: var(--border-radius);
        }

        .availability-icon {
          font-size: 1.5rem;
        }

        .availability-info {
          display: flex;
          flex-direction: column;
        }

        .availability-type {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .availability-status {
          color: var(--text-medium);
          font-size: 0.85rem;
        }

        .form-container {
          padding: var(--spacing-xl);
          height: fit-content;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .form-group label {
          color: var(--text-dark);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid var(--secondary-beige);
          border-radius: var(--border-radius);
          font-family: var(--font-sans);
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--white);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--warm-brown);
          box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-light);
        }

        .form-submit {
          margin-top: var(--spacing-md);
          align-self: flex-start;
          min-width: 200px;
        }

        .form-success {
          text-align: center;
          padding: var(--spacing-xl);
        }

        .success-icon {
          color: #10B981;
          margin-bottom: var(--spacing-md);
        }

        .form-success h4 {
          color: var(--text-dark);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
        }

        .form-success p {
          color: var(--text-medium);
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto;
        }

        .contact-cta {
          background: var(--white);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          box-shadow: 0 8px 30px var(--shadow-light);
          position: relative;
          text-align: center;
          margin-top: var(--spacing-xl);
        }

        .contact-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        }

        .cta-title {
          color: var(--text-dark);
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
        }

        .cta-description {
          color: var(--text-medium);
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .availability-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-xs);
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .contact-cta {
            padding: var(--spacing-lg);
            margin-top: var(--spacing-lg);
          }
        }

        @media (max-width: 480px) {
          .form-container {
            padding: var(--spacing-md);
          }

          .contact-cta {
            padding: var(--spacing-xl);
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .form-submit {
            align-self: stretch;
          }
        }
      `})]})},wp=()=>{const{language:e}=Ue(),t=$e[e];return s.jsxs("div",{className:"App",children:[s.jsx(dp,{}),s.jsxs("main",{children:[s.jsx(fp,{}),s.jsx(pp,{}),s.jsx(mp,{}),s.jsx(gp,{}),s.jsx(hp,{}),s.jsx(vp,{}),s.jsx(yp,{}),s.jsx(xp,{})]}),s.jsxs("footer",{className:"footer",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-text",children:[s.jsxs("p",{children:["© 2025 Lisa Pink. ",t.footer.rights]}),s.jsx("p",{children:t.footer.tagline})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"#",className:"footer-link",children:t.footer.imprint}),s.jsx("a",{href:"#",className:"footer-link",children:t.footer.privacy}),s.jsx("a",{href:"https://www.linkedin.com/in/lisa-pink-b00695354/",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:"LinkedIn"})]})]})}),s.jsx("style",{jsx:!0,children:`
          .footer {
            background: var(--text-dark);
            color: var(--white);
            padding: var(--spacing-xl) 0;
            margin-top: var(--spacing-2xl);
          }
          
          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: var(--spacing-md);
          }
          
          .footer-text {
            flex: 1;
          }
          
          .footer-text p {
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .footer-text p:first-child {
            font-weight: 500;
            color: var(--white);
          }
          
          .footer-links {
            display: flex;
            gap: var(--spacing-lg);
          }
          
          .footer-link {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }
          
          .footer-link:hover {
            color: var(--accent-beige);
          }
          
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
              gap: var(--spacing-md);
            }
            
            .footer-links {
              gap: var(--spacing-md);
            }
          }
          
          @media (max-width: 480px) {
            .footer-links {
              flex-direction: column;
              gap: var(--spacing-xs);
            }
          }
        `})]})]})};function kp(){return s.jsx(Wf,{children:s.jsx(wp,{})})}Qi.createRoot(document.getElementById("root")).render(s.jsx(Lc.StrictMode,{children:s.jsx(kp,{})}));
