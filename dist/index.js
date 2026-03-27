"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-snanvarianceyc/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,a,t){return f(x(p(e,r,a,t)))}s.exports=j
});var q=i(function(z,v){
var m=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/stats-base-snanvarianceyc/dist').ndarray,R=require('@stdlib/math-base-special-sqrt/dist');function T(e,r,a,t,l){return m(R(F(e,r,a,t,l)))}v.exports=T
});var y=i(function(A,c){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),E=q();_(o,"ndarray",E);c.exports=o
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),n,d=b(O(__dirname,"./native.js"));g(d)?n=h:n=d;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
