/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*!
 * jQuery++ - 2.0.0
 * http://jquerypp.com
 * Copyright (c) 2015 Bitovi
 * Sun, 20 Sep 2015 11:59:42 GMT
 * Licensed MIT

 * Includes: jquerypp/event/drag/drag
 * Download from: http://bitbuilder.herokuapp.com/jquerypp.custom.js?plugins=jquerypp%2Fevent%2Fdrag%2Fdrag
 */
/*[global-shim-start]*/
(function (exports, global){
    var origDefine = global.define;
    //polyfill for modern browsers.
    SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) { return elem.getScreenCTM().inverse().multiply(this.getScreenCTM()); }; 
	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses only the exports objet
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		},
		orig: global.System
	};
})({"jquery":"jQuery","zepto":"Zepto"},window)
/*jquerypp@2.0.0#lang/vector/vector*/
define('jquerypp/lang/vector/vector', ['jquery'], function ($) {
    var getSetZero = function (v) {
            return v !== undefined ? this.array[0] = v : this.array[0];
        }, getSetOne = function (v) {
            return v !== undefined ? this.array[1] = v : this.array[1];
        };
    $.Vector = function (arr) {
        var array = $.isArray(arr) ? arr : $.makeArray(arguments);
        this.update(array);
    };
    $.Vector.prototype = {
        app: function (f) {
            var i, newArr = [];
            for (i = 0; i < this.array.length; i++) {
                newArr.push(f(this.array[i], i));
            }
            return new $.Vector(newArr);
        },
        plus: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                arr[i] = (arr[i] ? arr[i] : 0) + args[i];
            }
            return vec.update(arr);
        },
        minus: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                arr[i] = (arr[i] ? arr[i] : 0) - args[i];
            }
            return vec.update(arr);
        },
        equals: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                if (arr[i] != args[i]) {
                    return null;
                }
            }
            return vec.update(arr);
        },
        x: getSetZero,
        left: getSetZero,
        width: getSetZero,
        y: getSetOne,
        top: getSetOne,
        height: getSetOne,
        toString: function () {
            return '(' + this.array.join(', ') + ')';
        },
        update: function (array) {
            var i;
            if (this.array) {
                for (i = 0; i < this.array.length; i++) {
                    delete this.array[i];
                }
            }
            this.array = array;
            for (i = 0; i < array.length; i++) {
                this[i] = this.array[i];
            }
            return this;
        }
    };
    $.Event.prototype.vector = function () {
        var touches = 'ontouchend' in document && this.originalEvent.changedTouches && this.originalEvent.changedTouches.length ? this.originalEvent.changedTouches[0] : this;
        if (this.originalEvent.synthetic) {
            var doc = document.documentElement, body = document.body;
            return new $.Vector(touches.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0), touches.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0));
        } else {
            return new $.Vector(touches.pageX, touches.pageY);
        }
    };
    $.fn.offsetv = function () {
        if (this[0] == window) {
            return new $.Vector(window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft, window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop);
        } else {
            var offset = this.offset() || {};
            return new $.Vector(offset.left, offset.top);
        }
    };
    $.fn.dimensionsv = function (which) {
        if (this[0] == window || !which) {
            return new $.Vector(this.width(), this.height());
        } else {
            return new $.Vector(this[which + 'Width'](), this[which + 'Height']());
        }
    };
    return $;
});
/*jquerypp@2.0.0#event/livehack/livehack*/
define('jquerypp/event/livehack/livehack', ['jquery'], function ($) {
    var event = $.event, findHelper = function (events, types, callback, selector) {
            var t, type, typeHandlers, all, h, handle, namespaces, namespace, match;
            for (t = 0; t < types.length; t++) {
                type = types[t];
                all = type.indexOf('.') < 0;
                if (!all) {
                    namespaces = type.split('.');
                    type = namespaces.shift();
                    namespace = new RegExp('(^|\\.)' + namespaces.slice(0).sort().join('\\.(?:.*\\.)?') + '(\\.|$)');
                }
                typeHandlers = (events[type] || []).slice(0);
                for (h = 0; h < typeHandlers.length; h++) {
                    handle = typeHandlers[h];
                    match = all || namespace.test(handle.namespace);
                    if (match) {
                        if (selector) {
                            if (handle.selector === selector) {
                                callback(type, handle.origHandler || handle.handler);
                            }
                        } else if (selector === null) {
                            callback(type, handle.origHandler || handle.handler, handle.selector);
                        } else if (!handle.selector) {
                            callback(type, handle.origHandler || handle.handler);
                        }
                    }
                }
            }
        };
    event.find = function (el, types, selector) {
        var events = ($._data(el) || {}).events, handlers = [], t, liver, live;
        if (!events) {
            return handlers;
        }
        findHelper(events, types, function (type, handler) {
            handlers.push(handler);
        }, selector);
        return handlers;
    };
    event.findBySelector = function (el, types) {
        var events = $._data(el).events, selectors = {}, add = function (selector, event, handler) {
                var select = selectors[selector] || (selectors[selector] = {}), events = select[event] || (select[event] = []);
                events.push(handler);
            };
        if (!events) {
            return selectors;
        }
        findHelper(events, types, function (type, handler, selector) {
            add(selector || '', type, handler);
        }, null);
        return selectors;
    };
    event.supportTouch = 'ontouchend' in document;
    $.fn.respondsTo = function (events) {
        if (!this.length) {
            return false;
        } else {
            return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
        }
    };
    $.fn.triggerHandled = function (event, data) {
        event = typeof event == 'string' ? $.Event(event) : event;
        this.trigger(event, data);
        return event.handled;
    };
    event.setupHelper = function (types, startingEvent, onFirst) {
        if (!onFirst) {
            onFirst = startingEvent;
            startingEvent = null;
        }
        var add = function (handleObj) {
                var bySelector, selector = handleObj.selector || '', namespace = handleObj.namespace ? '.' + handleObj.namespace : '';
                if (selector) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length) {
                        $(this).delegate(selector, startingEvent + namespace, onFirst);
                    }
                } else {
                    if (!event.find(this, types, selector).length) {
                        event.add(this, startingEvent + namespace, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            }, remove = function (handleObj) {
                var bySelector, selector = handleObj.selector || '';
                if (selector) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length) {
                        $(this).undelegate(selector, startingEvent, onFirst);
                    }
                } else {
                    if (!event.find(this, types, selector).length) {
                        event.remove(this, startingEvent, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            };
        $.each(types, function () {
            event.special[this] = {
                add: add,
                remove: remove,
                setup: function () {
                },
                teardown: function () {
                }
            };
        });
    };
    return $;
});
/*jquerypp@2.0.0#event/reverse/reverse*/
define('jquerypp/event/reverse/reverse', ['jquery'], function ($) {
    $.event.reverse = function (name, attributes) {
        var bound = $(), count = 0, dispatch = $.event.handle || $.event.dispatch;
        $.event.special[name] = {
            setup: function () {
                if (this !== window) {
                    bound.push(this);
                    $.unique(bound);
                }
                return this !== window;
            },
            teardown: function () {
                bound = bound.not(this);
                return this !== window;
            },
            add: function (handleObj) {
                var origHandler = handleObj.handler;
                handleObj.origHandler = origHandler;
                handleObj.handler = function (ev, data) {
                    var isWindow = this === window;
                    if (attributes && attributes.handler) {
                        var result = attributes.handler.apply(this, arguments);
                        if (result === true) {
                            return;
                        }
                    }
                    if (count === 0) {
                        count++;
                        var where = data === false ? ev.target : this;
                        dispatch.call(where, ev, data);
                        if (ev.isPropagationStopped()) {
                            count--;
                            return;
                        }
                        var index = bound.index(this), length = bound.length, child, sub;
                        while (++index < length && (child = bound[index]) && (isWindow || $.contains(where, child))) {
                            dispatch.call(child, ev, data);
                            if (ev.isPropagationStopped()) {
                                while (++index < length && (sub = bound[index])) {
                                    if (!$.contains(child, sub)) {
                                        index--;
                                        break;
                                    }
                                }
                            }
                        }
                        ev.stopImmediatePropagation();
                        count--;
                    } else {
                        handleObj.origHandler.call(this, ev, data);
                    }
                };
            }
        };
        $([
            document,
            window
        ]).bind(name, function () {
        });
        return $.event.special[name];
    };
    return $;
});
/*jquerypp@2.0.0#event/drag/core/core*/
define('jquerypp/event/drag/core/core', [
    'jquery',
    'jquerypp/lang/vector/vector',
    'jquerypp/event/livehack/livehack',
    'jquerypp/event/reverse/reverse'
], function ($) {
    if (!$.event.special.move) {
        $.event.reverse('move');
    }
    var bind = function (object, method) {
            var args = Array.prototype.slice.call(arguments, 2);
            return function () {
                var args2 = [this].concat(args, $.makeArray(arguments));
                return method.apply(object, args2);
            };
        }, event = $.event, clearSelection = window.getSelection ? function () {
            window.getSelection().removeAllRanges();
        } : function () {
        }, supportTouch = !window._phantom && 'ontouchend' in document, startEvent = supportTouch ? 'touchstart' : 'mousedown', stopEvent = supportTouch ? 'touchend' : 'mouseup', moveEvent = supportTouch ? 'touchmove' : 'mousemove', preventTouchScroll = function (ev) {
            ev.preventDefault();
        };
    $.Drag = function () {
    };
    $.extend($.Drag, {
        lowerName: 'drag',
        current: null,
        distance: 0,
        mousedown: function (ev, element) {
            var isLeftButton = ev.button === 0 || ev.button == 1, doEvent = isLeftButton || supportTouch;
            if (!doEvent || this.current) {
                return;
            }
            var drag = new $.Drag(), delegate = ev.delegateTarget || element, selector = ev.handleObj.selector, self = this;
            this.current = drag;
            drag.setup({
                element: element,
                delegate: ev.delegateTarget || element,
                selector: ev.handleObj.selector,
                moved: false,
                _distance: this.distance,
                callbacks: {
                    dragdown: event.find(delegate, ['dragdown'], selector),
                    draginit: event.find(delegate, ['draginit'], selector),
                    dragover: event.find(delegate, ['dragover'], selector),
                    dragmove: event.find(delegate, ['dragmove'], selector),
                    dragout: event.find(delegate, ['dragout'], selector),
                    dragend: event.find(delegate, ['dragend'], selector),
                    dragcleanup: event.find(delegate, ['dragcleanup'], selector)
                },
                destroyed: function () {
                    self.current = null;
                }
            }, ev);
        }
    });
    $.extend($.Drag.prototype, {
        setup: function (options, ev) {
            $.extend(this, options);
            this.element = $(this.element);
            this.event = ev;
            this.moved = false;
            this.allowOtherDrags = false;
            var mousemove = bind(this, this.mousemove), mouseup = bind(this, this.mouseup);
            this._mousemove = mousemove;
            this._mouseup = mouseup;
            this._distance = options.distance ? options.distance : 0;
            this.mouseStartPosition = ev.vector();
            $(document).bind(moveEvent, mousemove);
            $(document).bind(stopEvent, mouseup);
            if (supportTouch) {
                $(document).bind(moveEvent, preventTouchScroll);
            }
            if (!this.callEvents('down', this.element, ev)) {
                this.noSelection(this.delegate);
                clearSelection();
            }
        },
        destroy: function () {
            $(document).unbind(moveEvent, this._mousemove);
            $(document).unbind(stopEvent, this._mouseup);
            if (supportTouch) {
                $(document).unbind(moveEvent, preventTouchScroll);
            }
            if (!this.moved) {
                this.event = this.element = null;
            }
            if (!supportTouch) {
                this.selection(this.delegate);
            }
            this.destroyed();
        },
        mousemove: function (docEl, ev) {
            if (!this.moved) {
                var dist = Math.sqrt(Math.pow(ev.pageX - this.event.pageX, 2) + Math.pow(ev.pageY - this.event.pageY, 2));
                if (dist < this._distance) {
                    return false;
                }
                this.init(this.element, ev);
                this.moved = true;
            }
            this.element.trigger('move', this);
            var pointer = ev.vector();
            if (this._start_position && this._start_position.equal(pointer)) {
                return;
            }
            this.draw(pointer, ev);
        },
        mouseup: function (docEl, event) {
            if (this.moved) {
                this.end(event);
            }
            this.destroy();
        },
        noSelection: function (elm) {
            elm = elm || this.delegate;
            document.documentElement.onselectstart = function () {
                return false;
            };
            document.documentElement.unselectable = 'on';
            this.selectionDisabled = this.selectionDisabled ? this.selectionDisabled.add(elm) : $(elm);
            this.selectionDisabled.css('-moz-user-select', '-moz-none');
        },
        selection: function () {
            if (this.selectionDisabled) {
                document.documentElement.onselectstart = function () {
                };
                document.documentElement.unselectable = 'off';
                this.selectionDisabled.css('-moz-user-select', '');
            }
        },
        init: function (element, event) {
            element = $(element);
            var startElement = this.movingElement = this.element = $(element);
            this._cancelled = false;
            this.event = event;
            this.mouseElementPosition = this.mouseStartPosition.minus(this.element.offsetv());
            this.callEvents('init', element, event);
            if (this._cancelled === true) {
                return;
            }
            this.startPosition = startElement != this.movingElement ? this.movingElement.offsetv() : this.currentDelta();
            this.makePositioned(this.movingElement);
            this.oldZIndex = this.movingElement.css('zIndex');
            this.movingElement.css('zIndex', 1000);
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.compile(event, this);
            }
        },
        makePositioned: function (that) {
            var style, pos = that.css('position');
            if (!pos || pos == 'static') {
                style = { position: 'relative' };
                if (window.opera) {
                    style.top = '0px';
                    style.left = '0px';
                }
                that.css(style);
            }
        },
        callEvents: function (type, element, event, drop) {
            var i, cbs = this.callbacks[this.constructor.lowerName + type];
            for (i = 0; i < cbs.length; i++) {
                cbs[i].call(element, event, this, drop);
            }
            return cbs.length;
        },
        currentDelta: function () {
            return new $.Vector(parseInt(this.movingElement.css('left'), 10) || 0, parseInt(this.movingElement.css('top'), 10) || 0);
        },
        draw: function (pointer, event) {
            if (this._cancelled) {
                return;
            }
            clearSelection();
            this.location = pointer.minus(this.mouseElementPosition);
            this.move(event);
            if (this._cancelled) {
                return;
            }
            if (!event.isDefaultPrevented()) {
                this.position(this.location);
            }
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.show(pointer, this, event);
            }
        },
        position: function (newOffsetv) {
            var style, dragged_element_css_offset = this.currentDelta(), dragged_element_position_vector = this.movingElement.offsetv().minus(dragged_element_css_offset);
            this.required_css_position = newOffsetv.minus(dragged_element_position_vector);
            this.offsetv = newOffsetv;
            style = this.movingElement[0].style;
            if (!this._cancelled && !this._horizontal) {
                style.top = this.required_css_position.top() + 'px';
            }
            if (!this._cancelled && !this._vertical) {
                style.left = this.required_css_position.left() + 'px';
            }
        },
        move: function (event) {
            this.callEvents('move', this.element, event);
        },
        over: function (event, drop) {
            this.callEvents('over', this.element, event, drop);
        },
        out: function (event, drop) {
            this.callEvents('out', this.element, event, drop);
        },
        end: function (event) {
            if (this._cancelled) {
                return;
            }
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.end(event, this);
            }
            this.callEvents('end', this.element, event);
            if (this._revert) {
                var self = this;
                this.movingElement.animate({
                    top: this.startPosition.top() + 'px',
                    left: this.startPosition.left() + 'px'
                }, function () {
                    self.cleanup.apply(self, arguments);
                });
            } else {
                this.cleanup(event);
            }
            this.event = null;
        },
        cleanup: function (event) {
            this.movingElement.css({ zIndex: this.oldZIndex });
            if (this.movingElement[0] !== this.element[0] && !this.movingElement.has(this.element[0]).length && !this.element.has(this.movingElement[0]).length) {
                this.movingElement.css({ display: 'none' });
            }
            if (this._removeMovingElement) {
                this.movingElement.remove();
            }
            if (event) {
                this.callEvents('cleanup', this.element, event);
            }
            this.movingElement = this.element = this.event = null;
        },
        cancel: function () {
            this._cancelled = true;
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.clear(this.event.vector(), this, this.event);
            }
            this.destroy();
        },
        ghost: function (parent) {
            var ghost = this.movingElement.clone().css('position', 'absolute');
            if (parent) {
                $(parent).append(ghost);
            } else {
                $(this.movingElement).after(ghost);
            }
            ghost.width(this.movingElement.width()).height(this.movingElement.height());
            ghost.offset(this.movingElement.offset());
            this.movingElement = ghost;
            this.noSelection(ghost);
            this._removeMovingElement = true;
            return ghost;
        },
        representative: function (element, offsetX, offsetY) {
            this._offsetX = offsetX || 0;
            this._offsetY = offsetY || 0;
            var p = this.mouseStartPosition;
            this.movingElement = $(element);
            this.movingElement.css({
                top: p.y() - this._offsetY + 'px',
                left: p.x() - this._offsetX + 'px',
                display: 'block',
                position: 'absolute'
            }).show();
            this.noSelection(this.movingElement);
            this.mouseElementPosition = new $.Vector(this._offsetX, this._offsetY);
            return this;
        },
        revert: function (val) {
            this._revert = val === undefined ? true : val;
            return this;
        },
        vertical: function () {
            this._vertical = true;
            return this;
        },
        horizontal: function () {
            this._horizontal = true;
            return this;
        },
        only: function (only) {
            return this._only = only === undefined ? true : only;
        },
        distance: function (val) {
            if (val !== undefined) {
                this._distance = val;
                return this;
            } else {
                return this._distance;
            }
        }
    });
    event.setupHelper([
        'dragdown',
        'draginit',
        'dragover',
        'dragmove',
        'dragout',
        'dragend',
        'dragcleanup'
    ], startEvent, function (e) {
        $.Drag.mousedown.call($.Drag, e, this);
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/step/step*/
define('jquerypp/event/drag/step/step', [
    'jquery',
    'jquerypp/event/drag/core/core'
], function ($) {
    var round = function (x, m) {
        return Math.round(x / m) * m;
    };
    $.Drag.prototype.step = function (amount, container, center) {
        if (typeof amount == 'number') {
            amount = {
                x: amount,
                y: amount
            };
        }
        container = container || $(document.body);
        this._step = amount;
        var styles = container.css([
                'borderTopWidth',
                'paddingTop',
                'borderLeftWidth',
                'paddingLeft'
            ]);
        var top = parseInt(styles.borderTopWidth) + parseInt(styles.paddingTop), left = parseInt(styles.borderLeftWidth) + parseInt(styles.paddingLeft);
        this._step.offset = container.offsetv().plus(left, top);
        this._step.center = center;
        return this;
    };
    (function () {
        var oldPosition = $.Drag.prototype.position;
        $.Drag.prototype.position = function (offsetPositionv) {
            if (this._step) {
                var step = this._step, center = step.center && step.center.toLowerCase(), movingSize = this.movingElement.dimensionsv('outer'), lot = step.offset.top() - (center && center != 'x' ? movingSize.height() / 2 : 0), lof = step.offset.left() - (center && center != 'y' ? movingSize.width() / 2 : 0);
                if (this._step.x) {
                    offsetPositionv.left(Math.round(lof + round(offsetPositionv.left() - lof, this._step.x)));
                }
                if (this._step.y) {
                    offsetPositionv.top(Math.round(lot + round(offsetPositionv.top() - lot, this._step.y)));
                }
            }
            oldPosition.call(this, offsetPositionv);
        };
    }());
    return $;
});
/*jquerypp@2.0.0#event/drag/limit/limit*/
define('jquerypp/event/drag/limit/limit', [
    'jquery',
    'jquerypp/event/drag/core/core'
], function ($) {
    $.Drag.prototype.limit = function (container, center) {
        var styles = container.css([
                'borderTopWidth',
                'paddingTop',
                'borderLeftWidth',
                'paddingLeft'
            ]), paddingBorder = new $.Vector(parseInt(styles.borderLeftWidth, 10) + parseInt(styles.paddingLeft, 10) || 0, parseInt(styles.borderTopWidth, 10) + parseInt(styles.paddingTop, 10) || 0);
        this._limit = {
            offset: container.offsetv().plus(paddingBorder),
            size: container.dimensionsv(),
            center: center === true ? 'both' : center
        };
        return this;
    };
    var oldPosition = $.Drag.prototype.position;
    $.Drag.prototype.position = function (offsetPositionv) {
        if (this._limit) {
            var limit = this._limit, center = limit.center && limit.center.toLowerCase(), movingSize = this.movingElement.dimensionsv('outer'), halfHeight = center && center != 'x' ? movingSize.height() / 2 : 0, halfWidth = center && center != 'y' ? movingSize.width() / 2 : 0, lot = limit.offset.top(), lof = limit.offset.left(), height = limit.size.height(), width = limit.size.width();
            if (offsetPositionv.top() + halfHeight < lot) {
                offsetPositionv.top(lot - halfHeight);
            }
            if (offsetPositionv.top() + movingSize.height() - halfHeight > lot + height) {
                offsetPositionv.top(lot + height - movingSize.height() + halfHeight);
            }
            if (offsetPositionv.left() + halfWidth < lof) {
                offsetPositionv.left(lof - halfWidth);
            }
            if (offsetPositionv.left() + movingSize.width() - halfWidth > lof + width) {
                offsetPositionv.left(lof + width - movingSize.left() + halfWidth);
            }
        }
        oldPosition.call(this, offsetPositionv);
    };
    return $;
});
/*jquerypp@2.0.0#dom/within/within*/
define('jquerypp/dom/within/within', ['jquery'], function ($) {
    var withinBox = function (x, y, left, top, width, height) {
        return y >= top && y < top + height && x >= left && x < left + width;
    };
    $.fn.within = function (left, top, useOffsetCache) {
        var ret = [];
        this.each(function () {
            var q = jQuery(this);
            if (this == document.documentElement) {
                return ret.push(this);
            }
            var offset = useOffsetCache ? $.data(this, 'offsetCache') || $.data(this, 'offsetCache', q.offset()) : q.offset();
            var res = withinBox(left, top, offset.left, offset.top, this.offsetWidth, this.offsetHeight);
            if (res) {
                ret.push(this);
            }
        });
        return this.pushStack($.unique(ret), 'within', left + ',' + top);
    };
    $.fn.withinBox = function (left, top, width, height, useOffsetCache) {
        var ret = [];
        this.each(function () {
            var q = jQuery(this);
            if (this == document.documentElement)
                return ret.push(this);
            var offset = useOffsetCache ? $.data(this, 'offset') || $.data(this, 'offset', q.offset()) : q.offset();
            var ew = q.width(), eh = q.height(), res = !(offset.top > top + height || offset.top + eh < top || offset.left > left + width || offset.left + ew < left);
            if (res)
                ret.push(this);
        });
        return this.pushStack($.unique(ret), 'withinBox', $.makeArray(arguments).join(','));
    };
    return $;
});
/*jquerypp@2.0.0#dom/compare/compare*/
define('jquerypp/dom/compare/compare', ['jquery'], function ($) {
    $.fn.compare = function (element) {
        try {
            element = element.jquery ? element[0] : element;
        } catch (e) {
            return null;
        }
        if (window.HTMLElement) {
            var s = HTMLElement.prototype.toString.call(element);
            if (s == '[xpconnect wrapped native prototype]' || s == '[object XULElement]' || s === '[object Window]') {
                return null;
            }
        }
        if (this[0].compareDocumentPosition) {
            return this[0].compareDocumentPosition(element);
        }
        if (this[0] == document && element != document)
            return 8;
        var number = (this[0] !== element && this[0].contains(element) && 16) + (this[0] != element && element.contains(this[0]) && 8), docEl = document.documentElement;
        if (this[0].sourceIndex) {
            number += this[0].sourceIndex < element.sourceIndex && 4;
            number += this[0].sourceIndex > element.sourceIndex && 2;
            number += (this[0].ownerDocument !== element.ownerDocument || this[0] != docEl && this[0].sourceIndex <= 0 || element != docEl && element.sourceIndex <= 0) && 1;
        }
        return number;
    };
    return $;
});
/*jquerypp@2.0.0#event/drop/drop*/
define('jquerypp/event/drop/drop', [
    'jquery',
    'jquerypp/event/drag/core/core',
    'jquerypp/dom/within/within',
    'jquerypp/dom/compare/compare'
], function ($) {
    var event = $.event;
    var eventNames = [
            'dropover',
            'dropon',
            'dropout',
            'dropinit',
            'dropmove',
            'dropend'
        ];
    $.Drop = function (callbacks, element) {
        $.extend(this, callbacks);
        this.element = $(element);
    };
    $.each(eventNames, function () {
        event.special[this] = {
            add: function (handleObj) {
                var el = $(this), current = el.data('dropEventCount') || 0;
                el.data('dropEventCount', current + 1);
                if (current == 0) {
                    $.Drop.addElement(this);
                }
            },
            remove: function () {
                var el = $(this), current = el.data('dropEventCount') || 0;
                el.data('dropEventCount', current - 1);
                if (current <= 1) {
                    $.Drop.removeElement(this);
                }
            }
        };
    });
    $.extend($.Drop, {
        lowerName: 'drop',
        _rootElements: [],
        _elements: $(),
        last_active: [],
        endName: 'dropon',
        addElement: function (el) {
            for (var i = 0; i < this._rootElements.length; i++) {
                if (el == this._rootElements[i])
                    return;
            }
            this._rootElements.push(el);
        },
        removeElement: function (el) {
            for (var i = 0; i < this._rootElements.length; i++) {
                if (el == this._rootElements[i]) {
                    this._rootElements.splice(i, 1);
                    return;
                }
            }
        },
        sortByDeepestChild: function (a, b) {
            var compare = a.element.compare(b.element);
            if (compare & 16 || compare & 4)
                return 1;
            if (compare & 8 || compare & 2)
                return -1;
            return 0;
        },
        isAffected: function (point, moveable, responder) {
            return responder.element != moveable.element && responder.element.within(point[0], point[1], responder._cache).length == 1;
        },
        deactivate: function (responder, mover, event) {
            mover.out(event, responder);
            responder.callHandlers(this.lowerName + 'out', responder.element[0], event, mover);
        },
        activate: function (responder, mover, event) {
            mover.over(event, responder);
            responder.callHandlers(this.lowerName + 'over', responder.element[0], event, mover);
        },
        move: function (responder, mover, event) {
            responder.callHandlers(this.lowerName + 'move', responder.element[0], event, mover);
        },
        compile: function (event, drag) {
            if (!this.dragging && !drag) {
                return;
            } else if (!this.dragging) {
                this.dragging = drag;
                this.last_active = [];
            }
            var el, drops, selector, dropResponders, newEls = [], dragging = this.dragging;
            for (var i = 0; i < this._rootElements.length; i++) {
                el = this._rootElements[i];
                var drops = $.event.findBySelector(el, eventNames);
                for (selector in drops) {
                    dropResponders = selector ? jQuery(selector, el) : [el];
                    for (var e = 0; e < dropResponders.length; e++) {
                        if (this.addCallbacks(dropResponders[e], drops[selector], dragging)) {
                            newEls.push(dropResponders[e]);
                        }
                        ;
                    }
                }
            }
            this.add(newEls, event, dragging);
        },
        addCallbacks: function (el, callbacks, onlyNew) {
            var origData = $.data(el, '_dropData');
            if (!origData) {
                $.data(el, '_dropData', new $.Drop(callbacks, el));
                return true;
            } else if (!onlyNew) {
                var origCbs = origData;
                for (var eventName in callbacks) {
                    origCbs[eventName] = origCbs[eventName] ? origCbs[eventName].concat(callbacks[eventName]) : callbacks[eventName];
                }
                return false;
            }
        },
        add: function (newEls, event, drag, dragging) {
            var i = 0, drop;
            while (i < newEls.length) {
                drop = $.data(newEls[i], '_dropData');
                drop.callHandlers(this.lowerName + 'init', newEls[i], event, drag);
                if (drop._canceled) {
                    newEls.splice(i, 1);
                } else {
                    i++;
                }
            }
            this._elements.push.apply(this._elements, newEls);
        },
        show: function (point, moveable, event) {
            var element = moveable.element;
            if (!this._elements.length)
                return;
            var respondable, affected = [], propagate = true, i = 0, j, la, toBeActivated, aff, oldLastActive = this.last_active, responders = [], self = this, drag;
            while (i < this._elements.length) {
                drag = $.data(this._elements[i], '_dropData');
                if (!drag) {
                    this._elements.splice(i, 1);
                } else {
                    i++;
                    if (self.isAffected(point, moveable, drag)) {
                        affected.push(drag);
                    }
                }
            }
            affected.sort(this.sortByDeepestChild);
            event.stopRespondPropagate = function () {
                propagate = false;
            };
            toBeActivated = affected.slice();
            this.last_active = affected;
            for (j = 0; j < oldLastActive.length; j++) {
                la = oldLastActive[j];
                i = 0;
                while (aff = toBeActivated[i]) {
                    if (la == aff) {
                        toBeActivated.splice(i, 1);
                        break;
                    } else {
                        i++;
                    }
                }
                if (!aff) {
                    this.deactivate(la, moveable, event);
                }
                if (!propagate)
                    return;
            }
            for (var i = 0; i < toBeActivated.length; i++) {
                this.activate(toBeActivated[i], moveable, event);
                if (!propagate)
                    return;
            }
            for (i = 0; i < affected.length; i++) {
                this.move(affected[i], moveable, event);
                if (!propagate)
                    return;
            }
        },
        end: function (event, moveable) {
            var la, endName = this.lowerName + 'end', onEvent = $.Event(this.endName, event), dropData;
            for (var i = 0; i < this.last_active.length; i++) {
                la = this.last_active[i];
                if (this.isAffected(event.vector(), moveable, la) && la[this.endName]) {
                    la.callHandlers(this.endName, null, onEvent, moveable);
                }
                if (onEvent.isPropagationStopped()) {
                    break;
                }
            }
            for (var r = 0; r < this._elements.length; r++) {
                dropData = $.data(this._elements[r], '_dropData');
                dropData && dropData.callHandlers(endName, null, event, moveable);
            }
            this.clear();
        },
        clear: function () {
            this._elements.each(function () {
                $.removeData(this, '_dropData');
            });
            this._elements = $();
            delete this.dragging;
        }
    });
    $.Drag.responder = $.Drop;
    $.extend($.Drop.prototype, {
        callHandlers: function (method, el, ev, drag) {
            var length = this[method] ? this[method].length : 0;
            for (var i = 0; i < length; i++) {
                this[method][i].call(el || this.element[0], ev, this, drag);
            }
        },
        cache: function (value) {
            this._cache = value != null ? value : true;
        },
        cancel: function () {
            this._canceled = true;
        }
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/scroll/scroll*/
define('jquerypp/event/drag/scroll/scroll', [
    'jquery',
    'jquerypp/event/drop/drop'
], function ($) {
    $.Drag.prototype.scrolls = function (elements, options) {
        var elements = $(elements);
        for (var i = 0; i < elements.length; i++) {
            this.constructor.responder._elements.push(elements.eq(i).data('_dropData', new $.Scrollable(elements[i], options))[0]);
        }
    }, $.Scrollable = function (element, options) {
        this.element = jQuery(element);
        this.options = $.extend({
            distance: 30,
            delta: function (diff, distance) {
                return (distance - diff) / 2;
            },
            direction: 'xy',
            delay: 15
        }, options);
        this.x = this.options.direction.indexOf('x') != -1;
        this.y = this.options.direction.indexOf('y') != -1;
    };
    $.extend($.Scrollable.prototype, {
        init: function (element) {
            this.element = jQuery(element);
        },
        callHandlers: function (method, el, ev, drag) {
            this[method](el || this.element[0], ev, this, drag);
        },
        dropover: function () {
        },
        dropon: function () {
            this.clear_timeout();
        },
        dropout: function () {
            this.clear_timeout();
        },
        dropinit: function () {
        },
        dropend: function () {
        },
        clear_timeout: function () {
            if (this.interval) {
                clearTimeout(this.interval);
                this.interval = null;
            }
        },
        distance: function (diff) {
            return (30 - diff) / 2;
        },
        dropmove: function (el, ev, drop, drag) {
            this.clear_timeout();
            var mouse = ev.vector(), location_object = $(el == document.documentElement ? window : el), dimensions = location_object.dimensionsv('outer'), position = location_object.offsetv(), bottom = position.y() + dimensions.y() - mouse.y(), top = mouse.y() - position.y(), right = position.x() + dimensions.x() - mouse.x(), left = mouse.x() - position.x(), dx = 0, dy = 0, distance = this.options.distance;
            if (bottom < distance && this.y) {
                dy = this.options.delta(bottom, distance);
            } else if (top < distance && this.y) {
                dy = -this.options.delta(top, distance);
            }
            if (right < distance && this.options && this.x) {
                dx = this.options.delta(right, distance);
            } else if (left < distance && this.x) {
                dx = -this.options.delta(left, distance);
            }
            if (dx || dy) {
                var self = this;
                this.interval = setTimeout(function () {
                    self.move($(el), drag.movingElement, dx, dy, ev, ev.clientX, ev.clientY, ev.screenX, ev.screenY);
                }, this.options.delay);
            }
        },
        move: function (scroll_element, drag_element, dx, dy, ev) {
            scroll_element.scrollTop(scroll_element.scrollTop() + dy);
            scroll_element.scrollLeft(scroll_element.scrollLeft() + dx);
            drag_element.trigger($.event.fix({
                type: 'mousemove',
                clientX: ev.clientX,
                clientY: ev.clientY,
                screenX: ev.screenX,
                screenY: ev.screenY,
                pageX: ev.pageX,
                pageY: ev.pageY
            }));
        }
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/drag*/
define('jquerypp/event/drag/drag', [
    'jquery',
    'jquerypp/event/drag/core/core',
    'jquerypp/event/drag/step/step',
    'jquerypp/event/drag/limit/limit',
    'jquerypp/event/drag/scroll/scroll'
], function ($) {
    return $;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();
/*!
 * jQuery contextMenu v1.8.1 - Plugin for simple contextMenu handling
 *
 * Version: v1.8.1
 *
 * Authors: Björn Brala (SWIS.nl), Rodney Rehm, Addy Osmani (patches for FF)
 * Web: http://swisnl.github.io/jQuery-contextMenu/
 *
 * Copyright (c) 2011-2015 SWIS BV and contributors
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 * Date: 2015-09-14T19:40:36.214Z
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(e){for(var t,n=e.split(/\s+/),a=[],o=0;t=n[o];o++)t=t.charAt(0).toUpperCase(),a.push(t);return a}function n(t){return t.id&&e('label[for="'+t.id+'"]').val()||t.name}function a(t,o,i){return i||(i=0),o.each(function(){var o,s,c=e(this),r=this,l=this.nodeName.toLowerCase();switch("label"===l&&c.find("input, textarea, select").length&&(o=c.text(),c=c.children().first(),r=c.get(0),l=r.nodeName.toLowerCase()),l){case"menu":s={name:c.attr("label"),items:{}},i=a(s.items,c.children(),i);break;case"a":case"button":s={name:c.text(),disabled:!!c.attr("disabled"),callback:function(){return function(){c.click()}}()};break;case"menuitem":case"command":switch(c.attr("type")){case void 0:case"command":case"menuitem":s={name:c.attr("label"),disabled:!!c.attr("disabled"),icon:c.attr("icon"),callback:function(){return function(){c.click()}}()};break;case"checkbox":s={type:"checkbox",disabled:!!c.attr("disabled"),name:c.attr("label"),selected:!!c.attr("checked")};break;case"radio":s={type:"radio",disabled:!!c.attr("disabled"),name:c.attr("label"),radio:c.attr("radiogroup"),value:c.attr("id"),selected:!!c.attr("checked")};break;default:s=void 0}break;case"hr":s="-------";break;case"input":switch(c.attr("type")){case"text":s={type:"text",name:o||n(r),disabled:!!c.attr("disabled"),value:c.val()};break;case"checkbox":s={type:"checkbox",name:o||n(r),disabled:!!c.attr("disabled"),selected:!!c.attr("checked")};break;case"radio":s={type:"radio",name:o||n(r),disabled:!!c.attr("disabled"),radio:!!c.attr("name"),value:c.val(),selected:!!c.attr("checked")};break;default:s=void 0}break;case"select":s={type:"select",name:o||n(r),disabled:!!c.attr("disabled"),selected:c.val(),options:{}},c.children().each(function(){s.options[this.value]=e(this).text()});break;case"textarea":s={type:"textarea",name:o||n(r),disabled:!!c.attr("disabled"),value:c.val()};break;case"label":break;default:s={type:"html",html:c.clone(!0)}}s&&(i++,t["key"+i]=s)}),i}if(e.support.htmlMenuitem="HTMLMenuItemElement"in window,e.support.htmlCommand="HTMLCommandElement"in window,e.support.eventSelectstart="onselectstart"in document.documentElement,!e.ui||!e.ui.widget){var o=e.cleanData;e.cleanData=function(t){for(var n,a=0;null!=(n=t[a]);a++)try{e(n).triggerHandler("remove")}catch(i){}o(t)}}var i=null,s=!1,c=e(window),r=0,l={},u={},d={},m={selector:null,appendTo:null,trigger:"right",autoHide:!1,delay:200,reposition:!0,determinePosition:function(t){if(e.ui&&e.ui.position)t.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");else{var n=this.offset();n.top+=this.outerHeight(),n.left+=this.outerWidth()/2-t.outerWidth()/2,t.css(n)}},position:function(e,t,n){var a;if(!t&&!n)return void e.determinePosition.call(this,e.$menu);a="maintain"===t&&"maintain"===n?e.$menu.position():{top:n,left:t};var o=c.scrollTop()+c.height(),i=c.scrollLeft()+c.width(),s=e.$menu.outerHeight(),r=e.$menu.outerWidth();a.top+s>o&&(a.top-=s),a.top<0&&(a.top=0),a.left+r>i&&(a.left-=r),e.$menu.css(a)},positionSubmenu:function(t){if(e.ui&&e.ui.position)t.css("display","block").position({my:"left top",at:"right top",of:this,collision:"flipfit fit"}).css("display","");else{var n={top:0,left:this.outerWidth()};t.css(n)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{show:e.noop,hide:e.noop},callback:null,items:{}},p={timer:null,pageX:null,pageY:null},f=function(e){for(var t=0,n=e;;)if(t=Math.max(t,parseInt(n.css("z-index"),10)||0),n=n.parent(),!n||!n.length||"html body".indexOf(n.prop("nodeName").toLowerCase())>-1)break;return t},h={abortevent:function(e){e.preventDefault(),e.stopImmediatePropagation()},contextmenu:function(t){var n=e(this);if("right"===t.data.trigger&&(t.preventDefault(),t.stopImmediatePropagation()),!("right"!==t.data.trigger&&"demand"!==t.data.trigger&&t.originalEvent||n.hasClass("context-menu-active")||n.hasClass("context-menu-disabled"))){if(i=n,t.data.build){var a=t.data.build(i,t);if(a===!1)return;if(t.data=e.extend(!0,{},m,t.data,a||{}),!t.data.items||e.isEmptyObject(t.data.items))throw window.console&&(console.error||console.log).call(console,"No items specified to show in contextMenu"),new Error("No Items specified");t.data.$trigger=i,x.create(t.data)}var o=!1;for(var s in t.data.items)if(t.data.items.hasOwnProperty(s)){var c;c=e.isFunction(t.data.items[s].visible)?t.data.items[s].visible.call(e(t.currentTarget),s,t.data):"undefined"!=typeof s.visible?t.data.items[s].visible===!0:!0,c&&(o=!0)}o&&x.show.call(n,t.data,t.pageX,t.pageY)}},click:function(t){t.preventDefault(),t.stopImmediatePropagation(),e(this).trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))},mousedown:function(t){var n=e(this);i&&i.length&&!i.is(n)&&i.data("contextMenu").$menu.trigger("contextmenu:hide"),2===t.button&&(i=n.data("contextMenuActive",!0))},mouseup:function(t){var n=e(this);n.data("contextMenuActive")&&i&&i.length&&i.is(n)&&!n.hasClass("context-menu-disabled")&&(t.preventDefault(),t.stopImmediatePropagation(),i=n,n.trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))),n.removeData("contextMenuActive")},mouseenter:function(t){var n=e(this),a=e(t.relatedTarget),o=e(document);a.is(".context-menu-list")||a.closest(".context-menu-list").length||i&&i.length||(p.pageX=t.pageX,p.pageY=t.pageY,p.data=t.data,o.on("mousemove.contextMenuShow",h.mousemove),p.timer=setTimeout(function(){p.timer=null,o.off("mousemove.contextMenuShow"),i=n,n.trigger(e.Event("contextmenu",{data:p.data,pageX:p.pageX,pageY:p.pageY}))},t.data.delay))},mousemove:function(e){p.pageX=e.pageX,p.pageY=e.pageY},mouseleave:function(t){var n=e(t.relatedTarget);if(!n.is(".context-menu-list")&&!n.closest(".context-menu-list").length){try{clearTimeout(p.timer)}catch(t){}p.timer=null}},layerClick:function(t){var n,a,o=e(this),i=o.data("contextMenuRoot"),s=t.button,r=t.pageX,l=t.pageY;t.preventDefault(),t.stopImmediatePropagation(),setTimeout(function(){var o,u="left"===i.trigger&&0===s||"right"===i.trigger&&2===s;if(document.elementFromPoint&&(i.$layer.hide(),n=document.elementFromPoint(r-c.scrollLeft(),l-c.scrollTop()),i.$layer.show()),i.reposition&&u)if(document.elementFromPoint){if(i.$trigger.is(n)||i.$trigger.has(n).length)return void i.position.call(i.$trigger,i,r,l)}else if(a=i.$trigger.offset(),o=e(window),a.top+=o.scrollTop(),a.top<=t.pageY&&(a.left+=o.scrollLeft(),a.left<=t.pageX&&(a.bottom=a.top+i.$trigger.outerHeight(),a.bottom>=t.pageY&&(a.right=a.left+i.$trigger.outerWidth(),a.right>=t.pageX))))return void i.position.call(i.$trigger,i,r,l);n&&u&&i.$trigger.one("contextmenu:hidden",function(){e(n).contextMenu({x:r,y:l})}),i.$menu.trigger("contextmenu:hide")},50)},keyStop:function(e,t){t.isInput||e.preventDefault(),e.stopPropagation()},key:function(e){var t={};switch(i&&(t=i.data("contextMenu")||{}),e.keyCode){case 9:case 38:if(h.keyStop(e,t),t.isInput){if(9===e.keyCode&&e.shiftKey)return e.preventDefault(),t.$selected&&t.$selected.find("input, textarea, select").blur(),void t.$menu.trigger("prevcommand");if(38===e.keyCode&&"checkbox"===t.$selected.find("input, textarea, select").prop("type"))return void e.preventDefault()}else if(9!==e.keyCode||e.shiftKey)return void t.$menu.trigger("prevcommand");case 40:if(h.keyStop(e,t),!t.isInput)return void t.$menu.trigger("nextcommand");if(9===e.keyCode)return e.preventDefault(),t.$selected&&t.$selected.find("input, textarea, select").blur(),void t.$menu.trigger("nextcommand");if(40===e.keyCode&&"checkbox"===t.$selected.find("input, textarea, select").prop("type"))return void e.preventDefault();break;case 37:if(h.keyStop(e,t),t.isInput||!t.$selected||!t.$selected.length)break;if(!t.$selected.parent().hasClass("context-menu-root")){var n=t.$selected.parent().parent();return t.$selected.trigger("contextmenu:blur"),void(t.$selected=n)}break;case 39:if(h.keyStop(e,t),t.isInput||!t.$selected||!t.$selected.length)break;var a=t.$selected.data("contextMenu")||{};if(a.$menu&&t.$selected.hasClass("context-menu-submenu"))return t.$selected=null,a.$selected=null,void a.$menu.trigger("nextcommand");break;case 35:case 36:return t.$selected&&t.$selected.find("input, textarea, select").length?void 0:((t.$selected&&t.$selected.parent()||t.$menu).children(":not(.disabled, .not-selectable)")[36===e.keyCode?"first":"last"]().trigger("contextmenu:focus"),void e.preventDefault());case 13:if(h.keyStop(e,t),t.isInput){if(t.$selected&&!t.$selected.is("textarea, select"))return void e.preventDefault();break}return void("undefined"!=typeof t.$selected&&t.$selected.trigger("mouseup"));case 32:case 33:case 34:return void h.keyStop(e,t);case 27:return h.keyStop(e,t),void t.$menu.trigger("contextmenu:hide");default:var o=String.fromCharCode(e.keyCode).toUpperCase();if(t.accesskeys&&t.accesskeys[o])return void t.accesskeys[o].$node.trigger(t.accesskeys[o].$menu?"contextmenu:focus":"mouseup")}e.stopPropagation(),"undefined"!=typeof t.$selected&&t.$selected.trigger(e)},prevItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{};if(n.$selected){var a=n.$selected;n=n.$selected.parent().data("contextMenu")||{},n.$selected=a}for(var o=n.$menu.children(),i=n.$selected&&n.$selected.prev().length?n.$selected.prev():o.last(),s=i;i.hasClass("disabled")||i.hasClass("not-selectable");)if(i=i.prev().length?i.prev():o.last(),i.is(s))return;n.$selected&&h.itemMouseleave.call(n.$selected.get(0),t),h.itemMouseenter.call(i.get(0),t);var c=i.find("input, textarea, select");c.length&&c.focus()},nextItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{};if(n.$selected){var a=n.$selected;n=n.$selected.parent().data("contextMenu")||{},n.$selected=a}for(var o=n.$menu.children(),i=n.$selected&&n.$selected.next().length?n.$selected.next():o.first(),s=i;i.hasClass("disabled")||i.hasClass("not-selectable");)if(i=i.next().length?i.next():o.first(),i.is(s))return;n.$selected&&h.itemMouseleave.call(n.$selected.get(0),t),h.itemMouseenter.call(i.get(0),t);var c=i.find("input, textarea, select");c.length&&c.focus()},focusInput:function(){var t=e(this).closest(".context-menu-item"),n=t.data(),a=n.contextMenu,o=n.contextMenuRoot;o.$selected=a.$selected=t,o.isInput=a.isInput=!0},blurInput:function(){var t=e(this).closest(".context-menu-item"),n=t.data(),a=n.contextMenu,o=n.contextMenuRoot;o.isInput=a.isInput=!1},menuMouseenter:function(){var t=e(this).data().contextMenuRoot;t.hovering=!0},menuMouseleave:function(t){var n=e(this).data().contextMenuRoot;n.$layer&&n.$layer.is(t.relatedTarget)&&(n.hovering=!1)},itemMouseenter:function(t){var n=e(this),a=n.data(),o=a.contextMenu,i=a.contextMenuRoot;return i.hovering=!0,t&&i.$layer&&i.$layer.is(t.relatedTarget)&&(t.preventDefault(),t.stopImmediatePropagation()),(o.$menu?o:i).$menu.children(".hover").trigger("contextmenu:blur"),n.hasClass("disabled")||n.hasClass("not-selectable")?void(o.$selected=null):void n.trigger("contextmenu:focus")},itemMouseleave:function(t){var n=e(this),a=n.data(),o=a.contextMenu,i=a.contextMenuRoot;return i!==o&&i.$layer&&i.$layer.is(t.relatedTarget)?("undefined"!=typeof i.$selected&&i.$selected.trigger("contextmenu:blur"),t.preventDefault(),t.stopImmediatePropagation(),void(i.$selected=o.$selected=o.$node)):void n.trigger("contextmenu:blur")},itemClick:function(t){var n,a=e(this),o=a.data(),i=o.contextMenu,s=o.contextMenuRoot,c=o.contextMenuKey;if(i.items[c]&&!a.is(".disabled, .context-menu-submenu, .context-menu-separator, .not-selectable")){if(t.preventDefault(),t.stopImmediatePropagation(),e.isFunction(s.callbacks[c])&&Object.prototype.hasOwnProperty.call(s.callbacks,c))n=s.callbacks[c];else{if(!e.isFunction(s.callback))return;n=s.callback}n.call(s.$trigger,c,s)!==!1?s.$menu.trigger("contextmenu:hide"):s.$menu.parent().length&&x.update.call(s.$trigger,s)}},inputClick:function(e){e.stopImmediatePropagation()},hideMenu:function(t,n){var a=e(this).data("contextMenuRoot");x.hide.call(a.$trigger,a,n&&n.force)},focusItem:function(t){t.stopPropagation();var n=e(this),a=n.data(),o=a.contextMenu,i=a.contextMenuRoot;n.addClass("hover visible").siblings().removeClass("visible").filter(".hover").trigger("contextmenu:blur"),o.$selected=i.$selected=n,o.$node&&i.positionSubmenu.call(o.$node,o.$menu)},blurItem:function(t){t.stopPropagation();var n=e(this),a=n.data(),o=a.contextMenu;o.autoHide&&n.removeClass("visible"),n.removeClass("hover"),o.$selected=null}},x={show:function(t,n,a){var o=e(this),s={};return e("#context-menu-layer").trigger("mousedown"),t.$trigger=o,t.events.show.call(o,t)===!1?void(i=null):(x.update.call(o,t),t.position.call(o,t,n,a),t.zIndex&&(s.zIndex=f(o)+t.zIndex),x.layer.call(t.$menu,t,s.zIndex),t.$menu.find("ul").css("zIndex",s.zIndex+1),t.$menu.css(s)[t.animation.show](t.animation.duration,function(){o.trigger("contextmenu:visible")}),o.data("contextMenu",t).addClass("context-menu-active"),e(document).off("keydown.contextMenu").on("keydown.contextMenu",h.key),void(t.autoHide&&e(document).on("mousemove.contextMenuAutoHide",function(e){var n=o.offset();n.right=n.left+o.outerWidth(),n.bottom=n.top+o.outerHeight(),!t.$layer||t.hovering||e.pageX>=n.left&&e.pageX<=n.right&&e.pageY>=n.top&&e.pageY<=n.bottom||t.$menu.trigger("contextmenu:hide")})))},hide:function(t,n){var a=e(this);if(t||(t=a.data("contextMenu")||{}),n||!t.events||t.events.hide.call(a,t)!==!1){if(a.removeData("contextMenu").removeClass("context-menu-active"),t.$layer){setTimeout(function(e){return function(){e.remove()}}(t.$layer),10);try{delete t.$layer}catch(o){t.$layer=null}}i=null,t.$menu.find(".hover").trigger("contextmenu:blur"),t.$selected=null,e(document).off(".contextMenuAutoHide").off("keydown.contextMenu"),t.$menu&&t.$menu[t.animation.hide](t.animation.duration,function(){t.build&&(t.$menu.remove(),e.each(t,function(e){switch(e){case"ns":case"selector":case"build":case"trigger":return!0;default:t[e]=void 0;try{delete t[e]}catch(n){}return!0}})),setTimeout(function(){a.trigger("contextmenu:hidden")},10)})}},create:function(n,a){void 0===a&&(a=n),n.$menu=e('<ul class="context-menu-list"></ul>').addClass(n.className||"").data({contextMenu:n,contextMenuRoot:a}),e.each(["callbacks","commands","inputs"],function(e,t){n[t]={},a[t]||(a[t]={})}),a.accesskeys||(a.accesskeys={}),e.each(n.items,function(o,i){var s=e('<li class="context-menu-item"></li>').addClass(i.className||""),c=null,r=null;if(s.on("click",e.noop),i.$node=s.data({contextMenu:n,contextMenuRoot:a,contextMenuKey:o}),"undefined"!=typeof i.accesskey)for(var l,u=t(i.accesskey),m=0;l=u[m];m++)if(!a.accesskeys[l]){a.accesskeys[l]=i,i._name=i.name.replace(new RegExp("("+l+")","i"),'<span class="context-menu-accesskey">$1</span>');break}if("string"==typeof i)s.addClass("context-menu-separator not-selectable");else if(i.type&&d[i.type])d[i.type].call(s,i,n,a),e.each([n,a],function(t,n){n.commands[o]=i,e.isFunction(i.callback)&&(n.callbacks[o]=i.callback)});else{switch("html"===i.type?s.addClass("context-menu-html not-selectable"):i.type?(c=e("<label></label>").appendTo(s),e("<span></span>").html(i._name||i.name).appendTo(c),s.addClass("context-menu-input"),n.hasTypes=!0,e.each([n,a],function(e,t){t.commands[o]=i,t.inputs[o]=i})):i.items&&(i.type="sub"),i.type){case"text":r=e('<input type="text" value="1" name="" value="">').attr("name","context-menu-input-"+o).val(i.value||"").appendTo(c);break;case"textarea":r=e('<textarea name=""></textarea>').attr("name","context-menu-input-"+o).val(i.value||"").appendTo(c),i.height&&r.height(i.height);break;case"checkbox":r=e('<input type="checkbox" value="1" name="" value="">').attr("name","context-menu-input-"+o).val(i.value||"").prop("checked",!!i.selected).prependTo(c);break;case"radio":r=e('<input type="radio" value="1" name="" value="">').attr("name","context-menu-input-"+i.radio).val(i.value||"").prop("checked",!!i.selected).prependTo(c);break;case"select":r=e('<select name="">').attr("name","context-menu-input-"+o).appendTo(c),i.options&&(e.each(i.options,function(t,n){e("<option></option>").val(t).text(n).appendTo(r)}),r.val(i.selected));break;case"sub":e("<span></span>").html(i._name||i.name).appendTo(s),i.appendTo=i.$node,x.create(i,a),s.data("contextMenu",i).addClass("context-menu-submenu"),i.callback=null;break;case"html":e(i.html).appendTo(s);break;default:e.each([n,a],function(t,n){n.commands[o]=i,e.isFunction(i.callback)&&(n.callbacks[o]=i.callback)}),e("<span></span>").html(i._name||i.name||"").appendTo(s)}i.type&&"sub"!==i.type&&"html"!==i.type&&(r.on("focus",h.focusInput).on("blur",h.blurInput),i.events&&r.on(i.events,n)),i.icon&&(e.isFunction(i.icon)?i._icon=i.icon.call(this,s,o,i):i._icon="icon icon-"+i.icon,s.addClass(i._icon))}i.$input=r,i.$label=c,s.appendTo(n.$menu),!n.hasTypes&&e.support.eventSelectstart&&s.on("selectstart.disableTextSelect",h.abortevent)}),n.$node||n.$menu.css("display","none").addClass("context-menu-root"),n.$menu.appendTo(n.appendTo||document.body)},resize:function(t,n){t.css({position:"absolute",display:"block"}),t.data("width",Math.ceil(t.width())),t.css({position:"static",minWidth:"0px",maxWidth:"100000px"}),t.find("> li > ul").each(function(){x.resize(e(this),!0)}),n||t.find("ul").addBack().css({position:"",display:"",minWidth:"",maxWidth:""}).width(function(){return e(this).data("width")})},update:function(t,n){var a=this;void 0===n&&(n=t,x.resize(t.$menu)),t.$menu.children().each(function(){var o,i=e(this),s=i.data("contextMenuKey"),c=t.items[s],r=e.isFunction(c.disabled)&&c.disabled.call(a,s,n)||c.disabled===!0;if(o=e.isFunction(c.visible)?c.visible.call(a,s,n):"undefined"!=typeof c.visible?c.visible===!0:!0,i[o?"show":"hide"](),i[r?"addClass":"removeClass"]("disabled"),e.isFunction(c.icon)&&(i.removeClass(c._icon),c._icon=c.icon.call(this,a,s,c),i.addClass(c._icon)),c.type)switch(i.find("input, select, textarea").prop("disabled",r),c.type){case"text":case"textarea":c.$input.val(c.value||"");break;case"checkbox":case"radio":c.$input.val(c.value||"").prop("checked",!!c.selected);break;case"select":c.$input.val(c.selected||"")}c.$menu&&x.update.call(a,c,n)})},layer:function(t,n){var a=t.$layer=e('<div id="context-menu-layer" style="position:fixed; z-index:'+n+'; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({height:c.height(),width:c.width(),display:"block"}).data("contextMenuRoot",t).insertBefore(this).on("contextmenu",h.abortevent).on("mousedown",h.layerClick);return void 0===document.body.style.maxWidth&&a.css({position:"absolute",height:e(document).height()}),a}};e.fn.contextMenu=function(t){var n=this,a=t;if(this.length>0)if(void 0===t)this.first().trigger("contextmenu");else if(t.x&&t.y)this.first().trigger(e.Event("contextmenu",{pageX:t.x,pageY:t.y}));else if("hide"===t){var o=this.first().data("contextMenu")?this.first().data("contextMenu").$menu:null;o&&o.trigger("contextmenu:hide")}else"destroy"===t?e.contextMenu("destroy",{context:this}):e.isPlainObject(t)?(t.context=this,e.contextMenu("create",t)):t?this.removeClass("context-menu-disabled"):t||this.addClass("context-menu-disabled");else e.each(u,function(){this.selector===n.selector&&(a.data=this,e.extend(a.data,{trigger:"demand"}))}),h.contextmenu.call(a.target,a);return this},e.contextMenu=function(t,n){"string"!=typeof t&&(n=t,t="create"),"string"==typeof n?n={selector:n}:void 0===n&&(n={});var a=e.extend(!0,{},m,n||{}),o=e(document),i=o,c=!1;switch(a.context&&a.context.length?(i=e(a.context).first(),a.context=i.get(0),c=a.context!==document):a.context=document,t){case"create":if(!a.selector)throw new Error("No selector specified");if(a.selector.match(/.context-menu-(list|item|input)($|\s)/))throw new Error('Cannot bind to selector "'+a.selector+'" as it contains a reserved className');if(!a.build&&(!a.items||e.isEmptyObject(a.items)))throw new Error("No Items specified");switch(r++,a.ns=".contextMenu"+r,c||(l[a.selector]=a.ns),u[a.ns]=a,a.trigger||(a.trigger="right"),s||(o.on({"contextmenu:hide.contextMenu":h.hideMenu,"prevcommand.contextMenu":h.prevItem,"nextcommand.contextMenu":h.nextItem,"contextmenu.contextMenu":h.abortevent,"mouseenter.contextMenu":h.menuMouseenter,"mouseleave.contextMenu":h.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",h.inputClick).on({"mouseup.contextMenu":h.itemClick,"contextmenu:focus.contextMenu":h.focusItem,"contextmenu:blur.contextMenu":h.blurItem,"contextmenu.contextMenu":h.abortevent,"mouseenter.contextMenu":h.itemMouseenter,"mouseleave.contextMenu":h.itemMouseleave},".context-menu-item"),s=!0),i.on("contextmenu"+a.ns,a.selector,a,h.contextmenu),c&&i.on("remove"+a.ns,function(){e(this).contextMenu("destroy")}),a.trigger){case"hover":i.on("mouseenter"+a.ns,a.selector,a,h.mouseenter).on("mouseleave"+a.ns,a.selector,a,h.mouseleave);break;case"left":i.on("click"+a.ns,a.selector,a,h.click)}a.build||x.create(a);break;case"destroy":var d;if(c){var p=a.context;e.each(u,function(t,n){if(n.context!==p)return!0;d=e(".context-menu-list").filter(":visible"),d.length&&d.data().contextMenuRoot.$trigger.is(e(n.context).find(n.selector))&&d.trigger("contextmenu:hide",{force:!0});try{u[n.ns].$menu&&u[n.ns].$menu.remove(),delete u[n.ns]}catch(a){u[n.ns]=null}return e(n.context).off(n.ns),!0})}else if(a.selector){if(l[a.selector]){d=e(".context-menu-list").filter(":visible"),d.length&&d.data().contextMenuRoot.$trigger.is(a.selector)&&d.trigger("contextmenu:hide",{force:!0});try{u[l[a.selector]].$menu&&u[l[a.selector]].$menu.remove(),delete u[l[a.selector]]}catch(f){u[l[a.selector]]=null}o.off(l[a.selector])}}else o.off(".contextMenu .contextMenuAutoHide"),e.each(u,function(t,n){e(n.context).off(n.ns)}),l={},u={},r=0,s=!1,e("#context-menu-layer, .context-menu-list").remove();break;case"html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof n&&n)&&e('menu[type="context"]').each(function(){this.id&&e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw new Error('Unknown operation "'+t+'"')}return this},e.contextMenu.setInputValues=function(t,n){void 0===n&&(n={}),e.each(t.inputs,function(e,t){switch(t.type){case"text":case"textarea":t.value=n[e]||"";break;case"checkbox":t.selected=n[e]?!0:!1;break;case"radio":t.selected=(n[t.radio]||"")===t.value;break;case"select":t.selected=n[e]||""}})},e.contextMenu.getInputValues=function(t,n){return void 0===n&&(n={}),e.each(t.inputs,function(e,t){switch(t.type){case"text":case"textarea":case"select":n[e]=t.$input.val();break;case"checkbox":n[e]=t.$input.prop("checked");break;case"radio":t.$input.prop("checked")&&(n[t.radio]=t.value)}}),n},e.contextMenu.fromMenu=function(t){var n=e(t),o={};return a(o,n.children()),o},e.contextMenu.defaults=m,e.contextMenu.types=d,e.contextMenu.handle=h,e.contextMenu.op=x,e.contextMenu.menus=u});

/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){e.Backbone=t(e,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(s){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var s=t.Backbone;var n=[].slice;e.VERSION="1.2.1";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,s){return i[e](this[r],t,s)};case 4:return function(t,s,n){return i[e](this[r],t,s,n)};default:return function(){var t=n.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,s){if(i[s])t.prototype[s]=a(e,s,r)})};var h=e.Events={};var u=/\s+/;var l=function(t,e,r,s,n){var a=0,o;if(r&&typeof r==="object"){if(s!==void 0&&"context"in n&&n.context===void 0)n.context=s;for(o=i.keys(r);a<o.length;a++){e=t(e,o[a],r[o[a]],n)}}else if(r&&u.test(r)){for(o=r.split(u);a<o.length;a++){e=t(e,o[a],s,n)}}else{e=t(e,r,s,n)}return e};h.on=function(t,e,i){return c(this,t,e,i)};var c=function(t,e,i,r,s){t._events=l(f,t._events||{},e,i,{context:r,ctx:t,listening:s});if(s){var n=t._listeners||(t._listeners={});n[s.id]=s}return t};h.listenTo=function(t,e,r){if(!t)return this;var s=t._listenId||(t._listenId=i.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var a=n[s];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=n[s]={obj:t,objId:s,id:o,listeningTo:n,count:0}}c(t,e,r,this,a);return this};var f=function(t,e,i,r){if(i){var s=t[e]||(t[e]=[]);var n=r.context,a=r.ctx,o=r.listening;if(o)o.count++;s.push({callback:i,context:n,ctx:n||a,listening:o})}return t};h.off=function(t,e,i){if(!this._events)return this;this._events=l(d,this._events,t,e,{context:i,listeners:this._listeners});return this};h.stopListening=function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=t?[t._listenId]:i.keys(s);for(var a=0;a<n.length;a++){var o=s[n[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(s))this._listeningTo=void 0;return this};var d=function(t,e,r,s){if(!t)return;var n=0,a;var o=s.context,h=s.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;n<u.length;n++){a=h[u[n]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;n<l.length;n++){e=l[n];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};h.once=function(t,e,r){var s=l(v,{},t,e,i.bind(this.off,this));return this.on(s,void 0,r)};h.listenToOnce=function(t,e,r){var s=l(v,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,s)};var v=function(t,e,r,s){if(r){var n=t[e]=i.once(function(){s(e,n);r.apply(this,arguments)});n._callback=r}return t};h.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];l(g,this._events,t,void 0,i);return this};var g=function(t,e,i,r){if(t){var s=t[e];var n=t.all;if(s&&n)n=n.slice();if(s)p(s,r);if(n)p(n,[e].concat(r))}return t};var p=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};h.bind=h.on;h.unbind=h.off;i.extend(e,h);var m=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,h,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var s;if(typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r||(r={});if(!this._validate(s,r))return false;var n=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(var f in s){e=s[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}n?delete u[f]:u[f]=e}if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var s in t){var n=t[s];if(i.isEqual(e[s],n))continue;r[s]=n}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var s=t.parse?e.parse(i,t):i;if(!e.set(s,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true,parse:true},r);var n=r.wait;if(s&&!n){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(n)e=i.extend({},s,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};q(this,r);if(s&&n)this.attributes=i.extend({},h,s);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=s;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=t.wait;var n=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(s)n();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{q(this,t);a=this.sync("delete",this,t)}if(!s)n();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var _={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(m,_,"attributes");var y=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var b={add:true,remove:true,merge:true};var x={add:true,remove:false};i.extend(y.prototype,h,{model:m,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,x))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var s=this._removeModels(t,e);if(!e.silent&&s)this.trigger("update",this,e);return r?s[0]:s},set:function(t,e){e=i.defaults({},e,b);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:t.slice();var s,n,a,o,h;var u=e.at;if(u!=null)u=+u;if(u<0)u+=this.length+1;var l=this.comparator&&u==null&&e.sort!==false;var c=i.isString(this.comparator)?this.comparator:null;var f=[],d=[],v={};var g=e.add,p=e.merge,m=e.remove;var _=!l&&g&&m?[]:false;var y=false;for(var x=0;x<t.length;x++){a=t[x];if(o=this.get(a)){if(m)v[o.cid]=true;if(p&&a!==o){a=this._isModel(a)?a.attributes:a;if(e.parse)a=o.parse(a,e);o.set(a,e);if(l&&!h&&o.hasChanged(c))h=true}t[x]=o}else if(g){n=t[x]=this._prepareModel(a,e);if(!n)continue;f.push(n);this._addReference(n,e)}n=o||n;if(!n)continue;s=this.modelId(n.attributes);if(_&&(n.isNew()||!v[s])){_.push(n);y=y||!this.models[x]||n.cid!==this.models[x].cid}v[s]=true}if(m){for(var x=0;x<this.length;x++){if(!v[(n=this.models[x]).cid])d.push(n)}if(d.length)this._removeModels(d,e)}if(f.length||y){if(l)h=true;this.length+=f.length;if(u!=null){for(var x=0;x<f.length;x++){this.models.splice(u+x,0,f[x])}}else{if(_)this.models.length=0;var w=_||f;for(var x=0;x<w.length;x++){this.models.push(w[x])}}}if(h)this.sort({silent:true});if(!e.silent){var E=u!=null?i.clone(e):e;for(var x=0;x<f.length;x++){if(u!=null)E.index=u+x;(n=f[x]).trigger("add",n,this,E)}if(h||y)this.trigger("sort",this,e);if(f.length||d.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return n.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){var r=i.matches(t);return this[e?"find":"filter"](function(t){return r(t.attributes)})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var s=this;var n=e.success;e.success=function(t,e,i){if(r)s.add(t,i);if(n)n.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var s=this.get(t[r]);if(!s)continue;var n=this.indexOf(s);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;s.trigger("remove",s,this,e)}i.push(s);this._removeReference(s,e)}return i.length?i:false},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var s=this.modelId(e.previousAttributes());var n=this.modelId(e.attributes);if(s!==n){if(s!=null)delete this._byId[s];if(n!=null)this._byId[n]=e}}this.trigger.apply(this,arguments)}});var w={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:2,contains:2,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3};o(y,w,"models");var E=["groupBy","countBy","sortBy","indexBy"];i.each(E,function(t){if(!i[t])return;y.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,I));this._ensureElement();this.initialize.apply(this,arguments)};var S=/^(\S+)\s*(.*)$/;var I=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var s=e.match(S);this.delegate(s[1],s[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}var h=s.error;s.error=function(t,e,i){s.textStatus=e;s.errorThrown=i;if(h)h.call(s.context,t,e,i)};var u=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,u,s);return u};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var P=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var H=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var A=/\*\w+/g;var C=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(P.prototype,h,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);if(n.execute(s,a,r)!==false){n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(C,"\\$&").replace(H,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var j=/^\/+|\/+$/g;var O=/#.*$/;N.started=false;i.extend(N.prototype,h,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window;this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(j,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var s=r.insertBefore(this.iframe,r.firstChild).contentWindow;s.document.open();s.document.close();s.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(O,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};m.extend=y.extend=P.extend=k.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/*! JointJS v0.9.5 - JavaScript diagramming library  2015-09-10 


This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
(function(root, factory) {

    if (typeof define === 'function' && define.amd) {

        // For AMD.

        define(['backbone', 'lodash', 'jquery'], function(Backbone, _, $) {

            Backbone.$ = $;

            return factory(root, Backbone, _, $);
        });

    } else if (typeof exports !== 'undefined') {

        // For Node.js or CommonJS.

        var Backbone = require('backbone');
        var _ = require('lodash');
        var $ = Backbone.$ = require('jquery');

        module.exports = factory(root, Backbone, _, $);

    } else {

        // As a browser global.

        var Backbone = root.Backbone;
        var _ = root._;
        var $ = Backbone.$ = root.jQuery || root.$;

        root.joint = factory(root, Backbone, _, $);
        root.g = root.joint.g;
        root.V = root.Vectorizer = root.joint.V;
    }

}(this, function(root, Backbone, _, $) {

//      Geometry library.
//      (c) 2011-2013 client IO

var g = (function() {

    // Declare shorthands to the most used math functions.
    var math = Math;
    var abs = math.abs;
    var cos = math.cos;
    var sin = math.sin;
    var sqrt = math.sqrt;
    var mmin = math.min;
    var mmax = math.max;
    var atan = math.atan;
    var atan2 = math.atan2;
    var acos = math.acos;
    var round = math.round;
    var floor = math.floor;
    var PI = math.PI;
    var random = math.random;
    var toDeg = function(rad) { return (180 * rad / PI) % 360; };
    var toRad = function(deg, over360) {
        over360 = over360 || false;
        deg = over360 ? deg : (deg % 360);
        return deg * PI / 180;
    };
    var snapToGrid = function(val, gridSize) { return gridSize * Math.round(val / gridSize); };
    var normalizeAngle = function(angle) { return (angle % 360) + (angle < 0 ? 360 : 0); };

    // Point
    // -----

    // Point is the most basic object consisting of x/y coordinate,.

    // Possible instantiations are:

    // * `point(10, 20)`
    // * `new point(10, 20)`
    // * `point('10 20')`
    // * `point(point(10, 20))`
    function point(x, y) {
        if (!(this instanceof point))
            return new point(x, y);
        var xy;
        if (y === undefined && Object(x) !== x) {
            xy = x.split(x.indexOf('@') === -1 ? ' ' : '@');
            this.x = parseInt(xy[0], 10);
            this.y = parseInt(xy[1], 10);
        } else if (Object(x) === x) {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x;
            this.y = y;
        }
    }

    point.prototype = {
        toString: function() {
            return this.x + '@' + this.y;
        },
        // If point lies outside rectangle `r`, return the nearest point on the boundary of rect `r`,
        // otherwise return point itself.
        // (see Squeak Smalltalk, Point>>adhereTo:)
        adhereToRect: function(r) {
            if (r.containsPoint(this)) {
                return this;
            }
            this.x = mmin(mmax(this.x, r.x), r.x + r.width);
            this.y = mmin(mmax(this.y, r.y), r.y + r.height);
            return this;
        },
        // Compute the angle between me and `p` and the x axis.
        // (cartesian-to-polar coordinates conversion)
        // Return theta angle in degrees.
        theta: function(p) {
            p = point(p);
            // Invert the y-axis.
            var y = -(p.y - this.y);
            var x = p.x - this.x;
            // Makes sure that the comparison with zero takes rounding errors into account.
            var PRECISION = 10;
            // Note that `atan2` is not defined for `x`, `y` both equal zero.
            var rad = (y.toFixed(PRECISION) == 0 && x.toFixed(PRECISION) == 0) ? 0 : atan2(y, x);

            // Correction for III. and IV. quadrant.
            if (rad < 0) {
                rad = 2 * PI + rad;
            }
            return 180 * rad / PI;
        },
        // Returns distance between me and point `p`.
        distance: function(p) {
            return line(this, p).length();
        },
        // Returns a manhattan (taxi-cab) distance between me and point `p`.
        manhattanDistance: function(p) {
            return abs(p.x - this.x) + abs(p.y - this.y);
        },
        // Offset me by the specified amount.
        offset: function(dx, dy) {
            this.x += dx || 0;
            this.y += dy || 0;
            return this;
        },
        magnitude: function() {
            return sqrt((this.x * this.x) + (this.y * this.y)) || 0.01;
        },
        update: function(x, y) {
            this.x = x || 0;
            this.y = y || 0;
            return this;
        },
        round: function(decimals) {
            this.x = decimals ? this.x.toFixed(decimals) : round(this.x);
            this.y = decimals ? this.y.toFixed(decimals) : round(this.y);
            return this;
        },
        // Scale the line segment between (0,0) and me to have a length of len.
        normalize: function(len) {
            var s = (len || 1) / this.magnitude();
            this.x = s * this.x;
            this.y = s * this.y;
            return this;
        },
        difference: function(p) {
            return point(this.x - p.x, this.y - p.y);
        },
        // Return the bearing between me and point `p`.
        bearing: function(p) {
            return line(this, p).bearing();
        },
        // Converts rectangular to polar coordinates.
        // An origin can be specified, otherwise it's 0@0.
        toPolar: function(o) {
            o = (o && point(o)) || point(0, 0);
            var x = this.x;
            var y = this.y;
            this.x = sqrt((x - o.x) * (x - o.x) + (y - o.y) * (y - o.y)); // r
            this.y = toRad(o.theta(point(x, y)));
            return this;
        },
        // Rotate point by angle around origin o.
        rotate: function(o, angle) {
            angle = (angle + 360) % 360;
            this.toPolar(o);
            this.y += toRad(angle);
            var p = point.fromPolar(this.x, this.y, o);
            this.x = p.x;
            this.y = p.y;
            return this;
        },
        // Move point on line starting from ref ending at me by
        // distance distance.
        move: function(ref, distance) {
            var theta = toRad(point(ref).theta(this));
            return this.offset(cos(theta) * distance, -sin(theta) * distance);
        },
        // Returns change in angle from my previous position (-dx, -dy) to my new position
        // relative to ref point.
        changeInAngle: function(dx, dy, ref) {
            // Revert the translation and measure the change in angle around x-axis.
            return point(this).offset(-dx, -dy).theta(ref) - this.theta(ref);
        },
        equals: function(p) {
            return this.x === p.x && this.y === p.y;
        },
        snapToGrid: function(gx, gy) {
            this.x = snapToGrid(this.x, gx);
            this.y = snapToGrid(this.y, gy || gx);
            return this;
        },
        // Returns a point that is the reflection of me with
        // the center of inversion in ref point.
        reflection: function(ref) {
            return point(ref).move(this, this.distance(ref));
        },
        clone: function() {
            return point(this);
        }
    };
    // Alternative constructor, from polar coordinates.
    // @param {number} r Distance.
    // @param {number} angle Angle in radians.
    // @param {point} [optional] o Origin.
    point.fromPolar = function(r, angle, o) {
        o = (o && point(o)) || point(0, 0);
        var x = abs(r * cos(angle));
        var y = abs(r * sin(angle));
        var deg = normalizeAngle(toDeg(angle));

        if (deg < 90) {
            y = -y;
        } else if (deg < 180) {
            x = -x;
            y = -y;
        } else if (deg < 270) {
            x = -x;
        }

        return point(o.x + x, o.y + y);
    };

    // Create a point with random coordinates that fall into the range `[x1, x2]` and `[y1, y2]`.
    point.random = function(x1, x2, y1, y2) {
        return point(floor(random() * (x2 - x1 + 1) + x1), floor(random() * (y2 - y1 + 1) + y1));
    };

    // Line.
    // -----
    function line(p1, p2) {
        if (!(this instanceof line))
            return new line(p1, p2);
        this.start = point(p1);
        this.end = point(p2);
    }

    line.prototype = {
        toString: function() {
            return this.start.toString() + ' ' + this.end.toString();
        },
        // @return {double} length of the line
        length: function() {
            return sqrt(this.squaredLength());
        },
        // @return {integer} length without sqrt
        // @note for applications where the exact length is not necessary (e.g. compare only)
        squaredLength: function() {
            var x0 = this.start.x;
            var y0 = this.start.y;
            var x1 = this.end.x;
            var y1 = this.end.y;
            return (x0 -= x1) * x0 + (y0 -= y1) * y0;
        },
        // @return {point} my midpoint
        midpoint: function() {
            return point((this.start.x + this.end.x) / 2,
                         (this.start.y + this.end.y) / 2);
        },
        // @return {point} Point where I'm intersecting l.
        // @see Squeak Smalltalk, LineSegment>>intersectionWith:
        intersection: function(l) {
            var pt1Dir = point(this.end.x - this.start.x, this.end.y - this.start.y);
            var pt2Dir = point(l.end.x - l.start.x, l.end.y - l.start.y);
            var det = (pt1Dir.x * pt2Dir.y) - (pt1Dir.y * pt2Dir.x);
            var deltaPt = point(l.start.x - this.start.x, l.start.y - this.start.y);
            var alpha = (deltaPt.x * pt2Dir.y) - (deltaPt.y * pt2Dir.x);
            var beta = (deltaPt.x * pt1Dir.y) - (deltaPt.y * pt1Dir.x);

            if (det === 0 ||
                alpha * det < 0 ||
                beta * det < 0) {
                // No intersection found.
                return null;
            }
            if (det > 0) {
                if (alpha > det || beta > det) {
                    return null;
                }
            } else {
                if (alpha < det || beta < det) {
                    return null;
                }
            }
            return point(this.start.x + (alpha * pt1Dir.x / det),
                         this.start.y + (alpha * pt1Dir.y / det));
        },

        // @return the bearing (cardinal direction) of the line. For example N, W, or SE.
        // @returns {String} One of the following bearings : NE, E, SE, S, SW, W, NW, N.
        bearing: function() {

            var lat1 = toRad(this.start.y);
            var lat2 = toRad(this.end.y);
            var lon1 = this.start.x;
            var lon2 = this.end.x;
            var dLon = toRad(lon2 - lon1);
            var y = sin(dLon) * cos(lat2);
            var x = cos(lat1) * sin(lat2) - sin(lat1) * cos(lat2) * cos(dLon);
            var brng = toDeg(atan2(y, x));

            var bearings = ['NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];

            var index = brng - 22.5;
            if (index < 0)
                index += 360;
            index = parseInt(index / 45);

            return bearings[index];
        },

        // @return {point} my point at 't' <0,1>
        pointAt: function(t) {
            var x = (1 - t) * this.start.x + t * this.end.x;
            var y = (1 - t) * this.start.y + t * this.end.y;
            return point(x, y);
        },

        // @return {number} the offset of the point `p` from the line. + if the point `p` is on the right side of the line, - if on the left and 0 if on the line.
        pointOffset: function(p) {
            // Find the sign of the determinant of vectors (start,end), where p is the query point.
            return ((this.end.x - this.start.x) * (p.y - this.start.y) - (this.end.y - this.start.y) * (p.x - this.start.x)) / 2;
        },
        clone: function() {
            return line(this);
        }
    };

    // Rectangle.
    // ----------
    function rect(x, y, w, h) {
        if (!(this instanceof rect))
            return new rect(x, y, w, h);
        if (y === undefined) {
            y = x.y;
            w = x.width;
            h = x.height;
            x = x.x;
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    rect.prototype = {
        toString: function() {
            return this.origin().toString() + ' ' + this.corner().toString();
        },
        // @return {boolean} true if rectangles are equal.
        equals: function(r) {
            var mr = g.rect(this).normalize();
            var nr = g.rect(r).normalize();
            return mr.x === nr.x && mr.y === nr.y && mr.width === nr.width && mr.height === nr.height;
        },
        origin: function() {
            return point(this.x, this.y);
        },
        corner: function() {
            return point(this.x + this.width, this.y + this.height);
        },
        topRight: function() {
            return point(this.x + this.width, this.y);
        },
        bottomLeft: function() {
            return point(this.x, this.y + this.height);
        },
        center: function() {
            return point(this.x + this.width / 2, this.y + this.height / 2);
        },
        // @return {rect} if rectangles intersect, {null} if not.
        intersect: function(r) {
            var myOrigin = this.origin();
            var myCorner = this.corner();
            var rOrigin = r.origin();
            var rCorner = r.corner();

            // No intersection found
            if (rCorner.x <= myOrigin.x ||
                rCorner.y <= myOrigin.y ||
                rOrigin.x >= myCorner.x ||
                rOrigin.y >= myCorner.y) return null;

            var x = Math.max(myOrigin.x, rOrigin.x);
            var y = Math.max(myOrigin.y, rOrigin.y);

            return rect(x, y, Math.min(myCorner.x, rCorner.x) - x, Math.min(myCorner.y, rCorner.y) - y);
        },

        // @return {string} (left|right|top|bottom) side which is nearest to point
        // @see Squeak Smalltalk, Rectangle>>sideNearestTo:
        sideNearestToPoint: function(p) {
            p = point(p);
            var distToLeft = p.x - this.x;
            var distToRight = (this.x + this.width) - p.x;
            var distToTop = p.y - this.y;
            var distToBottom = (this.y + this.height) - p.y;
            var closest = distToLeft;
            var side = 'left';

            if (distToRight < closest) {
                closest = distToRight;
                side = 'right';
            }
            if (distToTop < closest) {
                closest = distToTop;
                side = 'top';
            }
            if (distToBottom < closest) {
                closest = distToBottom;
                side = 'bottom';
            }
            return side;
        },
        // @return {bool} true if point p is insight me
        containsPoint: function(p) {
            p = point(p);
            if (p.x >= this.x && p.x <= this.x + this.width &&
                p.y >= this.y && p.y <= this.y + this.height) {
                return true;
            }
            return false;
        },
        // Algorithm ported from java.awt.Rectangle from OpenJDK.
        // @return {bool} true if rectangle `r` is inside me.
        containsRect: function(r) {
            var nr = rect(r).normalize();
            var W = nr.width;
            var H = nr.height;
            var X = nr.x;
            var Y = nr.y;
            var w = this.width;
            var h = this.height;
            if ((w | h | W | H) < 0) {
                // At least one of the dimensions is negative...
                return false;
            }
            // Note: if any dimension is zero, tests below must return false...
            var x = this.x;
            var y = this.y;
            if (X < x || Y < y) {
                return false;
            }
            w += x;
            W += X;
            if (W <= X) {
                // X+W overflowed or W was zero, return false if...
                // either original w or W was zero or
                // x+w did not overflow or
                // the overflowed x+w is smaller than the overflowed X+W
                if (w >= x || W > w) return false;
            } else {
                // X+W did not overflow and W was not zero, return false if...
                // original w was zero or
                // x+w did not overflow and x+w is smaller than X+W
                if (w >= x && W > w) return false;
            }
            h += y;
            H += Y;
            if (H <= Y) {
                if (h >= y || H > h) return false;
            } else {
                if (h >= y && H > h) return false;
            }
            return true;
        },
        // @return {point} a point on my boundary nearest to p
        // @see Squeak Smalltalk, Rectangle>>pointNearestTo:
        pointNearestToPoint: function(p) {
            p = point(p);
            if (this.containsPoint(p)) {
                var side = this.sideNearestToPoint(p);
                switch (side){
                    case 'right': return point(this.x + this.width, p.y);
                    case 'left': return point(this.x, p.y);
                    case 'bottom': return point(p.x, this.y + this.height);
                    case 'top': return point(p.x, this.y);
                }
            }
            return p.adhereToRect(this);
        },
        // Find point on my boundary where line starting
        // from my center ending in point p intersects me.
        // @param {number} angle If angle is specified, intersection with rotated rectangle is computed.
        intersectionWithLineFromCenterToPoint: function(p, angle) {
            p = point(p);
            var center = point(this.x + this.width / 2, this.y + this.height / 2);
            var result;
            if (angle) p.rotate(center, angle);

            // (clockwise, starting from the top side)
            var sides = [
                line(this.origin(), this.topRight()),
                line(this.topRight(), this.corner()),
                line(this.corner(), this.bottomLeft()),
                line(this.bottomLeft(), this.origin())
            ];
            var connector = line(center, p);

            for (var i = sides.length - 1; i >= 0; --i) {
                var intersection = sides[i].intersection(connector);
                if (intersection !== null) {
                    result = intersection;
                    break;
                }
            }
            if (result && angle) result.rotate(center, -angle);
            return result;
        },
        // Move and expand me.
        // @param r {rectangle} representing deltas
        moveAndExpand: function(r) {
            this.x += r.x || 0;
            this.y += r.y || 0;
            this.width += r.width || 0;
            this.height += r.height || 0;
            return this;
        },
        round: function(decimals) {
            this.x = decimals ? this.x.toFixed(decimals) : round(this.x);
            this.y = decimals ? this.y.toFixed(decimals) : round(this.y);
            this.width = decimals ? this.width.toFixed(decimals) : round(this.width);
            this.height = decimals ? this.height.toFixed(decimals) : round(this.height);
            return this;
        },
        // Normalize the rectangle; i.e., make it so that it has a non-negative width and height.
        // If width < 0 the function swaps the left and right corners,
        // and it swaps the top and bottom corners if height < 0
        // like in http://qt-project.org/doc/qt-4.8/qrectf.html#normalized
        normalize: function() {
            var newx = this.x;
            var newy = this.y;
            var newwidth = this.width;
            var newheight = this.height;
            if (this.width < 0) {
                newx = this.x + this.width;
                newwidth = -this.width;
            }
            if (this.height < 0) {
                newy = this.y + this.height;
                newheight = -this.height;
            }
            this.x = newx;
            this.y = newy;
            this.width = newwidth;
            this.height = newheight;
            return this;
        },
        // Find my bounding box when I'm rotated with the center of rotation in the center of me.
        // @return r {rectangle} representing a bounding box
        bbox: function(angle) {
            var theta = toRad(angle || 0);
            var st = abs(sin(theta));
            var ct = abs(cos(theta));
            var w = this.width * ct + this.height * st;
            var h = this.width * st + this.height * ct;
            return rect(this.x + (this.width - w) / 2, this.y + (this.height - h) / 2, w, h);
        },
        snapToGrid: function(gx, gy) {
            var origin = this.origin().snapToGrid(gx, gy);
            var corner = this.corner().snapToGrid(gx, gy);
            this.x = origin.x;
            this.y = origin.y;
            this.width = corner.x - origin.x;
            this.height = corner.y - origin.y;
            return this;
        },
        clone: function() {
            return rect(this);
        }
    };

    // Ellipse.
    // --------
    function ellipse(c, a, b) {
        if (!(this instanceof ellipse))
            return new ellipse(c, a, b);
        c = point(c);
        this.x = c.x;
        this.y = c.y;
        this.a = a;
        this.b = b;
    }

    ellipse.prototype = {
        toString: function() {
            return point(this.x, this.y).toString() + ' ' + this.a + ' ' + this.b;
        },
        bbox: function() {
            return rect(this.x - this.a, this.y - this.b, 2 * this.a, 2 * this.b);
        },
        // Find point on me where line from my center to
        // point p intersects my boundary.
        // @param {number} angle If angle is specified, intersection with rotated ellipse is computed.
        intersectionWithLineFromCenterToPoint: function(p, angle) {
            p = point(p);
            if (angle) p.rotate(point(this.x, this.y), angle);
            var dx = p.x - this.x;
            var dy = p.y - this.y;
            var result;
            if (dx === 0) {
                result = this.bbox().pointNearestToPoint(p);
                if (angle) return result.rotate(point(this.x, this.y), -angle);
                return result;
            }
            var m = dy / dx;
            var mSquared = m * m;
            var aSquared = this.a * this.a;
            var bSquared = this.b * this.b;
            var x = sqrt(1 / ((1 / aSquared) + (mSquared / bSquared)));

            x = dx < 0 ? -x : x;
            var y = m * x;
            result = point(this.x + x, this.y + y);
            if (angle) return result.rotate(point(this.x, this.y), -angle);
            return result;
        },
        clone: function() {
            return ellipse(this);
        }
    };

    // Bezier curve.
    // -------------
    var bezier = {
        // Cubic Bezier curve path through points.
        // Ported from C# implementation by Oleg V. Polikarpotchkin and Peter Lee (http://www.codeproject.com/KB/graphics/BezierSpline.aspx).
        // @param {array} points Array of points through which the smooth line will go.
        // @return {array} SVG Path commands as an array
        curveThroughPoints: function(points) {
            var controlPoints = this.getCurveControlPoints(points);
            var path = ['M', points[0].x, points[0].y];

            for (var i = 0; i < controlPoints[0].length; i++) {
                path.push('C', controlPoints[0][i].x, controlPoints[0][i].y, controlPoints[1][i].x, controlPoints[1][i].y, points[i + 1].x, points[i + 1].y);
            }
            return path;
        },

        // Get open-ended Bezier Spline Control Points.
        // @param knots Input Knot Bezier spline points (At least two points!).
        // @param firstControlPoints Output First Control points. Array of knots.length - 1 length.
        //  @param secondControlPoints Output Second Control points. Array of knots.length - 1 length.
        getCurveControlPoints: function(knots) {
            var firstControlPoints = [];
            var secondControlPoints = [];
            var n = knots.length - 1;
            var i;

            // Special case: Bezier curve should be a straight line.
            if (n == 1) {
                // 3P1 = 2P0 + P3
                firstControlPoints[0] = point((2 * knots[0].x + knots[1].x) / 3,
                                              (2 * knots[0].y + knots[1].y) / 3);
                // P2 = 2P1 – P0
                secondControlPoints[0] = point(2 * firstControlPoints[0].x - knots[0].x,
                                               2 * firstControlPoints[0].y - knots[0].y);
                return [firstControlPoints, secondControlPoints];
            }

            // Calculate first Bezier control points.
            // Right hand side vector.
            var rhs = [];

            // Set right hand side X values.
            for (i = 1; i < n - 1; i++) {
                rhs[i] = 4 * knots[i].x + 2 * knots[i + 1].x;
            }
            rhs[0] = knots[0].x + 2 * knots[1].x;
            rhs[n - 1] = (8 * knots[n - 1].x + knots[n].x) / 2.0;
            // Get first control points X-values.
            var x = this.getFirstControlPoints(rhs);

            // Set right hand side Y values.
            for (i = 1; i < n - 1; ++i) {
                rhs[i] = 4 * knots[i].y + 2 * knots[i + 1].y;
            }
            rhs[0] = knots[0].y + 2 * knots[1].y;
            rhs[n - 1] = (8 * knots[n - 1].y + knots[n].y) / 2.0;
            // Get first control points Y-values.
            var y = this.getFirstControlPoints(rhs);

            // Fill output arrays.
            for (i = 0; i < n; i++) {
                // First control point.
                firstControlPoints.push(point(x[i], y[i]));
                // Second control point.
                if (i < n - 1) {
                    secondControlPoints.push(point(2 * knots [i + 1].x - x[i + 1],
                                                   2 * knots[i + 1].y - y[i + 1]));
                } else {
                    secondControlPoints.push(point((knots[n].x + x[n - 1]) / 2,
                                                   (knots[n].y + y[n - 1]) / 2));
                }
            }
            return [firstControlPoints, secondControlPoints];
        },

        // Solves a tridiagonal system for one of coordinates (x or y) of first Bezier control points.
        // @param rhs Right hand side vector.
        // @return Solution vector.
        getFirstControlPoints: function(rhs) {
            var n = rhs.length;
            // `x` is a solution vector.
            var x = [];
            var tmp = [];
            var b = 2.0;

            x[0] = rhs[0] / b;
            // Decomposition and forward substitution.
            for (var i = 1; i < n; i++) {
                tmp[i] = 1 / b;
                b = (i < n - 1 ? 4.0 : 3.5) - tmp[i];
                x[i] = (rhs[i] - x[i - 1]) / b;
            }
            for (i = 1; i < n; i++) {
                // Backsubstitution.
                x[n - i - 1] -= tmp[n - i] * x[n - i];
            }
            return x;
        },

        // Solves an inversion problem -- Given the (x, y) coordinates of a point which lies on
        // a parametric curve x = x(t)/w(t), y = y(t)/w(t), ﬁnd the parameter value t
        // which corresponds to that point.
        // @param control points (start, control start, control end, end)
        // @return a function accepts a point and returns t.
        getInversionSolver: function(p0, p1, p2, p3) {
            var pts = arguments;
            function l(i, j) {
                // calculates a determinant 3x3
                // [p.x  p.y  1]
                // [pi.x pi.y 1]
                // [pj.x pj.y 1]
                var pi = pts[i];
                var pj = pts[j];
                return function(p) {
                    var w = (i % 3 ? 3 : 1) * (j % 3 ? 3 : 1);
                    var lij = p.x * (pi.y - pj.y) + p.y * (pj.x - pi.x) + pi.x * pj.y - pi.y * pj.x;
                    return w * lij;
                };
            }
            return function solveInversion(p) {
                var ct = 3 * l(2, 3)(p1);
                var c1 = l(1, 3)(p0) / ct;
                var c2 = -l(2, 3)(p0) / ct;
                var la = c1 * l(3, 1)(p) + c2 * (l(3, 0)(p) + l(2, 1)(p)) + l(2, 0)(p);
                var lb = c1 * l(3, 0)(p) + c2 * l(2, 0)(p) + l(1, 0)(p);
                return lb / (lb - la);
            };
        },

        // Divide a Bezier curve into two at point defined by value 't' <0,1>.
        // Using deCasteljau algorithm. http://math.stackexchange.com/a/317867
        // @param control points (start, control start, control end, end)
        // @return a function accepts t and returns 2 curves each defined by 4 control points.
        getCurveDivider: function(p0, p1, p2, p3) {
            return function divideCurve(t) {
                var l = line(p0, p1).pointAt(t);
                var m = line(p1, p2).pointAt(t);
                var n = line(p2, p3).pointAt(t);
                var p = line(l, m).pointAt(t);
                var q = line(m, n).pointAt(t);
                var r = line(p, q).pointAt(t);
                return [{ p0: p0, p1: l, p2: p, p3: r }, { p0: r, p1: q, p2: n, p3: p3 }];
            };
        }
    };

    // Scale.
    var scale = {

        // Return the `value` from the `domain` interval scaled to the `range` interval.
        linear: function(domain, range, value) {

            var domainSpan = domain[1] - domain[0];
            var rangeSpan = range[1] - range[0];
            return (((value - domain[0]) / domainSpan) * rangeSpan + range[0]) || 0;
        }
    };

    return {
        toDeg: toDeg,
        toRad: toRad,
        snapToGrid: snapToGrid,
        normalizeAngle: normalizeAngle,
        point: point,
        line: line,
        rect: rect,
        ellipse: ellipse,
        bezier: bezier,
        scale: scale
    };

})();

// Vectorizer.
// -----------

// A tiny library for making your live easier when dealing with SVG.
// The only Vectorizer dependency is the Geometry library.

// Copyright © 2012 - 2015 client IO (http://client.io)

var V;
var Vectorizer;

V = Vectorizer = (function() {

    var SVGsupported = typeof window === 'object' && !!(window.SVGAngle || document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'));

    // SVG support is required.
    if (!SVGsupported) return function() {};

    // XML namespaces.
    var ns = {
        xmlns: 'http://www.w3.org/2000/svg',
        xlink: 'http://www.w3.org/1999/xlink'
    };
    // SVG version.
    var SVGversion = '1.1';

    // A function returning a unique identifier for this client session with every call.
    var idCounter = 0;
    function uniqueId() {
        var id = ++idCounter + '';
        return 'v-' + id;
    }

    // Replace all spaces with the Unicode No-break space (http://www.fileformat.info/info/unicode/char/a0/index.htm).
    // IE would otherwise collapse all spaces into one. This is used in the text() method but it is
    // also exposed so that the programmer can use it in case he needs to. This is useful e.g. in tests
    // when you want to compare the actual DOM text content without having to add the unicode character in
    // the place of all spaces.
    function sanitizeText(text) {
        return (text || '').replace(/ /g, '\u00A0');
    }

    function isObject(o) {
        return o === Object(o);
    }

    function isArray(o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    }

    // Create an SVG document element.
    // If `content` is passed, it will be used as the SVG content of the `<svg>` root element.
    function createSvgDocument(content) {

        var svg = '<svg xmlns="' + ns.xmlns + '" xmlns:xlink="' + ns.xlink + '" version="' + SVGversion + '">' + (content || '') + '</svg>';
        var xml = parseXML(svg, { async: false });
        return xml.documentElement;
    }

    function parseXML(data, opt) {

        opt = opt || {};

        var xml;

        try {
            var parser = new DOMParser();

            if (typeof opt.async !== 'undefined') {
                parser.async = opt.async;
            }

            xml = parser.parseFromString(data, 'text/xml');
        } catch (error) {
            xml = undefined;
        }

        if (!xml || xml.getElementsByTagName('parsererror').length) {
            throw new Error('Invalid XML: ' + data);
        }

        return xml;
    }

    // Create SVG element.
    // -------------------

    function createElement(el, attrs, children) {

        var i, len;

        if (!el) return undefined;

        // If `el` is an object, it is probably a native SVG element. Wrap it to VElement.
        if (typeof el === 'object') {
            return new VElement(el);
        }
        attrs = attrs || {};

        // If `el` is a `'svg'` or `'SVG'` string, create a new SVG canvas.
        if (el.toLowerCase() === 'svg') {

            return new VElement(createSvgDocument());

        } else if (el[0] === '<') {
            // Create element from an SVG string.
            // Allows constructs of type: `document.appendChild(Vectorizer('<rect></rect>').node)`.

            var svgDoc = createSvgDocument(el);

            // Note that `createElement()` might also return an array should the SVG string passed as
            // the first argument contain more then one root element.
            if (svgDoc.childNodes.length > 1) {

                // Map child nodes to `VElement`s.
                var ret = [];
                for (i = 0, len = svgDoc.childNodes.length; i < len; i++) {

                    var childNode = svgDoc.childNodes[i];
                    ret.push(new VElement(document.importNode(childNode, true)));
                }
                return ret;
            }

            return new VElement(document.importNode(svgDoc.firstChild, true));
        }

        el = document.createElementNS(ns.xmlns, el);

        // Set attributes.
        for (var key in attrs) {

            setAttribute(el, key, attrs[key]);
        }

        // Normalize `children` array.
        if (Object.prototype.toString.call(children) != '[object Array]') children = [children];

        // Append children if they are specified.
        for (i = 0, len = (children[0] && children.length) || 0; i < len; i++) {
            var child = children[i];
            el.appendChild(child instanceof VElement ? child.node : child);
        }

        return new VElement(el);
    }

    function setAttribute(el, name, value) {

        if (name.indexOf(':') > -1) {
            // Attribute names can be namespaced. E.g. `image` elements
            // have a `xlink:href` attribute to set the source of the image.
            var combinedKey = name.split(':');
            el.setAttributeNS(ns[combinedKey[0]], combinedKey[1], value);

        } else if (name === 'id') {
            el.id = value;
        } else {
            el.setAttribute(name, value);
        }
    }

    function parseTransformString(transform) {
        var translate,
            rotate,
            scale;

        if (transform) {

            var separator = /[ ,]+/;

            var translateMatch = transform.match(/translate\((.*)\)/);
            if (translateMatch) {
                translate = translateMatch[1].split(separator);
            }
            var rotateMatch = transform.match(/rotate\((.*)\)/);
            if (rotateMatch) {
                rotate = rotateMatch[1].split(separator);
            }
            var scaleMatch = transform.match(/scale\((.*)\)/);
            if (scaleMatch) {
                scale = scaleMatch[1].split(separator);
            }
        }

        var sx = (scale && scale[0]) ? parseFloat(scale[0]) : 1;

        return {
            translate: {
                tx: (translate && translate[0]) ? parseInt(translate[0], 10) : 0,
                ty: (translate && translate[1]) ? parseInt(translate[1], 10) : 0
            },
            rotate: {
                angle: (rotate && rotate[0]) ? parseInt(rotate[0], 10) : 0,
                cx: (rotate && rotate[1]) ? parseInt(rotate[1], 10) : undefined,
                cy: (rotate && rotate[2]) ? parseInt(rotate[2], 10) : undefined
            },
            scale: {
                sx: sx,
                sy: (scale && scale[1]) ? parseFloat(scale[1]) : sx
            }
        };
    }


    // Matrix decomposition.
    // ---------------------

    function deltaTransformPoint(matrix, point) {

        var dx = point.x * matrix.a + point.y * matrix.c + 0;
        var dy = point.x * matrix.b + point.y * matrix.d + 0;
        return { x: dx, y: dy };
    }

    function decomposeMatrix(matrix) {

        // @see https://gist.github.com/2052247

        // calculate delta transform point
        var px = deltaTransformPoint(matrix, { x: 0, y: 1 });
        var py = deltaTransformPoint(matrix, { x: 1, y: 0 });

        // calculate skew
        var skewX = ((180 / Math.PI) * Math.atan2(px.y, px.x) - 90);
        var skewY = ((180 / Math.PI) * Math.atan2(py.y, py.x));

        return {

            translateX: matrix.e,
            translateY: matrix.f,
            scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
            scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
            skewX: skewX,
            skewY: skewY,
            rotation: skewX // rotation is the same as skew x
        };
    }

    // VElement.
    // ---------

    function VElement(el) {
        if (el instanceof VElement) {
            el = el.node;
        }
        this.node = el;
        if (!this.node.id) {
            this.node.id = uniqueId();
        }
    }

    // VElement public API.
    // --------------------

    VElement.prototype = {

        translate: function(tx, ty, opt) {

            opt = opt || {};
            ty = ty || 0;

            var transformAttr = this.attr('transform') || '';
            var transform = parseTransformString(transformAttr);

            // Is it a getter?
            if (typeof tx === 'undefined') {
                return transform.translate;
            }

            transformAttr = transformAttr.replace(/translate\([^\)]*\)/g, '').trim();

            var newTx = opt.absolute ? tx : transform.translate.tx + tx;
            var newTy = opt.absolute ? ty : transform.translate.ty + ty;
            var newTranslate = 'translate(' + newTx + ',' + newTy + ')';

            // Note that `translate()` is always the first transformation. This is
            // usually the desired case.
            this.attr('transform', (newTranslate + ' ' + transformAttr).trim());
            return this;
        },

        rotate: function(angle, cx, cy, opt) {

            opt = opt || {};

            var transformAttr = this.attr('transform') || '';
            var transform = parseTransformString(transformAttr);

            // Is it a getter?
            if (typeof angle === 'undefined') {
                return transform.rotate;
            }

            transformAttr = transformAttr.replace(/rotate\([^\)]*\)/g, '').trim();

            angle %= 360;

            var newAngle = opt.absolute ? angle : transform.rotate.angle + angle;
            var newOrigin = (cx !== undefined && cy !== undefined) ? ',' + cx + ',' + cy : '';
            var newRotate = 'rotate(' + newAngle + newOrigin + ')';

            this.attr('transform', (transformAttr + ' ' + newRotate).trim());
            return this;
        },

        // Note that `scale` as the only transformation does not combine with previous values.
        scale: function(sx, sy) {
            sy = (typeof sy === 'undefined') ? sx : sy;

            var transformAttr = this.attr('transform') || '';
            var transform = parseTransformString(transformAttr);

            // Is it a getter?
            if (typeof sx === 'undefined') {
                return transform.scale;
            }

            transformAttr = transformAttr.replace(/scale\([^\)]*\)/g, '').trim();

            var newScale = 'scale(' + sx + ',' + sy + ')';

            this.attr('transform', (transformAttr + ' ' + newScale).trim());
            return this;
        },

        // Get SVGRect that contains coordinates and dimension of the real bounding box,
        // i.e. after transformations are applied.
        // If `target` is specified, bounding box will be computed relatively to `target` element.
        bbox: function(withoutTransformations, target) {

            // If the element is not in the live DOM, it does not have a bounding box defined and
            // so fall back to 'zero' dimension element.
            if (!this.node.ownerSVGElement) return { x: 0, y: 0, width: 0, height: 0 };

            var box;
            try {

                box = this.node.getBBox();
                // We are creating a new object as the standard says that you can't
                // modify the attributes of a bbox.
                box = { x: box.x, y: box.y, width: box.width, height: box.height };

            } catch (e) {

                // Fallback for IE.
                box = {
                    x: this.node.clientLeft,
                    y: this.node.clientTop,
                    width: this.node.clientWidth,
                    height: this.node.clientHeight
                };
            }

            if (withoutTransformations) {

                return box;
            }

            var matrix = this.node.getTransformToElement(target || this.node.ownerSVGElement);

            return V.transformRect(box, matrix);
        },

        text: function(content, opt) {

            // Replace all spaces with the Unicode No-break space (http://www.fileformat.info/info/unicode/char/a0/index.htm).
            // IE would otherwise collapse all spaces into one.
            content = sanitizeText(content);
            opt = opt || {};
            var lines = content.split('\n');
            var i = 0;
            var tspan;

            // `alignment-baseline` does not work in Firefox.
            // Setting `dominant-baseline` on the `<text>` element doesn't work in IE9.
            // In order to have the 0,0 coordinate of the `<text>` element (or the first `<tspan>`)
            // in the top left corner we translate the `<text>` element by `0.8em`.
            // See `http://www.w3.org/Graphics/SVG/WG/wiki/How_to_determine_dominant_baseline`.
            // See also `http://apike.ca/prog_svg_text_style.html`.
            var y = this.attr('y');
            if (!y) {
                this.attr('y', '0.8em');
            }

            // An empty text gets rendered into the DOM in webkit-based browsers.
            // In order to unify this behaviour across all browsers
            // we rather hide the text element when it's empty.
            this.attr('display', content ? null : 'none');

            // Preserve spaces. In other words, we do not want consecutive spaces to get collapsed to one.
            this.node.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');

            // Easy way to erase all `<tspan>` children;
            this.node.textContent = '';

            var textNode = this.node;

            if (opt.textPath) {

                // Wrap the text in the SVG <textPath> element that points
                // to a path defined by `opt.textPath` inside the internal `<defs>` element.
                var defs = this.find('defs');
                if (defs.length === 0) {
                    defs = createElement('defs');
                    this.append(defs);
                }

                // If `opt.textPath` is a plain string, consider it to be directly the
                // SVG path data for the text to go along (this is a shortcut).
                // Otherwise if it is an object and contains the `d` property, then this is our path.
                var d = Object(opt.textPath) === opt.textPath ? opt.textPath.d : opt.textPath;
                if (d) {
                    var path = createElement('path', { d: d });
                    defs.append(path);
                }

                var textPath = createElement('textPath');
                // Set attributes on the `<textPath>`. The most important one
                // is the `xlink:href` that points to our newly created `<path/>` element in `<defs/>`.
                // Note that we also allow the following construct:
                // `t.text('my text', { textPath: { 'xlink:href': '#my-other-path' } })`.
                // In other words, one can completely skip the auto-creation of the path
                // and use any other arbitrary path that is in the document.
                if (!opt.textPath['xlink:href'] && path) {
                    textPath.attr('xlink:href', '#' + path.node.id);
                }

                if (Object(opt.textPath) === opt.textPath) {
                    textPath.attr(opt.textPath);
                }
                this.append(textPath);
                // Now all the `<tspan>`s will be inside the `<textPath>`.
                textNode = textPath.node;
            }

            var offset = 0;

            for (var i = 0; i < lines.length; i++) {

                var line = lines[i];
                // Shift all the <tspan> but first by one line (`1em`)
                var lineHeight = opt.lineHeight || '1em';
                if (opt.lineHeight === 'auto') {
                    lineHeight = '1.5em';
                }
                var vLine = V('tspan', { dy: (i == 0 ? '0em' : lineHeight), x: this.attr('x') || 0 });
                vLine.addClass('v-line');

                if (line) {

                    if (opt.annotations) {

                        // Get the line height based on the biggest font size in the annotations for this line.
                        var maxFontSize = 0;

                        // Find the *compacted* annotations for this line.
                        var lineAnnotations = V.annotateString(lines[i], isArray(opt.annotations) ? opt.annotations : [opt.annotations], { offset: -offset, includeAnnotationIndices: opt.includeAnnotationIndices });
                        for (var j = 0; j < lineAnnotations.length; j++) {

                            var annotation = lineAnnotations[j];
                            if (isObject(annotation)) {

                                var fontSize = parseInt(annotation.attrs['font-size'], 10);
                                if (fontSize && fontSize > maxFontSize) {
                                    maxFontSize = fontSize;
                                }

                                tspan = V('tspan', annotation.attrs);
                                if (opt.includeAnnotationIndices) {
                                    // If `opt.includeAnnotationIndices` is `true`,
                                    // set the list of indices of all the applied annotations
                                    // in the `annotations` attribute. This list is a comma
                                    // separated list of indices.
                                    tspan.attr('annotations', annotation.annotations);
                                }
                                if (annotation.attrs['class']) {
                                    tspan.addClass(annotation.attrs['class']);
                                }
                                tspan.node.textContent = annotation.t;

                            } else {

                                tspan = document.createTextNode(annotation || ' ');

                            }
                            vLine.append(tspan);
                        }

                        if (opt.lineHeight === 'auto' && maxFontSize && i !== 0) {

                            vLine.attr('dy', (maxFontSize * 1.2) + 'px');
                        }

                    } else {

                        vLine.node.textContent = line;
                    }

                } else {

                    // Make sure the textContent is never empty. If it is, add a dummy
                    // character and make it invisible, making the following lines correctly
                    // relatively positioned. `dy=1em` won't work with empty lines otherwise.
                    vLine.addClass('v-empty-line');
                    vLine.node.style.opacity = 0;
                    vLine.node.textContent = '-';
                }

                V(textNode).append(vLine);

                offset += line.length + 1;      // + 1 = newline character.
            }

            return this;
        },

        attr: function(name, value) {

            if (typeof name === 'undefined') {
                // Return all attributes.
                var attributes = this.node.attributes;
                var attrs = {};
                for (var i = 0; i < attributes.length; i++) {
                    attrs[attributes[i].nodeName] = attributes[i].nodeValue;
                }
                return attrs;
            }

            if (typeof name === 'string' && typeof value === 'undefined') {
                return this.node.getAttribute(name);
            }

            if (typeof name === 'object') {

                for (var attrName in name) {
                    if (name.hasOwnProperty(attrName)) {
                        setAttribute(this.node, attrName, name[attrName]);
                    }
                }

            } else {

                setAttribute(this.node, name, value);
            }

            return this;
        },

        remove: function() {
            if (this.node.parentNode) {
                this.node.parentNode.removeChild(this.node);
            }
        },

        append: function(el) {

            var els = el;

            if (Object.prototype.toString.call(el) !== '[object Array]') {

                els = [el];
            }

            for (var i = 0, len = els.length; i < len; i++) {
                el = els[i];
                this.node.appendChild(el instanceof VElement ? el.node : el);
            }

            return this;
        },

        prepend: function(el) {
            this.node.insertBefore(el instanceof VElement ? el.node : el, this.node.firstChild);
        },

        svg: function() {

            return this.node instanceof window.SVGSVGElement ? this : V(this.node.ownerSVGElement);
        },

        defs: function() {

            var defs = this.svg().node.getElementsByTagName('defs');

            return (defs && defs.length) ? V(defs[0]) : undefined;
        },

        clone: function() {
            var clone = V(this.node.cloneNode(true));
            // Note that clone inherits also ID. Therefore, we need to change it here.
            clone.node.id = uniqueId();
            return clone;
        },

        findOne: function(selector) {

            var found = this.node.querySelector(selector);
            return found ? V(found) : undefined;
        },

        find: function(selector) {

            var nodes = this.node.querySelectorAll(selector);

            // Map DOM elements to `VElement`s.
            return Array.prototype.map.call(nodes, V);
        },

        // Find an index of an element inside its container.
        index: function() {

            var index = 0;
            var node = this.node.previousSibling;

            while (node) {
                // nodeType 1 for ELEMENT_NODE
                if (node.nodeType === 1) index++;
                node = node.previousSibling;
            }

            return index;
        },

        findParentByClass: function(className, terminator) {

            terminator = terminator || this.node.ownerSVGElement;

            var node = this.node.parentNode;

            while (node && node !== terminator) {

                if (V(node).hasClass(className)) {
                    return V(node);
                }

                node = node.parentNode;
            }

            return null;
        },

        // Convert global point into the coordinate space of this element.
        toLocalPoint: function(x, y) {

            var svg = this.svg().node;

            var p = svg.createSVGPoint();
            p.x = x;
            p.y = y;

            try {

                var globalPoint = p.matrixTransform(svg.getScreenCTM().inverse());
                var globalToLocalMatrix = this.node.getTransformToElement(svg).inverse();

            } catch (e) {
                // IE9 throws an exception in odd cases. (`Unexpected call to method or property access`)
                // We have to make do with the original coordianates.
                return p;
            }

            return globalPoint.matrixTransform(globalToLocalMatrix);
        },

        translateCenterToPoint: function(p) {

            var bbox = this.bbox();
            var center = g.rect(bbox).center();

            this.translate(p.x - center.x, p.y - center.y);
        },

        // Efficiently auto-orient an element. This basically implements the orient=auto attribute
        // of markers. The easiest way of understanding on what this does is to imagine the element is an
        // arrowhead. Calling this method on the arrowhead makes it point to the `position` point while
        // being auto-oriented (properly rotated) towards the `reference` point.
        // `target` is the element relative to which the transformations are applied. Usually a viewport.
        translateAndAutoOrient: function(position, reference, target) {

            // Clean-up previously set transformations except the scale. If we didn't clean up the
            // previous transformations then they'd add up with the old ones. Scale is an exception as
            // it doesn't add up, consider: `this.scale(2).scale(2).scale(2)`. The result is that the
            // element is scaled by the factor 2, not 8.

            var s = this.scale();
            this.attr('transform', '');
            this.scale(s.sx, s.sy);

            var svg = this.svg().node;
            var bbox = this.bbox(false, target);

            // 1. Translate to origin.
            var translateToOrigin = svg.createSVGTransform();
            translateToOrigin.setTranslate(-bbox.x - bbox.width / 2, -bbox.y - bbox.height / 2);

            // 2. Rotate around origin.
            var rotateAroundOrigin = svg.createSVGTransform();
            var angle = g.point(position).changeInAngle(position.x - reference.x, position.y - reference.y, reference);
            rotateAroundOrigin.setRotate(angle, 0, 0);

            // 3. Translate to the `position` + the offset (half my width) towards the `reference` point.
            var translateFinal = svg.createSVGTransform();
            var finalPosition = g.point(position).move(reference, bbox.width / 2);
            translateFinal.setTranslate(position.x + (position.x - finalPosition.x), position.y + (position.y - finalPosition.y));

            // 4. Apply transformations.
            var ctm = this.node.getTransformToElement(target);
            var transform = svg.createSVGTransform();
            transform.setMatrix(
                translateFinal.matrix.multiply(
                    rotateAroundOrigin.matrix.multiply(
                        translateToOrigin.matrix.multiply(
                            ctm)))
            );

            // Instead of directly setting the `matrix()` transform on the element, first, decompose
            // the matrix into separate transforms. This allows us to use normal Vectorizer methods
            // as they don't work on matrices. An example of this is to retrieve a scale of an element.
            // this.node.transform.baseVal.initialize(transform);

            var decomposition = decomposeMatrix(transform.matrix);

            this.translate(decomposition.translateX, decomposition.translateY);
            this.rotate(decomposition.rotation);
            // Note that scale has been already applied, hence the following line stays commented. (it's here just for reference).
            //this.scale(decomposition.scaleX, decomposition.scaleY);

            return this;
        },

        animateAlongPath: function(attrs, path) {

            var animateMotion = V('animateMotion', attrs);
            var mpath = V('mpath', { 'xlink:href': '#' + V(path).node.id });

            animateMotion.append(mpath);

            this.append(animateMotion);
            try {
                animateMotion.node.beginElement();
            } catch (e) {
                // Fallback for IE 9.
                // Run the animation programatically if FakeSmile (`http://leunen.me/fakesmile/`) present
                if (document.documentElement.getAttribute('smiling') === 'fake') {

                    // Register the animation. (See `https://answers.launchpad.net/smil/+question/203333`)
                    var animation = animateMotion.node;
                    animation.animators = [];

                    var animationID = animation.getAttribute('id');
                    if (animationID) id2anim[animationID] = animation;

                    var targets = getTargets(animation);
                    for (var i = 0, len = targets.length; i < len; i++) {
                        var target = targets[i];
                        var animator = new Animator(animation, target, i);
                        animators.push(animator);
                        animation.animators[i] = animator;
                        animator.register();
                    }
                }
            }
        },

        hasClass: function(className) {

            return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.node.getAttribute('class'));
        },

        addClass: function(className) {

            if (!this.hasClass(className)) {
                var prevClasses = this.node.getAttribute('class') || '';
                this.node.setAttribute('class', (prevClasses + ' ' + className).trim());
            }

            return this;
        },

        removeClass: function(className) {

            if (this.hasClass(className)) {
                var newClasses = this.node.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
                this.node.setAttribute('class', newClasses);
            }

            return this;
        },

        toggleClass: function(className, toAdd) {

            var toRemove = typeof toAdd === 'undefined' ? this.hasClass(className) : !toAdd;

            if (toRemove) {
                this.removeClass(className);
            } else {
                this.addClass(className);
            }

            return this;
        },

        // Interpolate path by discrete points. The precision of the sampling
        // is controlled by `interval`. In other words, `sample()` will generate
        // a point on the path starting at the beginning of the path going to the end
        // every `interval` pixels.
        // The sampler can be very useful for e.g. finding intersection between two
        // paths (finding the two closest points from two samples).
        sample: function(interval) {

            interval = interval || 1;
            var node = this.node;
            var length = node.getTotalLength();
            var samples = [];
            var distance = 0;
            var sample;
            while (distance < length) {
                sample = node.getPointAtLength(distance);
                samples.push({ x: sample.x, y: sample.y, distance: distance });
                distance += interval;
            }
            return samples;
        },

        convertToPath: function() {

            var path = createElement('path');
            path.attr(this.attr());
            var d = this.convertToPathData();
            if (d) {
                path.attr('d', d);
            }
            return path;
        },

        convertToPathData: function() {

            var tagName = this.node.tagName.toUpperCase();

            switch (tagName) {
            case 'PATH':
                return this.attr('d');
            case 'LINE':
                return convertLineToPathData(this.node);
            case 'POLYGON':
                return convertPolygonToPathData(this.node);
            case 'POLYLINE':
                return convertPolylineToPathData(this.node);
            case 'ELLIPSE':
                return convertEllipseToPathData(this.node);
            case 'CIRCLE':
                return convertCircleToPathData(this.node);
            case 'RECT':
                return convertRectToPathData(this.node);
            }

            throw new Error(tagName + ' cannot be converted to PATH.');
        },

        // Find the intersection of a line starting in the center
        // of the SVG `node` ending in the point `ref`.
        // `target` is an SVG element to which `node`s transformations are relative to.
        // In JointJS, `target` is the `paper.viewport` SVG group element.
        // Note that `ref` point must be in the coordinate system of the `target` for this function to work properly.
        // Returns a point in the `target` coordinte system (the same system as `ref` is in) if
        // an intersection is found. Returns `undefined` otherwise.
        findIntersection: function(ref, target) {

            var svg = this.svg().node;
            target = target || svg;
            var bbox = g.rect(this.bbox(false, target));
            var center = bbox.center();
            var spot = bbox.intersectionWithLineFromCenterToPoint(ref);

            if (!spot) return undefined;

            var tagName = this.node.localName.toUpperCase();

            // Little speed up optimalization for `<rect>` element. We do not do conversion
            // to path element and sampling but directly calculate the intersection through
            // a transformed geometrical rectangle.
            if (tagName === 'RECT') {

                var gRect = g.rect(
                    parseFloat(this.attr('x') || 0),
                    parseFloat(this.attr('y') || 0),
                    parseFloat(this.attr('width')),
                    parseFloat(this.attr('height'))
                );
                // Get the rect transformation matrix with regards to the SVG document.
                var rectMatrix = this.node.getTransformToElement(target);
                // Decompose the matrix to find the rotation angle.
                var rectMatrixComponents = V.decomposeMatrix(rectMatrix);
                // Now we want to rotate the rectangle back so that we
                // can use `intersectionWithLineFromCenterToPoint()` passing the angle as the second argument.
                var resetRotation = svg.createSVGTransform();
                resetRotation.setRotate(-rectMatrixComponents.rotation, center.x, center.y);
                var rect = V.transformRect(gRect, resetRotation.matrix.multiply(rectMatrix));
                spot = g.rect(rect).intersectionWithLineFromCenterToPoint(ref, rectMatrixComponents.rotation);

            } else if (tagName === 'PATH' || tagName === 'POLYGON' || tagName === 'POLYLINE' || tagName === 'CIRCLE' || tagName === 'ELLIPSE') {

                var pathNode = (tagName === 'PATH') ? this : this.convertToPath();
                var samples = pathNode.sample();
                var minDistance = Infinity;
                var closestSamples = [];

                for (var i = 0, len = samples.length; i < len; i++) {

                    var sample = samples[i];
                    // Convert the sample point in the local coordinate system to the global coordinate system.
                    var gp = V.createSVGPoint(sample.x, sample.y);
                    gp = gp.matrixTransform(this.node.getTransformToElement(target));
                    sample = g.point(gp);
                    var centerDistance = sample.distance(center);
                    // Penalize a higher distance to the reference point by 10%.
                    // This gives better results. This is due to
                    // inaccuracies introduced by rounding errors and getPointAtLength() returns.
                    var refDistance = sample.distance(ref) * 1.1;
                    var distance = centerDistance + refDistance;
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSamples = [{ sample: sample, refDistance: refDistance }];
                    } else if (distance < minDistance + 1) {
                        closestSamples.push({ sample: sample, refDistance: refDistance });
                    }
                }
                closestSamples.sort(function(a, b) { return a.refDistance - b.refDistance; });
                spot = closestSamples[0].sample;
            }

            return spot;
        }
    };

    function convertLineToPathData(line) {

        line = createElement(line);
        var d = [
            'M', line.attr('x1'), line.attr('y1'),
            'L', line.attr('x2'), line.attr('y2')
        ].join(' ');
        return d;
    }

    function convertPolygonToPathData(polygon) {

        polygon = createElement(polygon);
        var points = polygon.node.points;

        var d = [];
        var p;
        for (var i = 0; i < points.length; i++) {
            p = points[i];
            d.push(i === 0 ? 'M' : 'L', p.x, p.y);
        }
        d.push('Z');
        return d.join(' ');
    }

    function convertPolylineToPathData(polyline) {

        polyline = createElement(polyline);
        var points = polyline.node.points;

        var d = [];
        var p;
        for (var i = 0; i < points.length; i++) {
            p = points[i];
            d.push(i === 0 ? 'M' : 'L', p.x, p.y);
        }
        return d.join(' ');
    }

    var KAPPA = 0.5522847498307935;

    function convertCircleToPathData(circle) {

        circle = createElement(circle);
        var cx = parseFloat(circle.attr('cx')) || 0;
        var cy = parseFloat(circle.attr('cy')) || 0;
        var r = parseFloat(circle.attr('r'));
        var cd = r * KAPPA; // Control distance.

        var d = [
            'M', cx, cy - r,    // Move to the first point.
            'C', cx + cd, cy - r, cx + r, cy - cd, cx + r, cy, // I. Quadrant.
            'C', cx + r, cy + cd, cx + cd, cy + r, cx, cy + r, // II. Quadrant.
            'C', cx - cd, cy + r, cx - r, cy + cd, cx - r, cy, // III. Quadrant.
            'C', cx - r, cy - cd, cx - cd, cy - r, cx, cy - r, // IV. Quadrant.
            'Z'
        ].join(' ');
        return d;
    }

    function convertEllipseToPathData(ellipse) {

        ellipse = createElement(ellipse);
        var cx = parseFloat(ellipse.attr('cx')) || 0;
        var cy = parseFloat(ellipse.attr('cy')) || 0;
        var rx = parseFloat(ellipse.attr('rx'));
        var ry = parseFloat(ellipse.attr('ry')) || rx;
        var cdx = rx * KAPPA; // Control distance x.
        var cdy = ry * KAPPA; // Control distance y.

        var d = [
            'M', cx, cy - ry,    // Move to the first point.
            'C', cx + cdx, cy - ry, cx + rx, cy - cdy, cx + rx, cy, // I. Quadrant.
            'C', cx + rx, cy + cdy, cx + cdx, cy + ry, cx, cy + ry, // II. Quadrant.
            'C', cx - cdx, cy + ry, cx - rx, cy + cdy, cx - rx, cy, // III. Quadrant.
            'C', cx - rx, cy - cdy, cx - cdx, cy - ry, cx, cy - ry, // IV. Quadrant.
            'Z'
        ].join(' ');
        return d;
    }

    function convertRectToPathData(rect) {

        rect = createElement(rect);
        var x = parseFloat(rect.attr('x')) || 0;
        var y = parseFloat(rect.attr('y')) || 0;
        var width = parseFloat(rect.attr('width')) || 0;
        var height = parseFloat(rect.attr('height')) || 0;
        var rx = parseFloat(rect.attr('rx')) || 0;
        var ry = parseFloat(rect.attr('ry')) || 0;
        var bbox = g.rect(x, y, width, height);

        var d;

        if (!rx && !ry) {

            d = [
                'M', bbox.origin().x, bbox.origin().y,
                'H', bbox.corner().x,
                'V', bbox.corner().y,
                'H', bbox.origin().x,
                'V', bbox.origin().y,
                'Z'
            ].join(' ');

        } else {

            var r = x + width;
            var b = y + height;
            d = [
                'M', x + rx, y,
                'L', r - rx, y,
                'Q', r, y, r, y + ry,
                'L', r, y + height - ry,
                'Q', r, b, r - rx, b,
                'L', x + rx, b,
                'Q', x, b, x, b - rx,
                'L', x, y + ry,
                'Q', x, y, x + rx, y,
                'Z'
            ].join(' ');
        }
        return d;
    }

    // Convert a rectangle to SVG path commands. `r` is an object of the form:
    // `{ x: [number], y: [number], width: [number], height: [number], top-ry: [number], top-ry: [number], bottom-rx: [number], bottom-ry: [number] }`,
    // where `x, y, width, height` are the usual rectangle attributes and [top-/bottom-]rx/ry allows for
    // specifying radius of the rectangle for all its sides (as opposed to the built-in SVG rectangle
    // that has only `rx` and `ry` attributes).
    function rectToPath(r) {

        var topRx = r.rx || r['top-rx'] || 0;
        var bottomRx = r.rx || r['bottom-rx'] || 0;
        var topRy = r.ry || r['top-ry'] || 0;
        var bottomRy = r.ry || r['bottom-ry'] || 0;

        return [
            'M', r.x, r.y + topRy,
            'v', r.height - topRy - bottomRy,
            'a', bottomRx, bottomRy, 0, 0, 0, bottomRx, bottomRy,
            'h', r.width - 2 * bottomRx,
            'a', bottomRx, bottomRy, 0, 0, 0, bottomRx, -bottomRy,
            'v', -(r.height - bottomRy - topRy),
            'a', topRx, topRy, 0, 0, 0, -topRx, -topRy,
            'h', -(r.width - 2 * topRx),
            'a', topRx, topRy, 0, 0, 0, -topRx, topRy
        ].join(' ');
    }

    var V = createElement;

    V.isVElement = function(object) {
        return object instanceof VElement;
    };

    V.decomposeMatrix = decomposeMatrix;
    V.rectToPath = rectToPath;

    var svgDocument = V('svg').node;

    V.createSVGMatrix = function(m) {

        var svgMatrix = svgDocument.createSVGMatrix();
        for (var component in m) {
            svgMatrix[component] = m[component];
        }

        return svgMatrix;
    };

    V.createSVGTransform = function() {

        return svgDocument.createSVGTransform();
    };

    V.createSVGPoint = function(x, y) {

        var p = svgDocument.createSVGPoint();
        p.x = x;
        p.y = y;
        return p;
    };

    V.transformRect = function(r, matrix) {

        var p = svgDocument.createSVGPoint();

        p.x = r.x;
        p.y = r.y;
        var corner1 = p.matrixTransform(matrix);

        p.x = r.x + r.width;
        p.y = r.y;
        var corner2 = p.matrixTransform(matrix);

        p.x = r.x + r.width;
        p.y = r.y + r.height;
        var corner3 = p.matrixTransform(matrix);

        p.x = r.x;
        p.y = r.y + r.height;
        var corner4 = p.matrixTransform(matrix);

        var minX = Math.min(corner1.x, corner2.x, corner3.x, corner4.x);
        var maxX = Math.max(corner1.x, corner2.x, corner3.x, corner4.x);
        var minY = Math.min(corner1.y, corner2.y, corner3.y, corner4.y);
        var maxY = Math.max(corner1.y, corner2.y, corner3.y, corner4.y);

        return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
    };

    // Convert a style represented as string (e.g. `'fill="blue"; stroke="red"'`) to
    // an object (`{ fill: 'blue', stroke: 'red' }`).
    V.styleToObject = function(styleString) {
        var ret = {};
        var styles = styleString.split(';');
        for (var i = 0; i < styles.length; i++) {
            var style = styles[i];
            var pair = style.split('=');
            ret[pair[0].trim()] = pair[1].trim();
        }
        return ret;
    };

    // Inspired by d3.js https://github.com/mbostock/d3/blob/master/src/svg/arc.js
    V.createSlicePathData = function(innerRadius, outerRadius, startAngle, endAngle) {

        var svgArcMax = 2 * Math.PI - 1e-6;
        var r0 = innerRadius;
        var r1 = outerRadius;
        var a0 = startAngle;
        var a1 = endAngle;
        var da = (a1 < a0 && (da = a0, a0 = a1, a1 = da), a1 - a0);
        var df = da < Math.PI ? '0' : '1';
        var c0 = Math.cos(a0);
        var s0 = Math.sin(a0);
        var c1 = Math.cos(a1);
        var s1 = Math.sin(a1);

        return (da >= svgArcMax)
            ? (r0
               ? 'M0,' + r1
               + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + (-r1)
               + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + r1
               + 'M0,' + r0
               + 'A' + r0 + ',' + r0 + ' 0 1,0 0,' + (-r0)
               + 'A' + r0 + ',' + r0 + ' 0 1,0 0,' + r0
               + 'Z'
               : 'M0,' + r1
               + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + (-r1)
               + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + r1
               + 'Z')
            : (r0
               ? 'M' + r1 * c0 + ',' + r1 * s0
               + 'A' + r1 + ',' + r1 + ' 0 ' + df + ',1 ' + r1 * c1 + ',' + r1 * s1
               + 'L' + r0 * c1 + ',' + r0 * s1
               + 'A' + r0 + ',' + r0 + ' 0 ' + df + ',0 ' + r0 * c0 + ',' + r0 * s0
               + 'Z'
               : 'M' + r1 * c0 + ',' + r1 * s0
               + 'A' + r1 + ',' + r1 + ' 0 ' + df + ',1 ' + r1 * c1 + ',' + r1 * s1
               + 'L0,0'
               + 'Z');
    };

    // Merge attributes from object `b` with attributes in object `a`.
    // Note that this modifies the object `a`.
    // Also important to note that attributes are merged but CSS classes are concatenated.
    V.mergeAttrs = function(a, b) {
        for (var attr in b) {
            if (attr === 'class') {
                // Concatenate classes.
                a[attr] = a[attr] ? a[attr] + ' ' + b[attr] : b[attr];
            } else if (attr === 'style') {
                // `style` attribute can be an object.
                if (isObject(a[attr]) && isObject(b[attr])) {
                    // `style` stored in `a` is an object.
                    a[attr] = V.mergeAttrs(a[attr], b[attr]);
                } else if (isObject(a[attr])) {
                    // `style` in `a` is an object but it's a string in `b`.
                    // Convert the style represented as a string to an object in `b`.
                    a[attr] = V.mergeAttrs(a[attr], V.styleToObject(b[attr]));
                } else if (isObject(b[attr])) {
                    // `style` in `a` is a string, in `b` it's an object.
                    a[attr] = V.mergeAttrs(V.styleToObject(a[attr]), b[attr]);
                } else {
                    // Both styles are strings.
                    a[attr] = V.mergeAttrs(V.styleToObject(a[attr]), V.styleToObject(b[attr]));
                }
            } else {
                a[attr] = b[attr];
            }
        }
        return a;
    };

    V.annotateString = function(t, annotations, opt) {

        annotations = annotations || [];
        opt = opt || {};
        offset = opt.offset || 0;
        var compacted = [];
        var batch;

        var ret = [];
        var item;
        var prev;

        for (var i = 0; i < t.length; i++) {

            item = ret[i] = t[i];

            for (var j = 0; j < annotations.length; j++) {
                var annotation = annotations[j];
                var start = annotation.start + offset;
                var end = annotation.end + offset;

                if (i >= start && i < end) {
                    // Annotation applies.
                    if (isObject(item)) {
                        // There is more than one annotation to be applied => Merge attributes.
                        item.attrs = V.mergeAttrs(V.mergeAttrs({}, item.attrs), annotation.attrs);
                    } else {
                        item = ret[i] = { t: t[i], attrs: annotation.attrs };
                    }
                    if (opt.includeAnnotationIndices) {
                        (item.annotations || (item.annotations = [])).push(j);
                    }
                }
            }

            prev = ret[i - 1];

            if (!prev) {

                batch = item;

            } else if (isObject(item) && isObject(prev)) {
                // Both previous item and the current one are annotations. If the attributes
                // didn't change, merge the text.
                if (JSON.stringify(item.attrs) === JSON.stringify(prev.attrs)) {
                    batch.t += item.t;
                } else {
                    compacted.push(batch);
                    batch = item;
                }

            } else if (isObject(item)) {
                // Previous item was a string, current item is an annotation.
                compacted.push(batch);
                batch = item;

            } else if (isObject(prev)) {
                // Previous item was an annotation, current item is a string.
                compacted.push(batch);
                batch = item;

            } else {
                // Both previous and current item are strings.
                batch = (batch || '') + item;
            }
        }

        if (batch) {
            compacted.push(batch);
        }

        return compacted;
    };

    V.findAnnotationsAtIndex = function(annotations, index) {

        if (!annotations) return [];

        var found = [];

        annotations.forEach(function(annotation) {

            if (annotation.start < index && index <= annotation.end) {
                found.push(annotation);
            }
        });
        return found;
    };

    V.findAnnotationsBetweenIndexes = function(annotations, start, end) {

        if (!annotations) return [];

        var found = [];

        annotations.forEach(function(annotation) {

            if ((start >= annotation.start && start < annotation.end) || (end > annotation.start && end <= annotation.end) || (annotation.start >= start && annotation.end < end)) {
                found.push(annotation);
            }
        });
        return found;
    };

    // Shift all the text annotations after character `index` by `offset` positions.
    V.shiftAnnotations = function(annotations, index, offset) {

        if (!annotations) return annotations;

        annotations.forEach(function(annotation) {

            if (annotation.start >= index) {
                annotation.start += offset;
                annotation.end += offset;
            }
        });

        return annotations;
    };

    V.sanitizeText = sanitizeText;

    return V;

})();

//      JointJS library.
//      (c) 2011-2013 client IO

// Global namespace.

var joint = {

    version: '0.9.5',

    // `joint.dia` namespace.
    dia: {},

    // `joint.ui` namespace.
    ui: {},

    // `joint.layout` namespace.
    layout: {},

    // `joint.shapes` namespace.
    shapes: {},

    // `joint.format` namespace.
    format: {},

    // `joint.connectors` namespace.
    connectors: {},

    // `joint.routers` namespace.
    routers: {},

    util: {

        // Return a simple hash code from a string. See http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/.
        hashCode: function(str) {

            var hash = 0;
            if (str.length == 0) return hash;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + c;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        },

        getByPath: function(obj, path, delim) {

            delim = delim || '/';
            var keys = path.split(delim);
            var key;

            while (keys.length) {
                key = keys.shift();
                if (Object(obj) === obj && key in obj) {
                    obj = obj[key];
                } else {
                    return undefined;
                }
            }
            return obj;
        },

        setByPath: function(obj, path, value, delim) {

            delim = delim || '/';

            var keys = path.split(delim);
            var diver = obj;
            var i = 0;

            if (path.indexOf(delim) > -1) {

                for (var len = keys.length; i < len - 1; i++) {
                    // diver creates an empty object if there is no nested object under such a key.
                    // This means that one can populate an empty nested object with setByPath().
                    diver = diver[keys[i]] || (diver[keys[i]] = {});
                }
                diver[keys[len - 1]] = value;
            } else {
                obj[path] = value;
            }
            return obj;
        },

        unsetByPath: function(obj, path, delim) {

            delim = delim || '/';

            // index of the last delimiter
            var i = path.lastIndexOf(delim);

            if (i > -1) {

                // unsetting a nested attribute
                var parent = joint.util.getByPath(obj, path.substr(0, i), delim);

                if (parent) {
                    delete parent[path.slice(i + 1)];
                }

            } else {

                // unsetting a primitive attribute
                delete obj[path];
            }

            return obj;
        },

        flattenObject: function(obj, delim, stop) {

            delim = delim || '/';
            var ret = {};

            for (var key in obj) {

                if (!obj.hasOwnProperty(key)) continue;

                var shouldGoDeeper = typeof obj[key] === 'object';
                if (shouldGoDeeper && stop && stop(obj[key])) {
                    shouldGoDeeper = false;
                }

                if (shouldGoDeeper) {

                    var flatObject = this.flattenObject(obj[key], delim, stop);

                    for (var flatKey in flatObject) {
                        if (!flatObject.hasOwnProperty(flatKey)) continue;
                        ret[key + delim + flatKey] = flatObject[flatKey];
                    }

                } else {

                    ret[key] = obj[key];
                }
            }

            return ret;
        },

        uuid: function() {

            // credit: http://stackoverflow.com/posts/2117523/revisions

            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16|0;
                var v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        },

        // Generate global unique id for obj and store it as a property of the object.
        guid: function(obj) {

            this.guid.id = this.guid.id || 1;
            obj.id = (obj.id === undefined ? 'j_' + this.guid.id++ : obj.id);
            return obj.id;
        },

        // Copy all the properties to the first argument from the following arguments.
        // All the properties will be overwritten by the properties from the following
        // arguments. Inherited properties are ignored.
        mixin: function() {

            var target = arguments[0];

            for (var i = 1, l = arguments.length; i < l; i++) {

                var extension = arguments[i];

                // Only functions and objects can be mixined.

                if ((Object(extension) !== extension) &&
                    !_.isFunction(extension) &&
                    (extension === null || extension === undefined)) {

                    continue;
                }

                _.each(extension, function(copy, key) {

                    if (this.mixin.deep && (Object(copy) === copy)) {

                        if (!target[key]) {

                            target[key] = _.isArray(copy) ? [] : {};
                        }

                        this.mixin(target[key], copy);
                        return;
                    }

                    if (target[key] !== copy) {

                        if (!this.mixin.supplement || !target.hasOwnProperty(key)) {

                            target[key] = copy;
                        }

                    }

                }, this);
            }

            return target;
        },

        // Copy all properties to the first argument from the following
        // arguments only in case if they don't exists in the first argument.
        // All the function propererties in the first argument will get
        // additional property base pointing to the extenders same named
        // property function's call method.
        supplement: function() {

            this.mixin.supplement = true;
            var ret = this.mixin.apply(this, arguments);
            this.mixin.supplement = false;
            return ret;
        },

        // Same as `mixin()` but deep version.
        deepMixin: function() {

            this.mixin.deep = true;
            var ret = this.mixin.apply(this, arguments);
            this.mixin.deep = false;
            return ret;
        },

        // Same as `supplement()` but deep version.
        deepSupplement: function() {

            this.mixin.deep = this.mixin.supplement = true;
            var ret = this.mixin.apply(this, arguments);
            this.mixin.deep = this.mixin.supplement = false;
            return ret;
        },

        normalizeEvent: function(evt) {

            var touchEvt = evt.originalEvent && evt.originalEvent.changedTouches && evt.originalEvent.changedTouches[0];
            if (touchEvt) {
                for (var property in evt) {
                    // copy all the properties from the input event that are not
                    // defined on the touch event (functions included).
                    if (touchEvt[property] === undefined) {
                        touchEvt[property] = evt[property];
                    }
                }
                return touchEvt;
            }

            return evt;
        },

        nextFrame:(function() {

            var raf;

            if (typeof window !== 'undefined') {

                raf = window.requestAnimationFrame     ||
		    window.webkitRequestAnimationFrame ||
	            window.mozRequestAnimationFrame    ||
		    window.oRequestAnimationFrame      ||
		    window.msRequestAnimationFrame;
            }

            if (!raf) {

                var lastTime = 0;

                raf = function(callback) {

                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);

                    lastTime = currTime + timeToCall;

                    return id;
                };
            }

            return function(callback, context) {
                return context
                    ? raf(_.bind(callback, context))
                    : raf(callback);
            };

        })(),

        cancelFrame: (function() {

            var caf;
            var client = typeof window != 'undefined';

            if (client) {

                caf = window.cancelAnimationFrame            ||
		    window.webkitCancelAnimationFrame        ||
	            window.webkitCancelRequestAnimationFrame ||
		    window.msCancelAnimationFrame            ||
	            window.msCancelRequestAnimationFrame     ||
		    window.oCancelAnimationFrame             ||
	            window.oCancelRequestAnimationFrame      ||
	            window.mozCancelAnimationFrame           ||
		    window.mozCancelRequestAnimationFrame;
            }

            caf = caf || clearTimeout;

            return client ? _.bind(caf, window) : caf;

        })(),

        shapePerimeterConnectionPoint: function(linkView, view, magnet, reference) {

            var bbox;
            var spot;

            if (!magnet) {

                // There is no magnet, try to make the best guess what is the
                // wrapping SVG element. This is because we want this "smart"
                // connection points to work out of the box without the
                // programmer to put magnet marks to any of the subelements.
                // For example, we want the functoin to work on basic.Path elements
                // without any special treatment of such elements.
                // The code below guesses the wrapping element based on
                // one simple assumption. The wrapping elemnet is the
                // first child of the scalable group if such a group exists
                // or the first child of the rotatable group if not.
                // This makese sense because usually the wrapping element
                // is below any other sub element in the shapes.
                var scalable = view.$('.scalable')[0];
                var rotatable = view.$('.rotatable')[0];

                if (scalable && scalable.firstChild) {

                    magnet = scalable.firstChild;

                } else if (rotatable && rotatable.firstChild) {

                    magnet = rotatable.firstChild;
                }
            }

            if (magnet) {

                spot = V(magnet).findIntersection(reference, linkView.paper.viewport);
                if (!spot) {
                    bbox = g.rect(V(magnet).bbox(false, linkView.paper.viewport));
                }

            } else {

                bbox = view.model.getBBox();
                spot = bbox.intersectionWithLineFromCenterToPoint(reference);
            }
            return spot || bbox.center();
        },

        breakText: function(text, size, styles, opt) {

            opt = opt || {};

            var width = size.width;
            var height = size.height;

            var svgDocument = opt.svgDocument || V('svg').node;
            var textElement = V('<text><tspan></tspan></text>').attr(styles || {}).node;
            var textSpan = textElement.firstChild;
            var textNode = document.createTextNode('');

            textSpan.appendChild(textNode);

            svgDocument.appendChild(textElement);

            if (!opt.svgDocument) {

                document.body.appendChild(svgDocument);
            }

            var words = text.split(' ');
            var full = [];
            var lines = [];
            var p;

            for (var i = 0, l = 0, len = words.length; i < len; i++) {

                var word = words[i];

                textNode.data = lines[l] ? lines[l] + ' ' + word : word;

                if (textSpan.getComputedTextLength() <= width) {

                    // the current line fits
                    lines[l] = textNode.data;

                    if (p) {
                        // We were partitioning. Put rest of the word onto next line
                        full[l++] = true;

                        // cancel partitioning
                        p = 0;
                    }

                } else {

                    if (!lines[l] || p) {

                        var partition = !!p;

                        p = word.length - 1;

                        if (partition || !p) {

                            // word has only one character.
                            if (!p) {

                                if (!lines[l]) {

                                    // we won't fit this text within our rect
                                    lines = [];

                                    break;
                                }

                                // partitioning didn't help on the non-empty line
                                // try again, but this time start with a new line

                                // cancel partitions created
                                words.splice(i, 2, word + words[i + 1]);

                                // adjust word length
                                len--;

                                full[l++] = true;
                                i--;

                                continue;
                            }

                            // move last letter to the beginning of the next word
                            words[i] = word.substring(0, p);
                            words[i + 1] = word.substring(p) + words[i + 1];

                        } else {

                            // We initiate partitioning
                            // split the long word into two words
                            words.splice(i, 1, word.substring(0, p), word.substring(p));

                            // adjust words length
                            len++;

                            if (l && !full[l - 1]) {
                                // if the previous line is not full, try to fit max part of
                                // the current word there
                                l--;
                            }
                        }

                        i--;

                        continue;
                    }

                    l++;
                    i--;
                }

                // if size.height is defined we have to check whether the height of the entire
                // text exceeds the rect height
                if (typeof height !== 'undefined') {

                    // get line height as text height / 0.8 (as text height is approx. 0.8em
                    // and line height is 1em. See vectorizer.text())
                    var lh = lh || textElement.getBBox().height * 1.25;

                    if (lh * lines.length > height) {

                        // remove overflowing lines
                        lines.splice(Math.floor(height / lh));

                        break;
                    }
                }
            }

            if (opt.svgDocument) {

                // svg document was provided, remove the text element only
                svgDocument.removeChild(textElement);

            } else {

                // clean svg document
                document.body.removeChild(svgDocument);
            }

            return lines.join('\n');
        },

        imageToDataUri: function(url, callback) {

            if (!url || url.substr(0, 'data:'.length) === 'data:') {
                // No need to convert to data uri if it is already in data uri.

                // This not only convenient but desired. For example,
                // IE throws a security error if data:image/svg+xml is used to render
                // an image to the canvas and an attempt is made to read out data uri.
                // Now if our image is already in data uri, there is no need to render it to the canvas
                // and so we can bypass this error.

                // Keep the async nature of the function.
                return setTimeout(function() { callback(null, url); }, 0);
            }

            var canvas = document.createElement('canvas');
            var img = document.createElement('img');

            img.onload = function() {

                var ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);

                try {

                    // Guess the type of the image from the url suffix.
                    var suffix = (url.split('.').pop()) || 'png';
                    // A little correction for JPEGs. There is no image/jpg mime type but image/jpeg.
                    var type = 'image/' + (suffix === 'jpg') ? 'jpeg' : suffix;
                    var dataUri = canvas.toDataURL(type);

                } catch (e) {

                    if (/\.svg$/.test(url)) {
                        // IE throws a security error if we try to render an SVG into the canvas.
                        // Luckily for us, we don't need canvas at all to convert
                        // SVG to data uri. We can just use AJAX to load the SVG string
                        // and construct the data uri ourselves.
                        var xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
                        xhr.open('GET', url, false);
                        xhr.send(null);
                        var svg = xhr.responseText;

                        return callback(null, 'data:image/svg+xml,' + encodeURIComponent(svg));
                    }

                    console.error(img.src, 'fails to convert', e);
                }

                callback(null, dataUri);
            };

            img.ononerror = function() {

                callback(new Error('Failed to load image.'));
            };

            img.src = url;
        },

        getElementBBox: function(el) {

            var $el = $(el);
            var offset = $el.offset();
            var bbox;

            if (el.ownerSVGElement) {

                // Use Vectorizer to get the dimensions of the element if it is an SVG element.
                bbox = V(el).bbox();

                // getBoundingClientRect() used in jQuery.fn.offset() takes into account `stroke-width`
                // in Firefox only. So clientRect width/height and getBBox width/height in FF don't match.
                // To unify this across all browsers we add the `stroke-width` (left & top) back to
                // the calculated offset.
                var crect = el.getBoundingClientRect();
                var strokeWidthX = (crect.width - bbox.width) / 2;
                var strokeWidthY = (crect.height - bbox.height) / 2;

                // The `bbox()` returns coordinates relative to the SVG viewport, therefore, use the
                // ones returned from the `offset()` method that are relative to the document.
                bbox.x = offset.left + strokeWidthX;
                bbox.y = offset.top + strokeWidthY;

            } else {

                bbox = { x: offset.left, y: offset.top, width: $el.outerWidth(), height: $el.outerHeight() };
            }

            return bbox;
        },


        // Highly inspired by the jquery.sortElements plugin by Padolsey.
        // See http://james.padolsey.com/javascript/sorting-elements-with-jquery/.
        sortElements: function(elements, comparator) {

            var $elements = $(elements);
            var placements = $elements.map(function() {

                var sortElement = this;
                var parentNode = sortElement.parentNode;
                // Since the element itself will change position, we have
                // to have some way of storing it's original position in
                // the DOM. The easiest way is to have a 'flag' node:
                var nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);

                return function() {

                    if (parentNode === this) {
                        throw new Error('You can\'t sort elements if any one is a descendant of another.');
                    }

                    // Insert before flag:
                    parentNode.insertBefore(this, nextSibling);
                    // Remove flag:
                    parentNode.removeChild(nextSibling);
                };
            });

            return Array.prototype.sort.call($elements, comparator).each(function(i) {
                placements[i].call(this);
            });
        },

        // Sets attributes on the given element and its descendants based on the selector.
        // `attrs` object: { [SELECTOR1]: { attrs1 }, [SELECTOR2]: { attrs2}, ... } e.g. { 'input': { color : 'red' }}
        setAttributesBySelector: function(element, attrs) {

            var $element = $(element);

            _.each(attrs, function(attrs, selector) {
                var $elements = $element.find(selector).addBack().filter(selector);
                // Make a special case for setting classes.
                // We do not want to overwrite any existing class.
                if (_.has(attrs, 'class')) {
                    $elements.addClass(attrs['class']);
                    attrs = _.omit(attrs, 'class');
                }
                $elements.attr(attrs);
            });
        },

        // Return a new object with all for sides (top, bottom, left and right) in it.
        // Value of each side is taken from the given argument (either number or object).
        // Default value for a side is 0.
        // Examples:
        // joint.util.normalizeSides(5) --> { top: 5, left: 5, right: 5, bottom: 5 }
        // joint.util.normalizeSides({ left: 5 }) --> { top: 0, left: 5, right: 0, bottom: 0 }
        normalizeSides: function(box) {

            if (Object(box) !== box) {
                box = box || 0;
                return { top: box, bottom: box, left: box, right: box };
            }

            return {
                top: box.top || 0,
                bottom: box.bottom || 0,
                left: box.left || 0,
                right: box.right || 0
            };
        },

        timing: {

            linear: function(t) {
                return t;
            },

            quad: function(t) {
                return t * t;
            },

            cubic: function(t) {
                return t * t * t;
            },

            inout: function(t) {
                if (t <= 0) return 0;
                if (t >= 1) return 1;
                var t2 = t * t;
                var t3 = t2 * t;
                return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
            },

            exponential: function(t) {
                return Math.pow(2, 10 * (t - 1));
            },

            bounce: function(t) {
                for (var a = 0, b = 1; 1; a += b, b /= 2) {
                    if (t >= (7 - 4 * a) / 11) {
                        var q = (11 - 6 * a - 11 * t) / 4;
                        return -q * q + b * b;
                    }
                }
            },

            reverse: function(f) {
                return function(t) {
                    return 1 - f(1 - t);
                };
            },

            reflect: function(f) {
                return function(t) {
                    return .5 * (t < .5 ? f(2 * t) : (2 - f(2 - 2 * t)));
                };
            },

            clamp: function(f, n, x) {
                n = n || 0;
                x = x || 1;
                return function(t) {
                    var r = f(t);
                    return r < n ? n : r > x ? x : r;
                };
            },

            back: function(s) {
                if (!s) s = 1.70158;
                return function(t) {
                    return t * t * ((s + 1) * t - s);
                };
            },

            elastic: function(x) {
                if (!x) x = 1.5;
                return function(t) {
                    return Math.pow(2, 10 * (t - 1)) * Math.cos(20 * Math.PI * x / 3 * t);
                };
            }
        },

        interpolate: {

            number: function(a, b) {
                var d = b - a;
                return function(t) { return a + d * t; };
            },

            object: function(a, b) {
                var s = _.keys(a);
                return function(t) {
                    var i, p;
                    var r = {};
                    for (i = s.length - 1; i != -1; i--) {
                        p = s[i];
                        r[p] = a[p] + (b[p] - a[p]) * t;
                    }
                    return r;
                };
            },

            hexColor: function(a, b) {

                var ca = parseInt(a.slice(1), 16);
                var cb = parseInt(b.slice(1), 16);
                var ra = ca & 0x0000ff;
                var rd = (cb & 0x0000ff) - ra;
                var ga = ca & 0x00ff00;
                var gd = (cb & 0x00ff00) - ga;
                var ba = ca & 0xff0000;
                var bd = (cb & 0xff0000) - ba;

                return function(t) {

                    var r = (ra + rd * t) & 0x000000ff;
                    var g = (ga + gd * t) & 0x0000ff00;
                    var b = (ba + bd * t) & 0x00ff0000;

                    return '#' + (1 << 24 | r | g | b ).toString(16).slice(1);
                };
            },

            unit: function(a, b) {

                var r = /(-?[0-9]*.[0-9]*)(px|em|cm|mm|in|pt|pc|%)/;
                var ma = r.exec(a);
                var mb = r.exec(b);
                var p = mb[1].indexOf('.');
                var f = p > 0 ? mb[1].length - p - 1 : 0;
                a = +ma[1];
                var d = +mb[1] - a;
                var u = ma[2];

                return function(t) {
                    return (a + d * t).toFixed(f) + u;
                };
            }
        },

        // SVG filters.
        filter: {

            // `color` ... outline color
            // `width`... outline width
            // `opacity` ... outline opacity
            // `margin` ... gap between outline and the element
            outline: function(args) {

                var tpl = '<filter><feFlood flood-color="${color}" flood-opacity="${opacity}" result="colored"/><feMorphology in="SourceAlpha" result="morphedOuter" operator="dilate" radius="${outerRadius}" /><feMorphology in="SourceAlpha" result="morphedInner" operator="dilate" radius="${innerRadius}" /><feComposite result="morphedOuterColored" in="colored" in2="morphedOuter" operator="in"/><feComposite operator="xor" in="morphedOuterColored" in2="morphedInner" result="outline"/><feMerge><feMergeNode in="outline"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';

                var margin = _.isFinite(args.margin) ? args.margin : 2;
                var width = _.isFinite(args.width) ? args.width : 1;

                return _.template(tpl)({
                    color: args.color || 'blue',
                    opacity: _.isFinite(args.opacity) ? args.opacity : 1,
                    outerRadius: margin + width,
                    innerRadius: margin
                });
            },

            // `color` ... color
            // `width`... width
            // `blur` ... blur
            // `opacity` ... opacity
            highlight: function(args) {

                var tpl = '<filter><feFlood flood-color="${color}" flood-opacity="${opacity}" result="colored"/><feMorphology result="morphed" in="SourceGraphic" operator="dilate" radius="${width}"/><feComposite result="composed" in="colored" in2="morphed" operator="in"/><feGaussianBlur result="blured" in="composed" stdDeviation="${blur}"/><feBlend in="SourceGraphic" in2="blured" mode="normal"/></filter>';

                return _.template(tpl)({
                    color: args.color || 'red',
                    width: _.isFinite(args.width) ? args.width : 1,
                    blur: _.isFinite(args.blur) ? args.blur : 0,
                    opacity: _.isFinite(args.opacity) ? args.opacity : 1
                });
            },

            // `x` ... horizontal blur
            // `y` ... vertical blur (optional)
            blur: function(args) {

                var x = _.isFinite(args.x) ? args.x : 2;

                return _.template('<filter><feGaussianBlur stdDeviation="${stdDeviation}"/></filter>')({
                    stdDeviation: _.isFinite(args.y) ? [x, args.y] : x
                });
            },

            // `dx` ... horizontal shift
            // `dy` ... vertical shift
            // `blur` ... blur
            // `color` ... color
            // `opacity` ... opacity
            dropShadow: function(args) {

                var tpl = 'SVGFEDropShadowElement' in window
                    ? '<filter><feDropShadow stdDeviation="${blur}" dx="${dx}" dy="${dy}" flood-color="${color}" flood-opacity="${opacity}"/></filter>'
                    : '<filter><feGaussianBlur in="SourceAlpha" stdDeviation="${blur}"/><feOffset dx="${dx}" dy="${dy}" result="offsetblur"/><feFlood flood-color="${color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="${opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';

                return _.template(tpl)({
                    dx: args.dx || 0,
                    dy: args.dy || 0,
                    opacity: _.isFinite(args.opacity) ? args.opacity : 1,
                    color: args.color || 'black',
                    blur: _.isFinite(args.blur) ? args.blur : 4
                });
            },

            // `amount` ... the proportion of the conversion. A value of 1 is completely grayscale. A value of 0 leaves the input unchanged.
            grayscale: function(args) {

                var amount = _.isFinite(args.amount) ? args.amount : 1;

                return _.template('<filter><feColorMatrix type="matrix" values="${a} ${b} ${c} 0 0 ${d} ${e} ${f} 0 0 ${g} ${b} ${h} 0 0 0 0 0 1 0"/></filter>')({
                    a: 0.2126 + 0.7874 * (1 - amount),
                    b: 0.7152 - 0.7152 * (1 - amount),
                    c: 0.0722 - 0.0722 * (1 - amount),
                    d: 0.2126 - 0.2126 * (1 - amount),
                    e: 0.7152 + 0.2848 * (1 - amount),
                    f: 0.0722 - 0.0722 * (1 - amount),
                    g: 0.2126 - 0.2126 * (1 - amount),
                    h: 0.0722 + 0.9278 * (1 - amount)
                });
            },

            // `amount` ... the proportion of the conversion. A value of 1 is completely sepia. A value of 0 leaves the input unchanged.
            sepia: function(args) {

                var amount = _.isFinite(args.amount) ? args.amount : 1;

                return _.template('<filter><feColorMatrix type="matrix" values="${a} ${b} ${c} 0 0 ${d} ${e} ${f} 0 0 ${g} ${h} ${i} 0 0 0 0 0 1 0"/></filter>')({
                    a: 0.393 + 0.607 * (1 - amount),
                    b: 0.769 - 0.769 * (1 - amount),
                    c: 0.189 - 0.189 * (1 - amount),
                    d: 0.349 - 0.349 * (1 - amount),
                    e: 0.686 + 0.314 * (1 - amount),
                    f: 0.168 - 0.168 * (1 - amount),
                    g: 0.272 - 0.272 * (1 - amount),
                    h: 0.534 - 0.534 * (1 - amount),
                    i: 0.131 + 0.869 * (1 - amount)
                });
            },

            // `amount` ... the proportion of the conversion. A value of 0 is completely un-saturated. A value of 1 leaves the input unchanged.
            saturate: function(args) {

                var amount = _.isFinite(args.amount) ? args.amount : 1;

                return _.template('<filter><feColorMatrix type="saturate" values="${amount}"/></filter>')({
                    amount: 1 - amount
                });
            },

            // `angle` ...  the number of degrees around the color circle the input samples will be adjusted.
            hueRotate: function(args) {

                return _.template('<filter><feColorMatrix type="hueRotate" values="${angle}"/></filter>')({
                    angle: args.angle || 0
                });
            },

            // `amount` ... the proportion of the conversion. A value of 1 is completely inverted. A value of 0 leaves the input unchanged.
            invert: function(args) {

                var amount = _.isFinite(args.amount) ? args.amount : 1;

                return _.template('<filter><feComponentTransfer><feFuncR type="table" tableValues="${amount} ${amount2}"/><feFuncG type="table" tableValues="${amount} ${amount2}"/><feFuncB type="table" tableValues="${amount} ${amount2}"/></feComponentTransfer></filter>')({
                    amount: amount,
                    amount2: 1 - amount
                });
            },

            // `amount` ... proportion of the conversion. A value of 0 will create an image that is completely black. A value of 1 leaves the input unchanged.
            brightness: function(args) {

                return _.template('<filter><feComponentTransfer><feFuncR type="linear" slope="${amount}"/><feFuncG type="linear" slope="${amount}"/><feFuncB type="linear" slope="${amount}"/></feComponentTransfer></filter>')({
                    amount: _.isFinite(args.amount) ? args.amount : 1
                });
            },

            // `amount` ... proportion of the conversion. A value of 0 will create an image that is completely black. A value of 1 leaves the input unchanged.
            contrast: function(args) {

                var amount = _.isFinite(args.amount) ? args.amount : 1;

                return _.template('<filter><feComponentTransfer><feFuncR type="linear" slope="${amount}" intercept="${amount2}"/><feFuncG type="linear" slope="${amount}" intercept="${amount2}"/><feFuncB type="linear" slope="${amount}" intercept="${amount2}"/></feComponentTransfer></filter>')({
                    amount: amount,
                    amount2: .5 - amount / 2
                });
            }
        },

        format: {

            // Formatting numbers via the Python Format Specification Mini-language.
            // See http://docs.python.org/release/3.1.3/library/string.html#format-specification-mini-language.
            // Heavilly inspired by the D3.js library implementation.
            number: function(specifier, value, locale) {

                locale = locale || {

                    currency: ['$', ''],
                    decimal: '.',
                    thousands: ',',
                    grouping: [3]
                };

                // See Python format specification mini-language: http://docs.python.org/release/3.1.3/library/string.html#format-specification-mini-language.
                // [[fill]align][sign][symbol][0][width][,][.precision][type]
                var re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;

                var match = re.exec(specifier);
                var fill = match[1] || ' ';
                var align = match[2] || '>';
                var sign = match[3] || '';
                var symbol = match[4] || '';
                var zfill = match[5];
                var width = +match[6];
                var comma = match[7];
                var precision = match[8];
                var type = match[9];
                var scale = 1;
                var prefix = '';
                var suffix = '';
                var integer = false;

                if (precision) precision = +precision.substring(1);

                if (zfill || fill === '0' && align === '=') {
                    zfill = fill = '0';
                    align = '=';
                    if (comma) width -= Math.floor((width - 1) / 4);
                }

                switch (type) {
                    case 'n': comma = true; type = 'g'; break;
                    case '%': scale = 100; suffix = '%'; type = 'f'; break;
                    case 'p': scale = 100; suffix = '%'; type = 'r'; break;
                    case 'b':
                    case 'o':
                    case 'x':
                    case 'X': if (symbol === '#') prefix = '0' + type.toLowerCase();
                    case 'c':
                    case 'd': integer = true; precision = 0; break;
                    case 's': scale = -1; type = 'r'; break;
                }

                if (symbol === '$') {
                    prefix = locale.currency[0];
                    suffix = locale.currency[1];
                }

                // If no precision is specified for `'r'`, fallback to general notation.
                if (type == 'r' && !precision) type = 'g';

                // Ensure that the requested precision is in the supported range.
                if (precision != null) {
                    if (type == 'g') precision = Math.max(1, Math.min(21, precision));
                    else if (type == 'e' || type == 'f') precision = Math.max(0, Math.min(20, precision));
                }

                var zcomma = zfill && comma;

                // Return the empty string for floats formatted as ints.
                if (integer && (value % 1)) return '';

                // Convert negative to positive, and record the sign prefix.
                var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, '-') : sign;

                var fullSuffix = suffix;

                // Apply the scale, computing it from the value's exponent for si format.
                // Preserve the existing suffix, if any, such as the currency symbol.
                if (scale < 0) {
                    var unit = this.prefix(value, precision);
                    value = unit.scale(value);
                    fullSuffix = unit.symbol + suffix;
                } else {
                    value *= scale;
                }

                // Convert to the desired precision.
                value = this.convert(type, value, precision);

                // Break the value into the integer part (before) and decimal part (after).
                var i = value.lastIndexOf('.');
                var before = i < 0 ? value : value.substring(0, i);
                var after = i < 0 ? '' : locale.decimal + value.substring(i + 1);

                function formatGroup(value) {

                    var i = value.length;
                    var t = [];
                    var j = 0;
                    var g = locale.grouping[0];
                    while (i > 0 && g > 0) {
                        t.push(value.substring(i -= g, i + g));
                        g = locale.grouping[j = (j + 1) % locale.grouping.length];
                    }
                    return t.reverse().join(locale.thousands);
                }

                // If the fill character is not `'0'`, grouping is applied before padding.
                if (!zfill && comma && locale.grouping) {

                    before = formatGroup(before);
                }

                var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length);
                var padding = length < width ? new Array(length = width - length + 1).join(fill) : '';

                // If the fill character is `'0'`, grouping is applied after padding.
                if (zcomma) before = formatGroup(padding + before);

                // Apply prefix.
                negative += prefix;

                // Rejoin integer and decimal parts.
                value = before + after;

                return (align === '<' ? negative + value + padding
                        : align === '>' ? padding + negative + value
                        : align === '^' ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length)
                        : negative + (zcomma ? value : padding + value)) + fullSuffix;
            },

            // Formatting string via the Python Format string.
            // See https://docs.python.org/2/library/string.html#format-string-syntax)
            string: function(formatString, value) {

                var fieldDelimiterIndex;
                var fieldDelimiter = '{';
                var endPlaceholder = false;
                var formattedStringArray = [];

                while ((fieldDelimiterIndex = formatString.indexOf(fieldDelimiter)) !== -1) {

                    var pieceFormatedString, formatSpec, fieldName;

                    pieceFormatedString = formatString.slice(0, fieldDelimiterIndex);

                    if (endPlaceholder) {
                        formatSpec = pieceFormatedString.split(':');
                        fieldName = formatSpec.shift().split('.');
                        pieceFormatedString = value;

                        for (var i = 0; i < fieldName.length; i++)
                            pieceFormatedString = pieceFormatedString[fieldName[i]];

                        if (formatSpec.length)
                            pieceFormatedString = this.number(formatSpec, pieceFormatedString);
                    }

                    formattedStringArray.push(pieceFormatedString);

                    formatString = formatString.slice(fieldDelimiterIndex + 1);
                    fieldDelimiter = (endPlaceholder = !endPlaceholder) ? '}' : '{';
                }
                formattedStringArray.push(formatString);

                return formattedStringArray.join('');
            },

            convert: function(type, value, precision) {

                switch (type) {
                    case 'b': return value.toString(2);
                    case 'c': return String.fromCharCode(value);
                    case 'o': return value.toString(8);
                    case 'x': return value.toString(16);
                    case 'X': return value.toString(16).toUpperCase();
                    case 'g': return value.toPrecision(precision);
                    case 'e': return value.toExponential(precision);
                    case 'f': return value.toFixed(precision);
                    case 'r': return (value = this.round(value, this.precision(value, precision))).toFixed(Math.max(0, Math.min(20, this.precision(value * (1 + 1e-15), precision))));
                    default: return value + '';
                }
            },

            round: function(value, precision) {

                return precision
                    ? Math.round(value * (precision = Math.pow(10, precision))) / precision
                    : Math.round(value);
            },

            precision: function(value, precision) {

                return precision - (value ? Math.ceil(Math.log(value) / Math.LN10) : 1);
            },

            prefix: function(value, precision) {

                var prefixes = _.map(['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'], function(d, i) {
                    var k = Math.pow(10, Math.abs(8 - i) * 3);
                    return {
                        scale: i > 8 ? function(d) { return d / k; } : function(d) { return d * k; },
                        symbol: d
                    };
                });

                var i = 0;
                if (value) {
                    if (value < 0) value *= -1;
                    if (precision) value = this.round(value, this.precision(value, precision));
                    i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
                    i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
                }
                return prefixes[8 + i / 3];
            }
        }
    }
};

//      JointJS, the JavaScript diagramming library.
//      (c) 2011-2013 client IO

joint.dia.GraphCells = Backbone.Collection.extend({

    cellNamespace: joint.shapes,

    initialize: function(models, opt) {

        // Backbone automatically doesn't trigger re-sort if models attributes are changed later when
        // they're already in the collection. Therefore, we're triggering sort manually here.
        this.on('change:z', this.sort, this);

        // Set the optional namespace where all model classes are defined.
        if (opt.cellNamespace) {
            this.cellNamespace = opt.cellNamespace;
        }
    },

    model: function(attrs, options) {

        var namespace = options.collection.cellNamespace;

        // Find the model class in the namespace or use the default one.
        var ModelClass = (attrs.type === 'link')
            ? joint.dia.Link
            : joint.util.getByPath(namespace, attrs.type, '.') || joint.dia.Element;

        return new ModelClass(attrs, options);
    },

    // `comparator` makes it easy to sort cells based on their `z` index.
    comparator: function(model) {

        return model.get('z') || 0;
    },

    // Get all inbound and outbound links connected to the cell `model`.
    getConnectedLinks: function(model, opt) {

        opt = opt || {};

        if (_.isUndefined(opt.inbound) && _.isUndefined(opt.outbound)) {
            opt.inbound = opt.outbound = true;
        }

        var links = this.filter(function(cell) {

            if (!cell.isLink()) return false;

            var source = cell.get('source');
            var target = cell.get('target');

            return (source && source.id === model.id && opt.outbound) ||
                (target && target.id === model.id  && opt.inbound);
        });

        // option 'deep' returns all links that are connected to any of the descendent cell
        // and are not descendents itself
        if (opt.deep) {

            var embeddedCells = model.getEmbeddedCells({ deep: true });

            _.each(this.difference(links, embeddedCells), function(cell) {

                if (!cell.isLink()) return;

                if (opt.outbound) {

                    var source = cell.get('source');

                    if (source && source.id && _.find(embeddedCells, { id: source.id })) {
                        links.push(cell);
                        return; // prevent a loop link to be pushed twice
                    }
                }

                if (opt.inbound) {

                    var target = cell.get('target');

                    if (target && target.id && _.find(embeddedCells, { id: target.id })) {
                        links.push(cell);
                    }
                }
            });
        }

        return links;
    },

    getNeighbors: function(model, opt) {

        opt = opt || {};

        var neighbors = _.transform(this.getConnectedLinks(model, opt), function(res, link) {

            var source = link.get('source');
            var target = link.get('target');
            var loop = link.hasLoop(opt);

            // Discard if it is a point, or if the neighbor was already added.
            if (opt.inbound && _.has(source, 'id') && !res[source.id]) {

                var sourceElement = this.get(source.id);

                if (loop || (sourceElement !== model && (!opt.deep || !sourceElement.isEmbeddedIn(model)))) {
                    res[source.id] = sourceElement;
                }
            }

            // Discard if it is a point, or if the neighbor was already added.
            if (opt.outbound && _.has(target, 'id') && !res[target.id]) {

                var targetElement = this.get(target.id);

                if (loop || targetElement !== model && (!opt.deep || !targetElement.isEmbeddedIn(model))) {
                    res[target.id] = targetElement;
                }
            }

        }, {}, this);

        return _.values(neighbors);
    },

    getCommonAncestor: function(/* cells */) {

        var cellsAncestors = _.map(arguments, function(cell) {

            var ancestors = [cell.id];
            var parentId = cell.get('parent');

            while (parentId) {

                ancestors.push(parentId);
                parentId = this.get(parentId).get('parent');
            }

            return ancestors;

        }, this);

        cellsAncestors = _.sortBy(cellsAncestors, 'length');

        var commonAncestor = _.find(cellsAncestors.shift(), function(ancestor) {

            return _.every(cellsAncestors, function(cellAncestors) {
                return _.contains(cellAncestors, ancestor);
            });
        });

        return this.get(commonAncestor);
    },

    // Return the bounding box of all cells in array provided. If no array
    // provided returns bounding box of all cells. Links are being ignored.
    getBBox: function(cells) {

        cells = cells || this.models;

        var origin = { x: Infinity, y: Infinity };
        var corner = { x: -Infinity, y: -Infinity };

        _.each(cells, function(cell) {

            // Links has no bounding box defined on the model.
            if (cell.isLink()) return;

            var bbox = cell.getBBox();
            origin.x = Math.min(origin.x, bbox.x);
            origin.y = Math.min(origin.y, bbox.y);
            corner.x = Math.max(corner.x, bbox.x + bbox.width);
            corner.y = Math.max(corner.y, bbox.y + bbox.height);
        });

        return g.rect(origin.x, origin.y, corner.x - origin.x, corner.y - origin.y);
    }
});


joint.dia.Graph = Backbone.Model.extend({

    initialize: function(attrs, opt) {

        opt = opt || {};

        // Passing `cellModel` function in the options object to graph allows for
        // setting models based on attribute objects. This is especially handy
        // when processing JSON graphs that are in a different than JointJS format.
        Backbone.Model.prototype.set.call(this, 'cells', new joint.dia.GraphCells([], {
            model: opt.cellModel,
            cellNamespace: opt.cellNamespace
        }));

        // Make all the events fired in the `cells` collection available.
        // to the outside world.
        this.get('cells').on('all', this.trigger, this);

        this.get('cells').on('remove', this._removeCell, this);
    },

    toJSON: function() {

        // Backbone does not recursively call `toJSON()` on attributes that are themselves models/collections.
        // It just clones the attributes. Therefore, we must call `toJSON()` on the cells collection explicitely.
        var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
        json.cells = this.get('cells').toJSON();
        return json;
    },

    fromJSON: function(json, opt) {

        if (!json.cells) {

            throw new Error('Graph JSON must contain cells array.');
        }

        return this.set(json, opt);
    },

    set: function(key, val, opt) {

        var attrs;

        // Handle both `key`, value and {key: value} style arguments.
        if (typeof key === 'object') {
            attrs = key;
            opt = val;
        } else {
            (attrs = {})[key] = val;
        }

        // Make sure that `cells` attribute is handled separately via resetCells().
        if (attrs.hasOwnProperty('cells')) {
            this.resetCells(attrs.cells, opt);
            attrs = _.omit(attrs, 'cells');
        }

        // The rest of the attributes are applied via original set method.
        return Backbone.Model.prototype.set.call(this, attrs, opt);
    },

    clear: function(opt) {

        opt = _.extend({}, opt, { clear: true });

        var collection = this.get('cells');

        if (collection.length === 0) return this;

        this.trigger('batch:start', { batchName: 'clear' });

        // The elements come after the links.
        var cells = collection.sortBy(function(cell) {
            return cell.isLink() ? 1 : 2;
        });

        do {

            // Remove all the cells one by one.
            // Note that all the links are removed first, so it's
            // safe to remove the elements without removing the connected
            // links first.
            cells.shift().remove(opt);

        } while (cells.length > 0);

        this.trigger('batch:stop', { batchName: 'clear' });

        return this;
    },

    _prepareCell: function(cell) {

        var attrs = (cell instanceof Backbone.Model) ? cell.attributes : cell;

        if (_.isUndefined(attrs.z)) {
            attrs.z = this.maxZIndex() + 1;
        }

        if (!_.isString(attrs.type)) {
            throw new TypeError('dia.Graph: cell type must be a string.');
        }

        return cell;
    },

    maxZIndex: function() {

        var lastCell = this.get('cells').last();
        return lastCell ? (lastCell.get('z') || 0) : 0;
    },

    addCell: function(cell, options) {

        if (_.isArray(cell)) {

            return this.addCells(cell, options);
        }

        this.get('cells').add(this._prepareCell(cell), options || {});

        return this;
    },

    addCells: function(cells, options) {

        options = options || {};
        options.position = cells.length;

        _.each(cells, function(cell) {
            options.position--;
            this.addCell(cell, options);
        }, this);

        return this;
    },

    // When adding a lot of cells, it is much more efficient to
    // reset the entire cells collection in one go.
    // Useful for bulk operations and optimizations.
    resetCells: function(cells, opt) {

        this.get('cells').reset(_.map(cells, this._prepareCell, this), opt);

        return this;
    },

    _removeCell: function(cell, collection, options) {

        options = options || {};

        if (!options.clear) {
            // Applications might provide a `disconnectLinks` option set to `true` in order to
            // disconnect links when a cell is removed rather then removing them. The default
            // is to remove all the associated links.
            if (options.disconnectLinks) {

                this.disconnectLinks(cell, options);

            } else {

                this.removeLinks(cell, options);
            }
        }
        // Silently remove the cell from the cells collection. Silently, because
        // `joint.dia.Cell.prototype.remove` already triggers the `remove` event which is
        // then propagated to the graph model. If we didn't remove the cell silently, two `remove` events
        // would be triggered on the graph model.
        this.get('cells').remove(cell, { silent: true });
    },

    // Get a cell by `id`.
    getCell: function(id) {

        return this.get('cells').get(id);
    },

    getCells: function() {

        return this.get('cells').toArray();
    },

    getElements: function() {

        return this.get('cells').filter(function(cell) {

            return cell instanceof joint.dia.Element;
        });
    },

    getLinks: function() {

        return this.get('cells').filter(function(cell) {

            return cell instanceof joint.dia.Link;
        });
    },

    // Get all inbound and outbound links connected to the cell `model`.
    getConnectedLinks: function(model, opt) {

        return this.get('cells').getConnectedLinks(model, opt);
    },

    getNeighbors: function(model, opt) {

        return this.get('cells').getNeighbors(model, opt);
    },

    // Disconnect links connected to the cell `model`.
    disconnectLinks: function(model, options) {

        _.each(this.getConnectedLinks(model), function(link) {

            link.set(link.get('source').id === model.id ? 'source' : 'target', g.point(0, 0), options);
        });
    },

    // Remove links connected to the cell `model` completely.
    removeLinks: function(model, options) {

        _.invoke(this.getConnectedLinks(model), 'remove', options);
    },

    // Find all elements at given point
    findModelsFromPoint: function(p) {

        return _.filter(this.getElements(), function(el) {
            return el.getBBox().containsPoint(p);
        });
    },

    // Find all elements in given area
    findModelsInArea: function(r) {

        return _.filter(this.getElements(), function(el) {
            return el.getBBox().intersect(r);
        });
    },

    // Find all elements under the given element.
    findModelsUnderElement: function(element, opt) {

        opt = _.defaults(opt || {}, { searchBy: 'bbox' });

        var bbox = element.getBBox();
        var elements = (opt.searchBy == 'bbox')
            ? this.findModelsInArea(bbox)
            : this.findModelsFromPoint(bbox[opt.searchBy]());

        // don't account element itself or any of its descendents
        return _.reject(elements, function(el) {
            return element.id == el.id || el.isEmbeddedIn(element);
        });
    },

    // Return the bounding box of all `elements`.
    getBBox: function(/* elements */) {

        var collection = this.get('cells');
        return collection.getBBox.apply(collection, arguments);
    },

    getCommonAncestor: function(/* cells */) {

        var collection = this.get('cells');
        return collection.getCommonAncestor.apply(collection, arguments);
    }
});

//      JointJS.
//      (c) 2011-2013 client IO

// joint.dia.Cell base model.
// --------------------------

joint.dia.Cell = Backbone.Model.extend({

    // This is the same as Backbone.Model with the only difference that is uses _.merge
    // instead of just _.extend. The reason is that we want to mixin attributes set in upper classes.
    constructor: function(attributes, options) {

        var defaults;
        var attrs = attributes || {};
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if (options && options.collection) this.collection = options.collection;
        if (options && options.parse) attrs = this.parse(attrs, options) || {};
        if (defaults = _.result(this, 'defaults')) {
            //<custom code>
            // Replaced the call to _.defaults with _.merge.
            attrs = _.merge({}, defaults, attrs);
            //</custom code>
        }
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    },

    toJSON: function() {

        var defaultAttrs = this.constructor.prototype.defaults.attrs || {};
        var attrs = this.attributes.attrs;
        var finalAttrs = {};

        // Loop through all the attributes and
        // omit the default attributes as they are implicitly reconstructable by the cell 'type'.
        _.each(attrs, function(attr, selector) {

            var defaultAttr = defaultAttrs[selector];

            _.each(attr, function(value, name) {

                // attr is mainly flat though it might have one more level (consider the `style` attribute).
                // Check if the `value` is object and if yes, go one level deep.
                if (_.isObject(value) && !_.isArray(value)) {

                    _.each(value, function(value2, name2) {

                        if (!defaultAttr || !defaultAttr[name] || !_.isEqual(defaultAttr[name][name2], value2)) {

                            finalAttrs[selector] = finalAttrs[selector] || {};
                            (finalAttrs[selector][name] || (finalAttrs[selector][name] = {}))[name2] = value2;
                        }
                    });

                } else if (!defaultAttr || !_.isEqual(defaultAttr[name], value)) {
                    // `value` is not an object, default attribute for such a selector does not exist
                    // or it is different than the attribute value set on the model.

                    finalAttrs[selector] = finalAttrs[selector] || {};
                    finalAttrs[selector][name] = value;
                }
            });
        });

        var attributes = _.cloneDeep(_.omit(this.attributes, 'attrs'));
        //var attributes = JSON.parse(JSON.stringify(_.omit(this.attributes, 'attrs')));
        attributes.attrs = finalAttrs;

        return attributes;
    },

    initialize: function(options) {

        if (!options || !options.id) {

            this.set('id', joint.util.uuid(), { silent: true });
        }

        this._transitionIds = {};

        // Collect ports defined in `attrs` and keep collecting whenever `attrs` object changes.
        this.processPorts();
        this.on('change:attrs', this.processPorts, this);
    },

    processPorts: function() {

        // Whenever `attrs` changes, we extract ports from the `attrs` object and store it
        // in a more accessible way. Also, if any port got removed and there were links that had `target`/`source`
        // set to that port, we remove those links as well (to follow the same behaviour as
        // with a removed element).

        var previousPorts = this.ports;

        // Collect ports from the `attrs` object.
        var ports = {};
        _.each(this.get('attrs'), function(attrs, selector) {

            if (attrs && attrs.port) {

                // `port` can either be directly an `id` or an object containing an `id` (and potentially other data).
                if (!_.isUndefined(attrs.port.id)) {
                    ports[attrs.port.id] = attrs.port;
                } else {
                    ports[attrs.port] = { id: attrs.port };
                }
            }
        });

        // Collect ports that have been removed (compared to the previous ports) - if any.
        // Use hash table for quick lookup.
        var removedPorts = {};
        _.each(previousPorts, function(port, id) {

            if (!ports[id]) removedPorts[id] = true;
        });

        // Remove all the incoming/outgoing links that have source/target port set to any of the removed ports.
        if (this.collection && !_.isEmpty(removedPorts)) {

            var inboundLinks = this.collection.getConnectedLinks(this, { inbound: true });
            _.each(inboundLinks, function(link) {

                if (removedPorts[link.get('target').port]) link.remove();
            });

            var outboundLinks = this.collection.getConnectedLinks(this, { outbound: true });
            _.each(outboundLinks, function(link) {

                if (removedPorts[link.get('source').port]) link.remove();
            });
        }

        // Update the `ports` object.
        this.ports = ports;
    },

    remove: function(opt) {

        opt = opt || {};

        var collection = this.collection;

        if (collection) {
            collection.trigger('batch:start', { batchName: 'remove' });
        }

        // First, unembed this cell from its parent cell if there is one.
        var parentCellId = this.get('parent');
        if (parentCellId) {

            var parentCell = this.collection && this.collection.get(parentCellId);
            parentCell.unembed(this);
        }

        _.invoke(this.getEmbeddedCells(), 'remove', opt);

        this.trigger('remove', this, this.collection, opt);

        if (collection) {
            collection.trigger('batch:stop', { batchName: 'remove' });
        }

        return this;
    },

    toFront: function(opt) {

        if (this.collection) {

            opt = opt || {};

            var z = (this.collection.last().get('z') || 0) + 1;

            this.trigger('batch:start', { batchName: 'to-front' }).set('z', z, opt);

            if (opt.deep) {

                var cells = this.getEmbeddedCells({ deep: true, breadthFirst: true });
                _.each(cells, function(cell) { cell.set('z', ++z, opt); });

            }

            this.trigger('batch:stop', { batchName: 'to-front' });
        }

        return this;
    },

    toBack: function(opt) {

        if (this.collection) {

            opt = opt || {};

            var z = (this.collection.first().get('z') || 0) - 1;

            this.trigger('batch:start', { batchName: 'to-back' });

            if (opt.deep) {

                var cells = this.getEmbeddedCells({ deep: true, breadthFirst: true });
                _.eachRight(cells, function(cell) { cell.set('z', z--, opt); });
            }

            this.set('z', z, opt).trigger('batch:stop', { batchName: 'to-back' });
        }

        return this;
    },

    embed: function(cell, opt) {

        if (this === cell || this.isEmbeddedIn(cell)) {

            throw new Error('Recursive embedding not allowed.');

        } else {

            this.trigger('batch:start', { batchName: 'embed' });

            var embeds = _.clone(this.get('embeds') || []);

            // We keep all element ids after links ids.
            embeds[cell.isLink() ? 'unshift' : 'push'](cell.id);

            cell.set('parent', this.id, opt);
            this.set('embeds', _.uniq(embeds), opt);

            this.trigger('batch:stop', { batchName: 'embed' });
        }

        return this;
    },

    unembed: function(cell, opt) {

        this.trigger('batch:start', { batchName: 'unembed' });

        cell.unset('parent', opt);
        this.set('embeds', _.without(this.get('embeds'), cell.id), opt);

        this.trigger('batch:stop', { batchName: 'unembed' });

        return this;
    },

    // Return an array of ancestor cells.
    // The array is ordered from the parent of the cell
    // to the most distant ancestor.
    getAncestors: function() {

        var ancestors = [];
        var parentId = this.get('parent');

        if (this.collection === undefined)
            return ancestors;

        while (parentId !== undefined) {
            var parent = this.collection.get(parentId);
            if (parent !== undefined) {
                ancestors.push(parent);
                parentId = parent.get('parent');
            } else {
                break;
            }
        }

        return ancestors;
    },

    getEmbeddedCells: function(opt) {

        opt = opt || {};

        // Cell models can only be retrieved when this element is part of a collection.
        // There is no way this element knows about other cells otherwise.
        // This also means that calling e.g. `translate()` on an element with embeds before
        // adding it to a graph does not translate its embeds.
        if (this.collection) {

            var cells;

            if (opt.deep) {

                if (opt.breadthFirst) {

                    // breadthFirst algorithm
                    cells = [];
                    var queue = this.getEmbeddedCells();

                    while (queue.length > 0) {

                        var parent = queue.shift();
                        cells.push(parent);
                        queue.push.apply(queue, parent.getEmbeddedCells());
                    }

                } else {

                    // depthFirst algorithm
                    cells = this.getEmbeddedCells();
                    _.each(cells, function(cell) {
                        cells.push.apply(cells, cell.getEmbeddedCells(opt));
                    });
                }

            } else {

                cells = _.map(this.get('embeds'), this.collection.get, this.collection);
            }

            return cells;
        }
        return [];
    },

    isEmbeddedIn: function(cell, opt) {

        var cellId = _.isString(cell) ? cell : cell.id;
        var parentId = this.get('parent');

        opt = _.defaults({ deep: true }, opt);

        // See getEmbeddedCells().
        if (this.collection && opt.deep) {

            while (parentId) {
                if (parentId === cellId) {
                    return true;
                }
                parentId = this.collection.get(parentId).get('parent');
            }

            return false;

        } else {

            // When this cell is not part of a collection check
            // at least whether it's a direct child of given cell.
            return parentId === cellId;
        }
    },

    clone: function(opt) {

        opt = opt || {};

        var clone = Backbone.Model.prototype.clone.apply(this, arguments);

        // We don't want the clone to have the same ID as the original.
        clone.set('id', joint.util.uuid(), { silent: true });
        clone.set('embeds', '');

        if (!opt.deep) return clone;

        // The rest of the `clone()` method deals with embeds. If `deep` option is set to `true`,
        // the return value is an array of all the embedded clones created.

        var embeds = _.sortBy(this.getEmbeddedCells(), function(cell) {
            // Sort embeds that links come before elements.
            return cell instanceof joint.dia.Element;
        });

        var clones = [clone];

        // This mapping stores cloned links under the `id`s of they originals.
        // This prevents cloning a link more then once. Consider a link 'self loop' for example.
        var linkCloneMapping = {};

        _.each(embeds, function(embed) {

            var embedClones = embed.clone({ deep: true });

            // Embed the first clone returned from `clone({ deep: true })` above. The first
            // cell is always the clone of the cell that called the `clone()` method, i.e. clone of `embed` in this case.
            clone.embed(embedClones[0]);

            _.each(embedClones, function(embedClone) {

                if (embedClone instanceof joint.dia.Link) {

                    if (embedClone.get('source').id === this.id) {

                        embedClone.prop('source', { id: clone.id });
                    }

                    if (embedClone.get('target').id === this.id) {

                        embedClone.prop('target', { id: clone.id });
                    }

                    linkCloneMapping[embed.id] = embedClone;

                    // Skip links. Inbound/outbound links are not relevant for them.
                    return;
                }

                clones.push(embedClone);

                // Collect all inbound links, clone them (if not done already) and set their target to the `embedClone.id`.
                var inboundLinks = this.collection.getConnectedLinks(embed, { inbound: true });

                _.each(inboundLinks, function(link) {

                    var linkClone = linkCloneMapping[link.id] || link.clone();

                    // Make sure we don't clone a link more then once.
                    linkCloneMapping[link.id] = linkClone;

                    linkClone.prop('target', { id: embedClone.id });
                });

                // Collect all inbound links, clone them (if not done already) and set their source to the `embedClone.id`.
                var outboundLinks = this.collection.getConnectedLinks(embed, { outbound: true });

                _.each(outboundLinks, function(link) {

                    var linkClone = linkCloneMapping[link.id] || link.clone();

                    // Make sure we don't clone a link more then once.
                    linkCloneMapping[link.id] = linkClone;

                    linkClone.prop('source', { id: embedClone.id });
                });

            }, this);

        }, this);

        // Add link clones to the array of all the new clones.
        clones = clones.concat(_.values(linkCloneMapping));

        return clones;
    },

    // A convenient way to set nested properties.
    // This method merges the properties you'd like to set with the ones
    // stored in the cell and makes sure change events are properly triggered.
    // You can either set a nested property with one object
    // or use a property path.
    // The most simple use case is:
    // `cell.prop('name/first', 'John')` or
    // `cell.prop({ name: { first: 'John' } })`.
    // Nested arrays are supported too:
    // `cell.prop('series/0/data/0/degree', 50)` or
    // `cell.prop({ series: [ { data: [ { degree: 50 } ] } ] })`.
    prop: function(props, value, opt) {

        var delim = '/';

        if (_.isString(props)) {
            // Get/set an attribute by a special path syntax that delimits
            // nested objects by the colon character.

            if (arguments.length > 1) {

                var path = props;
                var pathArray = path.split('/');
                var property = pathArray[0];

                // Remove the top-level property from the array of properties.
                pathArray.shift();

                opt = opt || {};
                opt.propertyPath = path;
                opt.propertyValue = value;

                if (pathArray.length === 0) {
                    // Property is not nested. We can simply use `set()`.
                    return this.set(property, value, opt);
                }

                var update = {};
                // Initialize the nested object. Subobjects are either arrays or objects.
                // An empty array is created if the sub-key is an integer. Otherwise, an empty object is created.
                // Note that this imposes a limitation on object keys one can use with Inspector.
                // Pure integer keys will cause issues and are therefore not allowed.
                var initializer = update;
                var prevProperty = property;
                _.each(pathArray, function(key) {
                    initializer = initializer[prevProperty] = (_.isFinite(Number(key)) ? [] : {});
                    prevProperty = key;
                });
                // Fill update with the `value` on `path`.
                update = joint.util.setByPath(update, path, value, '/');

                var baseAttributes = _.merge({}, this.attributes);
                // if rewrite mode enabled, we replace value referenced by path with
                // the new one (we don't merge).
                opt.rewrite && joint.util.unsetByPath(baseAttributes, path, '/');

                // Merge update with the model attributes.
                var attributes = _.merge(baseAttributes, update);
                // Finally, set the property to the updated attributes.
                return this.set(property, attributes[property], opt);

            } else {

                return joint.util.getByPath(this.attributes, props, delim);
            }
        }

        return this.set(_.merge({}, this.attributes, props), value);
    },

    // A convient way to unset nested properties
    removeProp: function(path, opt) {

        // Once a property is removed from the `attrs` attribute
        // the cellView will recognize a `dirty` flag and rerender itself
        // in order to remove the attribute from SVG element.
        opt = opt || {};
        opt.dirty = true;

        var pathArray = path.split('/');

        if (pathArray.length === 1) {
            // A top level property
            return this.unset(path, opt);
        }

        // A nested property
        var property = pathArray[0];
        var nestedPath = pathArray.slice(1).join('/');
        var propertyValue = _.merge({}, this.get(property));

        joint.util.unsetByPath(propertyValue, nestedPath, '/');

        return this.set(property, propertyValue, opt);
    },

    // A convenient way to set nested attributes.
    attr: function(attrs, value, opt) {

        var args = Array.prototype.slice.call(arguments);

        if (_.isString(attrs)) {
            // Get/set an attribute by a special path syntax that delimits
            // nested objects by the colon character.
            args[0] = 'attrs/' + attrs;

        } else {

            args[0] = { 'attrs' : attrs };
        }

        return this.prop.apply(this, args);
    },

    // A convenient way to unset nested attributes
    removeAttr: function(path, opt) {

        if (_.isArray(path)) {
            _.each(path, function(p) { this.removeAttr(p, opt); }, this);
            return this;
        }

        return this.removeProp('attrs/' + path, opt);
    },

    transition: function(path, value, opt, delim) {

        delim = delim || '/';

        var defaults = {
            duration: 100,
            delay: 10,
            timingFunction: joint.util.timing.linear,
            valueFunction: joint.util.interpolate.number
        };

        opt = _.extend(defaults, opt);

        var firstFrameTime = 0;
        var interpolatingFunction;

        var setter = _.bind(function(runtime) {

            var id, progress, propertyValue, status;

            firstFrameTime = firstFrameTime || runtime;
            runtime -= firstFrameTime;
            progress = runtime / opt.duration;

            if (progress < 1) {
                this._transitionIds[path] = id = joint.util.nextFrame(setter);
            } else {
                progress = 1;
                delete this._transitionIds[path];
            }

            propertyValue = interpolatingFunction(opt.timingFunction(progress));

            opt.transitionId = id;

            this.prop(path, propertyValue, opt);

            if (!id) this.trigger('transition:end', this, path);

        }, this);

        var initiator = _.bind(function(callback) {

            this.stopTransitions(path);

            interpolatingFunction = opt.valueFunction(joint.util.getByPath(this.attributes, path, delim), value);

            this._transitionIds[path] = joint.util.nextFrame(callback);

            this.trigger('transition:start', this, path);

        }, this);

        return _.delay(initiator, opt.delay, setter);
    },

    getTransitions: function() {
        return _.keys(this._transitionIds);
    },

    stopTransitions: function(path, delim) {

        delim = delim || '/';

        var pathArray = path && path.split(delim);

        _(this._transitionIds).keys().filter(pathArray && function(key) {

            return _.isEqual(pathArray, key.split(delim).slice(0, pathArray.length));

        }).each(function(key) {

            joint.util.cancelFrame(this._transitionIds[key]);

            delete this._transitionIds[key];

            this.trigger('transition:end', this, key);

        }, this);

        return this;
    },

    // A shorcut making it easy to create constructs like the following:
    // `var el = (new joint.shapes.basic.Rect).addTo(graph)`.
    addTo: function(graph, opt) {

        graph.addCell(this, opt);
        return this;
    },

    // A shortcut for an equivalent call: `paper.findViewByModel(cell)`
    // making it easy to create constructs like the following:
    // `cell.findView(paper).highlight()`
    findView: function(paper) {

        return paper.findViewByModel(this);
    },

    isLink: function() {

        return false;
    }
});

// joint.dia.CellView base view and controller.
// --------------------------------------------

// This is the base view and controller for `joint.dia.ElementView` and `joint.dia.LinkView`.

joint.dia.CellView = Backbone.View.extend({

    tagName: 'g',

    attributes: function() {

        return { 'model-id': this.model.id };
    },

    constructor: function(options) {

        this._configure(options);
        Backbone.View.apply(this, arguments);
    },

    _configure: function(options) {

        if (this.options) options = _.extend({}, _.result(this, 'options'), options);
        this.options = options;
        // Make sure a global unique id is assigned to this view. Store this id also to the properties object.
        // The global unique id makes sure that the same view can be rendered on e.g. different machines and
        // still be associated to the same object among all those clients. This is necessary for real-time
        // collaboration mechanism.
        this.options.id = this.options.id || joint.util.guid(this);
    },

    initialize: function() {

        _.bindAll(this, 'remove', 'update');

        // Store reference to this to the <g> DOM element so that the view is accessible through the DOM tree.
        this.$el.data('view', this);

        this.listenTo(this.model, 'change:attrs', this.onChangeAttrs);
    },

    onChangeAttrs: function(cell, attrs, opt) {

        if (opt.dirty) {

            // dirty flag could be set when a model attribute was removed and it needs to be cleared
            // also from the DOM element. See cell.removeAttr().
            return this.render();
        }

        return this.update();
    },

    // Override the Backbone `_ensureElement()` method in order to create a `<g>` node that wraps
    // all the nodes of the Cell view.
    _ensureElement: function() {

        var el;

        if (!this.el) {

            var attrs = _.extend({ id: this.id }, _.result(this, 'attributes'));
            if (this.className) attrs['class'] = _.result(this, 'className');
            el = V(_.result(this, 'tagName'), attrs).node;

        } else {

            el = _.result(this, 'el');
        }

        this.setElement(el, false);
    },

    // Utilize an alternative DOM manipulation API by
    // adding an element reference wrapped in Vectorizer.
    _setElement: function(el) {
        this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
        this.el = this.$el[0];
        this.vel = V(this.el);
    },

    findBySelector: function(selector) {

        // These are either descendants of `this.$el` of `this.$el` itself.
        // `.` is a special selector used to select the wrapping `<g>` element.
        var $selected = selector === '.' ? this.$el : this.$el.find(selector);
        return $selected;
    },

    notify: function(evt) {

        if (this.paper) {

            var args = Array.prototype.slice.call(arguments, 1);

            // Trigger the event on both the element itself and also on the paper.
            this.trigger.apply(this, [evt].concat(args));

            // Paper event handlers receive the view object as the first argument.
            this.paper.trigger.apply(this.paper, [evt, this].concat(args));
        }
    },

    getStrokeBBox: function(el) {
        // Return a bounding box rectangle that takes into account stroke.
        // Note that this is a naive and ad-hoc implementation that does not
        // works only in certain cases and should be replaced as soon as browsers will
        // start supporting the getStrokeBBox() SVG method.
        // @TODO any better solution is very welcome!

        var isMagnet = !!el;

        el = el || this.el;
        var bbox = V(el).bbox(false, this.paper.viewport);

        var strokeWidth;
        if (isMagnet) {

            strokeWidth = V(el).attr('stroke-width');

        } else {

            strokeWidth = this.model.attr('rect/stroke-width') || this.model.attr('circle/stroke-width') || this.model.attr('ellipse/stroke-width') || this.model.attr('path/stroke-width');
        }

        strokeWidth = parseFloat(strokeWidth) || 0;

        return g.rect(bbox).moveAndExpand({ x: -strokeWidth / 2, y: -strokeWidth / 2, width: strokeWidth, height: strokeWidth });
    },

    getBBox: function() {

        return g.rect(this.vel.bbox());
    },

    highlight: function(el, opt) {

        el = !el ? this.el : this.$(el)[0] || this.el;

        // set partial flag if the highlighted element is not the entire view.
        opt = opt || {};
        opt.partial = el != this.el;

        this.notify('cell:highlight', el, opt);
        return this;
    },

    unhighlight: function(el, opt) {

        el = !el ? this.el : this.$(el)[0] || this.el;

        opt = opt || {};
        opt.partial = el != this.el;

        this.notify('cell:unhighlight', el, opt);
        return this;
    },

    // Find the closest element that has the `magnet` attribute set to `true`. If there was not such
    // an element found, return the root element of the cell view.
    findMagnet: function(el) {

        var $el = this.$(el);

        if ($el.length === 0 || $el[0] === this.el) {

            // If the overall cell has set `magnet === false`, then return `undefined` to
            // announce there is no magnet found for this cell.
            // This is especially useful to set on cells that have 'ports'. In this case,
            // only the ports have set `magnet === true` and the overall element has `magnet === false`.
            var attrs = this.model.get('attrs') || {};
            if (attrs['.'] && attrs['.']['magnet'] === false) {
                return undefined;
            }

            return this.el;
        }

        if ($el.attr('magnet')) {

            return $el[0];
        }

        return this.findMagnet($el.parent());
    },

    // `selector` is a CSS selector or `'.'`. `filter` must be in the special JointJS filter format:
    // `{ name: <name of the filter>, args: { <arguments>, ... }`.
    // An example is: `{ filter: { name: 'blur', args: { radius: 5 } } }`.
    applyFilter: function(selector, filter) {

        var $selected = _.isString(selector) ? this.findBySelector(selector) : $(selector);

        // Generate a hash code from the stringified filter definition. This gives us
        // a unique filter ID for different definitions.
        var filterId = filter.name + this.paper.svg.id + joint.util.hashCode(JSON.stringify(filter));

        // If the filter already exists in the document,
        // we're done and we can just use it (reference it using `url()`).
        // If not, create one.
        if (!this.paper.svg.getElementById(filterId)) {

            var filterSVGString = joint.util.filter[filter.name] && joint.util.filter[filter.name](filter.args || {});
            if (!filterSVGString) {
                throw new Error('Non-existing filter ' + filter.name);
            }
            var filterElement = V(filterSVGString);
            // Set the filter area to be 3x the bounding box of the cell
            // and center the filter around the cell.
            filterElement.attr({
                filterUnits: 'objectBoundingBox',
                x: -1, y: -1, width: 3, height: 3
            });
            if (filter.attrs) filterElement.attr(filter.attrs);
            filterElement.node.id = filterId;
            V(this.paper.svg).defs().append(filterElement);
        }

        $selected.each(function() {

            V(this).attr('filter', 'url(#' + filterId + ')');
        });
    },

    // `selector` is a CSS selector or `'.'`. `attr` is either a `'fill'` or `'stroke'`.
    // `gradient` must be in the special JointJS gradient format:
    // `{ type: <linearGradient|radialGradient>, stops: [ { offset: <offset>, color: <color> }, ... ]`.
    // An example is: `{ fill: { type: 'linearGradient', stops: [ { offset: '10%', color: 'green' }, { offset: '50%', color: 'blue' } ] } }`.
    applyGradient: function(selector, attr, gradient) {

        var $selected = _.isString(selector) ? this.findBySelector(selector) : $(selector);

        // Generate a hash code from the stringified filter definition. This gives us
        // a unique filter ID for different definitions.
        var gradientId = gradient.type + this.paper.svg.id + joint.util.hashCode(JSON.stringify(gradient));

        // If the gradient already exists in the document,
        // we're done and we can just use it (reference it using `url()`).
        // If not, create one.
        if (!this.paper.svg.getElementById(gradientId)) {

            var gradientSVGString = [
                '<' + gradient.type + '>',
                _.map(gradient.stops, function(stop) {
                    return '<stop offset="' + stop.offset + '" stop-color="' + stop.color + '" stop-opacity="' + (_.isFinite(stop.opacity) ? stop.opacity : 1) + '" />';
                }).join(''),
                '</' + gradient.type + '>'
            ].join('');

            var gradientElement = V(gradientSVGString);
            if (gradient.attrs) { gradientElement.attr(gradient.attrs); }
            gradientElement.node.id = gradientId;
            V(this.paper.svg).defs().append(gradientElement);
        }

        $selected.each(function() {

            V(this).attr(attr, 'url(#' + gradientId + ')');
        });
    },

    // Construct a unique selector for the `el` element within this view.
    // `prevSelector` is being collected through the recursive call.
    // No value for `prevSelector` is expected when using this method.
    getSelector: function(el, prevSelector) {

        if (el === this.el) {
            return prevSelector;
        }

        var nthChild = V(el).index() + 1;
        var selector = el.tagName + ':nth-child(' + nthChild + ')';

        if (prevSelector) {
            selector += ' > ' + prevSelector;
        }

        return this.getSelector(el.parentNode, selector);
    },

    // Interaction. The controller part.
    // ---------------------------------

    // Interaction is handled by the paper and delegated to the view in interest.
    // `x` & `y` parameters passed to these functions represent the coordinates already snapped to the paper grid.
    // If necessary, real coordinates can be obtained from the `evt` event object.

    // These functions are supposed to be overriden by the views that inherit from `joint.dia.Cell`,
    // i.e. `joint.dia.Element` and `joint.dia.Link`.

    pointerdblclick: function(evt, x, y) {

        this.notify('cell:pointerdblclick', evt, x, y);
    },

    pointerclick: function(evt, x, y) {

        this.notify('cell:pointerclick', evt, x, y);
    },

    pointerdown: function(evt, x, y) {

        if (this.model.collection) {
            this.model.trigger('batch:start', { batchName: 'pointer' });
            this._collection = this.model.collection;
        }

        this.notify('cell:pointerdown', evt, x, y);
    },

    pointermove: function(evt, x, y) {

        this.notify('cell:pointermove', evt, x, y);
    },

    pointerup: function(evt, x, y) {

        this.notify('cell:pointerup', evt, x, y);

        if (this._collection) {
            // we don't want to trigger event on model as model doesn't
            // need to be member of collection anymore (remove)
            this._collection.trigger('batch:stop', { batchName: 'pointer' });
            delete this._collection;
        }
    },

    mouseover: function(evt) {

        this.notify('cell:mouseover', evt);
    },

    mouseout: function(evt) {

        this.notify('cell:mouseout', evt);
    },

    contextmenu: function(evt, x, y) {

        this.notify('cell:contextmenu', evt, x, y);
    }
});

//      JointJS library.
//      (c) 2011-2013 client IO

// joint.dia.Element base model.
// -----------------------------

joint.dia.Element = joint.dia.Cell.extend({

    defaults: {
        position: { x: 0, y: 0 },
        size: { width: 1, height: 1 },
        angle: 0
    },

    position: function(x, y, opt) {

        var isSetter = _.isNumber(y);

        opt = (isSetter ? opt : x) || {};

        // option `parentRelative` for setting the position relative to the element's parent.
        if (opt.parentRelative) {

            // Getting the parent's position requires the collection.
            // Cell.get('parent') helds cell id only.
            if (!this.collection) throw new Error('Element must be part of a collection.');

            var parent = this.collection.get(this.get('parent'));
            var parentPosition = parent && !parent.isLink()
                ? parent.get('position')
                : { x: 0, y: 0 };
        }

        if (isSetter) {

            if (opt.parentRelative) {
                x += parentPosition.x;
                y += parentPosition.y;
            }

            return this.set('position', { x: x, y: y }, opt);

        } else { // Getter returns a geometry point.

            var elementPosition = g.point(this.get('position'));

            return opt.parentRelative
                ? elementPosition.difference(parentPosition)
                : elementPosition;
        }
    },

    translate: function(tx, ty, opt) {

        tx = tx || 0;
        ty = ty || 0;

        if (tx === 0 && ty === 0) {
            // Like nothing has happened.
            return this;
        }

        opt = opt || {};
        // Pass the initiator of the translation.
        opt.translateBy = opt.translateBy || this.id;

        var position = this.get('position') || { x: 0, y: 0 };

        if (opt.restrictedArea && opt.translateBy === this.id) {

            // We are restricting the translation for the element itself only. We get
            // the bounding box of the element including all its embeds.
            // All embeds have to be translated the exact same way as the element.
            var bbox = this.getBBox({ deep: true });
            var ra = opt.restrictedArea;
            //- - - - - - - - - - - - -> ra.x + ra.width
            // - - - -> position.x      |
            // -> bbox.x
            //                ▓▓▓▓▓▓▓   |
            //         ░░░░░░░▓▓▓▓▓▓▓
            //         ░░░░░░░░░        |
            //   ▓▓▓▓▓▓▓▓░░░░░░░
            //   ▓▓▓▓▓▓▓▓               |
            //   <-dx->                     | restricted area right border
            //         <-width->        |   ░ translated element
            //   <- - bbox.width - ->       ▓ embedded element
            var dx = position.x - bbox.x;
            var dy = position.y - bbox.y;
            // Find the maximal/minimal coordinates that the element can be translated
            // while complies the restrictions.
            var x = Math.max(ra.x + dx, Math.min(ra.x + ra.width + dx - bbox.width, position.x + tx));
            var y = Math.max(ra.y + dy, Math.min(ra.y + ra.height + dy - bbox.height, position.y + ty));
            // recalculate the translation taking the resctrictions into account.
            tx = x - position.x;
            ty = y - position.y;
        }

        var translatedPosition = {
            x: position.x + tx,
            y: position.y + ty
        };

        // To find out by how much an element was translated in event 'change:position' handlers.
        opt.tx = tx;
        opt.ty = ty;

        if (opt.transition) {

            if (!_.isObject(opt.transition)) opt.transition = {};

            this.transition('position', translatedPosition, _.extend({}, opt.transition, {
                valueFunction: joint.util.interpolate.object
            }));

        } else {

            this.set('position', translatedPosition, opt);

            // Recursively call `translate()` on all the embeds cells.
            _.invoke(this.getEmbeddedCells(), 'translate', tx, ty, opt);
        }

        return this;
    },

    resize: function(width, height, opt) {

        this.trigger('batch:start', { batchName: 'resize' });
        this.set('size', { width: width, height: height }, opt);
        this.trigger('batch:stop', { batchName: 'resize' });

        return this;
    },

    fitEmbeds: function(opt) {

        opt = opt || {};

        var collection = this.collection;

        // Getting the children's size and position requires the collection.
        // Cell.get('embdes') helds an array of cell ids only.
        if (!collection) throw new Error('Element must be part of a collection.');

        var embeddedCells = this.getEmbeddedCells();

        if (embeddedCells.length > 0) {

            this.trigger('batch:start', { batchName: 'fit-embeds' });

            if (opt.deep) {
                // Recursively apply fitEmbeds on all embeds first.
                _.invoke(embeddedCells, 'fitEmbeds', opt);
            }

            // Compute cell's size and position  based on the children bbox
            // and given padding.
            var bbox = collection.getBBox(embeddedCells);
            var padding = joint.util.normalizeSides(opt.padding);

            // Apply padding computed above to the bbox.
            bbox.moveAndExpand({
                x: - padding.left,
                y: - padding.top,
                width: padding.right + padding.left,
                height: padding.bottom + padding.top
            });

            // Set new element dimensions finally.
            this.set({
                position: { x: bbox.x, y: bbox.y },
                size: { width: bbox.width, height: bbox.height }
            }, opt);

            this.trigger('batch:stop', { batchName: 'fit-embeds' });
        }

        return this;
    },

    // Rotate element by `angle` degrees, optionally around `origin` point.
    // If `origin` is not provided, it is considered to be the center of the element.
    // If `absolute` is `true`, the `angle` is considered is abslute, i.e. it is not
    // the difference from the previous angle.
    rotate: function(angle, absolute, origin) {

        if (origin) {

            var center = this.getBBox().center();
            var size = this.get('size');
            var position = this.get('position');
            center.rotate(origin, this.get('angle') - angle);
            var dx = center.x - size.width / 2 - position.x;
            var dy = center.y - size.height / 2 - position.y;
            this.trigger('batch:start', { batchName: 'rotate' });
            this.translate(dx, dy);
            this.rotate(angle, absolute);
            this.trigger('batch:stop', { batchName: 'rotate' });

        } else {

            this.set('angle', absolute ? angle : (this.get('angle') + angle) % 360);
        }

        return this;
    },

    getBBox: function(opt) {

        opt = opt || {};

        if (opt.deep && this.collection) {

            // Get all the embedded elements using breadth first algorithm,
            // that doesn't use recursion.
            var elements = this.getEmbeddedCells({ deep: true, breadthFirst: true });
            // Add the model itself.
            elements.push(this);

            return this.collection.getBBox(elements);
        }

        var position = this.get('position');
        var size = this.get('size');

        return g.rect(position.x, position.y, size.width, size.height);
    }
});

// joint.dia.Element base view and controller.
// -------------------------------------------

joint.dia.ElementView = joint.dia.CellView.extend({

    SPECIAL_ATTRIBUTES: [
        'style',
        'text',
        'html',
        'ref-x',
        'ref-y',
        'ref-dx',
        'ref-dy',
        'ref-width',
        'ref-height',
        'ref',
        'x-alignment',
        'y-alignment',
        'port'
    ],

    className: function() {
        return 'element ' + this.model.get('type').replace('.', ' ', 'g');
    },

    initialize: function() {

        _.bindAll(this, 'translate', 'resize', 'rotate');

        joint.dia.CellView.prototype.initialize.apply(this, arguments);

        this.listenTo(this.model, 'change:position', this.translate);
        this.listenTo(this.model, 'change:size', this.resize);
        this.listenTo(this.model, 'change:angle', this.rotate);
    },

    // Default is to process the `attrs` object and set attributes on subelements based on the selectors.
    update: function(cell, renderingOnlyAttrs) {

        var allAttrs = this.model.get('attrs');

        var rotatable = this.rotatableNode;
        if (rotatable) {
            var rotation = rotatable.attr('transform');
            rotatable.attr('transform', '');
        }

        var relativelyPositioned = [];
        var nodesBySelector = {};

        _.each(renderingOnlyAttrs || allAttrs, function(attrs, selector) {

            // Elements that should be updated.
            var $selected = this.findBySelector(selector);
            // No element matched by the `selector` was found. We're done then.
            if ($selected.length === 0) return;

            nodesBySelector[selector] = $selected;

            // Special attributes are treated by JointJS, not by SVG.
            var specialAttributes = this.SPECIAL_ATTRIBUTES.slice();

            // If the `filter` attribute is an object, it is in the special JointJS filter format and so
            // it becomes a special attribute and is treated separately.
            if (_.isObject(attrs.filter)) {

                specialAttributes.push('filter');
                this.applyFilter($selected, attrs.filter);
            }

            // If the `fill` or `stroke` attribute is an object, it is in the special JointJS gradient format and so
            // it becomes a special attribute and is treated separately.
            if (_.isObject(attrs.fill)) {

                specialAttributes.push('fill');
                this.applyGradient($selected, 'fill', attrs.fill);
            }
            if (_.isObject(attrs.stroke)) {

                specialAttributes.push('stroke');
                this.applyGradient($selected, 'stroke', attrs.stroke);
            }

            // Make special case for `text` attribute. So that we can set text content of the `<text>` element
            // via the `attrs` object as well.
            // Note that it's important to set text before applying the rest of the final attributes.
            // Vectorizer `text()` method sets on the element its own attributes and it has to be possible
            // to rewrite them, if needed. (i.e display: 'none')
            if (!_.isUndefined(attrs.text)) {

                $selected.each(function() {

                    V(this).text(attrs.text + '', { lineHeight: attrs.lineHeight, textPath: attrs.textPath, annotations: attrs.annotations });
                });
                specialAttributes.push('lineHeight', 'textPath', 'annotations');
            }

            // Set regular attributes on the `$selected` subelement. Note that we cannot use the jQuery attr()
            // method as some of the attributes might be namespaced (e.g. xlink:href) which fails with jQuery attr().
            var finalAttributes = _.omit(attrs, specialAttributes);

            $selected.each(function() {

                V(this).attr(finalAttributes);
            });

            // `port` attribute contains the `id` of the port that the underlying magnet represents.
            if (attrs.port) {

                $selected.attr('port', _.isUndefined(attrs.port.id) ? attrs.port : attrs.port.id);
            }

            // `style` attribute is special in the sense that it sets the CSS style of the subelement.
            if (attrs.style) {

                $selected.css(attrs.style);
            }

            if (!_.isUndefined(attrs.html)) {

                $selected.each(function() {

                    $(this).html(attrs.html + '');
                });
            }

            // Special `ref-x` and `ref-y` attributes make it possible to set both absolute or
            // relative positioning of subelements.
            if (!_.isUndefined(attrs['ref-x']) ||
                !_.isUndefined(attrs['ref-y']) ||
                !_.isUndefined(attrs['ref-dx']) ||
                !_.isUndefined(attrs['ref-dy']) ||
		!_.isUndefined(attrs['x-alignment']) ||
		!_.isUndefined(attrs['y-alignment']) ||
                !_.isUndefined(attrs['ref-width']) ||
                !_.isUndefined(attrs['ref-height'])
               ) {

                _.each($selected, function(el, index, list) {
                    var $el = $(el);
                    // copy original list selector to the element
                    $el.selector = list.selector;
                    relativelyPositioned.push($el);
                });
            }

        }, this);

        // We don't want the sub elements to affect the bounding box of the root element when
        // positioning the sub elements relatively to the bounding box.
        //_.invoke(relativelyPositioned, 'hide');
        //_.invoke(relativelyPositioned, 'show');

        // Note that we're using the bounding box without transformation because we are already inside
        // a transformed coordinate system.
        var size = this.model.get('size');
        var bbox = { x: 0, y: 0, width: size.width, height: size.height };

        renderingOnlyAttrs = renderingOnlyAttrs || {};

        _.each(relativelyPositioned, function($el) {

            // if there was a special attribute affecting the position amongst renderingOnlyAttributes
            // we have to merge it with rest of the element's attributes as they are necessary
            // to update the position relatively (i.e `ref`)
            var renderingOnlyElAttrs = renderingOnlyAttrs[$el.selector];
            var elAttrs = renderingOnlyElAttrs
                ? _.merge({}, allAttrs[$el.selector], renderingOnlyElAttrs)
            : allAttrs[$el.selector];

            this.positionRelative(V($el[0]), bbox, elAttrs, nodesBySelector);

        }, this);

        if (rotatable) {

            rotatable.attr('transform', rotation || '');
        }
    },

    positionRelative: function(vel, bbox, attributes, nodesBySelector) {

        var ref = attributes['ref'];
        var refDx = parseFloat(attributes['ref-dx']);
        var refDy = parseFloat(attributes['ref-dy']);
        var yAlignment = attributes['y-alignment'];
        var xAlignment = attributes['x-alignment'];

        // 'ref-y', 'ref-x', 'ref-width', 'ref-height' can be defined
        // by value or by percentage e.g 4, 0.5, '200%'.
        var refY = attributes['ref-y'];
        var refYPercentage = _.isString(refY) && refY.slice(-1) === '%';
        refY = parseFloat(refY);
        if (refYPercentage) {
            refY /= 100;
        }

        var refX = attributes['ref-x'];
        var refXPercentage = _.isString(refX) && refX.slice(-1) === '%';
        refX = parseFloat(refX);
        if (refXPercentage) {
            refX /= 100;
        }

        var refWidth = attributes['ref-width'];
        var refWidthPercentage = _.isString(refWidth) && refWidth.slice(-1) === '%';
        refWidth = parseFloat(refWidth);
        if (refWidthPercentage) {
            refWidth /= 100;
        }

        var refHeight = attributes['ref-height'];
        var refHeightPercentage = _.isString(refHeight) && refHeight.slice(-1) === '%';
        refHeight = parseFloat(refHeight);
        if (refHeightPercentage) {
            refHeight /= 100;
        }

        // Check if the node is a descendant of the scalable group.
        var scalable = vel.findParentByClass('scalable', this.el);

        // `ref` is the selector of the reference element. If no `ref` is passed, reference
        // element is the root element.
        if (ref) {

            var vref;

            if (nodesBySelector && nodesBySelector[ref]) {
                // First we check if the same selector has been already used.
                vref = V(nodesBySelector[ref][0]);
            } else {
                // Other wise we find the ref ourselves.
                vref = ref === '.' ? this.vel : this.vel.findOne(ref);
            }

            if (!vref) {
                throw new Error('dia.ElementView: reference does not exists.');
            }

            // Get the bounding box of the reference element relative to the root `<g>` element.
            bbox = vref.bbox(false, this.el);
        }

        // Remove the previous translate() from the transform attribute and translate the element
        // relative to the root bounding box following the `ref-x` and `ref-y` attributes.
        if (vel.attr('transform')) {

            vel.attr('transform', vel.attr('transform').replace(/translate\([^)]*\)/g, '').trim() || '');
        }

        // 'ref-width'/'ref-height' defines the width/height of the subelement relatively to
        // the reference element size
        // val in 0..1         ref-width = 0.75 sets the width to 75% of the ref. el. width
        // val < 0 || val > 1  ref-height = -20 sets the height to the the ref. el. height shorter by 20

        if (isFinite(refWidth)) {

            if (refWidthPercentage || refWidth >= 0 && refWidth <= 1) {

                vel.attr('width', refWidth * bbox.width);

            } else {

                vel.attr('width', Math.max(refWidth + bbox.width, 0));
            }
        }

        if (isFinite(refHeight)) {

            if (refHeightPercentage || refHeight >= 0 && refHeight <= 1) {

                vel.attr('height', refHeight * bbox.height);

            } else {

                vel.attr('height', Math.max(refHeight + bbox.height, 0));
            }
        }

        // The final translation of the subelement.
        var tx = 0;
        var ty = 0;
        var scale;

        // `ref-dx` and `ref-dy` define the offset of the subelement relative to the right and/or bottom
        // coordinate of the reference element.
        if (isFinite(refDx)) {

            if (scalable) {

                // Compensate for the scale grid in case the elemnt is in the scalable group.
                scale = scale || scalable.scale();
                tx = bbox.x + bbox.width + refDx / scale.sx;

            } else {

                tx = bbox.x + bbox.width + refDx;
            }
        }
        if (isFinite(refDy)) {

            if (scalable) {

                // Compensate for the scale grid in case the elemnt is in the scalable group.
                scale = scale || scalable.scale();
                ty = bbox.y + bbox.height + refDy / scale.sy;
            } else {

                ty = bbox.y + bbox.height + refDy;
            }
        }

        // if `refX` is in [0, 1] then `refX` is a fraction of bounding box width
        // if `refX` is < 0 then `refX`'s absolute values is the right coordinate of the bounding box
        // otherwise, `refX` is the left coordinate of the bounding box
        // Analogical rules apply for `refY`.
        if (isFinite(refX)) {

            if (refXPercentage || refX > 0 && refX < 1) {

                tx = bbox.x + bbox.width * refX;

            } else if (scalable) {

                // Compensate for the scale grid in case the elemnt is in the scalable group.
                scale = scale || scalable.scale();
                tx = bbox.x + refX / scale.sx;

            } else {

                tx = bbox.x + refX;
            }
        }
        if (isFinite(refY)) {

            if (refXPercentage || refY > 0 && refY < 1) {

                ty = bbox.y + bbox.height * refY;

            } else if (scalable) {

                // Compensate for the scale grid in case the elemnt is in the scalable group.
                scale = scale || scalable.scale();
                ty = bbox.y + refY / scale.sy;

            } else {

                ty = bbox.y + refY;
            }
        }

        if (!_.isUndefined(yAlignment) || !_.isUndefined(xAlignment)) {

            var velBBox = vel.bbox(false, this.paper.viewport);

            // `y-alignment` when set to `middle` causes centering of the subelement around its new y coordinate.
            if (yAlignment === 'middle') {

                ty -= velBBox.height / 2;

            } else if (isFinite(yAlignment)) {

                ty += (yAlignment > -1 && yAlignment < 1) ?  velBBox.height * yAlignment : yAlignment;
            }

            // `x-alignment` when set to `middle` causes centering of the subelement around its new x coordinate.
            if (xAlignment === 'middle') {

                tx -= velBBox.width / 2;

            } else if (isFinite(xAlignment)) {

                tx += (xAlignment > -1 && xAlignment < 1) ?  velBBox.width * xAlignment : xAlignment;
            }
        }

        vel.translate(tx, ty);
    },

    // `prototype.markup` is rendered by default. Set the `markup` attribute on the model if the
    // default markup is not desirable.
    renderMarkup: function() {

        var markup = this.model.get('markup') || this.model.markup;

        if (markup) {

            var nodes = V(markup);

            this.vel.append(nodes);

        } else {

            throw new Error('properties.markup is missing while the default render() implementation is used.');
        }
    },

    render: function() {

        this.$el.empty();

        this.renderMarkup();

        this.rotatableNode = this.vel.findOne('.rotatable');
        this.scalableNode = this.vel.findOne('.scalable');

        this.update();

        this.resize();
        this.rotate();
        this.translate();

        return this;
    },

    // Scale the whole `<g>` group. Note the difference between `scale()` and `resize()` here.
    // `resize()` doesn't scale the whole `<g>` group but rather adjusts the `box.sx`/`box.sy` only.
    // `update()` is then responsible for scaling only those elements that have the `follow-scale`
    // attribute set to `true`. This is desirable in elements that have e.g. a `<text>` subelement
    // that is not supposed to be scaled together with a surrounding `<rect>` element that IS supposed
    // be be scaled.
    scale: function(sx, sy) {

        // TODO: take into account the origin coordinates `ox` and `oy`.
        this.vel.scale(sx, sy);
    },

    resize: function() {

        var size = this.model.get('size') || { width: 1, height: 1 };
        var angle = this.model.get('angle') || 0;

        var scalable = this.scalableNode;
        if (!scalable) {
            // If there is no scalable elements, than there is nothing to resize.
            return;
        }
        var scalableBbox = scalable.bbox(true);
        // Make sure `scalableBbox.width` and `scalableBbox.height` are not zero which can happen if the element does not have any content. By making
        // the width/height 1, we prevent HTML errors of the type `scale(Infinity, Infinity)`.
        scalable.attr('transform', 'scale(' + (size.width / (scalableBbox.width || 1)) + ',' + (size.height / (scalableBbox.height || 1)) + ')');

        // Now the interesting part. The goal is to be able to store the object geometry via just `x`, `y`, `angle`, `width` and `height`
        // Order of transformations is significant but we want to reconstruct the object always in the order:
        // resize(), rotate(), translate() no matter of how the object was transformed. For that to work,
        // we must adjust the `x` and `y` coordinates of the object whenever we resize it (because the origin of the
        // rotation changes). The new `x` and `y` coordinates are computed by canceling the previous rotation
        // around the center of the resized object (which is a different origin then the origin of the previous rotation)
        // and getting the top-left corner of the resulting object. Then we clean up the rotation back to what it originally was.

        // Cancel the rotation but now around a different origin, which is the center of the scaled object.
        var rotatable = this.rotatableNode;
        var rotation = rotatable && rotatable.attr('transform');
        if (rotation && rotation !== 'null') {

            rotatable.attr('transform', rotation + ' rotate(' + (-angle) + ',' + (size.width / 2) + ',' + (size.height / 2) + ')');
            var rotatableBbox = scalable.bbox(false, this.paper.viewport);

            // Store new x, y and perform rotate() again against the new rotation origin.
            this.model.set('position', { x: rotatableBbox.x, y: rotatableBbox.y });
            this.rotate();
        }

        // Update must always be called on non-rotated element. Otherwise, relative positioning
        // would work with wrong (rotated) bounding boxes.
        this.update();
    },

    translate: function(model, changes, opt) {

        var position = this.model.get('position') || { x: 0, y: 0 };

        this.vel.attr('transform', 'translate(' + position.x + ',' + position.y + ')');
    },

    rotate: function() {

        var rotatable = this.rotatableNode;
        if (!rotatable) {
            // If there is no rotatable elements, then there is nothing to rotate.
            return;
        }

        var angle = this.model.get('angle') || 0;
        var size = this.model.get('size') || { width: 1, height: 1 };

        var ox = size.width / 2;
        var oy = size.height / 2;


        rotatable.attr('transform', 'rotate(' + angle + ',' + ox + ',' + oy + ')');
    },

    getBBox: function(opt) {

        if (opt && opt.useModelGeometry) {
            var noTransformationBBox = this.model.getBBox().bbox(this.model.get('angle'));
            var transformationMatrix = this.paper.viewport.getCTM();
            return g.rect(V.transformRect(noTransformationBBox, transformationMatrix));
        }

        return joint.dia.CellView.prototype.getBBox.apply(this, arguments);
    },

    // Embedding mode methods
    // ----------------------

    prepareEmbedding: function(opt) {

        opt = opt || {};

        var model = opt.model || this.model;
        var paper = opt.paper || this.paper;

        // Bring the model to the front with all his embeds.
        model.toFront({ deep: true, ui: true });

        // Move to front also all the inbound and outbound links that are connected
        // to any of the element descendant. If we bring to front only embedded elements,
        // links connected to them would stay in the background.
        _.invoke(paper.model.getConnectedLinks(model, { deep: true }), 'toFront', { ui: true });

        // Before we start looking for suitable parent we remove the current one.
        var parentId = model.get('parent');
        parentId && paper.model.getCell(parentId).unembed(model, { ui: true });
    },

    processEmbedding: function(opt) {

        opt = opt || {};

        var model = opt.model || this.model;
        var paper = opt.paper || this.paper;

        var paperOptions = paper.options;
        var candidates = paper.model.findModelsUnderElement(model, { searchBy: paperOptions.findParentBy });

        if (paperOptions.frontParentOnly) {
            // pick the element with the highest `z` index
            candidates = candidates.slice(-1);
        }

        var newCandidateView = null;
        var prevCandidateView = this._candidateEmbedView;

        // iterate over all candidates starting from the last one (has the highest z-index).
        for (var i = candidates.length - 1; i >= 0; i--) {

            var candidate = candidates[i];

            if (prevCandidateView && prevCandidateView.model.id == candidate.id) {

                // candidate remains the same
                newCandidateView = prevCandidateView;
                break;

            } else {

                var view = candidate.findView(paper);
                if (paperOptions.validateEmbedding.call(paper, this, view)) {

                    // flip to the new candidate
                    newCandidateView = view;
                    break;
                }
            }
        }

        if (newCandidateView && newCandidateView != prevCandidateView) {
            // A new candidate view found. Highlight the new one.
            prevCandidateView && prevCandidateView.unhighlight(null, { embedding: true });
            this._candidateEmbedView = newCandidateView.highlight(null, { embedding: true });
        }

        if (!newCandidateView && prevCandidateView) {
            // No candidate view found. Unhighlight the previous candidate.
            prevCandidateView.unhighlight(null, { embedding: true });
            delete this._candidateEmbedView;
        }
    },

    finalizeEmbedding: function(opt) {

        opt = opt || {};

        var candidateView = this._candidateEmbedView;
        var model = opt.model || this.model;
        var paper = opt.paper || this.paper;

        if (candidateView) {

            // We finished embedding. Candidate view is chosen to become the parent of the model.
            candidateView.model.embed(model, { ui: true });
            candidateView.unhighlight(null, { embedding: true });

            delete this._candidateEmbedView;
        }

        _.invoke(paper.model.getConnectedLinks(model, { deep: true }), 'reparent', { ui: true });
    },

    // Interaction. The controller part.
    // ---------------------------------

    pointerdown: function(evt, x, y) {

        var paper = this.paper;

        // target is a valid magnet start linking
        if (evt.target.getAttribute('magnet') && paper.options.validateMagnet.call(paper, this, evt.target)) {

            this.model.trigger('batch:start', { batchName: 'add-link' });

            var link = paper.getDefaultLink(this, evt.target);
            link.set({
                source: {
                    id: this.model.id,
                    selector: this.getSelector(evt.target),
                    port: evt.target.getAttribute('port')
                },
                target: { x: x, y: y }
            });

            paper.model.addCell(link);

            this._linkView = paper.findViewByModel(link);
            this._linkView.pointerdown(evt, x, y);
            this._linkView.startArrowheadMove('target');

        } else {

            this._dx = x;
            this._dy = y;

            this.restrictedArea = paper.getRestrictedArea(this);

            joint.dia.CellView.prototype.pointerdown.apply(this, arguments);
            this.notify('element:pointerdown', evt, x, y);
        }
    },

    pointermove: function(evt, x, y) {

        if (this._linkView) {

            // let the linkview deal with this event
            this._linkView.pointermove(evt, x, y);

        } else {

            var grid = this.paper.options.gridSize;
            var interactive = _.isFunction(this.options.interactive)
                ? this.options.interactive(this, 'pointermove')
                : this.options.interactive;

            if (interactive !== false) {

                var position = this.model.get('position');

                // Make sure the new element's position always snaps to the current grid after
                // translate as the previous one could be calculated with a different grid size.
                var tx = g.snapToGrid(position.x, grid) - position.x + g.snapToGrid(x - this._dx, grid);
                var ty = g.snapToGrid(position.y, grid) - position.y + g.snapToGrid(y - this._dy, grid);

                this.model.translate(tx, ty, { restrictedArea: this.restrictedArea, ui: true });

                if (this.paper.options.embeddingMode) {

                    if (!this._inProcessOfEmbedding) {
                        // Prepare the element for embedding only if the pointer moves.
                        // We don't want to do unnecessary action with the element
                        // if an user only clicks/dblclicks on it.
                        this.prepareEmbedding();
                        this._inProcessOfEmbedding = true;
                    }

                    this.processEmbedding();
                }
            }

            this._dx = g.snapToGrid(x, grid);
            this._dy = g.snapToGrid(y, grid);


            joint.dia.CellView.prototype.pointermove.apply(this, arguments);
            this.notify('element:pointermove', evt, x, y);
        }
    },

    pointerup: function(evt, x, y) {

        if (this._linkView) {

            var linkView = this._linkView;
            var linkModel = linkView.model;

            // let the linkview deal with this event
            linkView.pointerup(evt, x, y);

            // If the link pinning is not allowed and the link is not connected to an element
            // we remove the link, because the link was never connected to any target element.
            if (!this.paper.options.linkPinning && !_.has(linkModel.get('target'), 'id')) {
                linkModel.remove({ ui: true });
            }

            delete this._linkView;

            this.model.trigger('batch:stop', { batchName: 'add-link' });

        } else {

            if (this._inProcessOfEmbedding) {
                this.finalizeEmbedding();
                this._inProcessOfEmbedding = false;
            }

            this.notify('element:pointerup', evt, x, y);
            joint.dia.CellView.prototype.pointerup.apply(this, arguments);

        }
    }

});

//      JointJS diagramming library.
//      (c) 2011-2013 client IO

// joint.dia.Link base model.
// --------------------------
joint.dia.Link = joint.dia.Cell.extend({

    // The default markup for links.
    markup: [
        '<path class="connection" stroke="black"/>',
        '<path class="marker-source" fill="black" stroke="black" />',
        '<path class="marker-target" fill="black" stroke="black" />',
        '<path class="connection-wrap"/>',
        '<g class="labels"/>',
        '<g class="marker-vertices"/>',
        '<g class="marker-arrowheads"/>',
        '<g class="link-tools"/>'
    ].join(''),

    labelMarkup: [
        '<g class="label">',
        '<rect />',
        '<text />',
        '</g>'
    ].join(''),

    toolMarkup: [
        '<g class="link-tool">',
        '<g class="tool-remove" event="remove">',
        '<circle r="11" />',
        '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"/>',
        '<title>Remove link.</title>',
        '</g>',
        '<g class="tool-options" event="link:options">',
        '<circle r="11" transform="translate(25)"/>',
        '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>',
        '<title>Link options.</title>',
        '</g>',
        '</g>'
    ].join(''),

    // The default markup for showing/removing vertices. These elements are the children of the .marker-vertices element (see `this.markup`).
    // Only .marker-vertex and .marker-vertex-remove element have special meaning. The former is used for
    // dragging vertices (changin their position). The latter is used for removing vertices.
    vertexMarkup: [
        '<g class="marker-vertex-group" transform="translate(<%= x %>, <%= y %>)">',
        '<circle class="marker-vertex" idx="<%= idx %>" r="10" />',
        '<path class="marker-vertex-remove-area" idx="<%= idx %>" d="M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z" transform="translate(5, -33)"/>',
        '<path class="marker-vertex-remove" idx="<%= idx %>" transform="scale(.8) translate(9.5, -37)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z">',
        '<title>Remove vertex.</title>',
        '</path>',
        '</g>'
    ].join(''),

    arrowheadMarkup: [
        '<g class="marker-arrowhead-group marker-arrowhead-group-<%= end %>">',
        '<path class="marker-arrowhead" end="<%= end %>" d="M 26 0 L 0 13 L 26 26 z" />',
        '</g>'
    ].join(''),

    defaults: {

        type: 'link',
        source: {},
        target: {}
    },

    disconnect: function() {

        return this.set({ source: g.point(0, 0), target: g.point(0, 0) });
    },

    // A convenient way to set labels. Currently set values will be mixined with `value` if used as a setter.
    label: function(idx, value) {

        idx = idx || 0;

        var labels = this.get('labels') || [];

        // Is it a getter?
        if (arguments.length === 0 || arguments.length === 1) {

            return labels[idx];
        }

        var newValue = _.merge({}, labels[idx], value);

        var newLabels = labels.slice();
        newLabels[idx] = newValue;

        return this.set({ labels: newLabels });
    },

    translate: function(tx, ty, opt) {

        var attrs = {};
        var source = this.get('source');
        var target = this.get('target');
        var vertices = this.get('vertices');

        if (!source.id) {
            attrs.source = { x: source.x + tx, y: source.y + ty };
        }

        if (!target.id) {
            attrs.target = { x: target.x + tx, y: target.y + ty };
        }

        if (vertices && vertices.length) {
            attrs.vertices = _.map(vertices, function(vertex) {
                return { x: vertex.x + tx, y: vertex.y + ty };
            });
        }

        return this.set(attrs, opt);
    },

    reparent: function(opt) {

        var newParent;

        if (this.collection) {

            var source = this.collection.get(this.get('source').id);
            var target = this.collection.get(this.get('target').id);
            var prevParent = this.collection.get(this.get('parent'));

            if (source && target) {
                newParent = this.collection.getCommonAncestor(source, target);
            }

            if (prevParent && (!newParent || newParent.id != prevParent.id)) {
                // Unembed the link if source and target has no common ancestor
                // or common ancestor changed
                prevParent.unembed(this, opt);
            }

            if (newParent) {
                newParent.embed(this, opt);
            }
        }

        return newParent;
    },

    isLink: function() {

        return true;
    },

    hasLoop: function(opt) {

        opt = opt || {};

        var sourceId = this.get('source').id;
        var targetId = this.get('target').id;
        var loop = sourceId && targetId && sourceId === targetId;

        // Note that there in the deep mode a link can have a loop,
        // even if it connects only a parent and its embed.
        // A loop "target equals source" is valid in both shallow and deep mode.
        if (!loop && opt.deep && this.collection) {

            var sourceElement = this.collection.get(sourceId);
            var targetElement = this.collection.get(targetId);

            loop = sourceElement.isEmbeddedIn(targetElement) || targetElement.isEmbeddedIn(sourceElement);
        }

        return loop;
    }
});


// joint.dia.Link base view and controller.
// ----------------------------------------

joint.dia.LinkView = joint.dia.CellView.extend({

    className: function() {
        return _.unique(this.model.get('type').split('.').concat('link')).join(' ');
    },

    options: {

        shortLinkLength: 100,
        doubleLinkTools: false,
        longLinkLength: 160,
        linkToolsOffset: 40,
        doubleLinkToolsOffset: 60,
        sampleInterval: 50
    },

    initialize: function(options) {

        joint.dia.CellView.prototype.initialize.apply(this, arguments);

        // create methods in prototype, so they can be accessed from any instance and
        // don't need to be create over and over
        if (typeof this.constructor.prototype.watchSource !== 'function') {
            this.constructor.prototype.watchSource = this.createWatcher('source');
            this.constructor.prototype.watchTarget = this.createWatcher('target');
        }

        // `_.labelCache` is a mapping of indexes of labels in the `this.get('labels')` array to
        // `<g class="label">` nodes wrapped by Vectorizer. This allows for quick access to the
        // nodes in `updateLabelPosition()` in order to update the label positions.
        this._labelCache = {};

        // keeps markers bboxes and positions again for quicker access
        this._markerCache = {};

        // bind events
        this.startListening();
    },

    startListening: function() {

        var model = this.model;

        this.listenTo(model, 'change:markup', this.render);
        this.listenTo(model, 'change:smooth change:manhattan change:router change:connector', this.update);
        this.listenTo(model, 'change:toolMarkup', this.onToolsChange);
        this.listenTo(model, 'change:labels change:labelMarkup', this.onLabelsChange);
        this.listenTo(model, 'change:vertices change:vertexMarkup', this.onVerticesChange);
        this.listenTo(model, 'change:source', this.onSourceChange);
        this.listenTo(model, 'change:target', this.onTargetChange);
    },

    onSourceChange: function(cell, source) {

        this.watchSource(cell, source).update();
    },

    onTargetChange: function(cell, target) {

        this.watchTarget(cell, target).update();
    },

    onVerticesChange: function(cell, changed, opt) {

        this.renderVertexMarkers();

        // If the vertices have been changed by a translation we do update only if the link was
        // the only link that was translated. If the link was translated via another element which the link
        // is embedded in, this element will be translated as well and that triggers an update.
        // Note that all embeds in a model are sorted - first comes links, then elements.
        if (!opt.translateBy || opt.translateBy === this.model.id || this.model.hasLoop()) {
            // Vertices were changed (not as a reaction on translate) or link.translate() was called or
            // we're dealing with a loop link that is embedded.
            this.update();
        }
    },

    onToolsChange: function() {

        this.renderTools().updateToolsPosition();
    },

    onLabelsChange: function() {

        this.renderLabels().updateLabelPositions();
    },

    // Rendering
    //----------

    render: function() {

        this.$el.empty();

        // A special markup can be given in the `properties.markup` property. This might be handy
        // if e.g. arrowhead markers should be `<image>` elements or any other element than `<path>`s.
        // `.connection`, `.connection-wrap`, `.marker-source` and `.marker-target` selectors
        // of elements with special meaning though. Therefore, those classes should be preserved in any
        // special markup passed in `properties.markup`.
        var children = V(this.model.get('markup') || this.model.markup);

        // custom markup may contain only one children
        if (!_.isArray(children)) children = [children];

        // Cache all children elements for quicker access.
        this._V = {}; // vectorized markup;
        _.each(children, function(child) {
            var c = child.attr('class');
            c && (this._V[$.camelCase(c)] = child);
        }, this);

        // Only the connection path is mandatory
        if (!this._V.connection) throw new Error('link: no connection path in the markup');

        // partial rendering
        this.renderTools();
        this.renderVertexMarkers();
        this.renderArrowheadMarkers();

        this.vel.append(children);

        // rendering labels has to be run after the link is appended to DOM tree. (otherwise <Text> bbox
        // returns zero values)
        this.renderLabels();

        // start watching the ends of the link for changes
        this.watchSource(this.model, this.model.get('source'))
            .watchTarget(this.model, this.model.get('target'))
            .update();

        return this;
    },

    renderLabels: function() {

        if (!this._V.labels) return this;

        this._labelCache = {};
        var $labels = $(this._V.labels.node).empty();

        var labels = this.model.get('labels') || [];
        if (!labels.length) return this;

        var labelTemplate = _.template(this.model.get('labelMarkup') || this.model.labelMarkup);
        // This is a prepared instance of a vectorized SVGDOM node for the label element resulting from
        // compilation of the labelTemplate. The purpose is that all labels will just `clone()` this
        // node to create a duplicate.
        var labelNodeInstance = V(labelTemplate());

        var canLabelMove = this.can('labelMove');

        _.each(labels, function(label, idx) {

            var labelNode = labelNodeInstance.clone().node;
            V(labelNode).attr('label-idx', idx);
            if (canLabelMove) {
                V(labelNode).attr('cursor', 'move');
            }

            // Cache label nodes so that the `updateLabels()` can just update the label node positions.
            this._labelCache[idx] = V(labelNode);

            var $text = $(labelNode).find('text');
            var $rect = $(labelNode).find('rect');

            // Text attributes with the default `text-anchor` and font-size set.
            var textAttributes = _.extend({ 'text-anchor': 'middle', 'font-size': 14 }, joint.util.getByPath(label, 'attrs/text', '/'));

            $text.attr(_.omit(textAttributes, 'text'));

            if (!_.isUndefined(textAttributes.text)) {

                V($text[0]).text(textAttributes.text + '');
            }

            // Note that we first need to append the `<text>` element to the DOM in order to
            // get its bounding box.
            $labels.append(labelNode);

            // `y-alignment` - center the text element around its y coordinate.
            var textBbox = V($text[0]).bbox(true, $labels[0]);
            V($text[0]).translate(0, -textBbox.height / 2);

            // Add default values.
            var rectAttributes = _.extend({

                fill: 'white',
                rx: 3,
                ry: 3

            }, joint.util.getByPath(label, 'attrs/rect', '/'));

            $rect.attr(_.extend(rectAttributes, {
                x: textBbox.x,
                y: textBbox.y - textBbox.height / 2,  // Take into account the y-alignment translation.
                width: textBbox.width,
                height: textBbox.height
            }));

        }, this);

        return this;
    },

    renderTools: function() {

        if (!this._V.linkTools) return this;

        // Tools are a group of clickable elements that manipulate the whole link.
        // A good example of this is the remove tool that removes the whole link.
        // Tools appear after hovering the link close to the `source` element/point of the link
        // but are offset a bit so that they don't cover the `marker-arrowhead`.

        var $tools = $(this._V.linkTools.node).empty();
        var toolTemplate = _.template(this.model.get('toolMarkup') || this.model.toolMarkup);
        var tool = V(toolTemplate());

        $tools.append(tool.node);

        // Cache the tool node so that the `updateToolsPosition()` can update the tool position quickly.
        this._toolCache = tool;

        // If `doubleLinkTools` is enabled, we render copy of the tools on the other side of the
        // link as well but only if the link is longer than `longLinkLength`.
        if (this.options.doubleLinkTools) {

            var tool2;
            if (this.model.get('doubleToolMarkup') || this.model.doubleToolMarkup) {
                toolTemplate = _.template(this.model.get('doubleToolMarkup') || this.model.doubleToolMarkup);
                tool2 = V(toolTemplate());
            } else {
                tool2 = tool.clone();
            }

            $tools.append(tool2.node);
            this._tool2Cache = tool2;
        }

        return this;
    },

    renderVertexMarkers: function() {

        if (!this._V.markerVertices) return this;

        var $markerVertices = $(this._V.markerVertices.node).empty();

        // A special markup can be given in the `properties.vertexMarkup` property. This might be handy
        // if default styling (elements) are not desired. This makes it possible to use any
        // SVG elements for .marker-vertex and .marker-vertex-remove tools.
        var markupTemplate = _.template(this.model.get('vertexMarkup') || this.model.vertexMarkup);

        _.each(this.model.get('vertices'), function(vertex, idx) {

            $markerVertices.append(V(markupTemplate(_.extend({ idx: idx }, vertex))).node);
        });

        return this;
    },

    renderArrowheadMarkers: function() {

        // Custom markups might not have arrowhead markers. Therefore, jump of this function immediately if that's the case.
        if (!this._V.markerArrowheads) return this;

        var $markerArrowheads = $(this._V.markerArrowheads.node);

        $markerArrowheads.empty();

        // A special markup can be given in the `properties.vertexMarkup` property. This might be handy
        // if default styling (elements) are not desired. This makes it possible to use any
        // SVG elements for .marker-vertex and .marker-vertex-remove tools.
        var markupTemplate = _.template(this.model.get('arrowheadMarkup') || this.model.arrowheadMarkup);

        this._V.sourceArrowhead = V(markupTemplate({ end: 'source' }));
        this._V.targetArrowhead = V(markupTemplate({ end: 'target' }));

        $markerArrowheads.append(this._V.sourceArrowhead.node, this._V.targetArrowhead.node);

        return this;
    },

    // Updating
    //---------

    // Default is to process the `attrs` object and set attributes on subelements based on the selectors.
    update: function() {

        // Update attributes.
        _.each(this.model.get('attrs'), function(attrs, selector) {

            var processedAttributes = [];

            // If the `fill` or `stroke` attribute is an object, it is in the special JointJS gradient format and so
            // it becomes a special attribute and is treated separately.
            if (_.isObject(attrs.fill)) {

                this.applyGradient(selector, 'fill', attrs.fill);
                processedAttributes.push('fill');
            }

            if (_.isObject(attrs.stroke)) {

                this.applyGradient(selector, 'stroke', attrs.stroke);
                processedAttributes.push('stroke');
            }

            // If the `filter` attribute is an object, it is in the special JointJS filter format and so
            // it becomes a special attribute and is treated separately.
            if (_.isObject(attrs.filter)) {

                this.applyFilter(selector, attrs.filter);
                processedAttributes.push('filter');
            }

            // remove processed special attributes from attrs
            if (processedAttributes.length > 0) {

                processedAttributes.unshift(attrs);
                attrs = _.omit.apply(_, processedAttributes);
            }

            this.findBySelector(selector).attr(attrs);

        }, this);

        // Path finding
        var vertices = this.route = this.findRoute(this.model.get('vertices') || []);

        // finds all the connection points taking new vertices into account
        this._findConnectionPoints(vertices);

        var pathData = this.getPathData(vertices);

        // The markup needs to contain a `.connection`
        this._V.connection.attr('d', pathData);
        this._V.connectionWrap && this._V.connectionWrap.attr('d', pathData);

        this._translateAndAutoOrientArrows(this._V.markerSource, this._V.markerTarget);

        //partials updates
        this.updateLabelPositions();
        this.updateToolsPosition();
        this.updateArrowheadMarkers();

        delete this.options.perpendicular;
        // Mark that postponed update has been already executed.
        this.updatePostponed = false;

        return this;
    },

    _findConnectionPoints: function(vertices) {

        // cache source and target points
        var sourcePoint, targetPoint, sourceMarkerPoint, targetMarkerPoint;

        var firstVertex = _.first(vertices);

        sourcePoint = this.getConnectionPoint(
            'source', this.model.get('source'), firstVertex || this.model.get('target')
        ).round();

        var lastVertex = _.last(vertices);

        targetPoint = this.getConnectionPoint(
            'target', this.model.get('target'), lastVertex || sourcePoint
        ).round();

        // Move the source point by the width of the marker taking into account
        // its scale around x-axis. Note that scale is the only transform that
        // makes sense to be set in `.marker-source` attributes object
        // as all other transforms (translate/rotate) will be replaced
        // by the `translateAndAutoOrient()` function.
        var cache = this._markerCache;

        if (this._V.markerSource) {

            cache.sourceBBox = cache.sourceBBox || this._V.markerSource.bbox(true);

            sourceMarkerPoint = g.point(sourcePoint).move(
                firstVertex || targetPoint,
                cache.sourceBBox.width * this._V.markerSource.scale().sx * -1
            ).round();
        }

        if (this._V.markerTarget) {

            cache.targetBBox = cache.targetBBox || this._V.markerTarget.bbox(true);

            targetMarkerPoint = g.point(targetPoint).move(
                lastVertex || sourcePoint,
                cache.targetBBox.width * this._V.markerTarget.scale().sx * -1
            ).round();
        }

        // if there was no markup for the marker, use the connection point.
        cache.sourcePoint = sourceMarkerPoint || sourcePoint;
        cache.targetPoint = targetMarkerPoint || targetPoint;

        // make connection points public
        this.sourcePoint = sourcePoint;
        this.targetPoint = targetPoint;
    },

    updateLabelPositions: function() {

        if (!this._V.labels) return this;

        // This method assumes all the label nodes are stored in the `this._labelCache` hash table
        // by their indexes in the `this.get('labels')` array. This is done in the `renderLabels()` method.

        var labels = this.model.get('labels') || [];
        if (!labels.length) return this;

        var connectionElement = this._V.connection.node;
        var connectionLength = connectionElement.getTotalLength();

        // Firefox returns connectionLength=NaN in odd cases (for bezier curves).
        // In that case we won't update labels at all.
        if (!_.isNaN(connectionLength)) {

            var samples;

            _.each(labels, function(label, idx) {

                var position = label.position;
                var distance = _.isObject(position) ? position.distance : position;
                var offset = _.isObject(position) ? position.offset : { x: 0, y: 0 };

                distance = (distance > connectionLength) ? connectionLength : distance; // sanity check
                distance = (distance < 0) ? connectionLength + distance : distance;
                distance = (distance > 1) ? distance : connectionLength * distance;

                var labelCoordinates = connectionElement.getPointAtLength(distance);

                if (_.isObject(offset)) {

                    // Just offset the label by the x,y provided in the offset object.
                    labelCoordinates = g.point(labelCoordinates).offset(offset.x, offset.y);

                } else if (_.isNumber(offset)) {

                    if (!samples) {
                        samples = this._samples || this._V.connection.sample(this.options.sampleInterval);
                    }

                    // Offset the label by the amount provided in `offset` to an either
                    // side of the link.

                    // 1. Find the closest sample & its left and right neighbours.
                    var minSqDistance = Infinity;
                    var closestSample;
                    var closestSampleIndex;
                    var p;
                    var sqDistance;
                    for (var i = 0, len = samples.length; i < len; i++) {
                        p = samples[i];
                        sqDistance = g.line(p, labelCoordinates).squaredLength();
                        if (sqDistance < minSqDistance) {
                            minSqDistance = sqDistance;
                            closestSample = p;
                            closestSampleIndex = i;
                        }
                    }
                    var prevSample = samples[closestSampleIndex - 1];
                    var nextSample = samples[closestSampleIndex + 1];

                    // 2. Offset the label on the perpendicular line between
                    // the current label coordinate ("at `distance`") and
                    // the next sample.
                    var angle = 0;
                    if (nextSample) {
                        angle = g.point(labelCoordinates).theta(nextSample);
                    } else if (prevSample) {
                        angle = g.point(prevSample).theta(labelCoordinates);
                    }
                    labelCoordinates = g.point(labelCoordinates).offset(offset).rotate(labelCoordinates, angle - 90);
                }

                this._labelCache[idx].attr('transform', 'translate(' + labelCoordinates.x + ', ' + labelCoordinates.y + ')');

            }, this);
        }

        return this;
    },


    updateToolsPosition: function() {

        if (!this._V.linkTools) return this;

        // Move the tools a bit to the target position but don't cover the `sourceArrowhead` marker.
        // Note that the offset is hardcoded here. The offset should be always
        // more than the `this.$('.marker-arrowhead[end="source"]')[0].bbox().width` but looking
        // this up all the time would be slow.

        var scale = '';
        var offset = this.options.linkToolsOffset;
        var connectionLength = this.getConnectionLength();

        // Firefox returns connectionLength=NaN in odd cases (for bezier curves).
        // In that case we won't update tools position at all.
        if (!_.isNaN(connectionLength)) {

            // If the link is too short, make the tools half the size and the offset twice as low.
            if (connectionLength < this.options.shortLinkLength) {
                scale = 'scale(.5)';
                offset /= 2;
            }

            var toolPosition = this.getPointAtLength(offset);

            this._toolCache.attr('transform', 'translate(' + toolPosition.x + ', ' + toolPosition.y + ') ' + scale);

            if (this.options.doubleLinkTools && connectionLength >= this.options.longLinkLength) {

                var doubleLinkToolsOffset = this.options.doubleLinkToolsOffset || offset;

                toolPosition = this.getPointAtLength(connectionLength - doubleLinkToolsOffset);
                this._tool2Cache.attr('transform', 'translate(' + toolPosition.x + ', ' + toolPosition.y + ') ' + scale);
                this._tool2Cache.attr('visibility', 'visible');

            } else if (this.options.doubleLinkTools) {

                this._tool2Cache.attr('visibility', 'hidden');
            }
        }

        return this;
    },


    updateArrowheadMarkers: function() {

        if (!this._V.markerArrowheads) return this;

        // getting bbox of an element with `display="none"` in IE9 ends up with access violation
        if ($.css(this._V.markerArrowheads.node, 'display') === 'none') return this;

        var sx = this.getConnectionLength() < this.options.shortLinkLength ? .5 : 1;
        this._V.sourceArrowhead.scale(sx);
        this._V.targetArrowhead.scale(sx);

        this._translateAndAutoOrientArrows(this._V.sourceArrowhead, this._V.targetArrowhead);

        return this;
    },

    // Returns a function observing changes on an end of the link. If a change happens and new end is a new model,
    // it stops listening on the previous one and starts listening to the new one.
    createWatcher: function(endType) {

        // create handler for specific end type (source|target).
        var onModelChange = _.partial(this.onEndModelChange, endType);

        function watchEndModel(link, end) {

            end = end || {};

            var endModel = null;
            var previousEnd = link.previous(endType) || {};

            if (previousEnd.id) {
                this.stopListening(this.paper.getModelById(previousEnd.id), 'change', onModelChange);
            }

            if (end.id) {
                // If the observed model changes, it caches a new bbox and do the link update.
                endModel = this.paper.getModelById(end.id);
                this.listenTo(endModel, 'change', onModelChange);
            }

            onModelChange.call(this, endModel, { cacheOnly: true });

            return this;
        }

        return watchEndModel;
    },

    onEndModelChange: function(endType, endModel, opt) {

        var doUpdate = !opt.cacheOnly;
        var end = this.model.get(endType) || {};

        if (endModel) {

            var selector = this.constructor.makeSelector(end);
            var oppositeEndType = endType == 'source' ? 'target' : 'source';
            var oppositeEnd = this.model.get(oppositeEndType) || {};
            var oppositeSelector = oppositeEnd.id && this.constructor.makeSelector(oppositeEnd);

            // Caching end models bounding boxes.
            // If `opt.handleBy` equals the client-side ID of this link view and it is a loop link, then we already cached
            // the bounding boxes in the previous turn (e.g. for loop link, the change:source event is followed
            // by change:target and so on change:source, we already chached the bounding boxes of - the same - element).
            if (opt.handleBy === this.cid && selector == oppositeSelector) {

                // Source and target elements are identical. We're dealing with a loop link. We are handling `change` event for the
                // second time now. There is no need to calculate bbox and find magnet element again.
                // It was calculated already for opposite link end.
                this[endType + 'BBox'] = this[oppositeEndType + 'BBox'];
                this[endType + 'View'] = this[oppositeEndType + 'View'];
                this[endType + 'Magnet'] = this[oppositeEndType + 'Magnet'];

            } else if (opt.translateBy) {
                // `opt.translateBy` optimizes the way we calculate bounding box of the source/target element.
                // If `opt.translateBy` is an ID of the element that was originally translated. This allows us
                // to just offset the cached bounding box by the translation instead of calculating the bounding
                // box from scratch on every translate.

                var bbox = this[endType + 'BBox'];
                bbox.x += opt.tx;
                bbox.y += opt.ty;

            } else {
                // The slowest path, source/target could have been rotated or resized or any attribute
                // that affects the bounding box of the view might have been changed.

                var view = this.paper.findViewByModel(end.id);
                var magnetElement = view.el.querySelector(selector);

                this[endType + 'BBox'] = view.getStrokeBBox(magnetElement);
                this[endType + 'View'] = view;
                this[endType + 'Magnet'] = magnetElement;
            }

            if (opt.handleBy === this.cid && opt.translateBy &&
                this.model.isEmbeddedIn(endModel) &&
                !_.isEmpty(this.model.get('vertices'))) {
                // Loop link whose element was translated and that has vertices (that need to be translated with
                // the parent in which my element is embedded).
                // If the link is embedded, has a loop and vertices and the end model
                // has been translated, do not update yet. There are vertices still to be updated (change:vertices
                // event will come in the next turn).
                doUpdate = false;
            }

            if (!this.updatePostponed && oppositeEnd.id) {
                // The update was not postponed (that can happen e.g. on the first change event) and the opposite
                // end is a model (opposite end is the opposite end of the link we're just updating, e.g. if
                // we're reacting on change:source event, the oppositeEnd is the target model).

                var oppositeEndModel = this.paper.getModelById(oppositeEnd.id);

                // Passing `handleBy` flag via event option.
                // Note that if we are listening to the same model for event 'change' twice.
                // The same event will be handled by this method also twice.
                if (end.id === oppositeEnd.id) {
                    // We're dealing with a loop link. Tell the handlers in the next turn that they should update
                    // the link instead of me. (We know for sure there will be a next turn because
                    // loop links react on at least two events: change on the source model followed by a change on
                    // the target model).
                    opt.handleBy = this.cid;
                }

                if (opt.handleBy === this.cid || (opt.translateBy && oppositeEndModel.isEmbeddedIn(opt.translateBy))) {

                    // Here are two options:
                    // - Source and target are connected to the same model (not necessarily the same port).
                    // - Both end models are translated by the same ancestor. We know that opposite end
                    //   model will be translated in the next turn as well.
                    // In both situations there will be more changes on the model that trigger an
                    // update. So there is no need to update the linkView yet.
                    this.updatePostponed = true;
                    doUpdate = false;
                }
            }

        } else {

            // the link end is a point ~ rect 1x1
            this[endType + 'BBox'] = g.rect(end.x || 0, end.y || 0, 1, 1);
            this[endType + 'View'] = this[endType + 'Magnet'] = null;
        }

        // keep track which end had been changed very last
        this.lastEndChange = endType;

        doUpdate && this.update();
    },

    _translateAndAutoOrientArrows: function(sourceArrow, targetArrow) {

        // Make the markers "point" to their sticky points being auto-oriented towards
        // `targetPosition`/`sourcePosition`. And do so only if there is a markup for them.
        if (sourceArrow) {
            sourceArrow.translateAndAutoOrient(
                this.sourcePoint,
                _.first(this.route) || this.targetPoint,
                this.paper.viewport
            );
        }

        if (targetArrow) {
            targetArrow.translateAndAutoOrient(
                this.targetPoint,
                _.last(this.route) || this.sourcePoint,
                this.paper.viewport
            );
        }
    },

    removeVertex: function(idx) {

        var vertices = _.clone(this.model.get('vertices'));

        if (vertices && vertices.length) {

            vertices.splice(idx, 1);
            this.model.set('vertices', vertices, { ui: true });
        }

        return this;
    },

    // This method ads a new vertex to the `vertices` array of `.connection`. This method
    // uses a heuristic to find the index at which the new `vertex` should be placed at assuming
    // the new vertex is somewhere on the path.
    addVertex: function(vertex) {

        // As it is very hard to find a correct index of the newly created vertex,
        // a little heuristics is taking place here.
        // The heuristics checks if length of the newly created
        // path is lot more than length of the old path. If this is the case,
        // new vertex was probably put into a wrong index.
        // Try to put it into another index and repeat the heuristics again.

        var vertices = (this.model.get('vertices') || []).slice();
        // Store the original vertices for a later revert if needed.
        var originalVertices = vertices.slice();

        // A `<path>` element used to compute the length of the path during heuristics.
        var path = this._V.connection.node.cloneNode(false);

        // Length of the original path.
        var originalPathLength = path.getTotalLength();
        // Current path length.
        var pathLength;
        // Tolerance determines the highest possible difference between the length
        // of the old and new path. The number has been chosen heuristically.
        var pathLengthTolerance = 20;
        // Total number of vertices including source and target points.
        var idx = vertices.length + 1;

        // Loop through all possible indexes and check if the difference between
        // path lengths changes significantly. If not, the found index is
        // most probably the right one.
        while (idx--) {

            vertices.splice(idx, 0, vertex);
            V(path).attr('d', this.getPathData(this.findRoute(vertices)));

            pathLength = path.getTotalLength();

            // Check if the path lengths changed significantly.
            if (pathLength - originalPathLength > pathLengthTolerance) {

                // Revert vertices to the original array. The path length has changed too much
                // so that the index was not found yet.
                vertices = originalVertices.slice();

            } else {

                break;
            }
        }

        if (idx === -1) {
            // If no suitable index was found for such a vertex, make the vertex the first one.
            idx = 0;
            vertices.splice(idx, 0, vertex);
        }

        this.model.set('vertices', vertices, { ui: true });

        return idx;
    },

    // Send a token (an SVG element, usually a circle) along the connection path.
    // Example: `paper.findViewByModel(link).sendToken(V('circle', { r: 7, fill: 'green' }).node)`
    // `duration` is optional and is a time in milliseconds that the token travels from the source to the target of the link. Default is `1000`.
    // `callback` is optional and is a function to be called once the token reaches the target.
    sendToken: function(token, duration, callback) {

        duration = duration || 1000;

        V(this.paper.viewport).append(token);
        V(token).animateAlongPath({ dur: duration + 'ms', repeatCount: 1 }, this._V.connection.node);
        _.delay(function() { V(token).remove(); callback && callback(); }, duration);
    },

    findRoute: function(oldVertices) {

        var namespace = joint.routers;
        var router = this.model.get('router');
        var defaultRouter = this.paper.options.defaultRouter;

        if (!router) {

            if (this.model.get('manhattan')) {
                // backwards compability
                router = { name: 'orthogonal' };
            } else if (defaultRouter) {
                router = defaultRouter;
            } else {
                return oldVertices;
            }
        }

        var args = router.args || {};
        var routerFn = _.isFunction(router) ? router : namespace[router.name];

        if (!_.isFunction(routerFn)) {
            throw 'unknown router: ' + router.name;
        }

        var newVertices = routerFn.call(this, oldVertices || [], args, this);

        return newVertices;
    },

    // Return the `d` attribute value of the `<path>` element representing the link
    // between `source` and `target`.
    getPathData: function(vertices) {

        var namespace = joint.connectors;
        var connector = this.model.get('connector');
        var defaultConnector = this.paper.options.defaultConnector;

        if (!connector) {

            // backwards compability
            if (this.model.get('smooth')) {
                connector = { name: 'smooth' };
            } else {
                connector = defaultConnector || { name: 'normal' };
            }
        }

        var connectorFn = _.isFunction(connector) ? connector : namespace[connector.name];
        var args = connector.args || {};

        if (!_.isFunction(connectorFn)) {
            throw 'unknown connector: ' + connector.name;
        }

        var pathData = connectorFn.call(
            this,
            this._markerCache.sourcePoint, // Note that the value is translated by the size
            this._markerCache.targetPoint, // of the marker. (We'r not using this.sourcePoint)
            vertices || (this.model.get('vertices') || {}),
            args, // options
            this
        );

        return pathData;
    },

    // Find a point that is the start of the connection.
    // If `selectorOrPoint` is a point, then we're done and that point is the start of the connection.
    // If the `selectorOrPoint` is an element however, we need to know a reference point (or element)
    // that the link leads to in order to determine the start of the connection on the original element.
    getConnectionPoint: function(end, selectorOrPoint, referenceSelectorOrPoint) {

        var spot;

        // If the `selectorOrPoint` (or `referenceSelectorOrPoint`) is `undefined`, the `source`/`target` of the link model is `undefined`.
        // We want to allow this however so that one can create links such as `var link = new joint.dia.Link` and
        // set the `source`/`target` later.
        _.isEmpty(selectorOrPoint) && (selectorOrPoint = { x: 0, y: 0 });
        _.isEmpty(referenceSelectorOrPoint) && (referenceSelectorOrPoint = { x: 0, y: 0 });

        if (!selectorOrPoint.id) {

            // If the source is a point, we don't need a reference point to find the sticky point of connection.
            spot = g.point(selectorOrPoint);

        } else {

            // If the source is an element, we need to find a point on the element boundary that is closest
            // to the reference point (or reference element).
            // Get the bounding box of the spot relative to the paper viewport. This is necessary
            // in order to follow paper viewport transformations (scale/rotate).
            // `_sourceBbox` (`_targetBbox`) comes from `_sourceBboxUpdate` (`_sourceBboxUpdate`)
            // method, it exists since first render and are automatically updated
            var spotBbox = end === 'source' ? this.sourceBBox : this.targetBBox;

            var reference;

            if (!referenceSelectorOrPoint.id) {

                // Reference was passed as a point, therefore, we're ready to find the sticky point of connection on the source element.
                reference = g.point(referenceSelectorOrPoint);

            } else {

                // Reference was passed as an element, therefore we need to find a point on the reference
                // element boundary closest to the source element.
                // Get the bounding box of the spot relative to the paper viewport. This is necessary
                // in order to follow paper viewport transformations (scale/rotate).
                var referenceBbox = end === 'source' ? this.targetBBox : this.sourceBBox;

                reference = g.rect(referenceBbox).intersectionWithLineFromCenterToPoint(g.rect(spotBbox).center());
                reference = reference || g.rect(referenceBbox).center();
            }

            // If `perpendicularLinks` flag is set on the paper and there are vertices
            // on the link, then try to find a connection point that makes the link perpendicular
            // even though the link won't point to the center of the targeted object.
            if (this.paper.options.perpendicularLinks || this.options.perpendicular) {

                var horizontalLineRect = g.rect(0, reference.y, this.paper.options.width, 1);
                var verticalLineRect = g.rect(reference.x, 0, 1, this.paper.options.height);
                var nearestSide;

                if (horizontalLineRect.intersect(g.rect(spotBbox))) {

                    nearestSide = g.rect(spotBbox).sideNearestToPoint(reference);
                    switch (nearestSide) {
                        case 'left':
                            spot = g.point(spotBbox.x, reference.y);
                            break;
                        case 'right':
                            spot = g.point(spotBbox.x + spotBbox.width, reference.y);
                            break;
                        default:
                            spot = g.rect(spotBbox).center();
                            break;
                    }

                } else if (verticalLineRect.intersect(g.rect(spotBbox))) {

                    nearestSide = g.rect(spotBbox).sideNearestToPoint(reference);
                    switch (nearestSide) {
                        case 'top':
                            spot = g.point(reference.x, spotBbox.y);
                            break;
                        case 'bottom':
                            spot = g.point(reference.x, spotBbox.y + spotBbox.height);
                            break;
                        default:
                            spot = g.rect(spotBbox).center();
                            break;
                    }

                } else {

                    // If there is no intersection horizontally or vertically with the object bounding box,
                    // then we fall back to the regular situation finding straight line (not perpendicular)
                    // between the object and the reference point.

                    spot = g.rect(spotBbox).intersectionWithLineFromCenterToPoint(reference);
                    spot = spot || g.rect(spotBbox).center();
                }

            } else if (this.paper.options.linkConnectionPoint) {

                var view = end === 'target' ? this.targetView : this.sourceView;
                var magnet = end === 'target' ? this.targetMagnet : this.sourceMagnet;

                spot = this.paper.options.linkConnectionPoint(this, view, magnet, reference);

            } else {

                spot = g.rect(spotBbox).intersectionWithLineFromCenterToPoint(reference);
                spot = spot || g.rect(spotBbox).center();
            }
        }

        return spot;
    },

    // Public API
    // ----------

    getConnectionLength: function() {

        return this._V.connection.node.getTotalLength();
    },

    getPointAtLength: function(length) {

        return this._V.connection.node.getPointAtLength(length);
    },

    // Interaction. The controller part.
    // ---------------------------------

    _beforeArrowheadMove: function() {

        this._z = this.model.get('z');
        this.model.toFront();

        // Let the pointer propagate throught the link view elements so that
        // the `evt.target` is another element under the pointer, not the link itself.
        this.el.style.pointerEvents = 'none';

        if (this.paper.options.markAvailable) {
            this._markAvailableMagnets();
        }
    },

    _afterArrowheadMove: function() {

        if (!_.isUndefined(this._z)) {
            this.model.set('z', this._z, { ui: true });
            delete this._z;
        }

        // Put `pointer-events` back to its original value. See `startArrowheadMove()` for explanation.
        // Value `auto` doesn't work in IE9. We force to use `visiblePainted` instead.
        // See `https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events`.
        this.el.style.pointerEvents = 'visiblePainted';

        if (this.paper.options.markAvailable) {
            this._unmarkAvailableMagnets();
        }
    },

    _createValidateConnectionArgs: function(arrowhead) {
        // It makes sure the arguments for validateConnection have the following form:
        // (source view, source magnet, target view, target magnet and link view)
        var args = [];

        args[4] = arrowhead;
        args[5] = this;

        var oppositeArrowhead;
        var i = 0;
        var j = 0;

        if (arrowhead === 'source') {
            i = 2;
            oppositeArrowhead = 'target';
        } else {
            j = 2;
            oppositeArrowhead = 'source';
        }

        var end = this.model.get(oppositeArrowhead);

        if (end.id) {
            args[i] = this.paper.findViewByModel(end.id);
            args[i + 1] = end.selector && args[i].el.querySelector(end.selector);
        }

        function validateConnectionArgs(cellView, magnet) {
            args[j] = cellView;
            args[j + 1] = cellView.el === magnet ? undefined : magnet;
            return args;
        }

        return validateConnectionArgs;
    },

    _markAvailableMagnets: function() {

        var elements = this.paper.model.getElements();
        var validate = this.paper.options.validateConnection;

        _.chain(elements).map(this.paper.findViewByModel, this.paper).each(function(view) {

            var isElementAvailable = view.el.getAttribute('magnet') !== 'false' &&
                validate.apply(this.paper, this._validateConnectionArgs(view, null));

            var availableMagnets = _.filter(view.el.querySelectorAll('[magnet]'), function(magnet) {
                return validate.apply(this.paper, this._validateConnectionArgs(view, magnet));
            }, this);

            if (isElementAvailable) {
                V(view.el).addClass('available-magnet');
            }

            _.each(availableMagnets, function(magnet) {
                V(magnet).addClass('available-magnet');
            });

            if (isElementAvailable || availableMagnets.length) {
                V(view.el).addClass('available-cell');
            }

        }, this).value();
    },

    _unmarkAvailableMagnets: function() {

        _.each(this.paper.el.querySelectorAll('.available-cell, .available-magnet'), function(magnet) {
            V(magnet).removeClass('available-magnet').removeClass('available-cell');
        });
    },

    startArrowheadMove: function(end) {
        // Allow to delegate events from an another view to this linkView in order to trigger arrowhead
        // move without need to click on the actual arrowhead dom element.
        this._action = 'arrowhead-move';
        this._arrowhead = end;
        this._initialEnd = _.clone(this.model.get(end)) || { x: 0, y: 0 };
        this._validateConnectionArgs = this._createValidateConnectionArgs(this._arrowhead);
        this._beforeArrowheadMove();
    },

    // Return `true` if the link is allowed to perform a certain UI `feature`.
    // Example: `can('vertexMove')`, `can('labelMove')`.
    can: function(feature) {

        var interactive = _.isFunction(this.options.interactive) ? this.options.interactive(this, 'pointerdown') : this.options.interactive;
        if (!_.isObject(interactive) || interactive[feature] !== false) return true;
        return false;
    },

    pointerdown: function(evt, x, y) {

        joint.dia.CellView.prototype.pointerdown.apply(this, arguments);
        this.notify('link:pointerdown', evt, x, y);

        this._dx = x;
        this._dy = y;

        // if are simulating pointerdown on a link during a magnet click, skip link interactions
        if (evt.target.getAttribute('magnet') != null) return;

        var interactive = _.isFunction(this.options.interactive) ? this.options.interactive(this, 'pointerdown') : this.options.interactive;
        if (interactive === false) return;

        var className = evt.target.getAttribute('class');
        var parentClassName = evt.target.parentNode.getAttribute('class');
        var labelNode;
        if (parentClassName === 'label') {
            className = parentClassName;
            labelNode = evt.target.parentNode;
        } else {
            labelNode = evt.target;
        }

        switch (className) {

            case 'marker-vertex':
                if (this.can('vertexMove')) {
                    this._action = 'vertex-move';
                    this._vertexIdx = evt.target.getAttribute('idx');
                }
                break;

            case 'marker-vertex-remove':
            case 'marker-vertex-remove-area':
                if (this.can('vertexRemove')) {
                    this.removeVertex(evt.target.getAttribute('idx'));
                }
                break;

            case 'marker-arrowhead':
                if (this.can('arrowheadMove')) {
                    this.startArrowheadMove(evt.target.getAttribute('end'));
                }
                break;

            case 'label':
                if (this.can('labelMove')) {
                    this._action = 'label-move';
                    this._labelIdx = parseInt(V(labelNode).attr('label-idx'), 10);
                    // Precalculate samples so that we don't have to do that
                    // over and over again while dragging the label.
                    this._samples = this._V.connection.sample(1);
                    this._linkLength = this._V.connection.node.getTotalLength();
                }
                break;

            default:

                var targetParentEvent = evt.target.parentNode.getAttribute('event');
                if (targetParentEvent) {

                    // `remove` event is built-in. Other custom events are triggered on the paper.
                    if (targetParentEvent === 'remove') {
                        this.model.remove();
                    } else {
                        this.paper.trigger(targetParentEvent, evt, this, x, y);
                    }

                } else {
                    if (this.can('vertexAdd')) {

                        // Store the index at which the new vertex has just been placed.
                        // We'll be update the very same vertex position in `pointermove()`.
                        this._vertexIdx = this.addVertex({ x: x, y: y });
                        this._action = 'vertex-move';
                    }
                }
        }
    },

    pointermove: function(evt, x, y) {

        switch (this._action) {

        case 'vertex-move':

            var vertices = _.clone(this.model.get('vertices'));
            vertices[this._vertexIdx] = { x: x, y: y };
            this.model.set('vertices', vertices, { ui: true });
            break;

        case 'label-move':

            var dragPoint = { x: x, y: y };
            var label = this.model.get('labels')[this._labelIdx];
            var samples = this._samples;
            var minSqDistance = Infinity;
            var closestSample;
            var closestSampleIndex;
            var p;
            var sqDistance;
            for (var i = 0, len = samples.length; i < len; i++) {
                p = samples[i];
                sqDistance = g.line(p, dragPoint).squaredLength();
                if (sqDistance < minSqDistance) {
                    minSqDistance = sqDistance;
                    closestSample = p;
                    closestSampleIndex = i;
                }
            }
            var prevSample = samples[closestSampleIndex - 1];
            var nextSample = samples[closestSampleIndex + 1];

            var closestSampleDistance = g.point(closestSample).distance(dragPoint);
            var offset = 0;
            if (prevSample && nextSample) {
                offset = g.line(prevSample, nextSample).pointOffset(dragPoint);
            } else if (prevSample) {
                offset = g.line(prevSample, closestSample).pointOffset(dragPoint);
            } else if (nextSample) {
                offset = g.line(closestSample, nextSample).pointOffset(dragPoint);
            }

            this.model.label(this._labelIdx, {
                position: {
                    distance: closestSample.distance / this._linkLength,
                    offset: offset
                }
            });
            break;

        case 'arrowhead-move':

            if (this.paper.options.snapLinks) {

                // checking view in close area of the pointer

                var r = this.paper.options.snapLinks.radius || 50;
                var viewsInArea = this.paper.findViewsInArea({ x: x - r, y: y - r, width: 2 * r, height: 2 * r });

                this._closestView && this._closestView.unhighlight(this._closestEnd.selector, { connecting: true, snapping: true });
                this._closestView = this._closestEnd = null;

                var distance;
                var minDistance = Number.MAX_VALUE;
                var pointer = g.point(x, y);

                _.each(viewsInArea, function(view) {

                    // skip connecting to the element in case '.': { magnet: false } attribute present
                    if (view.el.getAttribute('magnet') !== 'false') {

                        // find distance from the center of the model to pointer coordinates
                        distance = view.model.getBBox().center().distance(pointer);

                        // the connection is looked up in a circle area by `distance < r`
                        if (distance < r && distance < minDistance) {

                            if (this.paper.options.validateConnection.apply(
                                this.paper, this._validateConnectionArgs(view, null)
                            )) {
                                minDistance = distance;
                                this._closestView = view;
                                this._closestEnd = { id: view.model.id };
                            }
                        }
                    }

                    view.$('[magnet]').each(_.bind(function(index, magnet) {

                        var bbox = V(magnet).bbox(false, this.paper.viewport);

                        distance = pointer.distance({
                            x: bbox.x + bbox.width / 2,
                            y: bbox.y + bbox.height / 2
                        });

                        if (distance < r && distance < minDistance) {

                            if (this.paper.options.validateConnection.apply(
                                this.paper, this._validateConnectionArgs(view, magnet)
                            )) {
                                minDistance = distance;
                                this._closestView = view;
                                this._closestEnd = {
                                    id: view.model.id,
                                    selector: view.getSelector(magnet),
                                    port: magnet.getAttribute('port')
                                };
                            }
                        }

                    }, this));

                }, this);

                this._closestView && this._closestView.highlight(this._closestEnd.selector, { connecting: true, snapping: true });

                this.model.set(this._arrowhead, this._closestEnd || { x: x, y: y }, { ui: true });

            } else {

                // checking views right under the pointer

                // Touchmove event's target is not reflecting the element under the coordinates as mousemove does.
                // It holds the element when a touchstart triggered.
                var target = (evt.type === 'mousemove')
                    ? evt.target
                    : document.elementFromPoint(evt.clientX, evt.clientY);

                if (this._targetEvent !== target) {
                    // Unhighlight the previous view under pointer if there was one.
                    this._magnetUnderPointer && this._viewUnderPointer.unhighlight(this._magnetUnderPointer, { connecting: true });
                    this._viewUnderPointer = this.paper.findView(target);
                    if (this._viewUnderPointer) {
                        // If we found a view that is under the pointer, we need to find the closest
                        // magnet based on the real target element of the event.
                        this._magnetUnderPointer = this._viewUnderPointer.findMagnet(target);

                        if (this._magnetUnderPointer && this.paper.options.validateConnection.apply(
                            this.paper,
                            this._validateConnectionArgs(this._viewUnderPointer, this._magnetUnderPointer)
                        )) {
                            // If there was no magnet found, do not highlight anything and assume there
                            // is no view under pointer we're interested in reconnecting to.
                            // This can only happen if the overall element has the attribute `'.': { magnet: false }`.
                            this._magnetUnderPointer && this._viewUnderPointer.highlight(this._magnetUnderPointer, { connecting: true });
                        } else {
                            // This type of connection is not valid. Disregard this magnet.
                            this._magnetUnderPointer = null;
                        }
                    } else {
                        // Make sure we'll delete previous magnet
                        this._magnetUnderPointer = null;
                    }
                }

                this._targetEvent = target;

                this.model.set(this._arrowhead, { x: x, y: y }, { ui: true });
            }

            break;
        }

        this._dx = x;
        this._dy = y;

        joint.dia.CellView.prototype.pointermove.apply(this, arguments);
        this.notify('link:pointermove', evt, x, y);
    },

    pointerup: function(evt, x, y) {

        if (this._action === 'label-move') {

            this._samples = null;

        } else if (this._action === 'arrowhead-move') {

            var paperOptions = this.paper.options;
            var arrowhead = this._arrowhead;

            if (paperOptions.snapLinks) {

                // Finish off link snapping. Everything except view unhighlighting was already done on pointermove.
                this._closestView && this._closestView.unhighlight(this._closestEnd.selector, { connecting: true, snapping: true });
                this._closestView = this._closestEnd = null;

            } else {

                var viewUnderPointer = this._viewUnderPointer;
                var magnetUnderPointer = this._magnetUnderPointer;

                delete this._viewUnderPointer;
                delete this._magnetUnderPointer;

                if (magnetUnderPointer) {

                    viewUnderPointer.unhighlight(magnetUnderPointer, { connecting: true });
                    // Find a unique `selector` of the element under pointer that is a magnet. If the
                    // `this._magnetUnderPointer` is the root element of the `this._viewUnderPointer` itself,
                    // the returned `selector` will be `undefined`. That means we can directly pass it to the
                    // `source`/`target` attribute of the link model below.
                    var selector = viewUnderPointer.getSelector(magnetUnderPointer);
                    var port = magnetUnderPointer.getAttribute('port');
                    var arrowheadValue = { id: viewUnderPointer.model.id };
                    if (selector != null) arrowheadValue.port = port;
                    if (port != null) arrowheadValue.selector = selector;
                    this.model.set(arrowhead, arrowheadValue, { ui: true });
                }
            }

            // If the link pinning is not allowed and the link is not connected to an element
            // reset the arrowhead to the position before the dragging started.
            if (!paperOptions.linkPinning && !_.has(this.model.get(arrowhead), 'id')) {
                this.model.set(arrowhead, this._initialEnd, { ui: true });
            }

            // Reparent the link if embedding is enabled
            if (paperOptions.embeddingMode && this.model.reparent()) {
                // Make sure we don't reverse to the original 'z' index (see afterArrowheadMove()).
                delete this._z;
            }

            this._afterArrowheadMove();
        }

        delete this._action;

        this.notify('link:pointerup', evt, x, y);
        joint.dia.CellView.prototype.pointerup.apply(this, arguments);
    }

}, {

    makeSelector: function(end) {

        var selector = '[model-id="' + end.id + '"]';
        // `port` has a higher precendence over `selector`. This is because the selector to the magnet
        // might change while the name of the port can stay the same.
        if (end.port) {
            selector += ' [port="' + end.port + '"]';
        } else if (end.selector) {
            selector += ' ' + end.selector;
        }

        return selector;
    }

});

//      JointJS library.
//      (c) 2011-2013 client IO


joint.dia.Paper = Backbone.View.extend({

    className: 'paper',

    options: {

        width: 800,
        height: 600,
        origin: { x: 0, y: 0 }, // x,y coordinates in top-left corner
        gridSize: 1,
        perpendicularLinks: false,
        elementView: joint.dia.ElementView,
        linkView: joint.dia.LinkView,
        snapLinks: false, // false, true, { radius: value }

        // Restrict the translation of elements by given bounding box.
        // Option accepts a boolean:
        //  true - the translation is restricted to the paper area
        //  false - no restrictions
        // A method:
        // restrictTranslate: function(elementView) {
        //     var parentId = elementView.model.get('parent');
        //     return parentId && this.model.getCell(parentId).getBBox();
        // },
        // Or a bounding box:
        // restrictTranslate: { x: 10, y: 10, width: 790, height: 590 }
        restrictTranslate: false,
        // Marks all available magnets with 'available-magnet' class name and all available cells with
        // 'available-cell' class name. Marks them when dragging a link is started and unmark
        // when the dragging is stopped.
        markAvailable: false,

        // Defines what link model is added to the graph after an user clicks on an active magnet.
        // Value could be the Backbone.model or a function returning the Backbone.model
        // defaultLink: function(elementView, magnet) { return condition ? new customLink1() : new customLink2() }
        defaultLink: new joint.dia.Link,

        // A connector that is used by links with no connector defined on the model.
        // e.g. { name: 'rounded', args: { radius: 5 }} or a function
        defaultConnector: { name: 'normal' },

        // A router that is used by links with no router defined on the model.
        // e.g. { name: 'oneSide', args: { padding: 10 }} or a function
        defaultRouter: null,

        /* CONNECTING */

        // Check whether to add a new link to the graph when user clicks on an a magnet.
        validateMagnet: function(cellView, magnet) {
            return magnet.getAttribute('magnet') !== 'passive';
        },

        // Check whether to allow or disallow the link connection while an arrowhead end (source/target)
        // being changed.
        validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
            return (end === 'target' ? cellViewT : cellViewS) instanceof joint.dia.ElementView;
        },

        /* EMBEDDING */

        // Enables embedding. Reparents the dragged element with elements under it and makes sure that
        // all links and elements are visible taken the level of embedding into account.
        embeddingMode: false,

        // Check whether to allow or disallow the element embedding while an element being translated.
        validateEmbedding: function(childView, parentView) {
            // by default all elements can be in relation child-parent
            return true;
        },

        // Determines the way how a cell finds a suitable parent when it's dragged over the paper.
        // The cell with the highest z-index (visually on the top) will be choosen.
        findParentBy: 'bbox', // 'bbox'|'center'|'origin'|'corner'|'topRight'|'bottomLeft'

        // If enabled only the element on the very front is taken into account for the embedding.
        // If disabled the elements under the dragged view are tested one by one
        // (from front to back) until a valid parent found.
        frontParentOnly: true,

        // Interactive flags. See online docs for the complete list of interactive flags.
        interactive: {
            labelMove: false
        },

        // When set to true the links can be pinned to the paper.
        // i.e. link source/target can be a point e.g. link.get('source') ==> { x: 100, y: 100 };
        linkPinning: true,

        // Allowed number of mousemove events after which the pointerclick event will be still triggered.
        clickThreshold: 0,

        // The namespace, where all the cell views are defined.
        cellViewNamespace: joint.shapes
    },

    events: {

        'mousedown': 'pointerdown',
        'dblclick': 'mousedblclick',
        'click': 'mouseclick',
        'touchstart': 'pointerdown',
        'mousemove': 'pointermove',
        'touchmove': 'pointermove',
        'mouseover .element': 'cellMouseover',
        'mouseover .link': 'cellMouseover',
        'mouseout .element': 'cellMouseout',
        'mouseout .link': 'cellMouseout',
        'contextmenu': 'contextmenu'
    },

    constructor: function(options) {

        this._configure(options);
        Backbone.View.apply(this, arguments);
    },

    _configure: function(options) {

        if (this.options) options = _.merge({}, _.result(this, 'options'), options);
        this.options = options;
    },

    initialize: function() {

        _.bindAll(this, 'pointerup');

        this.svg = V('svg').node;
        this.viewport = V('g').addClass('viewport').node;
        this.defs = V('defs').node;

        // Append `<defs>` element to the SVG document. This is useful for filters and gradients.
        V(this.svg).append([this.viewport, this.defs]);

        this.$el.append(this.svg);

        this.setOrigin();
        this.setDimensions();

        this.listenTo(this.model, 'add', this.onCellAdded);
        this.listenTo(this.model, 'remove', this.removeView);
        this.listenTo(this.model, 'reset', this.resetViews);
        this.listenTo(this.model, 'sort', this.sortViews);

        $(document).on('mouseup touchend', this.pointerup);

        // Hold the value when mouse has been moved: when mouse moved, no click event will be triggered.
        this._mousemoved = 0;
        // Hash of all cell views.
        this._views = {};

        // default cell highlighting
        this.on({ 'cell:highlight': this.onCellHighlight, 'cell:unhighlight': this.onCellUnhighlight });
    },

    remove: function() {

        //clean up all DOM elements/views to prevent memory leaks
        this.removeViews();

        $(document).off('mouseup touchend', this.pointerup);

        Backbone.View.prototype.remove.call(this);
    },

    setDimensions: function(width, height) {

        width = this.options.width = width || this.options.width;
        height = this.options.height = height || this.options.height;

        V(this.svg).attr({ width: width, height: height });

        this.trigger('resize', width, height);
    },

    setOrigin: function(ox, oy) {

        this.options.origin.x = ox || 0;
        this.options.origin.y = oy || 0;

        V(this.viewport).translate(ox, oy, { absolute: true });

        this.trigger('translate', ox, oy);
    },

    // Expand/shrink the paper to fit the content. Snap the width/height to the grid
    // defined in `gridWidth`, `gridHeight`. `padding` adds to the resulting width/height of the paper.
    // When options { fitNegative: true } it also translates the viewport in order to make all
    // the content visible.
    fitToContent: function(gridWidth, gridHeight, padding, opt) { // alternatively function(opt)

        if (_.isObject(gridWidth)) {
            // first parameter is an option object
            opt = gridWidth;
            gridWidth = opt.gridWidth || 1;
            gridHeight = opt.gridHeight || 1;
            padding = opt.padding || 0;

        } else {

            opt = opt || {};
            gridWidth = gridWidth || 1;
            gridHeight = gridHeight || 1;
            padding = padding || 0;
        }

        padding = joint.util.normalizeSides(padding);

        // Calculate the paper size to accomodate all the graph's elements.
        var bbox = V(this.viewport).bbox(true, this.svg);

        var currentScale = V(this.viewport).scale();

        bbox.x *= currentScale.sx;
        bbox.y *= currentScale.sy;
        bbox.width *= currentScale.sx;
        bbox.height *= currentScale.sy;

        var calcWidth = Math.max(Math.ceil((bbox.width + bbox.x) / gridWidth), 1) * gridWidth;
        var calcHeight = Math.max(Math.ceil((bbox.height + bbox.y) / gridHeight), 1) * gridHeight;

        var tx = 0;
        var ty = 0;

        if ((opt.allowNewOrigin == 'negative' && bbox.x < 0) || (opt.allowNewOrigin == 'positive' && bbox.x >= 0) || opt.allowNewOrigin == 'any') {
            tx = Math.ceil(-bbox.x / gridWidth) * gridWidth;
            tx += padding.left;
            calcWidth += tx;
        }

        if ((opt.allowNewOrigin == 'negative' && bbox.y < 0) || (opt.allowNewOrigin == 'positive' && bbox.y >= 0) || opt.allowNewOrigin == 'any') {
            ty = Math.ceil(-bbox.y / gridHeight) * gridHeight;
            ty += padding.top;
            calcHeight += ty;
        }

        calcWidth += padding.right;
        calcHeight += padding.bottom;

        // Make sure the resulting width and height are greater than minimum.
        calcWidth = Math.max(calcWidth, opt.minWidth || 0);
        calcHeight = Math.max(calcHeight, opt.minHeight || 0);

        // Make sure the resulting width and height are lesser than maximum.
        calcWidth = Math.min(calcWidth, opt.maxWidth || Number.MAX_VALUE);
        calcHeight = Math.min(calcHeight, opt.maxHeight || Number.MAX_VALUE);

        var dimensionChange = calcWidth != this.options.width || calcHeight != this.options.height;
        var originChange = tx != this.options.origin.x || ty != this.options.origin.y;

        // Change the dimensions only if there is a size discrepency or an origin change
        if (originChange) {
            this.setOrigin(tx, ty);
        }
        if (dimensionChange) {
            this.setDimensions(calcWidth, calcHeight);
        }
    },

    scaleContentToFit: function(opt) {

        var contentBBox = this.getContentBBox();

        if (!contentBBox.width || !contentBBox.height) return;

        opt = opt || {};

        _.defaults(opt, {
            padding: 0,
            preserveAspectRatio: true,
            scaleGrid: null,
            minScale: 0,
            maxScale: Number.MAX_VALUE
            //minScaleX
            //minScaleY
            //maxScaleX
            //maxScaleY
            //fittingBBox
        });

        var padding = opt.padding;

        var minScaleX = opt.minScaleX || opt.minScale;
        var maxScaleX = opt.maxScaleX || opt.maxScale;
        var minScaleY = opt.minScaleY || opt.minScale;
        var maxScaleY = opt.maxScaleY || opt.maxScale;

        var fittingBBox = opt.fittingBBox || ({
            x: this.options.origin.x,
            y: this.options.origin.y,
            width: this.options.width,
            height: this.options.height
        });

        fittingBBox = g.rect(fittingBBox).moveAndExpand({
            x: padding,
            y: padding,
            width: -2 * padding,
            height: -2 * padding
        });

        var currentScale = V(this.viewport).scale();

        var newSx = fittingBBox.width / contentBBox.width * currentScale.sx;
        var newSy = fittingBBox.height / contentBBox.height * currentScale.sy;

        if (opt.preserveAspectRatio) {
            newSx = newSy = Math.min(newSx, newSy);
        }

        // snap scale to a grid
        if (opt.scaleGrid) {

            var gridSize = opt.scaleGrid;

            newSx = gridSize * Math.floor(newSx / gridSize);
            newSy = gridSize * Math.floor(newSy / gridSize);
        }

        // scale min/max boundaries
        newSx = Math.min(maxScaleX, Math.max(minScaleX, newSx));
        newSy = Math.min(maxScaleY, Math.max(minScaleY, newSy));

        this.scale(newSx, newSy);

        var contentTranslation = this.getContentBBox();

        var newOx = fittingBBox.x - contentTranslation.x;
        var newOy = fittingBBox.y - contentTranslation.y;

        this.setOrigin(newOx, newOy);
    },

    getContentBBox: function() {

        var crect = this.viewport.getBoundingClientRect();

        // Using Screen CTM was the only way to get the real viewport bounding box working in both
        // Google Chrome and Firefox.
        var screenCTM = this.viewport.getScreenCTM();

        // for non-default origin we need to take the viewport translation into account
        var viewportCTM = this.viewport.getCTM();

        var bbox = g.rect({
            x: crect.left - screenCTM.e + viewportCTM.e,
            y: crect.top - screenCTM.f + viewportCTM.f,
            width: crect.width,
            height: crect.height
        });

        return bbox;
    },

    // Returns a geometry rectangle represeting the entire
    // paper area (coordinates from the left paper border to the right one
    // and the top border to the bottom one).
    getArea: function() {

        var transformationMatrix = this.viewport.getCTM().inverse();
        var noTransformationBBox = { x: 0, y: 0, width: this.options.width, height: this.options.height };

        return g.rect(V.transformRect(noTransformationBBox, transformationMatrix));
    },

    getRestrictedArea: function() {

        var restrictedArea;

        if (_.isFunction(this.options.restrictTranslate)) {
            // A method returning a bounding box
            restrictedArea = this.options.restrictTranslate.aply(this, arguments);
        } else if (this.options.restrictTranslate === true) {
            // The paper area
            restrictedArea = this.getArea();
        } else {
            // Either false or a bounding box
            restrictedArea = this.options.restrictTranslate || null;
        }

        return restrictedArea;
    },

    createViewForModel: function(cell) {

        // A class taken from the paper options.
        var optionalViewClass;

        // A default basic class (either dia.ElementView or dia.LinkView)
        var defaultViewClass;

        // A special class defined for this model in the corresponding namespace.
        // e.g. joint.shapes.basic.Rect searches for joint.shapes.basic.RectView
        var namespace = this.options.cellViewNamespace;
        var type = cell.get('type') + 'View';
        var namespaceViewClass = joint.util.getByPath(namespace, type, '.');

        if (cell.isLink()) {
            optionalViewClass = this.options.linkView;
            defaultViewClass = joint.dia.LinkView;
        } else {
            optionalViewClass = this.options.elementView;
            defaultViewClass = joint.dia.ElementView;
        }

        // a) the paper options view is a class (deprecated)
        //  1. search the namespace for a view
        //  2. if no view was found, use view from the paper options
        // b) the paper options view is a function
        //  1. call the function from the paper options
        //  2. if no view was return, search the namespace for a view
        //  3. if no view was found, use the default
        var ViewClass = (optionalViewClass.prototype instanceof Backbone.View)
            ? namespaceViewClass || optionalViewClass
            : optionalViewClass.call(this, cell) || namespaceViewClass || defaultViewClass;

        return new ViewClass({
            model: cell,
            interactive: this.options.interactive
        });
    },

    onCellAdded: function(cell, graph, opt) {

        if (this.options.async && opt.async !== false && _.isNumber(opt.position)) {

            this._asyncCells = this._asyncCells || [];
            this._asyncCells.push(cell);

            if (opt.position == 0) {

                if (this._frameId) throw new Error('another asynchronous rendering in progress');

                this.asyncRenderViews(this._asyncCells, opt);
                delete this._asyncCells;
            }

        } else {

            this.renderView(cell);
        }
    },

    removeView: function(cell) {

        var view = this._views[cell.id];

        if (view) {
            view.remove();
            delete this._views[cell.id];
        }

        return view;
    },

    renderView: function(cell) {

        var view = this._views[cell.id] = this.createViewForModel(cell);

        V(this.viewport).append(view.el);
        view.paper = this;
        view.render();

        // This is the only way to prevent image dragging in Firefox that works.
        // Setting -moz-user-select: none, draggable="false" attribute or user-drag: none didn't help.
        $(view.el).find('image').on('dragstart', function() { return false; });

        return view;
    },

    beforeRenderViews: function(cells) {

        // Make sure links are always added AFTER elements.
        // They wouldn't find their sources/targets in the DOM otherwise.
        cells.sort(function(a, b) { return a instanceof joint.dia.Link ? 1 : -1; });

        return cells;
    },

    afterRenderViews: function() {

        this.sortViews();
    },

    resetViews: function(cellsCollection, opt) {

        $(this.viewport).empty();

        // clearing views removes any event listeners
        this.removeViews();

        var cells = cellsCollection.models.slice();

        // `beforeRenderViews()` can return changed cells array (e.g sorted).
        cells = this.beforeRenderViews(cells, opt) || cells;

        if (this._frameId) {

            joint.util.cancelFrame(this._frameId);
            delete this._frameId;
        }

        if (this.options.async) {

            this.asyncRenderViews(cells, opt);
            // Sort the cells once all elements rendered (see asyncRenderViews()).

        } else {

            _.each(cells, this.renderView, this);

            // Sort the cells in the DOM manually as we might have changed the order they
            // were added to the DOM (see above).
            this.sortViews();
        }
    },

    removeViews: function() {

        _.invoke(this._views, 'remove');

        this._views = {};
    },

    asyncBatchAdded: _.noop,

    asyncRenderViews: function(cells, opt) {

        if (this._frameId) {

            var batchSize = (this.options.async && this.options.async.batchSize) || 50;
            var batchCells = cells.splice(0, batchSize);
            var collection = this.model.get('cells');

            _.each(batchCells, function(cell) {

                // The cell has to be part of the graph collection.
                // There is a chance in asynchronous rendering
                // that a cell was removed before it's rendered to the paper.
                if (cell.collection === collection) this.renderView(cell);

            }, this);

            this.asyncBatchAdded();
        }

        if (!cells.length) {

            // No cells left to render.
            delete this._frameId;
            this.afterRenderViews(opt);
            this.trigger('render:done', opt);

        } else {

            // Schedule a next batch to render.
            this._frameId = joint.util.nextFrame(function() {
                this.asyncRenderViews(cells, opt);
            }, this);
        }
    },

    sortViews: function() {

        // Run insertion sort algorithm in order to efficiently sort DOM elements according to their
        // associated model `z` attribute.

        var $cells = $(this.viewport).children('[model-id]');
        var cells = this.model.get('cells');

        joint.util.sortElements($cells, function(a, b) {

            var cellA = cells.get($(a).attr('model-id'));
            var cellB = cells.get($(b).attr('model-id'));

            return (cellA.get('z') || 0) > (cellB.get('z') || 0) ? 1 : -1;
        });
    },

    scale: function(sx, sy, ox, oy) {

        sy = sy || sx;

        if (_.isUndefined(ox)) {

            ox = 0;
            oy = 0;
        }

        // Remove previous transform so that the new scale is not affected by previous scales, especially
        // the old translate() does not affect the new translate if an origin is specified.
        V(this.viewport).attr('transform', '');

        var oldTx = this.options.origin.x;
        var oldTy = this.options.origin.y;

        // TODO: V.scale() doesn't support setting scale origin. #Fix
        if (ox || oy || oldTx || oldTy) {

            var newTx = oldTx - ox * (sx - 1);
            var newTy = oldTy - oy * (sy - 1);
            this.setOrigin(newTx, newTy);
        }

        V(this.viewport).scale(sx, sy);

        this.trigger('scale', sx, sy, ox, oy);

        return this;
    },

    rotate: function(deg, ox, oy) {

        // If the origin is not set explicitely, rotate around the center. Note that
        // we must use the plain bounding box (`this.el.getBBox()` instead of the one that gives us
        // the real bounding box (`bbox()`) including transformations).
        if (_.isUndefined(ox)) {

            var bbox = this.viewport.getBBox();
            ox = bbox.width / 2;
            oy = bbox.height / 2;
        }

        V(this.viewport).rotate(deg, ox, oy);
    },

    // Find the first view climbing up the DOM tree starting at element `el`. Note that `el` can also
    // be a selector or a jQuery object.
    findView: function($el) {

        var el = _.isString($el)
            ? this.viewport.querySelector($el)
            : $el instanceof $ ? $el[0] : $el;

        while (el && el !== this.el && el !== document) {

            var id = el.getAttribute('model-id');
            if (id) return this._views[id];

            el = el.parentNode;
        }

        return undefined;
    },

    // Find a view for a model `cell`. `cell` can also be a string representing a model `id`.
    findViewByModel: function(cell) {

        var id = _.isString(cell) ? cell : cell.id;

        return this._views[id];
    },

    // Find all views at given point
    findViewsFromPoint: function(p) {

        p = g.point(p);

        var views = _.map(this.model.getElements(), this.findViewByModel, this);

        return _.filter(views, function(view) {
            return view && g.rect(view.vel.bbox(false, this.viewport)).containsPoint(p);
        }, this);
    },

    // Find all views in given area
    findViewsInArea: function(r) {

        r = g.rect(r);

        var views = _.map(this.model.getElements(), this.findViewByModel, this);

        return _.filter(views, function(view) {
            return view && r.intersect(g.rect(view.vel.bbox(false, this.viewport)));
        }, this);
    },

    getModelById: function(id) {

        return this.model.getCell(id);
    },

    snapToGrid: function(p) {

        // Convert global coordinates to the local ones of the `viewport`. Otherwise,
        // improper transformation would be applied when the viewport gets transformed (scaled/rotated).
        var localPoint = V(this.viewport).toLocalPoint(p.x, p.y);

        return {
            x: g.snapToGrid(localPoint.x, this.options.gridSize),
            y: g.snapToGrid(localPoint.y, this.options.gridSize)
        };
    },

    // Transform client coordinates to the paper local coordinates.
    // Useful when you have a mouse event object and you'd like to get coordinates
    // inside the paper that correspond to `evt.clientX` and `evt.clientY` point.
    // Exmaple: var paperPoint = paper.clientToLocalPoint({ x: evt.clientX, y: evt.clientY });
    clientToLocalPoint: function(p) {

        var svgPoint = this.svg.createSVGPoint();
        svgPoint.x = p.x;
        svgPoint.y = p.y;

        // This is a hack for Firefox! If there wasn't a fake (non-visible) rectangle covering the
        // whole SVG area, `$(paper.svg).offset()` used below won't work.
        var fakeRect = V('rect', { width: this.options.width, height: this.options.height, x: 0, y: 0, opacity: 0 });
        V(this.svg).prepend(fakeRect);

        var paperOffset = $(this.svg).offset();

        // Clean up the fake rectangle once we have the offset of the SVG document.
        fakeRect.remove();

        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

        svgPoint.x += scrollLeft - paperOffset.left;
        svgPoint.y += scrollTop - paperOffset.top;

        // Transform point into the viewport coordinate system.
        var pointTransformed = svgPoint.matrixTransform(this.viewport.getCTM().inverse());

        return pointTransformed;
    },

    getDefaultLink: function(cellView, magnet) {

        return _.isFunction(this.options.defaultLink)
        // default link is a function producing link model
            ? this.options.defaultLink.call(this, cellView, magnet)
        // default link is the Backbone model
            : this.options.defaultLink.clone();
    },

    // Cell highlighting
    // -----------------

    onCellHighlight: function(cellView, el) {
        V(el).addClass('highlighted');
    },

    onCellUnhighlight: function(cellView, el) {
        V(el).removeClass('highlighted');
    },

    // Interaction.
    // ------------

    mousedblclick: function(evt) {

        evt.preventDefault();
        evt = joint.util.normalizeEvent(evt);

        var view = this.findView(evt.target);
        if (this.guard(evt, view)) return;

        var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

        if (view) {

            view.pointerdblclick(evt, localPoint.x, localPoint.y);

        } else {

            this.trigger('blank:pointerdblclick', evt, localPoint.x, localPoint.y);
        }
    },

    mouseclick: function(evt) {

        // Trigger event when mouse not moved.
        if (this._mousemoved <= this.options.clickThreshold) {

            evt = joint.util.normalizeEvent(evt);

            var view = this.findView(evt.target);
            if (this.guard(evt, view)) return;

            var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

            if (view) {

                view.pointerclick(evt, localPoint.x, localPoint.y);

            } else {

                this.trigger('blank:pointerclick', evt, localPoint.x, localPoint.y);
            }
        }

        this._mousemoved = 0;
    },

    // Guard guards the event received. If the event is not interesting, guard returns `true`.
    // Otherwise, it return `false`.
    guard: function(evt, view) {

        if (view && view.model && (view.model instanceof joint.dia.Cell)) {

            return false;

        } else if (this.svg === evt.target || this.el === evt.target || $.contains(this.svg, evt.target)) {

            return false;
        }

        return true;    // Event guarded. Paper should not react on it in any way.
    },

    contextmenu: function(evt) {

        evt = joint.util.normalizeEvent(evt);
        var view = this.findView(evt.target);
        if (this.guard(evt, view)) return;

        var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

        if (view) {

            view.contextmenu(evt, localPoint.x, localPoint.y);

        } else {

            this.trigger('blank:contextmenu', evt, localPoint.x, localPoint.y);
        }
    },

    pointerdown: function(evt) {

        evt = joint.util.normalizeEvent(evt);

        var view = this.findView(evt.target);
        if (this.guard(evt, view)) return;

        var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

        if (view) {

            this.sourceView = view;

            view.pointerdown(evt, localPoint.x, localPoint.y);

        } else {

            this.trigger('blank:pointerdown', evt, localPoint.x, localPoint.y);
        }
    },

    pointermove: function(evt) {

        evt.preventDefault();
        evt = joint.util.normalizeEvent(evt);

        if (this.sourceView) {

            // Mouse moved counter.
            this._mousemoved++;

            var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

            this.sourceView.pointermove(evt, localPoint.x, localPoint.y);
        }
    },

    pointerup: function(evt) {

        evt = joint.util.normalizeEvent(evt);

        var localPoint = this.snapToGrid({ x: evt.clientX, y: evt.clientY });

        if (this.sourceView) {

            this.sourceView.pointerup(evt, localPoint.x, localPoint.y);

            //"delete sourceView" occasionally throws an error in chrome (illegal access exception)
            this.sourceView = null;

        } else {

            this.trigger('blank:pointerup', evt, localPoint.x, localPoint.y);
        }
    },

    cellMouseover: function(evt) {

        evt = joint.util.normalizeEvent(evt);
        var view = this.findView(evt.target);
        if (view) {
            if (this.guard(evt, view)) return;
            view.mouseover(evt);
        }
    },

    cellMouseout: function(evt) {

        evt = joint.util.normalizeEvent(evt);
        var view = this.findView(evt.target);
        if (view) {
            if (this.guard(evt, view)) return;
            view.mouseout(evt);
        }
    }
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.basic = {};

joint.shapes.basic.Generic = joint.dia.Element.extend({

    defaults: joint.util.deepSupplement({

        type: 'basic.Generic',
        attrs: {
            '.': { fill: '#ffffff', stroke: 'none' }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.basic.Rect = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Rect',
        attrs: {
            'rect': {
                fill: '#ffffff',
                stroke: '#000000',
                width: 100,
                height: 60
            },
            'text': {
                fill: '#000000',
                text: '',
                'font-size': 14,
                'ref-x': .5,
                'ref-y': .5,
                'text-anchor': 'middle',
                'y-alignment': 'middle',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.TextView = joint.dia.ElementView.extend({

    initialize: function() {
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);
        // The element view is not automatically rescaled to fit the model size
        // when the attribute 'attrs' is changed.
        this.listenTo(this.model, 'change:attrs', this.resize);
    }
});

joint.shapes.basic.Text = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><text/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Text',
        attrs: {
            'text': {
                'font-size': 18,
                fill: '#000000'
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Circle = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Circle',
        size: { width: 60, height: 60 },
        attrs: {
            'circle': {
                fill: '#ffffff',
                stroke: '#000000',
                r: 30,
                cx: 30,
                cy: 30
            },
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-y': .5,
                'y-alignment': 'middle',
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Ellipse = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><ellipse/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Ellipse',
        size: { width: 60, height: 40 },
        attrs: {
            'ellipse': {
                fill: '#ffffff',
                stroke: '#000000',
                rx: 30,
                ry: 20,
                cx: 30,
                cy: 20
            },
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-y': .5,
                'y-alignment': 'middle',
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Polygon = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Polygon',
        size: { width: 60, height: 40 },
        attrs: {
            'polygon': {
                fill: '#ffffff',
                stroke: '#000000'
            },
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-dy': 20,
                'y-alignment': 'middle',
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Polyline = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><polyline/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Polyline',
        size: { width: 60, height: 40 },
        attrs: {
            'polyline': {
                fill: '#ffffff',
                stroke: '#000000'
            },
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-dy': 20,
                'y-alignment': 'middle',
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Image = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><image/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Image',
        attrs: {
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-dy': 20,
                'y-alignment': 'middle',
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Path = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><path/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Path',
        size: { width: 60, height: 60 },
        attrs: {
            'path': {
                fill: '#ffffff',
                stroke: '#000000'
            },
            'text': {
                'font-size': 14,
                text: '',
                'text-anchor': 'middle',
                'ref': 'path',
                'ref-x': .5,
                'ref-dy': 10,
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.basic.Rhombus = joint.shapes.basic.Path.extend({

    defaults: joint.util.deepSupplement({

        type: 'basic.Rhombus',
        attrs: {
            'path': {
                d: 'M 30 0 L 60 30 30 60 0 30 z'
            },
            'text': {
                'ref-y': .5,
                'y-alignment': 'middle'
            }
        }

    }, joint.shapes.basic.Path.prototype.defaults)
});


// PortsModelInterface is a common interface for shapes that have ports. This interface makes it easy
// to create new shapes with ports functionality. It is assumed that the new shapes have
// `inPorts` and `outPorts` array properties. Only these properties should be used to set ports.
// In other words, using this interface, it is no longer recommended to set ports directly through the
// `attrs` object.

// Usage:
// joint.shapes.custom.MyElementWithPorts = joint.shapes.basic.Path.extend(_.extend({}, joint.shapes.basic.PortsModelInterface, {
//     getPortAttrs: function(portName, index, total, selector, type) {
//         var attrs = {};
//         var portClass = 'port' + index;
//         var portSelector = selector + '>.' + portClass;
//         var portTextSelector = portSelector + '>text';
//         var portBodySelector = portSelector + '>.port-body';
//
//         attrs[portTextSelector] = { text: portName };
//         attrs[portBodySelector] = { port: { id: portName || _.uniqueId(type) , type: type } };
//         attrs[portSelector] = { ref: 'rect', 'ref-y': (index + 0.5) * (1 / total) };
//
//         if (selector === '.outPorts') { attrs[portSelector]['ref-dx'] = 0; }
//
//         return attrs;
//     }
//}));
joint.shapes.basic.PortsModelInterface = {

    initialize: function() {

        this.updatePortsAttrs();
        this.on('change:inPorts change:outPorts', this.updatePortsAttrs, this);

        // Call the `initialize()` of the parent.
        this.constructor.__super__.constructor.__super__.initialize.apply(this, arguments);
    },

    updatePortsAttrs: function(eventName) {

        // Delete previously set attributes for ports.
        var currAttrs = this.get('attrs');
        _.each(this._portSelectors, function(selector) {
            if (currAttrs[selector]) delete currAttrs[selector];
        });

        // This holds keys to the `attrs` object for all the port specific attribute that
        // we set in this method. This is necessary in order to remove previously set
        // attributes for previous ports.
        this._portSelectors = [];

        var attrs = {};

        _.each(this.get('inPorts'), function(portName, index, ports) {
            var portAttributes = this.getPortAttrs(portName, index, ports.length, '.inPorts', 'in');
            this._portSelectors = this._portSelectors.concat(_.keys(portAttributes));
            _.extend(attrs, portAttributes);
        }, this);

        _.each(this.get('outPorts'), function(portName, index, ports) {
            var portAttributes = this.getPortAttrs(portName, index, ports.length, '.outPorts', 'out');
            this._portSelectors = this._portSelectors.concat(_.keys(portAttributes));
            _.extend(attrs, portAttributes);
        }, this);

        // Silently set `attrs` on the cell so that noone knows the attrs have changed. This makes sure
        // that, for example, command manager does not register `change:attrs` command but only
        // the important `change:inPorts`/`change:outPorts` command.
        this.attr(attrs, { silent: true });
        // Manually call the `processPorts()` method that is normally called on `change:attrs` (that we just made silent).
        this.processPorts();
        // Let the outside world (mainly the `ModelView`) know that we're done configuring the `attrs` object.
        this.trigger('process:ports');
    },

    getPortSelector: function(name) {

        var selector = '.inPorts';
        var index = this.get('inPorts').indexOf(name);

        if (index < 0) {
            selector = '.outPorts';
            index = this.get('outPorts').indexOf(name);

            if (index < 0) throw new Error("getPortSelector(): Port doesn't exist.");
        }

        return selector + '>g:nth-child(' + (index + 1) + ')>.port-body';
    }
};

joint.shapes.basic.PortsViewInterface = {

    initialize: function() {

        // `Model` emits the `process:ports` whenever it's done configuring the `attrs` object for ports.
        this.listenTo(this.model, 'process:ports', this.update);

        joint.dia.ElementView.prototype.initialize.apply(this, arguments);
    },

    update: function() {

        // First render ports so that `attrs` can be applied to those newly created DOM elements
        // in `ElementView.prototype.update()`.
        this.renderPorts();
        joint.dia.ElementView.prototype.update.apply(this, arguments);
    },

    renderPorts: function() {

        var $inPorts = this.$('.inPorts').empty();
        var $outPorts = this.$('.outPorts').empty();

        var portTemplate = _.template(this.model.portMarkup);

        _.each(_.filter(this.model.ports, function(p) { return p.type === 'in'; }), function(port, index) {

            $inPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
        _.each(_.filter(this.model.ports, function(p) { return p.type === 'out'; }), function(port, index) {

            $outPorts.append(V(portTemplate({ id: index, port: port })).node);
        });
    }
};

joint.shapes.basic.TextBlock = joint.shapes.basic.Generic.extend({

    markup: ['<g class="rotatable"><g class="scalable"><rect/></g><switch>',

             // if foreignObject supported

             '<foreignObject requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" class="fobj">',
             '<body xmlns="http://www.w3.org/1999/xhtml"><div/></body>',
             '</foreignObject>',

             // else foreignObject is not supported (fallback for IE)
             '<text class="content"/>',

             '</switch></g>'].join(''),

    defaults: joint.util.deepSupplement({

        type: 'basic.TextBlock',

        // see joint.css for more element styles
        attrs: {
            rect: {
                fill: '#ffffff',
                stroke: '#000000',
                width: 80,
                height: 100
            },
            text: {
                fill: '#000000',
                'font-size': 14,
                'font-family': 'Arial, helvetica, sans-serif'
            },
            '.content': {
                text: '',
                ref: 'rect',
                'ref-x': .5,
                'ref-y': .5,
                'y-alignment': 'middle',
                'x-alignment': 'middle'
            }
        },

        content: ''

    }, joint.shapes.basic.Generic.prototype.defaults),

    initialize: function() {

        if (typeof SVGForeignObjectElement !== 'undefined') {

            // foreignObject supported
            this.setForeignObjectSize(this, this.get('size'));
            this.setDivContent(this, this.get('content'));
            this.listenTo(this, 'change:size', this.setForeignObjectSize);
            this.listenTo(this, 'change:content', this.setDivContent);

        }

        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    },

    setForeignObjectSize: function(cell, size) {

        // Selector `foreignObject' doesn't work accross all browsers, we'r using class selector instead.
        // We have to clone size as we don't want attributes.div.style to be same object as attributes.size.
        cell.attr({
            '.fobj': _.clone(size),
            div: { style: _.clone(size) }
        });
    },

    setDivContent: function(cell, content) {

        // Append the content to div as html.
        cell.attr({ div : {
            html: content
        }});
    }

});

// TextBlockView implements the fallback for IE when no foreignObject exists and
// the text needs to be manually broken.
joint.shapes.basic.TextBlockView = joint.dia.ElementView.extend({

    initialize: function() {

        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        if (typeof SVGForeignObjectElement === 'undefined') {

            this.noSVGForeignObjectElement = true;

            this.listenTo(this.model, 'change:content', function(cell) {
                // avoiding pass of extra paramters
                this.updateContent(cell);
            });
        }
    },

    update: function(cell, renderingOnlyAttrs) {

        if (this.noSVGForeignObjectElement) {

            var model = this.model;

            // Update everything but the content first.
            var noTextAttrs = _.omit(renderingOnlyAttrs || model.get('attrs'), '.content');
            joint.dia.ElementView.prototype.update.call(this, model, noTextAttrs);

            if (!renderingOnlyAttrs || _.has(renderingOnlyAttrs, '.content')) {
                // Update the content itself.
                this.updateContent(model, renderingOnlyAttrs);
            }

        } else {

            joint.dia.ElementView.prototype.update.call(this, model, renderingOnlyAttrs);
        }
    },

    updateContent: function(cell, renderingOnlyAttrs) {

        // Create copy of the text attributes
        var textAttrs = _.merge({}, (renderingOnlyAttrs || cell.get('attrs'))['.content']);

        delete textAttrs.text;

        // Break the content to fit the element size taking into account the attributes
        // set on the model.
        var text = joint.util.breakText(cell.get('content'), cell.get('size'), textAttrs, {
            // measuring sandbox svg document
            svgDocument: this.paper.svg
        });

        // Create a new attrs with same structure as the model attrs { text: { *textAttributes* }}
        var attrs = joint.util.setByPath({}, '.content', textAttrs, '/');

        // Replace text attribute with the one we just processed.
        attrs['.content'].text = text;

        // Update the view using renderingOnlyAttributes parameter.
        joint.dia.ElementView.prototype.update.call(this, cell, attrs);
    }
});

joint.routers.orthogonal = (function() {

    // bearing -> opposite bearing
    var opposite = {
        N: 'S',
        S: 'N',
        E: 'W',
        W: 'E'
    };

    // bearing -> radians
    var radians = {
        N: -Math.PI / 2 * 3,
        S: -Math.PI / 2,
        E: 0,
        W: Math.PI
    };

    // HELPERS //

    // simple bearing method (calculates only orthogonal cardinals)
    function bearing(from, to) {
        if (from.x == to.x) return from.y > to.y ? 'N' : 'S';
        if (from.y == to.y) return from.x > to.x ? 'W' : 'E';
        return null;
    }

    // returns either width or height of a bbox based on the given bearing
    function boxSize(bbox, brng) {
        return bbox[brng == 'W' || brng == 'E' ? 'width' : 'height'];
    }

    // expands a box by specific value
    function expand(bbox, val) {
        return g.rect(bbox).moveAndExpand({ x: -val, y: -val, width: 2 * val, height: 2 * val });
    }

    // transform point to a rect
    function pointBox(p) {
        return g.rect(p.x, p.y, 0, 0);
    }

    // returns a minimal rect which covers the given boxes
    function boundary(bbox1, bbox2) {

        var x1 = Math.min(bbox1.x, bbox2.x);
        var y1 = Math.min(bbox1.y, bbox2.y);
        var x2 = Math.max(bbox1.x + bbox1.width, bbox2.x + bbox2.width);
        var y2 = Math.max(bbox1.y + bbox1.height, bbox2.y + bbox2.height);

        return g.rect(x1, y1, x2 - x1, y2 - y1);
    }

    // returns a point `p` where lines p,p1 and p,p2 are perpendicular and p is not contained
    // in the given box
    function freeJoin(p1, p2, bbox) {

        var p = g.point(p1.x, p2.y);
        if (bbox.containsPoint(p)) p = g.point(p2.x, p1.y);
        // kept for reference
        // if (bbox.containsPoint(p)) p = null;
        return p;
    }

    // PARTIAL ROUTERS //

    function vertexVertex(from, to, brng) {

        var p1 = g.point(from.x, to.y);
        var p2 = g.point(to.x, from.y);
        var d1 = bearing(from, p1);
        var d2 = bearing(from, p2);
        var xBrng = opposite[brng];

        var p = (d1 == brng || (d1 != xBrng && (d2 == xBrng || d2 != brng))) ? p1 : p2;

        return { points: [p], direction: bearing(p, to) };
    }

    function elementVertex(from, to, fromBBox) {

        var p = freeJoin(from, to, fromBBox);

        return { points: [p], direction: bearing(p, to) };
    }

    function vertexElement(from, to, toBBox, brng) {

        var route = {};

        var pts = [g.point(from.x, to.y), g.point(to.x, from.y)];
        var freePts = _.filter(pts, function(pt) { return !toBBox.containsPoint(pt); });
        var freeBrngPts = _.filter(freePts, function(pt) { return bearing(pt, from) != brng; });

        var p;

        if (freeBrngPts.length > 0) {

            // try to pick a point which bears the same direction as the previous segment
            p = _.filter(freeBrngPts, function(pt) { return bearing(from, pt) == brng; }).pop();
            p = p || freeBrngPts[0];

            route.points = [p];
            route.direction = bearing(p, to);

        } else {

            // Here we found only points which are either contained in the element or they would create
            // a link segment going in opposite direction from the previous one.
            // We take the point inside element and move it outside the element in the direction the
            // route is going. Now we can join this point with the current end (using freeJoin).

            p = _.difference(pts, freePts)[0];

            var p2 = g.point(to).move(p, -boxSize(toBBox, brng) / 2);
            var p1 = freeJoin(p2, from, toBBox);

            route.points = [p1, p2];
            route.direction = bearing(p2, to);
        }

        return route;
    }

    function elementElement(from, to, fromBBox, toBBox) {

        var route = elementVertex(to, from, toBBox);
        var p1 = route.points[0];

        if (fromBBox.containsPoint(p1)) {

            route = elementVertex(from, to, fromBBox);
            var p2 = route.points[0];

            if (toBBox.containsPoint(p2)) {

                var fromBorder = g.point(from).move(p2, -boxSize(fromBBox, bearing(from, p2)) / 2);
                var toBorder = g.point(to).move(p1, -boxSize(toBBox, bearing(to, p1)) / 2);
                var mid = g.line(fromBorder, toBorder).midpoint();

                var startRoute = elementVertex(from, mid, fromBBox);
                var endRoute = vertexVertex(mid, to, startRoute.direction);

                route.points = [startRoute.points[0], endRoute.points[0]];
                route.direction = endRoute.direction;
            }
        }

        return route;
    }

    // Finds route for situations where one of end is inside the other.
    // Typically the route is conduct outside the outer element first and
    // let go back to the inner element.
    function insideElement(from, to, fromBBox, toBBox, brng) {

        var route = {};
        var bndry = expand(boundary(fromBBox, toBBox), 1);

        // start from the point which is closer to the boundary
        var reversed = bndry.center().distance(to) > bndry.center().distance(from);
        var start = reversed ? to : from;
        var end = reversed ? from : to;

        var p1, p2, p3;

        if (brng) {
            // Points on circle with radius equals 'W + H` are always outside the rectangle
            // with width W and height H if the center of that circle is the center of that rectangle.
            p1 = g.point.fromPolar(bndry.width + bndry.height, radians[brng], start);
            p1 = bndry.pointNearestToPoint(p1).move(p1, -1);
        } else {
            p1 = bndry.pointNearestToPoint(start).move(start, 1);
        }

        p2 = freeJoin(p1, end, bndry);

        if (p1.round().equals(p2.round())) {
            p2 = g.point.fromPolar(bndry.width + bndry.height, g.toRad(p1.theta(start)) + Math.PI / 2, end);
            p2 = bndry.pointNearestToPoint(p2).move(end, 1).round();
            p3 = freeJoin(p1, p2, bndry);
            route.points = reversed ? [p2, p3, p1] : [p1, p3, p2];
        } else {
            route.points = reversed ? [p2, p1] : [p1, p2];
        }

        route.direction = reversed ? bearing(p1, to) : bearing(p2, to);

        return route;
    }

    // MAIN ROUTER //

    // Return points that one needs to draw a connection through in order to have a orthogonal link
    // routing from source to target going through `vertices`.
    function findOrthogonalRoute(vertices, opt, linkView) {

        var padding = opt.elementPadding || 20;

        var orthogonalVertices = [];
        var sourceBBox = expand(linkView.sourceBBox, padding);
        var targetBBox = expand(linkView.targetBBox, padding);

        vertices = _.map(vertices, g.point);
        vertices.unshift(sourceBBox.center());
        vertices.push(targetBBox.center());

        var brng;

        for (var i = 0, max = vertices.length - 1; i < max; i++) {

            var route = null;
            var from = vertices[i];
            var to = vertices[i + 1];
            var isOrthogonal = !!bearing(from, to);

            if (i == 0) {

                if (i + 1 == max) { // route source -> target

                    // Expand one of elements by 1px so we detect also situations when they
                    // are positioned one next other with no gap between.
                    if (sourceBBox.intersect(expand(targetBBox, 1))) {
                        route = insideElement(from, to, sourceBBox, targetBBox);
                    } else if (!isOrthogonal) {
                        route = elementElement(from, to, sourceBBox, targetBBox);
                    }

                } else { // route source -> vertex

                    if (sourceBBox.containsPoint(to)) {
                        route = insideElement(from, to, sourceBBox, expand(pointBox(to), padding));
                    } else if (!isOrthogonal) {
                        route = elementVertex(from, to, sourceBBox);
                    }
                }

            } else if (i + 1 == max) { // route vertex -> target

                var orthogonalLoop = isOrthogonal && bearing(to, from) == brng;

                if (targetBBox.containsPoint(from) || orthogonalLoop) {
                    route = insideElement(from, to, expand(pointBox(from), padding), targetBBox, brng);
                } else if (!isOrthogonal) {
                    route = vertexElement(from, to, targetBBox, brng);
                }

            } else if (!isOrthogonal) { // route vertex -> vertex
                route = vertexVertex(from, to, brng);
            }

            if (route) {
                Array.prototype.push.apply(orthogonalVertices, route.points);
                brng = route.direction;
            } else {
                // orthogonal route and not looped
                brng = bearing(from, to);
            }

            if (i + 1 < max) {
                orthogonalVertices.push(to);
            }
        }

        return orthogonalVertices;
    };

    return findOrthogonalRoute;

})();

joint.routers.manhattan = (function(g, _) {

    'use strict';

    var config = {

        // size of the step to find a route
        step: 10,

        // use of the perpendicular linkView option to connect center of element with first vertex
        perpendicular: true,

        // should be source or target not to be consider as an obstacle
        excludeEnds: [], // 'source', 'target'

        // should be any element with a certain type not to be consider as an obstacle
        excludeTypes: ['basic.Text'],

        // if number of route finding loops exceed the maximum, stops searching and returns
        // fallback route
        maximumLoops: 2000,

        // possible starting directions from an element
        startDirections: ['left', 'right', 'top', 'bottom'],

        // possible ending directions to an element
        endDirections: ['left', 'right', 'top', 'bottom'],

        // specify directions above
        directionMap: {
            right: { x: 1, y: 0 },
            bottom: { x: 0, y: 1 },
            left: { x: -1, y: 0 },
            top: { x: 0, y: -1 }
        },

        // maximum change of the direction
        maxAllowedDirectionChange: 90,

        // padding applied on the element bounding boxes
        paddingBox: function() {

            var step = this.step;

            return {
                x: -step,
                y: -step,
                width: 2 * step,
                height: 2 * step
            };
        },

        // an array of directions to find next points on the route
        directions: function() {

            var step = this.step;

            return [
                { offsetX: step  , offsetY: 0     , cost: step },
                { offsetX: 0     , offsetY: step  , cost: step },
                { offsetX: -step , offsetY: 0     , cost: step },
                { offsetX: 0     , offsetY: -step , cost: step }
            ];
        },

        // a penalty received for direction change
        penalties: function() {

            return {
                0: 0,
                45: this.step / 2,
                90: this.step / 2
            };
        },

        // a simple route used in situations, when main routing method fails
        // (exceed loops, inaccessible).
        fallbackRoute: function(from, to, opts) {

            // Find an orthogonal route ignoring obstacles.

            var point = ((opts.previousDirAngle || 0) % 180 === 0)
                    ? g.point(from.x, to.y)
                    : g.point(to.x, from.y);

            return [point, to];
        },

        // if a function is provided, it's used to route the link while dragging an end
        // i.e. function(from, to, opts) { return []; }
        draggingRoute: null
    };

    // Map of obstacles
    // Helper structure to identify whether a point lies in an obstacle.
    function ObstacleMap(opt) {

        this.map = {};
        this.options = opt;
        // tells how to divide the paper when creating the elements map
        this.mapGridSize = 100;
    }

    ObstacleMap.prototype.build = function(graph, link) {

        var opt = this.options;

        // source or target element could be excluded from set of obstacles
        var excludedEnds = _.chain(opt.excludeEnds)
            .map(link.get, link)
            .pluck('id')
            .map(graph.getCell, graph).value();

        // Exclude any embedded elements from the source and the target element.
        var excludedAncestors = [];

        var source = graph.getCell(link.get('source').id);
        if (source) {
            excludedAncestors = _.union(excludedAncestors, _.map(source.getAncestors(), 'id'));
        };

        var target = graph.getCell(link.get('target').id);
        if (target) {
            excludedAncestors = _.union(excludedAncestors, _.map(target.getAncestors(), 'id'));
        }

        // builds a map of all elements for quicker obstacle queries (i.e. is a point contained
        // in any obstacle?) (a simplified grid search)
        // The paper is divided to smaller cells, where each of them holds an information which
        // elements belong to it. When we query whether a point is in an obstacle we don't need
        // to go through all obstacles, we check only those in a particular cell.
        var mapGridSize = this.mapGridSize;

        _.chain(graph.getElements())
            // remove source and target element if required
            .difference(excludedEnds)
            // remove all elements whose type is listed in excludedTypes array
            .reject(function(element) {
                // reject any element which is an ancestor of either source or target
                return _.contains(opt.excludeTypes, element.get('type')) || _.contains(excludedAncestors, element.id);
            })
            // change elements (models) to their bounding boxes
            .invoke('getBBox')
            // expand their boxes by specific padding
            .invoke('moveAndExpand', opt.paddingBox)
            // build the map
            .foldl(function(map, bbox) {

                var origin = bbox.origin().snapToGrid(mapGridSize);
                var corner = bbox.corner().snapToGrid(mapGridSize);

                for (var x = origin.x; x <= corner.x; x += mapGridSize) {
                    for (var y = origin.y; y <= corner.y; y += mapGridSize) {

                        var gridKey = x + '@' + y;

                        map[gridKey] = map[gridKey] || [];
                        map[gridKey].push(bbox);
                    }
                }

                return map;

            }, this.map).value();

        return this;
    };

    ObstacleMap.prototype.isPointAccessible = function(point) {

        var mapKey = point.clone().snapToGrid(this.mapGridSize).toString();

        return _.every(this.map[mapKey], function(obstacle) {
            return !obstacle.containsPoint(point);
        });
    };

    // Sorted Set
    // Set of items sorted by given value.
    function SortedSet() {
        this.items = [];
        this.hash = {};
        this.values = {};
        this.OPEN = 1;
        this.CLOSE = 2;
    }

    SortedSet.prototype.add = function(item, value) {

        if (this.hash[item]) {
            // item removal
            this.items.splice(this.items.indexOf(item), 1);
        } else {
            this.hash[item] = this.OPEN;
        }

        this.values[item] = value;

        var index = _.sortedIndex(this.items, item, function(i) {
            return this.values[i];
        }, this);

        this.items.splice(index, 0, item);
    };

    SortedSet.prototype.remove = function(item) {
        this.hash[item] = this.CLOSE;
    };

    SortedSet.prototype.isOpen = function(item) {
        return this.hash[item] === this.OPEN;
    };

    SortedSet.prototype.isClose = function(item) {
        return this.hash[item] === this.CLOSE;
    };

    SortedSet.prototype.isEmpty = function() {
        return this.items.length === 0;
    };

    SortedSet.prototype.pop = function() {
        var item =  this.items.shift();
        this.remove(item);
        return item;
    };

    // reconstructs a route by concating points with their parents
    function reconstructRoute(parents, point) {

        var route = [];
        var prevDiff = { x: 0, y: 0 };
        var current = point;
        var parent;

        while ((parent = parents[current])) {

            var diff = parent.difference(current);

            if (!diff.equals(prevDiff)) {

                route.unshift(current);
                prevDiff = diff;
            }

            current = parent;
        }

        route.unshift(current);

        return route;
    }

    // find points around the rectangle taking given directions in the account
    function getRectPoints(bbox, directionList, opt) {

        var step = opt.step;
        var center = bbox.center();
        var startPoints = _.chain(opt.directionMap).pick(directionList).map(function(direction) {

            var x = direction.x * bbox.width / 2;
            var y = direction.y * bbox.height / 2;

            var point = center.clone().offset(x, y);

            if (bbox.containsPoint(point)) {

                point.offset(direction.x * step, direction.y * step);
            }

            return point.snapToGrid(step);

        }).value();

        return startPoints;
    };

    // returns a direction index from start point to end point
    function getDirectionAngle(start, end, dirLen) {

        var q = 360 / dirLen;
        return Math.floor(g.normalizeAngle(start.theta(end) + q / 2) / q) * q;
    }

    function getDirectionChange(angle1, angle2) {

        var dirChange = Math.abs(angle1 - angle2);
        return dirChange > 180 ? 360 - dirChange : dirChange;
    }

    // heurestic method to determine the distance between two points
    function estimateCost(from, endPoints) {

        var min = Infinity;

        for (var i = 0, len = endPoints.length; i < len; i++) {
            var cost = from.manhattanDistance(endPoints[i]);
            if (cost < min) min = cost;
        };

        return min;
    }

    // finds the route between to points/rectangles implementing A* alghoritm
    function findRoute(start, end, map, opt) {

        var step = opt.step;
        var startPoints, endPoints;
        var startCenter, endCenter;

        // set of points we start pathfinding from
        if (start instanceof g.rect) {
            startPoints = getRectPoints(start, opt.startDirections, opt);
            startCenter = start.center();
        } else {
            startCenter = start.clone().snapToGrid(step);
            startPoints = [start];
        }

        // set of points we want the pathfinding to finish at
        if (end instanceof g.rect) {
            endPoints = getRectPoints(end, opt.endDirections, opt);
            endCenter = end.center();
        } else {
            endCenter = end.clone().snapToGrid(step);
            endPoints = [end];
        }

        // take into account only accessible end points
        startPoints = _.filter(startPoints, map.isPointAccessible, map);
        endPoints = _.filter(endPoints, map.isPointAccessible, map);

        // Check if there is a accessible end point.
        // We would have to use a fallback route otherwise.
        if (startPoints.length > 0 && endPoints.length >  0) {

            // The set of tentative points to be evaluated, initially containing the start points.
            var openSet = new SortedSet();
            // Keeps reference to a point that is immediate predecessor of given element.
            var parents = {};
            // Cost from start to a point along best known path.
            var costs = {};

            _.each(startPoints, function(point) {
                var key = point.toString();
                openSet.add(key, estimateCost(point, endPoints));
                costs[key] = 0;
            });

            // directions
            var dir, dirChange;
            var dirs = opt.directions;
            var dirLen = dirs.length;
            var loopsRemain = opt.maximumLoops;
            var endPointsKeys = _.invoke(endPoints, 'toString');

            // main route finding loop
            while (!openSet.isEmpty() && loopsRemain > 0) {

                // remove current from the open list
                var currentKey = openSet.pop();
                var currentPoint = g.point(currentKey);
                var currentDist = costs[currentKey];
                var previousDirAngle = currentDirAngle;
                var currentDirAngle = parents[currentKey]
                    ? getDirectionAngle(parents[currentKey], currentPoint, dirLen)
                    : opt.previousDirAngle != null ? opt.previousDirAngle : getDirectionAngle(startCenter, currentPoint, dirLen);

                // Check if we reached any endpoint
                if (endPointsKeys.indexOf(currentKey) >= 0) {
                    // We don't want to allow route to enter the end point in opposite direction.
                    dirChange = getDirectionChange(currentDirAngle, getDirectionAngle(currentPoint, endCenter, dirLen));
                    if (currentPoint.equals(endCenter) || dirChange < 180) {
                        opt.previousDirAngle = currentDirAngle;
                        return reconstructRoute(parents, currentPoint);
                    }
                }

                // Go over all possible directions and find neighbors.
                for (var i = 0; i < dirLen; i++) {

                    dir = dirs[i];
                    dirChange = getDirectionChange(currentDirAngle, dir.angle);
                    // if the direction changed rapidly don't use this point
                    if (dirChange > opt.maxAllowedDirectionChange) {
                        continue;
                    }

                    var neighborPoint = currentPoint.clone().offset(dir.offsetX, dir.offsetY);
                    var neighborKey = neighborPoint.toString();
                    // Closed points from the openSet were already evaluated.
                    if (openSet.isClose(neighborKey) || !map.isPointAccessible(neighborPoint)) {
                        continue;
                    }

                    // The current direction is ok to proccess.
                    var costFromStart = currentDist + dir.cost + opt.penalties[dirChange];

                    if (!openSet.isOpen(neighborKey) || costFromStart < costs[neighborKey]) {
                        // neighbor point has not been processed yet or the cost of the path
                        // from start is lesser than previously calcluated.
                        parents[neighborKey] = currentPoint;
                        costs[neighborKey] = costFromStart;
                        openSet.add(neighborKey, costFromStart + estimateCost(neighborPoint, endPoints));
                    };
                };

                loopsRemain--;
            }
        }

        // no route found ('to' point wasn't either accessible or finding route took
        // way to much calculations)
        return opt.fallbackRoute(startCenter, endCenter, opt);
    }

    // resolve some of the options
    function resolveOptions(opt) {

        opt.directions = _.result(opt, 'directions');
        opt.penalties = _.result(opt, 'penalties');
        opt.paddingBox = _.result(opt, 'paddingBox');

        _.each(opt.directions, function(direction) {

            var point1 = new g.point(0, 0);
            var point2 = new g.point(direction.offsetX, direction.offsetY);
            var angle = g.normalizeAngle(point1.theta(point2));

            direction.angle = angle;
        });
    }

    // initiation of the route finding
    function router(vertices, opt) {

        resolveOptions(opt);

        // enable/disable linkView perpendicular option
        this.options.perpendicular = !!opt.perpendicular;

        // expand boxes by specific padding
        var sourceBBox = g.rect(this.sourceBBox).moveAndExpand(opt.paddingBox);
        var targetBBox = g.rect(this.targetBBox).moveAndExpand(opt.paddingBox);

        // pathfinding
        var map = (new ObstacleMap(opt)).build(this.paper.model, this.model);
        var oldVertices = _.map(vertices, g.point);
        var newVertices = [];
        var tailPoint = sourceBBox.center().snapToGrid(opt.step);

        // find a route by concating all partial routes (routes need to go through the vertices)
        // startElement -> vertex[1] -> ... -> vertex[n] -> endElement
        for (var i = 0, len = oldVertices.length; i <= len; i++) {

            var partialRoute = null;

            var from = to || sourceBBox;
            var to = oldVertices[i];

            if (!to) {

                to = targetBBox;

                // 'to' is not a vertex. If the target is a point (i.e. it's not an element), we
                // might use dragging route instead of main routing method if that is enabled.
                var endingAtPoint = !this.model.get('source').id || !this.model.get('target').id;

                if (endingAtPoint && _.isFunction(opt.draggingRoute)) {
                    // Make sure we passing points only (not rects).
                    var dragFrom = from instanceof g.rect ? from.center() : from;
                    partialRoute = opt.draggingRoute(dragFrom, to.origin(), opt);
                }
            }

            // if partial route has not been calculated yet use the main routing method to find one
            partialRoute = partialRoute || findRoute(from, to, map, opt);

            var leadPoint = _.first(partialRoute);

            if (leadPoint && leadPoint.equals(tailPoint)) {
                // remove the first point if the previous partial route had the same point as last
                partialRoute.shift();
            }

            tailPoint = _.last(partialRoute) || tailPoint;

            Array.prototype.push.apply(newVertices, partialRoute);
        };

        return newVertices;
    }

    // public function
    return function(vertices, opt, linkView) {

        return router.call(linkView, vertices, _.extend({}, config, opt));
    };

})(g, _);

joint.routers.metro = (function() {

    if (!_.isFunction(joint.routers.manhattan)) {

        throw('Metro requires the manhattan router.');
    }

    var config = {

        // cost of a diagonal step (calculated if not defined).
        diagonalCost: null,

        // an array of directions to find next points on the route
        directions: function() {

            var step = this.step;
            var diagonalCost = this.diagonalCost || Math.ceil(Math.sqrt(step * step << 1));

            return [
                { offsetX: step  , offsetY: 0     , cost: step },
                { offsetX: step  , offsetY: step  , cost: diagonalCost },
                { offsetX: 0     , offsetY: step  , cost: step },
                { offsetX: -step , offsetY: step  , cost: diagonalCost },
                { offsetX: -step , offsetY: 0     , cost: step },
                { offsetX: -step , offsetY: -step , cost: diagonalCost },
                { offsetX: 0     , offsetY: -step , cost: step },
                { offsetX: step  , offsetY: -step , cost: diagonalCost }
            ];
        },
        maxAllowedDirectionChange: 45,
        // a simple route used in situations, when main routing method fails
        // (exceed loops, inaccessible).
        fallbackRoute: function(from, to, opts) {

            // Find a route which breaks by 45 degrees ignoring all obstacles.

            var theta = from.theta(to);

            var a = { x: to.x, y: from.y };
            var b = { x: from.x, y: to.y };

            if (theta % 180 > 90) {
                var t = a;
                a = b;
                b = t;
            }

            var p1 = (theta % 90) < 45 ? a : b;

            var l1 = g.line(from, p1);

            var alpha = 90 * Math.ceil(theta / 90);

            var p2 = g.point.fromPolar(l1.squaredLength(), g.toRad(alpha + 135), p1);

            var l2 = g.line(to, p2);

            var point = l1.intersection(l2);

            return point ? [point.round(), to] : [to];
        }
    };

    // public function
    return function(vertices, opts, linkView) {

        return joint.routers.manhattan(vertices, _.extend({}, config, opts), linkView);
    };

})();

// Routes the link always to/from a certain side
//
// Arguments:
//   padding ... gap between the element and the first vertex. :: Default 40.
//   side ... 'left' | 'right' | 'top' | 'bottom' :: Default 'bottom'.
//
joint.routers.oneSide = function(vertices, opt, linkView) {

    var side = opt.side || 'bottom';
    var padding = opt.padding || 40;

    // LinkView contains cached source an target bboxes.
    // Note that those are Geometry rectangle objects.
    var sourceBBox = linkView.sourceBBox;
    var targetBBox = linkView.targetBBox;
    var sourcePoint = sourceBBox.center();
    var targetPoint = targetBBox.center();

    var coordinate, coordinateValue, dimension, direction;

    switch (side) {
        case 'bottom':
            direction = 1;
            coordinate = 'y';
            dimension = 'height';
            break;
        case 'top':
            direction = -1;
            coordinate = 'y';
            dimension = 'height';
            break;
        case 'left':
            direction = -1;
            coordinate = 'x';
            dimension = 'width';
            break;
        case 'right':
            direction = 1;
            coordinate = 'x';
            dimension = 'width';
            break;
        default:
            throw new Error('Router: invalid side');
    }

    // move the points from the center of the element to outside of it.
    sourcePoint[coordinate] += direction * (sourceBBox[dimension] / 2 + padding);
    targetPoint[coordinate] += direction * (targetBBox[dimension] / 2 + padding);

    // make link orthogonal (at least the first and last vertex).
    if (direction * (sourcePoint[coordinate] - targetPoint[coordinate]) > 0) {
        targetPoint[coordinate] = sourcePoint[coordinate];
    } else {
        sourcePoint[coordinate] = targetPoint[coordinate];
    }

    return [sourcePoint].concat(vertices, targetPoint);
};

joint.connectors.normal = function(sourcePoint, targetPoint, vertices) {

    // Construct the `d` attribute of the `<path>` element.
    var d = ['M', sourcePoint.x, sourcePoint.y];

    _.each(vertices, function(vertex) {

        d.push(vertex.x, vertex.y);
    });

    d.push(targetPoint.x, targetPoint.y);

    return d.join(' ');
};

joint.connectors.rounded = function(sourcePoint, targetPoint, vertices, opts) {

    var offset = opts.radius || 10;

    var c1, c2, d1, d2, prev, next;

    // Construct the `d` attribute of the `<path>` element.
    var d = ['M', sourcePoint.x, sourcePoint.y];

    _.each(vertices, function(vertex, index) {

        // the closest vertices
        prev = vertices[index - 1] || sourcePoint;
        next = vertices[index + 1] || targetPoint;

        // a half distance to the closest vertex
        d1 = d2 || g.point(vertex).distance(prev) / 2;
        d2 = g.point(vertex).distance(next) / 2;

        // control points
        c1 = g.point(vertex).move(prev, -Math.min(offset, d1)).round();
        c2 = g.point(vertex).move(next, -Math.min(offset, d2)).round();

        d.push(c1.x, c1.y, 'S', vertex.x, vertex.y, c2.x, c2.y, 'L');
    });

    d.push(targetPoint.x, targetPoint.y);

    return d.join(' ');
};

joint.connectors.smooth = function(sourcePoint, targetPoint, vertices) {

    var d;

    if (vertices.length) {

        d = g.bezier.curveThroughPoints([sourcePoint].concat(vertices).concat([targetPoint]));

    } else {
        // if we have no vertices use a default cubic bezier curve, cubic bezier requires
        // two control points. The two control points are both defined with X as mid way
        // between the source and target points. SourceControlPoint Y is equal to sourcePoint Y
        // and targetControlPointY being equal to targetPointY. Handle situation were
        // sourcePointX is greater or less then targetPointX.
        var controlPointX = (sourcePoint.x < targetPoint.x)
                ? targetPoint.x - ((targetPoint.x - sourcePoint.x) / 2)
                : sourcePoint.x - ((sourcePoint.x - targetPoint.x) / 2);

        d = [
            'M', sourcePoint.x, sourcePoint.y,
            'C', controlPointX, sourcePoint.y, controlPointX, targetPoint.y,
            targetPoint.x, targetPoint.y
        ];
    }

    return d.join(' ');
};

joint.connectors.jumpover = (function(_, g) {

    // default size of jump if not specified in options
    var JUMP_SIZE = 5;

    // default size of jump if not specified in options
    var JUMP_TYPES = ['arc', 'gap'];

    // takes care of math. error for case when jump is too close to end of line
    var CLOSE_PROXIMITY_PADDING = 1;

    /**
     * Transform start/end and vertices into series of lines
     * @param {g.point} sourcePoint start point
     * @param {g.point} targetPoint end point
     * @param {g.point[]} vertices optional list of vertices
     * @return {g.line[]} [description]
     */
    function createLines(sourcePoint, targetPoint, vertices) {
        // make a flattened array of all points
        var points = [].concat(sourcePoint, vertices, targetPoint);
        return points.reduce(function(resultLines, point, idx) {
            // if there is a next point, make a line with it
            var nextPoint = points[idx + 1];
            if (nextPoint != null) {
                resultLines[idx] = g.line(point, nextPoint);
            }
            return resultLines;
        }, []);
    }

    function setupUpdating(jumpOverLinkView) {
        var updateList = jumpOverLinkView.paper._jumpOverUpdateList;

        // first time setup for this paper
        if (updateList == null) {
            updateList = jumpOverLinkView.paper._jumpOverUpdateList = [];
            jumpOverLinkView.paper.on('cell:pointerup', updateJumpOver);
        }

        // add this link to a list so it can be updated when some other link is updated
        if (updateList.indexOf(jumpOverLinkView) < 0) {
            updateList.push(jumpOverLinkView);

            // watch for change of connector type or removal of link itself
            // to remove the link from a list of jump over connectors
            jumpOverLinkView.listenToOnce(jumpOverLinkView.model, 'change:connector remove', function() {
                updateList.splice(updateList.indexOf(jumpOverLinkView), 1);
            });
        }
    }

    /**
     * Handler for a batch:stop event to force
     * update of all registered links with jump over connector
     * @param {object} batchEvent optional object with info about batch
     */
    function updateJumpOver() {
        var updateList = this._jumpOverUpdateList;
        for (var i = 0; i < updateList.length; i++) {
            updateList[i].update();
        }
    }

    /**
     * Utility function to collect all intersection poinst of a single
     * line against group of other lines.
     * @param {g.line} line where to find points
     * @param {g.line[]} crossCheckLines lines to cross
     * @return {g.point[]} list of intersection points
     */
    function findLineIntersections(line, crossCheckLines) {
        return _(crossCheckLines).map(function(crossCheckLine) {
            return line.intersection(crossCheckLine);
        }).compact().value();
    }

    /**
     * Sorting function for list of points by their distance.
     * @param {g.point} p1 first point
     * @param {g.point} p2 second point
     * @return {number} squared distance between points
     */
    function sortPoints(p1, p2) {
        return g.line(p1, p2).squaredLength();
    }

    /**
     * Split input line into multiple based on intersection points.
     * @param {g.line} line input line to split
     * @param {g.point[]} intersections poinst where to split the line
     * @param {number} jumpSize the size of jump arc (length empty spot on a line)
     * @return {g.line[]} list of lines being split
     */
    function createJumps(line, intersections, jumpSize) {
        return intersections.reduce(function(resultLines, point, idx) {
            // skipping points that were merged with the previous line
            // to make bigger arc over multiple lines that are close to each other
            if (point.skip === true) {
                return resultLines;
            }

            // always grab the last line from buffer and modify it
            var lastLine = resultLines.pop() || line;

            // calculate start and end of jump by moving by a given size of jump
            var jumpStart = g.point(point).move(lastLine.start, -(jumpSize));
            var jumpEnd = g.point(point).move(lastLine.start, +(jumpSize));

            // now try to look at the next intersection point
            var nextPoint = intersections[idx + 1];
            if (nextPoint != null) {
                var distance = jumpEnd.distance(nextPoint);
                if (distance <= jumpSize) {
                    // next point is close enough, move the jump end by this
                    // difference and mark the next point to be skipped
                    jumpEnd = nextPoint.move(lastLine.start, distance);
                    nextPoint.skip = true;
                }
            } else {
                // this block is inside of `else` as an optimization so the distance is
                // not calculated when we know there are no other intersection points
                var endDistance = jumpStart.distance(lastLine.end);
                // if the end is too close to possible jump, draw remaining line instead of a jump
                if (endDistance < jumpSize * 2 + CLOSE_PROXIMITY_PADDING) {
                    resultLines.push(lastLine);
                    return resultLines;
                }
            }

            if (resultLines.length > 0) {
                var startDistance = jumpEnd.distance(resultLines[0].start);
                if (startDistance < jumpSize * 2 + CLOSE_PROXIMITY_PADDING) {
                    // if the start of line is too close to jump, draw that line instead of a jump
                    resultLines.push(lastLine);
                    return resultLines;
                }
            }

            // finally create a jump line
            var jumpLine = g.line(jumpStart, jumpEnd);
            // it's just simple line but with a `isJump` property
            jumpLine.isJump = true;

            resultLines.push(
                g.line(lastLine.start, jumpStart),
                jumpLine,
                g.line(jumpEnd, lastLine.end)
            );
            return resultLines;
        }, []);
    }

    /**
     * Assemble `D` attribute of a SVG path by iterating given lines.
     * @param {g.line[]} lines source lines to use
     * @param {number} jumpSize the size of jump arc (length empty spot on a line)
     * @return {string}
     */
    function buildPath(lines, jumpSize, jumpType) {
        // first move to the start of a first line
        var start = ['M', lines[0].start.x, lines[0].start.y];

        // make a paths from lines
        var paths = _(lines).map(function(line) {
            if (line.isJump) {
                if (jumpType === 'arc') {
                    var diff = line.start.difference(line.end);
                    // determine rotation of arc based on difference between points
                    var xAxisRotate = Number(diff.x < 0 && diff.y < 0);
                    // for a jump line we create a arc instead
                    return ['A', jumpSize, jumpSize, 0, 0, xAxisRotate, line.end.x, line.end.y];
                } else if (jumpType === 'gap') {
                    return ['M', line.end.x, line.end.y];
                }
            }
            return ['L', line.end.x, line.end.y];
        }).flatten().value();

        return [].concat(start, paths).join(' ');
    }

    /**
     * Actual connector function that will be run on every update.
     * @param {g.point} sourcePoint start point of this link
     * @param {g.point} targetPoint end point of this link
     * @param {g.point[]} vertices of this link
     * @param {object} opts options
     * @property {number} size optional size of a jump arc
     * @return {string} created `D` attribute of SVG path
     */
    return function(sourcePoint, targetPoint, vertices, opts) { // eslint-disable-line max-params

        setupUpdating(this);

        var jumpSize = opts.size || JUMP_SIZE;
        var jumpType = opts.jump && ('' + opts.jump).toLowerCase();

        // grab the first jump type as a default if specified one is invalid
        if (JUMP_TYPES.indexOf(jumpType) === -1) {
            jumpType = JUMP_TYPES[0];
        }

        var paper = this.paper;
        var graph = paper.model;
        var allLinks = graph.getLinks();

        // there is just one link, draw it directly
        if (allLinks.length === 1) {
            return buildPath(
                createLines(sourcePoint, targetPoint, vertices),
                jumpSize, jumpType
            );
        }

        var thisModel = this.model;
        var thisIndex = allLinks.indexOf(thisModel);

        // filter out links that are above this one and  have the same connector type
        // otherwise there would double hoops for each intersection
        var links = allLinks.filter(function(link, idx) {
            if (idx > thisIndex) {
                var connector = link.get('connector');
                return !(connector && connector.name === 'jumpover');
            }
            return true;
        });

        // find views for all links
        var linkViews = links.map(function(link) {
            return paper.findViewByModel(link);
        });

        // create lines for each link
        var linkLines = linkViews.map(function(linkView) {
            if (linkView == null) {
                return [];
            }
            return createLines(
                linkView.sourcePoint,
                linkView.targetPoint,
                linkView.route
            );
        });

        var thisLines = linkLines[thisIndex];

        // transform lines for this link by splitting with jump lines at
        // points of intersection with other links
        var jumpingLines = thisLines.reduce(function(resultLines, thisLine) {
            // iterate all links and grab the intersections with this line
            // these are then sorted by distance so the line can be split more easily
            var intersections = _(links).map(function(link, i) {
                // don't intersection with itself
                if (link === thisModel) {
                    return null;
                }
                return findLineIntersections(thisLine, linkLines[i]);
            }).flatten().compact().sortBy(_.partial(sortPoints, thisLine.start)).value();

            if (intersections.length > 0) {
                // split the line based on found intersection points
                resultLines.push.apply(resultLines, createJumps(thisLine, intersections, jumpSize));
            } else {
                // without any intersection the line goes uninterrupted
                resultLines.push(thisLine);
            }
            return resultLines;
        }, []);

        return buildPath(jumpingLines, jumpSize, jumpType);
    };
}(_, g));

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.erd = {};

joint.shapes.erd.Entity = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'erd.Entity',
        size: { width: 150, height: 60 },
        attrs: {
            '.outer': {
                fill: '#2ECC71', stroke: '#27AE60', 'stroke-width': 2,
                points: '100,0 100,60 0,60 0,0'
            },
            '.inner': {
                fill: '#2ECC71', stroke: '#27AE60', 'stroke-width': 2,
                points: '95,5 95,55 5,55 5,5',
                display: 'none'
            },
            text: {
                text: 'Entity',
                'font-family': 'Arial', 'font-size': 14,
                ref: '.outer', 'ref-x': .5, 'ref-y': .5,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.erd.WeakEntity = joint.shapes.erd.Entity.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.WeakEntity',

        attrs: {
            '.inner' : { display: 'auto' },
            text: { text: 'Weak Entity' }
        }

    }, joint.shapes.erd.Entity.prototype.defaults)
});

joint.shapes.erd.Relationship = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'erd.Relationship',
        size: { width: 80, height: 80 },
        attrs: {
            '.outer': {
                fill: '#3498DB', stroke: '#2980B9', 'stroke-width': 2,
                points: '40,0 80,40 40,80 0,40'
            },
            '.inner': {
                fill: '#3498DB', stroke: '#2980B9', 'stroke-width': 2,
                points: '40,5 75,40 40,75 5,40',
                display: 'none'
            },
            text: {
                text: 'Relationship',
                'font-family': 'Arial', 'font-size': 12,
                ref: '.', 'ref-x': .5, 'ref-y': .5,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.erd.IdentifyingRelationship = joint.shapes.erd.Relationship.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.IdentifyingRelationship',

        attrs: {
            '.inner': { display: 'auto' },
            text: { text: 'Identifying' }
        }

    }, joint.shapes.erd.Relationship.prototype.defaults)
});

joint.shapes.erd.Attribute = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'erd.Attribute',
        size: { width: 100, height: 50 },
        attrs: {
            'ellipse': {
                transform: 'translate(50, 25)'
            },
            '.outer': {
                stroke: '#D35400', 'stroke-width': 2,
                cx: 0, cy: 0, rx: 50, ry: 25,
                fill: '#E67E22'
            },
            '.inner': {
                stroke: '#D35400', 'stroke-width': 2,
                cx: 0, cy: 0, rx: 45, ry: 20,
                fill: '#E67E22', display: 'none'
            },
            text: {
                 'font-family': 'Arial', 'font-size': 14,
                 ref: '.', 'ref-x': .5, 'ref-y': .5,
                 'x-alignment': 'middle', 'y-alignment': 'middle'
             }
        }

    }, joint.dia.Element.prototype.defaults)

});

joint.shapes.erd.Multivalued = joint.shapes.erd.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.Multivalued',

        attrs: {
             '.inner': { display: 'block' },
             text: { text: 'multivalued' }
         }
    }, joint.shapes.erd.Attribute.prototype.defaults)
});

joint.shapes.erd.Derived = joint.shapes.erd.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.Derived',

        attrs: {
             '.outer': { 'stroke-dasharray': '3,5' },
             text: { text: 'derived' }
         }

    }, joint.shapes.erd.Attribute.prototype.defaults)
});

joint.shapes.erd.Key = joint.shapes.erd.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.Key',

        attrs: {
             ellipse: { 'stroke-width': 4 },
             text: { text: 'key', 'font-weight': '800', 'text-decoration': 'underline' }
         }
    }, joint.shapes.erd.Attribute.prototype.defaults)
});

joint.shapes.erd.Normal = joint.shapes.erd.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.Normal',

        attrs: { text: { text: 'Normal' }}

    }, joint.shapes.erd.Attribute.prototype.defaults)
});

joint.shapes.erd.ISA = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'erd.ISA',
        size: { width: 100, height: 50 },
        attrs: {
            polygon: {
                points: '0,0 50,50 100,0',
                fill: '#F1C40F', stroke: '#F39C12', 'stroke-width': 2
            },
            text: {
                text: 'ISA', 'font-size': 18,
                ref: 'polygon', 'ref-x': .5, 'ref-y': .3,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)

});

joint.shapes.erd.Line = joint.dia.Link.extend({

    defaults: { type: 'erd.Line' },

    cardinality: function(value) {
        this.set('labels', [{ position: -20, attrs: { text: { dy: -8, text: value }}}]);
    }
});

joint.shapes.fsa = {};

joint.shapes.fsa.State = joint.shapes.basic.Circle.extend({
    defaults: joint.util.deepSupplement({
        type: 'fsa.State',
        attrs: {
            circle: { 'stroke-width': 3 },
            text: { 'font-weight': '800' }
        }
    }, joint.shapes.basic.Circle.prototype.defaults)
});

joint.shapes.fsa.StartState = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'fsa.StartState',
        size: { width: 20, height: 20 },
        attrs: {
            circle: {
                transform: 'translate(10, 10)',
                r: 10,
                fill: '#000000'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.fsa.EndState = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'fsa.EndState',
        size: { width: 20, height: 20 },
        attrs: {
            '.outer': {
                transform: 'translate(10, 10)',
                r: 10,
                fill: '#ffffff',
                stroke: '#000000'
            },

            '.inner': {
                transform: 'translate(10, 10)',
                r: 6,
                fill: '#000000'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.fsa.Arrow = joint.dia.Link.extend({

    defaults: joint.util.deepSupplement({
        type: 'fsa.Arrow',
        attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }},
        smooth: true
    }, joint.dia.Link.prototype.defaults)
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.org = {};

joint.shapes.org.Member = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect class="card"/><image/></g><text class="rank"/><text class="name"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'org.Member',
        size: { width: 180, height: 70 },
        attrs: {

            rect: { width: 170, height: 60 },

            '.card': {
                fill: '#FFFFFF', stroke: '#000000', 'stroke-width': 2,
                'pointer-events': 'visiblePainted', rx: 10, ry: 10
            },

            image: {
                width: 48, height: 48,
                ref: '.card', 'ref-x': 10, 'ref-y': 5
            },

            '.rank': {
                'text-decoration': 'underline',
                ref: '.card', 'ref-x': 0.9, 'ref-y': 0.2,
                'font-family': 'Courier New', 'font-size': 14,
                'text-anchor': 'end'
            },

            '.name': {
                'font-weight': '800',
                ref: '.card', 'ref-x': 0.9, 'ref-y': 0.6,
                'font-family': 'Courier New', 'font-size': 14,
                'text-anchor': 'end'
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.org.Arrow = joint.dia.Link.extend({

    defaults: {
        type: 'org.Arrow',
        source: { selector: '.card' }, target: { selector: '.card' },
        attrs: { '.connection': { stroke: '#585858', 'stroke-width': 3 }},
        z: -1
    }
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.chess = {};

joint.shapes.chess.KingWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"><path      d="M 22.5,11.63 L 22.5,6"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path      d="M 20,8 L 25,8"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path      d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"      style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />    <path      d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 11.5,30 C 17,27 27,27 32.5,30"      style="fill:none; stroke:#000000;" />    <path      d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"      style="fill:none; stroke:#000000;" />    <path      d="M 11.5,37 C 17,34 27,34 32.5,37"      style="fill:none; stroke:#000000;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.KingWhite',
        size: { width: 42, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.KingBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path       d="M 22.5,11.63 L 22.5,6"       style="fill:none; stroke:#000000; stroke-linejoin:miter;"       id="path6570" />    <path       d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"       style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />    <path       d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "       style="fill:#000000; stroke:#000000;" />    <path       d="M 20,8 L 25,8"       style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path       d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"       style="fill:none; stroke:#ffffff;" />    <path       d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"       style="fill:none; stroke:#ffffff;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.KingBlack',
        size: { width: 42, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.QueenWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(-1,-1)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(15.5,-5.5)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(32,-1)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(7,-4.5)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(24,-4)" />    <path      d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "      style="stroke-linecap:butt;" />    <path      d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "      style="stroke-linecap:butt;" />    <path      d="M 11.5,30 C 15,29 30,29 33.5,30"      style="fill:none;" />    <path      d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"      style="fill:none;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.QueenWhite',
        size: { width: 42, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.QueenBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#000000; stroke:none;">      <circle cx="6"    cy="12" r="2.75" />      <circle cx="14"   cy="9"  r="2.75" />      <circle cx="22.5" cy="8"  r="2.75" />      <circle cx="31"   cy="9"  r="2.75" />      <circle cx="39"   cy="12" r="2.75" />    </g>    <path       d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"       style="stroke-linecap:butt; stroke:#000000;" />    <path       d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"       style="stroke-linecap:butt;" />    <path       d="M 11,38.5 A 35,35 1 0 0 34,38.5"       style="fill:none; stroke:#000000; stroke-linecap:butt;" />    <path       d="M 11,29 A 35,35 1 0 1 34,29"       style="fill:none; stroke:#ffffff;" />    <path       d="M 12.5,31.5 L 32.5,31.5"       style="fill:none; stroke:#ffffff;" />    <path       d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"       style="fill:none; stroke:#ffffff;" />    <path       d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"       style="fill:none; stroke:#ffffff;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.QueenBlack',
        size: { width: 42, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.RookWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "      style="stroke-linecap:butt;" />    <path      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "      style="stroke-linecap:butt;" />    <path      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"      style="stroke-linecap:butt;" />    <path      d="M 34,14 L 31,17 L 14,17 L 11,14" />    <path      d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"      style="stroke-linecap:butt; stroke-linejoin:miter;" />    <path      d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />    <path      d="M 11,14 L 34,14"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.RookWhite',
        size: { width: 32, height: 34 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.RookBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "      style="stroke-linecap:butt;" />    <path      d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "      style="stroke-linecap:butt;" />    <path      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "      style="stroke-linecap:butt;" />    <path      d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "      style="stroke-linecap:butt;stroke-linejoin:miter;" />    <path      d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "      style="stroke-linecap:butt;" />    <path      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "      style="stroke-linecap:butt;" />    <path      d="M 12,35.5 L 33,35.5 L 33,35.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 13,31.5 L 32,31.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 14,29.5 L 31,29.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 14,16.5 L 31,16.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 11,14 L 34,14"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.RookBlack',
        size: { width: 32, height: 34 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.BishopWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">       <path        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />      <path        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />      <path        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />    </g>    <path      d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.BishopWhite',
        size: { width: 38, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.BishopBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;">       <path        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />      <path        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />      <path        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />    </g>    <path       d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"       style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.BishopBlack',
        size: { width: 38, height: 38 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.KnightWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"      style="fill:#000000; stroke:#000000;" />    <path      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"      style="fill:#000000; stroke:#000000;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.KnightWhite',
        size: { width: 38, height: 37 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.KnightBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"      style="fill:#000000; stroke:#000000;" />    <path      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"      style="fill:#000000; stroke:#000000;" />    <path      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"      style="fill:#ffffff; stroke:#ffffff;" />    <path      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"      style="fill:#ffffff; stroke:#ffffff;" />    <path      d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "      style="fill:#ffffff; stroke:none;" />  </g></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.KnightBlack',
        size: { width: 38, height: 37 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.PawnWhite = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "  style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" /></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.PawnWhite',
        size: { width: 28, height: 33 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.chess.PawnBlack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "  style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" /></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'chess.PawnBlack',
        size: { width: 28, height: 33 }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.pn = {};

joint.shapes.pn.Place = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle class="root"/><g class="tokens" /></g><text class="label"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'pn.Place',
        size: { width: 50, height: 50 },
        attrs: {
            '.root': {
                r: 25,
                fill: '#ffffff',
                stroke: '#000000',
                transform: 'translate(25, 25)'
            },
            '.label': {
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-y': -20,
                ref: '.root',
                fill: '#000000',
                'font-size': 12
            },
            '.tokens > circle': {
                fill: '#000000',
                r: 5
            },
            '.tokens.one > circle': { transform: 'translate(25, 25)' },

            '.tokens.two > circle:nth-child(1)': { transform: 'translate(19, 25)' },
            '.tokens.two > circle:nth-child(2)': { transform: 'translate(31, 25)' },

            '.tokens.three > circle:nth-child(1)': { transform: 'translate(18, 29)' },
            '.tokens.three > circle:nth-child(2)': { transform: 'translate(25, 19)' },
            '.tokens.three > circle:nth-child(3)': { transform: 'translate(32, 29)' },

            '.tokens.alot > text': {
                transform: 'translate(25, 18)',
                'text-anchor': 'middle',
                fill: '#000000'
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.pn.PlaceView = joint.dia.ElementView.extend({

    initialize: function() {

        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.model.on('change:tokens', function() {

            this.renderTokens();
            this.update();

        }, this);
    },

    render: function() {

        joint.dia.ElementView.prototype.render.apply(this, arguments);

        this.renderTokens();
        this.update();
    },

    renderTokens: function() {

        var $tokens = this.$('.tokens').empty();
        $tokens[0].className.baseVal = 'tokens';

        var tokens = this.model.get('tokens');

        if (!tokens) return;

        switch (tokens) {

            case 1:
                $tokens[0].className.baseVal += ' one';
                $tokens.append(V('<circle/>').node);
                break;

            case 2:
                $tokens[0].className.baseVal += ' two';
                $tokens.append(V('<circle/>').node, V('<circle/>').node);
                break;

            case 3:
                $tokens[0].className.baseVal += ' three';
                $tokens.append(V('<circle/>').node, V('<circle/>').node, V('<circle/>').node);
                break;

            default:
                $tokens[0].className.baseVal += ' alot';
                $tokens.append(V('<text/>').text(tokens + '' ).node);
                break;
        }
    }
});


joint.shapes.pn.Transition = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect class="root"/></g></g><text class="label"/>',

    defaults: joint.util.deepSupplement({

        type: 'pn.Transition',
        size: { width: 12, height: 50 },
        attrs: {
            'rect': {
                width: 12,
                height: 50,
                fill: '#000000',
                stroke: '#000000'
            },
            '.label': {
                'text-anchor': 'middle',
                'ref-x': .5,
                'ref-y': -20,
                ref: 'rect',
                fill: '#000000',
                'font-size': 12
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)
});

joint.shapes.pn.Link = joint.dia.Link.extend({

    defaults: joint.util.deepSupplement({

        type: 'pn.Link',
        attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }}

    }, joint.dia.Link.prototype.defaults)
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.devs = {};

joint.shapes.devs.Model = joint.shapes.basic.Generic.extend(_.extend({}, joint.shapes.basic.PortsModelInterface, {

    markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
    portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/><text class="port-label"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'devs.Model',
        size: { width: 1, height: 1 },

        inPorts: [],
        outPorts: [],

        attrs: {
            '.': { magnet: false },
            '.body': {
                width: 150, height: 250,
                stroke: '#000000'
            },
            '.port-body': {
                r: 10,
                magnet: true,
                stroke: '#000000'
            },
            text: {
                'pointer-events': 'none'
            },
            '.label': { text: 'Model', 'ref-x': .5, 'ref-y': 10, ref: '.body', 'text-anchor': 'middle', fill: '#000000' },
            '.inPorts .port-label': { x:-15, dy: 4, 'text-anchor': 'end', fill: '#000000' },
            '.outPorts .port-label':{ x: 15, dy: 4, fill: '#000000' }
        }

    }, joint.shapes.basic.Generic.prototype.defaults),

    getPortAttrs: function(portName, index, total, selector, type) {

        var attrs = {};

        var portClass = 'port' + index;
        var portSelector = selector + '>.' + portClass;
        var portLabelSelector = portSelector + '>.port-label';
        var portBodySelector = portSelector + '>.port-body';

        attrs[portLabelSelector] = { text: portName };
        attrs[portBodySelector] = { port: { id: portName || _.uniqueId(type) , type: type } };
        attrs[portSelector] = { ref: '.body', 'ref-y': (index + 0.5) * (1 / total) };

        if (selector === '.outPorts') { attrs[portSelector]['ref-dx'] = 0; }

        return attrs;
    }
}));


joint.shapes.devs.Atomic = joint.shapes.devs.Model.extend({

    defaults: joint.util.deepSupplement({

        type: 'devs.Atomic',
        size: { width: 80, height: 80 },
        attrs: {
            '.body': { fill: 'salmon' },
            '.label': { text: 'Atomic' },
            '.inPorts .port-body': { fill: 'PaleGreen' },
            '.outPorts .port-body': { fill: 'Tomato' }
        }

    }, joint.shapes.devs.Model.prototype.defaults)

});

joint.shapes.devs.Coupled = joint.shapes.devs.Model.extend({

    defaults: joint.util.deepSupplement({

        type: 'devs.Coupled',
        size: { width: 200, height: 300 },
        attrs: {
            '.body': { fill: 'seaGreen' },
            '.label': { text: 'Coupled' },
            '.inPorts .port-body': { fill: 'PaleGreen' },
            '.outPorts .port-body': { fill: 'Tomato' }
        }

    }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.Link = joint.dia.Link.extend({

    defaults: {
        type: 'devs.Link',
        attrs: { '.connection' : { 'stroke-width' :  2 }}
    }
});

joint.shapes.devs.ModelView = joint.dia.ElementView.extend(joint.shapes.basic.PortsViewInterface);
joint.shapes.devs.AtomicView = joint.shapes.devs.ModelView;
joint.shapes.devs.CoupledView = joint.shapes.devs.ModelView;

joint.shapes.uml = {};

joint.shapes.uml.Class = joint.shapes.basic.Generic.extend({

    markup: [
        '<g class="rotatable">',
          '<g class="scalable">',
            '<rect class="uml-class-name-rect"/><rect class="uml-class-attrs-rect"/><rect class="uml-class-methods-rect"/>',
          '</g>',
          '<text class="uml-class-name-text"/><text class="uml-class-attrs-text"/><text class="uml-class-methods-text"/>',
        '</g>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'uml.Class',

        attrs: {
            rect: { 'width': 200 },

            '.uml-class-name-rect': { 'stroke': 'black', 'stroke-width': 2, 'fill': '#3498db' },
            '.uml-class-attrs-rect': { 'stroke': 'black', 'stroke-width': 2, 'fill': '#2980b9' },
            '.uml-class-methods-rect': { 'stroke': 'black', 'stroke-width': 2, 'fill': '#2980b9' },

            '.uml-class-name-text': {
                'ref': '.uml-class-name-rect', 'ref-y': .5, 'ref-x': .5, 'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold',
                'fill': 'black', 'font-size': 12, 'font-family': 'Times New Roman'
            },
            '.uml-class-attrs-text': {
                'ref': '.uml-class-attrs-rect', 'ref-y': 5, 'ref-x': 5,
                'fill': 'black', 'font-size': 12, 'font-family': 'Times New Roman'
            },
            '.uml-class-methods-text': {
                'ref': '.uml-class-methods-rect', 'ref-y': 5, 'ref-x': 5,
                'fill': 'black', 'font-size': 12, 'font-family': 'Times New Roman'
            }
        },

        name: [],
        attributes: [],
        methods: []

    }, joint.shapes.basic.Generic.prototype.defaults),

    initialize: function() {

        this.on('change:name change:attributes change:methods', function() {
            this.updateRectangles();
            this.trigger('uml-update');
        }, this);

        this.updateRectangles();

        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    },

    getClassName: function() {
        return this.get('name');
    },

    updateRectangles: function() {

        var attrs = this.get('attrs');

        var rects = [
            { type: 'name', text: this.getClassName() },
            { type: 'attrs', text: this.get('attributes') },
            { type: 'methods', text: this.get('methods') }
        ];

        var offsetY = 0;

        _.each(rects, function(rect) {

            var lines = _.isArray(rect.text) ? rect.text : [rect.text];
            var rectHeight = lines.length * 20 + 20;

            attrs['.uml-class-' + rect.type + '-text'].text = lines.join('\n');
            attrs['.uml-class-' + rect.type + '-rect'].height = rectHeight;
            attrs['.uml-class-' + rect.type + '-rect'].transform = 'translate(0,' + offsetY + ')';

            offsetY += rectHeight;
        });
    }

});

joint.shapes.uml.ClassView = joint.dia.ElementView.extend({

    initialize: function() {

        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.listenTo(this.model, 'uml-update', function() {
            this.update();
            this.resize();
        });
    }
});

joint.shapes.uml.Abstract = joint.shapes.uml.Class.extend({

    defaults: joint.util.deepSupplement({
        type: 'uml.Abstract',
        attrs: {
            '.uml-class-name-rect': { fill : '#e74c3c' },
            '.uml-class-attrs-rect': { fill : '#c0392b' },
            '.uml-class-methods-rect': { fill : '#c0392b' }
        }
    }, joint.shapes.uml.Class.prototype.defaults),

    getClassName: function() {
        return ['<<Abstract>>', this.get('name')];
    }

});
joint.shapes.uml.AbstractView = joint.shapes.uml.ClassView;

joint.shapes.uml.Interface = joint.shapes.uml.Class.extend({

    defaults: joint.util.deepSupplement({
        type: 'uml.Interface',
        attrs: {
            '.uml-class-name-rect': { fill : '#f1c40f' },
            '.uml-class-attrs-rect': { fill : '#f39c12' },
            '.uml-class-methods-rect': { fill : '#f39c12' }
        }
    }, joint.shapes.uml.Class.prototype.defaults),

    getClassName: function() {
        return ['<<Interface>>', this.get('name')];
    }

});
joint.shapes.uml.InterfaceView = joint.shapes.uml.ClassView;

joint.shapes.uml.Generalization = joint.dia.Link.extend({
    defaults: {
        type: 'uml.Generalization',
        attrs: { '.marker-target': { d: 'M 20 0 L 0 10 L 20 20 z', fill: 'white' }}
    }
});

joint.shapes.uml.Implementation = joint.dia.Link.extend({
    defaults: {
        type: 'uml.Implementation',
        attrs: {
            '.marker-target': { d: 'M 20 0 L 0 10 L 20 20 z', fill: 'white' },
            '.connection': { 'stroke-dasharray': '3,3' }
        }
    }
});

joint.shapes.uml.Aggregation = joint.dia.Link.extend({
    defaults: {
        type: 'uml.Aggregation',
        attrs: { '.marker-target': { d: 'M 40 10 L 20 20 L 0 10 L 20 0 z', fill: 'white' }}
    }
});

joint.shapes.uml.Composition = joint.dia.Link.extend({
    defaults: {
        type: 'uml.Composition',
        attrs: { '.marker-target': { d: 'M 40 10 L 20 20 L 0 10 L 20 0 z', fill: 'black' }}
    }
});

joint.shapes.uml.Association = joint.dia.Link.extend({
    defaults: { type: 'uml.Association' }
});

// Statechart

joint.shapes.uml.State = joint.shapes.basic.Generic.extend({

    markup: [
        '<g class="rotatable">',
          '<g class="scalable">',
            '<rect class="uml-state-body"/>',
          '</g>',
          '<path class="uml-state-separator"/>',
          '<text class="uml-state-name"/>',
          '<text class="uml-state-events"/>',
        '</g>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'uml.State',

        attrs: {
            '.uml-state-body': {
                'width': 200, 'height': 200, 'rx': 10, 'ry': 10,
                'fill': '#ecf0f1', 'stroke': '#bdc3c7', 'stroke-width': 3
            },
            '.uml-state-separator': {
                'stroke': '#bdc3c7', 'stroke-width': 2
            },
            '.uml-state-name': {
                'ref': '.uml-state-body', 'ref-x': .5, 'ref-y': 5, 'text-anchor': 'middle',
                'fill': '#000000', 'font-family': 'Courier New', 'font-size': 14
            },
            '.uml-state-events': {
                'ref': '.uml-state-separator', 'ref-x': 5, 'ref-y': 5,
                'fill': '#000000', 'font-family': 'Courier New', 'font-size': 14
            }
        },

        name: 'State',
        events: []

    }, joint.shapes.basic.Generic.prototype.defaults),

    initialize: function() {

        this.on({
            'change:name': this.updateName,
            'change:events': this.updateEvents,
            'change:size': this.updatePath
        }, this);

        this.updateName();
        this.updateEvents();
        this.updatePath();

        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    },

    updateName: function() {

        this.attr('.uml-state-name/text', this.get('name'));
    },

    updateEvents: function() {

        this.attr('.uml-state-events/text', this.get('events').join('\n'));
    },

    updatePath: function() {

        var d = 'M 0 20 L ' + this.get('size').width + ' 20';

        // We are using `silent: true` here because updatePath() is meant to be called
        // on resize and there's no need to to update the element twice (`change:size`
        // triggers also an update).
        this.attr('.uml-state-separator/d', d, { silent: true });
    }

});

joint.shapes.uml.StartState = joint.shapes.basic.Circle.extend({

    defaults: joint.util.deepSupplement({

        type: 'uml.StartState',
        attrs: { circle: { 'fill': '#34495e', 'stroke': '#2c3e50', 'stroke-width': 2, 'rx': 1 }}

    }, joint.shapes.basic.Circle.prototype.defaults)

});

joint.shapes.uml.EndState = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>',

    defaults: joint.util.deepSupplement({

        type: 'uml.EndState',
        size: { width: 20, height: 20 },
        attrs: {
            'circle.outer': {
                transform: 'translate(10, 10)',
                r: 10,
                fill: '#ffffff',
                stroke: '#2c3e50'
            },

            'circle.inner': {
                transform: 'translate(10, 10)',
                r: 6,
                fill: '#34495e'
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)

});

joint.shapes.uml.Transition = joint.dia.Link.extend({
    defaults: {
        type: 'uml.Transition',
        attrs: {
            '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z', fill: '#34495e', stroke: '#2c3e50' },
            '.connection': { stroke: '#2c3e50' }
        }
    }
});

//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.logic = {};

joint.shapes.logic.Gate = joint.shapes.basic.Generic.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Gate',
        size: { width: 80, height: 40 },
        attrs: {
            '.': { magnet: false },
            '.body': { width: 100, height: 50 },
            circle: { r: 7, stroke: 'black', fill: 'transparent', 'stroke-width': 2 }
        }

    }, joint.shapes.basic.Generic.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.logic.IO = joint.shapes.logic.Gate.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><path class="wire"/><circle/><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'logic.IO',
        size: { width: 60, height: 30 },
        attrs: {
            '.body': { fill: 'white', stroke: 'black', 'stroke-width': 2 },
            '.wire': { ref: '.body', 'ref-y': .5, stroke: 'black' },
            text: {
                fill: 'black',
                ref: '.body', 'ref-x': .5, 'ref-y': .5, 'y-alignment': 'middle',
                'text-anchor': 'middle',
                'font-weight': 'bold',
                'font-variant': 'small-caps',
                'text-transform': 'capitalize',
                'font-size': '14px'
            }
        }

    }, joint.shapes.logic.Gate.prototype.defaults)

});

joint.shapes.logic.Input = joint.shapes.logic.IO.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Input',
        attrs: {
            '.wire': { 'ref-dx': 0, d: 'M 0 0 L 23 0' },
            circle: { ref: '.body', 'ref-dx': 30, 'ref-y': 0.5, magnet: true, 'class': 'output', port: 'out' },
            text: { text: 'input' }
        }

    }, joint.shapes.logic.IO.prototype.defaults)
});

joint.shapes.logic.Output = joint.shapes.logic.IO.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Output',
        attrs: {
            '.wire': { 'ref-x': 0, d: 'M 0 0 L -23 0' },
            circle: { ref: '.body', 'ref-x': -30, 'ref-y': 0.5, magnet: 'passive', 'class': 'input', port: 'in' },
            text: { text: 'output' }
        }

    }, joint.shapes.logic.IO.prototype.defaults)

});


joint.shapes.logic.Gate11 = joint.shapes.logic.Gate.extend({

    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><circle class="input"/><circle class="output"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'logic.Gate11',
        attrs: {
            '.input': { ref: '.body', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'in' },
            '.output': { ref: '.body', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'out' }
        }

    }, joint.shapes.logic.Gate.prototype.defaults)
});

joint.shapes.logic.Gate21 = joint.shapes.logic.Gate.extend({

    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><circle class="input input1"/><circle  class="input input2"/><circle class="output"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'logic.Gate21',
        attrs: {
            '.input1': { ref: '.body', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'in1' },
            '.input2': { ref: '.body', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'in2' },
            '.output': { ref: '.body', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'out' }
        }

    }, joint.shapes.logic.Gate.prototype.defaults)

});

joint.shapes.logic.Repeater = joint.shapes.logic.Gate11.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Repeater',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PVCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjgiCiAgICAgaW5rc2NhcGU6Y3g9Ijg0LjY4NTM1MiIKICAgICBpbmtzY2FwZTpjeT0iMTUuMjg4NjI4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzIuMTU2OTEsMjUgTCA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAyOS4wNDM0NzgsMjUgTCA1LjA0MzQ3ODEsMjUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAyOC45Njg3NSwyLjU5Mzc1IEwgMjguOTY4NzUsNSBMIDI4Ljk2ODc1LDQ1IEwgMjguOTY4NzUsNDcuNDA2MjUgTCAzMS4xMjUsNDYuMzQzNzUgTCA3Mi4xNTYyNSwyNi4zNDM3NSBMIDcyLjE1NjI1LDIzLjY1NjI1IEwgMzEuMTI1LDMuNjU2MjUgTCAyOC45Njg3NSwyLjU5Mzc1IHogTSAzMS45Njg3NSw3LjQwNjI1IEwgNjguMDkzNzUsMjUgTCAzMS45Njg3NSw0Mi41OTM3NSBMIDMxLjk2ODc1LDcuNDA2MjUgeiIKICAgICAgIGlkPSJwYXRoMjYzOCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo=' }}

    }, joint.shapes.logic.Gate11.prototype.defaults),

    operation: function(input) {
        return input;
    }

});

joint.shapes.logic.Not = joint.shapes.logic.Gate11.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Not',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PVCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjgiCiAgICAgaW5rc2NhcGU6Y3g9Ijg0LjY4NTM1MiIKICAgICBpbmtzY2FwZTpjeT0iMTUuMjg4NjI4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzkuMTU2OTEsMjUgTCA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAyOS4wNDM0NzgsMjUgTCA1LjA0MzQ3ODEsMjUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAyOC45Njg3NSwyLjU5Mzc1IEwgMjguOTY4NzUsNSBMIDI4Ljk2ODc1LDQ1IEwgMjguOTY4NzUsNDcuNDA2MjUgTCAzMS4xMjUsNDYuMzQzNzUgTCA3Mi4xNTYyNSwyNi4zNDM3NSBMIDcyLjE1NjI1LDIzLjY1NjI1IEwgMzEuMTI1LDMuNjU2MjUgTCAyOC45Njg3NSwyLjU5Mzc1IHogTSAzMS45Njg3NSw3LjQwNjI1IEwgNjguMDkzNzUsMjUgTCAzMS45Njg3NSw0Mi41OTM3NSBMIDMxLjk2ODc1LDcuNDA2MjUgeiIKICAgICAgIGlkPSJwYXRoMjYzOCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDI2NzEiCiAgICAgICBzb2RpcG9kaTpjeD0iNzYiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA4MCwyNSBBIDQsNCAwIDEgMSA3MiwyNSBBIDQsNCAwIDEgMSA4MCwyNSB6IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEsMCkiIC8+CiAgPC9nPgo8L3N2Zz4K' }}

    }, joint.shapes.logic.Gate11.prototype.defaults),

    operation: function(input) {
        return !input;
    }

});

joint.shapes.logic.Or = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Or',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik9SIEFOU0kuc3ZnIgogICBpbmtzY2FwZTpvdXRwdXRfZXh0ZW5zaW9uPSJvcmcuaW5rc2NhcGUub3V0cHV0LnN2Zy5pbmtzY2FwZSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjUwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjI1IDogMTAgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjcxNCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iMSA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMC41IDogMC4zMzMzMzMzMyA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyODA2IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyODE5IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjM3Mi4wNDcyNCA6IDM1MC43ODczOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI3NDQuMDk0NDggOiA1MjYuMTgxMDkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzc3IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49Ijc1IDogNDAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iMTUwIDogNjAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDYwIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTMyNzUiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNTAgOiAzMy4zMzMzMzMgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iMTAwIDogNTAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDUwIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTU1MzMiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzIgOiAyMS4zMzMzMzMgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNjQgOiAzMiA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzIgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjU1NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDE2LjY2NjY2NyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDI1IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAyNSA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNCIKICAgICBpbmtzY2FwZTpjeD0iMTEzLjAwMDM5IgogICAgIGlua3NjYXBlOmN5PSIxMi44OTM3MzEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImcyNTYwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1wb2ludHM9InRydWUiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAwMDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzk5IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg3NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMzciCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii00IgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNzAsMjUgYyAyMCwwIDI1LDAgMjUsMCIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMSwxNSA1LDE1IgogICAgICAgaWQ9InBhdGgzMDYxIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzIsMzUgNSwzNSIKICAgICAgIGlkPSJwYXRoMzk0NCIgLz4KICAgIDxnCiAgICAgICBpZD0iZzI1NjAiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjUsLTM5LjUpIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjQwNjI1LDQ0LjUgTCAtMC40MDYyNSw0Ni45Mzc1IEMgLTAuNDA2MjUsNDYuOTM3NSA1LjI1LDUzLjkzNzU0OSA1LjI1LDY0LjUgQyA1LjI1LDc1LjA2MjQ1MSAtMC40MDYyNSw4Mi4wNjI1IC0wLjQwNjI1LDgyLjA2MjUgTCAtMi40MDYyNSw4NC41IEwgMC43NSw4NC41IEwgMTQuNzUsODQuNSBDIDE3LjE1ODA3Niw4NC41MDAwMDEgMjIuNDM5Njk5LDg0LjUyNDUxNCAyOC4zNzUsODIuMDkzNzUgQyAzNC4zMTAzMDEsNzkuNjYyOTg2IDQwLjkxMTUzNiw3NC43NTA0ODQgNDYuMDYyNSw2NS4yMTg3NSBMIDQ0Ljc1LDY0LjUgTCA0Ni4wNjI1LDYzLjc4MTI1IEMgMzUuNzU5Mzg3LDQ0LjcxNTU5IDE5LjUwNjU3NCw0NC41IDE0Ljc1LDQ0LjUgTCAwLjc1LDQ0LjUgTCAtMi40MDYyNSw0NC41IHogTSAzLjQ2ODc1LDQ3LjUgTCAxNC43NSw0Ny41IEMgMTkuNDM0MTczLDQ3LjUgMzMuMDM2ODUsNDcuMzY5NzkzIDQyLjcxODc1LDY0LjUgQyAzNy45NTE5NjQsNzIuOTI5MDc1IDMyLjE5NzQ2OSw3Ny4xODM5MSAyNyw3OS4zMTI1IEMgMjEuNjM5MzM5LDgxLjUwNzkyNCAxNy4xNTgwNzUsODEuNTAwMDAxIDE0Ljc1LDgxLjUgTCAzLjUsODEuNSBDIDUuMzczNTg4NCw3OC4zOTE1NjYgOC4yNSw3Mi40NTA2NSA4LjI1LDY0LjUgQyA4LjI1LDU2LjUyNjY0NiA1LjM0MTQ2ODYsNTAuNTk5ODE1IDMuNDY4NzUsNDcuNSB6IgogICAgICAgICBpZD0icGF0aDQ5NzMiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NzY2NjY3NjY2NjY2NjY2NzY2NzYyIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return input1 || input2;
    }

});

joint.shapes.logic.And = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.And',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkFORCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI4IgogICAgIGlua3NjYXBlOmN4PSI1Ni42OTgzNDgiCiAgICAgaW5rc2NhcGU6Y3k9IjI1LjMyNjg5OSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDcwLDI1IGMgMjAsMCAyNSwwIDI1LDAiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEsMTUgNSwxNSIKICAgICAgIGlkPSJwYXRoMzA2MSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk5OTk5OTg4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMyLDM1IDUsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTptZWRpdW07Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7ZGlyZWN0aW9uOmx0cjtibG9jay1wcm9ncmVzc2lvbjp0Yjt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7Zm9udC1mYW1pbHk6Qml0c3RyZWFtIFZlcmEgU2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiCiAgICAgICBkPSJNIDMwLDUgTCAzMCw2LjQyODU3MTQgTCAzMCw0My41NzE0MjkgTCAzMCw0NSBMIDMxLjQyODU3MSw0NSBMIDUwLjQ3NjE5LDQ1IEMgNjEuNzQ0MDk4LDQ1IDcwLjQ3NjE5LDM1Ljk5OTk1NSA3MC40NzYxOSwyNSBDIDcwLjQ3NjE5LDE0LjAwMDA0NSA2MS43NDQwOTksNS4wMDAwMDAyIDUwLjQ3NjE5LDUgQyA1MC40NzYxOSw1IDUwLjQ3NjE5LDUgMzEuNDI4NTcxLDUgTCAzMCw1IHogTSAzMi44NTcxNDMsNy44NTcxNDI5IEMgNDAuODM0MjY0LDcuODU3MTQyOSA0NS45MTgzNjgsNy44NTcxNDI5IDQ4LjA5NTIzOCw3Ljg1NzE0MjkgQyA0OS4yODU3MTQsNy44NTcxNDI5IDQ5Ljg4MDk1Miw3Ljg1NzE0MjkgNTAuMTc4NTcxLDcuODU3MTQyOSBDIDUwLjMyNzM4MSw3Ljg1NzE0MjkgNTAuNDA5MjI3LDcuODU3MTQyOSA1MC40NDY0MjksNy44NTcxNDI5IEMgNTAuNDY1MDI5LDcuODU3MTQyOSA1MC40NzE1NDMsNy44NTcxNDI5IDUwLjQ3NjE5LDcuODU3MTQyOSBDIDYwLjIzNjg1Myw3Ljg1NzE0MyA2Ny4xNDI4NTcsMTUuNDk3MDk4IDY3LjE0Mjg1NywyNSBDIDY3LjE0Mjg1NywzNC41MDI5MDIgNTkuNzYwNjYyLDQyLjE0Mjg1NyA1MCw0Mi4xNDI4NTcgTCAzMi44NTcxNDMsNDIuMTQyODU3IEwgMzIuODU3MTQzLDcuODU3MTQyOSB6IgogICAgICAgaWQ9InBhdGgyODg0IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NzY2NjY3Nzc3NzY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return input1 && input2;
    }

});

joint.shapes.logic.Nor = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Nor',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PUiBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEiCiAgICAgaW5rc2NhcGU6Y3g9Ijc4LjY3NzY0NCIKICAgICBpbmtzY2FwZTpjeT0iMjIuMTAyMzQ0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjM3IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItNCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc5LDI1IEMgOTksMjUgOTUsMjUgOTUsMjUiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEsMTUgNSwxNSIKICAgICAgIGlkPSJwYXRoMzA2MSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk5OTk5OTg4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMyLDM1IDUsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8ZwogICAgICAgaWQ9ImcyNTYwIgogICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi41LC0zOS41KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi40MDYyNSw0NC41IEwgLTAuNDA2MjUsNDYuOTM3NSBDIC0wLjQwNjI1LDQ2LjkzNzUgNS4yNSw1My45Mzc1NDkgNS4yNSw2NC41IEMgNS4yNSw3NS4wNjI0NTEgLTAuNDA2MjUsODIuMDYyNSAtMC40MDYyNSw4Mi4wNjI1IEwgLTIuNDA2MjUsODQuNSBMIDAuNzUsODQuNSBMIDE0Ljc1LDg0LjUgQyAxNy4xNTgwNzYsODQuNTAwMDAxIDIyLjQzOTY5OSw4NC41MjQ1MTQgMjguMzc1LDgyLjA5Mzc1IEMgMzQuMzEwMzAxLDc5LjY2Mjk4NiA0MC45MTE1MzYsNzQuNzUwNDg0IDQ2LjA2MjUsNjUuMjE4NzUgTCA0NC43NSw2NC41IEwgNDYuMDYyNSw2My43ODEyNSBDIDM1Ljc1OTM4Nyw0NC43MTU1OSAxOS41MDY1NzQsNDQuNSAxNC43NSw0NC41IEwgMC43NSw0NC41IEwgLTIuNDA2MjUsNDQuNSB6IE0gMy40Njg3NSw0Ny41IEwgMTQuNzUsNDcuNSBDIDE5LjQzNDE3Myw0Ny41IDMzLjAzNjg1LDQ3LjM2OTc5MyA0Mi43MTg3NSw2NC41IEMgMzcuOTUxOTY0LDcyLjkyOTA3NSAzMi4xOTc0NjksNzcuMTgzOTEgMjcsNzkuMzEyNSBDIDIxLjYzOTMzOSw4MS41MDc5MjQgMTcuMTU4MDc1LDgxLjUwMDAwMSAxNC43NSw4MS41IEwgMy41LDgxLjUgQyA1LjM3MzU4ODQsNzguMzkxNTY2IDguMjUsNzIuNDUwNjUgOC4yNSw2NC41IEMgOC4yNSw1Ni41MjY2NDYgNS4zNDE0Njg2LDUwLjU5OTgxNSAzLjQ2ODc1LDQ3LjUgeiIKICAgICAgICAgaWQ9InBhdGg0OTczIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc2NjY2NzY2NjY2NjY2Njc2Njc2MiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgICBpZD0icGF0aDI2MDQiCiAgICAgICAgIHNvZGlwb2RpOmN4PSI3NSIKICAgICAgICAgc29kaXBvZGk6Y3k9IjI1IgogICAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgICAgc29kaXBvZGk6cnk9IjQiCiAgICAgICAgIGQ9Ik0gNzksMjUgQSA0LDQgMCAxIDEgNzEsMjUgQSA0LDQgMCAxIDEgNzksMjUgeiIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjUsMzkuNSkiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return !(input1 || input2);
    }

});

joint.shapes.logic.Nand = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Nand',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5BTkQgQU5TSS5zdmciCiAgIGlua3NjYXBlOm91dHB1dF9leHRlbnNpb249Im9yZy5pbmtzY2FwZS5vdXRwdXQuc3ZnLmlua3NjYXBlIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxMCA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzE0IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIwLjUgOiAwLjMzMzMzMzMzIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MDYiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MTkiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzcyLjA0NzI0IDogMzUwLjc4NzM5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9Ijc0NC4wOTQ0OCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTI2LjE4MTA5IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3NzciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNzUgOiA0MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxNTAgOiA2MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNjAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMzI3NSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI1MCA6IDMzLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxMDAgOiA1MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlNTUzMyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzMiA6IDIxLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI2NCA6IDMyIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzMiA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMTYiCiAgICAgaW5rc2NhcGU6Y3g9Ijc4LjI4MzMwNyIKICAgICBpbmtzY2FwZTpjeT0iMTYuNDQyODQzIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzksMjUgQyA5MS44LDI1IDk1LDI1IDk1LDI1IgogICAgICAgaWQ9InBhdGgzMDU5IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMxLDE1IDUsMTUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk4ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMiwzNSA1LDM1IgogICAgICAgaWQ9InBhdGgzOTQ0IiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCaXRzdHJlYW0gVmVyYSBTYW5zIgogICAgICAgZD0iTSAzMCw1IEwgMzAsNi40Mjg1NzE0IEwgMzAsNDMuNTcxNDI5IEwgMzAsNDUgTCAzMS40Mjg1NzEsNDUgTCA1MC40NzYxOSw0NSBDIDYxLjc0NDA5OCw0NSA3MC40NzYxOSwzNS45OTk5NTUgNzAuNDc2MTksMjUgQyA3MC40NzYxOSwxNC4wMDAwNDUgNjEuNzQ0MDk5LDUuMDAwMDAwMiA1MC40NzYxOSw1IEMgNTAuNDc2MTksNSA1MC40NzYxOSw1IDMxLjQyODU3MSw1IEwgMzAsNSB6IE0gMzIuODU3MTQzLDcuODU3MTQyOSBDIDQwLjgzNDI2NCw3Ljg1NzE0MjkgNDUuOTE4MzY4LDcuODU3MTQyOSA0OC4wOTUyMzgsNy44NTcxNDI5IEMgNDkuMjg1NzE0LDcuODU3MTQyOSA0OS44ODA5NTIsNy44NTcxNDI5IDUwLjE3ODU3MSw3Ljg1NzE0MjkgQyA1MC4zMjczODEsNy44NTcxNDI5IDUwLjQwOTIyNyw3Ljg1NzE0MjkgNTAuNDQ2NDI5LDcuODU3MTQyOSBDIDUwLjQ2NTAyOSw3Ljg1NzE0MjkgNTAuNDcxNTQzLDcuODU3MTQyOSA1MC40NzYxOSw3Ljg1NzE0MjkgQyA2MC4yMzY4NTMsNy44NTcxNDMgNjcuMTQyODU3LDE1LjQ5NzA5OCA2Ny4xNDI4NTcsMjUgQyA2Ny4xNDI4NTcsMzQuNTAyOTAyIDU5Ljc2MDY2Miw0Mi4xNDI4NTcgNTAsNDIuMTQyODU3IEwgMzIuODU3MTQzLDQyLjE0Mjg1NyBMIDMyLjg1NzE0Myw3Ljg1NzE0MjkgeiIKICAgICAgIGlkPSJwYXRoMjg4NCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2Njc2NjY2Nzc3Nzc2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDQwMDgiCiAgICAgICBzb2RpcG9kaTpjeD0iNzUiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA3OSwyNSBBIDQsNCAwIDEgMSA3MSwyNSBBIDQsNCAwIDEgMSA3OSwyNSB6IiAvPgogIDwvZz4KPC9zdmc+Cg==' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return !(input1 && input2);
    }

});

joint.shapes.logic.Xor = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Xor',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlhPUiBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MiIKICAgICBpbmtzY2FwZTpjeD0iMjUuOTM4MTE2IgogICAgIGlua3NjYXBlOmN5PSIxNy4yMzAwNSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDcwLDI1IGMgMjAsMCAyNSwwIDI1LDAiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzAuMzg1NzE3LDE1IEwgNC45OTk5OTk4LDE1IgogICAgICAgaWQ9InBhdGgzMDYxIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5NzY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEuMzYyMDkxLDM1IEwgNC45OTk5OTk4LDM1IgogICAgICAgaWQ9InBhdGgzOTQ0IiAvPgogICAgPGcKICAgICAgIGlkPSJnMjU2MCIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYuNSwtMzkuNSkiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDM1MTYiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi4yNSw4MS41MDAwMDUgQyAtMy44NDczNzQsODQuMTQ0NDA1IC00LjUsODQuNTAwMDA1IC00LjUsODQuNTAwMDA1IEwgLTguMTU2MjUsODQuNTAwMDA1IEwgLTYuMTU2MjUsODIuMDYyNTA1IEMgLTYuMTU2MjUsODIuMDYyNTA1IC0wLjUsNzUuMDYyNDUxIC0wLjUsNjQuNSBDIC0wLjUsNTMuOTM3NTQ5IC02LjE1NjI1LDQ2LjkzNzUgLTYuMTU2MjUsNDYuOTM3NSBMIC04LjE1NjI1LDQ0LjUgTCAtNC41LDQ0LjUgQyAtMy43MTg3NSw0NS40Mzc1IC0zLjA3ODEyNSw0Ni4xNTYyNSAtMi4yODEyNSw0Ny41IEMgLTAuNDA4NTMxLDUwLjU5OTgxNSAyLjUsNTYuNTI2NjQ2IDIuNSw2NC41IEMgMi41LDcyLjQ1MDY1IC0wLjM5NjY5Nyw3OC4zNzk0MjUgLTIuMjUsODEuNTAwMDA1IHoiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY3NjY2Njc2MiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi40MDYyNSw0NC41IEwgLTAuNDA2MjUsNDYuOTM3NSBDIC0wLjQwNjI1LDQ2LjkzNzUgNS4yNSw1My45Mzc1NDkgNS4yNSw2NC41IEMgNS4yNSw3NS4wNjI0NTEgLTAuNDA2MjUsODIuMDYyNSAtMC40MDYyNSw4Mi4wNjI1IEwgLTIuNDA2MjUsODQuNSBMIDAuNzUsODQuNSBMIDE0Ljc1LDg0LjUgQyAxNy4xNTgwNzYsODQuNTAwMDAxIDIyLjQzOTY5OSw4NC41MjQ1MTQgMjguMzc1LDgyLjA5Mzc1IEMgMzQuMzEwMzAxLDc5LjY2Mjk4NiA0MC45MTE1MzYsNzQuNzUwNDg0IDQ2LjA2MjUsNjUuMjE4NzUgTCA0NC43NSw2NC41IEwgNDYuMDYyNSw2My43ODEyNSBDIDM1Ljc1OTM4Nyw0NC43MTU1OSAxOS41MDY1NzQsNDQuNSAxNC43NSw0NC41IEwgMC43NSw0NC41IEwgLTIuNDA2MjUsNDQuNSB6IE0gMy40Njg3NSw0Ny41IEwgMTQuNzUsNDcuNSBDIDE5LjQzNDE3Myw0Ny41IDMzLjAzNjg1LDQ3LjM2OTc5MyA0Mi43MTg3NSw2NC41IEMgMzcuOTUxOTY0LDcyLjkyOTA3NSAzMi4xOTc0NjksNzcuMTgzOTEgMjcsNzkuMzEyNSBDIDIxLjYzOTMzOSw4MS41MDc5MjQgMTcuMTU4MDc1LDgxLjUwMDAwMSAxNC43NSw4MS41IEwgMy41LDgxLjUgQyA1LjM3MzU4ODQsNzguMzkxNTY2IDguMjUsNzIuNDUwNjUgOC4yNSw2NC41IEMgOC4yNSw1Ni41MjY2NDYgNS4zNDE0Njg2LDUwLjU5OTgxNSAzLjQ2ODc1LDQ3LjUgeiIKICAgICAgICAgaWQ9InBhdGg0OTczIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc2NjY2NzY2NjY2NjY2Njc2Njc2MiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return (!input1 || input2) && (input1 || !input2);
    }

});

joint.shapes.logic.Xnor = joint.shapes.logic.Gate21.extend({

    defaults: joint.util.deepSupplement({

        type: 'logic.Xnor',
        attrs: { image: { 'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlhOT1IgQU5TSS5zdmciCiAgIGlua3NjYXBlOm91dHB1dF9leHRlbnNpb249Im9yZy5pbmtzY2FwZS5vdXRwdXQuc3ZnLmlua3NjYXBlIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxMCA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzE0IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIwLjUgOiAwLjMzMzMzMzMzIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MDYiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MTkiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzcyLjA0NzI0IDogMzUwLjc4NzM5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9Ijc0NC4wOTQ0OCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTI2LjE4MTA5IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3NzciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNzUgOiA0MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxNTAgOiA2MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNjAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMzI3NSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI1MCA6IDMzLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxMDAgOiA1MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlNTUzMyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzMiA6IDIxLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI2NCA6IDMyIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzMiA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNTU3IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjI1IDogMTYuNjY2NjY3IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjUwIDogMjUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDI1IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI0IgogICAgIGlua3NjYXBlOmN4PSI5NS43MjM2NiIKICAgICBpbmtzY2FwZTpjeT0iLTI2Ljc3NTAyMyIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjAwMDAwMDI0O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc4LjMzMzMzMiwyNSBDIDkxLjY2NjY2NiwyNSA5NSwyNSA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk4ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMC4zODU3MTcsMTUgTCA0Ljk5OTk5OTgsMTUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMS4zNjIwOTEsMzUgTCA0Ljk5OTk5OTgsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8ZwogICAgICAgaWQ9ImcyNTYwIgogICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi41LC0zOS41KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMzUxNiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjI1LDgxLjUwMDAwNSBDIC0zLjg0NzM3NCw4NC4xNDQ0MDUgLTQuNSw4NC41MDAwMDUgLTQuNSw4NC41MDAwMDUgTCAtOC4xNTYyNSw4NC41MDAwMDUgTCAtNi4xNTYyNSw4Mi4wNjI1MDUgQyAtNi4xNTYyNSw4Mi4wNjI1MDUgLTAuNSw3NS4wNjI0NTEgLTAuNSw2NC41IEMgLTAuNSw1My45Mzc1NDkgLTYuMTU2MjUsNDYuOTM3NSAtNi4xNTYyNSw0Ni45Mzc1IEwgLTguMTU2MjUsNDQuNSBMIC00LjUsNDQuNSBDIC0zLjcxODc1LDQ1LjQzNzUgLTMuMDc4MTI1LDQ2LjE1NjI1IC0yLjI4MTI1LDQ3LjUgQyAtMC40MDg1MzEsNTAuNTk5ODE1IDIuNSw1Ni41MjY2NDYgMi41LDY0LjUgQyAyLjUsNzIuNDUwNjUgLTAuMzk2Njk3LDc4LjM3OTQyNSAtMi4yNSw4MS41MDAwMDUgeiIKICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2Njc2NjY2NzYyIgLz4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjQwNjI1LDQ0LjUgTCAtMC40MDYyNSw0Ni45Mzc1IEMgLTAuNDA2MjUsNDYuOTM3NSA1LjI1LDUzLjkzNzU0OSA1LjI1LDY0LjUgQyA1LjI1LDc1LjA2MjQ1MSAtMC40MDYyNSw4Mi4wNjI1IC0wLjQwNjI1LDgyLjA2MjUgTCAtMi40MDYyNSw4NC41IEwgMC43NSw4NC41IEwgMTQuNzUsODQuNSBDIDE3LjE1ODA3Niw4NC41MDAwMDEgMjIuNDM5Njk5LDg0LjUyNDUxNCAyOC4zNzUsODIuMDkzNzUgQyAzNC4zMTAzMDEsNzkuNjYyOTg2IDQwLjkxMTUzNiw3NC43NTA0ODQgNDYuMDYyNSw2NS4yMTg3NSBMIDQ0Ljc1LDY0LjUgTCA0Ni4wNjI1LDYzLjc4MTI1IEMgMzUuNzU5Mzg3LDQ0LjcxNTU5IDE5LjUwNjU3NCw0NC41IDE0Ljc1LDQ0LjUgTCAwLjc1LDQ0LjUgTCAtMi40MDYyNSw0NC41IHogTSAzLjQ2ODc1LDQ3LjUgTCAxNC43NSw0Ny41IEMgMTkuNDM0MTczLDQ3LjUgMzMuMDM2ODUsNDcuMzY5NzkzIDQyLjcxODc1LDY0LjUgQyAzNy45NTE5NjQsNzIuOTI5MDc1IDMyLjE5NzQ2OSw3Ny4xODM5MSAyNyw3OS4zMTI1IEMgMjEuNjM5MzM5LDgxLjUwNzkyNCAxNy4xNTgwNzUsODEuNTAwMDAxIDE0Ljc1LDgxLjUgTCAzLjUsODEuNSBDIDUuMzczNTg4NCw3OC4zOTE1NjYgOC4yNSw3Mi40NTA2NSA4LjI1LDY0LjUgQyA4LjI1LDU2LjUyNjY0NiA1LjM0MTQ2ODYsNTAuNTk5ODE1IDMuNDY4NzUsNDcuNSB6IgogICAgICAgICBpZD0icGF0aDQ5NzMiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NzY2NjY3NjY2NjY2NjY2NzY2NzYyIgLz4KICAgIDwvZz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDM1NTEiCiAgICAgICBzb2RpcG9kaTpjeD0iNzUiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA3OSwyNSBBIDQsNCAwIDEgMSA3MSwyNSBBIDQsNCAwIDEgMSA3OSwyNSB6IiAvPgogIDwvZz4KPC9zdmc+Cg==' }}

    }, joint.shapes.logic.Gate21.prototype.defaults),

    operation: function(input1, input2) {
        return (!input1 || !input2) && (input1 || input2);
    }

});

joint.shapes.logic.Wire = joint.dia.Link.extend({

    arrowheadMarkup: [
        '<g class="marker-arrowhead-group marker-arrowhead-group-<%= end %>">',
        '<circle class="marker-arrowhead" end="<%= end %>" r="7"/>',
        '</g>'
    ].join(''),

    vertexMarkup: [
        '<g class="marker-vertex-group" transform="translate(<%= x %>, <%= y %>)">',
        '<circle class="marker-vertex" idx="<%= idx %>" r="10" />',
        '<g class="marker-vertex-remove-group">',
        '<path class="marker-vertex-remove-area" idx="<%= idx %>" d="M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z" transform="translate(5, -33)"/>',
        '<path class="marker-vertex-remove" idx="<%= idx %>" transform="scale(.8) translate(9.5, -37)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z">',
        '<title>Remove vertex.</title>',
        '</path>',
        '</g>',
        '</g>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'logic.Wire',

        attrs: {
            '.connection': { 'stroke-width': 2 },
            '.marker-vertex': { r: 7 }
        },

        router: { name: 'orthogonal' },
        connector: { name: 'rounded', args: { radius: 10 }}

    }, joint.dia.Link.prototype.defaults)

});

if (typeof exports === 'object') {

    var graphlib = require('graphlib');
    var dagre = require('dagre');
}

// In the browser, these variables are set to undefined because of JavaScript hoisting.
// In that case, should grab them from the window object.
graphlib = graphlib || (typeof window !== 'undefined' && window.graphlib);
dagre = dagre || (typeof window !== 'undefined' && window.dagre);

// create graphlib.Graph from existing joint.dia.Graph
joint.dia.Graph.prototype.toGraphLib = function(opt) {

    opt = opt || {};

    var glGraphType = _.pick(opt, 'directed', 'compound', 'multigraph');
    var glGraph = new graphlib.Graph(glGraphType);

    var setNodeLabel = opt.setNodeLabel || _.noop;
    var setEdgeLabel = opt.setEdgeLabel || _.noop;
    var setEdgeName = opt.setEdgeName || _.noop;

    this.get('cells').each(function(cell) {

        if (cell.isLink()) {

            var source = cell.get('source');
            var target = cell.get('target');

            // Links that end at a point are ignored.
            if (!source.id || !target.id) return;

            // Note that if we are creating a multigraph we can name the edges. If
            // we try to name edges on a non-multigraph an exception is thrown.
            glGraph.setEdge(source.id, target.id, setEdgeLabel(cell), setEdgeName(cell));

        } else {

            glGraph.setNode(cell.id, setNodeLabel(cell));

            // For the compound graphs we have to take embeds into account.
            if (glGraph.isCompound() && cell.has('parent')) {
                glGraph.setParent(cell.id, cell.get('parent'));
            }
        }
    });

    return glGraph;
};

// update existing joint.dia.Graph from given graphlib.Graph
joint.dia.Graph.prototype.fromGraphLib = function(glGraph, opt) {

    opt = opt || {};

    var importNode = opt.importNode || _.noop;
    var importEdge = opt.importEdge || _.noop;

    // import all nodes
    glGraph.nodes().forEach(function(v) {
        importNode.call(this, v, glGraph, this, opt);
    }, this);

    // import all edges
    glGraph.edges().forEach(function(edgeObj) {
        importEdge.call(this, edgeObj, glGraph, this, opt);
    }, this);
};

joint.layout.DirectedGraph = {

    layout: function(graph, opt) {

        opt = _.defaults(opt || {}, {
            resizeClusters: true,
            clusterPadding: 10
        });

        // create a graphlib.Graph that represents the joint.dia.Graph
        var glGraph = graph.toGraphLib({
            directed: true,
            // We are about to use edge naming feature.
            multigraph: true,
            // We are able to layout graphs with embeds.
            compound: true,
            setNodeLabel: function(element) {
                return {
                    width: element.get('size').width,
                    height: element.get('size').height,
                    rank: element.get('rank')
                };
            },
            setEdgeLabel: function(link) {
                return {
                    minLen: link.get('minLen') || 1
                };
            },
            setEdgeName: function(link) {
                // Graphlib edges have no ids. We use edge name property
                // to store and retrieve ids instead.
                return link.id;
            }
        });

        var glLabel = {};

        // Dagre layout accepts options as lower case.
        if (opt.rankDir) glLabel.rankdir = opt.rankDir;
        if (opt.nodeSep) glLabel.nodesep = opt.nodeSep;
        if (opt.edgeSep) glLabel.edgesep = opt.edgeSep;
        if (opt.rankSep) glLabel.ranksep = opt.rankSep;
        if (opt.marginX) glLabel.marginx = opt.marginX;
        if (opt.marginY) glLabel.marginy = opt.marginY;

        // Set the option object for the graph label
        glGraph.setGraph(glLabel);

        // executes the layout
        dagre.layout(glGraph, { debugTiming: !!opt.debugTiming });

        // Update the graph
        graph.fromGraphLib(glGraph, {
            importNode: function(v, gl) {

                var element = this.getCell(v);
                var glNode = gl.node(v);

                if (opt.setPosition) {
                    opt.setPosition(element, glNode);
                } else {
                    element.set('position', {
                        x: glNode.x - glNode.width / 2,
                        y: glNode.y - glNode.height / 2
                    });
                }
            },
            importEdge: function(edgeObj, gl) {

                var link = this.getCell(edgeObj.name);
                var glEdge = gl.edge(edgeObj);

                if (opt.setLinkVertices) {
                    if (opt.setVertices) {
                        opt.setVertices(link, glEdge.points);
                    } else {
                        link.set('vertices', glEdge.points);
                    }
                }
            }
        });

        if (opt.resizeClusters) {
            // Resize and reposition cluster elements (parents of other elements)
            // to fit their children.
            // 1. filter clusters only
            // 2. map id on cells
            // 3. sort cells by their depth (the deepest first)
            // 4. resize cell to fit their direct children only.
            _.chain(glGraph.nodes())
                .filter(function(v) { return glGraph.children(v).length > 0; })
                .map(graph.getCell, graph)
                .sortBy(function(cluster) { return -cluster.getAncestors().length; })
                .invoke('fitEmbeds', { padding: opt.clusterPadding })
                .value();
        }

        // Return an object with height and width of the graph.
        return glGraph.graph();
    }
};


	joint.g = g;
	joint.V = joint.Vectorizer = V;

	return joint;

}));

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=e.webkitRequestFileSystem,c=e.requestFileSystem||a||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},f="application/octet-stream",s=0,d=500,l=function(t){var o=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};e.chrome?o():setTimeout(o,d)},v=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(i){u(i)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["﻿",e],{type:e.type}):e},w=function(t,u,d){d||(t=p(t));var w,y,m,S=this,h=t.type,O=!1,R=function(){v(S,"writestart progress write writeend".split(" "))},b=function(){if((O||!w)&&(w=n().createObjectURL(t)),y)y.location.href=w;else{var o=e.open(w,"_blank");void 0==o&&"undefined"!=typeof safari&&(e.location.href=w)}S.readyState=S.DONE,R(),l(w)},g=function(e){return function(){return S.readyState!==S.DONE?e.apply(this,arguments):void 0}},E={create:!0,exclusive:!1};return S.readyState=S.INIT,u||(u="download"),r?(w=n().createObjectURL(t),o.href=w,o.download=u,void setTimeout(function(){i(o),R(),l(w),S.readyState=S.DONE})):(e.chrome&&h&&h!==f&&(m=t.slice||t.webkitSlice,t=m.call(t,0,t.size,f),O=!0),a&&"download"!==u&&(u+=".download"),(h===f||a)&&(y=e),c?(s+=t.size,void c(e.TEMPORARY,s,g(function(e){e.root.getDirectory("saved",E,g(function(e){var n=function(){e.getFile(u,E,g(function(e){e.createWriter(g(function(n){n.onwriteend=function(t){y.location.href=e.toURL(),S.readyState=S.DONE,v(S,"writeend",t),l(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=S["on"+e]}),n.write(t),S.abort=function(){n.abort(),S.readyState=S.DONE},S.readyState=S.WRITING}),b)}),b)};e.getFile(u,{create:!1},g(function(e){e.remove(),n()}),g(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},y=w.prototype,m=function(e,t,n){return new w(e,t,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(y.abort=function(){var e=this;e.readyState=e.DONE,v(e,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,m)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});