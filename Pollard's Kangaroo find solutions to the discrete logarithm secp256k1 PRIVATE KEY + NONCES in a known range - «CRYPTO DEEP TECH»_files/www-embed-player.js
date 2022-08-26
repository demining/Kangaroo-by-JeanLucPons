(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ma});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function r(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function va(){this.C=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function wa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
va.prototype.N=function(a){this.j=a};
function xa(a,b){a.l={Sb:b,Zb:!0};a.i=a.s||a.o}
va.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.Sb;a.l=null;return b}
function Ba(a){a.v=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Zb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new va;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Zb)throw b.Sb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.N):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.s(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.G()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(A){try{m(x(A))}catch(E){q(E)}}:u}
var m,q,t=new b(function(x,u){m=x;q=u});
this.Ua(k(g,m),k(h,q));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function t(A){return function(E){x[A]=E;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ua(t(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var t=q[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:q,index:h,entry:t}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Object.setPrototypeOf",function(a){return a||ua});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.tb=void 0;a.getInstance=function(){return a.tb?a.tb:a.tb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Ua:Xa=Va;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.l=b===Pb?a:""}
Ob.prototype.toString=function(){return this.l.toString()};
Ob.prototype.j=!0;Ob.prototype.i=function(){return this.l.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.l;Oa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function ec(a){this.l=bc===bc?a:"";this.j=!0}
ec.prototype.i=function(){return this.l.toString()};
ec.prototype.toString=function(){return this.l.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.j?b.i():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var yc=/#|$/,Cc=/[?&]($|#)/;function Dc(a,b){for(var c=a.search(yc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Cc,"$1")}
;var Ec={};function Fc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Gc(){var a=Tb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Fc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};
function Ic(a){var b=Jc;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Kc=C("Opera"),Lc=Ub(),Mc=C("Edge"),Nc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Oc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Pc=C("Android");function Qc(){var a=y.document;return a?a.documentMode:void 0}
var Rc;a:{var Sc="",Tc=function(){var a=Tb();if(Nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mc)return/Edge\/([\d\.]+)/.exec(a);if(Lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oc)return/WebKit\/(\S+)/.exec(a);if(Kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tc&&(Sc=Tc?Tc[1]:"");if(Lc){var Uc=Qc();if(null!=Uc&&Uc>parseFloat(Sc)){Rc=String(Uc);break a}}Rc=Sc}var Vc=Rc,Jc={};
function Wc(){return Ic(function(){for(var a=0,b=Mb(String(Vc)).split("."),c=Mb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Xc;if(y.document&&Lc){var Yc=Qc();Xc=Yc?Yc:parseInt(Vc,10)||void 0}else Xc=void 0;var Zc=Xc;var $c=Fc()||C("iPod"),ad=C("iPad");Yb();Xb();var bd=Wb()&&!(Fc()||C("iPad")||C("iPod"));var cd={},dd=null;
function ed(a,b){Pa(a);void 0===b&&(b=0);if(!dd){dd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));cd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===dd[h]&&(dd[h]=g)}}}b=cd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var fd="undefined"!==typeof Uint8Array,gd={};var hd;function id(){if(gd!==gd)throw Error("illegal external caller");}
function jd(a){id();this.ka=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
jd.prototype.isEmpty=function(){return null==this.ka};var kd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ld(a,b){Object.isFrozen(a)||(kd?a[kd]|=b:void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function md(a,b){Object.isExtensible(a)&&(kd?a[kd]&&(a[kd]&=~b):void 0!==a.ga&&(a.ga&=~b))}
function nd(a){var b;kd?b=a[kd]:b=a.ga;return null==b?0:b}
function od(a,b){kd?a[kd]=b:void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function pd(a){ld(a,1);return a}
function qd(a){return a?!!(nd(a)&2):!1}
function rd(a){ld(a,16);return a}
function sd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");md(a,16)}
function td(a,b){b?ld(a,8):md(a,8)}
function ud(a,b){od(b,(nd(a)|0)&-51)}
;var vd={};function Ad(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Bd,Cd=Object.freeze(pd([]));function Dd(a){if(qd(a.A))throw Error("Cannot mutate an immutable Message");}
var Ed="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Fd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Gd(a){return a.displayName||a.name||"unknown type name"}
function Hd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Gd(b)+" but got "+(a&&Gd(a.constructor)));return a}
function Id(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?!1:d;if(Array.isArray(a))return new b(d?rd(a):a);if(c)return new b}
;function Jd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(fd&&null!=a&&a instanceof Uint8Array)return ed(a);if(a instanceof jd){var b=a.ka;null!=b&&"string"!==typeof b&&(fd&&b instanceof Uint8Array?b=ed(b):(Oa(b),b=null));return null==b?"":a.ka=b}}}return a}
;function Kd(a,b,c){if(null!=a){if(Array.isArray(a))a=Ld(a,b,c);else if(Ad(a)){var d={},e;for(e in a)d[e]=Kd(a[e],b,c);a=d}else a=b(a);return a}}
function Ld(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Kd(d[a],b,c);return d}
function Md(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Jd(a);return Array.isArray(a)?Ld(a,Md,Nd):a}
function Od(a){if(a&&"object"===typeof a){if(fd&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(a.Tc===vd)return a.clone()}return a}
function Nd(){}
;function Pd(a){return a.j||(a.j=a.A[a.m+a.l]={})}
function Qd(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.A[b+a.l]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Dd(a);a.Yb&&(a.Yb=void 0);if(b>=a.m||d)return Pd(a)[b]=c,a;void 0!==a.j&&a.m>=a.A.length?(d=a.A.length-1,e=b+a.l,e>=d?(a.A[d]=void 0,a.A[e]=c,a.A.push(a.j)):a.A[e]=c):a.A[b+a.l]=c;void 0!==a.j&&b in a.j&&delete a.j[b];return a}
function Rd(a,b,c,d){var e=Qd(a,b,d);Array.isArray(e)?e&&nd(e)&1||pd(e):e=Cd;if(qd(a.A))c&1||(ld(e,2),Object.freeze(e));else if(e===Cd||qd(e))e=pd(Array.prototype.slice.call(e)),D(a,b,e,d);return e}
function Sd(a,b,c){a=Qd(a,b);return null==a?c:a}
function Td(a,b,c){null==c?c=Cd:pd(c);return D(a,b,c)}
function Ud(a,b,c,d){Dd(a);(c=Vd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),D(a,c));return D(a,b,d)}
function Vd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Qd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Wd(a,b,c,d){d=void 0===d?!1:d;var e=d;a.i||(a.i={});var f=a.i[c];if(f)b=f;else if(b=Id(Qd(a,c,e),b))a.i[c]=b,ld(b.A,nd(a.A)&-33);if(null==b)return b;qd(b.A)&&!qd(a.A)&&(b=b.Ba(Ec),D(a,c,b.A,d),a.i[c]=b);return b}
function Xd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c];d=Rd(a,c,2,d);var g=!!(nd(a.A)&16),h=qd(d);h=qd(a.A)||h;if(!f){f=[];for(var k=h,m=0;m<d.length;m++){var q=d[m];k=k||qd(q);q=Id(q,b,!1,g);void 0!==q&&(f.push(q),h&&ld(q.A,2))}a.i[c]=f;td(d,!k)}b=h||e;e=qd(f);b&&!e&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),ld(f,2),Object.freeze(f));!b&&e&&(a.i[c]=f=f.slice());return f}
function Yd(a,b,c,d){d=void 0===d?!1:d;var e=qd(a.A);b=Xd(a,b,c,d,e);a=Rd(a,c,0,void 0===d?!1:d);if(!(c=e)&&(c=a)){if(!a)throw Error("cannot check mutability state of non-array");c=!(nd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&qd(d.A)&&!e&&(b[c]=b[c].Ba(Ec),a[c]=b[c].A);td(a,!0)}return b}
function G(a,b,c,d){Dd(a);a.i||(a.i={});null==d?b=d=void 0:b=Hd(d,b).A;a.i[c]=d;return D(a,c,b)}
function Zd(a,b,c,d,e){Dd(a);a.i||(a.i={});null!=e?b=Hd(e,b).A:b=e=void 0;a.i[c]=e;Ud(a,c,d,b)}
function $d(a,b,c,d){Dd(a);if(null!=d){var e=pd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Hd(d[g],b).A,f=f||qd(e[g]);a.i||(a.i={});a.i[c]=d;td(e,!f)}else a.i&&(a.i[c]=void 0),e=Cd;return D(a,c,e)}
function ae(a,b,c,d){Dd(a);var e=Xd(a,c,b,void 0,!1);c=null!=d?Hd(d,c):new c;a=Rd(a,b,2);e.push(c);a.push(c.A);qd(c.A)&&td(a,!1)}
;function be(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?pd(a.slice()):a,$d(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(fd&&d instanceof Uint8Array?e=d.length?new jd(new Uint8Array(d)):hd||(hd=new jd(null)):(Array.isArray(d)&&(e?ld(d,2):d&&nd(d)&1&&f.kb?(e=Array.prototype.slice.call(d),od(e,(nd(d)|0)&-51),d=e):sd(d)),e=d),D(b,c,e))}
;function ce(a,b,c){a||(a=de);de=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a?nd(a)&16&&ld(a,32):(a=f?[f]:[],ld(a,48));e&&0<a.length&&Ad(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.l=(f?0:-1)-d;this.i=void 0;this.A=a;a:{f=this.A.length;d=f-1;if(f&&(f=this.A[d],Ad(f))){this.j=f;b=Object.keys(f);0<b.length&&jb(b,isNaN)?this.m=Number.MAX_VALUE:this.m=d-this.l;break a}void 0!==b&&-1<b?(this.m=Math.max(b,d+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.m?(b+=this.l,(d=this.A[b])?Array.isArray(d)&&pd(d):this.A[b]=Cd):(d=Pd(this),(f=d[b])?Array.isArray(f)&&pd(f):d[b]=Cd)}
l=ce.prototype;l.toJSON=function(){var a=this.A;return Bd?a:Ld(a,Md,Nd)};
function ee(a){Bd=!0;try{return JSON.stringify(a.toJSON(),fe)}finally{Bd=!1}}
l.clone=function(){var a=Ld(this.A,Od,ud);rd(a);de=a;a=new this.constructor(a);de=null;ge(a,this);return a};
l.isMutable=function(){return!qd(this.A)};
l.Ba=function(){if(qd(this.A)){var a={kb:!0};var b=qd(this.A);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");b||sd(this.A);var c=new this.constructor;this.Ha&&(c.Ha=this.Ha.slice());for(var d=this.A,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Ad(f))for(var g in f){var h=+g;Number.isNaN(h)?Pd(c)[g]=f[g]:be(this,c,h,f[g],b,a)}else be(this,c,e-this.l,f,b,a)}c.Yb=this;a=c}else a=this;return a};
l.Tc=vd;l.toString=function(){return this.A.toString()};
function fe(a,b){return Jd(b)}
function ge(a,b){b.Ha&&(a.Ha=b.Ha.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Yd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ge(f[g],e[g])}else(f=Wd(a,e.constructor,g,f))&&ge(f,e)}}}}
var de;function he(){ce.apply(this,arguments)}
r(he,ce);he.prototype.Ba=function(a){return ce.prototype.Ba.call(this,a)};
if(Ed){var ie={};Object.defineProperties(he,(ie[Symbol.hasInstance]=Fd(function(){throw Error(void 0);}),ie))};function je(a){var b=this.i,c=this.j;return this.isRepeated?Yd(a,b,c,!0):Wd(a,b,c,!0)}
;function I(){he.apply(this,arguments)}
r(I,he);I.prototype.Ba=function(a){return he.prototype.Ba.call(this,a)};
if(Ed){var ke={};Object.defineProperties(I,(ke[Symbol.hasInstance]=Fd(Object[Symbol.hasInstance]),ke))};function le(a){this.Mb=a}
;function me(a,b,c){this.j=a;this.m=b;this.i=c||[];this.xa=new Map}
l=me.prototype;l.yc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new le(a)):this.mc(a,b)};
l.mc=function(a){this.xa.set(this.Tb(Ja.apply(1,arguments)),[new le(a)])};
l.nb=function(){var a=this.Tb(Ja.apply(0,arguments));return this.xa.has(a)?this.xa.get(a):void 0};
l.Lc=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.xa.clear()};
l.Tb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ne(a,b){me.call(this,a,3,b)}
r(ne,me);ne.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Lc(b);d&&(c=d.Mb);this.mc(c+a,b)};function oe(a,b){me.call(this,a,2,b)}
r(oe,me);oe.prototype.l=function(a){this.yc(a,Ja.apply(1,arguments))};function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.N=this.N;this.C=this.C}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function re(a,b){se(a,Ya(pe,b))}
function se(a,b){a.N?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
te.prototype.stopPropagation=function(){this.l=!0};
te.prototype.preventDefault=function(){this.defaultPrevented=!0};function ue(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,we[c])c=we[c];else{c=String(c);if(!we[c]){var f=/function\s+([^\(]+)/m.exec(c);we[c]=f?f[1]:"[Anonymous]"}c=we[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ve(a,b){b||(b={});b[xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ve(a,b));return c}
function xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var we={};var ye=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ee(a,b){te.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(Ee,te);var Fe={2:"touch",3:"pen",4:"mouse"};
Ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Nc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Fe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&Ee.Y.preventDefault.call(this)};
Ee.prototype.stopPropagation=function(){Ee.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
Ee.prototype.preventDefault=function(){Ee.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(1E6*Math.random()|0);var He=0;function Ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++He;this.Ja=this.Ta=!1}
function Je(a){a.Ja=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function Ke(a){this.src=a;this.listeners={};this.i=0}
Ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Le(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Ie(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
Ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Le(e,b,c,d);return-1<b?(Je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Me(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ja&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ne="closure_lm_"+(1E6*Math.random()|0),Oe={},Pe=0;function Qe(a,b,c,d,e){if(d&&d.once)Re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!1,d,e)}
function Te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ue(a);h||(a[Ne]=h=new Ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(We(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pe++}}
function Ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xe;return a}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!0,d,e)}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Se(c),a&&a[Ge])?a.m.remove(String(b),c,d,e):a&&(a=Ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ze(c))}
function Ze(a){if("number"!==typeof a&&a&&!a.Ja){var b=a.src;if(b&&b[Ge])Me(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(We(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pe--;(c=Ue(b))?(Me(c,a),0==c.i&&(c.src=null,b[Ne]=null)):Je(a)}}}
function We(a){return a in Oe?Oe[a]:Oe[a]="on"+a}
function Xe(a,b){if(a.Ja)a=!0;else{b=new Ee(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Ze(a);a=c.call(d,b)}return a}
function Ue(a){a=a[Ne];return a instanceof Ke?a:null}
var $e="__closure_events_fn_"+(1E9*Math.random()>>>0);function Se(a){if("function"===typeof a)return a;a[$e]||(a[$e]=function(b){return a.handleEvent(b)});
return a[$e]}
;function af(){J.call(this);this.m=new Ke(this);this.vc=this;this.la=null}
Za(af,J);af.prototype[Ge]=!0;af.prototype.addEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
af.prototype.removeEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
function bf(a,b){var c=a.la;if(c){var d=[];for(var e=1;c;c=c.la)d.push(c),++e}a=a.vc;c=b.type||b;"string"===typeof b?b=new te(b,a):b instanceof te?b.target=b.target||a:(e=b,b=new te(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=cf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=cf(g,c,!0,b)&&e,b.l||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=cf(g,c,!1,b)&&e}
af.prototype.D=function(){af.Y.D.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Je(d[e]);delete a.listeners[c];a.i--}}this.la=null};
af.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function cf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ja&&g.capture==c){var h=g.listener,k=g.Ya||g.src;g.Ta&&Me(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ff(a,b){return a+Math.random()*(b-a)}
;function gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=gf.prototype;l.clone=function(){return new gf(this.x,this.y)};
l.equals=function(a){return a instanceof gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function hf(a,b){this.width=a;this.height=b}
l=hf.prototype;l.clone=function(){return new hf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var mf;function nf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Lb;c.Lb=null;e()}};
return function(e){d.next={Lb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function of(a){y.setTimeout(function(){throw a;},0)}
;function pf(){this.j=this.i=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
pf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var qf=new df(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.i=null}
rf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.i=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(mf||(mf=nf()),mf(b)):y.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.i.call(a.scope)}catch(b){of(b)}ef(qf,a)}tf=!1}
;function yf(a){this.i=0;this.C=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){zf(b,2,c)},function(c){zf(b,3,c)})}catch(c){zf(this,3,c)}}
function Af(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Af.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Bf=new df(function(){return new Af},function(a){a.reset()});
function Cf(a,b,c){var d=Bf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Df(a){return new yf(function(b,c){c(a)})}
yf.prototype.then=function(a,b,c){return Ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
yf.prototype.$goog_Thenable=!0;l=yf.prototype;l.gb=function(a,b){return Ef(this,null,a,b)};
l.catch=yf.prototype.gb;l.cancel=function(a){if(0==this.i){var b=new Ff(a);vf(function(){Gf(this,b)},this)}};
function Gf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Gf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Hf(c),If(c,e,3,b)))}a.l=null}else zf(a,3,b)}
function Jf(a,b){a.j||2!=a.i&&3!=a.i||Kf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Ef(a,b,c,d){var e=Cf(null,null,null);e.i=new yf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ff?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Jf(a,e);return e.i}
l.ud=function(a){this.i=0;zf(this,2,a)};
l.vd=function(a){this.i=0;zf(this,3,a)};
function zf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.ud,f=a.vd;if(d instanceof yf){Jf(d,Cf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Lf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Kf(a),3!=b||c instanceof Ff||Mf(a,c))}}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kf(a){a.s||(a.s=!0,vf(a.Jc,a))}
function Hf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Jc=function(){for(var a;a=Hf(this);)If(this,a,this.i,this.C);this.s=!1};
function If(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Nf(b,c,d);else try{b.l?b.j.call(b.context):Nf(b,c,d)}catch(e){Of.call(null,e)}ef(Bf,b)}
function Nf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Mf(a,b){a.o=!0;vf(function(){a.o&&Of.call(null,b)})}
var Of=of;function Ff(a){ab.call(this,a)}
Za(Ff,ab);Ff.prototype.name="cancel";function Pf(a,b){af.call(this);this.l=a||1;this.j=b||y;this.o=Xa(this.sd,this);this.s=Date.now()}
Za(Pf,af);l=Pf.prototype;l.enabled=!1;l.ca=null;function Qf(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.sd=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.D=function(){Pf.Y.D.call(this);this.stop();delete this.j};
function Rf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Sf(a){this.C=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Pf(this.flushInterval);this.j.aa("tick",this.ib,!1,this);this.o=!1}
l=Sf.prototype;l.kc=function(a){this.o=a;this.m=1};
function Tf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.ib()}
l.ib=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.xa.size});
a.length&&this.C.flush(a,this.o);Uf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.zc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ne(a,b))};
l.Jb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new oe(a,b))};
function Vf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Db=function(a){this.tc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.tc=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof ne&&(d.l(b,c),Tf(this))};
l.hb=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof oe&&(d.l(b,c),Tf(this))};
function Uf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Wf(a){this.i=a;this.i.Jb("/client_streamz/bg/fil",{mb:3,lb:"rk"})}
function Xf(a){this.i=a;this.i.zc("/client_streamz/bg/fsc",{mb:3,lb:"rk"})}
function Yf(a){this.i=a;this.i.Jb("/client_streamz/bg/fsl",{mb:3,lb:"rk"})}
;function Zf(a){I.call(this,a,-1,$f)}
r(Zf,I);function ag(a){I.call(this,a,-1,bg)}
r(ag,I);function cg(a){I.call(this,a)}
r(cg,I);function dg(a){I.call(this,a)}
r(dg,I);var $f=[3,6,4],bg=[1],eg=[1,2,3],fg=[1,2,3];function gg(a){I.call(this,a,-1,hg)}
r(gg,I);var hg=[1];function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(t){for(var x=g,u=0;64>u;u+=4)x[u/4]=t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3];for(u=16;80>u;u++)t=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(t<<1|t>>>31)&4294967295;t=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=F^A&(E^F);var R=1518500249}else N=A^E^F,R=1859775393;else 60>u?(N=A&E|F&(A|E),R=2400959708):(N=A^E^F,R=3395469782);N=((t<<5|t>>>27)&4294967295)+N+O+R+x[u]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=t;t=N}e[0]=e[0]+t&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(t,x){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var u=[],A=0,E=t.length;A<E;++A)u.push(t.charCodeAt(A));t=u}x||(x=t.length);u=0;if(0==m)for(;u+64<x;)b(t.slice(u,u+64)),u+=64,q+=64;for(;u<x;)if(f[m++]=t[u++],q++,64==m)for(m=0,b(f);u+64<x;)b(t.slice(u,u+64)),u+=64,q+=64}
function d(){var t=[],x=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var A=24;0<=A;A-=8)t[x++]=e[u]>>A&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Fc:function(){for(var t=d(),x="",u=0;u<t.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(t[u]/16))+"0123456789ABCDEF".charAt(t[u]%16);return x}}}
;function kg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Fc().toLowerCase()}
;var ng={};function og(a){this.i=a||{cookie:""}}
l=og.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.br;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ab}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ab:0,path:b,domain:c});return d};
l.qb=function(){return pg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=pg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function pg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var qg=new og("undefined"==typeof document?null:document);function rg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function sg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;rg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");rg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function tg(a,b,c,d){(a=y[a])||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function ug(a,b){b=void 0===b?!1:b;var c=ig(String(y.location.href)),d=[];if(sg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&rg(b)&&((b=tg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=tg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function vg(a){I.call(this,a,-1,wg)}
r(vg,I);var wg=[2];function xg(a){this.i=this.j=this.l=a}
xg.prototype.reset=function(){this.i=this.j=this.l};
xg.prototype.getValue=function(){return this.j};function yg(a){var b=[];zg(new Ag,a,b);return b.join("")}
function Ag(){}
function zg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bg(d,c),c.push(":"),zg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Dg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bg(a,b){b.push('"',a.replace(Dg,function(c){var d=Cg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Cg[c]=d);return d}),'"')}
;function Eg(){}
Eg.prototype.i=null;Eg.prototype.getOptions=function(){var a;(a=this.i)||(a={},Fg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Gg;function Hg(){}
Za(Hg,Eg);function Ig(a){return(a=Fg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Fg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
Gg=new Hg;function Jg(a){af.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.J=this.B=null;this.o=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.G=null;this.da="";this.W=this.X=!1}
Za(Jg,af);var Kg=/^https?$/i,Lg=["POST","PUT"],Mg=[];function Ng(a,b,c,d,e,f,g){var h=new Jg;Mg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.Dc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Jg.prototype;l.Dc=function(){this.dispose();lb(Mg,this)};
l.send=function(a,b,c,d){if(this.B)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.B=this.K?Ig(this.K):Ig(Gg);this.J=this.K?this.K.getOptions():Gg.getOptions();this.B.onreadystatechange=Xa(this.cc,this);try{this.getStatus(),this.R=!0,this.B.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Og(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Lg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.B.setRequestHeader(d,c);this.da&&(this.B.responseType=this.da);"withCredentials"in this.B&&this.B.withCredentials!==this.X&&(this.B.withCredentials=this.X);try{Pg(this),0<this.s&&(this.W=Qg(this.B),this.getStatus(),this.W?(this.B.timeout=this.s,this.B.ontimeout=Xa(this.oc,this)):
this.G=Rf(this.oc,this.s,this)),this.getStatus(),this.v=!0,this.B.send(a),this.v=!1}catch(g){this.getStatus(),Og(this,g)}};
function Qg(a){return Lc&&Wc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.oc=function(){"undefined"!=typeof Ma&&this.B&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Og(a,b){a.j=!1;a.B&&(a.l=!0,a.B.abort(),a.l=!1);a.o=b;Tg(a);Ug(a)}
function Tg(a){a.P||(a.P=!0,bf(a,"complete"),bf(a,"error"))}
l.abort=function(){this.B&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.B.abort(),this.l=!1,bf(this,"complete"),bf(this,"abort"),Ug(this))};
l.D=function(){this.B&&(this.j&&(this.j=!1,this.l=!0,this.B.abort(),this.l=!1),Ug(this,!0));Jg.Y.D.call(this)};
l.cc=function(){this.i()||(this.R||this.v||this.l?Vg(this):this.Vc())};
l.Vc=function(){Vg(this)};
function Vg(a){if(a.j&&"undefined"!=typeof Ma)if(a.J[1]&&4==Wg(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Wg(a))Rf(a.cc,0,a);else if(bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Xg(a))bf(a,"complete"),bf(a,"success");else{try{var b=2<Wg(a)?a.B.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Tg(a)}}finally{Ug(a)}}}
function Ug(a,b){if(a.B){Pg(a);var c=a.B,d=a.J[0]?function(){}:null;
a.B=null;a.J=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Pg(a){a.B&&a.W&&(a.B.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
l.isActive=function(){return!!this.B};
l.isComplete=function(){return 4==Wg(this)};
function Xg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Kg.test(a?a.toLowerCase():"");c=b}return c}
function Wg(a){return a.B?a.B.readyState:0}
l.getStatus=function(){try{return 2<Wg(this)?this.B.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Yg(a){I.call(this,a)}
r(Yg,I);function Zg(a){I.call(this,a,-1,$g)}
r(Zg,I);var $g=[1];var ah=["platform","platformVersion","architecture","model","uaFullVersion"];new Zg;function bh(a){I.call(this,a)}
r(bh,I);function ch(a){I.call(this,a,31,dh)}
r(ch,I);var dh=[3,20,27];function eh(a){I.call(this,a,17,fh)}
r(eh,I);var fh=[3,5];function gh(a){I.call(this,a,6,hh)}
r(gh,I);var hh=[5];function ih(a){I.call(this,a)}
r(ih,I);var jh;jh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=je}(175237375,{Pq:0},ih);function kh(a,b,c,d,e,f,g,h,k,m,q){af.call(this);var t=this;this.P="";this.l=[];this.Hb="";this.Ib=this.ra=-1;this.Qa=!1;this.J=this.o=null;this.G=0;this.wc=1;this.timeoutMillis=0;this.da=!1;af.call(this);this.Gb=b||function(){};
this.v=new lh(a,f);this.uc=d;this.Pa=q;this.xc=Ya(ff,0,1);this.T=e||null;this.K=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ea=f||!1;!this.Ea&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Fc()||C("iPad")||C("iPod"))&&Gc());a=D(new bh,1,1);mh(this.v,a);this.s=new xg(1E4);this.j=new Pf(this.s.getValue());re(this,this.j);m=nh(this,m);Qe(this.j,"tick",m,!1,this);this.R=new Pf(6E5);re(this,this.R);Qe(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Ea||(Qe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&t.X()}),Qe(document,"pagehide",this.X,!1,this))}
r(kh,af);function nh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
kh.prototype.D=function(){this.X();af.prototype.D.call(this)};
function oh(a){a.T||(a.T=.01>a.xc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function ph(a,b){a.s=new xg(1>b?1:b);Qf(a.j,a.s.getValue())}
kh.prototype.log=function(a){a=a.clone();var b=this.wc++;D(a,21,b);this.P&&D(a,26,this.P);if(!Qd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Qd(a,15)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,vg,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.G;this.l.push(a);bf(this,new qh(a));this.W||this.j.enabled||this.j.start()};
kh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)rh(this);else{var d=Date.now();if(this.Ib>d&&this.ra<d)b&&b("throttled");else{var e=sh(this.v,this.l,this.G);d={};var f=this.Gb();f&&(d.Authorization=f);var g=oh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Hb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.G=0;var h=ee(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,Bc:1,zb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();Qf(c.j,c.s.getValue());if(u){var A=null;try{var E=JSON.parse(u.replace(")]}'\n",""));A=new gh(E)}catch(F){}A&&(u=Number(Sd(A,1,"-1")),0<u&&(c.ra=Date.now(),c.Ib=c.ra+u),A=jh.l(A))&&(A=Sd(A,1,-1),-1!=A&&(c.Qa||ph(c,A)))}a&&a()},t=function(u,A){var E=Yd(e,ch,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Qf(c.j,c.s.getValue());401===u&&f&&(c.Hb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=E.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},x=function(){c.Pa?c.Pa.send(m,q,t):c.uc(m,q,t)};
k?k.then(function(u){m.zb["Content-Encoding"]="gzip";m.zb["Content-Type"]="application/binary";m.body=u;m.Bc=2;x()},function(){x()}):x()}}}};
kh.prototype.X=function(){this.flush()};
function rh(a){th(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,ee(c));a.da&&!b&&(a.da=!1);return b})}
function th(a,b){if(0!==a.l.length){var c=Dc(oh(a),"format");c=uc(c,"auth",a.Gb(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=sh(a.v,e,a.G);if(!b(c,f))break;a.G=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function qh(){te.call(this,"event-logged",void 0)}
r(qh,te);function lh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new eh;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));mh(this,new bh)}
function mh(a,b){G(a.i,bh,1,b);Qd(b,1)||D(b,1,1);a.j||(b=uh(a),Qd(b,5)||D(b,5,a.locale));a.uach&&(b=uh(a),Wd(b,Zg,9)||G(b,Zg,9,a.uach))}
function vh(a,b){var c=void 0===c?ah:c;b(window,c).then(function(d){a.uach=d;d=uh(a);G(d,Zg,9,a.uach);return!0}).catch(function(){return!1})}
function uh(a){a=Wd(a.i,bh,1);var b=Wd(a,Yg,11);b||(b=new Yg,G(a,Yg,11,b));return b}
function sh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=$d(a,ch,3,b);c&&D(b,14,c);return b}
;function wh(a,b,c){Ng(a.url,function(d){d=d.target;if(Xg(d)){try{var e=d.B?d.B.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.zb,a.timeoutMillis,a.withCredentials)}
;function xh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=wh;this.i=""}
;function yh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new xh;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new kh(1828,d.J?d.J:ug,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.C?d.C:void 0);d.v&&mh(a.v,d.v);d.j&&(b=d.j,c=uh(a.v),D(c,7,b));d.o&&(a.J=d.o);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.o||(a.o=new vg),b=ee(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));d.K&&(b=d.K,a.o||(a.o=new vg),Td(a.o,2,b));d.G&&(b=d.G,a.Qa=!0,ph(a,b));d.P&&vh(a.v,d.P);this.i=a}
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Zf;g=D(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].lb);g=Td(g,3,k);h=[];k=[];m=p(f.xa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var t=f.m;for(var x=f.nb(q)||[],u=[],A=0;A<x.length;A++){var E=x[A];E=E&&E.Mb;var F=new dg;switch(t){case 3:Ud(F,1,fg,Number(E));break;case 2:Ud(F,2,fg,Number(E))}u.push(F)}t=
u;for(x=0;x<t.length;x++){u=t[x];A=new ag;u=G(A,dg,2,u);A=q;E=[];F=f;for(var O=[],N=0;N<F.i.length;N++)O.push(F.i[N].mb);F=O;for(O=0;O<F.length;O++){N=F[O];var R=A[O],ca=new cg;switch(N){case 3:Ud(ca,1,eg,String(R));break;case 2:Ud(ca,2,eg,Number(R));break;case 1:Ud(ca,3,eg,"true"==R)}E.push(ca)}$d(u,cg,1,E);h.push(u)}}$d(g,ag,4,h);c.push(g);e.clear()}$d(a,Zf,1,c);b=this.i;a instanceof ch?b.log(a):(c=new ch,a=ee(a),a=D(c,8,a),b.log(a));this.i.flush()}};function zh(){this.o=Ah();this.s=new yh;this.i=new Sf(this.s);this.m=new Wf(this.i);this.j=new Xf(this.i);this.l=new Yf(this.i);this.Aa=window.document.location.hostname}
function Ah(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Bh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ch(a){var b=this;this.Wa=!1;if(a.Yq){var c;this.sa=null!=(c=a.sa)?c:new zh}c=a.program;a=a.globalName;var d=new Bh;this.j=d.promise;this.qd=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.sa)){var h=Ah()-g.o;g.m.i.hb("/client_streamz/bg/fil",h,g.Aa)}d.resolve({Ac:e,nd:f})})},!0)).next().value;
this.md=d.promise.then(function(){})}
Ch.prototype.snapshot=function(a){var b=this;if(this.Wa)throw Error("Already disposed");var c=Ah(),d;null!=(d=this.sa)&&d.j.i.Db("/client_streamz/bg/fsc",d.Aa);return this.j.then(function(e){var f=e.Ac;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.sa)){var m=Ah()-c;k.l.i.hb("/client_streamz/bg/fsl",m,k.Aa)}g(h)},[a.Ob,
a.od])})})};
Ch.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.i.ib();this.Wa=!0;this.j.then(function(b){(b=b.nd)&&b()})};
Ch.prototype.i=function(){return this.Wa};var Dh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Eh;try{new URL("s://g"),Eh=!0}catch(a){Eh=!1}var Fh=Eh;function Gh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hh(a){var b=Ih;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jh(){var a=[];Hh(function(b){a.push(b)});
return a}
var Ih={Jd:"allow-forms",Kd:"allow-modals",Ld:"allow-orientation-lock",Md:"allow-pointer-lock",Nd:"allow-popups",Od:"allow-popups-to-escape-sandbox",Pd:"allow-presentation",Qd:"allow-same-origin",Rd:"allow-scripts",Sd:"allow-top-navigation",Td:"allow-top-navigation-by-user-activation"},Kh=db(function(){return Jh()});
function Lh(){var a=Mh(),b={};fb(Kh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Mh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Nh(a){this.isValid=a}
function Oh(a){return new Nh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ph=[Oh("data"),Oh("http"),Oh("https"),Oh("mailto"),Oh("ftp"),new Nh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rh=(new Date).getTime();var Sh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Sh);function Th(a){af.call(this);var b=this;this.v=this.l=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return v(e,Uh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Vh(this)}
r(Th,af);function Wh(){var a=Xh;Th.i||(Th.i=new Th(a));return Th.i}
Th.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.v);delete Th.i};
Th.prototype.L=function(){return this.j};
function Vh(a){a.v=a.Z.S(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Uh(a),3):v(c,Uh(a),3);Vh(a);c.i=0})},3E4)}
function Uh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Yh={ci:"EMBEDDED_PLAYER_MODE_UNKNOWN",Zh:"EMBEDDED_PLAYER_MODE_DEFAULT",bi:"EMBEDDED_PLAYER_MODE_PFP",ai:"EMBEDDED_PLAYER_MODE_PFL"},Zh={qq:"WEB_DISPLAY_MODE_UNKNOWN",mq:"WEB_DISPLAY_MODE_BROWSER",oq:"WEB_DISPLAY_MODE_MINIMAL_UI",pq:"WEB_DISPLAY_MODE_STANDALONE",nq:"WEB_DISPLAY_MODE_FULLSCREEN"};function $h(){this.data_=[];this.i=-1}
$h.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
$h.prototype.get=function(a){return!!this.data_[a]};
function ai(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function bi(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
bi.prototype[Symbol.iterator]=function(){return this};
bi.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function ci(a,b){return new bi(a,b)}
;function di(){this.blockSize=-1}
;function ei(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(ei,di);ei.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function fi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
ei.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)fi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){fi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){fi(this,e);f=0;break}}this.j=f;this.m+=b}};
ei.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;fi(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ii(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:gi(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function ji(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ii(a,"inverted-hdpi")&&hi(a,Array.prototype.filter.call(a.classList?a.classList:gi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ki(){}
ki.prototype.next=function(){return li};
var li={done:!0,value:void 0};function mi(a){return{value:a,done:!1}}
ki.prototype.ea=function(){return this};function ni(a){if(a instanceof oi||a instanceof pi||a instanceof qi)return a;if("function"==typeof a.next)return new oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new oi(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function oi(a){this.j=a}
oi.prototype.ea=function(){return new pi(this.j())};
oi.prototype[Symbol.iterator]=function(){return new qi(this.j())};
oi.prototype.i=function(){return new qi(this.j())};
function pi(a){this.j=a}
r(pi,ki);pi.prototype.next=function(){return this.j.next()};
pi.prototype[Symbol.iterator]=function(){return new qi(this.j)};
pi.prototype.i=function(){return new qi(this.j)};
function qi(a){oi.call(this,function(){return a});
this.l=a}
r(qi,oi);qi.prototype.next=function(){return this.l.next()};function ri(a,b){this.j={};this.i=[];this.oa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ri)for(c=a.qb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=ri.prototype;l.qb=function(){si(this);return this.i.concat()};
l.has=function(a){return ti(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ui;si(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ui(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.oa=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ti(this.j,a)?(delete this.j[a],--this.size,this.oa++,this.i.length>2*this.size&&si(this),!0):!1};
function si(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ti(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ti(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ti(this.j,a)?this.j[a]:b};
l.set=function(a,b){ti(this.j,a)||(this.size+=1,this.i.push(a),this.oa++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.qb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ri(this)};
l.keys=function(){return ni(this.ea(!0)).i()};
l.values=function(){return ni(this.ea(!1)).i()};
l.entries=function(){var a=this;return ci(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){si(this);var b=0,c=this.oa,d=this,e=new ki;e.next=function(){if(c!=d.oa)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return li;var f=d.i[b++];return mi(a?f:d.j[f])};
return e};
function ti(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function vi(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Da(b)}}
l.Da=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&lb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.qa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];wi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Da(c)}}return 0!=e}return!1};
function wi(a,b,c){vf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Da,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.Y.D.call(this);this.clear();this.m.length=0};function xi(a){this.i=a}
xi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,yg(b))};
xi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xi.prototype.remove=function(a){this.i.remove(a)};function yi(a){this.i=a}
Za(yi,xi);function zi(a){this.data=a}
function Ai(a){return void 0===a||a instanceof zi?a:new zi(a)}
yi.prototype.set=function(a,b){yi.Y.set.call(this,a,Ai(b))};
yi.prototype.j=function(a){a=yi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bi(a){this.i=a}
Za(Bi,yi);Bi.prototype.set=function(a,b,c){if(b=Ai(b)){if(c){if(c<Date.now()){Bi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Bi.Y.set.call(this,a,b)};
Bi.prototype.j=function(a){var b=Bi.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Bi.prototype.remove.call(this,a);else return b}};function Ci(){}
;function Di(){}
Za(Di,Ci);Di.prototype[Symbol.iterator]=function(){return ni(this.ea(!0)).i()};
Di.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ei(a){this.i=a}
Za(Ei,Di);l=Ei.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c.key(b++);if(a)return mi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Fi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(Fi,Ei);function Gi(a,b){this.j=a;this.i=null;var c;if(c=Lc)c=!(9<=Number(Zc));if(c){Hi||(Hi=new ri);this.i=Hi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Hi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(Gi,Di);var Ii={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hi=null;function Ji(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ii[b]})}
l=Gi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Ji(a),b);Ki(this)};
l.get=function(a){a=this.i.getAttribute(Ji(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Ji(a));Ki(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c[b++];if(a)return mi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ki(this)};
function Ki(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Li(a,b){this.j=a;this.i=b+"::"}
Za(Li,Di);Li.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Li.prototype.get=function(a){return this.j.get(this.i+a)};
Li.prototype.remove=function(a){this.j.remove(this.i+a)};
Li.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ki;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return mi(a?e.slice(c.i.length):c.j.get(e))};
return d};function Mi(a){I.call(this,a)}
r(Mi,I);function Ni(a){I.call(this,a)}
r(Ni,I);Ni.prototype.getKey=function(){return Qd(this,1)};
Ni.prototype.getValue=function(){return Qd(this,2===Vd(this,Oi)?2:-1)};
Ni.prototype.setValue=function(a){return Ud(this,2,Oi,a)};
var Oi=[2,3,4,5,6];function Pi(a){I.call(this,a)}
r(Pi,I);function Qi(a){I.call(this,a)}
r(Qi,I);function Ri(a){I.call(this,a,-1,Si)}
r(Ri,I);var Si=[2];function Ti(a){I.call(this,a,-1,Ui)}
r(Ti,I);Ti.prototype.getPlayerType=function(){return Qd(this,36)};
Ti.prototype.setHomeGroupInfo=function(a){return G(this,Ri,81,a)};
Ti.prototype.clearLocationPlayabilityToken=function(){return D(this,89,void 0,!1)};
var Ui=[9,66,24,32,86,100,101];function Vi(a){I.call(this,a,-1,Wi)}
r(Vi,I);var Wi=[15,26,28];function Xi(a){I.call(this,a)}
r(Xi,I);Xi.prototype.setToken=function(a){return D(this,2,a)};function Yi(a){I.call(this,a,-1,Zi)}
r(Yi,I);Yi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Zi=[12];function $i(a){I.call(this,a,-1,aj)}
r($i,I);$i.prototype.s=function(a){G(this,Ti,1,a)};
var aj=[12];function bj(a){this.name=a}
;var cj=new bj("continuationCommand");var dj=new bj("webCommandMetadata");var ej=new bj("signalServiceEndpoint");var fj=new bj("feedbackEndpoint");function gj(a){I.call(this,a,-1,hj)}
r(gj,I);function ij(a){I.call(this,a)}
r(ij,I);ij.prototype.getKey=function(){return Sd(this,1,"")};
ij.prototype.getValue=function(){return Sd(this,2,"")};
ij.prototype.setValue=function(a){return D(this,2,a)};
var hj=[4,5];function jj(a){I.call(this,a)}
r(jj,I);function kj(a){I.call(this,a)}
r(kj,I);var lj=[2,3,4];function mj(a){I.call(this,a)}
r(mj,I);mj.prototype.getMessage=function(){return Sd(this,1,"")};function nj(a){I.call(this,a)}
r(nj,I);function oj(a){I.call(this,a)}
r(oj,I);function pj(a){I.call(this,a,-1,qj)}
r(pj,I);var qj=[10,17];function rj(a){I.call(this,a)}
r(rj,I);function sj(a){I.call(this,a)}
r(sj,I);sj.prototype.V=function(a){D(this,1,a)};function tj(a){I.call(this,a)}
r(tj,I);function uj(a){I.call(this,a)}
r(uj,I);function vj(a){I.call(this,a)}
r(vj,I);function wj(a){I.call(this,a,-1,xj)}
r(wj,I);wj.prototype.getVideoData=function(){return Wd(this,vj,15)};
var xj=[4];function yj(a){I.call(this,a)}
r(yj,I);function zj(a,b){G(a,tj,1,b)}
yj.prototype.V=function(a){D(this,2,a)};
function Aj(a){I.call(this,a)}
r(Aj,I);function Bj(a,b){G(a,tj,1,b)}
;function Cj(a){I.call(this,a,-1,Dj)}
r(Cj,I);Cj.prototype.V=function(a){D(this,1,a)};
function Ej(a,b){G(a,tj,2,b)}
var Dj=[3];function Fj(a){I.call(this,a)}
r(Fj,I);Fj.prototype.V=function(a){D(this,1,a)};function Gj(a){I.call(this,a)}
r(Gj,I);Gj.prototype.V=function(a){D(this,1,a)};function Hj(a){I.call(this,a)}
r(Hj,I);Hj.prototype.V=function(a){D(this,1,a)};function Ij(a){I.call(this,a)}
r(Ij,I);Ij.prototype.V=function(a){D(this,1,a)};function Jj(a){I.call(this,a)}
r(Jj,I);function Kj(a){I.call(this,a)}
r(Kj,I);function Lj(a){I.call(this,a,-1,Mj)}
r(Lj,I);Lj.prototype.getPlayerType=function(){return Sd(this,7,0)};
Lj.prototype.setVideoId=function(a){return D(this,19,a)};
function Nj(a,b){ae(a,68,Oj,b)}
function Oj(a){I.call(this,a)}
r(Oj,I);Oj.prototype.getId=function(){return Sd(this,2,"")};
var Mj=[83,68];function Pj(a){I.call(this,a)}
r(Pj,I);function Qj(a){I.call(this,a)}
r(Qj,I);function Rj(a){I.call(this,a)}
r(Rj,I);function Sj(a){I.call(this,a,442)}
r(Sj,I);
var nk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];var ok={ej:0,Pi:1,Vi:2,Wi:4,bj:8,Xi:16,Yi:32,dj:64,cj:128,Ri:256,Ti:512,aj:1024,Si:2048,Ui:4096,Qi:8192,Zi:16384};function pk(a){I.call(this,a)}
r(pk,I);function qk(a){I.call(this,a)}
r(qk,I);qk.prototype.setVideoId=function(a){return Ud(this,1,rk,a)};
qk.prototype.getPlaylistId=function(){return Qd(this,2===Vd(this,rk)?2:-1)};
var rk=[1,2];function sk(a){I.call(this,a,-1,tk)}
r(sk,I);var tk=[3];var uk=new bj("webPlayerShareEntityServiceEndpoint");var vk=new bj("playlistEditEndpoint");var wk=new bj("modifyChannelNotificationPreferenceEndpoint");var xk=new bj("unsubscribeEndpoint");var yk=new bj("subscribeEndpoint");function zk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ak=y.window,Bk,Ck,Dk=(null==Ak?void 0:null==(Bk=Ak.yt)?void 0:Bk.config_)||(null==Ak?void 0:null==(Ck=Ak.ytcfg)?void 0:Ck.data_)||{};z("yt.config_",Dk);function Ek(){zk(Dk,arguments)}
function L(a,b){return a in Dk?Dk[a]:b}
function Fk(){var a=Dk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Gk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Hk(a,b){a=Gk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ik(){return L("EXPERIMENTS_TOKEN","")}
function Gk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Jk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Kk=[];function Lk(a){Kk.forEach(function(b){return b(a)})}
function Mk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nk(b)}}:a}
function Nk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ek("ERRORS",e));Lk(a)}
function Ok(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ek("ERRORS",e))}
;function Pk(){var a=Qk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Rk(a){z("yt.ads.biscotti.lastId_",a)}
;var Sk=/^[\w.]*$/,Tk={q:!0,search_query:!0};function Uk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vk(f[0]||""),h=Vk(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],q=String(Uk);k.args=[{key:m,value:f[1],query:a,method:Wk==q?"unchanged":q}];Tk.hasOwnProperty(m)||Ok(k)}}return c}
var Wk=String(Uk);function Xk(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uk(a,"&")}
function Zk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yk(1<a.length?a[1]:a[0])):{}}
function $k(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function al(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function Vk(a){return a&&a.match(Sk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bl(a){var b=cl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ea){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Dh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Dh.screen)?void 0:k.height;var m;e.u_w=null==(m=Dh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Dh.screen)?void 0:q.availHeight;var t;e.u_aw=
null==(t=Dh.screen)?void 0:t.availWidth;var x;e.u_cd=null==(x=Dh.screen)?void 0:x.colorDepth}catch(ea){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ea){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var W=h.screen.availWidth;var ob=h.screen.availTop}catch(ea){}u=[R,ca,u,A,W,ob,E,F,O,N];try{var Wa=(b.i.top||window).document,la="CSS1Compat"==
Wa.compatMode?Wa.documentElement:Wa.body;var H=(new hf(la.clientWidth,la.clientHeight)).round()}catch(ea){H=new hf(-12245933,-12245933)}Wa=H;H={};var ka=void 0===ka?y:ka;la=new $h;ka.SVGElement&&ka.document.createElementNS&&la.set(0);A=Lh();A["allow-top-navigation-by-user-activation"]&&la.set(1);A["allow-popups-to-escape-sandbox"]&&la.set(2);ka.crypto&&ka.crypto.subtle&&la.set(3);ka.TextDecoder&&ka.TextEncoder&&la.set(4);ka=ai(la);H.bc=ka;H.bih=Wa.height;H.biw=Wa.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Dh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cl=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Xk(bl(a))});Date.now();var dl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function el(){if(!dl)return null;var a=dl();return"open"in a?a:null}
function fl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function gl(a,b){"function"===typeof a&&(a=Mk(a));return window.setTimeout(a,b)}
function hl(a){window.clearTimeout(a)}
;var il={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},jl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Sh)),kl=!1;
function ll(a,b){b=void 0===b?{}:b;var c=al(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in il){var f=L(il[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!oc(a))b["X-YouTube-Ad-Signals"]=Xk(bl());return b}
function ml(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!al(a)||(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yk(b),f={};fb(jl,function(g){e[g]&&(f[g]=e[g])});
return $k(a,f||{},!1)}
function nl(a,b){var c=b.format||"JSON";a=ol(a,b);var d=pl(a,b),e=!1,f=ql(a,function(k){if(!e){e=!0;h&&hl(h);var m=fl(k),q=null,t=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||t||x)q=rl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||y;m?b.onSuccess&&b.onSuccess.call(t,k,q):b.onError&&b.onError.call(t,k,q);b.onFinish&&b.onFinish.call(t,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=gl(function(){e||(e=!0,f.abort(),hl(h),g.call(b.context||y,f))},d)}return f}
function ol(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$k(a,b||{},!0);return a}
function pl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Yk(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):tc(e));f=e||f&&!rb(f);!kl&&f&&"POST"!=b.method&&(kl=!0,Nk(Error("AJAX request with postData should use POST")));return e}
function rl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ok(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?sl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=tl(g)})}d&&ul(e);
return e}
function ul(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else ul(a[b])}}
function sl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function tl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ql(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=el();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ml(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ll(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function vl(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function wl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function xl(a,b,c,d,e){qg.set(""+a,b,{ab:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function yl(a,b,c){qg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function zl(){if(!qg.isEnabled())return!1;if(!qg.isEmpty())return!0;qg.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==qg.get("TESTCOOKIESENABLED"))return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var Al=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Al);function Bl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=qg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Al[d]=c.toString())}}}
Bl.prototype.get=function(a,b){Cl(a);Dl(a);a=void 0!==Al[a]?Al[a].toString():null;return null!=a?a:b?b:""};
Bl.prototype.set=function(a,b){Cl(a);Dl(a);if(null==b)throw Error("ExpectedNotNull");Al[a]=b.toString()};
function El(a){return!!((Fl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Bl.prototype.remove=function(a){Cl(a);Dl(a);delete Al[a]};
Bl.prototype.clear=function(){for(var a in Al)delete Al[a]};
function Dl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Cl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Fl(a){a=void 0!==Al[a]?Al[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(Bl);var Gl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Hl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Il={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Jl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Kl(){var a=y.navigator;return a?a.connection:void 0}
function Ll(){var a=Kl();if(a){var b=Gl[a.type||"unknown"]||"CONN_UNKNOWN";a=Gl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Ml(){var a=Kl();if(null!=a&&a.effectiveType)return Jl.hasOwnProperty(a.effectiveType)?Jl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Nl(){return"INNERTUBE_API_KEY"in Dk&&"INNERTUBE_API_VERSION"in Dk}
function Ol(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),sb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Vb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Nc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Xb:L("INNERTUBE_CONTEXT_HL"),Wb:L("INNERTUBE_CONTEXT_GL"),Oc:L("INNERTUBE_HOST_OVERRIDE")||"",Qc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Pc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Pl(a){var b={client:{hl:a.Xb,gl:a.Wb,clientName:a.Vb,clientVersion:a.innertubeContextClientVersion,configInfo:a.sb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ik();""!==c&&(b.client.experimentsToken=c);c=Jk();0<c.length&&(b.request={internalExperimentFlags:c});Ql(a,void 0,b);Rl(void 0,b);Sl(a,void 0,b);Tl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Yk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ul(a){var b=new $i,c=new Ti;D(c,1,a.Xb);D(c,2,a.Wb);D(c,16,a.Nc);D(c,17,a.innertubeContextClientVersion);if(a.sb){var d=a.sb,e=new Pi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Pi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Ik();""!==d&&D(c,54,d);d=Jk();if(0<d.length){e=new Vi;for(var f=0;f<d.length;f++){var g=new Ni;D(g,1,d[f].key);g.setValue(d[f].value);ae(e,15,Ni,
g)}G(b,Vi,5,e)}Ql(a,c);Rl(c);Sl(a,c);Tl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Yi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Yk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.s(c);return b}
function Ql(a,b,c){a=a.Vb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Wd(b,Qi,96)||new Qi;var d=wl();d=Object.keys(Zh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Qi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=wl())}
function Rl(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Sl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Wd(b,Pi,62))?d:new Pi;D(c,6,a.appInstallData);G(b,Pi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Tl(a,b){var c=Ll();c&&(a?D(a,61,Hl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Ml())&&(a?D(a,94,Il[c]):b&&(b.client.effectiveConnectionType=c))}
function Vl(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Iq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Hq:b=ug([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Wl(a){a=Object.assign({},a);delete a.Authorization;var b=ug();if(b){var c=new ei;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=ed(c.digest(),3)}return a}
;function Xl(a){var b=new Fi;(b=b.isAvailable()?a?new Li(b,a):b:null)||(a=new Gi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Bi(a):null;this.j=document.domain||window.location.hostname}
Xl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yg(b))}catch(f){return}else e=escape(b);xl(a,e,c,this.j)};
Xl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=qg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Xl.prototype.remove=function(a){this.i&&this.i.remove(a);yl(a,"/",this.j)};var Yl=window,P=Yl.ytcsi&&Yl.ytcsi.now?Yl.ytcsi.now:Yl.performance&&Yl.performance.timing&&Yl.performance.now&&Yl.performance.timing.navigationStart?function(){return Yl.performance.timing.navigationStart+Yl.performance.now()}:function(){return(new Date).getTime()};var Zl;function $l(){Zl||(Zl=new Xl("yt.innertube"));return Zl}
function am(a,b,c,d){if(d)return null;d=$l().get("nextId",!0)||1;var e=$l().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wl(c),requestTime:Math.round(P())};$l().set("nextId",d+1,86400,!0);$l().set("requests",e,86400,!0);return d}
function bm(a){var b=$l().get("requests",!0)||{};delete b[a];$l().set("requests",b,86400,!0)}
function cm(a){var b=$l().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Wl(Vl(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),dm(a,d.method,e,{}));delete b[c]}}$l().set("requests",b,86400,!0)}}
;function em(){}
em.prototype.S=function(a,b){return fm(a,1,b)};
function gm(a,b){fm(a,2,b)}
function hm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function im(){em.apply(this,arguments)}
r(im,em);function jm(){im.i||(im.i=new im);return im.i}
function fm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):gl(a,c||0)}
im.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):hl(a)}};
im.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
im.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Xh=jm();var km=$c||ad;function lm(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var mm=function(){var a;return function(){a||(a=new Xl("ytidb"));return a}}();
function nm(){var a;return null==(a=mm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var om=[],pm,qm=!1;function rm(){var a={};for(pm=new sm(void 0===a.handleError?tm:a.handleError,void 0===a.logEvent?um:a.logEvent);0<om.length;)switch(a=om.shift(),a.type){case "ERROR":pm.handleError(a.payload);break;case "EVENT":pm.logEvent(a.eventType,a.payload)}}
function vm(a){qm||(pm?pm.handleError(a):(om.push({type:"ERROR",payload:a}),10<om.length&&om.shift()))}
function wm(a,b){qm||(pm?pm.logEvent(a,b):(om.push({type:"EVENT",eventType:a,payload:b}),10<om.length&&om.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
r(Q,Error);function xm(){try{return ym(),!0}catch(a){return!1}}
function ym(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function zm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Am(a){return a.substr(0,a.indexOf(":"))||a}
;var Bm={},Cm=(Bm.AUTH_INVALID="No user identifier specified.",Bm.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bm.MISSING_INDEX="Index not created.",Bm.MISSING_OBJECT_STORES="Object stores not created.",Bm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bm),Dm={},Em=(Dm.AUTH_INVALID="ERROR",Dm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Dm.EXPLICIT_ABORT="IGNORED",Dm.IDB_NOT_SUPPORTED="ERROR",Dm.MISSING_INDEX=
"WARNING",Dm.MISSING_OBJECT_STORES="ERROR",Dm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Dm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Dm.QUOTA_EXCEEDED="WARNING",Dm.QUOTA_MAYBE_EXCEEDED="WARNING",Dm.UNKNOWN_ABORT="WARNING",Dm.INCOMPATIBLE_DB_VERSION="WARNING",Dm),Fm={},Gm=(Fm.AUTH_INVALID=!1,Fm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fm.EXPLICIT_ABORT=!1,Fm.IDB_NOT_SUPPORTED=!1,Fm.MISSING_INDEX=!1,Fm.MISSING_OBJECT_STORES=!1,Fm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fm.QUOTA_EXCEEDED=!1,Fm.QUOTA_MAYBE_EXCEEDED=!0,Fm.UNKNOWN_ABORT=!0,Fm.INCOMPATIBLE_DB_VERSION=!1,Fm);function Hm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Cm[a]:c;d=void 0===d?Em[a]:d;e=void 0===e?Gm[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Hm.prototype)}
r(Hm,Q);function Im(a,b){Hm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Cm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Im.prototype)}
r(Im,Hm);function Jm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jm.prototype)}
r(Jm,Error);var Km=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Lm(a,b,c,d){b=Am(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Hm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Hm("QUOTA_EXCEEDED",a);if(bd&&"UnknownError"===e.name)return new Hm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jm)return new Hm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Km.some(function(f){return e.message.includes(f)}))return new Hm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Hm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",dc:e.name})];e.level="WARNING";return e}
function Mm(a,b,c){var d=nm();return new Hm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Nm(a){if(!a)throw Error();throw a;}
function Om(a){return a}
function Pm(a){this.i=a}
function Qm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Qm.all=function(a){return new Qm(new Pm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={wa:0};f.wa<a.length;f={wa:f.wa},++f.wa)Qm.resolve(a[f.wa]).then(function(g){return function(h){d[g.wa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qm.resolve=function(a){return new Qm(new Pm(function(b,c){a instanceof Qm?a.then(b,c):b(a)}))};
Qm.reject=function(a){return new Qm(new Pm(function(b,c){c(a)}))};
Qm.prototype.then=function(a,b){var c=this,d=null!=a?a:Om,e=null!=b?b:Nm;return new Qm(new Pm(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Rm(c,c,d,f,g)}),c.onRejected.push(function(){Sm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Rm(c,c,d,f,g):"REJECTED"===c.state.status&&Sm(c,c,e,f,g)}))};
Qm.prototype.catch=function(a){return this.then(void 0,a)};
function Rm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qm?Tm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qm?Tm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qm?Tm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Um(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vm(a){return new Promise(function(b,c){Um(a,b,c)})}
function Wm(a){return new Qm(new Pm(function(b,c){Um(a,b,c)}))}
;function Xm(a,b){return new Qm(new Pm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Ym(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Ym.prototype;l.add=function(a,b,c){return Zm(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Zm(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Zm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function $m(a,b,c){a=a.i.createObjectStore(b,c);return new an(a)}
l.delete=function(a,b){return Zm(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Zm(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function bn(a,b){return Zm(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Wm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Zm(a,b,c,d){var e,f,g,h,k,m,q,t,x,u,A,E;return w(function(F){switch(F.i){case 1:var O={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);O=new cn(m);O=dn(O,d);return v(F,O,6);case 6:return q=F.j,t=Math.round(P()),en(a,k,t,g,void 0,b.join(),e),F.return(q);case 4:x=Aa(F);u=Math.round(P());A=Lm(x,a.i.name,b.join(),a.i.version);
if((E=A instanceof Hm&&!A.i)||g>=f)en(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function en(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Hm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&wm("QUOTA_EXCEEDED",{dbName:Am(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Hm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),wm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),fn(a,!1,d,f,b,g.tag),vm(e)):fn(a,!0,d,f,b,g.tag)}
function fn(a,b,c,d,e,f){wm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function an(a){this.i=a}
l=an.prototype;l.add=function(a,b){return Wm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Wm(this.i.clear()).then(function(){})};
l.count=function(a){return Wm(this.i.count(a))};
function gn(a,b){return hn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?gn(this,a):Wm(this.i.delete(a))};
l.get=function(a){return Wm(this.i.get(a))};
l.index=function(a){try{return new jn(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Jm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function hn(a,b,c){a=a.i.openCursor(b.query,b.direction);return kn(a).then(function(d){return Xm(d,c)})}
function cn(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=Hm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function dn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
cn.prototype.abort=function(){this.i.abort();this.j=!0;throw new Hm("EXPLICIT_ABORT");};
cn.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new an(a),this.l.set(a,b));return b};
function jn(a){this.i=a}
l=jn.prototype;l.count=function(a){return Wm(this.i.count(a))};
l.delete=function(a){return ln(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Wm(this.i.get(a))};
l.getKey=function(a){return Wm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function ln(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return kn(a).then(function(d){return Xm(d,c)})}
function mn(a,b){this.request=a;this.cursor=b}
function kn(a){return Wm(a).then(function(b){return b?new mn(a,b):null})}
l=mn.prototype;l.advance=function(a){this.cursor.advance(a);return kn(this.request)};
l.continue=function(a){this.cursor.continue(a);return kn(this.request)};
l.delete=function(){return Wm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Wm(this.cursor.update(a))};function nn(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Ym(g.result,{closed:t}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.rd,q=c.upgrade,t=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&wm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:Am(a)});var A=f(),E=new cn(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){wm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Am(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function on(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)}
function pn(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Vm(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Lm(f,a,"",-1);})}
;function qn(a){return new Promise(function(b){gm(function(){b()},a)})}
function rn(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
rn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return on(a,b,c)};
rn.prototype.delete=function(a){a=void 0===a?{}:a;return pn(this.name,a)};
function sn(a,b){return new Hm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function tn(a,b){if(!b)throw Mm("openWithToken",Am(a.name));return un(a)}
function un(a){function b(){var f,g,h,k,m,q,t,x,u,A;return w(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),v(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,O=[],N=p(Object.keys(F.Ia)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=F.Ia[R],W=void 0===ca.Zc?Number.MAX_VALUE:ca.Zc;!(h.i.version>=ca.jb)||h.i.version>=W||h.i.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ia);q=h.objectStoreNames();
if(a.s<Hk("ytidb_reopen_db_retries",0))return a.s++,h.close(),vm(new Hm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<Hk("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,qn(a.j),8);case 8:a.j*=2;case 7:return v(E,a.delete(),9);case 9:return vm(new Hm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Im(q,m);case 5:return E.return(h);case 2:t=Aa(E);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){E.u(10);break}return v(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=E.j;u=x.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw x.close(),
a.m=!1,sn(a,u);return E.return(x);case 10:throw c(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),Lm(t,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw sn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,rd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var vn=new rn("YtIdbMeta",{Ia:{databases:{jb:1}},upgrade:function(a,b){b(1)&&$m(a,"databases",{keyPath:"actualName"})}});
function wn(a,b){var c;return w(function(d){if(1==d.i)return v(d,tn(vn,b),2);c=d.j;return d.return(Zm(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wm(f.i.put(a,void 0)).then(function(){})})}))})}
function xn(a,b){var c;return w(function(d){if(1==d.i)return a?v(d,tn(vn,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function yn(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],v(e,tn(vn,b),2)):3!=e.i?(d=e.j,v(e,Zm(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return hn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function zn(a){return yn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function An(a,b,c){return yn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Bn(a){var b,c;return w(function(d){if(1==d.i)return b=ym("YtIdbMeta hasAnyMeta other"),v(d,yn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var Cn,Dn=new function(){}(new function(){});
function En(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=nm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=km)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Mc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,wn(d,Dn),4);case 4:return v(e,xn("yt-idb-test-do-not-use",Dn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Fn(){if(void 0!==Cn)return Cn;qm=!0;return Cn=En().then(function(a){qm=!1;var b;if(null!=(b=mm())&&b.i){var c;b={hasSucceededOnce:(null==(c=nm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=mm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gn(){return B("ytglobal.idbToken_")||void 0}
function Hn(){var a=Gn();return a?Promise.resolve(a):Fn().then(function(b){(b=b?Dn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var In=0;function Jn(a,b){In||(In=Xh.S(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return v(h,Hn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return v(h,An(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,pn(f.actualName),7);case 7:return v(h,xn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),vm(g),d=!1;case 4:Xh.fa(In),In=0,d&&Jn(a,b),h.i=0}})}))}
function Kn(){var a;return w(function(b){return 1==b.i?v(b,Hn(),2):(a=b.j)?b.return(Bn(a)):b.return(!1)})}
new Bh;function Ln(a){if(!xm())throw a=new Hm("AUTH_INVALID",{dbName:a}),vm(a),a;var b=ym();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Mn(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Hn(),2);case 2:g=q.j;if(!g)throw h=Mm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vm(h),h;zm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Ln(a);ya(q,3);return v(q,wn(k,g),5);case 5:return v(q,on(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),v(q,xn(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Nn(a,b,c){c=void 0===c?{}:c;return Mn(a,b,!1,c)}
function On(a,b,c){c=void 0===c?{}:c;return Mn(a,b,!0,c)}
function Pn(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return v(e,Hn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();zm(a);d=Ln(a);return v(e,pn(d.actualName,b),3)}return v(e,xn(d.actualName,c),0)})}
function Qn(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?v(e,pn(d.actualName,b),2):v(e,xn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Rn(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return v(d,Hn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();zm("LogsDatabaseV2");return v(d,zn(b),3)}c=d.j;return v(d,Qn(c,a,b),0)})}
function Sn(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return v(d,Hn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();zm(a);return v(d,pn(a,b),3)}return v(d,xn(a,c),0)})}
;function Tn(a){this.Sa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.za=function(){};
this.now=Date.now;this.Ga=!1;var b;this.nc=null!=(b=a.nc)?b:100;var c;this.jc=null!=(c=a.jc)?c:1;var d;this.hc=null!=(d=a.hc)?d:2592E6;var e;this.ec=null!=(e=a.ec)?e:12E4;var f;this.ic=null!=(f=a.ic)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.Xa=!!a.Xa;var h;this.Va=null!=(h=a.Va)?h:.1;var k;this.cb=null!=(k=a.cb)?k:10;a.handleError&&(this.handleError=a.handleError);a.za&&(this.za=a.za);a.Ga&&(this.Ga=a.Ga);a.Sa&&(this.Sa=a.Sa);this.I=a.I;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ja=a.ja;this.xb=
a.xb;this.wb=a.wb;Un(this)&&(!this.I||this.I("networkless_logging"))&&Vn(this)}
function Vn(a){Un(a)&&!a.Ga&&(a.i=!0,a.Xa&&Math.random()<=a.Va&&a.O.Cc(a.H),Wn(a),a.M.L()&&a.Ma(),a.M.aa(a.xb,a.Ma.bind(a)),a.M.aa(a.wb,a.Kb.bind(a)))}
l=Tn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Un(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.M.L()&&Xn(c,d)}).catch(function(e){Xn(c,d);
Yn(c,e)})}else this.ja(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Un(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return v(k,d.O.set(e,d.H).catch(function(m){Yn(d,m)}),2);
f(g,h);k.i=0})}}this.ja(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ja(a,b,e.skipRetry);
Yn(d,g)})}else this.ja(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Un(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.ya(d.id,c.H):e=!0;c.M.ia&&c.I&&c.I("vss_network_hint")&&c.M.ia(!0);f(g,h)};
this.ja(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.ya(d.id,c.H)}).catch(function(g){Yn(c,g)})}else this.ja(a,b)};
l.Ma=function(){var a=this;if(!Un(this))throw Mm("throttleSend");this.j||(this.j=this.Z.S(function(){var b;return w(function(c){if(1==c.i)return v(c,a.O.Ub("NEW",a.H),2);if(3!=c.i)return b=c.j,b?v(c,Xn(a,b),3):(a.Kb(),c.return());a.j&&(a.j=0,a.Ma());c.i=0})},this.nc))};
l.Kb=function(){this.Z.fa(this.j);this.j=0};
function Xn(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!Un(a))throw c=Mm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Sc(b.id,a.H),3);case 3:(d=e.j)?b=d:a.za(Error("The request cannot be found in the database."));case 2:if(Zn(a,b,a.hc)){e.u(4);break}a.za(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.ya(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=$n(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.ya(b.id,a.H),8);case 8:a.ja(b.url,b.options,!!b.skipRetry),e.i=0}})}
function $n(a,b){if(!Un(a))throw Mm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=ao(f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.cb)){m.u(2);break}if(!a.M.Ka){m.u(3);break}return v(m,a.M.Ka(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.Ab(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.cb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.jc?v(m,a.O.Ab(b.id,a.H),12):v(m,a.O.ya(b.id,a.H),8);case 12:a.Z.S(function(){a.M.L()&&a.Ma()},a.ic);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.ya(b.id,a.H),2);a.M.ia&&a.I&&a.I("vss_network_hint")&&a.M.ia(!0);d(e,f);h.i=0})};
return b}
function Zn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Wn(a){if(!Un(a))throw Mm("retryQueuedRequests");a.O.Ub("QUEUED",a.H).then(function(b){b&&!Zn(a,b,a.ec)?a.Z.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.Ab(b.id,a.H),2);Wn(a);c.i=0})}):a.M.L()&&a.Ma()})}
function Yn(a,b){a.sc&&!a.M.L()?a.sc(b):a.handleError(b)}
function Un(a){return!!a.H||a.Sa}
function ao(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function bo(a,b){this.version=a;this.args=b}
;function co(a,b){this.topic=a;this.i=b}
co.prototype.toString=function(){return this.topic};var eo=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",eo);var fo=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",fo);var go=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",go);var ho=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",ho);
z("ytPubsub2Pubsub2SkipSubKey",null);function io(a,b){var c=jo();c&&c.publish.call(c,a.toString(),a,b)}
function ko(a){var b=lo,c=jo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fo[d])try{if(f&&b instanceof co&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.oa){var m=new h;h.oa=m.version}var q=h.oa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var t=q.construct;
var x=k.args,u=x.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=x[k];var E=A}else E=[];f=t.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Nk(F)}},ho[b.toString()]?B("yt.scheduler.instance")?Xh.S(g):gl(g,0):g())});
fo[d]=!0;go[b.toString()]||(go[b.toString()]=[]);go[b.toString()].push(d);return d}
function mo(){var a=no,b=ko(function(c){a.apply(void 0,arguments);oo(b)});
return b}
function oo(a){var b=jo();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete fo[c]}))}
function jo(){return B("ytPubsub2Pubsub2Instance")}
;function po(a,b){rn.call(this,a,b);this.options=b;zm(a)}
r(po,rn);function qo(a,b){var c;return function(){c||(c=new po(a,b));return c}}
po.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Cb?On:Nn)(a,b,Object.assign({},c))};
po.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Cb?Sn:Pn)(this.name,a)};
function ro(a,b){return qo(a,b)}
;var so;
function to(){if(so)return so();var a={};so=ro("LogsDatabaseV2",{Ia:(a.LogsRequestsStore={jb:2},a),Cb:!1,upgrade:function(b,c,d){c(2)&&$m(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return so()}
;function uo(a){return tn(to(),a)}
function vo(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,uo(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,bn(d,e),3);f=g.j;c.td=P();wo(c);return g.return(f)})}
function xo(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,uo(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Zm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return ln(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.td=P();wo(c);return m.return(k)})}
function yo(a,b){var c;return w(function(d){if(1==d.i)return v(d,uo(b),2);c=d.j;return d.return(Zm(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function zo(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return v(e,uo(b),2);d=e.j;return e.return(Zm(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Wm(g.i.put(h,void 0)).then(function(){return h})):Qm.resolve(void 0)})}))})}
function Ao(a,b){var c;return w(function(d){if(1==d.i)return v(d,uo(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Bo(a){var b,c;return w(function(d){if(1==d.i)return v(d,uo(a),2);b=d.j;c=P()-2592E6;return v(d,Zm(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return hn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Co(){return w(function(a){return v(a,Rn(),0)})}
function wo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&io("nwl_transaction_latency_payload",a)}
;var Do={},Eo=ro("ServiceWorkerLogsDatabase",{Ia:(Do.SWHealthLog={jb:1},Do),Cb:!0,upgrade:function(a,b){b(1)&&$m(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Fo(a){return tn(Eo(),a)}
function Go(a){var b,c;return w(function(d){if(1==d.i)return v(d,Fo(a),2);b=d.j;c=P()-2592E6;return v(d,Zm(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return hn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ho(a){var b;return w(function(c){if(1==c.i)return v(c,Fo(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Io={},Jo=0;
function Ko(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ql(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ql(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=mc(nc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(yc),h=xc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(x){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var t=!0;break b}}catch(x){}t=!1}b=t?!0:!1}else b=!1;b||Lo(a)}}
function Lo(a){var b=new Image,c=""+Jo++;Io[c]=b;b.onload=b.onerror=function(){delete Io[c]};
b.src=a}
;function Mo(){this.i=new Map;this.j=!1}
function No(){if(!Mo.i){var a=B("yt.networkRequestMonitor.instance")||new Mo;z("yt.networkRequestMonitor.instance",a);Mo.i=a}return Mo.i}
Mo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Mo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Mo.prototype.removeParams=function(a){return a.split("?")[0]};
Mo.prototype.removeParams=Mo.prototype.removeParams;Mo.prototype.isEndpointCFR=Mo.prototype.isEndpointCFR;Mo.prototype.requestComplete=Mo.prototype.requestComplete;Mo.getInstance=No;var Oo;function Po(){Oo||(Oo=new Xl("yt.offline"));return Oo}
function Qo(a){if(M("offline_error_handling")){var b=Po().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Po().set("errors",b,2592E3,!0)}}
;function Ro(){af.call(this);var a=this;this.l=!1;this.j=Wh();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=Po().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Nk(d)}Po().set("errors",{},2592E3,!0)}}})}
r(Ro,af);function So(){if(!Ro.i){var a=B("yt.networkStatusManager.instance")||new Ro;z("yt.networkStatusManager.instance",a);Ro.i=a}return Ro.i}
l=Ro.prototype;l.L=function(){return this.j.L()};
l.ia=function(a){this.j.j=a};
l.Mc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Gc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.Ka=function(a){a=Uh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&No().requestComplete("generate_204",b)});
return a};
Ro.prototype.sendNetworkCheckRequest=Ro.prototype.Ka;Ro.prototype.listen=Ro.prototype.aa;Ro.prototype.enableErrorFlushing=Ro.prototype.Gc;Ro.prototype.getWindowStatus=Ro.prototype.Mc;Ro.prototype.networkStatusHint=Ro.prototype.ia;Ro.prototype.isNetworkAvailable=Ro.prototype.L;Ro.getInstance=So;function To(a){a=void 0===a?{}:a;af.call(this);var b=this;this.j=this.s=0;this.l=So();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.fb?(this.fb=a.fb,c("networkstatus-online",function(){Uo(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Uo(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bf(b,"publicytnetworkstatus-offline")})))}
r(To,af);To.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
To.prototype.ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
To.prototype.Ka=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&No().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function Uo(a,b){a.fb?a.j?(Xh.fa(a.s),a.s=Xh.S(function(){a.o!==b&&(bf(a,b),a.o=b,a.j=P())},a.fb-(P()-a.j))):(bf(a,b),a.o=b,a.j=P()):bf(a,b)}
;var Vo;function Wo(){Tn.call(this,{O:{Cc:Bo,ya:Ao,Ub:xo,Sc:yo,Ab:zo,set:vo},M:Xo(),handleError:Nk,za:Ok,ja:Yo,now:P,sc:Qo,Z:jm(),xb:"publicytnetworkstatus-online",wb:"publicytnetworkstatus-offline",Xa:!0,Va:.1,cb:Hk("potential_esf_error_limit",10),I:M,Ga:!(xm()&&Zo())});this.l=new Bh;M("networkless_immediately_drop_all_requests")&&Co();Sn("LogsDatabaseV2")}
r(Wo,Tn);function $o(){var a=B("yt.networklessRequestController.instance");a||(a=new Wo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Hn().then(function(b){a.H=b;Vn(a);a.l.resolve();a.Xa&&Math.random()<=a.Va&&a.H&&Go(a.H);M("networkless_immediately_drop_sw_health_store")&&ap(a)}));
return a}
Wo.prototype.writeThenSend=function(a,b){b||(b={});xm()||(this.i=!1);Tn.prototype.writeThenSend.call(this,a,b)};
Wo.prototype.sendThenWrite=function(a,b,c){b||(b={});xm()||(this.i=!1);Tn.prototype.sendThenWrite.call(this,a,b,c)};
Wo.prototype.sendAndWrite=function(a,b){b||(b={});xm()||(this.i=!1);Tn.prototype.sendAndWrite.call(this,a,b)};
Wo.prototype.awaitInitialization=function(){return this.l.promise};
function ap(a){var b;w(function(c){if(!a.H)throw b=Mm("clearSWHealthLogsDb"),b;return c.return(Ho(a.H).catch(function(d){a.handleError(d)}))})}
function Yo(a,b,c){M("use_cfr_monitor")&&bp(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Ko(a):nl(a,b)}
function Xo(){Vo||(Vo=new To({Rc:!0,Hc:!0}));return Vo}
function bp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){No().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){No().requestComplete(a,!0);d(e,f)}}
function Zo(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var cp=!1,dp=0,ep=0,fp,gp=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:cp,potentialEsfErrorCounter:ep};z("ytNetworklessLoggingInitializationOptions",gp);
function hp(){var a;w(function(b){switch(b.i){case 1:return v(b,Hn(),2);case 2:a=b.j;if(!a||!xm()&&!M("nwl_init_require_datasync_id_killswitch")||!Zo()){b.u(0);break}cp=!0;gp.isNwlInitialized=cp;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,$o().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Sn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,Bo(a),8);case 8:return v(b,Go(a),7);case 7:ip();jp().L()&&kp();jp().aa("publicytnetworkstatus-online",
kp);jp().aa("publicytnetworkstatus-offline",lp);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,mp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,Co(),0);b.u(0)}})}
function np(a,b){function c(d){var e=jp().L();if(!op()||!d||e&&M("vss_networkless_bypass_write"))pp(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};vo(f,d).then(function(g){f.id=g;jp().L()&&qp(f)}).catch(function(g){qp(f);
jp().L()?Nk(g):Qo(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Hn().then(function(d){c(d)}):c(Gn())}
function rp(a,b){function c(d){if(op()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&No().requestComplete(e.url,!0);void 0!==e.id?Ao(e.id,d):f=!0;M("vss_network_hint")&&jp().ia(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){No().requestComplete(e.url,!1);h(k,m)}}pp(e.url,e.options);
vo(e,d).then(function(k){e.id=k;f&&Ao(e.id,d)}).catch(function(k){jp().L()?Nk(k):Qo(k)})}else pp(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Hn().then(function(d){c(d)}):c(Gn())}
function kp(){var a=Gn();if(!a)throw Mm("throttleSend");dp||(dp=Xh.S(function(){var b;return w(function(c){if(1==c.i)return v(c,xo("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,qp(b),3):(lp(),c.return());dp&&(dp=0,kp());c.i=0})},100))}
function lp(){Xh.fa(dp);dp=0}
function qp(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=Gn();if(!b)throw c=Mm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,yo(a.id,b),3);case 3:(d=e.j)?a=d:Ok(Error("The request cannot be found in the database."));case 2:if(sp(a,2592E6)){e.u(4);break}Ok(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,Ao(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=tp(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,Ao(a.id,b),8);case 8:pp(a.url,a.options,!!a.skipRetry),e.i=0}})}
function tp(a){var b=Gn();if(!b)throw Mm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&No().requestComplete(a.url,!1);g=ao(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&up()<=Hk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||No().isEndpointCFR(a.url))){m.u(3);break}return v(m,jp().Ka(),3);case 3:if(jp().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,zo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&up()>Hk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&gp.potentialEsfErrorCounter++;ep++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,zo(a.id,b),12):v(m,Ao(a.id,b),8);case 12:Xh.S(function(){jp().L()&&kp()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&No().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,Ao(a.id,b),2);M("vss_network_hint")&&jp().ia(!0);d(e,f);h.i=0})};
return a}
function sp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function ip(){var a=Gn();if(!a)throw Mm("retryQueuedRequests");xo("QUEUED",a).then(function(b){b&&!sp(b,12E4)?Xh.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,zo(b.id,a),2);ip();c.i=0})}):jp().L()&&kp()})}
function mp(){var a,b;return w(function(c){a=Gn();if(!a)throw b=Mm("clearSWHealthLogsDb"),b;return c.return(Ho(a).catch(function(d){Nk(d)}))})}
function jp(){if(M("use_new_nwl"))return Xo();fp||(fp=new To({Rc:!0,Hc:!0}));return fp}
function pp(a,b,c){c&&0===Object.keys(b).length?Ko(a):nl(a,b)}
function op(){return B("ytNetworklessLoggingInitializationOptions")?gp.isNwlInitialized:cp}
function up(){return B("ytNetworklessLoggingInitializationOptions")?gp.potentialEsfErrorCounter:ep}
;function vp(a){var b=this;this.config_=null;a?this.config_=a:Nl()&&(this.config_=Ol());fm(function(){cm(b)},0,5E3)}
vp.prototype.isReady=function(){!this.config_&&Nl()&&(this.config_=Ol());return!!this.config_};
function dm(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=am(b,c,m,k)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){bm(E);F(N,R)};
c.onFetchSuccess=function(N,R){bm(E);O(N,R)}}try{A&&d.retry&&!d.ac.bypassNetworkless?(g.method="POST",d.ac.writeThenSend?M("use_new_nwl_wts")?$o().writeThenSend(u,g):np(u,g):M("use_new_nwl_saw")?$o().sendAndWrite(u,g):rp(u,g)):M("web_all_payloads_via_jspb")?nl(u,g):(g.method="POST",g.postParams||(g.postParams={}),nl(u,g))}catch(N){if("InvalidAccessError"==N.name)E&&(bm(E),E=0),Ok(Error("An extension is blocking network request."));
else throw N;}E&&fm(function(){cm(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ok(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Nk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Oc)&&(h=f);var k=a.config_.Qc||!1,m=Vl(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},x=a.config_.Pc&&f;x=x&&f.startsWith("Bearer");x||(t.key=a.config_.innertubeApiKey);var u=$k(""+h+q,t||{},!0);M("use_new_nwl")&&$o().i||!M("use_new_nwl")&&
op()?Fn().then(function(A){e(A)}):e(!1)}
;var Jp=0,hq=Oc?"webkit":Nc?"moz":Lc?"ms":Kc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Jp});var iq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function jq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in iq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function kq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
jq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
jq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
jq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",qb);var lq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",lq);
function mq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var nq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function oq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=mq(a,b,c,d);if(e)return e;e=++lq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new jq(h);if(!lf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new jq(h);
h.currentTarget=a;return c.call(a,h)};
g=Mk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),nq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function pq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?nq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;var qq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function rq(a){this.G=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.K=oq(window,"mousemove",Xa(this.P,this));a=Xa(this.J,this);"function"===typeof a&&(a=Mk(a));this.R=window.setInterval(a,25)}
Za(rq,J);rq.prototype.P=function(a){void 0===a.i&&kq(a);var b=a.i;void 0===a.j&&kq(a);this.j=new gf(b,a.j)};
rq.prototype.J=function(){if(this.j){var a=qq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
rq.prototype.D=function(){window.clearInterval(this.R);pq(this.K)};var sq={};
function tq(a){var b=void 0===a?{}:a;a=void 0===b.Xc?!1:b.Xc;b=void 0===b.Ic?!0:b.Ic;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&uq();oq(document,"keydown",uq);oq(document,"keyup",uq);oq(document,"mousedown",uq);oq(document,"mouseup",uq);a?oq(window,"touchmove",function(){vq("touchmove",200)},{passive:!0}):(oq(window,"resize",function(){vq("resize",200)}),b&&oq(window,"scroll",function(){vq("scroll",200)}));
new rq(function(){vq("mouse",100)});
oq(document,"touchstart",uq,{passive:!0});oq(document,"touchend",uq,{passive:!0})}}
function vq(a,b){sq[a]||(sq[a]=!0,Xh.S(function(){uq();sq[a]=!1},b))}
function uq(){null==B("_lact",window)&&tq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function wq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var xq=y.ytPubsubPubsubInstance||new K,yq=y.ytPubsubPubsubSubscribedKeys||{},zq=y.ytPubsubPubsubTopicToKeys||{},Aq=y.ytPubsubPubsubIsSynchronous||{};function Bq(a,b){var c=Cq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){yq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Aq[a]?f():gl(f,0)}catch(g){Nk(g)}},void 0);
yq[d]=!0;zq[a]||(zq[a]=[]);zq[a].push(d);return d}return 0}
function Dq(a){var b=Cq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete yq[c]}))}
function Eq(a,b){var c=Cq();c&&c.publish.apply(c,arguments)}
function Fq(a){var b=Cq();if(b)if(b.clear(a),a)Gq(a);else for(var c in zq)Gq(c)}
function Cq(){return y.ytPubsubPubsubInstance}
function Gq(a){zq[a]&&(a=zq[a],fb(a,function(b){yq[b]&&delete yq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.qa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",xq);z("ytPubsubPubsubTopicToKeys",zq);z("ytPubsubPubsubIsSynchronous",Aq);z("ytPubsubPubsubSubscribedKeys",yq);function Hq(){this.store=[];this.i={}}
Hq.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=Iq(a);this.i[a]?this.i[a]++:this.i[a]=1;return a};
Hq.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.i[Iq(e.keys)]--):c.push(e)}this.store=c;a=Jq(this,a);a=p(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.i[c]&&Ok(new Q("Transport IMS did not fully extract entries for key:",{sequence:c,Uq:b.length,Tq:this.i[c]}));return b};
Hq.prototype.getSequenceCount=function(a){var b=Jq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Jq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Kq(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Kq(b.cttAuthInfo));b=[];d=[d,e,f];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Hq.prototype.getSequenceCount=Hq.prototype.getSequenceCount;Hq.prototype.extractMatchingEntries=Hq.prototype.extractMatchingEntries;Hq.prototype.storePayload=Hq.prototype.storePayload;function Iq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function Kq(a){return void 0===a?"undefined":a}
;var Lq=Hk("initial_gel_batch_timeout",2E3),Mq=Math.pow(2,16)-1,Nq=void 0;function Oq(){this.l=this.i=this.j=0}
var Pq=new Oq,Qq=new Oq,Rq=!0,Sq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Sq);var Tq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Tq);var Uq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Uq);var Vq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Vq);var Wq={};function Xq(){var a=B("yt.logging.ims");a||(a=new Hq,z("yt.logging.ims",a));return a}
function Yq(a,b){M("web_all_payloads_via_jspb")&&Ok(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Zq(a);var c=$q(a);if(M("use_new_in_memory_storage")){Wq[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Xq().storePayload(d,a.payload);ar(b,[],c,!1,d)}else d=Sq.get(c)||[],Sq.set(c,d),d.push(a.payload),ar(b,d,c)}}
function br(a,b){if("log_event"===a.endpoint){Zq(void 0,a);var c=$q(a,!0);if(M("use_new_in_memory_storage")){Wq[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Xq().storePayload(d,a.payload.toJSON());ar(b,[],c,!0,d)}else d=Tq.get(c)||[],Tq.set(c,d),a=a.payload.toJSON(),d.push(a),ar(b,d,c,!0)}}
function ar(a,b,c,d,e){d=void 0===d?!1:d;a&&(Nq=new a);a=Hk("tvhtml5_logging_max_batch")||Hk("web_logging_max_batch")||100;var f=P(),g=d?Qq.l:Pq.l;b=b.length;e&&(b=Xq().getSequenceCount(e));b>=a?M("background_thread_flush_logs_due_to_batch_limit")?gl(function(){cr({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d)},0):cr({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&(dr(d),d?Qq.l=f:Pq.l=f)}
function er(a,b){M("web_all_payloads_via_jspb")&&Ok(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Zq(a);var c=$q(a),d=new Map;d.set(c,[a.payload]);b&&(Nq=new b);return new yf(function(e,f){Nq&&Nq.isReady()?fr(d,Nq,e,f,{bypassNetworkless:!0},!0):e()})}}
function gr(a,b){if("log_event"===a.endpoint){Zq(void 0,a);var c=$q(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Nq=new b);return new yf(function(e){Nq&&Nq.isReady()?hr(d,Nq,e,{bypassNetworkless:!0},!0):e()})}}
function $q(a,b){var c="";if(a.Fa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new qk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ud(d,2,rk,c.playlistId);Vq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Uq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function cr(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&Ok(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new yf(function(d,e){c?(hl(Qq.j),hl(Qq.i),Qq.i=0):(hl(Pq.j),hl(Pq.i),Pq.i=0);if(Nq&&Nq.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=Nq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Xq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),hr(k,h,d,f)):(k=Xq().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),fr(m,h,d,e,f));else if(g){e=p(Object.keys(Wq));for(g=e.next();!g.done;g=e.next())m=g.value,g=Xq().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Wq[m];hr(k,h,d,f)}else{k=p(Object.keys(Wq));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Xq().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Wq[g]}fr(m,h,d,e,f)}}else f=a,k=c,h=Nq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Tq.get(b)||[],e.set(b,
k),hr(e,h,d,f),Tq.delete(b)):(k=new Map,m=Sq.get(b)||[],k.set(b,m),fr(k,h,d,e,f),Sq.delete(b)):k?(hr(Tq,h,d,f),Tq.clear()):(fr(Sq,h,d,e,f),Sq.clear());else dr(c),d()})}
function dr(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Pq.i||a&&!Qq.i)){var b=gl(function(){cr({writeThenSend:!0},void 0,a)},6E4);
a?Qq.i=b:Pq.i=b}hl(a?Qq.j:Pq.j);b=L("LOGGING_BATCH_TIMEOUT",Hk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Rq&&(b=Lq);b=gl(function(){cr({writeThenSend:!0},void 0,a)},b);
a?Qq.j=b:Pq.j=b}
function fr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=wb({context:Pl(b.config_||Ol())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.events=q;(q=Uq[m])&&ir(k,m,q);delete Uq[m];m="visitorOnlyApprovedKey"===m;jr(k,g,m);kr(e);q=function(){h--;h||c()};
var t=function(){h--;h||c()};
try{dm(b,"log_event",k,lr(e,m,q,t,f)),Rq=!1}catch(x){Nk(x),d()}}}
function hr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(P()),g=a.size,h=new Map([].concat(ia(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new sk;var t=Ul(b.config_||Ol());G(k,$i,1,t);q=q?mr(q):[];q=p(q);for(t=q.next();!t.done;t=q.next())ae(k,3,Sj,t.value);(q=Vq[m])&&nr(k,m,q);delete Vq[m];m="visitorOnlyApprovedKey"===m;or(k,f,m);kr(d);k=ee(k);m=lr(d,m,function(){g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;dm(b,"log_event","",m);Rq=!1}}
function kr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function lr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,ac:a,Fa:b,Kq:!!e,headers:{},postBodyFormat:"",postBody:""};M("use_request_time_ms_header")&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function jr(a,b,c){M("use_request_time_ms_header")||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=pr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function or(a,b,c){M("use_request_time_ms_header")||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=pr();var d=new pk;D(d,1,b);D(d,2,c);G(a,pk,5,d)}}
function pr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Mq/2));a++;a>Mq&&(a=1);Ek("BATCH_CLIENT_COUNTER",a);return a}
function ir(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function nr(a,b,c){if(Qd(c,1===Vd(c,rk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,qk,4,c);a=Wd(a,$i,1)||new $i;c=Wd(a,Yi,3)||new Yi;var e=new Xi;e.setToken(b);D(e,1,d);ae(c,12,Xi,e);G(a,Yi,3,c)}
function mr(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Sj(a[c]))}catch(d){Nk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Zq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var qr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",qr);
function rr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&tq();a=wq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:sr(b),groupKey:b},a.sequence=b,d.Rb&&delete qr[d.ba]);(d.kc?er:Yq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Fa:d.Fa},c)}
function tr(a){cr(void 0,void 0,void 0===a?!1:a)}
function sr(a){qr[a]=a in qr?qr[a]+1:0;return qr[a]}
;var ur=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",ur);function vr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=wq();d=new Rj;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=sr(e),g=new Qj;D(g,2,f);D(g,1,e);G(d,Qj,3,g);c.Rb&&delete ur[c.ba]}G(a,Rj,33,d);(c.kc?gr:br)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Fa:c.Fa},b)}
;function wr(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);vr(a,c?null:vp,b)}
;function xr(a,b){var c=new Sj;Zd(c,Hj,72,nk,a);wr(c,b)}
function yr(a,b,c){var d=new Sj;Zd(d,Gj,73,nk,a);c?vr(d,c,b):wr(d,b)}
function zr(a,b,c){var d=new Sj;Zd(d,Fj,78,nk,a);c?vr(d,c,b):wr(d,b)}
function Ar(a,b,c){var d=new Sj;Zd(d,Ij,208,nk,a);c?vr(d,c,b):wr(d,b)}
function Br(a,b,c){var d=new Sj;Zd(d,yj,156,nk,a);c?vr(d,c,b):wr(d,b)}
function Cr(a,b,c){var d=new Sj;Zd(d,Cj,215,nk,a);c?vr(d,c,b):wr(d,b)}
function Dr(a,b,c){var d=new Sj;Zd(d,uj,111,nk,a);c?vr(d,c,b):wr(d,b)}
;function um(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=vp;L("ytLoggingEventsDefaultDisabled",!1)&&vp===vp&&(d=null);M("web_all_payloads_via_jspb")&&Ok(new Q("Logs should be translated to JSPB but are sent as JSON instead",a));rr(a,b,d,c)}else d=vp,L("ytLoggingEventsDefaultDisabled",!1)&&vp==vp&&(d=null),rr(a,b,d,c)}
;var Er=[{vb:function(a){return"Cannot read property '"+a.key+"'"},
bb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{vb:function(a){return"Cannot call '"+a.key+"'"},
bb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{vb:function(a){return a.key+" is not defined"},
bb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Gr={na:[],ma:[{callback:Fr,weight:500}]};function Fr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Hr(){this.ma=[];this.na=[]}
var Ir;function Jr(){if(!Ir){var a=Ir=new Hr;a.na.length=0;a.ma.length=0;Gr.na&&a.na.push.apply(a.na,Gr.na);Gr.ma&&a.ma.push.apply(a.ma,Gr.ma)}return Ir}
;var Kr=new K;function Lr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Mr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Mr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Mr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Mr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Nr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Or(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Lr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Or(e+".ve",f,g,h):0;d+=g;d+=Or(e,a[e],b,c);if(500<d)break}}else c[b]=Pr(a),d+=c[b].length;else c[b]=Pr(a),d+=c[b].length;return d}
function Or(a,b,c,d){c+="."+a;a=Pr(b);d[c]=a;return c.length+a.length}
function Pr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Qr=new Set,Rr=0,Sr=0,Tr=0,Ur=[],Vr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tm(a){Wr(a)}
function Xr(a){Wr(a,"WARNING")}
function Wr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Rr)){var m=Ur,q=ue(a),t=q.message||"Unknown Error",x=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(x+": "+t)){var A=u.split("\n");A.shift();u=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Nr(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var W in ca){if(ca[W]){var ob="params."+W,Wa=Pr(ca[W]);g[ob]=Wa;N+=ob.length+Wa.length;if(500<N)break}}else g.params=Pr(ca)}if(m.length)for(var la=0;la<m.length&&!(N=Nr(m[la],"params.context."+la,g,N),500<=N);la++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:t,name:x,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},ka=Number(a.columnNumber);isNaN(ka)||(H.lineNumber=H.lineNumber+
":"+ka);if("IGNORED"===a.level)var ea=0;else a:{for(var ze=Jr(),Ae=p(ze.na),wd=Ae.next();!wd.done;wd=Ae.next()){var na=wd.value;if(H.message&&H.message.match(na.Sq)){ea=na.weight;break a}}for(var wp=p(ze.ma),Tj=wp.next();!Tj.done;Tj=wp.next()){var xp=Tj.value;if(xp.callback(H)){ea=xp.weight;break a}}ea=1}H.sampleWeight=ea;for(var yp=p(Er),Uj=yp.next();!Uj.done;Uj=yp.next()){var Vj=Uj.value;if(Vj.bb[H.name])for(var zp=p(Vj.bb[H.name]),Wj=zp.next();!Wj.done;Wj=zp.next()){var Ap=Wj.value,Rg=H.message.match(Ap.regexp);
if(Rg){H.params["params.error.original"]=Rg[0];for(var Xj=Ap.groups,Bp={},xd=0;xd<Xj.length;xd++)Bp[Xj[xd]]=Rg[xd+1],H.params["params.error."+Xj[xd]]=Rg[xd+1];H.message=Vj.vb(Bp);break}}}H.params||(H.params={});var Cp=Jr();H.params["params.errorServiceSignature"]="msg="+Cp.na.length+"&cb="+Cp.ma.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Qr.has(H.message)){if("ERROR"===h){Kr.qa("handleError",H);if(M("record_app_crashed_web")&&0===Tr&&1===H.sampleWeight)if(Tr++,M("errors_via_jspb")){var Yj=new rj;D(Yj,1,1);if(!M("report_client_error_with_app_crash_ks")){var Dp=new mj;D(Dp,1,H.message);var Ep=new nj;G(Ep,mj,3,Dp);var Fp=new oj;G(Fp,nj,5,Ep);var Gp=new pj;G(Gp,oj,9,Fp);G(Yj,pj,4,Gp)}var Hp=new Sj;Zd(Hp,rj,20,
nk,Yj);wr(Hp)}else{var Ip={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Ip.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});um("appCrashed",Ip)}Sr++}else"WARNING"===h&&Kr.qa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var Be=h;if(M("errors_via_jspb")){if(Yr())var Kp=void 0;else{var yd=new jj;D(yd,1,H.stack);H.fileName&&D(yd,4,H.fileName);var Kb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Kb.length&&(1!==
Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(D(yd,2,Number(Kb[0])),D(yd,3,Number(Kb[1]))):D(yd,2,Number(Kb[0])));var zc=new mj;D(zc,1,H.message);D(zc,3,H.name);D(zc,6,H.sampleWeight);"ERROR"===Be?D(zc,2,2):"WARNING"===Be?D(zc,2,1):D(zc,2,0);var Zj=new kj;D(Zj,1,!0);Zd(Zj,jj,3,lj,yd);var cc=new gj;D(cc,3,window.location.href);for(var Lp=L("FEXP_EXPERIMENTS",[]),ak=0;ak<Lp.length;ak++){var Qv=Lp[ak];Dd(cc);Rd(cc,5,2,!1).push(Qv)}var bk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Fk()&&bk)for(var Mp=p(Object.keys(bk)),Ac=Mp.next();!Ac.done;Ac=Mp.next()){var Np=Ac.value,ck=new ij;D(ck,1,Np);ck.setValue(String(bk[Np]));ae(cc,4,ij,ck)}var dk=H.params;if(dk){var Op=p(Object.keys(dk));for(Ac=Op.next();!Ac.done;Ac=Op.next()){var Pp=Ac.value,ek=new ij;D(ek,1,"client."+Pp);ek.setValue(String(dk[Pp]));ae(cc,4,ij,ek)}}var Qp=L("SERVER_NAME"),Rp=L("SERVER_VERSION");if(Qp&&Rp){var fk=new ij;D(fk,1,"server.name");fk.setValue(Qp);ae(cc,4,ij,fk);var gk=new ij;D(gk,1,"server.version");
gk.setValue(Rp);ae(cc,4,ij,gk)}var Sg=new nj;G(Sg,gj,1,cc);G(Sg,kj,2,Zj);G(Sg,mj,3,zc);Kp=Sg}var Sp=Kp;if(!Sp)break a;var Tp=new Sj;Zd(Tp,nj,163,nk,Sp);wr(Tp)}else{if(Yr())var Up=void 0;else{var Ce={stackTrace:H.stack};H.fileName&&(Ce.filename=H.fileName);var Lb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Lb.length&&(1!==Lb.length||isNaN(Number(Lb[0]))?2!==Lb.length||isNaN(Number(Lb[0]))||isNaN(Number(Lb[1]))||(Ce.lineNumber=Number(Lb[0]),Ce.columnNumber=Number(Lb[1])):Ce.lineNumber=
Number(Lb[0]));var hk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===Be?hk.level="ERROR_LEVEL_ERROR":"WARNING"===Be&&(hk.level="ERROR_LEVEL_WARNNING");var Rv={isObfuscated:!0,browserStackInfo:Ce},zd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(zd.experimentIds=L("FEXP_EXPERIMENTS"));var ik=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Fk()&&ik)for(var Vp=p(Object.keys(ik)),Bc=Vp.next();!Bc.done;Bc=Vp.next()){var Wp=
Bc.value;zd.kvPairs.push({key:Wp,value:String(ik[Wp])})}var jk=H.params;if(jk){var Xp=p(Object.keys(jk));for(Bc=Xp.next();!Bc.done;Bc=Xp.next()){var Yp=Bc.value;zd.kvPairs.push({key:"client."+Yp,value:String(jk[Yp])})}}var Zp=L("SERVER_NAME"),$p=L("SERVER_VERSION");Zp&&$p&&(zd.kvPairs.push({key:"server.name",value:Zp}),zd.kvPairs.push({key:"server.version",value:$p}));Up={errorMetadata:zd,stackTrace:Rv,logMessage:hk}}var aq=Up;if(!aq)break a;um("clientError",aq)}if("ERROR"===Be||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(tr(!0),!M("web_fp_via_jspb_and_json")))break c;tr()}else{if(M("web_fp_via_jspb")&&(tr(!0),!M("web_fp_via_jspb_and_json")))break b;tr()}}if(!M("suppress_error_204_logging")){var De=H.params||{},dc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":De.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};De.version&&(dc["client.version"]=De.version);if(dc.postParams){H.stack&&(dc.postParams.stack=
H.stack);for(var bq=p(Object.keys(De)),kk=bq.next();!kk.done;kk=bq.next()){var cq=kk.value;dc.postParams["client."+cq]=De[cq]}var lk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(lk)for(var dq=p(Object.keys(lk)),mk=dq.next();!mk.done;mk=dq.next()){var eq=mk.value;dc.postParams[eq]=lk[eq]}var fq=L("SERVER_NAME"),gq=L("SERVER_VERSION");fq&&gq&&(dc.postParams["server.name"]=fq,dc.postParams["server.version"]=gq)}nl(L("ECATCHER_REPORT_HOST","")+"/error_204",dc)}try{Qr.add(H.message)}catch(tx){}Rr++}}}}
function Yr(){for(var a=p(Vr),b=a.next();!b.done;b=a.next())if(lm(b.value.toLowerCase()))return!0;return!1}
function Zr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function $r(){this.register=new Map}
function as(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Xq("ABORTED")}
$r.prototype.clear=function(){as(this);this.register.clear()};
var bs=new $r;var cs=Date.now().toString();
function ds(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(cs)for(a=1,b=0;b<cs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^cs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var es=y.ytLoggingDocDocumentNonce_;es||(es=ds(),z("ytLoggingDocDocumentNonce_",es));var fs=es;var gs={Oh:0,ne:1,ye:2,Jl:3,Qh:4,bq:5,ym:6,lo:7,En:8,Wn:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function hs(a){this.i=a}
function is(a){return new hs({trackingParams:a})}
hs.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
hs.prototype.getAsJspb=function(){var a=new tj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;null!=b&&b instanceof jd&&id();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,tj,7,b));void 0!==this.i.youtubeData&&G(a,Mi,8,this.i.jspbYoutubeData);return a};
hs.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
hs.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function js(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function ks(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ls(a){return L(ks(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",ls);function ms(a){return(a=ls(void 0===a?0:a))?new hs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function ns(){var a=L("csn-to-ctt-auth-info");a||(a={},Ek("csn-to-ctt-auth-info",a));return a}
function os(a){a=L(js(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",os);function ps(a,b,c){var d=ns();(c=os(c))&&delete d[c];b&&(d[a]=b)}
function qs(a){return ns()[a]}
z("yt_logging_screen.getCttAuthInfo",qs);
function rs(a,b,c,d){c=void 0===c?0:c;if(a!==L(js(c))||b!==L(ks(c)))if(ps(a,d,c),Ek(js(c),a),Ek(ks(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new uj;D(e,1,fs);D(e,2,a);M("use_default_heartbeat_client")?Dr(e):Dr(e,void 0,vp)}else e={clientDocumentNonce:fs,clientScreenNonce:a},M("use_default_heartbeat_client")?um("foregroundHeartbeatScreenAssociated",e):rr("foregroundHeartbeatScreenAssociated",e,vp)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",rs);var ss=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",ss);function ts(a){zk(ss,arguments)}
;var us={me:3611,xd:27686,yd:85013,zd:23462,Bd:157557,Cd:42016,Dd:62407,Ed:26926,Ad:43781,Fd:51236,Gd:79148,Hd:50160,Id:77504,Ud:153587,Vd:87907,Wd:18630,Xd:54445,Yd:80935,Zd:152172,ae:105675,be:150723,ce:37521,de:147285,ee:47786,ge:98349,he:123695,ie:6827,je:29434,ke:7282,le:124448,pe:32276,oe:76278,qe:147868,re:147869,se:93911,te:106531,ue:27259,we:27262,xe:27263,ze:21759,Ae:27107,Be:62936,Ce:49568,De:38408,Ee:80637,Fe:68727,Ge:68728,He:80353,Ie:80356,Je:74610,Ke:45707,Le:83962,Me:83970,Ne:46713,
Oe:89711,Pe:74612,Qe:155792,Re:93265,Se:74611,Te:131380,Ve:128979,We:139311,Xe:128978,Ue:131391,Ye:105350,af:139312,bf:134800,Ze:131392,df:113533,ef:93252,ff:99357,hf:94521,jf:114252,kf:113532,lf:94522,gf:94583,mf:88E3,nf:139580,pf:93253,qf:93254,rf:94387,sf:94388,tf:93255,uf:97424,cf:72502,vf:110111,wf:76019,yf:117092,zf:117093,xf:89431,Af:110466,Bf:77240,Cf:60508,Df:148123,Ef:148124,Ff:137401,Gf:137402,Hf:137046,If:73393,Jf:113534,Kf:92098,Lf:131381,Mf:84517,Nf:83759,Of:80357,Pf:86113,Qf:72598,
Rf:72733,Sf:107349,Tf:124275,Uf:118203,Vf:133275,Wf:160157,Xf:152569,Yf:156651,Zf:133274,ag:160159,cg:160158,dg:133272,eg:133273,fg:133276,gg:144507,hg:143247,ig:156652,jg:143248,kg:143249,lg:143250,mg:143251,ng:156653,og:144401,qg:117431,pg:133797,rg:153964,sg:128572,tg:133405,ug:117429,vg:117430,wg:117432,xg:120080,yg:117259,zg:156655,Ag:156654,Bg:121692,Cg:145656,Dg:156656,Eg:145655,Fg:145653,Gg:145654,Hg:145657,Ig:132972,Jg:133051,Kg:133658,Lg:132971,Mg:97615,Og:143359,Ng:143356,Qg:143361,Pg:143358,
Sg:143360,Rg:143357,Tg:142303,Ug:143353,Vg:143354,Wg:144479,Xg:143355,Yg:31402,ah:133624,bh:146477,dh:133623,eh:133622,Zg:133621,fh:84774,gh:95117,hh:150497,ih:98930,jh:98931,kh:98932,lh:153320,mh:153321,nh:43347,oh:129889,ph:149123,qh:45474,rh:100352,sh:84758,th:98443,uh:117985,vh:74613,wh:155911,xh:74614,yh:64502,zh:136032,Ah:74615,Bh:74616,Ch:122224,Dh:74617,Eh:77820,Fh:74618,Gh:93278,Hh:93274,Ih:93275,Jh:93276,Kh:22110,Lh:29433,Mh:133798,Nh:132295,Ph:120541,Rh:82047,Sh:113550,Th:75836,Uh:75837,
Vh:42352,Wh:84512,Xh:76065,Yh:75989,di:16623,fi:32594,gi:27240,hi:32633,ii:74858,ji:156999,li:3945,ki:16989,mi:45520,ni:25488,oi:25492,ri:25494,si:55760,ti:14057,vi:18451,wi:57204,xi:57203,yi:17897,zi:57205,Ai:18198,Bi:17898,Ci:17909,Di:43980,Ei:46220,Fi:11721,Gi:147994,Hi:49954,Ii:96369,Ji:3854,Ki:151633,Li:56251,Mi:159108,Ni:25624,Oi:152036,fj:16906,gj:99999,hj:68172,ij:27068,jj:47973,kj:72773,lj:26970,mj:26971,nj:96805,oj:17752,pj:73233,qj:109512,rj:22256,sj:14115,tj:22696,uj:89278,vj:89277,wj:109513,
xj:43278,yj:43459,zj:43464,Aj:89279,Bj:43717,Cj:55764,Dj:22255,Ej:147912,Fj:89281,Gj:40963,Hj:43277,Ij:43442,Jj:91824,Kj:120137,Lj:96367,Mj:36850,Nj:72694,Oj:37414,Pj:36851,Rj:124863,Qj:121343,Sj:73491,Tj:54473,Uj:43375,Vj:46674,Wj:143815,Xj:139095,Yj:144402,Zj:149968,ak:149969,bk:32473,ck:72901,dk:72906,ek:50947,fk:50612,gk:50613,hk:50942,ik:84938,jk:84943,kk:84939,lk:84941,mk:84944,nk:84940,pk:84942,qk:35585,rk:51926,sk:79983,tk:63238,uk:18921,vk:63241,wk:57893,xk:41182,yk:135732,zk:33424,Ak:22207,
Bk:42993,Ck:36229,Dk:22206,Ek:22205,Fk:18993,Gk:19001,Hk:18990,Ik:18991,Jk:18997,Kk:18725,Lk:19003,Mk:36874,Nk:44763,Ok:33427,Pk:67793,Qk:22182,Rk:37091,Sk:34650,Tk:50617,Uk:47261,Vk:22287,Wk:25144,Xk:97917,Yk:62397,Zk:150871,al:150874,bl:125598,dl:137935,fl:36961,il:108035,jl:27426,kl:27857,ll:27846,ml:27854,nl:69692,ol:61411,pl:39299,ql:38696,rl:62520,sl:36382,ul:108701,vl:50663,wl:36387,xl:14908,yl:37533,zl:105443,Al:61635,Bl:62274,Cl:133818,Dl:65702,El:65703,Fl:65701,Gl:76256,Hl:37671,Il:49953,
Kl:36216,Ll:28237,Ml:39553,Nl:29222,Ol:26107,Pl:38050,Ql:26108,Sl:120745,Rl:26109,Tl:26110,Ul:66881,Vl:28236,Wl:14586,Xl:57929,Yl:74723,Zl:44098,am:44099,dm:23528,em:61699,bm:134104,cm:134103,fm:59149,gm:101951,hm:97346,im:118051,jm:95102,km:64882,lm:119505,mm:63595,nm:63349,om:95101,pm:75240,qm:27039,rm:68823,sm:21537,tm:83464,um:75707,vm:83113,wm:101952,xm:101953,zm:79610,Am:125755,Bm:24402,Cm:24400,Dm:32925,Fm:57173,Em:156421,Gm:122502,Hm:145268,Im:138480,Jm:64423,Km:64424,Lm:33986,Mm:100828,Nm:129089,
Om:21409,Sm:135155,Tm:135156,Um:135157,Vm:135158,Wm:158225,Xm:135159,Ym:135160,Zm:135161,bn:135162,cn:135163,an:158226,dn:158227,en:135164,fn:135165,gn:135166,Pm:11070,Qm:11074,Rm:17880,hn:14001,kn:30709,ln:30707,mn:30711,nn:30710,pn:30708,jn:26984,qn:146143,rn:63648,sn:63649,tn:51879,un:111059,vn:5754,wn:20445,xn:151308,yn:151152,An:130975,zn:130976,Bn:110386,Cn:113746,Dn:66557,Fn:17310,Gn:28631,Hn:21589,In:154946,Jn:68012,Kn:60480,Ln:138664,Mn:141121,Nn:31571,On:141978,Pn:150105,Qn:150106,Rn:150107,
Sn:150108,Tn:76980,Un:41577,Vn:45469,Xn:38669,Yn:13768,Zn:13777,ao:141842,bo:62985,co:4724,eo:59369,fo:43927,ho:43928,jo:12924,ko:100355,no:56219,oo:27669,po:10337,mo:47896,qo:122629,so:139723,ro:139722,to:121258,uo:107598,vo:127991,wo:96639,xo:107536,yo:130169,zo:96661,Ao:145188,Bo:96658,Co:116646,Do:159428,Eo:121122,Fo:96660,Go:127738,Ho:127083,Io:155281,Jo:147842,Ko:104443,Lo:96659,Mo:147595,No:106442,Oo:134840,Po:63667,Qo:63668,Ro:63669,So:130686,To:147036,Uo:78314,Vo:147799,Wo:148649,Xo:55761,
Yo:127098,Zo:134841,ap:96368,bp:67374,cp:48992,ep:146176,fp:49956,gp:31961,hp:26388,ip:23811,jp:5E4,kp:126250,lp:96370,mp:47355,np:47356,qp:37935,rp:45521,sp:21760,tp:83769,up:49977,vp:49974,wp:93497,xp:93498,yp:34325,zp:140759,Ap:115803,Bp:123707,Cp:100081,Dp:35309,Ep:68314,Fp:25602,Gp:100339,Hp:143516,Ip:59018,Jp:18248,Kp:50625,Lp:9729,Mp:37168,Np:37169,Op:21667,Pp:16749,Qp:18635,Rp:39305,Sp:18046,Tp:53969,Up:8213,Vp:93926,Wp:102852,Xp:110099,Yp:22678,Zp:69076,aq:137575,cq:139224,fq:100856,gq:154430,
hq:17736,iq:3832,jq:147111,kq:55759,lq:64031,rq:93044,sq:93045,tq:34388,uq:17657,wq:17655,xq:39579,yq:39578,zq:77448,Aq:8196,Bq:11357,Cq:69877,Dq:8197,Eq:156512,Fq:156509,Gq:82039};function vs(){var a=vb(ws),b;return(new yf(function(c,d){a.onSuccess=function(e){fl(e)?c(new xs(e)):d(new ys("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ys("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ys("Request timed out","net.timeout",e))};
b=nl("//googleads.g.doubleclick.net/pagead/id",a)})).gb(function(c){c instanceof Ff&&b.abort();
return Df(c)})}
function ys(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(ys,ab);function xs(a){this.xhr=a}
;function zs(){this.i=0;this.ka=null}
zs.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ka))&&"function"===typeof a.then?a:As(a):2===this.i&&b?(a=b.call(c,this.ka))&&"function"===typeof a.then?a:Bs(a):this};
zs.prototype.getValue=function(){return this.ka};
zs.prototype.$goog_Thenable=!0;function Bs(a){var b=new zs;a=void 0===a?null:a;b.i=2;b.ka=void 0===a?null:a;return b}
function As(a){var b=new zs;a=void 0===a?null:a;b.i=1;b.ka=void 0===a?null:a;return b}
;function Cs(a,b){if(a)return a[b.name]}
;function Ds(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:al(a)?"same-origin":"cors",credentials:al(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Es(){return sg()||km&&lm("applewebkit")&&!lm("version")&&(!lm("safari")||lm("gsa/"))||Pc&&lm("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function Fs(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Yh)if(Yh[c]==b.embeddedPlayerMode){b=Yh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Gs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hs;this.isTimeout=a instanceof ys&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ff}
r(Gs,ab);Gs.prototype.name="BiscottiError";function Hs(){ab.call(this,"Biscotti ID is missing from server")}
r(Hs,ab);Hs.prototype.name="BiscottiMissingError";var ws={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Is=null;function Js(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Es())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(Fs(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Qk(){var a=Js();if(void 0!==a)return Df(a);Is||(Is=vs().then(Ks).gb(function(b){return Ls(2,b)}));
return Is}
function Ks(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Hs;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Hs;a=a.id;Rk(a);Is=As(a);Ms(18E5,2);return a}
function Ls(a,b){b=new Gs(b);Rk("");Is=Bs(b);0<a&&Ms(12E4,a-1);throw b;}
function Ms(a,b){gl(function(){vs().then(Ks,function(c){return Ls(b,c)}).gb(cb)},a)}
function Ns(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Qk()}catch(b){return Df(b)}}
;function Os(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Pk();try{Ns().then(function(){},function(){}),gl(Os,18E5)}catch(b){Nk(b)}}}
;function Ps(){this.pd=!0}
function Qs(a){var b={},c=ug([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Dk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Dk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Rs={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Ss=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ts(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Zk(a).theme;return Ss.get(b)||null}catch(c){}return null}
;function Us(){this.i={};if(this.j=zl()){var a=qg.get("CONSISTENCY",void 0);a&&Vs(this,{encryptedTokenJarContents:a})}}
Us.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ha.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Vs(this,a)}};
function Vs(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&xl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ws=window.location.hostname.split(".").slice(-2).join(".");function Xs(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Ys(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Zs;Xs.getInstance=function(){Zs=B("yt.clientLocationService.instance");Zs||(Zs=new Xs,z("yt.clientLocationService.instance",Zs));return Zs};
l=Xs.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Ys(this))&&this.i.set("yt-location-playability-token",a,15552E3):xl("YT_CL",JSON.stringify({loctok:a}),15552E3,Ws,!0))};
function Ys(a){return void 0===a.i?new Xl("yt-client-location"):a.i}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.i=Ys(this))&&this.i.remove("yt-location-playability-token"):yl("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function $s(a,b){var c,d=null==(c=Cs(a,ej))?void 0:c.signal;if(d&&b.La&&(c=b.La[d]))return c();var e;if((c=null==(e=Cs(a,cj))?void 0:e.request)&&b.Ec&&(e=b.Ec[c]))return e();for(var f in a)if(b.Nb[f]&&(a=b.Nb[f]))return a()}
;var at=Symbol("injectionDeps");function bt(a){this.name=a}
bt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ct(){this.key=dt}
function et(){this.providers=new Map;this.i=new Map}
et.prototype.resolve=function(a){return a instanceof ct?ft(this,a.key,[],!0):ft(this,a,[])};
function ft(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.qc)var e=d.qc;else if(d.wd)e=d[at]?gt(a,d[at],c):[],e=d.wd.apply(d,ia(e));else if(d.pc){e=d.pc;var f=e[at]?gt(a,e[at],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.fr||a.i.set(b,e);
return e}
function gt(a,b,c){return b?b.map(function(d){return d instanceof ct?ft(a,d.key,c,!0):ft(a,d,c)}):[]}
;var ht;function jt(){ht||(ht=new et);return ht}
;function kt(a){return function(){return new a}}
;var lt={},mt=(lt.WEB_UNPLUGGED="^unplugged/",lt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",lt.WEB_UNPLUGGED_OPS="^unplugged/",lt.WEB_UNPLUGGED_PUBLIC="^unplugged/",lt.WEB_CREATOR="^creator/",lt.WEB_KIDS="^kids/",lt.WEB_EXPERIMENTS="^experiments/",lt.WEB_MUSIC="^music/",lt.WEB_REMIX="^music/",lt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",lt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",lt);
function nt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=mt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(mt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function ot(){}
ot.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Rs:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Bl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";El(165)?m="USER_INTERFACE_THEME_DARK":El(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ts()||m;h.userInterfaceTheme=k;if(!f){if(k=
Ll())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Ml())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var t;q=null==(t=y.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}t=Zk(y.location.href);!M("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
vl.i&&(t=vl.i,h.mainAppWebInfo.pwaInstallabilityStatus=!t.i&&t.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=wl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(t=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:t}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ob){}x=void 0}x&&(h.timeZone=x)}(x=Ik())?h.experimentsToken=x:delete h.experimentsToken;x=Jk();Us.i||(Us.i=new Us);h=Us.i.i;t=[];q=0;for(var u in h)t[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:t});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);x=Bl.getInstance();u=El(58);x=x.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=os())&&(g.clientScreenNonce=f):!f&&(f=os())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Xs.getInstance().setLocationOnInnerTubeContext(g);try{var A=bl(),E=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:E};var F=p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;A=R;E=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(ob){Wr(ob)}F=g}else Wr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.i(a)){this.j(F,O,b);var W;b="/youtubei/v1/"+nt(this.l());(O=null==(W=Cs(a.commandMetadata,dj))?void 0:W.apiUrl)&&(b=O);W=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&
(W=String(b)+String(pc(W)));b={};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");W=$k(W,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:W,ta:Ds(W),ha:F,config:a};a.config.Ra?a.config.Ra.identity=c:a.config.Ra={identity:c};return a}Wr(new Q("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(ot.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function pt(){}
r(pt,ot);pt.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ta:Ds("/getDatasyncIdsEndpoint","GET"),ha:{}}};
pt.prototype.l=function(){return[]};
pt.prototype.i=function(){};
pt.prototype.j=function(){};var qt={},rt=(qt.GET_DATASYNC_IDS=kt(pt),qt);function st(a){var b=Ja.apply(1,arguments);if(!tt(a)||b.some(function(d){return!tt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())ut(a,c.value);return a}
function ut(a,b){for(var c in b)if(tt(b[c])){if(c in a&&!tt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ut(a[c],b[c])}else if(vt(b[c])){if(c in a&&!vt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);wt(a[c],b[c])}else a[c]=b[c];return a}
function wt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,tt(c)?a.push(ut({},c)):vt(c)?a.push(wt([],c)):a.push(c);return a}
function tt(a){return"object"===typeof a&&!Array.isArray(a)}
function vt(a){return"object"===typeof a&&Array.isArray(a)}
;function xt(a,b){bo.call(this,1,arguments);this.timer=b}
r(xt,bo);var zt=new co("aft-recorded",xt);var At=window;function Bt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=At.performance||At.mozPerformance||At.msPerformance||At.webkitPerformance||new Bt;var Ct=!1,Dt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function Et(a){var b=Ft(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Gt(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Ht(e.requestStart),e.responseEnd=Ht(e.responseEnd),e.redirectStart=Ht(e.redirectStart),e.redirectEnd=Ht(e.redirectEnd),e.domainLookupEnd=Ht(e.domainLookupEnd),e.connectStart=Ht(e.connectStart),e.connectEnd=
Ht(e.connectEnd),e.responseStart=Ht(e.responseStart),e.secureConnectionStart=Ht(e.secureConnectionStart),e.domainLookupStart=Ht(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function It(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Ht(a){return Math.round(It()+a)}
function Jt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Kt(a){a=Jt(a);a.info||(a.info={});return a.info}
function Lt(a){a=Jt(a);a.metadata||(a.metadata={});return a.metadata}
function Ft(a){a=Jt(a);a.tick||(a.tick={});return a.tick}
function Mt(a){a=Jt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Nt(a){a=Mt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ot(a){a=Mt(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Pt(a){var b=Jt(a).nonce;b||(b=ds(),Jt(a).nonce=b);return b}
function Qt(a){var b=Ft(a||""),c=Et(a);c&&!Ct&&(io(zt,new xt(Math.round(c-b._start),a)),Ct=!0)}
function Rt(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Rt(a[d],b[d]))return!1;return!0}
;function St(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Ht(a.startTime)}a=S.timing;
return a.Uc?Math.max(0,a.Uc):0}
;function Tt(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Ut(a){a=a||"";var b=B("ytcsi.reference");b||(Tt(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Tt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Vt=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Wt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",
U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",
U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt=
"playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",
U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),
Xt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Yt={},Zt=(Yt.ccs="CANARY_STATE_",Yt.mver="MEASUREMENT_VERSION_",Yt.pis="PLAYER_INITIALIZED_STATE_",Yt.yt_pt="LATENCY_PLAYER_",Yt.pa="LATENCY_ACTION_",Yt.ctop="TOP_ENTITY_TYPE_",
Yt.yt_vst="VIDEO_STREAM_TYPE_",Yt),$t="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function au(a){return Vt[a]||"LATENCY_ACTION_UNKNOWN"}
function bu(a,b,c){c=Mt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Wt){c=Wt[a];0<=eb(Xt,c)&&(b=!!b);a in Zt&&"string"===typeof b&&(b=Zt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return st({},d)}0<=eb($t,a)||Xr(new Q("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,
LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,
LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,
LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";
V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";
V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";
V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";
V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";
V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";
V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";
V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var cu={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};cu[cu.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";cu[cu.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";cu[cu.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var du={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};du[du.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
du[du.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";du[du.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";du[du.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";du[du.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";du[du.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";du[du.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";du[du.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var eu={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};eu[eu.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";eu[eu.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";eu[eu.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";eu[eu.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var fu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
fu[fu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";fu[fu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var gu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};gu[gu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";gu[gu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";gu[gu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
gu[gu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";gu[gu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";gu[gu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var hu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};hu[hu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";hu[hu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";hu[hu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";hu[hu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var iu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};iu[iu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";iu[iu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";iu[iu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var ju={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};ju[ju.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
ju[ju.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";ju[ju.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var ku="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var lu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",lu);function mu(){this.i=0}
function nu(){mu.i||(mu.i=new mu);return mu.i}
mu.prototype.tick=function(a,b,c,d){ou(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Pj,D(d,1,a),D(d,2,b),a=new Sj,Zd(a,Pj,5,nk,d),wr(a,c)):um("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
mu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");ou(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,um("latencyActionInfo",a,{cttAuthInfo:c}))};
mu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));ou(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Sj,Zd(c,Lj,7,nk,a),wr(c,b))};
mu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");ou(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,um("latencyActionSpan",a,{cttAuthInfo:c}))};
function ou(a,b){lu[b]=lu[b]||{count:0};var c=lu[b];c.count++;c.time=P();a.i||(a.i=fm(function(){var d=P(),e;for(e in lu)lu[e]&&6E4<d-lu[e].time&&delete lu[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Xr(c)),!0):!1}
;function pu(){var a=["ol"];Ut("").info.actionType="embed";a&&Ek("TIMING_AFT_KEYS",a);Ek("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Lj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetGuide_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetHome_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);
break;case "GetPlayer_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSearch_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSettings_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetTrending_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetWatchNext_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}qu(b);b=new Lj;b=D(b,25,!0);b=D(b,1,V[au(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,V[au(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=os())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=ru();1!==a&&-1!==a||D(b,6,!0);a=Kt();if(M("skip_setting_info_in_csi_data_object"))Lt();else{d=Ot();c=[];for(e=0;e<d.length;e++){var f=c,g=f.push;var h=d[e];var k=Lj;if(null==h||""==h)k=new k;else{h=JSON.parse(h);if(!Array.isArray(h))throw Error("Expected to deserialize an Array but got "+Oa(h)+": "+h);de=h;rd(h);k=new k(h);de=null}g.call(f,k)}for(d=0;d<c.length&&"cold"!==
Sd(c[d],3,"");d++);}D(b,3,"cold");su(a);a=tu();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Kj,D(d,1,c),ae(b,83,Kj,d);qu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&uu(b,a[b]);b={isNavigation:!0,actionType:au(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=au(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=os())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=ru();if(1===a||-1===a)b.isVisible=
!0;M("skip_setting_info_in_csi_data_object")?Lt():Kt();b.loadType="cold";su(Kt());a=tu();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});vu(b)}b=Kt();a=Nt();if("cold"===b.yt_lt||"cold"===a.loadType){c=Ft();d=Mt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var m in c)m in d||Z(m,c[m]);m={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=bu(e,b[e]))&&!Rt(Nt(),e)&&(st(a,e),st(m,e),c=!0);c&&vu(m)}z("ytglobal.timingready_",
!0);m=L("TIMING_ACTION");B("ytglobal.timingready_")&&m&&"_start"in Ft()&&Et()&&Qt()}
function uu(a,b,c,d){null!==b&&(M("skip_setting_info_in_csi_data_object")||(Kt(c)[a]=b),(a=bu(a,b,c))&&vu(a,c,d))}
function vu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Ut(b||""),st(c.info,a),M("skip_setting_info_in_csi_data_object")?a.loadType&&(c=a.loadType,Lt(b).loadType=c):st(Nt(b),a),c=Pt(b),b=Jt(b).cttAuthInfo,nu().info(a,c,b);else{c=new Lj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,V[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,
92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,cu[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,du[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,
a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,V[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,eu[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,
29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,
64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,fu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,
47,a[e]);break;case "liveStreamMode":D(c,91,gu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,hu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,iu[a[e]]);break;case "playerRotationType":D(c,101,ju[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;
case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:ku.includes(f)&&Nk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Nk(Error("Codegen laipb translator failed to set "+f))}}qu(c,b)}}
function qu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=Sd(a,3,"");c&&(Lt(b).loadType=c)}else Ot(b).push(ee(a));Ut(b||"").jspbInfo.push(a);c=Pt(b);b=Jt(b).cttAuthInfo;nu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Ut(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Mt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=Ft(c);e=b||P();d[a]=e;e=Pt(c);var f=Jt(c).cttAuthInfo;if("_start"===a){var g=nu();ou(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Jj,D(f,1,e),e=new Sj,Zd(e,Jj,6,nk,f),wr(e,
b)):um("latencyActionBaselined",{clientActionNonce:e},b))}else nu().tick(a,e,b,f);Qt(c);return d[a]}
function wu(){var a=Pt();requestAnimationFrame(function(){setTimeout(function(){a===Pt()&&Z("ol",void 0,void 0)},0)})}
function ru(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=hq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function su(a){var b=Gt(),c=It(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=St();0<a&&Z("fpt",a);a=Gt();a.isPerformanceNavigationTiming&&vu({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=It()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&xu()}
function yu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=It(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function tu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Dt)if(Dt.hasOwnProperty(b)){var c=Dt[b];yu(b,c)&&a.push(c)}return a}
function xu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Ht(b.startTime)),Z("wffe",Ht(b.responseEnd)))}
var zu=window;zu.ytcsi&&(zu.ytcsi.info=uu,zu.ytcsi.tick=Z);var Au="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Bu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Cu(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.La||(a.La={});a.La=Object.assign({},rt,a.La)}
function Du(a,b,c,d){if(void 0!==Cu.i){if(d=Cu.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Cu.i=new Cu(a,b,c,d)}
function Eu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Rs:c;var d=$s(b,a.o);if(!d)return Df(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new yf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.ta)?void 0:g.mode)?"cors":void 0;if(a.m.pd){var q=e.config,t;q=null==q?void 0:null==(t=q.Ra)?void 0:t.sessionIndex;t=Qs({sessionIndex:q});k=Object.assign({},Fu(h),t);return m.u(2)}return v(m,Gu(e.config,
h),3)}2!=m.i&&(k=m.j);f(Hu(a,e,k));m.i=0})}):Df(new Q("Error: Failed to build request for command.",b))}
function Iu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.dr)?0:d.gr)&&a.l){d=p(Au);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Hu(a,b,c){var d,e,f,g,h,k,m,q,t,x,u,A,E,F,O,N,R,ca,W,ob,Wa,la,H,ka,ea,ze,Ae,wd;return w(function(na){switch(na.i){case 1:na.u(2);break;case 3:if((d=na.j)&&!d.isExpired())return na.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ha)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Wq(b.ha.context);if(null==(m=a.j)||!m.er(b.input,b.ha)){na.u(4);break}return v(na,a.j.Rq(b.input,b.ha),5);case 5:return q=na.j,M("kevlar_process_local_innertube_responses_killswitch")||
Iu(a,q,b),na.return(q);case 4:return(u=null==(x=b.config)?void 0:x.Aa)&&a.i.has(u)&&M("web_memoize_inflight_requests")?t=a.i.get(u):(A=JSON.stringify(b.ha),O=null!=(F=null==(E=b.ta)?void 0:E.headers)?F:{},b.ta=Object.assign({},b.ta,{headers:Object.assign({},O,c)}),N=Object.assign({},b.ta),"POST"===b.ta.method&&(N=Object.assign({},N,{body:A})),(null==(R=b.config)?0:R.bd)&&Z(b.config.bd),ca=function(){return a.M.fetch(b.input,N,b.config)},t=ca(),u&&a.i.set(u,t)),v(na,t,6);
case 6:W=na.j;if(M("web_one_platform_error_handling")&&(null==(ob=W)?0:null==(Wa=ob.error)?0:Wa.details))for(la=W.error.details,H=p(la),ka=H.next();!ka.done;ka=H.next())ea=ka.value,(ze=ea["@type"])&&-1<Bu.indexOf(ze)&&(delete ea["@type"],W=ea);u&&a.i.has(u)&&a.i.delete(u);(null==(Ae=b.config)?0:Ae.cd)&&Z(b.config.cd);if(W||null==(wd=a.j)||!wd.Lq(b.input,b.ha)){na.u(7);break}return v(na,a.j.Qq(b.input,b.ha),8);case 8:W=na.j;case 7:return Iu(a,W,b),na.return(W)}})}
function Gu(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ra)?void 0:d.sessionIndex;var h=Qs({sessionIndex:e});if(!(h instanceof yf)){var k=new yf(cb);zf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},Fu(b),f)))})}
function Fu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ju=new bt("INNERTUBE_TRANSPORT_TOKEN");var Ku=["share/get_web_player_share_panel"],Lu=["feedback"],Mu=["notification/modify_channel_preference"],Nu=["browse/edit_playlist"],Ou=["subscription/subscribe"],Pu=["subscription/unsubscribe"];function Qu(){}
r(Qu,ot);Qu.prototype.l=function(){return Ou};
Qu.prototype.i=function(a){return Cs(a,yk)||void 0};
Qu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Qu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ru(){}
r(Ru,ot);Ru.prototype.l=function(){return Pu};
Ru.prototype.i=function(a){return Cs(a,xk)||void 0};
Ru.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Ru.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Su(){}
r(Su,ot);Su.prototype.l=function(){return Lu};
Su.prototype.i=function(a){return Cs(a,fj)||void 0};
Su.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Su.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Tu(){}
r(Tu,ot);Tu.prototype.l=function(){return Mu};
Tu.prototype.i=function(a){return Cs(a,wk)||void 0};
Tu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Uu(){}
r(Uu,ot);Uu.prototype.l=function(){return Nu};
Uu.prototype.i=function(a){return Cs(a,vk)||void 0};
Uu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Vu(){}
r(Vu,ot);Vu.prototype.l=function(){return Ku};
Vu.prototype.i=function(a){return Cs(a,uk)};
Vu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var dt=new bt("NETWORK_SLI_TOKEN");function Wu(a){this.i=a}
Wu.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=mc(nc(5,Dc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Xr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Xr(g)}))})};
Wu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Xr(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Wu[at]=[new ct];var Xu=new bt("NETWORK_MANAGER_TOKEN");var Yu;function Zu(a){bo.call(this,1,arguments);this.csn=a}
r(Zu,bo);var lo=new co("screen-created",Zu),$u=[],bv=av,cv=0;function dv(a,b,c,d,e,f,g){function h(){Xr(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=bv();f=new hs({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ba:k};if(M("il_via_jspb")){var m=new yj;m.V(k);zj(m,f.getAsJspb());c&&c.visualElement?(f=new Aj,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),Bj(f,c.visualElement.getAsJspb()),g&&D(f,4,ok[g]),G(m,Aj,5,f)):c&&h();d&&D(m,3,d);Br(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?rr("screenCreated",f,a,e):um("screenCreated",f,e);io(lo,new Zu(k));return k}
function ev(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:qs(b),
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Xr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new Cj;h.V(b);Ej(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();ae(h,3,tj,k)});
"UNDEFINED_CSN"==b?fv("visualElementAttached",h,f):Cr(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?fv("visualElementAttached",c,f):a?rr("visualElementAttached",c,a,f):um("visualElementAttached",c,f)}
function av(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return ed(b,3)}
function fv(a,b,c){$u.push({payloadName:a,payload:b,options:c});cv||(cv=mo())}
function no(a){if($u){for(var b=p($u),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":Br(c.payload,c.options);break;case "visualElementAttached":Cr(c.payload,c.options);break;case "visualElementShown":xr(c.payload,c.options);break;case "visualElementHidden":yr(c.payload,c.options);break;case "visualElementGestured":zr(c.payload,c.options);break;case "visualElementStateChanged":Ar(c.payload,c.options);break;default:Xr(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,rr(c.payloadName,c.payload,null,c.options);$u.length=0}cv=0}
;function gv(){this.j=new Set;this.i=new Set;this.l=new Map}
gv.prototype.s=function(){};
gv.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(gv);function hv(){this.o=[];this.N=[];this.i=[];this.m=[];this.C=[];this.j=new Set;this.v=new Map}
hv.prototype.s=function(a){this.client=a};
function iv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=os(c),f=ms(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&ev(a.client,e,f,[is(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&ev(a.client,e,f,[is(d.playerResponse.trackingParams)])}})}
function jv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=os(d);c=c||ms(d);e&&c&&ev(a.client,e,c,[b])}}
hv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=os(void 0===c?0:c)){a=this.client;var e=is(d);d={cttAuthInfo:qs(c),ba:c};if(M("il_via_jspb")){var f=new Fj;f.V(c);e=e.getAsJspb();G(f,tj,2,e);D(f,4,ok.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,wj,3);"UNDEFINED_CSN"==c?fv("visualElementGestured",f,d):zr(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
fv("visualElementGestured",f,d):a?rr("visualElementGestured",f,a,d):um("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function kv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){lv(a,b,c);var f=ms(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,jv(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=os(g);var m=k[0]||ms(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:qs(h),ba:h};M("il_via_jspb")?(q=new Ij,q.V(h),m=m.getAsJspb(),G(q,tj,2,m),"UNDEFINED_CSN"==h?fv("visualElementStateChanged",q,k):Ar(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?fv("visualElementStateChanged",m,k):g?rr("visualElementStateChanged",m,g,k):um("visualElementStateChanged",m,k))}}}};
os(c.layer)||a.l();if(c.Qb)for(var d=p(c.Qb),e=d.next();!e.done;e=d.next())iv(a,e.value,c.layer);else Wr(Error("Delayed screen needs a data promise."))}
function lv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Wc?c.Wc:c.layer;var e=os(d);d=ms(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=dv(a.client,b,f,c.Pb,c.cttAuthInfo,g,c.Oq)}catch(m){Zr(m,{Zq:b,rootVe:d,parentVisualElement:void 0,Mq:e,Vq:f,Pb:c.Pb});Wr(m);return}rs(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(gs));for(f=b.next();!f.done;f=b.next())if(os(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:qs(e),ba:e,Rb:g},M("il_via_jspb")?(h=new Gj,h.V(e),d=d.getAsJspb(),G(h,tj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?fv("visualElementHidden",h,f):yr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?fv("visualElementHidden",d,f):b?rr("visualElementHidden",d,b,f):um("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");vu({clientScreenNonce:k});gv.getInstance().clear();d=ms(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:qs(e),ba:e},M("il_via_jspb")?(b=new Hj,b.V(e),f=d.getAsJspb(),G(b,tj,2,f),D(b,4,1),"UNDEFINED_CSN"==e?fv("visualElementShown",b,k):xr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?fv("visualElementShown",b,k):um("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&jv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Wr(m)}}for(c=a.m.length=0;c<a.C.length;c++){e=a.C[c];try{e()}catch(m){Wr(m)}}}
;function mv(){var a,b;return w(function(c){if(1==c.i)return a=jt().resolve(Ju),a?v(c,Eu(a),2):(Xr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Xr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Nq);Xr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var nv=y.caches,ov;function pv(a){var b=a.indexOf(":");return-1===b?{dc:a}:{dc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function qv(){return w(function(a){if(void 0!==ov)return a.return(ov);ov=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return ya(d,2),v(d,nv.open("test-only"),4);case 4:return v(d,nv.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(ov)})}
function rv(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return v(k,qv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,nv.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=pv(f),h=g.datasyncId,!h||a.includes(h)||b.push(nv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function sv(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return v(h,qv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=ym("cache contains other");return v(h,nv.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=pv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function tv(){try{return!!self.localStorage}catch(a){return!1}}
;function uv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function vv(a){if(tv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=uv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function wv(){if(!tv())return!1;var a=ym(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=uv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function xv(){mv().then(function(a){a&&(Jn(a),rv(a),vv(a))})}
function yv(){var a=new To;Xh.S(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=ym("clear");if(b.startsWith("V")){var g=[b];Jn(g);rv(g);vv(g);return f.return()}c=wv();return v(f,sv(),3);case 3:return d=f.j,v(f,Kn(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?xv():a.m.add("publicytnetworkstatus-online",xv,!0,void 0,void 0),f.i=0}})})}
;function zv(a){a&&(a.dataset?a.dataset[Av("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Bv(a,b){return a?a.dataset?a.dataset[Av(b)]:a.getAttribute("data-"+b):null}
var Cv={};function Av(a){return Cv[a]||(Cv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Dv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ev=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Fv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Dv,""),c=c.replace(Ev,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gv(a,b,c)}
function Gv(a,b,c){c=void 0===c?null:c;var d=Hv(a),e=document.getElementById(d),f=e&&Bv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Bq(d,b),b=""+Ra(b),Iv[b]=f),g||(e=Jv(a,d,function(){Bv(e,"loaded")||(zv(e),Eq(d),gl(Ya(Fq,d),0))},c)))}
function Jv(a,b,c,d){d=void 0===d?null:d;var e=kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gh(e,Jb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Kv(a){a=Hv(a);var b=document.getElementById(a);b&&(Fq(a),b.parentNode.removeChild(b))}
function Lv(a,b){a&&b&&(a=""+Ra(b),(a=Iv[a])&&Dq(a))}
function Hv(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Iv={};var Mv=[],Nv=!1;function Ov(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&Es()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!Fs(a)){var b=function(){Nv=!0;"google_ad_status"in window?Ek("DCLKSTAT",1):Ek("DCLKSTAT",2)};
try{Fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Mv.push(Xh.S(function(){if(!(Nv||"google_ad_status"in window)){try{Lv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Nv=!0;Ek("DCLKSTAT",3)}},5E3))}}}
function Pv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Sv(){this.state=1;this.i=null}
l=Sv.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Jb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Tv(this,e,
d,a.program,b,c)}else Xr(Error("Cannot initialize botguard without program"))};
function Tv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Fv(c,function(){window[g]?Uv(a,d,g,e):(a.state=3,Kv(c),Xr(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=kf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Uv(a,d,g,e):(a.state=4,Xr(new Q("Unable to load Botguard from JS")))):Xr(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.rb()};
function Uv(a,b,c,d){a.state=5;try{var e=new Ch({program:b,globalName:c});e.md.then(function(){a.state=6;d&&d(b)});
a.Bb(e)}catch(f){a.state=7,f instanceof Error&&Xr(f)}}
l.invoke=function(a){a=void 0===a?{}:a;var b=this.rb();if(b){var c={Ob:a};if(b.Wa)throw Error("Already disposed");a=Ah();var d;null!=(d=b.sa)&&d.j.i.Db("/client_streamz/bg/fsc",d.Aa);d=b.qd([c.Ob,c.od]);null!=(b=b.sa)&&(a=Ah()-a,b.l.i.hb("/client_streamz/bg/fsl",a,b.Aa));b=d}else b=null;return b};
l.dispose=function(){this.Eb()};
l.Eb=function(){this.Bb(null);this.state=8};
l.rb=function(){return this.i};
l.Bb=function(a){pe(this.i);this.i=a};function Vv(){Sv.apply(this,arguments)}
r(Vv,Sv);Vv.prototype.Eb=function(){this.state=8};
Vv.prototype.rb=function(){return B("yt.abuse.playerAttLoader")};
Vv.prototype.Bb=function(a){pe(B("yt.abuse.playerAttLoader"));z("yt.abuse.playerAttLoader",a)};var Wv=new Vv;var Xv=new Sv;function Yv(){return M("use_player_abuse_bg_library")?Wv.isInitialized():Xv.isInitialized()}
function Zv(a){a=void 0===a?{}:a;M("use_player_abuse_bg_library")?(a=void 0===a?{}:a,a=Wv.invoke(a)):a=Xv.invoke(a);return a}
;function $v(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?jm():d;this.m=c;this.l=d;this.j=new Bh;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ca:a.Ca,Na:a.Na},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Na=d;a.Ca=e;d=function(f){return function(){f.Ca.ub();b.i[f.Na].eb=!0;b.i.every(function(g){return!0===g.eb})&&b.j.resolve()}}(a);
e=fm(d,aw(this,a.Ca));this.i[a.Na]=Object.assign({},a.Ca,{ub:d,Za:e})}}
function bw(a){var b=Array.from(a.i.keys()).sort(function(d,e){return aw(a,a.i[e])-aw(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Za||c.eb||(a.l.fa(c.Za),fm(c.ub,10))}
$v.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Za||b.eb||this.l.fa(b.Za),b.eb=!0;this.j.resolve()};
function aw(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function cw(a){this.state=a;this.plugins=[];this.s=void 0}
cw.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
cw.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&(bw(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(dw(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function dw(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
jm();var g={};e=p(e);for(var h=e.next();!h.done;g={Oa:g.Oa},h=e.next())g.Oa=h.value,hm(function(k){return function(){k.Oa.callback.apply(k.Oa,ia(d))}}(g));
f=f.map(function(k){var m;return{ub:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new $v(f))}}
fa.Object.defineProperties(cw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function ew(a){cw.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.C=[{from:"document_active",F:"document_disposed_preventable",action:this.N},{from:"document_active",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"flush_logs",action:this.o},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.o},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(ew,cw);ew.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ew.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
ew.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
ew.prototype.j=function(){this.i=new Map};function fw(a){cw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.m},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.o},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.o},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.m},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.m},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(fw,cw);fw.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
fw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
fw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
fw.prototype.o=function(a,b){a(null==b?void 0:b.event)};function gw(){this.i=new ew;this.j=new fw}
gw.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function hw(){gw.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var iw;r(hw,gw);hw.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new sj,b=os();b&&a.V(b);b=new Sj;Zd(b,sj,380,nk,a);wr(b);M("web_fp_via_jspb_and_json")&&um("finalPayload",{csn:os()})}else um("finalPayload",{csn:os()})};
hw.prototype.l=function(){as(bs)};function jw(){}
jw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new jw,z("ytglobal.storage_",a));return a};
jw.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(kw()):d.return()})};
function kw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",jw);function sm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Hk("ytidb_transaction_ended_event_rate_limit",.02)}
sm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":lw(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function lw(a,b){jw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:mw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:mw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function mw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function nw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
r(nw,J);nw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ok(d)}}};
nw.prototype.D=function(){window.removeEventListener("message",this.v);J.prototype.D.call(this)};function ow(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new nw(!!L("WIDGET_ID_ENFORCE")),b=this.Yc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=ow.prototype;l.Yc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,pw(this,a)),this.l[a]=!0)):this.Fb(a,b,c)};
l.Fb=function(){};
function pw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Kc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.pb());this.sendMessage("onReady");fb(this.j,this.lc,this);this.j=[]};
l.pb=function(){return null};
function qw(a,b){a.sendMessage("infoDelivery",b)}
l.lc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.lc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var rw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function sw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function tw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(rw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function uw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function vw(a){ow.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.jd.bind(this));this.addEventListener("onVolumeChange",this.kd.bind(this));this.addEventListener("onApiChange",this.dd.bind(this));this.addEventListener("onPlaybackQualityChange",this.fd.bind(this));this.addEventListener("onPlaybackRateChange",this.gd.bind(this));this.addEventListener("onStateChange",this.hd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.ld.bind(this))}
r(vw,ow);l=vw.prototype;
l.Fb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&sw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=tw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=tw(e);break;case "loadPlaylist":case "cuePlaylist":e=uw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);sw(a)&&qw(this,this.pb())}};
l.onReady=function(){var a=this.Kc.bind(this);this.i.j=a;a=this.api.getVideoData();a.isPlayable||this.sendMessage("onError",a.errorCode)};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.pb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.hd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());qw(this,a)};
l.fd=function(a){qw(this,{playbackQuality:a})};
l.gd=function(a){qw(this,{playbackRate:a})};
l.dd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.kd=function(){qw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.jd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());qw(this,a)};
l.ld=function(){var a={sphericalProperties:this.api.getSphericalProperties()};qw(this,a)};
l.dispose=function(){ow.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function ww(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.fc,this)}
r(ww,J);l=ww.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.va("RECEIVING"))};
l.va=function(a,b){this.started&&!this.i()&&this.connection.va(a,b)};
l.fc=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=xw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=yw(a,c))&&this.va(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.ed.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.ed=function(a,b){this.started&&!this.i()&&this.connection.va(a,this.ob(a,b))};
l.ob=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||vi(a.j,"command",this.fc,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function zw(a,b){ww.call(this,b);this.api=a;this.start()}
r(zw,ww);zw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
zw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function xw(a,b){switch(a){case "loadVideoById":return a=tw(b),[a];case "cueVideoById":return a=tw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=uw(b),[a];case "cuePlaylist":return a=uw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function yw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
zw.prototype.ob=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ww.prototype.ob.call(this,a,b)};
zw.prototype.D=function(){ww.prototype.D.call(this);delete this.api};function Aw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);re(this,this.j)}
Za(Aw,J);Aw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Aw.prototype.m=function(a,b){this.i()||this.j.qa.apply(this.j,arguments)};function Bw(a,b,c){Aw.call(this);this.l=a;this.destination=b;this.id=c}
r(Bw,Aw);Bw.prototype.va=function(a,b){this.i()||this.l.va(this.destination,this.id,a,b)};
Bw.prototype.D=function(){this.destination=this.l=null;Aw.prototype.D.call(this)};function Cw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=oq(window,"message",this.l.bind(this));this.connection=new Bw(this,a,b);re(this,this.connection)}
r(Cw,J);Cw.prototype.va=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
Cw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
Cw.prototype.D=function(){pq(this.j);this.destination=null;J.prototype.D.call(this)};function Dw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Dw.prototype.clone=function(){var a=new Dw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=vb(c):a[b]=c}return a};var Ew=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Fw(a){a=a||"";if(window.spf){var b=a.match(Ew);spf.style.load(a,b?b[1]:"",void 0)}else Gw(a)}
function Gw(a){var b=Hw(a),c=document.getElementById(b),d=c&&Bv(c,"loaded");d||c&&!d||(c=Iw(a,b,function(){Bv(c,"loaded")||(zv(c),Eq(b),gl(Ya(Fq,b),0))}))}
function Iw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Hw(a){var b=kf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Jw(){J.call(this);this.j=[]}
r(Jw,J);Jw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function Kw(){Jw.apply(this,arguments)}
r(Kw,Jw);function Lw(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.K=new K;this.j={};this.R=this.X=this.elementId=this.ra=this.config=null;this.P=!1;this.m=this.G=null;this.la={};this.Pa=["onReady"];this.lastError=null;this.Ea=NaN;this.J={};this.Qa=new Kw(this);this.T=0;this.l=this.o=a;re(this,this.K);Mw(this);Nw(this);re(this,this.Qa);c?this.T=gl(function(){e.loadNewVideoConfig(c)},0):d&&(Ow(this),Pw(this))}
r(Lw,J);l=Lw.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(hl(this.T),this.T=0);var b=a||{};b instanceof Dw||(b=new Dw(b));this.config=b;this.setConfig(a);Pw(this);this.isReady()&&Qw(this)}};
function Ow(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.ra=a;this.config=Rw(a);Ow(this);if(!this.X){var b;this.X=Sw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Qh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Qh(Number(a)||a))};
function Qw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Tw(a){var b=!0,c=Uw(a);c&&a.config&&(a=Vw(a),b=Bv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Pw(a){if(!a.i()&&!a.P){var b=Tw(a);if(b&&"html5"===(Uw(a)?"html5":null))a.R="html5",a.isReady()||Ww(a);else if(Xw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Ww(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Yw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Rw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Ww(a)};
a.P=!0;b?a.G():(Fv(Vw(a),a.G),(b=Zw(a))&&Fw(b),$w(a)&&!c&&z("yt.player.Application.create",null))}}}
function Uw(a){var b=jf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Ww(a){if(!a.i()){var b=Uw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Yw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}ax(a)}else a.Ea=gl(function(){Ww(a)},50)}}
function ax(a){Mw(a);a.da=!0;var b=Uw(a);if(b){a.s=bx(a,b,"addEventListener");a.W=bx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=bx(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Qw(a);a.X&&a.X(a.api);a.K.qa("onReady",a.api)}
function bx(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Xr(f))}}}
function Mw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&hl(Number(c));a.J={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function Nw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Eq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Eq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Sw(this,b);d&&(0<=eb(this.Pa,a)||this.j[a]||(b=cx(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&gl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Sw(this,b))&&vi(this.K,a,b)};
function Sw(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Wr(f)}};
a.la[b]=c}return c?c:null}
function cx(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=gl(function(){if(!a.i()){try{a.K.qa(b,null!=d?d:void 0)}catch(h){Xr(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
sb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Uw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Xw(a){a.cancel();Mw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Uw(a);b&&(Tw(a)||!$w(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.G&&Lv(Vw(this),this.G);hl(this.Ea);this.P=!1};
l.D=function(){Xw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Wr(b)}this.la=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.ra=this.config=this.api=null;delete this.o;delete this.l;J.prototype.D.call(this)};
function $w(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Vw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Zw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Yw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Uk(c||"","&")[b]}
function Rw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var dx={},ex="player_uid_"+(1E9*Math.random()>>>0);function fx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?jf(c):c;var e=ex+"_"+Ra(c),f=dx[e];if(f&&d)return gx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Lw(c,e,a,b);dx[e]=f;Eq("player-added",f.api);se(f,function(){delete dx[f.getId()]});
return f.api}
function gx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var hx=null,ix=null,jx=null;function kx(){lx()}
function mx(){lx()}
function lx(){var a=hx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function nx(){hx&&hx.sendAbandonmentPing&&hx.sendAbandonmentPing();L("PL_ATT")&&(M("use_player_abuse_bg_library")?Wv.dispose():Xv.dispose());for(var a=Xh,b=0,c=Mv.length;b<c;b++)a.fa(Mv[b]);Mv.length=0;Kv("//static.doubleclick.net/instream/ad_status.js");Nv=!1;Ek("DCLKSTAT",0);qe(jx,ix);hx&&(hx.removeEventListener("onVideoDataChange",kx),hx.destroy())}
;function ox(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;Es()&&xl(a,b,c)}
;function px(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:os()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
ox(d,b,h)}else ox(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var t=void 0===t?Ph:t;a:{t=void 0===t?Ph:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof Nh&&m.isValid(a)){t=new Ob(a,Pb);break a}t=void 0}t=t||Sb;if(t instanceof Ob)var x=Qb(t);else{b:if(Fh){try{x=new URL(t)}catch(u){x="https:";break b}x=x.protocol}else c:{x=document.createElement("a");try{x.href=t}catch(u){x=void 0;
break c}x=x.protocol;x=":"===x||""===x?"https:":x}x="javascript:"!==x?t:void 0}void 0!==x&&(c.href=x)}return!0}
;z("yt.setConfig",Ek);z("yt.config.set",Ek);z("yt.setMsg",ts);z("yt.msgs.set",ts);z("yt.logging.errors.log",Wr);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Os(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Zk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));pu();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=Zk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}hx=fx(a,c);hx.addEventListener("onVideoDataChange",kx);hx.addEventListener("onReady",mx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?jx=new vw(hx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ix=new Cw(window.parent,a,b),jx=new zw(hx,ix.connection));Ov();M("ytidb_create_logger_embed_killswitch")||rm();a={};iw||(iw=new hw);iw.install((a.flush_logs=
{callback:function(){cr()}},a));
M("embeds_web_enable_new_nwl")?$o():hp();M("ytidb_clear_embedded_player")&&Xh.S(function(){var e;if(!Yu){var f=jt(),g={yb:Xu,pc:Wu};f.providers.set(g.yb,g);g={Nb:{feedbackEndpoint:kt(Su),modifyChannelNotificationPreferenceEndpoint:kt(Tu),playlistEditEndpoint:kt(Uu),subscribeEndpoint:kt(Qu),unsubscribeEndpoint:kt(Ru),webPlayerShareEntityServiceEndpoint:kt(Vu)}};var h=M("web_enable_client_location_service")?Xs.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Ps.i||(Ps.i=new Ps);var m=
Ps.i}void 0===e&&(e=f.resolve(Xu));Du(g,e,m,k);m={yb:Ju,qc:Cu.i};f.providers.set(m.yb,m);Yu=f.resolve(Ju)}yv()})});
var qx=Mk(function(){wu();var a=Bl.getInstance(),b=El(119),c=1<window.devicePixelRatio;if(document.body&&ii(document.body,"exp-invert-logo"))if(c&&!ii(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ii(d,"inverted-hdpi")){var e=gi(d);hi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ii(document.body,"inverted-hdpi")&&ji();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Fl(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Al[b]:(c=d.toString(16),
Al[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in Al)d.push(f+"="+encodeURIComponent(String(Al[f])));xl(b,d.join("&"),63072E3,a.j,c)}hv.i||(hv.i=new hv);a=hv.i;f=16623;var g=void 0===g?{}:g;Object.values(us).includes(f)||(Xr(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Qb?kv(a,f,g):lv(a,f,g)}),rx=Mk(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?
nx():a.persisted||nx()}),sx=Mk(nx);
window.addEventListener?(window.addEventListener("load",qx),window.addEventListener("pagehide",rx)):window.attachEvent&&(window.attachEvent("onload",qx),window.attachEvent("onunload",sx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Yv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Zv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Pv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||px);
z("yt.util.activity.init",B("yt.util.activity.init")||tq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||wq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||uq);}).call(this);
