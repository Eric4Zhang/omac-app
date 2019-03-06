(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{381:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(34),c=t.n(o),l=t(12),i=(t(73),t(25)),s=t.n(i),m=(t(74),t(35)),u=t.n(m),d=t(51),h=t.n(d);function v(){var e=Object(l.b)("translations"),a=(e.t,e.i18n);return r.a.createElement(h.a,{className:"mt-2 bg-light my-toolbar"},r.a.createElement(u.a,{variant:"outline-success",onClick:function(){return a.changeLanguage("en")}},"English"),r.a.createElement(u.a,{variant:"outline-success",onClick:function(){return a.changeLanguage("cn")}},"\u4e2d\u6587"))}var f=t(26),g=t.n(f),E=t(19),b=t.n(E);function p(){var e=Object(l.b)("translations"),a=e.t;e.i18n;return r.a.createElement(g.a,{collapseOnSelect:!0,expand:"lg",sticky:"top",bg:"light",variant:"light",className:"my-navbar"},r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{href:"#home"},a("home")),r.a.createElement(b.a.Link,{href:"#contact"},a("about")),r.a.createElement(b.a.Link,{href:"#events"},a("worship")),r.a.createElement(b.a.Link,{href:"#About"},a("events")),r.a.createElement(b.a.Link,{href:"#contact"},a("contact")),r.a.createElement(b.a.Link,{href:"#video"},a("video")))))}var w=t(53),k=t.n(w),y=t(22),N=t.n(y),O=t(52),j=t.n(O);function A(e){var a=Object(l.b)("translations"),t=a.t;a.i18n;return r.a.createElement(s.a,{className:"App-header shadow mb-4 mx-2",id:e.id},r.a.createElement(j.a,{className:"m-1"},r.a.createElement(N.a,null,r.a.createElement(k.a,{src:".\\assets\\imgs\\omacIcon.png",rounded:!0,fluid:!0})),r.a.createElement(N.a,{xs:8,className:"p-2"},r.a.createElement("h1",{className:"my-title"},t("title")))))}var C=t(21),L=t.n(C);function x(){var e=Object(l.b)("translations"),a=e.t;e.i18n;return r.a.createElement("div",{className:"d-flex justify-content-center bg-light shadow mb-4 mx-2"},r.a.createElement(L.a,{bg:"light"},r.a.createElement(L.a.Img,{src:".\\assets\\imgs\\heaven.jpg",alt:"background picture"}),r.a.createElement(L.a.ImgOverlay,null,r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Text,{className:"blockquote"},a("verseOfDay"))))))}var S=t(56),W=t(36),R=t.n(W);function F(e){var a=Object(n.useState)([]),t=Object(S.a)(a,2),o=t[0],c=t[1];return Object(n.useEffect)(function(){fetch(e.jsonFileUrl).then(function(e){return e.json()}).then(function(e){c(e)}).catch(function(e){console.error(e)})},[]),r.a.createElement(R.a,{indicators:!1,controls:!1,className:"p-2 bg-light shadow mb-4 mx-2"},o.map(function(e){return r.a.createElement(R.a.Item,{key:e.id},r.a.createElement("img",{className:"d-block w-100",src:e.path,alt:e.caption}))}))}var H=t(27);function I(e){return r.a.createElement("footer",{className:"App-header",id:e.id},r.a.createElement(N.a,null,r.a.createElement("h4",null," ","\xa9"," 2019 Ottawa Mandarin Alliance Church"),r.a.createElement("address",{className:"address"},r.a.createElement(H.PhoneCall,null),": (613)236-7656 ",r.a.createElement("br",null),r.a.createElement(H.Mail,null),": ",r.a.createElement("a",{href:"mailto:#"},"omac.secretary@gmail.com"),r.a.createElement("br",null),r.a.createElement(H.Home,null),": 550 Codd's Rd, Ottawa, ON K1K 2G8")))}var U=t(54),B=t.n(U);function J(e){return r.a.createElement(B.a,{aspectRatio:"16by9",className:"bg-light shadow mb-4",id:e.id},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/J7rlk2RLMQc",frameBorder:"0",allowFullScreen:"allowFullScreen"}))}var M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var D=t(37);D.a.init({debug:!0,lng:"en",resources:{en:{translations:{title:"Ottawa Mandarin Alliance Church",home:"Home",about:"About",events:"Events",worship:"Worship",contact:"Contact",video:"Video",verseOfDay:"For God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have eternal life. -- John 3:16"}},cn:{translations:{title:"\u6e25\u592a\u534e\u56fd\u8bed\u5ba3\u9053\u4f1a",home:"\u9996\u9801",about:"\u95dc\u65bc\u6211\u5011",events:"\u6559\u6703\u6d3b\u52d5",worship:"\u53c3\u8207\u6559\u6703",contact:"\u806f\u7d61\u6211\u5011",video:"\u8b49\u9053\u9748\u7ce7",verseOfDay:"\u795e\u7231\u4e16\u4eba\uff0c \u751a\u81f3\u5c06\u4ed6\u7684\u72ec\u751f\u5b50\u8d50\u7ed9\u4ed6\u4eec, \u53eb\u4e00\u5207\u4fe1\u4ed6\u7684\u4e0d\u81f4\u706d\u4ea1\uff0c \u53cd\u5f97\u6c38\u751f\u3002-- \u7ea63:16"}}}});var P=D.a;c.a.render(r.a.createElement(l.a,{i18n:P},r.a.createElement(function(){var e=Object(l.b)("translations");return e.t,e.i18n,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(p,null),r.a.createElement(A,{id:"home"}),r.a.createElement(x,null),r.a.createElement(F,{jsonFileUrl:"./assets/documents/events-images.json"}),r.a.createElement(s.a,{className:"shadow mb-5"},r.a.createElement("h1",null,"\u6b22\u8fce"),r.a.createElement("p",null,"\u672c\u6559\u4f1a\u4e8e1995\u5e749\u6708\u6210\u7acb\u4e8e\u6e25\u592a\u534e\u5927\u5b66\u9644\u8fd1\uff0c\u4e3a\u6bcd\u5802\uff08\u6e25\u592a\u534e\u534e\u4eba\u5ba3\u9053\u4f1a\uff09\u9488\u5bf9\u56fd\u8bed\u53ca\u6821\u56ed\u4e8b\u5de5\u7684\u690d\u5802\u8ba1\u5212\u3002")),r.a.createElement(J,{id:"video"}),r.a.createElement(I,{id:"contact"}))},null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/omac-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/omac-app","/service-worker.js");M?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(a,e)})}}()},57:function(e,a,t){e.exports=t(381)},73:function(e,a,t){},74:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.fae1a11f.chunk.js.map