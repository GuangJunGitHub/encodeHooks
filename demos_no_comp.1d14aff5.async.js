(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+zIg":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("rDAX");t["default"]=()=>{var e=Object(u["a"])({hello:"world",count:0}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>a((e=>({count:e.count+1})))},"count + 1")))}},"0SLM":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("rDAX");t["default"]=()=>{var e=Object(u["a"])({hello:"world",count:0}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>a((e=>({count:e.count+1})))},"count + 1")))}},"1DhI":function(e,t,n){"use strict";var r=n("ahKI"),a=n("sJN1"),c=n("cxPF"),u=n("FBt5"),o=e=>{u["a"]&&(Object(c["a"])(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=Object(a["a"])(e);Object(r["useEffect"])((()=>()=>{t.current()}),[])};t["a"]=o},"25QV":function(e,t,n){"use strict";var r=n("ahKI"),a=()=>{var e=Object(r["useRef"])(!1);return Object(r["useEffect"])((()=>(e.current=!1,()=>{e.current=!0})),[]),e};t["a"]=a},"3lnb":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("nnHe");t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo3",{defaultValue:"Hello~",serializer:e=>null!==e&&void 0!==e?e:"",deserializer:e=>e}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{value:n||"",placeholder:"Please enter some words...",onChange:e=>a(e.target.value)}),c.a.createElement("button",{style:{margin:"0 8px"},type:"button",onClick:()=>a("Hello~")},"Reset"),c.a.createElement("button",{type:"button",onClick:()=>a(void 0)},"Clear"))}},"6H8H":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("DBVu"),a=n("GAyR"),c=n("ahKI"),u=n("cxPF");function o(e){return Object(u["a"])(e[Symbol.asyncIterator])}function l(e,t){Object(c["useEffect"])((()=>{var t=e(),n=!1;function c(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!o(t)){e.next=11;break}case 1:return e.next=4,t.next();case 4:if(a=e.sent,!a.done&&!n){e.next=7;break}return e.abrupt("break",9);case 7:e.next=1;break;case 9:e.next=13;break;case 11:return e.next=13,t;case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return c(),()=>n=!0}),t)}},"82LI":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])(),t=Object(r["a"])(e,2),n=t[0],a=t[1],o=a.toggle,l=a.setLeft,i=a.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a","".concat(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:l,style:{margin:"0 8px"}},"Toggle False"),c.a.createElement("button",{type:"button",onClick:i},"Toggle True")))}},"9n4Y":function(e,t,n){"use strict";n.r(t);var r=n("DBVu"),a=n("iojd");function c(e){this.wrapped=e}function u(e){return new c(e)}function o(e){var t,n;function r(e,r){return new Promise((function(c,u){var o={key:e,arg:r,resolve:c,reject:u,next:null};n?n=n.next=o:(t=n=o,a(e,r))}))}function a(t,n){try{var r=e[t](n),o=r.value,l=o instanceof c;Promise.resolve(l?o.wrapped:o).then((function(e){l?a("return"===t?"return":"next",e):u(r.done?"return":"normal",e)}),(function(e){a("throw",e)}))}catch(i){u("throw",i)}}function u(e,r){switch(e){case"return":t.resolve({value:r,done:!0});break;case"throw":t.reject(r);break;default:t.resolve({value:r,done:!1});break}t=t.next,t?a(t.key,t.arg):n=null}this._invoke=r,"function"!==typeof e["return"]&&(this["return"]=void 0)}function l(e){return function(){return new o(e.apply(this,arguments))}}o.prototype["function"===typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},o.prototype.next=function(e){return this._invoke("next",e)},o.prototype["throw"]=function(e){return this._invoke("throw",e)},o.prototype["return"]=function(e){return this._invoke("return",e)};var i=n("ahKI"),s=n.n(i),b=n("6H8H"),f=e=>new Promise((t=>{setTimeout((()=>{t(e.length>0)}),1e3)}));t["default"]=()=>{var e=Object(i["useState"])(""),t=Object(a["a"])(e,2),n=t[0],c=t[1],o=Object(i["useState"])(),m=Object(a["a"])(o,2),v=m[0],d=m[1];return Object(b["a"])(l(Object(r["a"])().mark((function e(){var t;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d(void 0),e.next=3,u(f(n));case 3:return t=e.sent,void(e.next=6);case 6:d(t);case 7:case"end":return e.stop()}}),e)}))),[n]),s.a.createElement("div",null,s.a.createElement("input",{value:n,onChange:e=>c(e.target.value)}),s.a.createElement("p",null,void 0===v&&"checking"),s.a.createElement("p",null,!1===v&&"fail"),s.a.createElement("p",null,v&&"passed"))}},Axl5:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a);function u(e){var t=Object(a["useState"])(e),n=Object(r["a"])(t,2),c=n[0],u=n[1],o=Object(a["useRef"])(c);o.current=c;var l=Object(a["useCallback"])((()=>o.current),[]);return[c,u,l]}var o=u;t["default"]=()=>{var e=o(0),t=Object(r["a"])(e,3),n=t[0],u=t[1],l=t[2];return Object(a["useEffect"])((()=>{var e=setInterval((()=>{console.log("interval count",l())}),3e3);return()=>{clearInterval(e)}}),[]),c.a.createElement("button",{onClick:()=>u((e=>e+1))},"count: ",n)}},BQeK:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("pYEw");function o(e){var t=()=>new Map(e),n=Object(a["useState"])(t),c=Object(r["a"])(n,2),o=c[0],l=c[1],i=(e,t)=>{l((n=>{var r=new Map(n);return r.set(e,t),r}))},s=e=>{l(new Map(e))},b=e=>{l((t=>{var n=new Map(t);return n.delete(e),n}))},f=()=>l(t()),m=e=>o.get(e);return[o,{set:Object(u["a"])(i),setAll:Object(u["a"])(s),remove:Object(u["a"])(b),reset:Object(u["a"])(f),get:Object(u["a"])(m)}]}var l=o;t["default"]=()=>{var e=l([["msg","hello world"],[123,"number type"]]),t=Object(r["a"])(e,2),n=t[0],a=t[1],u=a.set,o=a.setAll,i=a.remove,s=a.reset,b=a.get;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:()=>u(String(Date.now()),(new Date).toJSON())},"Add"),c.a.createElement("button",{type:"button",onClick:()=>o([["text","this is a new Map"]]),style:{margin:"0 8px"}},"Set new Map"),c.a.createElement("button",{type:"button",onClick:()=>i("msg"),disabled:!b("msg")},"Remove 'msg'"),c.a.createElement("button",{type:"button",onClick:()=>s(),style:{margin:"0 8px"}},"Reset"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("pre",null,JSON.stringify(Array.from(n),null,2))))}},"CyT/":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("iojd"),a=n("ahKI"),c=n("L2hj");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c["a"])(!!e),n=Object(r["a"])(t,2),u=n[0],o=n[1],l=o.toggle,i=o.set,s=Object(a["useMemo"])((()=>{var e=()=>i(!0),t=()=>i(!1);return{toggle:l,set:e=>i(!!e),setTrue:e,setFalse:t}}),[]);return[u,s]}},DnNy:function(e,t,n){"use strict";var r=n("ahKI"),a=(e,t)=>!Object.is(e,t);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Object(r["useRef"])(),c=Object(r["useRef"])();return t(c.current,e)&&(n.current=c.current,c.current=e),n.current}t["a"]=c},"Dr+N":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("L2hj");t["default"]=()=>{var e=Object(u["a"])("Hello","World"),t=Object(r["a"])(e,2),n=t[0],a=t[1],o=a.toggle,l=a.set,i=a.setLeft,s=a.setRight;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",n),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:()=>l("Hello"),style:{margin:"0 8px"}},"Set Hello"),c.a.createElement("button",{type:"button",onClick:()=>l("World")},"Set World"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 8px"}},"Set Left"),c.a.createElement("button",{type:"button",onClick:s},"Set Right")))}},FBt5:function(e,t,n){"use strict";var r=!1;t["a"]=r},G3cz:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},H1rB:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=[],o=0;function l(e){u[o]=u[o]||e;var t=o;function n(e){console.log(e,u[t]),u[t]=e}return[u[o++],n]}var i=l,s=()=>{var e=i(0),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement("p",null,n),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>a(n+2)},"test")))};t["default"]=s},HgnT:function(e,t,n){"use strict";n.r(t);var r=n("G3cz"),a=n("iojd"),c=n("ahKI"),u=n.n(c),o=n("DnNy"),l=(e,t)=>!e||e.name!==t.name,i=(e,t)=>!e||e.job!==t.job;t["default"]=()=>{var e=Object(c["useState"])({name:"Jack",job:"student"}),t=Object(a["a"])(e,2),n=t[0],s=t[1],b=Object(c["useState"])(""),f=Object(a["a"])(b,2),m=f[0],v=f[1],d=Object(c["useState"])(""),p=Object(a["a"])(d,2),j=p[0],O=p[1],g=Object(o["a"])(n,l),h=Object(o["a"])(n,i);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{margin:"8px 0",border:"1px solid #e8e8e8",padding:8}},u.a.createElement("div",null,"current name: ",n.name),u.a.createElement("div",null,"current job: ",n.job)),u.a.createElement("div",null,"previous name: ",(g||{}).name),u.a.createElement("div",{style:{marginBottom:8}},"previous job: ",(h||{}).job),u.a.createElement("div",{style:{marginTop:8}},u.a.createElement("input",{style:{width:220},value:m,onChange:e=>v(e.target.value),placeholder:"new name"}),u.a.createElement("button",{type:"button",onClick:()=>{s((e=>Object(r["a"])(Object(r["a"])({},e),{},{name:m})))},style:{marginLeft:8}},"update")),u.a.createElement("div",{style:{marginTop:8}},u.a.createElement("input",{style:{width:220},value:j,onChange:e=>O(e.target.value),placeholder:"new job"}),u.a.createElement("button",{type:"button",onClick:()=>{s((e=>Object(r["a"])(Object(r["a"])({},e),{},{job:j})))},style:{marginLeft:8}},"update")))}},KQwp:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("25QV");function o(e){var t=Object(u["a"])(),n=Object(a["useState"])(e),c=Object(r["a"])(n,2),o=c[0],l=c[1],i=Object(a["useCallback"])((e=>{t.current||l(e)}),[]);return[o,i]}var l=o,i=()=>{var e=l(),t=Object(r["a"])(e,2),n=t[0],u=t[1];Object(a["useEffect"])((()=>{setTimeout((()=>{u("data loaded from server")}),5e3)}),[]);var o=n||"Loading...";return c.a.createElement("div",null,o)};t["default"]=()=>{var e=Object(a["useState"])(!0),t=Object(r["a"])(e,2),n=t[0],u=t[1];return c.a.createElement("div",null,c.a.createElement("button",{onClick:()=>u(!1)},"Unmount"),n&&c.a.createElement(i,null))}},L2hj:function(e,t,n){"use strict";var r=n("iojd"),a=n("ahKI");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(a["useState"])(e),c=Object(r["a"])(n,2),u=c[0],o=c[1],l=Object(a["useMemo"])((()=>{var n=void 0===t?!e:t,r=()=>o((t=>t===e?n:e)),a=e=>o(e),c=()=>o(e),u=()=>o(n);return{toggle:r,set:a,setLeft:c,setRight:u}}),[]);return[u,l]}t["a"]=c},OCTU:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("sJN1");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],l=Object(u["a"])(n);return Object(a["useEffect"])((()=>{var e=setInterval((()=>{o(l.current+1)}),1e3);return()=>clearInterval(e)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",n))}},Tt9S:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("pYEw");function o(e){var t=()=>new Set(e),n=Object(a["useState"])(t),c=Object(r["a"])(n,2),o=c[0],l=c[1],i=e=>{o.has(e)||l((t=>{var n=new Set(t);return n.add(e),n}))},s=e=>{o.has(e)&&l((t=>{var n=new Set(t);return n.delete(e),n}))},b=()=>l(t());return[o,{add:Object(u["a"])(i),remove:Object(u["a"])(s),reset:Object(u["a"])(b)}]}var l=o;t["default"]=()=>{var e=l(["Hello"]),t=Object(r["a"])(e,2),n=t[0],a=t[1],u=a.add,o=a.remove,i=a.reset;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:()=>u(String(Date.now()))},"Add Timestamp"),c.a.createElement("button",{type:"button",onClick:()=>o("Hello"),disabled:!n.has("Hello"),style:{margin:"0 8px"}},"Remove Hello"),c.a.createElement("button",{type:"button",onClick:()=>i()},"Reset"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("pre",null,JSON.stringify(Array.from(n),null,2))))}},VaEu:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("nnHe");t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo1",{defaultValue:"Hello~"}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{value:n||"",placeholder:"Please enter some words...",onChange:e=>a(e.target.value)}),c.a.createElement("button",{style:{margin:"0 8px"},type:"button",onClick:()=>a("Hello~")},"Reset"),c.a.createElement("button",{type:"button",onClick:()=>a(void 0)},"Clear"))}},VoNs:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("Ys1N");t["default"]=()=>{var e=Object(u["a"])("useCookieStateString"),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement("input",{value:n,placeholder:"Please enter some words...",onChange:e=>a(e.target.value),style:{width:300}})}},YArd:function(e,t,n){"use strict";var r=n("tD2l"),a=n("fzsq"),c="object"==typeof self&&self&&self.Object===Object&&self,u=a["a"]||c||Function("return this")(),o=u,l=function(){return o.Date.now()},i=l,s=/\s/;function b(e){var t=e.length;while(t--&&s.test(e.charAt(t)));return t}var f=b,m=/^\s+/;function v(e){return e?e.slice(0,f(e)+1).replace(m,""):e}var d=v,p=o.Symbol,j=p,O=Object.prototype,g=O.hasOwnProperty,h=O.toString,y=j?j.toStringTag:void 0;function E(e){var t=g.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(c){}var a=h.call(e);return r&&(t?e[y]=n:delete e[y]),a}var w=E,C=Object.prototype,k=C.toString;function S(e){return k.call(e)}var x=S,I="[object Null]",K="[object Undefined]",T=j?j.toStringTag:void 0;function D(e){return null==e?void 0===e?K:I:T&&T in Object(e)?w(e):x(e)}var F=D;function N(e){return null!=e&&"object"==typeof e}var R=N,P="[object Symbol]";function H(e){return"symbol"==typeof e||R(e)&&F(e)==P}var A=H,V=NaN,J=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,z=parseInt;function B(e){if("number"==typeof e)return e;if(A(e))return V;if(Object(r["a"])(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(r["a"])(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=d(e);var n=M.test(e);return n||Y.test(e)?z(e.slice(2),n?2:8):J.test(e)?V:+e}var L=B,U="Expected a function",W=Math.max,Q=Math.min;function G(e,t,n){var a,c,u,o,l,s,b=0,f=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(U);function d(t){var n=a,r=c;return a=c=void 0,b=t,o=e.apply(r,n),o}function p(e){return b=e,l=setTimeout(g,t),f?d(e):o}function j(e){var n=e-s,r=e-b,a=t-n;return m?Q(a,u-r):a}function O(e){var n=e-s,r=e-b;return void 0===s||n>=t||n<0||m&&r>=u}function g(){var e=i();if(O(e))return h(e);l=setTimeout(g,j(e))}function h(e){return l=void 0,v&&a?d(e):(a=c=void 0,o)}function y(){void 0!==l&&clearTimeout(l),b=0,a=s=c=l=void 0}function E(){return void 0===l?o:h(i())}function w(){var e=i(),n=O(e);if(a=arguments,c=this,s=e,n){if(void 0===l)return p(s);if(m)return clearTimeout(l),l=setTimeout(g,t),d(s)}return void 0===l&&(l=setTimeout(g,t)),o}return t=L(t)||0,Object(r["a"])(n)&&(f=!!n.leading,m="maxWait"in n,u=m?W(L(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=y,w.flush=E,w}t["a"]=G},Ys1N:function(e,t,n){"use strict";var r=n("G3cz");function a(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function c(e,t){if(null==e)return{};var n,r,c=a(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=n("iojd"),o=n("hUD9"),l=n.n(o),i=n("ahKI"),s=n("pYEw"),b=n("cxPF"),f=["defaultValue"];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(i["useState"])((()=>{var n=l.a.get(e);return Object(b["b"])(n)?n:Object(b["a"])(t.defaultValue)?t.defaultValue():t.defaultValue})),a=Object(u["a"])(n,2),o=a[0],m=a[1],v=Object(s["a"])((function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=Object(r["a"])(Object(r["a"])({},t),a),i=(u.defaultValue,c(u,f)),s=Object(b["a"])(n)?n(o):n;m(s),void 0===s?l.a.remove(e):l.a.set(e,s,i)}));return[o,v]}t["a"]=m},aFWa:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("inn8");function o(e,t){var n=Object(a["useState"])(e),c=Object(r["a"])(n,2),o=c[0],l=c[1],i=Object(u["a"])((()=>{l(e)}),t),s=i.run;return Object(a["useEffect"])((()=>{s()}),[e]),o}var l=o;t["default"]=()=>{var e=Object(a["useState"])(),t=Object(r["a"])(e,2),n=t[0],u=t[1],o=l(n,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{value:n,onChange:e=>u(e.target.value),placeholder:"Typed value",style:{width:280}}),c.a.createElement("p",{style:{marginTop:16}},"throttledValue: ",o))}},aQ7k:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("Ys1N");function o(){var e=Object(u["a"])("useCookieStateOptions",{defaultValue:"0",path:"/",expires:(()=>new Date(+new Date+1e4))()}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>a((e=>String(Number(e)+1)),{expires:(()=>new Date(+new Date+1e4))()})},"inc + (10s expires)"),c.a.createElement("button",{type:"button",style:{marginRight:16},onClick:()=>a((e=>String(Number(e)-1)),{expires:(()=>new Date(+new Date+1e4))()})},"dec - (10s expires)"),c.a.createElement("button",{type:"button",onClick:()=>a("0")},"reset"))}},b2g7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("Ys1N");function o(){var e=Object(u["a"])("useCookieStateUpdater",{defaultValue:"0"}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,n),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>a((e=>String(Number(e)+1)))},"inc +"),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>a((e=>String(Number(e)-1)))},"dec -"),c.a.createElement("button",{type:"button",onClick:()=>a("0")},"reset"))}},cxPF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=e=>"function"===typeof e,a=e=>"string"===typeof e,c=e=>"undefined"===typeof e},eWij:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("hsQr");function o(e,t){var n=Object(a["useState"])(e),c=Object(r["a"])(n,2),o=c[0],l=c[1],i=Object(u["a"])((()=>{l(e)}),t),s=i.run;return Object(a["useEffect"])((()=>{s()}),[e]),o}var l=o;t["default"]=()=>{var e=Object(a["useState"])(),t=Object(r["a"])(e,2),n=t[0],u=t[1],o=l(n,{wait:500});return c.a.createElement("div",null,c.a.createElement("input",{value:n,onChange:e=>u(e.target.value),placeholder:"Typed value",style:{width:280}}),c.a.createElement("p",{style:{marginTop:16}},"DebouncedValue: ",o))}},fzsq:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t["a"]=n}).call(this,n("e7Xt"))},h17I:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("rDAX");t["default"]=()=>{var e=Object(u["a"])({hello:""}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>a({hello:"world"})},"set hello"),c.a.createElement("button",{type:"button",onClick:()=>a({foo:"bar"}),style:{margin:"0 8px"}},"set foo")))}},hUD9:function(e,t,n){var r,a;(function(c){r=c,a="function"===typeof r?r.call(t,n,t,e):r,void 0===a||(e.exports=a)})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,a,c){var u;if(arguments.length>1){if(c=e({path:"/"},r.defaults,c),"number"===typeof c.expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*c.expires),c.expires=o}try{u=JSON.stringify(a),/^[\{\[]/.test(u)&&(a=u)}catch(v){}return a=encodeURIComponent(String(a)),a=a.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",a,c.expires&&"; expires="+c.expires.toUTCString(),c.path&&"; path="+c.path,c.domain&&"; domain="+c.domain,c.secure&&"; secure"].join("")}t||(u={});for(var l=document.cookie?document.cookie.split("; "):[],i=/(%[0-9A-Z]{2})+/g,s=0;s<l.length;s++){var b=l[s].split("="),f=b[0].replace(i,decodeURIComponent),m=b.slice(1).join("=");if('"'===m.charAt(0)&&(m=m.slice(1,-1)),m=n&&n(m,f)||m.replace(i,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(v){}if(t===f){u=m;break}t||(u[f]=m)}return u}return r.get=r.set=r,r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t()}))},hsQr:function(e,t,n){"use strict";var r=n("YArd"),a=n("ahKI"),c=n("sJN1"),u=n("1DhI"),o=n("cxPF"),l=n("FBt5");function i(e,t){var n;l["a"]&&(Object(o["a"])(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var i=Object(c["a"])(e),s=null!==(n=null===t||void 0===t?void 0:t.wait)&&void 0!==n?n:1e3,b=Object(a["useMemo"])((()=>Object(r["a"])((function(){return i.current(...arguments)}),s,t)),[]);return Object(u["a"])((()=>{b.cancel()})),{run:b,cancel:b.cancel,flush:b.flush}}t["a"]=i},inn8:function(e,t,n){"use strict";var r=n("YArd"),a=n("tD2l"),c="Expected a function";function u(e,t,n){var u=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return Object(a["a"])(n)&&(u="leading"in n?!!n.leading:u,o="trailing"in n?!!n.trailing:o),Object(r["a"])(e,t,{leading:u,maxWait:t,trailing:o})}var o=u,l=n("ahKI"),i=n("sJN1"),s=n("1DhI"),b=n("cxPF"),f=n("FBt5");function m(e,t){var n;f["a"]&&(Object(b["a"])(e)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e)));var r=Object(i["a"])(e),a=null!==(n=null===t||void 0===t?void 0:t.wait)&&void 0!==n?n:1e3,c=Object(l["useMemo"])((()=>o((function(){return r.current(...arguments)}),a,t)),[]);return Object(s["a"])((()=>{c.cancel()})),{run:c,cancel:c.cancel,flush:c.flush}}t["a"]=m},lkYe:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("pYEw"),c=n("EZs7"),u=n("ahKI"),o=n.n(u);t["default"]=()=>{var e=Object(u["useState"])(0),t=Object(r["a"])(e,2),n=t[0],i=t[1],s=Object(u["useCallback"])((()=>{c["a"].info("Current count is ".concat(n))}),[n]),b=Object(a["a"])((()=>{c["a"].info("Current count is ".concat(n))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"count: ",n),o.a.createElement("button",{type:"button",onClick:()=>{i((e=>e+1))}},"Add Count"),o.a.createElement("p",null,"You can click the button to see the number of sub-component renderings"),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useCallback function:"),o.a.createElement(l,{showCount:s})),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useMemoizedFn function:"),o.a.createElement(l,{showCount:b})))};var l=o.a.memo((e=>{var t=e.showCount,n=Object(u["useRef"])(0);return n.current+=1,o.a.createElement("div",null,o.a.createElement("p",null,"Render Count: ",n.current),o.a.createElement("button",{type:"button",onClick:t},"showParentCount"))}))},mAmT:function(e,t,n){"use strict";n.r(t);var r=n("DBVu"),a=n("GAyR"),c=n("iojd"),u=n("ahKI"),o=n.n(u),l=n("6H8H"),i=()=>new Promise((e=>{setTimeout((()=>{e(!0)}),3e3)}));t["default"]=()=>{var e=Object(u["useState"])(),t=Object(c["a"])(e,2),n=t[0],s=t[1];return Object(l["a"])(Object(a["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,i();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))),o.a.createElement("div",null,o.a.createElement("p",null,void 0===n&&"checking"),o.a.createElement("p",null,n&&"check passed"))}},nnHe:function(e,t,n){"use strict";var r=n("iojd"),a=n("ahKI"),c=n("pYEw"),u=n("rpwH"),o=n("cxPF");function l(e){function t(t){var n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=l.onError,s=void 0===i?e=>{console.error(e)}:i;try{n=e()}catch(g){s(g)}var b=e=>l.serializer?l.serializer(e):JSON.stringify(e),f=e=>l.deserializer?l.deserializer(e):JSON.parse(e);function m(){try{var e,r=null===(e=n)||void 0===e?void 0:e.getItem(t);if(r)return f(r)}catch(a){s(a)}return Object(o["a"])(l.defaultValue)?l.defaultValue():l.defaultValue}var v=Object(a["useState"])(m),d=Object(r["a"])(v,2),p=d[0],j=d[1];Object(u["a"])((()=>{j(m())}),[t]);var O=e=>{var r,a=Object(o["a"])(e)?e(p):e;if(j(a),Object(o["c"])(a))null===(r=n)||void 0===r||r.removeItem(t);else try{var c;null===(c=n)||void 0===c||c.setItem(t,b(a))}catch(u){console.error(u)}};return[p,Object(c["a"])(O)]}return t}var i=!("undefined"===typeof window||!window.document||!window.document.createElement),s=i,b=l((()=>s?localStorage:void 0));t["a"]=b},pYEw:function(e,t,n){"use strict";var r=n("ahKI"),a=n("cxPF"),c=n("FBt5");function u(e){c["a"]&&(Object(a["a"])(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=Object(r["useRef"])(e);t.current=Object(r["useMemo"])((()=>e),[e]);var n=Object(r["useRef"])();return n.current||(n.current=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(this,n)}),n.current}t["a"]=u},"pd+N":function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("nnHe"),o=["a","e","i","o","u"];t["default"]=function(){var e=Object(u["a"])("use-local-storage-state-demo2",{defaultValue:o}),t=Object(r["a"])(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,null===n||void 0===n?void 0:n.join("-")),c.a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>a([...n,Math.random().toString(36).slice(-1)])},"push random"),c.a.createElement("button",{type:"button",onClick:()=>a(o)},"reset"))}},rDAX:function(e,t,n){"use strict";var r=n("G3cz"),a=n("iojd"),c=n("ahKI"),u=n("cxPF"),o=e=>{var t=Object(c["useState"])(e),n=Object(a["a"])(t,2),o=n[0],l=n[1],i=Object(c["useCallback"])((e=>{l((t=>{var n=Object(u["a"])(e)?e(t):e;return n?Object(r["a"])(Object(r["a"])({},t),n):t}))}),[]);return[o,i]};t["a"]=o},rXjo:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("inn8");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],l=Object(u["a"])((()=>{o(n+1)}),{wait:500}),i=l.run;return c.a.createElement("div",null,c.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),c.a.createElement("button",{type:"button",onClick:i},"Click fast!"))}},rpwH:function(e,t,n){"use strict";var r=n("ahKI"),a=e=>(t,n)=>{var a=Object(r["useRef"])(!1);e((()=>()=>{a.current=!1}),[]),e((()=>{if(a.current)return t();a.current=!0}),n)};t["a"]=a(r["useEffect"])},sJN1:function(e,t,n){"use strict";var r=n("ahKI");function a(e){var t=Object(r["useRef"])(e);return t.current=e,t}t["a"]=a},tD2l:function(e,t,n){"use strict";function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}t["a"]=r},tHpm:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("hsQr"),c=n("ahKI"),u=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],l=Object(a["a"])((()=>{o(n+1)}),{wait:500}),i=l.run;return u.a.createElement("div",null,u.a.createElement("p",{style:{marginTop:16}}," Clicked count: ",n," "),u.a.createElement("button",{type:"button",onClick:i},"Click fast!"))}},vcr8:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("rpwH");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],l=Object(a["useState"])(0),i=Object(r["a"])(l,2),s=i[0],b=i[1],f=Object(a["useState"])(0),m=Object(r["a"])(f,2),v=m[0],d=m[1];return Object(a["useEffect"])((()=>{b((e=>e+1))}),[n]),Object(u["a"])((()=>(d((e=>e+1)),()=>{})),[n]),c.a.createElement("div",null,c.a.createElement("p",null,"effectCount: ",s),c.a.createElement("p",null,"updateEffectCount: ",v),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:()=>o((e=>e+1))},"reRender")))}},y7Gi:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("1DhI"),c=n("CyT/"),u=n("EZs7"),o=n("ahKI"),l=n.n(o),i=()=>(Object(a["a"])((()=>{u["a"].info("unmount")})),l.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(r["a"])(e,2),n=t[0],a=t[1].toggle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:a},n?"unmount":"mount"),n&&l.a.createElement(i,null))}},yQWC:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("EZs7"),o=n("pYEw");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["a"])(e,2),n=t[0],l=t[1],i=Object(a["useCallback"])((()=>{u["a"].info("Current count is ".concat(n))}),[n]),s=Object(o["a"])((()=>{u["a"].info("Current count is ".concat(n))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"count: ",n),c.a.createElement("button",{type:"button",onClick:()=>{l((e=>e+1))}},"Add Count"),c.a.createElement("div",{style:{marginTop:16}},c.a.createElement("button",{type:"button",onClick:i},"call callbackFn"),c.a.createElement("button",{type:"button",onClick:s,style:{marginLeft:8}},"call memoizedFn")))}},ynmm:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("DnNy"),c=n("ahKI"),u=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(r["a"])(e,2),n=t[0],o=t[1],l=Object(a["a"])(n);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,"counter current value: ",n),u.a.createElement("div",{style:{marginBottom:8}},"counter previous value: ",l),u.a.createElement("button",{type:"button",onClick:()=>o((e=>e+1))},"increase"),u.a.createElement("button",{type:"button",style:{marginLeft:8},onClick:()=>o((e=>e-1))},"decrease"))}},yoie:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("CyT/");t["default"]=()=>{var e=Object(u["a"])(!0),t=Object(r["a"])(e,2),n=t[0],a=t[1],o=a.toggle,l=a.setTrue,i=a.setFalse;return c.a.createElement("div",null,c.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:o},"Toggle"),c.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),c.a.createElement("button",{type:"button",onClick:l},"Set true")))}},zNA3:function(e,t,n){"use strict";n.r(t);var r=n("iojd"),a=n("ahKI"),c=n.n(a),u=n("pYEw"),o=e=>{var t=Object(a["useState"])(e),n=Object(r["a"])(t,2),c=n[0],o=n[1],l=Object(u["a"])((()=>{o(e)}));return[c,o,l]},l=o;t["default"]=()=>{var e=l({hello:"",count:0}),t=Object(r["a"])(e,3),n=t[0],a=t[1],u=t[2];return c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(n,null,2)),c.a.createElement("p",null,c.a.createElement("button",{type:"button",style:{marginRight:"8px"},onClick:()=>a({hello:"world",count:1})},"set hello and count"),c.a.createElement("button",{type:"button",onClick:u},"resetState")))}}}]);