(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(615),t.b),l=a()(r()),p=s()(d);l.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\np {\n  font-size: 1.3rem;\n  color: white;\n}\n\nbody {\n  background-color: black;\n}\n.header {\n  z-index: 0;\n  position: relative;\n  color: greenyellow;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: skewY(50deg);\n  background-color: #354467;\n}\n\n.About-me {\n  margin: 20px;\n  transform: skewY(-50deg);\n  width: 280px;\n  height: 372px;\n\n  background-color: transparent;\n  perspective: 1000px;\n}\n\n.About-me-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.About-me:hover .About-me-inner {\n  transform: rotateY(180deg);\n}\n\n.About-me-front,\n.About-me-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.About-me-front {\n  box-shadow: 0 0 10px 4px #b0aeae;\n  min-width: 280px;\n  background-size: contain;\n  background-image: url(${p});\n  background-color: #acaaaa;\n  color: black;\n}\n\n.About-me-back {\n  box-shadow: 0 0 10px 4px #b0aeae;\n  background-color: rgb(22, 22, 22);\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.About-me-back p {\n  margin-top: 8px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.projects {\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 130px;\n}\n\n.footer {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  background-color: #354467;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-info p {\n  text-align: center;\n  font-size: 1.3rem;\n  margin: 10px;\n}\n\n.contact-info {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  border: 1px solid black;\n  background-color: rgb(22, 22, 22);\n  color: #536ba2;\n  transition: transform 1s;\n  box-shadow: 0 0 10px 4px #b0aeae;\n}\n\n.project-card img {\n  width: 100%;\n}\n\n.project-card-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  text-align: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.project-card-container p {\n  margin-bottom: 10px;\n}\n\n.lines {\n  z-index: -2;\n  position: absolute;\n  width: 5px;\n  top: 65%;\n}\n\n.progress-bar {\n  background: #071708;\n  height: 0%;\n  box-shadow: 0 0 10px 4px #536ba2;\n}\n\n#no1 {\n  right: 50%;\n}\n\n#no2 {\n  transform: skewY(-50deg);\n  right: 25%;\n}\n\n#no3 {\n  right: 75%;\n  transform: skewY(50deg);\n}\n\n.active {\n  transform: scale(1.004);\n  box-shadow: 0 0 10px 4px #536ba2;\n}\n\nh1 {\n  z-index: 2;\n  color: #cfcfcf;\n  text-shadow: #000000 1px 0 15px;\n  margin-bottom: 10px;\n}\n\n.About-me-back h1 {\n  color: #536ba2;\n}\n\nh2 {\n  font-size: 1.7rem;\n  text-shadow: #071708 1px 0 10px;\n  margin-bottom: 5px;\n}\n\n.About-me-front h3 {\n  margin-top: 0;\n}\n\nh3 {\n  margin-top: 3rem;\n  font-size: 1.4rem;\n}\n\nsvg {\n  margin: 0 5px;\n}\n\na {\n  text-decoration: none;\n}\n\n#card a:last-child svg {\n  fill: white;\n  border-radius: 4px;\n  background: -moz-linear-gradient(\n    45deg,\n    #f09433 0%,\n    #e6683c 25%,\n    #dc2743 50%,\n    #cc2366 75%,\n    #bc1888 100%\n  );\n  background: -webkit-linear-gradient(\n    45deg,\n    #f09433 0%,\n    #e6683c 25%,\n    #dc2743 50%,\n    #cc2366 75%,\n    #bc1888 100%\n  );\n  background: linear-gradient(\n    45deg,\n    #f09433 0%,\n    #e6683c 25%,\n    #dc2743 50%,\n    #cc2366 75%,\n    #bc1888 100%\n  );\n}\n\n.icons {\n  position: absolute;\n  bottom: 0px;\n  right: 5px;\n}\n\n#card {\n  bottom: 10px;\n  right: calc(50% - 53px);\n}\n\nh1,\nh2,\nh3 {\n  font-family: "Times New Roman", Times, serif;\n}\n\np {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na svg {\n  fill: white;\n  margin-top: 10px;\n}\n\n.contact-info a {\n  display: flex;\n  text-decoration: underline;\n  color: white;\n}\n\n.contact-info a + a > p {\n  font-size: 1rem;\n}\n\nh1 span {\n  margin-top: 15px;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  animation: bounce 0.8s ease infinite alternate;\n}\n@keyframes bounce {\n  30%,\n  100% {\n    top: -4px;\n  }\n}\nh1 span:nth-child(2) {\n  animation-delay: 0.1s;\n}\nh1 span:nth-child(3) {\n  animation-delay: 0.2s;\n}\nh1 span:nth-child(4) {\n  animation-delay: 0.3s;\n}\nh1 span:nth-child(5) {\n  animation-delay: 0.4s;\n}\nh1 span:nth-child(6) {\n  animation-delay: 0.5s;\n}\nh1 span:nth-child(7) {\n  animation-delay: 0.6s;\n}\nh1 span:nth-child(8) {\n  animation-delay: 0.7s;\n}\nh1 span:nth-child(9) {\n  animation-delay: 0.8s;\n}\n@media screen and (min-width: 500px) {\n  .lines,\n  .progress-bar {\n    visibility: hidden;\n    display: none;\n  }\n\n  .About-me {\n    margin: 20px;\n    width: 550px;\n    height: 350px;\n  }\n  .About-me-front {\n    background-size: cover;\n    background-position: 0 -100px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  #card {  right: calc(50% - 80px);}\n  #card svg {\n    width: 40px;\n    height: 40px;\n  }\n  .projects {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n  .project-card {\n    width: 40%;\n  }\n  .lines,\n  .progress-bar {\n    visibility: hidden;\n    display: none;\n  }\n  body {\n    height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: space-between;\n  }\n  .About-me {\n    margin: 20px;\n    width: 648px;\n    height: 400px;\n    transform: skewY(-20deg);\n  }\n  .About-me-front {\n    background-size: cover;\n    background-position: 0 -180px;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n  .header {\n    transform: skewY(20deg);\n  }\n\n  h3 {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1440px) {\n  .project-card {\n    width: 15%;\n  }\n}\n`,""]);const u=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},615:(n,e,t)=>{n.exports=t.p+"a40828159882078800be.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),m=t(208),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=t.p+"470cad3f04500d831958.png",g=t.p+"881cc6885ec6513caaee.png",b=t.p+"5d11a9ce5ca3f3d593c5.png",x=t.p+"1b23b1cd877c193c5bf8.png",y=t.p+"d330668082bcdd09f4ba.png",v=[...document.querySelectorAll(".project-card")],w=new Image,k=new Image,A=new Image,j=new Image,E=new Image;w.src=h,k.src=g,A.src=x,j.src=y,E.src=b,v[0].prepend(w),v[2].prepend(A),v[3].prepend(j);let S=document.body,T=document.documentElement,z=Math.max(S.scrollHeight,S.offsetHeight,T.clientHeight,T.scrollHeight,T.offsetHeight),I=new IntersectionObserver((n=>{n.forEach((n=>{let e=n.target;n.isIntersecting?1===e.classList.length&&e.classList.add("active"):e.classList.remove("active")}))}),{root:null,rootMargin:"5px",threshold:.9});("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&(v.forEach((n=>{I.observe(n)})),document.querySelector(".About-me-front").addEventListener("click",(n=>{document.querySelector(".About-me-inner").style.transform="rotateY(180deg)"})),document.querySelector(".About-me-back").addEventListener("click",(n=>{document.querySelector(".About-me-inner").style.transform="rotateY(0deg)"}))),window.innerWidth<1024?v[1].prepend(k):v[1].prepend(E),[...document.querySelectorAll(".lines")].forEach((n=>{n.style.height=z+"px"})),window.onscroll=function(){var n;n=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,[...document.querySelectorAll(".progress-bar")].forEach((e=>{e.style.height=n+"%"}))}})()})();