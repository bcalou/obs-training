!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.sdk=e():t.sdk=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(2),r=(o=i)&&o.__esModule?o:{default:o};e.default=r.default,t.exports=e.default},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=u(n(3)),c=u(n(4)),a=n(5);function u(t){return t&&t.__esModule?t:{default:t}}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.changeListeners=[],this.cookies=function(t){return"string"==typeof t?s.default.parse(t):"object"===(void 0===t?"undefined":i(t))&&null!==t?t:{}}(e),this.hooks=n,this.HAS_DOCUMENT_COOKIE=(0,a.hasDocumentCookie)()}return r(t,[{key:"_updateBrowserValues",value:function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=s.default.parse(document.cookie))}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._updateBrowserValues(),l(this.cookies[t],e)}},{key:"getAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._updateBrowserValues();var e={};for(var n in this.cookies)e[n]=l(this.cookies[n],t);return e}},{key:"set",value:function(t,e,n){"object"===(void 0===e?"undefined":i(e))&&(e=JSON.stringify(e)),this.hooks&&this.hooks.onSet&&this.hooks.onSet(t,e,n),this.cookies[t]=e,this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.default.serialize(t,e,n)),this._emitChange({name:t,value:e,options:n})}},{key:"remove",value:function(t,e){var n=e=(0,c.default)({},e,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.hooks&&this.hooks.onRemove&&this.hooks.onRemove(t,n),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.default.serialize(t,"",n)),this._emitChange({name:t,value:void 0,options:e})}},{key:"_emitChange",value:function(t){for(var e=0;e<this.changeListeners.length;++e)this.changeListeners[e](t)}},{key:"addChangeListener",value:function(t){this.changeListeners.push(t)}},{key:"removeChangeListener",value:function(t){var e=this.changeListeners.indexOf(t);e>=0&&this.changeListeners.splice(e,1)}}]),t}();function l(t){if(function(t,e){return void 0===e&&(e=!t||"{"!==t[0]&&"["!==t[0]&&'"'!==t[0]),!e}(t,(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).doNotParse))try{return JSON.parse(t)}catch(t){}return t}e.default=d,t.exports=e.default},function(t,e,n){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */e.parse=function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");for(var n={},i=e||{},s=t.split(r),a=i.decode||o,u=0;u<s.length;u++){var d=s[u],l=d.indexOf("=");if(!(l<0)){var f=d.substr(0,l).trim(),h=d.substr(++l,d.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),null==n[f]&&(n[f]=c(h,a))}}return n},e.serialize=function(t,e,n){var o=n||{},r=o.encode||i;if("function"!=typeof r)throw new TypeError("option encode is invalid");if(!s.test(t))throw new TypeError("argument name is invalid");var c=r(e);if(c&&!s.test(c))throw new TypeError("argument val is invalid");var a=t+"="+c;if(null!=o.maxAge){var u=o.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(u)}if(o.domain){if(!s.test(o.domain))throw new TypeError("option domain is invalid");a+="; Domain="+o.domain}if(o.path){if(!s.test(o.path))throw new TypeError("option path is invalid");a+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(a+="; HttpOnly");o.secure&&(a+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return a};var o=decodeURIComponent,i=encodeURIComponent,r=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function c(t,e){try{return e(t)}catch(e){return t}}},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=s(t),u=1;u<arguments.length;u++){for(var d in n=Object(arguments[u]))i.call(n,d)&&(a[d]=n[d]);if(o){c=o(n);for(var l=0;l<c.length;l++)r.call(n,c[l])&&(a[c[l]]=n[c[l]])}}return a}},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)};function r(){return"object"===("undefined"==typeof document?"undefined":i(document))&&"string"==typeof document.cookie}e.hasDocumentCookie=r,e.cleanCookies=function(){document.cookie.split(";").forEach((function(t){document.cookie=t.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}))};e.HAS_DOCUMENT_COOKIE=r()},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=function(){var t,e,n;return null!==(t="capdebug",e=window.location.href,null===(n=new RegExp("[\\?&]".concat(t,"=([^&#]*)")).exec(e))?null:n[1])},a=function(t){var e;("object"!==s(t)&&(t=[t]),console&&"function"==typeof console.log&&c())&&(e=console).log.apply(e,["%cCAPPING","display: inline-block; color: #61d2a3; background: #193a4a; padding: 1px 4px; border-radius: 3px;"].concat(r(t)))},u=function(t){var e;("object"!==s(t)&&(t=[t]),console&&"function"==typeof console.error&&c())&&(e=console).error.apply(e,["%cCAPPING","display: inline-block; color: #ff0000; background: #193a4a; padding: 1px 4px; border-radius: 3px;"].concat(r(t)))},d={url:"https://capping.lemonde.fr",timeout:3e3,togglePopinFunction:function(t){return"".concat(t)}};"undefined"!=typeof CAPPING_CONFIG&&function t(e,n){return Object.keys(n).forEach((function(o){void 0===e[o]?e[o]=n[o]:s(n[o])!==s(e[o])?a("bad configuration type for ".concat(o,", must be an instance of ").concat(s(e[o]))):"object"===s(n[o])?t(e[o],n[o]):e[o]=n[o]})),e}(d,CAPPING_CONFIG);var l=d;n.d(e,"Capping",(function(){return f}));var f={locked:!1,stayTunedRunning:!1,lastAction:"",state:"stop",hello:function(){var t=this;"hello"!==this.state&&(this.state="hello",this.lastAction="hello",a("hello"),window.fetch("".concat(l.url,"/hello?user=").concat(this.userId,"&brand=").concat(this.brand,"&device=").concat(this.deviceId,"&tolerance=").concat(this.tolerance)).then((function(t){return t.json()})).then((function(){"hello"===t.state&&t.ping()})).catch((function(e){t.state="stop",u("Error with hello - ".concat(e))})))},bye:function(){a("bye"),window.fetch("".concat(l.url,"/bye?user=").concat(this.userId,"&brand=").concat(this.brand,"&device=").concat(this.deviceId,"&tolerance=").concat(this.tolerance))},determined:function(){var t=this;"determined"!==this.state&&(this.state="determined",this.lastAction="determined",l.togglePopinFunction(""),a("hello determined"),window.fetch("".concat(l.url,"/hello?user=").concat(this.userId,"&brand=").concat(this.brand,"&device=").concat(this.deviceId,"&tolerance=").concat(this.tolerance,"&determined=1")).then((function(t){return t.json()})).then((function(){"determined"===t.state&&t.ping()})).catch((function(e){t.state="stop",u("Error with hello - ".concat(e))})))},ping:function(){"ping"!==this.state&&(this.state="ping",this.lastAction="ping",setTimeout(this.doPing.bind(this),l.timeout))},doPing:function(){var t=this;document[this.hidden]||"ping"!==this.state?a("stop to ping"):(a("ping"),window.fetch("".concat(l.url,"/ping?user=").concat(this.userId,"&brand=").concat(this.brand,"&device=").concat(this.deviceId,"&tolerance=").concat(this.tolerance)).then((function(t){return t.json()})).then((function(e){if("ping"===t.state)if(!0===e.pause)a("pause"),!0===e.block?(a("block"),l.togglePopinFunction(e.message),t.staytuned()):(t.state="stop",t.lastAction="");else{if(document[t.hidden])return t.state="stop",void a("stop to ping");t.state="stop",t.ping()}})).catch((function(e){t.state="stop",u("Error with ping - ".concat(e))})))},staytuned:function(){"staytuned"!==this.state&&(this.state="staytuned",this.lastAction="staytuned",setTimeout(this.doStaytuned.bind(this),l.timeout))},doStaytuned:function(){var t=this;document[this.hidden]||"staytuned"!==this.state?a("stop to stay tuned"):(a("stay tuned"),window.fetch("".concat(l.url,"/stayTuned?user=").concat(this.userId,"&brand=").concat(this.brand,"&device=").concat(this.deviceId,"&tolerance=").concat(this.tolerance)).then((function(t){return t.json()})).then((function(e){if("staytuned"===t.state)if(!0===e.block)document[t.hidden]?(t.state="stop",a("stop to stay tuned")):(t.state="stop",t.staytuned());else{if(document[t.hidden])return t.state="stop",void a("stop to stay tuned");a("unblock"),l.togglePopinFunction(""),"staytuned"===t.state&&t.hello()}})).catch((function(e){t.state="stop",u("Error with stay tuned - ".concat(e))})))},start:function(){var t=this;if(void 0!==document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),void 0!==l.userId&&void 0!==l.brand){void 0===l.tolerance&&(l.tolerance="");var e=new i.a;this.deviceId=e.get("lmd_cap"),this.deviceId||(this.deviceId="_".concat(Math.random().toString(36).substr(2,9)),e.set("lmd_cap",this.deviceId,{path:"/",maxAge:31536e3,domain:window.location.hostname})),this.userId=l.userId,this.brand=l.brand,this.tolerance=l.tolerance,this.hello();void 0===document.addEventListener||void 0===document[this.hidden]?u("Capping requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."):document.addEventListener(this.visibilityChange,(function(){if(document[t.hidden])a("visibility hidden"),"ping"===t.state&&(t.state="stop",t.bye()),"hello"===t.state&&(t.state="stop",setTimeout(t.bye.bind(t),l.timeout));else{if("staytuned"===t.lastAction)return void t.staytuned();"ping"!==t.lastAction&&"hello"!==t.lastAction||t.hello()}}),!1)}},stop:function(){this.state="stop"}};f.start(),window.restartCapping=function(){f.determined()},window.stopCapping=function(){f.stop()}}])}));
//# sourceMappingURL=sdk.v0.1.0.js.map