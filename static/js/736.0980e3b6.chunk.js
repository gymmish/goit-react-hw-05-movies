"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{877:function(t,n,e){e.d(n,{Jh:function(){return d},LP:function(){return o},Pg:function(){return l},_r:function(){return m},q:function(){return s}});var r=e(5861),a=e(4687),u=e.n(a),i=e(1243),c="b30254b2dbf2d15ba793a5b6ad463809";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)).then((function(t){return t.data.results})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.data.cast}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get(" https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9736:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r,a,u=e(9439),i=e(2791),c=e(7689),o=e(877),p=e(168),s=e(3237),f=s.Z.ul(r||(r=(0,p.Z)(["\n  font-size: 1rem;\n  list-style-type: none;\n  text-align: start;\n  padding: 12px 18px;\n  margin: 0 auto;\n"]))),l=s.Z.li(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: large;\n  color: #000000;\n  display: inline-table;\n  margin-right: 20px;\n  margin-top: 20px;\n  box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);\n"]))),h=e(184),d=function(){var t=(0,c.UO)().movieId,n=(0,i.useState)([]),e=(0,u.Z)(n,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,o.Jh)(t).then((function(t){a(t)})).catch((function(){return alert("OOOPPPS")}))}),[t]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f,{children:r.length>0?r.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,h.jsxs)(l,{children:[e,":",(0,h.jsx)("p",{children:r}),(0,h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300".concat(a):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",width:"200",alt:e})]},n)})):"OOPP"})})}}}]);
//# sourceMappingURL=736.0980e3b6.chunk.js.map