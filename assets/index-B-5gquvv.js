var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,j(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=j(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=j(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return j(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),k=Symbol.for(`react.memo_cache_sentinel`),A=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=A&&e[A]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var N=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},L=[],ne=-1;function re(e){return{current:e}}function R(e){0>ne||(e.current=L[ne],L[ne]=null,ne--)}function z(e,t){ne++,L[ne]=e.current,e.current=t}var ie=re(null),ae=re(null),oe=re(null),se=re(null);function ce(e,t){switch(z(oe,t),z(ae,e),z(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}R(ie),z(ie,e)}function le(){R(ie),R(ae),R(oe)}function ue(e){e.memoizedState!==null&&z(se,e);var t=ie.current,n=Hd(t,e.type);t!==n&&(z(ae,e),z(ie,n))}function de(e){ae.current===e&&(R(ie),R(ae)),se.current===e&&(R(se),Qf._currentValue=I)}var fe,pe;function me(e){if(fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);fe=t&&t[1]||``,pe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+fe+e+pe}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{he=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?me(n):``}function B(e,t){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return e.child!==t&&t!==null?me(`Suspense Fallback`):me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return me(`Activity`);default:return``}}function _e(e){try{var t=``,n=null;do t+=B(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ve=Object.prototype.hasOwnProperty,ye=t.unstable_scheduleCallback,be=t.unstable_cancelCallback,xe=t.unstable_shouldYield,Se=t.unstable_requestPaint,Ce=t.unstable_now,we=t.unstable_getCurrentPriorityLevel,Te=t.unstable_ImmediatePriority,Ee=t.unstable_UserBlockingPriority,De=t.unstable_NormalPriority,Oe=t.unstable_LowPriority,ke=t.unstable_IdlePriority,Ae=t.log,je=t.unstable_setDisableYieldValue,Me=null,Ne=null;function Pe(e){if(typeof Ae==`function`&&je(e),Ne&&typeof Ne.setStrictMode==`function`)try{Ne.setStrictMode(Me,e)}catch{}}var Fe=Math.clz32?Math.clz32:Re,Ie=Math.log,Le=Math.LN2;function Re(e){return e>>>=0,e===0?32:31-(Ie(e)/Le|0)|0}var ze=256,Be=262144,Ve=4194304;function He(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ue(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=He(n))):i=He(o):i=He(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=He(n))):i=He(o)):i=He(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function We(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ge(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ke(){var e=Ve;return Ve<<=1,!(Ve&62914560)&&(Ve=4194304),e}function qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function V(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Fe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ye(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ye(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Fe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Xe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ze(e,t){var n=t&-t;return n=n&42?1:Qe(n),(n&(e.suspendedLanes|t))===0?n:0}function Qe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function et(){var e=F.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function tt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var nt=Math.random().toString(36).slice(2),rt=`__reactFiber$`+nt,it=`__reactProps$`+nt,at=`__reactContainer$`+nt,ot=`__reactEvents$`+nt,st=`__reactListeners$`+nt,ct=`__reactHandles$`+nt,lt=`__reactResources$`+nt,ut=`__reactMarker$`+nt;function dt(e){delete e[rt],delete e[it],delete e[ot],delete e[st],delete e[ct]}function ft(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[rt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function pt(e){if(e=e[rt]||e[at]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function ht(e){var t=e[lt];return t||=e[lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function gt(e){e[ut]=!0}var _t=new Set,vt={};function yt(e,t){bt(e,t),bt(e+`Capture`,t)}function bt(e,t){for(vt[e]=t,e=0;e<t.length;e++)_t.add(t[e])}var xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),St={},Ct={};function wt(e){return ve.call(Ct,e)?!0:ve.call(St,e)?!1:xt.test(e)?Ct[e]=!0:(St[e]=!0,!1)}function Tt(e,t,n){if(wt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Et(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Dt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ot(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function At(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jt(e){if(!e._valueTracker){var t=kt(e)?`checked`:`value`;e._valueTracker=At(e,t,``+e[t])}}function Mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=kt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Nt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function Ft(e){return e.replace(Pt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ot(t)):e.value!==``+Ot(t)&&(e.value=``+Ot(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,Ot(n)):Rt(e,o,Ot(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ot(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){jt(e);return}n=n==null?``:``+Ot(n),t=t==null?n:``+Ot(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),jt(e)}function Rt(e,t,n){t===`number`&&Nt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ot(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(N(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ot(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),jt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yt(e){return Jt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Xt(){}var Zt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,en=null;function tn(e){var t=pt(e);if(t&&(e=t.stateNode)){var n=e[it]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ft(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[it]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var nn=!1;function rn(e,t,n){if(nn)return e(t,n);nn=!0;try{return e(t)}finally{if(nn=!1,($t!==null||en!==null)&&(bu(),$t&&(t=$t,e=en,en=$t=null,tn(t),e)))for(t=0;t<e.length;t++)tn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[it]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function hn(){return!1}function gn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?mn:hn,this.isPropagationStopped=hn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vn=gn(_n),yn=h({},_n,{view:0,detail:0}),bn=gn(yn),xn,Sn,Cn,wn=h({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Cn&&(Cn&&e.type===`mousemove`?(xn=e.screenX-Cn.screenX,Sn=e.screenY-Cn.screenY):Sn=xn=0,Cn=e),xn)},movementY:function(e){return`movementY`in e?e.movementY:Sn}}),Tn=gn(wn),En=gn(h({},wn,{dataTransfer:0})),Dn=gn(h({},yn,{relatedTarget:0})),On=gn(h({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),kn=gn(h({},_n,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),An=gn(h({},_n,{data:0})),jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Mn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Nn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nn[e])?!!t[e]:!1}function Fn(){return Pn}var In=gn(h({},yn,{key:function(e){if(e.key){var t=jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Mn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return e.type===`keypress`?pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=gn(h({},wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=gn(h({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),zn=gn(h({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=gn(h({},wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=gn(h({},_n,{newState:0,oldState:0})),Hn=[9,13,27,32],Un=on&&`CompositionEvent`in window,Wn=null;on&&`documentMode`in document&&(Wn=document.documentMode);var Gn=on&&`TextEvent`in window&&!Wn,Kn=on&&(!Un||Wn&&8<Wn&&11>=Wn),qn=` `,Jn=!1;function Yn(e,t){switch(e){case`keyup`:return Hn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Zn=!1;function Qn(e,t){switch(e){case`compositionend`:return Xn(t);case`keypress`:return t.which===32?(Jn=!0,qn):null;case`textInput`:return e=t.data,e===qn&&Jn?null:e;default:return null}}function $n(e,t){if(Zn)return e===`compositionend`||!Un&&Yn(e,t)?(e=fn(),dn=un=ln=null,Zn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Kn&&t.locale!==`ko`?null:t.data;default:return null}}var er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!er[e.type]:t===`textarea`}function nr(e,t,n,r){$t?en?en.push(r):en=[r]:$t=r,t=Ed(t,`onChange`),0<t.length&&(n=new vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var rr=null,ir=null;function ar(e){yd(e,0)}function or(e){if(Mt(mt(e)))return e}function sr(e,t){if(e===`change`)return t}var cr=!1;if(on){var lr;if(on){var ur=`oninput`in document;if(!ur){var dr=document.createElement(`div`);dr.setAttribute(`oninput`,`return;`),ur=typeof dr.oninput==`function`}lr=ur}else lr=!1;cr=lr&&(!document.documentMode||9<document.documentMode)}function fr(){rr&&(rr.detachEvent(`onpropertychange`,pr),ir=rr=null)}function pr(e){if(e.propertyName===`value`&&or(ir)){var t=[];nr(t,ir,e,Qt(e)),rn(ar,t)}}function mr(e,t,n){e===`focusin`?(fr(),rr=t,ir=n,rr.attachEvent(`onpropertychange`,pr)):e===`focusout`&&fr()}function hr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return or(ir)}function gr(e,t){if(e===`click`)return or(t)}function _r(e,t){if(e===`input`||e===`change`)return or(t)}function vr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var yr=typeof Object.is==`function`?Object.is:vr;function br(e,t){if(yr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ve.call(t,i)||!yr(e[i],t[i]))return!1}return!0}function xr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n=xr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=xr(n)}}function Cr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nt(e.document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Er=on&&`documentMode`in document&&11>=document.documentMode,Dr=null,Or=null,kr=null,Ar=!1;function jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ar||Dr==null||Dr!==Nt(r)||(r=Dr,`selectionStart`in r&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&br(kr,r)||(kr=r,r=Ed(Or,`onSelect`),0<r.length&&(t=new vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Dr)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Nr={animationend:Mr(`Animation`,`AnimationEnd`),animationiteration:Mr(`Animation`,`AnimationIteration`),animationstart:Mr(`Animation`,`AnimationStart`),transitionrun:Mr(`Transition`,`TransitionRun`),transitionstart:Mr(`Transition`,`TransitionStart`),transitioncancel:Mr(`Transition`,`TransitionCancel`),transitionend:Mr(`Transition`,`TransitionEnd`)},Pr={},Fr={};on&&(Fr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),`TransitionEvent`in window||delete Nr.transitionend.transition);function Ir(e){if(Pr[e])return Pr[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fr)return Pr[e]=t[n];return e}var Lr=Ir(`animationend`),Rr=Ir(`animationiteration`),zr=Ir(`animationstart`),Br=Ir(`transitionrun`),Vr=Ir(`transitionstart`),Hr=Ir(`transitioncancel`),Ur=Ir(`transitionend`),Wr=new Map,Gr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Gr.push(`scrollEnd`);function Kr(e,t){Wr.set(e,t),yt(t,[e])}var qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Jr=[],Yr=0,Xr=0;function Zr(){for(var e=Yr,t=Xr=Yr=0;t<e;){var n=Jr[t];Jr[t++]=null;var r=Jr[t];Jr[t++]=null;var i=Jr[t];Jr[t++]=null;var a=Jr[t];if(Jr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ti(n,i,a)}}function Qr(e,t,n,r){Jr[Yr++]=e,Jr[Yr++]=t,Jr[Yr++]=n,Jr[Yr++]=r,Xr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $r(e,t,n,r){return Qr(e,t,n,r),ni(e)}function ei(e,t){return Qr(e,null,null,t),ni(e)}function ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Fe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ni(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function ii(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,t,n,r){return new ii(e,t,n,r)}function oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function si(e,t){var n=e.alternate;return n===null?(n=ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ci(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function li(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)oi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ie.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=ai(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return ui(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ai(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ai(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ai(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ai(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ui(e,t,n,r){return e=ai(7,e,r,t),e.lanes=n,e}function di(e,t,n){return e=ai(6,e,null,t),e.lanes=n,e}function fi(e){var t=ai(18,null,null,0);return t.stateNode=e,t}function pi(e,t,n){return t=ai(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mi=new WeakMap;function hi(e,t){if(typeof e==`object`&&e){var n=mi.get(e);return n===void 0?(t={value:e,source:t,stack:_e(t)},mi.set(e,t),t):n}return{value:e,source:t,stack:_e(t)}}var gi=[],_i=0,vi=null,yi=0,bi=[],xi=0,Si=null,Ci=1,wi=``;function Ti(e,t){gi[_i++]=yi,gi[_i++]=vi,vi=e,yi=t}function Ei(e,t,n){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Si=e;var r=Ci;e=wi;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var a=32-Fe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ci=1<<32-Fe(t)+i|n<<i|r,wi=a+e}else Ci=1<<a|n<<i|r,wi=e}function Di(e){e.return!==null&&(Ti(e,1),Ei(e,1,0))}function Oi(e){for(;e===vi;)vi=gi[--_i],gi[_i]=null,yi=gi[--_i],gi[_i]=null;for(;e===Si;)Si=bi[--xi],bi[xi]=null,wi=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null}function ki(e,t){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Ci=t.id,wi=t.overflow,Si=e}var Ai=null,H=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(hi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[rt]=e,t[it]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(Ai=e.return;Ai;)switch(Ai.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ai=Ai.return}}function Li(e){if(e!==Ai)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&H&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=uf(e)}else t===27?(t=H,Zd(e.type)?(e=lf,lf=null,H=e):H=t):H=Ai?cf(e.stateNode.nextSibling):null;return!0}function Ri(){H=Ai=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=re(null),Hi=null,Ui=null;function Wi(e,t,n){z(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,R(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;yr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===se.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!yr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=P.S;P.S=function(e,t){eu=Ce(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=re(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?z(ma,ma.current):z(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Xt,Xt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=si(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=li(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ui(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=li(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=pi(t,e.mode,n),t.return=e,t;case O:return t=wa(t),f(e,t,n)}if(N(t)||te(t))return t=ui(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=wa(n),p(e,t,n,r)}if(N(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=wa(r),m(e,t,n,r,i)}if(N(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Ti(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Ti(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Ti(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&Ti(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Ti(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&Ti(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=ui(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=li(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=pi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=wa(o),b(e,r,o,c)}if(N(o))return h(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ai(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ni(e),ti(e,null,n),t}return Qr(e,r,t,n),ni(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xe(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=re(null),Ya=re(0);function Xa(e,t){e=Ul,z(Ya,e),z(Ja,t),Ul=e|t.baseLanes}function Za(){z(Ya,Ul),z(Ja,Ja.current)}function Qa(){Ul=Ya.current,R(Ja),R(Ya)}var $a=re(null),eo=null;function to(e){var t=e.alternate;z(oo,oo.current&1),z($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){z(oo,oo.current),z($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(z(oo,oo.current),z($a,e),eo===null&&(eo=e)):io(e)}function io(){z(oo,oo.current),z($a,$a.current)}function ao(e){R($a),eo===e&&(eo=null),R(oo)}var oo=re(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){P.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!yr(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);yr(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!yr((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yr(e,n)}catch{return!0}}function Ho(e){var t=ei(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Pe(!0);try{n()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(H){b:{for(var i=H,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){H=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return yr(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),yr(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Ms(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,I,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=$r(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,yr(s,o))return Qr(e,t,i,0),q===null&&Zr(),!1}catch{}if(n=$r(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=$r(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xe(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Pe(!0);try{n(t)}finally{Pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=wi,r=Ci;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){qr(e)}function Ks(e){console.error(e)}function qs(e){qr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=hi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(hi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=hi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=hi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Di(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!oi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?br:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=si(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(br(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=H)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,H=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=Ze(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ei(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,H=cf(s.nextSibling),Ai=t,U=!0,ji=null,Mi=!1,e!==null&&ki(t,e),t=lc(t,r),t.flags|=4096;return t}return e=si(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Di(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Di(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ri,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ri,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ri,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ri,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(oo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=H)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,H=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=ui(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=ui(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=Ze(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ei(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,H=cf(c.nextSibling),Ai=t,U=!0,ji=null,Mi=!1,e!==null&&ki(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=si(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ui(c,a,n,null),c.flags|=2):c=si(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=si(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ai(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,z(oo,o),nc(e,t,r,n),r=U?yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Yi(e)))}function kc(e,t,n){switch(t.tag){case 3:ce(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:ue(t);break;case 4:ce(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Ei(t,yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)oi(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=M(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(ce(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=hi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(H=cf(e.firstChild),Ai=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(oe.current).createElement(n),r[rt]=t,r[it]=e,Pd(r,n,e),gt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ue(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,oe.current),Ai=t,Mi=!0,a=H,Zd(t.type)?(lf=a,H=cf(r.firstChild)):H=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=H)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,Ai=t,H=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),ue(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=H)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,Ai=t,H=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return ce(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ke(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(de(t),n=oe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=ie.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(de(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=ie.current,Li(t))Fi(t,o);else{var s=Bd(oe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[rt]=t,o[it]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=oe.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ai,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[rt]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[rt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[rt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return le(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(R(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ci(n,e),n=n.sibling;return z(oo,oo.current&1|2),U&&Ti(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ce()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*Ce()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ce(),e.sibling=null,n=oo.current,z(oo,a?n&1|2:n&1),U&&Ti(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&R(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Oi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),le(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return de(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(oo),null;case 4:return le(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&R(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Oi(t),t.tag){case 3:Gi(ra),le();break;case 26:case 27:case 5:de(t);break;case 4:le();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:R(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&R(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[it]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[rt]=e,t[it]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=wr(e),Tr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ne&&typeof Ne.onCommitFiberUnmount==`function`)try{Ne.onCommitFiberUnmount(Me,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ut]||o[rt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[rt]=e,gt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[rt]=e,gt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ce()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:P.T===null?et():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||U){var e=Be;Be<<=1,!(Be&3932160)&&(Be=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),V(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||We(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ce(),10<a)){if(yu(r,t,Jl,!Bl),Ue(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},jl(t,a,d);var m=(a&62914560)===a?$l-Ce():(a&4194048)===a?eu-Ce():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!yr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Fe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ye(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=si(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=We(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Fe(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Zr(),n}function Cu(e,t){W=null,P.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,hi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=P.H;return P.H=Is,e===null?Is:e}function Eu(){var e=P.A;return P.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,P.H=i,P.A=a,J===null&&(q=null,Y=0,Zr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ce()+500,Su(e,t)):Vl=We(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,P.H=r,P.A=a,K=n,J===null?(q=null,Y=0,Zr(),Wl):0}function ju(){for(;J!==null&&!xe();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=ci(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,hi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,hi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Xr,Je(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(De,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,F.p=a,P.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=wr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Cr(s.ownerDocument.documentElement,s)){if(c!==null&&Tr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Sr(s,h),v=Sr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,F.p=r,P.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,F.p=r,P.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Se();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),$e(n),t=t.stateNode,Ne&&typeof Ne.onCommitFiberRoot==`function`)try{Ne.onCommitFiberRoot(Me,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=$e(su),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot==`function`)try{Ne.onPostCommitFiberRoot(Me,o)}catch{}return!0}finally{F.p=a,P.T=r,Vu(e,t)}}function Wu(e,t,n){t=hi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(V(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=hi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),V(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ce()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ke()),e=ei(e,t),e!==null&&(V(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ye(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Fe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ue(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||We(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ce(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Fe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ge(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ue(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&be(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||We(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&be(r),$e(n)){case 2:case 8:n=Ee;break;case 32:n=De;break;case 268435456:n=ke;break;default:n=De}return r=cd.bind(null,e),n=ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&be(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ue(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ce()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?ye(Te,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=ze,ze<<=1,!(ze&261888)&&(ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Yt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[it]||null).action),o=r.submitter;o&&(t=(t=o[it]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Gr.length;hd++){var gd=Gr[hd];Kr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Kr(Lr,`onAnimationEnd`),Kr(Rr,`onAnimationIteration`),Kr(zr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Br,`onTransitionRun`),Kr(Vr,`onTransitionStart`),Kr(Hr,`onTransitionCancel`),Kr(Ur,`onTransitionEnd`),bt(`onMouseEnter`,[`mouseout`,`mouseover`]),bt(`onMouseLeave`,[`mouseout`,`mouseover`]),bt(`onPointerEnter`,[`pointerout`,`pointerover`]),bt(`onPointerLeave`,[`pointerout`,`pointerover`]),yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ot];n===void 0&&(n=t[ot]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,_t.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ft(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}rn(function(){var r=a,i=Qt(n),s=[];a:{var c=Wr.get(e);if(c!==void 0){var l=vn,u=e;switch(e){case`keypress`:if(pn(n)===0)break a;case`keydown`:case`keyup`:l=In;break;case`focusin`:u=`focus`,l=Dn;break;case`focusout`:u=`blur`,l=Dn;break;case`beforeblur`:case`afterblur`:l=Dn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Tn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=En;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Rn;break;case Lr:case Rr:case zr:l=On;break;case Ur:l=zn;break;case`scroll`:case`scrollend`:l=bn;break;case`wheel`:l=Bn;break;case`copy`:case`cut`:case`paste`:l=kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Ln;break;case`toggle`:case`beforetoggle`:l=Vn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Zt&&(u=n.relatedTarget||n.fromElement)&&(ft(u)||u[at]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ft(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Tn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:mt(l),h=u==null?c:mt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ft(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?mt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=sr;else if(tr(c))if(cr)v=_r;else{v=hr;var y=mr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=sr):v=gr;if(v&&=v(e,r)){nr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?mt(r):window,e){case`focusin`:(tr(y)||y.contentEditable===`true`)&&(Dr=y,Or=r,kr=null);break;case`focusout`:kr=Or=Dr=null;break;case`mousedown`:Ar=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ar=!1,jr(s,n,i);break;case`selectionchange`:if(Er)break;case`keydown`:case`keyup`:jr(s,n,i)}var b;if(Un)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Zn?Yn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Kn&&n.locale!==`ko`&&(Zn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Zn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,Zn=!0)),y=Ed(r,x),0<y.length&&(x=new An(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Xn(n),b!==null&&(x.data=b)))),(b=Gn?Qn(e,n):$n(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new An(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(Td(e,i,a)),i=an(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=an(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Et(e,`class`,r);break;case`tabIndex`:Et(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Et(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Et(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Yt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Yt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Tt(e,`popover`,r);break;case`xlinkActuate`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Tt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,Tt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Xt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[it]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Tt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ut]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),dt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ut])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=F.d;F.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=pt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ft(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),gt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ft(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ft(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ft(n.imageSizes)+`"]`)):i+=`[href="`+Ft(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),gt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ft(r)+`"][href="`+Ft(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),gt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=ht(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);gt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=ht(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),gt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=ht(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),gt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=oe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=ht(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=ht(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=ht(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ft(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),gt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ft(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ft(n.href)+`"]`);if(r)return t.instance=r,gt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),gt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,gt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),gt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,gt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),gt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ut]||a[rt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,gt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),gt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ai(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ri,e):ri}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ei(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=Qe(t);var n=ei(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,up(e,t,n,r)}finally{F.p=a,P.T=i}}function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,up(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=pt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=He(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Fe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ce()+500,id(0,!1))}}break;case 31:case 13:s=ei(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Qt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ft(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(we()){case Te:return 2;case Ee:return 8;case De:case Oe:return 32;case ke:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=pt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ft(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,tt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,tt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zt=r,n.target.dispatchEvent(r),Zt=null}else return t=pt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=pt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[it]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[it]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[at]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Me=zp.inject(Rp),Ne=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[at]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},T=(0,_.createContext)({}),E=()=>(0,_.useContext)(T),D=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=E()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),O=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(D,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},ee=O(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),k=O(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),A=O(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),te=O(`calendar`,[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}]]),j=O(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),M=O(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),N=O(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),P=O(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),F=O(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),I=O(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),L=O(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ne=O(`circle-minus`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),re=O(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),R=O(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),z=O(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),ie=O(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),ae=O(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),oe=O(`ellipsis-vertical`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}]]),se=O(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),ce=O(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),le=O(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),ue=O(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),de=O(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),fe=O(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),pe=O(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),me=O(`folder-plus`,[[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`M9 13h6`,key:`1uhe8q`}],[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),he=O(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),ge=O(`gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),B=O(`gift`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`,key:`1sqzm4`}],[`path`,{d:`M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,key:`kc0143`}],[`rect`,{x:`3`,y:`7`,width:`18`,height:`4`,rx:`1`,key:`1hberx`}]]),_e=O(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),ve=O(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ye=O(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),be=O(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),xe=O(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Se=O(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Ce=O(`paw-print`,[[`circle`,{cx:`11`,cy:`4`,r:`2`,key:`vol9p0`}],[`circle`,{cx:`18`,cy:`8`,r:`2`,key:`17gozi`}],[`circle`,{cx:`20`,cy:`16`,r:`2`,key:`1v9bxh`}],[`path`,{d:`M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z`,key:`1ydw1z`}]]),we=O(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Te=O(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Ee=O(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),De=O(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Oe=O(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),ke=O(`replace`,[[`path`,{d:`M14 4a1 1 0 0 1 1-1`,key:`dhj8ez`}],[`path`,{d:`M15 10a1 1 0 0 1-1-1`,key:`1mnyi5`}],[`path`,{d:`M21 4a1 1 0 0 0-1-1`,key:`sfs9ap`}],[`path`,{d:`M21 9a1 1 0 0 1-1 1`,key:`mp6qeo`}],[`path`,{d:`m3 7 3 3 3-3`,key:`x25e72`}],[`path`,{d:`M6 10V5a2 2 0 0 1 2-2h2`,key:`15xut4`}],[`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`,key:`1bkyp8`}]]),Ae=O(`rotate-ccw-clock`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]),je=O(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Me=O(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),Ne=O(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Pe=O(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Fe=O(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Ie=O(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Le=O(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),Re=O(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),ze=O(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Be=O(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Ve=O(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),He=O(`triangle`,[[`path`,{d:`M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z`,key:`14u9p9`}]]),Ue=O(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),We=O(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Ge=O(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ke=O(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),qe=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=qe()}))();function Je({activeTab:e,onSelectTab:t,todayFocusMinutes:n=0,settings:r={},onToggleTheme:i,hasActiveSprint:a=!1,isCutoffModalOpen:o=!1,vetoRewardCount:s=0,onOpenVetoCoupons:c=()=>{}}){let l=r?.theme!==`light`;return(0,V.jsxs)(`header`,{className:`header-container ${a?`header-sprint-active`:``}`,children:[(0,V.jsxs)(`div`,{className:`header-content`,children:[(0,V.jsxs)(`div`,{className:`brand-group`,onClick:()=>t(`sprint`),children:[(0,V.jsx)(He,{className:`brand-icon`,size:24,strokeWidth:1.75}),(0,V.jsxs)(`div`,{className:`brand-text`,children:[(0,V.jsx)(`span`,{className:`brand-name`,children:`Sprintset`}),(0,V.jsx)(`span`,{className:`brand-tagline`,children:`DSA Focus Sprint`})]})]}),(0,V.jsxs)(`nav`,{className:`nav-tabs`,children:[(0,V.jsxs)(`button`,{className:`nav-btn ${e===`sprint`?`active`:``}`,onClick:()=>t(`sprint`),children:[(0,V.jsx)(Ke,{size:18}),(0,V.jsx)(`span`,{children:`Sprint`})]}),(0,V.jsxs)(`button`,{className:`nav-btn ${e===`bank`?`active`:``} ${o?`nav-btn-locked`:``}`,onClick:()=>t(`bank`),title:o?`Respond to sprint check-in first`:`Question Bank`,children:[(0,V.jsx)(ie,{size:18}),(0,V.jsx)(`span`,{children:`Bank`})]}),(0,V.jsxs)(`button`,{className:`nav-btn ${e===`analytics`?`active`:``} ${o?`nav-btn-locked`:``}`,onClick:()=>t(`analytics`),title:o?`Respond to sprint check-in first`:`Analytics`,children:[(0,V.jsx)(j,{size:18}),(0,V.jsx)(`span`,{children:`Analytics`})]})]}),(0,V.jsxs)(`div`,{className:`header-right-group`,children:[(0,V.jsx)(`div`,{className:`header-metrics-group`,children:(0,V.jsxs)(`div`,{className:`today-metric-pill`,title:`Total focus minutes logged today`,children:[(0,V.jsx)(R,{size:15,className:`text-amber flex-shrink-0`}),(0,V.jsxs)(`span`,{children:[(0,V.jsxs)(`strong`,{children:[n,`m`]}),(0,V.jsx)(`span`,{className:`pill-text-long`,children:` focused`})]})]})}),(0,V.jsxs)(`div`,{className:`header-quick-actions`,children:[!!r?.vetoEnabled&&(0,V.jsxs)(`button`,{className:`icon-btn veto-coupon-btn`,onClick:c,title:`Veto coupons (${s})`,children:[(0,V.jsx)(B,{size:18}),s>0&&(0,V.jsx)(`span`,{className:`veto-badge`,children:s})]}),(0,V.jsx)(`button`,{className:`icon-btn`,onClick:i,title:l?`Switch to Light Theme`:`Switch to Dark Theme`,children:l?(0,V.jsx)(Re,{size:18}):(0,V.jsx)(xe,{size:18})}),(0,V.jsx)(`button`,{className:`icon-btn ${e===`settings`?`active-icon`:``}`,onClick:()=>t(`settings`),title:`Settings`,children:(0,V.jsx)(Pe,{size:18})})]})]})]}),(0,V.jsx)(`style`,{children:`
        .header-container {
          background: var(--bg-card);
          backdrop-filter: var(--glass-backdrop);
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0.75rem 1.5rem;
        }

        .header-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .header-right-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-quick-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .header-metrics-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .brand-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
        }

        .brand-icon {
          color: var(--amber-main);
          flex-shrink: 0;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .brand-group:hover .brand-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.6));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .nav-tabs {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-input);
          padding: 0.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-sm);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .nav-btn-locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-btn:hover {
          color: var(--text-primary);
        }

        .nav-btn.active {
          background: var(--bg-card-hover);
          color: var(--amber-main);
          box-shadow: var(--shadow-sm);
        }

        .today-metric-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .sync-indicator-pill {
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(14, 165, 233, 0.3);
          color: #0ea5e9;
        }
        
        .sync-spin {
          animation: spin 1.5s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .today-metric-pill strong {
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
          position: relative;
        }

        .icon-btn:hover, .icon-btn.active-icon {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--bg-card-hover);
        }

        .veto-coupon-btn {
          position: relative;
        }

        .veto-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* 2-Row Responsive Mobile Header */
        @media (max-width: 768px) {
          .header-container.header-sprint-active .nav-tabs,
          .header-container.header-sprint-active .header-metrics-group {
            display: none !important;
          }
          
          .header-container {
            padding: 0.5rem 0.75rem;
          }

          .header-content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
          }

          .header-right-group {
            display: contents;
          }

          .brand-group {
            order: 1;
          }

          .header-quick-actions {
            order: 2;
          }

          .brand-tagline {
            display: none;
          }

          .nav-tabs {
            order: 3;
            width: 100%;
            justify-content: space-around;
          }

          .nav-btn {
            flex: 1;
            justify-content: center;
            padding: 0.4rem 0.5rem;
            font-size: 0.8rem;
          }

          .nav-btn span {
            display: inline;
          }

          .header-metrics-group {
            order: 4;
            width: 100%;
            justify-content: space-between;
          }

          .today-metric-pill {
            flex: 1;
            justify-content: center;
            padding: 0.35rem 0.5rem;
            font-size: 0.8rem;
          }

          .icon-btn {
            width: 34px;
            height: 34px;
          }
        }
      `})]})}function Ye(e){let t=e>>>0;return function(){let e=t+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Xe(){return Math.floor(Math.random()*1e6)+1}var Ze={speedy:ge,steady:ze,balanced:He,grind:fe,gauntlet:Ue,custom:pe},Qe=m();function $e(e){return e?{"Dynamic Programming":`DP`,"Priority Queue":`PQ`,"Heap / Priority Queue":`Heap / PQ`,"Bit Manipulation":`Bit Manipulation`,"Arrays & Hashing":`Arrays & Hashing`,"Sliding Window":`Sliding Window`,"Two Pointers":`Two Pointers`,"Binary Search":`Binary Search`,"Stack & Queue":`Stack & Queue`,"Linked List":`Linked List`}[e]||e:``}function et(e,t={}){if(e.status!==`done`)return e.confidence||null;let n=((t.timeWeightsByDifficulty||{Easy:4,Medium:8,Hard:15})[e.difficulty]||5)*60,r=(e.attempts||0)+1;return r===1&&e.timeSec<=n*.75?`solid`:r>=2||e.timeSec>n?`shaky`:`ok`}function tt({session:e,settings:t,onStartNewSprint:n,onGoHome:r,onUpdateSessionConfidence:i,onUpdateSessionResult:a}){let o=e=>e.questionLink&&e.questionLink.trim()!==``?e.questionLink:`https://www.google.com/search?q=${encodeURIComponent(`${e.questionName||``} leetcode`)}`,{id:s,results:c=[],points:l=0,maxPossiblePoints:u=100,totalQuota:d=0,actualDurationSec:f,durationSec:p,isEndedEarly:m=!1}=e||{},[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)({}),b=c,x=d||b.length,S=b.find(e=>e.isCutoff&&e.status===`unsolved`),[C,w]=(0,_.useState)(S&&S.attempts||0),[T,E]=(0,_.useState)(!1);(0,_.useEffect)(()=>{S&&w(S.attempts||0)},[S?.questionId]);let D=b.filter(e=>e.status===`done`).length,O=b.filter(e=>e.status===`gave_up`).length,ee=b.filter(e=>e.status===`unsolved`).length,A=D+O+ee,te=`ended_early`;te=m?`ended_early`:D>=x&&x>0?`complete`:A>=x&&x>0?`finished`:`times_up`;let j=e=>`${Math.floor(e/60)}m ${e%60}s`,M=(()=>{switch(te){case`complete`:return{title:`Sprint Complete! 🎉`,badgeClass:`badge-outcome-complete`,badgeText:`100% Solved`};case`finished`:return{title:`Sprint Finished 💪`,badgeClass:`badge-outcome-finished`,badgeText:`Fully Resolved`};case`times_up`:return{title:`Time's Up ⏱️`,badgeClass:`badge-outcome-timesup`,badgeText:`Time Expired`};default:return{title:`Sprint Ended Early 🛑`,badgeClass:`badge-outcome-early`,badgeText:`Stopped Early`}}})(),N=()=>te===`complete`?`Flawless performance! You conquered all ${D} questions in your sprint before time ran out.`:te===`finished`?`Great focus! Sprint questions fully resolved (${D} Solved, ${O} Gave Up). Weighted resurfacing will prioritize gave-up topics.`:te===`times_up`?`Timer expired with ${A} of ${x} questions attempted (${D} Solved, ${O} Gave Up, ${ee} Unsolved).`:`Sprint stopped early. ${D} solved and ${O} gave up out of ${x} questions.`;(0,_.useEffect)(()=>{let e=()=>g(null);if(h){let t=setTimeout(()=>{window.addEventListener(`click`,e)},10);return()=>{clearTimeout(t),window.removeEventListener(`click`,e)}}},[h]);let P=(e,t)=>{if(e.preventDefault(),e.stopPropagation(),h&&h.qId===t)g(null);else{let n=e.currentTarget.getBoundingClientRect(),r=window.innerHeight,i=r-n.bottom,a=n.bottom+4;a=i<145&&n.top>145?n.top-145-4:Math.min(a,r-145-12),g({qId:t,top:Math.max(10,Math.round(a)),left:Math.round(n.left)})}},F=e=>{if(h&&h.qId){let t=h.qId;y(n=>({...n,[t]:e})),i(s,t,e)}g(null)};return(0,V.jsxs)(`div`,{className:`summary-container glass-card`,children:[(0,V.jsxs)(`div`,{className:`summary-header`,children:[(0,V.jsxs)(`div`,{className:`banner-title-row`,children:[(0,V.jsx)(`h2`,{className:`summary-title`,children:M.title}),(0,V.jsx)(`span`,{className:`outcome-status-chip ${M.badgeClass}`,children:M.badgeText})]}),(0,V.jsx)(`p`,{className:`summary-subtitle`,children:N()})]}),(0,V.jsxs)(`div`,{className:`kpi-summary-grid`,children:[(0,V.jsxs)(`div`,{className:`kpi-card`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-group icon-gold`,children:(0,V.jsx)(k,{size:20})}),(0,V.jsxs)(`div`,{className:`kpi-info`,children:[(0,V.jsxs)(`span`,{className:`kpi-value text-gold`,children:[`+`,l,` pts`]}),(0,V.jsxs)(`span`,{className:`kpi-label`,children:[`Points Earned (Max `,u,`)`]})]})]}),(0,V.jsxs)(`div`,{className:`kpi-card`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-group icon-green`,children:(0,V.jsx)(L,{size:20})}),(0,V.jsxs)(`div`,{className:`kpi-info`,children:[(0,V.jsxs)(`span`,{className:`kpi-value`,children:[D,` / `,x]}),(0,V.jsx)(`span`,{className:`kpi-label`,children:`Questions Solved`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-card`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-group icon-blue`,children:(0,V.jsx)(R,{size:20})}),(0,V.jsxs)(`div`,{className:`kpi-info`,children:[(0,V.jsx)(`span`,{className:`kpi-value font-mono`,children:j(f||0)}),(0,V.jsxs)(`span`,{className:`kpi-label`,children:[`Time Spent (Limit `,Math.round((p||0)/60),`m)`]})]})]})]}),(0,V.jsxs)(`div`,{className:`summary-actions-top`,children:[(0,V.jsxs)(`button`,{className:`btn btn-secondary`,onClick:r,children:[(0,V.jsx)(_e,{size:16}),(0,V.jsx)(`span`,{children:`Return to Dashboard`})]}),(0,V.jsxs)(`button`,{className:`btn btn-primary btn-start`,onClick:n,children:[(0,V.jsx)(Ee,{size:16}),(0,V.jsx)(`span`,{children:`Start Another Sprint`})]})]}),(0,V.jsxs)(`div`,{className:`breakdown-section`,children:[(0,V.jsx)(`div`,{className:`breakdown-header`,children:(0,V.jsx)(`h3`,{className:`section-title`,children:`Question Breakdown`})}),(0,V.jsx)(`div`,{className:`table-responsive`,children:(0,V.jsxs)(`table`,{className:`breakdown-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{className:`col-status-wide`,children:`Status`}),(0,V.jsx)(`th`,{children:`Question Name`}),(0,V.jsx)(`th`,{children:`Topic`}),(0,V.jsx)(`th`,{children:`Diff`}),(0,V.jsx)(`th`,{children:`Attempts`}),(0,V.jsx)(`th`,{children:`Time Spent`}),(0,V.jsx)(`th`,{children:`Confidence`})]})}),(0,V.jsx)(`tbody`,{children:b.length>0?b.map((e,n)=>{let r=v[e.questionId]||e.confidence||et(e,t);return(0,V.jsxs)(`tr`,{className:e.status===`done`?`row-done`:e.status===`gave_up`?`row-gave-up`:e.status===`unsolved`?`row-unsolved`:`row-not-reached`,children:[(0,V.jsx)(`td`,{className:`col-status-wide`,children:e.status===`done`?(0,V.jsxs)(`span`,{className:`status-pill status-solved`,children:[(0,V.jsx)(L,{size:14}),` Solved`]}):e.status===`gave_up`?(0,V.jsxs)(`span`,{className:`status-pill status-gaveup`,children:[(0,V.jsx)(re,{size:14}),` Gave Up`]}):e.status===`unsolved`?(0,V.jsxs)(`span`,{className:`status-pill status-unsolved`,children:[(0,V.jsx)(R,{size:14}),` Unsolved`]}):(0,V.jsxs)(`span`,{className:`status-pill status-notreached`,children:[(0,V.jsx)(ne,{size:14}),` Unseen`]})}),(0,V.jsx)(`td`,{children:(0,V.jsxs)(`a`,{href:o(e),target:`_blank`,rel:`noopener noreferrer`,className:`question-link-cell`,children:[(0,V.jsx)(`span`,{className:`font-semibold text-primary`,children:e.questionName}),(0,V.jsx)(se,{size:12,className:`question-link-icon`})]})}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`span`,{className:`badge badge-topic`,children:$e(e.topic)})}),(0,V.jsx)(`td`,{children:(0,V.jsx)(`span`,{className:`badge badge-${(e.difficulty||`easy`).toLowerCase()}`,children:e.difficulty})}),(0,V.jsx)(`td`,{className:`font-mono text-center`,children:(0,V.jsx)(`span`,{className:`attempts-count`,children:e.status===`not_reached`?`-`:e.status===`done`?(e.attempts||0)+1:e.attempts>0?e.attempts:`-`})}),(0,V.jsx)(`td`,{className:`font-mono text-muted`,children:e.status===`not_reached`||!e.timeSec?`-`:j(e.timeSec)}),(0,V.jsx)(`td`,{children:e.status===`done`?(0,V.jsxs)(`button`,{type:`button`,className:`conf-pill-btn conf-${r}`,onClick:t=>P(t,e.questionId),title:`Click to override confidence`,children:[(0,V.jsx)(`span`,{className:`conf-dot`}),(0,V.jsx)(`span`,{className:`conf-label`,children:r?r.toUpperCase():`SET`}),(0,V.jsx)(we,{size:11,className:`conf-pencil-icon`})]}):e.status===`unsolved`&&e.confidence?(0,V.jsxs)(`button`,{type:`button`,className:`conf-pill-btn conf-${r}`,onClick:t=>P(t,e.questionId),title:`Click to override confidence`,children:[(0,V.jsx)(`span`,{className:`conf-dot`}),(0,V.jsx)(`span`,{className:`conf-label`,children:r.toUpperCase()}),(0,V.jsx)(we,{size:11,className:`conf-pencil-icon`})]}):(0,V.jsx)(`span`,{className:`text-muted text-xs italic`,children:`-`})})]},n)}):(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{colSpan:`7`,className:`text-center py-6 text-muted`,children:`No questions recorded in this sprint.`})})})]})})]}),h&&(0,Qe.createPortal)((0,V.jsxs)(`div`,{className:`portal-conf-popover`,style:{position:`fixed`,top:`${h.top}px`,left:`${h.left}px`,zIndex:999999},onClick:e=>e.stopPropagation(),children:[(0,V.jsx)(`div`,{className:`popover-header-title`,children:`Select Confidence:`}),(0,V.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-solid`,onClick:()=>F(`solid`),children:[(0,V.jsx)(`span`,{className:`conf-dot dot-solid`}),(0,V.jsx)(`span`,{children:`Solid`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-ok`,onClick:()=>F(`ok`),children:[(0,V.jsx)(`span`,{className:`conf-dot dot-ok`}),(0,V.jsx)(`span`,{children:`OK`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-shaky`,onClick:()=>F(`shaky`),children:[(0,V.jsx)(`span`,{className:`conf-dot dot-shaky`}),(0,V.jsx)(`span`,{children:`Shaky`})]})]}),document.body),(0,V.jsx)(`style`,{children:`
        .summary-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .summary-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1rem;
          gap: 0.35rem;
        }

        .banner-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .summary-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .outcome-status-chip {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge-outcome-complete {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .badge-outcome-finished {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.35);
        }

        .badge-outcome-timesup {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.35);
        }

        .badge-outcome-early {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.35);
        }

        .summary-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .kpi-summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-icon-group {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-gold { background: rgba(251, 191, 36, 0.12); color: var(--gold-accent); border: 1px solid rgba(251, 191, 36, 0.25); }
        .icon-green { background: var(--easy-bg); color: var(--easy-color); border: 1px solid rgba(16, 185, 129, 0.25); }
        .icon-blue { background: rgba(59, 130, 246, 0.12); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.25); }

        .kpi-info {
          display: flex;
          flex-direction: column;
        }

        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .kpi-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .summary-actions-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
        }

        .breakdown-section {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .breakdown-header {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
        }

        .table-responsive {
          overflow-x: auto;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .breakdown-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          background: var(--bg-input);
        }

        .breakdown-table th, .breakdown-table td {
          padding: 0.85rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
        }

        .breakdown-table th {
          background: var(--bg-card);
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .col-status-wide {
          width: 130px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .cutoff-checkin-banner {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .cutoff-banner-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .cutoff-banner-title {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        .cutoff-banner-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin: 0.25rem 0 0 0;
        }

        .cutoff-banner-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .attempts-stepper {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.25rem 0.5rem;
          margin-right: 0.5rem;
        }

        .attempts-stepper-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-stepper {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .btn-stepper:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .attempts-num {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
          min-width: 16px;
          text-align: center;
        }

        .status-solved {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-gaveup {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .status-unsolved {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .status-notreached {
          background: rgba(148, 163, 184, 0.15);
          color: #94a3b8;
        }

        .conf-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 800;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .conf-pill-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .conf-pencil-icon {
          opacity: 0.7;
          margin-left: 0.15rem;
        }

        .conf-solid {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.4);
        }

        .conf-ok {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.4);
        }

        .conf-shaky {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.4);
        }

        .conf-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }

        .conf-solid .conf-dot { background: #10b981; }
        .conf-ok .conf-dot { background: #60a5fa; }
        .conf-shaky .conf-dot { background: #f59e0b; }

        /* Theme-Aware Fully Opaque Portal Popover Menu */
        .portal-conf-popover {
          position: fixed !important;
          z-index: 999999 !important;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0.65rem;
          border-radius: var(--radius-md);
          background: var(--bg-secondary) !important;
          opacity: 1 !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
          min-width: 130px;
          animation: fadeIn 0.12s ease;
          color: var(--text-primary);
        }

        .popover-header-title {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.15rem;
        }

        .popover-option-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 700;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease;
        }

        .popover-option-btn:hover {
          background: var(--bg-card-hover);
        }

        .option-solid { color: #10b981; }
        .option-ok { color: #60a5fa; }
        .option-shaky { color: #f59e0b; }

        .dot-solid { background: #10b981; }
        .dot-ok { background: #60a5fa; }
        .dot-shaky { background: #f59e0b; }

        .question-link-cell {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.15s ease;
        }

        .question-link-cell:hover {
          text-decoration: underline;
        }

        .question-link-icon {
          color: var(--text-muted);
          opacity: 0.4;
          transition: opacity 0.15s ease;
          flex-shrink: 0;
        }

        .question-link-cell:hover .question-link-icon {
          opacity: 1;
        }

        /* Mobile Responsive Media Queries for Session Summary */
        @media (max-width: 768px) {
          .summary-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            padding: 1.25rem 1rem !important;
            gap: 1.25rem !important;
          }

          .banner-title-row {
            flex-direction: column;
            gap: 0.4rem;
          }

          .summary-title {
            font-size: 1.45rem;
          }

          .kpi-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }

          .kpi-card {
            padding: 0.85rem 0.75rem;
            gap: 0.65rem;
          }

          .kpi-icon-group {
            width: 36px;
            height: 36px;
          }

          .kpi-value {
            font-size: 1.15rem;
          }

          .kpi-label {
            font-size: 0.72rem;
          }

          .summary-actions-top {
            flex-direction: column-reverse;
            width: 100%;
            gap: 0.6rem;
          }

          .summary-actions-top .btn {
            width: 100%;
            justify-content: center;
          }

          .breakdown-table {
            min-width: 520px;
          }

          .breakdown-table th, .breakdown-table td {
            padding: 0.65rem 0.75rem;
            font-size: 0.82rem;
          }
        }

        @media (max-width: 480px) {
          .kpi-summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var nt=c(o(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){return e.charCodeAt(0)===65279?e.slice(1):e}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(S(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!S(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){S(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function d(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;l.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function p(e){l.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=x(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=x(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=x(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function m(e){var t,n,r,i,a=2**53,o=-a,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,f=0,p=0,m=!1,_=!1,v=[],y={data:[],errors:[],meta:{}};function x(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function C(){if(y&&r&&(T(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(y.data=y.data.filter(function(e){return!x(e)})),w()){if(y)if(Array.isArray(y.data[0])){for(var t=0;w()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,n){t=c(t),S(e.transformHeader)&&(t=e.transformHeader(t,n)),v.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,c=t[i],c=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(l.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):u.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=v.length?`__parsed_extra`:v[i]:s,c=e.transform?e.transform(c,s):c);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(c)):r[s]=c}return e.header&&(i>v.length?T(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+v.length+` fields but parsed `+i,p+n):i<v.length&&T(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+v.length+` fields but parsed `+i,p+n)),r}var i;y&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(n),i=y.data.length):y.data=n(y.data,0),e.header&&y.meta&&(y.meta.fields=v),p+=i)}function w(){return e.header&&v.length===0}function T(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),y.errors.push(e)}S(e.step)&&(i=e.step,e.step=function(t){y=t,w()?C():(C(),y.data.length!==0&&(f+=t.data.length,e.preview&&f>e.preview?n.abort():(y.data=y.data[0],i(y,d))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?S(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,h=0,_=0,v=(l=void 0,new g({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&x(v.data[y])?_++:(f=v.data[y].length,h+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(h/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<h)&&1.99<h&&(c=m,o=p,u=h)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),y.meta.delimiter=e.delimiter),b(e));return e.preview&&e.header&&c.preview++,t=i,n=new g(c),y=n.parse(t,a,o),C(),m?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return m},this.pause=function(){m=!0,n.abort(),t=S(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){d.streamer._halted?(m=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return _},this.abort=function(){_=!0,n.abort(),y.meta.aborted=!0,S(e.complete)&&e.complete(y),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(h(t)+`([^]*?)`+h(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function g(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,l=null,u=!1,d=e.quoteChar==null?`"`:e.quoteChar,f=d;if(e.escapeChar!==void 0&&(f=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var p=0,m=!1;this.parse=function(s,g,_){if(typeof s!=`string`)throw Error(`Input must be a string`);var v=s.length,y=t.length,b=n.length,x=r.length,C=S(i),w=[],T=[],E=[],D=p=0;if(!s)return L();if(o||!1!==o&&s.indexOf(d)===-1){for(var O=s.split(n),ee=0;ee<O.length;ee++){if(E=O[ee],p+=E.length,ee!==O.length-1)p+=n.length;else if(_)return L();if(!r||E.substring(0,x)!==r){if(C){if(w=[],N(E.split(t)),ne(),m)return L()}else N(E.split(t));if(a&&a<=ee)return w=w.slice(0,a),L(!0)}}return L()}for(var k=s.indexOf(t,p),A=s.indexOf(n,p),te=new RegExp(h(f)+h(d),`g`),j=s.indexOf(d,p);;)if(s[p]===d)for(j=p,p++;;){if((j=s.indexOf(d,j+1))===-1)return _||T.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:w.length,index:p}),F();if(j===v-1)return F(s.substring(p,j).replace(te,d));if(d===f&&s[j+1]===f)j++;else if(d===f||j===0||s[j-1]!==f){k!==-1&&k<j+1&&(k=s.indexOf(t,j+1));var M=P((A=A!==-1&&A<j+1?s.indexOf(n,j+1):A)===-1?k:Math.min(k,A));if(s.substr(j+1+M,y)===t){E.push(s.substring(p,j).replace(te,d)),s[p=j+1+M+y]!==d&&(j=s.indexOf(d,p)),k=s.indexOf(t,p),A=s.indexOf(n,p);break}if(M=P(A),s.substring(j+1+M,j+1+M+b)===n){if(E.push(s.substring(p,j).replace(te,d)),I(j+1+M+b),k=s.indexOf(t,p),j=s.indexOf(d,p),C&&(ne(),m))return L();if(a&&w.length>=a)return L(!0);break}T.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:w.length,index:p}),j++}}else if(r&&E.length===0&&s.substring(p,p+x)===r){if(A===-1)return L();p=A+b,A=s.indexOf(n,p),k=s.indexOf(t,p)}else if(k!==-1&&(k<A||A===-1))E.push(s.substring(p,k)),p=k+y,k=s.indexOf(t,p);else{if(A===-1)break;if(E.push(s.substring(p,A)),I(A+b),C&&(ne(),m))return L();if(a&&w.length>=a)return L(!0)}return F();function N(e){w.push(e),D=p}function P(e){var t=0;return t=e!==-1&&(e=s.substring(j+1,e))&&e.trim()===``?e.length:t}function F(e){return _||(e===void 0&&(e=s.substring(p)),E.push(e),p=v,N(E),C&&ne()),L()}function I(e){p=e,N(E),E=[],A=s.indexOf(n,p)}function L(r){if(e.header&&!g&&w.length&&!u){var i=w[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=c(i[n]);if(a[r=S(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(l=l===null?{}:l)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),u=!0}return{data:w,errors:T,meta:{delimiter:t,linebreak:n,aborted:m,truncated:!!r,cursor:D+(g||0),renamedHeaders:l}}}function ne(){i(L()),w=[],T=[]}},this.abort=function(){m=!0},this.getCharIndex=function(){return p}}function _(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(S(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else S(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=a[e];S(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function y(){throw Error(`Not implemented.`)}function b(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=b(e[t]);return n}function x(e,t){return function(){e.apply(t,arguments)}}function S(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(S(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!S(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=c(n),i=new(r.download?u:f)(r)):!0===n.readable&&S(n.read)&&S(n.on)?i=new p(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new d(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=_,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=S(r.step),r.chunk=S(r.chunk),r.complete=S(r.complete),r.error=S(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar,c=o+o),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var h=[],g=0;g<d;g++){var _=c?e[g]:g;h.push(t[u][_])}f=h.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=m(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function m(e,t){var r,a,l;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(l=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,l=!0),a=(r=e.toString()).replace(f,c),(l=l||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(a,s.BAD_DELIMITERS)||-1<a.indexOf(i)||-1<r.indexOf(o)||a.charAt(0)===` `||a.charAt(a.length-1)===` `)?o+a+o:a)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=g,s.ParserHandle=m,s.NetworkStreamer=u,s.FileStreamer=d,s.StringStreamer=f,s.ReadableStreamStreamer=p,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)S(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(S(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(S(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){S(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(l.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(p.prototype=Object.create(l.prototype)).constructor=p,s})}))(),1);function rt(e){if(e.sheets&&String(e.sheets).trim()!==``){let t=String(e.sheets).split(`;`).map(e=>e.trim()).filter(Boolean);if(t.length>0)return t}return e.sheet&&String(e.sheet).trim()!==``?[String(e.sheet).trim()]:[`Default`]}function it(e){return new Promise((t,n)=>{nt.default.parse(e,{header:!0,skipEmptyLines:!0,dynamicTyping:!1,complete:e=>{e.errors&&e.errors.length>0&&console.warn(`CSV Parse Warnings:`,e.errors),t(e.data.filter(e=>e.name&&String(e.name).trim()!==``).map((e,t)=>({id:e.id?String(e.id).trim():`q-${Date.now()}-${t}`,name:String(e.name||``).trim(),topic:String(e.topic||`General`).trim(),difficulty:ot(e.difficulty),sheets:rt(e),link:String(e.link||``).trim()})))},error:e=>n(e)})})}function at(e,t=`questions.csv`){let n=e.map(e=>({id:e.id,name:e.name,topic:e.topic,difficulty:e.difficulty,sheets:Array.isArray(e.sheets)?e.sheets.join(`; `):e.sheet||`Default`,link:e.link||``})),r=nt.default.unparse(n,{columns:[`id`,`name`,`topic`,`difficulty`,`sheets`,`link`]}),i=new Blob([r],{type:`text/csv;charset=utf-8;`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.setAttribute(`href`,a),o.setAttribute(`download`,t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function ot(e){if(!e)return`Medium`;let t=String(e).trim().toLowerCase();return t.includes(`easy`)?`Easy`:t.includes(`hard`)?`Hard`:`Medium`}function st({value:e,options:t,onChange:n,icon:r,placeholder:i=`Select...`}){let[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let c=t.find(t=>t.value===e)||{label:i,value:e};return(0,V.jsxs)(`div`,{className:`custom-select-container`,ref:s,children:[(0,V.jsxs)(`button`,{type:`button`,className:`custom-select-trigger ${a?`active`:``}`,onClick:()=>o(!a),children:[r&&(0,V.jsx)(r,{size:14,className:`select-icon`}),(0,V.jsx)(`span`,{className:`select-label`,children:c.label}),(0,V.jsx)(N,{size:14,className:`select-arrow ${a?`rotate`:``}`})]}),a&&(0,V.jsx)(`div`,{className:`custom-select-dropdown glass-card`,children:(0,V.jsx)(`div`,{className:`select-options-scroll`,children:t.map(t=>{let r=t.value===e;return(0,V.jsxs)(`button`,{type:`button`,className:`select-option-item ${r?`selected`:``}`,onClick:()=>{n(t.value),o(!1)},children:[(0,V.jsx)(`span`,{className:`option-label`,children:t.label}),r&&(0,V.jsx)(Ie,{size:14,className:`option-check-icon`})]},t.value)})})})]})}var ct=e=>{if(!e)return[`Default`];if(Array.isArray(e.sheets)&&e.sheets.length>0){let t=e.sheets.map(e=>String(e).trim()).filter(Boolean);return t.length>0?t:[`Default`]}return e.sheet&&String(e.sheet).trim()!==``?[String(e.sheet).trim()]:[`Default`]},lt=e=>e&&e.link&&String(e.link).trim()!==``?String(e.link).trim():`https://www.google.com/search?q=${encodeURIComponent(`${e?e.name:``} leetcode`)}`,ut=(e,t=[],n=null,r=5)=>{let i=[];if(Array.isArray(t)&&t.length>0&&t.forEach(t=>{Array.isArray(t.results)&&t.results.forEach(n=>{if(n.questionId===e){let e=t.completedAt||t.timestamp?new Date(t.completedAt||t.timestamp).toLocaleDateString():``,r=`ok`,a=`OK`;n.confidence===`solid`||n.confidence===`tooEasy`?(r=`solid`,a=`Solid`):n.confidence===`shaky`||n.status===`skipped`?(r=`shaky`,a=`Shaky`):n.status===`gaveUp`||n.confidence===`wrong`?(r=`gaveUp`,a=`Gave Up`):(n.confidence===`ok`||n.status===`done`)&&(r=`ok`,a=`OK`),i.push({type:r,label:a,date:e})}})}),i.length===0&&n){let e=`ok`,t=`OK`,r=n.lastAttemptedAt?new Date(n.lastAttemptedAt).toLocaleDateString():``;n.confidence===`solid`||n.confidence===`tooEasy`?(e=`solid`,t=`Solid`):n.confidence===`shaky`||n.status===`skipped`?(e=`shaky`,t=`Shaky`):n.status===`gaveUp`||n.confidence===`wrong`?(e=`gaveUp`,t=`Gave Up`):n.confidence===`ok`&&(e=`ok`,t=`OK`),i.push({type:e,label:t,date:r})}return i.slice(-r)},dt=(e,t,n=null)=>{let r=new Map;e.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();t&&!r.has(t)&&r.set(t,e)});let i=[],a=new Set;return t.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();if(!t||a.has(t))return;a.add(t);let o=n||e.sheets&&e.sheets[0]||e.sheet||`Default`;if(r.has(t)){let n=r.get(t),a=ct(n),s=Array.from(new Set([...a,o]));i.push({...n,sheets:s,link:n.link||e.link||``,topic:n.topic||e.topic||`General`})}else{let t=n?[n]:e.sheets&&e.sheets.length>0?e.sheets:[e.sheet||`Default`];i.push({id:e.id||`q-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,name:String(e.name).trim(),topic:String(e.topic||`General`).trim(),difficulty:e.difficulty||`Medium`,sheets:t,link:String(e.link||``).trim()})}}),e.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();t&&!a.has(t)&&i.push(e)}),i};function ft({questions:e,questionStates:t={},sessions:n=[],onUpdateQuestions:r,onUpdateQuestionStates:i,onResetToDefault:a}){let[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(()=>{try{let e=localStorage.getItem(`sprintset_custom_sheets_v1`);return e?JSON.parse(e):[]}catch{return[]}}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),g=(0,_.useRef)(null),v=(0,_.useRef)(null),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(`ALL`),[C,w]=(0,_.useState)(`ALL`),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(``),[k,te]=(0,_.useState)(null),[j,M]=(0,_.useState)(!1),[N,F]=(0,_.useState)(null),[I,L]=(0,_.useState)({id:``,name:``,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Default`],link:``}),[ne,re]=(0,_.useState)(!1),[R,z]=(0,_.useState)(``),[ie,se]=(0,_.useState)(!1),[ce,le]=(0,_.useState)(`GLOBAL`),[ue,de]=(0,_.useState)(`topic`),[fe,pe]=(0,_.useState)(``),[ge,B]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=e=>{g.current&&!g.current.contains(e.target)&&p(!1),v.current&&!v.current.contains(e.target)&&h(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let _e=e=>{d(e);try{localStorage.setItem(`sprintset_custom_sheets_v1`,JSON.stringify(e))}catch(e){console.error(`Error saving custom sheets:`,e)}},ye=(0,_.useMemo)(()=>{let t=new Map;return u.forEach(e=>{e&&e.trim()!==``&&t.set(e.trim(),[])}),e.forEach(e=>{ct(e).forEach(n=>{t.has(n)||t.set(n,[]),t.get(n).push(e)})}),t},[e,u]),be=(0,_.useMemo)(()=>{let e=[`Striver A2Z`,`Blind 75`,`NeetCode 150`];return Array.from(ye.keys()).sort((t,n)=>{let r=e.indexOf(t),i=e.indexOf(n);return r!==-1&&i!==-1?r-i:r===-1?i!==-1||t===`Default`?1:n===`Default`?-1:t.localeCompare(n):-1})},[ye]),xe=(0,_.useMemo)(()=>o?o===`ALL`?e:e.filter(e=>ct(e).includes(o)):[],[e,o]),Se=(0,_.useMemo)(()=>{let e=new Set(xe.map(e=>e.topic||`General`));return Array.from(e).sort()},[xe]),Ce=(0,_.useMemo)(()=>[{value:`ALL`,label:`All Topics (${Se.length})`},...Se.map(e=>({value:e,label:$e(e)}))],[Se]),we=(0,_.useMemo)(()=>[{value:`ALL`,label:`All Difficulties`},{value:`Easy`,label:`Easy`},{value:`Medium`,label:`Medium`},{value:`Hard`,label:`Hard`}],[]),Ee=(0,_.useMemo)(()=>xe.filter(e=>{let t=ct(e),n=y===``||e.name.toLowerCase().includes(y.toLowerCase())||e.topic.toLowerCase().includes(y.toLowerCase())||t.some(e=>e.toLowerCase().includes(y.toLowerCase())),r=x===`ALL`||e.topic===x,i=C===`ALL`||e.difficulty===C;return n&&r&&i}),[xe,y,x,C]),Ae=(0,_.useMemo)(()=>!ce||ce===`GLOBAL`||ce===`ALL`?e:e.filter(e=>ct(e).includes(ce)),[e,ce]),Me=(0,_.useMemo)(()=>{if(!fe||!fe.trim())return 0;let e=fe.trim().toLowerCase();return Ae.filter(t=>ue===`sheet`?ct(t).some(t=>t.toLowerCase()===e):(t[ue]||``).toString().trim().toLowerCase()===e).length},[Ae,ue,fe]),Pe=e=>({easy:e.filter(e=>e.difficulty===`Easy`).length,medium:e.filter(e=>e.difficulty===`Medium`).length,hard:e.filter(e=>e.difficulty===`Hard`).length,attempted:e.filter(e=>t[e.id]).length}),Fe=async t=>{let n=t.target.files[0];if(!(!n||!o||o===`ALL`))try{let t=await it(n);if(t.length===0){alert(`No valid question rows found in CSV.`);return}r(dt(e,t,o)),h(!1),alert(`Successfully processed ${t.length} rows into "${o}"!`)}catch(e){alert(`Error parsing CSV file: `+e.message)}},Re=e=>{le(e),de(`topic`),pe(``),B(``),p(!1),h(!1),se(!0)},ze=t=>{if(t.preventDefault(),!fe.trim()||!ge.trim()){alert(`Please provide both old and new values.`);return}if(Me===0){alert(`No matching questions found.`);return}let n=fe.trim(),i=ge.trim(),a=!ce||ce===`GLOBAL`||ce===`ALL`?`all questions`:`questions in "${ce}"`,o=`This will update ${Me} question${Me===1?``:`s`} (${a}) from '${n}' to '${i}'.\n\nAre you sure you want to proceed?`;if(window.confirm(o)){let t=new Set(Ae.map(e=>e.id)),a=n.toLowerCase();r(e.map(e=>{if(t.has(e.id)){if(ue===`sheet`){let t=ct(e);if(t.some(e=>e.toLowerCase()===a)){let n=t.map(e=>e.toLowerCase()===a?i:e);return{...e,sheets:Array.from(new Set(n))}}}else if((e[ue]||``).toString().trim().toLowerCase()===a)return{...e,[ue]:i}}return e})),se(!1),alert(`Updated ${Me} question${Me===1?``:`s`}.`)}},He=()=>{O(``),te(null),E(!0)},Ue=async t=>{if(t.preventDefault(),!D.trim()){alert(`Please enter a sheet name.`);return}let n=D.trim();if(u.includes(n)||_e([...u,n]),k)try{let t=await it(k);t.length>0&&r(dt(e,t,n))}catch(e){alert(`Error parsing sheet CSV file: `+e.message)}E(!1),s(n)},Ke=()=>{F(null);let e=o&&o!==`ALL`?[o]:[`Default`];L({id:`custom-${Date.now()}`,name:``,topic:Se[0]||`Arrays & Hashing`,difficulty:`Medium`,sheets:e,link:``}),re(!1),z(``),M(!0)},qe=e=>{F(e),L({...e,sheets:ct(e)}),re(!1),z(``),M(!0)},Je=e=>{let t=I.sheets||[];if(t.includes(e)){let n=t.filter(t=>t!==e);L({...I,sheets:n.length>0?n:[`Default`]})}else L({...I,sheets:[...t,e]})},Ye=t=>{window.confirm(`Are you sure you want to delete this question?`)&&r(e.filter(e=>e.id!==t))},Xe=t=>{if(!t||t===`ALL`)return;let n=window.prompt(`Rename sheet "${t}" to:`,t);if(!n||!n.trim()||n.trim()===t)return;let i=n.trim(),a=e.map(e=>{let n=ct(e);if(n.includes(t)){let r=Array.from(new Set(n.map(e=>e===t?i:e)));return{...e,sheets:r}}return e}),c=u.map(e=>e===t?i:e);c.includes(i)||c.push(i),_e(c),r(a),o===t&&s(i),h(!1),alert(`Sheet "${t}" successfully renamed to "${i}"!`)},Ze=n=>{if(!n||n===`Default`||n===`ALL`)return;let a=e.filter(e=>ct(e).includes(n)),o=a.length,c=a.filter(e=>ct(e).filter(e=>e!==n).length===0),l=c.length,d=`${o} question${o===1?``:`s`} will be removed from "${n}"; ${l} of those aren't in any other sheet and will be deleted entirely.\n\nAre you sure you want to proceed?`;if(window.confirm(d)){let a=new Set(c.map(e=>e.id)),o=e.filter(e=>!a.has(e.id)).map(e=>{if(ct(e).includes(n)){let t=ct(e).filter(e=>e!==n);return{...e,sheets:t.length>0?t:[`Default`]}}return e}),l={...t};a.forEach(e=>{delete l[e]}),_e(u.filter(e=>e!==n)),i&&i(l),r(o),s(null),h(!1)}},et=n=>{if(!n)return;let r=n===`ALL`?e:ye.get(n)||[],a=r.length,o=`Reset practice history (attempts & confidence) for all ${a} question${a===1?``:`s`} in "${n}"?`;if(window.confirm(o)){let e=new Set(r.map(e=>e.id)),a={...t};e.forEach(e=>{delete a[e]}),i&&i(a),h(!1),alert(`Cleared practice history for "${n}".`)}},tt=t=>{if(t.preventDefault(),!I.name.trim()){alert(`Question Name is required.`);return}let n=[...I.sheets||[`Default`]];if(ne&&R.trim()){let e=R.trim();u.includes(e)||_e([...u,e]),n.includes(e)||n.push(e)}let i={...I,sheets:n.length>0?n:[`Default`]};r(N?e.map(e=>e.id===N.id?i:e):dt(e,[i])),M(!1)},nt=()=>{s(null),l(!1),b(``),S(`ALL`),w(`ALL`)},rt=Pe(e);return(0,V.jsxs)(`div`,{className:`bank-container glass-card`,children:[o===null?(0,V.jsxs)(`div`,{className:`sheets-overview-view`,children:[(0,V.jsxs)(`div`,{className:`bank-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`h2`,{className:`bank-title`,children:[`Question Bank (`,e.length,`)`]}),(0,V.jsx)(`p`,{className:`bank-subtitle`,children:`Select a sheet to explore questions, or view all questions in a flat list.`})]}),(0,V.jsxs)(`div`,{className:`bank-header-actions`,children:[(0,V.jsxs)(`button`,{className:`btn btn-primary`,onClick:He,children:[(0,V.jsx)(me,{size:16}),(0,V.jsx)(`span`,{children:`Add Sheet`})]}),(0,V.jsxs)(`div`,{className:`kebab-menu-wrapper`,ref:g,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary kebab-trigger-btn`,onClick:()=>p(!f),title:`More Bank Actions`,children:(0,V.jsx)(oe,{size:18})}),f&&(0,V.jsxs)(`div`,{className:`kebab-dropdown-menu`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{at(e,`sprintset_all_questions.csv`),p(!1)},children:[(0,V.jsx)(We,{size:15}),(0,V.jsx)(`span`,{children:`Export All (CSV)`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Re(`GLOBAL`),children:[(0,V.jsx)(ke,{size:15}),(0,V.jsx)(`span`,{children:`Find & Replace`})]}),(0,V.jsx)(`div`,{className:`dropdown-divider`}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn item-danger`,onClick:()=>{p(!1),window.confirm(`Reset question bank back to default starter set?`)&&a()},children:[(0,V.jsx)(je,{size:15}),(0,V.jsx)(`span`,{children:`Reset Bank`})]})]})]})]})]}),(0,V.jsxs)(`div`,{className:`sheets-grid-section`,children:[(0,V.jsx)(`h3`,{className:`section-grid-title`,children:`Problem Sheets & Collections`}),(0,V.jsxs)(`div`,{className:`sheet-cards-grid`,children:[(0,V.jsxs)(`div`,{className:`sheet-card card-all-questions`,onClick:()=>s(`ALL`),children:[(0,V.jsxs)(`div`,{className:`sheet-card-header`,children:[(0,V.jsx)(`div`,{className:`sheet-icon-badge icon-all-badge`,children:(0,V.jsx)(ve,{size:22})}),(0,V.jsx)(`span`,{className:`sheet-type-pill pill-all`,children:`Flat View`})]}),(0,V.jsxs)(`div`,{className:`sheet-card-body`,children:[(0,V.jsx)(`h3`,{className:`sheet-card-title`,children:`All Questions`}),(0,V.jsxs)(`div`,{className:`sheet-main-count`,children:[e.length,` `,(0,V.jsx)(`span`,{children:`Questions`})]}),(0,V.jsxs)(`div`,{className:`sheet-diff-breakdown`,children:[(0,V.jsxs)(`span`,{className:`diff-tag tag-easy`,children:[rt.easy,` Easy`]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`span`,{className:`diff-tag tag-medium`,children:[rt.medium,` Med`]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`span`,{className:`diff-tag tag-hard`,children:[rt.hard,` Hard`]})]})]}),(0,V.jsx)(`div`,{className:`sheet-card-footer`,children:(0,V.jsxs)(`span`,{className:`view-sheet-btn`,children:[`View All Questions `,(0,V.jsx)(P,{size:16})]})})]}),be.map(e=>{let t=ye.get(e)||[],n=Pe(t);return(0,V.jsxs)(`div`,{className:`sheet-card`,onClick:()=>s(e),children:[(0,V.jsxs)(`div`,{className:`sheet-card-header`,children:[(0,V.jsx)(`div`,{className:`sheet-icon-badge`,children:(0,V.jsx)(A,{size:20})}),(0,V.jsx)(`span`,{className:`sheet-type-pill`,children:`Sheet`})]}),(0,V.jsxs)(`div`,{className:`sheet-card-body`,children:[(0,V.jsx)(`h3`,{className:`sheet-card-title`,children:e}),(0,V.jsxs)(`div`,{className:`sheet-main-count`,children:[t.length,` `,(0,V.jsx)(`span`,{children:`Questions`})]}),(0,V.jsxs)(`div`,{className:`sheet-diff-breakdown`,children:[(0,V.jsxs)(`span`,{className:`diff-tag tag-easy`,children:[n.easy,` Easy`]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`span`,{className:`diff-tag tag-medium`,children:[n.medium,` Med`]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`span`,{className:`diff-tag tag-hard`,children:[n.hard,` Hard`]})]})]}),(0,V.jsxs)(`div`,{className:`sheet-card-footer`,children:[(0,V.jsx)(`span`,{className:`attempted-indicator`,children:n.attempted>0?`${n.attempted}/${t.length} Attempted`:`Not started`}),(0,V.jsxs)(`span`,{className:`view-sheet-btn`,children:[`Open Sheet `,(0,V.jsx)(P,{size:16})]})]})]},e)})]})]})]}):(0,V.jsxs)(`div`,{className:`sheet-detail-view`,children:[(0,V.jsxs)(`div`,{className:`bank-header`,children:[(0,V.jsxs)(`div`,{className:`header-title-with-back`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`btn-back-sheets`,onClick:nt,title:`Return to Sheets Overview`,children:[(0,V.jsx)(ee,{size:16}),(0,V.jsx)(`span`,{children:`All Sheets`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`h2`,{className:`bank-title`,children:[o===`ALL`?`All Questions`:o,(0,V.jsx)(`span`,{className:`header-count-pill`,children:xe.length})]}),(0,V.jsx)(`p`,{className:`bank-subtitle`,children:o===`ALL`?`Viewing every question across all sheets in your question bank.`:`Viewing questions in the ${o} sheet.`})]})]}),(0,V.jsxs)(`div`,{className:`bank-header-actions`,children:[(0,V.jsxs)(`button`,{className:`btn btn-primary`,onClick:Ke,children:[(0,V.jsx)(De,{size:16}),(0,V.jsx)(`span`,{children:`Add Question`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-edit-mode-toggle ${c?`edit-mode-active`:``}`,onClick:()=>l(!c),title:c?`Exit Edit Mode`:`Enable Edit Mode to edit or delete questions`,children:[(0,V.jsx)(Te,{size:15}),(0,V.jsx)(`span`,{children:c?`Done Editing`:`Edit Mode`})]}),(0,V.jsxs)(`div`,{className:`kebab-menu-wrapper`,ref:v,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary kebab-trigger-btn`,onClick:()=>h(!m),title:`Sheet Actions`,children:(0,V.jsx)(oe,{size:18})}),m&&(0,V.jsx)(`div`,{className:`kebab-dropdown-menu`,children:o===`ALL`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{at(e,`sprintset_all_questions.csv`),h(!1)},children:[(0,V.jsx)(We,{size:15}),(0,V.jsx)(`span`,{children:`Export All (CSV)`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Re(`ALL`),children:[(0,V.jsx)(ke,{size:15}),(0,V.jsx)(`span`,{children:`Find & Replace`})]})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`label`,{className:`menu-item-btn cursor-pointer`,children:[(0,V.jsx)(ae,{size:15}),(0,V.jsx)(`span`,{children:`Batch Import`}),(0,V.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:Fe,style:{display:`none`}})]}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{let e=`sprintset_${o.toLowerCase().replace(/\s+/g,`_`)}_questions.csv`;at(xe,e),h(!1)},children:[(0,V.jsx)(We,{size:15}),(0,V.jsx)(`span`,{children:`Export Sheet`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Re(o),children:[(0,V.jsx)(ke,{size:15}),(0,V.jsx)(`span`,{children:`Find & Replace`})]}),(0,V.jsx)(`div`,{className:`dropdown-divider`}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Xe(o),children:[(0,V.jsx)(Te,{size:15}),(0,V.jsx)(`span`,{children:`Rename Sheet`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>et(o),children:[(0,V.jsx)(Oe,{size:15}),(0,V.jsx)(`span`,{children:`Reset History`})]}),o!==`Default`&&(0,V.jsxs)(`button`,{type:`button`,className:`menu-item-btn item-danger`,onClick:()=>Ze(o),children:[(0,V.jsx)(Be,{size:15}),(0,V.jsx)(`span`,{children:`Delete Sheet`})]})]})})]})]})]}),(0,V.jsxs)(`div`,{className:`bank-controls`,children:[(0,V.jsxs)(`div`,{className:`search-box`,children:[(0,V.jsx)(Ne,{size:18,className:`search-icon`}),(0,V.jsx)(`input`,{type:`text`,className:`search-input`,placeholder:o===`ALL`?`Search all questions by name, topic, or sheet...`:`Search in ${o}...`,value:y,onChange:e=>b(e.target.value)}),y&&(0,V.jsx)(`button`,{className:`clear-search`,onClick:()=>b(``),children:(0,V.jsx)(Ge,{size:14})})]}),(0,V.jsxs)(`div`,{className:`filters-row`,children:[(0,V.jsx)(st,{value:x,options:Ce,onChange:S,icon:he}),(0,V.jsx)(st,{value:C,options:we,onChange:w})]})]}),(0,V.jsx)(`div`,{className:`table-wrapper`,children:(0,V.jsxs)(`table`,{className:`bank-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{className:`col-name`,children:`Question Name`}),(0,V.jsx)(`th`,{className:`col-topic`,children:`Topic`}),(0,V.jsx)(`th`,{className:`col-diff`,children:`Difficulty`}),c?(0,V.jsx)(`th`,{className:`col-history text-center`,children:`Actions`}):o===`ALL`?(0,V.jsx)(`th`,{className:`col-sheet`,children:`Sheets`}):(0,V.jsx)(`th`,{className:`col-history`,children:`History`})]})}),(0,V.jsx)(`tbody`,{children:Ee.length>0?Ee.map(e=>{let r=t[e.id],i=ct(e);return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{className:`col-name font-semibold`,title:e.name,children:(0,V.jsx)(`a`,{href:lt(e),target:`_blank`,rel:`noopener noreferrer`,className:`q-name-link`,title:e.link?`Open problem page`:`Search problem on Google`,children:e.name})}),(0,V.jsx)(`td`,{className:`col-topic`,children:(0,V.jsx)(`span`,{className:`badge badge-topic`,title:e.topic,children:$e(e.topic)})}),(0,V.jsx)(`td`,{className:`col-diff`,children:(0,V.jsx)(`span`,{className:`badge badge-${e.difficulty.toLowerCase()}`,children:e.difficulty})}),c?(0,V.jsx)(`td`,{className:`col-history text-center`,children:(0,V.jsxs)(`div`,{className:`edit-mode-actions`,children:[(0,V.jsx)(`button`,{className:`icon-action-btn`,onClick:()=>qe(e),title:`Edit Question`,children:(0,V.jsx)(Te,{size:15})}),(0,V.jsx)(`button`,{className:`icon-action-btn text-danger`,onClick:()=>Ye(e.id),title:`Delete Question`,children:(0,V.jsx)(Be,{size:15})})]})}):o===`ALL`?(0,V.jsx)(`td`,{className:`col-sheet`,children:(0,V.jsx)(`div`,{className:`sheets-tags-wrapper`,children:i.map(e=>(0,V.jsx)(`button`,{type:`button`,className:`sheet-tag-btn`,onClick:()=>{s(e),b(``)},title:`Filter by ${e}`,children:e},e))})}):(0,V.jsx)(`td`,{className:`col-history`,children:(()=>{let t=ut(e.id,n,r,5),i=Math.max(0,5-t.length),a=[...Array(i).fill({type:`empty`,label:`Not attempted`,date:``}),...t],o=t.length>0?`Recent Outcomes (${t.length} attempt${t.length===1?``:`s`}):\n`+t.map((e,t)=>`${t+1}. ${e.label}${e.date?` (${e.date})`:``}`).join(`
`):`Never attempted`;return(0,V.jsx)(`div`,{className:`history-dots-row`,title:o,children:a.map((e,t)=>(0,V.jsx)(`span`,{className:`history-dot dot-${e.type}`,title:e.type===`empty`?`Never attempted`:`${e.label}${e.date?` (${e.date})`:``}`},t))})})()})]},e.id)}):(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{colSpan:`4`,className:`text-center py-6 text-muted`,children:`No questions match your filter criteria in this view.`})})})]})})]}),T&&(0,Qe.createPortal)((0,V.jsx)(`div`,{className:`modal-overlay`,onClick:()=>E(!1),children:(0,V.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsx)(`h3`,{children:`Create New Sheet`}),(0,V.jsx)(`button`,{className:`close-btn`,onClick:()=>E(!1),children:(0,V.jsx)(Ge,{size:18})})]}),(0,V.jsxs)(`form`,{onSubmit:Ue,className:`form-body`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Sheet Name *`}),(0,V.jsx)(`input`,{type:`text`,required:!0,value:D,onChange:e=>O(e.target.value),placeholder:`e.g. LeetCode 75, Core CS, SQL Mastery...`,className:`input-field-full`,autoFocus:!0})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Populate with CSV File (Optional)`}),(0,V.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:e=>te(e.target.files[0]||null),className:`input-field-full`}),(0,V.jsxs)(`span`,{className:`form-subtext`,children:[`Upload a CSV file (schema: `,(0,V.jsx)(`code`,{children:`name, topic, difficulty, link`}),`) to populate questions directly into this sheet (merging duplicate question names automatically).`]})]}),(0,V.jsxs)(`div`,{className:`form-actions`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>E(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,children:`Create Sheet`})]})]})]})}),document.body),j&&(0,Qe.createPortal)((0,V.jsx)(`div`,{className:`modal-overlay`,onClick:()=>M(!1),children:(0,V.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsx)(`h3`,{children:N?`Edit Question`:`Add Question`}),(0,V.jsx)(`button`,{className:`close-btn`,onClick:()=>M(!1),children:(0,V.jsx)(Ge,{size:18})})]}),(0,V.jsxs)(`form`,{onSubmit:tt,className:`form-body`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Question Name *`}),(0,V.jsx)(`input`,{type:`text`,required:!0,value:I.name,onChange:e=>L({...I,name:e.target.value}),placeholder:`e.g. Set Matrix Zeroes`,className:`input-field-full`})]}),(0,V.jsxs)(`div`,{className:`form-row`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Topic`}),(0,V.jsx)(`input`,{type:`text`,value:I.topic,onChange:e=>L({...I,topic:e.target.value}),placeholder:`e.g. Arrays & Hashing`,className:`input-field-full`})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Difficulty`}),(0,V.jsxs)(`select`,{value:I.difficulty,onChange:e=>L({...I,difficulty:e.target.value}),className:`input-field-full`,children:[(0,V.jsx)(`option`,{value:`Easy`,children:`Easy`}),(0,V.jsx)(`option`,{value:`Medium`,children:`Medium`}),(0,V.jsx)(`option`,{value:`Hard`,children:`Hard`})]})]})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Sheet Membership (Select all that apply) *`}),(0,V.jsx)(`div`,{className:`sheet-chips-selector`,children:be.map(e=>{let t=(I.sheets||[]).includes(e);return(0,V.jsxs)(`button`,{type:`button`,className:`sheet-select-chip ${t?`selected`:``}`,onClick:()=>Je(e),children:[t?(0,V.jsx)(Ie,{size:14}):(0,V.jsx)(Le,{size:14}),(0,V.jsx)(`span`,{children:e})]},e)})}),ne?(0,V.jsxs)(`div`,{className:`form-row mt-2`,children:[(0,V.jsx)(`input`,{type:`text`,required:!0,value:R,onChange:e=>z(e.target.value),placeholder:`Enter new sheet name...`,className:`input-field-full`,autoFocus:!0}),(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary text-xs`,onClick:()=>re(!1),children:`Cancel`})]}):(0,V.jsx)(`button`,{type:`button`,className:`btn-link-action mt-1`,onClick:()=>re(!0),children:`+ Add to a new sheet...`})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Problem URL / Link`}),(0,V.jsx)(`input`,{type:`url`,value:I.link,onChange:e=>L({...I,link:e.target.value}),placeholder:`https://leetcode.com/problems/...`,className:`input-field-full`})]}),(0,V.jsxs)(`div`,{className:`form-actions`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>M(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,children:`Save Question`})]})]})]})}),document.body),ie&&(0,Qe.createPortal)((0,V.jsx)(`div`,{className:`modal-overlay`,onClick:()=>se(!1),children:(0,V.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsx)(`h3`,{children:`Find & Replace`}),(0,V.jsx)(`button`,{className:`close-btn`,onClick:()=>se(!1),children:(0,V.jsx)(Ge,{size:18})})]}),(0,V.jsxs)(`form`,{onSubmit:ze,className:`form-body`,children:[(0,V.jsxs)(`div`,{className:`destination-badge-box`,children:[(0,V.jsx)(`span`,{className:`text-muted font-semibold`,children:`Operating Scope:`}),(0,V.jsx)(`strong`,{className:`text-amber`,children:!ce||ce===`GLOBAL`||ce===`ALL`?`All Questions`:`Sheet "${ce}"`})]}),(0,V.jsxs)(`div`,{className:`form-group mt-3`,children:[(0,V.jsx)(`label`,{children:`Target Field to Match & Replace`}),(0,V.jsxs)(`select`,{value:ue,onChange:e=>de(e.target.value),className:`input-field-full`,children:[(0,V.jsx)(`option`,{value:`topic`,children:`Topic Category`}),(0,V.jsx)(`option`,{value:`sheet`,children:`Sheet Membership`}),(0,V.jsx)(`option`,{value:`difficulty`,children:`Difficulty Level`})]})]}),(0,V.jsxs)(`div`,{className:`form-row mt-3`,children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Find Exact Value`}),(0,V.jsx)(`input`,{type:`text`,required:!0,value:fe,onChange:e=>pe(e.target.value),placeholder:`e.g. Array, Binary Trees...`,className:`input-field-full`})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsx)(`label`,{children:`Replace With New Value`}),(0,V.jsx)(`input`,{type:`text`,required:!0,value:ge,onChange:e=>B(e.target.value),placeholder:`e.g. Arrays, Core Trees...`,className:`input-field-full`})]})]}),fe.trim()&&(0,V.jsxs)(`div`,{className:`matching-impact-info mt-2`,children:[(0,V.jsx)(Ve,{size:14,className:`text-amber`}),(0,V.jsxs)(`span`,{children:[`Matches `,(0,V.jsx)(`strong`,{children:Me}),` question`,Me===1?``:`s`]})]}),(0,V.jsxs)(`div`,{className:`form-actions mt-4`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>se(!1),children:`Cancel`}),(0,V.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:Me===0||!ge.trim(),children:`Apply Replacement`})]})]})]})}),document.body),(0,V.jsx)(`style`,{children:`
        .bank-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bank-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .header-title-with-back {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-back-sheets {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-back-sheets:hover {
          color: var(--text-primary);
          border-color: var(--amber-main);
          background: var(--bg-card-hover);
        }

        .bank-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .header-count-pill {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: rgba(var(--accent-rgb), 0.15);
          color: var(--amber-main);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
        }

        .bank-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .bank-header-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        /* Kebab Dropdown Menu */
        .kebab-menu-wrapper {
          position: relative;
        }

        .kebab-trigger-btn {
          width: 38px;
          height: 38px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .kebab-dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 1000;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          padding: 0.4rem;
          min-width: 190px;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          animation: menuFadeIn 0.15s ease;
        }

        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .menu-item-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-sm);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .menu-item-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
        }

        .menu-item-btn.item-danger {
          color: #ef4444;
        }

        .menu-item-btn.item-danger:hover {
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        }

        .dropdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 0.25rem 0;
        }

        /* Sheets Grid View */
        .sheets-grid-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .section-grid-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sheet-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 1.25rem;
        }

        .sheet-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.35rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .sheet-card:hover {
          border-color: rgba(var(--accent-rgb), 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          background: var(--bg-card-hover);
        }

        .card-all-questions {
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.08) 0%, rgba(var(--accent-rgb), 0.02) 100%);
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .card-all-questions:hover {
          border-color: var(--amber-main);
          box-shadow: 0 8px 28px rgba(var(--accent-rgb), 0.2);
        }

        .sheet-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sheet-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .icon-all-badge {
          background: rgba(var(--accent-rgb), 0.15);
          border-color: rgba(var(--accent-rgb), 0.35);
          color: var(--amber-main);
        }

        .sheet-type-pill {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
        }

        .pill-all {
          background: rgba(var(--accent-rgb), 0.15);
          color: var(--amber-main);
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .sheet-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .sheet-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .sheet-main-count {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .sheet-main-count span {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .sheet-diff-breakdown {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          margin-top: 0.2rem;
        }

        .diff-tag {
          font-weight: 600;
        }

        .tag-easy { color: var(--easy-color); }
        .tag-medium { color: var(--medium-color); }
        .tag-hard { color: var(--hard-color); }

        .sheet-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 0.75rem;
          font-size: 0.8rem;
        }

        .attempted-indicator {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .view-sheet-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--amber-main);
          font-weight: 700;
          font-size: 0.82rem;
          margin-left: auto;
        }

        /* Controls & Table Spacing */
        .bank-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 2.2rem 0.6rem 2.4rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
        }

        .search-input:focus {
          border-color: var(--amber-main);
        }

        .clear-search {
          position: absolute;
          right: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: var(--text-muted);
        }

        .filters-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* Custom Select Component Styles */
        .custom-select-container {
          position: relative;
          display: inline-block;
          z-index: 50;
        }

        .custom-select-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.9rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s ease;
        }

        .custom-select-trigger:hover,
        .custom-select-trigger.active {
          border-color: var(--amber-main);
          background: var(--bg-card-hover);
          box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
        }

        .select-arrow {
          color: var(--text-secondary);
          transition: transform 0.2s ease;
        }

        .select-arrow.rotate {
          transform: rotate(180deg);
          color: var(--amber-main);
        }

        .custom-select-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          min-width: 220px;
          max-width: 320px;
          z-index: 9999;
          background: #11141d !important;
          border: 1px solid rgba(var(--accent-rgb), 0.4) !important;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(var(--accent-rgb), 0.15);
          padding: 0.4rem;
        }

        .select-options-scroll {
          max-height: 250px;
          overflow-y: auto;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.25rem !important;
        }

        .select-option-item {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
          padding: 0.55rem 0.75rem !important;
          border-radius: var(--radius-sm) !important;
          background: transparent !important;
          border: none !important;
          color: var(--text-secondary) !important;
          font-size: 0.83rem !important;
          font-weight: 500 !important;
          text-align: left !important;
          cursor: pointer !important;
          transition: all 0.15s ease !important;
          white-space: nowrap !important;
        }

        .select-option-item:hover {
          background: rgba(var(--accent-rgb), 0.15) !important;
          color: #ffffff !important;
        }

        .select-option-item.selected {
          background: rgba(var(--accent-rgb), 0.25) !important;
          color: #ffffff !important;
          font-weight: 700 !important;
        }

        .option-check-icon {
          color: var(--amber-main);
          margin-left: 0.5rem;
          flex-shrink: 0;
        }

        /* Edit Mode Toggle Button */
        .btn-edit-mode-toggle {
          height: 38px;
          padding: 0 1rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border-radius: var(--radius-md);
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .btn-edit-mode-toggle:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: rgba(var(--accent-rgb), 0.4);
        }

        .btn-edit-mode-toggle.edit-mode-active {
          background: rgba(var(--accent-rgb), 0.15);
          color: var(--amber-main);
          border-color: rgba(var(--accent-rgb), 0.4);
          box-shadow: 0 0 12px rgba(var(--accent-rgb), 0.2);
        }

        /* Single-Line Row Table Styling */
        .table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .bank-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          background: var(--bg-input);
          table-layout: fixed;
        }

        .bank-table th, .bank-table td {
          padding: 0.75rem 0.9rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bank-table th {
          background: var(--bg-card);
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        /* Reclaimed 4-Column Width Allocations */
        .col-name { width: 44%; }
        .col-topic { width: 24%; }
        .col-diff { width: 14%; }
        .col-sheet { width: 18%; }
        .col-history { width: 18%; text-align: center; }
        .bank-table th.col-history, .bank-table td.col-history { text-align: center; }

        .sheets-tags-wrapper {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          overflow-x: auto;
        }

        /* Clickable Question Name Link */
        .q-name-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          max-width: 100%;
          transition: color 0.15s ease;
        }

        .q-name-link:hover {
          color: var(--amber-main);
          text-decoration: underline;
        }

        .sheet-tag-btn {
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.15rem 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          display: inline-block;
        }

        .sheet-tag-btn:hover {
          color: var(--amber-main);
          border-color: rgba(var(--accent-rgb), 0.4);
          background: rgba(var(--accent-rgb), 0.1);
        }

        /* Dot-based History Outcome Display with hollow outline placeholder dots */
        .history-dots-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: help;
          padding: 0.2rem 0;
          width: 100%;
        }

        .history-dot {
          width: 8px;
          height: 8px;
          min-width: 8px;
          min-height: 8px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          box-sizing: border-box;
          flex-shrink: 0;
          transition: transform 0.15s ease, opacity 0.15s ease;
          display: inline-block;
        }

        .history-dot:hover {
          transform: scale(1.4);
        }

        .history-dot.dot-empty {
          background: rgba(148, 163, 184, 0.15);
          border: 1.5px solid rgba(148, 163, 184, 0.5);
          box-shadow: none;
        }

        .history-dot.dot-solid {
          background: #10b981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
        }

        .history-dot.dot-ok {
          background: #3b82f6;
          box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
        }

        .history-dot.dot-shaky {
          background: #f59e0b;
          box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);
        }

        .history-dot.dot-gaveUp {
          background: #ef4444;
          box-shadow: 0 0 6px rgba(239, 68, 68, 0.5);
        }

        /* Explicit Edit Mode Row Actions */
        .edit-mode-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .icon-action-btn {
          background: transparent;
          color: var(--text-muted);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .icon-action-btn:hover {
          background: var(--bg-card);
          color: var(--text-primary);
        }

        .icon-action-btn.text-danger:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.15);
        }

        /* Modal & Multi-Select Sheet Chips */
        .modal-card {
          max-width: 540px;
          width: 100%;
          padding: 2rem;
        }

        .sheet-chips-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.75rem;
        }

        .sheet-select-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .sheet-select-chip:hover {
          border-color: rgba(var(--accent-rgb), 0.4);
          color: var(--text-primary);
        }

        .sheet-select-chip.selected {
          background: rgba(var(--accent-rgb), 0.15);
          border-color: rgba(var(--accent-rgb), 0.4);
          color: var(--amber-main);
          font-weight: 700;
        }

        .btn-link-action {
          background: transparent;
          border: none;
          color: var(--amber-main);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }

        .btn-link-action:hover {
          text-decoration: underline;
        }

        .destination-badge-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .match-counter-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .badge-match-found {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.78rem;
        }

        .badge-match-none {
          background: var(--bg-card);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
        }

        .form-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
          display: block;
          margin-top: 0.35rem;
        }

        .form-subtext code {
          background: var(--bg-card);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
          color: var(--amber-main);
        }

        .form-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .input-field-full {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.8rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          outline: none;
        }

        .input-field-full:focus {
          border-color: var(--amber-main);
        }

        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .text-xs { font-size: 0.75rem; }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .bank-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            padding: 1.25rem 1rem !important;
            gap: 1.25rem !important;
          }

          .bank-header {
            flex-direction: column;
            align-items: stretch !important;
            gap: 0.85rem !important;
          }

          .header-title-with-back {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .bank-header-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .bank-controls {
            flex-direction: column;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }

          .search-box {
            min-width: 100% !important;
            width: 100% !important;
          }

          .filters-row {
            width: 100%;
            justify-content: space-between;
          }

          .table-wrapper {
            overflow-x: auto;
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
          }

          .bank-table {
            min-width: 580px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var pt=[{id:`speedy`,name:`Speedy`,tag:`5 Easy`,quota:{Easy:5,Medium:0,Hard:0}},{id:`steady`,name:`Steady`,tag:`5 Medium`,quota:{Easy:0,Medium:5,Hard:0}},{id:`balanced`,name:`Balanced`,tag:`2E / 2M / 1H`,quota:{Easy:2,Medium:2,Hard:1}},{id:`grind`,name:`Grind`,tag:`1E / 2M / 2H`,quota:{Easy:1,Medium:2,Hard:2}},{id:`gauntlet`,name:`Gauntlet`,tag:`2M / 3H`,quota:{Easy:0,Medium:2,Hard:3}},{id:`custom`,name:`Custom`,tag:`? / ? / ?`,quota:null}];function mt(e,t){let n={Easy:e.Easy||0,Medium:e.Medium||0,Hard:e.Hard||0},r={Easy:t.Easy||0,Medium:t.Medium||0,Hard:t.Hard||0},i=n.Easy+n.Medium+n.Hard,a={Easy:Math.min(n.Easy,r.Easy),Medium:Math.min(n.Medium,r.Medium),Hard:Math.min(n.Hard,r.Hard)},o=i-(a.Easy+a.Medium+a.Hard),s=e=>{if(o<=0)return;let t=r[e]-a[e];if(t>0){let n=Math.min(o,t);a[e]+=n,o-=n}},c=n.Hard-a.Hard,l=n.Easy-a.Easy,u=n.Medium-a.Medium;return c>0&&(s(`Medium`),s(`Easy`)),l>0&&(s(`Medium`),s(`Hard`)),u>0&&(s(`Easy`),s(`Hard`)),o>0&&(s(`Medium`),s(`Easy`),s(`Hard`)),a}function ht({questions:e,settings:t={},onStartSprint:n}){let r=t.timeWeightsByDifficulty||{Easy:4,Medium:8,Hard:15},[i,a]=(0,_.useState)(`balanced`),[o,s]=(0,_.useState)({Easy:2,Medium:2,Hard:1}),[c,l]=(0,_.useState)(!1),u=(0,_.useMemo)(()=>{let t=new Set;return(e||[]).forEach(e=>{ct(e).forEach(e=>t.add(e))}),Array.from(t).sort()},[e]),[d,f]=(0,_.useState)(()=>{try{return localStorage.getItem(`sprintset_last_selected_sheet_v1`)||`ALL`}catch{return`ALL`}}),p=e=>{f(e);try{localStorage.setItem(`sprintset_last_selected_sheet_v1`,e)}catch{}};(0,_.useEffect)(()=>{d!==`ALL`&&u.length>0&&!u.includes(d)&&p(`ALL`)},[u,d]);let m=(0,_.useMemo)(()=>d===`ALL`?e:(e||[]).filter(e=>ct(e).includes(d)),[e,d]),h=(0,_.useMemo)(()=>{let e={Easy:0,Medium:0,Hard:0};return m.forEach(t=>{t.difficulty&&e[t.difficulty]!==void 0&&(e[t.difficulty]+=1)}),e},[m]),g=(0,_.useMemo)(()=>m.length,[m]),v=(0,_.useMemo)(()=>{let e={};return pt.forEach(t=>{if(t.id===`custom`){e.custom={disabled:!1,isAdapted:!1,effectiveQuota:o,displayTag:`? / ? / ?`,reason:``};return}let n=t.quota,r=(n.Easy||0)+(n.Medium||0)+(n.Hard||0);if(g<r)e[t.id]={disabled:!0,isAdapted:!1,effectiveQuota:n,displayTag:t.tag,reason:`Not enough questions in this sheet for this preset (requires ${r} questions, only ${g} available)`};else if(h.Easy>=(n.Easy||0)&&h.Medium>=(n.Medium||0)&&h.Hard>=(n.Hard||0))e[t.id]={disabled:!1,isAdapted:!1,effectiveQuota:n,displayTag:t.tag,reason:``};else{let r=mt(n,h),i=`${r.Easy}E / ${r.Medium}M / ${r.Hard}H`;e[t.id]={disabled:!1,isAdapted:!0,effectiveQuota:r,displayTag:i,reason:`Adapted to match available sheet question counts`}}}),e},[h,g,o]);(0,_.useEffect)(()=>{let e=v[i];if(e&&e.disabled){let e=pt.find(e=>!v[e.id]?.disabled);e&&a(e.id)}},[v,i]);let y=(0,_.useMemo)(()=>{let e=v[i];return e&&!e.disabled?e.effectiveQuota:i===`custom`?o:{Easy:2,Medium:2,Hard:1}},[i,v,o]),b=(y.Easy||0)+(y.Medium||0)+(y.Hard||0),x=(0,_.useMemo)(()=>{let e=y.Easy||0,t=y.Medium||0,n=y.Hard||0,i=e*(r.Easy||4)+t*(r.Medium||8)+n*(r.Hard||15),a=Math.round(i/5)*5;return Math.max(5,a||10)},[y,r]),[S,C]=(0,_.useState)(35),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{w||C(x)},[x,w]);let E=(0,_.useMemo)(()=>{let e=new Set(m.map(e=>e.topic||`General`));return Array.from(e).sort()},[m]),[D,O]=(0,_.useState)(E);(0,_.useEffect)(()=>{O(E)},[E]);let ee=(0,_.useMemo)(()=>m.filter(e=>D.length===0||D.includes(e.topic||`General`)),[m,D]),k=ee.length,te=e=>{D.includes(e)?O(D.filter(t=>t!==e)):O([...D,e])},j=()=>O([...E]),M=()=>O([]),P=()=>{if(b<=0){alert(`Please select at least 1 question for your sprint.`);return}if(k===0){alert(`No questions match your selected sheet and topic filters. Please expand your selection.`);return}let e=Xe();n({durationSec:S*60,seed:e,quota:y,totalQuestionsQuota:b,filters:{sheet:d,topics:D,presetId:i},matchingQuestions:ee})},I=S%60*6,L=S/60%12*30,ne=(0,_.useMemo)(()=>{let e=[];for(let t=0;t<12;t++){let n=(t*30-90)*(Math.PI/180),r=t%3==0,i=r?38:41,a=50+44*Math.cos(n),o=50+44*Math.sin(n),s=50+i*Math.cos(n),c=50+i*Math.sin(n);e.push({key:t,x1:a,y1:o,x2:s,y2:c,isMajor:r})}return e},[]);return(0,V.jsxs)(`div`,{className:`sprint-setup-container glass-card`,children:[(0,V.jsx)(`div`,{className:`setup-header`,children:(0,V.jsxs)(`div`,{className:`setup-title-group`,children:[(0,V.jsx)(`div`,{className:`setup-badge`,children:(0,V.jsx)(Ke,{size:22,className:`text-amber`})}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{className:`setup-title`,children:`Start a DSA Sprint`}),(0,V.jsx)(`p`,{className:`setup-subtitle`,children:`Select a question sheet scope, difficulty preset, adjust duration, and launch.`})]})]})}),(0,V.jsx)(`div`,{className:`sheet-scope-prominent-card glass-card`,children:(0,V.jsxs)(`div`,{className:`sheet-scope-header`,children:[(0,V.jsxs)(`div`,{className:`sheet-scope-title-flex`,children:[(0,V.jsx)(A,{size:20,className:`text-amber`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:`sheet-scope-heading`,children:`Question Sheet Scope`}),(0,V.jsx)(`p`,{className:`sheet-scope-subtext`,children:`Select a specific sheet to scope question availability and preset distribution`})]})]}),(0,V.jsx)(`div`,{className:`sheet-scope-dropdown-container`,children:(0,V.jsxs)(`select`,{className:`sheet-scope-prominent-select`,value:d,onChange:e=>p(e.target.value),children:[(0,V.jsxs)(`option`,{value:`ALL`,children:[`All Sheets (`,e.length,` total questions)`]}),u.map(t=>{let n=e.filter(e=>ct(e).includes(t)).length;return(0,V.jsxs)(`option`,{value:t,children:[t,` (`,n,` questions)`]},t)})]})})]})}),(0,V.jsxs)(`div`,{className:`setup-two-col-grid`,children:[(0,V.jsxs)(`div`,{className:`col-left`,children:[(0,V.jsxs)(`label`,{className:`section-label mb-3`,children:[(0,V.jsx)(ve,{size:16}),(0,V.jsxs)(`span`,{children:[`Sprint Distribution (`,b,` questions)`]})]}),(0,V.jsx)(`div`,{className:`square-presets-grid`,children:pt.map(e=>{let t=i===e.id,n=Ze[e.id]||Ke,{disabled:r,isAdapted:o,displayTag:s,reason:c}=v[e.id]||{},l=`Adapted — ${d===`ALL`?`Current Pool`:d} doesn't have enough questions for the standard ${e.name} quota (${e.tag})`;return(0,V.jsxs)(`button`,{type:`button`,disabled:r,title:r?c:o?l:``,className:`square-preset-card ${t?`selected`:``} ${r?`preset-disabled`:``} ${o?`preset-adapted`:``}`,onClick:()=>{r||a(e.id)},children:[(0,V.jsx)(`div`,{className:`preset-icon-container`,children:(0,V.jsx)(n,{size:30,className:`preset-icon-theme ${t?`icon-selected`:`icon-unselected`}`})}),(0,V.jsxs)(`span`,{className:`preset-name`,children:[e.name,o?`*`:``]}),(0,V.jsx)(`span`,{className:`preset-compact-tag`,children:s})]},e.id)})})]}),(0,V.jsxs)(`div`,{className:`col-right`,children:[(0,V.jsxs)(`div`,{className:`section-header-flex mb-3`,children:[(0,V.jsxs)(`label`,{className:`section-label`,children:[(0,V.jsx)(R,{size:16}),(0,V.jsx)(`span`,{children:`Sprint Duration`})]}),(0,V.jsxs)(`span`,{className:`suggested-tag-pill`,children:[`Suggested: `,x,` min`]})]}),(0,V.jsx)(`div`,{className:`duration-expanded-panel glass-card`,children:(0,V.jsxs)(`div`,{className:`expanded-clock-body`,children:[(0,V.jsx)(`div`,{className:`clock-graphic-large`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`clock-svg`,children:[(0,V.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,className:`clock-face`}),ne.map(e=>(0,V.jsx)(`line`,{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,className:e.isMajor?`clock-tick-major`:`clock-tick-minor`},e.key)),(0,V.jsx)(`text`,{x:`50`,y:`19`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`12`}),(0,V.jsx)(`text`,{x:`83.5`,y:`53`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`3`}),(0,V.jsx)(`text`,{x:`50`,y:`86.5`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`6`}),(0,V.jsx)(`text`,{x:`16.5`,y:`53`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`9`}),(0,V.jsx)(`line`,{x1:`50`,y1:`50`,x2:`50`,y2:`28`,className:`clock-hour-hand`,transform:`rotate(${L} 50 50)`}),(0,V.jsx)(`line`,{x1:`50`,y1:`50`,x2:`50`,y2:`20`,className:`clock-minute-hand`,transform:`rotate(${I} 50 50)`}),(0,V.jsx)(`circle`,{cx:`50`,cy:`50`,r:`4`,className:`clock-center`})]})}),(0,V.jsxs)(`div`,{className:`duration-input-controls`,children:[(0,V.jsxs)(`div`,{className:`input-unit-flex`,children:[(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`300`,value:S,onChange:e=>{C(parseInt(e.target.value,10)||15),T(!0)},className:`duration-input-prominent`}),(0,V.jsx)(`span`,{className:`duration-unit-lbl`,children:`minutes`})]}),w&&(0,V.jsxs)(`button`,{type:`button`,className:`btn-reset-suggested`,onClick:()=>{C(x),T(!1)},children:[`Reset to Suggested (`,x,`m)`]})]})]})})]})]}),i===`custom`&&(0,V.jsxs)(`div`,{className:`custom-steppers-fullrow glass-card`,children:[(0,V.jsx)(`h4`,{className:`stepper-row-title`,children:`Custom Question Distribution`}),(0,V.jsxs)(`div`,{className:`horizontal-steppers-row`,children:[(0,V.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,V.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,V.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Easy:Math.max(0,e.Easy-1)})),children:`-`}),(0,V.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Easy,onChange:e=>s({...o,Easy:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Easy:e.Easy+1})),children:`+`})]}),(0,V.jsx)(`span`,{className:`unit-label`,children:`questions`})]}),(0,V.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,V.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,V.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Medium:Math.max(0,e.Medium-1)})),children:`-`}),(0,V.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Medium,onChange:e=>s({...o,Medium:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Medium:e.Medium+1})),children:`+`})]}),(0,V.jsx)(`span`,{className:`unit-label`,children:`questions`})]}),(0,V.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,V.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,V.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Hard:Math.max(0,e.Hard-1)})),children:`-`}),(0,V.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Hard,onChange:e=>s({...o,Hard:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,V.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Hard:e.Hard+1})),children:`+`})]}),(0,V.jsx)(`span`,{className:`unit-label`,children:`questions`})]})]})]}),(0,V.jsx)(`div`,{className:`setup-full-width-topics`,children:(0,V.jsxs)(`section`,{className:`setup-section`,children:[(0,V.jsxs)(`div`,{className:`section-header-flex`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`topics-toggle-btn`,onClick:()=>l(!c),children:[(0,V.jsxs)(`div`,{className:`toggle-left`,children:[(0,V.jsx)(he,{size:16}),(0,V.jsxs)(`span`,{className:`font-semibold`,children:[`Focus Topics (`,D.length,`/`,E.length,` Selected)`]})]}),c?(0,V.jsx)(F,{size:18}):(0,V.jsx)(N,{size:18})]}),c&&(0,V.jsxs)(`div`,{className:`topic-chip-actions`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn-chip-action`,onClick:j,children:`Select All`}),(0,V.jsx)(`button`,{type:`button`,className:`btn-chip-action`,onClick:M,children:`Clear`})]})]}),c&&(0,V.jsx)(`div`,{className:`topics-grid-fullwidth mt-3`,children:E.map(e=>{let t=D.includes(e);return(0,V.jsxs)(`button`,{type:`button`,className:`topic-chip ${t?`selected`:``}`,onClick:()=>te(e),children:[t?(0,V.jsx)(Ie,{size:14}):(0,V.jsx)(Le,{size:14}),(0,V.jsx)(`span`,{children:$e(e)})]},e)})})]})}),(0,V.jsxs)(`div`,{className:`setup-footer`,children:[(0,V.jsxs)(`div`,{className:`pool-info`,children:[(0,V.jsx)(`span`,{className:`pool-count`,children:b}),(0,V.jsxs)(`span`,{className:`pool-label`,children:[`questions (`,S,` mins)`]})]}),(0,V.jsxs)(`button`,{className:`btn btn-primary btn-start`,onClick:P,disabled:b<=0||k===0,children:[(0,V.jsx)(Ee,{size:18}),(0,V.jsx)(`span`,{children:`Start Sprint`})]})]}),(0,V.jsx)(`style`,{children:`
        .sprint-setup-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .setup-header {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        /* Prominent Sheet Scope Card */
        .sheet-scope-prominent-card {
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          transition: border-color var(--transition-fast);
        }

        .sheet-scope-prominent-card:hover {
          border-color: rgba(var(--accent-rgb), 0.35);
        }

        .sheet-scope-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .sheet-scope-title-flex {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sheet-scope-heading {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sheet-scope-subtext {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .sheet-scope-dropdown-container {
          min-width: 260px;
        }

        .sheet-scope-prominent-select {
          width: 100%;
          appearance: none;
          background: var(--bg-input);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          padding: 0.55rem 2.25rem 0.55rem 0.9rem;
          cursor: pointer;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
        }

        .sheet-scope-prominent-select:hover,
        .sheet-scope-prominent-select:focus {
          border-color: var(--amber-main);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
        }

        .sheet-scope-prominent-select option {
          background: #161b26;
          color: var(--text-primary);
          font-weight: 600;
          padding: 0.5rem;
        }

        .setup-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .setup-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(var(--accent-rgb), 0.12);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .setup-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
        }

        .setup-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Two-Column Equal Height Layout */
        .setup-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .col-left, .col-right {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .section-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .mb-3 { margin-bottom: 0.75rem; }
        .mt-3 { margin-top: 0.75rem; }

        /* Square Preset Cards Grid */
        .square-presets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          flex: 1;
        }

        .square-preset-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.1rem 0.65rem;
          border-radius: var(--radius-lg);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
          gap: 0.4rem;
        }

        .square-preset-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--bg-card-hover);
        }

        .square-preset-card.selected {
          border-color: var(--amber-main);
          background: rgba(var(--accent-rgb), 0.12);
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.2);
        }

        .preset-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preset-icon-theme {
          transition: color 0.2s ease;
        }

        .icon-unselected {
          color: var(--text-secondary);
        }

        .icon-selected {
          color: var(--amber-main);
        }

        .square-preset-card.selected .preset-icon-theme {
          animation: gentlePop 0.35s ease;
        }

        @keyframes gentlePop {
          0% { transform: scale(0.85); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .preset-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .preset-compact-tag {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .square-preset-card.selected .preset-compact-tag {
          color: var(--amber-main);
        }

        /* Duration Panel & Suggested Pill Badge */
        .suggested-tag-pill {
          font-size: 0.78rem;
          color: var(--amber-main);
          font-weight: 600;
          background: rgba(var(--accent-rgb), 0.12);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .duration-expanded-panel {
          padding: 1.25rem;
          background: var(--bg-input);
          border-radius: var(--radius-lg);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .expanded-clock-body {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 0.5rem 0;
        }

        .clock-graphic-large {
          width: 180px;
          height: 180px;
          flex-shrink: 0;
        }

        .clock-svg {
          width: 100%;
          height: 100%;
        }

        .clock-face {
          fill: var(--bg-primary);
          stroke: var(--border-subtle);
          stroke-width: 3.5;
        }

        .clock-tick-major {
          stroke: var(--border-subtle);
          stroke-width: 2;
          stroke-linecap: round;
        }

        .clock-tick-minor {
          stroke: var(--border-subtle);
          stroke-width: 1.2;
          stroke-linecap: round;
          opacity: 0.5;
        }

        .clock-numeral-subtle {
          fill: var(--text-muted);
          font-family: var(--font-mono);
          font-weight: 400;
          font-size: 7px;
          opacity: 0.7;
        }

        .clock-hour-hand {
          stroke: var(--amber-main);
          stroke-width: 4.5;
          stroke-linecap: round;
          transition: transform 0.3s ease;
        }

        .clock-minute-hand {
          stroke: var(--gold-accent);
          stroke-width: 3.5;
          stroke-linecap: round;
          transition: transform 0.3s ease;
        }

        .clock-center {
          fill: var(--amber-main);
        }

        .duration-input-controls {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .input-unit-flex {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .duration-input-prominent {
          width: 95px;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.55rem 0.8rem;
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--amber-main);
          outline: none;
          text-align: center;
        }

        .duration-input-prominent:focus {
          border-color: var(--amber-main);
        }

        .duration-unit-lbl {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .btn-reset-suggested {
          background: transparent;
          color: var(--text-muted);
          font-size: 0.75rem;
          text-decoration: underline;
          text-align: left;
        }

        /* Full Row Custom Steppers Panel */
        .custom-steppers-fullrow {
          padding: 1.1rem 1.5rem;
          background: var(--bg-input);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stepper-row-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .horizontal-steppers-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .stepper-item-inline {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .stepper-controls-tight {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.4rem;
        }

        .stepper-btn {
          background: transparent;
          color: var(--text-primary);
          font-weight: 700;
          width: 24px;
          height: 24px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          cursor: pointer;
        }

        .stepper-btn:hover {
          background: var(--bg-card-hover);
        }

        .stepper-input-num {
          width: 40px;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          text-align: center;
          outline: none;
        }

        .unit-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Full Width Focus Topics Section */
        .setup-full-width-topics {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
        }

        .topics-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem 0;
        }

        .toggle-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
        }

        .topic-chip-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-chip-action {
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }

        .btn-chip-action:hover {
          color: var(--text-primary);
          background: var(--bg-card-hover);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .topics-grid-fullwidth {
          display: grid;

        .square-preset-card.preset-disabled {
          opacity: 0.35;
          cursor: not-allowed;
          filter: grayscale(0.85);
          border-color: var(--border-subtle) !important;
          box-shadow: none !important;
        }
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .topic-chip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .topic-chip.selected {
          background: rgba(59, 130, 246, 0.12);
          border-color: var(--accent-blue);
          color: #60a5fa;
        }

        .setup-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.25rem;
        }

        .pool-info {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }

        .pool-count {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--amber-main);
        }

        .pool-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-start {
          padding: 0.85rem 2.25rem;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .sprint-setup-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            padding: 1.25rem 1rem !important;
            gap: 1.25rem !important;
          }
          .setup-two-col-grid {
            grid-template-columns: 1fr;
          }
          .square-presets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .expanded-clock-body {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `})]})}var gt={never:10,gave_up:8,shaky:5,ok:2,solid:.5};function _t(e,t){let n=t[e];return!n||!n.status&&!n.confidence?gt.never:n.status===`gave_up`?gt.gave_up:n.confidence===`shaky`?gt.shaky:n.confidence===`ok`?gt.ok:n.confidence===`solid`?gt.solid:gt.never}function vt(e,t,n,r){let i=Ye(r),a=[],o=new Set;return[`Easy`,`Medium`,`Hard`].forEach(r=>{let s=t[r]||0;s<=0||xt(bt(e.filter(e=>e.difficulty===r&&!o.has(e.id)),s,n,i),i).forEach(e=>{o.add(e.id),a.push(e)})}),a}function yt(e,t,n,r,i){let a=Ye(i+Date.now()),o=t.filter(t=>t.difficulty===e&&!n.has(t.id));if(o.length===0){let n=t.filter(t=>t.difficulty===e);return n.length===0?null:n[Math.floor(a()*n.length)]}return bt(o,1,r,a)[0]||o[0]}function bt(e,t,n,r){if(!e||e.length===0)return[];let i=e.map(e=>({...e,weight:_t(e.id,n)})),a=[],o=Math.min(t,i.length);for(let e=0;e<o;e++){let e=i.reduce((e,t)=>e+t.weight,0),t=r()*e,n=0;for(let e=0;e<i.length;e++)if(t-=i[e].weight,t<=0){n=e;break}a.push(i[n]),i.splice(n,1)}return a}function xt(e,t){let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}var St=e=>{let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`},Ct=e=>e&&e.link&&e.link.trim()!==``?e.link:`https://www.google.com/search?q=${encodeURIComponent(`${e?e.name:``} leetcode`)}`;function wt({activeSprintState:e,settings:t,allQuestions:n=[],questionStates:r={},onUpdateActiveSprintState:i,onFinishSprint:a,onCancelSprint:o}){let{sessionData:s,currentIndex:c=0,attempts:l=0,results:u=[],preCountdownDone:d=!1,questionStartElapsedSec:f=0}=e||{},{durationSec:p,queue:m=[],seed:h,totalPausedMs:g=0,isPaused:v=!1,pauseStartedAtMs:y=null}=s||{},[b,x]=(0,_.useState)(d?0:3),[S,C]=(0,_.useState)(s?.startedAtMs||Date.now()),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(l||0);(0,_.useEffect)(()=>{if(b>0){let e=setInterval(()=>{x(t=>t<=1?(clearInterval(e),0):t-1)},750);return()=>clearInterval(e)}if(b===0&&!d){let t=Date.now();C(t),i({...e,preCountdownDone:!0,sessionData:{...s,startedAtMs:t}})}},[b,d]);let O=()=>{if(b>0)return p;let e=0,t=s?.startedAtMs||S;e=v&&y?y-t-g:Date.now()-t-g;let n=Math.floor(e/1e3);return Math.max(0,p-n)},[ee,A]=(0,_.useState)(()=>O()),[te,j]=(0,_.useState)(!1),[N,P]=(0,_.useState)(`none`),[F,ne]=(0,_.useState)(!1),[z,ie]=(0,_.useState)(!1),[ae,oe]=(0,_.useState)(!1),[ce,le]=(0,_.useState)(!1),[ue,fe]=(0,_.useState)(!1),pe=(0,_.useRef)(!1),me=(0,_.useRef)(!1),[he,ge]=(0,_.useState)(!1),B=m[c];(0,_.useEffect)(()=>{if(v||b>0||w)return;let e=setInterval(()=>{let t=O();A(t),t<=300&&t>0&&!pe.current&&(pe.current=!0,oe(!0),fe(!0),setTimeout(()=>fe(!1),4e3)),t<=0&&(clearInterval(e),me.current||(me.current=!0,le(!0),setTimeout(()=>{le(!1),Ae(u,!1)},1200)))},1e3);return()=>clearInterval(e)},[S,s?.startedAtMs,p,g,v,y,b,u,w]);let _e=()=>{if(v){let t=Date.now()-(y||Date.now());i({...e,sessionData:{...s,isPaused:!1,pauseStartedAtMs:null,totalPausedMs:g+t}})}else i({...e,sessionData:{...s,isPaused:!0,pauseStartedAtMs:Date.now()}})},ye=()=>{let t=l+1;ie(!0),ge(!0),setTimeout(()=>ie(!1),400),setTimeout(()=>ge(!1),500),i({...e,attempts:t})},xe=()=>{!B||N!==`none`||(P(`too-easy`),setTimeout(()=>{P(`none`);let t=new Set(m.map(e=>e.id)),a=yt(B.difficulty,n,t,r,h);if(a){let t=[...m];t[c]=a,i({...e,attempts:0,questionStartElapsedSec:Math.floor((Date.now()-(s?.startedAtMs||S)-g)/1e3),sessionData:{...s,queue:t}})}},350))},Ce=()=>{N===`none`&&(P(`solved`),ne(!0),setTimeout(()=>ne(!1),400),setTimeout(()=>{P(`none`);let t=s?.startedAtMs||S,n=Math.floor((Date.now()-t-g)/1e3),r=Math.max(1,n-(e?.questionStartElapsedSec||0)),i={questionId:B.id,questionName:B.name,questionLink:B.link||``,topic:B.topic,difficulty:B.difficulty,status:`done`,attempts:l,confidence:null,timeSec:r};Te(i)},450))},we=()=>{N===`none`&&(P(`gave-up`),setTimeout(()=>{P(`none`);let t=s?.startedAtMs||S,n=Math.floor((Date.now()-t-g)/1e3),r=Math.max(1,n-(e?.questionStartElapsedSec||0)),i={questionId:B.id,questionName:B.name,questionLink:B.link||``,topic:B.topic,difficulty:B.difficulty,status:`gave_up`,attempts:l,confidence:null,timeSec:r};Te(i)},400))},Te=t=>{let n=[...u,t];c+1<m.length?i({...e,currentIndex:c+1,attempts:0,results:n,questionStartElapsedSec:Math.floor((Date.now()-(s?.startedAtMs||S)-g)/1e3)}):Ae(n)},ke=()=>{Ae(u,!0)},Ae=(n,r=!1,o=null)=>{let c=O(),u=p-c,d=[...n];if(d.length<m.length&&o===null&&!r){let t=m[d.length];if(t){let a=s?.startedAtMs||S,o=Math.floor((Date.now()-a-g)/1e3),c=Math.max(0,o-(f||0));if(c>=3){T({activeQ:t,activeTimeSec:c,isEarly:r,finalResults:n,totalDurationTaken:u}),D(l||0),i({...e,isCutoffModalOpen:!0});return}}}if(r&&d.length<m.length&&o===null){let e=m[d.length];if(e){let n=s?.startedAtMs||S,r=Math.floor((Date.now()-n-g)/1e3),i=Math.max(0,r-(f||0));if(i>0){let n=i>(t?.timeWeightsByDifficulty?.[e.difficulty]||8)*60;d.push({questionId:e.id,questionName:e.name,questionLink:e.link||``,topic:e.topic,difficulty:e.difficulty,status:`unsolved`,attempts:l||0,confidence:n?`shaky`:null,timeSec:i})}}}if(o&&w){let{activeQ:e,activeTimeSec:n}=w,r=o.status||`unsolved`,i=null;i=r===`done`?et({status:`done`,attempts:o.attempts,timeSec:n,difficulty:e.difficulty},t):r===`gave_up`||n>(t?.timeWeightsByDifficulty?.[e.difficulty]||8)*60?`shaky`:null,d.push({questionId:e.id,questionName:e.name,questionLink:e.link||``,topic:e.topic,difficulty:e.difficulty,status:r,attempts:o.attempts||0,confidence:i,timeSec:n})}for(let e=d.length;e<m.length;e++){let t=m[e];t&&d.push({questionId:t.id,questionName:t.name,questionLink:t.link||``,topic:t.topic,difficulty:t.difficulty,status:`not_reached`,attempts:0,confidence:null,timeSec:0})}let _=0;d.forEach(e=>{if(e.status===`done`){let n=t.pointsByDifficulty[e.difficulty]||20;_+=n}});let v=m.reduce((e,n)=>e+(t.pointsByDifficulty[n.difficulty]||20),0);a({seed:h,startedAt:new Date(s?.startedAtMs||S).toISOString(),durationSec:p,actualDurationSec:u,results:d,points:_,maxPossiblePoints:v,totalQuota:m.length,isEndedEarly:r})},Me=u.reduce((e,n)=>n.status===`done`?e+(t.pointsByDifficulty[n.difficulty]||20):e,0),Ne=B?t.pointsByDifficulty[B.difficulty]||20:0;return(0,V.jsxs)(`div`,{className:`active-sprint-container`,children:[(0,V.jsxs)(`div`,{className:`unified-sprint-card glass-card ${N===`solved`?`pulse-success-glow`:``} ${N===`too-easy`?`pulse-blue-glow`:``} ${N===`gave-up`?`pulse-red-glow`:``} ${he?`pulse-amber-glow`:``}`,children:[b>0&&(0,V.jsx)(`div`,{className:`pre-countdown-overlay`,children:(0,V.jsxs)(`div`,{className:`pre-countdown-content`,children:[(0,V.jsx)(`span`,{className:`pre-countdown-num`,children:b}),(0,V.jsx)(`span`,{className:`pre-countdown-label`,children:`GET READY`}),o&&(0,V.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm mt-3`,onClick:o,style:{opacity:.9,marginTop:`1rem`},children:[(0,V.jsx)(Ge,{size:14}),` Cancel Sprint`]})]})}),w&&(0,V.jsx)(`div`,{className:`cutoff-modal-overlay`,children:(0,V.jsxs)(`div`,{className:`cutoff-modal-content glass-card`,children:[(0,V.jsx)(`div`,{className:`cutoff-modal-icon-ring`,children:(0,V.jsx)(R,{size:28,style:{color:`var(--amber-main)`}})}),(0,V.jsx)(`h3`,{className:`cutoff-modal-title`,children:`Sprint Time Expired!`}),(0,V.jsxs)(`p`,{className:`cutoff-modal-sub`,children:[`You were actively working on `,(0,V.jsx)(`span`,{className:`highlight-q-name`,children:w.activeQ.name}),` (`,St(w.activeTimeSec),` spent). Did you manage to submit your code before the clock hit 0:00?`]}),(0,V.jsxs)(`div`,{className:`cutoff-modal-stepper-row`,children:[(0,V.jsx)(`span`,{className:`cutoff-stepper-label`,children:`Wrong Attempts Logged:`}),(0,V.jsxs)(`div`,{className:`cutoff-stepper-controls`,children:[(0,V.jsx)(`button`,{type:`button`,className:`btn-stepper-circle`,onClick:()=>D(e=>Math.max(0,e-1)),title:`Decrease wrong attempts`,children:(0,V.jsx)(be,{size:14})}),(0,V.jsx)(`span`,{className:`cutoff-attempts-display`,children:E}),(0,V.jsx)(`button`,{type:`button`,className:`btn-stepper-circle`,onClick:()=>D(e=>e+1),title:`Increase wrong attempts`,children:(0,V.jsx)(De,{size:14})})]})]}),(0,V.jsxs)(`div`,{className:`cutoff-modal-btn-group`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`cutoff-btn cutoff-btn-solved`,onClick:()=>{let e={status:`done`,attempts:E};Ae(w.finalResults,w.isEarly,e),T(null)},children:[(0,V.jsx)(L,{size:16}),(0,V.jsx)(`span`,{children:`Yes, Solved!`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`cutoff-btn cutoff-btn-gaveup`,onClick:()=>{let e={status:`gave_up`,attempts:E};Ae(w.finalResults,w.isEarly,e),T(null)},children:[(0,V.jsx)(re,{size:16}),(0,V.jsx)(`span`,{children:`Gave Up`})]}),(0,V.jsxs)(`button`,{type:`button`,className:`cutoff-btn cutoff-btn-unsolved`,onClick:()=>{let e={status:`unsolved`,attempts:E};Ae(w.finalResults,w.isEarly,e),T(null)},children:[(0,V.jsx)(R,{size:16}),(0,V.jsx)(`span`,{children:`Didn't Finish`})]})]})]})}),N===`solved`&&(0,V.jsx)(`div`,{className:`floating-action-toast toast-solved`,children:(0,V.jsxs)(`span`,{children:[`+`,Ne,` Pts!`]})}),he&&(0,V.jsx)(`div`,{className:`floating-action-toast toast-wrong`,children:(0,V.jsx)(`span`,{children:`Wrong Attempt`})}),N===`too-easy`&&(0,V.jsx)(`div`,{className:`floating-action-toast toast-easy`,children:(0,V.jsx)(`span`,{children:`Swapped!`})}),N===`gave-up`&&(0,V.jsx)(`div`,{className:`floating-action-toast toast-gaveup`,children:(0,V.jsx)(`span`,{children:`Skipped`})}),ce&&(0,V.jsx)(`div`,{className:`times-up-overlay`,children:(0,V.jsxs)(`div`,{className:`times-up-content`,children:[(0,V.jsx)(R,{size:48,className:`times-up-icon`}),(0,V.jsx)(`span`,{className:`times-up-text`,children:`TIME'S UP`})]})}),ue&&(0,V.jsxs)(`div`,{className:`low-time-toast`,children:[(0,V.jsx)(Ve,{size:16}),(0,V.jsx)(`span`,{children:`5 minutes remaining!`})]}),(0,V.jsxs)(`div`,{className:`top-control-bar`,children:[(0,V.jsxs)(`div`,{className:`top-left-sprint-metrics`,children:[(0,V.jsxs)(`div`,{className:`sprint-metric-pill`,title:`Sprint Progress`,children:[(0,V.jsx)(ve,{size:15,className:`text-muted flex-shrink-0`}),(0,V.jsxs)(`span`,{children:[`Q `,(0,V.jsx)(`strong`,{children:c+1}),` of `,(0,V.jsx)(`strong`,{children:m.length})]})]}),(0,V.jsxs)(`div`,{className:`sprint-metric-pill pts-pill-styled`,title:`Session Points Earned`,children:[(0,V.jsx)(k,{size:16,className:`text-amber flex-shrink-0`}),(0,V.jsxs)(`strong`,{className:`text-amber ${F?`counter-tween-pop`:``}`,children:[`+`,Me,` pts`]})]})]}),(0,V.jsxs)(`div`,{className:`top-icon-controls`,children:[(0,V.jsx)(`button`,{className:`icon-btn-ctrl ${v?`btn-paused`:``}`,onClick:_e,title:v?`Resume Sprint`:`Pause Sprint`,children:v?(0,V.jsx)(Ee,{size:16}):(0,V.jsx)(Se,{size:16})}),(0,V.jsx)(`button`,{className:`icon-btn-ctrl btn-stop-danger`,onClick:()=>j(!0),title:`End Sprint Early`,children:(0,V.jsx)(Le,{size:14})})]})]}),(0,V.jsxs)(`div`,{className:`sprint-middle-zone`,children:[(0,V.jsx)(`div`,{className:`ringless-timer-centered`,children:(0,V.jsx)(`div`,{className:`time-display-massive-focal ${v?`timer-paused-blink`:``} ${ae&&!v?`timer-low-time`:``} ${ce?`timer-times-up`:``}`,children:St(ee)})}),B?(0,V.jsxs)(`div`,{className:`divider-question-wrapper`,children:[(0,V.jsx)(`hr`,{className:`timer-question-divider`}),(0,V.jsx)(`h2`,{className:`unified-question-title`,children:B.name}),(0,V.jsxs)(`div`,{className:`per-question-meta-row`,children:[(0,V.jsxs)(`a`,{href:Ct(B),target:`_blank`,rel:`noopener noreferrer`,className:`per-q-pill link-per-q-neutral`,title:B.link?`Open Problem Page`:`Search Problem on Google`,children:[(0,V.jsx)(se,{size:13,className:`text-muted`}),(0,V.jsx)(`span`,{className:`text-secondary font-semibold`,children:`Link`})]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`div`,{className:`per-q-pill pts-per-q`,children:[(0,V.jsx)(Ke,{size:13,className:`text-amber`}),(0,V.jsx)(`span`,{children:(0,V.jsxs)(`strong`,{className:`text-gold`,children:[`+`,Ne,` pts`]})})]}),(0,V.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,V.jsxs)(`div`,{className:`per-q-pill attempts-per-q`,children:[(0,V.jsx)(je,{size:13,className:`text-muted`}),(0,V.jsxs)(`span`,{children:[`Attempts: `,(0,V.jsx)(`strong`,{className:`text-primary ${z?`counter-tween-pop`:``}`,children:l+1})]})]})]})]}):(0,V.jsxs)(`div`,{className:`empty-state py-8`,children:[(0,V.jsx)(`h3`,{children:`Sprint Queue Complete!`}),(0,V.jsx)(`button`,{className:`btn btn-primary mt-4`,onClick:ke,children:`View Sprint Summary`})]})]}),B&&(0,V.jsxs)(`div`,{className:`sprint-bottom-actions`,children:[(0,V.jsx)(`div`,{className:`primary-done-wrapper`,children:(0,V.jsxs)(`button`,{className:`btn-done-primary ${N===`solved`?`btn-anim-flash`:``}`,onClick:Ce,disabled:N!==`none`||v,children:[N===`solved`?(0,V.jsx)(M,{size:36,className:`check-anim-scale`}):(0,V.jsx)(L,{size:26}),(0,V.jsx)(`span`,{children:N===`solved`?`Solved!`:`Solved`})]})}),(0,V.jsxs)(`div`,{className:`secondary-actions-compact-row`,children:[(0,V.jsxs)(`button`,{className:`compact-sec-btn attempt-btn ${he?`btn-flash-amber`:``}`,onClick:ye,disabled:v,title:`Record an incorrect submission (+1 attempt)`,children:[(0,V.jsx)(I,{size:14}),(0,V.jsx)(`span`,{children:`+1 Wrong`})]}),(0,V.jsxs)(`button`,{className:`compact-sec-btn easy-btn`,onClick:xe,disabled:v,title:`Pull a replacement question for this slot`,children:[(0,V.jsx)(Oe,{size:14}),(0,V.jsx)(`span`,{children:`Too Easy`})]}),(0,V.jsxs)(`button`,{className:`compact-sec-btn gaveup-btn`,onClick:we,disabled:v,title:`Gave up / Couldn't solve`,children:[(0,V.jsx)(de,{size:14}),(0,V.jsx)(`span`,{children:`Gave Up`})]})]})]})]}),te&&(0,V.jsx)(`div`,{className:`cutoff-modal-overlay`,onClick:()=>j(!1),children:(0,V.jsxs)(`div`,{className:`cutoff-modal-content confirm-modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,V.jsx)(`div`,{className:`cutoff-modal-icon-ring icon-ring-danger`,children:(0,V.jsx)(Ve,{size:28,style:{color:`#ef4444`}})}),(0,V.jsx)(`h3`,{className:`cutoff-modal-title`,children:`End Sprint Early?`}),(0,V.jsx)(`p`,{className:`cutoff-modal-sub`,children:`Your current progress and points earned in this sprint will be saved in your session history.`}),(0,V.jsxs)(`div`,{className:`cutoff-modal-btn-group`,children:[(0,V.jsx)(`button`,{type:`button`,className:`cutoff-btn cutoff-btn-secondary`,onClick:()=>j(!1),children:`Continue Sprint`}),(0,V.jsx)(`button`,{type:`button`,className:`cutoff-btn cutoff-btn-gaveup`,onClick:ke,children:`End Sprint`})]})]})}),(0,V.jsx)(`style`,{children:`
        .active-sprint-container {
          max-width: 1100px;
          margin: 1rem auto;
          min-height: calc(100vh - 140px);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .unified-sprint-card {
          flex: 1;
          padding: 2.5rem 2.25rem 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .sprint-middle-zone {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin: 0.5rem 0;
        }

        .ringless-timer-centered {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .sprint-bottom-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        /* Pre-Sprint 3-2-1 Heavy Blur Overlay */
        .pre-countdown-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(9, 11, 16, 0.96);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border-radius: var(--radius-lg);
          transition: background 0.3s ease;
        }

        [data-theme="light"] .pre-countdown-overlay {
          background: rgba(248, 250, 252, 0.96);
        }

        /* Post-Sprint Cut-Off Interstitial Modal */
        .cutoff-modal-overlay {
          position: absolute;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(9, 11, 16, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 1.5rem;
          transition: background 0.3s ease;
        }

        [data-theme="light"] .cutoff-modal-overlay {
          background: rgba(248, 250, 252, 0.92);
        }

        .cutoff-modal-content {
          max-width: 500px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.25rem 2rem;
          gap: 1.25rem;
          border: 1px solid rgba(var(--accent-rgb), 0.35);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 35px rgba(var(--accent-rgb), 0.15);
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: var(--radius-lg);
          color: var(--text-primary);
        }

        [data-theme="light"] .cutoff-modal-content {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(var(--accent-rgb), 0.15);
        }

        .cutoff-modal-icon-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(var(--accent-rgb), 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.2);
        }

        .cutoff-modal-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .cutoff-modal-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .highlight-q-name {
          color: var(--amber-main);
          font-weight: 700;
          background: rgba(var(--accent-rgb), 0.12);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
        }

        .cutoff-modal-stepper-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
        }

        .cutoff-stepper-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .cutoff-stepper-controls {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .btn-stepper-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-stepper-circle:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-glow);
          transform: translateY(-1px);
        }

        .cutoff-attempts-display {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.15rem;
          min-width: 24px;
          text-align: center;
          color: var(--amber-main);
        }

        .cutoff-modal-btn-group {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        .cutoff-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.8rem 0.5rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cutoff-btn-solved {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          border: 1px solid rgba(16, 185, 129, 0.4);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }

        .cutoff-btn-solved:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
        }

        .cutoff-btn-gaveup {
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.35);
        }

        .cutoff-btn-gaveup:hover {
          background: rgba(239, 68, 68, 0.22);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.25);
        }

        .cutoff-btn-unsolved {
          background: rgba(var(--accent-rgb), 0.12);
          color: var(--amber-main);
          border: 1px solid rgba(var(--accent-rgb), 0.35);
        }

        .cutoff-btn-unsolved:hover {
          background: rgba(var(--accent-rgb), 0.22);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.25);
        }

        .cutoff-btn-secondary {
          background: var(--bg-input);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
        }

        .cutoff-btn-secondary:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-glow);
          transform: translateY(-2px);
        }

        .icon-ring-danger {
          background: rgba(239, 68, 68, 0.12) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.2) !important;
        }

        .pre-countdown-content {
          position: relative;
          z-index: 101;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .pre-countdown-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(11rem, 22vw, 18rem);
          color: var(--amber-main);
          line-height: 0.95;
          animation: popNum 0.75s ease-out infinite;
        }

        @keyframes popNum {
          0% { transform: scale(0.92); opacity: 0; }
          25% { transform: scale(1); opacity: 1; }
          85% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.02); opacity: 0; }
        }

        .pre-countdown-label {
          font-family: var(--font-heading);
          font-weight: 800;
          letter-spacing: 0.35em;
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-top: 1.75rem;
        }

        /* Micro Feedback Animations */
        .pulse-success-glow {
          border-color: #10b981 !important;
          box-shadow: 0 0 35px rgba(16, 185, 129, 0.4) !important;
        }

        .pulse-blue-glow {
          border-color: #60a5fa !important;
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.3) !important;
        }

        .pulse-red-glow {
          border-color: #ef4444 !important;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.3) !important;
        }

        .pulse-amber-glow {
          border-color: #f59e0b !important;
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3) !important;
        }

        /* Floating Action Toasts */
        .floating-action-toast {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          animation: floatUp 0.45s ease forwards;
          pointer-events: none;
          z-index: 10;
        }

        .toast-solved {
          background: rgba(16, 185, 129, 0.95);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);
          font-size: 1.4rem;
        }

        .toast-wrong {
          background: rgba(245, 158, 11, 0.9);
          box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
          font-size: 1rem;
        }

        .toast-easy {
          background: rgba(59, 130, 246, 0.9);
          box-shadow: 0 6px 18px rgba(59, 130, 246, 0.4);
          font-size: 1rem;
        }

        .toast-gaveup {
          background: rgba(239, 68, 68, 0.85);
          box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4);
          font-size: 1rem;
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.8); }
          50% { opacity: 1; transform: translate(-50%, -20px) scale(1.05); }
          100% { opacity: 0; transform: translate(-50%, -40px) scale(1); }
        }

        /* Button flash states for secondary actions */
        .btn-flash-amber {
          background: rgba(245, 158, 11, 0.15) !important;
          border-color: rgba(245, 158, 11, 0.5) !important;
          color: #f59e0b !important;
        }

        .top-control-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .top-left-sprint-metrics {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sprint-metric-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-secondary);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pts-pill-styled {
          background: rgba(var(--accent-rgb), 0.1);
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .counter-tween-pop {
          display: inline-block;
          animation: countPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes countPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); color: #10b981; }
          100% { transform: scale(1); }
        }

        .pause-pill {
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid #f59e0b;
          color: #f59e0b;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .top-icon-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon-btn-ctrl {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-paused {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border-color: #f59e0b;
        }

        /* Massive Countdown Timer (7.25rem) */
        .ringless-timer-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        .time-display-massive-focal {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 8rem;
          color: var(--text-primary);
          line-height: 1;
          letter-spacing: -0.05em;
          transition: color 0.2s ease;
        }

        .timer-paused-blink {
          color: var(--amber-main) !important;
          animation: discreteBlink 1.2s steps(1, start) infinite;
        }

        @keyframes discreteBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.2; }
        }

        /* Low time warning — amber pulse */
        .timer-low-time {
          color: #f59e0b !important;
          animation: lowTimePulse 2s ease-in-out infinite;
        }

        @keyframes lowTimePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        /* Time's up — red flash */
        .timer-times-up {
          color: #ef4444 !important;
          animation: timesUpFlash 0.3s ease-in-out infinite;
        }

        @keyframes timesUpFlash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Time's Up Full-Screen Flash Overlay */
        .times-up-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239, 68, 68, 0.12);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: var(--radius-lg);
          animation: timesUpOverlayIn 0.3s ease;
        }

        @keyframes timesUpOverlayIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .times-up-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .times-up-icon {
          color: #ef4444;
          animation: timesUpIconPulse 0.4s ease-in-out infinite alternate;
        }

        @keyframes timesUpIconPulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        .times-up-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 3rem;
          color: #ef4444;
          letter-spacing: 0.15em;
        }

        /* 5-Minute Warning Toast */
        .low-time-toast {
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          animation: toastSlideIn 0.35s ease, toastFadeOut 0.5s ease 3.5s forwards;
          pointer-events: none;
        }

        @keyframes toastSlideIn {
          0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes toastFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Dedicated Divider+Question Wrapper */
        .divider-question-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .timer-question-divider {
          width: 100%;
          border: none;
          border-top: 1px solid var(--border-subtle);
          margin: 0.75rem 0 1.25rem 0;
        }

        .unified-question-title {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.15;
          margin: 0 auto;
          padding: 0;
          max-width: 900px;
          text-align: center;
        }

        /* Unified Per-Question Metadata Row with Neutral Link Pill */
        .per-question-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          margin-top: 0.15rem;
          white-space: nowrap;
        }

        .per-q-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
        }

        .link-per-q-neutral {
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .link-per-q-neutral:hover {
          color: var(--text-primary);
          text-decoration: underline;
        }

        .dot-sep {
          color: var(--text-muted);
        }

        .primary-done-wrapper {
          width: 100%;
          max-width: 440px;
          margin-top: 2rem;
        }

        .btn-done-primary {
          width: 100%;
          height: 64px;
          padding: 1.1rem 2rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }

        .btn-anim-flash {
          transform: scale(1.03);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.6);
        }

        .check-anim-scale {
          animation: popScale 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popScale {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1.2); opacity: 1; }
        }

        .secondary-actions-compact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
        }

        .compact-sec-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        /* Distinct Meaningful Hover State Styling */
        .attempt-btn:hover {
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.4);
          color: #f59e0b;
        }

        .easy-btn:hover {
          background: rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.4);
          color: #60a5fa;
        }

        .gaveup-btn:hover {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .confirm-modal {
          max-width: 420px;
          padding: 1.75rem;
        }

        .confirm-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .confirm-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        /* Responsive scaling for narrower viewports */
        @media (max-width: 768px) {
          .active-sprint-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            min-height: calc(100vh - 74px) !important;
            height: calc(100vh - 74px) !important;
          }
          .unified-sprint-card {
            padding: 1.25rem 1rem 1.25rem 1rem !important;
            flex: 1 !important;
          }
          .time-display-massive-focal {
            font-size: 6rem;
          }
          .unified-question-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .time-display-massive-focal {
            font-size: 5.5rem;
          }
          .unified-question-title {
            font-size: 1.45rem;
          }
          .per-question-meta-row {
            padding: 0.35rem 0.75rem;
            gap: 0.4rem;
            font-size: 0.78rem;
            white-space: nowrap;
          }
        }
      `})]})}function Tt({sessions:e,questionStates:t,questions:n,todayStats:r,settings:i={}}){let a=e.length,o=0,s=0,c=0,l=0,u=0,d={solid:0,ok:0,shaky:0},f={};e.forEach(e=>{u+=e.points||0,l+=e.actualDurationSec||e.durationSec||0,(e.results||[]).forEach(e=>{if(e.status!==`not_reached`){if(o+=1,e.status===`done`){s+=1;let t=e.confidence||et(e,i);t&&d[t]!==void 0&&(d[t]+=1)}else e.status===`gave_up`&&(c+=1);f[e.topic]||(f[e.topic]={attempted:0,solved:0,shaky:0,gaveUp:0}),f[e.topic].attempted+=1,e.status===`done`&&(f[e.topic].solved+=1),(e.confidence||et(e,i))===`shaky`&&(f[e.topic].shaky+=1),e.status===`gave_up`&&(f[e.topic].gaveUp+=1)}})});let p=o>0?Math.round(s/o*100):0,m=Math.max(d.solid,d.ok,d.shaky,1),h=null,g=0;Object.entries(f).forEach(([e,t])=>{let n=(t.shaky||0)+(t.gaveUp||0);n>g&&(g=n,h=e)});let _=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return t>0?`${t}h ${n}m`:`${n}m`},v=e=>e?new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):`Recent`,y=e=>e===100?`bar-fill-perfect`:e>=50?`bar-fill-partial`:`bar-fill-low`;return(0,V.jsxs)(`div`,{className:`analytics-container glass-card`,children:[(0,V.jsx)(`div`,{className:`analytics-header`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{className:`analytics-title`,children:`Performance Analytics`}),(0,V.jsx)(`p`,{className:`analytics-subtitle`,children:`Track today's sprint metrics, lifetime stats, and topic mastery.`})]})}),(0,V.jsxs)(`div`,{className:`stats-section-block`,children:[(0,V.jsxs)(`div`,{className:`stats-section-header`,children:[(0,V.jsx)(Ke,{size:16,className:`text-amber`}),(0,V.jsx)(`h3`,{className:`section-title-sm`,children:`Today's Focus Overview`})]}),(0,V.jsxs)(`div`,{className:`analytics-kpi-grid`,children:[(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-amber`,children:(0,V.jsx)(R,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsxs)(`span`,{className:`kpi-box-val`,children:[r?r.minutesFocused:0,`m`]}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Minutes Focused`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-blue`,children:(0,V.jsx)(Ae,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsx)(`span`,{className:`kpi-box-val`,children:r?r.sprintsCount:0}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Sprints Run`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-easy`,children:(0,V.jsx)(L,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsx)(`span`,{className:`kpi-box-val`,children:r?r.questionsSolved:0}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Questions Solved`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-gold`,children:(0,V.jsx)(k,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsxs)(`span`,{className:`kpi-box-val text-amber`,children:[`+`,r?r.pointsEarned:0]}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Points Earned`})]})]})]})]}),(0,V.jsxs)(`div`,{className:`stats-section-block`,children:[(0,V.jsxs)(`div`,{className:`stats-section-header`,children:[(0,V.jsx)(Ae,{size:16,className:`text-muted`}),(0,V.jsx)(`h3`,{className:`section-title-sm text-muted`,children:`Lifetime Performance`})]}),(0,V.jsxs)(`div`,{className:`analytics-kpi-grid`,children:[(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,V.jsx)(R,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsx)(`span`,{className:`kpi-box-val`,children:_(l)}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Lifetime Focus Time`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,V.jsx)(Ae,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsx)(`span`,{className:`kpi-box-val`,children:a}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Total Lifetime Sprints`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,V.jsx)(L,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsx)(`span`,{className:`kpi-box-val`,children:s}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Total Solved`})]})]}),(0,V.jsxs)(`div`,{className:`kpi-box`,children:[(0,V.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,V.jsx)(k,{size:18})}),(0,V.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,V.jsxs)(`span`,{className:`kpi-box-val`,children:[p,`%`]}),(0,V.jsx)(`span`,{className:`kpi-box-lbl`,children:`Solve Accuracy`})]})]})]})]}),(0,V.jsxs)(`div`,{className:`analytics-two-col`,children:[(0,V.jsxs)(`div`,{className:`panel-box`,children:[(0,V.jsxs)(`h3`,{className:`panel-title`,children:[(0,V.jsx)(j,{size:16}),(0,V.jsx)(`span`,{children:`Topic Mastery Breakdown`})]}),(0,V.jsx)(`div`,{className:`topic-bars-list`,children:Object.keys(f).length>0?Object.entries(f).map(([e,t])=>{let n=Math.round(t.solved/t.attempted*100);return(0,V.jsxs)(`div`,{className:`topic-bar-item`,children:[(0,V.jsxs)(`div`,{className:`bar-label-row`,children:[(0,V.jsx)(`span`,{className:`topic-name`,children:$e(e)}),(0,V.jsxs)(`span`,{className:`topic-ratio`,children:[t.solved,`/`,t.attempted,` solved (`,n,`%)`]})]}),(0,V.jsx)(`div`,{className:`bar-track`,children:(0,V.jsx)(`div`,{className:`bar-fill ${y(n)}`,style:{width:`${n}%`}})})]},e)}):(0,V.jsx)(`p`,{className:`text-muted text-sm py-4 text-center`,children:`Complete sprints to generate topic mastery data.`})})]}),(0,V.jsxs)(`div`,{className:`panel-box`,children:[(0,V.jsxs)(`h3`,{className:`panel-title`,children:[(0,V.jsx)(Fe,{size:16}),(0,V.jsx)(`span`,{children:`Confidence Distribution`})]}),(0,V.jsxs)(`div`,{className:`vertical-chart-stage`,children:[(0,V.jsxs)(`div`,{className:`v-bars-wrapper conf-v-bars`,children:[(0,V.jsxs)(`div`,{className:`v-bar-col`,children:[(0,V.jsx)(`span`,{className:`v-bar-val text-easy font-mono`,children:d.solid}),(0,V.jsx)(`div`,{className:`v-bar-track`,children:(0,V.jsx)(`div`,{className:`v-bar-fill fill-v-solid`,style:{height:`${Math.max(8,Math.round(d.solid/m*100))}%`}})}),(0,V.jsx)(`span`,{className:`v-bar-label font-semibold text-easy`,children:`Solid`})]}),(0,V.jsxs)(`div`,{className:`v-bar-col`,children:[(0,V.jsx)(`span`,{className:`v-bar-val text-blue font-mono`,children:d.ok}),(0,V.jsx)(`div`,{className:`v-bar-track`,children:(0,V.jsx)(`div`,{className:`v-bar-fill fill-v-ok`,style:{height:`${Math.max(8,Math.round(d.ok/m*100))}%`}})}),(0,V.jsx)(`span`,{className:`v-bar-label font-semibold text-blue`,children:`OK`})]}),(0,V.jsxs)(`div`,{className:`v-bar-col`,children:[(0,V.jsx)(`span`,{className:`v-bar-val text-amber font-mono`,children:d.shaky}),(0,V.jsx)(`div`,{className:`v-bar-track`,children:(0,V.jsx)(`div`,{className:`v-bar-fill fill-v-shaky`,style:{height:`${Math.max(8,Math.round(d.shaky/m*100))}%`}})}),(0,V.jsx)(`span`,{className:`v-bar-label font-semibold text-amber`,children:`Shaky`})]})]}),h?(0,V.jsxs)(`div`,{className:`integrated-callout-box mt-3`,children:[(0,V.jsx)(fe,{size:16,className:`text-amber`}),(0,V.jsxs)(`span`,{children:[`Most Resurfaced: `,(0,V.jsx)(`strong`,{children:$e(h)}),` (`,g,` shaky/gave up)`]})]}):(0,V.jsxs)(`div`,{className:`integrated-callout-box mt-3`,children:[(0,V.jsx)(fe,{size:16,className:`text-muted`}),(0,V.jsxs)(`span`,{children:[`Gave Up Total: `,(0,V.jsx)(`strong`,{children:c}),` questions`]})]})]})]})]}),(0,V.jsxs)(`div`,{className:`panel-box log-panel-box`,children:[(0,V.jsxs)(`h3`,{className:`panel-title`,children:[(0,V.jsx)(te,{size:16}),(0,V.jsx)(`span`,{children:`Recent Sprint Log`})]}),(0,V.jsx)(`div`,{className:`table-responsive-clean`,children:(0,V.jsxs)(`table`,{className:`history-table`,children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{children:`Date / Time`}),(0,V.jsx)(`th`,{children:`Duration`}),(0,V.jsx)(`th`,{children:`Attempted`}),(0,V.jsx)(`th`,{children:`Solved`}),(0,V.jsx)(`th`,{children:`Points`})]})}),(0,V.jsx)(`tbody`,{children:e.length>0?[...e].reverse().slice(0,10).map((e,t)=>{let n=(e.results||[]).filter(e=>e.status===`done`).length;return(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{className:`font-mono`,children:v(e.startedAt)}),(0,V.jsx)(`td`,{children:_(e.actualDurationSec||e.durationSec)}),(0,V.jsxs)(`td`,{children:[(e.results||[]).length,` questions`]}),(0,V.jsx)(`td`,{children:(0,V.jsxs)(`span`,{className:`badge badge-easy`,children:[n,` solved`]})}),(0,V.jsxs)(`td`,{className:`font-mono text-amber`,children:[`+`,e.points,` pts`]})]},t)}):(0,V.jsx)(`tr`,{children:(0,V.jsx)(`td`,{colSpan:`5`,className:`text-center py-6 text-muted`,children:`No sprint history recorded yet. Start your first sprint!`})})})]})})]}),(0,V.jsx)(`style`,{children:`
        .analytics-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .analytics-header {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .analytics-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
        }

        .analytics-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .stats-section-block {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stats-section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title-sm {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .analytics-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .kpi-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-amber { background: rgba(var(--accent-rgb), 0.12); color: var(--amber-main); border: 1px solid rgba(var(--accent-rgb), 0.25); }
        .icon-blue { background: rgba(59, 130, 246, 0.12); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.25); }
        .icon-easy { background: var(--easy-bg); color: var(--easy-color); border: 1px solid rgba(16, 185, 129, 0.25); }
        .icon-gold { background: rgba(251, 191, 36, 0.12); color: var(--gold-accent); border: 1px solid rgba(251, 191, 36, 0.25); }
        .icon-muted { background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border-subtle); }

        .kpi-box-content {
          display: flex;
          flex-direction: column;
        }

        .kpi-box-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.45rem;
          color: var(--text-primary);
        }

        .kpi-box-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .analytics-two-col {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 1.25rem;
        }

        .panel-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .topic-bars-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .topic-bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bar-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
        }

        .topic-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .topic-ratio {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .bar-track {
          width: 100%;
          height: 8px;
          background: var(--bg-primary);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .bar-fill-perfect { background: linear-gradient(90deg, #10b981 0%, #059669 100%); }
        .bar-fill-partial { background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%); }
        .bar-fill-low { background: linear-gradient(90deg, #ef4444 0%, #b91c1c 100%); }

        .vertical-chart-stage {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 200px;
          justify-content: flex-end;
        }

        .v-bars-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          height: 160px;
        }

        .conf-v-bars {
          justify-content: space-around;
        }

        .v-bar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
          height: 100%;
          justify-content: flex-end;
        }

        .v-bar-val {
          font-size: 0.82rem;
          font-weight: 700;
        }

        .v-bar-track {
          width: 28px;
          height: 110px;
          background: var(--bg-primary);
          border-radius: 6px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .v-bar-fill {
          width: 100%;
          border-radius: 6px;
          transition: height 0.5s ease;
        }

        .fill-v-solid { background: linear-gradient(180deg, #10b981 0%, #059669 100%); }
        .fill-v-ok { background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%); }
        .fill-v-shaky { background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); }

        .v-bar-label {
          font-size: 0.8rem;
          text-align: center;
        }

        .integrated-callout-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        .mt-3 { margin-top: 0.75rem; }

        .table-responsive-clean {
          overflow-x: auto;
          width: 100%;
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .history-table th, .history-table td {
          padding: 0.75rem 0.85rem;
          text-align: left;
          border-bottom: 1px solid var(--border-subtle);
        }

        .history-table th {
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .analytics-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            padding: 1.25rem 1rem !important;
            gap: 1.25rem !important;
          }

          .analytics-title {
            font-size: 1.45rem;
          }

          .analytics-kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.65rem !important;
          }

          .kpi-box {
            padding: 0.75rem 0.65rem !important;
            gap: 0.55rem !important;
          }

          .kpi-icon-wrapper {
            width: 32px;
            height: 32px;
          }

          .kpi-box-val {
            font-size: 1.15rem !important;
          }

          .kpi-box-lbl {
            font-size: 0.72rem !important;
          }

          .analytics-two-col {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }

          .table-responsive-clean {
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
          }

          .history-table {
            min-width: 480px;
          }

          .history-table th, .history-table td {
            padding: 0.65rem 0.75rem;
            font-size: 0.8rem;
            white-space: nowrap;
          }
        }

        @media (max-width: 480px) {
          .analytics-kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `})]})}var Et=[{id:`b75-001`,name:`Two Sum`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/two-sum/`},{id:`b75-002`,name:`Contains Duplicate`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/contains-duplicate/`},{id:`b75-003`,name:`Valid Anagram`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-anagram/`},{id:`b75-004`,name:`Group Anagrams`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/group-anagrams/`},{id:`b75-005`,name:`Top K Frequent Elements`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/top-k-frequent-elements/`},{id:`b75-006`,name:`Product of Array Except Self`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/product-of-array-except-self/`},{id:`b75-007`,name:`Longest Consecutive Sequence`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-consecutive-sequence/`},{id:`b75-008`,name:`Encode and Decode Strings`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/encode-and-decode-strings/1`},{id:`b75-009`,name:`Subarray Sum Equals K`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/subarray-sum-equals-k/`},{id:`b75-010`,name:`Valid Palindrome`,topic:`Two Pointers`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-palindrome/`},{id:`b75-011`,name:`3Sum`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/3sum/`},{id:`b75-012`,name:`Container With Most Water`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/container-with-most-water/`},{id:`b75-013`,name:`Best Time to Buy and Sell Stock`,topic:`Sliding Window`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/best-time-to-buy-and-sell-stock/`},{id:`b75-014`,name:`Longest Substring Without Repeating Characters`,topic:`Sliding Window`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-substring-without-repeating-characters/`},{id:`b75-015`,name:`Longest Repeating Character Replacement`,topic:`Sliding Window`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-repeating-character-replacement/`},{id:`b75-016`,name:`Minimum Window Substring`,topic:`Sliding Window`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/minimum-window-substring/`},{id:`b75-017`,name:`Valid Parentheses`,topic:`Stack & Queue`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-parentheses/`},{id:`b75-018`,name:`Find Minimum in Rotated Sorted Array`,topic:`Binary Search`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/`},{id:`b75-019`,name:`Search in Rotated Sorted Array`,topic:`Binary Search`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/search-in-rotated-sorted-array/`},{id:`b75-020`,name:`Reverse Linked List`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reverse-linked-list/`},{id:`b75-021`,name:`Merge Two Sorted Lists`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-two-sorted-lists/`},{id:`b75-022`,name:`Reorder List`,topic:`Linked List`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reorder-list/`},{id:`b75-023`,name:`Remove Nth Node From End of List`,topic:`Linked List`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/remove-nth-node-from-end-of-list/`},{id:`b75-024`,name:`Linked List Cycle`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/linked-list-cycle/`},{id:`b75-025`,name:`Merge k Sorted Lists`,topic:`Linked List`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-k-sorted-lists/`},{id:`b75-026`,name:`Invert Binary Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/invert-binary-tree/`},{id:`b75-027`,name:`Maximum Depth of Binary Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-depth-of-binary-tree/`},{id:`b75-028`,name:`Same Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/same-tree/`},{id:`b75-029`,name:`Subtree of Another Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/subtree-of-another-tree/`},{id:`b75-030`,name:`Lowest Common Ancestor of a BST`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/`},{id:`b75-031`,name:`Binary Tree Level Order Traversal`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/binary-tree-level-order-traversal/`},{id:`b75-032`,name:`Validate Binary Search Tree`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/validate-binary-search-tree/`},{id:`b75-033`,name:`Kth Smallest Element in a BST`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/kth-smallest-element-in-a-bst/`},{id:`b75-034`,name:`Construct Binary Tree from Preorder and Inorder Traversal`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/`},{id:`b75-035`,name:`Binary Tree Maximum Path Sum`,topic:`Trees`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/binary-tree-maximum-path-sum/`},{id:`b75-036`,name:`Serialize and Deserialize Binary Tree`,topic:`Trees`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/serialize-and-deserialize-binary-tree/`},{id:`b75-037`,name:`Find Median from Data Stream`,topic:`Heap / Priority Queue`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/find-median-from-data-stream/`},{id:`b75-038`,name:`Combination Sum`,topic:`Backtracking`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/combination-sum/`},{id:`b75-039`,name:`Word Search`,topic:`Backtracking`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/word-search/`},{id:`b75-040`,name:`Number of Islands`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/number-of-islands/`},{id:`b75-041`,name:`Clone Graph`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/clone-graph/`},{id:`b75-042`,name:`Pacific Atlantic Water Flow`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/pacific-atlantic-water-flow/`},{id:`b75-043`,name:`Course Schedule`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/course-schedule/`},{id:`b75-044`,name:`Number of Connected Components in an Undirected Graph`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/number-of-connected-components-in-an-undirected-graph/1`},{id:`b75-045`,name:`Graph Valid Tree`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/graph-valid-tree/1`},{id:`b75-046`,name:`Alien Dictionary`,topic:`Graphs`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/alien-dictionary/1`},{id:`b75-047`,name:`Climbing Stairs`,topic:`Dynamic Programming`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/climbing-stairs/`},{id:`b75-048`,name:`Coin Change`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/coin-change/`},{id:`b75-049`,name:`Longest Increasing Subsequence`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-increasing-subsequence/`},{id:`b75-050`,name:`Word Break`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/word-break/`},{id:`b75-051`,name:`Combination Sum IV`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/combination-sum-iv/`},{id:`b75-052`,name:`House Robber`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/house-robber/`},{id:`b75-053`,name:`House Robber II`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/house-robber-ii/`},{id:`b75-054`,name:`Decode Ways`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/decode-ways/`},{id:`b75-055`,name:`Maximum Subarray`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-subarray/`},{id:`b75-056`,name:`Maximum Product Subarray`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-product-subarray/`},{id:`b75-057`,name:`Partition Equal Subset Sum`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/partition-equal-subset-sum/`},{id:`b75-058`,name:`Unique Paths`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/unique-paths/`},{id:`b75-059`,name:`Longest Common Subsequence`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-common-subsequence/`},{id:`b75-060`,name:`Jump Game`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/jump-game/`},{id:`b75-061`,name:`Palindromic Substrings`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/palindromic-substrings/`},{id:`b75-062`,name:`Insert Interval`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/insert-interval/`},{id:`b75-063`,name:`Merge Intervals`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-intervals/`},{id:`b75-064`,name:`Non-overlapping Intervals`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/non-overlapping-intervals/`},{id:`b75-065`,name:`Meeting Rooms`,topic:`Intervals`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/meeting-rooms/1`},{id:`b75-066`,name:`Meeting Rooms II`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/meeting-rooms-ii/1`},{id:`b75-067`,name:`Number of 1 Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/number-of-1-bits/`},{id:`b75-068`,name:`Counting Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/counting-bits/`},{id:`b75-069`,name:`Reverse Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reverse-bits/`},{id:`b75-070`,name:`Missing Number`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/missing-number/`},{id:`b75-071`,name:`Sum of Two Integers`,topic:`Bit Manipulation`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/sum-of-two-integers/`},{id:`b75-072`,name:`Rotate Image`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/rotate-image/`},{id:`b75-073`,name:`Spiral Matrix`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/spiral-matrix/`},{id:`b75-074`,name:`Set Matrix Zeroes`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/set-matrix-zeroes/`},{id:`b75-075`,name:`Longest Palindromic Substring`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-palindromic-substring/`},{id:`sql50-001`,name:`Recyclable and Low Fat Products`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/recyclable-and-low-fat-products/`},{id:`sql50-002`,name:`Find Customer Referee`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-customer-referee/`},{id:`sql50-003`,name:`Big Countries`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/big-countries/`},{id:`sql50-004`,name:`Article Views I`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/article-views-i/`},{id:`sql50-005`,name:`Invalid Tweets`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/invalid-tweets/`},{id:`sql50-006`,name:`Replace Employee ID With The Unique Identifier`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/`},{id:`sql50-007`,name:`Product Sales Analysis I`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-sales-analysis-i/`},{id:`sql50-008`,name:`Customer Who Visited but Did Not Make Any Transactions`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/`},{id:`sql50-009`,name:`Rising Temperature`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/rising-temperature/`},{id:`sql50-010`,name:`Average Time of Process per Machine`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/average-time-of-process-per-machine/`},{id:`sql50-011`,name:`Employee Bonus`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/employee-bonus/`},{id:`sql50-012`,name:`Students and Examinations`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/students-and-examinations/`},{id:`sql50-013`,name:`Managers with at Least 5 Direct Reports`,topic:`Basic Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/managers-with-at-least-5-direct-reports/`},{id:`sql50-014`,name:`Confirmation Rate`,topic:`Basic Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/confirmation-rate/`},{id:`sql50-015`,name:`Not Boring Movies`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/not-boring-movies/`},{id:`sql50-016`,name:`Average Selling Price`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/average-selling-price/`},{id:`sql50-017`,name:`Project Employees I`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/project-employees-i/`},{id:`sql50-018`,name:`Percentage of Users Attended a Contest`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/percentage-of-users-attended-a-contest/`},{id:`sql50-019`,name:`Queries Quality and Percentage`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/queries-quality-and-percentage/`},{id:`sql50-020`,name:`Monthly Transactions I`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/monthly-transactions-i/`},{id:`sql50-021`,name:`Immediate Food Delivery II`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/immediate-food-delivery-ii/`},{id:`sql50-022`,name:`Game Play Analysis IV`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/game-play-analysis-iv/`},{id:`sql50-023`,name:`Number of Unique Subjects Taught by Each Teacher`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/`},{id:`sql50-024`,name:`User Activity for the Past 30 Days I`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/user-activity-for-the-past-30-days-i/`},{id:`sql50-025`,name:`Product Sales Analysis III`,topic:`Grouping`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-sales-analysis-iii/`},{id:`sql50-026`,name:`Classes More Than 5 Students`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/classes-more-than-5-students/`},{id:`sql50-027`,name:`Find Followers Count`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-followers-count/`},{id:`sql50-028`,name:`Biggest Single Number`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/biggest-single-number/`},{id:`sql50-029`,name:`Customers Who Bought All Products`,topic:`Grouping`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/customers-who-bought-all-products/`},{id:`sql50-030`,name:`The Number of Employees Which Report to Each Employee`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/`},{id:`sql50-031`,name:`Primary Department for Each Employee`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/primary-department-for-each-employee/`},{id:`sql50-032`,name:`Triangle Judgement`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/triangle-judgement/`},{id:`sql50-033`,name:`Consecutive Numbers`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/consecutive-numbers/`},{id:`sql50-034`,name:`Product Price at a Given Date`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-price-at-a-given-date/`},{id:`sql50-035`,name:`Last Person to Fit in the Bus`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/last-person-to-fit-in-the-bus/`},{id:`sql50-036`,name:`Count Salary Categories`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/count-salary-categories/`},{id:`sql50-037`,name:`Employees Whose Manager Left the Company`,topic:`Subqueries`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/employees-whose-manager-left-the-company/`},{id:`sql50-038`,name:`Exchange Seats`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/exchange-seats/`},{id:`sql50-039`,name:`Movie Rating`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/movie-rating/`},{id:`sql50-040`,name:`Restaurant Growth`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/restaurant-growth/`},{id:`sql50-041`,name:`Friend Requests II: Who Has the Most Friends`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/`},{id:`sql50-042`,name:`Investments in 2016`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/investments-in-2016/`},{id:`sql50-043`,name:`Department Top Three Salaries`,topic:`Subqueries`,difficulty:`Hard`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/department-top-three-salaries/`},{id:`sql50-044`,name:`Fix Names in a Table`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/fix-names-in-a-table/`},{id:`sql50-045`,name:`Patients With a Condition`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/patients-with-a-condition/`},{id:`sql50-046`,name:`Delete Duplicate Emails`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/delete-duplicate-emails/`},{id:`sql50-047`,name:`Second Highest Salary`,topic:`Strings & Regex`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/second-highest-salary/`},{id:`sql50-048`,name:`Group Sold Products By The Date`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/group-sold-products-by-the-date/`},{id:`sql50-049`,name:`List the Products Ordered in a Period`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/list-the-products-ordered-in-a-period/`},{id:`sql50-050`,name:`Find Users With Valid E-Mails`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-users-with-valid-e-mails/`}],Dt=`sprintset_app_data_v1`,Ot=`sprintset_active_sprint_v1`,kt={pointsByDifficulty:{Easy:200,Medium:500,Hard:1e3},timeWeightsByDifficulty:{Easy:4,Medium:8,Hard:15},vetoEnabled:!0,vetoPairingKey:`sprintset-veto-secret`,pointsPerMinute:100},At={questions:Et,questionStates:{},sessions:[],settings:kt};function jt(){try{let e=localStorage.getItem(Dt);if(!e)return At;let t=JSON.parse(e);return{questions:t.questions||Et,questionStates:t.questionStates||{},sessions:t.sessions||[],settings:{...kt,...t.settings||{},timeWeightsByDifficulty:{...kt.timeWeightsByDifficulty,...t.settings&&t.settings.timeWeightsByDifficulty||{}}}}}catch(e){return console.error(`Error loading AppState from localStorage:`,e),At}}function Mt(e){try{localStorage.setItem(Dt,JSON.stringify(e))}catch(e){console.error(`Error saving AppState to localStorage:`,e)}}function Nt(e){try{e?localStorage.setItem(Ot,JSON.stringify(e)):localStorage.removeItem(Ot)}catch(e){console.error(`Error saving active sprint state:`,e)}}function Pt(){try{let e=localStorage.getItem(Ot);return e?JSON.parse(e):null}catch(e){return console.error(`Error loading active sprint state:`,e),null}}function Ft(e){let t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`sprintset_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}function It(e,t,n){let r=new FileReader;r.onload=e=>{try{t(JSON.parse(e.target.result))}catch{n(`Invalid JSON file format.`)}},r.onerror=()=>n(`Failed to read file.`),r.readAsText(e)}function Lt({settings:e,questions:t=[],sessions:n=[],state:r,onSaveSettings:i,onImportJSON:a,onImportCSV:o,onResetData:s,onStateImported:c,onResetAllData:l,onUpdateQuestions:u}){let d=e||r?.settings||{},f=t.length>0?t:r?.questions||[],p=n.length>0?n:r?.sessions||[],m=d.pointsByDifficulty?.Easy||200,h=d.pointsByDifficulty?.Medium||500,g=d.pointsByDifficulty?.Hard||1e3,v=d.timeWeightsByDifficulty?.Easy||4,y=d.timeWeightsByDifficulty?.Medium||8,b=d.timeWeightsByDifficulty?.Hard||15,x=d.vetoPairingKey||`sprintset-veto-secret`,S=d.pointsPerMinute||100,[C,w]=(0,_.useState)(m),[T,E]=(0,_.useState)(h),[D,O]=(0,_.useState)(g),[ee,k]=(0,_.useState)(v),[A,te]=(0,_.useState)(y),[j,M]=(0,_.useState)(b),[N,P]=(0,_.useState)(x),[F,L]=(0,_.useState)(!1),[ne,re]=(0,_.useState)(S),[R,z]=(0,_.useState)(``);(0,_.useEffect)(()=>{w(m),E(h),O(g),k(v),te(y),M(b),P(x),re(S)},[m,h,g,v,y,b,x,S]);let oe=parseInt(C,10)!==m||parseInt(T,10)!==h||parseInt(D,10)!==g||parseInt(ee,10)!==v||parseInt(A,10)!==y||parseInt(j,10)!==b,se=e=>{e&&e.preventDefault(),i&&i({...d,pointsByDifficulty:{Easy:parseInt(C,10)||200,Medium:parseInt(T,10)||500,Hard:parseInt(D,10)||1e3},timeWeightsByDifficulty:{Easy:parseInt(ee,10)||4,Medium:parseInt(A,10)||8,Hard:parseInt(j,10)||15}}),z(`Settings saved!`),setTimeout(()=>z(``),2500)},de=()=>{w(m),E(h),O(g),k(v),te(y),M(b)},fe=e=>{let t=e.target.files[0];t&&It(t,e=>{a?a(e):c&&c(e),alert(`Data backup successfully imported!`)},e=>alert(e))},pe=e=>{let t=e.target.files[0];t&&it(t,e=>{if(e.length===0){alert(`No valid question rows found in CSV.`);return}o?o(e):u&&u(e),alert(`Successfully loaded ${e.length} questions from CSV!`)})},me=()=>{Ft(r||{questions:f,sessions:p,settings:d})},he=()=>{s?s():l&&l()},ge=[{id:`sunset`,name:`Sunset Ember`,primary:`#f97316`,secondary:`#ea580c`},{id:`emerald`,name:`Cyber Emerald`,primary:`#10b981`,secondary:`#059669`},{id:`violet`,name:`Cosmic Purple`,primary:`#8b5cf6`,secondary:`#7c3aed`},{id:`electric-blue`,name:`Electric Blue`,primary:`#0ea5e9`,secondary:`#0284c7`},{id:`rose`,name:`Neon Rose`,primary:`#f43f5e`,secondary:`#e11d48`}],B=d.palette||`sunset`,_e=ge.find(e=>e.id===B)||ge[0];return(0,V.jsxs)(`div`,{className:`settings-container glass-card`,children:[(0,V.jsxs)(`div`,{className:`settings-header`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`h2`,{className:`settings-title`,children:[(0,V.jsx)(Pe,{size:22,className:`text-amber`}),(0,V.jsx)(`span`,{children:`App Settings`})]}),(0,V.jsx)(`p`,{className:`settings-subtitle`,children:`Customize scoring points, sprint time weights, accent theme palettes, and data backups.`})]}),(0,V.jsx)(`div`,{className:`settings-header-actions`,children:(0,V.jsxs)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>{window.confirm(`Reset scoring points, sprint weights, and theme palette back to defaults?`)&&(i&&i({palette:`sunset`,pointsByDifficulty:{Easy:10,Medium:20,Hard:30},timeWeightsByDifficulty:{Easy:4,Medium:8,Hard:15}}),w(10),E(20),O(30),k(4),te(8),M(15),z(`Reset settings to defaults!`),setTimeout(()=>z(``),2500))},children:[(0,V.jsx)(je,{size:15}),(0,V.jsx)(`span`,{children:`Reset Defaults`})]})})]}),oe&&(0,V.jsxs)(`div`,{className:`unsaved-banner`,children:[(0,V.jsxs)(`div`,{className:`unsaved-banner-content`,children:[(0,V.jsx)(I,{size:18,className:`text-amber`}),(0,V.jsx)(`span`,{children:`You have unsaved changes to scoring or sprint duration weights!`})]}),(0,V.jsxs)(`div`,{className:`unsaved-actions`,children:[(0,V.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:de,children:`Discard`}),(0,V.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:se,children:[(0,V.jsx)(Me,{size:14}),(0,V.jsx)(`span`,{children:`Save Changes`})]})]})]}),R&&(0,V.jsxs)(`div`,{className:`settings-float-toast`,children:[(0,V.jsx)(`span`,{children:`✓`}),(0,V.jsx)(`span`,{children:R})]}),(0,V.jsxs)(`div`,{className:`settings-form`,children:[(0,V.jsx)(`section`,{className:`settings-stacked-section`,children:(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,children:`Accent Theme Palette`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Select your preferred accent color scheme for Sprintset`})]}),(0,V.jsxs)(`div`,{className:`palette-dropdown-row`,children:[(0,V.jsx)(`span`,{className:`swatch-color-dot`,style:{background:`linear-gradient(135deg, ${_e.primary} 0%, ${_e.secondary} 100%)`}}),(0,V.jsx)(`select`,{className:`palette-select`,value:B,onChange:e=>{let t=ge.find(t=>t.id===e.target.value);i&&t&&(i({...d,palette:t.id}),z(`Switched to ${t.name}!`),setTimeout(()=>z(``),1800))},children:ge.map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})]})}),(0,V.jsx)(`section`,{className:`settings-stacked-section`,children:(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,children:`Scoring Configuration`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Points awarded when a problem is marked Solved`})]}),(0,V.jsxs)(`div`,{className:`setting-controls-right`,children:[(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:C,onChange:e=>w(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`pts`})]}),(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:T,onChange:e=>E(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`pts`})]}),(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:D,onChange:e=>O(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`pts`})]})]})]})}),(0,V.jsx)(`section`,{className:`settings-stacked-section`,children:(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,children:`Duration Suggestion Weights`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Base minutes per question used to calculate suggested sprint time`})]}),(0,V.jsxs)(`div`,{className:`setting-controls-right`,children:[(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:ee,onChange:e=>k(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`m/q`})]}),(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:A,onChange:e=>te(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`m/q`})]}),(0,V.jsxs)(`div`,{className:`pts-box`,children:[(0,V.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:j,onChange:e=>M(e.target.value),className:`input-num-tight`}),(0,V.jsx)(`span`,{className:`unit-text`,children:`m/q`})]})]})]})})]}),(0,V.jsxs)(`section`,{className:`settings-stacked-section`,children:[(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,children:`Data & Progress Snapshot`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Export JSON backup or load saved progress snapshot`})]}),(0,V.jsxs)(`div`,{className:`button-group-side`,children:[(0,V.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:me,children:[(0,V.jsx)(We,{size:14}),(0,V.jsx)(`span`,{children:`Export JSON`})]}),(0,V.jsxs)(`label`,{className:`btn btn-secondary btn-sm cursor-pointer`,children:[(0,V.jsx)(ae,{size:14}),(0,V.jsx)(`span`,{children:`Import JSON`}),(0,V.jsx)(`input`,{type:`file`,accept:`.json`,onChange:fe,style:{display:`none`}})]})]})]}),(0,V.jsxs)(`div`,{className:`setting-single-line-row mt-3`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,children:`CSV Question Bank`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Export or import custom spreadsheet question bank`})]}),(0,V.jsxs)(`div`,{className:`button-group-side`,children:[(0,V.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>at(f),children:[(0,V.jsx)(ue,{size:14}),(0,V.jsx)(`span`,{children:`Export CSV`})]}),(0,V.jsxs)(`label`,{className:`btn btn-secondary btn-sm cursor-pointer`,children:[(0,V.jsx)(ie,{size:14}),(0,V.jsx)(`span`,{children:`Import CSV`}),(0,V.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:pe,style:{display:`none`}})]})]})]})]}),(0,V.jsxs)(`section`,{className:`settings-stacked-section veto-section-card`,children:[(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsxs)(`h3`,{className:`setting-heading flex items-center gap-2`,children:[(0,V.jsx)(Ce,{size:16,className:`text-amber`}),` Veto Coupon Integration`]}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Earn encrypted screen-time coupons when you complete DSA sprints. Redeem in Veto.`})]}),(0,V.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,V.jsxs)(`label`,{className:`toggle-switch-label`,children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:!!d.vetoEnabled,onChange:e=>{i({...d,vetoEnabled:e.target.checked})}}),(0,V.jsx)(`span`,{className:`toggle-slider`})]})})]}),!!d.vetoEnabled&&(0,V.jsxs)(`div`,{style:{marginTop:`1.25rem`,display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsxs)(`h3`,{className:`setting-heading`,style:{fontSize:`0.85rem`},children:[(0,V.jsx)(ye,{size:14}),` Veto Pairing Key`]}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Shared secret between Sprintset & Veto. Set the same key in both apps.`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.35rem`,background:`var(--bg-input)`,border:`1px solid var(--border-subtle)`,borderRadius:`var(--radius-md)`,padding:`0.3rem 0.6rem`},children:[(0,V.jsx)(`input`,{type:F?`text`:`password`,value:N,onChange:e=>P(e.target.value),placeholder:`sprintset-veto-secret`,className:`font-mono`,style:{background:`transparent`,border:`none`,color:`var(--text-primary)`,outline:`none`,width:`180px`,fontSize:`0.85rem`}}),(0,V.jsx)(`button`,{type:`button`,className:`icon-btn`,onClick:()=>L(!F),style:{padding:`0.2rem`},children:F?(0,V.jsx)(ce,{size:14}):(0,V.jsx)(le,{size:14})})]}),N!==x&&(0,V.jsx)(`button`,{type:`button`,className:`btn btn-primary btn-sm`,onClick:()=>{i({...d,vetoPairingKey:N}),z(`Pairing Key saved!`),setTimeout(()=>z(``),2e3)},children:`Save`})]})]}),(0,V.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading`,style:{fontSize:`0.85rem`},children:`Conversion Rate`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Sprint points needed per 1 minute of Veto screen time`})]}),(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,V.jsx)(`input`,{type:`number`,min:`1`,value:ne,onChange:e=>re(parseInt(e.target.value,10)||100),className:`font-mono`,style:{background:`var(--bg-input)`,border:`1px solid var(--border-subtle)`,borderRadius:`var(--radius-md)`,padding:`0.35rem 0.6rem`,color:`var(--text-primary)`,width:`80px`,fontSize:`0.85rem`,textAlign:`center`}}),(0,V.jsx)(`span`,{className:`text-xs text-muted`,children:`pts / min`}),ne!==S&&(0,V.jsx)(`button`,{type:`button`,className:`btn btn-primary btn-sm`,onClick:()=>{i({...d,pointsPerMinute:ne}),z(`Conversion rate saved!`),setTimeout(()=>z(``),2e3)},children:`Save`})]})]})]})]}),(0,V.jsxs)(`section`,{className:`settings-stacked-section danger-stacked mt-4`,children:[(0,V.jsxs)(`div`,{className:`danger-zone-header`,style:{marginBottom:`1.25rem`},children:[(0,V.jsx)(`h3`,{className:`setting-heading font-bold`,style:{color:`#ef4444`},children:`Danger Zone`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Irreversible destructive actions for local storage and progress`})]}),(0,V.jsxs)(`div`,{className:`setting-single-line-row danger-row-bg`,children:[(0,V.jsxs)(`div`,{className:`setting-label-col`,children:[(0,V.jsx)(`h3`,{className:`setting-heading text-danger`,children:`Reset All Local Data`}),(0,V.jsx)(`p`,{className:`setting-subtext`,children:`Irreversibly wipe saved sessions and local question states`})]}),(0,V.jsxs)(`button`,{className:`btn btn-danger btn-sm`,onClick:he,children:[(0,V.jsx)(Be,{size:14}),(0,V.jsx)(`span`,{children:`Reset All Data`})]})]})]}),(0,V.jsx)(`style`,{children:`
        .settings-container {
          max-width: 1100px;
          margin: 1.5rem auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .settings-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .settings-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .settings-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-top: 0.2rem;
        }

        /* Unsaved Banner */
        .unsaved-banner {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          animation: fadeIn 0.2s ease;
        }

        .unsaved-banner-content {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .unsaved-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .settings-float-toast {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(15, 23, 42, 0.92);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: var(--easy-color);
          padding: 0.65rem 1.1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          z-index: 9999;
          animation: toastSlideIn 0.2s ease;
        }

        @keyframes toastSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .settings-stacked-section {
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .setting-single-line-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .danger-row-bg {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
        }

        .setting-label-col {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .setting-heading {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .setting-subtext {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        /* Palette Dropdown */
        .palette-dropdown-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .palette-select {
          appearance: none;
          background: var(--bg-input);
          border: 1.5px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.45rem 2rem 0.45rem 0.75rem;
          cursor: pointer;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.6rem center;
        }

        .palette-select:focus,
        .palette-select:hover {
          border-color: var(--amber-main);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
        }

        .palette-select option {
          background: #161b26;
          color: var(--text-primary);
        }

        .swatch-color-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        }

        .setting-controls-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .pts-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-md);
        }

        .input-num-tight {
          width: 50px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.35rem;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
          text-align: right;
          outline: none;
        }

        .input-num-tight:focus {
          border-color: var(--amber-main);
        }

        .unit-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .button-group-side {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .danger-stacked {
          border-bottom: none;
          padding-bottom: 0;
        }

        .btn-sm {
          padding: 0.45rem 0.85rem;
          font-size: 0.8rem;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .mt-3 { margin-top: 0.75rem; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Styled Toggle Switch */
        .toggle-switch-label {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .toggle-switch-label input[type="checkbox"] {
          display: none;
        }

        .toggle-slider {
          position: relative;
          width: 42px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .toggle-slider::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          background: var(--text-secondary);
          border-radius: 50%;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
        }

        .toggle-switch-label input[type="checkbox"]:checked + .toggle-slider {
          background: rgba(var(--accent-rgb), 0.25);
          border-color: rgba(var(--accent-rgb), 0.6);
        }

        .toggle-switch-label input[type="checkbox"]:checked + .toggle-slider::before {
          transform: translateX(18px);
          background: var(--amber-main);
        }

        @media (max-width: 768px) {
          .settings-container {
            width: calc(100% - 1.5rem) !important;
            margin: 0.75rem auto !important;
            padding: 1.25rem 1rem !important;
            gap: 1.25rem !important;
          }

          .settings-header {
            flex-direction: column;
            align-items: stretch !important;
            gap: 0.85rem !important;
          }

          .settings-header-actions {
            width: 100%;
          }

          .settings-header-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .setting-single-line-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }

          .setting-controls-right {
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .button-group-side {
            width: 100%;
            flex-wrap: wrap;
          }

          .button-group-side .btn {
            flex: 1;
            justify-content: center;
          }

          .unsaved-banner {
            flex-direction: column;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }

          .unsaved-actions {
            justify-content: flex-end;
          }
        }
      `})]})}function Rt({isOpen:e,onClose:t,sessions:n=[],vetoEnabled:r=!1}){let[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null);if(!e)return null;let c=n.filter(e=>e.vetoCoupon&&e.rewardMinutes>0).map((e,t)=>({id:t,coupon:e.vetoCoupon,minutes:e.rewardMinutes,date:e.startedAt?new Date(e.startedAt).toLocaleDateString():`Recent`,sessionId:e.id})),l=(e,t)=>{navigator.clipboard.writeText(t),s(e),setTimeout(()=>s(null),2e3)};return(0,Qe.createPortal)((0,V.jsxs)(`div`,{className:`veto-modal-overlay`,onClick:t,children:[(0,V.jsxs)(`div`,{className:`veto-modal-content glass-card`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`veto-modal-header`,children:[(0,V.jsxs)(`div`,{className:`veto-modal-title-group`,children:[(0,V.jsx)(`h2`,{className:`veto-modal-title`,children:`Veto Reward Coupons`}),(0,V.jsx)(`p`,{className:`veto-modal-subtitle`,children:`Earned screen time coupons from completed sprints`})]}),(0,V.jsx)(`button`,{className:`icon-btn icon-btn-close`,onClick:t,title:`Close`,children:(0,V.jsx)(Ge,{size:20})})]}),(0,V.jsx)(`div`,{className:`veto-modal-body`,children:r?c.length===0?(0,V.jsx)(`div`,{className:`veto-empty-state`,children:(0,V.jsx)(`p`,{className:`text-muted`,children:`No coupons earned yet. Complete sprints to generate Veto reward coupons!`})}):(0,V.jsx)(`div`,{className:`veto-coupons-list`,children:c.map((e,t)=>(0,V.jsxs)(`div`,{className:`veto-coupon-card`,children:[(0,V.jsxs)(`div`,{className:`coupon-header`,children:[(0,V.jsxs)(`div`,{className:`coupon-info`,children:[(0,V.jsxs)(`span`,{className:`coupon-reward font-semibold text-amber`,children:[`+`,e.minutes,`m`]}),(0,V.jsx)(`span`,{className:`coupon-date text-muted text-xs`,children:e.date})]}),(0,V.jsx)(`button`,{type:`button`,className:`icon-btn icon-btn-sm`,onClick:()=>a(i===t?null:t),title:i===t?`Hide coupon`:`Show coupon`,children:i===t?(0,V.jsx)(ce,{size:14}):(0,V.jsx)(le,{size:14})})]}),i===t&&(0,V.jsxs)(`div`,{className:`coupon-display`,children:[(0,V.jsx)(`div`,{className:`coupon-text font-mono`,children:e.coupon}),(0,V.jsx)(`div`,{className:`coupon-actions`,children:(0,V.jsxs)(`button`,{type:`button`,className:`btn btn-sm ${o===t?`btn-success`:`btn-secondary`}`,onClick:()=>l(t,e.coupon),children:[(0,V.jsx)(z,{size:13}),(0,V.jsx)(`span`,{children:o===t?`Copied!`:`Copy`})]})})]})]},t))}):(0,V.jsxs)(`div`,{className:`veto-info-banner banner-warning`,children:[(0,V.jsx)(I,{size:16}),(0,V.jsx)(`span`,{children:`Veto integration is disabled in Settings. Enable it to earn coupons.`})]})}),c.length>0&&(0,V.jsxs)(`div`,{className:`veto-modal-footer`,children:[(0,V.jsxs)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>{let e=c.map(e=>({sessionId:e.sessionId,coupon:e.coupon,rewardMinutes:e.minutes,date:e.date})),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`veto-coupons-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)},children:[(0,V.jsx)(ae,{size:14}),(0,V.jsx)(`span`,{children:`Download All`})]}),(0,V.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:t,children:`Done`})]})]}),(0,V.jsx)(`style`,{children:`
        .veto-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(4px);
        }

        .veto-modal-content {
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
        }

        .veto-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          gap: 1rem;
        }

        .veto-modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .veto-modal-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .veto-modal-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .icon-btn-close {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        }

        .veto-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .veto-info-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .banner-warning {
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.25);
          color: #f97316;
        }

        .veto-empty-state {
          text-align: center;
          padding: 3rem 1rem;
        }

        .veto-coupons-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .veto-coupon-card {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .coupon-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .coupon-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .coupon-reward {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .coupon-display {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .coupon-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          word-break: break-all;
          line-height: 1.4;
          padding: 0.5rem;
          background: var(--bg-card);
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-subtle);
        }

        .coupon-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-sm {
          padding: 0.4rem 0.75rem;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .btn-success {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.35);
        }

        .btn-success:hover {
          background: rgba(16, 185, 129, 0.25);
        }

        .veto-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .veto-modal-content { max-width: calc(100vw - 2rem); }
          .btn-sm span { display: none; }
        }
      `})]}),document.body)}function zt(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.byteLength;e++)n+=String.fromCharCode(t[e]);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function Bt(e){let t=e||`sprintset-veto-default-secret`,n=new TextEncoder().encode(t),r=await window.crypto.subtle.digest(`SHA-256`,n);return window.crypto.subtle.importKey(`raw`,r,{name:`AES-GCM`},!1,[`encrypt`,`decrypt`])}async function Vt(e,t){try{let n=await Bt(e),r=window.crypto.getRandomValues(new Uint8Array(12)),i=JSON.stringify(t),a=new TextEncoder().encode(i),o=await window.crypto.subtle.encrypt({name:`AES-GCM`,iv:r},n,a),s=new Uint8Array(r.byteLength+o.byteLength);return s.set(r,0),s.set(new Uint8Array(o),r.byteLength),zt(s)}catch(e){return console.error(`Failed to generate Veto coupon:`,e),null}}function Ht(){let[e,t]=(0,_.useState)(()=>jt()),[n,r]=(0,_.useState)(`sprint`),[i,a]=(0,_.useState)(()=>Pt()),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1);(0,_.useEffect)(()=>{Mt(e)},[e]),(0,_.useEffect)(()=>{e.settings&&(e.settings.theme&&document.documentElement.setAttribute(`data-theme`,e.settings.theme),e.settings.palette?document.documentElement.setAttribute(`data-palette`,e.settings.palette):document.documentElement.removeAttribute(`data-palette`))},[e.settings]),(0,_.useEffect)(()=>{Nt(i)},[i]);let[u,d]=(0,_.useState)(null),f=(e,t=`success`,n=3e3)=>{d({message:e,type:t}),setTimeout(()=>d(null),n)},p=(0,_.useMemo)(()=>{let t=new Date().toDateString(),n=0,r=0,i=0,a=0;return(e.sessions||[]).forEach(e=>{if(e.startedAt&&new Date(e.startedAt).toDateString()===t){a+=1;let t=e.actualDurationSec===void 0?e.durationSec:e.actualDurationSec;n+=t||0,i+=e.points||0,(e.results||[]).forEach(e=>{e.status===`done`&&(r+=1)})}}),{minutesFocused:Math.round(n/60),sprintsCount:a,questionsSolved:r,pointsEarned:i}},[e.sessions]),m=(0,_.useMemo)(()=>(e.sessions||[]).filter(e=>e.vetoCoupon&&e.rewardMinutes>0).length,[e.sessions]);return(0,V.jsxs)(`div`,{className:`app-container`,children:[u&&(0,V.jsxs)(`div`,{className:`global-toast-banner toast-${u.type}`,children:[u.type===`error`?(0,V.jsx)(I,{size:16}):(0,V.jsx)(L,{size:16}),(0,V.jsx)(`span`,{children:u.message})]}),(0,V.jsx)(Rt,{isOpen:c,onClose:()=>l(!1),sessions:e.sessions,vetoEnabled:e.settings?.vetoEnabled||!1}),(0,V.jsx)(Je,{activeTab:n,onSelectTab:e=>{if(i?.isCutoffModalOpen&&e!==`sprint`){f(`Please respond to the sprint check-in first to complete your sprint!`,`error`);return}r(e)},todayFocusMinutes:p.minutesFocused,settings:e.settings,onToggleTheme:()=>{let n=e.settings.theme===`light`?`dark-ember`:`light`;document.documentElement.setAttribute(`data-theme`,n),t(e=>({...e,settings:{...e.settings,theme:n,updatedAtMs:Date.now()}}))},hasActiveSprint:!!i,isCutoffModalOpen:!!i?.isCutoffModalOpen,vetoRewardCount:m,onOpenVetoCoupons:()=>l(!0)}),(0,V.jsxs)(`main`,{className:`app-main-content`,children:[n===`sprint`&&(i?(0,V.jsx)(wt,{activeSprintState:i,settings:e.settings,allQuestions:e.questions,questionStates:e.questionStates,onUpdateActiveSprintState:e=>{a(e)},onFinishSprint:async n=>{let r=(n.results||[]).map(t=>t.status===`done`&&!t.confidence?{...t,confidence:et(t,e.settings)}:t),i=!!e.settings?.vetoEnabled,o=n.points||0,c=e.settings?.pointsPerMinute||100,l=i?Math.floor(o/c):0,u=`sess_`+Date.now(),d=e.settings?.vetoPairingKey||`sprintset-veto-secret`,f=null;i&&l>0&&(f=await Vt(d,{sprintId:u,minutes:l,nonce:window.crypto.randomUUID?window.crypto.randomUUID():Math.random().toString(36).substring(2)+Date.now().toString(36),timestamp:Date.now()}));let p={id:u,...n,rewardMinutes:l,vetoCoupon:f,results:r},m={...e.questionStates};r.forEach(e=>{e.status!==`not_reached`&&(m[e.questionId]={lastAttemptedAt:new Date().toISOString(),status:e.status,confidence:e.confidence||m[e.questionId]?.confidence||null})}),t(e=>({...e,questionStates:m,sessions:[...e.sessions,p]})),a(null),s(p)},onCancelSprint:()=>a(null)}):o?(0,V.jsx)(tt,{session:o,settings:e.settings,onStartNewSprint:()=>{s(null),a(null),r(`sprint`)},onGoHome:()=>s(null),onUpdateSessionConfidence:(e,n,r)=>{t(t=>{let i=t.sessions.map(i=>{if(i.id===e||!e&&i.id===t.sessions[t.sessions.length-1]?.id){let e=(i.results||[]).map(e=>e.questionId===n?{...e,confidence:r}:e);return{...i,results:e}}return i}),a={...t.questionStates,[n]:{...t.questionStates[n]||{},confidence:r}};return{...t,questionStates:a,sessions:i}}),s(e=>{if(!e)return e;let t=(e.results||[]).map(e=>e.questionId===n?{...e,confidence:r}:e);return{...e,results:t}})},onUpdateSessionResult:(n,r,i)=>{t(e=>{let t=!!e.settings?.vetoEnabled,a=e.sessions.map(a=>{if(a.id===n||!n&&a.id===e.sessions[e.sessions.length-1]?.id){let n=a.points||0,o=a.vetoPointsEarned||0,s=(a.results||[]).map(a=>{if(a.questionId===r){let r=a.status,s=i.status||r;if(r!==`done`&&s===`done`){let r=e.settings.pointsByDifficulty[a.difficulty]||20;n+=r,t&&(o+=r)}return{...a,...i,status:s,isCutoff:!1}}return a});return{...a,points:n,vetoPointsEarned:o,results:s}}return a}),o={...e.questionStates,[r]:{...e.questionStates[r]||{},lastAttemptedAt:new Date().toISOString(),status:i.status,confidence:i.confidence}};return{...e,questionStates:o,sessions:a}}),s(t=>{if(!t)return t;let n=t.points||0,a=t.vetoPointsEarned||0,o=!!e.settings?.vetoEnabled,s=(t.results||[]).map(t=>{if(t.questionId===r){let r=t.status,s=i.status||r;if(r!==`done`&&s===`done`){let r=e.settings.pointsByDifficulty[t.difficulty]||20;n+=r,o&&(a+=r)}return{...t,...i,status:s,isCutoff:!1}}return t});return{...t,points:n,vetoPointsEarned:a,results:s}})}}):(0,V.jsx)(ht,{questions:e.questions,settings:e.settings,onStartSprint:t=>{let n=vt(t.matchingQuestions,t.quota,e.questionStates,t.seed),r={sessionData:{...t,queue:n,startedAtMs:Date.now(),totalPausedMs:0,isPaused:!1,pauseStartedAtMs:null},currentIndex:0,attempts:0,results:[],questionStartTime:Date.now(),preCountdownDone:!1};s(null),a(r)}})),n===`bank`&&(0,V.jsx)(ft,{questions:e.questions,questionStates:e.questionStates,sessions:e.sessions,onUpdateQuestions:e=>t(t=>({...t,questions:e})),onUpdateQuestionStates:e=>t(t=>({...t,questionStates:e})),onResetToDefault:()=>t(e=>({...e,questions:DEFAULT_QUESTIONS}))}),n===`analytics`&&(0,V.jsx)(Tt,{sessions:e.sessions,questionStates:e.questionStates,questions:e.questions,todayStats:p,settings:e.settings}),n===`settings`&&(0,V.jsx)(Lt,{settings:e.settings,questions:e.questions,sessions:e.sessions,onSaveSettings:e=>{t(t=>({...t,settings:{...e,updatedAtMs:Date.now()}}))},onImportJSON:e=>{Array.isArray(e)?t(t=>({...t,questions:e})):e&&e.questions&&t(t=>({...t,questions:e.questions,settings:e.settings||t.settings}))},onImportCSV:e=>{t(t=>({...t,questions:e}))},onResetData:()=>{window.confirm(`Are you sure you want to reset all data to defaults? This action cannot be undone.`)&&(localStorage.clear(),window.location.reload())}})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(_.StrictMode,{children:(0,V.jsx)(Ht,{})}));