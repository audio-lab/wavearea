var $e=Object.create;var ee=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty;var N=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ze=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of qe(t))!Ve.call(e,o)&&o!==r&&ee(e,o,{get:()=>t[o],enumerable:!(n=We(t,o))||n.enumerable});return e};var Ze=(e,t,r)=>(r=e!=null?$e(Ke(e)):{},ze(t||!e||!e.__esModule?ee(r,"default",{value:e,enumerable:!0}):r,e));var Ce=N((_t,be)=>{"use strict";be.exports=function(e){return!e||e.length<3?!1:e[0]===73&&e[1]===68&&e[2]===51||e[0]===255&&(e[1]===251||e[1]===250)}});var xe=N((Mt,Oe)=>{"use strict";Oe.exports=function(e){return!e||e.length<12?!1:e[0]===82&&e[1]===73&&e[2]===70&&e[3]===70&&e[8]===87&&e[9]===65&&e[10]===86&&e[11]===69}});var Se=N((Bt,Ae)=>{"use strict";Ae.exports=function(e){return!e||e.length<4?!1:e[0]===79&&e[1]===103&&e[2]===103&&e[3]===83}});var Te=N((Pt,Ee)=>{"use strict";Ee.exports=function(e){return!e||e.length<4?!1:e[0]===102&&e[1]===76&&e[2]===97&&e[3]===67}});var Re=N((jt,ke)=>{"use strict";ke.exports=function(e){return!e||e.length<8?!1:e[4]===102&&e[5]===116&&e[6]===121&&e[7]===112||e[0]===77&&e[1]===52&&e[2]===65&&e[3]===32}});var Le=N((Ut,Ne)=>{"use strict";Ne.exports=function(e){return e?Ce()(e)?"mp3":xe()(e)?"wav":Se()(e)?"oga":Te()(e)?"flac":Re()(e)?"m4a":!1:!1}});function I(){throw new Error("Cycle detected")}function $(){if(E>1)E--;else{for(var e,t=!1;B!==void 0;){var r=B;for(B=void 0,Z++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&ie(r))try{r.c()}catch(o){t||(e=o,t=!0)}r=n}}if(Z=0,E--,t)throw e}}function te(e){if(E>0)return e();E++;try{return e()}finally{$()}}var p=void 0,B=void 0,E=0,Z=0,F=0;function re(e){if(p!==void 0){var t=e.n;if(t===void 0||t.t!==p)return t={i:0,S:e,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:t},p.s!==void 0&&(p.s.n=t),p.s=t,e.n=t,32&p.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=p.s,t.n=void 0,p.s.n=t,p.s=t),t}}function w(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}w.prototype.h=function(){return!0};w.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};w.prototype.U=function(e){if(this.t!==void 0){var t=e.e,r=e.x;t!==void 0&&(t.x=r,e.e=void 0),r!==void 0&&(r.e=t,e.x=void 0),e===this.t&&(this.t=r)}};w.prototype.subscribe=function(e){var t=this;return G(function(){var r=t.value,n=32&this.f;this.f&=-33;try{e(r)}finally{this.f|=n}})};w.prototype.valueOf=function(){return this.value};w.prototype.toString=function(){return this.value+""};w.prototype.peek=function(){return this.v};Object.defineProperty(w.prototype,"value",{get:function(){var e=re(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){Z>100&&I(),this.v=e,this.i++,F++,E++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{$()}}}});function ne(e){return new w(e)}function ie(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function oe(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function ae(e){for(var t=e.s,r=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=r}function T(e){w.call(this,void 0),this.x=e,this.s=void 0,this.g=F-1,this.f=4}(T.prototype=new w).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===F))return!0;if(this.g=F,this.f|=1,this.i>0&&!ie(this))return this.f&=-2,!0;var e=p;try{oe(this),p=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return p=e,ae(this),this.f&=-2,!0};T.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}w.prototype.S.call(this,e)};T.prototype.U=function(e){if(this.t!==void 0&&(w.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};T.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};T.prototype.peek=function(){if(this.h()||I(),16&this.f)throw this.v;return this.v};Object.defineProperty(T.prototype,"value",{get:function(){1&this.f&&I();var e=re(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function se(e){return new T(e)}function le(e){var t=e.u;if(e.u=void 0,typeof t=="function"){E++;var r=p;p=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,H(e),n}finally{p=r,$()}}}function H(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,le(e)}function He(e){if(p!==this)throw new Error("Out-of-order effect");ae(this),p=e,this.f&=-2,8&this.f&&H(this),$()}function P(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}P.prototype.c=function(){var e=this.S();try{!(8&this.f)&&this.x!==void 0&&(this.u=this.x())}finally{e()}};P.prototype.S=function(){1&this.f&&I(),this.f|=1,this.f&=-9,le(this),oe(this),E++;var e=p;return p=this,He.bind(this,e)};P.prototype.N=function(){2&this.f||(this.f|=2,this.o=B,B=this)};P.prototype.d=function(){this.f|=8,1&this.f||H(this)};function G(e){var t=new P(e);try{t.c()}catch(r){throw t.d(),r}return t.d.bind(t)}Symbol.observable||=Symbol("observable");var ce=e=>e&&!!(e[Symbol.observable]||e[Symbol.asyncIterator]||e.call&&e.set||e.subscribe||e.then),Ge=new FinalizationRegistry(e=>e.call?.()),Xe=e=>e&&(()=>e.unsubscribe?.()),fe=(e,t,r,n,o,i)=>e&&(i=Xe((e[Symbol.observable]?.()||e).subscribe?.(t,r,n))||e.set&&e.call?.(o,t)||(e.then?.(a=>(!o&&t(a),n?.()),r)||(async a=>{try{for await(a of e){if(o)return;t(a)}n?.()}catch(s){r?.(s)}})())&&(a=>o=1),Ge.register(e,i),i);var Je=e=>e&&e.peek,X=e=>e&&e[ue],ue=Symbol("signal-struct");b.isStruct=X;function b(e,t){if(X(e)&&!t)return e;if(W(e)){let r=Object.create(t||Object.getPrototypeOf(e)),n={},o=Object.getOwnPropertyDescriptors(e);for(let i in o){let a=o[i];if(a.get){let s=n[i]=se(a.get.bind(r));Object.defineProperty(r,i,{get(){return s.value},set:a.set?.bind(r),configurable:!1,enumerable:!0})}else{let s=a.value,c=ce(s),f=n[i]=Je(s)?s:ne(c?void 0:W(s)?Object.seal(b(s)):Array.isArray(s)?b(s):s);c&&fe(s,h=>f.value=h),Object.defineProperty(r,i,{get(){return f.value},set(h){if(W(h)){if(W(f.value))try{Object.assign(f.value,h);return}catch{}f.value=Object.seal(b(h))}else Array.isArray(h)?f.value=b(h):f.value=h},enumerable:!0,configurable:!1})}}return Object.defineProperty(r,ue,{configurable:!1,enumerable:!1,value:!0}),r}if(Array.isArray(e)&&!X(e[0]))for(let r=0;r<e.length;r++)e[r]=b(e[r]);return e}function W(e){return e&&e.constructor===Object}function he(e,t,r,n){let o=new Map,i=new Map,a,s;for(a=0;a<t.length;a++)o.set(t[a],a);for(a=0;a<r.length;a++)i.set(r[a],a);for(a=s=0;a!==t.length||s!==r.length;){var c=t[a],f=r[s];if(c===null)a++;else if(r.length<=s)e.removeChild(t[a]),a++;else if(t.length<=a)e.insertBefore(f,t[a]||n),s++;else if(c===f)a++,s++;else{var h=i.get(c),u=o.get(f);h===void 0?(e.removeChild(t[a]),a++):u===void 0?(e.insertBefore(f,t[a]||n),s++):(e.insertBefore(t[u],t[a]||n),t[u]=null,u>a+1&&a++,s++)}}return r}var L={},Qe={},Ye={},de=e=>e===null?Qe:e===void 0?Ye:typeof e=="number"||e instanceof Number?L[e]||(L[e]=new Number(e)):typeof e=="string"||e instanceof String?L[e]||(L[e]=new String(e)):typeof e=="boolean"||e instanceof Boolean?L[e]||(L[e]=new Boolean(e)):e;var D={},C={};D.if=(e,t)=>{let r=document.createTextNode(""),n=[g(e,t,":if")],o=[e],i=e;for(;(i=e.nextElementSibling)&&i.hasAttribute(":else");)i.removeAttribute(":else"),(t=i.getAttribute(":if"))?(i.removeAttribute(":if"),i.remove(),o.push(i),n.push(g(e,t,":else :if"))):(i.remove(),o.push(i),n.push(()=>1));return e.replaceWith(i=r),a=>{let s=n.findIndex(c=>c(a));o[s]!=i&&((i[me]||i).replaceWith(i=o[s]||r),k(i,a))}};D.with=(e,t,r)=>{let n=g(e,t,"with");k(e,b(n(r),r))};var me=Symbol(":each");D.each=(e,t)=>{let r=et(t);if(!r)return q(new Error,e,t);let n=e[me]=document.createTextNode("");e.replaceWith(n);let o=g(e,r[2],":each"),i=e.getAttribute(":key"),a=i?g(null,i):null;e.removeAttribute(":key");let s=new WeakMap,c=new WeakMap,f=[];return h=>{let u=o(h);u?typeof u=="number"?u=Array.from({length:u},(y,O)=>[O,O+1]):Array.isArray(u)?u=u.map((y,O)=>[O+1,y]):typeof u=="object"?u=Object.entries(u):q(Error("Bad list value"),e,t,":each",u):u=[];let v=[],U=[];for(let[y,O]of u){let S,M,A=a?.({[r[0]]:O,[r[1]]:y});it(A)&&(A=de(A)),A==null?S=e.cloneNode(!0):(S=c.get(A))||c.set(A,S=e.cloneNode(!0)),v.push(S),A==null||!(M=s.get(A))?(M=b({[r[0]]:O,[r[1]]:y},h),A!=null&&s.set(A,M)):M[r[0]]=O,U.push(M)}he(n.parentNode,f,v,n),f=v;for(let y=0;y<v.length;y++)k(v[y],U[y])}};function et(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,o=e.match(n);if(!o)return;let i=o[2].trim(),a=o[1].replace(r,"").trim(),s=a.match(t);return s?[a.replace(t,"").trim(),s[1].trim(),i]:[a,"",i]}C.ref=(e,t,r)=>{r[t]=e};C.id=(e,t)=>{let r=g(e,t,":id"),n=o=>e.id=o||o===0?o:"";return o=>n(r(o))};C.class=(e,t)=>{let r=g(e,t,":class"),n=e.className;return o=>{let i=r(o),a=typeof i=="string"?i:(Array.isArray(i)?i:Object.entries(i).map(([s,c])=>c?s:"")).filter(Boolean).join(" ");e.className=[n,a].filter(Boolean).join(" ")}};C.style=(e,t)=>{let r=g(e,t,":style"),n=e.getAttribute("style")||"";return n.endsWith(";")||(n+="; "),o=>{let i=r(o);if(typeof i=="string")e.setAttribute("style",n+i);else{e.setAttribute("style",n);for(let a in i)e.style.setProperty(a,i[a])}}};C.text=(e,t)=>{let r=g(e,t,":text");return n=>{let o=r(n);e.textContent=o??""}};C.data=(e,t)=>{let r=g(e,t,":data");return n=>{let o=r(n);for(let i in o)e.dataset[i]=o[i]}};C.aria=(e,t)=>{let r=g(e,t,":aria"),n=o=>{for(let i in o)K(e,"aria-"+ye(i),o[i]==null?null:o[i]+"")};return o=>n(r(o))};C[""]=(e,t)=>{let r=g(e,t,":");if(r)return n=>{let o=r(n);for(let i in o)K(e,ye(i),o[i])}};C.value=(e,t)=>{let r=g(e,t,":value"),n,o,i=e.type==="text"||e.type===""?a=>e.setAttribute("value",e.value=a??""):e.tagName==="TEXTAREA"||e.type==="text"||e.type===""?a=>(n=e.selectionStart,o=e.selectionEnd,e.setAttribute("value",e.value=a??""),n&&e.setSelectionRange(n,o)):e.type==="checkbox"?a=>(e.value=a?"on":"",K(e,"checked",a)):e.type==="select-one"?a=>{for(let s in e.options)s.removeAttribute("selected");e.value=a,e.selectedOptions[0]?.setAttribute("selected","")}:a=>e.value=a;return a=>i(r(a))};C.on=(e,t)=>{let r=g(e,t,":on");return n=>{let o=r(n),i=[];for(let a in o)i.push(ve(e,a,o[a]));return()=>{for(let a of i)a()}}};var ge=(e,t,r,n)=>{let o=n.startsWith("on")&&n.slice(2),i=g(e,t,":"+n);if(i)return o?a=>{let s=i(a)||(()=>{});return ve(e,o,s)}:a=>K(e,n,i(a))},ve=(e,t,r)=>{if(!r)return;let n=t.split("..").map(s=>{let c={evt:"",target:e,test:()=>!0};return c.evt=(s.startsWith("on")?s.slice(2):s).replace(/\.(\w+)?-?([-\w]+)?/g,(f,h,u="")=>(c.test=tt[h]?.(c,...u.split("-"))||c.test,"")),c});if(n.length==1)return a(r,n[0]);let o=(s,c=0)=>{let f;return f=a(u=>{c&&f();let v=s.call(e,u);typeof v!="function"&&(v=()=>{}),c+1<n.length&&o(v,c?c+1:1)},n[c])},i=o(r);return()=>i();function a(s,{evt:c,target:f,test:h,defer:u,stop:v,prevent:U,...y}){u&&(s=u(s));let O=S=>h(S)&&(v&&S.stopPropagation(),U&&S.preventDefault(),s.call(f,S));return f.addEventListener(c,O,y),()=>f.removeEventListener(c,O,y)}},tt={prevent(e){e.prevent=!0},stop(e){e.stop=!0},once(e){e.once=!0},passive(e){e.passive=!0},capture(e){e.capture=!0},window(e){e.target=window},document(e){e.target=document},toggle(e){e.defer=(t,r)=>n=>r?(r.call?.(e.target,n),r=null):r=t()},throttle(e,t){e.defer=r=>rt(r,t?Number(t)||0:108)},debounce(e,t){e.defer=r=>nt(r,t?Number(t)||0:108)},outside:e=>t=>{let r=e.target;return!(r.contains(t.target)||t.target.isConnected===!1||r.offsetWidth<1&&r.offsetHeight<1)},self:e=>t=>t.target===e.target,ctrl:(e,...t)=>r=>d.ctrl(r)&&t.every(n=>d[n]?d[n](r):r.key===n),shift:(e,...t)=>r=>d.shift(r)&&t.every(n=>d[n]?d[n](r):r.key===n),alt:(e,...t)=>r=>d.alt(r)&&t.every(n=>d[n]?d[n](r):r.key===n),meta:(e,...t)=>r=>d.meta(r)&&t.every(n=>d[n]?d[n](r):r.key===n),arrow:e=>d.arrow,enter:e=>d.enter,escape:e=>d.escape,tab:e=>d.tab,space:e=>d.space,backspace:e=>d.backspace,delete:e=>d.delete,digit:e=>d.digit,letter:e=>d.letter,character:e=>d.character},d={ctrl:e=>e.ctrlKey||e.key==="Control"||e.key==="Ctrl",shift:e=>e.shiftKey||e.key==="Shift",alt:e=>e.altKey||e.key==="Alt",meta:e=>e.metaKey||e.key==="Meta"||e.key==="Command",arrow:e=>e.key.startsWith("Arrow"),enter:e=>e.key==="Enter",escape:e=>e.key.startsWith("Esc"),tab:e=>e.key==="Tab",space:e=>e.key==="\xA0"||e.key==="Space"||e.key===" ",backspace:e=>e.key==="Backspace",delete:e=>e.key==="Delete",digit:e=>/^\d$/.test(e.key),letter:e=>/^[a-zA-Z]$/.test(e.key),character:e=>/^\S$/.test(e.key)},rt=(e,t)=>{let r,n,o=i=>{r=!0,setTimeout(()=>{if(r=!1,n)return n=!1,o(i),e(i)},t)};return i=>r?n=!0:(o(i),e(i))},nt=(e,t)=>{let r;return n=>{clearTimeout(r),r=setTimeout(()=>{r=null,e(n)},t)}},K=(e,t,r)=>{r==null||r===!1?e.removeAttribute(t):e.setAttribute(t,r===!0?"":typeof r=="number"||typeof r=="string"?r:"")},pe={};function g(e,t,r){let n=pe[t];if(!n){let o=/^[\n\s]*if.*\(.*\)/.test(t)||/\b(let|const)\s/.test(t)?`(() => { ${t} })()`:t;try{n=pe[t]=new Function("__scope",`with (__scope) { return ${o.trim()} };`)}catch(i){return q(i,e,t,r)}}return o=>{let i;try{i=n.call(e,o)}catch(a){return q(a,e,t,r)}return i}}function q(e,t,r,n){Object.assign(e,{element:t,expression:r}),console.warn(`\u2234 ${e.message}

${n}=${r?`"${r}"

`:""}`,t),setTimeout(()=>{throw e},0)}function ye(e){return e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,t=>"-"+t.toLowerCase())}function it(e){return typeof e=="string"||typeof e=="boolean"||typeof e=="number"}var j=new WeakMap;function k(e,t){if(!e.children)return;if(j.has(e)){let i=j.get(e);return te(()=>Object.assign(i,t)),i}let r=b(t||{}),n=[],o=(i,a=i.parentNode)=>{for(let s in D){let c=":"+s;if(i.hasAttribute?.(c)){let f=i.getAttribute(c);if(i.removeAttribute(c),n.push(D[s](i,f,r,s)),j.has(i)||i.parentNode!==a)return!1}}if(i.attributes)for(let s=0;s<i.attributes.length;){let c=i.attributes[s];if(c.name[0]!==":"){s++;continue}i.removeAttribute(c.name);let f=c.value,h=c.name.slice(1).split(":");for(let u of h){let v=C[u]||ge;if(n.push(v(i,f,r,u)),j.has(i)||i.parentNode!==a)return!1}}for(let s=0,c;c=i.children[s];s++)o(c,i)===!1&&s--};o(e);for(let i of n)if(i){let a;G(()=>{typeof a=="function"&&a(),a=i(r)})}return Object.seal(r),j.set(e,r),r}var we=k;var at=Ze(Le());var J=e=>new Promise((t,r)=>{let n=new FileReader;n.addEventListener("loadend",o=>{t(o.target.result)}),n.addEventListener("error",r),n.readAsArrayBuffer(e)});function Q(e,t){if(!t)return e.play(),()=>e.pause();t.start||=0,e.currentTime=t.start;let r=()=>{if(e.readyState===0)return;let s=e.preload==="auto";s&&(e.preload="none"),e.currentTime<0&&(e.currentTime=0),e.currentTime>t.end&&(e.currentTime=t.end),s&&(e.preload="auto")},n,o=()=>{if(clearInterval(n),e.currentTime>=t.end){if(e.loop){e.currentTime=t.start;return}e.pause(),e.dispatchEvent(new Event("ended"));return}e.currentTime+.2>t.end&&(n=setInterval(o,10))},i=()=>{e.currentTime>=t.end&&(e.currentTime=t.start)};e.addEventListener("durationchange",r),e.addEventListener("seeking",r),e.addEventListener("timeupdate",o);let a=setInterval(o,50);return e.addEventListener("playing",i),e.play(),()=>{e.removeEventListener("durationchange",r),e.removeEventListener("seeking",r),e.removeEventListener("timeupdate",o),e.removeEventListener("playing",i),clearInterval(a),clearInterval(n),e.pause()}}history.scrollRestoration="manual";var _=document.querySelector(".wavearea"),x=_.querySelector(".w-editable"),Yt=_.querySelector(".w-played"),De=_.querySelector(".w-timecodes"),st=_.querySelector(".w-play"),Pe=_.querySelector(".w-caret-line"),m=new Audio,_e=new Worker("./dist/worker.js",{type:"module"}),lt=new AudioContext,l=we(_,{isMouseDown:!1,loading:!1,recording:!1,playing:!1,selecting:!1,scrolling:!1,clipStart:0,loop:!1,clipEnd:null,_startTimeOffset:0,volume:1,segments:[],total:0,duration:0,caretOffscreen:0,caretOffset:0,caretLine:0,cols:216,async handleCaret(){let e=R();e&&(l.caretOffset=e.start,l.updateCaretLine(),l.clipStart=l.caretOffset,l.playing?l._startTimeOffset=l.caretOffset:(l.clipEnd=e.collapsed?l.total:e.end,l.loop=m.loop=!e.collapsed),m.currentTime=l.duration*l.caretOffset/l.total)},async handleBeforeInput(e){let t=ct[e.inputType];t?t.call(this,e):e.preventDefault()},async handleDrop(e){let r=e.dataTransfer.files[0];if(!r.type.startsWith("audio"))return!1;l.loading=!0,l.segments=[];let n=await J(r),o=await decodeAudio(n),i=await encodeAudio(o),a=new Blob([i],{type:"audio/wav"}),s=URL.createObjectURL(a);return await applyOp(["src",s]),l.loading=!1,n},async handleFile(e){l.loading="Decoding";let t=e.target.files[0],r=await J(t),n=await lt.decodeAudioData(r),o=Array.from({length:n.numberOfChannels},i=>n.getChannelData(i));await Ue(["file",{file:t,numberOfChannels:n.numberOfChannels,sampleRate:n.sampleRate,length:n.length,channelData:o}]),l.loading=!1},scrollIntoCaret(){l.caretOffscreen&&!l.scrolling&&(Pe.scrollIntoView({behavior:"smooth",block:"center"}),l.scrolling=!0,setTimeout(()=>l.scrolling=!1,500))},play(e){l.playing=!0,x.focus(),l.caretOffset===l.total&&R(l.caretOffset=l.clipStart=0),l.scrollIntoCaret();let{clipStart:t,clipEnd:r,loop:n}=l,o=()=>st.click(),i,a;l._startTimeOffset=l.caretOffset;let s=()=>{i=performance.now()*.001,cancelAnimationFrame(a),c()},c=()=>{let h=performance.now()*.001-i,u=Math.min(l._startTimeOffset+Math.round(l.total*h/l.duration),l.total);n&&(u=Math.min(u,r)),R(l.caretOffset=u),l.updateCaretLine(),l.scrollIntoCaret(),a=requestAnimationFrame(c)};m.addEventListener("playing",s),m.addEventListener("seeked",s);let f=Q(m,l.loop&&{start:l.duration*l.clipStart/l.total,end:l.duration*l.clipEnd/l.total});return m.addEventListener("ended",o,{once:!0}),()=>{m.removeEventListener("ended",o),m.removeEventListener("seeked",s),m.removeEventListener("playing",s),cancelAnimationFrame(a),a=null,f(),l.playing=!1,l.loop?R(t,r):m.currentTime>=m.duration&&R(l.total),x.focus()}},async goto(e){try{await Y(e)}catch{await Ie()}R(l.caretOffset)},updateCaretLine(){let e=Math.floor(l.caretOffset/l.cols),t=R();!(l.caretOffset%l.cols)&&t.startNodeOffset===x.children[t.startNode.dataset.id].textContent.length&&e--,l.caretLine!==e&&(l.caretLine=e)},updateTimecodes(){if(De.replaceChildren(),!x.textContent)return;let e=0;for(let t of x.children){let r=Math.ceil(t.textContent.length/l.cols)||1;for(let n=0;n<r;n++){let o=document.createElement("a"),i=Be(n*(l.cols||0)+e);o.href=`#${i}`,o.textContent=i,De.appendChild(o)}e+=t.textContent.length}},timecode:Be}),ct={insertFromDrop(e){console.log("insert from drop",e)},async deleteContentBackward(e){let t=e.getTargetRanges()[0],r=t.startContainer.parentNode.closest(".w-segment"),n=t.endContainer.parentNode.closest(".w-segment"),o=Number(r.dataset.id),i=Number(n.dataset.id),a=t.startOffset+l.segments.slice(0,o).reduce((f,h)=>f+h.length,0),s=t.endOffset+l.segments.slice(0,i).reduce((f,h)=>f+h.length,0);this._deleteTimeout?(clearTimeout(this._deleteTimeout),this._deleteOp[1]--):this._deleteOp=["del",a,s];let c=()=>{Ue(this._deleteOp),this._deleteOp=this._deleteTimeout=null};this._deleteTimeout=setTimeout(c,280)}},R=(e,t)=>{let r=window.getSelection();if(e!=null){Array.isArray(e)&&(e=V(...e)),Array.isArray(t)&&(t=V(...t)),e=Math.max(0,e),t==null&&(t=e);let s=r.rangeCount?r.getRangeAt(0):new Range,[c,f]=Me(e),[h,u]=Me(t);return s.setStart(c,f),s.setEnd(h,u),r.addRange(s),{start:e,startNode:c,end:t,endNode:h,startNodeOffset:f,endNodeOffset:u,collapsed:r.isCollapsed}}if(!r.anchorNode||!x.contains(r.anchorNode))return;e=V(r.anchorNode,r.anchorOffset),t=V(r.focusNode,r.focusOffset);let n=r.anchorNode.parentNode.closest(".w-segment"),o=r.anchorOffset,i=r.focusNode.parentNode.closest(".w-segment"),a=r.focusOffset;return e>t&&([t,i,a,e,n,o]=[e,n,o,t,i,a]),{start:e,startNode:n,startNodeOffset:o,end:t,endNode:i,endNodeOffset:a,collapsed:r.isCollapsed}};function V(e,t){let r=e.parentNode.closest(".w-segment"),n=z(r.textContent.slice(0,t)).length;for(;r=r.previousSibling;)n+=z(r.textContent).length;return n}function Me(e){let t=x.firstChild,r;for(;e>(r=z(t.textContent).length);)e-=r,t=t.nextSibling;let n=0;for(let o=t.textContent,i=0;i<e;i++)for(;o[i+n]>="\u0300";)n++;return[t.firstChild,e+n]}function Be(e,t=0){let r=e/l?.total*l?.duration||0;return`${Math.floor(r/60).toFixed(0)}:${(Math.floor(r)%60).toFixed(0).padStart(2,0)}${t?`.${(r%1).toFixed(t).slice(2).padStart(t)}`:""}`}var ft=new IntersectionObserver(([e])=>{l.caretOffscreen=e.isIntersecting?0:e.intersectionRect.top<=e.rootBounds.top?1:e.intersectionRect.bottom>=e.rootBounds.bottom?-1:0},{threshold:.999,rootMargin:"0px"});ft.observe(Pe);var ut=new ResizeObserver(e=>{l.cols=je()});ut.observe(x);function je(){let e=new Range,t=x.firstChild.firstChild;if(!t?.textContent)return;let r=t.textContent;e.setStart(t,0),e.setEnd(t,1);let n=e.getClientRects()[0].y;for(var o=0,i=0;o<r.length;i++){let a=1;for(;r[o+a]>="\u0300";)a++;e.setStart(t,0),e.setEnd(t,o=o+a);let s=e.getClientRects();if(s[s.length-1].y>n)return i}return r.length}async function Ue(...e){let t=new URL(location);for(let n of e){let[o,...i]=n;i[0].file?t.searchParams.set(o,i[0].file.name):t.searchParams.has(o)?t.searchParams.set(o,`${t.searchParams.get(o)}..${i.join("-")}`):t.searchParams.append(o,i.join("-"))}l.loading="Processing";let r=await Fe(...e);return history.pushState(r,"",decodeURI(t)),l.loading=!1,x.textContent&&console.assert(r.segments.join("")===x.textContent,"Rendered waveform is different from UI"),Y(r)}function Fe(...e){return new Promise(t=>{_e.postMessage({id:history.state?.id||0,ops:e}),_e.addEventListener("message",r=>{t(r.data)},{once:!0})})}function z(e){return e.replace(/\u0300|\u0301/g,"")}function Y({url:e,segments:t,duration:r,offsets:n}){return l.total=t.reduce((o,i)=>o+=z(i).length,0),l.duration=r,l.segments=t,l.cols||(l.cols=je()),l.updateTimecodes(),m.src=e,m.load(),new Promise((o,i)=>{m.addEventListener("error",i),m.addEventListener("loadedmetadata",()=>{m.currentTime=r*l.caretOffset/l.total||0},{once:!0})})}async function Ie(e=new URL(location)){l.loading="Fetching";let t=[];for(let[n,o]of e.searchParams)t.push(...o.split("..").map(i=>[n,...n==="src"||n==="file"?[i]:i.split("-")]));let r=await Fe(...t);history.replaceState(r,"",decodeURI(e)),Y(r),l.loading=!1}location.search.length&&Ie();
//# sourceMappingURL=wavearea.js.map
