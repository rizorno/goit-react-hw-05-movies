"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[796],{222:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(439),a=n(791),o="go-up_btn-go-up__gfDv5",c=n(184),s=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=window.scrollY||document.documentElement.scrollTop;(0,a.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY||document.documentElement.scrollTop;s(e)}))}),[n]);return u>400?(0,c.jsx)("button",{className:o,title:"Go to up",onClick:function(){window.pageYOffset>0&&window.scrollTo({top:0,left:0,behavior:"smooth"})}}):(0,c.jsx)(c.Fragment,{})}},746:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87),a=n(689),o=n(399),c="movie-item_content__item__Pot9i",s="movie-item_content__img__UkKVh",u="movie-item_box-description__PJTYq",i="movie-item_content__title__yOXn8",p="movie-item_content__text__lR+OK",l="movie-item_content__popularity__pSiNG",f=n(184),m=function(e){var t=e.moviesList,n=(0,a.TH)(),m=t.map((function(e){var t,a=e.poster_path,m=e.title,d=e.vote_average,v=e.genre_ids,h=e.release_date,_=e.genres,g=e.id;return _&&(t=(0,o.zD)("genres").map((function(e){return e.name})).join(", ")),v&&(t=(0,o.zD)("genres").filter((function(e){var t=e.id;return v.includes(t)})).map((function(e){return e.name})).join(", ")),(0,f.jsx)("li",{className:c,"data-id":g,children:(0,f.jsxs)(r.rU,{to:"/movies/".concat(g),state:{from:n},children:[(0,f.jsx)("img",{className:s,"data-id":g,src:a?"https://image.tmdb.org/t/p/original/".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png",alt:m}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h2",{className:i,children:m}),(0,f.jsxs)("p",{className:p,children:[t," | ",h.slice(0,4)]}),(0,f.jsx)("p",{className:l,children:d.toFixed(1)})]})]})},g)}));return(0,f.jsx)(f.Fragment,{children:m})}},399:function(e,t,n){n.d(t,{a1:function(){return r},zD:function(){return a}});var r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(r){console.error("Set state error: ",r.message)}},a=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(n){console.error("Get state error: ",n.message)}}},796:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(433),a=n(861),o=n(439),c=n(757),s=n.n(c),u=n(791),i=n(689),p="home",l="trending",f="top",m=n(399),d=n(245),v=n(746),h=n(222),_=n(742),g="home_box-btn-home__2h-F3",x="home_header-btn-home__AOQ0C",w="home_header-btn-home--current__wUns0",b="home_content__FNxFL",j="home_container__H4r93",k="home_content__list__jeC64",Z=n(184),N=function(){(0,i.TH)();var e=(0,u.useState)([]),t=(0,o.Z)(e,2),n=t[0],c=t[1],N=(0,u.useState)(1),y=(0,o.Z)(N,1)[0],S=(0,u.useState)(p),F=(0,o.Z)(S,2),C=F[0],L=F[1];(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_.Loading.pulse({svgColor:"orange"}),e.next=4,(0,d.Hg)({page:y,adult:!1});case 4:return t=e.sent,e.next=7,(0,d.JZ)();case 7:return n=e.sent,c((function(e){return(0,r.Z)(t.results)})),(0,m.a1)("genres",n.genres),_.Loading.remove(),e.abrupt("return",t);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();C!==p&&C!==l||e()}),[C,y]),(0,u.useEffect)((function(){c([]);var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_.Loading.pulse({svgColor:"orange"}),e.next=4,(0,d.vF)({page:y});case 4:return t=e.sent,c((function(e){return(0,r.Z)(t.results)})),_.Loading.remove(),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();C===f&&e()}),[C,y]);return(0,Z.jsxs)("main",{children:[(0,Z.jsxs)("div",{className:g,children:[(0,Z.jsx)("button",{name:"trending",onClick:function(){L(l)},className:C===l||C===p?w:x,children:"Trending today"}),(0,Z.jsx)("button",{name:"top",onClick:function(){L(f)},className:C===f?w:x,children:"Top rated"})]}),(0,Z.jsx)("div",{className:b,children:(0,Z.jsx)("div",{className:j,children:(0,Z.jsx)("ul",{className:k,children:(0,Z.jsx)(v.Z,{moviesList:n})})})}),n.length>0?(0,Z.jsx)(h.Z,{}):(0,Z.jsx)(Z.Fragment,{})]})}},245:function(e,t,n){n.d(t,{FO:function(){return l},Hg:function(){return u},IQ:function(){return f},JZ:function(){return s},Jh:function(){return m},e8:function(){return p},vF:function(){return i},zR:function(){return d}});var r=n(861),a=n(757),o=n.n(a),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"bc23d88e8c379b88dcc9e69c75bc8f78",language:"en-US"}}),s=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("genre/movie/list",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/top_rated",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/videos"),{params:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=796.04ddb0ea.chunk.js.map