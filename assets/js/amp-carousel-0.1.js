(self.AMP=self.AMP||[]).push({n:"amp-carousel",ev:"0.1",l:true,v:"2106182132000",m:0,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var da={a:!0},ea={};try{ea.__proto__=da;r=ea.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=q;function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}var u;function v(){return u?u:u=Promise.resolve(void 0)}function ha(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var ia=Array.isArray;function ja(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function ka(a){return"number"===typeof a&&isFinite(a)}function la(a,b,c,d){return function(e){return w(e,a,b,c,d)}}function w(a,b,c,d,e){a:{var f=a-0;if(0>=f)a=0;else if(1<=f)a=1;else{for(var h=0,n=1,k=0,l=0;8>l;l++){k=x(f,b,d);var m=(x(f+1e-6,b,d)-k)/1e-6;if(1e-6>Math.abs(k-a)){a=f;break a}if(1e-6>Math.abs(m))break;else k<a?h=f:n=f,f-=(k-a)/m}for(l=0;1e-6<Math.abs(k-a)&&8>l;l++)k<a?(h=f,f=(f+n)/2):(n=f,f=(f+h)/2),k=x(f,b,d);a=f}}0==a?e=0:1==a?e=1:(b=y(0,c,a),c=y(c,e,a),e=y(e,1,a),b=y(b,c,a),c=y(c,e,a),e=y(b,c,a));return e}function x(a,b,c){if(0==a)return 0;if(1==a)return 1;var d=y(0,b,a),e=y(b,c,a),f=y(c,1,a);d=y(d,e,a);e=y(e,f,a);return y(d,e,a)}function y(a,b,c){return a+c*(b-a)}var ma={linear:function(a){return a},ease:function(a){return w(a,.25,.1,.25,1)},"ease-in":function(a){return w(a,.42,0,1,1)},"ease-out":function(a){return w(a,0,0,.58,1)},"ease-in-out":function(a){return w(a,.42,0,.58,1)}};function na(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return la(b[0],b[1],b[2],b[3])}return null}return ma[a]}return a}function oa(a){for(var b=null,c="",d=p(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function pa(a){var b=oa.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function qa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){pa(e)}}var ra=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function sa(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}var z=self.AMP_CONFIG||{},ta=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ua(a){if(self.document&&self.document.head&&(!self.location||!ta.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}z.cdnUrl||ua("runtime-host");z.geoApiUrl||ua("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function va(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function B(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor")}function wa(a){va().assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function C(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return D(a,b)}function E(a){return D(a,"timer")}function F(a){var b=H(a);b=I(b);return D(b,"owners")}function xa(a){a=H(a);a=I(a);return ya(a,"action")?D(a,"action"):null}function H(a){return a.nodeType?C((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function D(a,b){ya(a,b);a=J(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function za(a){var b=J(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;D(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function J(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ya(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Aa(){var a=new ha,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Ba(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function Ca(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):Ba(a,(function(b){var c=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return c?c.call(b,"[i-amphtml-scale-animation]"):!1}))}function Da(a,b){var c=[];for(a=a.firstElementChild;a;a=a.nextElementSibling)b(a)&&c.push(a);return c}function Ea(a){return Da(a,(function(b){if("string"==typeof b)var c=b;else b.nodeType===Node.ELEMENT_NODE&&(c=b.tagName);b=c&&c.toLowerCase().startsWith("i-")?!0:b.nodeType!==Node.ELEMENT_NODE?!1:b.hasAttribute("placeholder")||b.hasAttribute("fallback")||b.hasAttribute("overflow");return!b}))}var Fa={bubbles:!0,cancelable:!0};function Ga(a,b){var c=a.hasAttribute("i-amphtml-carousel-hide-buttons"),d=void 0!==b?b:!c;d!==c&&(d?a.setAttribute("i-amphtml-carousel-hide-buttons",""):a.removeAttribute("i-amphtml-carousel-hide-buttons"))}function Ha(a){var b=za(I(a));if(b)return b;var c=H(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-analytics");return d?C(c.win,"extensions").waitForExtension("amp-analytics",d):null})).then((function(d){if(d){var e=I(a);var f=za(e);f?e=f:(e=J(e),e["amp-analytics-instrumentation"]=Aa(),e=e["amp-analytics-instrumentation"].promise)}else e=null;return e}))}function Ia(){}function K(a){this.O=a;this.H=C(self,"vsync");this.la=null;this.B=[]}function L(a,b,c,d){return new K(a).setCurve(d).add(0,b,1).start(c)}K.prototype.setCurve=function(a){a&&(this.la=na(a));return this};K.prototype.add=function(a,b,c,d){this.B.push({delay:a,func:b,duration:c,curve:na(d)});return this};K.prototype.start=function(a){return new M(this.H,this.O,this.B,this.la,a)};function M(a,b,c,d,e){this.H=a;this.O=b;this.B=[];for(b=0;b<c.length;b++){var f=c[b];this.B.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.sa=e;this.wa=Date.now();this.ga=!0;this.qa={};c=new ha;this.pa=c.promise;this.va=c.resolve;this.ua=c.reject;this.ra=this.H.createAnimTask(this.O,{mutate:this.xa.bind(this)});this.H.canAnimate(this.O)?this.ra(this.qa):(B().warn("Animation","cannot animate"),N(this,!1,0))}M.prototype.then=function(a,b){return a||b?this.pa.then(a,b):this.pa};M.prototype.thenAlways=function(a){a=a||Ia;return this.then(a,a)};M.prototype.halt=function(a){N(this,!1,a||0)};function N(a,b,c){if(a.ga){a.ga=!1;if(0!=c){1<a.B.length&&a.B.sort((function(e,f){return e.delay+e.duration-(f.delay+f.duration)}));try{if(0<c)for(c=0;c<a.B.length;c++)a.B[c].func(1,!0);else for(var d=a.B.length-1;0<=d;d--)a.B[d].func(0,!1)}catch(e){B().error("Animation","completion failed: "+e,e),b=!1}}b?a.va():a.ua()}}M.prototype.xa=function(){if(this.ga){for(var a=Date.now(),b=Math.min((a-this.wa)/this.sa,1),c=0;c<this.B.length;c++){var d=this.B[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.B.length;c++)if(d=this.B[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){B().error("Animation","step curve failed: "+h,h);N(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){B().error("Animation","step mutate failed: "+h,h),N(this,!1,0)}}1==b?N(this,!0,0):this.H.canAnimate(this.O)?this.ra(this.qa):(B().warn("Animation","cancel animation"),N(this,!1,0))}};function Ja(a){var b=a.documentElement;return["âš¡4email","amp4email"].some((function(c){return b.hasAttribute(c)}))}var O=new WeakMap,Ka=new WeakMap;function La(a,b){var c=a.ownerDocument.defaultView,d=O.get(c);if(!d){var e=O.set;var f=Ma;var h=void 0===h?{}:h;var n=h.needsRootBounds;f=new c.IntersectionObserver(f,{threshold:h.threshold,root:c.parent&&c.parent!=c&&n?c.document:void 0});e.call(O,c,d=f)}Ka.set(a,b);d.observe(a)}function Na(a){var b=O.get(a.ownerDocument.defaultView);b&&b.unobserve(a);Ka.delete(a)}function Ma(a){for(var b=0;b<a.length;b++){var c=a[b],d=c.isIntersecting;(c=Ka.get(c.target))&&c(d)}}function P(a){a=AMP.BaseElement.call(this,a)||this;a.L=null;a.K=null;a.T=!1;return a}t(P,AMP.BaseElement);P.prerenderAllowed=function(){return!0};g=P.prototype;g.buildCallback=function(){var a=this,b=C(this.win,"input");if(Ja(this.element.ownerDocument)||this.element.hasAttribute("controls"))this.T=!0,this.element.classList.add("i-amphtml-carousel-has-controls");else b.onMouseDetected((function(c){c&&(a.T=!0,Ga(a.element,!a.T),a.element.classList.add("i-amphtml-carousel-has-controls"))}),!0);this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};g.viewportCallbackTemp=function(a){a&&this.hintControls()};g.buildButton=function(a,b){var c=this.element.ownerDocument.createElement("div");c.tabIndex=0;c.classList.add("amp-carousel-button");c.classList.add(a);c.setAttribute("role",this.buttonsAriaRole());c.onkeydown=function(d){"Enter"!=d.key&&" "!=d.key||d.defaultPrevented||(d.preventDefault(),b())};c.onclick=b;return c};g.buttonsAriaRole=function(){return"button"};g.buildButtons=function(){var a=this;this.L=this.buildButton("amp-carousel-button-prev",(function(){a.interactionPrev()}));this.element.appendChild(this.L);this.K=this.buildButton("amp-carousel-button-next",(function(){a.interactionNext()}));this.updateButtonTitles();this.element.appendChild(this.K)};g.isRelayoutNeeded=function(){return!0};g.buildCarousel=function(){};g.setupGestures=function(){};g.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};g.goCallback=function(){};g.setControlsState=function(){this.L.classList.toggle("amp-disabled",!this.hasPrev());this.L.setAttribute("aria-disabled",!this.hasPrev());this.K.classList.toggle("amp-disabled",!this.hasNext());this.K.setAttribute("aria-disabled",!this.hasNext());this.L.tabIndex=this.hasPrev()?0:-1;this.K.tabIndex=this.hasNext()?0:-1};g.hintControls=function(){var a=this;this.T||this.getVsync().mutate((function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");E(a.win).delay((function(){a.mutateElement((function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");Ga(a.element,!a.T)}))}),4e3)}))};g.updateButtonTitles=function(){this.K.title=this.getNextButtonTitle();this.L.title=this.getPrevButtonTitle()};g.getNextButtonTitle=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"};g.getPrevButtonTitle=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"};g.layoutCallback=function(){var a=this;La(this.element,(function(b){return a.viewportCallbackTemp(b)}));return v()};g.unlayoutCallback=function(){Na(this.element);return!0};g.hasPrev=function(){};g.hasNext=function(){};g.interactionNext=function(){this.K.classList.contains("amp-disabled")||this.go(1,!0,!1)};g.interactionPrev=function(){this.L.classList.contains("amp-disabled")||this.go(-1,!0,!1)};var Q;function Oa(a,b,c){var d={passive:!0},e=Pa(),f=!(null==d||!d.capture);a.addEventListener(b,(function(h){try{return c(h)}catch(l){var n,k;null==(k=(n=self).__AMP_REPORT_ERROR)||k.call(n,l);throw l}}),e?d:f)}function Pa(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q}function R(a,b,c){Oa(a,b,c)}var S,Qa="Webkit webkit Moz moz ms O o".split(" "),Ra={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function Sa(a,b){if(b.startsWith("--"))return b;S||(S=Object.create(null));var c=S[b];if(!c){c=b;if(void 0===a[b]){var d=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var e=0;e<Qa.length;e++){var f=Qa[e]+d;if(void 0!==a[f]){d=f;break a}}d=""}var h=d;void 0!==a[h]&&(c=h)}S[b]=c}return c}function Ta(a,b){var c=Sa(a.style,"order");c&&(c.startsWith("--")?a.style.setProperty(c,b):a.style[c]=b)}function Ua(a){var b=Sa(a.style,"scrollSnapType");if(b)return b.startsWith("--")?a.style.getPropertyValue(b):a.style[b]}function Va(a,b){return function(c){return a+(b-a)*c}}function T(a){a=P.call(this,a)||this;a.A=0;a.fa=0;a.I=null;a.D=null;a.ia=null;return a}t(T,P);T.prerenderAllowed=P.prerenderAllowed;g=T.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};g.buildCarousel=function(){var a=this;this.I=Ea(this.element);this.D=this.element.ownerDocument.createElement("div");this.D.classList.add("i-amphtml-scrollable-carousel-container");this.D.setAttribute("tabindex","-1");this.element.appendChild(this.D);this.I.forEach((function(b){F(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.D.appendChild(b)}));this.$();this.D.addEventListener("scroll",this.ha.bind(this));this.D.addEventListener("keydown",this.da.bind(this));this.registerAction("goToSlide",(function(b){var c=b.args;c&&(c=parseInt(c.index,10),Wa(a,c))}),1);xa(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])};g.buttonsAriaRole=function(){return"presentation"};g.layoutCallback=function(){var a=this;La(this.element,(function(b){return a.viewportCallbackTemp(b)}));Xa(this,this.A);Ya(this,this.A,1);this.setControlsState();return v()};g.unlayoutCallback=function(){Na(this.element);return P.prototype.unlayoutCallback.call(this)};g.viewportCallbackTemp=function(a){P.prototype.viewportCallbackTemp.call(this,a);Za(this,this.A,this.A)};g.goCallback=function(a,b){var c=this,d=$a(this,this.A,a),e=this.A;if(d!=e)if(b){var f=Va(e,d);L(this.element,(function(h){c.D.scrollLeft=f(h)}),200,"ease-in-out").thenAlways((function(){U(c,d)}))}else U(this,d),this.D.scrollLeft=d};function Wa(a,b){var c=a.I.length;if(!isFinite(b)||0>b||b>=c)a.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",b),v();else{var d=a.A,e=d;a.measureMutateElement((function(){e=a.I[b].offsetLeft-(a.element.offsetWidth-a.I[b].offsetWidth)/2}),(function(){if(e!=d){var f=Va(d,e);L(a.element,(function(h){a.D.scrollLeft=f(h)}),200,"ease-in-out").thenAlways((function(){U(a,e)}))}}))}}g.ha=function(){var a=this.D.scrollLeft;this.A=a;null===this.ia&&ab(this,a)};g.da=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function ab(a,b){a.ia=E(a.win).delay((function(){30>Math.abs(b-a.A)?(B().fine("amp-scrollable-carousel","slow scrolling: %s - %s",b,a.A),a.ia=null,U(a,a.A)):(B().fine("amp-scrollable-carousel","fast scrolling: %s - %s",b,a.A),ab(a,a.A))}),100)}function U(a,b){Za(a,b,a.fa);Xa(a,b);Ya(a,b,Math.sign(b-a.fa));a.fa=b;a.A=b;a.setControlsState()}function $a(a,b,c){var d=a.element.offsetWidth,e=a.D.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function V(a,b,c){for(var d=a.element.offsetWidth,e=0;e<a.I.length;e++){var f=a.I[e];f.offsetLeft+f.offsetWidth>=b&&f.offsetLeft<=b+d&&c(f)}}function Xa(a,b){V(a,b,(function(c){F(a.element).scheduleLayout(a.element,c)}))}function Ya(a,b,c){var d=$a(a,b,c);d!=b&&V(a,d,(function(e){F(a.element).schedulePreload(a.element,e)}))}function Za(a,b,c){var d=[];V(a,b,(function(e){d.push(e)}));c!=b&&V(a,c,(function(e){d.includes(e)||F(a.element).schedulePause(a.element,e)}))}g.hasPrev=function(){return 0!=this.A};g.hasNext=function(){return this.A!=Math.max(this.D.scrollWidth-this.element.offsetWidth,0)};g.$=function(){R(this.element,"touchmove",(function(a){return a.stopPropagation()}))};function W(a){a=P.call(this,a)||this;a.U=null;a.R=!1;a.ea=!1;a.J=!1;a.ka=5e3;a.M=null;a.oa=0;a.shouldLoop=!1;a.G=!1;return a}t(W,P);W.prerenderAllowed=P.prerenderAllowed;g=W.prototype;g.buildCarousel=function(){var a=this;this.R=this.element.hasAttribute("loop");this.J=this.element.hasAttribute("autoplay");var b=this.element.getAttribute("autoplay");b&&(this.M=parseInt(b,10),wa(ka(this.M)));this.buildSlides();this.shouldLoop=this.R&&this.isLoopingEligible();(this.G=this.J&&this.isLoopingEligible())&&0!=this.M&&bb(this);this.registerAction("toggleAutoplay",(function(c){(c=c.args)&&void 0!==c.toggleOn?cb(a,c.toggleOn):cb(a,!a.J)}),1)};g.buildSlides=function(){};g.viewportCallbackTemp=function(a){P.prototype.viewportCallbackTemp.call(this,a);a?db(this):this.clearAutoplay()};g.goCallback=function(a,b,c){this.moveSlide(a,b,c?1:3);c?db(this):this.clearAutoplay()};g.moveSlide=function(){};g.isLoopingEligible=function(){return!1};function bb(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.ka=Math.max(1e3,b));a.R||(a.element.setAttribute("loop",""),a.ea=!0,a.R=!0,a.shouldLoop=!0)}function db(a){a.G&&0!=a.M&&(a.clearAutoplay(),a.U=E(a.win).delay(a.go.bind(a,1,!0,!0),a.ka))}function cb(a,b){if(b!=a.G){var c=a.G;a.J=b;a.G=a.J&&a.isLoopingEligible();!c&&a.G&&bb(a);a.G?db(a):a.clearAutoplay()}}g.clearAutoplay=function(){null!==this.U&&(E(this.win).cancel(this.U),this.U=null)};g.removeAutoplay=function(){this.clearAutoplay();this.ea&&(this.element.removeAttribute("loop"),this.shouldLoop=this.R=this.ea=!1);this.G=this.J=!1};var eb=/vertical/,fb=new WeakMap,X=new WeakMap,gb=new WeakMap;function hb(a,b){var c=a.ownerDocument.defaultView;if(c){var d=X.get(a);d||(d=[],X.set(a,d),ib(c).observe(a));if(!d.some((function(f){return f.callback===b&&0===f.type}))){d.push({type:0,callback:b});var e=gb.get(a);e&&setTimeout((function(){return jb(0,b,e)}))}}}function kb(a,b){var c=X.get(a);c&&(ja(c,(function(d){return d.callback===b&&0===d.type})),0==c.length&&(X.delete(a),gb.delete(a),(c=a.ownerDocument.defaultView)&&ib(c).unobserve(a)))}function ib(a){var b=fb.get(a);b||(b=new a.ResizeObserver(lb),fb.set(a,b));return b}function lb(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=X.get(e);if(f)for(gb.set(e,d),e=0;e<f.length;e++){var h=f[e];jb(h.type,h.callback,d)}}}}function jb(a,b,c){if(0==a)a=c.contentRect,qa(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=eb.test((a.ownerDocument.defaultView.getComputedStyle(a)||Ra)["writing-mode"]),h=a.offsetHeight,n=a.offsetWidth;if(f){var k=n;var l=h}else l=n,k=h;e={inlineSize:l,blockSize:k}}qa(b,e)}}function mb(a,b,c){c=void 0===c?{}:c;var d=void 0===d?!0:d;var e=c;Ha(a).then((function(f){f&&f.triggerEventForTarget(a,b,e,d)}))}function Y(a){a=W.call(this,a)||this;a.H=null;a.S=!1;a.C=[];a.o=0;a.j=null;a.N=[];a.Y=!1;a.X=null;a.ca=!1;a.P=0;a.h=null;a.na=0;a.F=0;a.W=0;a.aa=[];var b=C(a.win,"platform");a.ba=b.isIos();a.ta=b.isSafari();a.Z=null;if(C(a.win,"platform").getIosVersionString().startsWith("10.3"))var c=!0;else if(a.ba)c=!1;else{var d=a.win;if(d.__AMP__EXPERIMENT_TOGGLES)c=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=d.__AMP__EXPERIMENT_TOGGLES;var e,f,h,n=Object.assign({},null!=(f=d.AMP_CONFIG)?f:{},null!=(h=d.AMP_EXP)?h:JSON.parse((null==(e=d.__AMP_EXP)?void 0:e.textContent)||"{}"));for(l in n)e=n[l],"number"===typeof e&&0<=e&&1>=e&&(c[l]=Math.random()<e);var k;var l=null==(k=d.AMP_CONFIG)?void 0:k["allow-doc-opt-in"];if(ia(l)&&l.length&&(k=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),e=p(k),k=e.next();!k.done;k=e.next())k=k.value,l.includes(k)&&(c[k]=!0);k=Object;l=k.assign;e="";try{"localStorage"in d&&(e=d.localStorage.getItem("amp-experiment-toggles"))}catch(zb){B().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var m;e=(null==(m=e)?void 0:m.split(/\s*,\s*/g))||[];m=Object.create(null);e=p(e);for(f=e.next();!f.done;f=e.next())(f=f.value)&&("-"==f[0]?m[f.substr(1)]=!1:m[f]=!0);l.call(k,c,m);var G;m=null==(G=d.AMP_CONFIG)?void 0:G["allow-url-opt-in"];if(ia(m)&&m.length){d=d.location.originalHash||d.location.hash;G=Object.create(null);if(d)for(;l=ra.exec(d);)k=sa(l[1],l[1]),l=l[2]?sa(l[2].replace(/\+/g," "),l[2]):"",G[k]=l;d=p(m);for(k=d.next();!k.done;k=d.next())m=k.value,k=G["e-"+m],"1"==k&&(c[m]=!0),"0"==k&&(c[m]=!1)}}c=!c["amp-carousel-chrome-scroll-snap"]}a.ja=c;a.ma=!1;a.V=a.V.bind(a);return a}t(Y,W);Y.prerenderAllowed=W.prerenderAllowed;g=Y.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildSlides=function(){var a=this;this.H=this.getVsync();this.Z=xa(this.element);this.Z.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"]);this.S=void 0!=Ua(this.element);this.ja&&(this.S=!1);this.element.classList.add("i-amphtml-slidescroll");this.C=Ea(this.element);this.o=this.C.length;this.j=this.win.document.createElement("div");this.j.setAttribute("tabindex","-1");this.j.classList.add("i-amphtml-slides-container");this.j.setAttribute("aria-live","polite");this.ja&&this.j.classList.add("i-amphtml-slidescroll-no-snap");if(this.S){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");this.j.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.j.appendChild(b)}this.element.appendChild(this.j);this.C.forEach((function(c,d){a.aa.push(c.getAttribute("data-slide-id")||d.toString());F(a.element).setOwner(c,a.element);c.classList.add("amp-carousel-slide");var e=a.win.document.createElement("div");e.classList.add("i-amphtml-slide-item");a.j.appendChild(e);e.appendChild(c);a.N.push(e)}));this.$();this.j.addEventListener("scroll",this.ha.bind(this));this.j.addEventListener("keydown",this.da.bind(this));R(this.j,"touchmove",this.za.bind(this));R(this.j,"touchend",this.ya.bind(this));this.registerAction("goToSlide",(function(c){(c=c.args)&&a.goToSlide(c.index,3)}),1)};g.attachedCallback=function(){hb(this.element,this.V)};g.detachedCallback=function(){kb(this.element,this.V)};g.isLoopingEligible=function(){return 1<this.o};g.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.goToSlide(b,3)};g.za=function(){this.clearAutoplay();this.ca=!0};function nb(a,b){a.X&&E(a.win).cancel(a.X);a.X=E(a.win).delay((function(){a.X=null;if(!a.Y&&!a.ca){var c=a.j.scrollLeft;a.S?ob(a,c,1):Z(a,c,void 0,1)}}),b)}g.ya=function(){var a=this.ja?45:100;this.ca=!1;nb(this,a)};g.V=function(a){this.F=a.width;this.ma=!0};g.layoutCallback=function(){var a=this;La(this.element,(function(d){return a.viewportCallbackTemp(d)}));if(Ca(this.element))return v();this.ma||(this.F=this.j.clientWidth);if(null===this.h)pb(this,this.na);else{var b=va().assertNumber(this.h,"E#19457 this.slideIndex_"),c=qb(this,b);F(this.element).scheduleLayout(this.element,this.C[b]);this.W=this.j.scrollLeft=c}return v()};g.unlayoutCallback=function(){Na(this.element);this.h=null;return W.prototype.unlayoutCallback.call(this)};g.hasPrev=function(){return this.shouldLoop||0<this.h};g.hasNext=function(){return this.shouldLoop||this.h<this.C.length-1};g.moveSlide=function(a,b,c){if(null!==this.h){var d=this.hasNext(),e=this.hasPrev();if(1==a&&d||-1==a&&e){var f=this.h+a;-1==f?f=this.o-1:f>=this.o&&(f=0);b?Z(this,1!=a||e?this.F:0,a,c):rb(this,f,c)}}};g.ha=function(){var a=this.j.scrollLeft;this.ba||this.ta||sb(this,a);nb(this,this.S?200:this.ba?45:100);this.W=a};g.da=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function sb(a,b){var c=a.j.scrollWidth;-1==a.P&&b>=a.W?Z(a,b).then((function(){a.P=0})):1==a.P&&b<=a.W?Z(a,b).then((function(){a.P=0})):a.P=0>b?-1:b+a.F>c?1:0}function Z(a,b,c,d){a.Y=!0;var e=tb(a,b)-a.h,f=a.hasPrev(),h=f?a.F:0;0!=e||1!=c&&-1!=c||(e=c);if(1==e||-1!=e&&e==-1*(a.o-1))h=f?2*a.F:a.F;else if(-1==e||e==a.o-1)h=0;return ub(a,b,h).then((function(){ob(a,h,d)}))}function tb(a,b){if(!b&&!a.F)return 0;var c=Math.round(b/a.F),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.h+d;return b=a.shouldLoop?0>b?a.o-1:b>=a.o?0:b:0>b?0:b>=a.o?a.o-1:b}function vb(a,b){var c=String(b+1),d=String(a.o);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}g.getPrevButtonTitle=function(){var a=this.h;a=0<=a-1?a-1:this.shouldLoop?this.o-1:null;a=null==a?0:a;return W.prototype.getPrevButtonTitle.call(this)+vb(this,a)};g.getNextButtonTitle=function(){var a=this.h;a=a+1<this.o?a+1:this.shouldLoop?0:null;a=null==a?this.o-1:a;return W.prototype.getNextButtonTitle.call(this)+vb(this,a)};function ob(a,b,c){if(ka(b)&&null!==a.h){a.Y=!0;var d=tb(a,b);a.H.mutate((function(){rb(a,d,c);a.H.mutate((function(){a.Y=!1}))}))}}g.goToSlide=function(a,b){var c=parseInt(a,10);!isFinite(c)||0>c||c>=this.o?this.user().error("AMP-CAROUSEL","Invalid [slide] value: ",a):null===this.h?this.na=c:rb(this,c,b)};function pb(a,b){var c=a.o;if(0>b||b>=c||a.h==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?a.o-1:null,e=b+1<a.o?b+1:a.shouldLoop?0:null,f=[];null!=d&&f.push(d);f.push(b);null!=e&&e!==d&&f.push(e);if(void 0===a.C[b])return B().error("AMP-CAROUSEL","Attempting to access a non-existant slide %s / %s",b,c),!1;f.forEach((function(h,n){a.shouldLoop&&Ta(a.N[h],n+1);a.N[h].classList.add("i-amphtml-slide-item-show");var k=F(a.element);h==b?(k.scheduleLayout(a.element,a.C[h]),k.scheduleResume(a.element,a.C[h]),a.C[h].setAttribute("aria-hidden","false")):(k.schedulePreload(a.element,a.C[h]),a.C[h].setAttribute("aria-hidden","true"))}));a.j.scrollLeft=qb(a,b);wb(a,b);a.h=b;a.M&&a.h===a.o-1&&(a.oa++,a.oa==a.M&&a.removeAutoplay());xb(a,f);a.setControlsState();a.updateButtonTitles();return!0}function rb(a,b,c){var d=void 0===c?1:c;if(pb(a,b)){var e=a.win;c={index:b};var f={detail:c};Object.assign(f,void 0);"function"==typeof e.CustomEvent?c=new e.CustomEvent("slidescroll.slideChange",f):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("slidescroll.slideChange",!!f.bubbles,!!f.cancelable,c),c=e);a.Z.trigger(a.element,"slideChange",c,d);a=a.element;b={index:b,actionTrust:d};c=a.ownerDocument.createEvent("Event");c.data=b;c.initEvent("slideChange",Fa.bubbles,Fa.cancelable);a.dispatchEvent(c)}}function qb(a,b){var c=a.F;if(!a.shouldLoop&&0==b||1>=a.C.length)c=0;return c}function xb(a,b){for(var c=a.o,d=0;d<c;d++)a.N[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&Ta(a.N[d],""),a.N[d].classList.remove("i-amphtml-slide-item-show"),a.C[d].removeAttribute("aria-hidden")),a.h!=d&&F(a.element).schedulePause(a.element,a.C[d]))}function ub(a,b,c){if(b==c)return v();var d=Va(b,c);c=la(.8,0,.6,1);return L(a.j,(function(e){a.j.scrollLeft=d(e)}),80,c).thenAlways()}g.$=function(){R(this.element,"touchmove",(function(a){return a.stopPropagation()}))};function wb(a,b){var c=b-a.h;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.h&&(c=1));var d={fromSlide:null===a.h?"null":a.aa[a.h],toSlide:a.aa[b]};mb(a.element,"amp-carousel-change",d);1==c?mb(a.element,"amp-carousel-next",d):mb(a.element,"amp-carousel-prev",d)}}function yb(){return AMP.BaseElement.apply(this,arguments)||this}t(yb,AMP.BaseElement);yb.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new Y(this.element):new T(this.element)};(function(a){a.registerElement("amp-carousel",yb,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP)}});//# sourceMappingURL=amp-carousel-0.1.js.map