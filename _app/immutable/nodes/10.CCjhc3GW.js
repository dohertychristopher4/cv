import{s as C,n as g,c as y}from"../chunks/scheduler.OG9kUcL4.js";import{S as D,i as E,e as u,s as S,c as d,a as p,k as $,f as I,d as _,l as v,g as q,h as m,u as L,t as j,b as H,j as P}from"../chunks/index.cNwEqVHJ.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{c as U}from"../chunks/stores.BAe2n-60.js";function k(o,e,a){const i=o.slice();return i[1]=e[a],i}function b(o){let e,a=o[1]+"",i;return{c(){e=u("li"),i=j(a),this.h()},l(c){e=d(c,"LI",{class:!0});var n=p(e);i=H(n,a),n.forEach(_),this.h()},h(){v(e,"class","svelte-sdxqi7")},m(c,n){q(c,e,n),m(e,i)},p(c,n){n&1&&a!==(a=c[1]+"")&&P(i,a)},d(c){c&&_(e)}}}function V(o){let e,a,i="Skills",c,n,h=x(o[0].skills),l=[];for(let s=0;s<h.length;s+=1)l[s]=b(k(o,h,s));return{c(){e=u("div"),a=u("h1"),a.textContent=i,c=S(),n=u("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=d(s,"DIV",{class:!0});var r=p(e);a=d(r,"H1",{"data-svelte-h":!0}),$(a)!=="svelte-14einh2"&&(a.textContent=i),c=I(r),n=d(r,"UL",{class:!0});var t=p(n);for(let f=0;f<l.length;f+=1)l[f].l(t);t.forEach(_),r.forEach(_),this.h()},h(){v(n,"class","skill-set svelte-sdxqi7"),v(e,"class","skills svelte-sdxqi7")},m(s,r){q(s,e,r),m(e,a),m(e,c),m(e,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(s,[r]){if(r&1){h=x(s[0].skills);let t;for(t=0;t<h.length;t+=1){const f=k(s,h,t);l[t]?l[t].p(f,r):(l[t]=b(f),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=h.length}},i:g,o:g,d(s){s&&_(e),L(l,s)}}}function w(o,e,a){let i;return y(o,U,c=>a(0,i=c)),[i]}class G extends D{constructor(e){super(),E(this,e,w,V,C,{})}}export{G as component};