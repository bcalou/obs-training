!function(){"use strict";function t(t){l.push(t),1==l.length&&f()}function e(){for(;l.length;)l[0](),l.shift()}function n(t){this.a=u,this.b=void 0,this.f=[];var e=this;try{t(function(t){r(e,t)},function(t){a(e,t)})}catch(n){a(e,n)}}function i(t){return new n(function(e,n){n(t)})}function o(t){return new n(function(e){e(t)})}function r(t,e){if(t.a==u){if(e==t)throw new TypeError;var n=!1;try{var i=e&&e.then;if(null!=e&&"object"==typeof e&&"function"==typeof i)return void i.call(e,function(e){n||r(t,e),n=!0},function(e){n||a(t,e),n=!0})}catch(o){return void(n||a(t,o))}t.a=0,t.b=e,s(t)}}function a(t,e){if(t.a==u){if(e==t)throw new TypeError;t.a=1,t.b=e,s(t)}}function s(e){t(function(){if(e.a!=u)for(;e.f.length;){var t=e.f.shift(),n=t[0],i=t[1],o=t[2],t=t[3];try{0==e.a?o("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof i?o(i.call(void 0,e.b)):t(e.b))}catch(r){t(r)}}})}function c(t){return new n(function(e,n){function i(n){return function(i){a[n]=i,r+=1,r==t.length&&e(a)}}var r=0,a=[];0==t.length&&e(a);for(var s=0;s<t.length;s+=1)o(t[s]).c(i(s),n)})}function d(t){return new n(function(e,n){for(var i=0;i<t.length;i+=1)o(t[i]).c(e,n)})}var f,l=[];f=function(){setTimeout(e)};var u=2;n.prototype.g=function(t){return this.c(void 0,t)},n.prototype.c=function(t,e){var i=this;return new n(function(n,o){i.f.push([t,e,n,o]),s(i)})},window.Promise||(window.Promise=n,window.Promise.resolve=o,window.Promise.reject=i,window.Promise.race=d,window.Promise.all=c,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function n(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",n),t())})}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function o(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function r(e,n){function i(){var t=r;o(t)&&t.a.parentNode&&n(t.g)}var r=e;t(e.b,i),t(e.c,i),o(e)}function a(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function s(){if(null===u)if(c()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);u=!!t&&603>parseInt(t[1],10)}else u=!1;return u}function c(){return null===p&&(p=!!document.fonts),p}function d(){if(null===h){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(e){}h=""!==t.style.font}return h}function f(t,e){return[t.style,t.weight,d()?t.stretch:"","100px",e].join(" ")}var l=null,u=null,h=null,p=null;a.prototype.load=function(t,o){var a=this,d=t||"BESbswy",u=0,h=o||3e3,p=(new Date).getTime();return new Promise(function(t,o){if(c()&&!s()){var m=new Promise(function(t,e){function n(){(new Date).getTime()-p>=h?e():document.fonts.load(f(a,'"'+a.family+'"'),d).then(function(e){1<=e.length?t():setTimeout(n,25)},function(){e()})}n()}),w=new Promise(function(t,e){u=setTimeout(e,h)});Promise.race([w,m]).then(function(){clearTimeout(u),t(a)},function(){o(a)})}else e(function(){function e(){var e;(e=-1!=v&&-1!=y||-1!=v&&-1!=g||-1!=y&&-1!=g)&&((e=v!=y&&v!=g&&y!=g)||(null===l&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=l&&(v==b&&y==b&&g==b||v==x&&y==x&&g==x||v==E&&y==E&&g==E)),e=!e),e&&(T.parentNode&&T.parentNode.removeChild(T),clearTimeout(u),t(a))}function s(){if((new Date).getTime()-p>=h)T.parentNode&&T.parentNode.removeChild(T),o(a);else{var t=document.hidden;!0!==t&&void 0!==t||(v=c.a.offsetWidth,y=m.a.offsetWidth,g=w.a.offsetWidth,e()),u=setTimeout(s,50)}}var c=new n(d),m=new n(d),w=new n(d),v=-1,y=-1,g=-1,b=-1,x=-1,E=-1,T=document.createElement("div");T.dir="ltr",i(c,f(a,"sans-serif")),i(m,f(a,"serif")),i(w,f(a,"monospace")),T.appendChild(c.a),T.appendChild(m.a),T.appendChild(w.a),document.body.appendChild(T),b=c.a.offsetWidth,x=m.a.offsetWidth,E=w.a.offsetWidth,s(),r(c,function(t){v=t,e()}),i(c,f(a,'"'+a.family+'",sans-serif')),r(m,function(t){y=t,e()}),i(m,f(a,'"'+a.family+'",serif')),r(w,function(t){g=t,e()}),i(w,f(a,'"'+a.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=a:(window.FontFaceObserver=a,window.FontFaceObserver.prototype.load=a.prototype.load)}();