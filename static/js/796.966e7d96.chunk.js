"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[796],{746:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(87),a=n(689),c=n(399),o="movie-item_content__item__Pot9i",s="movie-item_content__img__UkKVh",u="movie-item_box-description__PJTYq",i="movie-item_content__title__yOXn8",p="movie-item_content__text__lR+OK",m="movie-item_content__popularity__pSiNG",f=n(184),l=function(e){var t=e.moviesList,n=(0,a.TH)(),l=t.map((function(e){var t,a=e.poster_path,l=e.title,v=e.vote_average,d=e.genre_ids,h=e.release_date,_=e.genres,g=e.id;return _&&(t=(0,c.zD)("genres").map((function(e){return e.name})).join(", ")),d&&(t=(0,c.zD)("genres").filter((function(e){var t=e.id;return d.includes(t)})).map((function(e){return e.name})).join(", ")),(0,f.jsx)("li",{className:o,"data-id":g,children:(0,f.jsxs)(r.rU,{to:"/"===n.pathname?"movies/".concat(g):"".concat(g),state:{from:n},children:[(0,f.jsx)("img",{className:s,"data-id":g,src:a?"https://image.tmdb.org/t/p/original/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png",alt:l}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h2",{className:i,children:l}),(0,f.jsxs)("p",{className:p,children:[t," | ",h.slice(0,4)]}),(0,f.jsx)("p",{className:m,children:v.toFixed(1)})]})]})},g)}));return(0,f.jsx)(f.Fragment,{children:l})}},399:function(e,t,n){n.d(t,{a1:function(){return r},zD:function(){return a}});var r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(r){console.error("Set state error: ",r.message)}},a=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(n){console.error("Get state error: ",n.message)}}},796:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(433),a=n(861),c=n(439),o=n(757),s=n.n(o),u=n(791),i=n(689),p="home",m="trending",f="top",l=n(399),v=n(245),d=n(746),h=n(742),_="home_box-btn-home__2h-F3",g="home_header-btn-home__AOQ0C",x="home_header-btn-home--current__wUns0",b="home_content__FNxFL",w="home_container__H4r93",k="home_content__list__jeC64",j=n(184),N=function(){(0,i.TH)();var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],o=t[1],N=(0,u.useState)(1),Z=(0,c.Z)(N,1)[0],y=(0,u.useState)(p),C=(0,c.Z)(y,2),S=C[0],F=C[1];(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.Loading.pulse({svgColor:"orange"}),e.next=4,(0,v.Hg)({page:Z,adult:!1});case 4:return t=e.sent,e.next=7,(0,v.JZ)();case 7:return n=e.sent,o((function(e){return(0,r.Z)(t.results)})),(0,l.a1)("genres",n.genres),h.Loading.remove(),e.abrupt("return",t);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();S!==p&&S!==m||e()}),[S,Z]),(0,u.useEffect)((function(){o([]);var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.Loading.pulse({svgColor:"orange"}),e.next=4,(0,v.vF)({page:Z});case 4:return t=e.sent,o((function(e){return(0,r.Z)(t.results)})),h.Loading.remove(),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();S===f&&e()}),[S,Z]);var L=function(){F(m)},T=function(){F(f)};return(0,j.jsxs)("main",{children:[(0,j.jsxs)("div",{className:_,children:[S===m||S===p?(0,j.jsx)("button",{name:"trending",onClick:L,className:x,children:"Trending today"}):(0,j.jsx)("button",{name:"trending",onClick:L,className:g,children:"Trending"}),S===f?(0,j.jsx)("button",{name:"top",onClick:T,className:x,children:"Top rated"}):(0,j.jsx)("button",{name:"top",onClick:T,className:g,children:"Top rated"})]}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)("div",{className:w,children:(0,j.jsx)("ul",{className:k,children:(0,j.jsx)(d.Z,{moviesList:n})})})})]})}},245:function(e,t,n){n.d(t,{FO:function(){return m},Hg:function(){return u},IQ:function(){return f},JZ:function(){return s},Jh:function(){return l},e8:function(){return p},vF:function(){return i},zR:function(){return v}});var r=n(861),a=n(757),c=n.n(a),o=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"bc23d88e8c379b88dcc9e69c75bc8f78",language:"en-US"}}),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("genre/movie/list",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("trending/movie/day",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/top_rated",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("search/movie",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t,"/credits"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t,"/reviews"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t,"/videos"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=796.966e7d96.chunk.js.map