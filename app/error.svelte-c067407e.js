import{S as r,i as s,s as a,e as t,t as e,c,a as n,g as o,d as u,f,F as l,h as p,k as m,l as d,n as i,L as h}from"./chunks/vendor-ac0f2cf7.js";function E(r){let s,a,m=r[1].frame+"";return{c(){s=t("pre"),a=e(m)},l(r){s=c(r,"PRE",{});var t=n(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].frame+"")&&p(a,m)},d(r){r&&u(s)}}}function k(r){let s,a,m=r[1].stack+"";return{c(){s=t("pre"),a=e(m)},l(r){s=c(r,"PRE",{});var t=n(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].stack+"")&&p(a,m)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,x,P,R,N,$=r[1].message+"",j=r[1].frame&&E(r),F=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=m(),g=t("pre"),x=e($),P=m(),j&&j.c(),R=m(),F&&F.c(),N=d()},l(t){s=c(t,"H1",{});var e=n(s);a=o(e,r[0]),e.forEach(u),v=i(t),g=c(t,"PRE",{});var f=n(g);x=o(f,$),f.forEach(u),P=i(t),j&&j.l(t),R=i(t),F&&F.l(t),N=d()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,x),f(r,P,t),j&&j.m(r,t),f(r,R,t),F&&F.m(r,t),f(r,N,t)},p(r,[s]){1&s&&p(a,r[0]),2&s&&$!==($=r[1].message+"")&&p(x,$),r[1].frame?j?j.p(r,s):(j=E(r),j.c(),j.m(R.parentNode,R)):j&&(j.d(1),j=null),r[1].stack?F?F.p(r,s):(F=k(r),F.c(),F.m(N.parentNode,N)):F&&(F.d(1),F=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(P),j&&j.d(r),r&&u(R),F&&F.d(r),r&&u(N)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function x(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}export default class extends r{constructor(r){super(),s(this,r,x,v,a,{status:0,error:1})}}export{g as load};
