import{s as V,n as q,c as x}from"../chunks/scheduler.OG9kUcL4.js";import{S as y,i as w,e as m,s as b,c as v,a as g,k as z,f as j,d as p,l as C,g as D,h as _,q as A,t as k,b as U,j as E}from"../chunks/index.DdQJlOfU.js";import{e as H}from"../chunks/each.D6YF6ztN.js";import{c as B}from"../chunks/stores.BAe2n-60.js";function I(r,e,a){const n=r.slice();return n[1]=e[a],n}function S(r){let e,a,n=r[1].technologiesUsed.join(", ")+"",c;return{c(){e=m("p"),a=k("Technologies Used: "),c=k(n),this.h()},l(o){e=v(o,"P",{class:!0});var t=g(e);a=U(t,"Technologies Used: "),c=U(t,n),t.forEach(p),this.h()},h(){C(e,"class","tech-used")},m(o,t){D(o,e,t),_(e,a),_(e,c)},p(o,t){t&1&&n!==(n=o[1].technologiesUsed.join(", ")+"")&&E(c,n)},d(o){o&&p(e)}}}function T(r){let e,a,n=r[1].name+"",c,o,t,l=r[1].description+"",h,s,u,i=r[1].technologiesUsed&&S(r);return{c(){e=m("div"),a=m("h2"),c=k(n),o=b(),t=m("p"),h=k(l),s=b(),i&&i.c(),u=b(),this.h()},l(d){e=v(d,"DIV",{class:!0});var f=g(e);a=v(f,"H2",{});var P=g(a);c=U(P,n),P.forEach(p),o=j(f),t=v(f,"P",{});var $=g(t);h=U($,l),$.forEach(p),s=j(f),i&&i.l(f),u=j(f),f.forEach(p),this.h()},h(){C(e,"class","card")},m(d,f){D(d,e,f),_(e,a),_(a,c),_(e,o),_(e,t),_(t,h),_(e,s),i&&i.m(e,null),_(e,u)},p(d,f){f&1&&n!==(n=d[1].name+"")&&E(c,n),f&1&&l!==(l=d[1].description+"")&&E(h,l),d[1].technologiesUsed?i?i.p(d,f):(i=S(d),i.c(),i.m(e,u)):i&&(i.d(1),i=null)},d(d){d&&p(e),i&&i.d()}}}function F(r){let e,a,n="Projects",c,o=H(r[0].projects),t=[];for(let l=0;l<o.length;l+=1)t[l]=T(I(r,o,l));return{c(){e=m("div"),a=m("h1"),a.textContent=n,c=b();for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var h=g(e);a=v(h,"H1",{"data-svelte-h":!0}),z(a)!=="svelte-136d6se"&&(a.textContent=n),c=j(h);for(let s=0;s<t.length;s+=1)t[s].l(h);h.forEach(p),this.h()},h(){C(e,"class","card-container")},m(l,h){D(l,e,h),_(e,a),_(e,c);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[h]){if(h&1){o=H(l[0].projects);let s;for(s=0;s<o.length;s+=1){const u=I(l,o,s);t[s]?t[s].p(u,h):(t[s]=T(u),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=o.length}},i:q,o:q,d(l){l&&p(e),A(t,l)}}}function G(r,e,a){let n;return x(r,B,c=>a(0,n=c)),[n]}class N extends y{constructor(e){super(),w(this,e,G,F,V,{})}}export{N as component};