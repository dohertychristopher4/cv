import{s as J,n as F,c as K}from"../chunks/scheduler.OG9kUcL4.js";import{S as L,i as N,e as r,s as H,t as I,c as i,a as d,k as O,f as S,b as V,d as p,l as G,g as Q,h as t,j}from"../chunks/index.cNwEqVHJ.js";import{c as R}from"../chunks/stores.BAe2n-60.js";function T(o){let e,n,h="About Me",v,_,f=o[0].personalDetails.name+"",C,k,s,m,u=o[0].personalDetails.address+"",P,q,D,b=o[0].personalDetails.email+"",$,x,E,g=o[0].personalDetails.about+"",z;return{c(){e=r("div"),n=r("h1"),n.textContent=h,v=H(),_=r("h2"),C=I(f),k=H(),s=r("div"),m=r("p"),P=I(u),q=H(),D=r("p"),$=I(b),x=H(),E=r("p"),z=I(g),this.h()},l(l){e=i(l,"DIV",{class:!0});var a=d(e);n=i(a,"H1",{"data-svelte-h":!0}),O(n)!=="svelte-hbz7zl"&&(n.textContent=h),v=S(a),_=i(a,"H2",{});var A=d(_);C=V(A,f),A.forEach(p),k=S(a),s=i(a,"DIV",{class:!0});var c=d(s);m=i(c,"P",{});var M=d(m);P=V(M,u),M.forEach(p),q=S(c),D=i(c,"P",{});var w=d(D);$=V(w,b),w.forEach(p),x=S(c),E=i(c,"P",{});var B=d(E);z=V(B,g),B.forEach(p),c.forEach(p),a.forEach(p),this.h()},h(){G(s,"class","card"),G(e,"class","card-container")},m(l,a){Q(l,e,a),t(e,n),t(e,v),t(e,_),t(_,C),t(e,k),t(e,s),t(s,m),t(m,P),t(s,q),t(s,D),t(D,$),t(s,x),t(s,E),t(E,z)},p(l,[a]){a&1&&f!==(f=l[0].personalDetails.name+"")&&j(C,f),a&1&&u!==(u=l[0].personalDetails.address+"")&&j(P,u),a&1&&b!==(b=l[0].personalDetails.email+"")&&j($,b),a&1&&g!==(g=l[0].personalDetails.about+"")&&j(z,g)},i:F,o:F,d(l){l&&p(e)}}}function U(o,e,n){let h;return K(o,R,v=>n(0,h=v)),[h]}class Z extends L{constructor(e){super(),N(this,e,U,T,J,{})}}export{Z as component};