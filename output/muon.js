(function(){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.1.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var n in r){t=r[n];t.off(e,i,this);if(s||h.isEmpty(t._events))delete this._listeningTo[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={});var n=e._listenId||(e._listenId=h.uniqueId("l"));s[n]=e;if(!r&&typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};i=h.defaults({},i,h.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};M(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=h.extend({validate:true},i);if(r&&!i.wait){if(!this.set(r,i))return false}else{if(!this._validate(r,i))return false}if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};M(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}M(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e,{validationError:i}));return false}});var p=["keys","values","pairs","invert","pick","omit"];h.each(p,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var v=a.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var g={add:true,remove:true,merge:true};var m={add:true,remove:false};h.extend(v.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:false},e,m))},remove:function(t,e){var i=!h.isArray(t);t=i?[t]:h.clone(t);e||(e={});var r,s,n,a;for(r=0,s=t.length;r<s;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];n=this.indexOf(a);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=h.defaults({},e,g);if(e.parse)t=this.parse(t,e);var i=!h.isArray(t);t=i?t?[t]:[]:h.clone(t);var r,s,n,a,o,u,l;var c=e.at;var f=this.model;var p=this.comparator&&c==null&&e.sort!==false;var v=h.isString(this.comparator)?this.comparator:null;var m=[],y=[],_={};var w=e.add,b=e.merge,x=e.remove;var E=!p&&w&&x?[]:false;for(r=0,s=t.length;r<s;r++){o=t[r];if(o instanceof d){n=a=o}else{n=o[f.prototype.idAttribute]}if(u=this.get(n)){if(x)_[u.cid]=true;if(b){o=o===a?a.attributes:o;if(e.parse)o=u.parse(o,e);u.set(o,e);if(p&&!l&&u.hasChanged(v))l=true}t[r]=u}else if(w){a=t[r]=this._prepareModel(o,e);if(!a)continue;m.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}if(E)E.push(u||a)}if(x){for(r=0,s=this.length;r<s;++r){if(!_[(a=this.models[r]).cid])y.push(a)}if(y.length)this.remove(y,e)}if(m.length||E&&E.length){if(p)l=true;this.length+=m.length;if(c!=null){for(r=0,s=m.length;r<s;r++){this.models.splice(c+r,0,m[r])}}else{if(E)this.models.length=0;var T=E||m;for(r=0,s=T.length;r<s;r++){this.models.push(T[r])}}}if(l)this.sort({silent:true});if(!e.silent){for(r=0,s=m.length;r<s;r++){(a=m[r]).trigger("add",a,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();t=this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};M(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(t,e,s){if(s.wait)i.add(t,s);if(r)r(t,e,s)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e=e?h.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var _=["groupBy","countBy","sortBy"];h.each(_,function(t){v.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var w=a.View=function(t){this.cid=h.uniqueId("view");t||(t={});h.extend(this,h.pick(t,x));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var b=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];h.extend(w.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(b);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=T[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&E){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var E=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var k=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(k.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace(S,"(?:$1)?").replace($,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/[?#].*$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(O,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return h.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var R=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=v.extend=k.extend=w.extend=I.extend=R;var U=function(){throw new Error('A "url" property or function must be specified')};var M=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);/*
 * jQote2 - client-side Javascript templating engine
 * Copyright (C) 2010, aefxx
 * http://aefxx.com/
 *
 * Dual licensed under the WTFPL v2 or MIT (X11) licenses
 * WTFPL v2 Copyright (C) 2004, Sam Hocevar
 *
 * Date: Fri, May 4th, 2012
 * Version: 0.9.8
 */
(function($) {
    var JQOTE2_TMPL_UNDEF_ERROR = 'UndefinedTemplateError',
        JQOTE2_TMPL_COMP_ERROR  = 'TemplateCompilationError',
        JQOTE2_TMPL_EXEC_ERROR  = 'TemplateExecutionError';

    var ARR  = '[object Array]',
        STR  = '[object String]',
        FUNC = '[object Function]';

    var n = 1, tag = '%',
        qreg = /^[^<]*(<[\w\W]+>)[^>]*$/,
        type_of = Object.prototype.toString;

    function raise(error, ext) {
        throw ($.extend(error, ext), error);
    }

    function dotted_ns(fn) {
        var ns = [];

        if ( type_of.call(fn) !== ARR ) return false;

        for ( var i=0,l=fn.length; i < l; i++ )
            ns[i] = fn[i].jqote_id;

        return ns.length ?
            ns.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g, '$1$2') : false;
    }

    function lambda(tmpl, t) {
        var f, fn = [], t = t || tag,
            type = type_of.call(tmpl);

        if ( type === FUNC )
            return tmpl.jqote_id ? [tmpl] : false;

        if ( type !== ARR )
            return [$.jqotec(tmpl, t)];

        if ( type === ARR )
            for ( var i=0,l=tmpl.length; i < l; i++ )
                if ( f = lambda(tmpl[i], t) ) fn.push(f[0]);

        return fn.length ? fn : false;
    }

    $.fn.extend({
        jqote: function(data, t) {
            var data = type_of.call(data) === ARR ? data : [data],
                dom = '';

            this.each(function(i) {
                var fn = $.jqotec(this, t);

                for ( var j=0; j < data.length; j++ )
                    dom += fn.call(data[j], i, j, data, fn);
            });

            return dom;
        }
    });

    $.each({app: 'append', pre: 'prepend', sub: 'html'}, function(name, method) {
        $.fn['jqote'+name] = function(elem, data, t) {
            var ns, regexp, str = $.jqote(elem, data, t),
                $$ = !qreg.test(str) ?
                    function(str) {return $(document.createTextNode(str));} : $;

            if ( !!(ns = dotted_ns(lambda(elem))) )
                regexp = new RegExp('(^|\\.)'+ns.split('.').join('\\.(.*)?')+'(\\.|$)');

            return this.each(function() {
                var dom = $$(str);

                $(this)[method](dom);

                ( dom[0].nodeType === 3 ?
                    $(this) : dom ).trigger('jqote.'+name, [dom, regexp]);
            });
        };
    });

    $.extend({
        jqote: function(elem, data, t) {
            var str = '', t = t || tag,
                fn = lambda(elem, t);

            if ( fn === false )
                raise(new Error('Empty or undefined template passed to $.jqote'), {type: JQOTE2_TMPL_UNDEF_ERROR});

            data = type_of.call(data) !== ARR ?
                [data] : data;

            for ( var i=0,l=fn.length; i < l; i++ )
                for ( var j=0; j < data.length; j++ )
                    str += fn[i].call(data[j], i, j, data, fn[i]);

            return str;
        },

        jqotec: function(template, t) {
            var cache, elem, tmpl, t = t || tag,
                type = type_of.call(template);

            if ( type === STR && qreg.test(template) ) {
                elem = tmpl = template;

                if ( cache = $.jqotecache[template] ) return cache;
            } else {
                elem = type === STR || template.nodeType ?
                    $(template) : template instanceof jQuery ?
                    template : null;

                if ( !elem[0] || !(tmpl = elem[0].innerHTML) && !(tmpl = elem.text()) )
                    raise(new Error('Empty or undefined template passed to $.jqotec'), {type: JQOTE2_TMPL_UNDEF_ERROR});

                if ( cache = $.jqotecache[$.data(elem[0], 'jqote_id')] ) return cache;
            }

            var str = '', index,
                arr = tmpl.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g, '')
                    .split('<'+t).join(t+'>\x1b')
                    .split(t+'>');

            for ( var m=0,l=arr.length; m < l; m++ )
                str += arr[m].charAt(0) !== '\x1b' ?
                    "out+='" + arr[m].replace(/(\\|["'])/g, '\\$1') + "'" : (arr[m].charAt(1) === '=' ?
                    ';out+=(' + arr[m].substr(2) + ');' : (arr[m].charAt(1) === '!' ?
                    ';out+=$.jqotenc((' + arr[m].substr(2) + '));' : ';' + arr[m].substr(1)));

            str = 'try{' +
                ('var out="";'+str+';return out;')
                    .split("out+='';").join('')
                    .split('var out="";out+=').join('var out=') +
                '}catch(e){e.type="'+JQOTE2_TMPL_EXEC_ERROR+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';

            try {
                var fn = new Function('i, j, data, fn', str);
            } catch ( e ) { raise(e, {type: JQOTE2_TMPL_COMP_ERROR}); }

            index = elem instanceof jQuery ?
                $.data(elem[0], 'jqote_id', n) : elem;

            return $.jqotecache[index] = (fn.jqote_id = n++, fn);
        },

        jqotefn: function(elem) {
            var type = type_of.call(elem),
                index = type === STR && qreg.test(elem) ?
                    elem : $.data($(elem)[0], 'jqote_id');

            return $.jqotecache[index] || false;
        },

        jqotetag: function(str) {
            if ( type_of.call(str) === STR ) tag = str;
        },

        jqotenc: function(str) {
            return str.toString()
                .replace(/&(?!\w+;)/g, '&#38;')
                .split('<').join('&#60;').split('>').join('&#62;')
                .split('"').join('&#34;').split("'").join('&#39;');
        },

        jqotecache: {}
    });

    $.event.special.jqote = {
        add: function(obj) {
            var ns, handler = obj.handler,
                data = !obj.data ?
                    [] : type_of.call(obj.data) !== ARR ?
                    [obj.data] : obj.data;

            if ( !obj.namespace ) obj.namespace = 'app.pre.sub';
            if ( !data.length || !(ns = dotted_ns(lambda(data))) ) return;

            obj.handler = function(event, dom, regexp) {
                return !regexp || regexp.test(ns) ?
                    handler.apply(this, [event, dom]) : null;
            };
        }
    };
})(jQuery);var __b__ = window.Backbone;
delete window.Backbone;

function __serializeObject__(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

var __MuonBase__ = {
    __projections__: {},
    packages: {},
    models: {},
    plugins: {},
    collections: {},
    dependencies: [],
    baseViews: {}
};

var __MuonPackBase__ = {
    views: {},
    viewsUnnamed: {},
    routerPath: null,
    loaded: false,
    inited: false,
    translation: {}
};

var __syncNames__ = {},
    __defaultLang__ = document.getElementsByTagName("html")[0].lang || "en",
    __debug__ = false,
    __profiles__ = {},
    __plugins__ = {},
    __history__ = [],
    __forwardHistory__ = [],
    __views__ = {},
    __currentPackage__ = "",
    __currentPlugin__ = "",
    __onReady__ = [],
    __staticApp__ = true,
    __basePackage__ = "application",
    __applicationView__ = null,
    __viewBackboneExtend__ = __b__.View.extend,
    __modelBackboneExtend__ = __b__.Model.extend,
    __collectionBackboneExtend__ = __b__.Collection.extend
;

function __getAllViewEls__(){
    var ret = [];
    for(var i in __views__)
        ret.push(__views__[i].el)
    return ret;
}

window.getAllView = __getAllViewEls__;
window.profiles = __profiles__;

var __timeStart__ = Date.now();

function __mDeepExtend__(dst,src){
    for(var i in src){
        if (src[i] instanceof Function) { dst[i] = src[i]; continue; }
        if (src[i] instanceof Array) { dst[i] = src[i].slice(); continue; }
        if (src[i] instanceof Object) { dst[i] = Object.create(src[i]); __mDeepExtend__(dst[i],src[i]); continue;}
        dst[i] = src[i];
    }
}

function __getUniq__(){return Math.floor(Math.random()*9*Math.pow(10,9)+Math.pow(10,9));}
function MuonPlugin (name){ __mDeepExtend__(this,__MuonBase__); this.name = name; };
function MuonPackage (name){ __mDeepExtend__(this,__MuonPackBase__); this.name = name; };

_.extend(MuonPlugin.prototype,{
    getProjection: function(key){
        return this.__projections__[key];
    },
    setProjection: function(key,val){
        if (_.isEqual(val,this.__projections__[key])) return;
        this.__projections__[key] = val;
//        m.log("projection was updated: ",key);
        $(this).trigger("projection_updated."+key,val);
    },
    removeProjection: function(key){
        try{
            var ret = this.__projections__[key];
            delete this.__projections__[key];
//            m.log("projection was removed: ",key);
            $(this).trigger("projection_removed."+key);
            return ret;
        }
        catch(e){ return console.log(e.message, e.stack);}
    }
});

var m = _.extend(new    MuonPlugin(""),{
    packageInitData: {},
    // Delete
    __views__: __views__,
    MuonPackage: MuonPackage,
    MuonPlugin: MuonPlugin,
    on: function(){

    },
    off: function(){

    },
    once: function(){

    },
    isDebug: function(){
        return __debug__;
    },
    setDebug: function(arg){
        __debug__ = !!arg;
        if (!__debug__) $("body").removeClass("debug");
        else{
            /debug/.test(document.body.className) && (document.body.className += " debug");
            $("*[data-muon]").each(function(){
                if (this.muonView instanceof m.View) this.muonView.__renderDebugLabels__();
            });
        }
    },
    setLanguage: function(lang){
        document.getElementsByTagName("html")[0].lang = lang || __defaultLang__;
        var packs = [];
        for(var i in m.packages){
            packs.push(i);
        }
        $.getJSON("/pack_translation/"+lang,{packs:packs.join(",")}).then(function(obj){
            for(var i in obj){
                if (!(i in m.packages)) continue;
                m.packages[i].translation = obj[i];
            }
            $("[data-muon]").each(function(){
                if (this.muonView instanceof m.View) {
                    this.muonView.__renderTranslation__();
                }
            });
        });
    },
    getLanguage: function(){ return document.getElementsByTagName("html")[0].lang || __defaultLang__; },
    setProfile: function(profile,flag){
        if (profile == "muon") return;
        if (flag === false){ return m.removeProfile(profile); }
        if (m.hasProfile(profile)) return;
        var className = document.body.className.split(/\s+/);
        profile = profile.split(".");
        className = className.filter(function(a){return profile.indexOf(a) == -1;});
        className = className.concat(profile);
        document.body.className = className.sort().join(" ");
        var profilesToFilter = _.keys(__profiles__).filter(function(p){
            return RegExp(profile.sort().join(".([a-zA-Z0-9_]+.)*?")).test(p);
        });
        profilesToFilter = profilesToFilter.filter(function(p){return m.hasProfile(p);});
        if (profilesToFilter.length == 0) return;
//        m.log("profile has set: "+ profile);
        var templates = [];
        for(var i in profilesToFilter){
            templates = templates.concat(__profiles__[profilesToFilter[i]]);
        }
        $(__getAllViewEls__()).filter(templates.join(",")).each(function(){
            if (this.muonView instanceof m.View) this.muonView.reload();
        });
    },
    removeProfile: function(profile){
        if (profile == "muon") return;
        _.defer(function(){
            if (!m.hasProfile(profile)) return;
            var profilesToFilter = _.keys(__profiles__).filter(function(p){
                return RegExp(profile.split(".").sort().join(".([a-zA-Z0-9_]+.)*?")).test(p);
            });
            profilesToFilter = profilesToFilter.filter(function(p){return m.hasProfile(p);});
            $("body").removeClass(profile);
            if (profilesToFilter.length == 0) return;
//            m.log("profile has removed: "+ profile);
            var templates = [];
            for(var i in profilesToFilter){
                templates = templates.concat(__profiles__[profilesToFilter[i]]);
            }
            $(__getAllViewEls__()).filter(templates.join(",")).each(function(){
                if (this.muonView instanceof m.View) this.muonView.reload();
            });
        });
    },
    hasProfile: function(profile){
        return RegExp(profile.split(".").map(function(a){return "\\b"+a+"\\b";})
            .sort().join("\\.([a-zA-Z0-9_]+\\.)*?"))
            .test(document.body.className.split(/\s+/).sort().join("."));
    },
    getProfile: function(){
        return document.body.className.split(/\s+/).sort().join(".");
    },
    log: function(){
        var args = [].slice.apply(arguments);
        args.unshift("["+(Date.now()-__timeStart__)/1000+"]")
        console.log.apply(console,args);
    },
    error: function(){
        var args = [].slice.apply(arguments);
        args.unshift("["+(Date.now()-__timeStart__)/1000+"]");
        console.error.apply(console,args);
    }
});
m.packages[""] = new m.MuonPackage("");
__plugins__[""] = m;


function __registerPlugin__(plugin){
    if (plugin in __plugins__) return __plugins__[plugin];
    var plStack = plugin.split(":");
    var plObject = m;
    var tempPlName = "";
    for(var i in plStack){
        var plName = plStack[i];
        if (plName in plObject.plugins) { plObject = plObject.plugins[plName]; continue; }
        tempPlName += tempPlName?tempPlName+":":"" + plName;
        plObject.plugins[plName] = new m.MuonPlugin(tempPlName);
        plObject = plObject.plugins[plName];
    }
    __plugins__[plugin] = plObject;
    return plObject;
}

$(function(){for(var i in __onReady__) try{__onReady__[i]()} catch(e){m.error(e);}; delete __onReady__;});
window.muon = window.m = m;
var __routes__ = [];

$.ajaxSetup({beforeSend: function(xhr){xhr.setRequestHeader("Muon-Request","data-request");}});

var __History__ = __b__.History;
__b__.History.prototype.navigate = function(fragment, options) {
    if (!__History__.started) return false;
    if (!options || options === true) options = {trigger: options};
    fragment = this.getFragment(fragment || '');
    this.fragment = fragment;
    var url = this.root + fragment;
    if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
    } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
            if(!options.replace) this.iframe.document.open().close();
            this._updateHash(this.iframe.location, fragment, options.replace);
        }
    } else {
        return this.location.assign(url);
    }
    if (options.trigger) this.loadUrl(fragment);
};

var __Router__ = __b__.Router.extend({
    initialize: function(){
        for(var i in this.routes){
            __routes__.push({route:i,callback:this[this.routes[i]]});
        }
    },
    history: function(){
        return __history__.slice();
    },
    route: function(r,n,c){
        __routes__ = __routes__.filter(function(o){return (o.route != r);});
        __routes__.push({route:r,callback:c});
        __b__.Router.prototype.route.apply(this,arguments);
    },
    routes: {},
    path: function(){
        return __staticApp__?"/"+location.hash.replace(/^#/,""):location.pathname;
    },
    reload: function(){
        return this.navigate(this.path(),{replace: true,trigger:true});
    },
    navigate: function(url,opts){
        var _this = m.router;
        _.defer(function(){
            opts = opts || {};
            if (!("trigger" in opts)) opts.trigger = true;
            if (!(opts && opts.skip__History__)){
                __history__.push(_this.path());
                __forward__History____ = [];
            }
            url = url.replace(RegExp("^http://"+location.host),"");
            if (url.match(/^\//)){
                if(url.match(/^\/\//)) location = url;
                else __b__.Router.prototype.navigate.apply(this,[url,opts]);
            }
            else {
                __b__.Router.prototype.navigate.apply(this,
                    [_this.path() +(_this.path().match(/\/$/)?"":"/")+ url,opts]);
            }
        });
    },
    back: function(){
        if (__history__.length == 0){
            _.defer(this.navigate,"/",{replace:true,trigger:true,skip__History__: true});
            return false;
        }
        else {
            __forward__History____.unshift(this.path());
            _.defer(this.navigate,__history__.pop(),{replace:true,trigger:true,skip__History__: true});
        }
        return true;
    },
    forward: function(){
        if (__forward__History____.length == 0) return false;
        __history__.push(this.path());
        _.defer(this.navigate,__forward__History____.shift(),{replace:true,trigger:true,skip__History__: true});
        return true;
    }

});

function bindSurrogate(method,surrogate){
    if (typeof method == "string") method = surrogate[method];
    if (!method) return;
    return _.bind(method,surrogate);
};

var toRegExp = function(route){
    return _.isRegExp(route)?route:__b__.Router.prototype._routeToRegExp(route);
};

function __flattenMiddleware__(middl,surrogate){
    return _.flatten([middl]).filter(function(m){return typeof m == "function";}).map(function(f){return _.bind(f,surrogate);});
}

function addPackRoutes(pack,route,mod){
    var flattenMiddleware = function(mid){return __flattenMiddleware__(mid,mod.surrogate);};
    mod.middleware = flattenMiddleware(mod.middleware);
    if (m.packages[pack].parentPack && m.packages[pack].parentPack.middleware )
        mod.middleware = flattenMiddleware(mod.middleware.concat(m.packages[pack].parentPack.middleware));
    m.packages[pack].middleware = mod.middleware;
    if (_.isObject(mod.routes) && !mod.routes.length){
        var routeKeys = _.keys(mod.routes);
        for(var i in routeKeys.reverse())
            addRoute(pack,route,routeKeys[i],bindSurrogate(mod.routes[routeKeys[i]],mod.surrogate),mod.middleware);
    }
    else if (_.isArray(mod.routes)){
        for(var i in mod.routes.reverse()){
            var rObject = mod.routes[i];

            if (_.isString(rObject.package)){
                if (!_.isString(rObject.route)) {
                    throw Error("No route specified for dependency '"+rObject.package+"' in package "+pack);
                }
                var packRoute = prepareRoute(route,rObject.route);
                rObject.package = (m.packages[pack].m.name?m.packages[pack].m.name+":":"")+rObject.package;
                m.router.route(packRoute,rObject.package,m.requirePack(rObject.package,null,pack));
            }
            else {
                var routerMiddleware = flattenMiddleware(mod.middleware.concat(rObject.middleware));
                if (_.isString(rObject.redirect)){
                    addRedirect(pack,route,rObject.route,rObject.redirect);
                }
                else {
                    if (_.isString(rObject.route) || _.isRegExp(rObject.route))
                        addRoute(pack,route,rObject.route, bindSurrogate(rObject.callback,mod.surrogate),
                            routerMiddleware,rObject.page);
                    if (_.isObject(rObject.routes)){
                        var routeKeys = _.keys(rObject.routes);
                        for(var j in routeKeys.reverse()){
                            var callback = bindSurrogate(rObject.routes[routeKeys[j]],mod.surrogate);
                            addRoute(pack,route,routeKeys[j],callback,routerMiddleware,rObject.page);
                        }
                    }
                }
            }
        }
    }
}

function runRouterMiddleware(middleware,callback){
    var surrogate = this;
    if (middleware.length == 0) return callback();
    try {
        $.when(middleware.shift().call(surrogate))
            .then(_.partial(runRouterMiddleware.bind(surrogate),middleware,callback),m.router.back);
    }
    catch(e){
        console.log(e.message);
        m.router.back();
    }
}

function prepareRoute(sections){
    if (!_.isArray(sections)) sections = [].slice.call(arguments);
    var route = "";
    while (sections.length){
        var section = sections.shift();
        section = (section instanceof RegExp)?section:toRegExp(section.replace(/^\//,""));
        section = section.toString().replace(/(^\/\^)|(\$\/$)/g,"");
        route += (route?"/":"")+section;
    }
    return RegExp("^"+route+"$");
};

function addRoute(pack,pref,route,handler,middleware,page){
    if (route === ""){
        m.router.route(prepareRoute(pref),pack+"_"+route+"_redirect", function(){
            m.router.navigate(m.router.path()+"/",{trigger:true,replace:true});
        });
    }
    if (!_.isString(page)){
        var pageRoute = toRegExp(route).toString().replace(/(^\/\^)|(\$\/$)/g,"");
        pageRoute = pageRoute.substr(0,(pageRoute.indexOf("(") == -1)?pageRoute.length:pageRoute.indexOf("("));
        pageRoute = pageRoute.replace(/(^\/)|(\/$)/g,"");
        page = pageRoute.split("/").reverse().join("_");
        if (page.length == 0) page = "index";
    }
    var surrogate = m.packages[pack].packageObject.surrogate;
    m.router.route(prepareRoute(pref,route),pack+"_"+route, function(){
        var _args = arguments;
        var pageToShow = page;
        var appView = m.packages[pack].appView;
        surrogate.currentPage = undefined;
        try{surrogate.currentPage = appView.get(pageToShow+(/_page$/.test(pageToShow)?"":"_page"));}
        catch(e){}
        runRouterMiddleware.call(surrogate,middleware.slice(),function(){
            handler && handler.apply(surrogate,_args);
            do {
                try{ appView.show(pageToShow); }
                catch(e){console.log(e.stack);break;}
                pageToShow = appView.parentAppPage;
            } while(appView = appView.parentAppView);
        });
    });
}

function addRedirect(pack,pref,route,redirectUrl){
    function redirect(){
        m.router.navigate(redirectUrl,{trigger:true,replace:true});
    }
    if (route === ""){
        m.router.route(prepareRoute(pref),pack+"_"+route+"_redirect", function(){
            m.router.navigate(m.router.path()+"/",{trigger:true,replace:true});
        });
    }
    m.router.route(prepareRoute(pref,route),pack+"_"+route,redirect);
}

function __procUnhandledViews__(pack){
    var processed = [];
    $("script[data-pack='"+pack+"'][type='text/muon-template']").each(function(){
        if (processed.indexOf(this) != -1) return;
        processed.push(this);
        $("script#"+this.id+"[data-pack='"+pack+"'][type='text/muon-template']")
            .not(this)
            .each(function(){
                processed.push(this);
            });
        var name = this.id.replace(/_template$/,"");
        var type = name.match(/_([a-zA-Z0-9]*?)$/)[1];
        name = name.replace(RegExp("_"+type+"$"),"");
        if (m.packages[pack].views[type] && m.packages[pack].views[type][name]) return;
        var viewClass = null;
        if (name == "application" && type == "stack")
            viewClass = m.ApplicationStackView;
        else if (name.match(/_page$/) && type == "layout")
            viewClass = m.PageLayoutView;
        else if (type in m.baseViews)
            viewClass = m.baseViews[type];
        if (!viewClass) return;
        viewClass.extend({template: name,package:pack});
    });
}

function __procProfiledViews__(pack){
    $("script[data-pack='"+pack+"'][type='text/muon-template'][data-profile]").each(function(){
        var name = this.id.replace(/_template$/,"");
        var type = name.match(/_([a-zA-Z0-9]*?)$/)[1];
        name = name.replace(RegExp("_"+type+"$"),"");
        var profile = this.getAttribute("data-profile");
        m.packages[pack].views[type][name].profiles = m.packages[pack].views[type][name].profiles || [];
        m.packages[pack].views[type][name].profiles.push(profile);
        if (!(__profiles__[profile] instanceof Array)) __profiles__[profile] = [];
        __profiles__[profile].push("[data-muon='"+name+"_"+type+"'][data-pack='"+pack+"']");
    });
}

var __pendingPackages__ = {};

m.requirePack = function(pack,callback,parentPack){
    if (pack in __pendingPackages__){
        callback && __pendingPackages__[pack].push(callback);
        return fallback;
    }

    var fallbackPath = "";
    var pluginName = pack.substr(0,pack.lastIndexOf(":"));
    var route,fullRoute,packObject;
    callback && (__pendingPackages__[pack] = [callback]);
    callback = function(arg){
        if (__pendingPackages__[pack] instanceof Array){
            while(__pendingPackages__[pack].length != 0){
                if (typeof __pendingPackages__[pack][0] == "function"){
                    try{__pendingPackages__[pack][0](arg)
                    } catch(e){}
                }
                __pendingPackages__[pack].splice(0,1);
            }
            delete __pendingPackages__[pack];
        }
    }


    _.defer(function(){
        var routes = _.where(__routes__,{callback:fallback});
        if (routes.length != 0){
            route = routes[0].route;
            fullRoute = prepareRoute([route,"/*a"]);
            m.router.route(fullRoute,__getUniq__(),fallback);
        }
        else fallback();
    });

    function fallback(){
        fallbackPath = m.router.path();
        if (m.packages[pack] && m.packages[pack].loaded) packLoaded();
        else if (m.packageInitData[pack]) packLoaded();
        else {
            var callbackName = "mpackcallback"+Date.now();
            m[callbackName] = function(){
                _.defer(packLoaded);
                delete m[callbackName];
            };

            try {
                $("<script src='/pack/"+pack+"?muon&lang="+ m.getLanguage()+"&m_callback="+callbackName+"'/>")
                    .appendTo(document.head);
            }
            catch(e){
                m.log("Package load error: "+pack+" : "+ e.message);
                callback(false);
            }
        }
    }

    function postProcLoadedPackage(){
        packObject.inited = true;
        var mod = m.packages[pack].packageObject;
        if (route){            
            __b__.history.handlers = __b__.history.handlers.filter(function(obj){
                if (obj.route.toString() == toRegExp(route).toString() ||
                    obj.route.toString() == toRegExp(fullRoute).toString()) return false;
                return true;
            });
            __routes__ = __routes__.filter(function(obj){ return (obj.callback == fallback)?false:true; });
            addPackRoutes(pack,route,mod);
            mod.useAppView = mod.useAppView || true;
            if (mod.useAppView){
                var appViewClass = null;
                if (packObject.views.stack && m.packages[pack].views.stack.application)
                    appViewClass = packObject.views.stack.application;
                else
                    appViewClass = m.ApplicationStackView.extend({package:pack});
                var appView = packObject.appView = new appViewClass;
                if (__applicationView__ == appView) appView.$el.appendTo("body");
                else {
                    if (m.packages[parentPack]
                        && m.packages[parentPack].appView instanceof m.ApplicationStackView)
                    {
                        var page = new m.PageLayoutView();
                        var pageName = appView.parentAppPage = "m_"+__getUniq__()+"_page";
                        appView.parentAppView = m.packages[parentPack].appView;
                        page.el.appendChild(appView.el);
                        appView.parentAppView.add(pageName,page);
                    }
                }
                appView.addPages(mod.pages || ["*"]);
            }

            _.defer(_.bind(__b__.history.loadUrl,__b__.history));
        }
        callback();
    };

    function initPack(){
        var __prevPackage__ = __currentPackage__;
        var __prevPlugin__ = __currentPlugin__;
        __currentPackage__ = pack;
        __currentPlugin__ = pluginName;

        var pluginObject = __registerPlugin__(__currentPlugin__);
        var mod = m.packageInitData[pack].package;
        packObject.packageObject = mod;
        packObject.translation = m.packageInitData[pack].translation;
        packObject.parentPack = m.packages[parentPack||""];
        mod.surrogate = mod.surrogate || {};
        mod.surrogate.m = __plugins__[pluginName];
        mod.surrogate.cfg = m.packageInitData[pack].cfg;

        packObject.routerPath = route;
        packObject.loaded = true;

        packObject.m = pluginObject;
        pluginObject = __plugins__[""];
        var pluginStack = pluginName.split(":");
        for(var i in pluginStack){
            var shorterName = pack.substr(pack.indexOf(":")+1);
            if (pluginStack[i] != "") pluginObject = pluginObject.plugins[pluginStack[i]];
            pluginObject.packages[shorterName] = packObject;
        }

        for(var i in m.packageInitData[pack].dependencies.css){
            var css = m.packageInitData[pack].dependencies.css[i];
            $("<style />").text(css).appendTo("head");
        }
        for(var i in m.packageInitData[pack].dependencies.js){
            eval(m.packageInitData[pack].dependencies.js[i]);
        }

        for(var i in m.packageInitData[pack].models){
            if (i in m.models) continue;
            else eval(m.packageInitData[pack].models[i]);
        }

        var views = m.packageInitData[pack].views;

        function proc_view(){
            if (views.length == 0) return finalize();
            var view_data = views.shift();
            if (view_data.match(/^<script type='text\/javascript'/) && __serverMode__ == "development"){
                var id = $(view_data).attr("id");
                $("<script />").attr({
                    src: (__staticApp__? "":"/")+"pack_view/"+__currentPackage__+"/"+id+"?muon",
                    type: "text/javascript"
                }).appendTo(document.head);
            }
            else $(view_data).appendTo(document.head);
            proc_view();
        }
        function finalize() {
            __procUnhandledViews__(pack);
            __procProfiledViews__(pack);
            __currentPackage__ = __prevPackage__;
            __currentPlugin__ = __prevPlugin__;
            if (typeof mod.ready == "function")
                try { mod.ready.call(mod.surrogate,postProcLoadedPackage); }
                catch(e){ m.log("Pack load error: ready method error: "+ e.stack()); }
            else postProcLoadedPackage();
        }
        proc_view();
    }

    function packLoaded(){
        if (m.packages[pack] instanceof m.MuonPackage) {
            packObject = m.packages[pack];
            postProcLoadedPackage();
        }
        else {
            m.packages[pack] = packObject = new m.MuonPackage(pack);
            initPack();
        }
    }

    return fallback;
};

m.router = new __Router__();
__onReady__.push(function(){
    if ($.browser && $.browser.msie) __staticApp__ = true;
    if (__staticApp__ && !/^file/.test(location.protocol) && location.pathname.replace(/^\//,"")){
        location.pathname = "/";
        return;
    }
    m.router.route("/","#{default_pack}",m.requirePack("application"));
    _.defer(_.bind(__b__.history.start,__b__.history),(__staticApp__?{}:{pushState:true}));
    $("body").addClass("muon").delegate("a[data-route]","click",function(ev){
        ev.preventDefault();
        if (!this.href){
            var route = this.getAttribute("data-route");
            var packName = this.getAttribute("data-pack") || "application";
            if (!(packName in m.packages)) return;
            if (m.packages[packName].routerPath){
                if (route.match(/^\/\//)) route = route.replace(/\/{2,}/g,"/");
                else if (route.match(/^\//))
                    route = (m.packages[packName].routerPath+"/"+route).replace(/\/{2,}/g,"/");
                else route = "~"+route.replace(/\/{2,}/g,"/");
                route = (__staticApp__?"#":"")+route.replace(/\^|\$/g,"");
            }
            $(this).attr("href",route).data("pack",packName);
            console.log(route);
        }

        var path = this.href;

        if (__staticApp__) path = path.substring(path.indexOf("#")+1,path.length);

        path = path.replace(/(^\s+)|(\s+$)/g,"");
        path = path.replace(this.host,"")
                   .replace(this.protocol+"//","")
                   .replace(/^\/\#/,"")
                   .replace(/^~/,"");
        m.router.navigate(path,{trigger: true});
    });
});__b__.Model.extend = function _modelExtend(obj,common){
    var modelName = "";
    if (typeof obj.modelName == 'string'){
        modelName = ((this.prototype.modelName?this.prototype.modelName+".":"")+obj.modelName).replace(/\.+/,".");
    }
    else modelName = this.prototype.modelName;
    if (obj.urlRoot && obj.urlRoot.indexOf("0.0.0.0") != -1){
        obj.urlRoot = obj.urlRoot.replace(/0\.0\.0\.0(:\d+)?/, (__domain__ && !__domain__.match("0.0.0.0"))?__domain__:location.host);
        if (__protocol__) obj.urlRoot = obj.urlRoot.replace(/^http:\/\//, __protocol__+"://");
    }
    var newModel = __modelBackboneExtend__.apply(this,arguments);
    newModel.modelName = modelName;
    if (obj.__autoGenerated__) return newModel;
    if (_.isString(modelName)) {
        var _objs = {};
        function child(attrs,opts){
            attrs = attrs || {};
            if (typeof attrs._id === "string" || typeof attrs._id === "number"){
                if (attrs._id in _objs) _objs[attrs._id].set(attrs);
                else _objs[attrs._id] = new newModel(attrs,opts);
                return _objs[attrs._id];
            }
            return new newModel(attrs,opts);
        };
        child.prototype = newModel.prototype;
        child.prototype.constructor = child;
        _.extend(child,newModel);

        child.__objects__ = _objs;
        child.modelName = modelName;
        m.models[modelName] = child;
        var pluginName = modelName.substr(0,modelName.lastIndexOf(":"));
        var pluginObject = __registerPlugin__(pluginName);
        child.prototype.m = pluginObject;
        pluginObject = __plugins__[""];
        var pluginStack = pluginName.split(":");
        for(var i in pluginStack){
            var shorterName = modelName.substr(modelName.indexOf(":")+1);
            if (pluginStack[i] != "") pluginObject = pluginObject.plugins[pluginStack[i]];
            pluginObject.models[shorterName] = child;
        }
        return child;
    }
    return newModel;

};

m.Model = __b__.Model.extend({
        one: __b__.Model.prototype.once,
        idAttribute: "_id",
        initialize: function(data){
            var _this = this;
            this.__syncName__ = "mod_"+Math.floor(Math.random()*10000);
            this.on("change:"+this.idAttribute,function(){
                if (_this.constructor.__objects__){
                    delete _this.constructor.__objects__[_this.previousAttributes[_this.idAttribute]];
                    _this.constructor.__objects__[_this.id] = _this;
                }
            });
            if (typeof this.init == "function") this.init(data);
        },
        fetch: function(args){
            var dfd = $.Deferred();
            var _this = this;
            __b__.Model.prototype.fetch.call(this,{
                success: function(){
                    if (args) if ('function' === typeof args.success) args.success.apply(_this,arguments);
                    dfd.resolve(_this);
                },
                error: function(){
                    if (args) if ('function' === typeof args.error) args.error.apply(_this,arguments);
                    dfd.reject(arguments);
                }
            });
            return dfd.promise();
        },
        get: function(t){
            var obj = {value: this.attributes[t]};
            try{ obj = JSON.parse(JSON.stringify(obj)); }
            catch(e) {return this.attributes[t];}
            return obj.value;
        },
        save: function(obj,args){
            var dfd = $.Deferred();
            var _this = this;
            __b__.Model.prototype.save.call(this,obj,{
                success: function(){
                    if (args) if ('function' === typeof args.success) args.success.apply(_this,arguments);
                    dfd.resolve(_this);
                },
                error: function(){
                    if (args) if ('function' === typeof args.error) args.error.apply(_this,arguments);
                    dfd.reject(arguments);
                }
            });
            return dfd.promise();
        },
        action: function(action,argsObj,opts){
            var _this = this;
            argsObj = argsObj || {};
            argsObj.__action__ = action;
            opts = opts || {};
            var s = opts.success,
                e = opts.error;
            opts.success = function(){s && s.apply(_this,arguments);};
            opts.error = function(){e && e.apply(_this,arguments);};
            opts.data = argsObj;
            return $.ajax((typeof this.url == "function")?this.url():this.url,opts);
        },
        destroy: function(args){
            var dfd = $.Deferred();
            var _this = this;
            __b__.Model.prototype.destroy.call(this,{
                success: function(){
                    if (args) if ('function' === typeof args.success) args.success.apply(_this,arguments);
                    delete _this.constructor.__objects__[_this.id];
                    dfd.resolve(_this);
                },
                error: function(){
                    if (args) if ('error' === typeof args.error) args.error.apply(_this,arguments);
                    dfd.reject(arguments);
                }
            });
            return dfd.promise();
        }
    },
    {
        get: function(id){
            var a = new this({_id: id});
            return a.fetch();
        },
        collection: function(objSearchParams){
            objSearchParams = __serializeObject__(objSearchParams || {});
            if (objSearchParams) objSearchParams = "?__action__=search&"+objSearchParams;
            return new m.Collection([],{
                url: this.prototype.urlRoot+objSearchParams,
                model: this
            });
        }
    }
);__b__.Collection.extend = function(obj,common){
    var _collectionUrl = (_.isString(obj.url))?obj.url:this.prototype.url;
    var _newCollection = __collectionBackboneExtend__.apply(this,arguments);
    if (obj.__autoGenerated__) return _newCollection;
    if (_.isString(_collectionUrl)) m.collections[_collectionUrl] = _newCollection;
    _newCollection.prototype.super = this.prototype.constructor.prototype;
    return _newCollection;
};

m.Collection = __b__.Collection.extend({
    one: __b__.Collection.prototype.once,
    initialize: function(models,options){
        options = options || {};
        for(var i in options) this[i] = options[i];
        if (typeof this.model === "string"){
            if (!(this.model in m.models)) throw Error("Unknown model: "+this.model);
            this.model = m.models[this.model];
        }
        this.modelName = this.model.modelName || this.model.prototype.modelName;
        this.setComparator(this.comparator);
        var _ = this;
        this.__syncName__ = "col_"+Math.floor(Math.random()*10000);
        __syncNames__[this.__syncName__] = this;
        setTimeout(function(){
            for(var i in __syncNames__){
                if ((__syncNames__[i] == _) && (i != _.__syncName__)){
                    _.keep = true;
                    delete __syncNames__[_.__syncName__];
                    _.__syncName__ = i;
                }
            }
        },0);
        if (typeof this.init == "function") this.init(arguments);

    },
    setComparator: function(c){
        if (this._comparator == c) return;
        this._comparator = c;
        if (('string' == typeof c) && (c.match(/\-\w+/))){
            var _c = c;
            _c = _c.substr(1,_c.length);
            this.comparator = function(a,b){
                if (a.get(_c) == b.get(_c)) return 0;
                if (a.get(_c) > b.get(_c)) return -1;
                else return 1;
            };
        }
        else this.comparator = c;
        this.sort();
    },
    fetch: function(args){
        var dfd = $.Deferred();
        var _this = this;
        __b__.Collection.prototype.fetch.call(this,{
            success: function(){
                if (args) if ('function' === typeof args.success) args.success.apply(_this,arguments);
                dfd.resolve(_this);
            },
            error: function(){
                if (args) if ('function' === typeof args.error) args.error.apply(_this,arguments);
                dfd.reject(arguments);
            }
        });
        return dfd.promise();
    }
});function __profileSort__(a,b){
    if (a.split(".").length > b.split(".").length) return -1;
    if (a.split(".").length < b.split(".").length) return 1;
    return 0;
}

function __templateForView__(view) {
    var selector = view.template+"_"+view.viewType;
    var profile = "muon";
    view.constructor.profiles = view.constructor.profiles.sort(__profileSort__);
    for(var i in view.constructor.profiles){
        if (m.hasProfile(view.constructor.profiles[i]))
        {
            profile = view.constructor.profiles[i];
            break;
        }
    }
    selector = "script#"+selector+"_template";
    selector += "[type='text/muon-template'][data-pack='"+view["package"]+"']";
    selector += "[data-profile='"+profile+"']";
    return $(selector)[0];
};

function __attrsParser__(attrs){
    var ret = {};
    var tempAttrs = attrs || "";
    tempAttrs = tempAttrs.split(";");
    for(var i in tempAttrs){
        var attr = tempAttrs[i].split(":");
        if (attr.length != 2) continue;
        ret[attr[0].replace(/^\s+/,"").replace(/\s+$/,"")] = attr[1].replace(/^\s+/,"").replace(/\s+$/,"");
    }
    return ret;
}

var __procProjection__ = {
    collection: function(el,collectionName,projection){
        var collAttrs = __attrsParser__(el.getAttribute("data-context-attrs"));
        if (typeof collAttrs.model === "string"){
            if (!(collAttrs.model in m.models)) throw Error("Unknown model: "+collAttrs.model);
            collAttrs.model = m.models[collAttrs.model];
        }
        if (projection instanceof m.Collection) return _.extend(projection,collAttrs);
        var Collection = m.collections[collectionName] || m.Collection;
        var dfd = $.Deferred();
        if (_.isArray(projection)){
            var coll = new Collection([],collAttrs);
            for(var i in projection){
                var el = projection[i];
                if (typeof el == "string" || typeof el == "number" || _.isObject(el)){
                    coll.add(new Collection.prototype.model(el));
                }
            }
            return coll;
        }
        if (projection === undefined){
            var coll = new Collection([],collAttrs);
            coll.fetch();
            return coll;
        }
        _.defer(dfd.reject,"Wrong projection type");
        return dfd.promise();
    },
    model: function(el,modelName,projection){
        var dataContextAttrs = el.getAttribute("data-context-attrs");
        var modelAttrs = __attrsParser__(dataContextAttrs);
        modelAttrs.__autoGenerated__ = true;
        if (projection instanceof m.Model) return _.extend(projection,modelAttrs);
        if (!(modelName in m.models) && !(modelName in this.m.models)) throw Error("Unknown model name: "+modelName);
        var Model = m.models[modelName] || this.m.models[modelName];
        if (dataContextAttrs) Model = Model.extend(modelAttrs);
        var dfd = $.Deferred();
        var dataModelId = el.getAttribute("data-model-id");
        if ((typeof projection == "string" || typeof projection == "number" || projection) && dataModelId)
            throw Error("You shouldn't use both projection variable and model Id attribute in one view simultaneously.");
        if (typeof projection == "string" || typeof projection == "number" ){
            Model.get(projection).then(dfd.resolve,dfd.reject);
            return dfd.promise();
        }
        if (typeof dataModelId == 'string'){
            Model.get(dataModelId).then(dfd.resolve,dfd.reject);
            return dfd.promise();
        }
        if (_.isObject(projection) || projection === undefined){
            return new Model();
        }
        _.defer(dfd.reject,"Wrong projection type");
        return dfd.promise();
    },
    layout: function(el,non,projection){
        return _.extend(projection,__attrsParser__(el.getAttribute("data-context-attrs")));
    },
    stack: function(el,non,projection){
        return _.extend(projection,__attrsParser__(el.getAttribute("data-context-attrs")));
    },
    widget: function(el,non,projection){
        return _.extend(projection,__attrsParser__(el.getAttribute("data-context-attrs")));
    }
};

function __getViewNameByType__(viewType,viewName,_contextName,pack,recursive){
    pack = pack || __basePackage__;
    _contextName = _contextName || "";
    pack = pack || __basePackage__;
    try{
        var View = null;
        if (!View && !recursive) View = m.packages[pack].views[viewType][viewName];
        if (!View && (viewType == "model" || viewType == "collection") && _contextName){
            var contextName = _contextName.replace(/:/g,".").split("."), _viewName = viewName;
            for(var i in contextName) _viewName = _viewName.replace(RegExp("_"+contextName[i]+"$"),"");
            if (_viewName != viewName){
                return __getViewNameByType__(viewType,_viewName,_contextName,pack,true);
            }
        }
        if (!View && (viewType == "model" || viewType == "collection") && _contextName){
            var contextName = _contextName.replace(/:/g,".").split(".").reverse().join("_");
            while(!m.packages[pack].views[viewType][viewName+"_"+contextName] && contextName.length != 0){
                var prevName = contextName;
                contextName = contextName.replace(/^[a-zA-Z0-9]+_/,"");
                if (prevName == contextName) contextName = "";
            }
            View = m.packages[pack].views[viewType][viewName+(contextName?"_":"")+contextName];
        }
        if (!View && recursive) View = m.packages[pack].views[viewType][viewName];
        if (!View) throw Error("not exists");
        return View;
    }
    catch(e){
        if (_contextName.indexOf(":") == -1) throw Error("Wrong view name:"+viewName+"_"+viewType+":"+_contextName+":"+ e.message);
        else return __getViewNameByType__(viewType,viewName,_contextName.substr(_contextName.indexOf(":")+1),pack,true);
    }
};

function __checkPresenceInDom__(el){
    while (el.parentElement) {
        if (el.parentElement == document.body) return true;
        else el = el.parentElement;
    }
    return false;
}

function __getParentMuonView__(el){
    do {
        if (el.muonView instanceof m.View) return el;
        else el = el.parentElement;
    }
    while (el.parentElement);
    return null;
}


//__onReady__.push(function(){
//    var obs = window.MutationObserver || window.WebKitMutationObserver;
//    if (!obs) return;
//    function __changeProc__(record){
//        for(var i = 0, len = record.length; i < len; i++){
//            var rec = record[i];
//            console.log(rec);
//        }
//    }
//    new obs(__changeProc__).observe(document.body,{subtree:true,attributes:true,attributeFilter:[
//        "data-model-view",
//        "data-collection-view",
//        "data-layout-view",
//        "data-stack-view",
//        "data-widget-view",
//        "data-model-attr",
//        "data-model-set",
//        "data-model-get",
//        "data-attr-type",
//        "data-context",
//        "data-context-attrs",
//        "data-view-attrs",
//        "data-projection"
//    ]});
//
//    new obs(__changeProc__).observe(document.body,{subtree:true,childList:true});
//});


function __insertView__(el,viewType,pack,parentView){
    var _this = this;
    if (_this.__removed__) return;
    if (!(m.packages[pack] && m.packages[pack].inited)){
        m.requirePack(pack,function(){
            __insertView__.apply(_this,[el,viewType,pack,parentView]);
        });
        return;
    }
    var projection = el.getAttribute("data-projection");
    var viewName = el.getAttribute("data-"+viewType+"-view");
    if (viewName == "data-"+viewType+"-view") viewName = "";
    if (projection){
        var mPlugin = m.getProjection(projection)?m:parentView.m;
        $(mPlugin).one("projection_updated."+projection, function(){
            __insertView__.apply(_this,[el,viewType,pack,parentView]);
        });
        $(mPlugin).one("projection_removed."+projection,function(){
            if (el.muonView instanceof m.View) el.muonView.remove();
            $(mPlugin).one("projection_updated."+projection, function(){
                __insertView__.apply(_this,[el,viewType,pack,parentView]);
            });
        });
        projection = mPlugin.getProjection(projection);
        if (projection === undefined) return;
    }
    setTimeout(function(){
        if (el.muonView instanceof m.View){
            el.muonView.remove();
            delete el.muonView;
        }
        try{
            $.when(__procProjection__[viewType].call(_this,el,el.getAttribute("data-context"),projection)).
                then(function(context){
                    try {
                        context = context || {};
                        var View = __getViewNameByType__(viewType,viewName,context.modelName,pack);
                        var viewAttrs = __attrsParser__(el.getAttribute("data-view-attrs"));
                        viewAttrs.__autoGenerated__ = true;
                        viewAttrs.package = pack;
                        viewAttrs.plugin = _this.plugin;
                        _this.__inlineViews__.push(new (View.extend(viewAttrs))(context,el));
                    }
                    catch(e){
                        console.log(parentView.template,el);
                        console.debug(e.stack);
                    }
                });
        }
        catch(e){
            console.log(parentView.template,el);
            console.debug(e.stack);
        }
    },0);

    this.innerHTML = "";
}

function __getTranslation__(el){
    var translation = this.pack().translation[this.template+"_"+this.viewType+":"+el.getAttribute("data-tr")];
    if (m.isDebug() && !translation) {$(el).addClass("untranslated");}
    else {$(el).removeClass("untranslated");}
    return translation || (m.isDebug()?"untranslated":"");
}

__b__.View.extend = function(obj,common){
    var viewType = (_.isString(obj.viewType))?obj.viewType:this.prototype.viewType;
    obj.package = obj.package || __currentPackage__ || this.prototype.package || __basePackage__;
    obj.plugin = obj.plugin || __currentPlugin__  || this.prototype.plugin || "";
    obj.m = __registerPlugin__(obj.plugin);
    var newView = __viewBackboneExtend__.apply(this,arguments);
    if (obj.__autoGenerated__) return newView;
    var template = newView.prototype.template;
    if (typeof template == "string"){
        if (!_.isObject(m.packages[__currentPackage__].views[viewType]))
            m.packages[__currentPackage__].views[viewType] = {};
        m.packages[__currentPackage__].views[viewType][template] = newView;
    }
    else {
        if (!_.isArray(m.packages[__currentPackage__].viewsUnnamed[viewType]))
            m.packages[__currentPackage__].viewsUnnamed[viewType] = [];
        m.packages[__currentPackage__].viewsUnnamed[viewType].push(newView);
    }
    newView.prototype.super = this.prototype.constructor.prototype;
    newView.profiles = [];
    if (viewType && !m.baseViews[viewType]) m.baseViews[viewType] = newView;
    return newView;
};

function __render__(){
    var _this = this;
    var tagName = this.tagName || "div";
    var $el = $("<"+tagName+" />");
    this.__renderTemplate__($el[0]);
    if (this.el && this.el.muonView == this){
        this.el.innerHTML = "";
        $(this.el).append($el.children());
    }
    else{
        this.el = $el[0];
    }
    this.$el = $(this.el);
    this.$ = _.bind(this.$el.find,this.$el);
    this.beforeRender && this.beforeRender();
    this.undelegateEvents();
    this.delegateEvents();
    this.$el.addClass([this.className,this.viewType,"block"].join(" "));
    this.el.muonView = this;
    this.el.setAttribute("data-muon",this.template?this.template+"_"+this.viewType:"");
    this.el.setAttribute("data-pack",this["package"]);
    this.el.setAttribute("data-cid",this.cid);
    __renderDependencySrc__.call(this);
    __renderDataRoutes__.call(this);
    __renderTranslation__.call(this);
    __renderDebugLabels__.call(this);
    this.__set__ && this.__set__();
    for(var i in m.baseViews){
        var $els = this.$el.find("[data-"+i+"-view]");
        $els.each(function(){
            __insertView__.call(_this,this,i,this.getAttribute("data-pack") || _this["package"],_this);
        });
    };
    this.rendered && this.rendered();
    this.__rendered__ = true;
    setTimeout(function(){
        _this.trigger("rendered");
    })
}

function __renderDebugLabels__(){
    if (!m.isDebug() || this.debugLabel) return;
    this.debugLabel = $("<div data-debug/>").text(this.package+":"+this.viewType+":"+(this.template||""))
        .appendTo(this.el);
    this.debugLabel.click(function(){
        $(this).toggleClass("pinned");
        $(this).parent().toggleClass("pinned");
    });
    __renderTranslation__.call(this);
}

function __renderTranslation__(){
    var _this = this;
    var innerTrs =  this.$el.find("*[data-muon] *[data-tr]");
    this.$el.find("*[data-tr]").not(innerTrs).each(function(){
        try{ this.innerHTML = __getTranslation__.call(_this,this); }
        catch(e){ console.log(e); }
        if (!m.isDebug()) return;
        this.debugLabel = $("<div data-debug/>").text(_this.package+":"+_this.template+"_"+_this.viewType+":"+this.getAttribute("data-tr"))
            .appendTo(this);
    });
}

function __renderDataRoutes__(){
    var _this = this;
    this.$el.find("a[data-route]").each(function(){
        var route = this.getAttribute("data-route");
        var packName = this.getAttribute("data-pack") || _this.package;
        if (!(packName in m.packages)) return;
        if (m.packages[packName].routerPath){
            if (route.match(/^\/\//)) route = route.replace(/\/{2,}/g,"/");
            else if (route.match(/^\//))
                route = (m.packages[packName].routerPath+"/"+route).replace(/\/{2,}/g,"/");
            else route = "~"+route.replace(/\/{2,}/g,"/");
            route = (__staticApp__?"#":"")+route.replace(/\^|\$/g,"");
        }
        $(this).attr("href",route).data("pack",packName);
    });
}

function __renderDependencySrc__(){
    var _this = this;
    var innerSrc =  this.$el.find("*[data-muon] *[data-src]");
    this.$el.find("*[data-src]").not(innerSrc).each(function(){
        this.src = "/pack_src/"+_this.package+"/"+this.getAttribute("data-src")+"?muon";
    });
    if (__staticApp__)
        ["src","href"].map(function(a){
            $("["+a+"]",_this.el).each(function(){
                if (!/^\/\//.test($(this).attr(a))) $(this).attr(a,$(this).attr(a).replace(/^\//,""));
            });
        });
}

function __removeInnerViews__(){
    this.$("[data-muon]").each(function(){
        if (this.muonView instanceof m.View) this.muonView.remove();
    });
    while(this.__inlineViews__.length > 0){
        var a = this.__inlineViews__.shift();
        a.remove();
    }
}

m.View = __b__.View.extend({
    one: __b__.View.prototype.once,
    tagName: "div",
    toString: function(){
        return this.package+":"+this.viewType+":"+this.template+"["+this.cid+"]";
    },
    initialize:function(context,_el_){
        __views__[this.cid] = this;
        this.context = context || {};
        this.__inlineViews__ = [];
        if (_el_ && _el_.nodeName) {
            this.__forcedElement__ = true;
            this.el = _el_;
            this.el.muonView = this;
        }
        if (typeof this.init == "function") this.init.apply(this,arguments);
        __render__.call(this);
    },
    __renderTemplate__: function(el){
        if (this.template){
            var template = __templateForView__(this);
            if (!template) return;
            $(el).jqoteapp(template.innerHTML,this.context);
        }
    },
    render: undefined,
    remove: function(){
        if (this.__removed__) return;
        this.beforeRemove && this.beforeRemove();
        delete __views__[this.cid];
        __removeInnerViews__.call(this);
        if (this.__forcedElement__){
            this.undelegateEvents();
            this.$el.children().remove();
            this.$el.removeAttr("data-muon");
        }
        else this.$el.remove();
        delete this.el.muonView;
        this.stopListening();
        delete this.$el;
        delete this.el;
        this.__removed__ = true;
        this.removed && this.removed();
        this.trigger("removed");
    },
    reload: function(){
        if (this.__reload_flag__) return;
        this.__reload_flag__ = true;
        var _this = this;
        _.defer(function(){
            _this.__reload_flag__ = false;
            _this.__unset__ && _this.__unset__();
            _this.beforeReload && _this.beforeReload();
            __removeInnerViews__.call(_this);
            __render__.call(_this);
            this.reloaded && this.reloaded();
            _this.trigger("reloaded");

        })

    },
    pack: function(){return m.packages[this.package];},
    surrogate: function(){return m.packages[this.package].packageObject.surrogate;},
    trigger: function(){
        if (this.__removed__) return;
        this.$el.trigger.apply(this.$el,arguments);
        __b__.View.prototype.trigger.apply(this,arguments);
    }
});// Устанавливает значение атрибутов в инпут

function __setGetElementValue__(view,getter){
    function set(val){
        var dataAttrType = this.getAttribute("data-attr-type");
        if (!dataAttrType){
            if (this.tagName == "INPUT" || this.tagName == "SELECT" || this.tagName == "TEXTAREA") $(this).val(val);
            else this.innerText = val;
        }
        else if (dataAttrType == "text") this.innerText = val;
        else if (dataAttrType == "html") this.innerHTML = val;
        else $(this).attr(dataAttrType,val);
    }
    if (typeof view["get_"+getter] == "function"){
        var val = view["get_"+getter](this);
        // Для деферед ответов
        if (val !== null && typeof val == "object" && "then" in val) val.then(set.bind(this));
        else set.call(this,val);
    }
    else set.call(this,view.model.get(getter));
}

function __updateModelView__(attrs){
    var _this = this;
    if (this.$el.find("[data-model-attr]").length != 0){
        for(var i in attrs){
            var dataAttrType = this.getAttribute("data-attr-type");
            var $subElement = this.$el.find("[data-model-attr^='"+i+"']");
            if (!$subElement.length) continue;
            $subElement.each(function(){
                var attrsList = this.getAttribute("data-model-attr").split(".");
                var attrValue = attrs[attrsList.shift()];
                try {
                    while(attrsList.length != 0){
                        attrValue = attrValue[attrsList.shift()];
                    }
                }
                catch(e){
                    attrValue = attrValue.toString();
                }
                if (!dataAttrType) this.innerText = attrValue;
                else if (dataAttrType == "text") this.innerText = attrValue;
                else if (dataAttrType == "html") this.innerHTML = attrValue;
                else $(this).attr(dataAttrType,attrValue);
            });
        }
    }
    
    // Если datamodelset and data-model-get назначены одновременно
    this.$el.find("[data-model-get],[data-model-set]").each(function(){
        __setGetElementValue__.call(this,_this,this.getAttribute("data-model-get") || this.getAttribute("data-model-set"));
    });
    __renderDataRoutes__.call(this);
}

m.ModelView = m.View.extend({
    viewType: "model",
    initialize: function(model){
        var _this = this;
        this.model = model;
        this.listenTo(model,"change",this.__update__);
        this.listenTo(model,"destroy",_this.remove);
        m.View.prototype.initialize.apply(this,arguments);
    },
    assignModelSetElement: function(el){
        var setter = el.getAttribute("data-model-set");
        var _this = el;
        var view = this;
        var interval = null;
        view.listenTo(view.model,"sync",function(){
            __setGetElementValue__.call(_this,view,setter);
        });
        if (!(el.getAttribute("data-silent") || view.silent || view.el.getAttribute("data-silent"))){
            $(el).keyup(function(){
                clearTimeout(interval);
                interval = setTimeout(function(){$(_this).trigger("change");},150);
            });
            $(el).change(function(){
                if (this.getAttribute("data-silent") || view.silent || view.el.getAttribute("data-silent")) return;
                if (typeof view["set_"+setter] == "function") view["set_"+setter]($(this).val(),this);
                else view.model.set(setter,$(this).val());
            });
        }    	
    },
    __set__: function(){
        __updateModelView__.call(this,this.model.attributes);
        var view = this;
        this.$el.find("[data-model-set]").each(function(){
        	view.assignModelSetElement(this);
        });
        this.$el.attr("id",this.model.id);
    },
    __update__:function(a,b,c){
        __updateModelView__.call(this,this.model.changedAttributes());
    },
    remove: function(){
        if (!this.model.collection){
            delete __syncNames__[this.__syncName__];
        }
        m.View.prototype.remove.call(this);
    },
    destroy: function(){
        return this.model.destroy();
    },
    save: function(){
        var view = this;
        this.$el.find("[data-model-set]").each(function(){
            var setter = this.getAttribute("data-model-set");
            if (typeof view["set_"+setter] == "function") view["set_"+setter]($(this).val(),this);
            else view.model.set(setter,$(this).val(),{silent: true});
        });
        return view.model.save();
    },
    fetch: function(){
        return this.model.fetch();
    }
});function __setEmptyFlag__(){
    if (this.collection.length == 0) this.$el.addClass("empty-collection").removeClass("non-empty-collection");
    else this.$el.removeClass("empty-collection").addClass("non-empty-collection");
}

function __addToCollection__(obj){
    __setEmptyFlag__.call(this);
    var model = obj;
    if (this.target.children("#"+model.id).length == 0){
        var $modelView = new this.modelView(model);
        var after = this.target.children()[this.collection.models.indexOf(model)+this.__keepChildrenLength__];
        if (after) $modelView.$el.before(after);
        else this.target.append($modelView.$el);
        this.childModels[model.id] = $modelView;
    }
}

function __removeFromCollection__(obj){
    __setEmptyFlag__.call(this);
    if (obj.id in this.childModels)
        this.childModels[obj.id].remove();
}

function __updateCollection__(collection){
    __setEmptyFlag__.call(this);
    if (collection != this.context) return;
    var _ = this;
    if (!this.modelView){
        throw Error("No model view specified");
    }
    var inCollection = [];
    for(var i in collection.models){
        var model = collection.models[i];
        inCollection.push("#"+model.id);
    }
    var toRemove = this.target.children().not(inCollection.join(", "));
    this.__keepChildren__.each(function(){
        toRemove = toRemove.not(this);
    });
    toRemove.each(function(){
        _.childModels[$(this).attr("id")].remove();
        delete _.childModels[$(this).attr("id")];
    });
    var $modelView = null;
    for(var i in collection.models)
    {
        var model = collection.models[i];
        if (this.target.children("#"+model.id).length == 0){
            var before = this.target.children()[i+this.__keepChildrenLength__];
            $modelView = new this.modelView(model);
            if (before) $modelView.$el.insertBefore(before);
            else this.target.append($modelView.$el);
            this.childModels[model.id] = $modelView;
        }
    }
}

function __sorted__(collection){
    for(var i = 0; i < collection.length; i++){
        var model = collection.models[i];
        this.target.append(this.childModels[model.id].$el);
    }
}

m.CollectionView = m.View.extend({
    viewType: "collection",
    initialize: function(collection){
        this.collection = collection;
        this.childModels = {};
        if (!this.modelView) this.modelView = this.template;
        if (_.isString(this.modelView)) this.modelView = __getViewNameByType__("model",this.modelView,collection.modelName,this.package);

        if (!this.modelView) throw Error("ModelView for collection view is not defined: "+this.template);
        this.listenTo(collection,"sync",__updateCollection__.bind(this));
        this.listenTo(collection,"add",__addToCollection__.bind(this));
        this.listenTo(collection,"remove",__removeFromCollection__.bind(this));
        this.listenTo(collection,"sort",__sorted__.bind(this));
        m.View.prototype.initialize.apply(this,arguments);
    },
    remove: function(){
        if (!this.collection.keep) delete __syncNames__[this.collection.__syncName__];
        delete this.collection;
        m.View.prototype.remove.call(this);
    },
    __set__:function(){
        this.target = this.target?this.$("#"+this.target):this.$el;
        this.__keepChildren__ = this.target.children();
        this.__keepChildrenLength__ = this.__keepChildren__.length;
        __updateCollection__.call(this,this.collection);
    }
});
m.WidgetView = m.View.extend({viewType: "widget"});m.LayoutView = m.View.extend({
    viewType: "layout",
    initialize:function(blocks){
        this.blocks = blocks || {};
        m.View.prototype.initialize.apply(this,arguments);
    },
    __set__:function(){
        for(var i in this.blocks){
            var block = this.blocks[i];
            this.$el.find("#"+i).html("");
            this.$el.find("#"+i).append(block.$el);
        }
    },
    __unset__: function(){
        // Unset method keeps blocks elements and protect them from __removeInnerView__
        for(var i in this.blocks){
            this.$("#"+i).html("");
        }
    },
    get: function(alias){
        if (alias in this.blocks)
            return this.blocks[alias];
        else
            throw new Error("View is not in layout.");
    },
    removeView: function(id){
        if (id in this.blocks){
            this.$("#"+id).html("");
            this.blocks[id].remove();
            delete this.blocks[id];
        }
    },
    update:function(blocks){
        var prevBlock = this.blocks || {};
        for(var i in blocks){
            var block = blocks[i];
            if (i in prevBlock) {
                prevBlock[i].remove();
            }
            this.blocks[i] = blocks[i];
            this.$("#"+i).html("");
            this.$("#"+i).append(block.$el);
        }
        return this;
    },
    remove: function(){
        for(var i in this.blocks){
            if (this.blocks[i]) this.blocks[i].remove();
        }
        m.View.prototype.remove.call(this);
    }
});

m.PageLayoutView = m.LayoutView.extend({
    __set__: function(){
        if (this.context instanceof m.ApplicationStackView){
            this.$el.append(this.context.$el);
        }
        m.LayoutView.prototype.__set__.call(this);
    }
});m.StackView = m.View.extend({
    viewType: "stack",
    initialize: function(){
        this.views = {};
        m.View.prototype.initialize.apply(this,arguments);
    },
    __set__:function(){
        if (this.target) this.$target = this.$("#"+this.target);
        else this.$target = this.$el;
        this.$target.addClass('');
        for(var i in this.views){
            this.$target.append(this.views[i].$el);
            if (this.current == i) this.views[i].trigger("viewShown");
        }
    },
    __unset__: function(){
        this.$target.html('');
    },
    add: function(alias,view){
        if (alias instanceof m.View){
            view = alias;
            alias = view.template;
        }
        if (!(view instanceof m.View)) throw Error(View.toString()+" is not proper View object");
        this.views[alias] = view;
        this.listenTo(view,"removed",function(){
            delete this.views[alias];
        });
        view.$el.hide();
        this.$target.append(view.$el);
    },
    removeView: function(id){
        if (id in this.views){
            this.$("#"+id).html("");
            this.views[id].remove();
            delete this.views[id];
        }
    },
    remove: function(){
        for(var i in this.views){
            if (this.views[i] instanceof m.View) this.views[i].remove();
        }
        m.View.prototype.remove.call(this);
    },
    get: function(name){
        if (name in this.views)
            return this.views[name];
        else
        if(this instanceof m.ApplicationStackView) throw Error("Page is not application view: "+name);
        else throw new Error("View is not in this stacked view: "+name);
    },
    show: function(name){
        var _this = this;
        if (this.current == name) return;
        if (!(name in this.views)){
            if(this instanceof m.ApplicationStackView) throw Error("Page is not in application view: "+name);
            else throw Error("View is not in this stacked view: "+name);
        }

        this.previous = _this.current;
        this.current = name;
        function _hide(){
            var i = _this.previous;
            if ('function' == typeof _this.hideAction) _this.hideAction(_this.views[_this.previous],_this.views[name],_show);
            else{
                _this.views[i].$el.hide();
                _show();
            }
        }

        function _show(){
            var i = name;
            if ('function' == typeof _this.showAction) _this.showAction(_this.views[_this.previous],_this.views[name],_proceed);
            else {
                _this.views[i].$el.show();
                _proceed();
            }
        }
        function _proceed(){
            _this.views[name].viewShown && _this.views[name].viewShown()
            _this.views[name].trigger("viewShown");
            if ('function' == typeof _this.postShow) _this.postShow();
        }
        this.beforeShow && this.beforeShow();
        if (_this.previous != undefined && _this.previous != null){
            _this.views[name].viewHidden && _this.views[name].viewHidden()
            _this.views[_this.previous].trigger("viewHidden");
            _hide();
        }
        else _show();
    }
});
/**
 * Класс преставления приложения
 *
 * @name ApplicationStackView
 * @namespace muon
 */

m.ApplicationStackView = m.StackView.extend({
    template: "application",
    __set__:function(){
        /**
         * Если ранее __applicationView__ не был задан значит это самый первый созданный ApplicationStackView объект
         */
        if (!(__applicationView__ instanceof m.ApplicationStackView))
            __applicationView__ = this;
        m.StackView.prototype.__set__.apply(this);
    },
    get: function(name){
        name += /_page$/.test(name)?"":"_page";
        if (this.views[name] == name){
            var view = new (this.pack().views.layout[name]);
            this.views[name] = view;
            this.$target.append(view.$el);
        }
        return m.StackView.prototype.get.call(this,name);
    },
    show: function(name){
        name += /_page$/.test(name)?"":"_page";
        if (this.views[name] == name){
            var view = new (this.pack().views.layout[name]);
            this.views[name] = view;
            this.$target.append(view.$el);
        }
        m.StackView.prototype.show.call(this,name);
    },
    add: function(alias,view){
        if (!view && typeof alias == "string"){
            alias += /_page$/.test(alias)?"":"_page";
            if (alias in this.pack().views.layout) this.views[alias] = alias;
            else throw Error("Can't add not PageLayoutView instance to ApplicationStackView: "+view.template+"_"+view.viewType);
            return;
        }
        if (!view) view = alias;
        if (!(view instanceof m.PageLayoutView))
            throw Error("Can't add not PageLayoutView instance to ApplicationStackView: "+view.template+"_"+view.viewType);
        if (!view) alias = view.template;
        this.views[alias] = view;
        view.$el.hide();
        this.$target.append(view.$el);
    },
    addPages: function(pages){
        var alreadyIn = [];
        var layouts = this.pack().views.layout;
        for(var i in pages){
            var perPageIn = [];
            var q = pages[i];
            q = q.replace(/\-/g,"\\-");
            q = q.replace(/\*/g,"[a-zA-Z0-9\\-_]*").replace(/\?/g,"[a-zA-Z0-9\\-_]").replace(/\+/g,"[a-zA-Z0-9\\-_]+");
            q = q.replace(/\*/,"*?").replace(/\+/,"+?");
            q = new RegExp("^"+q+"_page$");
            for(var j in layouts){
                if (alreadyIn.indexOf(j) != -1) continue;
                if (j.match(q)){
                    perPageIn.push(j);
                    alreadyIn.push(j);
                    this.add(j);
                }
            }
        }
    }
});

__domain__ = '192.168.0.5:8000',__serverMode__ = 'development',__protocol__ = 'https';
})();

