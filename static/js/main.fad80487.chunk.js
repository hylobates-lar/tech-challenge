(this.webpackJsonpthrilling=this.webpackJsonpthrilling||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(86),n(54)),l=n(126),s=function(e){return r.a.createElement("div",{className:"search-bar"},r.a.createElement(l.a.Search,{placeholder:"input search text",value:e.input,onChange:e.updateInput,onSearch:e.handleSubmit,style:{width:200}}))},u=n(125),m=u.a.Meta,h=function(e){return r.a.createElement("div",{className:"articles-container"},e.articles.map((function(e){return r.a.createElement(u.a,{key:e.uri,style:{width:250},hoverable:!0,cover:r.a.createElement("img",{alt:"image",src:e.multimedia.find((function(e){return"thumbLarge"===e.format})).url})},r.a.createElement(m,{title:r.a.createElement("a",{href:e.url,target:"_blank"},e.title),description:e.byline}))})))};n(123);var f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),u=l[0],m=l[1],f=Object(a.useState)([]),d=Object(o.a)(f,2),p=d[0],v=d[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil").then((function(e){return e.json()})).then((function(e){m(e.results),v(e.results)}))};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"New York Times Science Section"),r.a.createElement(s,{input:n,updateInput:function(e){c(e.target.value)},handleSubmit:function(e,t){t.preventDefault();var a=n.toLowerCase().split(" ");v(u.filter((function(e){var t=e.title.toLowerCase(),n=e.section.toLowerCase(),r=e.byline.toLowerCase();return a.some((function(e){return!!(t.includes(e)||n.includes(e)||r.includes(e))}))})))}}),r.a.createElement(h,{articles:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,n){e.exports=n(124)},86:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.fad80487.chunk.js.map