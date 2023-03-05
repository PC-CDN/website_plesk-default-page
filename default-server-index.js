!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="https://pdw-content.c-pfeiffer.de/",r(r.s=0)}([function(n,e,r){"use strict";r.r(e);var t=r(1),o=r.n(t),i=r(2),a=r.n(i),s=r(14),l=r.n(s);document.addEventListener("DOMContentLoaded",(function(){document.write(o.a.render(a.a,{public_path:"https://pdw-content.c-pfeiffer.de/",domain_page:!1,domain_name:location.hostname,domain_link:location.protocol+"//"+location.hostname,plesk_login:"https://"+location.hostname+("https:"===location.protocol?":8443":""),styles:l.a}))}))},function(n,e,r){n.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var n=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===n.call(e)};function r(n){return"function"==typeof n}function t(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(n,e){return null!=n&&"object"==typeof n&&e in n}var i=RegExp.prototype.test,a=/\S/;function s(n){return!function(n,e){return i.call(n,e)}(a,n)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},p=/\s*/,c=/\s+/,d=/\s*=/,u=/\s*\}/,f=/#|\^|\/|>|\{|&|=|!/;function h(n){this.string=n,this.tail=n,this.pos=0}function g(n,e){this.view=n,this.cache={".":this.view},this.parent=e}function m(){this.cache={}}h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(n){var e=this.tail.match(n);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},h.prototype.scanUntil=function(n){var e,r=this.tail.search(n);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},g.prototype.push=function(n){return new g(n,this)},g.prototype.lookup=function(n){var e,t,i,a=this.cache;if(a.hasOwnProperty(n))e=a[n];else{for(var s,l,p,c=this,d=!1;c;){if(n.indexOf(".")>0)for(s=c.view,l=n.split("."),p=0;null!=s&&p<l.length;)p===l.length-1&&(d=o(s,l[p])||(t=s,i=l[p],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(i))),s=s[l[p++]];else s=c.view[n],d=o(c.view,n);if(d){e=s;break}c=c.parent}a[n]=e}return r(e)&&(e=e.call(this.view)),e},m.prototype.clearCache=function(){this.cache={}},m.prototype.parse=function(n,r){var o=this.cache,i=n+":"+(r||b.tags).join(":"),a=o[i];return null==a&&(a=o[i]=function(n,r){if(!n)return[];var o,i,a,l=!1,g=[],m=[],x=[],w=!1,_=!1,v="",k=0;function y(){if(w&&!_)for(;x.length;)delete m[x.pop()];else x=[];w=!1,_=!1}function P(n){if("string"==typeof n&&(n=n.split(c,2)),!e(n)||2!==n.length)throw new Error("Invalid tags: "+n);o=new RegExp(t(n[0])+"\\s*"),i=new RegExp("\\s*"+t(n[1])),a=new RegExp("\\s*"+t("}"+n[1]))}P(r||b.tags);for(var j,z,U,S,L,O,T=new h(n);!T.eos();){if(j=T.pos,U=T.scanUntil(o))for(var C=0,E=U.length;C<E;++C)s(S=U.charAt(C))?(x.push(m.length),v+=S):(_=!0,l=!0,v+=" "),m.push(["text",S,j,j+1]),j+=1,"\n"===S&&(y(),v="",k=0,l=!1);if(!T.scan(o))break;if(w=!0,z=T.scan(f)||"name",T.scan(p),"="===z?(U=T.scanUntil(d),T.scan(d),T.scanUntil(i)):"{"===z?(U=T.scanUntil(a),T.scan(u),T.scanUntil(i),z="&"):U=T.scanUntil(i),!T.scan(i))throw new Error("Unclosed tag at "+T.pos);if(L=">"==z?[z,U,j,T.pos,v,k,l]:[z,U,j,T.pos],k++,m.push(L),"#"===z||"^"===z)g.push(L);else if("/"===z){if(!(O=g.pop()))throw new Error('Unopened section "'+U+'" at '+j);if(O[1]!==U)throw new Error('Unclosed section "'+O[1]+'" at '+j)}else"name"===z||"{"===z||"&"===z?_=!0:"="===z&&P(U)}if(y(),O=g.pop())throw new Error('Unclosed section "'+O[1]+'" at '+T.pos);return function(n){for(var e,r=[],t=r,o=[],i=0,a=n.length;i<a;++i)switch((e=n[i])[0]){case"#":case"^":t.push(e),o.push(e),t=e[4]=[];break;case"/":o.pop()[5]=e[2],t=o.length>0?o[o.length-1][4]:r;break;default:t.push(e)}return r}(function(n){for(var e,r,t=[],o=0,i=n.length;o<i;++o)(e=n[o])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(t.push(e),r=e));return t}(m))}(n,r)),a},m.prototype.render=function(n,e,r,t){var o=this.parse(n,t),i=e instanceof g?e:new g(e,void 0);return this.renderTokens(o,i,r,n,t)},m.prototype.renderTokens=function(n,e,r,t,o){for(var i,a,s,l="",p=0,c=n.length;p<c;++p)s=void 0,"#"===(a=(i=n[p])[0])?s=this.renderSection(i,e,r,t):"^"===a?s=this.renderInverted(i,e,r,t):">"===a?s=this.renderPartial(i,e,r,o):"&"===a?s=this.unescapedValue(i,e):"name"===a?s=this.escapedValue(i,e):"text"===a&&(s=this.rawValue(i)),void 0!==s&&(l+=s);return l},m.prototype.renderSection=function(n,t,o,i){var a=this,s="",l=t.lookup(n[1]);if(l){if(e(l))for(var p=0,c=l.length;p<c;++p)s+=this.renderTokens(n[4],t.push(l[p]),o,i);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)s+=this.renderTokens(n[4],t.push(l),o,i);else if(r(l)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(l=l.call(t.view,i.slice(n[3],n[5]),(function(n){return a.render(n,t,o)})))&&(s+=l)}else s+=this.renderTokens(n[4],t,o,i);return s}},m.prototype.renderInverted=function(n,r,t,o){var i=r.lookup(n[1]);if(!i||e(i)&&0===i.length)return this.renderTokens(n[4],r,t,o)},m.prototype.indentPartial=function(n,e,r){for(var t=e.replace(/[^ \t]/g,""),o=n.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=t+o[i]);return o.join("\n")},m.prototype.renderPartial=function(n,e,t,o){if(t){var i=r(t)?t(n[1]):t[n[1]];if(null!=i){var a=n[6],s=n[5],l=n[4],p=i;return 0==s&&l&&(p=this.indentPartial(i,l,a)),this.renderTokens(this.parse(p,o),e,t,p)}}},m.prototype.unescapedValue=function(n,e){var r=e.lookup(n[1]);if(null!=r)return r},m.prototype.escapedValue=function(n,e){var r=e.lookup(n[1]);if(null!=r)return b.escape(r)},m.prototype.rawValue=function(n){return n[1]};var b={name:"mustache.js",version:"3.2.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},x=new m;return b.clearCache=function(){return x.clearCache()},b.parse=function(n,e){return x.parse(n,e)},b.render=function(n,r,t,o){if("string"!=typeof n)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(i=n)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return x.render(n,r,t,o)},b.to_html=function(n,e,t,o){var i=b.render(n,e,t);if(!r(o))return i;o(i)},b.escape=function(n){return String(n).replace(/[&<>"'`=\/]/g,(function(n){return l[n]}))},b.Scanner=h,b.Context=g,b.Writer=m,b}()},function(n,e,r){n.exports='<!doctype html> <html lang=en> <head> <meta charset=utf-8> {{#domain_page}} <title>Domain Default page | {{domain_name}}</title> {{/domain_page}} {{^domain_page}} <title>Web Server\'s Default Page | {{domain_name}}</title> {{/domain_page}} <link rel=apple-touch-icon sizes=57x57 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-57x57.png><link rel=apple-touch-icon sizes=60x60 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-60x60.png><link rel=apple-touch-icon sizes=72x72 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-72x72.png><link rel=apple-touch-icon sizes=76x76 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-76x76.png><link rel=apple-touch-icon sizes=114x114 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-114x114.png><link rel=apple-touch-icon sizes=120x120 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-120x120.png><link rel=apple-touch-icon sizes=144x144 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-144x144.png><link rel=apple-touch-icon sizes=152x152 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-152x152.png><link rel=apple-touch-icon sizes=180x180 href=https://www.c-pfeiffer.de/assets/favicon/apple-icon-180x180.png><link rel=icon type=image/png sizes=192x192  href=https://www.c-pfeiffer.de/assets/favicon/android-icon-192x192.png><link rel=icon type=image/png sizes=32x32 href=https://www.c-pfeiffer.de/assets/favicon/favicon-32x32.png><link rel=icon type=image/png sizes=96x96 href=https://www.c-pfeiffer.de/assets/favicon/favicon-96x96.png><link rel=icon type=image/png sizes=16x16 href=https://www.c-pfeiffer.de/assets/favicon/favicon-16x16.png><link rel=manifest href=https://www.c-pfeiffer.de/assets/favicon/manifest.json><meta name=msapplication-TileColor content=#ffffff><meta name=msapplication-TileImage content=https://www.c-pfeiffer.de/assets/favicon/ms-icon-144x144.png><meta name=theme-color content=#ffffff><link rel=icon href=https://www.c-pfeiffer.de/assets/favicon/favicon.ico type=image/x-icon /><link rel=shortcut icon href=https://www.c-pfeiffer.de/assets/favicon/favicon.ico type=image/x-icon /><meta name=description content=Web Servers Default Page | {{domain_name}}/> <meta name=copyright content="Copyright 1999-2020. Plesk International GmbH. All rights reserved."> <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1"> <meta name=viewport content="width=device-width,initial-scale=1"> <link rel="shortcut icon" href='+r(3)+"> <link rel=preload href="+r(4)+" as=font type=font/woff2 crossorigin> <style type=text/css> {{&styles}} </style> </head> <body> <div class=page> <header class=header> <div class=header__inner> <div class=header__content> <a class=header__logo href=https://www.c-pfeiffer.de target=_blank data-id=logo-link> <img src="+r(5)+' width=98 height=41 alt=PC-CDN> </a> {{#domain_page}} <h1 class=header__title> This is a default webpage generated for<br> <a href="{{domain_link}}" data-id=domain-link>{{domain_name}}</a>. </h1> <div class=header__message> <p>&nbsp;</p> <ul> <li></li> <li></li> </ul> <p></p> </div> {{/domain_page}} {{^domain_page}} <h1 class=header__title>Web Server\'s Default Page</h1> <p class=header__message> <br> You see this page because there is no Web site at this address. </p> {{/domain_page}} </div> </div> </header><div class=placeholder></div> <footer class=footer> <div class=footer__inner> This page was generated by c-pfeiffer.de/PC-CDN .\r\n Template ©by Plesk </div> </footer> <script src="{{public_path}}bundle.js"><\/script> </div> </body> </html> '},function(n,e,r){n.exports=r.p+"favicon.ico"},function(n,e,r){n.exports=r.p+"fonts/lato-v16-latin-regular.woff2"},function(n,e,r){n.exports=r.p+"img/logo.svg"},function(n,e,r){n.exports=r.p+"img/question-mark-circle.svg"},function(n,e,r){n.exports=r.p+"img/try-online-demo.svg"},function(n,e,r){n.exports=r.p+"img/plesk-guides.svg"},function(n,e,r){n.exports=r.p+"img/knowlede-base.svg"},function(n,e,r){n.exports=r.p+"img/forum.svg"},function(n,e,r){n.exports=r.p+"img/developers-blog.svg"},function(n,e,r){n.exports=r.p+"img/video-guides.svg"},function(n,e,r){n.exports=r.p+"img/facebook.svg"},function(n,e,r){var t=r(15);n.exports="string"==typeof t?t:t.toString()},function(n,e,r){var t=r(16),o=r(17),i=r(4),a=r(18),s=r(19),l=r(20),p=r(21),c=r(22),d=r(23);e=t(!1);var u=o(i),f=o(a),h=o(s),g=o(l),m=o(p),b=o(c),x=o(d);e.push([n.i,"/* Copyright 1999-2020. Plesk International GmbH. All rights reserved. */\r\n\r\n@font-face {\r\n    font-family: \"Lato\";\r\n    font-display: swap;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Lato Regular'), local('Lato-Regular'), url("+u+') format("woff2"),\r\n    url('+f+") format(\"woff\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Lato\";\r\n    font-display: swap;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Lato Bold'), local('Lato-Bold'), url("+h+') format("woff2"),\r\n    url('+g+') format("woff");\r\n}\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    font-size: 10px;\r\n    -webkit-tap-highlight-color: transparent;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    margin: 0;\r\n    min-width: 280px;\r\n    min-height: 100vh;\r\n    font-size: 14px;\r\n    line-height: 1.714em;\r\n    font-family: "Lato", sans-serif;\r\n    color: #222;\r\n    word-wrap: break-word;\r\n    background-color: #f3f3f3;\r\n}\r\n\r\n.page {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\na {\r\n    color: #03ade4;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    transition: 0.25s ease-in-out;\r\n}\r\n\r\na:active,\r\na:hover {\r\n    outline: none;\r\n}\r\n\r\na:hover {\r\n    color: #259ccc;\r\n}\r\n\r\np,\r\nul {\r\n    margin: 0 0 16px;\r\n}\r\n\r\n.header {\r\n    background-color: #374758;\r\n    background-image: url('+m+');\r\n}\r\n\r\n.header__content {\r\n    max-width: 960px;\r\n    margin: auto;\r\n    padding: 20px 20px 30px;\r\n}\r\n\r\n.header__title {\r\n    margin: 12px 0;\r\n    font-size: 28px;\r\n    line-height: 1.286em;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.header__message {\r\n    position: relative;\r\n    z-index: 1;\r\n    margin: 0 0 30px;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.header__message p,\r\n.header__message ul {\r\n    margin-bottom: 0;\r\n}\r\n.placeholder {\r\n background-image: linear-gradient(to bottom, #374758, #5b6675, #808693, #a6a9b2, #cccdd2, #cccdd2, #cccdd2, #cccdd2, #a6a9b2, #808693, #5b6675, #374758);\r\n height:100vh;\r\n }.note {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 12px;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\r\n    border-radius: 4px;\r\n}\r\n\r\n.note:after {\r\n    content: "";\r\n    position: absolute;\r\n    top: -76px;\r\n    right: 32%;\r\n    width: 72px;\r\n    height: 143px;\r\n    background: url('+b+") no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.note__link {\r\n    display: inline-flex;\r\n    align-items: flex-start;\r\n    margin-top: 4px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n}\r\n\r\n.note__icon {\r\n    margin: 2px 4px 0 0;\r\n    opacity: 0.7;\r\n}\r\n\r\n.note__link:hover .note__icon {\r\n    opacity: 1;\r\n}\r\n\r\n.note__button {\r\n    display: inline-block;\r\n    margin-left: 8px;\r\n    padding: 8px 12px 10px;\r\n    border-radius: 4px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    background-color: #53bce6;\r\n    z-index: 1;\r\n    white-space: nowrap;\r\n}\r\n\r\n.note__message {\r\n    flex: 1;\r\n    z-index: 1;\r\n}\r\n\r\n.note__button:hover {\r\n    color: rgba(255, 255, 255, 0.9);\r\n    background-color: #03ade4;\r\n}\r\n\r\n@media (max-width: 769px) {\r\n    .header__title br {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .header__inner {\r\n        max-width: 1280px;\r\n        margin: auto;\r\n        background: url("+x+") 100% 0 no-repeat;\r\n        background-size: 499px 420px;\r\n    }\r\n\r\n    .header__content {\r\n        padding: 40px 20px;\r\n    }\r\n\r\n    .header__title {\r\n        margin: 50px 0 18px;\r\n    }\r\n\r\n    .header__message {\r\n        line-height: 28px;\r\n    }\r\n\r\n    .note {\r\n        padding: 18px 24px;\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .note__link {\r\n        display: inline-flex;\r\n        align-items: flex-start;\r\n        margin-top: 4px;\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .note__icon {\r\n        margin-top: 4px;\r\n    }\r\n\r\n    .note__button {\r\n        padding: 8px 30px 12px;\r\n        font-size: 20px;\r\n        line-height: 28px;\r\n    }\r\n}\r\n\r\n.content {\r\n    display: block;\r\n    flex: auto;\r\n}\r\n\r\n.content__inner {\r\n    max-width: 960px;\r\n    margin: auto;\r\n    padding: 26px 20px;\r\n}\r\n\r\n.content__title {\r\n    margin: 0 0 8px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n}\r\n\r\n.resources-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 16px 0 0;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n}\r\n\r\n.resources-list__item {\r\n    flex: 1 1 33%;\r\n    min-width: 0;\r\n    padding: 16px 0;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n\r\n.resources-list__item > a {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.resources-list__item .icon {\r\n    display: block;\r\n    margin: 0 auto 8px;\r\n    width: 48px;\r\n    height: 48px;\r\n    transition: 0.3s;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .columns {\r\n        display: flex;\r\n     background-color: #374758;\r\n   }\r\n\r\n    .columns__column {\r\n        flex: 1;\r\n        min-width: 0;\r\n}\r\n\r\n    .resources-list__item > a {\r\n        margin-left: 50px;\r\n    }\r\n}\r\n\r\n.footer {\r\n    flex: none;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n    background-color: #374758;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.footer a {\r\n    color: rgba(255, 255, 255, 0.4);\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.footer a:hover {\r\n    color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.footer__inner {\r\n    margin: auto;\r\n    padding: 20px;\r\n    max-width: 640px;\r\n    text-align: center;\r\n}\r\n\r\n.icon-button {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 13px 20px;\r\n    line-height: 20px;\r\n    border: 1px solid #53bce6;\r\n    border-radius: 4px;\r\n    background-color: #eef8fc;\r\n}\r\n\r\n.icon-button:hover {\r\n    background-color: #ddf2fb;\r\n}\r\n\r\n.icon-button__icon {\r\n    margin: -2px 8px -8px 0;\r\n}\r\n",""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,l;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t=0;t<n.length;t++){var o=[].concat(n[t]);r&&(o[2]?o[2]="".concat(r," and ").concat(o[2]):o[2]=r),e.push(o)}},e}},function(n,e,r){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,r){n.exports=r.p+"fonts/lato-v16-latin-regular.woff"},function(n,e,r){n.exports=r.p+"fonts/lato-v16-latin-700.woff2"},function(n,e,r){n.exports=r.p+"fonts/lato-v16-latin-700.woff"},function(n,e,r){n.exports=r.p+"img/header-bg.svg"},function(n,e,r){n.exports=r.p+"img/guy.png"},function(n,e,r){n.exports=r.p+"img/header-domain-page.png"}]);
