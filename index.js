// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).snanstdevyc=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Math.fround?Math.fround:null;var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,e,n,o,u;if(null==r)return v.call(r);e=r[_],u=_,t=null!=(o=r)&&d.call(o,u);try{r[_]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[_]=e:delete r[_],n}:function(r){return v.call(r)};var m=j,g="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null;var N,O="function"==typeof Float32Array?Float32Array:void 0;N=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,5e40]),e=t,r=(g&&e instanceof Float32Array||"[object Float32Array]"===m(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===w}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var E=new N(1);var A="function"==typeof p?p:function(r){return E[0]=r,E[0]};var S=/./;function F(r){return"boolean"==typeof r}var P=Boolean.prototype.toString;var T=b();function q(r){return"object"==typeof r&&(r instanceof Boolean||(T?function(r){try{return P.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function B(r){return F(r)||q(r)}function I(){return new Function("return this;")()}y(B,"isPrimitive",F),y(B,"isObject",q);var x="object"==typeof self?self:null,M="object"==typeof window?window:null,V="object"==typeof global?global:null;var k=function(r){if(arguments.length){if(!F(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return I()}if(x)return x;if(M)return M;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),C=k.document&&k.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var R,$=/^\s*function\s*([^(]*)/i;y(L,"REGEXP",$),R=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var D=R;function J(r){return null!==r&&"object"==typeof r}var U=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!D(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(J);function X(r){var t,e,n,o;if(("Object"===(e=m(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=$.exec(n.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(J,"isObjectLikeArray",U);var Y="function"==typeof S||"object"==typeof G||"function"==typeof C?function(r){return X(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?X(r).toLowerCase():t};var z,H,K=Object.getPrototypeOf;H=Object.getPrototypeOf,z="function"===Y(H)?K:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Q=z;function W(r){return null==r?null:(r=Object(r),Q(r))}function Z(r,t,e,n){var o,u,i,a,f,c,l,y;if(r<=0)return NaN;if(1===r||0===n)return(f=e[0])==f&&r-t>0?0:NaN;for(u=n<0?(1-r)*n:0,y=0;y<r&&(f=e[u])!=f;y++)u+=n;if(y===r)return NaN;for(u+=n,o=f,a=0,y+=1,l=1;y<r;y++)(f=e[u])==f&&(l+=1,o=A(o+f),c=A(A(l*f)-o),a=A(a+A(A(A(1/(l*(l-1)))*c)*c))),u+=n;return(i=l-t)<=0?NaN:A(a/i)}y(Z,"ndarray",(function(r,t,e,n,o){var u,i,a,f,c,l,y,p;if(r<=0)return NaN;if(1===r||0===n)return(c=e[o])==c&&r-t>0?0:NaN;for(i=o,p=0;p<r&&(c=e[i])!=c;p++)i+=n;if(p===r)return NaN;for(i+=n,u=c,f=0,p+=1,y=1;p<r;p++)(c=e[i])==c&&(y+=1,u=A(u+c),l=A(A(y*c)-u),f=A(f+A(A(A(1/(y*(y-1)))*l)*l))),i+=n;return(a=y-t)<=0?NaN:A(f/a)}));var rr,tr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=W(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),er=rr=tr instanceof Error?Z:tr;const{ndarray:nr}=rr;var or=Math.sqrt;function ur(r,t,e,n){return A(or(er(r,t,e,n)))}return y(ur,"ndarray",(function(r,t,e,n,o){return A(or(nr(r,t,e,n,o)))})),ur}));
//# sourceMappingURL=index.js.map