"use strict";var f=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var q=f(function(z,s){
var b=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-negative-zero/dist');function g(i,a,u){var v,n,e,r;if(i<=0)return NaN;if(i===1||u===0)return a[0];for(u<0?n=(1-i)*u:n=0,r=0;r<i&&(e=a[n],e!==e);r++)n+=u;if(r===i)return NaN;for(v=e,r+=1,r;r<i;r++)n+=u,e=a[n],!b(e)&&(e<v||e===v&&d(e))&&(v=e);return v}s.exports=g
});var c=f(function(A,m){
var k=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-assert-is-negative-zero/dist');function R(i,a,u,v){var n,e,r,t;if(i<=0)return NaN;if(i===1||u===0)return a[v];for(e=v,t=0;t<i&&(r=a[e],r!==r);t++)e+=u;if(t===i)return NaN;for(n=r,t+=1,t;t<i;t++)e+=u,r=a[e],!k(r)&&(r<n||r===n&&x(r))&&(n=r);return n}m.exports=R
});var j=f(function(B,y){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),_=c();Z(p,"ndarray",_);y.exports=p
});var E=require("path").join,N=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),h=j(),o,l=N(E(__dirname,"./native.js"));O(l)?o=h:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
