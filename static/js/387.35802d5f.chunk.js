"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{877:function(n,t,e){e.d(t,{Jh:function(){return d},LP:function(){return o},Pg:function(){return l},_r:function(){return m},q:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243),i="b30254b2dbf2d15ba793a5b6ad463809";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(n){return n.data.results})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.data.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(" https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a,u=e(9439),c=e(2791),i=e(7689),o=e(877),s=e(168),p=e(3237),f=p.Z.ul(r||(r=(0,s.Z)(["\n  font-size: 1rem;\n  list-style-type: none;\n  text-align: start;\n  padding: 12px 18px;\n  margin: 0 auto;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: large;\n  color: #000000;\n  margin-top: 10px;\n"]))),h=e(184),d=function(){var n=(0,i.UO)().movieId,t=(0,c.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,c.useEffect)((function(){(0,o._r)(n).then((function(n){a(n)})).catch((function(){return alert("OOOPPPS")}))}),[n]),(0,h.jsx)(h.Fragment,{children:r.length>0?(0,h.jsx)(f,{children:r.map((function(n){var t=n.author,e=n.id,r=n.content;return(0,h.jsxs)(l,{children:[t,":",(0,h.jsx)("p",{children:r})]},e)}))}):(0,h.jsx)("p",{children:"Sorry we dont have any reviews yet"})})}}}]);
//# sourceMappingURL=387.35802d5f.chunk.js.map