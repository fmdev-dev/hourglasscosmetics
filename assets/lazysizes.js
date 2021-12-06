!function(){"use strict";function t(t){var e=(getComputedStyle(t,null)||{}).fontFamily||"",i=e.match(r)||"",n=i&&e.match(a)||"";return n&&(n=n[1]),{fit:i&&i[1]||"",position:o[n]||n||"center"}}var e=document.createElement("a").style,i="objectFit"in e,r=/object-fit["']*\s*:\s*["']*(contain|cover)/,a=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,n="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",s=/\(|\)|'/,o={center:"center","50% 50%":"center"};i&&(i&&"objectPosition"in e)||addEventListener("lazyunveilread",function(e){var r=e.target,a=t(r);!a.fit||i&&"center"==a.position||function(t,e){var i,r=lazySizes.cfg,a=t.cloneNode(!1),o=a.style,l=function(){var e=t.currentSrc||t.src;e&&(o.backgroundImage="url("+(s.test(e)?JSON.stringify(e):e)+")",i||(i=!0,lazySizes.rC(a,r.loadingClass),lazySizes.aC(a,r.loadedClass)))};t._lazysizesParentFit=e.fit,t.addEventListener("load",function(){lazySizes.rAF(l)},!0),a.addEventListener("load",function(){var t=a.currentSrc||a.src;t&&t!=n&&(a.src=n,a.srcset="")}),lazySizes.rAF(function(){var i=t,s=t.parentNode;"PICTURE"==s.nodeName.toUpperCase()&&(i=s,s=s.parentNode),lazySizes.rC(a,r.loadedClass),lazySizes.rC(a,r.lazyClass),lazySizes.aC(a,r.loadingClass),lazySizes.aC(a,r.objectFitClass||"lazysizes-display-clone"),a.getAttribute(r.srcsetAttr)&&a.setAttribute(r.srcsetAttr,""),a.getAttribute(r.srcAttr)&&a.setAttribute(r.srcAttr,""),a.src=n,a.srcset="",o.backgroundRepeat="no-repeat",o.backgroundPosition=e.position,o.backgroundSize=e.fit,i.style.display="none",t.setAttribute("data-parent-fit",e.fit),t.setAttribute("data-parent-container","prev"),s.insertBefore(a,i),t._lazysizesParentFit&&delete t._lazysizesParentFit,t.complete&&l()})}(r,a)},!0)}(),function(t,e,i){"use strict";function r(e,i){var r,a,n,s,o=t.getComputedStyle(e);for(r in a=e.parentNode,s={isPicture:!(!a||!d.test(a.nodeName||""))},n=function(t,i){var r=e.getAttribute("data-"+t);if(!r){var a=o.getPropertyValue("--ls-"+t);a&&(r=a.trim())}if(r){if("true"==r)r=!0;else if("false"==r)r=!1;else if(u.test(r))r=parseFloat(r);else if("function"==typeof l[t])r=l[t](e,r);else if(p.test(r))try{r=JSON.parse(r)}catch(t){}s[t]=r}else t in l&&"function"!=typeof l[t]?s[t]=l[t]:i&&"function"==typeof l[t]&&(s[t]=l[t](e,r))},l)n(r);return i.replace(g,function(t,e){e in s||n(e,!0)}),s}function a(t,i,r){var a=0,n=0,s=r;if(t){if("container"===i.ratio){for(a=s.scrollWidth,n=s.scrollHeight;!(a&&n||s===e);)a=(s=s.parentNode).scrollWidth,n=s.scrollHeight;a&&n&&(i.ratio=n/a)}(t=function(t,e){var i=[];return i.srcset=[],e.absUrl&&(m.setAttribute("href",t),t=m.href),t=((e.prefix||"")+t+(e.postfix||"")).replace(g,function(t,i){return c[typeof e[i]]?e[i]:t}),e.widths.forEach(function(r){var a=e.widthmap[r]||r,n={u:t.replace(f,a).replace(z,e.ratio?Math.round(r*e.ratio):""),w:r};i.push(n),i.srcset.push(n.c=n.u+" "+r+"w")}),i}(t,i)).isPicture=i.isPicture,b&&"IMG"==r.nodeName.toUpperCase()?r.removeAttribute(o.srcsetAttr):r.setAttribute(o.srcsetAttr,t.srcset.join(", ")),Object.defineProperty(r,"_lazyrias",{value:t,writable:!0})}}function n(t,e){var i=r(t,e);return l.modifyOptions.call(t,{target:t,details:i,detail:i}),lazySizes.fire(t,"lazyriasmodifyoptions",i),i}function s(t){return t.getAttribute(t.getAttribute("data-srcattr")||l.srcAttr)||t.getAttribute(o.srcsetAttr)||t.getAttribute(o.srcAttr)||t.getAttribute("data-pfsrcset")||""}if(e.addEventListener){var o,l,c={string:1,number:1},u=/^\-*\+*\d+\.*\d*$/,d=/^picture$/i,f=/\s*\{\s*width\s*\}\s*/i,z=/\s*\{\s*height\s*\}\s*/i,g=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,p=/^\[.*\]|\{.*\}$/,y=/^(?:auto|\d+(px)?)$/,m=e.createElement("a"),v=e.createElement("img"),b="srcset"in v&&!("sizes"in v),A=!!t.HTMLPictureElement&&!b;!function(){var e,i={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:function(){},widthmap:{},ratio:!1};for(e in(o=t.lazySizes&&lazySizes.cfg||t.lazySizesConfig)||(o={},t.lazySizesConfig=o),o.supportsType||(o.supportsType=function(t){return!t}),o.rias||(o.rias={}),"widths"in(l=o.rias)||(l.widths=[],function(t){for(var e,i=0;!e||3e3>e;)(i+=5)>30&&(i+=1),e=36*i,t.push(e)}(l.widths)),i)e in l||(l[e]=i[e])}(),addEventListener("lazybeforesizes",function(t){var e,i,r,c,u,d,z,g,p,m,v,b,C;if(e=t.target,t.detail.dataAttr&&!t.defaultPrevented&&!l.disabled&&(p=e.getAttribute(o.sizesAttr)||e.getAttribute("sizes"))&&y.test(p)){if(r=n(e,i=s(e)),v=f.test(r.prefix)||f.test(r.postfix),r.isPicture&&(c=e.parentNode))for(d=0,z=(u=c.getElementsByTagName("source")).length;z>d;d++)(v||f.test(g=s(u[d])))&&(a(g,r,u[d]),b=!0);v||f.test(i)?(a(i,r,e),b=!0):b&&((C=[]).srcset=[],C.isPicture=!0,Object.defineProperty(e,"_lazyrias",{value:C,writable:!0})),b&&(A?e.removeAttribute(o.srcAttr):"auto"!=p&&(m={width:parseInt(p,10)},h({target:e,detail:m})))}},!0);var h=function(){var i=function(t,e){return t.w-e.w},r=function(t,e){var i;return!t._lazyrias&&lazySizes.pWS&&(i=lazySizes.pWS(t.getAttribute(o.srcsetAttr||""))).length&&(Object.defineProperty(t,"_lazyrias",{value:i,writable:!0}),e&&t.parentNode&&(i.isPicture="PICTURE"==t.parentNode.nodeName.toUpperCase())),t._lazyrias},a=function(e,a){var n,s,o,l,c,u;if((c=e._lazyrias).isPicture&&t.matchMedia)for(s=0,o=(n=e.parentNode.getElementsByTagName("source")).length;o>s;s++)if(r(n[s])&&!n[s].getAttribute("type")&&(!(l=n[s].getAttribute("media"))||(matchMedia(l)||{}).matches)){c=n[s]._lazyrias;break}return(!c.w||c.w<a)&&(c.w=a,c.d=function(e){var i=t.devicePixelRatio||1,r=lazySizes.getX&&lazySizes.getX(e);return Math.min(r||i,2.4,i)}(e),u=function(t){for(var e,i,r=t.length,a=t[r-1],n=0;r>n;n++)if((a=t[n]).d=a.w/t.w,a.d>=t.d){!a.cached&&(e=t[n-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(i=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*i),e.d+(a.d-t.d)*i>t.d&&(a=e));break}return a}(c.sort(i))),u},n=function(i){var s,l=i.target;return!b&&(t.respimage||t.picturefill||lazySizesConfig.pf)?void e.removeEventListener("lazybeforesizes",n):void(("_lazyrias"in l||i.detail.dataAttr&&r(l,!0))&&(s=a(l,i.detail.width),s&&s.u&&l._lazyrias.cur!=s.u&&(l._lazyrias.cur=s.u,s.cached=!0,lazySizes.rAF(function(){l.setAttribute(o.srcAttr,s.u),l.setAttribute("src",s.u)}))))};return A?n=function(){}:addEventListener("lazybeforesizes",n),n}()}}(window,document),function(t,e){var i=function(t,e){"use strict";if(e.getElementsByClassName){var i,r=e.documentElement,a=t.Date,n=t.HTMLPictureElement,s="addEventListener",o="getAttribute",l=t[s],c=t.setTimeout,u=t.requestAnimationFrame||c,d=t.requestIdleCallback,f=/^picture$/i,z=["load","error","lazyincluded","_lazyloaded"],g={},p=Array.prototype.forEach,y=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t[o]("class")||"")&&g[e]},m=function(t,e){y(t,e)||t.setAttribute("class",(t[o]("class")||"").trim()+" "+e)},v=function(t,e){var i;(i=y(t,e))&&t.setAttribute("class",(t[o]("class")||"").replace(i," "))},b=function(t,e,i){var r=i?s:"removeEventListener";i&&b(t,e),z.forEach(function(i){t[r](i,e)})},A=function(t,i,r,a,n){var s=e.createEvent("CustomEvent");return s.initCustomEvent(i,!a,!n,r||{}),t.dispatchEvent(s),s},h=function(e,r){var a;!n&&(a=t.picturefill||i.pf)?a({reevaluate:!0,elements:[e]}):r&&r.src&&(e.src=r.src)},C=function(t,e){return(getComputedStyle(t,null)||{})[e]},E=function(t,e,r){for(r=r||t.offsetWidth;r<i.minSize&&e&&!t._lazysizesWidth;)r=e.offsetWidth,e=e.parentNode;return r},S=function(){var t,i,r=[],a=[],n=r,s=function(){var e=n;for(n=r.length?a:r,t=!0,i=!1;e.length;)e.shift()();t=!1},o=function(r,a){t&&!a?r.apply(this,arguments):(n.push(r),i||(i=!0,(e.hidden?c:u)(s)))};return o._lsFlush=s,o}(),w=function(t,e){return e?function(){S(t)}:function(){var e=this,i=arguments;S(function(){t.apply(e,i)})}},_=function(t){var e,i=0,r=666,n=function(){e=!1,i=a.now(),t()},s=d?function(){d(n,{timeout:r}),666!==r&&(r=666)}:w(function(){c(n)},!0);return function(t){var n;(t=!0===t)&&(r=44),e||(e=!0,0>(n=125-(a.now()-i))&&(n=0),t||9>n&&d?s():c(s,n))}},N=function(t){var e,i,r=function(){e=null,t()},n=function(){var t=a.now()-i;99>t?c(n,99-t):(d||r)(r)};return function(){i=a.now(),e||(e=c(n,99))}},P=function(){var n,u,d,z,g,E,P,L,M,F,R,$,T,W,B,I=/^img$/i,O=/^iframe$/i,k="onscroll"in t&&!/glebot/.test(navigator.userAgent),j=0,U=0,H=-1,D=function(t){U--,t&&t.target&&b(t.target,D),(!t||0>U||!t.target)&&(U=0)},q=function(t,i){var a,n=t,s="hidden"==C(e.body,"visibility")||"hidden"!=C(t,"visibility");for(M-=i,$+=i,F-=i,R+=i;s&&(n=n.offsetParent)&&n!=e.body&&n!=r;)(s=(C(n,"opacity")||1)>0)&&"visible"!=C(n,"overflow")&&(a=n.getBoundingClientRect(),s=R>a.left&&F<a.right&&$>a.top-1&&M<a.bottom+1);return s},X=function(){var t,a,s,l,c,f,z,p,y;if((g=i.loadMode)&&8>U&&(t=n.length)){a=0,H++,null==W&&("expand"in i||(i.expand=r.clientHeight>500&&r.clientWidth>500?500:370),T=i.expand,W=T*i.expFactor),W>j&&1>U&&H>2&&g>2&&!e.hidden?(j=W,H=0):j=g>1&&H>1&&6>U?T:0;for(;t>a;a++)if(n[a]&&!n[a]._lazyRace)if(k)if((p=n[a][o]("data-expand"))&&(f=1*p)||(f=j),y!==f&&(P=innerWidth+f*B,L=innerHeight+f,z=-1*f,y=f),s=n[a].getBoundingClientRect(),($=s.bottom)>=z&&(M=s.top)<=L&&(R=s.right)>=z*B&&(F=s.left)<=P&&($||R||F||M)&&(d&&3>U&&!p&&(3>g||4>H)||q(n[a],f))){if(Z(n[a]),c=!0,U>9)break}else!c&&d&&!l&&4>U&&4>H&&g>2&&(u[0]||i.preloadAfterLoad)&&(u[0]||!p&&($||R||F||M||"auto"!=n[a][o](i.sizesAttr)))&&(l=u[0]||n[a]);else Z(n[a]);l&&!c&&Z(l)}},J=_(X),Q=function(t){m(t.target,i.loadedClass),v(t.target,i.loadingClass),b(t.target,G)},V=w(Q),G=function(t){V({target:t.target})},K=function(t){var e,r,a=t[o](i.srcsetAttr);(e=i.customMedia[t[o]("data-media")||t[o]("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a),e&&((r=t.parentNode).insertBefore(t.cloneNode(),t),r.removeChild(t))},Y=w(function(t,e,r,a,n){var s,l,u,d,g,y;(g=A(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(r?m(t,i.autosizesClass):t.setAttribute("sizes",a)),l=t[o](i.srcsetAttr),s=t[o](i.srcAttr),n&&(u=t.parentNode,d=u&&f.test(u.nodeName||"")),y=e.firesLoad||"src"in t&&(l||s||d),g={target:t},y&&(b(t,D,!0),clearTimeout(z),z=c(D,2500),m(t,i.loadingClass),b(t,G,!0)),d&&p.call(u.getElementsByTagName("source"),K),l?t.setAttribute("srcset",l):s&&!d&&(O.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,s):t.src=s),(l||d)&&h(t,{src:s})),t._lazyRace&&delete t._lazyRace,v(t,i.lazyClass),S(function(){(!y||t.complete&&t.naturalWidth>1)&&(y?D(g):U--,Q(g))},!0)}),Z=function(t){var e,r=I.test(t.nodeName),a=r&&(t[o](i.sizesAttr)||t[o]("sizes")),n="auto"==a;(!n&&d||!r||!t.src&&!t.srcset||t.complete||y(t,i.errorClass))&&(e=A(t,"lazyunveilread").detail,n&&x.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,U++,Y(t,e,n,a,r))},tt=function(){if(!d){if(a.now()-E<999)return void c(tt,999);var t=N(function(){i.loadMode=3,J()});d=!0,i.loadMode=3,J(),l("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){E=a.now(),n=e.getElementsByClassName(i.lazyClass),u=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),B=i.hFac,l("scroll",J,!0),l("resize",J,!0),t.MutationObserver?new MutationObserver(J).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",J,!0),r[s]("DOMAttrModified",J,!0),setInterval(J,999)),l("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e[s](t,J,!0)}),/d$|^c/.test(e.readyState)?tt():(l("load",tt),e[s]("DOMContentLoaded",J),c(tt,2e4)),n.length?(X(),S._lsFlush()):J()},checkElems:J,unveil:Z}}(),x=function(){var t,r=w(function(t,e,i,r){var a,n,s;if(t._lazysizesWidth=r,r+="px",t.setAttribute("sizes",r),f.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),n=0,s=a.length;s>n;n++)a[n].setAttribute("sizes",r);i.detail.dataAttr||h(t,i.detail)}),a=function(t,e,i){var a,n=t.parentNode;n&&(i=E(t,n,i),(a=A(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&r(t,n,a,i))},n=N(function(){var e,i=t.length;if(i)for(e=0;i>e;e++)a(t[e])});return{_:function(){t=e.getElementsByClassName(i.autosizesClass),l("resize",n)},checkElems:n,updateElem:a}}(),L=function(){L.i||(L.i=!0,x._(),P._())};return function(){var e,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};for(e in i=t.lazySizesConfig||t.lazysizesConfig||{},r)e in i||(i[e]=r[e]);t.lazySizesConfig=i,c(function(){i.init&&L()})}(),{cfg:i,autoSizer:x,loader:P,init:L,uP:h,aC:m,rC:v,hC:y,fire:A,gW:E,rAF:S}}}(t,t.document);t.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)}(window),function(t,e){"use strict";if(t.addEventListener){var i=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,a=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,n=/^picture$/i,s={getParent:function(e,i){var r=e,a=e.parentNode;return i&&"prev"!=i||!a||!n.test(a.nodeName||"")||(a=a.parentNode),"self"!=i&&(r="prev"==i?e.previousElementSibling:i&&(a.closest||t.jQuery)&&(a.closest?a.closest(i):jQuery(a).closest(i)[0])||a),r},getFit:function(t){var e,i,n=function(t){return getComputedStyle(t,null)||{}}(t),o=n.content||n.fontFamily,l={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!l.fit&&o&&(e=o.match(r))&&(l.fit=e[1]),l.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&o&&(e=o.match(a))&&(i=e[1]),l.parent=s.getParent(t,i)):l.fit=n.objectFit,l},getImageRatio:function(e){var r,a,s,o,l=e.parentNode,c=l&&n.test(l.nodeName||"")?l.querySelectorAll("source, img"):[e];for(r=0;r<c.length;r++)if(a=(e=c[r]).getAttribute(lazySizesConfig.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",s=e.getAttribute("media"),s=lazySizesConfig.customMedia[e.getAttribute("data-media")||s]||s,a&&(!s||(t.matchMedia&&matchMedia(s)||{}).matches)){!(o=parseFloat(e.getAttribute("data-aspectratio")))&&a.match(i)&&(o="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return o},calculateSize:function(t,e){var i,r,a,n,s=this.getFit(t),o=s.fit,l=s.parent;return"width"==o||("contain"==o||"cover"==o)&&(a=this.getImageRatio(t))?(l?e=l.clientWidth:l=t,n=e,"width"==o?n=e:(r=l.clientHeight)>40&&(i=e/r)&&("cover"==o&&a>i||"contain"==o&&i>a)&&(n=e*(a/i)),n):e}},o=function(){t.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=s),t.removeEventListener("lazyunveilread",o,!0))};t.addEventListener("lazyunveilread",o,!0),e.addEventListener("lazybeforesizes",function(t){if(!t.defaultPrevented){var e=t.target;t.detail.width=s.calculateSize(e,t.detail.width)}}),setTimeout(o)}}(window,document),function(t,e,i){"use strict";var r,a=t.lazySizes&&lazySizes.cfg||t.lazySizesConfig,n=e.createElement("img"),s="sizes"in n&&"srcset"in n,o=/\s+\d+h/g,l=function(){var t=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,i=Array.prototype.forEach;return function(r){var a=e.createElement("img"),n=function(e){var i,r=e.getAttribute(lazySizesConfig.srcsetAttr);r&&(r.match(t)&&((i="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1)&&e.setAttribute("data-aspectratio",i)),e.setAttribute(lazySizesConfig.srcsetAttr,r.replace(o,"")))},s=function(t){var e=t.target.parentNode;e&&"PICTURE"==e.nodeName&&i.call(e.getElementsByTagName("source"),n),n(t.target)},l=function(){a.currentSrc&&e.removeEventListener("lazybeforeunveil",s)};r[1]&&(e.addEventListener("lazybeforeunveil",s),a.onload=l,a.onerror=l,a.srcset="data:,a 1w 1h",a.complete&&l())}}();if(a||(a={},t.lazySizesConfig=a),a.supportsType||(a.supportsType=function(t){return!t}),!t.picturefill&&!a.pf){if(t.HTMLPictureElement&&s)return e.msElementsFromPoint&&l(navigator.userAgent.match(/Edge\/(\d+)/)),void(a.pf=function(){});a.pf=function(e){var i,a;if(!t.picturefill)for(i=0,a=e.elements.length;a>i;i++)r(e.elements[i])},r=function(){var i=function(t,e){return t.w-e.w},n=/^\s*\d+\.*\d*px\s*$/,l=function(){var t,e=/(([^,\s].[^\s]+)\s+(\d+)w)/g,i=/\s/,r=function(e,i,r,a){t.push({c:i,u:r,w:1*a})};return function(a){return t=[],(a=a.trim()).replace(o,"").replace(e,r),t.length||!a||i.test(a)||t.push({c:a,u:a,w:99}),t}}(),c=function(){var t,i,a;c.init||(c.init=!0,addEventListener("resize",(i=e.getElementsByClassName("lazymatchmedia"),a=function(){var t,e;for(t=0,e=i.length;e>t;t++)r(i[t])},function(){clearTimeout(t),t=setTimeout(a,66)})))},u=function(e,i){var r,n=e.getAttribute("srcset")||e.getAttribute(a.srcsetAttr);!n&&i&&(n=e._lazypolyfill?e._lazypolyfill._set:e.getAttribute(a.srcAttr)||e.getAttribute("src")),e._lazypolyfill&&e._lazypolyfill._set==n||(r=l(n||""),i&&e.parentNode&&(r.isPicture="PICTURE"==e.parentNode.nodeName.toUpperCase(),r.isPicture&&t.matchMedia&&(lazySizes.aC(e,"lazymatchmedia"),c())),r._set=n,Object.defineProperty(e,"_lazypolyfill",{value:r,writable:!0}))},d=function(e){var i=t.devicePixelRatio||1,r=lazySizes.getX&&lazySizes.getX(e);return Math.min(r||i,2.5,i)},f=function(e){return t.matchMedia?(f=function(t){return!t||(matchMedia(t)||{}).matches})(e):!e},z=function(t){var e,r,s,o,l,c,z;if(u(o=t,!0),(l=o._lazypolyfill).isPicture)for(r=0,s=(e=t.parentNode.getElementsByTagName("source")).length;s>r;r++)if(a.supportsType(e[r].getAttribute("type"),t)&&f(e[r].getAttribute("media"))){o=e[r],u(o),l=o._lazypolyfill;break}return l.length>1?(z=o.getAttribute("sizes")||"",z=n.test(z)&&parseInt(z,10)||lazySizes.gW(t,t.parentNode),l.d=d(t),!l.src||!l.w||l.w<z?(l.w=z,c=function(t){for(var e,i,r=t.length,a=t[r-1],n=0;r>n;n++)if((a=t[n]).d=a.w/t.w,a.d>=t.d){!a.cached&&(e=t[n-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(i=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*i),e.d+(a.d-t.d)*i>t.d&&(a=e));break}return a}(l.sort(i)),l.src=c):c=l.src):c=l[0],c},g=function(t){if(!s||!t.parentNode||"PICTURE"==t.parentNode.nodeName.toUpperCase()){var e=z(t);e&&e.u&&t._lazypolyfill.cur!=e.u&&(t._lazypolyfill.cur=e.u,e.cached=!0,t.setAttribute(a.srcAttr,e.u),t.setAttribute("src",e.u))}};return g.parse=l,g}(),a.loadedClass&&a.loadingClass&&function(){var t=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(e){t.push(e+a.loadedClass),t.push(e+a.loadingClass)}),a.pf({elements:e.querySelectorAll(t.join(", "))})}()}}(window,document),function(t){"use strict";var e,i=t.createElement("img");!("srcset"in i)||"sizes"in i||window.HTMLPictureElement||(e=/^picture$/i,t.addEventListener("lazybeforeunveil",function(i){var r,a,n,s,o,l,c;!i.defaultPrevented&&!lazySizesConfig.noIOSFix&&(r=i.target)&&(n=r.getAttribute(lazySizesConfig.srcsetAttr))&&(a=r.parentNode)&&((o=e.test(a.nodeName||""))||(s=r.getAttribute("sizes")||r.getAttribute(lazySizesConfig.sizesAttr)))&&(l=o?a:t.createElement("picture"),r._lazyImgSrc||Object.defineProperty(r,"_lazyImgSrc",{value:t.createElement("source"),writable:!0}),c=r._lazyImgSrc,s&&c.setAttribute("sizes",s),c.setAttribute(lazySizesConfig.srcsetAttr,n),r.setAttribute("data-pfsrcset",n),r.removeAttribute(lazySizesConfig.srcsetAttr),o||(a.insertBefore(l,r),l.appendChild(r)),l.insertBefore(c,r))}))}(document),function(){"use strict";if(window.addEventListener){var t=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,i=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,r=/\(|\)|'/,a={contain:1,cover:1},n=function(r,a,n){var s=document.createElement("picture"),o=a.getAttribute(lazySizesConfig.sizesAttr),l=a.getAttribute("data-ratio"),c=a.getAttribute("data-optimumx");a._lazybgset&&a._lazybgset.parentNode==a&&a.removeChild(a._lazybgset),Object.defineProperty(n,"_lazybgset",{value:a,writable:!0}),Object.defineProperty(a,"_lazybgset",{value:s,writable:!0}),r=r.replace(t," ").split(e),s.style.display="none",n.className=lazySizesConfig.lazyClass,1!=r.length||o||(o="auto"),r.forEach(function(t){var e=document.createElement("source");o&&"auto"!=o&&e.setAttribute("sizes",o),t.match(i)&&(e.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&e.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),s.appendChild(e)}),o&&(n.setAttribute(lazySizesConfig.sizesAttr,o),a.removeAttribute(lazySizesConfig.sizesAttr),a.removeAttribute("sizes")),c&&n.setAttribute("data-optimumx",c),l&&n.setAttribute("data-ratio",l),s.appendChild(n),a.appendChild(s)},s=function(t){if(t.target._lazybgset){var e=t.target,i=e._lazybgset,a=e.currentSrc||e.src;a&&(i.style.backgroundImage="url("+(r.test(a)?JSON.stringify(a):a)+")"),e._lazybgsetLoading&&(lazySizes.fire(i,"_lazyloaded",{},!1,!0),delete e._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(t){var e,i,r;!t.defaultPrevented&&(e=t.target.getAttribute("data-bgset"))&&(r=t.target,(i=document.createElement("img")).alt="",i._lazybgsetLoading=!0,t.detail.firesLoad=!0,n(e,r,i),setTimeout(function(){lazySizes.loader.unveil(i),lazySizes.rAF(function(){lazySizes.fire(i,"_lazyloaded",{},!0,!0),i.complete&&s({target:i})})}))}),document.addEventListener("load",s,!0),window.addEventListener("lazybeforesizes",function(t){if(t.target._lazybgset&&t.detail.dataAttr){var e=function(t){var e;return e=(getComputedStyle(t)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!a[e]&&a[t.style.backgroundSize]&&(e=t.style.backgroundSize),e}(t.target._lazybgset);a[e]&&(t.target._lazysizesParentFit=e,lazySizes.rAF(function(){t.target.setAttribute("data-parent-fit",e),t.target._lazysizesParentFit&&delete t.target._lazysizesParentFit}))}},!0),document.documentElement.addEventListener("lazybeforesizes",function(t){!t.defaultPrevented&&t.target._lazybgset&&(t.detail.width=function(t){var e=lazySizes.gW(t,t.parentNode);return(!t._lazysizesWidth||e>t._lazysizesWidth)&&(t._lazysizesWidth=e),t._lazysizesWidth}(t.target._lazybgset))})}}();