"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},parser=function(){function t(t,e){var n=document.getElementsByTagName(e).innerHTML,r=t;n=r}var e,n=!0,r=function(t,e){try{var r=JSON.parse(t);r&&"object"===("undefined"==typeof r?"undefined":_typeof(r))&&o(r,i)}catch(t){return!!n&&t}},o=function(t,e,n){void 0!=t&&t.hasOwnProperty&&e(t,n)},i=function(t){var e=!0,n=!1,r=void 0;try{for(var o,i=t.items[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;console.dir(a)}}catch(t){n=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}},a=function(i,a,u){var l=new XMLHttpRequest,u=u,f="file"==a;f&&l.overrideMimeType("application/json"),l.open("GET",i,!0),l.onreadystatechange=function(){4===l.readyState&&200===l.status&&(e=this.response,f?r(e,o):o(e,t,u))},n&&(l.ontimeout=function(){console.log("The request timed out.")},l.timeout=1e3),l.send()};return{xhrObjs:function(t){e=t.items;var n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;a(l.url,"object",l.tag)}}catch(t){r=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}},xhrFile:function(t,e){a(t,"file")}}}(),HeaderModule={init:function(){var t={items:[{url:"bin/partials/header.html",tag:"header"},{url:"bin/partials/navigation.html",tag:"nav"}]};parser.xhrObjs(t)}},SkillsModule={init:function(){var t="./experience.json";parser.xhrFile(t)}};document.addEventListener("DOMContentLoaded",function(){HeaderModule.init(),SkillsModule.init()});