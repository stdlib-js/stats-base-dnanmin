"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(A,f){
var x=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist');function R(r,e,n,q){var u,t,i,a;if(r<=0)return NaN;if(r===1||n===0)return e[q];for(t=q,a=0;a<r&&(i=e[t],i!==i);a++)t+=n;if(a===r)return NaN;for(u=i,a+=1,a;a<r;a++)t+=n,i=e[t],!x(i)&&(i<u||i===u&&l(i))&&(u=i);return u}f.exports=R
});var c=v(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=s();function g(r,e,n){return b(r,e,n,_(r,n))}m.exports=g
});var y=v(function(C,p){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),E=s();k(d,"ndarray",E);p.exports=d
});var O=require("path").join,Z=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),o,j=Z(O(__dirname,"./native.js"));h(j)?o=w:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
