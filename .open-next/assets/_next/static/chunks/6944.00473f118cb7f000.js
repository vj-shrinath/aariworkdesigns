"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6944],{16944:function(e,t,i){let a,r,n;i.r(t),i.d(t,{VideoPlayer:function(){return b1}});var s=i(57437),o=i(83238),l=i(2265),d=Object.create,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,v=function(e,t){return function(){return e&&(t=e(e=0)),t}},E=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},b=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=h(t),s=0,o=n.length;s<o;s++)r=n[s],p.call(e,r)||r===i||u(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=c(t,r))||a.enumerable});return e},g=function(e,t,i){return i=null!=e?d(m(e)):{},b(!t&&e&&e.__esModule?i:u(i,"default",{value:e,enumerable:!0}),e)},f=E(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function y(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):y(e,t)}var T=v(function(){T()});function A(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var k=v(function(){}),w=E(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),S=E(function(e,t){function i(e,t){if(!y(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}T(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),I=E(function(e,t){function i(e,t){if(!y(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}T(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),R=E(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),L=E(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),C=E(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),D=E(function(e,t){k(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=A(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),M=E(function(e,t){T();var i=w(),a=R(),r=L(),n=C(),s=D(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!y(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),O=E(function(e,t){T();var i=M();function a(e){if(!y(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),x=E(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),N=E(function(e,t){T();var i=w(),a=S(),r=I(),n=M(),s=O(),o=x(),l=R(),d=L(),u=C();function c(){if(!y(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),P=E(function(e,t){var i=N();t.exports=new i}),U=E(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=P();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function B(e,t){if(e){if("string"==typeof e)return W(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return W(e,t)}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||B(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=g(f()),V=g(f()),K=g(f()),$={now:function(){var e=K.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},q=function(){if("function"==typeof(null===(e=V.default.crypto)||void 0===e?void 0:e.getRandomValues)){i=new Uint8Array(32),V.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=$.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},Y=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},G=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=Y()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},j=function(e){e&&void 0!==e.nodeName?e=G(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function Q(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Z=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,Q(o)),d=(i=console.info).bind.apply(i,Q(o)),u=(a=console.debug).bind.apply(a,Q(o)),c=(r=console.warn).bind.apply(r,Q(o)),h=(n=console.error).bind.apply(n,Q(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>z.TRACE))return l.apply(void 0,Q(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>z.DEBUG))return u.apply(void 0,Q(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>z.INFO))return d.apply(void 0,Q(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>z.WARN))return c.apply(void 0,Q(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>z.ERROR))return h.apply(void 0,Q(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),X=g(f());function J(){return"1"===(X.default.doNotTrack||X.default.navigator&&X.default.navigator.doNotTrack)}function ee(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){if(!y(e,t))throw TypeError("Cannot call a class as a function")}function ei(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ea(e,t,i){return t&&ei(e.prototype,t),i&&ei(e,i),e}function er(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function en(e){return(en=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function es(e,t,i){return(es="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=en(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function eo(e,t){return(eo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}T(),k();var el=function(e){return ed(e)[0]},ed=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},eu=g(f()),ec={exists:function(){var e=eu.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=eu.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=eu.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eh(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function em(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){er(e,t,i[t])})}return e}function ep(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ev=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eE=["x-cdn","content-type"].concat(ev);function eb(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eE.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eg(e){if(e){var t=ev.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ef=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},e_=function(e){if(!e)return{};var t=ec.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ey=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eb(e.getAllResponseHeaders())},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ec.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=e_(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",ep(em({},ef(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:el(r),request_response_headers:ey(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=e_(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:el(i.url),request_response_headers:ey(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=e_(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:el(i.url),request_response_headers:ey(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=e_(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ey(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?el(r.responseURL):void 0,request_id:h?eg(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ey(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:el(c),request_id:h?eg(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:el(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ek=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=el(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eb(u[u.length-1]._responseHeaders||""));var c=i?eg(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ew=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},eS=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eI=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eR=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eI(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:el(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ek(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,E=c.requestMediaDuration,b=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:b,request_id:c.requestId,request_url:g,request_media_duration:E,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ek(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,E=u.requestMediaDuration,b=u.requestHostname,g=u.requestUrl,f=u.requestId,y=ew(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:b,request_id:f,request_url:g,request_media_start_time:l,request_media_duration:E,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eS(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType){if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}}else{if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=ep(em({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:el(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:el(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eL=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eC=0,eD=function(){function e(){et(this,e),er(this,"_listeners",void 0)}return ea(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eC,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eC;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eM=g(f()),eO=function(){function e(t){var i=this;et(this,e),er(this,"_playbackHeartbeatInterval",void 0),er(this,"_playheadShouldBeProgressing",void 0),er(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eM.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return ea(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eM.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eM.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),ex=function e(t){var i=this;et(this,e),er(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eN=function(){function e(t){et(this,e),er(this,"_watchTimeTrackerLastCheckedTime",void 0),er(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ea(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eh(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eP=function(){function e(t){var i=this;et(this,e),er(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),er(this,"_lastTime",void 0),er(this,"_isAdPlaying",void 0),er(this,"_callbackUpdatePlaybackTime",void 0),er(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=$.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=$.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ea(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=$.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=$.now(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&eh(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&eh(this.pm.data,"ad_playing_time_ms_cumulative",i),eh(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eU=function(){function e(t){et(this,e),er(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return ea(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eW=function e(t){if(et(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eh(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eh(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eB=function(){function e(t){var i=this;et(this,e),er(this,"_lastCheckedTime",void 0),er(this,"_lastPlayheadTime",void 0),er(this,"_lastPlayheadTimeUpdatedTime",void 0),er(this,"_rebuffering",void 0),er(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:$.now()})}))}return ea(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eH=function(){function e(t){var i=this;et(this,e),er(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||$.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||$.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return ea(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eF=function e(t){var i=this;et(this,e),er(this,"_lastPlayerHeight",void 0),er(this,"_lastPlayerWidth",void 0),er(this,"_lastPlayheadPosition",void 0),er(this,"_lastSourceHeight",void 0),er(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eh(t.data,"view_total_content_playback_time",e),eh(t.data,"view_total_upscaling",r*e),eh(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eV=function e(t){var i=this;et(this,e),er(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=$.now(),r=(t.data.viewer_time||e)-(a||e);eh(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eh(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eK=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},e$=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eq=function(){function e(t){var i=this;et(this,e),er(this,"_adHasPlayed",void 0),er(this,"_adRequests",void 0),er(this,"_adResponses",void 0),er(this,"_currentAdRequestNumber",void 0),er(this,"_currentAdResponseNumber",void 0),er(this,"_prerollPlayTime",void 0),er(this,"_wouldBeNewAdPlay",void 0),er(this,"isAdBreak",void 0),er(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),e$.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eK(i._adRequests,a),eh(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eh(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eK(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eh(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eh(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eh(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eh(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ea(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=H(ed(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=H(ed(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),eY=function e(t){var i=this;et(this,e),er(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=$.now(),t.on("before*",r)},r=function(e){var a=$.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eG=g(f()),ej=(tT=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=tT({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",tT(t,{expires:-1}))},i.withConverter=e,i}(function(){})),eQ="muxData",ez=function(){var e;try{e=(ej.get(eQ)||"").split("&").reduce(function(e,t){var i=H(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eZ=function(e){try{ej.set(eQ,Object.entries(e).map(function(e){var t=H(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eX=function(){var e=ez();return e.mux_viewer_id=e.mux_viewer_id||q(),e.msn=e.msn||Math.random(),eZ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eJ=function(){var e=ez(),t=$.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=q(),e.sst=t),e.sex=t+15e5,eZ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e0=e2({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e1=e2({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e2(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e3(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e0[s];o||(Z.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e1[e]?o+=e1[e]:Number.isInteger(Number(e))?o+=e:(Z.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e4=g(f()),e5=g(U()),e9={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e8=["hb","requestcompleted","requestfailed","requestcanceled"],e6=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e9,t)};e6.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e6.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e6.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e4.default.clearTimeout(this._sendTimeout)},e6.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e3({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);te(this._beaconUrl,i,!0,function(){})},e6.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=$.now();te(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,Z.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=$.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e6.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e6.prototype._startBeaconSending=function(){var e=this;e4.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e4.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e6.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round($.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(Z.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e8.indexOf(e.e)}),s()),o()||(Z.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e7="function"==typeof e5.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},te=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e4.default.fetch){e4.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e7(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e4.default.XMLHttpRequest){var r=new e4.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tt=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],ti=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],ta=["ad_id","ad_creative_id","ad_universal_id"],tr=["viewstart","error","ended","viewend"],tn=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};et(this,e),er(this,"mux",void 0),er(this,"envKey",void 0),er(this,"options",void 0),er(this,"eventQueue",void 0),er(this,"sampleRate",void 0),er(this,"disableCookies",void 0),er(this,"respectDoNotTrack",void 0),er(this,"previousBeaconData",void 0),er(this,"lastEventTime",void 0),er(this,"rateLimited",void 0),er(this,"pageLevelData",void 0),er(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e6((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(f=this.options.sampleRate)&&void 0!==f?f:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(b=this.options.platform)||void 0===b||null===(E=b.os)||void 0===E?void 0:E.version,page_url:null===eG.default||void 0===eG.default||null===(g=eG.default.location)||void 0===g?void 0:g.href},this.viewerData=this.disableCookies?{}:eX()}return ea(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&J())return Z.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return Z.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eJ(),a=ep(em({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e3(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return Z.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||Z.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(Z.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(tr.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=e3(a),this.eventQueue.queueEvent(a.event,s),Z.error("Beaconing disabled due to rate limit.")}}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=em({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=H(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tt.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||ta.includes(t)&&ti.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),ts=function e(t){et(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},to=function e(t){var i=this;et(this,e),er(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=$.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,er({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function tl(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var td=function e(t){et(this,e);var i=function(e){var i,a=null!=e&&e.request_type&&("media"===e.request_type||"video"===e.request_type)&&!(null===(i=e.request_response_headers)||void 0===i)&&i["x-cdn"]?e.request_response_headers["x-cdn"]:null!=e&&e.video_cdn?e.video_cdn:null,r=null!=e&&e.request_start?e.request_start:null!=e&&e.viewer_time?e.viewer_time:Date.now();null!=a&&!tl(a,n)&&s<=r&&(n=a,s=r,t.emit("cdnchange",{video_cdn:a}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(tl(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tu=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},tc=function e(t){var i=this;et(this,e),er(this,"_emittingAutomaticEvent",!1),er(this,"_hasInitialized",!1),er(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tu(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},th=function(){function e(t){et(this,e),er(this,"pm",void 0),er(this,"_currentRangeStart",void 0),er(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return ea(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!(null===(e=this.pm.adTracker)||void 0===e)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tm=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),tp=function(e){if(!e)return tm.UNKNOWN;switch(e){case"cellular":case"wimax":return tm.CELLULAR;case"wifi":return tm.WIFI;case"ethernet":return tm.WIRED;case"none":return tm.NO_CONNECTION;case"bluetooth":case"other":default:return tm.OTHER;case"unknown":return tm.UNKNOWN}},tv=g(f()),tE=function(){function e(t){var i=this;et(this,e),er(this,"pm",void 0),er(this,"lastType",void 0),er(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),tv.default.addEventListener("online",a),tv.default.addEventListener("offline",a),null===(t=e.connection)||void 0===t||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null===(t=e.connection)||void 0===t||t.removeEventListener("change",a),tv.default.removeEventListener("online",a),tv.default.removeEventListener("offline",a)})})}return ea(e,[{key:"type",get:function(){var t,i;return(null===(t=tv.default.navigator)||void 0===t?void 0:t.onLine)===!1?tm.NO_CONNECTION:!(null===(i=e.connection)||void 0===i)&&i.type?tp(e.connection.type):tm.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null===(t=e.connection)||void 0===t?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",em({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=tv.default.navigator)&&"connection"in e&&"object"==typeof e.connection?tv.default.navigator.connection:null}}]),e}(),tb=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],tg=new Set(["requestcompleted","requestfailed","requestcanceled"]),tf=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&eo(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=en(a);return e=t?Reflect.construct(i,arguments,en(this).constructor):i.apply(this,arguments),e&&("object"===A(e)||"function"==typeof e)?e:ee(this)});function a(e,t,r){et(this,a),er(ee(n=i.call(this)),"pageLoadEndTime",void 0),er(ee(n),"pageLoadInitTime",void 0),er(ee(n),"_destroyed",void 0),er(ee(n),"_heartBeatTimeout",void 0),er(ee(n),"adTracker",void 0),er(ee(n),"dashjs",void 0),er(ee(n),"data",void 0),er(ee(n),"disablePlayheadRebufferTracking",void 0),er(ee(n),"disableRebufferTracking",void 0),er(ee(n),"disableAdPlaybackRangeFiltering",void 0),er(ee(n),"errorTracker",void 0),er(ee(n),"errorTranslator",void 0),er(ee(n),"emitTranslator",void 0),er(ee(n),"getAdData",void 0),er(ee(n),"getPlayheadTime",void 0),er(ee(n),"getStateData",void 0),er(ee(n),"stateDataTranslator",void 0),er(ee(n),"hlsjs",void 0),er(ee(n),"id",void 0),er(ee(n),"longResumeTracker",void 0),er(ee(n),"minimumRebufferDuration",void 0),er(ee(n),"mux",void 0),er(ee(n),"playbackEventDispatcher",void 0),er(ee(n),"playbackHeartbeat",void 0),er(ee(n),"playbackHeartbeatTime",void 0),er(ee(n),"playheadTime",void 0),er(ee(n),"seekingTracker",void 0),er(ee(n),"sustainedRebufferThreshold",void 0),er(ee(n),"watchTimeTracker",void 0),er(ee(n),"currentFragmentPDT",void 0),er(ee(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ec.navigationStart(),n.pageLoadEndTime=ec.domContentLoadedEventEnd(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),Z.level=r.debug?z.DEBUG:z.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new tn(e,r.data.env_key,r),n.data={player_instance_id:q(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(ee(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tb.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new to(ee(n)),n.errorTracker=new ex(ee(n)),new eY(ee(n)),n.seekingTracker=new eV(ee(n)),n.playheadTime=new eU(ee(n)),n.playbackHeartbeat=new eO(ee(n)),new eF(ee(n)),n.watchTimeTracker=new eN(ee(n)),new eP(ee(n)),new th(ee(n)),n.adTracker=new eq(ee(n)),new eB(ee(n)),new eW(ee(n)),new eH(ee(n)),new ts(ee(n)),new td(ee(n)),new tc(ee(n)),new tE(ee(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return ea(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=es(en(a.prototype),"emit",this)).call.apply(i,[this].concat(Q(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=H(ed(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tg.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}!(null===(e=this.data)||void 0===e)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=q(),i=function(){t===e.data.view_id&&eh(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,eT(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eA(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eR(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eL(this.dashjs),this.dashjs=void 0)}}]),a}(eD),t_=g(U());function ty(){return t_.default&&!!(t_.default.fullscreenElement||t_.default.webkitFullscreenElement||t_.default.mozFullScreenElement||t_.default.msFullscreenElement)}var tT,tA,tk=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tw={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tS=g(f());tS.default&&tS.default.WeakMap&&(tA=new WeakMap);var tI={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tR=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tR.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tR.prototype.processLine=function(e){var t=e.indexOf(":"),i=tN(e,t),a=i[0],r=2===i.length?tD(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tI.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tI.PART_INF:tL(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tI.SERVER_CONTROL:tL(this.manifest,i),this.setHoldBack();break;case tI.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tI.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tI.VERSION:tL(this.manifest,i);break;case tI.SESSION_DATA:var s=ef(tP(i[1]));Object.assign(this.manifest.sessionData,s)}},tR.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tL=function(e,t){var i,a=tC(t[0].replace("#EXT-X-",""));tx(t[1])?(i={},i=Object.assign(tO(t[1]),i)):i=tD(t[1]),e[a]=i},tC=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tD=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tM=function(e){var t={},i=e.split("=");return i.length>1&&(t[tC(i[0])]=tD(i[1])),t},tO=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tM(t[a]),i);return i},tx=function(e){return e.indexOf("=")>-1},tN=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tP=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tU={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){Z.info("safeCall error",e)}return r},safeIncrement:eh,getComputedStyle:function(e,t){var i;return e&&t&&tS.default&&"function"==typeof tS.default.getComputedStyle?(tA&&tA.has(e)&&(i=tA.get(e)),i||(i=tS.default.getComputedStyle(e,null),tA&&tA.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eb,cdnHeadersToRequestId:eg,extractHostnameAndDomain:ed,extractHostname:el,manifestParser:tR,generateShortID:Y,generateUUID:q,now:$.now,findMediaElement:j},tW={},tB=function(e){var t=arguments;"string"==typeof e?tB.hasOwnProperty(e)?F.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tB[e].apply(null,t)},0):Z.warn("`"+e+"` is an unknown task"):"function"==typeof e?F.default.setTimeout(function(){e(tB)},0):Z.warn("`"+e+"` is invalid.")},tH={loaded:$.now(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=H(j(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:ty(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=H(j(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tk.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tw[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=ty()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=ty(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tB,e,t)},destroyMonitor:function(e){var t=H(j(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():Z.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=G(e);tW[i]?tW[i].addHLSJS(t):Z.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=G(e);tW[i]?tW[i].addDashJS(t):Z.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=G(e);tW[t]?tW[t].removeHLSJS():Z.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=G(e);tW[t]?tW[t].removeDashJS():Z.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){J()&&t&&t.respectDoNotTrack&&Z.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=G(e);tW[i]=new tf(tB,i,t)},emit:function(e,t,i){var a=G(e);tW[a]?(tW[a].emit(t,i),"destroy"===t&&delete tW[a]):Z.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=G(e);tW[i]?tW[i].emit("hb",t):Z.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=G(e);tW[i]?tW[i].emitTranslator=t:Z.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=G(e);tW[i]?tW[i].stateDataTranslator=t:Z.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=G(e);tW[i]?tW[i].getPlayheadTime=t:Z.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:J,log:Z,utils:tU,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tB,tH),void 0!==F.default&&"function"==typeof F.default.addEventListener&&F.default.addEventListener("pagehide",function(e){e.persisted||(tB.WINDOW_UNLOADING=!0)},!1);var tF=i(40303),tV=tF.ZP,tK={VIDEO:"video",DRM:"drm"},t$={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tq=e=>e===tK.VIDEO?"playback":e,tY=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tY.MEDIA_ERR_ABORTED=1,tY.MEDIA_ERR_NETWORK=2,tY.MEDIA_ERR_DECODE=3,tY.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tY.MEDIA_ERR_ENCRYPTED=5,tY.MEDIA_ERR_CUSTOM=100,tY.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tG=e=>null==e,tj=(e,t)=>!tG(t)&&e in t,tQ={ANY:"any",MUTED:"muted"},tz={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tZ={MSE:"mse",NATIVE:"native"},tX={HEADER:"header",QUERY:"query",NONE:"none"},tJ=Object.values(tX),t0={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},t1={HLS:t0.M3U8};Object.keys(t1),[...Object.values(t0)];var t2={code:"en"},t3=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},t4=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t5=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tj(e,t1)?t1[e]:t}return t6(e)},t9=e=>"VOD"===e?tz.ON_DEMAND:tz.LIVE,t8=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,t6=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=it(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return ia(e)?t0.M3U8:"";let r=i.slice(a+1).toUpperCase();return tj(r,t0)?t0[r]:""},t7=e=>{try{return new URL(e),!1}catch{return!0}},ie=e=>e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF")),it=(e,t)=>{var i;if(!t7(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&t7(t.toString())&&(r=new URL(t,a)),new URL(e,r)},ii="mux.com",ia=({src:e,customDomain:t=ii})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},ir=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},is=({exp:e},t=Date.now())=>!e||1e3*e<t,io=({sub:e},t)=>e!==t,il=({aud:e},t)=>!e,id=({aud:e},t)=>e!==t;function iu(e,t=!0){var i;return new ic(t&&null!=(i=null==t2?void 0:t2[e])?i:e,t?t2.code:"en")}var ic=class{constructor(e,t=(e=>null!=(e=t2)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ih=Object.values(tQ),im=e=>"boolean"==typeof e||"string"==typeof e&&ih.includes(e),ip=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=im(a)?a:!!a,o=()=>{r||t3(t,"playing",()=>{r=!0},{once:!0})};if(o(),t3(t,"loadstart",()=>{r=!1,o(),iv(t,s)},{once:!0}),t3(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tz.UNKNOWN?e.streamType===tz.LIVE:!Number.isFinite(t.duration)),iv(t,s)},{once:!0}),i&&i.once(tV.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tz.UNKNOWN?e.streamType===tz.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&t3(t,"play",()=>{"metadata"===t.preload?i.once(tV.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||iv(t,s=im(e)?e:!!e)}},iv=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tQ.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tQ.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},iE=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return t3(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},ib=(e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,t3(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(tV.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(tV.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})},ig=(e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(tV.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})},i_=e=>"time"in e?e.time:e.startTime;function iy(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function iT(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function iA(e,t,i,a){let r=iT(e,i,a);return r||((r=iy(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>i_(t)-i_(e)).forEach(t=>{var i,n;let s=t.value,o=i_(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ik="cuepoints",iw=Object.freeze({label:ik});async function iS(e,t,i=iw){return iA(e,t,i.label,"metadata")}var iI=e=>({time:e.startTime,value:JSON.parse(e.text)});function iR(e,t={label:ik}){var i,a;let r=iT(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iI(r.activeCues[0]);let{currentTime:n}=e;return iI(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iL(e,t=iw){return new Promise(i=>{t3(e,"loadstart",async()=>{let a=await iS(e,[],t);t3(e,"cuechange",()=>{let t=iR(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iC="chapters",iD=Object.freeze({label:iC}),iM=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iO(e,t,i=iD){return iA(e,t,i.label,"chapters")}function ix(e,t={label:iC}){var i,a;let r=iT(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iM(r.activeCues[0]);let{currentTime:n}=e;return iM(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iN(e,t=iD){return new Promise(i=>{t3(e,"loadstart",async()=>{let a=await iO(e,[],t);t3(e,"cuechange",()=>{let t=ix(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iP={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iU=e=>e===tK.VIDEO?iP.VIDEO:e===tK.DRM?iP.DRM:void 0,iW=(e,t)=>{var i,a;let r=tq(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tj(n,t)?t[n]:void 0},iB=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=iu("Your device appears to be offline",r),a=tY.MEDIA_ERR_NETWORK,n=new tY(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=t$.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tY.MEDIA_ERR_NETWORK;if(200===l)return;let c=tq(t),h=iW(t,i),m=iU(t),[p]=t4(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let v=ir(h);if(h&&!v){let i=new tY(iu("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,iu("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=t$.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tY("",u,null==a||a);return e.errorCategory=t,e.muxCode=t$.NETWORK_UNKNOWN_ERROR,e}if(403===l){if(v){if(is(v,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tY(iu("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,iu("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=v.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=t$.NETWORK_TOKEN_EXPIRED,a.data=e,a}if(io(v,p)){let i=new tY(iu("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,iu("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:v.sub}));return i.errorCategory=t,i.muxCode=t$.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(il(v,m)){let i=new tY(iu("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,iu("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=t$.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(id(v,m)){let i=new tY(iu("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,iu("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:v.aud}));return i.errorCategory=t,i.muxCode=t$.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tY(iu("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,iu("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=t$.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===l){let n=new tY(iu("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,iu("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=t$.NETWORK_NOT_READY,n.streamType=i.streamType===tz.LIVE?"live":i.streamType===tz.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tY(iu("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,iu("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=t$.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tY(iu("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,iu("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=t$.NETWORK_INVALID_URL,i.data=e,i}let E=new tY("",u,null==a||a);return E.errorCategory=t,E.muxCode=t$.NETWORK_UNKNOWN_ERROR,E.data=e,E},iH=tV.DefaultConfig.capLevelController,iF={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iV=class e extends iH{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iF[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iH.getMaxLevelByMediaSize(a,16/9*n,n)}};iV.minMaxResolution=720,iV.maxAutoResolution=new WeakMap;var iK,i$,iq,iY,iG,ij,iQ=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tY(iu("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tK.DRM,t.muxCode=t$.ENCRYPTED_CDM_ERROR,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{e.webkitKeys||l();let i=await n;if(null===t.initData||null==i)return;let a=iz(t.initData,i);d(a)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tY("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tY.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=tK.DRM,e.muxCode=t$.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new tY(iu("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=tK.DRM,r.muxCode=t$.ENCRYPTED_CDM_ERROR,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0}),u},iz=(e,t)=>{let i=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iZ(e)),a=new Uint8Array(e),r=new Uint8Array(i),n=new Uint8Array(t),s=new Uint8Array(a.byteLength+4+n.byteLength+4+r.byteLength),o=0,l=e=>{s.set(e,o),o+=e.byteLength},d=e=>{let t=new DataView(s.buffer),i=e.byteLength;t.setUint32(o,i,!0),o+=4,l(e)};return l(a),d(r),d(n),s},iZ=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),iX=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i){console.error(`Received unexpected initialization data type "${i}"`);return}e.mediaKeys||await l(i);let a=t.initData;if(null==a){console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);return}await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tY(iu("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tK.DRM,t.muxCode=t$.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=iu("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tY(e,tY.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tK.DRM,t.muxCode=t$.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new tY(iu("Failed to update DRM license. This may be an issue with the player or your protected content."),tY.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tK.DRM,t.muxCode=t$.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,t)}},d=()=>{let t=t=>{let i;"internal-error"===t?((i=new tY(iu("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tK.DRM,i.muxCode=t$.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((i=new tY(iu("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tY.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tK.DRM,i.muxCode=t$.ENCRYPTED_OUTPUT_RESTRICTED),i&&a(e,i)};o.keyStatuses.forEach(e=>t(e))};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tY(iu("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tY.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=tK.DRM,e.muxCode=t$.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u},iJ={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},i0=e=>e.includes("fps")?iJ.FAIRPLAY:e.includes("playready")?iJ.PLAYREADY:e.includes("widevine")?iJ.WIDEVINE:void 0,i1=(e,t)=>{let i,a=ie(e);if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(t7(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=it(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())},i2=e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(i3)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}},i3=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,i4=e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t9(n),o=t8(n),l;if(s===tz.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*+e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=3*+(null!=t?t:6)}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},i5=async(e,t)=>{if(t===t0.MP4)return{streamType:tz.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===t0.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await i1(i,t.url);return{...i2(i),...i4(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},i9=async(e,t,i=t5({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await i5(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&i8(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=ar.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=ar.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=ar.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},i8=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=ar.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},i6=e=>{var t;let i=e.type,a=t9(i),r=t8(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tz.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},i7=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=i6(e);if(c===tz.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=ar.get(t))?o:{}).seekable=e}(null!=(l=ar.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=ar.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ar.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ae=null!=(i$=null==(iK=null==globalThis?void 0:globalThis.navigator)?void 0:iK.userAgent)?i$:"",at=null!=(iG=null==(iY=null==(iq=null==globalThis?void 0:globalThis.navigator)?void 0:iq.userAgentData)?void 0:iY.platform)?iG:"",ai=ae.toLowerCase().includes("android")||["x11","android"].some(e=>at.toLowerCase().includes(e)),aa=e=>/^((?!chrome|android).)*safari/i.test(ae)&&!!e.canPlayType("application/vnd.apple.mpegurl"),ar=new WeakMap,an="mux.com",as=null==(ij=tV.isSupported)?void 0:ij.call(tV),ao=e=>ai||!aa(e),al=()=>{if("undefined"!=typeof window)return tB.utils.now()},ad=tB.utils.generateUUID,au=({playbackId:e,customDomain:t=an,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t4(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},ac=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},ah=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},am=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:aW(e)&&null!=(a=null!=(i=ac(e.playbackId))?i:ah(e.src))?a:e.src},ap=e=>{var t;return null==(t=ar.get(e))?void 0:t.error},av=e=>{var t;return null==(t=ar.get(e))?void 0:t.metadata},aE=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.streamType)?i:tz.UNKNOWN},ab=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},ag=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.seekable)?i:e.seekable},af=e=>{var t;let i=null==(t=ar.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=ag(e);return a.length?a.end(a.length-1)-i:Number.NaN},a_=e=>{var t;return null==(t=ar.get(e))?void 0:t.coreReference},ay=.034,aT=(e,t,i=ay)=>Math.abs(e-t)<=i,aA=(e,t,i=ay)=>e>t||aT(e,t,i),ak=(e,t=ay)=>e.paused&&aA(e.currentTime,e.duration,t),aw=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},aS=(e,t)=>e.ended||e.loop?e.ended:!!(t&&aw(e,t))||ak(e),aI=(e,t,i)=>{aR(t,i,e);let{metadata:a={}}=e,{view_session_id:r=ad()}=a,n=am(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=ar.get(t))?void 0:i.coreReference;aI(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},ar.set(t,{retryCount:0});let s=aC(e,t),o=iE(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tV:void 0}):aH(e,t,s),aF(e,t,s),iL(t),iN(t);let l=ip(e,t,s);ib(e,t,s),ig(e,t,s);let d={engine:s,setAutoplay:l,setPreload:o},u=ar.get(t);return u&&(u.coreReference=d),d},aR=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aK),e.removeEventListener("error",aq),e.removeEventListener("durationchange",aV),ar.delete(e),e.dispatchEvent(new Event("teardown")))};function aL(e,t){var i;let a=t5(e);if(a!==t0.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tZ.MSE,o=n===tZ.NATIVE,l=as&&(s||ao(t));return r&&(o||!l)}var aC=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=t5(e)===t0.M3U8,c=aL(e,t);if(u&&!c&&as){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=aD(a),h=aM(e),m=[tX.QUERY,tX.HEADER].includes(s)?{useHeaders:s===tX.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=aB(e,o),v=new tV({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tX.QUERY)return;let r=it(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===iV&&void 0!==l&&iV.setMaxAutoResolution(v,l),v.on(tV.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&i8(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},aD=e=>e===tz.LIVE?{backBufferLength:8}:{},aM=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=ac(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aP(e,"fairplay"),serverCertificateUrl:aU(e,"fairplay")},"com.widevine.alpha":{licenseUrl:aP(e,"widevine")},"com.microsoft.playready":{licenseUrl:aP(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=i0(e);return null==a||a(i),t}))}:{}},aO=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ax=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},aN=(e,t)=>{let i={mediaEl:t,getAppCertificate:()=>aO(aU(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iB(t,tK.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ax(t,aP(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iB(t,tK.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:a$,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,iJ.FAIRPLAY)}};if(e.useWebkitFairplay)iQ(i);else{let t=iX({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}},aP=({playbackId:e,tokens:{drm:t}={},customDomain:i=an},a)=>{let r=ac(e);return`https://license.${i.toLocaleLowerCase().endsWith(an)?i:an}/license/${a}/${r}?token=${t}`},aU=({playbackId:e,tokens:{drm:t}={},customDomain:i=an},a)=>{let r=ac(e);return`https://license.${i.toLocaleLowerCase().endsWith(an)?i:an}/appcert/${a}/${r}?token=${t}`},aW=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(an)||!!i&&a.includes(i.toLocaleLowerCase())},aB=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=iV,i.capLevelToPlayerSize=!0):i.capLevelController=tF.wl,i},aH=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tB,muxDataSDKOptions:o={}}=e,l=aW(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tV:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aF=(e,t,i)=>{var a,r;let n=aL(e,t),{src:s,customDomain:o=an}=e,l=()=>{t.ended||e.disablePseudoEnded||!aS(t,i)||(aw(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=ag(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(t3(t,"durationchange",c),t&&n){let i=t5(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=ah(s);i8(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(aE(t)!==tz.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),t3(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>i9(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iB(i,tK.VIDEO,e);if(a){a$(t,a);return}}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};t3(t,"play",e,{once:!0}),t3(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?aN(e,t):t3(t,"encrypted",()=>{let e=new tY(iu("Attempting to play DRM-protected content without providing a DRM token."),tY.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tK.DRM,e.muxCode=t$.ENCRYPTED_MISSING_TOKEN,a$(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=ar.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aV,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aK),t.addEventListener("error",aq),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),t3(t,"pause",l),t3(t,"seeked",l),t3(t,"play",()=>{t.ended||aA(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tV.Events.LEVEL_LOADED,(e,a)=>{i7(a.details,t,i),c(),aE(t)!==tz.LIVE||Number.isFinite(t.duration)||(i.on(tV.Events.LEVEL_UPDATED,c),t3(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tV.Events.LEVELS_UPDATED,c)}))}),i.on(tV.Events.ERROR,(a,r)=>{var n,s;let o=aY(r,e);if(o.muxCode===t$.NETWORK_NOT_READY){let e=null!=(n=ar.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tY(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),a$(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new tY('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),a$(t,i);return}}a$(t,o)}),i.on(tV.Events.MANIFEST_LOADED,()=>{let e=ar.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aq),t3(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tV.Events.MANIFEST_PARSED,function(t,i){l();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tV.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(o(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(tV.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},o=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},l=()=>{s(),o()};t.once(tV.Events.DESTROYING,()=>{var t,i;l(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),function(e,t){t.on(tV.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;iy(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tV.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tV.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tV.Events.MANIFEST_LOADED,a),t.once(tV.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aV(e){var t;let i=e.target,a=null==(t=ar.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aK(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tY(i,a);if(t.src&&a===tY.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=ap(t))?e:t.error;(null==i?void 0:i.code)===tY.MEDIA_ERR_SRC_NOT_SUPPORTED&&a$(t,r)},500);return}if(t.src&&(a!==tY.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}a$(t,r)}function a$(e,t){var i;t.fatal&&((null!=(i=ar.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aq(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tY))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=ar.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aY=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tV.ErrorTypes.NETWORK_ERROR]:tY.MEDIA_ERR_NETWORK,[tV.ErrorTypes.MEDIA_ERROR]:tY.MEDIA_ERR_DECODE,[tV.ErrorTypes.KEY_SYSTEM_ERROR]:tY.MEDIA_ERR_ENCRYPTED},s,o=[tV.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tV.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tY.MEDIA_ERR_NETWORK:n[e.type];if(o===tY.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tV.ErrorTypes.KEY_SYSTEM_ERROR?tK.DRM:e.type===tV.ErrorTypes.NETWORK_ERROR?tK.VIDEO:void 0)?i:tK.VIDEO;s=null!=(a=iB(e.response,r,t,e.fatal))?a:new tY("",o,e.fatal)}else o===tY.MEDIA_ERR_ENCRYPTED?e.details===tV.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tY(iu("Attempting to play DRM-protected content without providing a DRM token."),tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_MISSING_TOKEN):e.details===tV.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tY(iu("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tV.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tY(iu("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tY.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tV.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tY(iu("Failed to update DRM license. This may be an issue with the player or your protected content."),tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tV.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tY(iu("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tV.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tY(iu("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_CDM_ERROR):e.details===tV.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tY(iu("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tY.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tY(e.error.message,tY.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tK.DRM,s.muxCode=t$.ENCRYPTED_ERROR):s=new tY("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let aG=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],aj=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function aQ(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${aX(e)}></audio>
    </slot>
    <slot></slot>
  `}function az(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${aX(e)}></video>
    </slot>
    <slot></slot>
  `}function aZ(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?aQ:az;static shadowRootOptions={mode:"open"};static Events=aG;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...aj]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype)){if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function aX(e){let t="";for(let i in e){if(!aj.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let aJ=aZ(globalThis.HTMLElement??class{},{tag:"video"});aZ(globalThis.HTMLElement??class{},{tag:"audio"});var a0,a1,a2,a3,a4,a5,a9,a8,a6,a7,re,rt,ri,ra,rr=e=>{throw TypeError(e)},rn=(e,t,i)=>t.has(e)||rr("Cannot "+i),rs=(e,t,i)=>(rn(e,t,"read from private field"),i?i.call(e):t.get(e)),ro=(e,t,i)=>t.has(e)?rr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rl=(e,t,i,a)=>(rn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rd=(e,t,i)=>(rn(e,t,"access private method"),i),ru=(()=>{try{return"0.31.0"}catch{}return"UNKNOWN"})(),rc=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,rh={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},rm=Object.values(rh),rp="mux-video",rv=class extends aJ{constructor(){super(),ro(this,re),ro(this,a0),ro(this,a1),ro(this,a2,{}),ro(this,a3,{}),ro(this,a4),ro(this,a5),ro(this,a9),ro(this,a8),ro(this,a6,""),ro(this,a7,e=>{var t;let i=av(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(rl(this,a6,"default"),this.updateLogo())}),ro(this,ri),rl(this,a1,al())}static get NAME(){return rp}static get VERSION(){return ru}static get observedAttributes(){var e;return[...rm,...null!=(e=aJ.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?rc:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${aJ.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[rh.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(rh.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tJ.includes(e)?this.setAttribute(rh.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tJ.join()}`):this.removeAttribute(rh.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(rh.PLAYER_INIT_TIME)?+this.getAttribute(rh.PLAYER_INIT_TIME):rs(this,a1)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rh.PLAYER_INIT_TIME):this.setAttribute(rh.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=rs(this,a9))?e:rp}set playerSoftwareName(e){rl(this,a9,e)}get playerSoftwareVersion(){var e;return null!=(e=rs(this,a5))?e:ru}set playerSoftwareVersion(e){rl(this,a5,e)}get _hls(){var e;return null==(e=rs(this,re,rt))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=ap(this.nativeEl))?e:null}get errorTranslator(){return rs(this,a8)}set errorTranslator(e){rl(this,a8,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(rh.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(rh.TYPE,e):this.removeAttribute(rh.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(rh.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(rh.DEBUG,""):this.removeAttribute(rh.DEBUG))}get disableTracking(){return this.hasAttribute(rh.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(rh.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(rh.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(rh.DISABLE_COOKIES,""):this.removeAttribute(rh.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(rh.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(rh.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(rh.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(rh.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(rh.START_TIME):this.setAttribute(rh.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(rh.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(rh.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rh.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(rh.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(rh.MIN_PRELOAD_SEGMENTS):this.setAttribute(rh.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(rh.PLAYBACK_ID)?this.getAttribute(rh.PLAYBACK_ID):null!=(e=ah(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(rh.PLAYBACK_ID,e):this.removeAttribute(rh.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(rh.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rh.MAX_RESOLUTION,e):this.removeAttribute(rh.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rh.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rh.MIN_RESOLUTION,e):this.removeAttribute(rh.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rh.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rh.MAX_AUTO_RESOLUTION):this.setAttribute(rh.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rh.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rh.RENDITION_ORDER,e):this.removeAttribute(rh.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(rh.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(rh.PROGRAM_START_TIME):this.setAttribute(rh.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(rh.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(rh.PROGRAM_END_TIME):this.setAttribute(rh.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(rh.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(rh.ASSET_START_TIME):this.setAttribute(rh.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(rh.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(rh.ASSET_END_TIME):this.setAttribute(rh.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(rh.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rh.CUSTOM_DOMAIN,e):this.removeAttribute(rh.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:rs(this,ri)}set capRenditionToPlayerSize(e){rl(this,ri,e)}get drmToken(){var e;return null!=(e=this.getAttribute(rh.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(rh.DRM_TOKEN,e):this.removeAttribute(rh.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(rh.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(rh.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(rh.PLAYBACK_ID)){let[,e]=t4(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(rh.PLAYBACK_TOKEN,e):this.removeAttribute(rh.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(rh.PLAYBACK_TOKEN),t=this.getAttribute(rh.DRM_TOKEN);return{...rs(this,a3),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){rl(this,a3,null!=e?e:{})}get ended(){return aS(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(rh.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(rh.ENV_KEY,e):this.removeAttribute(rh.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rh.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rh.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rh.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(rh.STREAM_TYPE))?e:aE(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(rh.STREAM_TYPE,e):this.removeAttribute(rh.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(rh.TARGET_LIVE_WINDOW)?+this.getAttribute(rh.TARGET_LIVE_WINDOW):ab(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(rh.TARGET_LIVE_WINDOW):this.setAttribute(rh.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(rh.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return af(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(rh.LIVE_EDGE_OFFSET))return+this.getAttribute(rh.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(rh.LIVE_EDGE_OFFSET):this.setAttribute(rh.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return ag(this.nativeEl)}async addCuePoints(e){return iS(this.nativeEl,e)}get activeCuePoint(){return iR(this.nativeEl)}get cuePoints(){return function(e,t={label:ik}){let i=iT(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iI(e)):[]}(this.nativeEl)}async addChapters(e){return iO(this.nativeEl,e)}get activeChapter(){return ix(this.nativeEl)}get chapters(){return function(e,t={label:iC}){var i;let a=iT(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iM(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(rh.PREFER_PLAYBACK);if(e===tZ.MSE||e===tZ.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tZ.MSE||e===tZ.NATIVE?this.setAttribute(rh.PREFER_PLAYBACK,e):this.removeAttribute(rh.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![rh.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...rs(this,a2)}}set metadata(e){rl(this,a2,null!=e?e:{}),this.mux&&this.mux.emit("hb",rs(this,a2))}get _hlsConfig(){return rs(this,a4)}set _hlsConfig(e){rl(this,a4,e)}get logo(){var e;return null!=(e=this.getAttribute(rh.LOGO))?e:rs(this,a6)}set logo(e){e?this.setAttribute(rh.LOGO,e):this.removeAttribute(rh.LOGO)}load(){aI(this,this.nativeEl,rs(this,re,rt))}unload(){aR(this.nativeEl,rs(this,re,rt),this)}attributeChangedCallback(e,t,i){var a,r;switch(aJ.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case rh.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case rh.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?rd(this,re,ra).call(this):e&&!a?this.unload():e&&a&&(this.unload(),rd(this,re,ra).call(this));break}case"autoplay":if(i===t)break;null==(a=rs(this,re,rt))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=rs(this,re,rt))||r.setPreload(i);break;case rh.PLAYBACK_ID:case rh.CUSTOM_DOMAIN:case rh.MAX_RESOLUTION:case rh.MIN_RESOLUTION:case rh.RENDITION_ORDER:case rh.PROGRAM_START_TIME:case rh.PROGRAM_END_TIME:case rh.ASSET_START_TIME:case rh.ASSET_END_TIME:case rh.PLAYBACK_TOKEN:this.src=au(this);break;case rh.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case rh.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case rh.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case rh.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case rh.LOGO:(null==i||i!==t)&&this.updateLogo();break;case rh.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),rd(this,re,ra).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case rh.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case rh.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(rs(this,a6)||this.logo);e.innerHTML=t}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",rs(this,a7)),this.nativeEl&&this.src&&!rs(this,re,rt)&&rd(this,re,ra).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",rs(this,a7)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};a0=new WeakMap,a1=new WeakMap,a2=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a9=new WeakMap,a8=new WeakMap,a6=new WeakMap,a7=new WeakMap,re=new WeakSet,rt=function(){return a_(this.nativeEl)},ri=new WeakMap,ra=async function(){rs(this,a0)||(await rl(this,a0,Promise.resolve()),rl(this,a0,null),this.load())};let rE=new WeakMap;class rb extends Error{}class rg extends Error{}let rf=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function r_(){return globalThis.cast?.framework?.CastContext.getInstance()}function ry(){return r_()?.getCurrentSession()}function rT(){return ry()?.getSessionObj().media[0]}function rA(e){return r_().setOptions({...rk(),...e})}function rk(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function rw(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function rS(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function rI(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return rf.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function rR(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=rS(i),n=rw(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=rS(i);o=rw(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let rL=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rC=new WeakSet;r6=()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}a||(a=cast.framework,r_().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{rL.forEach(t=>rE.get(t).onCastStateChanged?.(e))}),r_().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{rL.forEach(t=>rE.get(t).onSessionStateChanged?.(e))}),rL.forEach(e=>rE.get(e).init?.()))},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?r6():customElements.whenDefined("google-cast-button").then(r6):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(r6)};let rD=0;class rM extends EventTarget{#p;#a;#v;#E;#b="disconnected";#g=!1;#f=new Set;#_=new WeakMap;#y=()=>this.#T();constructor(e){super(),this.#p=e,rL.add(this),rE.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#A(),onSessionStateChanged:()=>this.#k(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#y),this.#E&&this.#v?.controller&&Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&rC.delete(this.#p),this.#a=!1}get #w(){if(rC.has(this.#p))return this.#v}get state(){return this.#b}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new rb("disableRemotePlayback attribute is present.");return this.#_.set(e,++rD),this.#f.add(e),queueMicrotask(()=>e(this.#S())),rD}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new rb("disableRemotePlayback attribute is present.");e?this.#f.delete(e):this.#f.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new rb("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new rg("The RemotePlayback API is disabled on this platform.");let e=rC.has(this.#p);rC.add(this.#p),rA(this.#p.castOptions),Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await r_().requestSession()}catch(t){if(e||rC.delete(this.#p),"cancel"===t)return;throw Error(t)}rE.get(this.#p)?.loadOnPrompt?.()}#I(){rC.has(this.#p)&&(Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),rC.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#S(){let e=r_()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#A(){let e=r_().getCastState();if(rC.has(this.#p)&&"CONNECTING"===e&&(this.#b="connecting",this.dispatchEvent(new Event("connecting"))),!this.#g&&e?.includes("CONNECT"))for(let e of(this.#g=!0,this.#f))e(!0);else if(this.#g&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#g=!1,this.#f))e(!1)}async #k(){let{SESSION_RESUMED:e}=a.SessionState;if(r_().getSessionState()===e&&this.#p.castSrc===rT()?.media.contentId){rC.add(this.#p),Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{rT().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#E[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#E[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,rA(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#y),this.#A(),this.#v=new a.RemotePlayer,new a.RemotePlayerController(this.#v),this.#E={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#b="connected",this.dispatchEvent(new Event("connect"))):(this.#I(),this.#b="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#R())}})}#R(){this.#T()}async #T(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=ry()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{rT().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let rO=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#L={paused:!1};#C=rk();#D;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),rE.set(this,{loadOnPrompt:()=>this.#O()}),this.#M=new rM(this)}return super.remote}get #w(){return rE.get(this.#M)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,rE.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#C.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #O(){this.#L.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await rI(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await rR(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#L.paused,r.activeTrackIds=i,await ry()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#C}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#D}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}this.#D=e}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class rx extends Event{track;constructor(e,t){super(e),this.track=t.track}}let rN=new WeakMap;function rP(e){var t;let i;return rN.get(e)??(t={},(i=rN.get(e))||rN.set(e,i={}),Object.assign(i,t))}function rU(e,t){let i=e.videoTracks;rP(t).media=new WeakRef(e),rP(t).renditionSet||(rP(t).renditionSet=new Set);let a=rP(i).trackSet;a.add(t);let r=a.size-1;r in rB.prototype||Object.defineProperty(rB.prototype,r,{get(){return[...rP(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new rx("addtrack",{track:t}))})}function rW(e){let t=rP(e).media?.deref()?.videoTracks;t&&(rP(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new rx("removetrack",{track:e}))}))}class rB extends EventTarget{#x;#N;#P;constructor(){super(),rP(this).trackSet=new Set}get #U(){return rP(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rH extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function rF(e){let t=rP(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...rP(e).renditionSet]):[]}class rV extends EventTarget{#W;#B;#P;[Symbol.iterator](){return rF(this).values()}get length(){return rF(this).length}getRenditionById(e){return rF(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return rF(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of rF(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rK{src;id;width;height;bitrate;frameRate;codec;#H=!1;get selected(){return this.#H}set selected(e){this.#H!==e&&(this.#H=e,function(e){let t=rP(e).media?.deref()?.videoRenditions;t&&!rP(t).changeRequested&&(rP(t).changeRequested=!0,queueMicrotask(()=>{delete rP(t).changeRequested,rP(e).track.selected&&t.dispatchEvent(new Event("change"))}))}(this))}}class r${id;kind;label="";language="";sourceBuffer;#H=!1;addRendition(e,t,i,a,r,n){let s=new rK;return s.src=e,s.width=t,s.height=i,s.frameRate=n,s.bitrate=r,s.codec=a,!function(e,t){let i=rP(e).media?.deref()?.videoRenditions;rP(t).media=rP(e).media,rP(t).track=e;let a=rP(e).renditionSet;a.add(t);let r=a.size-1;r in rV.prototype||Object.defineProperty(rV.prototype,r,{get(){return rF(this)[r]}}),queueMicrotask(()=>{i&&e.selected&&i.dispatchEvent(new rH("addrendition",{rendition:t}))})}(this,s),s}removeRendition(e){!function(e){let t=rP(e).media?.deref()?.videoRenditions,i=rP(e).track;rP(i).renditionSet.delete(e),queueMicrotask(()=>{let i=rP(e).track;t&&i.selected&&t.dispatchEvent(new rH("removerendition",{rendition:e}))})}(e)}get selected(){return this.#H}set selected(e){this.#H!==e&&(this.#H=e,!0===e&&function(e){let t=rP(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(rP(t).changeRequested)return;rP(t).changeRequested=!0,queueMicrotask(()=>{delete rP(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function rq(e){let t=rP(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...rP(e).renditionSet]):[]}class rY extends EventTarget{#W;#B;#P;[Symbol.iterator](){return rq(this).values()}get length(){return rq(this).length}getRenditionById(e){return rq(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return rq(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of rq(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rG{src;id;bitrate;codec;#H=!1;get selected(){return this.#H}set selected(e){this.#H!==e&&(this.#H=e,function(e){let t=rP(e).media?.deref()?.audioRenditions;t&&!rP(t).changeRequested&&(rP(t).changeRequested=!0,queueMicrotask(()=>{delete rP(t).changeRequested,rP(e).track.enabled&&t.dispatchEvent(new Event("change"))}))}(this))}}function rj(e,t){let i=e.audioTracks;rP(t).media=new WeakRef(e),rP(t).renditionSet||(rP(t).renditionSet=new Set);let a=rP(i).trackSet;a.add(t);let r=a.size-1;r in rz.prototype||Object.defineProperty(rz.prototype,r,{get(){return[...rP(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new rx("addtrack",{track:t}))})}function rQ(e){let t=rP(e).media?.deref()?.audioTracks;t&&(rP(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new rx("removetrack",{track:e}))}))}class rz extends EventTarget{#x;#N;#P;constructor(){super(),rP(this).trackSet=new Set}get #U(){return rP(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rZ{id;kind;label="";language="";sourceBuffer;#F=!1;addRendition(e,t,i){let a=new rG;return a.src=e,a.codec=t,a.bitrate=i,!function(e,t){let i=rP(e).media?.deref()?.audioRenditions;rP(t).media=rP(e).media,rP(t).track=e;let a=rP(e).renditionSet;a.add(t);let r=a.size-1;r in rY.prototype||Object.defineProperty(rY.prototype,r,{get(){return rq(this)[r]}}),queueMicrotask(()=>{i&&e.enabled&&i.dispatchEvent(new rH("addrendition",{rendition:t}))})}(this,a),a}removeRendition(e){!function(e){let t=rP(e).media?.deref()?.audioRenditions,i=rP(e).track;rP(i).renditionSet.delete(e),queueMicrotask(()=>{let i=rP(e).track;t&&i.enabled&&t.dispatchEvent(new rH("removerendition",{rendition:e}))})}(e)}get enabled(){return this.#F}set enabled(e){this.#F!==e&&(this.#F=e,function(e){let t=rP(e).media?.deref()?.audioTracks;t&&!rP(t).changeRequested&&(rP(t).changeRequested=!0,queueMicrotask(()=>{delete rP(t).changeRequested,t.dispatchEvent(new Event("change"))}))}(this))}}let rX=r1(globalThis.HTMLMediaElement,"video"),rJ=r1(globalThis.HTMLMediaElement,"audio");function r0(e){if(!e?.prototype)return e;let t=r1(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){let t=rP(e).videoTracks;if(!t&&(t=new rB,rP(e).videoTracks=t,rX)){let i=rX.call(e.nativeEl??e);for(let t of i)rU(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof r$)){for(let e of i)rW(e);return}rU(e,a.track)}),i.addEventListener("removetrack",e=>{rW(e.track)})}return t}(this)}});let i=r1(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){let t=rP(e).audioTracks;if(!t&&(t=new rz,rP(e).audioTracks=t,rJ)){let i=rJ.call(e.nativeEl??e);for(let t of i)rj(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rZ)){for(let e of i)rQ(e);return}rj(e,a.track)}),i.addEventListener("removetrack",e=>{rQ(e.track)})}return t}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new r$;return a.kind=e,a.label=t,a.language=i,rU(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=rW),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new rZ;return a.kind=e,a.label=t,a.language=i,rj(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=rQ),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=rP(e).videoRenditions;return t||(rP(t=new rV).media=new WeakRef(e),rP(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=rP(e).audioRenditions;return t||(rP(t=new rY).media=new WeakRef(e),rP(e).audioRenditions=t),t};return e}function r1(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var r2=e=>{throw TypeError(e)},r3=(e,t,i)=>t.has(e)||r2("Cannot "+i),r4=(e,t,i)=>(r3(e,t,"read from private field"),i?i.call(e):t.get(e)),r5=(e,t,i)=>t.has(e)?r2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),r9=(e,t,i,a)=>(r3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r8=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends r8{}globalThis.DocumentFragment=e}var r6,r7,ne=class extends r8{},nt=class{constructor(e,t={}){r5(this,r7),r9(this,r7,null==t?void 0:t.detail)}get detail(){return r4(this,r7)}initCustomEvent(){}};r7=new WeakMap;var ni={document:{createElement:function(e,t){return new ne}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ne)},CustomEvent:nt,EventTarget:r8,HTMLElement:ne,HTMLVideoElement:class extends r8{}},na="undefined"==typeof window||void 0===globalThis.customElements,nr=na?ni:globalThis;na&&ni.document;var nn,ns=class extends rO(r0(rv)){constructor(){super(...arguments),r5(this,nn)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=r4(this,nn))?e:this.muxCastCustomData}set castCustomData(e){r9(this,nn,e)}};nn=new WeakMap,nr.customElements.get("mux-video")||(nr.customElements.define("mux-video",ns),nr.MuxVideoElement=ns);let no={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},nl={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},nd={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},nu=Object.entries(nd),nc=nu.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),nh=nu.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(nh).reduce((e,[t,i])=>{let a=nc[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let nm=Object.entries(nc).reduce((e,[t,i])=>{let a=nh[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),np={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},nv={DISABLED:"disabled",SHOWING:"showing"},nE={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},nb={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ng={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},nf={FULLSCREEN:"fullscreen"};function n_(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ny(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function nT(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function nA(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function nk(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function nw(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let nS=e=>new Promise(t=>setTimeout(t,e)),nI={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},nR=(null==(cz=globalThis.navigator)?void 0:cz.language)||"en",nL=e=>{nR=e},nC=e=>{var t,i,a;let[r]=nR.split("-");return(null==(t=nI[nR])?void 0:t[e])||(null==(i=nI[r])?void 0:i[e])||(null==(a=nI.en)?void 0:a[e])||e},nD=(e,t={})=>nC(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),nM=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],nO=(e,t)=>{let i=1===e?nD(nM[t].singular):nD(nM[t].plural);return`${e} ${i}`},nx=e=>{if(!nk(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&nO(e,t)).filter(e=>e).join(", ");return i?nD("{time} remaining",{time:r}):r};function nN(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class nP{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class nU extends nP{}class nW extends nU{constructor(){super(...arguments),this.role=null}}class nB{observe(){}unobserve(){}disconnect(){}}let nH={createElement:function(){return new nF.HTMLElement},createElementNS:function(){return new nF.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},nF={ResizeObserver:nB,document:nH,Node:nU,Element:nW,HTMLElement:class extends nW{constructor(){super(...arguments),this.innerHTML=""}get content(){return new nF.DocumentFragment}},DocumentFragment:class extends nP{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},nV="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,nK=Object.keys(nF).every(e=>e in globalThis),n$=nV&&!nK?nF:globalThis,nq=nV&&!nK?nH:globalThis.document,nY=new WeakMap,nG=e=>{let t=nY.get(e);return t||nY.set(e,t=new Set),t},nj=new n$.ResizeObserver(e=>{for(let t of e)for(let e of nG(t.target))e(t)});function nQ(e,t){nG(e).add(t),nj.observe(e)}function nz(e,t){let i=nG(e);i.delete(t),i.size||nj.unobserve(e)}function nZ(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nX(e){var t;return null!=(t=nJ(e))?t:n4(e,"media-controller")}function nJ(e){var t;let{MEDIA_CONTROLLER:i}=nl,a=e.getAttribute(i);if(a)return null==(t=n9(e))?void 0:t.getElementById(a)}let n0=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},n1=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},n2=(e,t)=>n1(e,t)[0],n3=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||n3(e,t.getRootNode().host)),n4=(e,t)=>e?e.closest(t)||n4(e.getRootNode().host,t):null;function n5(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=n5(i.shadowRoot))?t:i:null}function n9(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function n8(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function n6(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||n7(e,t)}function n7(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function se(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function st(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}se(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function si(e,t){return e.hasAttribute(t)}function sa(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}si(e,t)!=i&&e.toggleAttribute(t,i)}function sr(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function sn(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;sr(e,t,void 0)!==a&&e.setAttribute(t,a)}var ss=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},so=(e,t,i)=>(ss(e,t,"read from private field"),i?i.call(e):t.get(e)),sl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sd=(e,t,i,a)=>(ss(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class su extends n$.HTMLElement{constructor(){if(super(),sl(this,cZ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nl.MEDIA_CONTROLLER,nc.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===nl.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=so(this,cZ))?void 0:a.unassociateElement)||r.call(a,this),sd(this,cZ,null)),i&&this.isConnected&&(sd(this,cZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=so(this,cZ))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),sd(this,cZ,function(e){var t;let i=e.getAttribute(nl.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):n4(e,"media-controller")}(this)),this.getAttribute(nl.MEDIA_CONTROLLER)&&(null==(t=null==(e=so(this,cZ))?void 0:e.associateElement)||t.call(e,this)),so(this,cZ)&&(so(this,cZ).addEventListener("pointerdown",this),so(this,cZ).addEventListener("click",this),so(this,cZ).hasAttribute("tabindex")||(so(this,cZ).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(nl.MEDIA_CONTROLLER)&&(null==(t=null==(e=so(this,cZ))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=so(this,cZ))||i.removeEventListener("pointerdown",this),null==(a=so(this,cZ))||a.removeEventListener("click",this),sd(this,cZ,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===nE.TOUCH){this.handleTap(e);return}if(d===nE.MOUSE||d===nE.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return si(this,nc.MEDIA_PAUSED)}set mediaPaused(e){sa(this,nc.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?no.MEDIA_PLAY_REQUEST:no.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n$.CustomEvent(t,{composed:!0,bubbles:!0}))}}cZ=new WeakMap,su.shadowRootOptions={mode:"open"},su.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},n$.customElements.get("media-gesture-receiver")||n$.customElements.define("media-gesture-receiver",su);var sc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sh=(e,t,i)=>(sc(e,t,"read from private field"),i?i.call(e):t.get(e)),sm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sp=(e,t,i,a)=>(sc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sv=(e,t,i)=>(sc(e,t,"access private method"),i);let sE={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},sb=Object.values(nc);function sg(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(sE.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(nh.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(nh.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class sf extends n$.HTMLElement{constructor(){if(super(),sm(this,c9),sm(this,c6),sm(this,he),sm(this,hi),sm(this,hr),sm(this,cX,void 0),sm(this,cJ,0),sm(this,c0,null),sm(this,c1,null),sm(this,c2,void 0),this.breakpointsComputed=!1,sm(this,c3,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),sm(this,c4,!1),sm(this,c5,e=>{sh(this,c4)||(setTimeout(()=>{sg(e.target,e.contentRect.width),sp(this,c4,!1)},0),sp(this,c4,!0))}),sm(this,hs,void 0),sm(this,ho,()=>{if(!sh(this,hs).assignedElements({flatten:!0}).length){sh(this,c0)&&this.mediaUnsetCallback(sh(this,c0));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}sp(this,cX,new MutationObserver(sh(this,c3)))}static get observedAttributes(){return[sE.AUTOHIDE,sE.GESTURES_DISABLED].concat(sb).filter(e=>![nc.MEDIA_RENDITION_LIST,nc.MEDIA_AUDIO_TRACK_LIST,nc.MEDIA_CHAPTERS_CUES,nc.MEDIA_WIDTH,nc.MEDIA_HEIGHT,nc.MEDIA_ERROR,nc.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==sE.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(sp(this,c0,e),e.localName.includes("-")&&await n$.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;sh(this,cX).observe(this,{childList:!0,subtree:!0}),nQ(this,sh(this,c5));let t=null!=this.getAttribute(sE.AUDIO)?nD("audio player"):nD("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(sE.USER_INACTIVE,""),sg(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(sp(this,hs,i),sh(this,hs).addEventListener("slotchange",sh(this,ho))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=n$.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;nz(this,sh(this,c5)),clearTimeout(sh(this,c1)),sh(this,cX).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=n$.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),sh(this,hs)&&(sh(this,hs).removeEventListener("slotchange",sh(this,ho)),sp(this,hs,null)),sp(this,c4,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){sp(this,c0,null)}handleEvent(e){switch(e.type){case"pointerdown":sp(this,cJ,e.timeStamp);break;case"pointermove":sv(this,c9,c8).call(this,e);break;case"pointerup":sv(this,c6,c7).call(this,e);break;case"mouseleave":sv(this,he,ht).call(this);break;case"mouseup":this.removeAttribute(sE.KEYBOARD_CONTROL);break;case"keyup":sv(this,hr,hn).call(this),this.setAttribute(sE.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);sp(this,c2,isNaN(t)?0:t)}get autohide(){return(void 0===sh(this,c2)?2:sh(this,c2)).toString()}get breakpoints(){return sr(this,sE.BREAKPOINTS)}set breakpoints(e){sn(this,sE.BREAKPOINTS,e)}get audio(){return si(this,sE.AUDIO)}set audio(e){sa(this,sE.AUDIO,e)}get gesturesDisabled(){return si(this,sE.GESTURES_DISABLED)}set gesturesDisabled(e){sa(this,sE.GESTURES_DISABLED,e)}get keyboardControl(){return si(this,sE.KEYBOARD_CONTROL)}set keyboardControl(e){sa(this,sE.KEYBOARD_CONTROL,e)}get noAutohide(){return si(this,sE.NO_AUTOHIDE)}set noAutohide(e){sa(this,sE.NO_AUTOHIDE,e)}get autohideOverControls(){return si(this,sE.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){sa(this,sE.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return si(this,sE.USER_INACTIVE)}set userInteractive(e){sa(this,sE.USER_INACTIVE,e)}}cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,c4=new WeakMap,c5=new WeakMap,c9=new WeakSet,c8=function(e){if("mouse"!==e.pointerType&&e.timeStamp-sh(this,cJ)<250)return;sv(this,hi,ha).call(this),clearTimeout(sh(this,c1));let t=this.hasAttribute(sE.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&sv(this,hr,hn).call(this)},c6=new WeakSet,c7=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(sE.USER_INACTIVE);[this,this.media].includes(e.target)&&t?sv(this,he,ht).call(this):sv(this,hr,hn).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&sv(this,hr,hn).call(this)},he=new WeakSet,ht=function(){if(0>sh(this,c2)||this.hasAttribute(sE.USER_INACTIVE))return;this.setAttribute(sE.USER_INACTIVE,"");let e=new n$.CustomEvent(nh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},hi=new WeakSet,ha=function(){if(!this.hasAttribute(sE.USER_INACTIVE))return;this.removeAttribute(sE.USER_INACTIVE);let e=new n$.CustomEvent(nh.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},hr=new WeakSet,hn=function(){sv(this,hi,ha).call(this),clearTimeout(sh(this,c1));let e=parseInt(this.autohide);e<0||sp(this,c1,setTimeout(()=>{sv(this,he,ht).call(this)},1e3*e))},hs=new WeakMap,ho=new WeakMap,sf.shadowRootOptions={mode:"open"},sf.getTemplateHTML=function(e){return`
    <style>
      
      :host([${nc.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${sE.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${sE.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${sE.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${sE.AUDIO}])[${sE.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${sE.AUDIO}])[${sE.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${sE.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${sE.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${sE.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${sE.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${sE.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${sE.USER_INACTIVE}]:not([${nc.MEDIA_PAUSED}]):not([${nc.MEDIA_IS_AIRPLAYING}]):not([${nc.MEDIA_IS_CASTING}]):not([${sE.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${sE.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${sE.USER_INACTIVE}]:not([${sE.NO_AUTOHIDE}]):not([${nc.MEDIA_PAUSED}]):not([${nc.MEDIA_IS_CASTING}]):not([${sE.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${sE.USER_INACTIVE}][${sE.AUTOHIDE_OVER_CONTROLS}]:not([${sE.NO_AUTOHIDE}]):not([${nc.MEDIA_PAUSED}]):not([${nc.MEDIA_IS_CASTING}]):not([${sE.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${sE.AUDIO}])[${nc.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${su.shadowRootOptions.mode}">
          ${su.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},n$.customElements.get("media-container")||n$.customElements.define("media-container",sf);var s_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sy=(e,t,i)=>(s_(e,t,"read from private field"),i?i.call(e):t.get(e)),sT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sA=(e,t,i,a)=>(s_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sk{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){sT(this,hh),sT(this,hl,void 0),sT(this,hd,void 0),sT(this,hu,void 0),sT(this,hc,new Set),sA(this,hl,e),sA(this,hd,t),sA(this,hu,new Set(i))}[Symbol.iterator](){return sy(this,hh,hm).values()}get length(){return sy(this,hh,hm).size}get value(){var e;return null!=(e=[...sy(this,hh,hm)].join(" "))?e:""}set value(e){var t;e!==this.value&&(sA(this,hc,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...sy(this,hh,hm)][e]}values(){return sy(this,hh,hm).values()}forEach(e,t){sy(this,hh,hm).forEach(e,t)}add(...e){var t,i;e.forEach(e=>sy(this,hc).add(e)),(""!==this.value||(null==(t=sy(this,hl))?void 0:t.hasAttribute(`${sy(this,hd)}`)))&&(null==(i=sy(this,hl))||i.setAttribute(`${sy(this,hd)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>sy(this,hc).delete(e)),null==(t=sy(this,hl))||t.setAttribute(`${sy(this,hd)}`,`${this.value}`)}contains(e){return sy(this,hh,hm).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}hl=new WeakMap,hd=new WeakMap,hu=new WeakMap,hc=new WeakMap,hh=new WeakSet,hm=function(){return sy(this,hc).size?sy(this,hc):sy(this,hu)};let sw=(e="")=>e.split(/\s+/),sS=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?np.CAPTIONS:np.SUBTITLES,language:i,label:r}},sI=(e="",t={})=>sw(e).map(e=>{let i=sS(e);return{...t,...i}}),sR=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?sS(e):e):"string"==typeof e?sI(e):[e]:[],sL=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sC=(e=[])=>Array.prototype.map.call(e,sL).join(" "),sD=(e,t)=>i=>i[e]===t,sM=e=>{let t=Object.entries(e).map(([e,t])=>sD(e,t));return e=>t.every(t=>t(e))},sO=(e,t=[],i=[])=>{let a=sR(i).map(sM);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sx=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sM(t);return Array.from(e.textTracks).filter(i)},sN=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(nc.MEDIA_SUBTITLES_SHOWING)},sP=e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}},sU="exitFullscreen"in nq?"exitFullscreen":"webkitExitFullscreen"in nq?"webkitExitFullscreen":"webkitCancelFullScreen"in nq?"webkitCancelFullScreen":void 0,sW=e=>{var t;let{documentElement:i}=e;if(sU){let e=null==(t=null==i?void 0:i[sU])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},sB="fullscreenElement"in nq?"fullscreenElement":"webkitFullscreenElement"in nq?"webkitFullscreenElement":void 0,sH=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[sB];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===nf.FULLSCREEN?i:a},sF=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=sH(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(sB in e))return n3(n,r);for(;null==e?void 0:e[sB];){if(e[sB]===r)return!0;e=null==(t=e[sB])?void 0:t.shadowRoot}}return!1},sV="fullscreenEnabled"in nq?"fullscreenEnabled":"webkitFullscreenEnabled"in nq?"webkitFullscreenEnabled":void 0,sK=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sV])||i&&"webkitSupportsFullscreen"in i},s$=()=>{var e;return r||(r=null==(e=null==nq?void 0:nq.createElement)?void 0:e.call(nq,"video"))},sq=async(e=s$())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sY(e,i.signal),sG(e,t)]);return i.abort(),a},sY=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sG=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await nS(10)}return e.volume!==t},sj=/.*Version\/.*Safari\/.*/.test(n$.navigator.userAgent),sQ=(e=s$())=>(!n$.matchMedia("(display-mode: standalone)").matches||!sj)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sz=(e=s$())=>sK({documentElement:nq,media:e}),sZ=sz(),sX=sQ(),sJ=!!n$.WebKitPlaybackTargetAvailabilityEvent,s0=!!n$.chrome,s1=e=>sx(e.media,e=>[np.SUBTITLES,np.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),s2=e=>sx(e.media,e=>e.mode===nv.SHOWING&&[np.SUBTITLES,np.CAPTIONS].includes(e.kind)),s3=(e,t)=>{let i=s1(e),a=s2(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)sO(nv.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=n$.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...n$.navigator.languages]:n$.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;sO(nv.DISABLED,i,a),sO(nv.SHOWING,i,[{language:n,label:s,kind:o}])}}},s4=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?s5(e,t):Object.entries(e).every(([e,i])=>e in t&&s4(i,t[e])))),s5=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>s4(e,t[i])))},s9=Object.values(ng),s8=sq().then(e=>n=e),s6=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof n$.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=n$.customElements.get(t);i&&e instanceof i||(await n$.customElements.whenDefined(t),n$.customElements.upgrade(e))}))},s7=new n$.DOMParser,oe=e=>e&&s7.parseFromString(e,"text/html").body.textContent||e,ot={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==n$.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&n$.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;n$.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===n$.localStorage.getItem("media-chrome-pref-muted");ot.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?n$.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||n$.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=n$.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;ot.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&nk(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[ng.LIVE,ng.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(s9.includes(r))return r===ng.UNKNOWN?a:r;let n=t.duration;return n===1/0?ng.LIVE:Number.isFinite(n)?ng.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=ot.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===ng.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(ot.mediaStreamType.get(e)!==ng.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>s1(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>s2(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![np.CAPTIONS,np.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||s3(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sx(i,{kind:np.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:oe(e),startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&n3(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!nq.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nq.pictureInPictureElement&&nq.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>sF(e),set(e,t,i){var a,r;e?(sP(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):sW(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&n$.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sZ||!sz(t))return nb.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return sX&&sQ(t)?(null==t?void 0:t.disablePictureInPicture)?nb.UNAVAILABLE:void 0:nb.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return nb.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&s8.then(t=>e(t?void 0:nb.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return s0&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?nb.UNAVAILABLE:void 0:nb.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sJ?(null==t?void 0:t.availability)==="not-available"?nb.UNAVAILABLE:void 0:nb.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:nb.UNAVAILABLE:nb.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?nb.UNAVAILABLE:void 0:nb.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},oi={[no.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sx(l,{kind:np.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[no.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[no.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===ng.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[no.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[no.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[no.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[no.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[no.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[no.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[no.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[no.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=s1(t),s=sR(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&n$.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sO(nv.SHOWING,n,s)},[no.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=s1(t);sO(nv.DISABLED,a,null!=i?i:[])},[no.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){s3(t,i)},[no.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[no.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[no.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[no.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[no.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[no.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[no.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[no.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[no.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},oa=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=ot,requestMap:r=oi,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||s4(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,E,b,g,f,y,T,A,k,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await s6(...Object.values(e));let R=l.length>0&&0===t&&s,L=d.media!==o.media,C=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),D=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),O=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(L||R),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(C||R),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(D||R),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),B=!!(null==(T=d.media)?void 0:T.remote)&&(O||R),H=!!d.documentElement&&(x||R),F=N||P||U||W||B||H,V=0===l.length&&1===t&&s,K=!!o.media&&(L||V),$=!!(null==(A=o.media)?void 0:A.textTracks)&&(C||V),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(D||V),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||V),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||V),j=!!o.documentElement&&(x||V),Q=K||$||q||Y||G||j;if(!(F||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),K&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),$&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&F&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else F&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var or=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},on=(e,t,i)=>(or(e,t,"read from private field"),i?i.call(e):t.get(e)),os=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oo=(e,t,i,a)=>(or(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ol=(e,t,i)=>(or(e,t,"access private method"),i);let od=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],ou={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class oc extends sf{constructor(){super(),os(this,hT),os(this,hw),os(this,hI),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,os(this,hp,new sk(this,ou.HOTKEYS)),os(this,hv,void 0),os(this,hE,void 0),os(this,hb,null),os(this,hg,void 0),os(this,hf,void 0),os(this,h_,e=>{var t;null==(t=on(this,hE))||t.dispatch(e)}),os(this,hy,void 0),os(this,hk,e=>{let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||od.includes(t))){this.removeEventListener("keyup",on(this,hk));return}this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};oo(this,hg,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new n$.CustomEvent(nm[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(ou.NO_HOTKEYS,ou.HOTKEYS,ou.DEFAULT_STREAM_TYPE,ou.DEFAULT_SUBTITLES,ou.DEFAULT_DURATION,ou.NO_MUTED_PREF,ou.NO_VOLUME_PREF,ou.LANG,ou.LOOP,ou.LIVE_EDGE_OFFSET,ou.SEEK_TO_LIVE_OFFSET,ou.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return on(this,hE)}set mediaStore(e){var t,i;if(on(this,hE)&&(null==(t=on(this,hf))||t.call(this),oo(this,hf,void 0)),oo(this,hE,e),!on(this,hE)&&!this.hasAttribute(ou.NO_DEFAULT_STORE)){ol(this,hT,hA).call(this);return}oo(this,hf,null==(i=on(this,hE))?void 0:i.subscribe(on(this,hg)))}get fullscreenElement(){var e;return null!=(e=on(this,hv))?e:this}set fullscreenElement(e){var t;this.hasAttribute(ou.FULLSCREEN_ELEMENT)&&this.removeAttribute(ou.FULLSCREEN_ELEMENT),oo(this,hv,e),null==(t=on(this,hE))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return si(this,ou.DEFAULT_SUBTITLES)}set defaultSubtitles(e){sa(this,ou.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return sr(this,ou.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){sn(this,ou.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return se(this,ou.DEFAULT_DURATION)}set defaultDuration(e){st(this,ou.DEFAULT_DURATION,e)}get noHotkeys(){return si(this,ou.NO_HOTKEYS)}set noHotkeys(e){sa(this,ou.NO_HOTKEYS,e)}get keysUsed(){return sr(this,ou.KEYS_USED)}set keysUsed(e){sn(this,ou.KEYS_USED,e)}get liveEdgeOffset(){return se(this,ou.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){st(this,ou.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return si(this,ou.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){sa(this,ou.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return si(this,ou.NO_VOLUME_PREF)}set noVolumePref(e){sa(this,ou.NO_VOLUME_PREF,e)}get noMutedPref(){return si(this,ou.NO_MUTED_PREF)}set noMutedPref(e){sa(this,ou.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return si(this,ou.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){sa(this,ou.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return si(this,ou.NO_DEFAULT_STORE)}set noDefaultStore(e){sa(this,ou.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===ou.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(ou.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===ou.HOTKEYS)on(this,hp).value=i;else if(e===ou.DEFAULT_SUBTITLES&&i!==t)null==(a=on(this,hE))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(ou.DEFAULT_SUBTITLES)}});else if(e===ou.DEFAULT_STREAM_TYPE)null==(n=on(this,hE))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(ou.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===ou.LIVE_EDGE_OFFSET&&i!==t)null==(s=on(this,hE))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(ou.LIVE_EDGE_OFFSET)?+this.getAttribute(ou.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(ou.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(ou.SEEK_TO_LIVE_OFFSET):this.hasAttribute(ou.LIVE_EDGE_OFFSET)?+this.getAttribute(ou.LIVE_EDGE_OFFSET):void 0}});else if(e===ou.SEEK_TO_LIVE_OFFSET&&i!==t)null==(o=on(this,hE))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(ou.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(ou.SEEK_TO_LIVE_OFFSET):this.hasAttribute(ou.LIVE_EDGE_OFFSET)?+this.getAttribute(ou.LIVE_EDGE_OFFSET):void 0}});else if(e===ou.NO_AUTO_SEEK_TO_LIVE)null==(l=on(this,hE))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(ou.NO_AUTO_SEEK_TO_LIVE)}});else if(e===ou.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;oo(this,hv,e),null==(u=on(this,hE))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===ou.LANG&&i!==t?(nL(i),null==(c=on(this,hE))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===ou.LOOP&&i!==t?null==(h=on(this,hE))||h.dispatch({type:no.MEDIA_LOOP_REQUEST,detail:null!=i}):e===ou.NO_VOLUME_PREF&&i!==t?null==(m=on(this,hE))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(ou.NO_VOLUME_PREF)}}):e===ou.NO_MUTED_PREF&&i!==t&&(null==(p=on(this,hE))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(ou.NO_MUTED_PREF)}}))}connectedCallback(){var e,t,i;this.associateElement(this),on(this,hE)||this.hasAttribute(ou.NO_DEFAULT_STORE)||ol(this,hT,hA).call(this),null==(e=on(this,hE))||e.dispatch({type:"documentelementchangerequest",detail:nq}),null==(t=on(this,hE))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),on(this,hE)&&!on(this,hf)&&oo(this,hf,null==(i=on(this,hE))?void 0:i.subscribe(on(this,hg))),void 0!==on(this,hy)&&on(this,hE)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=on(this,hE))||i.dispatch({type:no.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:on(this,hy)}))},0),this.hasAttribute(ou.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),on(this,hE)){let e=on(this,hE).getState();oo(this,hy,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=on(this,hE))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=on(this,hE))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=on(this,hE))||r.dispatch({type:no.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}on(this,hf)&&(null==(n=on(this,hf))||n.call(this),oo(this,hf,void 0)),this.unassociateElement(this),on(this,hb)&&(on(this,hb).remove(),oo(this,hb,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=on(this,hE))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=on(this,hE))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){oT(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=oA(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(no).forEach(t=>{e.addEventListener(t,on(this,h_))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(no).forEach(t=>{e.removeEventListener(t,on(this,h_))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),on(this,hE)&&Object.entries(on(this,hE).getState()).forEach(([t,i])=>{oT([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",ol(this,hw,hS))}disableHotkeys(){this.removeEventListener("keydown",ol(this,hw,hS)),this.removeEventListener("keyup",on(this,hk))}get hotkeys(){return on(this,hp)}set hotkeys(e){sn(this,ou.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h;let m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(ou.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||on(this,hp).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&on(this,hp).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&on(this,hp).contains("noshift+/")))switch(e.key){case" ":case"k":u=on(this,hE).getState().mediaPaused?no.MEDIA_PLAY_REQUEST:no.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new n$.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?no.MEDIA_UNMUTE_REQUEST:no.MEDIA_MUTE_REQUEST,this.dispatchEvent(new n$.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?no.MEDIA_EXIT_FULLSCREEN_REQUEST:no.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new n$.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new n$.CustomEvent(no.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(ou.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(ou.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new n$.CustomEvent(no.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(ou.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(ou.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new n$.CustomEvent(no.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(ou.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(ou.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new n$.CustomEvent(no.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(ou.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(ou.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new n$.CustomEvent(no.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new n$.CustomEvent(no.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new n$.CustomEvent(no.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&ol(this,hI,hR).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?no.MEDIA_EXIT_PIP_REQUEST:no.MEDIA_ENTER_PIP_REQUEST,h=new n$.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}hp=new WeakMap,hv=new WeakMap,hE=new WeakMap,hb=new WeakMap,hg=new WeakMap,hf=new WeakMap,h_=new WeakMap,hy=new WeakMap,hT=new WeakSet,hA=function(){var e;this.mediaStore=oa({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(ou.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(ou.DEFAULT_DURATION)?+this.getAttribute(ou.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(ou.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(ou.LIVE_EDGE_OFFSET)?+this.getAttribute(ou.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(ou.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(ou.SEEK_TO_LIVE_OFFSET):this.hasAttribute(ou.LIVE_EDGE_OFFSET)?+this.getAttribute(ou.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(ou.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(ou.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(ou.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(ou.NO_SUBTITLES_LANG_PREF)}})},hk=new WeakMap,hw=new WeakSet,hS=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=on(this,hb))?void 0:t.open)||i||a||!s&&!od.includes(r)){this.removeEventListener("keyup",on(this,hk));return}let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||on(this,hp).contains(`no${r.toLowerCase()}`)||" "===r&&on(this,hp).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",on(this,hk),{once:!0})},hI=new WeakSet,hR=function(){on(this,hb)||(oo(this,hb,nq.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(on(this,hb))),on(this,hb).open=!0};let oh=Object.values(nc),om=Object.values(nd),op=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(n$.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,nl.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>oh.includes(e)):[]},ov=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&n$.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof n$.customElements.get(e.nodeName.toLowerCase()))&&n$.customElements.upgrade(e),om.some(t=>t in e)},oE=e=>ov(e)||!!op(e).length,ob=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},og={[nc.MEDIA_SUBTITLES_LIST]:sC,[nc.MEDIA_SUBTITLES_SHOWING]:sC,[nc.MEDIA_SEEKABLE]:ob,[nc.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ob).join(" "),[nc.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[nc.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(n_).join(" ")},[nc.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(nT).join(" ")}},of=async(e,t,i)=>{var a,r;if(e.isConnected||await nS(0),"boolean"==typeof i||null==i)return sa(e,t,i);if("number"==typeof i)return st(e,t,i);if("string"==typeof i)return sn(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=og[t])?void 0:a.call(og,i))?r:i;return e.setAttribute(t,n)},o_=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},oy=(e,t)=>{if(o_(e))return;let i=(e,t)=>{var i,a;oE(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>oy(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!oE(e)){n$.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},oT=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=op(e),r=t.toLowerCase();a.includes(r)&&of(e,r,i)})},oA=(e,t,i)=>{oy(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(no.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(no.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>oy(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>oy(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>oy(e,t)),Array.prototype.forEach.call(r,e=>oy(e,i))):"attributes"===n&&o===nl.MEDIA_CHROME_ATTRIBUTES&&(oE(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{oy(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(no.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(no.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};n$.customElements.get("media-controller")||n$.customElements.define("media-controller",oc);let ok="placement",ow="bounds";class oS extends n$.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!n8(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=n4(this,"#"+this.bounds))?e:nX(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ok,ow]}get placement(){return sr(this,ok)}set placement(e){sn(this,ok,e)}get bounds(){return sr(this,ow)}set bounds(e){sn(this,ow,e)}}oS.shadowRootOptions={mode:"open"},oS.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},n$.customElements.get("media-tooltip")||n$.customElements.define("media-tooltip",oS);var oI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oR=(e,t,i)=>(oI(e,t,"read from private field"),i?i.call(e):t.get(e)),oL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oC=(e,t,i,a)=>(oI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oD=(e,t,i)=>(oI(e,t,"access private method"),i);let oM={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class oO extends n$.HTMLElement{constructor(){if(super(),oL(this,hx),oL(this,hL,void 0),this.preventClick=!1,this.tooltipEl=null,oL(this,hC,e=>{this.preventClick||this.handleClick(e),setTimeout(oR(this,hD),0)}),oL(this,hD,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),oL(this,hM,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",oR(this,hM));return}this.preventClick||this.handleClick(e)}),oL(this,hO,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",oR(this,hM));return}this.addEventListener("keyup",oR(this,hM),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oM.TOOLTIP_PLACEMENT,nl.MEDIA_CONTROLLER,nc.MEDIA_LANG]}enable(){this.addEventListener("click",oR(this,hC)),this.addEventListener("keydown",oR(this,hO)),this.tabIndex=0}disable(){this.removeEventListener("click",oR(this,hC)),this.removeEventListener("keydown",oR(this,hO)),this.removeEventListener("keyup",oR(this,hM)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===nl.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oR(this,hL))?void 0:a.unassociateElement)||r.call(a,this),oC(this,hL,null)),i&&this.isConnected&&(oC(this,hL,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oR(this,hL))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===oM.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===nc.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),oR(this,hD).call(this)}connectedCallback(){var e,t,i;let{style:a}=n6(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(nl.MEDIA_CONTROLLER);r&&(oC(this,hL,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oR(this,hL))?void 0:t.associateElement)||i.call(t,this)),n$.customElements.whenDefined("media-tooltip").then(()=>oD(this,hx,hN).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=oR(this,hL))?void 0:e.unassociateElement)||t.call(e,this),oC(this,hL,null),this.removeEventListener("mouseenter",oR(this,hD)),this.removeEventListener("focus",oR(this,hD)),this.removeEventListener("click",oR(this,hC))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return sr(this,oM.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){sn(this,oM.TOOLTIP_PLACEMENT,e)}get mediaController(){return sr(this,nl.MEDIA_CONTROLLER)}set mediaController(e){sn(this,nl.MEDIA_CONTROLLER,e)}get disabled(){return si(this,oM.DISABLED)}set disabled(e){sa(this,oM.DISABLED,e)}get noTooltip(){return si(this,oM.NO_TOOLTIP)}set noTooltip(e){sa(this,oM.NO_TOOLTIP,e)}handleClick(e){}}hL=new WeakMap,hC=new WeakMap,hD=new WeakMap,hM=new WeakMap,hO=new WeakMap,hx=new WeakSet,hN=function(){this.addEventListener("mouseenter",oR(this,hD)),this.addEventListener("focus",oR(this,hD)),this.addEventListener("click",oR(this,hC));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},oO.shadowRootOptions={mode:"open"},oO.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${oS.shadowRootOptions.mode}">
          ${oS.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},oO.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},oO.getTooltipContentHTML=function(){return""},n$.customElements.get("media-chrome-button")||n$.customElements.define("media-chrome-button",oO);let ox=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,oN=e=>{let t=e.mediaIsAirplaying?nD("stop airplay"):nD("start airplay");e.setAttribute("aria-label",t)};class oP extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_IS_AIRPLAYING,nc.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_IS_AIRPLAYING&&oN(this)}get mediaIsAirplaying(){return si(this,nc.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){sa(this,nc.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return sr(this,nc.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){sn(this,nc.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new n$.CustomEvent(no.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}oP.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${nc.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nc.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nc.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${nc.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ox}</slot>
      <slot name="exit">${ox}</slot>
    </slot>
  `},oP.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nD("start airplay")}</slot>
    <slot name="tooltip-exit">${nD("stop airplay")}</slot>
  `},n$.customElements.get("media-airplay-button")||n$.customElements.define("media-airplay-button",oP);let oU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,oW=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,oB=e=>{e.setAttribute("aria-checked",sN(e).toString())};class oH extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_SUBTITLES_LIST,nc.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",nD("closed captions")),oB(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_SUBTITLES_SHOWING&&oB(this)}get mediaSubtitlesList(){return oF(this,nc.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){oV(this,nc.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return oF(this,nc.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){oV(this,nc.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new n$.CustomEvent(no.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}oH.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${oU}</slot>
      <slot name="off">${oW}</slot>
    </slot>
  `},oH.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${nD("Enable captions")}</slot>
    <slot name="tooltip-disable">${nD("Disable captions")}</slot>
  `};let oF=(e,t)=>{let i=e.getAttribute(t);return i?sI(i):[]},oV=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sC(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n$.customElements.get("media-captions-button")||n$.customElements.define("media-captions-button",oH);let oK=e=>{let t=e.mediaIsCasting?nD("stop casting"):nD("start casting");e.setAttribute("aria-label",t)};class o$ extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_IS_CASTING,nc.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_IS_CASTING&&oK(this)}get mediaIsCasting(){return si(this,nc.MEDIA_IS_CASTING)}set mediaIsCasting(e){sa(this,nc.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return sr(this,nc.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){sn(this,nc.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?no.MEDIA_EXIT_CAST_REQUEST:no.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new n$.CustomEvent(e,{composed:!0,bubbles:!0}))}}o$.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${nc.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nc.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nc.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${nc.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},o$.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nD("Start casting")}</slot>
    <slot name="tooltip-exit">${nD("Stop casting")}</slot>
  `},n$.customElements.get("media-cast-button")||n$.customElements.define("media-cast-button",o$);var oq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oY=(e,t,i)=>(oq(e,t,"read from private field"),i?i.call(e):t.get(e)),oG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oj=(e,t,i,a)=>(oq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oQ=(e,t,i)=>(oq(e,t,"access private method"),i);let oz="open";class oZ extends n$.HTMLElement{constructor(){super(),oG(this,hB),oG(this,hF),oG(this,hK),oG(this,hq),oG(this,hG),oG(this,hQ),oG(this,hP,!1),oG(this,hU,null),oG(this,hW,null)}static get observedAttributes(){return[oz,"anchor"]}get open(){return si(this,oz)}set open(e){sa(this,oz,e)}handleEvent(e){switch(e.type){case"invoke":oQ(this,hq,hY).call(this,e);break;case"focusout":oQ(this,hG,hj).call(this,e);break;case"keydown":oQ(this,hQ,hz).call(this,e)}}connectedCallback(){oQ(this,hB,hH).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){oQ(this,hB,hH).call(this),e===oz&&i!==t&&(this.open?oQ(this,hF,hV).call(this):oQ(this,hK,h$).call(this))}focus(){oj(this,hU,n5());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}hP=new WeakMap,hU=new WeakMap,hW=new WeakMap,hB=new WeakSet,hH=function(){if(!oY(this,hP)&&(oj(this,hP,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=n6(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},hF=new WeakSet,hV=function(){var e;null==(e=oY(this,hW))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},hK=new WeakSet,h$=function(){var e;null==(e=oY(this,hW))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},hq=new WeakSet,hY=function(e){oj(this,hW,e.relatedTarget),n3(this,e.relatedTarget)||(this.open=!this.open)},hG=new WeakSet,hj=function(e){var t;!n3(this,e.relatedTarget)&&(null==(t=oY(this,hU))||t.focus(),oY(this,hW)&&oY(this,hW)!==e.relatedTarget&&this.open&&(this.open=!1))},hQ=new WeakSet,hz=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=oY(this,hU))||n.focus(),this.open=!1))},oZ.shadowRootOptions={mode:"open"},oZ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},oZ.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},n$.customElements.get("media-chrome-dialog")||n$.customElements.define("media-chrome-dialog",oZ);var oX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oJ=(e,t,i)=>(oX(e,t,"read from private field"),i?i.call(e):t.get(e)),o0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o1=(e,t,i,a)=>(oX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o2=(e,t,i)=>(oX(e,t,"access private method"),i);class o3 extends n$.HTMLElement{constructor(){if(super(),o0(this,h9),o0(this,h6),o0(this,me),o0(this,mi),o0(this,mr),o0(this,ms),o0(this,ml),o0(this,mu),o0(this,hZ,void 0),o0(this,hX,void 0),o0(this,hJ,void 0),o0(this,h0,void 0),o0(this,h1,{}),o0(this,h2,[]),o0(this,h3,()=>{if(this.range.matches(":focus-visible")){let{style:e}=n6(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),o0(this,h4,()=>{let{style:e}=n6(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),o0(this,h5,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),o1(this,hJ,this.shadowRoot.querySelector("#startpoint")),o1(this,h0,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",nl.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===nl.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=oJ(this,hZ))?void 0:a.unassociateElement)||r.call(a,this),o1(this,hZ,null)),i&&this.isConnected&&(o1(this,hZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oJ(this,hZ))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),o2(this,h6,h7).call(this)):(this.range.setAttribute(e,i),o2(this,me,mt).call(this)))}connectedCallback(){var e,t,i;let{style:a}=n6(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),oJ(this,h1).pointer=n6(this.shadowRoot,"#pointer"),oJ(this,h1).progress=n6(this.shadowRoot,"#progress"),oJ(this,h1).thumb=n6(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),oJ(this,h1).activeSegment=n6(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(nl.MEDIA_CONTROLLER);r&&(o1(this,hZ,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oJ(this,hZ))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",oJ(this,h3)),this.shadowRoot.addEventListener("focusout",oJ(this,h4)),o2(this,h6,h7).call(this),nQ(this.container,oJ(this,h5))}disconnectedCallback(){var e,t;o2(this,me,mt).call(this),null==(t=null==(e=oJ(this,hZ))?void 0:e.unassociateElement)||t.call(e,this),o1(this,hZ,null),this.shadowRoot.removeEventListener("focusin",oJ(this,h3)),this.shadowRoot.removeEventListener("focusout",oJ(this,h4)),nz(this.container,oJ(this,h5))}updatePointerBar(e){var t;null==(t=oJ(this,h1).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=oJ(this,h1).progress)||e.style.setProperty("width",`${i}%`),null==(t=oJ(this,h1).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];o1(this,h2,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nq.createElementNS("http://www.w3.org/2000/svg","rect"),c=n7(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,oJ(this,hJ).getBoundingClientRect(),oJ(this,h0).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":o2(this,mu,mc).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":o2(this,mr,mn).call(this,e);break;case"pointerdown":o2(this,mi,ma).call(this,e);break;case"pointerup":o2(this,ms,mo).call(this);break;case"pointerleave":o2(this,ml,md).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hZ=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakMap,h2=new WeakMap,h3=new WeakMap,h4=new WeakMap,h5=new WeakMap,h9=new WeakSet,h8=function(e){let t=oJ(this,h1).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=oJ(this,h2).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},h6=new WeakSet,h7=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},me=new WeakSet,mt=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=n$.window)||e.removeEventListener("pointerup",this),null==(t=n$.window)||t.removeEventListener("pointermove",this)},mi=new WeakSet,ma=function(e){var t;o1(this,hX,e.composedPath().includes(this.range)),null==(t=n$.window)||t.addEventListener("pointerup",this,{once:!0})},mr=new WeakSet,mn=function(e){var t;"mouse"!==e.pointerType&&o2(this,mi,ma).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=n$.window)||t.addEventListener("pointermove",this)},ms=new WeakSet,mo=function(){var e;null==(e=n$.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},ml=new WeakSet,md=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=n$.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=oJ(this,h1).activeSegment)||t.style.removeProperty("transform")},mu=new WeakSet,mc=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),o2(this,h9,h8).call(this,e),this.dragging&&("mouse"!==e.pointerType||!oJ(this,hX))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},o3.shadowRootOptions={mode:"open"},o3.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},o3.getContainerTemplateHTML=function(e){return""},n$.customElements.get("media-chrome-range")||n$.customElements.define("media-chrome-range",o3);var o4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o5=(e,t,i)=>(o4(e,t,"read from private field"),i?i.call(e):t.get(e)),o9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o8=(e,t,i,a)=>(o4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class o6 extends n$.HTMLElement{constructor(){if(super(),o9(this,mh,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nl.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===nl.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o5(this,mh))?void 0:a.unassociateElement)||r.call(a,this),o8(this,mh,null)),i&&this.isConnected&&(o8(this,mh,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o5(this,mh))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(nl.MEDIA_CONTROLLER);a&&(o8(this,mh,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=o5(this,mh))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o5(this,mh))?void 0:e.unassociateElement)||t.call(e,this),o8(this,mh,null)}}mh=new WeakMap,o6.shadowRootOptions={mode:"open"},o6.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},n$.customElements.get("media-control-bar")||n$.customElements.define("media-control-bar",o6);var o7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},le=(e,t,i)=>(o7(e,t,"read from private field"),i?i.call(e):t.get(e)),lt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},li=(e,t,i,a)=>(o7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class la extends n$.HTMLElement{constructor(){if(super(),lt(this,mm,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nl.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===nl.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=le(this,mm))?void 0:a.unassociateElement)||r.call(a,this),li(this,mm,null)),i&&this.isConnected&&(li(this,mm,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=le(this,mm))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=n6(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(nl.MEDIA_CONTROLLER);r&&(li(this,mm,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=le(this,mm))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=le(this,mm))?void 0:e.unassociateElement)||t.call(e,this),li(this,mm,null)}}mm=new WeakMap,la.shadowRootOptions={mode:"open"},la.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},la.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},n$.customElements.get("media-text-display")||n$.customElements.define("media-text-display",la);var lr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ln=(e,t,i)=>(lr(e,t,"read from private field"),i?i.call(e):t.get(e)),ls=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lo=(e,t,i,a)=>(lr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ll extends la{constructor(){var e;super(),ls(this,mp,void 0),lo(this,mp,this.shadowRoot.querySelector("slot")),ln(this,mp).textContent=nN(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===nc.MEDIA_DURATION&&(ln(this,mp).textContent=nN(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return se(this,nc.MEDIA_DURATION)}set mediaDuration(e){st(this,nc.MEDIA_DURATION,e)}}mp=new WeakMap,ll.getSlotTemplateHTML=function(e,t){return`
    <slot>${nN(t.mediaDuration)}</slot>
  `},n$.customElements.get("media-duration-display")||n$.customElements.define("media-duration-display",ll);let ld={2:nD("Network Error"),3:nD("Decode Error"),4:nD("Source Not Supported"),5:nD("Encryption Error")},lu={2:nD("A network error caused the media download to fail."),3:nD("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:nD("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:nD("The media is encrypted and there are no keys to decrypt it.")},lc=e=>{var t,i;return 1===e.code?null:{title:null!=(t=ld[e.code])?t:`Error ${e.code}`,message:null!=(i=lu[e.code])?i:e.message}};var lh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lm=(e,t,i)=>(lh(e,t,"read from private field"),i?i.call(e):t.get(e)),lp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lv=(e,t,i,a)=>(lh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function lE(e){var t;let{title:i,message:a}=null!=(t=lc(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let lb=[nc.MEDIA_ERROR_CODE,nc.MEDIA_ERROR_MESSAGE];class lg extends oZ{constructor(){super(...arguments),lp(this,mv,null)}static get observedAttributes(){return[...super.observedAttributes,...lb]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!lb.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==lc(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=lc(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){return lm(this,mv)}set mediaError(e){lv(this,mv,e)}get mediaErrorCode(){return se(this,"mediaerrorcode")}set mediaErrorCode(e){st(this,"mediaerrorcode",e)}get mediaErrorMessage(){return sr(this,"mediaerrormessage")}set mediaErrorMessage(e){sn(this,"mediaerrormessage",e)}}mv=new WeakMap,lg.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${lE({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},lg.formatErrorMessage=lE,n$.customElements.get("media-error-dialog")||n$.customElements.define("media-error-dialog",lg);var lf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l_=(e,t,i)=>(lf(e,t,"read from private field"),i?i.call(e):t.get(e)),ly=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class lT extends oZ{constructor(){super(...arguments),ly(this,mE,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),ly(this,mb,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",l_(this,mE)),document.addEventListener("keydown",l_(this,mb)))}disconnectedCallback(){this.removeEventListener("click",l_(this,mE)),document.removeEventListener("keydown",l_(this,mb))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",l_(this,mE)),document.addEventListener("keydown",l_(this,mb))):(this.removeEventListener("click",l_(this,mE)),document.removeEventListener("keydown",l_(this,mb))))}}mE=new WeakMap,mb=new WeakMap,lT.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},n$.customElements.get("media-keyboard-shortcuts-dialog")||n$.customElements.define("media-keyboard-shortcuts-dialog",lT);var lA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lk=(e,t,i)=>(lA(e,t,"read from private field"),i?i.call(e):t.get(e)),lw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lS=(e,t,i,a)=>(lA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lI=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,lR=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,lL=e=>{let t=e.mediaIsFullscreen?nD("exit fullscreen mode"):nD("enter fullscreen mode");e.setAttribute("aria-label",t)};class lC extends oO{constructor(){super(...arguments),lw(this,mg,null)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_IS_FULLSCREEN,nc.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lL(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_IS_FULLSCREEN&&lL(this)}get mediaFullscreenUnavailable(){return sr(this,nc.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){sn(this,nc.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return si(this,nc.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){sa(this,nc.MEDIA_IS_FULLSCREEN,e)}handleClick(e){lS(this,mg,e);let t=lk(this,mg) instanceof PointerEvent,i=this.mediaIsFullscreen?new n$.CustomEvent(no.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new n$.CustomEvent(no.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}mg=new WeakMap,lC.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${nc.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${nc.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nc.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${nc.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lI}</slot>
      <slot name="exit">${lR}</slot>
    </slot>
  `},lC.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nD("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${nD("Exit fullscreen mode")}</slot>
  `},n$.customElements.get("media-fullscreen-button")||n$.customElements.define("media-fullscreen-button",lC);let{MEDIA_TIME_IS_LIVE:lD,MEDIA_PAUSED:lM}=nc,{MEDIA_SEEK_TO_LIVE_REQUEST:lO,MEDIA_PLAY_REQUEST:lx}=no,lN=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?nD("seek to live"):nD("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=nD("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class lP extends oO{static get observedAttributes(){return[...super.observedAttributes,lD,lM]}connectedCallback(){super.connectedCallback(),lN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),lN(this)}get mediaPaused(){return si(this,nc.MEDIA_PAUSED)}set mediaPaused(e){sa(this,nc.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return si(this,nc.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){sa(this,nc.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new n$.CustomEvent(lO,{composed:!0,bubbles:!0})),this.hasAttribute(lM)&&this.dispatchEvent(new n$.CustomEvent(lx,{composed:!0,bubbles:!0})))}}lP.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${lD}]:not([${lM}])) slot[name=indicator] > *,
      :host([${lD}]:not([${lM}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${lD}]:not([${lM}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${nD("live")}</slot>
  `},n$.customElements.get("media-live-button")||n$.customElements.define("media-live-button",lP);var lU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lW=(e,t,i)=>(lU(e,t,"read from private field"),i?i.call(e):t.get(e)),lB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lH=(e,t,i,a)=>(lU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lF="loadingdelay",lV="noautohide",lK=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class l$ extends n$.HTMLElement{constructor(){if(super(),lB(this,mf,void 0),lB(this,m_,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nl.MEDIA_CONTROLLER,nc.MEDIA_PAUSED,nc.MEDIA_LOADING,lF]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===lF&&t!==i?this.loadingDelay=Number(i):e===nl.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=lW(this,mf))?void 0:a.unassociateElement)||r.call(a,this),lH(this,mf,null)),i&&this.isConnected&&(lH(this,mf,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lW(this,mf))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(nl.MEDIA_CONTROLLER);a&&(lH(this,mf,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lW(this,mf))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=lW(this,mf))?void 0:e.unassociateElement)||t.call(e,this),lH(this,mf,null)}get loadingDelay(){return lW(this,m_)}set loadingDelay(e){lH(this,m_,e);let{style:t}=n6(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return si(this,nc.MEDIA_PAUSED)}set mediaPaused(e){sa(this,nc.MEDIA_PAUSED,e)}get mediaLoading(){return si(this,nc.MEDIA_LOADING)}set mediaLoading(e){sa(this,nc.MEDIA_LOADING,e)}get mediaController(){return sr(this,nl.MEDIA_CONTROLLER)}set mediaController(e){sn(this,nl.MEDIA_CONTROLLER,e)}get noAutohide(){return si(this,lV)}set noAutohide(e){sa(this,lV,e)}}mf=new WeakMap,m_=new WeakMap,l$.shadowRootOptions={mode:"open"},l$.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${nc.MEDIA_LOADING}]:not([${nc.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${nc.MEDIA_LOADING}]:not([${nc.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${nc.MEDIA_LOADING}]:not([${nc.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lK}</slot>
    <div id="status" role="status" aria-live="polite">${nD("media loading")}</div>
  `},n$.customElements.get("media-loading-indicator")||n$.customElements.define("media-loading-indicator",l$);let lq=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lY=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lj=e=>{let t="off"===e.mediaVolumeLevel?nD("unmute"):nD("mute");e.setAttribute("aria-label",t)};class lQ extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lj(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_VOLUME_LEVEL&&lj(this)}get mediaVolumeLevel(){return sr(this,nc.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){sn(this,nc.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?no.MEDIA_UNMUTE_REQUEST:no.MEDIA_MUTE_REQUEST;this.dispatchEvent(new n$.CustomEvent(e,{composed:!0,bubbles:!0}))}}lQ.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${nc.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${nc.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${nc.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${nc.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${nc.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${nc.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${nc.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lq}</slot>
      <slot name="low">${lY}</slot>
      <slot name="medium">${lY}</slot>
      <slot name="high">${lG}</slot>
    </slot>
  `},lQ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${nD("Mute")}</slot>
    <slot name="tooltip-unmute">${nD("Unmute")}</slot>
  `},n$.customElements.get("media-mute-button")||n$.customElements.define("media-mute-button",lQ);let lz=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lZ=e=>{let t=e.mediaIsPip?nD("exit picture in picture mode"):nD("enter picture in picture mode");e.setAttribute("aria-label",t)};class lX extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_IS_PIP,nc.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_IS_PIP&&lZ(this)}get mediaPipUnavailable(){return sr(this,nc.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){sn(this,nc.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return si(this,nc.MEDIA_IS_PIP)}set mediaIsPip(e){sa(this,nc.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?no.MEDIA_EXIT_PIP_REQUEST:no.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new n$.CustomEvent(e,{composed:!0,bubbles:!0}))}}lX.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${nc.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${nc.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${nc.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${nc.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lz}</slot>
      <slot name="exit">${lz}</slot>
    </slot>
  `},lX.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${nD("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${nD("Exit picture in picture mode")}</slot>
  `},n$.customElements.get("media-pip-button")||n$.customElements.define("media-pip-button",lX);var lJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l0=(e,t,i)=>(lJ(e,t,"read from private field"),i?i.call(e):t.get(e)),l1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let l2="rates",l3=[1,1.2,1.5,1.7,2];class l4 extends oO{constructor(){var e;super(),l1(this,my,new sk(this,l2,{defaultValue:l3})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PLAYBACK_RATE,l2]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===l2&&(l0(this,my).value=i),e===nc.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",nD("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return l0(this,my)}set rates(e){e?Array.isArray(e)?l0(this,my).value=e.join(" "):"string"==typeof e&&(l0(this,my).value=e):l0(this,my).value=""}get mediaPlaybackRate(){return se(this,nc.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){st(this,nc.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(l0(this,my).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new n$.CustomEvent(no.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}my=new WeakMap,l4.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},l4.getTooltipContentHTML=function(){return nD("Playback rate")},n$.customElements.get("media-playback-rate-button")||n$.customElements.define("media-playback-rate-button",l4);let l5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,l9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,l8=e=>{let t=e.mediaPaused?nD("play"):nD("pause");e.setAttribute("aria-label",t)};class l6 extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PAUSED,nc.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),l8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===nc.MEDIA_PAUSED||e===nc.MEDIA_LANG)&&l8(this)}get mediaPaused(){return si(this,nc.MEDIA_PAUSED)}set mediaPaused(e){sa(this,nc.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?no.MEDIA_PLAY_REQUEST:no.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n$.CustomEvent(e,{composed:!0,bubbles:!0}))}}l6.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${nc.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${nc.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${nc.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${nc.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${l5}</slot>
      <slot name="pause">${l9}</slot>
    </slot>
  `},l6.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${nD("Play")}</slot>
    <slot name="tooltip-pause">${nD("Pause")}</slot>
  `},n$.customElements.get("media-play-button")||n$.customElements.define("media-play-button",l6);let l7={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},de=e=>{e.style.removeProperty("background-image")},dt=(e,t)=>{e.style["background-image"]=`url('${t}')`};class di extends n$.HTMLElement{static get observedAttributes(){return[l7.PLACEHOLDER_SRC,l7.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===l7.SRC&&(null==i?this.image.removeAttribute(l7.SRC):this.image.setAttribute(l7.SRC,i)),e===l7.PLACEHOLDER_SRC&&(null==i?de(this.image):dt(this.image,i))}get placeholderSrc(){return sr(this,l7.PLACEHOLDER_SRC)}set placeholderSrc(e){sn(this,l7.SRC,e)}get src(){return sr(this,l7.SRC)}set src(e){sn(this,l7.SRC,e)}}di.shadowRootOptions={mode:"open"},di.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},n$.customElements.get("media-poster-image")||n$.customElements.define("media-poster-image",di);var da=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dr=(e,t,i)=>(da(e,t,"read from private field"),i?i.call(e):t.get(e)),dn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ds=(e,t,i,a)=>(da(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class dl extends la{constructor(){super(),dn(this,mT,void 0),ds(this,mT,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PREVIEW_CHAPTER,nc.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===nc.MEDIA_PREVIEW_CHAPTER||e===nc.MEDIA_LANG)&&i!==t&&null!=i){if(dr(this,mT).textContent=i,""!==i){let e=nD("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return sr(this,nc.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){sn(this,nc.MEDIA_PREVIEW_CHAPTER,e)}}mT=new WeakMap,n$.customElements.get("media-preview-chapter-display")||n$.customElements.define("media-preview-chapter-display",dl);var dd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},du=(e,t,i)=>(dd(e,t,"read from private field"),i?i.call(e):t.get(e)),dc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dh=(e,t,i,a)=>(dd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class dm extends n$.HTMLElement{constructor(){if(super(),dc(this,mA,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nl.MEDIA_CONTROLLER,nc.MEDIA_PREVIEW_IMAGE,nc.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(nl.MEDIA_CONTROLLER);a&&(dh(this,mA,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=du(this,mA))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=du(this,mA))?void 0:e.unassociateElement)||t.call(e,this),dh(this,mA,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[nc.MEDIA_PREVIEW_IMAGE,nc.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===nl.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=du(this,mA))?void 0:a.unassociateElement)||r.call(a,this),dh(this,mA,null)),i&&this.isConnected&&(dh(this,mA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=du(this,mA))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return sr(this,nc.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){sn(this,nc.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(nc.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(nc.MEDIA_PREVIEW_COORDS);return}this.setAttribute(nc.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e,t;let i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=n6(this.shadowRoot,":host"),v=n6(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),b=1>Math.min(e,t)?"min":"max";p.setProperty(`${b}-width`,"initial","important"),p.setProperty(`${b}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let g=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};E.src!==l&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g(),E.onload=null},E.src=l,g()),g(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}mA=new WeakMap,dm.shadowRootOptions={mode:"open"},dm.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},n$.customElements.get("media-preview-thumbnail")||n$.customElements.define("media-preview-thumbnail",dm);var dp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dv=(e,t,i)=>(dp(e,t,"read from private field"),i?i.call(e):t.get(e)),dE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},db=(e,t,i,a)=>(dp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class dg extends la{constructor(){super(),dE(this,mk,void 0),db(this,mk,this.shadowRoot.querySelector("slot")),dv(this,mk).textContent=nN(0)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_PREVIEW_TIME&&null!=i&&(dv(this,mk).textContent=nN(parseFloat(i)))}get mediaPreviewTime(){return se(this,nc.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){st(this,nc.MEDIA_PREVIEW_TIME,e)}}mk=new WeakMap,n$.customElements.get("media-preview-time-display")||n$.customElements.define("media-preview-time-display",dg);let df={SEEK_OFFSET:"seekoffset"},d_=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`,dy=(e,t)=>{e.setAttribute("aria-label",nD("seek back {seekOffset} seconds",{seekOffset:t}))};class dT extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_CURRENT_TIME,df.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,df.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),dy(this,this.seekOffset),e===df.SEEK_OFFSET&&(this.seekOffset=se(this,df.SEEK_OFFSET,30))}get seekOffset(){return se(this,df.SEEK_OFFSET,30)}set seekOffset(e){st(this,df.SEEK_OFFSET,e),this.setAttribute("aria-label",nD("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),n0(n2(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,nc.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){st(this,nc.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new n$.CustomEvent(no.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dT.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${d_(t.seekOffset)}</slot>
  `},dT.getTooltipContentHTML=function(){return nD("Seek backward")},n$.customElements.get("media-seek-backward-button")||n$.customElements.define("media-seek-backward-button",dT);let dA={SEEK_OFFSET:"seekoffset"},dk=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`,dw=(e,t)=>{e.setAttribute("aria-label",nD("seek forward {seekOffset} seconds",{seekOffset:t}))};class dS extends oO{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_CURRENT_TIME,dA.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,dA.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),dw(this,this.seekOffset),e===dA.SEEK_OFFSET&&(this.seekOffset=se(this,dA.SEEK_OFFSET,30))}get seekOffset(){return se(this,dA.SEEK_OFFSET,30)}set seekOffset(e){st(this,dA.SEEK_OFFSET,e),this.setAttribute("aria-label",nD("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),n0(n2(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,nc.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){st(this,nc.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new n$.CustomEvent(no.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dS.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${dk(t.seekOffset)}</slot>
  `},dS.getTooltipContentHTML=function(){return nD("Seek forward")},n$.customElements.get("media-seek-forward-button")||n$.customElements.define("media-seek-forward-button",dS);var dI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dR=(e,t,i)=>(dI(e,t,"read from private field"),i?i.call(e):t.get(e)),dL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dC=(e,t,i,a)=>(dI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dD=(e,t,i)=>(dI(e,t,"access private method"),i);let dM={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},dO=[...Object.values(dM),nc.MEDIA_CURRENT_TIME,nc.MEDIA_DURATION,nc.MEDIA_SEEKABLE],dx=["Enter"," "],dN="&nbsp;/&nbsp;",dP=(e,{timesSep:t=dN}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?nN(0-(s-r)):nN(r);return e.showDuration?`${o}${t}${nN(s)}`:o},dU=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-description",nD("video not loaded, unknown time."));return}let n=e.remaining?nx(0-(r-i)):nx(i);if(!e.showDuration){e.setAttribute("aria-description",n);return}let s=nD("{currentTime} of {totalTime}",{currentTime:n,totalTime:nx(r)});e.setAttribute("aria-description",s)},dW=e=>{e.setAttribute("aria-label",nD("playback time"))};class dB extends la{constructor(){super(),dL(this,mR),dL(this,mC),dL(this,mM),dL(this,mx),dL(this,mw,void 0),dL(this,mS,null),dL(this,mI,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!dx.includes(a)){this.removeEventListener("keyup",dR(this,mS));return}this.addEventListener("keyup",dR(this,mS))}),dC(this,mw,this.shadowRoot.querySelector("slot")),dR(this,mw).innerHTML=`${dP(this)}`}static get observedAttributes(){return[...super.observedAttributes,...dO,"disabled"]}connectedCallback(){let{style:e}=n6(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",nD("playback time")),dD(this,mM,mO).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),dD(this,mC,mD).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){dW(this),dO.includes(e)?this.update():"disabled"===e&&i!==t?null==i?dD(this,mM,mO).call(this):dD(this,mx,mN).call(this):e===dM.NO_TOGGLE&&i!==t&&(this.noToggle?dD(this,mx,mN).call(this):dD(this,mM,mO).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return si(this,dM.REMAINING)}set remaining(e){sa(this,dM.REMAINING,e)}get showDuration(){return si(this,dM.SHOW_DURATION)}set showDuration(e){sa(this,dM.SHOW_DURATION,e)}get noToggle(){return si(this,dM.NO_TOGGLE)}set noToggle(e){sa(this,dM.NO_TOGGLE,e)}get mediaDuration(){return se(this,nc.MEDIA_DURATION)}set mediaDuration(e){st(this,nc.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,nc.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){st(this,nc.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(nc.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(nc.MEDIA_SEEKABLE);return}this.setAttribute(nc.MEDIA_SEEKABLE,e.join(":"))}update(){let e=dP(this);dU(this),e!==dR(this,mw).innerHTML&&(dR(this,mw).innerHTML=e)}}mw=new WeakMap,mS=new WeakMap,mI=new WeakMap,mR=new WeakSet,mL=function(){dR(this,mS)||(dC(this,mS,e=>{let{key:t}=e;if(!dx.includes(t)){this.removeEventListener("keyup",dR(this,mS));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",dR(this,mI)),this.addEventListener("click",this.toggleTimeDisplay))},mC=new WeakSet,mD=function(){dR(this,mS)&&(this.removeEventListener("keyup",dR(this,mS)),this.removeEventListener("keydown",dR(this,mI)),this.removeEventListener("click",this.toggleTimeDisplay),dC(this,mS,null))},mM=new WeakSet,mO=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),dD(this,mR,mL).call(this))},mx=new WeakSet,mN=function(){this.removeAttribute("role"),this.disable(),dD(this,mC,mD).call(this)},dB.getSlotTemplateHTML=function(e,t){return`
    <slot>${dP(t)}</slot>
  `},n$.customElements.get("media-time-display")||n$.customElements.define("media-time-display",dB);var dH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dF=(e,t,i)=>(dH(e,t,"read from private field"),i?i.call(e):t.get(e)),dV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dK=(e,t,i,a)=>(dH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d$=(e,t,i,a)=>({set _(value){dK(e,t,value,i)},get _(){return dF(e,t,a)}});class dq{constructor(e,t,i){dV(this,mP,void 0),dV(this,mU,void 0),dV(this,mW,void 0),dV(this,mB,void 0),dV(this,mH,void 0),dV(this,mF,void 0),dV(this,mV,void 0),dV(this,mK,void 0),dV(this,m$,0),dV(this,mq,(e=performance.now())=>{dK(this,m$,requestAnimationFrame(dF(this,mq))),dK(this,mB,performance.now()-dF(this,mW));let t=1e3/this.fps;if(dF(this,mB)>t){dK(this,mW,e-dF(this,mB)%t);let i=1e3/((e-dF(this,mU))/++d$(this,mH)._),a=(e-dF(this,mF))/1e3/this.duration,r=dF(this,mV)+a*this.playbackRate;r-dF(this,mP).valueAsNumber>0?dK(this,mK,this.playbackRate/this.duration/i):(dK(this,mK,.995*dF(this,mK)),r=dF(this,mP).valueAsNumber+dF(this,mK)),this.callback(r)}}),dK(this,mP,e),this.callback=t,this.fps=i}start(){0===dF(this,m$)&&(dK(this,mW,performance.now()),dK(this,mU,dF(this,mW)),dK(this,mH,0),dF(this,mq).call(this))}stop(){0!==dF(this,m$)&&(cancelAnimationFrame(dF(this,m$)),dK(this,m$,0))}update({start:e,duration:t,playbackRate:i}){let a=e-dF(this,mP).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),dK(this,mV,e),dK(this,mF,performance.now()),this.duration=t,this.playbackRate=i}}mP=new WeakMap,mU=new WeakMap,mW=new WeakMap,mB=new WeakMap,mH=new WeakMap,mF=new WeakMap,mV=new WeakMap,mK=new WeakMap,m$=new WeakMap,mq=new WeakMap;var dY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dG=(e,t,i)=>(dY(e,t,"read from private field"),i?i.call(e):t.get(e)),dj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dQ=(e,t,i,a)=>(dY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dz=(e,t,i)=>(dY(e,t,"access private method"),i);let dZ=e=>{let t=e.range,i=nx(+dJ(e)),a=nx(+e.mediaSeekableEnd),r=i&&a?nD("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):nD("video not loaded, unknown time.");t.setAttribute("aria-valuetext",r)},dX=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},dJ=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class d0 extends o3{constructor(){super(),dj(this,m3),dj(this,m9),dj(this,m6),dj(this,pe),dj(this,pi),dj(this,pr),dj(this,ps),dj(this,mY,null),dj(this,mG,void 0),dj(this,mj,void 0),dj(this,mQ,void 0),dj(this,mz,void 0),dj(this,mZ,void 0),dj(this,mX,void 0),dj(this,mJ,void 0),dj(this,m0,void 0),dj(this,m1,void 0),dj(this,m2,()=>{dz(this,m3,m4).call(this)?dG(this,mG).start():dG(this,mG).stop()}),dj(this,m5,e=>{this.dragging||(nk(e)&&(this.range.valueAsNumber=e),dG(this,m1)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),dQ(this,mj,this.shadowRoot.querySelectorAll('[part~="box"]')),dQ(this,mz,this.shadowRoot.querySelector('[part~="preview-box"]')),dQ(this,mZ,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);dQ(this,mX,parseInt(e.getPropertyValue("--media-box-padding-left"))),dQ(this,mJ,parseInt(e.getPropertyValue("--media-box-padding-right"))),dQ(this,mG,new dq(this.range,dG(this,m5),60))}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PAUSED,nc.MEDIA_DURATION,nc.MEDIA_SEEKABLE,nc.MEDIA_CURRENT_TIME,nc.MEDIA_PREVIEW_IMAGE,nc.MEDIA_PREVIEW_TIME,nc.MEDIA_PREVIEW_CHAPTER,nc.MEDIA_BUFFERED,nc.MEDIA_PLAYBACK_RATE,nc.MEDIA_LOADING,nc.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",nD("seek")),dG(this,m2).call(this),dQ(this,mY,this.getRootNode()),null==(e=dG(this,mY))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),dG(this,mG).stop(),null==(e=dG(this,mY))||e.removeEventListener("transitionstart",this),dQ(this,mY,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===nc.MEDIA_CURRENT_TIME||e===nc.MEDIA_PAUSED||e===nc.MEDIA_ENDED||e===nc.MEDIA_LOADING||e===nc.MEDIA_DURATION||e===nc.MEDIA_SEEKABLE?(dG(this,mG).update({start:dX(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),dG(this,m2).call(this),dZ(this)):e===nc.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===nc.MEDIA_DURATION||e===nc.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=dG(this,m0),this.updateBar()))}get mediaChaptersCues(){return dG(this,m0)}set mediaChaptersCues(e){var t;dQ(this,m0,e),this.updateSegments(null==(t=dG(this,m0))?void 0:t.map(e=>({start:dX(this,e.startTime),end:dX(this,e.endTime)})))}get mediaPaused(){return si(this,nc.MEDIA_PAUSED)}set mediaPaused(e){sa(this,nc.MEDIA_PAUSED,e)}get mediaLoading(){return si(this,nc.MEDIA_LOADING)}set mediaLoading(e){sa(this,nc.MEDIA_LOADING,e)}get mediaDuration(){return se(this,nc.MEDIA_DURATION)}set mediaDuration(e){st(this,nc.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,nc.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){st(this,nc.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return se(this,nc.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){st(this,nc.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(nc.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(nc.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(nc.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(nc.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(nc.MEDIA_SEEKABLE);return}this.setAttribute(nc.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return sr(this,nc.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){sn(this,nc.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return se(this,nc.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){st(this,nc.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return si(this,nc.MEDIA_ENDED)}set mediaEnded(e){sa(this,nc.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=dX(this,r)}let{style:a}=n6(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=n6(this.shadowRoot,"#current-rail"),t=n6(this.shadowRoot,'[part~="current-box"]'),i=dz(this,m9,m8).call(this,dG(this,mZ)),a=dz(this,m6,m7).call(this,i,this.range.valueAsNumber),r=dz(this,pe,pt).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dz(this,ps,po).call(this);break;case"pointermove":dz(this,pi,pa).call(this,e);break;case"pointerup":dG(this,m1)&&dQ(this,m1,!1);break;case"pointerdown":dQ(this,m1,!0);break;case"pointerleave":dz(this,pr,pn).call(this,null);break;case"transitionstart":n3(e.target,this)&&setTimeout(()=>dG(this,m2).call(this),0)}}}mY=new WeakMap,mG=new WeakMap,mj=new WeakMap,mQ=new WeakMap,mz=new WeakMap,mZ=new WeakMap,mX=new WeakMap,mJ=new WeakMap,m0=new WeakMap,m1=new WeakMap,m2=new WeakMap,m3=new WeakSet,m4=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&n8(this)},m5=new WeakMap,m9=new WeakSet,m8=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?n4(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},m6=new WeakSet,m7=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},pe=new WeakSet,pt=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+dG(this,mX)){let t=e.range.left-e.bounds.left-dG(this,mX);return`${n-i/2+t}px`}if(n>r-dG(this,mJ)){let t=e.bounds.right-e.range.right-dG(this,mJ);return`${n+i/2-t-e.range.width}px`}return 0},pi=new WeakSet,pa=function(e){let t=[...dG(this,mj)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){dz(this,pr,pn).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=n6(this.shadowRoot,"#preview-rail"),r=n6(this.shadowRoot,'[part~="preview-box"]'),n=dz(this,m9,m8).call(this,dG(this,mz)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dz(this,m6,m7).call(this,n,s),l=dz(this,pe,pt).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(dG(this,mQ))-Math.round(s*i))&&s>.01&&s<.99||(dQ(this,mQ,s*i),dz(this,pr,pn).call(this,dG(this,mQ)))},pr=new WeakSet,pn=function(e){this.dispatchEvent(new n$.CustomEvent(no.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},ps=new WeakSet,po=function(){dG(this,mG).stop();let e=dJ(this);this.dispatchEvent(new n$.CustomEvent(no.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},d0.shadowRootOptions={mode:"open"},d0.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${nc.MEDIA_PREVIEW_IMAGE}], [${nc.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${nc.MEDIA_PREVIEW_IMAGE}], [${nc.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${nc.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${nc.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${nc.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${nc.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${nc.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${nc.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${nc.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${nc.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${nc.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${nc.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${nc.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${nc.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${dm.shadowRootOptions.mode}">
            ${dm.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},n$.customElements.get("media-time-range")||n$.customElements.define("media-time-range",d0);var d1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d2=(e,t,i)=>(d1(e,t,"read from private field"),i?i.call(e):t.get(e)),d3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let d4=e=>e.mediaMuted?0:e.mediaVolume,d5=e=>`${Math.round(100*e)}%`;class d9 extends o3{constructor(){super(...arguments),d3(this,pl,()=>{let e=this.range.value,t=new n$.CustomEvent(no.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_VOLUME,nc.MEDIA_MUTED,nc.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",nD("volume")),this.range.addEventListener("input",d2(this,pl))}disconnectedCallback(){this.range.removeEventListener("input",d2(this,pl)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===nc.MEDIA_VOLUME||e===nc.MEDIA_MUTED)&&(this.range.valueAsNumber=d4(this),this.range.setAttribute("aria-valuetext",d5(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return se(this,nc.MEDIA_VOLUME,1)}set mediaVolume(e){st(this,nc.MEDIA_VOLUME,e)}get mediaMuted(){return si(this,nc.MEDIA_MUTED)}set mediaMuted(e){sa(this,nc.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return sr(this,nc.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){sn(this,nc.MEDIA_VOLUME_UNAVAILABLE,e)}}pl=new WeakMap,n$.customElements.get("media-volume-range")||n$.customElements.define("media-volume-range",d9);class d8 extends oO{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=nD("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return si(this,nc.MEDIA_LOOP)}set mediaLoop(e){sa(this,nc.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new n$.CustomEvent(no.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}d8.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${nc.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},d8.getTooltipContentHTML=function(){return nD("Loop")},n$.customElements.get("media-loop-button")||n$.customElements.define("media-loop-button",d8);var d6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d7=(e,t,i)=>(d6(e,t,"read from private field"),i?i.call(e):t.get(e)),ue=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ut=(e,t,i,a)=>(d6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ui={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof uu&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof uu?a.element[a.attributeName]=t:a.value=t}}}};class ua extends n$.DocumentFragment{constructor(e,t,i=ui){var a;super(),ue(this,pd,void 0),ue(this,pu,void 0),this.append(e.content.cloneNode(!0)),ut(this,pd,ur(this)),ut(this,pu,i),null==(a=i.createCallback)||a.call(i,this,d7(this,pd),t),i.processCallback(this,d7(this,pd),t)}update(e){d7(this,pu).processCallback(this,d7(this,pd),e)}}pd=new WeakMap,pu=new WeakMap;let ur=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new ud;for([i,a]of us(r.value))if(i){let i=new uu(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of us(n))if(i){let i=new uc(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new uh(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else ur(r,t);return t},un={},us=e=>{let t="",i=0,a=un[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),un[e]=a};class uo{get value(){return""}set value(e){}toString(){return this.value}}let ul=new WeakMap;class ud{constructor(){ue(this,pc,[])}[Symbol.iterator](){return d7(this,pc).values()}get length(){return d7(this,pc).length}item(e){return d7(this,pc)[e]}append(...e){for(let t of e)t instanceof uu&&ul.set(t,this),d7(this,pc).push(t)}toString(){return d7(this,pc).join("")}}pc=new WeakMap;class uu extends uo{constructor(e,t,i){super(),ue(this,pE),ue(this,ph,""),ue(this,pm,void 0),ue(this,pp,void 0),ue(this,pv,void 0),ut(this,pm,e),ut(this,pp,t),ut(this,pv,i)}get attributeName(){return d7(this,pp)}get attributeNamespace(){return d7(this,pv)}get element(){return d7(this,pm)}get value(){return d7(this,ph)}set value(e){d7(this,ph)!==e&&(ut(this,ph,e),d7(this,pE,pb)&&1!==d7(this,pE,pb).length?d7(this,pm).setAttributeNS(d7(this,pv),d7(this,pp),d7(this,pE,pb).toString()):null==e?d7(this,pm).removeAttributeNS(d7(this,pv),d7(this,pp)):d7(this,pm).setAttributeNS(d7(this,pv),d7(this,pp),e))}get booleanValue(){return d7(this,pm).hasAttributeNS(d7(this,pv),d7(this,pp))}set booleanValue(e){if(d7(this,pE,pb)&&1!==d7(this,pE,pb).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}ph=new WeakMap,pm=new WeakMap,pp=new WeakMap,pv=new WeakMap,pE=new WeakSet,pb=function(){return ul.get(this)};class uc extends uo{constructor(e,t){super(),ue(this,pg,void 0),ue(this,pf,void 0),ut(this,pg,e),ut(this,pf,t?[...t]:[new Text])}get replacementNodes(){return d7(this,pf)}get parentNode(){return d7(this,pg)}get nextSibling(){return d7(this,pf)[d7(this,pf).length-1].nextSibling}get previousSibling(){return d7(this,pf)[0].previousSibling}get value(){return d7(this,pf).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),ut(this,pf,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(d7(this,pf)[0].parentNode,d7(this,pf),t,this.nextSibling))}}pg=new WeakMap,pf=new WeakMap;class uh extends uc{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let um={string:e=>String(e)};class up{constructor(e){this.template=e,this.state=void 0}}let uv=new WeakMap,uE=new WeakMap,ub={partial:(e,t)=>{t[e.expression]=new up(e.template)},if:(e,t)=>{var i;if(uy(e.expression,t)){if(uv.get(e)!==e.template){uv.set(e,e.template);let i=new ua(e.template,t,uf);e.replace(i),uE.set(e,i)}else null==(i=uE.get(e))||i.update(t)}else e.replace(""),uv.delete(e),uE.delete(e)}},ug=Object.keys(ub),uf={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof uh){if(!n.directive){let e=ug.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=ub[n.directive])||a.call(ub,n,i);continue}let t=uy(e,i);if(t instanceof up){uv.get(n)!==t.template?(uv.set(n,t.template),t=new ua(t.template,t.state,uf),n.value=t,uE.set(n,t)):null==(r=uE.get(n))||r.update(t.state);continue}t?(n instanceof uu&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof uu?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,uv.delete(n),uE.delete(n))):n instanceof uu?n.value=void 0:(n.value=void 0,uv.delete(n),uE.delete(n))}}},u_={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=um[t])?void 0:i.call(um,e)}};function uy(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return uT(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return uT(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=uk(d,t))}return i}if(1===d.length)return uA(d[0])?uk(d[0].token,t):uT(e);if(2===d.length){let i=u_[null==(o=d[0])?void 0:o.token];return i&&uA(d[1])?i(uk(d[1].token,t)):uT(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=u_[i];return a&&uA(d[0])&&uA(d[2])?a(uk(d[0].token,t),"|"===i?d[2].token:uk(d[2].token,t)):uT(e)}}function uT(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function uA({type:e}){return["number","boolean","string","param"].includes(e)}function uk(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):nw(e)?parseFloat(e):t[e]}var uw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uS=(e,t,i)=>(uw(e,t,"read from private field"),i?i.call(e):t.get(e)),uI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uR=(e,t,i,a)=>(uw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uL=(e,t,i)=>(uw(e,t,"access private method"),i);let uC={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},uD=nq.createElement("template");uD.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class uM extends n$.HTMLElement{constructor(){super(),uI(this,pk),uI(this,pS),uI(this,p_,void 0),uI(this,py,void 0),uI(this,pT,void 0),uI(this,pA,void 0),uI(this,pR,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),uR(this,pA,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(uC[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),uR(this,pR,this.render.bind(this)),uL(this,pk,pw).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=uS(this,p_))?e:this.constructor.template}set template(e){if(null===e){this.removeAttribute("template");return}"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(uR(this,p_,e),uR(this,pT,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>uC[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=uC[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(nw(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&uL(this,pS,pI).call(this)}connectedCallback(){this.addEventListener(nh.BREAKPOINTS_COMPUTED,uS(this,pR)),uS(this,pA).observe(this,{attributes:!0}),uS(this,pA).observe(this.renderRoot,{attributes:!0,subtree:!0}),uL(this,pS,pI).call(this)}disconnectedCallback(){this.removeEventListener(nh.BREAKPOINTS_COMPUTED,uS(this,pR)),uS(this,pA).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==uS(this,py)&&(uR(this,py,this.template),this.renderer=new ua(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(uD.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function uO(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function ux(e){return e.split("-")[0]}p_=new WeakMap,py=new WeakMap,pT=new WeakMap,pA=new WeakMap,pk=new WeakSet,pw=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},pS=new WeakSet,pI=function(){var e;let t=this.getAttribute("template");if(!t||t===uS(this,pT))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){uR(this,pT,t),uR(this,p_,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(uR(this,pT,t),uO(t).then(e=>{let t=nq.createElement("template");t.innerHTML=e,uR(this,p_,t),this.createRenderer()}).catch(console.error))},pR=new WeakMap,uM.observedAttributes=["template"],uM.processor=uf,n$.customElements.get("media-theme")||n$.customElements.define("media-theme",uM);class uN extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class uP extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var uU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uW=(e,t,i)=>(uU(e,t,"read from private field"),i?i.call(e):t.get(e)),uB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uH=(e,t,i,a)=>(uU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uF=(e,t,i)=>(uU(e,t,"access private method"),i);function uV({type:e,text:t,value:i,checked:a}){let r=nq.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nq.createElement("span");return n.textContent=t,r.append(n),r}function uK(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let u$={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class uq extends n$.HTMLElement{constructor(){if(super(),uB(this,pP),uB(this,pW),uB(this,pF),uB(this,pK),uB(this,pq),uB(this,pG),uB(this,pZ),uB(this,pJ),uB(this,p1),uB(this,p3),uB(this,p5),uB(this,p8),uB(this,p7),uB(this,vt),uB(this,va),uB(this,vn),uB(this,vo),uB(this,vd),uB(this,pL,null),uB(this,pC,null),uB(this,pD,null),uB(this,pM,new Set),uB(this,pO,void 0),uB(this,px,!1),uB(this,pN,null),uB(this,pH,()=>{let e=uW(this,pM),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));uH(this,pM,t)}),uB(this,pQ,()=>{uF(this,pZ,pX).call(this),uF(this,pJ,p0).call(this,!1)}),uB(this,pz,()=>{uF(this,pZ,pX).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),uH(this,pO,new MutationObserver(uW(this,pH)))}static get observedAttributes(){return[u$.DISABLED,u$.HIDDEN,u$.STYLE,u$.ANCHOR,nl.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":uF(this,pP,pU).call(this,e);break;case"invoke":uF(this,pK,p$).call(this,e);break;case"click":uF(this,p1,p2).call(this,e);break;case"toggle":uF(this,p5,p9).call(this,e);break;case"focusout":uF(this,p7,ve).call(this,e);break;case"keydown":uF(this,vt,vi).call(this,e)}}connectedCallback(){var e,t;uW(this,pO).observe(this.defaultSlot,{childList:!0}),uH(this,pN,n7(this.shadowRoot,":host")),uF(this,pF,pV).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),uH(this,pL,nJ(this)),null==(t=null==(e=uW(this,pL))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nQ(uG(this),uW(this,pQ)),nQ(this,uW(this,pz))),uF(this,pW,pB).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;uW(this,pO).disconnect(),nz(uG(this),uW(this,pQ)),nz(this,uW(this,pz)),this.disable(),null==(t=null==(e=uW(this,pL))?void 0:e.unassociateElement)||t.call(e,this),uH(this,pL,null),uH(this,pC,null),uH(this,pD,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===u$.HIDDEN&&i!==t?(uW(this,px)||uH(this,px,!0),this.hidden?uF(this,pG,pj).call(this):uF(this,pq,pY).call(this),this.dispatchEvent(new uP({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===nl.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=uW(this,pL))?void 0:a.unassociateElement)||r.call(a,this),uH(this,pL,null)),i&&this.isConnected&&(uH(this,pL,nJ(this)),null==(s=null==(n=uW(this,pL))?void 0:n.associateElement)||s.call(n,this))):e===u$.DISABLED&&i!==t?null==i?this.enable():this.disable():e===u$.STYLE&&i!==t&&uF(this,pF,pV).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=n9(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(uY)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&uF(this,vd,vu).call(this,t)}focus(){if(uH(this,pC,n5()),this.items.length){uF(this,vo,vl).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=uF(this,va,vr).call(this,e);i&&(uF(this,vd,vu).call(this,i,"checkbox"===i.type),uW(this,pD)&&!this.hidden&&(null==(t=uW(this,pC))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=uF(this,va,vr).call(this,e))?t:uF(this,vn,vs).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),uF(this,vo,vl).call(this,r[s]),r[s].focus()}}function uY(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function uG(e){var t;return null!=(t=e.getAttribute("bounds")?n4(e,`#${e.getAttribute("bounds")}`):nX(e)||e.parentElement)?t:e}pL=new WeakMap,pC=new WeakMap,pD=new WeakMap,pM=new WeakMap,pO=new WeakMap,px=new WeakMap,pN=new WeakMap,pP=new WeakSet,pU=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&uF(this,pW,pB).call(this),t.name||uW(this,pH).call(this)},pW=new WeakSet,pB=function(){let e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=0===t.assignedNodes().length&&0===e.assignedNodes().length},pH=new WeakMap,pF=new WeakSet,pV=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pK=new WeakSet,p$=function(e){uH(this,pD,e.relatedTarget),n3(this,e.relatedTarget)||(this.hidden=!this.hidden)},pq=new WeakSet,pY=function(){var e;null==(e=uW(this,pD))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nQ(uG(this),uW(this,pQ)),nQ(this,uW(this,pz))},pG=new WeakSet,pj=function(){var e;null==(e=uW(this,pD))||e.setAttribute("aria-expanded","false"),nz(uG(this),uW(this,pQ)),nz(this,uW(this,pz))},pQ=new WeakMap,pz=new WeakMap,pZ=new WeakSet,pX=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(ux(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=ux(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=uG(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=uW(this,pN);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pJ=new WeakSet,p0=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=uW(this,pN);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),uF(this,pZ,pX).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),uF(this,pZ,pX).call(this);a.removeProperty("--media-menu-transition-in")},p1=new WeakSet,p2=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(uW(this,p3,p4))){null==(t=uW(this,pC))||t.focus(),this.hidden=!0;return}let i=uF(this,va,vr).call(this,e);!i||i.hasAttribute("disabled")||(uF(this,vo,vl).call(this,i),this.handleSelect(e))},p3=new WeakSet,p4=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},p5=new WeakSet,p9=function(e){if(e.target===this)return;uF(this,p8,p6).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new uN({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);uF(this,pJ,p0).call(this,!0)},p8=new WeakSet,p6=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},p7=new WeakSet,ve=function(e){var t;n3(this,e.relatedTarget)||(uW(this,px)&&(null==(t=uW(this,pC))||t.focus()),!uW(this,pD)||uW(this,pD)===e.relatedTarget||this.hidden||(this.hidden=!0))},vt=new WeakSet,vi=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(uW(this,px)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=uW(this,pC))||n.focus(),uW(this,px)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},va=new WeakSet,vr=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},vn=new WeakSet,vs=function(){return this.items.find(e=>0===e.tabIndex)},vo=new WeakSet,vl=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},vd=new WeakSet,vu=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},uq.shadowRootOptions={mode:"open"},uq.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},n$.customElements.get("media-chrome-menu")||n$.customElements.define("media-chrome-menu",uq);var uj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uQ=(e,t,i)=>(uj(e,t,"read from private field"),i?i.call(e):t.get(e)),uz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uZ=(e,t,i,a)=>(uj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uX=(e,t,i)=>(uj(e,t,"access private method"),i);let uJ={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class u0 extends n$.HTMLElement{constructor(){if(super(),uz(this,vm),uz(this,vv),uz(this,vb),uz(this,vT),uz(this,vc,!1),uz(this,vh,void 0),uz(this,vf,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nq.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),uz(this,v_,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",uQ(this,v_));return}this.handleClick(e)}),uz(this,vy,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",uQ(this,v_));return}this.addEventListener("keyup",uQ(this,v_),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nZ(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[uJ.TYPE,uJ.DISABLED,uJ.CHECKED,uJ.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),u1(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":uX(this,vm,vp).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":uQ(this,vy).call(this,e);break;case"keyup":uQ(this,v_).call(this,e)}}attributeChangedCallback(e,t,i){e===uJ.CHECKED&&u1(this)&&!uQ(this,vc)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===uJ.TYPE&&i!==t?this.role="menuitem"+i:e===uJ.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uJ.DISABLED)||this.enable(),this.role="menuitem"+this.type,uZ(this,vh,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),uX(this,vT,vA).call(this),this.submenuElement&&uX(this,vv,vE).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),uX(this,vT,vA).call(this),uZ(this,vh,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=n9(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(uJ.TYPE))?e:""}set type(e){this.setAttribute(uJ.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(uJ.VALUE))?e:this.text}set value(e){this.setAttribute(uJ.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(u1(this))return"true"===this.getAttribute("aria-checked")}set checked(e){u1(this)&&(uZ(this,vc,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!u1(this)&&this.invokeTargetElement&&n3(this,e.target)&&this.invokeTargetElement.dispatchEvent(new uN({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function u1(e){return"radio"===e.type||"checkbox"===e.type}vc=new WeakMap,vh=new WeakMap,vm=new WeakSet,vp=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?uX(this,vv,vE).call(this):uX(this,vb,vg).call(this))},vv=new WeakSet,vE=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",uQ(this,vf)),this.submenuElement.addEventListener("addmenuitem",uQ(this,vf)),this.submenuElement.addEventListener("removemenuitem",uQ(this,vf)),uQ(this,vf).call(this)},vb=new WeakSet,vg=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",uQ(this,vf)),this.submenuElement.removeEventListener("addmenuitem",uQ(this,vf)),this.submenuElement.removeEventListener("removemenuitem",uQ(this,vf)),uQ(this,vf).call(this)},vf=new WeakMap,v_=new WeakMap,vy=new WeakMap,vT=new WeakSet,vA=function(){var e;let t=null==(e=uQ(this,vh))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},u0.shadowRootOptions={mode:"open"},u0.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},u0.getSuffixSlotInnerHTML=function(e){return""},n$.customElements.get("media-chrome-menu-item")||n$.customElements.define("media-chrome-menu-item",u0);class u2 extends uq{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nX(this).querySelector("media-settings-menu-button")}}u2.getTemplateHTML=function(e){return`
    ${uq.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},n$.customElements.get("media-settings-menu")||n$.customElements.define("media-settings-menu",u2);class u3 extends u0{}u3.shadowRootOptions={mode:"open"},u3.getTemplateHTML=function(e){return`
    ${u0.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},u3.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},n$.customElements.get("media-settings-menu-item")||n$.customElements.define("media-settings-menu-item",u3);class u4 extends oO{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=n9(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new uN({relatedTarget:this}))}}n$.customElements.get("media-chrome-menu-button")||n$.customElements.define("media-chrome-menu-button",u4);class u5 extends u4{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",nD("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nX(this).querySelector("media-settings-menu")}}u5.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},u5.getTooltipContentHTML=function(){return nD("Settings")},n$.customElements.get("media-settings-menu-button")||n$.customElements.define("media-settings-menu-button",u5);var u9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u8=(e,t,i)=>(u9(e,t,"read from private field"),i?i.call(e):t.get(e)),u6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u7=(e,t,i,a)=>(u9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ce=(e,t,i)=>(u9(e,t,"access private method"),i);class ct extends uq{constructor(){super(...arguments),u6(this,vS),u6(this,vR),u6(this,vk,[]),u6(this,vw,void 0)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_AUDIO_TRACK_LIST,nc.MEDIA_AUDIO_TRACK_ENABLED,nc.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===nc.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===nc.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;u7(this,vk,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(nA)),ce(this,vS,vI).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ce(this,vR,vL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ce(this,vR,vL))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nX(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return u8(this,vk)}set mediaAudioTrackList(e){u7(this,vk,e),ce(this,vS,vI).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=sr(this,nc.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){sn(this,nc.MEDIA_AUDIO_TRACK_ENABLED,e)}}vk=new WeakMap,vw=new WeakMap,vS=new WeakSet,vI=function(){if(u8(this,vw)===JSON.stringify(this.mediaAudioTrackList))return;u7(this,vw,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=uV({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(uK(this,"checked-indicator")),this.defaultSlot.append(e)}},vR=new WeakSet,vL=function(){if(null==this.value)return;let e=new n$.CustomEvent(no.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n$.customElements.get("media-audio-track-menu")||n$.customElements.define("media-audio-track-menu",ct);let ci=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,ca=e=>{let t=nD("Audio");e.setAttribute("aria-label",t)};class cr extends u4{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_AUDIO_TRACK_ENABLED,nc.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ca(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_LANG&&ca(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nX(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=sr(this,nc.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){sn(this,nc.MEDIA_AUDIO_TRACK_ENABLED,e)}}cr.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ci}</slot>
  `},cr.getTooltipContentHTML=function(){return nD("Audio")},n$.customElements.get("media-audio-track-menu-button")||n$.customElements.define("media-audio-track-menu-button",cr);var cn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cs=(e,t,i)=>(cn(e,t,"read from private field"),i?i.call(e):t.get(e)),co=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cl=(e,t,i,a)=>(cn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cd=(e,t,i)=>(cn(e,t,"access private method"),i);let cu=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class cc extends uq{constructor(){super(...arguments),co(this,vD),co(this,vO),co(this,vC,void 0)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_SUBTITLES_LIST,nc.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_SUBTITLES_LIST&&t!==i?cd(this,vD,vM).call(this):e===nc.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",cd(this,vD,vM).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cd(this,vO,vx))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cd(this,vO,vx))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nX(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ch(this,nc.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){cm(this,nc.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ch(this,nc.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){cm(this,nc.MEDIA_SUBTITLES_SHOWING,e)}}vC=new WeakMap,vD=new WeakSet,vM=function(){var e;let t=cs(this,vC)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(nc.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;cl(this,vC,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let a=!this.value,r=uV({type:"radio",text:this.formatMenuItemText(nD("Off")),value:"off",checked:a});for(let t of(r.prepend(uK(this,"checked-indicator")),this.defaultSlot.append(r),this.mediaSubtitlesList)){let i=uV({type:"radio",text:this.formatMenuItemText(t.label,t),value:sL(t),checked:this.value==sL(t)});i.prepend(uK(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(uK(this,"captions-indicator")),this.defaultSlot.append(i)}},vO=new WeakSet,vx=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(nc.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new n$.CustomEvent(no.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new n$.CustomEvent(no.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},cc.getTemplateHTML=function(e){return`
    ${uq.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${cu}</slot>
  `};let ch=(e,t)=>{let i=e.getAttribute(t);return i?sI(i):[]},cm=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sC(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n$.customElements.get("media-captions-menu")||n$.customElements.define("media-captions-menu",cc);let cp=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,cv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,cE=e=>{e.setAttribute("data-captions-enabled",sN(e).toString())},cb=e=>{e.setAttribute("aria-label",nD("closed captions"))};class cg extends u4{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_SUBTITLES_LIST,nc.MEDIA_SUBTITLES_SHOWING,nc.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),cb(this),cE(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_SUBTITLES_SHOWING?cE(this):e===nc.MEDIA_LANG&&cb(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nX(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return cf(this,nc.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){c_(this,nc.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return cf(this,nc.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){c_(this,nc.MEDIA_SUBTITLES_SHOWING,e)}}cg.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${cp}</slot>
      <slot name="off">${cv}</slot>
    </slot>
  `},cg.getTooltipContentHTML=function(){return nD("Captions")};let cf=(e,t)=>{let i=e.getAttribute(t);return i?sI(i):[]},c_=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=sC(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};n$.customElements.get("media-captions-menu-button")||n$.customElements.define("media-captions-menu-button",cg);var cy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cT=(e,t,i)=>(cy(e,t,"read from private field"),i?i.call(e):t.get(e)),cA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ck=(e,t,i)=>(cy(e,t,"access private method"),i);let cw={RATES:"rates"};class cS extends uq{constructor(){super(),cA(this,vP),cA(this,vW),cA(this,vN,new sk(this,cw.RATES,{defaultValue:l3})),ck(this,vP,vU).call(this)}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PLAYBACK_RATE,cw.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nc.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,ck(this,vP,vU).call(this)):e===cw.RATES&&t!=i&&(cT(this,vN).value=i,ck(this,vP,vU).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ck(this,vW,vB))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ck(this,vW,vB))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nX(this).querySelector("media-playback-rate-menu-button")}get rates(){return cT(this,vN)}set rates(e){e?Array.isArray(e)?cT(this,vN).value=e.join(" "):"string"==typeof e&&(cT(this,vN).value=e):cT(this,vN).value="",ck(this,vP,vU).call(this)}get mediaPlaybackRate(){return se(this,nc.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){st(this,nc.MEDIA_PLAYBACK_RATE,e)}}vN=new WeakMap,vP=new WeakSet,vU=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(cT(this,vN)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=uV({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(uK(this,"checked-indicator")),this.defaultSlot.append(t)}},vW=new WeakSet,vB=function(){if(!this.value)return;let e=new n$.CustomEvent(no.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n$.customElements.get("media-playback-rate-menu")||n$.customElements.define("media-playback-rate-menu",cS);class cI extends u4{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===nc.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",nD("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nX(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return se(this,nc.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){st(this,nc.MEDIA_PLAYBACK_RATE,e)}}cI.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},cI.getTooltipContentHTML=function(){return nD("Playback rate")},n$.customElements.get("media-playback-rate-menu-button")||n$.customElements.define("media-playback-rate-menu-button",cI);var cR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cL=(e,t,i)=>(cR(e,t,"read from private field"),i?i.call(e):t.get(e)),cC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cD=(e,t,i,a)=>(cR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cM=(e,t,i)=>(cR(e,t,"access private method"),i);class cO extends uq{constructor(){super(...arguments),cC(this,vV),cC(this,v$),cC(this,vH,[]),cC(this,vF,{})}static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_RENDITION_LIST,nc.MEDIA_RENDITION_SELECTED,nc.MEDIA_RENDITION_UNAVAILABLE,nc.MEDIA_HEIGHT,nc.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(t<1?1:0)} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case nc.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",cM(this,vV,vK).call(this);break;case nc.MEDIA_RENDITION_LIST:cD(this,vH,null==i?void 0:i.split(/\s+/).map(ny)),cM(this,vV,vK).call(this);break;case nc.MEDIA_HEIGHT:case nc.MEDIA_WIDTH:cM(this,vV,vK).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cM(this,v$,vq))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cM(this,v$,vq))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nX(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return cL(this,vH)}set mediaRenditionList(e){cD(this,vH,e),cM(this,vV,vK).call(this)}get mediaRenditionSelected(){return sr(this,nc.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){sn(this,nc.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,nc.MEDIA_HEIGHT)}set mediaHeight(e){st(this,nc.MEDIA_HEIGHT,e)}get mediaWidth(){return se(this,nc.MEDIA_WIDTH)}set mediaWidth(e){st(this,nc.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}vH=new WeakMap,vF=new WeakMap,vV=new WeakSet,vK=function(){let e;let t=!this.mediaRenditionSelected;if(cL(this,vF).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&cL(this,vF).mediaHeight===this.mediaHeight&&cL(this,vF).mediaWidth===this.mediaWidth&&cL(this,vF).isAuto===t)return;cL(this,vF).mediaRenditionList=JSON.stringify(this.mediaRenditionList),cL(this,vF).mediaHeight=this.mediaHeight,cL(this,vF).mediaWidth=this.mediaWidth,cL(this,vF).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=uV({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(uK(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${nD("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${nD("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(nD("Auto")));let n=uV({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(uK(this,"checked-indicator")),this.defaultSlot.append(n)},v$=new WeakSet,vq=function(){if(null==this.value)return;let e=new n$.CustomEvent(no.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},n$.customElements.get("media-rendition-menu")||n$.customElements.define("media-rendition-menu",cO);let cx=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class cN extends u4{static get observedAttributes(){return[...super.observedAttributes,nc.MEDIA_RENDITION_SELECTED,nc.MEDIA_RENDITION_UNAVAILABLE,nc.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",nD("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nX(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return sr(this,nc.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){sn(this,nc.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,nc.MEDIA_HEIGHT)}set mediaHeight(e){st(this,nc.MEDIA_HEIGHT,e)}}cN.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${cx}</slot>
  `},cN.getTooltipContentHTML=function(){return nD("Quality")},n$.customElements.get("media-rendition-menu-button")||n$.customElements.define("media-rendition-menu-button",cN);var cP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cU=(e,t,i)=>(cP(e,t,"read from private field"),i?i.call(e):t.get(e)),cW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cB=(e,t,i,a)=>(cP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cH=(e,t,i)=>(cP(e,t,"access private method"),i);class cF extends uq{constructor(){super(),cW(this,vG),cW(this,vQ),cW(this,vZ),cW(this,vJ),cW(this,v2),cW(this,vY,!1),cW(this,v1,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=cH(this,vJ,v0).call(this,t);(i||a)&&(cU(this,vY)?cH(this,vQ,vz).call(this):cH(this,v2,v3).call(this,e))}),cW(this,v4,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=cH(this,vJ,v0).call(this,t);!i&&(a&&(r||n)||cH(this,vQ,vz).call(this))}),cW(this,v5,e=>{"Escape"===e.key&&cH(this,vQ,vz).call(this)}),cW(this,v9,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}cH(this,vQ,vz).call(this)}),this.setAttribute("noautohide",""),cH(this,vG,vj).call(this)}connectedCallback(){super.connectedCallback(),nX(this).addEventListener("contextmenu",cU(this,v1)),this.addEventListener("click",cU(this,v9))}disconnectedCallback(){super.disconnectedCallback(),nX(this).removeEventListener("contextmenu",cU(this,v1)),this.removeEventListener("click",cU(this,v9)),document.removeEventListener("mousedown",cU(this,v4)),document.removeEventListener("keydown",cU(this,v5))}}vY=new WeakMap,vG=new WeakSet,vj=function(){this.hidden=!cU(this,vY)},vQ=new WeakSet,vz=function(){cB(this,vY,!1),cH(this,vG,vj).call(this)},vZ=new WeakSet,vX=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&cH(e,vQ,vz).call(e)})},vJ=new WeakSet,v0=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},v1=new WeakMap,v2=new WeakSet,v3=function(e){e.preventDefault(),cH(this,vZ,vX).call(this),cB(this,vY,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,cH(this,vG,vj).call(this),document.addEventListener("mousedown",cU(this,v4),{once:!0}),document.addEventListener("keydown",cU(this,v5),{once:!0})},v4=new WeakMap,v5=new WeakMap,v9=new WeakMap,cF.getTemplateHTML=function(e){return`
      ${uq.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},n$.customElements.get("media-context-menu")||n$.customElements.define("media-context-menu",cF);class cV extends u0{}cV.shadowRootOptions={mode:"open"},cV.getTemplateHTML=function(e){return`
    ${u0.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},n$.customElements.get("media-context-menu-item")||n$.customElements.define("media-context-menu-item",cV);var cK=e=>{throw TypeError(e)},c$=(e,t,i)=>t.has(e)||cK("Cannot "+i),cq=(e,t,i)=>(c$(e,t,"read from private field"),i?i.call(e):t.get(e)),cY=(e,t,i)=>t.has(e)?cK("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cG=(e,t,i,a)=>(c$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cj=(e,t,i)=>(c$(e,t,"access private method"),i),cQ=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends cQ{}globalThis.DocumentFragment=e}var cz,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hE,hb,hg,hf,h_,hy,hT,hA,hk,hw,hS,hI,hR,hL,hC,hD,hM,hO,hx,hN,hP,hU,hW,hB,hH,hF,hV,hK,h$,hq,hY,hG,hj,hQ,hz,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mE,mb,mg,mf,m_,my,mT,mA,mk,mw,mS,mI,mR,mL,mC,mD,mM,mO,mx,mN,mP,mU,mW,mB,mH,mF,mV,mK,m$,mq,mY,mG,mj,mQ,mz,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pE,pb,pg,pf,p_,py,pT,pA,pk,pw,pS,pI,pR,pL,pC,pD,pM,pO,px,pN,pP,pU,pW,pB,pH,pF,pV,pK,p$,pq,pY,pG,pj,pQ,pz,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vE,vb,vg,vf,v_,vy,vT,vA,vk,vw,vS,vI,vR,vL,vC,vD,vM,vO,vx,vN,vP,vU,vW,vB,vH,vF,vV,vK,v$,vq,vY,vG,vj,vQ,vz,vZ,vX,vJ,v0,v1,v2,v3,v4,v5,v9,v8,v6=class extends cQ{},v7=class{constructor(e,t={}){cY(this,v8),cG(this,v8,null==t?void 0:t.detail)}get detail(){return cq(this,v8)}initCustomEvent(){}};v8=new WeakMap;var Ee={document:{createElement:function(e,t){return new v6}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(v6)},CustomEvent:v7,EventTarget:cQ,HTMLElement:v6,HTMLVideoElement:class extends cQ{}},Et="undefined"==typeof window||void 0===globalThis.customElements,Ei=Et?Ee:globalThis,Ea=Et?Ee.document:globalThis.document;function Er(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function En(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function Es(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function Eo(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var El,Ed,Eu,Ec=(e,t)=>!!e&&!!t&&(!!e.contains(t)||Ec(e,t.getRootNode().host)),Eh="mux.com",Em=(()=>{try{return"3.13.0"}catch{}return"UNKNOWN"})(),Ep=(e,{token:t,customDomain:i=Eh,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=ir(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${Eo({token:t,time:s,program_time:r})}`},Ev=(e,{token:t,customDomain:i=Eh,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=ir(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${Eo({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},EE=e=>{if(e){if([tz.LIVE,tz.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tz.LIVE}},Eb={crossorigin:"crossOrigin",playsinline:"playsInline"},Eg=class{constructor(e,t){cY(this,El),cY(this,Ed),cY(this,Eu,[]),cG(this,El,e),cG(this,Ed,t)}[Symbol.iterator](){return cq(this,Eu).values()}get length(){return cq(this,Eu).length}get value(){var e;return null!=(e=cq(this,Eu).join(" "))?e:""}set value(e){var t;e!==this.value&&(cG(this,Eu,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cq(this,Eu)[e]}values(){return cq(this,Eu).values()}keys(){return cq(this,Eu).keys()}forEach(e){cq(this,Eu).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||cq(this,Eu).push(e)}),(""!==this.value||null!=(t=cq(this,El))&&t.hasAttribute(`${cq(this,Ed)}`))&&null!=(i=cq(this,El))&&i.setAttribute(`${cq(this,Ed)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cq(this,Eu).splice(cq(this,Eu).indexOf(e),1)}),null==(t=cq(this,El))||t.setAttribute(`${cq(this,Ed)}`,`${this.value}`)}contains(e){return cq(this,Eu).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};El=new WeakMap,Ed=new WeakMap,Eu=new WeakMap;var Ef=`[mux-player ${Em}]`;function E_(...e){console.warn(Ef,...e)}function Ey(...e){console.error(Ef,...e)}function ET(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${iu("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),E_(i)}var EA={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Ek={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Ew=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),ES=[...Object.values(EA).filter(e=>EA.PLAYSINLINE!==e),...Object.values(Ek)];function EI(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var ER=class extends Ei.HTMLElement{static get observedAttributes(){return ES}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case Ek.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case Ek.VOLUME:{let e=null!=(a=Es(i))?a:1;this.media&&(this.media.volume=e);return}case Ek.PLAYBACKRATE:{let e=null!=(r=Es(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:Ew}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:Ew}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=Es(this.getAttribute(Ek.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(Ek.PLAYBACKRATE,`${e}`):this.removeAttribute(Ek.PLAYBACKRATE)}get crossOrigin(){return EI(this,EA.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(EA.CROSSORIGIN,`${e}`)}get autoplay(){return null!=EI(this,EA.AUTOPLAY)}set autoplay(e){e?this.setAttribute(EA.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(EA.AUTOPLAY)}get loop(){return null!=EI(this,EA.LOOP)}set loop(e){e?this.setAttribute(EA.LOOP,""):this.removeAttribute(EA.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=EI(this,EA.MUTED)}set defaultMuted(e){e?this.setAttribute(EA.MUTED,""):this.removeAttribute(EA.MUTED)}get playsInline(){return null!=EI(this,EA.PLAYSINLINE)}set playsInline(e){Ey("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(EA.PRELOAD,e):this.removeAttribute(EA.PRELOAD)}},EL=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,EC=new WeakMap,ED=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=EC.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=EC.get(this.element);e&&e.delete(this.type)}}static for(t){EC.has(t.element)||EC.set(t.element,new Map);let i=t.attributeName.slice(2),a=EC.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},EM=new Map,EO=new WeakMap,Ex=new WeakMap,EN=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(EM.has(this.stringsKey))return EM.get(this.stringsKey);{let e=Ea.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),EM.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(EO.get(e)!==i){EO.set(e,i);let t=new ua(i,this.values,this.processor);Ex.set(e,t),e instanceof uc?e.replace(...t.children):e.appendChild(t);return}let a=Ex.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},EP={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof uu&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof uu){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof uu&&r.attributeName.startsWith("on")&&(ED.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof uc&&(r.replace(""),1)||n instanceof EN&&r instanceof uc&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof uc&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof uu){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function EU(e,...t){return new EN(e,t,EP)}var EW=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},EB=e=>EU`
  <style>
    ${EW(e)}
    ${EL}
  </style>
  ${EV(e)}
`,EH=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===EE(e.streamType)&&(t+=" noarrowleft noarrowright"),t},EF=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),EV=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A,k,w,S,I,R,L,C,D,M,O,x,N,P,U,W,B,H,F,V,K;let $;return EU`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${EH(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tz.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(K={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},$="",Object.entries(K).forEach(([e,t])=>{null!=t&&($+=`${Er(e)}: ${t}; `)}),r=$?$.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    videotitle="${null!=(h=e.videoTitle)&&h}"
    proudlydisplaymuxbadge="${null!=(m=e.proudlyDisplayMuxBadge)&&m}"
    exportparts="${EF}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(p=e.noHotKeys)&&p}"
      target-live-window="${null!=(v=e.targetLiveWindow)&&v}"
      stream-type="${null!=(E=EE(e.streamType))&&E}"
      crossorigin="${null!=(b=e.crossOrigin)?b:""}"
      playsinline
      autoplay="${null!=(g=e.autoplay)&&g}"
      muted="${null!=(f=e.muted)&&f}"
      loop="${null!=(y=e.loop)&&y}"
      preload="${null!=(T=e.preload)&&T}"
      debug="${null!=(A=e.debug)&&A}"
      prefer-cmcd="${null!=(k=e.preferCmcd)&&k}"
      disable-tracking="${null!=(w=e.disableTracking)&&w}"
      disable-cookies="${null!=(S=e.disableCookies)&&S}"
      prefer-playback="${null!=(I=e.preferPlayback)&&I}"
      start-time="${null!=e.startTime&&e.startTime}"
      initial-bandwidth-estimate-kbps="${null!=e.initialBandwidthEstimateKbps&&e.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=e.initialEstimateSegments&&e.initialEstimateSegments}"
      min-preload-segments="${null!=e.minPreloadSegments&&e.minPreloadSegments}"
      beacon-collection-domain="${null!=(R=e.beaconCollectionDomain)&&R}"
      player-init-time="${null!=(L=e.playerInitTime)&&L}"
      player-software-name="${null!=(C=e.playerSoftwareName)&&C}"
      player-software-version="${null!=(D=e.playerSoftwareVersion)&&D}"
      env-key="${null!=(M=e.envKey)&&M}"
      custom-domain="${null!=(O=e.customDomain)&&O}"
      src="${e.src?e.src:!!e.playbackId&&au(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&au(e)}"
      cast-receiver="${null!=(x=e.castReceiver)&&x}"
      drm-token="${null!=(P=null==(N=e.tokens)?void 0:N.drm)&&P}"
      playback-token="${null!=(W=null==(U=e.tokens)?void 0:U.playback)&&W}"
      exportparts="video"
      disable-pseudo-ended="${null!=(B=e.disablePseudoEnded)&&B}"
      max-auto-resolution="${null!=(H=e.maxAutoResolution)&&H}"
      cap-rendition-to-player-size="${null!=(F=e.capRenditionToPlayerSize)&&F}"
    >
      ${e.storyboard?EU`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:EU``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(V=e.placeholder)&&V}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},EK=e=>e.charAt(0).toUpperCase()+e.slice(1),E$=(e,t=!1)=>{var i,a;if(e.muxCode){let r=EK(null!=(i=e.errorCategory)?i:"video"),n=tq(null!=(a=e.errorCategory)?a:tK.VIDEO);if(e.muxCode===t$.NETWORK_OFFLINE)return iu("Your device appears to be offline",t);if(e.muxCode===t$.NETWORK_TOKEN_EXPIRED)return iu("{category} URL has expired",t).format({category:r});if([t$.NETWORK_TOKEN_SUB_MISMATCH,t$.NETWORK_TOKEN_AUD_MISMATCH,t$.NETWORK_TOKEN_AUD_MISSING,t$.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return iu("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===t$.NETWORK_TOKEN_MISSING)return iu("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===t$.NETWORK_NOT_FOUND)return iu("{category} does not exist",t).format({category:r});if(e.muxCode===t$.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return iu("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tY.MEDIA_ERR_NETWORK)return iu("Network Error",t);if(e.code===tY.MEDIA_ERR_DECODE)return iu("Media Error",t);if(e.code===tY.MEDIA_ERR_SRC_NOT_SUPPORTED)return iu("Source Not Supported",t)}return iu("Error",t)},Eq=(e,t=!1)=>{var i,a;if(e.muxCode){let r=EK(null!=(i=e.errorCategory)?i:"video"),n=tq(null!=(a=e.errorCategory)?a:tK.VIDEO);return e.muxCode===t$.NETWORK_OFFLINE?iu("Check your internet connection and try reloading this video.",t):e.muxCode===t$.NETWORK_TOKEN_EXPIRED?iu("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===t$.NETWORK_TOKEN_SUB_MISMATCH?iu("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===t$.NETWORK_TOKEN_MALFORMED?iu("{category} URL is formatted incorrectly",t).format({category:r}):[t$.NETWORK_TOKEN_AUD_MISMATCH,t$.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?iu("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[t$.NETWORK_TOKEN_MISSING,t$.NETWORK_INVALID_URL].includes(e.muxCode)?iu("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===t$.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tY.MEDIA_ERR_NETWORK||e.code===tY.MEDIA_ERR_DECODE||(e.code,tY.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},EY=(e,t=!1)=>({title:E$(e,t).toString(),message:Eq(e,t).toString()}),EG=e=>{if(e.muxCode){if(e.muxCode===t$.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===t$.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([t$.NETWORK_TOKEN_AUD_MISMATCH,t$.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===t$.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===t$.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===t$.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===t$.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tY.MEDIA_ERR_NETWORK)return"";if(e.code===tY.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tY.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Ej=(e,t)=>{let i=EG(e);return{message:e.message,context:e.context,file:i}},EQ=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Ez=Ea.createElement("template");"innerHTML"in Ez&&(Ez.innerHTML=EQ);var EZ,EX,EJ=class extends uM{};EJ.template=null==(EX=null==(EZ=Ez.content)?void 0:EZ.children)?void 0:EX[0],Ei.customElements.get("media-theme-gerwig")||Ei.customElements.define("media-theme-gerwig",EJ);var E0={SRC:"src",POSTER:"poster"},E1={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},E2=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],E3=lg.formatErrorMessage;function E4(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}lg.formatErrorMessage=e=>{var t,i;if(e instanceof tY){let a=EY(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${iu("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return E3(e)};var E5,E9,E8,E6,E7,be,bt,bi,ba,br,bn,bs,bo,bl,bd,bu,bc,bh,bm,bp,bv,bE=Object.values(rh),bb=Object.values(E0),bg=Object.values(E1),bf="mux-player",b_={isDialogOpen:!1},by={redundant_streams:!0},bT=class extends ER{constructor(){super(),cY(this,bo),cY(this,E5),cY(this,E9,!1),cY(this,E8,{}),cY(this,E6,!0),cY(this,E7,new Eg(this,"hotkeys")),cY(this,be),cY(this,bt,()=>cj(this,bo,bc).call(this)),cY(this,bi,()=>cj(this,bo,bc).call(this)),cY(this,ba,()=>cj(this,bo,bc).call(this)),cY(this,br),cY(this,bn,{...b_,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&cj(this,bo,bu).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(Ec(this,Ea.activeElement)||e.preventDefault())}}),cY(this,bs,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tY)){let{message:e,code:t}=null!=i?i:{};i=new tY(e,t)}if(!(null!=i&&i.fatal)){E_(i),i.data&&E_(`${i.name} data:`,i.data);return}let a=Ej(i,!1);a.message&&ET(a),Ey(i),i.data&&Ey(`${i.name} data:`,i.data),cj(this,bo,bu).call(this,{isDialogOpen:!0})}),cG(this,E5,al()),this.attachShadow({mode:"open"}),cj(this,bo,bd).call(this),this.isConnected&&cj(this,bo,bl).call(this)}static get NAME(){return bf}static get VERSION(){return Em}static get observedAttributes(){var e;return[...null!=(e=ER.observedAttributes)?e:[],...bb,...bE,...bg]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){cj(this,bo,bl).call(this);let e=this.media;e&&(e.metadata=E4(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o;null==(e=cq(this,be))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",cq(this,bt)),null==(i=this.media)||i.removeEventListener("loadstart",cq(this,bi)),this.removeEventListener("error",cq(this,bs)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.removeEventListener("addtrack",cq(this,ba)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",cq(this,ba)),null==(o=cq(this,br))||o.call(this),cG(this,br,void 0),cG(this,E9,!1)}attributeChangedCallback(e,t,i){var a;switch(cj(this,bo,bl).call(this),super.attributeChangedCallback(e,t,i),e){case E1.HOTKEYS:cq(this,E7).value=i;break;case E1.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&E_(iu("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case E1.THUMBNAIL_TOKEN:if(i){let e=ir(i);if(e){let{aud:t}=e,i=iP.THUMBNAIL;t!==i&&E_(iu("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case E1.STORYBOARD_TOKEN:if(i){let e=ir(i);if(e){let{aud:t}=e,i=iP.STORYBOARD;t!==i&&E_(iu("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case E1.DRM_TOKEN:if(i){let e=ir(i);if(e){let{aud:t}=e,i=iP.DRM;t!==i&&E_(iu("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case rh.PLAYBACK_ID:null!=i&&i.includes("?token")&&Ey(iu("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case rh.STREAM_TYPE:i&&![tz.LIVE,tz.ON_DEMAND,tz.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:ET({file:"invalid-stream-type.md",message:iu("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tz.LIVE?null==this.getAttribute(E1.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break;case E1.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=Ea.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case rh.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[rh.PLAYBACK_ID,E0.SRC,E1.PLAYBACK_TOKEN].includes(e)&&t!==i&&cG(this,bn,{...cq(this,bn),...b_}),cj(this,bo,bc).call(this,{[null!=(a=Eb[e])?a:En(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(nc.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new Ei.CustomEvent(no.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(nh.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(nc.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new Ei.CustomEvent(no.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(nh.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(rh.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tJ.includes(e)?this.setAttribute(rh.PREFER_CMCD,e):E_(`Invalid value for preferCmcd. Must be one of ${tJ.join()}`):this.removeAttribute(rh.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nc.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(nc.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(E1.THEME))?e:"gerwig"}set theme(e){this.setAttribute(E1.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(E2.includes(i))continue;let a=e.getAttribute(i);t[En(i)]=""===a||a}return t}set themeProps(e){var t,i;cj(this,bo,bl).call(this);let a={...this.themeProps,...e};for(let r in a){if(E2.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(Er(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(Er(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(rh.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(rh.PLAYBACK_ID,e):this.removeAttribute(rh.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=bA(this,E0.SRC))?e:void 0:null!=(t=this.getAttribute(E0.SRC))?t:void 0}set src(e){e?this.setAttribute(E0.SRC,e):this.removeAttribute(E0.SRC)}get poster(){var e;let t=this.getAttribute(E0.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){E_("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Ep(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(E0.POSTER,e):this.removeAttribute(E0.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(E1.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(E1.STORYBOARD_SRC,e):this.removeAttribute(E1.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tz.LIVE,tz.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:Ev(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(E1.AUDIO)}set audio(e){if(!e){this.removeAttribute(E1.AUDIO);return}this.setAttribute(E1.AUDIO,"")}get hotkeys(){return cq(this,E7)}get nohotkeys(){return this.hasAttribute(E1.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(E1.NOHOTKEYS);return}this.setAttribute(E1.NOHOTKEYS,"")}get thumbnailTime(){return Es(this.getAttribute(E1.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(E1.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(E1.VIDEO_TITLE))?e:this.getAttribute(E1.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(E1.VIDEO_TITLE,e):this.removeAttribute(E1.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=bA(this,E1.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(E1.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(E1.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Ei.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(E1.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(E1.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Ei.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(E1.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(E1.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Ei.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(E1.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(E1.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(E1.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(E1.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(E1.PLAYBACK_RATES))return this.getAttribute(E1.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(E1.PLAYBACK_RATES);return}this.setAttribute(E1.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=Es(this.getAttribute(E1.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(E1.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=Es(this.getAttribute(E1.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(E1.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(E1.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(E1.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(E1.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Es(this.getAttribute(E1.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(E1.DEFAULT_DURATION):this.setAttribute(E1.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(rh.PLAYER_INIT_TIME)?Es(this.getAttribute(rh.PLAYER_INIT_TIME)):cq(this,E5)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rh.PLAYER_INIT_TIME):this.setAttribute(rh.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(rh.PLAYER_SOFTWARE_NAME))?e:bf}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(rh.PLAYER_SOFTWARE_VERSION))?e:Em}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rh.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rh.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rh.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(rh.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rh.MAX_RESOLUTION,e):this.removeAttribute(rh.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rh.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rh.MIN_RESOLUTION,e):this.removeAttribute(rh.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rh.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rh.MAX_AUTO_RESOLUTION):this.setAttribute(rh.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rh.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rh.RENDITION_ORDER,e):this.removeAttribute(rh.RENDITION_ORDER))}get programStartTime(){return Es(this.getAttribute(rh.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(rh.PROGRAM_START_TIME):this.setAttribute(rh.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return Es(this.getAttribute(rh.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(rh.PROGRAM_END_TIME):this.setAttribute(rh.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return Es(this.getAttribute(rh.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(rh.ASSET_START_TIME):this.setAttribute(rh.ASSET_START_TIME,`${e}`)}get assetEndTime(){return Es(this.getAttribute(rh.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(rh.ASSET_END_TIME):this.setAttribute(rh.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(E1.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(E1.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):by}set extraSourceParams(e){null==e?this.removeAttribute(E1.EXTRA_SOURCE_PARAMS):this.setAttribute(E1.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(rh.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rh.CUSTOM_DOMAIN,e):this.removeAttribute(rh.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=bA(this,rh.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(rh.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(E1.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(E1.NO_VOLUME_PREF,""):this.removeAttribute(E1.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(E1.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(E1.NO_MUTED_PREF,""):this.removeAttribute(E1.NO_MUTED_PREF)}get debug(){return null!=bA(this,rh.DEBUG)}set debug(e){e?this.setAttribute(rh.DEBUG,""):this.removeAttribute(rh.DEBUG)}get disableTracking(){return null!=bA(this,rh.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(rh.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=bA(this,rh.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(rh.DISABLE_COOKIES,""):this.removeAttribute(rh.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(rh.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tz.UNKNOWN}set streamType(e){this.setAttribute(rh.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(E1.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(E1.DEFAULT_STREAM_TYPE))?i:tz.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(E1.DEFAULT_STREAM_TYPE,e):this.removeAttribute(E1.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(E1.TARGET_LIVE_WINDOW)?+this.getAttribute(E1.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(E1.TARGET_LIVE_WINDOW):this.setAttribute(E1.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return Es(bA(this,rh.START_TIME))}set startTime(e){this.setAttribute(rh.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return Es(bA(this,rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(rh.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return Es(bA(this,rh.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(rh.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(rh.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return Es(bA(this,rh.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(rh.MIN_PRELOAD_SEGMENTS):this.setAttribute(rh.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(rh.PREFER_PLAYBACK);if(e===tZ.MSE||e===tZ.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tZ.MSE||e===tZ.NATIVE?this.setAttribute(rh.PREFER_PLAYBACK,e):this.removeAttribute(rh.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(cj(this,bo,bl).call(this),!this.media){Ey("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...E4(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(cj(this,bo,bl).call(this),!this.media){Ey("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(cj(this,bo,bl).call(this),!this.media){Ey("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(cj(this,bo,bl).call(this),!this.media){Ey("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(E1.PLAYBACK_TOKEN),t=this.getAttribute(E1.DRM_TOKEN),i=this.getAttribute(E1.THUMBNAIL_TOKEN),a=this.getAttribute(E1.STORYBOARD_TOKEN);return{...cq(this,E8),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){cG(this,E8,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(E1.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(E1.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(E1.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(E1.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(E1.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(E1.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(E1.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(E1.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return iy(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(E1.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(E1.CAST_RECEIVER,e):this.removeAttribute(E1.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){Ey("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(E1.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(E1.NO_TOOLTIPS);return}this.setAttribute(E1.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(E1.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(E1.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(E1.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){Ey("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=e}};function bA(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}E5=new WeakMap,E9=new WeakMap,E8=new WeakMap,E6=new WeakMap,E7=new WeakMap,be=new WeakMap,bt=new WeakMap,bi=new WeakMap,ba=new WeakMap,br=new WeakMap,bn=new WeakMap,bs=new WeakMap,bo=new WeakSet,bl=function(){var e,t,i,a;if(!cq(this,E9)){cG(this,E9,!0),cj(this,bo,bc).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Ei.HTMLElement))throw""}catch{Ey("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Ey("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof oc))throw""}catch{Ey("<media-controller> failed to upgrade!")}cj(this,bo,bh).call(this),cj(this,bo,bm).call(this),cj(this,bo,bp).call(this),cG(this,E6,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sE.USER_INACTIVE))||t),cj(this,bo,bv).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",cq(this,bt)),null==(a=this.media)||a.addEventListener("loadstart",cq(this,bi))}},bd=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},bu=function(e){Object.assign(cq(this,bn),e),cj(this,bo,bc).call(this)},bc=function(e={}){var t,i,a,r,n;let s;(function(e,t){e.renderInto(t)})(EB((t={...cq(this,bn),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(E1.STORYBOARD_SRC),fullscreenElement:this.getAttribute(E1.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Ei.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(E1.NOHOTKEYS),hotKeys:this.getAttribute(E1.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(rh.TARGET_LIVE_WINDOW),streamType:EE(this.getAttribute(rh.STREAM_TYPE)),primaryColor:this.getAttribute(E1.PRIMARY_COLOR),secondaryColor:this.getAttribute(E1.SECONDARY_COLOR),accentColor:this.getAttribute(E1.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(s=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(s).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(E1.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(rh.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(E1.TITLE),videoTitle:null!=(r=this.getAttribute(E1.VIDEO_TITLE))?r:this.getAttribute(E1.TITLE),novolumepref:this.hasAttribute(E1.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(E1.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(E1.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(E1.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},bh=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(E2.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};cG(this,be,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),cq(this,be).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},bm=function(){this.addEventListener("error",cq(this,bs)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tY))return e;let r=Ej(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},bp=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",cq(this,ba)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",cq(this,ba))},bv=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tz.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tz.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sE.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,cq(this,E6))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(sE.USER_INACTIVE))||t;cq(this,E6)!==a&&(cG(this,E6,a),n(i,cq(this,E6)))};this.addEventListener("userinactivechange",l),cG(this,br,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var bk=e=>{throw TypeError(e)},bw=(e,t,i)=>t.has(e)||bk("Cannot "+i),bS=(e,t,i)=>(bw(e,t,"read from private field"),i?i.call(e):t.get(e)),bI=(e,t,i)=>t.has(e)?bk("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bR=(e,t,i,a)=>(bw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bL=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends bL{}globalThis.DocumentFragment=e}var bC,bD=class extends bL{},bM=class{constructor(e,t={}){bI(this,bC),bR(this,bC,null==t?void 0:t.detail)}get detail(){return bS(this,bC)}initCustomEvent(){}};bC=new WeakMap;var bO={document:{createElement:function(e,t){return new bD}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(bD)},CustomEvent:bM,EventTarget:bL,HTMLElement:bD,HTMLVideoElement:class extends bL{}},bx="undefined"==typeof window||void 0===globalThis.customElements,bN=bx?bO:globalThis;bx&&bO.document,bN.customElements.get("mux-player")||(bN.customElements.define("mux-player",bT),bN.MuxPlayerElement=bT);var bP=parseInt(l.version)>=19,bU={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},bW=e=>null==e,bB=(e,t)=>!bW(t)&&e in t,bH=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),bF=(e,t)=>{if(!(!bP&&"boolean"==typeof t&&!t)){if(bB(e,bU))return bU[e];if(void 0!==t)return/[A-Z]/.test(e)?bH(e):e}},bV=(e,t)=>bP||"boolean"!=typeof e?e:"",bK=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,...i}=e;return Object.entries(i).reduce((e,t)=>{let[i,a]=t,r=bF(i,a);if(!r)return e;let n=bV(a,i);return e[r]=n,e},{})};function b$(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var bq=Object.prototype.hasOwnProperty,bY=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!bq.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},bG=(e,t,i)=>!bY(t,e[i]),bj=(e,t,i)=>{e[i]=t},bQ=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:bj,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:bG;return(0,l.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},bz=(()=>{try{return"3.13.0"}catch(e){}return"UNKNOWN"})(),bZ=(e,t,i)=>(0,l.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),bX=l.forwardRef((e,t)=>{let{children:i,...a}=e;return l.createElement("mux-player",{suppressHydrationWarning:!0,...bK(a),ref:t},i)}),bJ=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:E,onTimeUpdate:b,onPause:g,onSeeking:f,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:L,paused:C,playbackId:D,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...W}=t;return bQ("tokens",L,e),bQ("playbackId",D,e),bQ("playbackRates",M,e),bQ("metadata",R,e),bQ("extraSourceParams",N,e),bQ("_hlsConfig",U,e),bQ("themeProps",x,e),bQ("castCustomData",P,e),bQ("paused",C,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&bG(e,t,i)),bQ("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),bZ("abort",e,i),bZ("canplay",e,a),bZ("canplaythrough",e,r),bZ("emptied",e,n),bZ("loadstart",e,s),bZ("loadeddata",e,o),bZ("loadedmetadata",e,l),bZ("progress",e,d),bZ("durationchange",e,u),bZ("volumechange",e,c),bZ("ratechange",e,h),bZ("resize",e,m),bZ("waiting",e,p),bZ("play",e,v),bZ("playing",e,E),bZ("timeupdate",e,b),bZ("pause",e,g),bZ("seeking",e,f),bZ("seeked",e,y),bZ("stalled",e,T),bZ("suspend",e,A),bZ("ended",e,k),bZ("error",e,w),bZ("cuepointchange",e,S),bZ("chapterchange",e,I),[W]},b0=l.forwardRef((e,t)=>{var i;let a=(0,l.useRef)(null),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return l.useCallback(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let i=!1,a=t.map(t=>{let a=b$(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():b$(t[e],null)}}}}(...t),t)}(a,t),[n]=bJ(a,e),[s]=(0,l.useState)(null!=(i=e.playerInitTime)?i:al());return l.createElement(bX,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:bz,playerInitTime:s,...n})});function b1(e){let t,i;let a=(0,o.c)(3),{playbackId:r}=e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},a[0]=t):t=a[0],a[1]!==r?(i=(0,s.jsx)(b0,{theme:"sutro",playbackId:r,autoPlay:!1,loop:!1,style:t}),a[1]=r,a[2]=i):i=a[2],i}}}]);