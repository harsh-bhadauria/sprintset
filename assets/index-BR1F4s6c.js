var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(O,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,O=te.port2;te.port1.onmessage=E,D=function(){O.postMessage(null)}}else D=function(){_(E,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},P=[],ae=-1;function oe(e){return{current:e}}function se(e){0>ae||(e.current=P[ae],P[ae]=null,ae--)}function F(e,t){ae++,P[ae]=e.current,e.current=t}var ce=oe(null),le=oe(null),ue=oe(null),de=oe(null);function fe(e,t){switch(F(ue,t),F(le,e),F(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(ce),F(ce,e)}function pe(){se(ce),se(le),se(ue)}function me(e){e.memoizedState!==null&&F(de,e);var t=ce.current,n=Hd(t,e.type);t!==n&&(F(le,e),F(ce,n))}function I(e){le.current===e&&(se(ce),se(le)),de.current===e&&(se(de),Qf._currentValue=N)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=M.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var ot=Math.random().toString(36).slice(2),R=`__reactFiber$`+ot,st=`__reactProps$`+ot,ct=`__reactContainer$`+ot,lt=`__reactEvents$`+ot,ut=`__reactListeners$`+ot,dt=`__reactHandles$`+ot,ft=`__reactResources$`+ot,pt=`__reactMarker$`+ot;function mt(e){delete e[R],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[R];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[R]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[R])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[R]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return Se.call(Et,e)?!0:Se.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ie(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),jn=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(h({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(h({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(h({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){yd(e,0)}function lr(e){if(Ft(_t(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(ln){var fr;if(ln){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,tn(e)),sn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=ln&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==It(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Ed(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};ln&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),z=zr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),St(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=si(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return fi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=si(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=si(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=si(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-ze(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw H(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[R]=e,t[st]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function H(e){Ni===null?Ni=[e]:Ni.push(e)}var Hi=oe(null),Ui=null,Wi=null;function Gi(e,t,n){F(Hi,t._currentValue),t._currentValue=n}function U(e){e._currentValue=Hi.current,se(Hi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Ui=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Ui,e)}function Qi(e,t){return Ui===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wi===null){if(e===null)throw Error(i(308));Wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wi=Wi.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=j.S;j.S=function(e,t){eu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=oe(null);function ha(){var e=ma.current;return e===null?Rl.pooledCache:e}function ga(e,t){t===null?F(ma,ma.current):F(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case D:return t=wa(t),f(e,t,n)}if(ie(t)||ne(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=wa(n),p(e,t,n,r)}if(ie(n)||ne(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=wa(r),m(e,t,n,r,i)}if(ie(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=wa(o),b(e,r,o,c)}if(ie(o))return h(e,r,o,c);if(ne(o)){if(l=ne(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=oe(null),Ya=oe(0);function Xa(e,t){e=Ul,F(Ya,e),F(Ja,t),Ul=e|t.baseLanes}function Za(){F(Ya,Ul),F(Ja,Ja.current)}function Qa(){Ul=Ya.current,se(Ja),se(Ya)}var $a=oe(null),eo=null;function to(e){var t=e.alternate;F(oo,oo.current&1),F($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){F(oo,oo.current),F($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(F(oo,oo.current),F($a,e),eo===null&&(eo=e)):io(e)}function io(){F(oo,oo.current),F($a,$a.current)}function ao(e){se($a),eo===e&&(eo=null),se(oo)}var oo=oe(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var W=0,G=null,K=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return W=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Is:Ls,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){j.H=Fs;var t=K!==null&&K.next!==null;if(W=0,co=K=G=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&Yi(e)&&(ec=!0))}function xo(e,t,n,r){G=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=K=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Rs,o=t(n,r)}while(uo);return o}function So(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(K===null?null:K.memoizedState)!==e&&(G.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}W=0,co=K=G=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?G.memoizedState=co=e:co=co.next=e,co}function Do(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=co===null?G.memoizedState:co.next;if(t!==null)co=t,K=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},co===null?G.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=Ca(ho,e,t),t=G,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Is:Ls),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),K,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(W&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((W&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Gl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(ec=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=G,a=Do(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((K||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||W&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=Oo(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Vo(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Ho(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,K,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(V){var n=Rl.formState;if(n!==null){a:{var r=G;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=ks.bind(null,G,r),r.dispatch=n,r=Ho(!1),a=js.bind(null,G,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qo(e){return $o(Do(),K,e)}function $o(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===va?ba:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,ns(9,{destroy:void 0},es.bind(null,i,n),null)),[r,a,e]}function es(e,t){e.action=t}function ts(e){var t=Do(),n=K;if(n!==null)return $o(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=Oo(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Do().memoizedState}function is(e,t,n,r){var i=Eo();G.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;K!==null&&r!==null&&vo(r,K.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(G.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=Oo(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Do().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||W&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),G.lanes|=e,Gl|=e,n)}function vs(e,t,n,r){return Sr(n,t)?n:Ja.current===null?!(W&42)||W&1073741824&&!(Y&261930)?(ec=!0,e.memoizedState=n):(e=mu(),G.lanes|=e,Gl|=e,t):(e=_s(e,n,r),Sr(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,js(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,fa(c,r),pu(e)):As(e,t,r,pu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,N,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:N},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},pu())}function ws(){return Zi(Qf)}function Ts(){return Do().memoizedState}function Es(){return Do().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,pu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ei(e,t,i,0),Rl===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Ms(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ns(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Fs={readContext:Zi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Fs.useEffectEvent=_o;var Is={readContext:Zi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=ks.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Eo(),e,t)},useTransition:function(){var e=Ho(!1);return e=ys.bind(null,G,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Eo();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(zo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Rl.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ds.bind(null,G)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:Zi,use:Ao,useCallback:hs,useContext:Zi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:No,useRef:rs,useState:function(){return No(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Do(),K.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){return Uo(Do(),K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:Zi,use:Ao,useCallback:hs,useContext:Zi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Fo,useRef:rs,useState:function(){return Fo(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Do();return K===null?_s(n,e,t):vs(n,K.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var n=Do();return K===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,K,e,t)},useMemoCache:jo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){Yr(e)}function Gs(e){console.error(e)}function Ks(e){Yr(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=za(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(V)return t=$a.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),H(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Ys(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),H(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(V&&s&&ki(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Pa(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(no(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ec||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Rl,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),hu(r,e,s),$s;Du(),t=lc(e,t,n)}else e=o.treeContext,B=cf(s.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=cc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return Xi(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(V&&r&&ki(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!ec?(wo(e,t,a),Ec(e,t,a)):(V&&r&&ki(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Ia||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Ia||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Bi(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:_a()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(oo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(a?to(t):io(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):(to(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,H({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Rl,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(s,e,r),$s;af(c)||Du(),t=Sc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Pa(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,F(oo,o),tc(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Yi(e)))}function Oc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Gi(t,ra,e.memoizedState.cache),Bi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(oo,oo.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Gi(t,ra,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}else ec=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}if(a===E){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Gi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}else if(r!==a){a=_i(Error(i(424)),t),H(a),t=hc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(ue.current).createElement(n),r[R]=t,r[st]=e,Pd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,ue.current),Mi=t,Pi=!0,a=B,Zd(t.type)?(lf=a,B=cf(r.firstChild)):B=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return yc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Gi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=Rl,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Gi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Gi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gi(t,ra,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Pc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ic(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fc(t),null;case 1:return Fc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),U(ra),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),Fc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(Fc(t),jc(t,a,null,r,n)):(Fc(t),Mc(t,o))):o?o===e.memoizedState?(Fc(t),t.flags&=-16777217):(Ac(t),Fc(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),Fc(t),jc(t,a,e,r,n)),null;case 27:if(I(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}e=ce.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,Ac(t))}return Fc(t),null;case 5:if(I(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Fc(t),null}if(o=ce.current,zi(t))Li(t,o);else{var s=Bd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[R]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return Fc(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[R]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[R]=t,t.stateNode=e}return Fc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[R]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Fc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[R]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fc(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),Fc(t),null);case 4:return pe(),e===null&&Sd(t.stateNode.containerInfo),Fc(t),null;case 10:return U(t.type),Fc(t),null;case 19:if(se(oo),r=t.memoizedState,r===null)return Fc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Pc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return F(oo,oo.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>tu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return Fc(t),null}else 2*De()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Fc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=oo.current,F(oo,a?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Fc(t),t.subtreeFlags&6&&(t.flags|=8192)):Fc(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),U(ra),Fc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Lc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return U(ra),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return I(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(oo),null;case 4:return pe(),null;case 10:return U(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&se(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return U(ra),null;case 25:return null;default:return null}}function Rc(e,t){switch(Ai(t),t.tag){case 3:U(ra),pe();break;case 26:case 27:case 5:I(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:se(oo);break;case 10:U(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&se(ma);break;case 24:U(ra)}}function zc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Bc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Vc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Hc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Uc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Wc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Gc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Kc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[st]=t}catch(t){Z(e,e.return,t)}}function qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Jc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[R]=e,t[st]=n}catch(t){Z(e,e.return,t)}}var Qc=!1,$c=!1,el=!1,tl=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Rd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function il(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&zc(5,n);break;case 1:if(yl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Vc(n),r&512&&Uc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Zc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Gc(n),r&512&&Uc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Qc,!r){t=t!==null&&t.memoizedState!==null||$c,i=Qc;var a=$c;Qc=r,($c=t)&&!a?xl(e,n,!!(n.subtreeFlags&8772)):yl(e,n),Qc=i,$c=a}break;case 30:break;default:yl(e,n)}}function al(e){var t=e.alternate;t!==null&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ol=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:$c||Wc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$c||Wc(n,t);var r=ol,i=sl;Zd(n.type)&&(ol=n.stateNode,sl=!1),cl(e,t,n),pf(n.stateNode),ol=r,sl=i;break;case 5:$c||Wc(n,t);case 6:if(r=ol,i=sl,ol=null,cl(e,t,n),ol=r,sl=i,ol!==null)if(sl)try{(ol.nodeType===9?ol.body:ol.nodeName===`HTML`?ol.ownerDocument.body:ol).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{ol.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:ol!==null&&(sl?(e=ol,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ol,n.stateNode));break;case 4:r=ol,i=sl,ol=n.stateNode.containerInfo,sl=!0,cl(e,t,n),ol=r,sl=i;break;case 0:case 11:case 14:case 15:Bc(2,n,t),$c||Bc(4,n,t),cl(e,t,n);break;case 1:$c||(Wc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Hc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:$c=(r=$c)||n.memoizedState!==null,cl(e,t,n),$c=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ol=c.stateNode,sl=!1;break a}break;case 5:ol=c.stateNode,sl=!1;break a;case 3:case 4:ol=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(ol===null)throw Error(i(160));ll(o,s,a),ol=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Bc(3,e,e.return),zc(3,e),Bc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&64&&Qc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[R]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[R]=e,yt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[R]=e,yt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),n!==null&&r&4&&Kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&($c||n===null||Wc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Kc(e,a,n===null?a:n.memoizedProps)),r&1024&&(el=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=gf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}el&&(el=!1,vl(e));break;case 4:r=hl,hl=gf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Qc,d=$c;if(Qc=u||a,$c=d||l,ml(t,e),$c=d,Qc=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qc||$c||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Xc(e,Jc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Xc(e,Jc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Yc(e,Jc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)il(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),bl(t);break;case 1:Wc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Hc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Wc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),zc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Vc(a),Uc(a,a.return);break;case 27:Zc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Gc(a),Uc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Uc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&zc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),zc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=gf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(al(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var Il={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:j.T===null?it():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||V){var e=We;We<<=1,!(We&3932160)&&(We=262144),Jl=e}else Jl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-De(),10<a)){if(yu(r,t,Jl,!Bl),L(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Al(t,a,d);var m=(a&62914560)===a?$l-De():(a&4194048)===a?eu-De():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Wi=Ui=null,To(e),Oa=null,ka=0,e=J;for(;e!==null;)Rc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){G=null,j.H=Fs,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,qs(e,_i(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=j.H;return j.H=Fs,e===null?Fs:e}function Eu(){var e=j.A;return j.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Wi=Ui=null,q=r,j.H=i,j.A=a,J===null&&(Rl=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=De()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Wi=Ui=null,j.H=r,j.A=a,q=n,J===null?(Rl=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!Te();)Mu(J)}function Mu(e){var t=kc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:To(t);default:Rc(n,t),t=J=ui(t,Ul),t=kc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Wi=Ui=null,To(t),Oa=null,ka=0;var i=t.return;try{if(Qs(e,i,t,n,Y)){Wl=1,qs(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,qs(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Ic(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Lc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,Qe(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=q,q|=4;try{rl(e,t,n)}finally{q=s,M.p=a,j.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=q;q|=4;try{gl(t,e);var a=zd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,M.p=r,j.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=q;q|=4;try{il(e,t.alternate,t)}finally{q=i,M.p=r,j.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ee();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{M.p=a,j.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Ys(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=Xs(2),r=Ba(t,n,2),r!==null&&(Zs(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>De()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=ni(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ce(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=L(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=De(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=L(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),rt(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=L(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,De()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){q&6?Ce(ke,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(Br,`onAnimationEnd`),Jr(Vr,`onAnimationIteration`),Jr(Hr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Ur,`onTransitionRun`),Jr(Wr,`onTransitionStart`),Jr(Gr,`onTransitionCancel`),Jr(z,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=jn;break;case z:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=Ed(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=M.d;M.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=vt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);yt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ue.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),yt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,yt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[R]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,up(e,t,n,r)}finally{M.p=a,j.T=i}}function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,up(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=De()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ct]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ee=(0,_.createContext)({}),T=()=>(0,_.useContext)(ee),E=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=T()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),D=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(E,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},te=D(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),O=D(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),k=D(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),ne=D(`calendar`,[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}]]),A=D(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),re=D(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ie=D(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),j=D(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),M=D(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),N=D(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),P=D(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ae=D(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),oe=D(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),se=D(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),F=D(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),ce=D(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),le=D(`ellipsis-vertical`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}]]),ue=D(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),de=D(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),fe=D(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),pe=D(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),me=D(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),I=D(`folder-plus`,[[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`M9 13h6`,key:`1uhe8q`}],[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),he=D(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),ge=D(`gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),_e=D(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),ve=D(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ye=D(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),be=D(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),xe=D(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Se=D(`paw-print`,[[`circle`,{cx:`11`,cy:`4`,r:`2`,key:`vol9p0`}],[`circle`,{cx:`18`,cy:`8`,r:`2`,key:`17gozi`}],[`circle`,{cx:`20`,cy:`16`,r:`2`,key:`1v9bxh`}],[`path`,{d:`M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z`,key:`1ydw1z`}]]),Ce=D(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),we=D(`pen`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),Te=D(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Ee=D(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),De=D(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),Oe=D(`replace`,[[`path`,{d:`M14 4a1 1 0 0 1 1-1`,key:`dhj8ez`}],[`path`,{d:`M15 10a1 1 0 0 1-1-1`,key:`1mnyi5`}],[`path`,{d:`M21 4a1 1 0 0 0-1-1`,key:`sfs9ap`}],[`path`,{d:`M21 9a1 1 0 0 1-1 1`,key:`mp6qeo`}],[`path`,{d:`m3 7 3 3 3-3`,key:`x25e72`}],[`path`,{d:`M6 10V5a2 2 0 0 1 2-2h2`,key:`15xut4`}],[`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`,key:`1bkyp8`}]]),ke=D(`rotate-ccw-clock`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]]),Ae=D(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),je=D(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),Me=D(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ne=D(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Pe=D(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Fe=D(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Ie=D(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),Le=D(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Re=D(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),ze=D(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Be=D(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Ve=D(`triangle`,[[`path`,{d:`M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z`,key:`14u9p9`}]]),He=D(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),Ue=D(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),We=D(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ge=D(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),Ke=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),L=o(((e,t)=>{t.exports=Ke()}))();function qe({activeTab:e,onSelectTab:t,todayFocusMinutes:n=0,vetoMinutes:r=0,vetoEnabled:i=!0,onOpenVetoModal:a,settings:o={},onToggleTheme:s,isSyncing:c=!1,onSyncCloud:l,hasActiveSprint:u=!1}){let d=o?.theme!==`light`;return(0,L.jsxs)(`header`,{className:`header-container ${u?`header-sprint-active`:``}`,children:[(0,L.jsxs)(`div`,{className:`header-content`,children:[(0,L.jsxs)(`div`,{className:`brand-group`,onClick:()=>t(`sprint`),children:[(0,L.jsx)(Ve,{className:`brand-icon`,size:24,strokeWidth:1.75}),(0,L.jsxs)(`div`,{className:`brand-text`,children:[(0,L.jsx)(`span`,{className:`brand-name`,children:`Sprintset`}),(0,L.jsx)(`span`,{className:`brand-tagline`,children:`DSA Focus Sprint`})]})]}),(0,L.jsxs)(`nav`,{className:`nav-tabs`,children:[(0,L.jsxs)(`button`,{className:`nav-btn ${e===`sprint`?`active`:``}`,onClick:()=>t(`sprint`),children:[(0,L.jsx)(Ge,{size:18}),(0,L.jsx)(`span`,{children:`Sprint`})]}),(0,L.jsxs)(`button`,{className:`nav-btn ${e===`bank`?`active`:``}`,onClick:()=>t(`bank`),children:[(0,L.jsx)(F,{size:18}),(0,L.jsx)(`span`,{children:`Bank`})]}),(0,L.jsxs)(`button`,{className:`nav-btn ${e===`analytics`?`active`:``}`,onClick:()=>t(`analytics`),children:[(0,L.jsx)(A,{size:18}),(0,L.jsx)(`span`,{children:`Analytics`})]})]}),(0,L.jsxs)(`div`,{className:`header-right-group`,children:[(0,L.jsxs)(`div`,{className:`header-metrics-group`,children:[c&&(0,L.jsxs)(`div`,{className:`today-metric-pill sync-indicator-pill`,title:`Syncing with Supabase Realtime`,children:[(0,L.jsx)(De,{size:14,className:`sync-spin`}),(0,L.jsx)(`span`,{className:`text-xs font-semibold`,children:`Syncing`})]}),(0,L.jsxs)(`div`,{className:`today-metric-pill`,title:`Total focus minutes logged today`,children:[(0,L.jsx)(oe,{size:15,className:`text-amber flex-shrink-0`}),(0,L.jsxs)(`span`,{children:[(0,L.jsxs)(`strong`,{children:[n,`m`]}),(0,L.jsx)(`span`,{className:`pill-text-long`,children:` focused`})]})]}),i&&(0,L.jsxs)(`button`,{type:`button`,className:`today-metric-pill veto-metric-pill`,onClick:a,title:`Veto Time Bank Rewards`,children:[(0,L.jsx)(Se,{size:15,className:`text-amber flex-shrink-0`}),(0,L.jsxs)(`span`,{children:[(0,L.jsxs)(`strong`,{children:[`+`,r,`m`]}),(0,L.jsx)(`span`,{className:`pill-text-long`,children:` Veto`})]})]})]}),(0,L.jsxs)(`div`,{className:`header-quick-actions`,children:[(0,L.jsx)(`button`,{className:`icon-btn`,onClick:s,title:d?`Switch to Light Theme`:`Switch to Dark Theme`,children:d?(0,L.jsx)(Le,{size:18}):(0,L.jsx)(be,{size:18})}),(0,L.jsx)(`button`,{className:`icon-btn ${c?`sync-spin`:``}`,onClick:l,disabled:c,title:`Sync Cloud Data (Supabase Realtime)`,children:(0,L.jsx)(De,{size:18})}),(0,L.jsx)(`button`,{className:`icon-btn ${e===`settings`?`active-icon`:``}`,onClick:()=>t(`settings`),title:`Settings`,children:(0,L.jsx)(Ne,{size:18})})]})]})]}),(0,L.jsx)(`style`,{children:`
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
        }

        .icon-btn:hover, .icon-btn.active-icon {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
          background: var(--bg-card-hover);
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
      `})]})}function Je(e){let t=e>>>0;return function(){let e=t+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ye(){return Math.floor(Math.random()*1e6)+1}var Xe={speedy:ge,steady:Re,balanced:Ve,grind:pe,gauntlet:He,custom:me},Ze=m();function Qe(e){return e?{"Dynamic Programming":`DP`,"Priority Queue":`PQ`,"Heap / Priority Queue":`Heap / PQ`,"Bit Manipulation":`Bit Manipulation`,"Arrays & Hashing":`Arrays & Hashing`,"Sliding Window":`Sliding Window`,"Two Pointers":`Two Pointers`,"Binary Search":`Binary Search`,"Stack & Queue":`Stack & Queue`,"Linked List":`Linked List`}[e]||e:``}function $e(e,t={}){if(e.status!==`done`)return null;let n=((t.timeWeightsByDifficulty||{Easy:4,Medium:8,Hard:15})[e.difficulty]||5)*60,r=(e.attempts||0)+1;return r===1&&e.timeSec<=n*.75?`solid`:r>=2||e.timeSec>n?`shaky`:`ok`}function et({session:e,settings:t,onStartNewSprint:n,onGoHome:r,onUpdateSessionConfidence:i}){let a=e=>e.questionLink&&e.questionLink.trim()!==``?e.questionLink:`https://www.google.com/search?q=${encodeURIComponent(`${e.questionName||``} leetcode`)}`,{id:o,results:s=[],points:c=0,maxPossiblePoints:l=100,totalQuota:u=0,actualDurationSec:d,durationSec:f,isEndedEarly:p=!1}=e||{},[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)({}),y=s,b=u||y.length,x=y.filter(e=>e.status===`done`).length,S=y.filter(e=>e.status===`gave_up`).length,C=x+S,w=`ended_early`;w=p?`ended_early`:x>=b&&b>0?`complete`:C>=b&&b>0?`finished`:`times_up`;let ee=e=>`${Math.floor(e/60)}m ${e%60}s`,T=(()=>{switch(w){case`complete`:return{title:`Sprint Complete! 🎉`,badgeClass:`badge-outcome-complete`,badgeText:`100% Solved`};case`finished`:return{title:`Sprint Finished 💪`,badgeClass:`badge-outcome-finished`,badgeText:`Fully Resolved`};case`times_up`:return{title:`Time's Up ⏱️`,badgeClass:`badge-outcome-timesup`,badgeText:`Time Expired`};default:return{title:`Sprint Ended Early 🛑`,badgeClass:`badge-outcome-early`,badgeText:`Stopped Early`}}})(),E=()=>w===`complete`?`Flawless performance! You conquered all ${x} questions in your sprint before time ran out.`:w===`finished`?`Great focus! Sprint questions fully resolved (${x} Solved, ${S} Gave Up). Weighted resurfacing will prioritize gave-up topics.`:w===`times_up`?`Timer expired with ${C} of ${b} questions resolved (${x} Solved, ${S} Gave Up).`:`Sprint stopped early. ${x} solved and ${S} gave up out of ${b} questions.`;(0,_.useEffect)(()=>{let e=()=>h(null);if(m){let t=setTimeout(()=>{window.addEventListener(`click`,e)},10);return()=>{clearTimeout(t),window.removeEventListener(`click`,e)}}},[m]);let D=(e,t)=>{if(e.preventDefault(),e.stopPropagation(),m&&m.qId===t)h(null);else{let n=e.currentTarget.getBoundingClientRect(),r=window.innerHeight,i=r-n.bottom,a=n.bottom+4;a=i<145&&n.top>145?n.top-145-4:Math.min(a,r-145-12),h({qId:t,top:Math.max(10,Math.round(a)),left:Math.round(n.left)})}},te=e=>{if(m&&m.qId){let t=m.qId;v(n=>({...n,[t]:e})),i(o,t,e)}h(null)};return(0,L.jsxs)(`div`,{className:`summary-container glass-card`,children:[(0,L.jsxs)(`div`,{className:`summary-header`,children:[(0,L.jsxs)(`div`,{className:`banner-title-row`,children:[(0,L.jsx)(`h2`,{className:`summary-title`,children:T.title}),(0,L.jsx)(`span`,{className:`outcome-status-chip ${T.badgeClass}`,children:T.badgeText})]}),(0,L.jsx)(`p`,{className:`summary-subtitle`,children:E()})]}),(0,L.jsxs)(`div`,{className:`kpi-summary-grid`,children:[(0,L.jsxs)(`div`,{className:`kpi-card`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-group icon-gold`,children:(0,L.jsx)(O,{size:20})}),(0,L.jsxs)(`div`,{className:`kpi-info`,children:[(0,L.jsxs)(`span`,{className:`kpi-value text-gold`,children:[`+`,c,` pts`]}),(0,L.jsxs)(`span`,{className:`kpi-label`,children:[`Points Earned (Max `,l,`)`]})]})]}),(0,L.jsxs)(`div`,{className:`kpi-card`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-group icon-green`,children:(0,L.jsx)(P,{size:20})}),(0,L.jsxs)(`div`,{className:`kpi-info`,children:[(0,L.jsxs)(`span`,{className:`kpi-value`,children:[x,` / `,b]}),(0,L.jsx)(`span`,{className:`kpi-label`,children:`Questions Solved`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-card`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-group icon-blue`,children:(0,L.jsx)(oe,{size:20})}),(0,L.jsxs)(`div`,{className:`kpi-info`,children:[(0,L.jsx)(`span`,{className:`kpi-value font-mono`,children:ee(d||0)}),(0,L.jsxs)(`span`,{className:`kpi-label`,children:[`Time Spent (Limit `,Math.round((f||0)/60),`m)`]})]})]})]}),(0,L.jsxs)(`div`,{className:`summary-actions-top`,children:[(0,L.jsxs)(`button`,{className:`btn btn-secondary`,onClick:r,children:[(0,L.jsx)(_e,{size:16}),(0,L.jsx)(`span`,{children:`Return to Dashboard`})]}),(0,L.jsxs)(`button`,{className:`btn btn-primary btn-start`,onClick:n,children:[(0,L.jsx)(Te,{size:16}),(0,L.jsx)(`span`,{children:`Start Another Sprint`})]})]}),(0,L.jsxs)(`div`,{className:`breakdown-section`,children:[(0,L.jsx)(`div`,{className:`breakdown-header`,children:(0,L.jsx)(`h3`,{className:`section-title`,children:`Question Breakdown`})}),(0,L.jsx)(`div`,{className:`table-responsive`,children:(0,L.jsxs)(`table`,{className:`breakdown-table`,children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{className:`col-status-wide`,children:`Status`}),(0,L.jsx)(`th`,{children:`Question Name`}),(0,L.jsx)(`th`,{children:`Topic`}),(0,L.jsx)(`th`,{children:`Diff`}),(0,L.jsx)(`th`,{children:`Attempts`}),(0,L.jsx)(`th`,{children:`Time Spent`}),(0,L.jsx)(`th`,{children:`Confidence`})]})}),(0,L.jsx)(`tbody`,{children:y.length>0?y.map((e,n)=>{let r=g[e.questionId]||e.confidence||$e(e,t);return(0,L.jsxs)(`tr`,{className:e.status===`done`?`row-done`:`row-gave-up`,children:[(0,L.jsx)(`td`,{className:`col-status-wide`,children:e.status===`done`?(0,L.jsxs)(`span`,{className:`status-pill status-solved`,children:[(0,L.jsx)(P,{size:14}),` Solved`]}):(0,L.jsxs)(`span`,{className:`status-pill status-gaveup`,children:[(0,L.jsx)(ae,{size:14}),` Gave Up`]})}),(0,L.jsx)(`td`,{children:(0,L.jsxs)(`a`,{href:a(e),target:`_blank`,rel:`noopener noreferrer`,className:`question-link-cell`,children:[(0,L.jsx)(`span`,{className:`font-semibold text-primary`,children:e.questionName}),(0,L.jsx)(ue,{size:12,className:`question-link-icon`})]})}),(0,L.jsx)(`td`,{children:(0,L.jsx)(`span`,{className:`badge badge-topic`,children:Qe(e.topic)})}),(0,L.jsx)(`td`,{children:(0,L.jsx)(`span`,{className:`badge badge-${(e.difficulty||`easy`).toLowerCase()}`,children:e.difficulty})}),(0,L.jsx)(`td`,{className:`font-mono text-center`,children:(0,L.jsx)(`span`,{className:`attempts-count`,children:e.status===`gave_up`?`-`:(e.attempts||0)+1})}),(0,L.jsx)(`td`,{className:`font-mono text-muted`,children:e.timeSec?ee(e.timeSec):`-`}),(0,L.jsx)(`td`,{children:e.status===`done`?(0,L.jsxs)(`button`,{type:`button`,className:`conf-pill-btn conf-${r}`,onClick:t=>D(t,e.questionId),title:`Click to override confidence`,children:[(0,L.jsx)(`span`,{className:`conf-dot`}),(0,L.jsx)(`span`,{className:`conf-label`,children:r?r.toUpperCase():`SET`}),(0,L.jsx)(Ce,{size:11,className:`conf-pencil-icon`})]}):(0,L.jsx)(`span`,{className:`text-muted text-xs italic`,children:`-`})})]},n)}):(0,L.jsx)(`tr`,{children:(0,L.jsx)(`td`,{colSpan:`7`,className:`text-center py-6 text-muted`,children:`No questions recorded in this sprint.`})})})]})})]}),m&&(0,Ze.createPortal)((0,L.jsxs)(`div`,{className:`portal-conf-popover`,style:{position:`fixed`,top:`${m.top}px`,left:`${m.left}px`,zIndex:999999},onClick:e=>e.stopPropagation(),children:[(0,L.jsx)(`div`,{className:`popover-header-title`,children:`Select Confidence:`}),(0,L.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-solid`,onClick:()=>te(`solid`),children:[(0,L.jsx)(`span`,{className:`conf-dot dot-solid`}),(0,L.jsx)(`span`,{children:`Solid`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-ok`,onClick:()=>te(`ok`),children:[(0,L.jsx)(`span`,{className:`conf-dot dot-ok`}),(0,L.jsx)(`span`,{children:`OK`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`popover-option-btn option-shaky`,onClick:()=>te(`shaky`),children:[(0,L.jsx)(`span`,{className:`conf-dot dot-shaky`}),(0,L.jsx)(`span`,{children:`Shaky`})]})]}),document.body),(0,L.jsx)(`style`,{children:`
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

        .status-solved {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-gaveup {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
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
      `})]})}var tt=c(o(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){return e.charCodeAt(0)===65279?e.slice(1):e}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(S(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!S(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){S(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function d(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;l.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function p(e){l.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=x(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=x(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=x(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function m(e){var t,n,r,i,a=2**53,o=-a,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,f=0,p=0,m=!1,_=!1,v=[],y={data:[],errors:[],meta:{}};function x(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function C(){if(y&&r&&(ee(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(y.data=y.data.filter(function(e){return!x(e)})),w()){if(y)if(Array.isArray(y.data[0])){for(var t=0;w()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,n){t=c(t),S(e.transformHeader)&&(t=e.transformHeader(t,n)),v.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,c=t[i],c=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(l.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):u.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=v.length?`__parsed_extra`:v[i]:s,c=e.transform?e.transform(c,s):c);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(c)):r[s]=c}return e.header&&(i>v.length?ee(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+v.length+` fields but parsed `+i,p+n):i<v.length&&ee(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+v.length+` fields but parsed `+i,p+n)),r}var i;y&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(n),i=y.data.length):y.data=n(y.data,0),e.header&&y.meta&&(y.meta.fields=v),p+=i)}function w(){return e.header&&v.length===0}function ee(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),y.errors.push(e)}S(e.step)&&(i=e.step,e.step=function(t){y=t,w()?C():(C(),y.data.length!==0&&(f+=t.data.length,e.preview&&f>e.preview?n.abort():(y.data=y.data[0],i(y,d))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?S(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,h=0,_=0,v=(l=void 0,new g({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&x(v.data[y])?_++:(f=v.data[y].length,h+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(h/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<h)&&1.99<h&&(c=m,o=p,u=h)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),y.meta.delimiter=e.delimiter),b(e));return e.preview&&e.header&&c.preview++,t=i,n=new g(c),y=n.parse(t,a,o),C(),m?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return m},this.pause=function(){m=!0,n.abort(),t=S(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){d.streamer._halted?(m=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return _},this.abort=function(){_=!0,n.abort(),y.meta.aborted=!0,S(e.complete)&&e.complete(y),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(h(t)+`([^]*?)`+h(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function g(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,l=null,u=!1,d=e.quoteChar==null?`"`:e.quoteChar,f=d;if(e.escapeChar!==void 0&&(f=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var p=0,m=!1;this.parse=function(s,g,_){if(typeof s!=`string`)throw Error(`Input must be a string`);var v=s.length,y=t.length,b=n.length,x=r.length,C=S(i),w=[],ee=[],T=[],E=p=0;if(!s)return P();if(o||!1!==o&&s.indexOf(d)===-1){for(var D=s.split(n),te=0;te<D.length;te++){if(T=D[te],p+=T.length,te!==D.length-1)p+=n.length;else if(_)return P();if(!r||T.substring(0,x)!==r){if(C){if(w=[],ie(T.split(t)),ae(),m)return P()}else ie(T.split(t));if(a&&a<=te)return w=w.slice(0,a),P(!0)}}return P()}for(var O=s.indexOf(t,p),k=s.indexOf(n,p),ne=new RegExp(h(f)+h(d),`g`),A=s.indexOf(d,p);;)if(s[p]===d)for(A=p,p++;;){if((A=s.indexOf(d,A+1))===-1)return _||ee.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:w.length,index:p}),M();if(A===v-1)return M(s.substring(p,A).replace(ne,d));if(d===f&&s[A+1]===f)A++;else if(d===f||A===0||s[A-1]!==f){O!==-1&&O<A+1&&(O=s.indexOf(t,A+1));var re=j((k=k!==-1&&k<A+1?s.indexOf(n,A+1):k)===-1?O:Math.min(O,k));if(s.substr(A+1+re,y)===t){T.push(s.substring(p,A).replace(ne,d)),s[p=A+1+re+y]!==d&&(A=s.indexOf(d,p)),O=s.indexOf(t,p),k=s.indexOf(n,p);break}if(re=j(k),s.substring(A+1+re,A+1+re+b)===n){if(T.push(s.substring(p,A).replace(ne,d)),N(A+1+re+b),O=s.indexOf(t,p),A=s.indexOf(d,p),C&&(ae(),m))return P();if(a&&w.length>=a)return P(!0);break}ee.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:w.length,index:p}),A++}}else if(r&&T.length===0&&s.substring(p,p+x)===r){if(k===-1)return P();p=k+b,k=s.indexOf(n,p),O=s.indexOf(t,p)}else if(O!==-1&&(O<k||k===-1))T.push(s.substring(p,O)),p=O+y,O=s.indexOf(t,p);else{if(k===-1)break;if(T.push(s.substring(p,k)),N(k+b),C&&(ae(),m))return P();if(a&&w.length>=a)return P(!0)}return M();function ie(e){w.push(e),E=p}function j(e){var t=0;return t=e!==-1&&(e=s.substring(A+1,e))&&e.trim()===``?e.length:t}function M(e){return _||(e===void 0&&(e=s.substring(p)),T.push(e),p=v,ie(T),C&&ae()),P()}function N(e){p=e,ie(T),T=[],k=s.indexOf(n,p)}function P(r){if(e.header&&!g&&w.length&&!u){var i=w[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=c(i[n]);if(a[r=S(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(l=l===null?{}:l)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),u=!0}return{data:w,errors:ee,meta:{delimiter:t,linebreak:n,aborted:m,truncated:!!r,cursor:E+(g||0),renamedHeaders:l}}}function ae(){i(P()),w=[],ee=[]}},this.abort=function(){m=!0},this.getCharIndex=function(){return p}}function _(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(S(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else S(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=a[e];S(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function y(){throw Error(`Not implemented.`)}function b(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=b(e[t]);return n}function x(e,t){return function(){e.apply(t,arguments)}}function S(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(S(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!S(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=c(n),i=new(r.download?u:f)(r)):!0===n.readable&&S(n.read)&&S(n.on)?i=new p(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new d(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=_,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=S(r.step),r.chunk=S(r.chunk),r.complete=S(r.complete),r.error=S(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar,c=o+o),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var h=[],g=0;g<d;g++){var _=c?e[g]:g;h.push(t[u][_])}f=h.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=m(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function m(e,t){var r,a,l;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(l=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,l=!0),a=(r=e.toString()).replace(f,c),(l=l||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(a,s.BAD_DELIMITERS)||-1<a.indexOf(i)||-1<r.indexOf(o)||a.charAt(0)===` `||a.charAt(a.length-1)===` `)?o+a+o:a)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=g,s.ParserHandle=m,s.NetworkStreamer=u,s.FileStreamer=d,s.StringStreamer=f,s.ReadableStreamStreamer=p,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)S(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(S(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(S(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){S(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(l.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(p.prototype=Object.create(l.prototype)).constructor=p,s})}))(),1);function nt(e){if(e.sheets&&String(e.sheets).trim()!==``){let t=String(e.sheets).split(`;`).map(e=>e.trim()).filter(Boolean);if(t.length>0)return t}return e.sheet&&String(e.sheet).trim()!==``?[String(e.sheet).trim()]:[`Default`]}function rt(e){return new Promise((t,n)=>{tt.default.parse(e,{header:!0,skipEmptyLines:!0,dynamicTyping:!1,complete:e=>{e.errors&&e.errors.length>0&&console.warn(`CSV Parse Warnings:`,e.errors),t(e.data.filter(e=>e.name&&String(e.name).trim()!==``).map((e,t)=>({id:e.id?String(e.id).trim():`q-${Date.now()}-${t}`,name:String(e.name||``).trim(),topic:String(e.topic||`General`).trim(),difficulty:at(e.difficulty),sheets:nt(e),link:String(e.link||``).trim()})))},error:e=>n(e)})})}function it(e,t=`questions.csv`){let n=e.map(e=>({id:e.id,name:e.name,topic:e.topic,difficulty:e.difficulty,sheets:Array.isArray(e.sheets)?e.sheets.join(`; `):e.sheet||`Default`,link:e.link||``})),r=tt.default.unparse(n,{columns:[`id`,`name`,`topic`,`difficulty`,`sheets`,`link`]}),i=new Blob([r],{type:`text/csv;charset=utf-8;`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.setAttribute(`href`,a),o.setAttribute(`download`,t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function at(e){if(!e)return`Medium`;let t=String(e).trim().toLowerCase();return t.includes(`easy`)?`Easy`:t.includes(`hard`)?`Hard`:`Medium`}function ot({value:e,options:t,onChange:n,icon:r,placeholder:i=`Select...`}){let[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let c=t.find(t=>t.value===e)||{label:i,value:e};return(0,L.jsxs)(`div`,{className:`custom-select-container`,ref:s,children:[(0,L.jsxs)(`button`,{type:`button`,className:`custom-select-trigger ${a?`active`:``}`,onClick:()=>o(!a),children:[r&&(0,L.jsx)(r,{size:14,className:`select-icon`}),(0,L.jsx)(`span`,{className:`select-label`,children:c.label}),(0,L.jsx)(ie,{size:14,className:`select-arrow ${a?`rotate`:``}`})]}),a&&(0,L.jsx)(`div`,{className:`custom-select-dropdown glass-card`,children:(0,L.jsx)(`div`,{className:`select-options-scroll`,children:t.map(t=>{let r=t.value===e;return(0,L.jsxs)(`button`,{type:`button`,className:`select-option-item ${r?`selected`:``}`,onClick:()=>{n(t.value),o(!1)},children:[(0,L.jsx)(`span`,{className:`option-label`,children:t.label}),r&&(0,L.jsx)(Fe,{size:14,className:`option-check-icon`})]},t.value)})})})]})}var R=e=>{if(!e)return[`Default`];if(Array.isArray(e.sheets)&&e.sheets.length>0){let t=e.sheets.map(e=>String(e).trim()).filter(Boolean);return t.length>0?t:[`Default`]}return e.sheet&&String(e.sheet).trim()!==``?[String(e.sheet).trim()]:[`Default`]},st=e=>e&&e.link&&String(e.link).trim()!==``?String(e.link).trim():`https://www.google.com/search?q=${encodeURIComponent(`${e?e.name:``} leetcode`)}`,ct=(e,t=[],n=null,r=5)=>{let i=[];if(Array.isArray(t)&&t.length>0&&t.forEach(t=>{Array.isArray(t.results)&&t.results.forEach(n=>{if(n.questionId===e){let e=t.completedAt||t.timestamp?new Date(t.completedAt||t.timestamp).toLocaleDateString():``,r=`ok`,a=`OK`;n.confidence===`solid`||n.confidence===`tooEasy`?(r=`solid`,a=`Solid`):n.confidence===`shaky`||n.status===`skipped`?(r=`shaky`,a=`Shaky`):n.status===`gaveUp`||n.confidence===`wrong`?(r=`gaveUp`,a=`Gave Up`):(n.confidence===`ok`||n.status===`done`)&&(r=`ok`,a=`OK`),i.push({type:r,label:a,date:e})}})}),i.length===0&&n){let e=`ok`,t=`OK`,r=n.lastAttemptedAt?new Date(n.lastAttemptedAt).toLocaleDateString():``;n.confidence===`solid`||n.confidence===`tooEasy`?(e=`solid`,t=`Solid`):n.confidence===`shaky`||n.status===`skipped`?(e=`shaky`,t=`Shaky`):n.status===`gaveUp`||n.confidence===`wrong`?(e=`gaveUp`,t=`Gave Up`):n.confidence===`ok`&&(e=`ok`,t=`OK`),i.push({type:e,label:t,date:r})}return i.slice(-r)},lt=(e,t,n=null)=>{let r=new Map;e.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();t&&!r.has(t)&&r.set(t,e)});let i=[],a=new Set;return t.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();if(!t||a.has(t))return;a.add(t);let o=n||e.sheets&&e.sheets[0]||e.sheet||`Default`;if(r.has(t)){let n=r.get(t),a=R(n),s=Array.from(new Set([...a,o]));i.push({...n,sheets:s,link:n.link||e.link||``,topic:n.topic||e.topic||`General`})}else{let t=n?[n]:e.sheets&&e.sheets.length>0?e.sheets:[e.sheet||`Default`];i.push({id:e.id||`q-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,name:String(e.name).trim(),topic:String(e.topic||`General`).trim(),difficulty:e.difficulty||`Medium`,sheets:t,link:String(e.link||``).trim()})}}),e.forEach(e=>{let t=String(e.name||``).trim().toLowerCase();t&&!a.has(t)&&i.push(e)}),i};function ut({questions:e,questionStates:t={},sessions:n=[],onUpdateQuestions:r,onUpdateQuestionStates:i,onResetToDefault:a}){let[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(()=>{try{let e=localStorage.getItem(`sprintset_custom_sheets_v1`);return e?JSON.parse(e):[]}catch{return[]}}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),g=(0,_.useRef)(null),v=(0,_.useRef)(null),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(`ALL`),[C,w]=(0,_.useState)(`ALL`),[ee,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(``),[O,ne]=(0,_.useState)(null),[A,re]=(0,_.useState)(!1),[ie,M]=(0,_.useState)(null),[N,P]=(0,_.useState)({id:``,name:``,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Default`],link:``}),[ae,oe]=(0,_.useState)(!1),[se,F]=(0,_.useState)(``),[ue,de]=(0,_.useState)(!1),[fe,pe]=(0,_.useState)(`GLOBAL`),[me,ge]=(0,_.useState)(`topic`),[_e,ye]=(0,_.useState)(``),[be,xe]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=e=>{g.current&&!g.current.contains(e.target)&&p(!1),v.current&&!v.current.contains(e.target)&&h(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let Se=e=>{d(e);try{localStorage.setItem(`sprintset_custom_sheets_v1`,JSON.stringify(e))}catch(e){console.error(`Error saving custom sheets:`,e)}},Ce=(0,_.useMemo)(()=>{let t=new Map;return u.forEach(e=>{e&&e.trim()!==``&&t.set(e.trim(),[])}),e.forEach(e=>{R(e).forEach(n=>{t.has(n)||t.set(n,[]),t.get(n).push(e)})}),t},[e,u]),Te=(0,_.useMemo)(()=>{let e=[`Striver A2Z`,`Blind 75`,`NeetCode 150`];return Array.from(Ce.keys()).sort((t,n)=>{let r=e.indexOf(t),i=e.indexOf(n);return r!==-1&&i!==-1?r-i:r===-1?i!==-1||t===`Default`?1:n===`Default`?-1:t.localeCompare(n):-1})},[Ce]),ke=(0,_.useMemo)(()=>o?o===`ALL`?e:e.filter(e=>R(e).includes(o)):[],[e,o]),je=(0,_.useMemo)(()=>{let e=new Set(ke.map(e=>e.topic||`General`));return Array.from(e).sort()},[ke]),Ne=(0,_.useMemo)(()=>[{value:`ALL`,label:`All Topics (${je.length})`},...je.map(e=>({value:e,label:Qe(e)}))],[je]),Pe=(0,_.useMemo)(()=>[{value:`ALL`,label:`All Difficulties`},{value:`Easy`,label:`Easy`},{value:`Medium`,label:`Medium`},{value:`Hard`,label:`Hard`}],[]),Le=(0,_.useMemo)(()=>ke.filter(e=>{let t=R(e),n=y===``||e.name.toLowerCase().includes(y.toLowerCase())||e.topic.toLowerCase().includes(y.toLowerCase())||t.some(e=>e.toLowerCase().includes(y.toLowerCase())),r=x===`ALL`||e.topic===x,i=C===`ALL`||e.difficulty===C;return n&&r&&i}),[ke,y,x,C]),Re=(0,_.useMemo)(()=>!fe||fe===`GLOBAL`||fe===`ALL`?e:e.filter(e=>R(e).includes(fe)),[e,fe]),Ve=(0,_.useMemo)(()=>{if(!_e||!_e.trim())return 0;let e=_e.trim().toLowerCase();return Re.filter(t=>me===`sheet`?R(t).some(t=>t.toLowerCase()===e):(t[me]||``).toString().trim().toLowerCase()===e).length},[Re,me,_e]),He=e=>({easy:e.filter(e=>e.difficulty===`Easy`).length,medium:e.filter(e=>e.difficulty===`Medium`).length,hard:e.filter(e=>e.difficulty===`Hard`).length,attempted:e.filter(e=>t[e.id]).length}),Ge=async t=>{let n=t.target.files[0];if(!(!n||!o||o===`ALL`))try{let t=await rt(n);if(t.length===0){alert(`No valid question rows found in CSV.`);return}r(lt(e,t,o)),h(!1),alert(`Successfully processed ${t.length} rows into "${o}"!`)}catch(e){alert(`Error parsing CSV file: `+e.message)}},Ke=e=>{pe(e),ge(`topic`),ye(``),xe(``),p(!1),h(!1),de(!0)},qe=t=>{if(t.preventDefault(),!_e.trim()||!be.trim()){alert(`Please provide both old and new values.`);return}if(Ve===0){alert(`No matching questions found.`);return}let n=_e.trim(),i=be.trim(),a=!fe||fe===`GLOBAL`||fe===`ALL`?`all questions`:`questions in "${fe}"`,o=`This will update ${Ve} question${Ve===1?``:`s`} (${a}) from '${n}' to '${i}'.\n\nAre you sure you want to proceed?`;if(window.confirm(o)){let t=new Set(Re.map(e=>e.id)),a=n.toLowerCase();r(e.map(e=>{if(t.has(e.id)){if(me===`sheet`){let t=R(e);if(t.some(e=>e.toLowerCase()===a)){let n=t.map(e=>e.toLowerCase()===a?i:e);return{...e,sheets:Array.from(new Set(n))}}}else if((e[me]||``).toString().trim().toLowerCase()===a)return{...e,[me]:i}}return e})),de(!1),alert(`Updated ${Ve} question${Ve===1?``:`s`}.`)}},Je=()=>{D(``),ne(null),T(!0)},Ye=async t=>{if(t.preventDefault(),!E.trim()){alert(`Please enter a sheet name.`);return}let n=E.trim();if(u.includes(n)||Se([...u,n]),O)try{let t=await rt(O);t.length>0&&r(lt(e,t,n))}catch(e){alert(`Error parsing sheet CSV file: `+e.message)}T(!1),s(n)},Xe=()=>{M(null);let e=o&&o!==`ALL`?[o]:[`Default`];P({id:`custom-${Date.now()}`,name:``,topic:je[0]||`Arrays & Hashing`,difficulty:`Medium`,sheets:e,link:``}),oe(!1),F(``),re(!0)},$e=e=>{M(e),P({...e,sheets:R(e)}),oe(!1),F(``),re(!0)},et=e=>{let t=N.sheets||[];if(t.includes(e)){let n=t.filter(t=>t!==e);P({...N,sheets:n.length>0?n:[`Default`]})}else P({...N,sheets:[...t,e]})},tt=t=>{window.confirm(`Are you sure you want to delete this question?`)&&r(e.filter(e=>e.id!==t))},nt=t=>{if(!t||t===`ALL`)return;let n=window.prompt(`Rename sheet "${t}" to:`,t);if(!n||!n.trim()||n.trim()===t)return;let i=n.trim(),a=e.map(e=>{let n=R(e);if(n.includes(t)){let r=Array.from(new Set(n.map(e=>e===t?i:e)));return{...e,sheets:r}}return e}),c=u.map(e=>e===t?i:e);c.includes(i)||c.push(i),Se(c),r(a),o===t&&s(i),h(!1),alert(`Sheet "${t}" successfully renamed to "${i}"!`)},at=n=>{if(!n||n===`Default`||n===`ALL`)return;let a=e.filter(e=>R(e).includes(n)),o=a.length,c=a.filter(e=>R(e).filter(e=>e!==n).length===0),l=c.length,d=`${o} question${o===1?``:`s`} will be removed from "${n}"; ${l} of those aren't in any other sheet and will be deleted entirely.\n\nAre you sure you want to proceed?`;if(window.confirm(d)){let a=new Set(c.map(e=>e.id)),o=e.filter(e=>!a.has(e.id)).map(e=>{if(R(e).includes(n)){let t=R(e).filter(e=>e!==n);return{...e,sheets:t.length>0?t:[`Default`]}}return e}),l={...t};a.forEach(e=>{delete l[e]}),Se(u.filter(e=>e!==n)),i&&i(l),r(o),s(null),h(!1)}},ut=n=>{if(!n)return;let r=n===`ALL`?e:Ce.get(n)||[],a=r.length,o=`Reset practice history (attempts & confidence) for all ${a} question${a===1?``:`s`} in "${n}"?`;if(window.confirm(o)){let e=new Set(r.map(e=>e.id)),a={...t};e.forEach(e=>{delete a[e]}),i&&i(a),h(!1),alert(`Cleared practice history for "${n}".`)}},dt=t=>{if(t.preventDefault(),!N.name.trim()){alert(`Question Name is required.`);return}let n=[...N.sheets||[`Default`]];if(ae&&se.trim()){let e=se.trim();u.includes(e)||Se([...u,e]),n.includes(e)||n.push(e)}let i={...N,sheets:n.length>0?n:[`Default`]};r(ie?e.map(e=>e.id===ie.id?i:e):lt(e,[i])),re(!1)},ft=()=>{s(null),l(!1),b(``),S(`ALL`),w(`ALL`)},pt=He(e);return(0,L.jsxs)(`div`,{className:`bank-container glass-card`,children:[o===null?(0,L.jsxs)(`div`,{className:`sheets-overview-view`,children:[(0,L.jsxs)(`div`,{className:`bank-header`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`h2`,{className:`bank-title`,children:[`Question Bank (`,e.length,`)`]}),(0,L.jsx)(`p`,{className:`bank-subtitle`,children:`Select a sheet to explore questions, or view all questions in a flat list.`})]}),(0,L.jsxs)(`div`,{className:`bank-header-actions`,children:[(0,L.jsxs)(`button`,{className:`btn btn-primary`,onClick:Je,children:[(0,L.jsx)(I,{size:16}),(0,L.jsx)(`span`,{children:`Add Sheet`})]}),(0,L.jsxs)(`div`,{className:`kebab-menu-wrapper`,ref:g,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary kebab-trigger-btn`,onClick:()=>p(!f),title:`More Bank Actions`,children:(0,L.jsx)(le,{size:18})}),f&&(0,L.jsxs)(`div`,{className:`kebab-dropdown-menu`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{it(e,`sprintset_all_questions.csv`),p(!1)},children:[(0,L.jsx)(Ue,{size:15}),(0,L.jsx)(`span`,{children:`Export All (CSV)`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Ke(`GLOBAL`),children:[(0,L.jsx)(Oe,{size:15}),(0,L.jsx)(`span`,{children:`Find & Replace`})]}),(0,L.jsx)(`div`,{className:`dropdown-divider`}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn item-danger`,onClick:()=>{p(!1),window.confirm(`Reset question bank back to default starter set?`)&&a()},children:[(0,L.jsx)(Ae,{size:15}),(0,L.jsx)(`span`,{children:`Reset Bank`})]})]})]})]})]}),(0,L.jsxs)(`div`,{className:`sheets-grid-section`,children:[(0,L.jsx)(`h3`,{className:`section-grid-title`,children:`Problem Sheets & Collections`}),(0,L.jsxs)(`div`,{className:`sheet-cards-grid`,children:[(0,L.jsxs)(`div`,{className:`sheet-card card-all-questions`,onClick:()=>s(`ALL`),children:[(0,L.jsxs)(`div`,{className:`sheet-card-header`,children:[(0,L.jsx)(`div`,{className:`sheet-icon-badge icon-all-badge`,children:(0,L.jsx)(ve,{size:22})}),(0,L.jsx)(`span`,{className:`sheet-type-pill pill-all`,children:`Flat View`})]}),(0,L.jsxs)(`div`,{className:`sheet-card-body`,children:[(0,L.jsx)(`h3`,{className:`sheet-card-title`,children:`All Questions`}),(0,L.jsxs)(`div`,{className:`sheet-main-count`,children:[e.length,` `,(0,L.jsx)(`span`,{children:`Questions`})]}),(0,L.jsxs)(`div`,{className:`sheet-diff-breakdown`,children:[(0,L.jsxs)(`span`,{className:`diff-tag tag-easy`,children:[pt.easy,` Easy`]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`span`,{className:`diff-tag tag-medium`,children:[pt.medium,` Med`]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`span`,{className:`diff-tag tag-hard`,children:[pt.hard,` Hard`]})]})]}),(0,L.jsx)(`div`,{className:`sheet-card-footer`,children:(0,L.jsxs)(`span`,{className:`view-sheet-btn`,children:[`View All Questions `,(0,L.jsx)(j,{size:16})]})})]}),Te.map(e=>{let t=Ce.get(e)||[],n=He(t);return(0,L.jsxs)(`div`,{className:`sheet-card`,onClick:()=>s(e),children:[(0,L.jsxs)(`div`,{className:`sheet-card-header`,children:[(0,L.jsx)(`div`,{className:`sheet-icon-badge`,children:(0,L.jsx)(k,{size:20})}),(0,L.jsx)(`span`,{className:`sheet-type-pill`,children:`Sheet`})]}),(0,L.jsxs)(`div`,{className:`sheet-card-body`,children:[(0,L.jsx)(`h3`,{className:`sheet-card-title`,children:e}),(0,L.jsxs)(`div`,{className:`sheet-main-count`,children:[t.length,` `,(0,L.jsx)(`span`,{children:`Questions`})]}),(0,L.jsxs)(`div`,{className:`sheet-diff-breakdown`,children:[(0,L.jsxs)(`span`,{className:`diff-tag tag-easy`,children:[n.easy,` Easy`]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`span`,{className:`diff-tag tag-medium`,children:[n.medium,` Med`]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`span`,{className:`diff-tag tag-hard`,children:[n.hard,` Hard`]})]})]}),(0,L.jsxs)(`div`,{className:`sheet-card-footer`,children:[(0,L.jsx)(`span`,{className:`attempted-indicator`,children:n.attempted>0?`${n.attempted}/${t.length} Attempted`:`Not started`}),(0,L.jsxs)(`span`,{className:`view-sheet-btn`,children:[`Open Sheet `,(0,L.jsx)(j,{size:16})]})]})]},e)})]})]})]}):(0,L.jsxs)(`div`,{className:`sheet-detail-view`,children:[(0,L.jsxs)(`div`,{className:`bank-header`,children:[(0,L.jsxs)(`div`,{className:`header-title-with-back`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`btn-back-sheets`,onClick:ft,title:`Return to Sheets Overview`,children:[(0,L.jsx)(te,{size:16}),(0,L.jsx)(`span`,{children:`All Sheets`})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`h2`,{className:`bank-title`,children:[o===`ALL`?`All Questions`:o,(0,L.jsx)(`span`,{className:`header-count-pill`,children:ke.length})]}),(0,L.jsx)(`p`,{className:`bank-subtitle`,children:o===`ALL`?`Viewing every question across all sheets in your question bank.`:`Viewing questions in the ${o} sheet.`})]})]}),(0,L.jsxs)(`div`,{className:`bank-header-actions`,children:[(0,L.jsxs)(`button`,{className:`btn btn-primary`,onClick:Xe,children:[(0,L.jsx)(Ee,{size:16}),(0,L.jsx)(`span`,{children:`Add Question`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-edit-mode-toggle ${c?`edit-mode-active`:``}`,onClick:()=>l(!c),title:c?`Exit Edit Mode`:`Enable Edit Mode to edit or delete questions`,children:[(0,L.jsx)(we,{size:15}),(0,L.jsx)(`span`,{children:c?`Done Editing`:`Edit Mode`})]}),(0,L.jsxs)(`div`,{className:`kebab-menu-wrapper`,ref:v,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary kebab-trigger-btn`,onClick:()=>h(!m),title:`Sheet Actions`,children:(0,L.jsx)(le,{size:18})}),m&&(0,L.jsx)(`div`,{className:`kebab-dropdown-menu`,children:o===`ALL`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{it(e,`sprintset_all_questions.csv`),h(!1)},children:[(0,L.jsx)(Ue,{size:15}),(0,L.jsx)(`span`,{children:`Export All (CSV)`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Ke(`ALL`),children:[(0,L.jsx)(Oe,{size:15}),(0,L.jsx)(`span`,{children:`Find & Replace`})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`label`,{className:`menu-item-btn cursor-pointer`,children:[(0,L.jsx)(ce,{size:15}),(0,L.jsx)(`span`,{children:`Batch Import`}),(0,L.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:Ge,style:{display:`none`}})]}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>{let e=`sprintset_${o.toLowerCase().replace(/\s+/g,`_`)}_questions.csv`;it(ke,e),h(!1)},children:[(0,L.jsx)(Ue,{size:15}),(0,L.jsx)(`span`,{children:`Export Sheet`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>Ke(o),children:[(0,L.jsx)(Oe,{size:15}),(0,L.jsx)(`span`,{children:`Find & Replace`})]}),(0,L.jsx)(`div`,{className:`dropdown-divider`}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>nt(o),children:[(0,L.jsx)(we,{size:15}),(0,L.jsx)(`span`,{children:`Rename Sheet`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn`,onClick:()=>ut(o),children:[(0,L.jsx)(De,{size:15}),(0,L.jsx)(`span`,{children:`Reset History`})]}),o!==`Default`&&(0,L.jsxs)(`button`,{type:`button`,className:`menu-item-btn item-danger`,onClick:()=>at(o),children:[(0,L.jsx)(ze,{size:15}),(0,L.jsx)(`span`,{children:`Delete Sheet`})]})]})})]})]})]}),(0,L.jsxs)(`div`,{className:`bank-controls`,children:[(0,L.jsxs)(`div`,{className:`search-box`,children:[(0,L.jsx)(Me,{size:18,className:`search-icon`}),(0,L.jsx)(`input`,{type:`text`,className:`search-input`,placeholder:o===`ALL`?`Search all questions by name, topic, or sheet...`:`Search in ${o}...`,value:y,onChange:e=>b(e.target.value)}),y&&(0,L.jsx)(`button`,{className:`clear-search`,onClick:()=>b(``),children:(0,L.jsx)(We,{size:14})})]}),(0,L.jsxs)(`div`,{className:`filters-row`,children:[(0,L.jsx)(ot,{value:x,options:Ne,onChange:S,icon:he}),(0,L.jsx)(ot,{value:C,options:Pe,onChange:w})]})]}),(0,L.jsx)(`div`,{className:`table-wrapper`,children:(0,L.jsxs)(`table`,{className:`bank-table`,children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{className:`col-name`,children:`Question Name`}),(0,L.jsx)(`th`,{className:`col-topic`,children:`Topic`}),(0,L.jsx)(`th`,{className:`col-diff`,children:`Difficulty`}),c?(0,L.jsx)(`th`,{className:`col-history text-center`,children:`Actions`}):o===`ALL`?(0,L.jsx)(`th`,{className:`col-sheet`,children:`Sheets`}):(0,L.jsx)(`th`,{className:`col-history`,children:`History`})]})}),(0,L.jsx)(`tbody`,{children:Le.length>0?Le.map(e=>{let r=t[e.id],i=R(e);return(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`td`,{className:`col-name font-semibold`,title:e.name,children:(0,L.jsx)(`a`,{href:st(e),target:`_blank`,rel:`noopener noreferrer`,className:`q-name-link`,title:e.link?`Open problem page`:`Search problem on Google`,children:e.name})}),(0,L.jsx)(`td`,{className:`col-topic`,children:(0,L.jsx)(`span`,{className:`badge badge-topic`,title:e.topic,children:Qe(e.topic)})}),(0,L.jsx)(`td`,{className:`col-diff`,children:(0,L.jsx)(`span`,{className:`badge badge-${e.difficulty.toLowerCase()}`,children:e.difficulty})}),c?(0,L.jsx)(`td`,{className:`col-history text-center`,children:(0,L.jsxs)(`div`,{className:`edit-mode-actions`,children:[(0,L.jsx)(`button`,{className:`icon-action-btn`,onClick:()=>$e(e),title:`Edit Question`,children:(0,L.jsx)(we,{size:15})}),(0,L.jsx)(`button`,{className:`icon-action-btn text-danger`,onClick:()=>tt(e.id),title:`Delete Question`,children:(0,L.jsx)(ze,{size:15})})]})}):o===`ALL`?(0,L.jsx)(`td`,{className:`col-sheet`,children:(0,L.jsx)(`div`,{className:`sheets-tags-wrapper`,children:i.map(e=>(0,L.jsx)(`button`,{type:`button`,className:`sheet-tag-btn`,onClick:()=>{s(e),b(``)},title:`Filter by ${e}`,children:e},e))})}):(0,L.jsx)(`td`,{className:`col-history`,children:(()=>{let t=ct(e.id,n,r,5),i=Math.max(0,5-t.length),a=[...Array(i).fill({type:`empty`,label:`Not attempted`,date:``}),...t],o=t.length>0?`Recent Outcomes (${t.length} attempt${t.length===1?``:`s`}):\n`+t.map((e,t)=>`${t+1}. ${e.label}${e.date?` (${e.date})`:``}`).join(`
`):`Never attempted`;return(0,L.jsx)(`div`,{className:`history-dots-row`,title:o,children:a.map((e,t)=>(0,L.jsx)(`span`,{className:`history-dot dot-${e.type}`,title:e.type===`empty`?`Never attempted`:`${e.label}${e.date?` (${e.date})`:``}`},t))})})()})]},e.id)}):(0,L.jsx)(`tr`,{children:(0,L.jsx)(`td`,{colSpan:`4`,className:`text-center py-6 text-muted`,children:`No questions match your filter criteria in this view.`})})})]})})]}),ee&&(0,Ze.createPortal)((0,L.jsx)(`div`,{className:`modal-overlay`,onClick:()=>T(!1),children:(0,L.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`modal-header`,children:[(0,L.jsx)(`h3`,{children:`Create New Sheet`}),(0,L.jsx)(`button`,{className:`close-btn`,onClick:()=>T(!1),children:(0,L.jsx)(We,{size:18})})]}),(0,L.jsxs)(`form`,{onSubmit:Ye,className:`form-body`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Sheet Name *`}),(0,L.jsx)(`input`,{type:`text`,required:!0,value:E,onChange:e=>D(e.target.value),placeholder:`e.g. LeetCode 75, Core CS, SQL Mastery...`,className:`input-field-full`,autoFocus:!0})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Populate with CSV File (Optional)`}),(0,L.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:e=>ne(e.target.files[0]||null),className:`input-field-full`}),(0,L.jsxs)(`span`,{className:`form-subtext`,children:[`Upload a CSV file (schema: `,(0,L.jsx)(`code`,{children:`name, topic, difficulty, link`}),`) to populate questions directly into this sheet (merging duplicate question names automatically).`]})]}),(0,L.jsxs)(`div`,{className:`form-actions`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>T(!1),children:`Cancel`}),(0,L.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,children:`Create Sheet`})]})]})]})}),document.body),A&&(0,Ze.createPortal)((0,L.jsx)(`div`,{className:`modal-overlay`,onClick:()=>re(!1),children:(0,L.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`modal-header`,children:[(0,L.jsx)(`h3`,{children:ie?`Edit Question`:`Add Question`}),(0,L.jsx)(`button`,{className:`close-btn`,onClick:()=>re(!1),children:(0,L.jsx)(We,{size:18})})]}),(0,L.jsxs)(`form`,{onSubmit:dt,className:`form-body`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Question Name *`}),(0,L.jsx)(`input`,{type:`text`,required:!0,value:N.name,onChange:e=>P({...N,name:e.target.value}),placeholder:`e.g. Set Matrix Zeroes`,className:`input-field-full`})]}),(0,L.jsxs)(`div`,{className:`form-row`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Topic`}),(0,L.jsx)(`input`,{type:`text`,value:N.topic,onChange:e=>P({...N,topic:e.target.value}),placeholder:`e.g. Arrays & Hashing`,className:`input-field-full`})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Difficulty`}),(0,L.jsxs)(`select`,{value:N.difficulty,onChange:e=>P({...N,difficulty:e.target.value}),className:`input-field-full`,children:[(0,L.jsx)(`option`,{value:`Easy`,children:`Easy`}),(0,L.jsx)(`option`,{value:`Medium`,children:`Medium`}),(0,L.jsx)(`option`,{value:`Hard`,children:`Hard`})]})]})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Sheet Membership (Select all that apply) *`}),(0,L.jsx)(`div`,{className:`sheet-chips-selector`,children:Te.map(e=>{let t=(N.sheets||[]).includes(e);return(0,L.jsxs)(`button`,{type:`button`,className:`sheet-select-chip ${t?`selected`:``}`,onClick:()=>et(e),children:[t?(0,L.jsx)(Fe,{size:14}):(0,L.jsx)(Ie,{size:14}),(0,L.jsx)(`span`,{children:e})]},e)})}),ae?(0,L.jsxs)(`div`,{className:`form-row mt-2`,children:[(0,L.jsx)(`input`,{type:`text`,required:!0,value:se,onChange:e=>F(e.target.value),placeholder:`Enter new sheet name...`,className:`input-field-full`,autoFocus:!0}),(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary text-xs`,onClick:()=>oe(!1),children:`Cancel`})]}):(0,L.jsx)(`button`,{type:`button`,className:`btn-link-action mt-1`,onClick:()=>oe(!0),children:`+ Add to a new sheet...`})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Problem URL / Link`}),(0,L.jsx)(`input`,{type:`url`,value:N.link,onChange:e=>P({...N,link:e.target.value}),placeholder:`https://leetcode.com/problems/...`,className:`input-field-full`})]}),(0,L.jsxs)(`div`,{className:`form-actions`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>re(!1),children:`Cancel`}),(0,L.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,children:`Save Question`})]})]})]})}),document.body),ue&&(0,Ze.createPortal)((0,L.jsx)(`div`,{className:`modal-overlay`,onClick:()=>de(!1),children:(0,L.jsxs)(`div`,{className:`modal-card glass-card`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`modal-header`,children:[(0,L.jsx)(`h3`,{children:`Find & Replace`}),(0,L.jsx)(`button`,{className:`close-btn`,onClick:()=>de(!1),children:(0,L.jsx)(We,{size:18})})]}),(0,L.jsxs)(`form`,{onSubmit:qe,className:`form-body`,children:[(0,L.jsxs)(`div`,{className:`destination-badge-box`,children:[(0,L.jsx)(`span`,{className:`text-muted font-semibold`,children:`Operating Scope:`}),(0,L.jsx)(`strong`,{className:`text-amber`,children:!fe||fe===`GLOBAL`||fe===`ALL`?`All Questions`:`Sheet "${fe}"`})]}),(0,L.jsxs)(`div`,{className:`form-group mt-3`,children:[(0,L.jsx)(`label`,{children:`Target Field to Match & Replace`}),(0,L.jsxs)(`select`,{value:me,onChange:e=>ge(e.target.value),className:`input-field-full`,children:[(0,L.jsx)(`option`,{value:`topic`,children:`Topic Category`}),(0,L.jsx)(`option`,{value:`sheet`,children:`Sheet Membership`}),(0,L.jsx)(`option`,{value:`difficulty`,children:`Difficulty Level`})]})]}),(0,L.jsxs)(`div`,{className:`form-row mt-3`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Find Exact Value`}),(0,L.jsx)(`input`,{type:`text`,required:!0,value:_e,onChange:e=>ye(e.target.value),placeholder:`e.g. Array, Binary Trees...`,className:`input-field-full`})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`Replace With New Value`}),(0,L.jsx)(`input`,{type:`text`,required:!0,value:be,onChange:e=>xe(e.target.value),placeholder:`e.g. Arrays, Core Trees...`,className:`input-field-full`})]})]}),_e.trim()&&(0,L.jsxs)(`div`,{className:`matching-impact-info mt-2`,children:[(0,L.jsx)(Be,{size:14,className:`text-amber`}),(0,L.jsxs)(`span`,{children:[`Matches `,(0,L.jsx)(`strong`,{children:Ve}),` question`,Ve===1?``:`s`]})]}),(0,L.jsxs)(`div`,{className:`form-actions mt-4`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>de(!1),children:`Cancel`}),(0,L.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:Ve===0||!be.trim(),children:`Apply Replacement`})]})]})]})}),document.body),(0,L.jsx)(`style`,{children:`
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
      `})]})}var dt=[{id:`speedy`,name:`Speedy`,tag:`5 Easy`,quota:{Easy:5,Medium:0,Hard:0}},{id:`steady`,name:`Steady`,tag:`5 Medium`,quota:{Easy:0,Medium:5,Hard:0}},{id:`balanced`,name:`Balanced`,tag:`2E / 2M / 1H`,quota:{Easy:2,Medium:2,Hard:1}},{id:`grind`,name:`Grind`,tag:`1E / 2M / 2H`,quota:{Easy:1,Medium:2,Hard:2}},{id:`gauntlet`,name:`Gauntlet`,tag:`2M / 3H`,quota:{Easy:0,Medium:2,Hard:3}},{id:`custom`,name:`Custom`,tag:`? / ? / ?`,quota:null}];function ft(e,t){let n={Easy:e.Easy||0,Medium:e.Medium||0,Hard:e.Hard||0},r={Easy:t.Easy||0,Medium:t.Medium||0,Hard:t.Hard||0},i=n.Easy+n.Medium+n.Hard,a={Easy:Math.min(n.Easy,r.Easy),Medium:Math.min(n.Medium,r.Medium),Hard:Math.min(n.Hard,r.Hard)},o=i-(a.Easy+a.Medium+a.Hard),s=e=>{if(o<=0)return;let t=r[e]-a[e];if(t>0){let n=Math.min(o,t);a[e]+=n,o-=n}},c=n.Hard-a.Hard,l=n.Easy-a.Easy,u=n.Medium-a.Medium;return c>0&&(s(`Medium`),s(`Easy`)),l>0&&(s(`Medium`),s(`Hard`)),u>0&&(s(`Easy`),s(`Hard`)),o>0&&(s(`Medium`),s(`Easy`),s(`Hard`)),a}function pt({questions:e,settings:t={},onStartSprint:n}){let r=t.timeWeightsByDifficulty||{Easy:4,Medium:8,Hard:15},[i,a]=(0,_.useState)(`balanced`),[o,s]=(0,_.useState)({Easy:2,Medium:2,Hard:1}),[c,l]=(0,_.useState)(!1),u=(0,_.useMemo)(()=>{let t=new Set;return(e||[]).forEach(e=>{R(e).forEach(e=>t.add(e))}),Array.from(t).sort()},[e]),[d,f]=(0,_.useState)(()=>{try{return localStorage.getItem(`sprintset_last_selected_sheet_v1`)||`ALL`}catch{return`ALL`}}),p=e=>{f(e);try{localStorage.setItem(`sprintset_last_selected_sheet_v1`,e)}catch{}};(0,_.useEffect)(()=>{d!==`ALL`&&u.length>0&&!u.includes(d)&&p(`ALL`)},[u,d]);let m=(0,_.useMemo)(()=>d===`ALL`?e:(e||[]).filter(e=>R(e).includes(d)),[e,d]),h=(0,_.useMemo)(()=>{let e={Easy:0,Medium:0,Hard:0};return m.forEach(t=>{t.difficulty&&e[t.difficulty]!==void 0&&(e[t.difficulty]+=1)}),e},[m]),g=(0,_.useMemo)(()=>m.length,[m]),v=(0,_.useMemo)(()=>{let e={};return dt.forEach(t=>{if(t.id===`custom`){e.custom={disabled:!1,isAdapted:!1,effectiveQuota:o,displayTag:`? / ? / ?`,reason:``};return}let n=t.quota,r=(n.Easy||0)+(n.Medium||0)+(n.Hard||0);if(g<r)e[t.id]={disabled:!0,isAdapted:!1,effectiveQuota:n,displayTag:t.tag,reason:`Not enough questions in this sheet for this preset (requires ${r} questions, only ${g} available)`};else if(h.Easy>=(n.Easy||0)&&h.Medium>=(n.Medium||0)&&h.Hard>=(n.Hard||0))e[t.id]={disabled:!1,isAdapted:!1,effectiveQuota:n,displayTag:t.tag,reason:``};else{let r=ft(n,h),i=`${r.Easy}E / ${r.Medium}M / ${r.Hard}H`;e[t.id]={disabled:!1,isAdapted:!0,effectiveQuota:r,displayTag:i,reason:`Adapted to match available sheet question counts`}}}),e},[h,g,o]);(0,_.useEffect)(()=>{let e=v[i];if(e&&e.disabled){let e=dt.find(e=>!v[e.id]?.disabled);e&&a(e.id)}},[v,i]);let y=(0,_.useMemo)(()=>{let e=v[i];return e&&!e.disabled?e.effectiveQuota:i===`custom`?o:{Easy:2,Medium:2,Hard:1}},[i,v,o]),b=(y.Easy||0)+(y.Medium||0)+(y.Hard||0),x=(0,_.useMemo)(()=>{let e=y.Easy||0,t=y.Medium||0,n=y.Hard||0,i=e*(r.Easy||4)+t*(r.Medium||8)+n*(r.Hard||15),a=Math.round(i/5)*5;return Math.max(5,a||10)},[y,r]),[S,C]=(0,_.useState)(35),[w,ee]=(0,_.useState)(!1);(0,_.useEffect)(()=>{w||C(x)},[x,w]);let T=(0,_.useMemo)(()=>{let e=new Set(m.map(e=>e.topic||`General`));return Array.from(e).sort()},[m]),[E,D]=(0,_.useState)(T);(0,_.useEffect)(()=>{D(T)},[T]);let te=(0,_.useMemo)(()=>m.filter(e=>E.length===0||E.includes(e.topic||`General`)),[m,E]),O=te.length,ne=e=>{E.includes(e)?D(E.filter(t=>t!==e)):D([...E,e])},A=()=>D([...T]),re=()=>D([]),j=()=>{if(b<=0){alert(`Please select at least 1 question for your sprint.`);return}if(O===0){alert(`No questions match your selected sheet and topic filters. Please expand your selection.`);return}let e=Ye();n({durationSec:S*60,seed:e,quota:y,totalQuestionsQuota:b,filters:{sheet:d,topics:E,presetId:i},matchingQuestions:te})},N=S%60*6,P=S/60%12*30,ae=(0,_.useMemo)(()=>{let e=[];for(let t=0;t<12;t++){let n=(t*30-90)*(Math.PI/180),r=t%3==0,i=r?38:41,a=50+44*Math.cos(n),o=50+44*Math.sin(n),s=50+i*Math.cos(n),c=50+i*Math.sin(n);e.push({key:t,x1:a,y1:o,x2:s,y2:c,isMajor:r})}return e},[]);return(0,L.jsxs)(`div`,{className:`sprint-setup-container glass-card`,children:[(0,L.jsx)(`div`,{className:`setup-header`,children:(0,L.jsxs)(`div`,{className:`setup-title-group`,children:[(0,L.jsx)(`div`,{className:`setup-badge`,children:(0,L.jsx)(Ge,{size:22,className:`text-amber`})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h2`,{className:`setup-title`,children:`Start a DSA Sprint`}),(0,L.jsx)(`p`,{className:`setup-subtitle`,children:`Select a question sheet scope, difficulty preset, adjust duration, and launch.`})]})]})}),(0,L.jsx)(`div`,{className:`sheet-scope-prominent-card glass-card`,children:(0,L.jsxs)(`div`,{className:`sheet-scope-header`,children:[(0,L.jsxs)(`div`,{className:`sheet-scope-title-flex`,children:[(0,L.jsx)(k,{size:20,className:`text-amber`}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{className:`sheet-scope-heading`,children:`Question Sheet Scope`}),(0,L.jsx)(`p`,{className:`sheet-scope-subtext`,children:`Select a specific sheet to scope question availability and preset distribution`})]})]}),(0,L.jsx)(`div`,{className:`sheet-scope-dropdown-container`,children:(0,L.jsxs)(`select`,{className:`sheet-scope-prominent-select`,value:d,onChange:e=>p(e.target.value),children:[(0,L.jsxs)(`option`,{value:`ALL`,children:[`All Sheets (`,e.length,` total questions)`]}),u.map(t=>{let n=e.filter(e=>R(e).includes(t)).length;return(0,L.jsxs)(`option`,{value:t,children:[t,` (`,n,` questions)`]},t)})]})})]})}),(0,L.jsxs)(`div`,{className:`setup-two-col-grid`,children:[(0,L.jsxs)(`div`,{className:`col-left`,children:[(0,L.jsxs)(`label`,{className:`section-label mb-3`,children:[(0,L.jsx)(ve,{size:16}),(0,L.jsxs)(`span`,{children:[`Sprint Distribution (`,b,` questions)`]})]}),(0,L.jsx)(`div`,{className:`square-presets-grid`,children:dt.map(e=>{let t=i===e.id,n=Xe[e.id]||Ge,{disabled:r,isAdapted:o,displayTag:s,reason:c}=v[e.id]||{},l=`Adapted — ${d===`ALL`?`Current Pool`:d} doesn't have enough questions for the standard ${e.name} quota (${e.tag})`;return(0,L.jsxs)(`button`,{type:`button`,disabled:r,title:r?c:o?l:``,className:`square-preset-card ${t?`selected`:``} ${r?`preset-disabled`:``} ${o?`preset-adapted`:``}`,onClick:()=>{r||a(e.id)},children:[(0,L.jsx)(`div`,{className:`preset-icon-container`,children:(0,L.jsx)(n,{size:30,className:`preset-icon-theme ${t?`icon-selected`:`icon-unselected`}`})}),(0,L.jsxs)(`span`,{className:`preset-name`,children:[e.name,o?`*`:``]}),(0,L.jsx)(`span`,{className:`preset-compact-tag`,children:s})]},e.id)})})]}),(0,L.jsxs)(`div`,{className:`col-right`,children:[(0,L.jsxs)(`div`,{className:`section-header-flex mb-3`,children:[(0,L.jsxs)(`label`,{className:`section-label`,children:[(0,L.jsx)(oe,{size:16}),(0,L.jsx)(`span`,{children:`Sprint Duration`})]}),(0,L.jsxs)(`span`,{className:`suggested-tag-pill`,children:[`Suggested: `,x,` min`]})]}),(0,L.jsx)(`div`,{className:`duration-expanded-panel glass-card`,children:(0,L.jsxs)(`div`,{className:`expanded-clock-body`,children:[(0,L.jsx)(`div`,{className:`clock-graphic-large`,children:(0,L.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`clock-svg`,children:[(0,L.jsx)(`circle`,{cx:`50`,cy:`50`,r:`45`,className:`clock-face`}),ae.map(e=>(0,L.jsx)(`line`,{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,className:e.isMajor?`clock-tick-major`:`clock-tick-minor`},e.key)),(0,L.jsx)(`text`,{x:`50`,y:`19`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`12`}),(0,L.jsx)(`text`,{x:`83.5`,y:`53`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`3`}),(0,L.jsx)(`text`,{x:`50`,y:`86.5`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`6`}),(0,L.jsx)(`text`,{x:`16.5`,y:`53`,className:`clock-numeral-subtle`,textAnchor:`middle`,children:`9`}),(0,L.jsx)(`line`,{x1:`50`,y1:`50`,x2:`50`,y2:`28`,className:`clock-hour-hand`,transform:`rotate(${P} 50 50)`}),(0,L.jsx)(`line`,{x1:`50`,y1:`50`,x2:`50`,y2:`20`,className:`clock-minute-hand`,transform:`rotate(${N} 50 50)`}),(0,L.jsx)(`circle`,{cx:`50`,cy:`50`,r:`4`,className:`clock-center`})]})}),(0,L.jsxs)(`div`,{className:`duration-input-controls`,children:[(0,L.jsxs)(`div`,{className:`input-unit-flex`,children:[(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`300`,value:S,onChange:e=>{C(parseInt(e.target.value,10)||15),ee(!0)},className:`duration-input-prominent`}),(0,L.jsx)(`span`,{className:`duration-unit-lbl`,children:`minutes`})]}),w&&(0,L.jsxs)(`button`,{type:`button`,className:`btn-reset-suggested`,onClick:()=>{C(x),ee(!1)},children:[`Reset to Suggested (`,x,`m)`]})]})]})})]})]}),i===`custom`&&(0,L.jsxs)(`div`,{className:`custom-steppers-fullrow glass-card`,children:[(0,L.jsx)(`h4`,{className:`stepper-row-title`,children:`Custom Question Distribution`}),(0,L.jsxs)(`div`,{className:`horizontal-steppers-row`,children:[(0,L.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,L.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,L.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Easy:Math.max(0,e.Easy-1)})),children:`-`}),(0,L.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Easy,onChange:e=>s({...o,Easy:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Easy:e.Easy+1})),children:`+`})]}),(0,L.jsx)(`span`,{className:`unit-label`,children:`questions`})]}),(0,L.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,L.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,L.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Medium:Math.max(0,e.Medium-1)})),children:`-`}),(0,L.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Medium,onChange:e=>s({...o,Medium:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Medium:e.Medium+1})),children:`+`})]}),(0,L.jsx)(`span`,{className:`unit-label`,children:`questions`})]}),(0,L.jsxs)(`div`,{className:`stepper-item-inline`,children:[(0,L.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,L.jsxs)(`div`,{className:`stepper-controls-tight`,children:[(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Hard:Math.max(0,e.Hard-1)})),children:`-`}),(0,L.jsx)(`input`,{type:`number`,min:`0`,max:`50`,value:o.Hard,onChange:e=>s({...o,Hard:Math.max(0,parseInt(e.target.value,10)||0)}),className:`stepper-input-num`}),(0,L.jsx)(`button`,{type:`button`,className:`stepper-btn`,onClick:()=>s(e=>({...e,Hard:e.Hard+1})),children:`+`})]}),(0,L.jsx)(`span`,{className:`unit-label`,children:`questions`})]})]})]}),(0,L.jsx)(`div`,{className:`setup-full-width-topics`,children:(0,L.jsxs)(`section`,{className:`setup-section`,children:[(0,L.jsxs)(`div`,{className:`section-header-flex`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`topics-toggle-btn`,onClick:()=>l(!c),children:[(0,L.jsxs)(`div`,{className:`toggle-left`,children:[(0,L.jsx)(he,{size:16}),(0,L.jsxs)(`span`,{className:`font-semibold`,children:[`Focus Topics (`,E.length,`/`,T.length,` Selected)`]})]}),c?(0,L.jsx)(M,{size:18}):(0,L.jsx)(ie,{size:18})]}),c&&(0,L.jsxs)(`div`,{className:`topic-chip-actions`,children:[(0,L.jsx)(`button`,{type:`button`,className:`btn-chip-action`,onClick:A,children:`Select All`}),(0,L.jsx)(`button`,{type:`button`,className:`btn-chip-action`,onClick:re,children:`Clear`})]})]}),c&&(0,L.jsx)(`div`,{className:`topics-grid-fullwidth mt-3`,children:T.map(e=>{let t=E.includes(e);return(0,L.jsxs)(`button`,{type:`button`,className:`topic-chip ${t?`selected`:``}`,onClick:()=>ne(e),children:[t?(0,L.jsx)(Fe,{size:14}):(0,L.jsx)(Ie,{size:14}),(0,L.jsx)(`span`,{children:Qe(e)})]},e)})})]})}),(0,L.jsxs)(`div`,{className:`setup-footer`,children:[(0,L.jsxs)(`div`,{className:`pool-info`,children:[(0,L.jsx)(`span`,{className:`pool-count`,children:b}),(0,L.jsxs)(`span`,{className:`pool-label`,children:[`questions (`,S,` mins)`]})]}),(0,L.jsxs)(`button`,{className:`btn btn-primary btn-start`,onClick:j,disabled:b<=0||O===0,children:[(0,L.jsx)(Te,{size:18}),(0,L.jsx)(`span`,{children:`Start Sprint`})]})]}),(0,L.jsx)(`style`,{children:`
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
      `})]})}var mt={never:10,gave_up:8,shaky:5,ok:2,solid:.5};function ht(e,t){let n=t[e];return!n||!n.status&&!n.confidence?mt.never:n.status===`gave_up`?mt.gave_up:n.confidence===`shaky`?mt.shaky:n.confidence===`ok`?mt.ok:n.confidence===`solid`?mt.solid:mt.never}function gt(e,t,n,r){let i=Je(r),a=[],o=new Set;return[`Easy`,`Medium`,`Hard`].forEach(r=>{let s=t[r]||0;s<=0||yt(vt(e.filter(e=>e.difficulty===r&&!o.has(e.id)),s,n,i),i).forEach(e=>{o.add(e.id),a.push(e)})}),a}function _t(e,t,n,r,i){let a=Je(i+Date.now()),o=t.filter(t=>t.difficulty===e&&!n.has(t.id));if(o.length===0){let n=t.filter(t=>t.difficulty===e);return n.length===0?null:n[Math.floor(a()*n.length)]}return vt(o,1,r,a)[0]||o[0]}function vt(e,t,n,r){if(!e||e.length===0)return[];let i=e.map(e=>({...e,weight:ht(e.id,n)})),a=[],o=Math.min(t,i.length);for(let e=0;e<o;e++){let e=i.reduce((e,t)=>e+t.weight,0),t=r()*e,n=0;for(let e=0;e<i.length;e++)if(t-=i[e].weight,t<=0){n=e;break}a.push(i[n]),i.splice(n,1)}return a}function yt(e,t){let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}function bt({activeSprintState:e,settings:t,allQuestions:n=[],questionStates:r={},onUpdateActiveSprintState:i,onFinishSprint:a}){let{sessionData:o,currentIndex:s=0,attempts:c=0,results:l=[],preCountdownDone:u=!1,questionStartElapsedSec:d=0}=e||{},{durationSec:f,queue:p=[],seed:m,totalPausedMs:h=0,isPaused:g=!1,pauseStartedAtMs:v=null}=o||{},[y,b]=(0,_.useState)(u?0:3),[x,S]=(0,_.useState)(o?.startedAtMs||Date.now());(0,_.useEffect)(()=>{if(y>0){let e=setInterval(()=>{b(t=>t<=1?(clearInterval(e),0):t-1)},750);return()=>clearInterval(e)}if(y===0&&!u){let t=Date.now();S(t),i({...e,preCountdownDone:!0,sessionData:{...o,startedAtMs:t}})}},[y,u]);let C=()=>{if(y>0)return f;let e=0,t=o?.startedAtMs||x;e=g&&v?v-t-h:Date.now()-t-h;let n=Math.floor(e/1e3);return Math.max(0,f-n)},[w,ee]=(0,_.useState)(()=>C()),[T,E]=(0,_.useState)(!1),[D,te]=(0,_.useState)(`none`),[k,ne]=(0,_.useState)(!1),[A,ie]=(0,_.useState)(!1),[j,M]=(0,_.useState)(!1),[ae,se]=(0,_.useState)(!1),[F,ce]=(0,_.useState)(!1),le=(0,_.useRef)(!1),de=(0,_.useRef)(!1),[pe,me]=(0,_.useState)(!1),I=p[s];(0,_.useEffect)(()=>{if(g||y>0)return;let e=setInterval(()=>{let t=C();ee(t),t<=300&&t>0&&!le.current&&(le.current=!0,M(!0),ce(!0),setTimeout(()=>ce(!1),4e3)),t<=0&&(clearInterval(e),de.current||(de.current=!0,se(!0),setTimeout(()=>{se(!1),we(l,!1)},1200)))},1e3);return()=>clearInterval(e)},[x,o?.startedAtMs,f,h,g,v,y,l]);let he=()=>{if(g){let t=Date.now()-(v||Date.now());i({...e,sessionData:{...o,isPaused:!1,pauseStartedAtMs:null,totalPausedMs:h+t}})}else i({...e,sessionData:{...o,isPaused:!0,pauseStartedAtMs:Date.now()}})},ge=()=>{let t=c+1;ie(!0),me(!0),setTimeout(()=>ie(!1),400),setTimeout(()=>me(!1),500),i({...e,attempts:t})},_e=()=>{!I||D!==`none`||(te(`too-easy`),setTimeout(()=>{te(`none`);let t=new Set(p.map(e=>e.id)),a=_t(I.difficulty,n,t,r,m);if(a){let t=[...p];t[s]=a,i({...e,attempts:0,questionStartElapsedSec:Math.floor((Date.now()-(o?.startedAtMs||x)-h)/1e3),sessionData:{...o,queue:t}})}},350))},ye=()=>{D===`none`&&(te(`solved`),ne(!0),setTimeout(()=>ne(!1),400),setTimeout(()=>{te(`none`);let t=o?.startedAtMs||x,n=Math.floor((Date.now()-t-h)/1e3),r=Math.max(1,n-(e?.questionStartElapsedSec||0)),i={questionId:I.id,questionName:I.name,questionLink:I.link||``,topic:I.topic,difficulty:I.difficulty,status:`done`,attempts:c,confidence:null,timeSec:r};Se(i)},450))},be=()=>{D===`none`&&(te(`gave-up`),setTimeout(()=>{te(`none`);let t=o?.startedAtMs||x,n=Math.floor((Date.now()-t-h)/1e3),r=Math.max(1,n-(e?.questionStartElapsedSec||0)),i={questionId:I.id,questionName:I.name,questionLink:I.link||``,topic:I.topic,difficulty:I.difficulty,status:`gave_up`,attempts:c,confidence:null,timeSec:r};Se(i)},400))},Se=t=>{let n=[...l,t];s+1<p.length?i({...e,currentIndex:s+1,attempts:0,results:n,questionStartElapsedSec:Math.floor((Date.now()-(o?.startedAtMs||x)-h)/1e3)}):we(n)},Ce=()=>{we(l,!0)},we=(e,n=!1)=>{let r=C(),i=f-r,s=0;e.forEach(e=>{if(e.status===`done`){let n=t.pointsByDifficulty[e.difficulty]||20;s+=n}});let c=p.reduce((e,n)=>e+(t.pointsByDifficulty[n.difficulty]||20),0);a({seed:m,startedAt:new Date(o?.startedAtMs||x).toISOString(),durationSec:f,actualDurationSec:i,results:e,points:s,maxPossiblePoints:c,totalQuota:p.length,isEndedEarly:n})},Ee=e=>{let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`},Oe=e=>e&&e.link&&e.link.trim()!==``?e.link:`https://www.google.com/search?q=${encodeURIComponent(`${e?e.name:``} leetcode`)}`,ke=l.reduce((e,n)=>n.status===`done`?e+(t.pointsByDifficulty[n.difficulty]||20):e,0),je=I?t.pointsByDifficulty[I.difficulty]||20:0;return(0,L.jsxs)(`div`,{className:`active-sprint-container`,children:[(0,L.jsxs)(`div`,{className:`unified-sprint-card glass-card ${D===`solved`?`pulse-success-glow`:``} ${D===`too-easy`?`pulse-blue-glow`:``} ${D===`gave-up`?`pulse-red-glow`:``} ${pe?`pulse-amber-glow`:``}`,children:[y>0&&(0,L.jsx)(`div`,{className:`pre-countdown-overlay`,children:(0,L.jsxs)(`div`,{className:`pre-countdown-content`,children:[(0,L.jsx)(`span`,{className:`pre-countdown-num`,children:y}),(0,L.jsx)(`span`,{className:`pre-countdown-label`,children:`GET READY`})]})}),D===`solved`&&(0,L.jsx)(`div`,{className:`floating-action-toast toast-solved`,children:(0,L.jsxs)(`span`,{children:[`+`,je,` Pts!`]})}),pe&&(0,L.jsx)(`div`,{className:`floating-action-toast toast-wrong`,children:(0,L.jsx)(`span`,{children:`Wrong Attempt`})}),D===`too-easy`&&(0,L.jsx)(`div`,{className:`floating-action-toast toast-easy`,children:(0,L.jsx)(`span`,{children:`Swapped!`})}),D===`gave-up`&&(0,L.jsx)(`div`,{className:`floating-action-toast toast-gaveup`,children:(0,L.jsx)(`span`,{children:`Skipped`})}),ae&&(0,L.jsx)(`div`,{className:`times-up-overlay`,children:(0,L.jsxs)(`div`,{className:`times-up-content`,children:[(0,L.jsx)(oe,{size:48,className:`times-up-icon`}),(0,L.jsx)(`span`,{className:`times-up-text`,children:`TIME'S UP`})]})}),F&&(0,L.jsxs)(`div`,{className:`low-time-toast`,children:[(0,L.jsx)(Be,{size:16}),(0,L.jsx)(`span`,{children:`5 minutes remaining!`})]}),(0,L.jsxs)(`div`,{className:`top-control-bar`,children:[(0,L.jsxs)(`div`,{className:`top-left-sprint-metrics`,children:[(0,L.jsxs)(`div`,{className:`sprint-metric-pill`,title:`Sprint Progress`,children:[(0,L.jsx)(ve,{size:15,className:`text-muted flex-shrink-0`}),(0,L.jsxs)(`span`,{children:[`Q `,(0,L.jsx)(`strong`,{children:s+1}),` of `,(0,L.jsx)(`strong`,{children:p.length})]})]}),(0,L.jsxs)(`div`,{className:`sprint-metric-pill pts-pill-styled`,title:`Session Points Earned`,children:[(0,L.jsx)(O,{size:16,className:`text-amber flex-shrink-0`}),(0,L.jsxs)(`strong`,{className:`text-amber ${k?`counter-tween-pop`:``}`,children:[`+`,ke,` pts`]})]})]}),(0,L.jsxs)(`div`,{className:`top-icon-controls`,children:[(0,L.jsx)(`button`,{className:`icon-btn-ctrl ${g?`btn-paused`:``}`,onClick:he,title:g?`Resume Sprint`:`Pause Sprint`,children:g?(0,L.jsx)(Te,{size:16}):(0,L.jsx)(xe,{size:16})}),(0,L.jsx)(`button`,{className:`icon-btn-ctrl btn-stop-danger`,onClick:()=>E(!0),title:`End Sprint Early`,children:(0,L.jsx)(Ie,{size:14})})]})]}),(0,L.jsxs)(`div`,{className:`sprint-middle-zone`,children:[(0,L.jsx)(`div`,{className:`ringless-timer-centered`,children:(0,L.jsx)(`div`,{className:`time-display-massive-focal ${g?`timer-paused-blink`:``} ${j&&!g?`timer-low-time`:``} ${ae?`timer-times-up`:``}`,children:Ee(w)})}),I?(0,L.jsxs)(`div`,{className:`divider-question-wrapper`,children:[(0,L.jsx)(`hr`,{className:`timer-question-divider`}),(0,L.jsx)(`h2`,{className:`unified-question-title`,children:I.name}),(0,L.jsxs)(`div`,{className:`per-question-meta-row`,children:[(0,L.jsxs)(`a`,{href:Oe(I),target:`_blank`,rel:`noopener noreferrer`,className:`per-q-pill link-per-q-neutral`,title:I.link?`Open Problem Page`:`Search Problem on Google`,children:[(0,L.jsx)(ue,{size:13,className:`text-muted`}),(0,L.jsx)(`span`,{className:`text-secondary font-semibold`,children:`Link`})]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`div`,{className:`per-q-pill pts-per-q`,children:[(0,L.jsx)(Ge,{size:13,className:`text-amber`}),(0,L.jsx)(`span`,{children:(0,L.jsxs)(`strong`,{className:`text-gold`,children:[`+`,je,` pts`]})})]}),(0,L.jsx)(`span`,{className:`dot-sep`,children:`•`}),(0,L.jsxs)(`div`,{className:`per-q-pill attempts-per-q`,children:[(0,L.jsx)(Ae,{size:13,className:`text-muted`}),(0,L.jsxs)(`span`,{children:[`Attempts: `,(0,L.jsx)(`strong`,{className:`text-primary ${A?`counter-tween-pop`:``}`,children:c+1})]})]})]})]}):(0,L.jsxs)(`div`,{className:`empty-state py-8`,children:[(0,L.jsx)(`h3`,{children:`Sprint Queue Complete!`}),(0,L.jsx)(`button`,{className:`btn btn-primary mt-4`,onClick:Ce,children:`View Sprint Summary`})]})]}),I&&(0,L.jsxs)(`div`,{className:`sprint-bottom-actions`,children:[(0,L.jsx)(`div`,{className:`primary-done-wrapper`,children:(0,L.jsxs)(`button`,{className:`btn-done-primary ${D===`solved`?`btn-anim-flash`:``}`,onClick:ye,disabled:D!==`none`||g,children:[D===`solved`?(0,L.jsx)(re,{size:36,className:`check-anim-scale`}):(0,L.jsx)(P,{size:26}),(0,L.jsx)(`span`,{children:D===`solved`?`Solved!`:`Solved`})]})}),(0,L.jsxs)(`div`,{className:`secondary-actions-compact-row`,children:[(0,L.jsxs)(`button`,{className:`compact-sec-btn attempt-btn ${pe?`btn-flash-amber`:``}`,onClick:ge,disabled:g,title:`Record an incorrect submission (+1 attempt)`,children:[(0,L.jsx)(N,{size:14}),(0,L.jsx)(`span`,{children:`+1 Wrong`})]}),(0,L.jsxs)(`button`,{className:`compact-sec-btn easy-btn`,onClick:_e,disabled:g,title:`Pull a replacement question for this slot`,children:[(0,L.jsx)(De,{size:14}),(0,L.jsx)(`span`,{children:`Too Easy`})]}),(0,L.jsxs)(`button`,{className:`compact-sec-btn gaveup-btn`,onClick:be,disabled:g,title:`Gave up / Couldn't solve`,children:[(0,L.jsx)(fe,{size:14}),(0,L.jsx)(`span`,{children:`Gave Up`})]})]})]})]}),T&&(0,L.jsx)(`div`,{className:`modal-overlay`,onClick:()=>E(!1),children:(0,L.jsxs)(`div`,{className:`modal-card glass-card confirm-modal`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`confirm-header`,children:[(0,L.jsx)(Be,{size:24,className:`text-amber`}),(0,L.jsx)(`h3`,{children:`End Sprint Early?`})]}),(0,L.jsx)(`p`,{className:`confirm-desc`,children:`Your current progress and points earned in this sprint will be saved.`}),(0,L.jsxs)(`div`,{className:`confirm-actions`,children:[(0,L.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>E(!1),children:`Cancel`}),(0,L.jsx)(`button`,{className:`btn btn-danger`,onClick:Ce,children:`End Sprint`})]})]})}),(0,L.jsx)(`style`,{children:`
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
          background: var(--bg-scrim-translucent);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border-radius: var(--radius-lg);
        }

        .pre-countdown-content {
          position: relative;
          z-index: 101;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .pre-countdown-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 7rem;
          color: var(--amber-main);
          line-height: 1;
          animation: popNum 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
        }

        @keyframes popNum {
          0% { transform: scale(0.6); opacity: 0; }
          40% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        .pre-countdown-label {
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          font-size: 0.9rem;
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
      `})]})}function xt({sessions:e,questionStates:t,questions:n,todayStats:r,settings:i={}}){let a=e.length,o=0,s=0,c=0,l=0,u=0,d={solid:0,ok:0,shaky:0},f={};e.forEach(e=>{u+=e.points||0,l+=e.actualDurationSec||e.durationSec||0,(e.results||[]).forEach(e=>{if(o+=1,e.status===`done`){s+=1;let t=e.confidence||$e(e,i);t&&d[t]!==void 0&&(d[t]+=1)}else e.status===`gave_up`&&(c+=1);f[e.topic]||(f[e.topic]={attempted:0,solved:0,shaky:0,gaveUp:0}),f[e.topic].attempted+=1,e.status===`done`&&(f[e.topic].solved+=1),(e.confidence||$e(e,i))===`shaky`&&(f[e.topic].shaky+=1),e.status===`gave_up`&&(f[e.topic].gaveUp+=1)})});let p=o>0?Math.round(s/o*100):0,m=Math.max(d.solid,d.ok,d.shaky,1),h=null,g=0;Object.entries(f).forEach(([e,t])=>{let n=(t.shaky||0)+(t.gaveUp||0);n>g&&(g=n,h=e)});let _=e=>{let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return t>0?`${t}h ${n}m`:`${n}m`},v=e=>e?new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):`Recent`,y=e=>e===100?`bar-fill-perfect`:e>=50?`bar-fill-partial`:`bar-fill-low`;return(0,L.jsxs)(`div`,{className:`analytics-container glass-card`,children:[(0,L.jsx)(`div`,{className:`analytics-header`,children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h2`,{className:`analytics-title`,children:`Performance Analytics`}),(0,L.jsx)(`p`,{className:`analytics-subtitle`,children:`Track today's sprint metrics, lifetime stats, and topic mastery.`})]})}),(0,L.jsxs)(`div`,{className:`stats-section-block`,children:[(0,L.jsxs)(`div`,{className:`stats-section-header`,children:[(0,L.jsx)(Ge,{size:16,className:`text-amber`}),(0,L.jsx)(`h3`,{className:`section-title-sm`,children:`Today's Focus Overview`})]}),(0,L.jsxs)(`div`,{className:`analytics-kpi-grid`,children:[(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-amber`,children:(0,L.jsx)(oe,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsxs)(`span`,{className:`kpi-box-val`,children:[r?r.minutesFocused:0,`m`]}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Minutes Focused`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-blue`,children:(0,L.jsx)(ke,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsx)(`span`,{className:`kpi-box-val`,children:r?r.sprintsCount:0}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Sprints Run`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-easy`,children:(0,L.jsx)(P,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsx)(`span`,{className:`kpi-box-val`,children:r?r.questionsSolved:0}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Questions Solved`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-gold`,children:(0,L.jsx)(O,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsxs)(`span`,{className:`kpi-box-val text-amber`,children:[`+`,r?r.pointsEarned:0]}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Points Earned`})]})]})]})]}),(0,L.jsxs)(`div`,{className:`stats-section-block`,children:[(0,L.jsxs)(`div`,{className:`stats-section-header`,children:[(0,L.jsx)(ke,{size:16,className:`text-muted`}),(0,L.jsx)(`h3`,{className:`section-title-sm text-muted`,children:`Lifetime Performance`})]}),(0,L.jsxs)(`div`,{className:`analytics-kpi-grid`,children:[(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,L.jsx)(oe,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsx)(`span`,{className:`kpi-box-val`,children:_(l)}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Lifetime Focus Time`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,L.jsx)(ke,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsx)(`span`,{className:`kpi-box-val`,children:a}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Total Lifetime Sprints`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,L.jsx)(P,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsx)(`span`,{className:`kpi-box-val`,children:s}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Total Solved`})]})]}),(0,L.jsxs)(`div`,{className:`kpi-box`,children:[(0,L.jsx)(`div`,{className:`kpi-icon-wrapper icon-muted`,children:(0,L.jsx)(O,{size:18})}),(0,L.jsxs)(`div`,{className:`kpi-box-content`,children:[(0,L.jsxs)(`span`,{className:`kpi-box-val`,children:[p,`%`]}),(0,L.jsx)(`span`,{className:`kpi-box-lbl`,children:`Solve Accuracy`})]})]})]})]}),(0,L.jsxs)(`div`,{className:`analytics-two-col`,children:[(0,L.jsxs)(`div`,{className:`panel-box`,children:[(0,L.jsxs)(`h3`,{className:`panel-title`,children:[(0,L.jsx)(A,{size:16}),(0,L.jsx)(`span`,{children:`Topic Mastery Breakdown`})]}),(0,L.jsx)(`div`,{className:`topic-bars-list`,children:Object.keys(f).length>0?Object.entries(f).map(([e,t])=>{let n=Math.round(t.solved/t.attempted*100);return(0,L.jsxs)(`div`,{className:`topic-bar-item`,children:[(0,L.jsxs)(`div`,{className:`bar-label-row`,children:[(0,L.jsx)(`span`,{className:`topic-name`,children:Qe(e)}),(0,L.jsxs)(`span`,{className:`topic-ratio`,children:[t.solved,`/`,t.attempted,` solved (`,n,`%)`]})]}),(0,L.jsx)(`div`,{className:`bar-track`,children:(0,L.jsx)(`div`,{className:`bar-fill ${y(n)}`,style:{width:`${n}%`}})})]},e)}):(0,L.jsx)(`p`,{className:`text-muted text-sm py-4 text-center`,children:`Complete sprints to generate topic mastery data.`})})]}),(0,L.jsxs)(`div`,{className:`panel-box`,children:[(0,L.jsxs)(`h3`,{className:`panel-title`,children:[(0,L.jsx)(Pe,{size:16}),(0,L.jsx)(`span`,{children:`Confidence Distribution`})]}),(0,L.jsxs)(`div`,{className:`vertical-chart-stage`,children:[(0,L.jsxs)(`div`,{className:`v-bars-wrapper conf-v-bars`,children:[(0,L.jsxs)(`div`,{className:`v-bar-col`,children:[(0,L.jsx)(`span`,{className:`v-bar-val text-easy font-mono`,children:d.solid}),(0,L.jsx)(`div`,{className:`v-bar-track`,children:(0,L.jsx)(`div`,{className:`v-bar-fill fill-v-solid`,style:{height:`${Math.max(8,Math.round(d.solid/m*100))}%`}})}),(0,L.jsx)(`span`,{className:`v-bar-label font-semibold text-easy`,children:`Solid`})]}),(0,L.jsxs)(`div`,{className:`v-bar-col`,children:[(0,L.jsx)(`span`,{className:`v-bar-val text-blue font-mono`,children:d.ok}),(0,L.jsx)(`div`,{className:`v-bar-track`,children:(0,L.jsx)(`div`,{className:`v-bar-fill fill-v-ok`,style:{height:`${Math.max(8,Math.round(d.ok/m*100))}%`}})}),(0,L.jsx)(`span`,{className:`v-bar-label font-semibold text-blue`,children:`OK`})]}),(0,L.jsxs)(`div`,{className:`v-bar-col`,children:[(0,L.jsx)(`span`,{className:`v-bar-val text-amber font-mono`,children:d.shaky}),(0,L.jsx)(`div`,{className:`v-bar-track`,children:(0,L.jsx)(`div`,{className:`v-bar-fill fill-v-shaky`,style:{height:`${Math.max(8,Math.round(d.shaky/m*100))}%`}})}),(0,L.jsx)(`span`,{className:`v-bar-label font-semibold text-amber`,children:`Shaky`})]})]}),h?(0,L.jsxs)(`div`,{className:`integrated-callout-box mt-3`,children:[(0,L.jsx)(pe,{size:16,className:`text-amber`}),(0,L.jsxs)(`span`,{children:[`Most Resurfaced: `,(0,L.jsx)(`strong`,{children:Qe(h)}),` (`,g,` shaky/gave up)`]})]}):(0,L.jsxs)(`div`,{className:`integrated-callout-box mt-3`,children:[(0,L.jsx)(pe,{size:16,className:`text-muted`}),(0,L.jsxs)(`span`,{children:[`Gave Up Total: `,(0,L.jsx)(`strong`,{children:c}),` questions`]})]})]})]})]}),(0,L.jsxs)(`div`,{className:`panel-box log-panel-box`,children:[(0,L.jsxs)(`h3`,{className:`panel-title`,children:[(0,L.jsx)(ne,{size:16}),(0,L.jsx)(`span`,{children:`Recent Sprint Log`})]}),(0,L.jsx)(`div`,{className:`table-responsive-clean`,children:(0,L.jsxs)(`table`,{className:`history-table`,children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{children:`Date / Time`}),(0,L.jsx)(`th`,{children:`Duration`}),(0,L.jsx)(`th`,{children:`Attempted`}),(0,L.jsx)(`th`,{children:`Solved`}),(0,L.jsx)(`th`,{children:`Points`})]})}),(0,L.jsx)(`tbody`,{children:e.length>0?[...e].reverse().slice(0,10).map((e,t)=>{let n=(e.results||[]).filter(e=>e.status===`done`).length;return(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`td`,{className:`font-mono`,children:v(e.startedAt)}),(0,L.jsx)(`td`,{children:_(e.actualDurationSec||e.durationSec)}),(0,L.jsxs)(`td`,{children:[(e.results||[]).length,` questions`]}),(0,L.jsx)(`td`,{children:(0,L.jsxs)(`span`,{className:`badge badge-easy`,children:[n,` solved`]})}),(0,L.jsxs)(`td`,{className:`font-mono text-amber`,children:[`+`,e.points,` pts`]})]},t)}):(0,L.jsx)(`tr`,{children:(0,L.jsx)(`td`,{colSpan:`5`,className:`text-center py-6 text-muted`,children:`No sprint history recorded yet. Start your first sprint!`})})})]})})]}),(0,L.jsx)(`style`,{children:`
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
      `})]})}var St=[{id:`b75-001`,name:`Two Sum`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/two-sum/`},{id:`b75-002`,name:`Contains Duplicate`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/contains-duplicate/`},{id:`b75-003`,name:`Valid Anagram`,topic:`Arrays & Hashing`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-anagram/`},{id:`b75-004`,name:`Group Anagrams`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/group-anagrams/`},{id:`b75-005`,name:`Top K Frequent Elements`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/top-k-frequent-elements/`},{id:`b75-006`,name:`Product of Array Except Self`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/product-of-array-except-self/`},{id:`b75-007`,name:`Longest Consecutive Sequence`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-consecutive-sequence/`},{id:`b75-008`,name:`Encode and Decode Strings`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/encode-and-decode-strings/1`},{id:`b75-009`,name:`Subarray Sum Equals K`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/subarray-sum-equals-k/`},{id:`b75-010`,name:`Valid Palindrome`,topic:`Two Pointers`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-palindrome/`},{id:`b75-011`,name:`3Sum`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/3sum/`},{id:`b75-012`,name:`Container With Most Water`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/container-with-most-water/`},{id:`b75-013`,name:`Best Time to Buy and Sell Stock`,topic:`Sliding Window`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/best-time-to-buy-and-sell-stock/`},{id:`b75-014`,name:`Longest Substring Without Repeating Characters`,topic:`Sliding Window`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-substring-without-repeating-characters/`},{id:`b75-015`,name:`Longest Repeating Character Replacement`,topic:`Sliding Window`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-repeating-character-replacement/`},{id:`b75-016`,name:`Minimum Window Substring`,topic:`Sliding Window`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/minimum-window-substring/`},{id:`b75-017`,name:`Valid Parentheses`,topic:`Stack & Queue`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/valid-parentheses/`},{id:`b75-018`,name:`Find Minimum in Rotated Sorted Array`,topic:`Binary Search`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/`},{id:`b75-019`,name:`Search in Rotated Sorted Array`,topic:`Binary Search`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/search-in-rotated-sorted-array/`},{id:`b75-020`,name:`Reverse Linked List`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reverse-linked-list/`},{id:`b75-021`,name:`Merge Two Sorted Lists`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-two-sorted-lists/`},{id:`b75-022`,name:`Reorder List`,topic:`Linked List`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reorder-list/`},{id:`b75-023`,name:`Remove Nth Node From End of List`,topic:`Linked List`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/remove-nth-node-from-end-of-list/`},{id:`b75-024`,name:`Linked List Cycle`,topic:`Linked List`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/linked-list-cycle/`},{id:`b75-025`,name:`Merge k Sorted Lists`,topic:`Linked List`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-k-sorted-lists/`},{id:`b75-026`,name:`Invert Binary Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/invert-binary-tree/`},{id:`b75-027`,name:`Maximum Depth of Binary Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-depth-of-binary-tree/`},{id:`b75-028`,name:`Same Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/same-tree/`},{id:`b75-029`,name:`Subtree of Another Tree`,topic:`Trees`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/subtree-of-another-tree/`},{id:`b75-030`,name:`Lowest Common Ancestor of a BST`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/`},{id:`b75-031`,name:`Binary Tree Level Order Traversal`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/binary-tree-level-order-traversal/`},{id:`b75-032`,name:`Validate Binary Search Tree`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/validate-binary-search-tree/`},{id:`b75-033`,name:`Kth Smallest Element in a BST`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/kth-smallest-element-in-a-bst/`},{id:`b75-034`,name:`Construct Binary Tree from Preorder and Inorder Traversal`,topic:`Trees`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/`},{id:`b75-035`,name:`Binary Tree Maximum Path Sum`,topic:`Trees`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/binary-tree-maximum-path-sum/`},{id:`b75-036`,name:`Serialize and Deserialize Binary Tree`,topic:`Trees`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/serialize-and-deserialize-binary-tree/`},{id:`b75-037`,name:`Find Median from Data Stream`,topic:`Heap / Priority Queue`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/find-median-from-data-stream/`},{id:`b75-038`,name:`Combination Sum`,topic:`Backtracking`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/combination-sum/`},{id:`b75-039`,name:`Word Search`,topic:`Backtracking`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/word-search/`},{id:`b75-040`,name:`Number of Islands`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/number-of-islands/`},{id:`b75-041`,name:`Clone Graph`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/clone-graph/`},{id:`b75-042`,name:`Pacific Atlantic Water Flow`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/pacific-atlantic-water-flow/`},{id:`b75-043`,name:`Course Schedule`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/course-schedule/`},{id:`b75-044`,name:`Number of Connected Components in an Undirected Graph`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/number-of-connected-components-in-an-undirected-graph/1`},{id:`b75-045`,name:`Graph Valid Tree`,topic:`Graphs`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/graph-valid-tree/1`},{id:`b75-046`,name:`Alien Dictionary`,topic:`Graphs`,difficulty:`Hard`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/alien-dictionary/1`},{id:`b75-047`,name:`Climbing Stairs`,topic:`Dynamic Programming`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/climbing-stairs/`},{id:`b75-048`,name:`Coin Change`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/coin-change/`},{id:`b75-049`,name:`Longest Increasing Subsequence`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-increasing-subsequence/`},{id:`b75-050`,name:`Word Break`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/word-break/`},{id:`b75-051`,name:`Combination Sum IV`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/combination-sum-iv/`},{id:`b75-052`,name:`House Robber`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/house-robber/`},{id:`b75-053`,name:`House Robber II`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/house-robber-ii/`},{id:`b75-054`,name:`Decode Ways`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/decode-ways/`},{id:`b75-055`,name:`Maximum Subarray`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-subarray/`},{id:`b75-056`,name:`Maximum Product Subarray`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/maximum-product-subarray/`},{id:`b75-057`,name:`Partition Equal Subset Sum`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/partition-equal-subset-sum/`},{id:`b75-058`,name:`Unique Paths`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/unique-paths/`},{id:`b75-059`,name:`Longest Common Subsequence`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-common-subsequence/`},{id:`b75-060`,name:`Jump Game`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/jump-game/`},{id:`b75-061`,name:`Palindromic Substrings`,topic:`Dynamic Programming`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/palindromic-substrings/`},{id:`b75-062`,name:`Insert Interval`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/insert-interval/`},{id:`b75-063`,name:`Merge Intervals`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/merge-intervals/`},{id:`b75-064`,name:`Non-overlapping Intervals`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/non-overlapping-intervals/`},{id:`b75-065`,name:`Meeting Rooms`,topic:`Intervals`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/meeting-rooms/1`},{id:`b75-066`,name:`Meeting Rooms II`,topic:`Intervals`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://practice.geeksforgeeks.org/problems/meeting-rooms-ii/1`},{id:`b75-067`,name:`Number of 1 Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/number-of-1-bits/`},{id:`b75-068`,name:`Counting Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/counting-bits/`},{id:`b75-069`,name:`Reverse Bits`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/reverse-bits/`},{id:`b75-070`,name:`Missing Number`,topic:`Bit Manipulation`,difficulty:`Easy`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/missing-number/`},{id:`b75-071`,name:`Sum of Two Integers`,topic:`Bit Manipulation`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/sum-of-two-integers/`},{id:`b75-072`,name:`Rotate Image`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/rotate-image/`},{id:`b75-073`,name:`Spiral Matrix`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/spiral-matrix/`},{id:`b75-074`,name:`Set Matrix Zeroes`,topic:`Arrays & Hashing`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/set-matrix-zeroes/`},{id:`b75-075`,name:`Longest Palindromic Substring`,topic:`Two Pointers`,difficulty:`Medium`,sheets:[`Blind 75`],link:`https://leetcode.com/problems/longest-palindromic-substring/`},{id:`sql50-001`,name:`Recyclable and Low Fat Products`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/recyclable-and-low-fat-products/`},{id:`sql50-002`,name:`Find Customer Referee`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-customer-referee/`},{id:`sql50-003`,name:`Big Countries`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/big-countries/`},{id:`sql50-004`,name:`Article Views I`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/article-views-i/`},{id:`sql50-005`,name:`Invalid Tweets`,topic:`Select`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/invalid-tweets/`},{id:`sql50-006`,name:`Replace Employee ID With The Unique Identifier`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/`},{id:`sql50-007`,name:`Product Sales Analysis I`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-sales-analysis-i/`},{id:`sql50-008`,name:`Customer Who Visited but Did Not Make Any Transactions`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/`},{id:`sql50-009`,name:`Rising Temperature`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/rising-temperature/`},{id:`sql50-010`,name:`Average Time of Process per Machine`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/average-time-of-process-per-machine/`},{id:`sql50-011`,name:`Employee Bonus`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/employee-bonus/`},{id:`sql50-012`,name:`Students and Examinations`,topic:`Basic Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/students-and-examinations/`},{id:`sql50-013`,name:`Managers with at Least 5 Direct Reports`,topic:`Basic Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/managers-with-at-least-5-direct-reports/`},{id:`sql50-014`,name:`Confirmation Rate`,topic:`Basic Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/confirmation-rate/`},{id:`sql50-015`,name:`Not Boring Movies`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/not-boring-movies/`},{id:`sql50-016`,name:`Average Selling Price`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/average-selling-price/`},{id:`sql50-017`,name:`Project Employees I`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/project-employees-i/`},{id:`sql50-018`,name:`Percentage of Users Attended a Contest`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/percentage-of-users-attended-a-contest/`},{id:`sql50-019`,name:`Queries Quality and Percentage`,topic:`Aggregation`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/queries-quality-and-percentage/`},{id:`sql50-020`,name:`Monthly Transactions I`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/monthly-transactions-i/`},{id:`sql50-021`,name:`Immediate Food Delivery II`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/immediate-food-delivery-ii/`},{id:`sql50-022`,name:`Game Play Analysis IV`,topic:`Aggregation`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/game-play-analysis-iv/`},{id:`sql50-023`,name:`Number of Unique Subjects Taught by Each Teacher`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/`},{id:`sql50-024`,name:`User Activity for the Past 30 Days I`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/user-activity-for-the-past-30-days-i/`},{id:`sql50-025`,name:`Product Sales Analysis III`,topic:`Grouping`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-sales-analysis-iii/`},{id:`sql50-026`,name:`Classes More Than 5 Students`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/classes-more-than-5-students/`},{id:`sql50-027`,name:`Find Followers Count`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-followers-count/`},{id:`sql50-028`,name:`Biggest Single Number`,topic:`Grouping`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/biggest-single-number/`},{id:`sql50-029`,name:`Customers Who Bought All Products`,topic:`Grouping`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/customers-who-bought-all-products/`},{id:`sql50-030`,name:`The Number of Employees Which Report to Each Employee`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/`},{id:`sql50-031`,name:`Primary Department for Each Employee`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/primary-department-for-each-employee/`},{id:`sql50-032`,name:`Triangle Judgement`,topic:`Advanced Joins`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/triangle-judgement/`},{id:`sql50-033`,name:`Consecutive Numbers`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/consecutive-numbers/`},{id:`sql50-034`,name:`Product Price at a Given Date`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/product-price-at-a-given-date/`},{id:`sql50-035`,name:`Last Person to Fit in the Bus`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/last-person-to-fit-in-the-bus/`},{id:`sql50-036`,name:`Count Salary Categories`,topic:`Advanced Joins`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/count-salary-categories/`},{id:`sql50-037`,name:`Employees Whose Manager Left the Company`,topic:`Subqueries`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/employees-whose-manager-left-the-company/`},{id:`sql50-038`,name:`Exchange Seats`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/exchange-seats/`},{id:`sql50-039`,name:`Movie Rating`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/movie-rating/`},{id:`sql50-040`,name:`Restaurant Growth`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/restaurant-growth/`},{id:`sql50-041`,name:`Friend Requests II: Who Has the Most Friends`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/`},{id:`sql50-042`,name:`Investments in 2016`,topic:`Subqueries`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/investments-in-2016/`},{id:`sql50-043`,name:`Department Top Three Salaries`,topic:`Subqueries`,difficulty:`Hard`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/department-top-three-salaries/`},{id:`sql50-044`,name:`Fix Names in a Table`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/fix-names-in-a-table/`},{id:`sql50-045`,name:`Patients With a Condition`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/patients-with-a-condition/`},{id:`sql50-046`,name:`Delete Duplicate Emails`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/delete-duplicate-emails/`},{id:`sql50-047`,name:`Second Highest Salary`,topic:`Strings & Regex`,difficulty:`Medium`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/second-highest-salary/`},{id:`sql50-048`,name:`Group Sold Products By The Date`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/group-sold-products-by-the-date/`},{id:`sql50-049`,name:`List the Products Ordered in a Period`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/list-the-products-ordered-in-a-period/`},{id:`sql50-050`,name:`Find Users With Valid E-Mails`,topic:`Strings & Regex`,difficulty:`Easy`,sheets:[`SQL 50`],link:`https://leetcode.com/problems/find-users-with-valid-e-mails/`}],Ct=`sprintset_app_data_v1`,wt=`sprintset_active_sprint_v1`,Tt={pointsByDifficulty:{Easy:200,Medium:500,Hard:1e3},timeWeightsByDifficulty:{Easy:4,Medium:8,Hard:15}},Et={questions:St,questionStates:{},sessions:[],settings:Tt};function Dt(){try{let e=localStorage.getItem(Ct);if(!e)return Et;let t=JSON.parse(e);return{questions:t.questions||St,questionStates:t.questionStates||{},sessions:t.sessions||[],settings:{...Tt,...t.settings||{},timeWeightsByDifficulty:{...Tt.timeWeightsByDifficulty,...t.settings&&t.settings.timeWeightsByDifficulty||{}}}}}catch(e){return console.error(`Error loading AppState from localStorage:`,e),Et}}function Ot(e){try{localStorage.setItem(Ct,JSON.stringify(e))}catch(e){console.error(`Error saving AppState to localStorage:`,e)}}function kt(e){try{e?localStorage.setItem(wt,JSON.stringify(e)):localStorage.removeItem(wt)}catch(e){console.error(`Error saving active sprint state:`,e)}}function At(){try{let e=localStorage.getItem(wt);return e?JSON.parse(e):null}catch(e){return console.error(`Error loading active sprint state:`,e),null}}function jt(e){let t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`sprintset_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}function Mt(e,t,n){let r=new FileReader;r.onload=e=>{try{t(JSON.parse(e.target.result))}catch{n(`Invalid JSON file format.`)}},r.onerror=()=>n(`Failed to read file.`),r.readAsText(e)}function Nt(){let e=[`SHADOW-PAW`,`CYBER-CAT`,`NEXUS-PAW`,`APEX-PHOENIX`,`VALKYRIE-PAW`,`NEBULA-CAT`,`TITAN-PAW`,`OVERCLOCK-CAT`];return`${e[Math.floor(Math.random()*e.length)]}-${Math.floor(100+Math.random()*900)}`}function Pt({settings:e,questions:t=[],sessions:n=[],state:r,onSaveSettings:i,onImportJSON:a,onImportCSV:o,onResetData:s,onForceUpload:c,onStateImported:l,onResetAllData:u,onUpdateQuestions:d}){let f=e||r?.settings||{},p=t.length>0?t:r?.questions||[],m=n.length>0?n:r?.sessions||[],h=f.pointsByDifficulty?.Easy||200,g=f.pointsByDifficulty?.Medium||500,v=f.pointsByDifficulty?.Hard||1e3,y=f.timeWeightsByDifficulty?.Easy||4,b=f.timeWeightsByDifficulty?.Medium||8,x=f.timeWeightsByDifficulty?.Hard||15,[S,C]=(0,_.useState)(h),[w,ee]=(0,_.useState)(g),[T,E]=(0,_.useState)(v),[D,te]=(0,_.useState)(y),[O,k]=(0,_.useState)(b),[ne,A]=(0,_.useState)(x),[re,ie]=(0,_.useState)(``),[j,M]=(0,_.useState)(!1),[P,ae]=(0,_.useState)(f.syncKey||``);(0,_.useEffect)(()=>{C(h),ee(g),E(v),te(y),k(b),A(x),ae(f.syncKey||``)},[h,g,v,y,b,x,f.syncKey]);let oe=parseInt(S,10)!==h||parseInt(w,10)!==g||parseInt(T,10)!==v||parseInt(D,10)!==y||parseInt(O,10)!==b||parseInt(ne,10)!==x,se=e=>{e&&e.preventDefault(),i&&i({...f,pointsByDifficulty:{Easy:parseInt(S,10)||200,Medium:parseInt(w,10)||500,Hard:parseInt(T,10)||1e3},timeWeightsByDifficulty:{Easy:parseInt(D,10)||4,Medium:parseInt(O,10)||8,Hard:parseInt(ne,10)||15}}),ie(`Settings saved!`),setTimeout(()=>ie(``),2500)},le=()=>{C(h),ee(g),E(v),te(y),k(b),A(x)},ue=e=>{let t=e.target.files[0];t&&Mt(t,e=>{a?a(e):l&&l(e),alert(`Data backup successfully imported!`)},e=>alert(e))},fe=e=>{let t=e.target.files[0];t&&rt(t,e=>{if(e.length===0){alert(`No valid question rows found in CSV.`);return}o?o(e):d&&d(e),alert(`Successfully loaded ${e.length} questions from CSV!`)})},pe=()=>{jt(r||{questions:p,sessions:m,settings:f})},me=()=>{s?s():u&&u()},I=[{id:`sunset`,name:`Sunset Ember`,primary:`#f97316`,secondary:`#ea580c`},{id:`emerald`,name:`Cyber Emerald`,primary:`#10b981`,secondary:`#059669`},{id:`violet`,name:`Cosmic Purple`,primary:`#8b5cf6`,secondary:`#7c3aed`},{id:`electric-blue`,name:`Electric Blue`,primary:`#0ea5e9`,secondary:`#0284c7`},{id:`rose`,name:`Neon Rose`,primary:`#f43f5e`,secondary:`#e11d48`}],he=f.palette||`sunset`,ge=I.find(e=>e.id===he)||I[0];return(0,L.jsxs)(`div`,{className:`settings-container glass-card`,children:[(0,L.jsxs)(`div`,{className:`settings-header`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`h2`,{className:`settings-title`,children:[(0,L.jsx)(Ne,{size:22,className:`text-amber`}),(0,L.jsx)(`span`,{children:`App Settings`})]}),(0,L.jsx)(`p`,{className:`settings-subtitle`,children:`Customize scoring points, sprint time weights, accent theme palettes, and data backups.`})]}),(0,L.jsx)(`div`,{className:`settings-header-actions`,children:(0,L.jsxs)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>{window.confirm(`Reset scoring points, sprint weights, and theme palette back to defaults?`)&&(i&&i({palette:`sunset`,pointsByDifficulty:{Easy:10,Medium:20,Hard:30},timeWeightsByDifficulty:{Easy:4,Medium:8,Hard:15}}),C(10),ee(20),E(30),te(4),k(8),A(15),ie(`Reset settings to defaults!`),setTimeout(()=>ie(``),2500))},children:[(0,L.jsx)(Ae,{size:15}),(0,L.jsx)(`span`,{children:`Reset Defaults`})]})})]}),oe&&(0,L.jsxs)(`div`,{className:`unsaved-banner`,children:[(0,L.jsxs)(`div`,{className:`unsaved-banner-content`,children:[(0,L.jsx)(N,{size:18,className:`text-amber`}),(0,L.jsx)(`span`,{children:`You have unsaved changes to scoring or sprint duration weights!`})]}),(0,L.jsxs)(`div`,{className:`unsaved-actions`,children:[(0,L.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:le,children:`Discard`}),(0,L.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:se,children:[(0,L.jsx)(je,{size:14}),(0,L.jsx)(`span`,{children:`Save Changes`})]})]})]}),re&&(0,L.jsxs)(`div`,{className:`settings-float-toast`,children:[(0,L.jsx)(`span`,{children:`✓`}),(0,L.jsx)(`span`,{children:re})]}),(0,L.jsxs)(`div`,{className:`settings-form`,children:[(0,L.jsx)(`section`,{className:`settings-stacked-section`,children:(0,L.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading`,children:`Accent Theme Palette`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Select your preferred accent color scheme for Sprintset`})]}),(0,L.jsxs)(`div`,{className:`palette-dropdown-row`,children:[(0,L.jsx)(`span`,{className:`swatch-color-dot`,style:{background:`linear-gradient(135deg, ${ge.primary} 0%, ${ge.secondary} 100%)`}}),(0,L.jsx)(`select`,{className:`palette-select`,value:he,onChange:e=>{let t=I.find(t=>t.id===e.target.value);i&&t&&(i({...f,palette:t.id}),ie(`Switched to ${t.name}!`),setTimeout(()=>ie(``),1800))},children:I.map(e=>(0,L.jsx)(`option`,{value:e.id,children:e.name},e.id))})]})]})}),(0,L.jsx)(`section`,{className:`settings-stacked-section`,children:(0,L.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading`,children:`Scoring Configuration`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Points awarded when a problem is marked Solved`})]}),(0,L.jsxs)(`div`,{className:`setting-controls-right`,children:[(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:S,onChange:e=>C(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`pts`})]}),(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:w,onChange:e=>ee(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`pts`})]}),(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`500`,value:T,onChange:e=>E(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`pts`})]})]})]})}),(0,L.jsx)(`section`,{className:`settings-stacked-section`,children:(0,L.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading`,children:`Duration Suggestion Weights`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Base minutes per question used to calculate suggested sprint time`})]}),(0,L.jsxs)(`div`,{className:`setting-controls-right`,children:[(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-easy`,children:`Easy`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:D,onChange:e=>te(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`m/q`})]}),(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-medium`,children:`Medium`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:O,onChange:e=>k(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`m/q`})]}),(0,L.jsxs)(`div`,{className:`pts-box`,children:[(0,L.jsx)(`span`,{className:`badge badge-hard`,children:`Hard`}),(0,L.jsx)(`input`,{type:`number`,min:`1`,max:`60`,value:ne,onChange:e=>A(e.target.value),className:`input-num-tight`}),(0,L.jsx)(`span`,{className:`unit-text`,children:`m/q`})]})]})]})})]}),(0,L.jsxs)(`section`,{className:`settings-stacked-section`,children:[(0,L.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading`,children:`Data & Progress Snapshot`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Export JSON backup or load saved progress snapshot`})]}),(0,L.jsxs)(`div`,{className:`button-group-side`,children:[(0,L.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:pe,children:[(0,L.jsx)(Ue,{size:14}),(0,L.jsx)(`span`,{children:`Export JSON`})]}),(0,L.jsxs)(`label`,{className:`btn btn-secondary btn-sm cursor-pointer`,children:[(0,L.jsx)(ce,{size:14}),(0,L.jsx)(`span`,{children:`Import JSON`}),(0,L.jsx)(`input`,{type:`file`,accept:`.json`,onChange:ue,style:{display:`none`}})]}),c&&(0,L.jsxs)(`button`,{className:`btn btn-primary btn-sm ml-2`,onClick:c,children:[(0,L.jsx)(De,{size:14}),(0,L.jsx)(`span`,{children:`Force Upload State`})]})]})]}),(0,L.jsxs)(`div`,{className:`setting-single-line-row mt-3`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading`,children:`CSV Question Bank`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Export or import custom spreadsheet question bank`})]}),(0,L.jsxs)(`div`,{className:`button-group-side`,children:[(0,L.jsxs)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>it(p),children:[(0,L.jsx)(de,{size:14}),(0,L.jsx)(`span`,{children:`Export CSV`})]}),(0,L.jsxs)(`label`,{className:`btn btn-secondary btn-sm cursor-pointer`,children:[(0,L.jsx)(F,{size:14}),(0,L.jsx)(`span`,{children:`Import CSV`}),(0,L.jsx)(`input`,{type:`file`,accept:`.csv`,onChange:fe,style:{display:`none`}})]})]})]})]}),(0,L.jsx)(`section`,{className:`settings-stacked-section`,children:(0,L.jsxs)(`div`,{className:`setting-single-line-row`,style:{flexDirection:`column`,alignItems:`flex-start`,gap:`1rem`},children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsxs)(`h3`,{className:`setting-heading flex items-center gap-2 text-sky-400`,children:[(0,L.jsx)(ye,{size:16,className:`text-sky-400`}),` Supabase Realtime Cloud Sync`]}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Link your laptop and phone in real-time using a 6-digit Sync Passphrase or Google Sign-In`})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`1rem`,alignItems:`center`,width:`100%`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,background:`var(--bg-input)`,border:`1px solid var(--border-subtle)`,borderRadius:`var(--radius-md)`,padding:`0.25rem 0.5rem`},children:[(0,L.jsx)(`span`,{className:`text-xs text-muted font-bold`,children:`Passphrase:`}),(0,L.jsx)(`input`,{type:`text`,value:P,onChange:e=>ae(e.target.value.toUpperCase()),placeholder:`SHADOW-PAW-482`,className:`font-mono font-bold uppercase text-center`,style:{background:`transparent`,border:`none`,color:`var(--text-primary)`,outline:`none`,width:`140px`}}),P!==(f.syncKey||``)&&(0,L.jsx)(`button`,{type:`button`,className:`btn btn-primary btn-sm`,onClick:()=>{i&&i({...f,syncKey:P}),ie(`Supabase Sync Key updated!`),setTimeout(()=>ie(``),2e3)},children:`Save`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:()=>{let e=Nt();ae(e),i&&i({...f,syncKey:e}),ie(`Generated new Sync Key!`),setTimeout(()=>ie(``),2e3)},children:[(0,L.jsx)(De,{size:14}),(0,L.jsx)(`span`,{children:`Generate Key`})]})]})]})}),(0,L.jsx)(`section`,{className:`settings-stacked-section veto-section-card`,children:(0,L.jsxs)(`div`,{className:`setting-single-line-row`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsxs)(`h3`,{className:`setting-heading flex items-center gap-2`,children:[(0,L.jsx)(Se,{size:16,className:`text-amber`}),` Veto Integration`]}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Earn screen time in Veto's Time Bank when you complete DSA sprints`})]}),(0,L.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,L.jsxs)(`label`,{className:`toggle-switch-label`,children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:!!f.vetoEnabled,onChange:e=>{i({...f,vetoEnabled:e.target.checked})}}),(0,L.jsx)(`span`,{className:`toggle-slider`})]})})]})}),(0,L.jsxs)(`section`,{className:`settings-stacked-section danger-stacked mt-4`,children:[(0,L.jsxs)(`div`,{className:`danger-zone-header`,style:{marginBottom:`1.25rem`},children:[(0,L.jsx)(`h3`,{className:`setting-heading font-bold`,style:{color:`#ef4444`},children:`Danger Zone`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Irreversible destructive actions for local storage and progress`})]}),(0,L.jsxs)(`div`,{className:`setting-single-line-row danger-row-bg`,children:[(0,L.jsxs)(`div`,{className:`setting-label-col`,children:[(0,L.jsx)(`h3`,{className:`setting-heading text-danger`,children:`Reset All Local Data`}),(0,L.jsx)(`p`,{className:`setting-subtext`,children:`Irreversibly wipe saved sessions and local question states`})]}),(0,L.jsxs)(`button`,{className:`btn btn-danger btn-sm`,onClick:me,children:[(0,L.jsx)(ze,{size:14}),(0,L.jsx)(`span`,{children:`Reset All Data`})]})]})]}),(0,L.jsx)(`style`,{children:`
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
      `})]})}function Ft({isOpen:e,onClose:t,unclaimedPoints:n=0,onClaimPoints:r,onSyncCloud:i}){let[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1);if(!e)return null;let l=Math.floor(n/100),u=`veto://claim-reward?points=${n}&minutes=${Math.floor(n/100)}`;return(0,Ze.createPortal)((0,L.jsx)(`div`,{className:`modal-overlay`,onClick:t,children:(0,L.jsxs)(`div`,{className:`modal-card glass-card veto-modal-card`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`modal-header`,children:[(0,L.jsxs)(`div`,{className:`veto-title-group`,children:[(0,L.jsx)(`div`,{className:`veto-icon-badge`,children:(0,L.jsx)(Se,{size:22,className:`text-amber`})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{children:`Veto Time Bank Rewards`}),(0,L.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`,opacity:.75,maxWidth:`280px`,lineHeight:`1.3`,marginTop:`0.35rem`,fontWeight:500},children:`Convert your hard-earned focus points into guilt-free screen time on your phone.`})]})]}),(0,L.jsx)(`button`,{className:`close-btn`,onClick:t,children:(0,L.jsx)(We,{size:18})})]}),(0,L.jsxs)(`div`,{className:`veto-body`,children:[(0,L.jsxs)(`div`,{className:`veto-stats-grid`,children:[(0,L.jsxs)(`div`,{className:`veto-stat-card`,children:[(0,L.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,L.jsx)(Ge,{size:20,className:`text-amber`})}),(0,L.jsx)(`span`,{className:`stat-label`,children:`Unclaimed Points`}),(0,L.jsx)(`span`,{className:`stat-value text-amber`,children:n.toLocaleString()})]}),(0,L.jsxs)(`div`,{className:`veto-stat-card`,children:[(0,L.jsx)(`div`,{className:`stat-icon-wrapper`,children:(0,L.jsx)(oe,{size:20,className:`text-emerald`})}),(0,L.jsx)(`span`,{className:`stat-label`,children:`Veto Time Credit`}),(0,L.jsxs)(`span`,{className:`stat-value text-emerald`,children:[`+`,l,` min`]})]})]}),(0,L.jsxs)(`div`,{className:`veto-actions`,style:{marginTop:`1.25rem`},children:[(0,L.jsx)(`button`,{type:`button`,className:`btn btn-claim-veto full-width`,onClick:()=>{window.location.href=u,r&&r(n)},disabled:n<=0,style:{padding:`1.25rem 1.5rem`,fontSize:`1.15rem`,fontWeight:800,background:`rgb(var(--accent-rgb))`,border:`none`,boxShadow:`0 4px 14px 0 rgba(var(--accent-rgb), 0.4)`,color:`#ffffff`,textTransform:`uppercase`,letterSpacing:`1px`,transition:`all 0.2s ease`,borderRadius:`var(--radius-lg)`},onMouseEnter:e=>{e.currentTarget.style.boxShadow=`0 6px 20px rgba(var(--accent-rgb), 0.65)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.boxShadow=`0 4px 14px 0 rgba(var(--accent-rgb), 0.4)`,e.currentTarget.style.transform=`translateY(0)`},children:(0,L.jsx)(`span`,{children:`Transfer to Veto`})}),(0,L.jsxs)(`div`,{className:`secondary-veto-actions`,children:[(0,L.jsxs)(`button`,{type:`button`,className:`btn btn-secondary-veto btn-copy-link ${a?`copied`:``}`,onClick:()=>{navigator.clipboard.writeText(u),o(!0),setTimeout(()=>o(!1),2e3)},children:[(0,L.jsx)(se,{size:15}),(0,L.jsx)(`span`,{children:a?`Copied Deep Link!`:`Copy Claim Link`})]}),(0,L.jsxs)(`button`,{type:`button`,className:`btn btn-secondary-veto btn-sync-veto ${s?`syncing`:``}`,onClick:async()=>{c(!0),i&&await i(),setTimeout(()=>c(!1),800)},disabled:s,children:[(0,L.jsx)(De,{size:15,className:s?`sync-spin`:``}),(0,L.jsx)(`span`,{children:s?`Syncing...`:`Sync Cloud`})]})]})]})]})]})}),document.body)}var It=Symbol.for(`@supabase/supabase-js.traceContextExtractor`);function Lt(){return globalThis[It]}function Rt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function zt(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Bt=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Vt=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Ht=class extends Vt{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Ut=class extends Vt{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Wt=class extends Vt{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},Gt;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(Gt||={});var Kt=class{constructor(e,{headers:t={},customFetch:n,region:r=Gt.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Bt(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return zt(this,arguments,void 0,function*(e,t={}){var n;let r,i,a;try{let{headers:n,method:o,body:s,signal:c,timeout:l}=t,u={},{region:d}=t;d||=this.region;let f=new URL(`${this.url}/${e}`);d&&d!==`any`&&(u[`x-region`]=d,f.searchParams.set(`forceFunctionRegion`,d));let p,m=!!n&&Object.keys(n).some(e=>e.toLowerCase()===`content-type`);s&&!m?typeof Blob<`u`&&s instanceof Blob||s instanceof ArrayBuffer?(u[`Content-Type`]=`application/octet-stream`,p=s):typeof s==`string`?(u[`Content-Type`]=`text/plain`,p=s):typeof FormData<`u`&&s instanceof FormData?p=s:(u[`Content-Type`]=`application/json`,p=JSON.stringify(s)):p=s&&typeof s!=`string`&&!(typeof Blob<`u`&&s instanceof Blob)&&!(s instanceof ArrayBuffer)&&!(typeof FormData<`u`&&s instanceof FormData)?JSON.stringify(s):s;let h=c;l&&(i=new AbortController,r=setTimeout(()=>i.abort(),l),c?(h=i.signal,a=()=>i.abort(),c.addEventListener(`abort`,a)):h=i.signal);let g=yield this.fetch(f.toString(),{method:o||`POST`,headers:Object.assign(Object.assign(Object.assign({},u),this.headers),n),body:p,signal:h}).catch(e=>{throw new Ht(e)}),_=g.headers.get(`x-relay-error`);if(_&&_===`true`)throw new Ut(g);if(!g.ok)throw new Wt(g);let v=(g.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim().toLowerCase(),y;return y=v===`application/json`?yield g.json():v===`application/octet-stream`||v===`application/pdf`?yield g.blob():v===`text/event-stream`?g:v===`multipart/form-data`?yield g.formData():yield g.text(),{data:y,error:null,response:g}}catch(e){return{data:null,error:e,response:e instanceof Wt||e instanceof Ut?e.context:void 0}}finally{r&&clearTimeout(r),a&&((n=t.signal)==null||n.removeEventListener(`abort`,a))}})}},qt=3,Jt=e=>Math.min(1e3*2**e,3e4),Yt=[520,503],Xt=[`GET`,`HEAD`,`OPTIONS`],Zt=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Qt(e){"@babel/helpers - typeof";return Qt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qt(e)}function $t(e,t){if(Qt(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Qt(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function en(e){var t=$t(e,`string`);return Qt(t)==`symbol`?t:t+``}function tn(e,t,n){return(t=en(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nn(Object(n),!0).forEach(function(t){tn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function an(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function on(e,t,n,r){return!(!r||n>=qt||!Xt.includes(e)||!Yt.includes(t))}var sn=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,this.fetch=e.fetch?e.fetch:fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t={};n.headers.forEach((e,n)=>{t[n]=e}),e>0&&(t[`X-Retry-Count`]=String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t?.name===`AbortError`||t?.code===`ABORT_ERR`||!Xt.includes(n.method))throw t;if(n.retryEnabled&&e<qt){let t=Jt(e);e++,await an(t,n.signal);continue}throw t}if(on(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?Jt(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await an(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``)if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new Zt({message:i,details:``,hint:``,code:``})}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);if(s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r))if(r.length>1){if(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`,t.shouldThrowOnError)throw new Zt(rn(rn({},n),{},{hint:n.hint??``}))}else r=r.length===1?r[0]:null}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new Zt(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},cn=class extends sn{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},ln=RegExp(`[,()]`),un=class extends cn{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&ln.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&ln.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},dn=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new un({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new un({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new un({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new un({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new un({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},fn=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;this.fetch=i!==void 0&&i>0?(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,rn(rn({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,rn(rn({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new dn(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new un({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},pn=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node)return{type:`unsupported`,error:`Node.js detected but native WebSocket not found.`,workaround:`Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type===`native`}catch{return!1}}},mn=`realtime-js/2.112.1`,hn=`1.0.0`,gn=`2.0.0`,_n=gn,vn=1e4,yn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},bn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},xn={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Sn=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=new TextEncoder,i=r.encode(e.topic),a=r.encode(e.ref??``),o=r.encode(e.join_ref??``),s=r.encode(e.payload.event),c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},l=r.encode(Object.keys(c).length===0?``:JSON.stringify(c));if(o.length>255)throw Error(`joinRef length ${o.length} exceeds maximum of 255`);if(a.length>255)throw Error(`ref length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`topic length ${i.length} exceeds maximum of 255`);if(s.length>255)throw Error(`userEvent length ${s.length} exceeds maximum of 255`);if(l.length>255)throw Error(`metadata length ${l.length} exceeds maximum of 255`);let u=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+a.length+i.length+s.length+l.length,d=new ArrayBuffer(this.HEADER_LENGTH+u),f=new DataView(d),p=new Uint8Array(d),m=0;f.setUint8(m++,this.KINDS.userBroadcastPush),f.setUint8(m++,o.length),f.setUint8(m++,a.length),f.setUint8(m++,i.length),f.setUint8(m++,s.length),f.setUint8(m++,l.length),f.setUint8(m++,t),p.set(o,m),m+=o.length,p.set(a,m),m+=a.length,p.set(i,m),m+=i.length,p.set(s,m),m+=s.length,p.set(l,m),m+=l.length;var h=new Uint8Array(d.byteLength+n.byteLength);return h.set(new Uint8Array(d),0),h.set(new Uint8Array(n),d.byteLength),h.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},Cn;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(Cn||={});var wn=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Tn(i,e,t,r),n),{}):{}},Tn=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?En(i,a):Dn(a)},En=(e,t)=>{if(e.charAt(0)===`_`)return jn(t,e.slice(1,e.length));switch(e){case Cn.bool:return On(t);case Cn.float4:case Cn.float8:case Cn.int2:case Cn.int4:case Cn.int8:case Cn.numeric:case Cn.oid:return kn(t);case Cn.json:case Cn.jsonb:return An(t);case Cn.timestamp:return Mn(t);case Cn.abstime:case Cn.date:case Cn.daterange:case Cn.int4range:case Cn.int8range:case Cn.money:case Cn.reltime:case Cn.text:case Cn.time:case Cn.timestamptz:case Cn.timetz:case Cn.tsrange:case Cn.tstzrange:return Dn(t);default:return Dn(t)}},Dn=e=>e,On=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},kn=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},An=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},jn=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>En(t,e))}return e},Mn=e=>typeof e==`string`?e.replace(` `,`T`):e,Nn=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},Pn=e=>typeof e==`function`?e:function(){return e},Fn=typeof self<`u`?self:null,In=typeof window<`u`?window:null,Ln=Fn||In||globalThis,Rn=`2.0.0`,zn=1e4,Bn=1e3,Vn=100,Hn={connecting:0,open:1,closing:2,closed:3},Un={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Wn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},Gn={longpoll:`longpoll`,websocket:`websocket`},Kn={complete:4},qn=`base64url.bearer.phx.`,Jn=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},Yn=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},Xn=class{constructor(e,t,n){this.state=Un.closed,this.topic=e,this.params=Pn(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Jn(this,Wn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Yn(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=Un.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=Un.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=Un.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=Un.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new Jn(this,Wn.leave,Pn({}),this.timeout).send(),this.state=Un.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Wn.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Un.closed,this.bindings=[]}onClose(e){this.on(Wn.close,e)}onError(e){return this.on(Wn.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>n.event!==e||t!==void 0&&t!==n.ref)}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Jn(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Un.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(Wn.close,`leave`)},n=new Jn(this,Wn.leave,Pn({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Un.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===Un.closed}isErrored(){return this.state===Un.errored}isJoined(){return this.state===Un.joined}isJoining(){return this.state===Un.joining}isLeaving(){return this.state===Un.leaving}},Zn=class{static request(e,t,n,r,i,a,o){if(Ln.XDomainRequest){let n=new Ln.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}if(Ln.XMLHttpRequest){let s=new Ln.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}if(Ln.fetch&&Ln.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),Ln.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Kn.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},Qn=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},$n=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(qn)&&(this.authToken=atob(t[1].slice(qn.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=Hn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+Gn.websocket),`$1/`+Gn.longpoll)}endpointURL(){return Zn.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=Hn.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===Hn.open||this.readyState===Hn.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Hn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=Qn(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e,t=0){this.awaitingBatchAck=!0;let n=t+Vn,r=e.slice(t,n);this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},r.join(`
`),()=>this.onerror(`timeout`),t=>{!t||t.status!==200?(this.awaitingBatchAck=!1,this.onerror(t&&t.status),this.closeAndRetry(1011,`internal server error`,!1)):n<e.length?this.batchSend(e,n):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=Hn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=Zn.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},er=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state=Object.create(null),this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{t[n]=e[n]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},tr={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=new TextEncoder,s=o.encode(t),c=o.encode(n),l=o.encode(i),u=o.encode(r);this.assertFieldSize(s.byteLength,`join_ref`),this.assertFieldSize(c.byteLength,`ref`),this.assertFieldSize(l.byteLength,`topic`),this.assertFieldSize(u.byteLength,`event`);let d=this.META_LENGTH+s.byteLength+c.byteLength+l.byteLength+u.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+d),p=new Uint8Array(f),m=new DataView(f),h=0;m.setUint8(h++,this.KINDS.push),m.setUint8(h++,s.byteLength),m.setUint8(h++,c.byteLength),m.setUint8(h++,l.byteLength),m.setUint8(h++,u.byteLength),p.set(s,h),h+=s.byteLength,p.set(c,h),h+=c.byteLength,p.set(l,h),h+=l.byteLength,p.set(u,h),h+=u.byteLength;var g=new Uint8Array(f.byteLength+a.byteLength);return g.set(p,0),g.set(new Uint8Array(a),f.byteLength),g.buffer},assertFieldSize(e,t){if(e>255)throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`)},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:Wn.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},nr=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||zn,this.transport=t.transport||Ln.WebSocket||$n,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=Ln&&Ln.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=tr.encode.bind(tr),this.defaultDecoder=tr.decode.bind(tr),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===$n?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;In&&In.addEventListener&&(In.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),In.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),In.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Pn(t.params||{}),this.endPoint=`${e}/${Gn.websocket}`,this.vsn=t.vsn||Rn,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Yn(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken&&Pn(t.authToken)}getLongPollTransport(){return $n}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=Zn.appendParams(Zn.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=Pn(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==$n?this.connectWithFallback($n,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case $n:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${qn}${btoa(this.authToken()).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a,o=this.transportName(e),s=t=>{this.log(`transport`,`falling back to ${o}...`,t),this.off([i,a]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${o}`))return s(`memorized`);this.fallbackTimer=setTimeout(s,t),a=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),s(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(s,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Bn,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===Hn.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(Wn.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case Hn.connecting:return`connecting`;case Hn.open:return`open`;case Hn.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new Xn(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return this.ref=e===this.ref?0:e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},rr=class e{constructor(t,n){let r=or(n);this.presence=new er(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=ar(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=ir(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:sr(t),newPresences:ir(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:sr(t),leftPresences:ir(n)}}};function ir(e){return e.metas.map(e=>{let t=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},t);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function ar(e){return JSON.parse(JSON.stringify(e))}function or(e){return e?.events&&{events:e.events}}function sr(e){return e?.metas?ir(e):[]}var cr;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(cr||={});var lr=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new rr(this.channel.channelAdapter,t)}};function ur(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var dr=class{constructor(e,t,n){let r=fr(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===yn.joined}isJoined(){return this.state===yn.joined}isJoining(){return this.state===yn.joining}isClosed(){return this.state===yn.closed}isLeaving(){return this.state===yn.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function fr(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var pr=/[,()"\\]/,mr=e=>pr.test(e)||e!==e.trim(),hr=e=>`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}"`,gr=e=>{let t=e===null?`null`:String(e);return mr(t)?hr(t):t},_r=e=>e===null?`null`:String(e),vr=(e,t)=>{if(e===`in`){let e=Array.isArray(t)?t:[t];if(e.length===0)throw Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(e)).map(e=>gr(e)).join(`,`)})`}return e===`is`?`is.${_r(t)}`:`${e}.${gr(t)}`},yr=class{constructor(){this.filters=[]}add(e,t,n,r=!1){let i=r?`not.`:``;return this.filters.push(`${e}=${i}${vr(t,n)}`),this}eq(e,t){return this.add(e,`eq`,t)}neq(e,t){return this.add(e,`neq`,t)}gt(e,t){return this.add(e,`gt`,t)}gte(e,t){return this.add(e,`gte`,t)}lt(e,t){return this.add(e,`lt`,t)}lte(e,t){return this.add(e,`lte`,t)}in(e,t){return this.add(e,`in`,t)}like(e,t){return this.add(e,`like`,t)}ilike(e,t){return this.add(e,`ilike`,t)}match(e,t){return this.add(e,`match`,t)}imatch(e,t){return this.add(e,`imatch`,t)}is(e,t){return this.add(e,`is`,t)}isDistinct(e,t){return this.add(e,`isdistinct`,t)}not(e,t,n){return this.add(e,t,n,!0)}build(){return this.filters.join(`,`)}toString(){return this.build()}},br;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(br||={});var xr;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(xr||={});var Sr;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(Sr||={});var Cr=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new dr(this.socket.socketAdapter,e,this.params),this.presence=new lr(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Nn(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[xr.PRESENCE]&&this.bindings[xr.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(Sr.CHANNEL_ERROR,ur(t))}),this._onClose(()=>e?.(Sr.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(Sr.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=yn.errored;let n=Object.values(t).join(`, `)||`error`;e?.(Sr.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(Sr.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=yn.errored,n?.(Sr.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=yn.errored&&n&&n(Sr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===xr.PRESENCE||e===xr.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};if(s.status===404)return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i=t?.filter;(i instanceof yr||typeof i==`object`&&i&&typeof i.build==`function`)&&(t=Object.assign(Object.assign({},t),{filter:i.build()}));let a=this.channelAdapter.on(e,n),o={type:r,filter:t,callback:n,ref:a};return this.bindings[r]?this.bindings[r].push(o):this.bindings[r]=[o],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=bn;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=wn(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=wn(e.columns,e.old_record)),t}},wr=class{constructor(e,t){this.socket=new nr(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==xn.connecting}isDisconnecting(){return this.socket.connectionState()==xn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},Tr={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Er=[1e3,2e3,5e3,1e4],Dr=1e4;function Or(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function kr(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Or()}var Ar=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,jr=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Sn,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new wr(e,n),this.httpEndpoint=Nn(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||xn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Cr(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;this.accessToken?this._manuallySetToken=!1:n&&(this._manuallySetToken=!0),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:mn};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(bn.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t!==`disconnected`&&(t==`sent`&&this._setAuthSafely(),e&&e(t,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Ar],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??vn,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??Tr.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??Tr.HEARTBEAT_INTERVAL),t.transport=e?.transport??pn.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??kr(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Er[e-1]||Dr);let n,r,i=e?.vsn??_n;switch(i){case hn:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case gn:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Mr=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Nr(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Pr(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Fr(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=Nr(e.baseUrl,r,i),c=await Pr(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Mr(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function Ir(e){return e.join(``)}var Lr=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:Ir(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Ir(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Ir(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Ir(e.namespace)}`}),!0}catch(e){if(e instanceof Mr&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Mr&&e.status===409)return;throw e}}};function Rr(e){return e.join(``)}var zr=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Mr&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Mr&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Br=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Fr({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Lr(this.client,t),this.tableOps=new zr(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Vr(e){"@babel/helpers - typeof";return Vr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Vr(e)}function Hr(e,t){if(Vr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Vr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ur(e){var t=Hr(e,`string`);return Vr(t)==`symbol`?t:t+``}function Wr(e,t,n){return(t=Ur(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Gr(Object(n),!0).forEach(function(t){Wr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Kr=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function qr(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Jr=class extends Kr{constructor(e,t,n,r=`storage`,i){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n,this.code=i}toJSON(){return z(z({},super.toJSON()),{},{code:this.code})}},Yr=class extends Kr{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function Xr(e,t,n){let r=z({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function Zr(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var Qr=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),$r=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ei=e=>{if(Array.isArray(e))return e.map(e=>ei(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=ei(n)}),t},ti=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),ni=e=>e.split(`/`).map(encodeURIComponent).join(`/`),ri=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},ii=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Jr(ri(e),i,n,r,e?.code))}).catch(()=>{let e=i+``;t(new Jr(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Yr(ri(e),e,r))},ai=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return z(z({},i),n);if($r(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=Xr(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),z(z({},i),n)};async function oi(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,ai(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>ii(e,c,r,o))})}function si(e=`storage`){return{get:async(t,n,r,i)=>oi(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>oi(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>oi(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>oi(t,`HEAD`,n,z(z({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>oi(t,`DELETE`,n,i,a,r,e)}}var{get:ci,post:li,put:ui,head:di,remove:fi}=si(`storage`),pi=si(`vectors`),mi=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=Zr(t),this.fetch=Qr(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Xr(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(qr(e))return{data:null,error:e};throw e}}},hi=Symbol.toStringTag,gi=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[hi]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(qr(t))return{data:null,error:t};throw t}}},_i=Symbol.toStringTag,vi=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[_i]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new gi(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(qr(t))return{data:null,error:t};throw t}}},yi={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},bi={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},xi=class extends mi{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=z(z({},bi),r),s=z(z({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=Xr(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?ui:li)(i.fetch,`${i.url}/object/${u}`,a,z({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=z(z({},bi),r),o=z(z({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=Xr(o,e,t);return{path:a,fullPath:(await ui(i.fetch,s.toString(),e,z({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=z({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await li(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new Kr(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await li(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await li(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await li(r.fetch,`${r.url}/object/sign/${i}`,z({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await li(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>z(z({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new vi(()=>ci(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>ei(await ci(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await di(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(qr(e)){let t=e instanceof Jr?e.status:e instanceof Yr?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await fi(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async purgeCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=ni(r._getFinalPath(e)),a=new URLSearchParams;t?.transformations&&a.set(`transformations`,`true`);let o=a.toString();return await fi(r.fetch,`${r.url}/cdn/${i}${o?`?${o}`:``}`,{},{headers:r.headers},n)})}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=t?.sortBy?z(z({},yi.sortBy),t.sortBy):yi.sortBy,a=z(z(z({},yi),t),{},{sortBy:i,prefix:e||``});return await li(r.fetch,`${r.url}/object/list/${r.bucketId}`,a,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=z({},e);return await li(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},Si={"X-Client-Info":`storage-js/2.112.1`},Ci=class extends mi{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=z(z({},Si),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await ci(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await ci(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await li(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await ui(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await li(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await fi(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}async purgeBucketCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=new URLSearchParams;t?.transformations&&i.set(`transformations`,`true`);let a=i.toString();return await fi(r.fetch,`${r.url}/cdn/${ni(e)}${a?`?${a}`:``}`,{},{headers:r.headers},n)})}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},wi=class extends mi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=z(z({},Si),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await li(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await ci(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await fi(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!ti(e))throw new Kr(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Br({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Ti=class extends mi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=z(z({},Si),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await pi.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await pi.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},Ei=class extends mi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=z(z({},Si),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},Di=class extends mi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=z(z({},Si),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await pi.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},Oi=class extends Di{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new ki(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},ki=class extends Ti{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new Ai(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},Ai=class extends Ei{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,z(z({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},ji=class extends Ci{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new xi(this.url,this.headers,e,this.fetch)}get vectors(){return new Oi(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new wi(this.url+`/iceberg`,this.headers,this.fetch)}},Mi=`2.112.1`,B=3e4,V=3*B,Ni=2*B,Pi=`http://localhost:9999`,Fi=`supabase.auth.token`,Ii={"X-Client-Info":`gotrue-js/${Mi}`},Li=`X-Supabase-Api-Version`,Ri={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},zi=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Bi=`sb_flow_id`,Vi=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function H(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var Hi=class extends Vi{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function Ui(e){return H(e)&&e.name===`AuthApiError`}var Wi=class extends Vi{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},Gi=class extends Vi{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},U=class extends Gi{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function Ki(e){return H(e)&&e.name===`AuthSessionMissingError`}var qi=class extends Gi{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},Ji=class extends Gi{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Yi=class extends Gi{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function Xi(e){return H(e)&&e.name===`AuthImplicitGrantRedirectError`}var Zi=class extends Gi{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},Qi=class extends Gi{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},$i=class extends Gi{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function ea(e){return H(e)&&e.name===`AuthRetryableFetchError`}var ta=class extends Gi{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function na(e){return H(e)&&e.name===`AuthRefreshDiscardedError`}var ra=class extends Gi{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},ia=class extends Gi{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},aa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),oa=` 	
\r=`.split(``),sa=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<oa.length;t+=1)e[oa[t].charCodeAt(0)]=-2;for(let t=0;t<aa.length;t+=1)e[aa[t].charCodeAt(0)]=t;return e})();function ca(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(aa[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(aa[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function la(e,t,n){let r=sa[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function ua(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{pa(e,r,n)};for(let t=0;t<e.length;t+=1)la(e.charCodeAt(t),i,a);return t.join(``)}function da(e,t){if(e<=127){t(e);return}if(e<=2047){t(192|e>>6),t(128|e&63);return}if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function fa(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}da(r,t)}}function pa(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function ma(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)la(e.charCodeAt(t),n,r);return new Uint8Array(t)}function ha(e){let t=[];return fa(e,e=>t.push(e)),new Uint8Array(t)}function ga(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>ca(e,n,r)),ca(null,n,r),t.join(``)}function _a(e){return Math.round(Date.now()/1e3)+e}function va(){return Symbol(`auth-callback`)}var ya=()=>typeof window<`u`&&typeof document<`u`,ba={tested:!1,writable:!1},xa=()=>{if(!ya())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(ba.tested)return ba.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),ba.tested=!0,ba.writable=!0}catch{ba.tested=!0,ba.writable=!1}return ba.writable};function Sa(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Ca=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),wa=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,Ta=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Ea=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},Da=async(e,t)=>{await e.removeItem(t)},Oa=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};Oa.promiseConstructor=Promise;function ka(e){let t=e.split(`.`);if(t.length!==3)throw new ia(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!zi.test(t[e]))throw new ia(`JWT not in base64url format`);return{header:JSON.parse(ua(t[0])),payload:JSON.parse(ua(t[1])),signature:ma(t[2]),raw:{header:t[0],payload:t[1]}}}async function Aa(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function ja(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function Ma(e){return(`0`+e.toString(16)).substr(-2)}function Na(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,Ma).join(``)}async function Pa(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Fa(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Pa(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var Ia=/^[a-zA-Z0-9_-]{8,64}$/;function La(e){return typeof e==`string`&&Ia.test(e)?e:null}function Ra(){if(typeof crypto<`u`&&typeof crypto.getRandomValues==`function`){let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Ma).join(``)}let e=``;for(let t=0;t<32;t++)e+=Math.floor(Math.random()*16).toString(16);return e}var za=(e,t)=>`${e}-flow-${t}-code-verifier`,Ba=e=>`${e}-flows-code-verifier`;async function Va(e,t){let n=await Ea(e,Ba(t));return Array.isArray(n)?n.filter(e=>La(e)!==null):[]}async function Ha(e,t,n,r,i){await Ta(e,za(t,n),r);let a=(await Va(e,t)).filter(e=>e!==n);for(a.push(n);a.length>5;){let n=a.shift();await Da(e,za(t,n)),i?.(n)}await Ta(e,Ba(t),a),await Ta(e,`${t}-code-verifier`,r)}async function Ua(e,t,n){if(n){let r=await Ea(e,za(t,n));return{verifier:typeof r==`string`?r:null,flowId:n}}let r=await Ea(e,`${t}-code-verifier`);return{verifier:typeof r==`string`?r:null,flowId:null}}async function Wa(e,t,n){let r=`${t}-code-verifier`;if(!n){await Da(e,r);return}let i=za(t,n),a=await Ea(e,i);await Da(e,i);let o=await Va(e,t),s=o.filter(e=>e!==n);s.length!==o.length&&(s.length>0?await Ta(e,Ba(t),s):await Da(e,Ba(t))),a!=null&&a===await Ea(e,r)&&await Da(e,r)}async function Ga(e,t){let n=await Va(e,t);for(let r of n)await Da(e,za(t,r));await Da(e,Ba(t)),await Da(e,`${t}-code-verifier`)}function Ka(e,t){let n=e.indexOf(`#`),r=n===-1?e:e.slice(0,n),i=n===-1?``:e.slice(n),a=r.indexOf(`?`);if(a!==-1){let e=r.slice(0,a),t=r.slice(a+1).split(`&`).filter(e=>e!==``&&e!==`sb_flow_id`&&!e.startsWith(`sb_flow_id=`));r=t.length>0?`${e}?${t.join(`&`)}`:e}let o=r.includes(`?`)?`&`:`?`;return`${r}${o}${Bi}=${encodeURIComponent(t)}${i}`}async function qa(e,t,n=!1,r){let i=Na(),a=i;n&&(a+=`/recovery`);let o=Ra();await Ha(e,t,o,a,r);let s=await Fa(i);return[s,i===s?`plain`:`s256`,o]}var Ja=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Ya(e){let t=e.headers.get(Li);if(!t||!t.match(Ja))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function Xa(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Za(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var Qa=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function $a(e){if(!Qa.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function eo(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function to(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function no(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function ro(e){return JSON.parse(JSON.stringify(e))}var io=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},ao=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function oo(e){if(!wa(e))throw new $i(io(e),0);let t;try{t=await e.json()}catch(t){throw ao.includes(e.status)?new $i(e.statusText||`HTTP ${e.status}`,e.status):new Wi(io(t),t)}if(ao.includes(e.status))throw new $i(io(t),e.status);let n,r=Ya(e);if(r&&r.getTime()>=Ri[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new ra(io(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new ra(io(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new U;throw new Hi(io(t),e.status||500,n)}var so=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function W(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[Li]=Ri[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await G(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function G(e,t,n,r,i,a){let o=so(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw new $i(io(e),0)}if(s.ok||await oo(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await oo(e)}}function K(e){let t=null;mo(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=_a(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function co(e){let t=K(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function lo(e){return{data:{user:e.user??e},error:null}}function uo(e){return{data:e,error:null}}function fo(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=Rt(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function po(e){return e}function mo(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var ho=[`global`,`local`,`others`],go=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Ca(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=ho[0]){if(ho.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${ho.join(`, `)}`);try{return await W(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await W(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:lo})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=Rt(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await W(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:fo,redirectTo:t?.redirectTo})}catch(e){if(H(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await W(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:lo})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await W(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:po});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){$a(e);try{return await W(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:lo})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){$a(e);try{return await W(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:lo})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){$a(e);try{return await W(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:lo})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){$a(e.userId);try{let{data:t,error:n}=await W(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteFactor(e){$a(e.userId),$a(e.id);try{return{data:await W(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await W(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:po});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await W(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await W(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await W(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await W(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await W(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await W(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(H(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await W(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await W(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await W(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await W(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){eo(this.experimental),$a(e.userId);try{return await W(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){eo(this.experimental),$a(e.userId),$a(e.passkeyId);try{return await W(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}};function _o(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&xa()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var vo=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function yo(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function bo(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function xo(e){return parseInt(e,16)}function So(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Co(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=bo(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var wo=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},To=class extends wo{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Eo({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new wo({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new wo({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new wo({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new wo({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new wo({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new wo({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new wo({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new wo({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!No(t))return new wo({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new wo({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new wo({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new wo({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new wo({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Do({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new wo({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new wo({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!No(t))return new wo({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new wo({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new wo({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new wo({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var Oo=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function ko(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=Rt(e,[`challenge`,`user`,`excludeCredentials`]),a=ma(t).buffer,o=Object.assign(Object.assign({},n),{id:ma(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:ma(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function Ao(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=Rt(e,[`challenge`,`allowCredentials`]),i=ma(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:ma(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function jo(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:ga(new Uint8Array(e.response.attestationObject)),clientDataJSON:ga(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Mo(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:ga(new Uint8Array(r.authenticatorData)),clientDataJSON:ga(new Uint8Array(r.clientDataJSON)),signature:ga(new Uint8Array(r.signature)),userHandle:r.userHandle?ga(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function No(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Po(){return!!(ya()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Fo(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new To(`Browser returned unexpected credential type`,t)}:{data:null,error:new To(`Empty credential response`,t)}}catch(t){return{data:null,error:Eo({error:t,options:e})}}}async function Io(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new To(`Browser returned unexpected credential type`,t)}:{data:null,error:new To(`Empty credential response`,t)}}catch(t){return{data:null,error:Do({error:t,options:e})}}}var Lo={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Ro={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function zo(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];r[e]=t(n)?zo(n,a):zo(a)}else r[e]=a}return r}function Bo(e,t){return zo(Lo,e,t||{})}function Vo(e,t){return zo(Ro,e,t||{})}var Ho=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??Oo.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Fo({publicKey:Bo(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Vo(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Io(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new Wi(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Vi(`rpId is required for WebAuthn authentication`)};try{if(!Po())return{data:null,error:new Wi(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new Wi(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Vi(`rpId is required for WebAuthn registration`)};try{if(!Po())return{data:null,error:new Wi(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new Wi(`Unexpected error in register`,e)}}}};yo();var Uo={url:Pi,storageKey:Fi,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Ii,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Wo={},Go=class e{get jwks(){return Wo[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Wo[this.storageKey]=Object.assign(Object.assign({},Wo[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Wo[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Wo[this.storageKey]=Object.assign(Object.assign({},Wo[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Uo),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&ya()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new go({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Ca(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Ho(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:xa()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=_o(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=_o(this.memoryStorage)),ya()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e),(e.data.event===`TOKEN_REFRESHED`||e.data.event===`SIGNED_IN`)&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Mi}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))();let e=await this.initializePromise,t=this._pendingInitNotifications??[];this._pendingInitNotifications=null;for(let e of t)await this._notifyAllSubscribers(e.event,e.session,e.broadcast);return e}async _initialize(){try{let e={},t=`none`;if(ya()&&(e=Sa(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),ya()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),Xi(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return H(e)?this._returnResult({error:e}):this._returnResult({error:new Wi(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await W(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:K});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){let t=null;try{let n;if(`email`in e){let{email:r,password:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod()),n=await W(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t),body:{email:r,password:i,data:a?.data??{},gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},xform:K})}else if(`phone`in e){let{phone:t,password:r,options:i}=e;n=await W(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:t,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:K})}else throw new Ji(`You must provide either an email or phone number and a password`);let{data:r,error:i}=n;if(i||!r)return await Wa(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:i});let a=r.session,o=r.user;return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(await Wa(this.storage,this.storageKey,t),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await W(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:co})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await W(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:co})}else throw new Ji(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new qi;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e,t):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!ya()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=bo(l[0]),d=o?.signInWithEthereum?.chainId;d||=xo(await s.request({method:`eth_chainId`})),t=Co({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[So(t),u]})}try{let{data:r,error:i}=await W(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:K});if(i)throw i;if(!r||!r.session||!r.user){let e=new qi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!ya()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await W(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:ga(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:K});if(i)throw i;if(!r||!r.session||!r.user){let e=new qi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e,t){let n=t?.flowId!=null,r=n?La(t?.flowId):ya()?La(Sa(window.location.href)[Bi]):null;n&&!r&&this._debug(`#_exchangeCodeForSession()`,`provided flowId is not a valid flow id`,t?.flowId);let{verifier:i,flowId:a}=n&&!r?{verifier:null,flowId:null}:await Ua(this.storage,this.storageKey,r),[o,s]=(i??``).split(`/`);try{if(!o&&this.flowType===`pkce`)throw new Qi;let{data:t,error:n}=await W(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:K});if(await Wa(this.storage,this.storageKey,a),n)throw n;if(!t||!t.session||!t.user){let e=new qi;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(s===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,t.session)),this._returnResult({data:Object.assign(Object.assign({},t),{redirectType:s??null}),error:n})}catch(e){if(await Wa(this.storage,this.storageKey,a),H(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await W(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:K});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new qi;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){let t=null;try{if(`email`in e){let{email:n,options:r}=e,i=null,a=null;this.flowType===`pkce`&&([i,a,t]=await this._getCodeChallengeAndMethod());let{error:o}=await W(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:n,data:r?.data??{},create_user:r?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:r?.captchaToken},code_challenge:i,code_challenge_method:a},redirectTo:this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo,t)});return this._returnResult({data:{user:null,session:null},error:o})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await W(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new Ji(`You must provide either an email or phone number.`)}catch(e){if(await Wa(this.storage,this.storageKey,t),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await W(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:K});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){let t=null;try{let n=null,r=null;this.flowType===`pkce`&&([n,r,t]=await this._getCodeChallengeAndMethod());let i=await W(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect(e.options?.redirectTo,t)}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:n,code_challenge_method:r}),headers:this.headers,xform:uo});return i.data?.url&&ya()&&!e.options?.skipBrowserRedirect&&window.location.assign(i.data.url),this._returnResult(i)}catch(e){if(await Wa(this.storage,this.storageKey,t),H(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new U;let{error:r}=await W(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{let n=`${this.url}/resend`;if(`email`in e){let{email:r,type:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod());let{error:c}=await W(this.fetch,`POST`,n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t)});return c&&await Wa(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}if(`phone`in e){let{phone:t,type:r,options:i}=e,{data:a,error:o}=await W(this.fetch,`POST`,n,{headers:this.headers,body:{phone:t,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Ji(`You must provide either an email or phone number and a type`)}catch(e){if(await Wa(this.storage,this.storageKey,t),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await Ea(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<V:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await Ea(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=to()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=no(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(e.expires_at&&e.expires_at*1e3>Date.now()){let t=await Ea(this.storage,this.storageKey);if(t&&t.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await W(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:lo}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new U}:await W(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:lo})})}catch(e){if(H(e))return Ki(e)&&await this._removeSession(),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){let n=null;try{return await this._useSession(async r=>{let{data:i,error:a}=r;if(a)throw a;if(!i.session)throw new U;let o=i.session,s=null,c=null;this.flowType===`pkce`&&e.email!=null&&([s,c,n]=await this._getCodeChallengeAndMethod());let{data:l,error:u}=await W(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:s,code_challenge_method:c}),jwt:o.access_token,xform:lo});if(u)throw u;return o.user=l.user,await this._saveSession(o),await this._notifyAllSubscribers(`USER_UPDATED`,o),this._returnResult({data:{user:o.user},error:null})})}catch(e){if(await Wa(this.storage,this.storageKey,n),H(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new U;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=ka(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new U;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!ya())throw new Yi(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Yi(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new Zi(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Yi(`Not a valid implicit grant flow url.`)}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new Zi(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code,{flowId:e[Bi]});if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),r.searchParams.delete(Bi),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Yi(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;let t=La(e[Bi]);return t&&await Ea(this.storage,za(this.storageKey,t))?!0:!!await Ea(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let n=async()=>{await this._removeSession()},{data:r,error:i}=t;if(i&&!Ki(i))return this._returnResult({error:i});let a=r.session?.access_token;if(a){let{error:t}=await this.admin.signOut(a,e);if(t&&!(Ui(t)&&(t.status===404||t.status===401||t.status===403)||Ki(t)))return e!==`others`&&await n(),this._returnResult({error:t})}return e!==`others`&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){let t=va(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),Ki(t)||ea(t)||Ui(t)&&(t.code===`refresh_token_not_found`||t.code===`refresh_token_already_used`||t.code===`session_expired`)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null,i=null;this.flowType===`pkce`&&([n,r,i]=await this._getCodeChallengeAndMethod(!0));try{return await W(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,i)})}catch(e){if(await Wa(this.storage,this.storageKey,i),H(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){let t=null;try{let{data:n,error:r}=await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;let{url:a,flowId:o}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return t=o,await W(this.fetch,`GET`,a,{headers:this.headers,jwt:r.session?.access_token??void 0})});if(r)throw r;return ya()&&!e.options?.skipBrowserRedirect&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url,flowId:t},error:null})}catch(n){if(H(n))return this._returnResult({data:{provider:e.provider,url:null,flowId:t},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await W(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:K});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new qi}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await Wa(this.storage,this.storageKey,null),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await W(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await ja(async n=>(n>0&&await Aa(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await W(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:K})),(e,t)=>{let r=200*2**e;return t&&ea(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let{url:n,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),ya()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:r},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await Ea(this.storage,this.storageKey);if(t&&this.userStorage){let e=await Ea(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await Ta(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??to()}else if(t&&!t.user&&!t.user){let e=await Ea(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await Da(this.storage,this.storageKey+`-user`),await Ta(this.storage,this.storageKey,t)):t.user=to()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<V;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${V}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(na(n)?this._debug(e,`refresh discarded by commit guard`,n):this._debug(e,`refresh failed`,n))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),ea(t)?console.warn(t):console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new U;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug(`#_callRefreshToken()`,`returning cached failure (cooldown active)`),this.lastRefreshFailure.result;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new Oa;let t=await Ea(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new U;let a=await Ea(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new ta};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await Da(this.storage,this.storageKey),this.userStorage&&await Da(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new ta};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,`error`,i),H(i)){let n={data:null,error:i};if(!ea(i)){let e=await Ea(this.storage,this.storageKey);e?.expires_at&&e.expires_at*1e3>Date.now()?this._debug(r,`proactive refresh failed, access token still valid — preserving session`):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+Ni},(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0;let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Ta(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=ro(e);await Ta(this.storage,this.storageKey,r)}else{let e=ro(t);await Ta(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Da(this.storage,this.storageKey),await Ga(this.storage,this.storageKey),await Da(this.storage,this.storageKey+`-user`),this.userStorage&&await Da(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&ya()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),B);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/B);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${B}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof vo)this._debug(`auto refresh token tick lock not available`);else throw e}return}if(this.refreshingDeferred!==null){this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/B);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${B}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!ya()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=n?.redirectTo,i=null,a=null,o=null;this.flowType===`pkce`&&([i,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));let s=[`provider=${encodeURIComponent(t)}`];if(r&&s.push(`redirect_to=${encodeURIComponent(r)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),i!=null&&a!=null){let e=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(e.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);s.push(e.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${s.join(`&`)}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:Ka(e,t)}async _getCodeChallengeAndMethod(e=!1){return qa(this.storage,this.storageKey,e,e=>this._debug(`#_getCodeChallengeAndMethod()`,`evicted oldest pending PKCE verifier slot`,e))}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await W(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await W(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?jo(e.webauthn.credential_response):Mo(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await W(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await W(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:ko(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ao(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=ka(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=ka(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await W(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await W(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&ya()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await W(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&ya()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await W(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await W(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await W(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=ka(n);if(!t?.allowExpired)try{Xa(i.exp)}catch(e){throw new ia(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Za(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,ha(`${o}.${s}`)))throw new ia(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){eo(this.experimental);try{if(!Po())return this._returnResult({data:null,error:new Wi(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Io({publicKey:Ao(t.options),signal:e?.options?.signal??Oo.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new Wi(`WebAuthn ceremony failed`,null)});let a=Mo(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){eo(this.experimental);try{if(!Po())return this._returnResult({data:null,error:new Wi(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Fo({publicKey:ko(t.options),signal:e?.options?.signal??Oo.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new Wi(`WebAuthn ceremony failed`,null)});let a=jo(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){eo(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new U});let{data:r,error:i}=await W(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){eo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{data:i,error:a}=await W(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){eo(this.experimental);try{let{data:t,error:n}=await W(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){eo(this.experimental);try{let{data:t,error:n}=await W(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:K});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){eo(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new U});let{data:r,error:i}=await W(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){eo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{data:i,error:a}=await W(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){eo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{error:i}=await W(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}};Go.nextInstanceID={};var Ko=Go,qo=`2.112.1`,Jo=``,Yo;if(typeof Deno<`u`)Jo=`deno`,Yo=Deno.version?.deno;else if(typeof document<`u`)Jo=`web`;else if(typeof navigator<`u`&&navigator.product===`ReactNative`)Jo=`react-native`;else{var Xo;Jo=`node`;let e=globalThis.process;Yo=e==null||(Xo=e.version)==null?void 0:Xo.replace(/^v/,``)}var Zo=[`runtime=${Jo}`];Yo&&Zo.push(`runtime-version=${Yo}`);var Qo={headers:{"X-Client-Info":`supabase-js/${qo}; ${Zo.join(`; `)}`}},$o={schema:`public`},es={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},ts={},ns={enabled:!1,respectSamplingDecision:!0};function rs(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function is(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(as(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function as(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function os(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function ss(e){"@babel/helpers - typeof";return ss=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ss(e)}function cs(e,t){if(ss(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ss(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ls(e){var t=cs(e,`string`);return ss(t)==`symbol`?t:t+``}function us(e,t,n){return(t=ls(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ds(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ds(Object(n),!0).forEach(function(t){us(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ds(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ps=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ms=()=>Headers,hs=e=>e.startsWith(`sb_publishable_`)||e.startsWith(`sb_secret_`),gs=`sb_temp_`,_s=new Set,vs=e=>{if(!e.startsWith(`sb_`)||hs(e)||e.startsWith(gs))return;let t=e.match(/^sb_[a-zA-Z0-9]+_/)?.[0]??`unknown`;_s.has(t)||(_s.add(t),console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`))},ys=(e,t,n,r,i,a)=>{let o=ps(r),s=ms(),c=i?.enabled===!0,l=i?.respectSamplingDecision!==!1,u=c?os(t):null,d=!(a?.omitApiKeyAsBearer&&hs(e));return async(t,r)=>{let i=await n(),a=new s(r?.headers);if(a.has(`apikey`)||a.set(`apikey`,e),!a.has(`Authorization`)){let t=i??(d?e:null);t&&a.set(`Authorization`,`Bearer ${t}`)}if(u){let e=xs(t,u,l);e&&(e.traceparent&&!a.has(`traceparent`)&&a.set(`traceparent`,e.traceparent),e.tracestate&&!a.has(`tracestate`)&&a.set(`tracestate`,e.tracestate),e.baggage&&!a.has(`baggage`)&&a.set(`baggage`,e.baggage))}return o(t,fs(fs({},r),{},{headers:a}))}},bs=!1;function xs(e,t,n){let r=Lt();if(!r)return bs||(bs=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!is(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let i=r();if(!i||!i.traceparent)return null;if(n){let e=rs(i.traceparent);if(e&&!e.isSampled)return null}return i}function Ss(e){return typeof e==`boolean`?{enabled:e}:e}function Cs(e){return e.endsWith(`/`)?e:e+`/`}function ws(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=Ss(e.tracePropagation),d=Ss(t.tracePropagation),f={db:fs(fs({},o),n),auth:fs(fs({},s),r),realtime:fs(fs({},c),i),storage:{},global:fs(fs(fs({},l),a),{},{headers:fs(fs({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Ts(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(Cs(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Es=class extends Ko{constructor(e){super(e)}},Ds=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Ts(e);if(!t)throw Error(`supabaseKey is required.`);vs(t),this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:$o,realtime:ts,auth:fs(fs({},es),{},{storageKey:i}),global:Qo,tracePropagation:ns},o=ws(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=ys(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation),this.functionsFetch=ys(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(fs({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new fn(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit,retry:o.db.retry}),this.storage=new ji(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new Kt(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??null}async _getAccessToken(){var e=this;return await e._getSessionToken()??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Es({url:this.authUrl.href,headers:fs(fs({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new jr(this.realtimeUrl.href,fs(fs({},e),{},{params:fs(fs({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`||e===`INITIAL_SESSION`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Os=(e,t,n)=>new Ds(e,t,n);function ks(){if(typeof window<`u`||globalThis.Deno!==void 0)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=20:!1}ks()&&console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);var As=Os(`https://asbkmjefruvscjpyxhto.supabase.co`,`sb_publishable_kiNFNLlDfzXQhlshTlneYg_UUzzt960`);function js(e){return!e||!e.trim()?``:`sync_${e.trim().toUpperCase().replace(/[^A-Z0-9_-]/g,`_`)}`}async function Ms(e,t){let n=js(e);if(!n||!As)return!1;try{let{error:e}=await As.from(`user_sync_data`).upsert({id:n,payload:{...t,updatedAt:new Date().toISOString()},updated_at:new Date().toISOString()},{onConflict:`id`});return!e||(console.error(`Supabase Push Error:`,e),!1)}catch(e){return console.error(`Supabase Push Exception:`,e),!1}}async function Ns(e){let t=js(e);if(!t||!As)return null;try{let{data:e,error:n}=await As.from(`user_sync_data`).select(`payload, updated_at`).eq(`id`,t).maybeSingle();return n?(console.error(`Supabase Pull Error:`,n),null):e?.payload||null}catch(e){return console.error(`Supabase Pull Exception:`,e),null}}function Ps(e,t){let n=js(e);if(!n||!As)return()=>{};let r=As.channel(`public:user_sync_data:${n}`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`user_sync_data`,filter:`id=eq.${n}`},e=>{e.new&&e.new.payload&&t(e.new.payload)}).subscribe();return()=>{As.removeChannel(r)}}function Fs(){let[e,t]=(0,_.useState)(()=>Dt()),[n,r]=(0,_.useState)(`sprint`),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(()=>At()),[c,l]=(0,_.useState)(null);(0,_.useEffect)(()=>{Ot(e)},[e]),(0,_.useEffect)(()=>{e.settings&&(e.settings.theme&&document.documentElement.setAttribute(`data-theme`,e.settings.theme),e.settings.palette?document.documentElement.setAttribute(`data-palette`,e.settings.palette):document.documentElement.removeAttribute(`data-palette`))},[e.settings]),(0,_.useEffect)(()=>{kt(o)},[o]);let[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),m=(0,_.useMemo)(()=>(e.sessions||[]).reduce((e,t)=>e+(t.points||0),0),[e.sessions]),h=e.claimedVetoPoints||0,g=Math.max(0,m-h),v=u===null?g:Math.max(u,g),y=Math.floor(v/100),b=e.settings?.syncKey||`SHADOW-PAW-482`,[x,S]=(0,_.useState)(null),C=(e,t=`success`,n=3e3)=>{S({message:e,type:t}),setTimeout(()=>S(null),n)},w=(e,t)=>{let n={...e};if(t.settings){let r=e.settings?.updatedAtMs||0;((t.settings.updatedAtMs||0)>=r||!e.settings?.updatedAtMs)&&(n.settings={...e.settings,...t.settings})}if(t.claimedVetoPoints!==void 0&&t.claimedVetoPoints>(e.claimedVetoPoints||0)&&(n.claimedVetoPoints=t.claimedVetoPoints),t.sessions&&Array.isArray(t.sessions)){let r=new Set((e.sessions||[]).map(e=>e.id)),i=t.sessions.filter(e=>!r.has(e.id));i.length>0&&(n.sessions=[...e.sessions||[],...i].sort((e,t)=>new Date(e.startedAt).getTime()-new Date(t.startedAt).getTime()))}if(t.questionStates){let r={...e.questionStates||{}};Object.keys(t.questionStates).forEach(e=>{let n=t.questionStates[e],i=r[e];(!i||new Date(n.lastAttemptedAt).getTime()>new Date(i.lastAttemptedAt).getTime())&&(r[e]=n)}),n.questionStates=r}if(t.questions&&Array.isArray(t.questions)){let r=new Set((e.questions||[]).map(e=>e.id)),i=t.questions.filter(e=>!r.has(e.id));i.length>0&&(n.questions=[...e.questions||[],...i])}return n},ee=e=>{e&&(e.unclaimedVetoPoints!==void 0&&d(e.unclaimedVetoPoints),t(t=>w(t,e)))};(0,_.useEffect)(()=>{b&&(p(!0),Ns(b).then(e=>{e&&(ee(e),C(`Connected to Supabase Realtime`,`success`,2e3)),p(!1)}))},[b]),(0,_.useEffect)(()=>{if(!b)return;let e=Ps(b,e=>{ee(e),C(`Live state synced from another device!`,`success`,2500)});return()=>e()},[b]);let T=async()=>{p(!0);try{let n=await Ns(b),r=e;n&&(r=w(e,n),t(r));let i=(r.sessions||[]).reduce((e,t)=>e+(t.points||0),0),a=r.claimedVetoPoints||0,o=Math.max(0,i-a),s=o;n&&n.unclaimedVetoPoints!==void 0&&(d(n.unclaimedVetoPoints),s=Math.max(o,n.unclaimedVetoPoints)),await Ms(b,{...r,unclaimedVetoPoints:s})?C(`Supabase Sync successful!`,`success`):C(`Supabase Sync failed: check network`,`error`)}catch{C(`Supabase Sync failed`,`error`)}finally{p(!1)}},E=e=>{let n=h+e;t(e=>({...e,claimedVetoPoints:n}))},D=(0,_.useMemo)(()=>{let t=new Date().toDateString(),n=0,r=0,i=0,a=0;return(e.sessions||[]).forEach(e=>{if(e.startedAt&&new Date(e.startedAt).toDateString()===t){a+=1;let t=e.actualDurationSec===void 0?e.durationSec:e.actualDurationSec;n+=t||0,i+=e.points||0,(e.results||[]).forEach(e=>{e.status===`done`&&(r+=1)})}}),{minutesFocused:Math.round(n/60),sprintsCount:a,questionsSolved:r,pointsEarned:i}},[e.sessions]);return(0,L.jsxs)(`div`,{className:`app-container`,children:[x&&(0,L.jsxs)(`div`,{className:`global-toast-banner toast-${x.type}`,children:[x.type===`error`?(0,L.jsx)(N,{size:16}):(0,L.jsx)(P,{size:16}),(0,L.jsx)(`span`,{children:x.message})]}),(0,L.jsx)(qe,{activeTab:n,onSelectTab:r,todayFocusMinutes:D.minutesFocused,vetoMinutes:y,vetoEnabled:!!e.settings?.vetoEnabled,onOpenVetoModal:()=>a(!0),settings:e.settings,onToggleTheme:()=>{let n=e.settings.theme===`light`?`dark-ember`:`light`;document.documentElement.setAttribute(`data-theme`,n),t(e=>({...e,settings:{...e.settings,theme:n,updatedAtMs:Date.now()}}))},isSyncing:f,onSyncCloud:T,hasActiveSprint:!!o}),(0,L.jsx)(Ft,{isOpen:i,onClose:()=>a(!1),unclaimedPoints:v,onClaimPoints:E,onSyncCloud:T}),(0,L.jsxs)(`main`,{className:`app-main-content`,children:[n===`sprint`&&(o?(0,L.jsx)(bt,{activeSprintState:o,settings:e.settings,allQuestions:e.questions,questionStates:e.questionStates,onUpdateActiveSprintState:e=>{s(e)},onFinishSprint:n=>{let r=(n.results||[]).map(t=>t.status===`done`&&!t.confidence?{...t,confidence:$e(t,e.settings)}:t),i={id:`sess_`+Date.now(),...n,results:r},a={...e.questionStates};r.forEach(e=>{a[e.questionId]={lastAttemptedAt:new Date().toISOString(),status:e.status,confidence:e.confidence||a[e.questionId]?.confidence||null}}),t(e=>({...e,questionStates:a,sessions:[...e.sessions,i]})),s(null),l(i)}}):c?(0,L.jsx)(et,{session:c,settings:e.settings,onStartNewSprint:()=>{l(null),s(null),r(`sprint`)},onGoHome:()=>l(null),onUpdateSessionConfidence:(e,n,r)=>{t(t=>{let i=t.sessions.map(i=>{if(i.id===e||!e&&i.id===t.sessions[t.sessions.length-1]?.id){let e=(i.results||[]).map(e=>e.questionId===n?{...e,confidence:r}:e);return{...i,results:e}}return i}),a={...t.questionStates,[n]:{...t.questionStates[n]||{},confidence:r}};return{...t,questionStates:a,sessions:i}}),l(e=>{if(!e)return e;let t=(e.results||[]).map(e=>e.questionId===n?{...e,confidence:r}:e);return{...e,results:t}})}}):(0,L.jsx)(pt,{questions:e.questions,settings:e.settings,onStartSprint:t=>{let n=gt(t.matchingQuestions,t.quota,e.questionStates,t.seed),r={sessionData:{...t,queue:n,startedAtMs:Date.now(),totalPausedMs:0,isPaused:!1,pauseStartedAtMs:null},currentIndex:0,attempts:0,results:[],questionStartTime:Date.now(),preCountdownDone:!1};l(null),s(r)}})),n===`bank`&&(0,L.jsx)(ut,{questions:e.questions,questionStates:e.questionStates,sessions:e.sessions,onUpdateQuestions:e=>t(t=>({...t,questions:e})),onUpdateQuestionStates:e=>t(t=>({...t,questionStates:e})),onResetToDefault:()=>t(e=>({...e,questions:DEFAULT_QUESTIONS}))}),n===`analytics`&&(0,L.jsx)(xt,{sessions:e.sessions,questionStates:e.questionStates,questions:e.questions,todayStats:D,settings:e.settings}),n===`settings`&&(0,L.jsx)(Pt,{settings:e.settings,questions:e.questions,sessions:e.sessions,onSaveSettings:e=>{t(t=>({...t,settings:{...e,updatedAtMs:Date.now()}}))},onImportJSON:e=>{Array.isArray(e)?t(t=>({...t,questions:e})):e&&e.questions&&t(t=>({...t,questions:e.questions,settings:e.settings||t.settings}))},onImportCSV:e=>{t(t=>({...t,questions:e}))},onResetData:()=>{window.confirm(`Are you sure you want to reset all data to defaults? This action cannot be undone.`)&&(localStorage.clear(),t(Dt()),s(null),l(null))},onForceUpload:async()=>{p(!0);let t=(e.sessions||[]).reduce((e,t)=>e+(t.points||0),0),n=e.claimedVetoPoints||0,r=Math.max(0,t-n),i=u===null?r:Math.max(u,r);await pushSyncData(b,{...e,unclaimedVetoPoints:i}),p(!1),alert(`State successfully forced to cloud!`)}})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,L.jsx)(_.StrictMode,{children:(0,L.jsx)(Fs,{})}));