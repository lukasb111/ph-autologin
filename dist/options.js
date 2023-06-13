/*! For license information please see options.js.LICENSE.txt */
!function(){var t={61:function(t,e,r){var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function h(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==r&&a.call(x,c)&&(y=x);var b=m.prototype=h.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=m,l(b,"constructor",m),l(m,"constructor",v),v.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},k(_.prototype),l(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:function(t,e,r){var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o=r(687),a=r.n(o);function i(t){return new Promise((function(e,r){chrome.storage.sync.set(t,(function(){return chrome.runtime.lastError?r(chrome.runtime.lastError):e()}))}))}function c(t){return new Promise((function(e,r){chrome.storage.sync.get([t],(function(n){return chrome.runtime.lastError?r(chrome.runtime.lastError):e(n[t])}))}))}var u={1:[{div_defender:"Obránce (vhodný pro nováčka)"},{div_economist:"Hospodář (vhodný pro nováčka)"},{div_farmer:"Farmář (pro hráče se 100 dny či VIP účtem)"},{div_attacker:"Útočník (pro hráče s 200 dny či VIP účtem)"},{div_storage:"Skladník (pro hráče s 300 dny či VIP účtem)"}],5:[{div_bratrstvo1:"Hrad Černého Bratrstva"}]},s={1:{div_defender:["Vylepšený katapult","Ohnivá střela","Ocelová koule","Pasti a Opraváři","Zbrojnoš hodnost 3"],div_economist:["Nejlevnější nákup","Nejlepší prodej","Přestavba pily","Studna a dům","Fara u kostela"],div_farmer:["Jídlo nákup/prodej","Tržiště +30K","Děvečka ze statku","Výkrm prasat a mrva","Úplatkář V."],div_attacker:["Šermíř hodnost 5","Modrý zbrojnoš","Modrý střelec","Střelec 4 a léčitel 5","Dělo IV."],div_storage:["Tržiště +20K","Dům level 9","Druid","Zbrojnoš hodnost 2","Léčitel hodnost 7"]},5:{div_bratrstvo1:["Ocelová koule + Dostřel","Střelec hodnost +2","Zbrojnoš a šermíř +3","Tržiště +30K a Opravář II.","Nejlevnější nákup"]}},l={1:{div_defender:["Dva zbrojnoši","Bojovnice a střelec","Trpaslík a zbrojnoš","Stavitel a vlčák"],div_economist:["Vozík a stavitel","Vozík a selka","Vozík a vozík","Zbrojnoš a prasátko"],div_farmer:["Dvě selky","Selka a vlčák","Selka a vozík","Selka a Zlatý kňour"],div_attacker:["Dva bílí zbojnoši","Šermíř a beranidlo","Bojovnice a stavitel","Dva červení střelci"],div_storage:["Šermíř a prasátko","Velký pes a prasátko","Stavitel a prasátko","Selka a prasátko"]},5:{div_bratrstvo1:["Čarodějnice a prasátko","Černý šermíř a střelec","Černý stavitel a vrrk","Černý léčitel a kňour"]}};console.log("OLONGJOHNOSON");var f=function(){var t=n(a().mark((function t(e,r,n){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=3;break}return t.next=3,i({id_technology:n});case 3:(o=document.getElementById("id_technology")).innerHTML="",s[e][r].map((function(t,e){var r=document.createElement("option");r.innerHTML=t,r.value=e,o.appendChild(r)}));case 6:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),p=function(){var t=n(a().mark((function t(e,r,n){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=3;break}return t.next=3,i({id_unit:n});case 3:(o=document.getElementById("id_unit")).innerHTML="",l[e][r].map((function(t,e){var r=document.createElement("option");r.innerHTML=t,r.value=e,o.appendChild(r)}));case 6:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),d=document.getElementById("servers_table"),h=document.createElement("div");h.innerHTML="Nastavení registrace",h.classList.add("options"),h.onclick=function(){var e;e=n(a().mark((function e(){var r,o,s,l,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=chrome.runtime.getURL("icons/background.jpg"),o=chrome.runtime.getURL("icons/ui-icons_e9cd86_256x240.png"),document.getElementById("autologin1").style.backgroundImage="url("+r+")",document.getElementById("closeButton").style.backgroundImage="url("+o+")",document.getElementById("closeButton").onclick=function(){document.getElementById("autologin1").remove()},e.t0=console,e.next=8,new Promise((function(t,e){chrome.storage.sync.get(null,(function(r){return chrome.runtime.lastError?e(chrome.runtime.lastError):t(r)}))}));case 8:e.t1=e.sent,e.t0.log.call(e.t0,e.t1),s=document.getElementById("id_existing_player"),l=document.getElementById("id_existing_hero"),d=document.getElementsByClassName("autologinSettings"),Array.from([s,l]).forEach(function(){var e=n(a().mark((function e(r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r.id);case 2:(o=e.sent)&&(r.value=o),r.onchange=function(){var e=n(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.target,e.next=3,i(t({},n.id,n.value));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Array.from(d).forEach(function(){var e=n(a().mark((function e(r){var o,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r.id);case 2:if(o=e.sent,"id_castle_profile"!==r.id||!o){e.next=10;break}return e.next=6,c("id_race");case 6:s=e.sent,(l=document.getElementById("id_castle_profile")).innerHTML="",u[s].map(function(){var t=n(a().mark((function t(e){var r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object.keys(e)[0],n=Object.values(e)[0],t.next=4,i({id_castle_profile:r});case 4:(o=document.createElement("option")).innerHTML=n,o.value=r,l.appendChild(o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:o&&(r.value=o),r.onchange=function(){var e=n(a().mark((function e(o){var s,l,d,h,v,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.target.value,l=r.id,e.next=4,i(t({},l,s));case 4:e.t0=l,e.next="id_race"===e.t0?7:"id_castle_profile"===e.t0?19:25;break;case 7:return(d=document.getElementById("id_castle_profile")).innerHTML="",u[s].map(function(){var t=n(a().mark((function t(e){var r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Object.keys(e)[0],n=Object.values(e)[0],(o=document.createElement("option")).innerHTML=n,o.value=r,d.appendChild(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.next=12,c("id_race");case 12:return h=e.sent,v=Object.keys(Object.values(u[s])[0])[0],e.next=16,i({id_castle_profile:v});case 16:return f(h,v,"1"),p(h,v,"1"),e.abrupt("break",25);case 19:return e.next=21,c("id_race");case 21:return m=e.sent,f(m,s),p(m,s),e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:case"end":return e.stop()}}),e)}))),fetch(chrome.runtime.getURL("options/popup/popup.html")).then((function(t){return t.text()})).then((function(t){var r=document.createElement("div");r.innerHTML=t,r.classList.add("popup"),r.classList.add("visible"),r.setAttribute("id","autologin1"),document.querySelector("body").appendChild(r),e&&e()})).then().catch((function(t){console.error("Error fetching HTML file:",t)}))},d.appendChild(h)}()}();
//# sourceMappingURL=options.js.map