(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function $(){}function T(e){return e()}function M(){return Object.create(null)}function E(e){e.forEach(T)}function q(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function I(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function J(e){return Object.keys(e).length===0}function z(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function L(){return F(" ")}function H(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function v(e,t,n){e.classList[n?"add":"remove"](t)}let S;function b(e){S=e}const g=[],O=[],x=[],P=[],R=Promise.resolve();let A=!1;function Y(){A||(A=!0,R.then(B))}function N(e){x.push(e)}const C=new Set;let w=0;function B(){const e=S;do{for(;w<g.length;){const t=g[w];w++,b(t),D(t.$$)}for(b(null),g.length=0,w=0;O.length;)O.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];C.has(n)||(C.add(n),n())}x.length=0}while(g.length);for(;P.length;)P.pop()();A=!1,C.clear(),b(e)}function D(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const G=new Set;function U(e,t){e&&e.i&&(G.delete(e),e.i(t))}function V(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||N(()=>{const l=e.$$.on_mount.map(T).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...l):E(l),e.$$.on_mount=[]}),i.forEach(N)}function W(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(g.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,o,r,i,l,_=[-1]){const a=S;b(e);const s=e.$$={fragment:null,ctx:[],props:i,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:M(),dirty:_,skip_bound:!1,root:t.target||a.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(c,u,...f)=>{const j=f.length?f[0]:u;return s.ctx&&r(s.ctx[c],s.ctx[c]=j)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](j),h&&X(e,c)),u}):[],s.update(),h=!0,E(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const c=Q(t.target);s.fragment&&s.fragment.l(c),c.forEach(p)}else s.fragment&&s.fragment.c();t.intro&&U(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),B()}b(a)}class ee{$destroy(){W(this,1),this.$destroy=$}$on(t,n){if(!q(n))return $;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){let t,n,o,r,i,l,_,a,s,h,c;return{c(){t=y("code"),t.textContent="Click on the green gun to fire!",n=L(),o=y("div"),r=y("div"),i=L(),l=y("audio"),l.innerHTML='<track kind="captions"/>',a=L(),s=y("a"),s.textContent="Checkout Svelte playlist",d(r,"class","bullet svelte-dl4efe"),v(r,"fire",e[0]),v(r,"reload",!e[0]),d(o,"class","gun svelte-dl4efe"),I(l.src,_="https://www.myinstants.com/media/sounds/m4a1_single-kibblesbob-8540445.mp3")||d(l,"src",_),d(l,"preload","auto"),l.controls=!0,d(l,"class","svelte-dl4efe"),d(s,"href","https://www.youtube.com/playlist?list=PLm_Qt4aKpfKi7J6Jc2OR7YLz1hEhC_4Mc"),d(s,"target","_blank"),d(s,"class","svelte-dl4efe")},m(u,f){m(u,t,f),m(u,n,f),m(u,o,f),z(o,r),m(u,i,f),m(u,l,f),e[3](l),m(u,a,f),m(u,s,f),h||(c=H(o,"click",e[2]),h=!0)},p(u,[f]){f&1&&v(r,"fire",u[0]),f&1&&v(r,"reload",!u[0])},i:$,o:$,d(u){u&&p(t),u&&p(n),u&&p(o),u&&p(i),u&&p(l),e[3](null),u&&p(a),u&&p(s),h=!1,c()}}}function ne(e,t,n){let o=!1,r;const i=()=>{n(0,o=!o),r.play(),setTimeout(()=>{n(0,o=!1),r.pause(),n(1,r.currentTime=0,r)},500)};function l(_){O[_?"unshift":"push"](()=>{r=_,n(1,r)})}return[o,r,i,l]}class re extends ee{constructor(t){super(),Z(this,t,ne,te,K,{})}}new re({target:document.getElementById("app")});
