// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";function n(r,n,s){var i,a,d,f;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(a=s<0?(1-r)*s:0,f=0;f<r&&(d=n[a])!=d;f++)a+=s;if(f===r)return NaN;for(i=d,f+=1;f<r;f++)d=n[a+=s],e(d)||(d<i||d===i&&t(d))&&(i=d);return i}function s(r,n,s,i){var a,d,f,o;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(d=i,o=0;o<r&&(f=n[d])!=f;o++)d+=s;if(o===r)return NaN;for(a=f,o+=1;o<r;o++)f=n[d+=s],e(f)||(f<a||f===a&&t(f))&&(a=f);return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
